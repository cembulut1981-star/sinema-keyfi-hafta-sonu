import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ArticleCard, SiteShell, SmallArticleCard } from "@/components/site/SiteShell";
import { ARTICLES, type Article } from "@/data/articles";

// Slugs that only appear in the "Daha Fazla Göster" (load-more) extra row.
const EXTRA_REVIEW_SLUGS = new Set(["good-luck-have-fun-dont-die"]);
const EXTRA_NEWS_SLUGS = new Set(["yeni-yaz-dizileri-2026"]);
const EXTRA_SERIES_SLUGS = new Set([
  "dutton-ranch-s1-final",
  "spider-noir-inceleme",
  "from-son-sezon-set-ziyareti",
]);

function isExtra(a: Article) {
  return (
    (a.reviewSlug && EXTRA_REVIEW_SLUGS.has(a.reviewSlug)) ||
    (a.newsSlug && EXTRA_NEWS_SLUGS.has(a.newsSlug)) ||
    (a.seriesSlug && EXTRA_SERIES_SLUGS.has(a.seriesSlug))
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sine-Meta — Sinema Haberleri, İncelemeler, Listeler" },
      { name: "description", content: "Türkiye'nin sinema gündemi: vizyon haberleri, eleştiriler, listeler ve özel dosyalar." },
      { property: "og:title", content: "Sine-Meta — Sinema" },
      { property: "og:description", content: "Türkiye'nin sinema gündemi." },
    ],
  }),
  component: Index,
});

function MixedRow({ centerCard, sideCards, reverse = false }: { centerCard: Article; sideCards: Article[]; reverse?: boolean }) {
  // Split sides as evenly as possible so no column is empty / leaves a gap.
  const half = Math.ceil(sideCards.length / 2);
  const left = sideCards.slice(0, half);
  const right = sideCards.slice(half);

  // If there are no sides at all, let the big card span the whole row.
  if (sideCards.length === 0) {
    return (
      <section className="grid gap-6 mb-12 grid-cols-1 items-stretch">
        <div className="min-h-0 h-full">
          <ArticleCard article={centerCard} />
        </div>
      </section>
    );
  }

  // If only one side column is populated, use a 2-col layout so the big
  // card and the small column share the row without an empty gap.
  if (right.length === 0) {
    const cols = reverse
      ? "grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
      : "grid-cols-[minmax(0,1fr)_minmax(0,2fr)]";
    return (
      <section className={`grid grid-cols-1 gap-6 mb-12 md:h-[560px] ${cols} items-stretch`}>
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
    <section className={`grid grid-cols-1 gap-6 mb-12 md:h-[560px] ${cols} items-stretch`}>
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
          <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
            {left.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </div>
          <div className="min-h-0 h-full">
            <ArticleCard article={centerCard} />
          </div>
          <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
            {right.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function Index() {
  const [showMore, setShowMore] = useState(false);

  // Separate extras (revealed only after "Daha Fazla Göster") from the main feed.
  const mainArticles = ARTICLES.filter((a) => !isExtra(a));
  const extraArticles = ARTICLES.filter(isExtra);

  // Build mixed rows (each: 1 big + 4 small = 5 articles) with uniform heights.
  const rows: { center: Article; sides: Article[] }[] = [];
  const used = new Set<number>();
  const bigPool = mainArticles.filter((a) => a.category === "incelemeler" || a.category === "listeler" || a.category === "muzik");
  const smallPool = mainArticles.filter((a) => a.category === "haberler" || a.category === "diziler");

  const pickUnused = (pool: Article[]) => pool.find((a) => !used.has(a.id));

  // Only build FULL 1+4 rows so every row keeps the exact same layout.
  // Anything that doesn't fit into a complete row falls through into a
  // uniform small-card grid below (no big-card gaps).
  while (true) {
    const remainingBigs = bigPool.filter((a) => !used.has(a.id)).length;
    const remainingSmalls = smallPool.filter((a) => !used.has(a.id)).length;
    if (remainingBigs + remainingSmalls < 5) break;

    let center = pickUnused(bigPool);
    if (!center) center = pickUnused(smallPool);
    if (!center) break;

    // Tentatively reserve; collect 4 sides preferring smalls, then bigs.
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
      // Not enough for a full row — release the center and stop.
      used.delete(centerId);
      break;
    }
    for (const s of sides) used.add(s.id);
    rows.push({ center, sides });
  }

  // Everything that didn't fit a full row → uniform small-card grid.
  const leftovers = mainArticles.filter((a) => !used.has(a.id));

  // Build the extra row (revealed by the load-more button): 1 review center
  // + 4 news/series smalls, styled exactly like the rows above.
  const extraCenter = extraArticles.find((a) => a.category === "incelemeler");
  const extraSides = extraArticles.filter((a) => a !== extraCenter);
  const extraReverse = rows.length % 2 === 1;

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        {rows.map((r, i) => (
          <MixedRow key={r.center.id} centerCard={r.center} sideCards={r.sides} reverse={i % 2 === 1} />
        ))}

        {leftovers.length > 0 ? (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 auto-rows-fr items-stretch">
            {leftovers.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </section>
        ) : null}

        {showMore && extraCenter ? (
          <MixedRow centerCard={extraCenter} sideCards={extraSides} reverse={extraReverse} />
        ) : null}

        {!showMore && extraCenter ? (
          <div className="flex justify-center mb-12">
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="font-display font-black uppercase tracking-wider text-base px-8 py-3 border-2 border-black text-black hover:bg-[hsl(var(--primary))] hover:text-white hover:border-black transition-colors"
            >
              Daha Fazla Göster
            </button>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
