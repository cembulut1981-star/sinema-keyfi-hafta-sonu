import tr1 from "@/assets/remote/box-office-tr-1.jpg.asset.json";
import tr2 from "@/assets/remote/box-office-tr-2.jpg.asset.json";
import tr3 from "@/assets/remote/box-office-tr-3.jpg.asset.json";
import tr4 from "@/assets/remote/box-office-tr-4.jpg.asset.json";
import tr5 from "@/assets/remote/box-office-tr-5.jpg.asset.json";
import us1 from "@/assets/remote/box-office-us-1.jpg.asset.json";
import us2 from "@/assets/remote/box-office-us-2.jpg.asset.json";
import us3 from "@/assets/remote/box-office-us-3.jpg.asset.json";
import us4 from "@/assets/remote/box-office-us-4.jpg.asset.json";
import us5 from "@/assets/remote/box-office-us-5.jpg.asset.json";

export type BoxOfficeFilm = { rank: number; title: string; poster: string; gross: string; detail: string; total: string; url: string };
export type BoxOfficeChart = { id: string; title: string; market: string; period: string; note: string; source: string; sourceUrl: string; films: BoxOfficeFilm[] };

export const TURKEY_BOX_OFFICE: BoxOfficeChart = {
  id: "tr",
  title: "Türkiye Box Office",
  market: "TÜRKİYE · İLK 5",
  period: "6–8 Kasım 2026",
  note: "Son yayımlanan hafta sonu · Seyirci sıralaması",
  source: "Box Office Türkiye",
  sourceUrl: "https://boxofficeturkiye.com/hafta-sonu/detay/2026-45",
  films: [
    { rank: 1, title: "Çakallarla Dans 8: Şututgart Çıkarması", poster: tr1.url, gross: "\u20ba24.344.859", detail: "78.817 seyirci", total: "\u20ba24.344.859", url: "https://boxofficeturkiye.com/film/cakallarla-dans-8-sututgart-cikarmasi--2018332" },
    { rank: 2, title: "Gupi ve Gülmeyen Kral", poster: tr2.url, gross: "\u20ba18.869.220", detail: "64.095 seyirci", total: "\u20ba132.630.698", url: "https://boxofficeturkiye.com/film/gupi-ve-gulmeyen-kral--2018370" },
    { rank: 3, title: "Çatlı 2", poster: tr3.url, gross: "\u20ba5.600.715", detail: "18.956 seyirci", total: "\u20ba22.633.059", url: "https://boxofficeturkiye.com/film/catli-2--2018418" },
    { rank: 4, title: "Şapkalı Kedi", poster: tr4.url, gross: "\u20ba6.018.571", detail: "18.555 seyirci", total: "\u20ba6.018.571", url: "https://boxofficeturkiye.com/film/sapkali-kedi--2017274" },
    { rank: 5, title: "Her Şey Ortada", poster: tr5.url, gross: "\u20ba6.012.695", detail: "13.794 seyirci", total: "\u20ba18.728.807", url: "https://boxofficeturkiye.com/film/her-sey-ortada--2018627" },
  ],
};

export const HOLLYWOOD_BOX_OFFICE: BoxOfficeChart = {
  id: "us",
  title: "Hollywood Box Office",
  market: "ABD / KANADA · İLK 5",
  period: "13–15 Kasım 2026",
  note: "Hafta sonu hasılat sıralaması · Tahmini rakamlar",
  source: "The Numbers",
  sourceUrl: "https://www.the-numbers.com/box-office-chart/weekend/2026/11/13",
  films: [
    { rank: 1, title: "Ebenezer", poster: us1.url, gross: "$19,000,000", detail: "Hafta sonu hasılatı", total: "$19,000,000", url: "https://www.the-numbers.com/movie/Ebenezer-(2026)" },
    { rank: 2, title: "The Cat in the Hat", poster: us2.url, gross: "$11,400,000", detail: "Hafta sonu hasılatı", total: "$38,165,000", url: "https://www.the-numbers.com/movie/Cat-in-the-Hat-The-(2026)" },
    { rank: 3, title: "Godzilla Minus Zero", poster: us3.url, gross: "$8,310,000", detail: "Hafta sonu hasılatı", total: "$48,883,262", url: "https://www.the-numbers.com/movie/Godzilla-Minus-Zero-(2026-Japan)" },
    { rank: 4, title: "Ramayana: Rise of a Legend", poster: us4.url, gross: "$5,500,000", detail: "Hafta sonu hasılatı", total: "$24,131,000", url: "https://www.the-numbers.com/movie/Ramayana-Part-1-(2026-India)" },
    { rank: 5, title: "You Can See Everything", poster: us5.url, gross: "$5,470,790", detail: "Hafta sonu hasılatı", total: "$89,009,559", url: "https://www.the-numbers.com/movie/You-Can-See-Everything-(2026)" },
  ],
};
