import type { Article } from "@/data/articles";

export const HOMEPAGE_FEATURED_REVIEW_SLUG = "crystal-lake-indiewire-review";

// The list promoted into the top row's fourth small-card slot.
export const HOMEPAGE_TOP_ROW_LIST_SLUG = "best-star-wars-games-ever-ranked";

// The four small cards shown beside the top row's lead story, in shown order.
export const HOMEPAGE_TOP_ROW_SLUGS = [
  "rings-of-power-season-3-empire-review",
  "stranger-things-other-worlds-prequel-2028-teaser",
  "karoshi-trailer-teo-yoo-samurai-corporate-thriller",
  HOMEPAGE_TOP_ROW_LIST_SLUG,
];

// Kırmızı Fenerler gave its top-row slot to the Star Wars games list and drops
// into that list's old feed position instead (see FEED_ARTICLES in the route).
export const HOMEPAGE_FEED_SWAP_SLUG = "raise-the-red-lantern-gong-li-review";

export function findArticleBySlug(articles: Article[], slug: string) {
  return articles.find(
    (article) =>
      article.newsSlug === slug ||
      article.reviewSlug === slug ||
      article.listSlug === slug ||
      article.musicSlug === slug ||
      article.seriesSlug === slug,
  );
}

export function homepageLeadRows(
  featured: Article | undefined,
  nextFeatured: Article | undefined,
  thirdFeatured: Article | undefined,
  standardSides: Article[],
  incoming: Article[],
  fallback: Article[],
) {
  const rows: { center: Article; sides: Article[] }[] = [];
  const usedIds = new Set<number>();
  const reservedIds = new Set([featured?.id, nextFeatured?.id]);
  const addRow = (center: Article, candidates: Article[]) => {
    usedIds.add(center.id);
    const sides: Article[] = [];
    for (const article of candidates) {
      if (sides.length === 4) break;
      if (usedIds.has(article.id) || reservedIds.has(article.id)) continue;
      sides.push(article);
      usedIds.add(article.id);
    }
    rows.push({ center, sides });
  };
  if (featured) addRow(featured, standardSides);
  if (nextFeatured) addRow(nextFeatured, [...incoming, ...fallback, ...standardSides]);
  if (thirdFeatured) addRow(thirdFeatured, [...incoming, ...fallback, ...standardSides]);
  const remaining = incoming.filter((article) => !usedIds.has(article.id));
  for (let i = 0; i + 5 <= remaining.length; i += 5) {
    addRow(remaining[i], remaining.slice(i + 1, i + 5));
  }
  return { rows, usedIds };
}
