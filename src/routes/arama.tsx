import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";

import { SiteShell, ArticleGrid } from "@/components/site/SiteShell";
import { ARTICLES } from "@/data/articles";

const searchSchema = z.object({
  q: z.string().optional().default(""),
});

export const Route = createFileRoute("/arama")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Arama — Sine-Meta" },
      { name: "description", content: "Sine-Meta içinde arama yapın." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const query = q.trim().toLocaleLowerCase("tr");
  const results = query
    ? ARTICLES.filter(
        (a) =>
          a.title.toLocaleLowerCase("tr").includes(query) ||
          a.excerpt.toLocaleLowerCase("tr").includes(query),
      )
    : [];

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-center mb-2">
          Arama
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          {query ? (
            <>
              &ldquo;<em>{q}</em>&rdquo; için {results.length} sonuç
            </>
          ) : (
            "Yukarıdaki arama kutusundan bir şey aratın."
          )}
        </p>
        {results.length > 0 ? (
          <ArticleGrid articles={results} />
        ) : query ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Sonuç bulunamadı.{" "}
              <Link to="/" className="text-primary underline">
                Anasayfaya dön
              </Link>
            </p>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
