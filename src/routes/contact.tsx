import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site/SiteShell";
import { SITE_URL } from "@/lib/seo";

// Set the editorial inbox here; the page shows a placeholder until it is filled in.
const CONTACT_EMAIL = "";

const TITLE = "Contact Sine-Meta — Tips, Corrections and Partnerships";
const DESC = "Get in touch with Sine-Meta's editors about story tips, corrections, press releases or partnerships.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-[760px] px-4 sm:px-6 py-14">
        <h1 className="font-serif-display text-4xl font-bold text-center">Contact us</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          <p>Story tips, corrections, press releases and partnership ideas are all welcome.</p>
          <p>
            Email:{" "}
            {CONTACT_EMAIL ? (
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline font-semibold">{CONTACT_EMAIL}</a>
            ) : (
              <span className="text-muted-foreground">our editorial address will be listed here shortly.</span>
            )}
          </p>
          <p>
            Want to know more about how we work? Read our <Link to="/about" className="text-primary underline">About page</Link>.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
