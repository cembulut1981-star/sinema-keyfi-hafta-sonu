import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Search } from "lucide-react";

import logoAsset from "@/assets/logo.svg.asset.json";
import kissIconAsset from "@/assets/rock-kiss-icon.png.asset.json";
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
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = q.trim();
    if (!query) {
      setOpen(true);
      return;
    }
    navigate({ to: "/arama", search: { q: query } });
    setOpen(false);
  }

  return (
    <>
      <nav className="border-t border-black border-b border-black sticky top-0 z-30 bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          <img
            src={kissIconAsset.url}
            alt=""
            aria-hidden="true"
            className="h-8 w-8 shrink-0 object-contain"
            width={32}
            height={32}
          />
          <ul className="flex-1 flex items-center justify-center gap-1 overflow-x-auto scrollbar-none">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to as any}
                  params={item.params as any}
                  activeOptions={{ exact: true }}
                  className="relative font-display font-black uppercase tracking-wider text-[13px] px-3 py-4 inline-block whitespace-nowrap text-foreground/70 hover:text-primary transition-colors data-[status=active]:text-primary after:absolute after:left-3 after:right-3 after:bottom-2 after:h-[2px] after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 data-[status=active]:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <form
            onSubmit={onSubmit}
            role="search"
            className="shrink-0 flex items-center"
          >
            <label htmlFor="site-search" className="sr-only">Ara</label>
            <input
              id="site-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onBlur={() => { if (!q) setOpen(false); }}
              placeholder="Ara"
              aria-hidden={!open}
              tabIndex={open ? 0 : -1}
              className={`bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none border-b border-black/70 focus:border-primary transition-all duration-200 ${
                open ? "w-32 sm:w-40 opacity-100 px-2 py-1" : "w-0 opacity-0 p-0 border-transparent"
              }`}
            />
            <button
              type={open ? "submit" : "button"}
              onClick={() => {
                if (!open) {
                  setOpen(true);
                  setTimeout(() => document.getElementById("site-search")?.focus(), 0);
                }
              }}
              aria-label="Ara"
              className="pl-2 pr-1 py-1 border-l border-black/70 ml-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>
      </nav>
      <div className="h-3 bg-primary" aria-hidden="true" />
    </>
  );
}

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="border-t border-black/10 mt-20 bg-white">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-6">
        <span
          className="inline-flex items-center justify-center px-3 py-1 font-display text-2xl font-black tracking-tight text-black leading-none"
          style={{ background: "linear-gradient(to bottom, #00EAA1 0%, #00EAA1 50%, transparent 50%, transparent 100%)" }}
        >
          SM
        </span>
        <span className="flex-1 text-center italic text-neutral-600 text-[11px] tracking-wide">
          Sine-Meta media. Bağımsız sinema dergisi, tüm hakları saklıdır.
        </span>

        <div className="ml-auto relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            aria-haspopup="menu"
            aria-expanded={open}
            className="inline-flex items-center justify-between gap-4 min-w-[240px] text-xs font-display uppercase tracking-widest text-neutral-700 hover:text-primary transition-colors border border-black/15 px-5 py-3 bg-white"
          >
            <span>Keşfet — Kategoriler</span>
            <span className={`transition-transform text-[10px] ${open ? "rotate-180" : ""}`}>▾</span>
          </button>
          {open ? (
            <div
              role="menu"
              className="absolute right-0 bottom-full mb-2 w-[240px] bg-white border border-black/10 shadow-lg py-1 z-40"
            >
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to as any}
                  params={item.params as any}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-2.5 text-xs font-display uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

      </div>
    </footer>
  );
}


export function ArticleGrid({ articles, compact = false }: { articles: Article[]; compact?: boolean }) {
  if (compact) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} compact />
        ))}
      </section>
    );
  }
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
      <div
        className="flex-[0.6] min-h-0 flex items-center justify-center overflow-hidden"
        style={{ background: article.id % 2 === 0 ? "#00EAA1" : "#ffbd3f" }}
      >
        <div className="relative w-full h-full px-2 pt-1">
          {linkTo ? (
            <Link to={linkTo.to} params={linkTo.params} className="block w-full h-full relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </Link>
            ) : (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-top"
                width={600}
                height={450}
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
      <div className="flex-[0.4] min-h-0 bg-background px-4 pt-2 pb-3 flex flex-col justify-center">
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

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
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
                className="w-full h-full object-cover object-top"
                width={1200}
                height={750}
                loading="lazy"
              />
            </Link>
          ) : (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-top"
              width={1200}
              height={750}
              loading="lazy"
            />
          )}
      </div>
      <div className={compact ? "p-3 flex-1 flex flex-col" : "p-4 flex-1 flex flex-col"}>
        <span className={`font-display uppercase tracking-widest bg-primary text-primary-foreground font-bold mb-2 self-start px-2 py-1 ${compact ? "text-[9px]" : "text-[10px]"}`}>
          {CATEGORY_LABEL[article.category]}
        </span>
        <h2 className={`font-serif-display font-bold leading-tight mb-2 text-balance ${compact ? "text-base" : "text-xl"}`}>
          {TitleLink}
        </h2>
        <p className={`text-muted-foreground leading-relaxed mb-3 ${compact ? "text-[12px] line-clamp-2" : "text-[14px] line-clamp-3"}`}>
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
