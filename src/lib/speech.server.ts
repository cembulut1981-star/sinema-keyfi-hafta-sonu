/** Sunucu tarafında yapay zekâ seslendirme isteği hazırlar. */

export const SPEECH_MODEL = "google/gemini-3.1-flash-tts-preview";
export const SPEECH_VOICE = "Kore";
const GATEWAY_BASE = "https://ai.gateway.lovable.dev";

export type SpeechConfig = {
  baseURL: string;
  apiKey: string;
  model: string;
  format: "openai" | "gemini" | "elevenlabs";
  voice: string;
};

/** Anahtar yalnızca sunucuda okunur; yoksa null döner. */
export function speechConfigFromEnv(): SpeechConfig | null {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) return null;
  return {
    baseURL: `${GATEWAY_BASE}/v1`,
    apiKey,
    model: SPEECH_MODEL,
    format: "gemini",
    voice: SPEECH_VOICE,
  };
}

export function speechBody(config: SpeechConfig, text: string) {
  return {
    model: config.model,
    contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: config.voice } } },
    },
    stream_format: "sse",
  };
}

/** Metni seslendirir; ses parçalarını akış halinde (SSE/PCM) döndürür. */
export async function requestSpeech(config: SpeechConfig, text: string, signal?: AbortSignal) {
  return fetch(`${config.baseURL}/audio/speech`, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(speechBody(config, text)),
    ...(signal ? { signal } : {}),
  });
}
