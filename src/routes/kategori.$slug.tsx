import { createFileRoute, notFound } from "@tanstack/react-router";

import { ArticleGrid, SiteShell } from "@/components/site/SiteShell";
import { ARTICLES, CATEGORY_LABELS, type CategorySlug } from "@/data/articles";

const VALID: CategorySlug[] = ["haberler", "incelemeler", "listeler", "diziler", "muzik", "roportajlar"];

export const Route = createFileRoute("/kategori/$slug")({
  beforeLoad: ({ params }) => {
    if (!VALID.includes(params.slug as CategorySlug)) throw notFound();
  },
  head: ({ params }) => {
    const label = CATEGORY_LABELS[params.slug as CategorySlug] ?? "Kategori";
    return {
      meta: [
        { title: `${label} — Sine-Meta` },
        { name: "description", content: `${label} kategorisindeki en güncel sinema haberleri ve yazıları.` },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Kategori bulunamadı</h1>
      </main>
    </SiteShell>
  ),
  errorComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Bir şeyler ters gitti</h1>
      </main>
    </SiteShell>
  ),
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const category = slug as CategorySlug;
  const articles = ARTICLES.filter((a) => a.category === category);
  const label = CATEGORY_LABELS[category];

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10 pb-6 border-b border-border">
          <div className="font-display uppercase tracking-widest text-[11px] text-muted-foreground mb-2">
            Kategori
          </div>
          <h1 className="font-display text-5xl font-black text-primary uppercase">
            {label}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{articles.length} yazı</p>
        </div>
        {articles.length > 0 ? (
          <ArticleGrid articles={articles} />
        ) : (
          <p className="text-center text-muted-foreground py-20">Bu kategoride henüz yazı yok.</p>
        )}
      </main>
    </SiteShell>
  );
}
