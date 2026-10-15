export const SITE_URL = "https://sine-meta.com";
export const SITE_NAME = "Sine-Meta";
export const EDITORIAL_AUTHOR = "Sine-Meta Editors";

const MONTHS = ["january","february","march","april","may","june","july","august","september","october","november","december"];

/** Extracts a "Month D, YYYY" date from a source credit line. Returns ISO date (YYYY-MM-DD) or null when the credit has no date. */
export function extractDate(source: string | undefined): string | null {
  if (!source) return null;
  const m = source.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*(\d{4})/i);
  if (!m) return null;
  const month = MONTHS.indexOf(m[1].toLowerCase()) + 1;
  return `${m[3]}-${String(month).padStart(2, "0")}-${m[2].padStart(2, "0")}`;
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const name = MONTHS[m - 1];
  return `${name[0].toUpperCase()}${name.slice(1)} ${d}, ${y}`;
}

/** Absolute URL for an image, or null when it cannot be made absolute. */
export function absoluteImage(image: string | undefined): string | null {
  if (!image) return null;
  if (image.startsWith("https://")) return image;
  if (image.startsWith("/")) return `${SITE_URL}${image}`;
  return null;
}

type HeadInput = { title: string; excerpt: string; image?: string; source?: string };

export function articleHead(item: HeadInput, path: string) {
  const url = `${SITE_URL}${path}`;
  const image = absoluteImage(item.image);
  const date = extractDate(item.source);
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.excerpt,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: EDITORIAL_AUTHOR, url: `${SITE_URL}/about` },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    ...(image ? { image: [image] } : {}),
    ...(date ? { datePublished: date, dateModified: date } : {}),
  };
  return {
    meta: [
      { title: `${item.title} — ${SITE_NAME}` },
      { name: "description", content: item.excerpt },
      { name: "author", content: EDITORIAL_AUTHOR },
      { property: "og:title", content: item.title },
      { property: "og:description", content: item.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      ...(date ? [{ property: "article:published_time", content: date }] : []),
      ...(image
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  };
}
