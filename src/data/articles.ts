import n1 from "@/assets/news-1.jpg";
import n3 from "@/assets/news-3.jpg";
import n4 from "@/assets/news-4.jpg";
import n5 from "@/assets/news-5.jpg";
import n7 from "@/assets/news-7.jpg";
import n8 from "@/assets/news-8.jpg";

import { REVIEWS } from "./reviews";
import { NEWS } from "./news";

export type CategorySlug = "haberler" | "incelemeler" | "listeler" | "diziler" | "festival" | "roportajlar";

export const CATEGORY_LABELS: Record<CategorySlug, string> = {
  haberler: "Haberler",
  incelemeler: "İncelemeler",
  listeler: "Listeler",
  diziler: "Diziler",
  festival: "Festival",
  roportajlar: "Röportajlar",
};

export type Article = {
  id: number;
  category: CategorySlug;
  title: string;
  excerpt: string;
  image: string;
  reviewSlug?: string;
  newsSlug?: string;
};

const REVIEW_ARTICLES: Article[] = REVIEWS.map((r, i) => ({
  id: 100 + i,
  category: "incelemeler" as const,
  title: r.title,
  excerpt: r.excerpt,
  image: r.image,
  reviewSlug: r.slug,
}));

const NEWS_ARTICLES: Article[] = NEWS.map((n, i) => ({
  id: 200 + i,
  category: "haberler" as const,
  title: n.title,
  excerpt: n.excerpt,
  image: n.image,
  newsSlug: n.slug,
}));

export const ARTICLES: Article[] = [
  ...NEWS_ARTICLES,
  ...REVIEW_ARTICLES,
  { id: 3, category: "listeler", title: "21. Yüzyılın En İyi 25 Film Noir Yapımı — Sıralı Liste", excerpt: "Neon ışıkları, ahlaki bulanıklık ve şehrin karanlığı. Modern noirin altın çağına bir bakış.", image: n1 },
  { id: 6, category: "diziler", title: "Osmanlı Sarayı Perdede: Tarihi Dramalar Neden Yeniden Moda Oldu?", excerpt: "Dizi platformlarının yatırımıyla dönem yapımları altın çağını yaşıyor. Peki bu nostalji ne anlatıyor?", image: n5 },
  { id: 7, category: "festival", title: "Antalya Altın Portakal: Bu Yılın Öne Çıkan Beş Bağımsız Yapımı", excerpt: "Festivalin bu yılki seçkisinden öne çıkan ve mutlaka izlenmesi gereken filmler.", image: n8 },
  { id: 8, category: "roportajlar", title: "\"Sinema Bir Direniş Eylemidir\" — Yönetmen Nuri Bilge Ceylan ile Söyleşi", excerpt: "Usta yönetmen, yeni projesi ve Türk sinemasının geleceği üzerine konuştu.", image: n7 },
  { id: 9, category: "diziler", title: "Yeni Sezon Dizileri: Bu Sonbahar Mutlaka İzlenmesi Gereken 10 Yapım", excerpt: "Platformların yeni sezon takvimi belli oldu. İşte öne çıkan diziler ve beklentiler.", image: n4 },
  { id: 10, category: "listeler", title: "Tüm Zamanların En İyi 50 Bilim Kurgu Filmi", excerpt: "Metropolis'ten Dune'a uzanan büyük bir yolculuk. Türün dönüm noktaları.", image: n3 },
  { id: 12, category: "festival", title: "Cannes 2026 Seçkisi Açıklandı: Türk Sinemasından İki Film Yarışmada", excerpt: "Croisette'te bu yıl rüzgâr nereden esecek? Yarışma ve yan bölümlere ilk bakış.", image: n8 },
];
