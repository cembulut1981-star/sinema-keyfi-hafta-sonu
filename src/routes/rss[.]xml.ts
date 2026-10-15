import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { NEWS } from "@/data/news";
import { REVIEWS } from "@/data/reviews";
import { LISTS } from "@/data/lists";
import { MUSIC } from "@/data/music";
import { SERIES } from "@/data/series";
import { EDITORIAL_AUTHOR, SITE_NAME, SITE_URL, absoluteImage, extractDate } from "@/lib/seo";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

type Item = { title: string; excerpt: string; image?: string; source?: string; slug: string };

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const groups: [string, Item[]][] = [
          ["haber", NEWS],
          ["inceleme", REVIEWS as Item[]],
          ["liste", LISTS],
          ["muzik", MUSIC],
          ["dizi", SERIES],
        ];
        // Data files list newest first; interleave so each section's latest items lead the feed.
        const all = groups.flatMap(([p, items]) => items.map((it, i) => ({ it, p, i })));
        all.sort((a, b) => a.i - b.i);
        const items = all.slice(0, 50).map(({ it, p }) => {
          const link = `${SITE_URL}/${p}/${it.slug}`;
          const date = extractDate(it.source);
          const img = absoluteImage(it.image);
          return [
            "    <item>",
            `      <title>${esc(it.title)}</title>`,
            `      <link>${link}</link>`,
            `      <guid isPermaLink="true">${link}</guid>`,
            `      <description>${esc(it.excerpt)}</description>`,
            `      <dc:creator>${esc(EDITORIAL_AUTHOR)}</dc:creator>`,
            date ? `      <pubDate>${new Date(`${date}T12:00:00Z`).toUTCString()}</pubDate>` : null,
            img ? `      <media:content url="${esc(img)}" medium="image" />` : null,
            "    </item>",
          ]
            .filter(Boolean)
            .join("\n");
        });
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">`,
          "  <channel>",
          `    <title>${SITE_NAME}</title>`,
          `    <link>${SITE_URL}</link>`,
          `    <description>Film, TV, music and PC games news, reviews and ranked lists.</description>`,
          "    <language>en</language>",
          `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
          ...items,
          "  </channel>",
          "</rss>",
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=1800" },
        });
      },
    },
  },
});
