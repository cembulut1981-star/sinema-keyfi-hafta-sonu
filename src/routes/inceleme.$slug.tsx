import { useEffect, useState } from "react";
import { articleHead } from "@/lib/seo";
import { ArticleByline } from "@/components/site/ArticleByline";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { SiteShell, ImdbBadge } from "@/components/site/SiteShell";
import { ArticleNarration } from "@/components/site/ArticleNarration";
import { articleProse, toParagraphs } from "@/lib/prose";
import { ShareButtons } from "@/components/site/ShareButtons";
import { CommentSection } from "@/components/site/CommentSection";
import { isCommentedPost } from "@/lib/comments";
import { OtherArticlesSidebar } from "@/components/site/OtherArticlesSidebar";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { getReview, REVIEWS } from "@/data/reviews";
import nocturneKarlPhoto from "@/assets/nocturne-karl-photo.jpg.asset.json";
import nocturnePoster from "@/assets/nocturne-poster.png.asset.json";
import clPamWoods from "@/assets/crystal-lake-pam-woods.jpg.asset.json";
import clCrazyRalph from "@/assets/crystal-lake-crazy-ralph.jpg.asset.json";
import clLevonPam from "@/assets/crystal-lake-levon-pam.jpg.asset.json";
import clDorfLevon from "@/assets/crystal-lake-dorf-levon.jpg.asset.json";
import crystalLakeTrailer from "@/assets/crystal-lake-trailer.mp4.asset.json";
import crystalLakeTrailerThumb from "@/assets/crystal-lake-trailer-thumb.jpg.asset.json";

type InlineCaptionPhoto = {
  anchor: string;
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

const CRYSTAL_LAKE_INLINE_PHOTOS: InlineCaptionPhoto[] = [
  {
    anchor: "Callum Vinson",
    src: clPamWoods.url,
    alt: "Linda Cardellini, Pam Voorhees olarak",
    caption: "Linda Cardellini 'Crystal Lake'de",
    credit: "Matt Infante / Peacock",
  },
  {
    anchor: "Dondurulmuş karelerle",
    src: clCrazyRalph.url,
    alt: "Nick Cordileone, Crazy Ralph olarak",
    caption: "Nick Cordileone 'Crystal Lake'de, Crazy Ralph olarak",
    credit: "Matt Infante / Peacock",
  },
  {
    anchor: "gelecekteki şiddetin işaretleri",
    src: clLevonPam.url,
    alt: "William Catlett ve Linda Cardellini",
    caption: "William Catlett ve Linda Cardellini 'Crystal Lake'de",
    credit: "Matt Infante / Peacock",
  },
  {
    anchor: "sondan bir önceki bölümünde",
    src: clDorfLevon.url,
    alt: "Cameron Scoggins ve William Catlett",
    caption: "Cameron Scoggins ve William Catlett 'Crystal Lake'de",
    credit: "Matt Infante / Peacock",
  },
];

export const Route = createFileRoute("/inceleme/$slug")({
  beforeLoad: ({ params }) => {
    if (!getReview(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const r = getReview(params.slug);
    if (!r) return { meta: [{ title: "İnceleme bulunamadı — Sine-Meta" }, { name: "robots", content: "noindex" }] };
    return articleHead(r, `/inceleme/${params.slug}`);
  },
  component: ReviewPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Review not found</h1>
        <Link to="/kategori/$slug" params={{ slug: "incelemeler" }} className="text-primary mt-4 inline-block">All reviews</Link>
      </main>
    </SiteShell>
  ),
});

function ReviewPage() {
  const { slug } = Route.useParams();
  const r = getReview(slug)!;
  const others = REVIEWS.filter((x) => x.slug !== slug);
  const isNocturne = slug === "nocturne-apple-tv-stephen-graham-review";
  const isCrystalLake = slug === "crystal-lake-indiewire-review";
  const [openTrailer, setOpenTrailer] = useState(false);

  useEffect(() => {
    if (!openTrailer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenTrailer(false);
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
          {r.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{r.excerpt}</p>
        <ArticleByline source={"source" in r ? (r as { source?: string }).source : undefined} />

        {r.narrated ? <ArticleNarration slug={r.slug} /> : null}

        <div className="mt-5 flex items-center gap-4 text-sm">
          <span className="font-display font-black text-primary text-xl">{r.rating}</span>
          <span className="text-muted-foreground">Original title: <em>{r.origTitle}</em></span>
        </div>

        <div className="my-10 flex justify-center">
          <div className="w-full max-w-[560px] p-3" style={{ background: [...slug].reduce((a,c)=>a+c.charCodeAt(0),0) % 2 === 0 ? "#ffbd3f" : "#00EAA1" }}>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              {r.videoUrl ? (
                <iframe
                  src={r.videoUrl}
                  title={r.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
              )}
              <ImdbBadge rating={r.imdbRating} className="absolute left-3 top-3 z-20" />
            </div>
          </div>
        </div>

        {isCrystalLake ? (
          <figure className="my-10 not-prose">
            <div className="mx-auto max-w-[420px]">
              <button
                type="button"
                onClick={() => setOpenTrailer(true)}
                aria-label="Crystal Lake fragmanını oynat"
                className="group relative block w-full overflow-hidden border-2 border-black bg-black shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <img
                  src={crystalLakeTrailerThumb.url}
                  alt="Crystal Lake fragmanından bir kare"
                  className="aspect-video w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/80 ring-2 ring-white/80 transition-colors group-hover:bg-primary">
                    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span className="absolute bottom-2 left-2 bg-black/90 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white">
                  Fragman · 2:46
                </span>
              </button>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                Crystal Lake — resmî fragman <em className="text-muted-foreground/80">Peacock</em>
              </figcaption>
            </div>
          </figure>
        ) : null}

        <div className={articleProse}>
          {toParagraphs(r.body).map((para, i) => (
            <div key={i}>
              <ReactMarkdown>{para}</ReactMarkdown>
              {isNocturne && para.includes("Rory Culkin") ? (
                <figure className="my-10 flex justify-center not-prose">
                  <div className="w-full max-w-[560px] bg-[#ffbd3f] p-3">
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <img src={nocturneKarlPhoto.url} alt="Nocturne — Karl (Rory Culkin)" className="w-full h-full object-cover" />
                      <div className="absolute bottom-3 left-3 bg-black/90 px-3 py-1.5">
                        <span className="font-display text-sm font-black uppercase tracking-wider text-white">
                          Rory Culkin — Karl
                        </span>
                      </div>
                    </div>
                  </div>
                </figure>
              ) : null}
              {isNocturne && para.includes("Zazie Beetz") ? (
                <figure className="my-10 flex justify-center not-prose">
                  <div className="w-full max-w-[340px] bg-[#00EAA1] p-3">
                    <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                      <img src={nocturnePoster.url} alt="Nocturne — Apple TV+ poster" className="w-full h-full object-cover" />
                      <div className="absolute bottom-3 left-3 bg-black/90 px-3 py-1.5">
                        <span className="font-display text-sm font-black uppercase tracking-wider text-white">
                          Nocturne — Apple TV+
                        </span>
                      </div>
                    </div>
                  </div>
                </figure>
              ) : null}
              {isCrystalLake
                ? CRYSTAL_LAKE_INLINE_PHOTOS.filter((p) => para.includes(p.anchor)).map((p) => (
                    <figure key={p.anchor} className="my-10 not-prose">
                      <div className="mx-auto max-w-[760px]">
                        <img src={p.src} alt={p.alt} className="w-full" />
                        <figcaption className="mt-2 text-sm text-muted-foreground">
                          {p.caption} <em className="text-muted-foreground/80">{p.credit}</em>
                        </figcaption>
                      </div>
                    </figure>
                  ))
                : null}
            </div>
          ))}
        </div>

        {r.gallery?.length ? <PhotoGallery images={r.gallery} heading="Galeri" /> : null}

        <ShareButtons title={r.title} path={`/inceleme/${slug}`} />
        {isCommentedPost(slug) ? <CommentSection slug={slug} /> : null}
        </article>

        <OtherArticlesSidebar heading="Diğer incelemeler" items={others} to="/inceleme/$slug" />
      </div>

      {openTrailer ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
          onClick={() => setOpenTrailer(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Crystal Lake fragmanı"
        >
          <div
            className="relative w-full max-w-[640px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenTrailer(false)}
              aria-label="Fragmanı kapat"
              className="absolute -right-3 -top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white shadow-lg transition-colors hover:bg-neutral-600"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <video
              src={crystalLakeTrailer.url}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full rounded-md bg-black shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </SiteShell>
  );
}
