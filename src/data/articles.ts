import { REVIEWS } from "./reviews";
import { NEWS } from "./news";
import { LISTS } from "./lists";
import { MUSIC } from "./music";
import { SERIES } from "./series";

export type CategorySlug = "haberler" | "incelemeler" | "listeler" | "diziler" | "muzik" | "roportajlar";

export const CATEGORY_LABELS: Record<CategorySlug, string> = {
  haberler: "Haberler",
  incelemeler: "İncelemeler",
  listeler: "Listeler",
  diziler: "Diziler",
  muzik: "Müzik",
  roportajlar: "Röportajlar",
};

export type Article = {
  id: number;
  category: CategorySlug;
  title: string;
  excerpt: string;
  image: string;
  reviewSlug?: string;
  newsSlug?: string;
  listSlug?: string;
  musicSlug?: string;
  seriesSlug?: string;
  videoUrl?: string;
};

const REVIEW_ARTICLES: Article[] = REVIEWS.map((r, i) => ({
  id: 100 + i,
  category: "incelemeler" as const,
  title: r.title,
  excerpt: r.excerpt,
  image: r.image,
  reviewSlug: r.slug,
  videoUrl: r.videoUrl,
}));

const NEWS_ARTICLES: Article[] = NEWS.map((n, i) => ({
  id: 200 + i,
  category: "haberler" as const,
  title: n.title,
  excerpt: n.excerpt,
  image: n.image,
  newsSlug: n.slug,
}));

const LIST_ARTICLES: Article[] = LISTS.map((l, i) => ({
  id: 300 + i,
  category: "listeler" as const,
  title: l.title,
  excerpt: l.excerpt,
  image: l.image,
  listSlug: l.slug,
}));

const MUSIC_ARTICLES: Article[] = MUSIC.map((m, i) => ({
  id: 400 + i,
  category: "muzik" as const,
  title: m.title,
  excerpt: m.excerpt,
  image: m.image,
  musicSlug: m.slug,
}));

const SERIES_ARTICLES: Article[] = SERIES.map((s, i) => ({
  id: 500 + i,
  category: "diziler" as const,
  title: s.title,
  excerpt: s.excerpt,
  image: s.image,
  seriesSlug: s.slug,
}));

// Interleave arrays so categories are mixed in the feed.
function interleave<T>(...arrays: T[][]): T[] {
  const out: T[] = [];
  const max = Math.max(...arrays.map((a) => a.length));
  for (let i = 0; i < max; i++) {
    for (const arr of arrays) {
      if (i < arr.length) out.push(arr[i]);
    }
  }
  return out;
}

export const ARTICLES: Article[] = interleave(NEWS_ARTICLES, REVIEW_ARTICLES, LIST_ARTICLES, MUSIC_ARTICLES, SERIES_ARTICLES);
