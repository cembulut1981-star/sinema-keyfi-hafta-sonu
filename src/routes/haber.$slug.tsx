import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { SiteShell } from "@/components/site/SiteShell";
import { getNews, NEWS } from "@/data/news";

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
  const others = NEWS.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <article className="mx-auto max-w-[820px] px-4 sm:px-6 lg:px-8 py-10">
        <Link
          to="/kategori/$slug"
          params={{ slug: "haberler" }}
          className="font-display uppercase tracking-widest text-[11px] text-primary hover:underline"
        >
          Haber
        </Link>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold leading-tight mt-3 text-balance">
          {n.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{n.excerpt}</p>
        <div className="mt-5 text-sm text-muted-foreground">
          Kaynak: <em>{n.source}</em>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-muted my-8">
          <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-neutral max-w-none prose-headings:font-serif-display prose-p:leading-relaxed prose-p:text-[17px]">
          <ReactMarkdown>{n.body}</ReactMarkdown>
        </div>

        {others.length > 0 && (
          <section className="mt-16 pt-8 border-t border-border">
            <h2 className="font-display uppercase tracking-widest text-xs text-muted-foreground mb-4">
              Diğer haberler
            </h2>
            <ul className="space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/haber/$slug"
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
