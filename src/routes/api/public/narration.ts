import { createFileRoute } from "@tanstack/react-router";
import { isNarrated, narrationChunks } from "@/lib/narration";
import { requestSpeech, speechConfigFromEnv } from "@/lib/speech.server";

/**
 * Yazıyı sesli okumak için ses parçalarını üretir.
 * İstek: { slug, index }. Yanıt: ses parçalarının SSE akışı.
 */
export const Route = createFileRoute("/api/public/narration")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "İstek okunamadı." }, { status: 400 });
        }

        const body = payload as { slug?: unknown; index?: unknown };
        const slug = typeof body.slug === "string" ? body.slug : "";
        const index = body.index;

        if (!slug || !isNarrated(slug)) {
          return Response.json({ error: "Bu yazı için seslendirme yok." }, { status: 404 });
        }

        const chunks = narrationChunks(slug);
        if (!chunks) return Response.json({ error: "Seslendirilecek metin bulunamadı." }, { status: 404 });

        if (!Number.isInteger(index) || (index as number) < 0 || (index as number) >= chunks.length) {
          return Response.json({ error: "Bölüm numarası geçersiz." }, { status: 400 });
        }

        const config = speechConfigFromEnv();
        if (!config) {
          return Response.json({ error: "Seslendirme henüz kurulmadı." }, { status: 500 });
        }

        let upstream: Response;
        try {
          upstream = await requestSpeech(config, chunks[index as number], request.signal);
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            return new Response(null, { status: 499 });
          }
          console.error("Narration speech request failed:", error);
          return Response.json({ error: "Seslendirme üretilemedi." }, { status: 502 });
        }

        if (!upstream.ok) {
          const detail = await upstream.text().catch(() => "");
          console.error(`Narration speech failed: ${upstream.status} ${detail.slice(0, 300)}`);
          const status = upstream.status >= 400 && upstream.status <= 599 ? upstream.status : 502;
          return new Response(detail || JSON.stringify({ error: "Seslendirme üretilemedi." }), {
            status,
            headers: {
              "Content-Type": upstream.headers.get("content-type") ?? "application/json",
              "Cache-Control": "no-store",
            },
          });
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "Content-Type": upstream.headers.get("content-type") ?? "text/event-stream",
            "Cache-Control": "no-store",
            "X-Narration-Chunks": String(chunks.length),
          },
        });
      },
    },
  },
});
