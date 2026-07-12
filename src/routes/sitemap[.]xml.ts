import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { NEWS } from "@/data/news";
import { REVIEWS } from "@/data/reviews";
import { LISTS } from "@/data/lists";
import { MUSIC } from "@/data/music";
import { SERIES } from "@/data/series";

const BASE_URL = "https://sine-meta.com";

const CATEGORIES = ["haber", "inceleme", "liste", "muzik", "dizi"];

interface Entry {
  path: string;
  changefreq?: string;
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          ...CATEGORIES.map((c) => ({
            path: `/kategori/${c}`,
            changefreq: "daily",
            priority: "0.8",
          })),
          ...NEWS.map((n) => ({ path: `/haber/${n.slug}`, changefreq: "weekly", priority: "0.7" })),
          ...REVIEWS.map((r) => ({ path: `/inceleme/${r.slug}`, changefreq: "weekly", priority: "0.7" })),
          ...LISTS.map((l) => ({ path: `/liste/${l.slug}`, changefreq: "weekly", priority: "0.7" })),
          ...MUSIC.map((m) => ({ path: `/muzik/${m.slug}`, changefreq: "weekly", priority: "0.7" })),
          ...SERIES.map((s) => ({ path: `/dizi/${s.slug}`, changefreq: "weekly", priority: "0.7" })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
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
