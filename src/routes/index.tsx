import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ArticleCard, FeaturedArticleCard, FullWidthFeatureCard, OverlayRow, SiteShell, SmallArticleCard } from "@/components/site/SiteShell";
import { ARTICLES as RAW_ARTICLES, type Article } from "@/data/articles";
import { useSuspenseQuery } from '@tanstack/react-query';
import { publishedPostsQuery } from '@/lib/editorial-query';
import { toEditorialCard } from '@/lib/editorial';
import { getNews } from '@/data/news';
import { extractDate, formatDate } from '@/lib/seo';

// Yellow/black one-word pills shown under the photo. Only a couple live in
// the top rows; the rest are scattered deeper in the feed (see below) so it
// never looks like every card has one.
const BELOW_BADGES: Record<string, string> = {
  "metallica-life-burns-faster-sphere-review": "Canlı",
  "exorcist-martyrs-mike-flanagan-scariest-film": "Korku",
  "haley-lu-richardson-joins-miami-vice-85": "Haber",
  "sense-and-sensibility-new-dashwood-sisters-clip": "Haber",
  "battlefield-6-xbox-game-pass-october-2026": "Oyun",
};
const CATEGORY_WORD: Record<string, string> = {
  incelemeler: "İnceleme",
  listeler: "Liste",
  muzik: "Müzik",
  diziler: "Dizi",
  haberler: "Haber",
};
const slugOf = (a: Article) => a.newsSlug ?? a.reviewSlug ?? a.listSlug ?? a.musicSlug ?? a.seriesSlug ?? "";
const ARTICLES: Article[] = RAW_ARTICLES.map((a) => {
  const label = BELOW_BADGES[slugOf(a)];
  // Aşağı rozetli kartlarda sarı hap yeterli: kırmızı kategori rozeti gizlenir.
  return label
    ? { ...a, customBadge: label, customBadgeBelow: true, hideCategoryBadge: true }
    : a;
});

const PAGE_SIZE = 20;

// RoboCop kartı artık ilk satırın orta (büyük) kartı olarak gösterilecek.
const FRAMED_SLUG = "dan-stevens-robocop-prime-video-series";
const FRAMED = ARTICLES.find((a) => a.musicSlug === FRAMED_SLUG || a.seriesSlug === FRAMED_SLUG);
const WIDE_FEATURE_SLUG = "crystal-lake-13-killer-things-friday-the-13th-series";
const WIDE_FEATURE = ARTICLES.find((article) => article.newsSlug === WIDE_FEATURE_SLUG);
const NEW_REVIEW = ARTICLES.find((article) => article.musicSlug === "metallica-life-burns-faster-sphere-review");
const NEW_STORIES = [
  ARTICLES.find((article) => article.listSlug === "best-werewolf-movies"),
  ARTICLES.find((article) => article.listSlug === "best-sci-fi-movies-of-2026"),
  ARTICLES.find((article) => article.newsSlug === "carrie-season-2-confirmed-prime-video"),
  ARTICLES.find((article) => article.newsSlug === "haley-lu-richardson-joins-miami-vice-85"),
  ARTICLES.find((article) => article.newsSlug === "sense-and-sensibility-new-dashwood-sisters-clip"),
  ARTICLES.find((article) => article.newsSlug === "zendaya-alex-garland-a24-sci-fi-film"),
  ARTICLES.find((article) => article.seriesSlug === "true-detective-season-5-nicolas-cage-antonio-banderas"),
  ARTICLES.find((article) => article.musicSlug === "blondie-high-noon-album-clem-burke-final-recording"),
  ARTICLES.find((article) => article.newsSlug === "exorcist-martyrs-mike-flanagan-scariest-film"),
  ARTICLES.find((article) => article.newsSlug === "phantom-blade-zero-15-years-in-the-making"),
  ARTICLES.find((article) => article.newsSlug === "battlefield-6-xbox-game-pass-october-2026"),
  ARTICLES.find((article) => article.newsSlug === "marvel-zodiac-spy-thriller-series-2027"),
  ARTICLES.find((article) => article.newsSlug === "inde-navarrette-obsession-gap-style-interview"),
  ARTICLES.find((article) => article.reviewSlug === "heart-of-the-beast-review"),
  ARTICLES.find((article) => article.reviewSlug === "star-wars-galactic-racer-review"),
  ARTICLES.find((article) => article.newsSlug === "neon-scp-foundation-open-source-horror-movie"),
  ARTICLES.find((article) => article.newsSlug === "jennifer-lawrence-the-flood-zach-cregger"),
].filter((article): article is Article => Boolean(article)).slice(0, 4);
const TOP_IDS = new Set([NEW_REVIEW?.id, ...NEW_STORIES.map((article) => article.id)]);
const LOWER_FEATURES = ARTICLES.filter((article) => article.homepagePlacement === "lower");
// New PC Games stories are spread further down the feed so games don't cluster at the top.
const SCATTERED_GAME_SLUGS = [
  "resident-evil-requiem-game-review",
  "subnautica-2-two-million-sales-12-hours",
  "crimson-desert-game-review",
  "007-first-light-sales-bond-curse-broken",
  "007-first-light-game-review",
  "subnautica-2-early-access-impressions",
];
const SCATTERED_GAMES = SCATTERED_GAME_SLUGS.map((slug) => ARTICLES.find((a) => a.newsSlug === slug || a.reviewSlug === slug)).filter((a): a is Article => Boolean(a));
const SCATTERED_IDS = new Set(SCATTERED_GAMES.map((a) => a.id));
const BASE_FEED = ARTICLES.filter((article) => article.newsSlug !== WIDE_FEATURE_SLUG && !TOP_IDS.has(article.id) && article.homepagePlacement !== "lower" && !SCATTERED_IDS.has(article.id));
const FEED_ARTICLES = (() => {
  const out = [...BASE_FEED];
  SCATTERED_GAMES.forEach((a, i) => out.splice(Math.min(14 + i * 7, out.length), 0, a));
  // Sprinkle a handful of one-word pills across the feed with uneven, larger
  // gaps so they read as scattered, not systematic. Positions are derived
  // from the index (not Math.random) so SSR and the client match.
  const SPRINKLE_COUNT = 7;
  let added = 0;
  let i = 4;
  while (i < out.length && added < SPRINKLE_COUNT) {
    const a = out[i];
    if (!a.customBadge && a.id !== FRAMED?.id) {
      out[i] = { ...a, customBadge: CATEGORY_WORD[a.category] ?? "Haber", customBadgeBelow: true, hideCategoryBadge: true };
      added++;
      // Uneven gap of 6–11 cards between pills.
      i += 6 + ((i * 7 + added * 5) % 6);
    } else {
      i++;
    }
  }
  return out;
})();

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedPostsQuery),
  head: () => ({
    meta: [
      { title: "Sine-Meta — Film Haberleri, İncelemeler ve Listeler" },
      { name: "description", content: "Film ve dizi dünyasından haberler, incelemeler, listeler ve özel dosyalar." },
      { property: "og:title", content: "Sine-Meta — Sinema" },
      { property: "og:description", content: "Film ve dizi dünyasından güncel haberler, her gün yenilenir." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function MixedRow({ centerCard, sideCards, reverse = false, centerFirstMobile = false }: { centerCard: Article; sideCards: Article[]; reverse?: boolean; centerFirstMobile?: boolean }) {
  const half = Math.ceil(sideCards.length / 2);
  const left = sideCards.slice(0, half);
  const right = sideCards.slice(half);

  if (sideCards.length === 0) {
    return (
      <section className="grid gap-6 mb-12 grid-cols-1 items-stretch">
        <div className="min-h-0 h-full">
          <ArticleCard article={centerCard} />
        </div>
      </section>
    );
  }

  if (right.length === 0) {
    const cols = reverse
      ? "grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
      : "grid-cols-[minmax(0,1fr)_minmax(0,2fr)]";
    return (
      <section className={`grid grid-cols-1 gap-6 mb-12 md:h-[640px] ${cols} items-stretch`}>
        {reverse ? (
          <>
            <div className="min-h-0 h-full">
              <ArticleCard article={centerCard} />
            </div>
            <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
              {left.map((a) => (
                <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
              {left.map((a) => (
                <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
              ))}
            </div>
            <div className="min-h-0 h-full">
              <ArticleCard article={centerCard} />
            </div>
          </>
        )}
      </section>
    );
  }

  const cols = reverse
    ? "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]"
    : "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)]";
  return (
    <section className={`grid grid-cols-1 gap-6 mb-12 md:h-[640px] ${cols} items-stretch`}>
      {reverse ? (
        <>
          <div className="min-h-0 h-full">
            <ArticleCard article={centerCard} />
          </div>
          <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
            {left.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </div>
          <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
            {right.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={`grid gap-6 auto-rows-fr min-h-0 h-full ${centerFirstMobile ? "order-2 md:order-none" : ""}`}>
            {left.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </div>
          <div className={`min-h-0 h-full ${centerFirstMobile ? "order-1 md:order-none" : ""}`}>
            <ArticleCard article={centerCard} />
          </div>
          <div className={`grid gap-6 auto-rows-fr min-h-0 h-full ${centerFirstMobile ? "order-3 md:order-none" : ""}`}>
            {right.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

// Build 1-big + 4-small rows from a slice of articles. If `featured` is
// provided, it is forced as the center of the very first row so the latest
// additions stay at the top while the featured card sits one row down.
function buildRows(articles: Article[], featured?: Article) {
  const rows: { center: Article; sides: Article[] }[] = [];
  const used = new Set<number>();
  const bigPool = articles.filter((a) => a.category === "incelemeler" || a.category === "listeler" || a.category === "muzik");
  const smallPool = articles.filter((a) => a.category === "haberler" || a.category === "diziler");

  const pickUnused = (pool: Article[]) => pool.find((a) => !used.has(a.id));

  // Place the featured card as the first row's center, then fill its sides
  // from the remaining small-pool articles first, big-pool if needed.
  if (featured) {
    used.add(featured.id);
    const sides: Article[] = [];
    for (const a of smallPool) {
      if (sides.length === 4) break;
      if (!used.has(a.id)) sides.push(a);
    }
    if (sides.length < 4) {
      for (const a of bigPool) {
        if (sides.length === 4) break;
        if (!used.has(a.id)) sides.push(a);
      }
    }
    if (sides.length === 4) {
      for (const s of sides) used.add(s.id);
      rows.push({ center: featured, sides });
    }
  }

  while (true) {
    const remainingBigs = bigPool.filter((a) => !used.has(a.id)).length;
    const remainingSmalls = smallPool.filter((a) => !used.has(a.id)).length;
    if (remainingBigs + remainingSmalls < 5) break;

    let center = pickUnused(bigPool);
    if (!center) center = pickUnused(smallPool);
    if (!center) break;

    const centerId = center.id;
    used.add(centerId);
    const sides: Article[] = [];
    for (const a of smallPool) {
      if (sides.length === 4) break;
      if (!used.has(a.id)) sides.push(a);
    }
    if (sides.length < 4) {
      for (const a of bigPool) {
        if (sides.length === 4) break;
        if (!used.has(a.id)) sides.push(a);
      }
    }
    if (sides.length < 4) {
      used.delete(centerId);
      break;
    }
    for (const s of sides) used.add(s.id);
    rows.push({ center, sides });
  }

  const leftovers = articles.filter((a) => !used.has(a.id));
  return { rows, leftovers };
}

function Index() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const { data: published } = useSuspenseQuery(publishedPostsQuery);
  const newCards = published.map(toEditorialCard);
  const dynamicLead = newCards.filter(a => !a.homepagePlacement);
  // Yeni otomatik haberler 5'erli (1 büyük + 4 küçük) tam satırlara bölünür.
  // Her tamamlanan satır kendi kolonu olarak üst bölüme çıkar; böylece yeni
  // içerik biriktikçe eski satırlar aşağı iner ve sayfanın tepesi taze kalır.
  const newRowGroups: { center: Article; sides: Article[] }[] = [];
  const fullGroups = Math.floor(dynamicLead.length / 5);
  for (let i = 0; i < fullGroups; i++) {
    const group = dynamicLead.slice(i * 5, i * 5 + 5);
    newRowGroups.push({ center: group[0], sides: group.slice(1) });
  }
  const leadRest = dynamicLead.slice(fullGroups * 5);
  const leadCenter = leadRest[0] ?? NEW_REVIEW;
  const leadSides = leadRest.length ? [...leadRest.slice(1), ...(NEW_REVIEW ? [NEW_REVIEW] : []), ...NEW_STORIES].slice(0, 4) : NEW_STORIES;
  const leadIds = new Set([...dynamicLead.map(a => a.id), NEW_REVIEW?.id, ...leadSides.map(a => a.id)]);
  const feed = [...dynamicLead, ...(NEW_REVIEW ? [NEW_REVIEW] : []), ...NEW_STORIES, ...FEED_ARTICLES].filter((a, i, all) => !leadIds.has(a.id) && all.findIndex(b => b.id === a.id) === i);

  // Build the feed for a given number of visible posts.
  const build = (count: number) => {
    const visibleArticles = feed.slice(0, count);
    const smallCandidates = visibleArticles.filter(
      (a) =>
        (a.category === "haberler" || a.category === "diziler") &&
        a.id !== FRAMED?.id,
    );
    const duo = smallCandidates.slice(2, 4);
    const duoIds = new Set(duo.map((a) => a.id));
    const feedArticles = visibleArticles.filter((a) => !duoIds.has(a.id));
    return { duo, ...buildRows(feedArticles, FRAMED) };
  };

  // Pad the visible count (up to 3 extra posts) so the final small-card row
  // always fills all 4 columns instead of leaving a gap on the right.
  let effectiveCount = Math.min(visibleCount, feed.length);
  let built = build(effectiveCount);
  for (let extra = 1; extra <= 3; extra++) {
    if (built.leftovers.length % 4 === 0) break;
    const next = Math.min(visibleCount + extra, feed.length);
    if (next === effectiveCount) break;
    effectiveCount = next;
    built = build(next);
  }

  const { duo, rows, leftovers } = built;
  const hasMore = effectiveCount < feed.length;
  const lowerFeatures = [...newCards.filter(a => a.homepagePlacement === 'lower'), ...LOWER_FEATURES].map((article) => {
    const date = article.newsSlug ? extractDate(getNews(article.newsSlug)?.source) : null;
    return <FullWidthFeatureCard key={article.id} article={article} categoryLabel="PC Oyunları" dateLabel={date ? formatDate(date) : ''} />;
  });


  const duoSection =
    duo.length === 2 ? (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
        <div className="h-full">
          <FeaturedArticleCard
            article={duo[0]}
            badgeLabel="Gündem"
            kicker="Sine-Meta · Öne Çıkan"
            counter="Seçkiler"
          />
        </div>
        <div className="h-full">
          <FeaturedArticleCard
            article={duo[1]}
            badgeLabel="Odak"
            kicker="Sine-Meta · Editör Notu"
            ribbon="Özel"
          />
        </div>
      </section>
    ) : null;

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="sr-only">Sine-Meta — Film Haberleri, İncelemeler ve Listeler</h1>
        <div className="h-10 md:h-14" aria-hidden />
        {leadCenter ? <MixedRow centerCard={leadCenter} sideCards={leadSides} centerFirstMobile /> : null}
        {newRowGroups.map((r, i) => (
          <MixedRow key={r.center.id} centerCard={r.center} sideCards={r.sides} reverse={i % 2 === 1} />
        ))}
        {WIDE_FEATURE ? (
          <FullWidthFeatureCard article={WIDE_FEATURE} categoryLabel="Dizi" dateLabel="13 Eylül 2026" />
        ) : null}
        {rows.map((r, i) => (
          <div key={r.center.id}>
            {i >= 2 && i % 2 === 0 ? (
              <>
                <OverlayRow articles={[r.center, ...r.sides].slice(0, 3)} />
                <OverlayRow articles={[r.center, ...r.sides].slice(3)} />
              </>
            ) : (
              <MixedRow centerCard={r.center} sideCards={r.sides} reverse={i % 2 === 1} />
            )}
            {i === 1 ? duoSection : null}
             {i === 1 ? lowerFeatures : null}
          </div>
        ))}
        {rows.length < 2 ? duoSection : null}
        {rows.length < 2 ? lowerFeatures : null}

        {leftovers.length > 0 ? (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 items-stretch">
            {leftovers.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </section>
        ) : null}


        {hasMore ? (
          <div className="flex justify-center mb-12">
            <button
              type="button"
              onClick={() => setVisibleCount(Math.min(effectiveCount + PAGE_SIZE, feed.length))}
              className="font-display font-black uppercase tracking-wider text-base px-8 py-3 border-2 border-black text-black hover:bg-primary hover:text-white hover:border-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)] active:translate-y-0"
            >
              Daha Fazla Yükle
            </button>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
