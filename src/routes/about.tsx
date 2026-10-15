import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site/SiteShell";
import { EDITORIAL_AUTHOR, SITE_URL } from "@/lib/seo";

const TITLE = "About Sine-Meta — Independent Film & TV Magazine";
const DESC = "Who we are, what we cover and how Sine-Meta's editors write, credit and update film, TV, music and games stories.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[760px] px-4 sm:px-6 py-14">
        <h1 className="font-serif-display text-4xl font-bold text-center">About Sine-Meta</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            Sine-Meta is an independent, English-language magazine about film, television, music and PC games, run from
            Istanbul. We publish news, reviews, ranked lists and features for fans who want the story without the noise.
          </p>
          <h2 className="font-display text-2xl font-black pt-4">Our editors</h2>
          <p>
            Articles are written and edited by <strong>{EDITORIAL_AUTHOR}</strong>, the site's in-house editorial team.
            Every piece carries a byline and, where available, its publication date.
          </p>
          <h2 className="font-display text-2xl font-black pt-4">How we work</h2>
          <p>
            Much of our news coverage builds on reporting from established outlets. When it does, we say so: each article
            names its original source and links to it, so readers can always check the primary reporting. Our ranked
            lists, reviews and features add our own selection, context and opinion.
          </p>
          <h2 className="font-display text-2xl font-black pt-4">Corrections</h2>
          <p>
            If you spot an error, please tell us through our <Link to="/contact" className="text-primary underline">contact page</Link>.
            We correct mistakes as quickly as we can.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
