import { articleHead } from "@/lib/seo";
import { ArticleByline } from "@/components/site/ArticleByline";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { SiteShell, ImdbBadge } from "@/components/site/SiteShell";
import { articleProse, toParagraphs } from "@/lib/prose";
import { ShareButtons } from "@/components/site/ShareButtons";
import { OtherArticlesSidebar } from "@/components/site/OtherArticlesSidebar";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { getReview, REVIEWS } from "@/data/reviews";
import nocturneKarlPhoto from "@/assets/nocturne-karl-photo.jpg.asset.json";
import nocturnePoster from "@/assets/nocturne-poster.png.asset.json";
import clPamWoods from "@/assets/crystal-lake-pam-woods.jpg.asset.json";
import clCrazyRalph from "@/assets/crystal-lake-crazy-ralph.jpg.asset.json";
import clLevonPam from "@/assets/crystal-lake-levon-pam.jpg.asset.json";
import clDorfLevon from "@/assets/crystal-lake-dorf-levon.jpg.asset.json";

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

  return (
    <SiteShell>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
        <article className="min-w-0">
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold leading-tight mt-3 text-balance text-center">
          {r.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{r.excerpt}</p>
        <ArticleByline source={"source" in r ? (r as { source?: string }).source : undefined} />
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
        </article>

        <OtherArticlesSidebar heading="Diğer incelemeler" items={others} to="/inceleme/$slug" />
      </div>
    </SiteShell>
  );
}
