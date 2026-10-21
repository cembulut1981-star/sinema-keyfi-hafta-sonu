import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site/SiteShell";
import { EDITORIAL_AUTHOR, SITE_URL } from "@/lib/seo";

const TITLE = "Sine-Meta Hakkında — Bağımsız Film ve Dizi Dergisi";
const DESC = "Biz kimiz, neleri ele alıyoruz ve Sine-Meta editörleri film, dizi, müzik ve oyun haberlerini nasıl yazıyor, kaynak gösteriyor ve güncelliyor.";

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
        <h1 className="font-serif-display text-4xl font-bold text-center">Sine-Meta Hakkında</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            Sine-Meta; film, televizyon, müzik ve PC oyunları üzerine İstanbul'dan yayımlanan bağımsız bir dergidir.
            Gürültüden arınmış, öz haber isteyen okurlar için haberler, incelemeler, sıralı listeler ve özel dosyalar hazırlıyoruz.
          </p>
          <h2 className="font-display text-2xl font-black pt-4">Editörlerimiz</h2>
          <p>
            Yazılar, sitenin kendi editör ekibi olan <strong>{EDITORIAL_AUTHOR}</strong> tarafından yazılıp düzenleniyor.
            Her yazıda, mevcutsa yayın tarihi de yer alıyor.
          </p>
          <h2 className="font-display text-2xl font-black pt-4">Nasıl çalışıyoruz</h2>
          <p>
            Haberlerimizin bir bölümü, köklü yayınların haberciliği üzerine kuruludur. Öyle olduğunda bunu belirtiriz:
            her yazı, okurlar asıl haberi her zaman kontrol edebilsin diye kaynağını gösterir. Sıralı listelerimiz,
            incelemelerimiz ve dosyalarımız ise kendi seçkimizi, bağlamımızı ve yorumumuzu katar.
          </p>
          <h2 className="font-display text-2xl font-black pt-4">Düzeltmeler</h2>
          <p>
            Bir hata fark ederseniz lütfen <Link to="/contact" className="text-primary underline">iletişim sayfamız</Link> üzerinden bize bildirin.
            Hataları elimizden geldiğince hızlı düzeltiyoruz.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
