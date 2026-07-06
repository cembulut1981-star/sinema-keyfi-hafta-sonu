import { createFileRoute } from "@tanstack/react-router";

import { ArticleCard, ArticleGrid, SiteShell, SmallArticleCard } from "@/components/site/SiteShell";
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
  // Build three mixed rows (each: 1 big + 4 small = 5 articles)
  const rows: { center: Article; sides: Article[] }[] = [];
  const used = new Set<number>();
  const bigPool = ARTICLES.filter((a) => a.category === "incelemeler" || a.category === "listeler" || a.category === "muzik");
  const smallPool = ARTICLES.filter((a) => a.category === "haberler" || a.category === "diziler");

  for (let i = 0; i < 20; i++) {
    const center = bigPool.find((a) => !used.has(a.id));
    if (!center) break;
    used.add(center.id);
    const sides: Article[] = [];
    for (const a of smallPool) {
      if (sides.length === 4) break;
      if (!used.has(a.id)) {
        sides.push(a);
        used.add(a.id);
      }
    }
    // fallback fill from any remaining articles
    if (sides.length < 4) {
      for (const a of ARTICLES) {
        if (sides.length === 4) break;
        if (!used.has(a.id)) {
          sides.push(a);
          used.add(a.id);
        }
      }
    }
    if (sides.length === 4) rows.push({ center, sides });
  }

  const remaining = ARTICLES.filter((a) => !used.has(a.id));

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        {rows.map((r, i) => (
          <MixedRow key={r.center.id} centerCard={r.center} sideCards={r.sides} reverse={i % 2 === 1} />
        ))}
        <ArticleGrid articles={remaining} />
      </main>
    </SiteShell>
  );
}
