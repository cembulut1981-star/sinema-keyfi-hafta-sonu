import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Search } from "lucide-react";

import logoAsset from "@/assets/logo.svg.asset.json";
import kissMarkAsset from "@/assets/rock-kiss-mark.png";
import { type Article, type CategorySlug } from "@/data/articles";

const NAV: { label: string; to: string; params?: Record<string, string> }[] = [
  { label: "Anasayfa", to: "/" },
  { label: "Haberler", to: "/kategori/$slug", params: { slug: "haberler" } },
  { label: "İncelemeler", to: "/kategori/$slug", params: { slug: "incelemeler" } },
  { label: "Listeler", to: "/kategori/$slug", params: { slug: "listeler" } },
  { label: "Diziler", to: "/kategori/$slug", params: { slug: "diziler" } },
  { label: "Müzik", to: "/kategori/$slug", params: { slug: "muzik" } },
  { label: "PC Oyunları", to: "/kategori/$slug", params: { slug: "pc-games" } },
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

/** Sine-Meta simgesi: retro dudak (kiss) işareti. */
export function SiteMark({ className = "h-9 w-9" }: { className?: string }) {
  return <img src={kissMarkAsset} alt="" className={`${className} object-contain`} draggable={false} />;
}

const TRENDING: { label: string; slug: string }[] = [
  { label: "Vizyondakiler", slug: "haberler" },
  { label: "2026 Bilimkurgu", slug: "listeler" },
  { label: "Yeni Diziler", slug: "diziler" },
  { label: "Oyun Rehberi", slug: "pc-games" },
  { label: "Konserler", slug: "muzik" },
];

function Header() {
  return (
    <header>
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 h-9 flex items-center gap-4 text-[11px] font-display uppercase tracking-[0.18em]">
          <span className="inline-flex items-center gap-2 font-black">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            Trend
          </span>
          <ul className="flex-1 flex items-center gap-5 overflow-x-auto scrollbar-none whitespace-nowrap">
            {TRENDING.map((t) => (
              <li key={t.label}>
                <Link to="/kategori/$slug" params={{ slug: t.slug }} className="opacity-70 hover:opacity-100 hover:text-primary transition">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="/rss.xml" className="hidden sm:inline opacity-70 hover:opacity-100 hover:text-primary">RSS</a>
        </div>
      </div>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <p className="hidden md:block w-48 font-display text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground leading-relaxed">
          Film · Dizi · Oyun<br />Bağımsız eleştiri dergisi
        </p>
        <Link to="/" className="flex-1 md:flex-none flex justify-center">
          <img src={logoAsset.url} alt="Sine-Meta" className="h-14 sm:h-16 w-auto" width={2017} height={528} />
        </Link>
        <div className="hidden md:flex w-48 justify-end">
          <Link to="/kategori/$slug" params={{ slug: "listeler" }} className="inline-flex items-center gap-2 border-2 border-foreground px-3 py-2 font-display text-[10px] font-black uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
            Editörün Seçimi →
          </Link>
        </div>
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
    <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-y-2 border-foreground shadow-[0_6px_0_-3px_var(--primary)]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 flex items-center gap-3">
        <Link to="/" aria-label="Anasayfa" className="shrink-0">
          <SiteMark className="h-8 w-8" />
        </Link>
        <ul className="flex-1 flex items-center justify-center gap-1 overflow-x-auto scrollbar-none">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to as any}
                params={item.params as any}
                activeOptions={{ exact: true }}
                className="relative font-display font-black uppercase tracking-wider text-[13px] px-3 py-4 inline-block whitespace-nowrap text-foreground/75 hover:text-foreground transition-colors data-[status=active]:text-foreground after:absolute after:left-3 after:right-3 after:bottom-0 after:h-[4px] after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 data-[status=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmit} role="search" className="shrink-0 flex items-center">
          <label htmlFor="site-search" className="sr-only">Ara</label>
          <input
            id="site-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onBlur={() => { if (!q) setOpen(false); }}
            placeholder="Film, dizi, oyun ara"
            aria-hidden={!open}
            tabIndex={open ? 0 : -1}
            className={`bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none border-b-2 border-foreground focus:border-primary transition-all duration-200 ${
              open ? "w-36 sm:w-48 opacity-100 px-2 py-1" : "w-0 opacity-0 p-0 border-transparent"
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
            className="ml-2 h-9 w-9 inline-flex items-center justify-center rounded-full bg-foreground text-background hover:bg-primary hover:text-foreground transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-foreground text-background">
      <div className="h-2 bg-primary" aria-hidden="true" />
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-background p-1"><SiteMark className="h-10 w-10" /></span>
            <span className="font-display text-3xl font-black uppercase tracking-tight">Sine-Meta</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-70">
            Film, dizi, müzik ve oyun dünyasından güncel haberler, incelemeler ve listeler. Bağımsız, meraklı, Türkçe.
          </p>
          <a href="/rss.xml" className="mt-5 inline-flex items-center gap-2 border-2 border-background px-4 py-2 font-display text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:text-foreground transition-colors">
            RSS ile takip et
          </a>
        </div>
        <div>
          <h3 className="font-display text-[11px] font-black uppercase tracking-[0.25em] text-primary">Keşfet</h3>
          <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link to={item.to as any} params={item.params as any} className="font-display text-sm font-bold uppercase tracking-wide opacity-80 hover:opacity-100 hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-[11px] font-black uppercase tracking-[0.25em] text-primary">Sine-Meta</h3>
          <ul className="mt-4 space-y-2.5 font-display text-sm font-bold uppercase tracking-wide">
            <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary">Hakkında</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary">İletişim</Link></li>
            <li><a href="https://bsky.app" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 hover:text-primary">Bluesky</a></li>
            <li><a href="https://x.com/filmgezgin" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 hover:text-primary">X / Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-2 text-[11px] opacity-60">
          <span>© 2026 Sine-Meta Media. Tüm hakları saklıdır.</span>
          <span className="font-display uppercase tracking-[0.2em]">sine-meta.com</span>
        </div>
      </div>
    </footer>
  );
}



export function FeaturedArticleCard({
  article,
  badgeLabel = "Öne Çıkan",
  kicker,
  meta,
  tags,
  counter,
  ribbon,
  stats,
}: {
  article: Article;
  badgeLabel?: string;
  kicker?: string;
  meta?: string;
  tags?: string[];
  counter?: string;
  ribbon?: string;
  stats?: { label: string; value: string }[];
}) {
  const linkTo = getArticleLink(article);
  const Img = (
    <img
      src={article.image}
      alt={article.title}
      className={`w-full h-full object-cover ${imageFocusClass(article)}`}
      width={1400}
      height={790}
      loading="eager"
    />
  );

  return (
    <article className="h-full flex flex-col border-l-[3px] border-r-[3px] border-black px-4 sm:px-6 pb-8">
      <div className="mx-auto max-w-3xl w-full h-full flex flex-col">
        {kicker ? (
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-red-600" aria-hidden="true" />
            <span className="font-display uppercase tracking-[0.25em] text-[10px] font-black text-muted-foreground">
              {kicker}
            </span>
            <span className="flex-1 h-px bg-black/15" aria-hidden="true" />
          </div>
        ) : null}
        <div className="relative flex-1 min-h-[240px]">
          {article.videoUrl ? (
            <iframe
              src={article.videoUrl}
              title={article.title}
              className="w-full h-full min-h-[240px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : linkTo ? (
            <Link to={linkTo.to} params={linkTo.params} className="block w-full h-full">
              {Img}
            </Link>
          ) : (
            Img
          )}
          {meta ? (
            <span className="absolute left-0 top-0 bg-[#ffbd3f] text-black px-2.5 py-1 font-display text-[13px] font-black tracking-tight">
              {meta}
            </span>
          ) : null}
          {counter ? (
            <span className="absolute right-0 top-0 bg-black text-white px-2.5 py-1 font-display text-[12px] font-black tracking-[0.18em] uppercase">
              {counter}
            </span>
          ) : null}
          {ribbon ? (
            <span className="absolute right-0 bottom-0 bg-red-600 text-white px-3 py-1 font-display text-[11px] font-black uppercase tracking-[0.2em] -skew-x-12">
              {ribbon}
            </span>
          ) : null}
          {badgeLabel ? (
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-background border-[3px] border-primary px-3 py-1 font-display uppercase tracking-widest text-[11px] font-black text-foreground">
              {badgeLabel}
            </span>
          ) : null}
          <ImdbBadge rating={article.imdbRating} className="absolute left-2 top-2 z-20" />
          {/* Sağ üst köşe: sayaç varsa marka/kategori rozeti onun altına iner, üst üste binmesin. */}
          <CustomBadge
            label={article.customBadge}
            variant={article.customBadgeStyle}
            className={`absolute right-2 z-20 ${counter ? "top-10" : "top-2"}`}
          />
          <CountdownBadge label={article.countdownBadge} className="absolute left-2 bottom-2 z-20" />
        </div>
        <h2 className="mt-8 text-center font-serif-display text-3xl sm:text-4xl font-black leading-tight text-balance">
          {linkTo ? (
            <Link to={linkTo.to} params={linkTo.params}>
              {article.title}
            </Link>
          ) : (
            article.title
          )}
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-[15px] leading-relaxed">
          {article.excerpt}
        </p>
        {stats?.length ? (
          <dl className="mt-5 grid grid-cols-2 sm:grid-cols-4 divide-x divide-black/10 border-y-2 border-black/80">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-2 text-center">
                <dt className="font-display text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="font-display text-[13px] font-black uppercase tracking-tight text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
        {tags?.length ? (
          <ul className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-2">
            {tags.map((t, i) => (
              <li
                key={t}
                className="inline-flex items-center gap-1.5 border border-black/15 px-2.5 py-1 font-display text-[10px] font-black uppercase tracking-wider text-foreground/70"
              >
                <span className="text-[9px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export function FullWidthFeatureCard({
  article,
  categoryLabel = "Dizi",
  dateLabel,
}: {
  article: Article;
  categoryLabel?: string;
  dateLabel: string;
}) {
  const linkTo = getArticleLink(article);

  return (
    <article className="mb-14 border-b border-border pb-6 group">
      <div className="relative aspect-video w-full overflow-hidden bg-muted after:absolute after:left-1/3 after:bottom-0 after:z-10 after:h-[3px] after:w-1/3 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:scale-x-100">
        {linkTo ? (
          <Link to={linkTo.to} params={linkTo.params} className="block h-full w-full">
            <img
              src={article.image}
              alt={article.title}
              className={`h-full w-full object-cover ${imageFocusClass(article)}`}
              width={1600}
              height={900}
              loading="eager"
            />
          </Link>
        ) : (
          <img
            src={article.image}
            alt={article.title}
            className={`h-full w-full object-cover ${imageFocusClass(article)}`}
            width={1600}
            height={900}
            loading="eager"
          />
        )}
      </div>
      <h2 className="mt-3 font-serif-display text-xl font-bold leading-snug sm:text-2xl">
        {linkTo ? (
          <Link to={linkTo.to} params={linkTo.params} className="transition-colors hover:text-primary">
            {article.title}
          </Link>
        ) : (
          article.title
        )}
      </h2>
      <p className="mt-3 font-display text-xs font-bold uppercase text-muted-foreground">
        <span className="text-primary">{categoryLabel}</span>
        <span className="mx-2 text-border" aria-hidden="true">|</span>
        <time>{dateLabel}</time>
      </p>
    </article>
  );
}

export function ArticleGrid({ articles, compact = false }: { articles: Article[]; compact?: boolean }) {
  if (compact) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} compact />
        ))}
      </section>
    );
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
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

// Bazı portre görsellerde yüz, varsayılan "object-top" kırpmasıyla yarım kalıyor.
// Bu içerikler için özel odak noktası tanımlıyoruz.
const IMAGE_FOCUS: Record<string, string> = {
  "audrey-hepburn-anne-frank-rolunu-neden-reddetti": "object-[50%_35%]",
  "juliette-lewis-cape-fear-gosterimi-sonrasi-ozur": "object-[50%_25%]",
};

export function imageFocusClass(article: Article) {
  const slug =
    article.newsSlug ?? article.seriesSlug ?? article.reviewSlug ?? article.listSlug ?? article.musicSlug ?? "";
  return IMAGE_FOCUS[slug] ?? "object-top";
}

/**
 * IMDb tarzı puan etiketi — siyah zemin, altın sarısı "IMDb" logosu ve beyaz puan.
 * Sadece imdbRating alanı tanımlı olan kartlarda gösterilir.
 */
export function ImdbBadge({ rating, className = "" }: { rating?: string; className?: string }) {
  if (!rating) return null;
  return (
    <span
      className={`inline-flex items-baseline gap-1 bg-black px-2 py-1 rounded-sm shadow-md ${className}`}
      style={{ fontFamily: "'Arial', sans-serif" }}
    >
      <span className="font-black text-[11px] tracking-tight" style={{ color: "#F5C518" }}>
        IMDb
      </span>
      <span className="text-white font-bold text-[13px] leading-none">{rating}</span>
      <span className="text-neutral-400 text-[10px] leading-none font-medium">/10</span>
    </span>
  );
}

/**
 * Özel metin rozeti — IMDb etiketiyle aynı görsel dili kullanır ama içeriği
 * serbest metindir (ör. "monsters of god"). customBadge tanımlı kartlarda gösterilir.
 * variant: "default" (siyah zemin, beyaz yazı) | "light" (beyaz zemin, siyah yazı).
 */
export function CustomBadge({
  label,
  variant = "default",
  className = "",
}: {
  label?: string;
  variant?: "default" | "light";
  className?: string;
}) {
  if (!label) return null;
  const isLight = variant === "light";
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-sm shadow-md border ${className}`}
      style={{ fontFamily: "'Arial', sans-serif", background: isLight ? "#fff" : "#000", borderColor: isLight ? "#000" : "transparent" }}
    >
      <span
        className="font-black text-[11px] tracking-tight uppercase leading-none"
        style={{ color: isLight ? "#000" : "#fff" }}
      >
        {label}
      </span>
    </span>
  );
}

/**
 * Rozet altına alındığında kullanılan sarı kapsül — siyah kalın çerçeve,
 * yuvarlatılmış tam kenar ve siyah kalın büyük harf metin.
 */
export function BadgePill({ label, className = "" }: { label?: string; className?: string }) {
  if (!label) return null;
  return (
    <span
      className={`inline-block rounded-full border-[3px] border-black bg-[#ffe600] px-4 py-0.5 font-display uppercase font-black text-[11px] tracking-wide leading-tight text-black ${className}`}
    >
      {label}
    </span>
  );
}

/**
 * Geri sayım rozeti — sıralama (ranking) içeriklerinde kullanılır.
 * Siyah zemin, neon yeşil sayaç ve kırmızı tik çizgileriyle site diline uyar.
 */
export function CountdownBadge({ label, className = "" }: { label?: string; className?: string }) {
  if (!label) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-black pl-1.5 pr-2 py-1 rounded-sm shadow-md ${className}`}
    >
      <span className="flex items-end gap-[2px]" aria-hidden>
        <span className="w-[2px] h-2 bg-red-600" />
        <span className="w-[2px] h-3 bg-red-600" />
        <span className="w-[2px] h-[18px] bg-[#00EAA1]" />
      </span>
      <span
        className="font-display font-black text-[11px] tracking-[0.14em] uppercase leading-none"
        style={{ color: "#00EAA1" }}
      >
        {label}
      </span>
    </span>
  );
}


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

/**
 * Rolling Stone "THE LISTS" kapak tarzı poster kart.
 * Normal hali kırmızı zemin + gölgeli beyaz başlık, hover'da zemin siyaha döner.
 */
const POSTER_SLUGS = new Set(["2026-nin-en-iyi-10-oyunu"]);

function isPosterArticle(article: Article) {
  return !!article.listSlug && POSTER_SLUGS.has(article.listSlug);
}

export function PosterListCard({ article, className = "", compact = false }: { article: Article; className?: string; compact?: boolean }) {
  const linkTo = getArticleLink(article);
  const body = (
    <div className={`relative h-full w-full overflow-hidden bg-red-600 group-hover:bg-black transition-colors duration-300 flex flex-col items-center justify-center text-center ${compact ? "px-4 py-6" : "px-6 py-8"}`}>
      <h3
        className={`font-vintage uppercase text-white leading-[1] tracking-tight ${compact ? "text-[clamp(1.1rem,2.4vw,1.7rem)]" : "text-[clamp(1.5rem,3.9vw,3rem)]"} [text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] group-hover:[text-shadow:none] transition-all duration-300`}
      >
        {article.title}
      </h3>
      <p className={`mt-3 text-white/95 leading-snug max-w-[36ch] ${compact ? "text-[0.8rem]" : "mt-4 text-[clamp(0.95rem,1.75vw,1.3rem)]"}`}>
        {article.excerpt}
      </p>

      <span
        aria-hidden
        className={`absolute -right-2 -bottom-1 bg-black group-hover:bg-red-600 transition-colors duration-300 text-white font-display font-black uppercase leading-[0.85] text-right ${compact ? "px-2 pt-1 pb-1.5 text-[0.7rem]" : "px-4 pt-2 pb-3 text-[clamp(1.2rem,2.6vw,2.1rem)]"}`}
      >
        THE LISTS
      </span>


    </div>
  );

  return (
    <article className={`group h-full transition-shadow duration-300 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.45)] ${className}`}>
      {linkTo ? (
        <Link to={linkTo.to} params={linkTo.params} className="block h-full">
          {body}
        </Link>
      ) : (
        body
      )}
    </article>
  );
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
  if (isPosterArticle(article)) return <PosterListCard article={article} className={className} />;

  const inner = (
    <>
      <img
        src={article.image}
        alt={article.title}
        className={`absolute inset-0 w-full h-full object-cover ${imageFocusClass(article)}`}
        width={600}
        height={450}
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <OverlayBadges article={article} badgeInImage={badgeInImage} />
      <div className="absolute inset-x-0 bottom-0 px-4 pb-6 pt-8">
        {article.customBadgeBelow && article.customBadge ? (
          <BadgePill label={article.customBadge} className="mb-2" />
        ) : null}
        {linkTo ? (
          <h3 className="font-display font-black text-base leading-tight text-white line-clamp-2 decoration-2 underline-offset-4 group-hover:underline">
            {article.title}
          </h3>
        ) : (
          <h3 className="font-display font-black text-base leading-tight text-white line-clamp-2">
            {article.title}
          </h3>
        )}
      </div>
    </>
  );

  return (
    <article className={`group relative w-full min-w-0 min-h-[180px] aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-muted transition-shadow duration-300 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.35)] ${className || ""}`}>
      {linkTo ? <Link to={linkTo.to} params={linkTo.params} className="block absolute inset-0">{inner}</Link> : inner}
    </article>
  );
}

function OverlayBadges({ article, badgeInImage = true }: { article: Article; badgeInImage?: boolean }) {
  return (
    <>
      <div className="absolute left-2 top-2 z-20 flex flex-col items-start gap-1.5">
        <ImdbBadge rating={article.imdbRating} />
        <CountdownBadge label={article.countdownBadge} />
      </div>
      <div className="absolute right-2 top-2 z-20 flex flex-col items-end gap-1.5">
        {!article.customBadgeBelow ? (
          <CustomBadge label={article.customBadge} variant={article.customBadgeStyle} />
        ) : null}
        {badgeInImage && !article.hideCategoryBadge ? (
          <span className="font-display uppercase tracking-widest text-[9px] bg-primary text-primary-foreground font-bold px-1.5 py-0.5">
            {CATEGORY_LABEL[article.category]}
          </span>
        ) : null}
      </div>
    </>
  );
}

export function ArticleCard({ article, compact = false, framed = false }: { article: Article; compact?: boolean; framed?: boolean }) {
  const linkTo = getArticleLink(article);
  if (isPosterArticle(article)) return <PosterListCard article={article} compact={compact} className={framed ? "border-[3px] border-black" : ""} />;

  const TitleLink = linkTo ? (
    <Link to={linkTo.to} params={linkTo.params} className="block">
      {article.title}
    </Link>
  ) : (
    <span>{article.title}</span>
  );

  return (
    <article
      className={
        framed
          ? "bg-background border-[3px] border-black h-full flex flex-col overflow-hidden group shadow-[10px_10px_0_0_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[14px_14px_0_0_rgba(0,0,0,1)]"
          : "bg-background border-b-[3px] border-black h-full flex flex-col overflow-hidden group transition-shadow duration-300 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.35)]"
      }
    >
      <div className="relative flex-1 min-h-[220px] md:min-h-0 overflow-hidden bg-muted after:absolute after:left-1/3 after:bottom-0 after:h-[3px] after:w-1/3 after:bg-red-600 after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:z-10">
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
                className={`w-full h-full object-cover ${imageFocusClass(article)}`}
                width={1200}
                height={750}
                loading="lazy"
              />
            </Link>
          ) : (
            <img
              src={article.image}
              alt={article.title}
              className={`w-full h-full object-cover ${imageFocusClass(article)}`}
              width={1200}
              height={750}
              loading="lazy"
            />
          )}
          <ImdbBadge rating={article.imdbRating} className="absolute left-2 top-2 z-20" />
          {!article.customBadgeBelow ? (
            <CustomBadge label={article.customBadge} variant={article.customBadgeStyle} className="absolute right-2 top-2 z-20" />
          ) : null}
          <CountdownBadge label={article.countdownBadge} className="absolute left-2 bottom-2 z-20" />
      </div>
      <div className="px-4 py-3 flex flex-col">
        {article.customBadgeBelow && article.customBadge ? (
          <BadgePill label={article.customBadge} className="mb-1.5 self-start" />
        ) : null}
        {!article.hideCategoryBadge ? (
          <span className={`font-display uppercase tracking-widest bg-primary text-primary-foreground font-bold mb-1.5 self-start px-2 py-0.5 ${compact ? "text-[9px]" : "text-[10px]"}`}>
            {CATEGORY_LABEL[article.category]}
          </span>
        ) : null}
        <h2 className={`font-serif-display font-bold leading-tight mb-1.5 text-balance ${compact ? "text-base" : "text-xl"}`}>
          {TitleLink}
        </h2>
        <p className={`text-muted-foreground leading-snug mb-2 ${compact ? "text-[12px] line-clamp-2" : "text-[13.5px] line-clamp-3"}`}>
          {article.excerpt}
        </p>
        {compact ? null : linkTo ? (
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

export function OverlayArticleCard({ article }: { article: Article }) {
  const linkTo = getArticleLink(article);
  const inner = (
    <>
      <img src={article.image} alt={article.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <OverlayBadges article={article} />
      <div className="absolute inset-x-0 bottom-0 px-5 pb-7 pt-12">
        {article.customBadgeBelow && article.customBadge ? (
          <BadgePill label={article.customBadge} className="mb-2" />
        ) : null}
        <h3 className="font-display font-black text-lg md:text-xl leading-tight text-white line-clamp-3 decoration-2 underline-offset-4 group-hover:underline">
          {article.title}
        </h3>
      </div>
    </>
  );
  return (
    <article className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shrink-0 w-[78%] sm:w-[45%] md:w-auto snap-start">
      {linkTo ? <Link to={linkTo.to} params={linkTo.params} className="block absolute inset-0">{inner}</Link> : inner}
    </article>
  );
}

export function OverlayRow({ articles }: { articles: Article[] }) {
  return (
    <section className={`flex md:grid ${articles.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-4 mb-12 overflow-x-auto md:overflow-visible snap-x pb-2`}>
      {articles.map((a) => <OverlayArticleCard key={a.id} article={a} />)}
    </section>
  );
}
