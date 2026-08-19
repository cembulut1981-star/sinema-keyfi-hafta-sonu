import { createFileRoute, notFound } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { useEffect } from "react";
import { z } from "zod";

import { ArticleCard, ArticleGrid, FeaturedArticleCard, SiteShell } from "@/components/site/SiteShell";
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
    const label = CATEGORY_LABELS[params.slug as CategorySlug] ?? "Category";
    return {
      meta: [
        { title: `${label} — Sine-Meta` },
        { name: "description", content: `The latest film and TV news, reviews and features in ${label}.` },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Category not found</h1>
      </main>
    </SiteShell>
  ),
  errorComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Something went wrong</h1>
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

  const featured =
    safePage === 1
      ? category === "haberler"
        ? pageArticles.find((a) => a.newsSlug === "robert-downey-jr-ryan-gosling-ghost-rider-mcu") ?? null
        : category === "muzik"
        ? pageArticles.find((a) => a.musicSlug === "evanescence-amy-lee-sanctuary-kapak-roportaji") ?? null
        : category === "incelemeler"
        ? pageArticles.find((a) => a.reviewSlug === "spider-man-brand-new-day-inceleme") ?? null
        : category === "listeler"
        ? pageArticles.find((a) => a.listSlug === "agustos-ayinin-en-iyi-10-dizisi-bbc") ?? null
        : null
      : null;

  const isSpiderFeatured = featured?.reviewSlug === "spider-man-brand-new-day-inceleme";
  const isBbcListFeatured = featured?.listSlug === "agustos-ayinin-en-iyi-10-dizisi-bbc";


  const sidekicks = featured ? pageArticles.filter((a) => a !== featured).slice(0, 2) : [];
  const baseGrid = pageArticles.filter((a) => a !== featured && !sidekicks.includes(a));

  const REACHER_SLUG = "reacher-5-sezon-yeni-kadro-alan-ritchson";
  const secondFeatured =
    safePage === 1 && category === "diziler"
      ? baseGrid.find((a) => a.seriesSlug === REACHER_SLUG) ?? null
      : null;
  const rows = secondFeatured ? baseGrid.filter((a) => a !== secondFeatured) : baseGrid;
  const topRow = secondFeatured ? rows.slice(0, 3) : [];
  const secondSidekicks = secondFeatured ? rows.slice(3, 5) : [];
  const gridArticles = secondFeatured ? rows.slice(5) : rows;

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  }, [safePage, slug]);

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="sr-only">{label}</h1>
        {featured ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6">
            <div className="lg:col-span-2 h-full">
              <FeaturedArticleCard
                article={featured}
                badgeLabel={isSpiderFeatured ? "Critic's Take" : isBbcListFeatured ? "List of the Month" : "Top Story"}
                kicker={
                  isSpiderFeatured
                    ? "TIME · Stephanie Zacharek"
                    : isBbcListFeatured
                    ? "BBC Culture · Caryn James"
                    : undefined
                }
                meta={isSpiderFeatured ? "★★★½  3.5/5" : isBbcListFeatured ? "10 SHOWS" : undefined}
                counter={isBbcListFeatured ? "August" : undefined}
                tags={
                  isBbcListFeatured
                    ? ["Ted Lasso", "The Shards", "Lanterns", "Reacher", "Dark Matter"]
                    : undefined
                }
              />
            </div>
            {sidekicks.length > 0 ? (
              <div className="lg:col-span-1 flex flex-col gap-6">
                {sidekicks.map((a) => (
                  <ArticleCard key={a.id} article={a} compact />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
        {secondFeatured ? (
          <>
            {topRow.length > 0 ? (
              <div className="mb-6">
                <ArticleGrid articles={topRow} compact />
              </div>
            ) : null}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6">
              <div className="lg:col-span-2 h-full">
                <FeaturedArticleCard
                  article={secondFeatured}
                  badgeLabel="TV Headline"
                  kicker="The Hollywood Reporter · Chris Gardner"
                  ribbon="Season 5"
                  stats={[
                    { label: "Platform", value: "Prime Video" },
                    { label: "Source Novel", value: "Make Me" },
                    { label: "New Cast", value: "4 Actors" },
                    { label: "Showrunner", value: "Nick Santora" },
                  ]}
                  tags={["Amanda Ip", "Jay Baruchel", "Ciara Bravo", "Kevin Durand"]}
                />
              </div>
              {secondSidekicks.length > 0 ? (
                <div className="lg:col-span-1 flex flex-col gap-6">
                  {secondSidekicks.map((a) => (
                    <ArticleCard key={a.id} article={a} compact />
                  ))}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
        {gridArticles.length > 0 ? (
          <ArticleGrid articles={gridArticles} compact />
        ) : featured || secondFeatured ? null : (
          <p className="text-center text-muted-foreground py-20">No articles in this category yet.</p>
        )}


        {totalPages > 1 ? (
          <nav className="mt-10 flex justify-center items-center gap-2 flex-wrap" aria-label="Pagination">
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
