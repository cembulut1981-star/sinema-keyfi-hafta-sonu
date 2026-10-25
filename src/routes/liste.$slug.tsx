import { articleHead } from "@/lib/seo";
import { ArticleByline } from "@/components/site/ArticleByline";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

import trailerProjectHailMary from "@/assets/trailer-project-hail-mary.mp4.asset.json";
import trailerBackrooms from "@/assets/trailer-backrooms.mp4.asset.json";
import trailerSpiderMan from "@/assets/trailer-spider-man.mp4.asset.json";
import trailerMandalorian from "@/assets/trailer-mandalorian-grogu.mp4.asset.json";
import trailerDisclosureDay from "@/assets/trailer-disclosure-day.mp4.asset.json";
import trailerWarMachine from "@/assets/trailer-war-machine.mp4.asset.json";
import trailerMercy from "@/assets/trailer-mercy.mp4.asset.json";

import { SiteShell } from "@/components/site/SiteShell";
import { articleProse } from "@/lib/prose";
import { ShareButtons } from "@/components/site/ShareButtons";
import { OtherArticlesSidebar } from "@/components/site/OtherArticlesSidebar";
import { getList, LISTS } from "@/data/lists";

export const Route = createFileRoute("/liste/$slug")({
  beforeLoad: ({ params }) => {
    if (!getList(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const l = getList(params.slug);
    if (!l) return { meta: [{ title: "Liste bulunamadı — Sine-Meta" }, { name: "robots", content: "noindex" }] };
    return articleHead(l, `/liste/${params.slug}`);
  },
  component: ListPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-black">List not found</h1>
        <Link to="/kategori/$slug" params={{ slug: "listeler" }} className="text-primary mt-4 inline-block">All lists</Link>
      </main>
    </SiteShell>
  ),
});

// Fragman butonu gösterilecek film başlıkları (sitede barındırılan videolar)
const FILM_TRAILERS: { match: string; src: string; label: string }[] = [
  { match: "Project Hail Mary", src: trailerProjectHailMary.url, label: "Project Hail Mary fragmanı" },
  { match: "Spider-Man: Brand New Day", src: trailerSpiderMan.url, label: "Spider-Man: Brand New Day fragmanı" },
  { match: "Backrooms", src: trailerBackrooms.url, label: "Backrooms fragmanı" },
  { match: "The Mandalorian and Grogu", src: trailerMandalorian.url, label: "Star Wars: The Mandalorian and Grogu fragmanı" },
  { match: "Disclosure Day", src: trailerDisclosureDay.url, label: "Disclosure Day fragmanı" },
  { match: "War Machine", src: trailerWarMachine.url, label: "War Machine fragmanı" },
  { match: "Mercy", src: trailerMercy.url, label: "Mercy fragmanı" },
];

function trailerFor(children: React.ReactNode) {
  const text = typeof children === "string" ? children : "";
  return FILM_TRAILERS.find((t) => text.includes(t.match)) ?? null;
}

function ListPage() {
  const { slug } = Route.useParams();
  const l = getList(slug)!;
  const others = LISTS.filter((x) => x.slug !== slug);
  const [openTrailer, setOpenTrailer] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    if (!openTrailer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenTrailer(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openTrailer]);

  return (
    <SiteShell>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
        <article className="min-w-0">
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold leading-tight mt-3 text-balance text-center">
          {l.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{l.excerpt}</p>
        <ArticleByline source={l.source} />

        <div className="my-10 flex justify-center">
          <div className="w-full max-w-[900px] p-3" style={{ background: [...slug].reduce((a,c)=>a+c.charCodeAt(0),0) % 2 === 0 ? "#ffbd3f" : "#00EAA1" }}>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <img src={l.image} alt={l.title} className="w-full h-full object-cover" width={1600} height={900} />
            </div>
          </div>
        </div>

        <div className={articleProse}>
          <ReactMarkdown
            components={{
              // Rolling Stone galerisindeki gibi kalın siyah çerçeveli görseller
              img: ({ src, alt }) => (
                <span className="my-10 block not-prose">
                  <span className="relative mx-auto block w-full max-w-[760px] border-4 border-black bg-black">
                    <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} loading="lazy" className="w-full h-auto block" />
                    {/* Film adı: fotoğrafın üzerinde sarı-siyah rozet (alt yazı yok) */}
                    {slug === "best-sci-fi-movies-of-2026" && alt ? (
                      <span className="absolute bottom-4 left-4 inline-block max-w-[90%] bg-[#ffbd3f] px-4 py-2 font-display text-base sm:text-lg font-bold uppercase tracking-wider text-black">
                        {alt}
                      </span>
                    ) : null}
                  </span>
                  {alt && slug !== "best-sci-fi-movies-of-2026" ? (
                    <span className="mt-3 block text-center text-sm text-muted-foreground">{alt}</span>
                  ) : null}
                </span>
              ),
              ...(slug === "mcu-oncesi-izlenmesi-gereken-3-x-men-filmi"
                ? {
                    h2: ({ children }: { children?: React.ReactNode }) => (
                      <h2
                        className="font-serif-display text-2xl font-bold underline underline-offset-4 mb-6"
                        style={{ color: "#00EAA1" }}
                      >
                        {children}
                      </h2>
                    ),
                  }
                : slug === "best-sci-fi-movies-of-2026"
                ? {
                    // Film adlarının altında, harflerin alt üçünü kesen yeşil işaretçi çizgisi
                    h2: ({ children }: { children?: React.ReactNode }) => {
                      const trailer = trailerFor(children);
                      return (
                        <h2 className="font-serif-display text-3xl font-black leading-snug mt-12 mb-8">
                          <span
                            className="box-decoration-clone"
                            style={{
                              backgroundImage:
                                "linear-gradient(to top, transparent 0 12%, var(--card-green) 12% 46%, transparent 46%)",
                            }}
                          >
                            {children}
                          </span>
                          {trailer ? (
                            <button
                              type="button"
                              onClick={() => setOpenTrailer(trailer)}
                              aria-label={trailer.label}
                              className="ml-3 inline-flex translate-y-[-2px] items-center gap-2 border-2 border-black bg-black px-3 py-1 text-[11px] font-display font-bold uppercase tracking-wider text-white align-middle transition-colors hover:bg-white hover:text-black"
                            >
                              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden="true">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              Fragman
                            </button>
                          ) : null}
                        </h2>
                      );
                    },
                  }
                : {
                    h2: ({ children }: { children?: React.ReactNode }) => (
                      <h2 className="font-serif-display text-3xl font-black leading-snug mt-12 mb-8">
                        {children}
                      </h2>
                    ),
                  }),
            }}
          >
            {l.body}
          </ReactMarkdown>



        </div>

        <ShareButtons title={l.title} path={`/liste/${slug}`} />
        </article>

        <OtherArticlesSidebar heading="Diğer listeler" items={others} to="/liste/$slug" />
      </div>

      {openTrailer ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
          onClick={() => setOpenTrailer(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openTrailer.label}
        >
          <div
            className="relative w-full max-w-[640px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenTrailer(null)}
              aria-label="Fragmanı kapat"
              className="absolute -right-3 -top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white shadow-lg transition-colors hover:bg-neutral-600"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <video
              src={openTrailer.src}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full rounded-md bg-black shadow-2xl"
            />
            <p className="mt-3 text-center text-xs uppercase tracking-wider text-white/80">
              {openTrailer.label} — kapatmak için ✕ tuşunu kullan
            </p>
          </div>
        </div>
      ) : null}
    </SiteShell>
  );
}

