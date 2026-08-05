import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { SiteShell } from "@/components/site/SiteShell";
import { articleProse } from "@/lib/prose";
import { ShareButtons } from "@/components/site/ShareButtons";
import { OtherArticlesSidebar } from "@/components/site/OtherArticlesSidebar";
import { getNews, NEWS } from "@/data/news";
import nickUtAsset from "@/assets/nick-ut.png.asset.json";

export const Route = createFileRoute("/haber/$slug")({
  beforeLoad: ({ params }) => {
    if (!getNews(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const n = getNews(params.slug);
    if (!n) return { meta: [{ title: "Haber bulunamadı — Sine-Meta" }] };
    return {
      meta: [
        { title: `${n.title} — Sine-Meta` },
        { name: "description", content: n.excerpt },
        { property: "og:title", content: n.title },
        { property: "og:description", content: n.excerpt },
        { property: "og:image", content: n.image },
      ],
    };
  },
  component: NewsPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Haber bulunamadı</h1>
        <Link to="/kategori/$slug" params={{ slug: "haberler" }} className="text-primary mt-4 inline-block">Tüm haberler</Link>
      </main>
    </SiteShell>
  ),
});

function NewsPage() {
  const { slug } = Route.useParams();
  const n = getNews(slug)!;
  const others = NEWS.filter((x) => x.slug !== slug);
  const isNapalm = slug === "napalm-kizi-fotografi-tartismasi-kim-cekti";
  // Dikey (portre) fotoğraflarda 16/9 çerçeve yüzü kesiyor.
  const isPortraitPhoto = slug === "audrey-hepburn-anne-frank-rolunu-neden-reddetti";

  return (
    <SiteShell>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
        <article className="min-w-0">
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold leading-tight mt-3 text-balance text-center">
          {n.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{n.excerpt}</p>
        <div className="mt-5 text-sm text-muted-foreground">
          Kaynak: <em>{n.source}</em>
        </div>

        {isNapalm ? (
          <div className="my-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
              <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          <div className="my-10 flex justify-center">
            <div
              className={`w-full ${isPortraitPhoto ? "max-w-[420px]" : "max-w-[560px]"} p-3`}
              style={{ background: [...slug].reduce((a,c)=>a+c.charCodeAt(0),0) % 2 === 0 ? "#ffbd3f" : "#00EAA1" }}
            >
              <div className={`relative ${isPortraitPhoto ? "aspect-[4/5]" : "aspect-[16/9]"} overflow-hidden bg-muted`}>
                {n.videoUrl ? (
                  <iframe
                    src={n.videoUrl}
                    title={n.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover object-top" />
                )}
              </div>

            </div>
          </div>
        )}



        {isNapalm ? (
          <div className={articleProse}>
            {n.body.split("\n\n").map((para, i) => (
              <div key={i}>
                <ReactMarkdown>{para}</ReactMarkdown>
                {i === 1 ? (
                  <figure className="my-10 flex justify-center not-prose">
                    <div className="w-full max-w-[560px] bg-[#ffbd3f] p-3">
                      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                        <img src={nickUtAsset.url} alt="Fotoğrafçı Nick Ut, kamerasıyla" className="w-full h-full object-cover" />
                      </div>
                      <figcaption className="mt-3 text-center font-display text-sm font-black uppercase tracking-wider text-black">
                        Nick Ut (1951)
                      </figcaption>
                    </div>
                  </figure>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className={articleProse}>
            <ReactMarkdown>{n.body}</ReactMarkdown>
          </div>
        )}


        <ShareButtons title={n.title} path={`/haber/${slug}`} />
        </article>

        <OtherArticlesSidebar heading="Diğer haberler" items={others} to="/haber/$slug" />
      </div>
    </SiteShell>
  );
}

