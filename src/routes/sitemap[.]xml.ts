import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { NEWS } from "@/data/news";
import { REVIEWS } from "@/data/reviews";
import { LISTS } from "@/data/lists";
import { MUSIC } from "@/data/music";
import { SERIES } from "@/data/series";
import { extractDate } from "@/lib/seo";

const BASE_URL = "https://sine-meta.com";

const CATEGORIES = ["haberler", "incelemeler", "listeler", "diziler", "muzik"];

interface Entry {
  path: string;
  changefreq?: string;
  priority?: string;
  lastmod?: string | null;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.4" },
          { path: "/contact", changefreq: "monthly", priority: "0.4" },
          { path: "/kategori/pc-games", changefreq: "daily", priority: "0.8" },
          ...CATEGORIES.map((c) => ({
            path: `/kategori/${c}`,
            changefreq: "daily",
            priority: "0.8",
          })),
          ...NEWS.map((n) => ({ path: `/haber/${n.slug}`, changefreq: "weekly", priority: "0.7", lastmod: extractDate((n as { source?: string }).source) })),
          ...REVIEWS.map((r) => ({ path: `/inceleme/${r.slug}`, changefreq: "weekly", priority: "0.7", lastmod: extractDate((r as { source?: string }).source) })),
          ...LISTS.map((l) => ({ path: `/liste/${l.slug}`, changefreq: "weekly", priority: "0.7", lastmod: extractDate((l as { source?: string }).source) })),
          ...MUSIC.map((m) => ({ path: `/muzik/${m.slug}`, changefreq: "weekly", priority: "0.7", lastmod: extractDate((m as { source?: string }).source) })),
          ...SERIES.map((s) => ({ path: `/dizi/${s.slug}`, changefreq: "weekly", priority: "0.7", lastmod: extractDate((s as { source?: string }).source) })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
