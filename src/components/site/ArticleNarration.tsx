import { useEffect, useRef, useState } from "react";
import { Play, Square } from "lucide-react";
import { startNarration } from "@/lib/play-narration";

type Status = "idle" | "loading" | "playing" | "error";

/** Yazının en üstünde duran "dinle" şeridi: sesi sayfadan ayrılmadan oynatır. */
export function ArticleNarration({ slug }: { slug: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [total, setTotal] = useState(0);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const handleRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => () => handleRef.current?.stop(), []);

  const stop = () => {
    handleRef.current?.stop();
    handleRef.current = null;
    setStatus("idle");
    setIndex(0);
  };

  const toggle = () => {
    if (status === "playing" || status === "loading") {
      stop();
      return;
    }
    setMessage("");
    setIndex(0);
    setStatus("loading");
    const handle = startNarration(slug, {
      onChunks: (count) => setTotal(count),
      onChunkStart: (i) => {
        setIndex(i + 1);
        setStatus("playing");
      },
      onDone: () => {
        handleRef.current = null;
        setStatus("idle");
        setIndex(0);
      },
    });
    handleRef.current = handle;
    handle.done.catch((error: unknown) => {
      handleRef.current = null;
      setMessage(error instanceof Error && error.message ? error.message : "Seslendirme şu anda açılmadı.");
      setStatus("error");
    });
  };

  const active = status === "playing" || status === "loading";
  const progress = total ? Math.min(100, (index / total) * 100) : 0;

  return (
    <div className="my-6 border border-black bg-black text-white">
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center gap-4 px-4 py-3 text-left"
        aria-label={active ? "Seslendirmeyi durdur" : "Yazıyı sesli dinle"}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
          {active ? (
            <Square className="size-3.5 fill-current" aria-hidden="true" />
          ) : (
            <Play className="size-4 fill-current" aria-hidden="true" />
          )}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-[13px] font-black uppercase tracking-[0.18em]">
            {status === "error" ? "Seslendirme açılamadı" : active ? "Seslendirme sürüyor" : "Yazıyı dinle"}
          </span>
          <span className="mt-1 block truncate text-[11px] uppercase tracking-[0.12em] text-white">
            {status === "error" ? message : total ? `${index} / ${total} bölüm` : "Yapay zekâ seslendirmesi"}
          </span>
        </span>
      </button>
      <div className="h-[3px] w-full bg-white/20" aria-hidden="true">
        <div className="h-full bg-white transition-[width] duration-500" style={{ width: `${active ? progress : 0}%` }} />
      </div>
    </div>
  );
}
