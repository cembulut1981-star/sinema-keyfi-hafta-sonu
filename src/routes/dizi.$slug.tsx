import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { SiteShell } from "@/components/site/SiteShell";
import { ShareButtons } from "@/components/site/ShareButtons";
import { getSeries, SERIES } from "@/data/series";

export const Route = createFileRoute("/dizi/$slug")({
  beforeLoad: ({ params }) => {
    if (!getSeries(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = getSeries(params.slug);
    if (!s) return { meta: [{ title: "Dizi yazısı bulunamadı — Sine-Meta" }] };
    return {
      meta: [
        { title: `${s.title} — Sine-Meta` },
        { name: "description", content: s.excerpt },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.excerpt },
        { property: "og:image", content: s.image },
      ],
    };
  },
  component: SeriesPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Dizi yazısı bulunamadı</h1>
        <Link to="/kategori/$slug" params={{ slug: "diziler" }} className="text-primary mt-4 inline-block">Tüm diziler</Link>
      </main>
    </SiteShell>
  ),
  errorComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-black">Bir şeyler ters gitti</h1>
      </main>
    </SiteShell>
  ),
});

function SeriesPage() {
  const { slug } = Route.useParams();
  const s = getSeries(slug)!;
  const others = SERIES.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <article className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl sm:text-5xl leading-tight mt-3 text-balance text-center" style={{ fontFamily: "&quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}>
          {s.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{s.excerpt}</p>
        <div className="mt-5 text-sm text-muted-foreground">
          Kaynak: <em>{s.source}</em>
        </div>

        <div className="my-10 flex justify-center">
          <div className="w-full max-w-[560px] p-3" style={{ background: [...slug].reduce((a,c)=>a+c.charCodeAt(0),0) % 2 === 0 ? "#ffbd3f" : "#00EAA1" }}>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none prose-headings:font-serif-display prose-p:leading-relaxed prose-p:text-[17px]">
          <ReactMarkdown>{s.body}</ReactMarkdown>
        </div>

        <ShareButtons title={s.title} path={`/dizi/${slug}`} />

        {others.length > 0 && (
          <section className="mt-16 pt-8 border-t border-border">
            <h2 className="font-display uppercase tracking-widest text-xs text-muted-foreground mb-4">
              Diğer diziler
            </h2>
            <ul className="space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/dizi/$slug"
                    params={{ slug: o.slug }}
                    className="font-serif-display text-lg font-bold hover:text-primary transition-colors"
                  >
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </SiteShell>
  );
}
