import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Menu, Flame, Clock, ChevronRight } from "lucide-react";

import hero from "@/assets/hero-main.jpg";
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
  "Anasayfa", "Vizyon", "İncelemeler", "Listeler", "Diziler", "Festival", "Röportajlar", "Klasikler", "Stüdyo",
];

type Article = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
  hot?: boolean;
};

const ARTICLES: Article[] = [
  { id: 1, category: "Vizyon", title: "Karanlık Şövalye Yeniden: Nolan Sonrası Çağda Süper Kahraman Sineması Nereye Gidiyor?", excerpt: "Stüdyolar gişe baskısı altında ezilirken auteur sineması yeni bir nefes arıyor. Sektörün geleceğine dair derinlemesine bir analiz.", author: "Mert Yılmaz", readTime: "8 dk", image: n6, hot: true },
  { id: 2, category: "İnceleme", title: "Yeşilçam'ın Hayaleti: Modern Türk Sineması Geçmişiyle Nasıl Yüzleşiyor?", excerpt: "Genç yönetmenler kuşağı, Yeşilçam mirasını bir yük olarak değil, yeniden yorumlanacak bir hazine olarak görüyor.", author: "Selin Aksoy", readTime: "12 dk", image: n2 },
  { id: 3, category: "Liste", title: "21. Yüzyılın En İyi 25 Film Noir Yapımı — Sıralı Liste", excerpt: "Neon ışıkları, ahlaki bulanıklık ve şehrin karanlığı. Modern noirin altın çağına bir bakış.", author: "Cem Demir", readTime: "15 dk", image: n1 },
  { id: 4, category: "Bilim Kurgu", title: "Dune: Part Three Çekimleri Başladı — İlk Setten Sızan Detaylar", excerpt: "Villeneuve, Arrakis'in son perdesini perdeye taşırken kadroya katılan sürpriz isimler heyecan yaratıyor.", author: "Burak Eren", readTime: "5 dk", image: n3, hot: true },
  { id: 5, category: "Korku", title: "A24'ün Yeni Korku Şaheseri: Karanlık Orman Eleştirmenleri Böldü", excerpt: "Festival galasında ayakta alkışlanan film, sosyal medyada tartışma yaratıyor.", author: "Deniz Kaya", readTime: "7 dk", image: n4 },
  { id: 6, category: "Dosya", title: "Osmanlı Sarayı Perdede: Tarihi Dramalar Neden Yeniden Moda Oldu?", excerpt: "Dizi platformlarının yatırımıyla dönem yapımları altın çağını yaşıyor. Peki bu nostalji ne anlatıyor?", author: "Ayşe Yıldız", readTime: "10 dk", image: n5 },
  { id: 7, category: "Festival", title: "Antalya Altın Portakal: Bu Yılın Öne Çıkan Beş Bağımsız Yapımı", excerpt: "Festivalin bu yılki seçkisinden öne çıkan ve mutlaka izlenmesi gereken filmler.", author: "Kerem Polat", readTime: "6 dk", image: n8 },
  { id: 8, category: "Röportaj", title: "“Sinema Bir Direniş Eylemidir” — Yönetmen Nuri Bilge Ceylan ile Söyleşi", excerpt: "Usta yönetmen, yeni projesi ve Türk sinemasının geleceği üzerine konuştu.", author: "İrem Sönmez", readTime: "14 dk", image: n7 },
];

const TRENDING = [
  "Oppenheimer 2 söylentileri ne kadar gerçek?",
  "Cannes 2026: Türkiye'den yarışmada üç film",
  "Streaming savaşları: MUBI Türkiye'de büyüyor",
  "Wes Anderson'ın yeni filmi: ilk fragman analizi",
  "Yeşilçam'ın unutulmaz 50 repliği",
];

function Index() {
  const [hero1, hero2, ...rest] = ARTICLES;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Nav />

      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <HeroFeature article={{ ...hero1, image: hero }} />
          <div className="flex flex-col gap-4">
            <HeroSecondary article={hero2} />
            <TrendingBox />
          </div>
        </section>

        {/* Section heading */}
        <SectionTitle title="Son Haberler" subtitle="Sinema dünyasından öne çıkanlar" />

        {/* Two-column feed */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rest.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
          {/* Repeat for "scroll" feel */}
          {rest.map((a) => (
            <ArticleCard key={`b-${a.id}`} article={{ ...a, id: a.id + 100, title: a.title }} />
          ))}
        </section>

        <div className="flex justify-center mt-12">
          <button className="font-display text-sm uppercase tracking-widest border border-border px-8 py-4 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors">
            Daha Fazla Haber Yükle
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>CANLI · Cannes Film Festivali 78. Edisyon</span>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          <span>Pazartesi, 22 Haziran 2026</span>
          <span className="text-foreground/70">Bülten</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <button className="md:hidden p-2 -ml-2"><Menu className="w-5 h-5" /></button>
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-4xl text-primary leading-none">PERDE</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-l border-border pl-2 ml-1">
            Sinema<br/>Dergisi
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:text-primary transition-colors"><Search className="w-5 h-5" /></button>
          <button className="hidden sm:block font-display uppercase tracking-widest text-xs bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90 transition-colors">
            Abone Ol
          </button>
        </div>
      </div>
    </header>
  );
}

function Nav() {
  return (
    <nav className="border-b border-border bg-card/30 sticky top-0 z-30 backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none -mx-1">
          {CATEGORIES.map((c, i) => (
            <li key={c}>
              <a
                href="#"
                className={`font-display uppercase tracking-wider text-sm px-4 py-4 inline-block whitespace-nowrap transition-colors ${i === 0 ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"}`}
              >
                {c}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function HeroFeature({ article }: { article: Article }) {
  return (
    <article className="lg:col-span-2 group relative overflow-hidden bg-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-primary text-primary-foreground font-display uppercase tracking-widest text-[11px] px-3 py-1.5 flex items-center gap-1.5">
            <Flame className="w-3 h-3" /> Manşet
          </span>
          <span className="bg-background/70 backdrop-blur text-foreground font-display uppercase tracking-widest text-[11px] px-3 py-1.5">
            {article.category}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
          <h2 className="font-serif-display text-3xl lg:text-5xl font-black leading-[1.05] text-balance mb-3">
            {article.title}
          </h2>
          <p className="text-foreground/80 max-w-2xl mb-4 hidden sm:block">{article.excerpt}</p>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
            <span>{article.author}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function HeroSecondary({ article }: { article: Article }) {
  return (
    <article className="group bg-card overflow-hidden flex flex-col flex-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={1280} height={800} loading="lazy" />
        <span className="absolute top-3 left-3 bg-accent text-accent-foreground font-display uppercase tracking-widest text-[10px] px-2.5 py-1">
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif-display text-xl font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
          {article.author} · {article.readTime}
        </div>
      </div>
    </article>
  );
}

function TrendingBox() {
  return (
    <aside className="bg-card border-l-2 border-primary p-5">
      <h3 className="font-display uppercase tracking-widest text-sm text-primary mb-4 flex items-center gap-2">
        <Flame className="w-4 h-4" /> Trend Olanlar
      </h3>
      <ol className="space-y-3">
        {TRENDING.map((t, i) => (
          <li key={t} className="flex gap-3 group cursor-pointer">
            <span className="font-display text-2xl text-muted-foreground/40 leading-none w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm leading-snug group-hover:text-primary transition-colors">{t}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-end justify-between mb-6 pb-4 border-b-2 border-foreground/90">
      <div>
        <div className="font-display uppercase tracking-[0.3em] text-xs text-primary mb-1">{subtitle}</div>
        <h2 className="font-serif-display text-3xl font-black">{title}</h2>
      </div>
      <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-display uppercase tracking-wider text-muted-foreground hover:text-primary">
        Tümünü Gör <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] gap-4 sm:gap-5 cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={400} height={300} loading="lazy" />
        {article.hot && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground p-1">
            <Flame className="w-3 h-3" />
          </span>
        )}
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <div className="font-display uppercase tracking-widest text-[10px] text-primary mb-2">
          {article.category}
        </div>
        <h3 className="font-serif-display text-lg sm:text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors text-balance">
          {article.title}
        </h3>
        <p className="hidden sm:block text-sm text-muted-foreground line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-3">
          <span>{article.author}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-card/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="font-display text-3xl text-primary">PERDE</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Türkiye'nin sinema gündemi. Vizyon haberleri, eleştiriler, listeler ve özel dosyalar — her gün, perdenin arkasından.
          </p>
        </div>
        {[
          { t: "Bölümler", l: ["Vizyon", "İncelemeler", "Listeler", "Festival"] },
          { t: "Kurumsal", l: ["Hakkımızda", "İletişim", "Künye", "Reklam"] },
        ].map((g) => (
          <div key={g.t}>
            <div className="font-display uppercase tracking-widest text-xs text-foreground mb-3">{g.t}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {g.l.map((x) => <li key={x} className="hover:text-primary cursor-pointer">{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-4 text-xs text-muted-foreground flex justify-between">
          <span>© 2026 Perde Sinema Dergisi</span>
          <span className="font-display uppercase tracking-widest">Sinemaya Dair, Her Şey.</span>
        </div>
      </div>
    </footer>
  );
}
