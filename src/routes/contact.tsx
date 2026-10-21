import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site/SiteShell";
import { SITE_URL } from "@/lib/seo";

// Editorial inbox shown on the contact page.
const CONTACT_EMAIL = "cembulut1981@gmail.com";

const TITLE = "İletişim — Sine-Meta: Haber İhbarı, Düzeltme ve İş Birliği";
const DESC = "Haber ihbarı, düzeltme, basın bülteni veya iş birliği için Sine-Meta editörlerine ulaşın.";

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
        <h1 className="font-serif-display text-4xl font-bold text-center">Bize ulaşın</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          <p>Haber ihbarları, düzeltmeler, basın bültenleri ve iş birliği önerileri memnuniyetle karşılanır.</p>
          <p>
            E-posta:{" "}
            {CONTACT_EMAIL ? (
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline font-semibold">{CONTACT_EMAIL}</a>
            ) : (
              <span className="text-muted-foreground">editör adresimiz kısa süre içinde burada yer alacak.</span>
            )}
          </p>
          <p>
            Nasıl çalıştığımızı merak ediyor musunuz? <Link to="/about" className="text-primary underline">Hakkında sayfamızı</Link> okuyun.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
