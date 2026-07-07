import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logoAsset from "@/assets/logo.svg.asset.json";
import { type Article, type CategorySlug } from "@/data/articles";

const NAV: { label: string; to: string; params?: Record<string, string> }[] = [
  { label: "Anasayfa", to: "/" },
  { label: "Haberler", to: "/kategori/$slug", params: { slug: "haberler" } },
  { label: "İncelemeler", to: "/kategori/$slug", params: { slug: "incelemeler" } },
  { label: "Listeler", to: "/kategori/$slug", params: { slug: "listeler" } },
  { label: "Diziler", to: "/kategori/$slug", params: { slug: "diziler" } },
  { label: "Müzik", to: "/kategori/$slug", params: { slug: "muzik" } },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-center">
        <Link to="/" className="block w-full max-w-2xl">
          <img
            src={logoAsset.url}
            alt="Sine-Meta"
            className="h-20 w-auto mx-auto"
            width={2017}
            height={528}
          />
        </Link>
      </div>
    </header>
  );
}

function Nav() {
  return (
    <>
      <nav className="border-t border-black border-b border-black sticky top-0 z-30 bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-none">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to as any}
                  params={item.params as any}
                  activeOptions={{ exact: true }}
                  className="font-display font-black uppercase tracking-wider text-[13px] px-3 py-4 inline-block whitespace-nowrap text-foreground/70 hover:text-primary transition-colors data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="h-3 bg-primary" aria-hidden="true" />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t-4 border-primary mt-20 bg-gradient-to-b from-background to-muted/40">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-3xl sm:text-4xl font-black tracking-tight uppercase leading-[1.4] py-2 bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent drop-shadow-sm">
          SİNE&#8209;META
        </span>
        <span className="text-black font-bold text-sm tracking-wide">
          © 2026 Sine-Meta Sinema Dergisi
        </span>
      </div>
    </footer>
  );
}

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </section>
  );
}

const CATEGORY_TO_SLUG: Record<CategorySlug, string> = {
  haberler: "haberler",
  incelemeler: "incelemeler",
  listeler: "listeler",
  diziler: "diziler",
  muzik: "muzik",
  roportajlar: "roportajlar",
};

const CATEGORY_LABEL: Record<CategorySlug, string> = {
  haberler: "Haber",
  incelemeler: "İnceleme",
  listeler: "Liste",
  diziler: "Dizi",
  muzik: "Müzik",
  roportajlar: "Röportaj",
};

function getArticleLink(article: Article) {
  return article.reviewSlug
    ? { to: "/inceleme/$slug" as const, params: { slug: article.reviewSlug } }
    : article.newsSlug
    ? { to: "/haber/$slug" as const, params: { slug: article.newsSlug } }
    : article.listSlug
    ? { to: "/liste/$slug" as const, params: { slug: article.listSlug } }
    : article.musicSlug
    ? { to: "/muzik/$slug" as const, params: { slug: article.musicSlug } }
    : article.seriesSlug
    ? { to: "/dizi/$slug" as const, params: { slug: article.seriesSlug } }
    : null;
}

export function SmallArticleCard({
  article,
  className,
  badgeInImage = false,
}: {
  article: Article;
  className?: string;
  badgeInImage?: boolean;
}) {
  const linkTo = getArticleLink(article);

  return (
    <article className={`relative flex flex-col rounded-lg overflow-hidden h-full ${className || ""}`}>
      {/* Üst yarı — yeşil arka plan + fotoğraf */}
      <div className="flex-[0.5] min-h-0 bg-card-green flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full px-3">
          {linkTo ? (
            <Link to={linkTo.to} params={linkTo.params} className="block w-full h-full relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                width={400}
                height={300}
                loading="lazy"
              />
            </Link>
          ) : (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              width={400}
              height={300}
              loading="lazy"
            />
          )}
          {badgeInImage ? (
            <span className="absolute bottom-2 right-2 font-display uppercase tracking-widest text-[9px] bg-primary text-primary-foreground font-bold px-1.5 py-0.5">
              {CATEGORY_LABEL[article.category]}
            </span>
          ) : null}
        </div>
      </div>
      {/* Alt yarı — bembeyaz metin bloğu */}
      <div className="flex-[0.5] min-h-0 bg-background p-4 flex flex-col justify-center">
        {!badgeInImage ? (
          <span className="font-display uppercase tracking-widest text-[9px] bg-primary text-primary-foreground font-bold mb-2 inline-block px-1.5 py-0.5 self-start">
            {CATEGORY_LABEL[article.category]}
          </span>
        ) : null}
        {linkTo ? (
          <Link
            to={linkTo.to}
            params={linkTo.params}
            className="font-serif-display text-sm font-bold leading-snug text-foreground break-words"
          >
            {article.title}
          </Link>
        ) : (
          <h3 className="font-serif-display text-sm font-bold leading-snug break-words">
            {article.title}
          </h3>
        )}
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  const linkTo = getArticleLink(article);
  const TitleLink = linkTo ? (
    <Link to={linkTo.to} params={linkTo.params} className="block">
      {article.title}
    </Link>
  ) : (
    <span>{article.title}</span>
  );

  return (
    <article className="bg-background border-b-[3px] border-black h-full flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {article.videoUrl ? (
          <iframe
            src={article.videoUrl}
            title={article.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : linkTo ? (
          <Link to={linkTo.to} params={linkTo.params}>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              width={800}
              height={500}
              loading="lazy"
            />
          </Link>
        ) : (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            width={800}
            height={500}
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <span className="font-display uppercase tracking-widest text-[10px] bg-primary text-primary-foreground font-bold mb-2 inline-block px-2 py-1">
          {CATEGORY_LABEL[article.category]}
        </span>
        <h2 className="font-serif-display text-xl font-bold leading-tight mb-2 text-balance">
          {TitleLink}
        </h2>
        <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-3 mb-3">
          {article.excerpt}
        </p>
        {linkTo ? (
          <Link to={linkTo.to} params={linkTo.params} className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-foreground/60">
            <span>Devamını Oku</span>
            <span>→</span>
          </Link>
        ) : (
          <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-foreground/60">
            <span>Devamını Oku</span>
            <span>→</span>
          </div>
        )}
      </div>
    </article>
  );
}
