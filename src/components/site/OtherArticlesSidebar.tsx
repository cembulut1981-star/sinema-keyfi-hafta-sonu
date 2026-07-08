import { Link } from "@tanstack/react-router";

type Item = { slug: string; title: string; image: string };

type LinkTo =
  | "/dizi/$slug"
  | "/haber/$slug"
  | "/inceleme/$slug"
  | "/liste/$slug"
  | "/muzik/$slug";

export function OtherArticlesSidebar({
  heading,
  items,
  to,
}: {
  heading: string;
  items: Item[];
  to: LinkTo;
}) {
  if (items.length === 0) return null;

  return (
    <aside className="lg:mt-16 lg:ml-8">
      <div className="border-2 border-black bg-background">
        <div className="border-b-2 border-black bg-primary px-4 py-2">
          <h2 className="font-display uppercase tracking-widest text-xs font-black text-primary-foreground">
            {heading}
          </h2>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-3 flex flex-col gap-3">
          {items.map((o, i) => (
            <Link
              key={o.slug}
              to={to}
              params={{ slug: o.slug }}
              className="block border border-black/10"
            >
              <div
                className="p-2"
                style={{ background: i % 2 === 0 ? "#ffbd3f" : "#00EAA1" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-3 bg-background">
                <h3 className="font-serif-display text-sm font-bold leading-snug text-foreground">
                  {o.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
