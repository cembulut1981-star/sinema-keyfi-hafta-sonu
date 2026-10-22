import { createFileRoute } from "@tanstack/react-router";
import { authenticateCronRequest } from "@/integrations/supabase/cron-auth";
import type { Article } from "@/data/articles";

const SITE = "https://sine-meta.com";
const UTM = "?utm_source=bluesky&utm_medium=social&utm_campaign=filmsky_launch";
const LIMIT = 290;

const LINK_KEYS: Array<[keyof Article, string]> = [
  ["newsSlug", "haber"],
  ["reviewSlug", "inceleme"],
  ["listSlug", "liste"],
  ["musicSlug", "muzik"],
  ["seriesSlug", "dizi"],
];

function articleLink(a: Article): { slug: string; url: string } | null {
  for (const [key, prefix] of LINK_KEYS) {
    const slug = a[key];
    if (typeof slug === "string" && slug) {
      return { slug, url: `${SITE}/${prefix}/${slug}${UTM}` };
    }
  }
  return null;
}

const len = (s: string) => Array.from(s).length;

function trim(text: string, max: number): string {
  const chars = Array.from(text.trim());
  if (chars.length <= max) return chars.join("");
  return `${chars.slice(0, Math.max(0, max - 1)).join("").trimEnd()}…`;
}

function buildText(a: Article, url: string): string {
  const head = trim(a.title, 120);
  const tail = ` #filmsky\n\n${url}`;
  const room = LIMIT - len(head) - len(tail) - 2;
  const body = room > 40 ? `\n\n${trim(a.excerpt, room)}` : "";
  return `${head}${body}${tail}`;
}

export const Route = createFileRoute("/api/public/jobs/bluesky-share")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const authFailure = await authenticateCronRequest(request);
        if (authFailure) return authFailure;

        const { ARTICLES } = await import("@/data/articles");
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { postToBluesky } = await import("@/lib/bluesky.server");

        const { data: shared, error: historyError } = await supabaseAdmin
          .from("bluesky_shares")
          .select("slug");
        if (historyError) {
          console.error(`Bluesky share history read failed: ${historyError.message}`);
          return Response.json({ success: false, error: "history_unavailable" }, { status: 500 });
        }

        const done = new Set((shared ?? []).map((row) => row.slug));

        for (const article of ARTICLES) {
          const link = articleLink(article);
          if (!link || done.has(link.slug)) continue;

          try {
            const { uri } = await postToBluesky(buildText(article, link.url));
            const { error: insertError } = await supabaseAdmin
              .from("bluesky_shares")
              .insert({ slug: link.slug, category: article.category, uri });
            if (insertError) {
              console.error(`Bluesky share history write failed: ${insertError.message}`);
            }
            return Response.json({ success: true, slug: link.slug, uri });
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Bluesky auto-share failed for ${link.slug}: ${message}`);
            return Response.json({ success: false, error: "post_failed" }, { status: 502 });
          }
        }

        return Response.json({ success: true, skipped: true, reason: "nothing_new" });
      },
    },
  },
});
