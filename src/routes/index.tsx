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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
      <div className="flex flex-col gap-4">
        {smallCards.map((a) => (
          <SmallArticleCard key={a.id} article={a} />
        ))}
      </div>
      <div>
        <ArticleCard article={bigCard} />
      </div>
    </section>
  );
}

function Index() {
  const smallCards = ARTICLES.filter((a) => a.category === "haberler").slice(0, 3);
  const bigCard = ARTICLES.find((a) => a.category === "incelemeler") || ARTICLES[0];

  const featuredIds = new Set([bigCard.id, ...smallCards.map((a) => a.id)]);
  const gridArticles = ARTICLES.filter((a) => !featuredIds.has(a.id));

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <FeaturedSection smallCards={smallCards} bigCard={bigCard} />
        <ArticleGrid articles={gridArticles} />
      </main>
    </SiteShell>
  );
}
