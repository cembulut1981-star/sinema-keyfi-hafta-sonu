import type { Article } from "@/data/articles";

export const HOMEPAGE_FEATURED_REVIEW_SLUG = "crystal-lake-indiewire-review";

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