import { createFileRoute, Link } from "@tanstack/react-router";

import { ArticleGrid, SiteShell } from "@/components/site/SiteShell";
import { ARTICLES } from "@/data/articles";
import { NEWS } from "@/data/news";

const LATEST_NEWS_SLUGS = new Set(NEWS.slice(-3).map((n) => n.slug));

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

function Index() {
  const latestNews = NEWS.slice(-3);
  const filteredArticles = ARTICLES.filter((a) => {
    if (a.newsSlug) return !LATEST_NEWS_SLUGS.has(a.newsSlug);
    return true;
  });

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {latestNews.map((n) => (
              <Link
                key={n.slug}
                to="/haber/$slug"
                params={{ slug: n.slug }}
                className="group border border-black bg-background shadow-[0_2px_0_0_rgba(0,0,0,1)] block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted border-b border-black">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    width={400}
                    height={250}
                    loading="eager"
                  />
                </div>
                <div className="p-3">
                  <span className="font-display uppercase tracking-widest text-[10px] bg-primary text-primary-foreground font-bold inline-block px-2 py-1 mb-2">
                    Haber
                  </span>
                  <h3 className="font-serif-display text-sm font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {n.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ArticleGrid articles={filteredArticles} />
      </main>
    </SiteShell>
  );
}
