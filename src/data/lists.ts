// Auto-curated list content. Sources: WhatCulture film section.
import img1 from "@/assets/wc-list-1.jpg";
import img2 from "@/assets/wc-list-2.jpg";
import img3 from "@/assets/wc-list-3.jpg";
import img4 from "@/assets/wc-list-4.jpg";
import img5 from "@/assets/wc-list-5.jpg";

export type ListItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  source: string;
};

export const LISTS: ListItem[] = [
  {
    slug: "az-bilinen-korku-filmleri",
    title: "Kimsenin Konuşmadığı 10 Muhteşem Korku Filmi",
    excerpt: "Gişe başarılarının ve klasiklerin gölgesinde kalan, ancak türün en cesur, en atmosferik ve en unutulmaz örnekleri arasında yer alan on korku filmi.",
    body: `Korku sineması denildiğinde akla hep aynı isimler gelir: *The Exorcist*, *Halloween*, *Hereditary*. Oysa türün geniş arşivi, gişe rekorlarının gölgesinde kalmış ama en az onlar kadar cesur, sinematografik ve rahatsız edici yapımlarla dolu. Bu listede, dijital platformların algoritmalarının bile pek önermediği, ancak izlediğinizde günlerce zihninizde dolaşacak on filmi bir araya getirdik.

## 1. The Hunger (1983)

Tony Scott'un yönetmenlik kariyerinin başlangıcı olan bu vampir filmi, David Bowie ve Catherine Deneuve'ün ikonik performanslarıyla, korkuyu bir moda çekimi estetiğine dönüştürüyor.

## 2. Session 9 (2001)

Terk edilmiş bir akıl hastanesinde çekilen bu film, atmosferi ana karakter haline getiriyor. Ses tasarımı ve mekân kullanımı, "yavaş yanan korku" türünün en iyi örneklerinden.

## 3. Afflicted (2013)

Found-footage türünün en yaratıcı örneklerinden biri. Vampirizmi hastalık metaforu olarak ele alan bağımsız bir Kanada yapımı.

## 4. Lake Mungo (2008)

Avustralya yapımı bu sahte belgesel, keder ve kayıp temalarını doğaüstü bir çerçeveye oturtuyor. Finali, izledikten günler sonra bile yakanızı bırakmıyor.

## 5. The Endless (2017)

Justin Benson ve Aaron Moorhead'in kozmik korku başyapıtı. Küçük bütçesine rağmen büyük fikirler üretmeyi başarıyor.

## 6. Kill List (2011)

Ben Wheatley'in imzasını taşıyan bu İngiliz yapımı, aile draması olarak başlayıp folk-horror kâbusuna dönüşüyor.

## 7. Noroi: The Curse (2005)

Japon found-footage geleneğinin zirvesi. Karmaşık mitolojisi ve tedirgin edici temposuyla ayrıca bir kült.

## 8. Pontypool (2008)

Küçük bir radyo istasyonunda geçen, dilin kendisinin virüs haline geldiği bir minimalist dehşet.

## 9. The Beyond (1981)

Lucio Fulci'nin gotik-sürreal başyapıtı. Mantıktan çok ruh haline yaslanan bir kâbus koleksiyonu.

## 10. Possum (2018)

Matthew Holness'un yönetmenliğindeki bu yapım, çocukluk travmasını korkunç bir kukla üzerinden anlatıyor. Hem sanat filmi hem korku.`,
    image: img1,
    source: "WhatCulture",
  },
  {
    slug: "degeri-bilinmemis-korku-filmleri",
    title: "Tüm Zamanların En Değeri Bilinmemiş 10 Korku Filmi",
    excerpt: "Vizyona girdiği dönemde hak ettiği ilgiyi görmemiş, ancak yıllar içinde kült statüsüne yükselen ya da hâlâ yeniden keşfedilmeyi bekleyen on korku klasiği.",
    body: `Korku türü, "değeri bilinmedi" hikâyeleriyle dolu. Bazen zamanının önündedir bir film, bazen yanlış zamanda vizyona girer, bazen de büyük stüdyolar tarafından pazarlama açısından ölüme terk edilir. Aşağıdaki on yapım, hem eleştirmenlerden hem de gişeden hak ettiği karşılığı alamamış, ancak zaman içinde yeniden değerlendirilmesi gereken kült yapımlar.

## 1. The Exorcist III (1990)

William Peter Blatty'nin bizzat yönettiği bu devam filmi, orijinali kadar teolojik derinliğe sahip. Ünlü koridor sahnesi, tür tarihinin en iyi jump-scare'i olarak kabul edilir.

## 2. Event Horizon (1997)

"Uzayda Cehennem" temasını en cesur şekilde ele alan yapım. Vizyonda anlaşılamadı, DVD döneminde kült oldu.

## 3. In the Mouth of Madness (1994)

John Carpenter'ın Lovecraftvari başyapıtı. Kariyerinin geç dönem hazinelerinden biri olmasına rağmen hâlâ gerektiği kadar konuşulmuyor.

## 4. Trick 'r Treat (2007)

Cadılar Bayramı temalı antoloji filmi. Stüdyo tarafından üç yıl raftan indirilmedi ama artık her Ekim ayında yeniden keşfediliyor.

## 5. The Descent (2005)

Neil Marshall'ın klostrofobik mağara kâbusu. Türün 2000'ler için tanımlayıcı yapımlarından biri olmasına rağmen ana akım tartışmalarda hâlâ hafife alınıyor.

## 6. Frailty (2001)

Bill Paxton'ın yönetmen olarak başyapıtı. Din, aile ve seri katillik temalarını sarsıcı bir denge içinde sunuyor.

## 7. Cure (1997)

Kiyoshi Kurosawa'nın psikolojik gerilim şaheseri. Batı seyircisinden çok Doğu sinemasının merkezinde konumlanan bir eser.

## 8. Prince of Darkness (1987)

Carpenter'ın "kıyamet üçlemesi"nin ortadaki halkası. Kuantum fiziği ve kadim şeytan mitolojisini birleştiren cesur bir metin.

## 9. The Reflecting Skin (1990)

Philip Ridley'in gotik ve şiirsel korku denemesi. Rüya gibi görüntüleri ve rahatsız edici temasıyla eşsiz.

## 10. Angel Heart (1987)

Alan Parker'ın neo-noir ve okült korkuyu buluşturduğu yapım. Robert De Niro ve Mickey Rourke'un unutulmaz performanslarıyla.`,
    image: img2,
    source: "WhatCulture",
  },
  {
    slug: "kotu-olacagi-belli-son-donem-filmleri",
    title: "Kötü Olacağı Herkes Tarafından Bilinen 10 Yeni Film",
    excerpt: "Fragmanı yayınlandığı andan itibaren felaket sinyalleri veren, sinemaseverlerin ve eleştirmenlerin daha vizyona girmeden yerden yere vurduğu son dönemin en tartışmalı yapımları.",
    body: `Bazı filmler daha ilk fragmanları düştüğü an, herkes tarafından "bu iş olmayacak" damgası yer. Ne yazık ki bazen tahminler doğru çıkar, bazen ise stüdyolar bu erken sinyalleri görmezden gelir. İşte 2025-2026 döneminin en çok tartışılan, çoğunun kaderi baştan yazılmış on yapımı.

## 1. Scream 7

Serinin baş oyuncularının ayrılması sonrası çekilen film, senaryo sızıntılarıyla hayranları çoktan hayal kırıklığına uğrattı.

## 2. Madame Web

Sony'nin Spider-Man evreninin bir başka çıkmaz sokağı. Dakota Johnson bile filmden röportajlarda uzaklaştı.

## 3. Argylle

Matthew Vaughn'un "büyük twist" vaadi, boş bir dumana dönüştü. Fragmanının kendisi bile karışıklık yaydı.

## 4. Borderlands

Eli Roth'un video oyunu uyarlaması, oyun hayranlarını ve sinema izleyicisini aynı anda kırdı.

## 5. The Marvels

MCU yorgunluğunun en somut örneği. Vizyona girmeden önce bile pazarlama ekibinin sessizliği kötü işaretti.

## 6. Rebel Moon: Part Two

Zack Snyder'ın Netflix için hazırladığı sci-fi devamı, birinci filmden bile zayıf eleştiriler aldı.

## 7. Kraven the Hunter

Sony'nin kötü adam filmleri serisinin devamı. R sertifikası bile filmi kurtarmaya yetmedi.

## 8. Trap

M. Night Shyamalan'ın son çıkışı. Konsept iddialıydı ama uygulama seyirciyi yorucu bir gecikmeye mahkûm etti.

## 9. Bad Boys: Ride or Die

Serinin nostaljik enerjisi tükenmiş görünüyor. Fragmanın kötü CGI'ı bir uyarıydı.

## 10. Snow White (Live Action)

Disney'in klasik animasyonlarını canlı çekim olarak yeniden çevirme çabası, bu yapımla belki de en dibi gördü.`,
    image: img3,
    source: "WhatCulture",
  },
  {
    slug: "2020lerin-en-uc-korku-filmleri",
    title: "2020'lerin En Sıra Dışı 10 Korku Filmi",
    excerpt: "Şimdiye kadar 2020'lerin en cesur, en tartışmalı ve en sıra dışı korku yapımları. Türün sınırlarını zorlayan, seyirciyi rahatsız etmekten çekinmeyen on film.",
    body: `2020'lerin ilk yarısı, korku sineması için beklenmedik bir rönesans dönemi oldu. Bağımsız yapımların Blumhouse ve A24 gibi stüdyolarla popülerleşmesi, tür sinemasının "sıra dışı"nın peşine düşmesini sağladı. İşte bu on yılın şu ana kadarki en uç, en akılda kalan on korku yapımı.

## 1. Titane (2021)

Julia Ducournau'nun Cannes Altın Palmiye ödüllü yapımı. Beden korkusunu, cinsiyet kimliğini ve aileyi yeniden tanımlayan sarsıcı bir film.

## 2. Lamb (2021)

İzlanda yapımı bu folk-horror, yavaş yanan atmosferi ve şok edici finaliyle akıllardan çıkmıyor.

## 3. Longlegs (2024)

Nicolas Cage'in ürkütücü performansıyla dolu, 90'lar polisiye estetiğini okült korkusuyla harmanlayan gişe sürprizi.

## 4. Terrifier 3 (2024)

Palyaço Art'ın Noel temalı katliamı. Efekt sinemasının fiziksel yapımlarına dair güçlü bir manifesto.

## 5. The Substance (2024)

Coralie Fargeat'nın beden korkusu şaheseri. Hollywood'un yaşlanma korkusunu grotesk bir alegoriye dönüştürüyor.

## 6. Skinamarink (2022)

Küçük bütçesine rağmen tarz denemesiyle tartışma yaratan, çocukluk kâbuslarına dair minimalist bir deneyim.

## 7. Men (2022)

Alex Garland'ın feminist folk-horror yorumu. Finali türün en tartışılan sekanslarından biri.

## 8. Infinity Pool (2023)

Brandon Cronenberg'in babasının izinden yürüdüğü psikedelik ve sınırları zorlayan bir tatil kâbusu.

## 9. In My Mother's Skin (2023)

Filipin yapımı bu masalsı korku, II. Dünya Savaşı arka planında geçen özgün bir peri masalı.

## 10. Immaculate (2024)

Sydney Sweeney'in başrolde olduğu, dinî korku temasını modern bir bakışla ele alan yapım.`,
    image: img4,
    source: "WhatCulture",
  },
  {
    slug: "2026-en-cok-beklenen-filmler",
    title: "2026'nın Geri Kalanında En Çok Beklenen 10 Film",
    excerpt: "Yılın ikinci yarısında sinemalara gelecek en heyecan verici yapımlar. Büyük stüdyo devam filmlerinden auteur işlerine, 2026'nın kalanına damga vurmaya aday on film.",
    body: `2026, sinema takvimi açısından son yılların en dolu dönemlerinden biri olmaya aday. Ertelenen büyük stüdyo yapımlarının nihayet vizyona girmesi, büyük auteurlerin yeni işleri ve festival dönemlerinden gelen sürprizlerle takvim taşıyor. İşte yılın kalanında en çok konuşulacak on film.

## 1. Avatar: Fire and Ash

James Cameron'un serinin üçüncü halkası. Pandora'nın "kül klanı"nı tanıtacak olan yapım, yılın kesin gişe fenomeni.

## 2. Dune: Part Three

Denis Villeneuve, Frank Herbert'in *Dune Messiah*'ını beyaz perdeye taşıyor. Timothée Chalamet'nin Paul'ü artık bambaşka bir yerde.

## 3. The Odyssey

Christopher Nolan'ın Homeros uyarlaması. IMAX kamerayla çekilen ilk mitolojik destan olma iddiasında.

## 4. Bugonia

Yorgos Lanthimos'un Emma Stone ile üçüncü iş birliği. Güney Kore filmi *Save the Green Planet* yeniden yorumu.

## 5. Zootopia 2

Disney animasyon stüdyosunun en başarılı orijinal serisinin devamı. Yıl sonu aile filmi tahtı için güçlü aday.

## 6. Wicked: For Good

Müzikalin ikinci bölümü. Cynthia Erivo ve Ariana Grande'nin performansları Oscar tartışmalarında yeniden gündemde olacak.

## 7. The Bride!

Maggie Gyllenhaal'ın Frankenstein'ın Gelini yeniden yorumu. Christian Bale ve Jessie Buckley başrollerde.

## 8. Frankenstein

Guillermo del Toro'nun uzun yıllardır beklenen tutku projesi. Netflix aracılığıyla sinemalara ve platforma gelecek.

## 9. Michael

Antoine Fuqua imzalı Michael Jackson biyografi filmi. Yasal engeller nedeniyle ertelenen projenin nihayet vizyon tarihi belli.

## 10. After the Hunt

Luca Guadagnino'nun Julia Roberts ve Ayo Edebiri'yi buluşturan akademik gerilimi. Venedik'ten sonra Oscar sezonunda güçlü bir kart.`,
    image: img5,
    source: "WhatCulture",
  },
  {
    slug: "2026-nin-simdiye-kadar-en-iyi-tv-dizileri",
    title: "2026'nın Şimdiye Kadar En İyi TV Dizileri",
    excerpt: "2026'nın ilk altı ayında öne çıkan ve türleri harmanlayan, kaygıları mizahla ve özgün hikâyelerle işleyen en güçlü TV dizileri.",
    body: `Bu liste Rolling Stone'un "The Best TV Shows of 2026 So Far" yazısından esinlenerek hazırlandı. 2026'nın ilk yarısında dikkat çeken diziler, çoğunlukla endişe, kimlik ve iş dünyasının gerginliğini işlerken aynı zamanda sürprizli mizah ve orijinal anlatılar sunuyor.

## 1. ‘A Knight of the Seven Kingdoms’ (HBO)

*Game of Thrones* evrenine geçen bu spin-off, epik ihtişamdan çok Dunk ve Egg'in aynı zamanda komik, samimi maceralarına odaklanıyor. Hikâye, resmi destanın kenarında özgürce dolaşırken HBO'nun fantastik dünyasında yeni bir nefes gibi geliyor.

## 2. ‘Bait’ (Prime)

Riz Ahmed'in başrolündeki bu yapım, James Bond rolüne aday bir aktörün kimlik, utanç ve kişisel değerlerle boğuşmasını incelikle işliyor. Britanya sinemasına özgün bir kara mizah havası katıyor.

## 3. ‘Beef’ Sezon 2 (Netflix)

İlk sezonun karanlık ve keskin mizahını sürdüren bu devam, beklenmedik çatışmaların ve modern öfkenin toplumdaki yankılarını daha da güçlü yansıtıyor. Karakterlerin iç dünya kırılmaları izleyiciye yüksek tansiyonlu bir deneyim sunuyor.

## 4. ‘Big Mistakes’ (Netflix)

Güç, medya ve ceza adaleti üzerinden ilerleyen bu iş, hataların nasıl büyük bir sarmala dönüşebileceğini anlatıyor. Ağır tonu yanlış anlaşılmadan uzak, mizahı ve gerilimi dengeli tutan bir yapım.

## 5. ‘The Comeback’ Sezon 3 (HBO)

Dizi dünyasının acımasızlığına ve yeniden doğma çabasına bir gönderme olarak geri dönen bu sezon, karakterin kamera karşısındaki düşüşünü ve aynı zamanda yeniden yükselişini trajikomik bir dille sunuyor.

## 6. ‘The Fall and Rise of Reggie Dinkins’ (NBC)

Kamu hizmeti, medya ve siyasi kariyer arasında sıkışan bir karakterin hikâyesi. NBC formatına rağmen yapım cesur bir siyasi hiciv ve kimlik sorgulaması sunuyor.

## 7. ‘Hacks’ Sezon 5 (Max)

Komedi yazarlığının acımasız dünyasına giren bu sezon, kuşak çatışmalarını ve yaratıcılık baskısını hicivsel ama yumuşak bir tonla işliyor. Max için klasik bir hit olmaya devam ediyor.

## 8. ‘Industry’ Sezon 4 (HBO)

Finans dünyasının acımasız rekabetini gösteren bu sezon, genç profesyonellerin ahlaki sınırları zorlamasını ve başarı uğruna nasıl değiştiğini gözler önüne seriyor.

## 9. ‘Margo’s Got Money Troubles’ (Apple TV)

Apple TV'nin genç yetişkin komedisi, borç ve yetişkinlik kaygısını renkli ve akıcı bir dille anlatıyor. Margo'nun maddi sorunları, beklenmedik mizah ve samimiyetle birleştiriliyor.

## 10. ‘The Pitt’ Sezon 2 (HBO Max)

Hastane draması ile kurumsal çatışmayı harmanlayan bu sezon, sağlık sektörünün kaosu ve insanî öykülerini güçlü karakterler üzerinden anlatıyor.

## 11. ‘Widow’s Bay’ (Apple TV)

Sinister bir kıyı kasabasına yerleşen yeni dul karakterlerin etrafında dönen bu gizem dizisi, gerilimi yavaş yavaş yükselten atmosferiyle etkileyici bir gerilim sunuyor.

## 12. ‘Wonder Man’ (Disney+)

Süper kahraman formatına meta bir bakış getiren bu dizi, Hollywood ve üretim endüstrisi içindeki kimlik bunalımlarını zekice işliyor. Disney+ için hem eğlenceli hem düşündürücü bir seçenek.

Kaynak: Rolling Stone – "The Best TV Shows of 2026 So Far".
`,
    image: "https://www.rollingstone.com/wp-content/uploads/2026/06/Best-TV-so-far-2026.jpg?w=1581&h=1054&crop=1",
    source: "Rolling Stone",
  },
];

export function getList(slug: string) {
  return LISTS.find((l) => l.slug === slug);
}
