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
        <h1 className="sr-only">{label}</h1>
        {articles.length > 0 ? (
          <ArticleGrid articles={articles} />
        ) : (
          <p className="text-center text-muted-foreground py-20">Bu kategoride henüz yazı yok.</p>
        )}
      </main>
    </SiteShell>
  );
}
