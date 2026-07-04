import { createFileRoute } from "@tanstack/react-router";

import { ArticleCard, ArticleGrid, SiteShell, SmallArticleCard } from "@/components/site/SiteShell";
import { ARTICLES } from "@/data/articles";

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

function FeaturedSection({ smallCards, bigCard }: { smallCards: typeof ARTICLES; bigCard: (typeof ARTICLES)[0] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12 items-stretch">
      <div className="flex flex-col gap-4 h-full">
        {smallCards.map((a) => (
          <div key={a.id} className="flex-1 min-h-0">
            <SmallArticleCard article={a} className="h-full" badgeInImage />
          </div>
        ))}
      </div>
      <div>
        <ArticleCard article={bigCard} />
      </div>
    </section>
  );
}

function HighlightedCardRow({ centerCard, sideCards }: { centerCard: (typeof ARTICLES)[0]; sideCards: (typeof ARTICLES)[] }) {
  return (
    <section className="grid gap-6 mb-12 grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] items-stretch">
      <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
        {sideCards.slice(0, 2).map((article) => (
          <SmallArticleCard key={article.id} article={article} className="h-full" badgeInImage />
        ))}
      </div>
      <div className="min-h-0 h-full">
        <ArticleCard article={centerCard} />
      </div>
      <div className="grid gap-6 auto-rows-fr min-h-0 h-full">
        {sideCards.slice(2, 4).map((article) => (
          <SmallArticleCard key={article.id} article={article} className="h-full" badgeInImage />
        ))}
      </div>
    </section>
  );
}

function Index() {
  const smallCards = ARTICLES.filter((a) => a.category === "haberler").slice(0, 3);
  const bigCard = ARTICLES.find((a) => a.category === "incelemeler") || ARTICLES[0];

  const featuredIds = new Set([bigCard.id, ...smallCards.map((a) => a.id)]);
  const gridArticles = ARTICLES.filter((a) => !featuredIds.has(a.id));

  const highlightedCenter = ARTICLES.find((a) => a.listSlug === "2026-nin-simdiye-kadar-en-iyi-tv-dizileri");
  const highlightedSideCards = gridArticles
    .filter((a) => a.id !== highlightedCenter?.id)
    .slice(0, 4);

  const highlightIds = new Set<number>([
    ...(highlightedCenter ? [highlightedCenter.id] : []),
    ...highlightedSideCards.map((a) => a.id),
  ]);
  const remainingArticles = gridArticles.filter((a) => !highlightIds.has(a.id));

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <FeaturedSection smallCards={smallCards} bigCard={bigCard} />
        {highlightedCenter && highlightedSideCards.length === 4 ? (
          <HighlightedCardRow centerCard={highlightedCenter} sideCards={highlightedSideCards} />
        ) : null}
        <ArticleGrid articles={remainingArticles} />
      </main>
    </SiteShell>
  );
}
