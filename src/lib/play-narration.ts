import { createParser } from "eventsource-parser";

const SAMPLE_RATE = 24000;
const ENDPOINT = "/api/public/narration";

export type NarrationEvents = {
  /** Toplam bölüm sayısı öğrenilince. */
  onChunks?: (total: number) => void;
  /** Bir bölümün seslendirmesi başladığında (0'dan sayar). */
  onChunkStart?: (index: number) => void;
  /** Seslendirme sonuna gelindiğinde. */
  onDone?: () => void;
};

export type NarrationHandle = {
  stop: () => void;
  done: Promise<void>;
};

function createAudioContext(): AudioContext {
  try {
    return new AudioContext({ sampleRate: SAMPLE_RATE });
  } catch {
    return new AudioContext();
  }
}

/** Cihaz farklı bir örnekleme hızı kullanıyorsa sesi bozmadan yeniden ölçekler. */
function resample(samples: Float32Array, from: number, to: number): Float32Array {
  if (from === to || samples.length === 0) return samples;
  const ratio = to / from;
  const out = new Float32Array(Math.max(1, Math.floor(samples.length * ratio)));
  for (let i = 0; i < out.length; i++) {
    const pos = i / ratio;
    const i0 = Math.floor(pos);
    const i1 = Math.min(i0 + 1, samples.length - 1);
    const frac = pos - i0;
    out[i] = samples[i0] * (1 - frac) + samples[i1] * frac;
  }
  return out;
}

/** Ham PCM (24 kHz, 16 bit, tek kanal) örneklerine çevirir; yarım kalan son baytı saklar. */
function decodePCM(pending: Uint8Array, incoming: Uint8Array) {
  const bytes = new Uint8Array(pending.length + incoming.length);
  bytes.set(pending);
  bytes.set(incoming, pending.length);
  const usable = bytes.length - (bytes.length % 2);
  const view = new DataView(bytes.buffer, bytes.byteOffset, usable);
  const samples = new Float32Array(usable / 2);
  for (let i = 0; i < samples.length; i++) samples[i] = view.getInt16(i * 2, true) / 32768;
  return { samples, pending: bytes.slice(usable) };
}

async function failureMessage(response: Response): Promise<string> {
  const raw = await response.text().catch(() => "");
  try {
    const parsed = JSON.parse(raw) as { message?: unknown; error?: unknown };
    if (typeof parsed.message === "string" && parsed.message) return parsed.message;
    if (typeof parsed.error === "string" && parsed.error) return parsed.error;
  } catch {
    /* gövde JSON değil */
  }
  return `Seslendirme istediği karşılanmadı (HTTP ${response.status}).`;
}

async function consumeSpeech(
  body: ReadableStream<Uint8Array>,
  schedule: (samples: Float32Array) => void,
  signal: AbortSignal,
): Promise<void> {
  let pending = new Uint8Array(0);
  let completed = false;
  let samplesPlayed = 0;

  const parser = createParser({
    onEvent(event) {
      const payload = JSON.parse(event.data) as { type?: string; audio?: string; error?: unknown };
      if (payload.type === "error" || payload.error) throw new Error("Seslendirme üretilemedi.");
      if (payload.type === "speech.audio.done") {
        completed = true;
        return;
      }
      if (payload.type !== "speech.audio.delta") return;
      if (completed || !payload.audio) throw new Error("Ses akışı bozuk.");
      const decoded = decodePCM(pending, Uint8Array.from(atob(payload.audio), (c) => c.charCodeAt(0)));
      pending = new Uint8Array(decoded.pending);
      samplesPlayed += decoded.samples.length;
      schedule(decoded.samples);
    },
  });

  const reader = body.getReader();
  const decoder = new TextDecoder();
  try {
    while (true) {
      const next = await reader.read();
      if (next.done) {
        const tail = decoder.decode();
        if (tail) parser.feed(tail);
        break;
      }
      parser.feed(decoder.decode(next.value, { stream: true }));
      signal.throwIfAborted();
    }
    parser.reset({ consume: true });
  } finally {
    reader.releaseLock();
  }

  if (!completed || !samplesPlayed || pending.length) throw new Error("Seslendirme eksik kaldı.");
}

async function run(slug: string, signal: AbortSignal, events: NarrationEvents): Promise<void> {
  const context = createAudioContext();
  const sources = new Set<AudioBufferSourceNode>();
  let playhead = 0;
  let playback: Promise<void> = Promise.resolve();

  const stopAll = () => {
    for (const source of sources) {
      try {
        source.stop();
      } catch {
        /* zaten durmuş */
      }
    }
  };
  signal.addEventListener("abort", stopAll, { once: true });

  const schedule = (samples: Float32Array) => {
    const out = resample(samples, SAMPLE_RATE, context.sampleRate);
    if (!out.length) return;
    const buffer = context.createBuffer(1, out.length, context.sampleRate);
    buffer.getChannelData(0).set(out);
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    sources.add(source);
    playback = new Promise<void>((resolve) => {
      source.onended = () => {
        sources.delete(source);
        resolve();
      };
    });
    // Cihaz açılışı tam bu andaki sesi yutabiliyor için küçük bir pay bırakılır.
    playhead = Math.max(playhead, context.currentTime + 0.05);
    source.start(playhead);
    playhead += buffer.duration;
  };

  try {
    if (context.state === "suspended") await context.resume();
    let index = 0;
    let total = 0;
    do {
      signal.throwIfAborted();
      events.onChunkStart?.(index);
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, index }),
        signal,
      });
      if (!response.ok || !response.body) throw new Error(await failureMessage(response));

      const reported = Number(response.headers.get("x-narration-chunks"));
      if (Number.isSafeInteger(reported) && reported > 0) {
        total = reported;
        events.onChunks?.(reported);
      }

      await consumeSpeech(response.body, schedule, signal);
      index += 1;
    } while (index < total);

    await playback;
    signal.throwIfAborted();
    events.onDone?.();
  } finally {
    signal.removeEventListener("abort", stopAll);
    stopAll();
    await context.close().catch(() => undefined);
  }
}

/** Yazıyı baştan sona sesli okumaya başlar. */
export function startNarration(slug: string, events: NarrationEvents = {}): NarrationHandle {
  const controller = new AbortController();
  const done = run(slug, controller.signal, events).catch((error: unknown) => {
    if (error instanceof Error && error.name === "AbortError") return;
    throw error;
  });
  return { stop: () => controller.abort(), done };
}
