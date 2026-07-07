import { createFileRoute } from "@tanstack/react-router";

import { ArticleCard, SiteShell, SmallArticleCard } from "@/components/site/SiteShell";
import { ARTICLES, type Article } from "@/data/articles";

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
      <section className={`grid gap-6 mb-12 ${cols} items-stretch`}>
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
    ? "grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]"
    : "grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)]";
  return (
    <section className={`grid gap-6 mb-12 ${cols} items-stretch`}>
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
  // Build mixed rows (each: 1 big + 4 small = 5 articles) with uniform heights.
  const rows: { center: Article; sides: Article[] }[] = [];
  const used = new Set<number>();
  const bigPool = ARTICLES.filter((a) => a.category === "incelemeler" || a.category === "listeler" || a.category === "muzik");
  const smallPool = ARTICLES.filter((a) => a.category === "haberler" || a.category === "diziler");

  const pickUnused = (pool: Article[]) => pool.find((a) => !used.has(a.id));

  // Keep alternating mixed rows for the entire feed. When bigs run out,
  // promote a small to the center slot so the rhythm continues.
  while (true) {
    let center = pickUnused(bigPool);
    if (!center) center = pickUnused(smallPool);
    if (!center) break;
    used.add(center.id);

    const sides: Article[] = [];
    // Prefer smalls as sides; fall back to remaining bigs if smalls run out.
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
    for (const s of sides) used.add(s.id);

    rows.push({ center, sides });
    if (sides.length === 0 && !pickUnused(bigPool) && !pickUnused(smallPool)) break;
  }

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        {rows.map((r, i) => (
          <MixedRow key={r.center.id} centerCard={r.center} sideCards={r.sides} reverse={i % 2 === 1} />
        ))}
      </main>
    </SiteShell>
  );
}
