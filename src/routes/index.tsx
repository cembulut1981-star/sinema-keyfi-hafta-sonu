import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ArticleCard, SiteShell, SmallArticleCard } from "@/components/site/SiteShell";
import { ARTICLES, type Article } from "@/data/articles";

const PAGE_SIZE = 20;

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

  // Newest posts sit at the top of ARTICLES; slice to show only the first N.
  const visibleArticles = ARTICLES.slice(0, visibleCount);
  const { rows, leftovers } = buildRows(visibleArticles);
  const hasMore = visibleCount < ARTICLES.length;

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="sr-only">Sine-Meta — Sinema Haberleri, İncelemeler ve Listeler</h1>
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

        {hasMore ? (
          <div className="flex justify-center mb-12">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, ARTICLES.length))}
              className="font-display font-black uppercase tracking-wider text-base px-8 py-3 border-2 border-black text-black hover:bg-primary hover:text-white hover:border-black transition-colors"
            >
              Daha Fazla Göster
            </button>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
