import { createFileRoute, notFound } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { useEffect } from "react";
import { z } from "zod";

import { ArticleGrid, SiteShell } from "@/components/site/SiteShell";
import { ARTICLES, CATEGORY_LABELS, type CategorySlug } from "@/data/articles";

const VALID: CategorySlug[] = ["haberler", "incelemeler", "listeler", "diziler", "muzik", "roportajlar"];

const PAGE_SIZE = 12;

const searchSchema = z.object({
  page: fallback(z.number().int(), 1).default(1),
});

export const Route = createFileRoute("/kategori/$slug")({
  validateSearch: zodValidator(searchSchema),
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
  const { page } = Route.useSearch();
  const navigate = Route.useNavigate();
  const category = slug as CategorySlug;
  const articles = ARTICLES.filter((a) => a.category === category);
  const label = CATEGORY_LABELS[category];

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pageArticles = articles.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  }, [safePage, slug]);

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="sr-only">{label}</h1>
        {pageArticles.length > 0 ? (
          <ArticleGrid articles={pageArticles} compact />
        ) : (
          <p className="text-center text-muted-foreground py-20">Bu kategoride henüz yazı yok.</p>
        )}

        {totalPages > 1 ? (
          <nav className="mt-10 flex justify-center items-center gap-2 flex-wrap" aria-label="Sayfalama">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              const active = p === safePage;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => navigate({ search: { page: p } })}
                  aria-current={active ? "page" : undefined}
                  className={
                    "font-display font-black text-lg min-w-[40px] h-10 px-3 border-2 transition-colors " +
                    (active
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-black text-white border-black hover:bg-red-600 hover:border-red-600")
                  }
                >
                  {p}
                </button>
              );
            })}
          </nav>
        ) : null}
      </main>
    </SiteShell>
  );
}
