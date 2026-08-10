import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ArticleCard, FeaturedArticleCard, SiteShell, SmallArticleCard } from "@/components/site/SiteShell";
import { ARTICLES, type Article } from "@/data/articles";

const PAGE_SIZE = 20;

const HEADLINE_SLUG = "spider-man-brand-new-day-ikinci-hafta-gise-rekoru";
const HEADLINE = ARTICLES.find((a) => a.newsSlug === HEADLINE_SLUG);
const FEED = ARTICLES.filter((a) => a.newsSlug !== HEADLINE_SLUG);
// Manşetin yanına yerleştirilecek ilk küçük kartlar — akıştan çıkarılır.
const HEADLINE_SIDES = FEED.filter(
  (a) => a.category === "haberler" || a.category === "diziler",
).slice(0, 4);
const HEADLINE_SIDE_IDS = new Set(HEADLINE_SIDES.map((a) => a.id));
const FEED_AFTER_HEADLINE = FEED.filter((a) => !HEADLINE_SIDE_IDS.has(a.id));

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

// Build 1-big + 4-small rows from a slice of articles. Rows are laid out in
// alternating orientation starting from `startIndex` so the pattern stays
// consistent when a new page is appended.
function buildRows(articles: Article[]) {
  const rows: { center: Article; sides: Article[] }[] = [];
  const used = new Set<number>();
  const bigPool = articles.filter((a) => a.category === "incelemeler" || a.category === "listeler" || a.category === "muzik");
  const smallPool = articles.filter((a) => a.category === "haberler" || a.category === "diziler");

  const pickUnused = (pool: Article[]) => pool.find((a) => !used.has(a.id));

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

  // Build the feed for a given number of visible posts.
  const build = (count: number) => {
    const visibleArticles = FEED_AFTER_HEADLINE.slice(0, count);
    const smallCandidates = visibleArticles.filter(
      (a) => a.category === "haberler" || a.category === "diziler",
    );
    const duo = smallCandidates.slice(2, 4);
    const duoIds = new Set(duo.map((a) => a.id));
    const feedArticles = visibleArticles.filter((a) => !duoIds.has(a.id));
    return { duo, ...buildRows(feedArticles) };
  };

  // Pad the visible count (up to 3 extra posts) so the final small-card row
  // always fills all 4 columns instead of leaving a gap on the right.
  let effectiveCount = Math.min(visibleCount, FEED_AFTER_HEADLINE.length);
  let built = build(effectiveCount);
  for (let extra = 1; extra <= 3; extra++) {
    if (built.leftovers.length % 4 === 0) break;
    const next = Math.min(visibleCount + extra, FEED_AFTER_HEADLINE.length);
    if (next === effectiveCount) break;
    effectiveCount = next;
    built = build(next);
  }

  const { duo, rows, leftovers } = built;
  const hasMore = effectiveCount < FEED_AFTER_HEADLINE.length;


  const duoSection =
    duo.length === 2 ? (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
        <div className="h-full">
          <FeaturedArticleCard
            article={duo[0]}
            badgeLabel="Gündem"
            kicker="Sine-Meta · Öne Çıkan"
            counter="Seçki"
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
        <h1 className="sr-only">Sine-Meta — Sinema Haberleri, İncelemeler ve Listeler</h1>
        {HEADLINE ? (
          <section className="mb-12 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 items-stretch md:h-[560px]">
            <div className="min-h-0 h-full">
              <FeaturedArticleCard
                article={HEADLINE}
                badgeLabel="Manşet"
                kicker="Sine-Meta · Gişe"
                meta="Box Office"
                stats={[
                  { label: "2. hafta", value: "$145M" },
                  { label: "Küresel", value: "$1.67B" },
                  { label: "Kuzey Amerika", value: "$655M" },
                ]}
                ribbon="Manşet"
              />
            </div>
            <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
              {HEADLINE_SIDES.map((a) => (
                <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
              ))}
            </div>
          </section>
        ) : null}
        {rows.map((r, i) => (
          <div key={r.center.id}>
            <MixedRow centerCard={r.center} sideCards={r.sides} reverse={i % 2 === 1} />
            {i === 1 ? duoSection : null}
          </div>
        ))}
        {rows.length < 2 ? duoSection : null}

        {leftovers.length > 0 ? (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 auto-rows-fr items-stretch">
            {leftovers.map((a) => (
              <SmallArticleCard key={a.id} article={a} className="h-full" badgeInImage />
            ))}
          </section>
        ) : null}


        {hasMore ? (
          <div className="flex justify-center mb-12">
            <button
              type="button"
              onClick={() => setVisibleCount(Math.min(effectiveCount + PAGE_SIZE, FEED.length))}
              className="font-display font-black uppercase tracking-wider text-base px-8 py-3 border-2 border-black text-black hover:bg-primary hover:text-white hover:border-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)] active:translate-y-0"
            >
              Daha Fazla Göster
            </button>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
