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
  const left = sideCards.slice(0, 2);
  const right = sideCards.slice(2, 4);
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

  while (true) {
    // Only build rows from proper big+small combinations so every row has
    // matching heights. Leftover articles are dropped to avoid ragged gaps.
    const center = pickUnused(bigPool);
    if (!center) break;

    const sides: Article[] = [];
    for (const a of smallPool) {
      if (sides.length === 4) break;
      if (!used.has(a.id)) sides.push(a);
    }
    if (sides.length < 4) break;

    used.add(center.id);
    for (const s of sides) used.add(s.id);
    rows.push({ center, sides });
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
