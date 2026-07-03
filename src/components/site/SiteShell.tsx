import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logoIcon from "@/assets/logo-icon.png";
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
    <header>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-center">
        <div className="flex items-center gap-1">
          <img src={logoIcon} alt="" className="h-20 w-auto" />
          <Link to="/" className="font-display text-4xl font-black text-primary leading-none">
            SİNE-META
          </Link>
        </div>
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
      <div className="h-5 bg-primary" aria-hidden="true" />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-display text-primary text-xl">SİNE-META</span>
        <span>© 2026 Sine-Meta Sinema Dergisi</span>
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
    : null;
}

export function SmallArticleCard({ article }: { article: Article }) {
  const linkTo = getArticleLink(article);

  return (
    <article className="group flex items-stretch border border-black bg-background shadow-[0_2px_0_0_rgba(0,0,0,1)] transition-shadow duration-200 hover:shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="relative w-28 sm:w-32 flex-shrink-0 overflow-hidden bg-muted border-r border-black">
        {linkTo ? (
          <Link to={linkTo.to} params={linkTo.params} className="block w-full h-full">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              width={200}
              height={150}
              loading="lazy"
            />
          </Link>
        ) : (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            width={200}
            height={150}
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-col justify-center p-3 min-w-0">
        <span className="font-display uppercase tracking-widest text-[9px] bg-primary text-primary-foreground font-bold mb-1 inline-block px-1.5 py-0.5 self-start">
          {CATEGORY_LABEL[article.category]}
        </span>
        {linkTo ? (
          <Link
            to={linkTo.to}
            params={linkTo.params}
            className="font-serif-display text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2"
          >
            {article.title}
          </Link>
        ) : (
          <h3 className="font-serif-display text-sm font-bold leading-snug line-clamp-2">
            {article.title}
          </h3>
        )}
      </div>
    </article>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const linkTo = getArticleLink(article);
  const TitleLink = linkTo ? (
    <Link
      to={linkTo.to}
      params={linkTo.params}
      className="block group-hover:text-primary transition-colors"
    >
      {article.title}
    </Link>
  ) : (
    <span>{article.title}</span>
  );

  return (
    <article className="group border border-black bg-background shadow-[0_2px_0_0_rgba(0,0,0,1)] transition-shadow duration-200 hover:shadow-[0_6px_0_0_rgba(0,0,0,1)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted border-b border-black">
        {linkTo ? (
          <Link to={linkTo.to} params={linkTo.params}>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              width={800}
              height={500}
              loading="lazy"
            />
          </Link>
        ) : (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            width={800}
            height={500}
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <Link
          to="/kategori/$slug"
          params={{ slug: CATEGORY_TO_SLUG[article.category] }}
          className="font-display uppercase tracking-widest text-[10px] bg-primary text-primary-foreground font-bold mb-2 inline-block px-2 py-1"
        >
          {CATEGORY_LABEL[article.category]}
        </Link>
        <h2 className="font-serif-display text-xl font-bold leading-tight mb-2 text-balance">
          {TitleLink}
        </h2>
        <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-3 mb-3">
          {article.excerpt}
        </p>
        {linkTo ? (
          <Link
            to={linkTo.to}
            params={linkTo.params}
            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-foreground/60 group-hover:text-primary transition-colors"
          >
            <span>Devamını Oku</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
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
