// Auto-curated music news content. Sources: Rolling Stone music news.
import img_ariana from "@/assets/news-rs-music-ariana-grande.jpg";
import img_jayz from "@/assets/news-rs-music-jay-z-444.jpg";
import img_michael from "@/assets/news-rs-music-michael-biopic.jpg";
import img_gabriel from "@/assets/news-rs-music-peter-gabriel.jpg";
import img_rush from "@/assets/news-rs-music-rush-geddy-lee.jpg";
import img_yungblud from "@/assets/news-rs-music-yungblud.jpg";
import img_ramones from "@/assets/news-rs-music-ramones.jpg";
import img_u2 from "@/assets/news-rs-music-u2-list.jpg";
import img_rosalia from "@/assets/news-rs-music-rosalia.jpg";
import img_bennett from "@/assets/news-rs-music-lauren-bennett.jpg";


export type MusicItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  source: string;
};

export const MUSIC: MusicItem[] = [
  {
    slug: "ariana-grande-eternal-sunshine-tour",
    title: "Ariana Grande 'Eternal Sunshine' Turnesinden Üç Tarihi Erteledi: \"Önce Güvenlik\"",
    excerpt: "Ariana Grande, üretim kaynaklı sorunlar nedeniyle 'Eternal Sunshine' turnesinden üç durağın tarihini değiştirdiğini duyurdu. Sanatçı ertelemenin \"en güvenli seçenek\" olduğunu vurguladı.",
    body: "Ariana Grande, uzun süredir beklenen 'Eternal Sunshine' turnesindeki üç konserin ertelendiği haberini pazartesi günü Instagram Stories üzerinden hayranlarına duyurdu. Sanatçı, ertelemenin sebebini üretim tarafında ortaya çıkan aksaklıklara bağladı.\n\n\"Bu talihsiz takvim değişiklikleri için çok üzgünüz\" diyen Grande, \"Üretimde karşımıza çıkan bu zorluklar göz önüne alındığında bu bizim en iyi ve en güvenli seçeneğimizdi\" ifadelerini kullandı. Brooklyn Barclays Center'da 12 Temmuz'da yapılması planlanan konser 14 Temmuz'a, Boston TD Garden'daki 22 ve 24 Temmuz konserleri ise sırasıyla 23 ve 26 Temmuz tarihlerine alındı.\n\nAçıklamada tüm biletlerin yeni tarihler için geçerli olacağı, bilet sahiplerine ek bilgilendirme yapılacağı belirtildi. Grande mesajında, \"Hepimiz için en önemli şey güvenlik ve bir de gösterinin tasarlandığı şekilde sahnelenmesi. Anlayışınız için çok teşekkür ederim, sizi görmek için sabırsızlanıyorum\" dedi.\n\n'Eternal Sunshine' turnesi bu ayın başında Oakland'da açılış yapmıştı. Aynı adlı yedinci stüdyo albümünü destekleyen turne, sanatçının 2019'dan bu yana çıktığı ilk baş sanatçı turnesi olması nedeniyle özellikle önemli. Set listesi ağırlıklı olarak son albümden şarkılara odaklanırken 'Positions'tan üç, 'Dangerous Woman', 'My Everything' ve 'thank u, next' albümlerinden ikişer şarkıya da yer veriliyor.",
    image: img_ariana,
    source: "Rolling Stone",
  },
  {
    slug: "jay-z-444-bonus-tracks",
    title: "Jay-Z'nin '4:44' Bonus Şarkıları Nihayet Tüm Dijital Platformlarda",
    excerpt: "Jay-Z'nin '4:44' albümünün Blue Ivy ve James Blake ile yaptığı işbirlikleri de dahil olmak üzere üç bonus şarkısı, dokuz yılın ardından tüm streaming servislerinde dinleyiciyle buluştu.",
    body: "Jay-Z, '4:44' albümünün üç bonus parçasını nihayet tüm streaming servislerinde erişime açtı. Roc Nation, bu geniş çaplı yayını '4:44'ün ilk çıkışının tam dokuzuncu yıldönümünde salı günü Instagram üzerinden doğruladı.\n\nDaha önce yalnızca Tidal'da bulunan üç şarkı; \"Adnis\", Jay'in kızı Blue Ivy Carter'ın da yer aldığı \"Blue's Freestyle/We Family\" ve James Blake'in katkı sunduğu \"ManyFacedGod\" artık dünyanın her yerinden dinlenebiliyor.\n\n2017'de çıkan '4:44', Jay-Z'nin hâlâ en yeni solo albümü olma özelliğini koruyor (bir yıl sonra Beyoncé ile ortak 'Everything Is Love' albümünü yayımlamıştı). Beyoncé, Frank Ocean ve Damian Marley'in de katkı verdiği albüm, özellikle Jay'in geçmiş sadakatsizlikleri için özür dilediği içe dönük ve kırılgan tavrı sayesinde büyük övgü toplamıştı.\n\nBonus şarkıların geniş yayını, süregelen \"Jay-Z30\" kutlamalarının bir parçası. Rapçi bu kapsamda Philadelphia'daki Roots Picnic'e baş sanatçı olarak çıkmış, 10 ve 11 Temmuz'da New York'ta Yankee Stadium'da iki gece üst üste sahne alacağını duyurmuştu. İlk gece 'Reasonable Doubt' albümünü baştan sona çalacak olan sanatçı, ikinci gecede 'The Blueprint'in 25. yılını kutlamak için o albümü bütünüyle icra edecek. Ayrıca Brooklyn Halk Kütüphanesi ile iş birliği yaparak 13 solo albümünü kutlayan sınırlı sayıda kütüphane kartı çıkardı; Rick Rubin'in yönettiği sekiz bölümlük belgesel de bu yıl içinde yayınlanacak.",
    image: img_jayz,
    source: "Rolling Stone",
  },
  {
    slug: "michael-highest-grossing-biopic",
    title: "'Michael' Tüm Zamanların En Çok Hasılat Yapan Biyografik Filmi Oldu",
    excerpt: "Michael Jackson'ı konu alan 'Michael', gösterime girmesinin sadece iki ay sonra 977 milyon dolarlık gişeyle 'Oppenheimer'ı geride bırakarak tarihin en çok kazanan biyografik filmi oldu.",
    body: "Michael Jackson'ın hayatını beyaz perdeye taşıyan 'Michael', vizyona girmesinin üzerinden yalnızca iki ay geçmişken tüm zamanların en çok hasılat yapan biyografik filmi ünvanını aldı. Lionsgate'in Rolling Stone'a doğruladığı üzere film, 977 milyon dolara ulaşarak üç yıl önce Christopher Nolan imzalı 'Oppenheimer'ın kırdığı 965 milyon dolarlık rekoru geçti.\n\nAntoine Fuqua'nın yönettiği ve Jaafar Jackson'ın süperstar amcasını canlandırdığı film, Nisan ayında dünya prömiyerini yaptığı ilk hafta sonunda 217 milyon dolar hasılatla küresel ölçekte rekor kırmıştı. Her gün 1 milyon doların üzerinde kazanmayı sürdüren film, 370 milyon dolara ulaşan yurtiçi hasılatıyla Lionsgate'in tüm zamanlar sıralamasında üçüncü sıraya yerleşti; 'The Hunger Games' (408 milyon) ve devam filmi 'Catching Fire' ilk iki basamağı elinde tutuyor.\n\n'Michael', pop yıldızının kardeşleriyle birlikte kurduğu The Jackson 5 dönemindeki ilk yıllarından 1988'deki 'Bad' turnesine kadar uzanıyor. Filmin, Jackson'ın karşılaştığı çocuk cinsel istismarı iddialarına değinmemesi eleştirilere yol açmış olsa da salonlarda büyük ilgi görmesine engel olmadı.\n\nBüyük bir gişe patlaması yaşayan filmin bir diğer önemli etkisi Jackson'ın müziğine olan ilgide görüldü. Sanatçının katalog stream sayıları yükselirken 'Thriller' albümü Billboard 200 listesinde yeniden 7. sıraya çıktı. Solo çalışmaları 24-30 Nisan haftasında 137,5 milyon on-demand stream sayısına ulaşarak kariyer rekoruna imza attı; bu rakam bir önceki en yüksek haftaya göre yüzde 146'lık bir artışa denk geliyor.",
    image: img_michael,
    source: "Rolling Stone",
  },
  {
    slug: "peter-gabriel-i-belong-to-the-sky",
    title: "Peter Gabriel'in Yeni Şarkısı 'I Belong to the Sky', 80'lerin Sentetik Ruhunu Çağırıyor",
    excerpt: "Peter Gabriel, yeni albümü 'o\\i'nin habercisi olarak 'I Belong to the Sky' şarkısının \"Bright-Side\" versiyonunu yayımladı. Yedi dakikayı aşan parça, sanatçının 1982 dönemine yaslanan bir atmosfer taşıyor.",
    body: "Peter Gabriel, çıkış tarihi henüz açıklanmayan yeni albümü 'o\\i'den ilk parça olarak 'I Belong to the Sky'ın \"Bright-Side Mix\" versiyonunu yayımladı. Ay takvimine göre yayın planı belirleyen sanatçı, dünyalıların çilek dolunayına şahitlik edeceği bir gecede aydınlık mikse yer verdi; \"Dark-Side Mix\" ise yeni ayla birlikte 14 Temmuz'da dinleyiciyle buluşacak.\n\nEn azından Bright-Side versiyonu yedi dakikayı aşan bir yavaş yanış olarak öne çıkıyor. Gabriel'in tümüyle dijital olan 1982 tarihli 'Peter Gabriel' albümünün derin kesitlerini hatırlatan fokurdayan synth'ler, üzerine serpiştirilmiş saksafon dumanları ve parlak arka vokallerle birleşerek nostaljik ama sisli bir doku oluşturuyor. Gabriel şarkının bir yerinde \"Rüyayı hayata geçiriyorum\" dedikten hemen sonra, ister bilinçli ister rastlantı olsun Newton'ın yerçekimi yasasını selamlar biçimde \"resim düşüyor\" diye söylüyor. Ton olarak pek de \"parlak\" olmayan parça, bir bildirimden çok bir dilek gibi duruyor.\n\nGabriel yayımladığı açıklamada şarkının uzun bir doğum sürecinin ürünü olduğunu, 2023'teki 'i/o' albümüne dâhil olmaya yaklaştığını fakat o dönemde tamamlayamadığını belirtti. Sanatçı, 'o\\i'nin adıyla ilgili de küçük bir sürprize kapı aralıyor: albüm adı okuduğunuzda 'i/o'nun tersten yazılışına dönüşüyor ve önceki albümdeki temaların ayna görüntüsü olarak yeni bir bakış açısı sunacağı sinyalini veriyor.",
    image: img_gabriel,
    source: "Rolling Stone",
  },
  {
    slug: "rush-geddy-lee-postponed-shows",
    title: "Rush, Geddy Lee'nin Larenjit Teşhisi Sonrası İki Konseri Erteledi",
    excerpt: "Rush, solist ve basçı Geddy Lee'ye larenjit ve bronşit teşhisi konulmasının ardından Fort Worth'ta yapılacak iki konseri ertelediğini duyurdu. Grup, ilerleyen tarihler için yeni bir takvim paylaşacak.",
    body: "Kanadalı rock efsanesi Rush, uzun bir aradan sonra çıktığı geri dönüş turnesinin Fort Worth ayağındaki iki konserini ertelemek zorunda kaldı. Grup, solist ve basçı Geddy Lee'ye larenjit ve bronşit teşhisi konulduğunu, ses tellerinin dinlenmeye ihtiyaç duyduğunu açıkladı.\n\nGrup, sosyal medya hesaplarından yayımladığı açıklamada, \"Geddy'nin en kısa sürede iyileşmesi ve sahneye tam gücüyle dönebilmesi için doktor tavsiyesine uyuyoruz\" ifadelerini kullandı. Erteleme kararı, turnenin en çok konuşulan duraklarından biri olan Fort Worth için hayal kırıklığı yaratsa da bilet sahiplerinin biletleri yeni tarihler için geçerli olacak. Yeni gün ve saatler önümüzdeki günlerde duyurulacak.\n\nRush için mevcut turne, davulcu Neil Peart'ın 2020'de kaybedilmesinin ardından yaşanan uzun aranın sonrasında sahneye dönüşü simgeliyor. Peart'ın yerine perküsyonist olarak Anika Nilles'ın katıldığı üçlü, hem yeni dönemine hem de yarım asrı deviren kariyerlerine bir saygı duruşu niteliğindeki set listesiyle eleştirmenlerden büyük övgü toplamıştı.\n\nGeddy Lee'nin durumu ciddi olmasa da doktorların birkaç gün tam ses istirahati önerdiği belirtiliyor. Grup, hayranlarından anlayış beklediğini vurgularken, \"Geddy iyileşir iyileşmez sahneye çıkacak ve kaçırdığımız her geceyi telafi edeceğiz\" mesajını da paylaştı. Bu gelişme, turne boyunca büyük dikkat çeken sesin fiziksel yıpranmasının ne denli ciddi bir mesele olduğunu bir kez daha gözler önüne serdi.",
    image: img_rush,
    source: "Rolling Stone",
  },
];

export function getMusic(slug: string) {
  return MUSIC.find((m) => m.slug === slug);
}
