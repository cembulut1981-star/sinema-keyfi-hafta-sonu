import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { SiteShell } from "@/components/site/SiteShell";
import { ShareButtons } from "@/components/site/ShareButtons";
import { getReview, REVIEWS } from "@/data/reviews";

export const Route = createFileRoute("/inceleme/$slug")({
  beforeLoad: ({ params }) => {
    if (!getReview(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const r = getReview(params.slug);
    if (!r) return { meta: [{ title: "İnceleme bulunamadı — Sine-Meta" }] };
    return {
      meta: [
        { title: `${r.title} — Sine-Meta` },
        { name: "description", content: r.excerpt },
        { property: "og:title", content: r.title },
        { property: "og:description", content: r.excerpt },
        { property: "og:image", content: r.image },
      ],
    };
  },
  component: ReviewPage,
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-black">İnceleme bulunamadı</h1>
        <Link to="/kategori/$slug" params={{ slug: "incelemeler" }} className="text-primary mt-4 inline-block">Tüm incelemeler</Link>
      </main>
    </SiteShell>
  ),
});

function ReviewPage() {
  const { slug } = Route.useParams();
  const r = getReview(slug)!;
  const others = REVIEWS.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <article className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold leading-tight mt-3 text-balance">
          {r.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{r.excerpt}</p>
        <div className="mt-5 flex items-center gap-4 text-sm">
          <span className="font-display font-black text-primary text-xl">{r.rating}</span>
          <span className="text-muted-foreground">Orijinal ad: <em>{r.origTitle}</em></span>
        </div>

        <div className="my-10 flex justify-center">
          <div className="relative w-full max-w-[560px]">
            <div aria-hidden className="absolute -top-3 -left-3 w-full h-full" style={{ background: "#ffbd3f" }} />
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
            </div>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none prose-headings:font-serif-display prose-p:leading-relaxed prose-p:text-[17px]">
          <ReactMarkdown>{r.body}</ReactMarkdown>
        </div>

        <ShareButtons title={r.title} path={`/inceleme/${slug}`} />

        {others.length > 0 && (
          <section className="mt-16 pt-8 border-t border-border">
            <h2 className="font-display uppercase tracking-widest text-xs text-muted-foreground mb-4">
              Diğer incelemeler
            </h2>
            <ul className="space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/inceleme/$slug"
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
