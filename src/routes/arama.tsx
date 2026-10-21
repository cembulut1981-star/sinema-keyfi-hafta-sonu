import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";

import { SiteShell, ArticleGrid } from "@/components/site/SiteShell";
import { ARTICLES } from "@/data/articles";
import { useSuspenseQuery } from '@tanstack/react-query';
import { publishedPostsQuery } from '@/lib/editorial-query';
import { toEditorialCard } from '@/lib/editorial';

const searchSchema = z.object({
  q: z.string().optional().default(""),
});

export const Route = createFileRoute("/arama")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedPostsQuery),
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Arama — Sine-Meta" },
      { name: "description", content: "Sine-Meta'da arama yapın." },
      { property: "og:title", content: "Arama — Sine-Meta" },
      { property: "og:description", content: "Sine-Meta'da arama yapın." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const query = q.trim().toLocaleLowerCase("tr");
  const { data: published } = useSuspenseQuery(publishedPostsQuery);
  const results = query
    ? [...published.map(toEditorialCard), ...ARTICLES].filter(
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
              &ldquo;<em>{q}</em>&rdquo; — {results.length} sonuç
            </>
          ) : (
            "Bir şeyler bulmak için yukarıdaki arama kutusunu kullanın."
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
