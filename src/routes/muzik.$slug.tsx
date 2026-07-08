import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { SiteShell } from "@/components/site/SiteShell";
import { ShareButtons } from "@/components/site/ShareButtons";
import { OtherArticlesSidebar } from "@/components/site/OtherArticlesSidebar";
import { getMusic, MUSIC } from "@/data/music";

export const Route = createFileRoute("/muzik/$slug")({
  beforeLoad: ({ params }) => {
    if (!getMusic(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const m = getMusic(params.slug);
    if (!m) return { meta: [{ title: "Haber bulunamadı — Sine-Meta" }] };
    return {
      meta: [
        { title: `${m.title} — Sine-Meta` },
        { name: "description", content: m.excerpt },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.excerpt },
        { property: "og:image", content: m.image },
      ],
    };
  },
  component: MusicPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Haber bulunamadı</h1>
        <Link to="/kategori/$slug" params={{ slug: "muzik" }} className="text-primary mt-4 inline-block">Tüm müzik haberleri</Link>
      </main>
    </SiteShell>
  ),
});

function MusicPage() {
  const { slug } = Route.useParams();
  const m = getMusic(slug)!;
  const others = MUSIC.filter((x) => x.slug !== slug);

  return (
    <SiteShell>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
        <article className="min-w-0">
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold leading-tight mt-3 text-balance text-center">
          {m.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{m.excerpt}</p>
        <div className="mt-5 text-sm text-muted-foreground">
          Kaynak: <em>{m.source}</em>
        </div>

        <div className="my-10 flex justify-center">
          <div className="w-full max-w-[560px] p-3" style={{ background: [...slug].reduce((a,c)=>a+c.charCodeAt(0),0) % 2 === 0 ? "#ffbd3f" : "#00EAA1" }}>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none prose-headings:font-serif-display prose-p:leading-relaxed prose-p:text-[17px]">
          <ReactMarkdown>{m.body}</ReactMarkdown>
        </div>

        <ShareButtons title={m.title} path={`/muzik/${slug}`} />
        </article>

        <OtherArticlesSidebar heading="Diğer müzik haberleri" items={others} to="/muzik/$slug" />
      </div>
    </SiteShell>
  );
}

