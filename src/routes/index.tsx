import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

import n1 from "@/assets/news-1.jpg";
import n2 from "@/assets/news-2.jpg";
import n3 from "@/assets/news-3.jpg";
import n4 from "@/assets/news-4.jpg";
import n5 from "@/assets/news-5.jpg";
import n6 from "@/assets/news-6.jpg";
import n7 from "@/assets/news-7.jpg";
import n8 from "@/assets/news-8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perde — Sinema Haberleri, İncelemeler, Listeler" },
      { name: "description", content: "Türkiye'nin sinema gündemi: vizyon haberleri, eleştiriler, listeler ve özel dosyalar." },
      { property: "og:title", content: "Perde — Sinema" },
      { property: "og:description", content: "Türkiye'nin sinema gündemi." },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  "Anasayfa", "Vizyon", "İncelemeler", "Listeler", "Diziler", "Festival", "Röportajlar", "Klasikler",
];

type Article = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
};

const ARTICLES: Article[] = [
  { id: 1, category: "Vizyon", title: "Karanlık Şövalye Yeniden: Nolan Sonrası Çağda Süper Kahraman Sineması Nereye Gidiyor?", excerpt: "Stüdyolar gişe baskısı altında ezilirken auteur sineması yeni bir nefes arıyor. Sektörün geleceğine dair derinlemesine bir analiz.", author: "Mert Yılmaz", readTime: "8 dk", image: n6 },
  { id: 2, category: "İnceleme", title: "Yeşilçam'ın Hayaleti: Modern Türk Sineması Geçmişiyle Nasıl Yüzleşiyor?", excerpt: "Genç yönetmenler kuşağı, Yeşilçam mirasını bir yük olarak değil, yeniden yorumlanacak bir hazine olarak görüyor.", author: "Selin Aksoy", readTime: "12 dk", image: n2 },
  { id: 3, category: "Liste", title: "21. Yüzyılın En İyi 25 Film Noir Yapımı — Sıralı Liste", excerpt: "Neon ışıkları, ahlaki bulanıklık ve şehrin karanlığı. Modern noirin altın çağına bir bakış.", author: "Cem Demir", readTime: "15 dk", image: n1 },
  { id: 4, category: "Bilim Kurgu", title: "Dune: Part Three Çekimleri Başladı — İlk Setten Sızan Detaylar", excerpt: "Villeneuve, Arrakis'in son perdesini perdeye taşırken kadroya katılan sürpriz isimler heyecan yaratıyor.", author: "Burak Eren", readTime: "5 dk", image: n3 },
  { id: 5, category: "Korku", title: "A24'ün Yeni Korku Şaheseri: Karanlık Orman Eleştirmenleri Böldü", excerpt: "Festival galasında ayakta alkışlanan film, sosyal medyada tartışma yaratıyor.", author: "Deniz Kaya", readTime: "7 dk", image: n4 },
  { id: 6, category: "Dosya", title: "Osmanlı Sarayı Perdede: Tarihi Dramalar Neden Yeniden Moda Oldu?", excerpt: "Dizi platformlarının yatırımıyla dönem yapımları altın çağını yaşıyor. Peki bu nostalji ne anlatıyor?", author: "Ayşe Yıldız", readTime: "10 dk", image: n5 },
  { id: 7, category: "Festival", title: "Antalya Altın Portakal: Bu Yılın Öne Çıkan Beş Bağımsız Yapımı", excerpt: "Festivalin bu yılki seçkisinden öne çıkan ve mutlaka izlenmesi gereken filmler.", author: "Kerem Polat", readTime: "6 dk", image: n8 },
  { id: 8, category: "Röportaj", title: "“Sinema Bir Direniş Eylemidir” — Yönetmen Nuri Bilge Ceylan ile Söyleşi", excerpt: "Usta yönetmen, yeni projesi ve Türk sinemasının geleceği üzerine konuştu.", author: "İrem Sönmez", readTime: "14 dk", image: n7 },
];

function Index() {
  // Build a long feed by repeating articles
  const feed = [...ARTICLES, ...ARTICLES, ...ARTICLES].map((a, i) => ({ ...a, id: i + 1 }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Nav />

      <main className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {feed.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </section>

        <div className="flex justify-center mt-16">
          <button className="font-display text-sm uppercase tracking-widest border border-foreground px-8 py-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
            Daha Fazla Yükle
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-4xl font-black text-primary leading-none">
          PERDE
        </Link>
        <button className="p-2 hover:text-primary transition-colors" aria-label="Ara">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}

function Nav() {
  return (
    <>
      <nav className="border-b border-border sticky top-0 z-30 bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {CATEGORIES.slice(0, 6).map((c, i) => (
              <li key={c}>
                <a
                  href="#"
                  className={`font-display uppercase tracking-wider text-[13px] px-3 py-4 inline-block whitespace-nowrap transition-colors ${i === 0 ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="h-5 bg-primary" aria-hidden="true" />
    </>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted mb-4">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={500}
          loading="lazy"
        />
      </div>
      <div className="font-display uppercase tracking-widest text-[11px] text-primary mb-2">
        {article.category}
      </div>
      <h2 className="font-serif-display text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors text-balance">
        {article.title}
      </h2>
      <p className="text-[15px] text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        {article.excerpt}
      </p>
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-3">
        <span>{article.author}</span>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-display text-primary text-xl">PERDE</span>
        <span>© 2026 Perde Sinema Dergisi</span>
      </div>
    </footer>
  );
}
