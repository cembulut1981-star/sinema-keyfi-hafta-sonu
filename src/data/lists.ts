// Auto-curated list content. Sources: WhatCulture film section.
import img1 from "@/assets/wc-list-1.jpg";
import img2 from "@/assets/wc-list-2.jpg";
import img3 from "@/assets/wc-list-3.jpg";
import img4 from "@/assets/wc-list-4.jpg";
import img5 from "@/assets/wc-list-5.jpg";
import ewMovies from "@/assets/ew-best-movies-2026.webp.asset.json";
import ewThrillers from "@/assets/ew-crime-thrillers.jpg.asset.json";
import ewTv from "@/assets/maxresdefault.jpg.asset.json";
import ewRock from "@/assets/ew-rock-songs.webp.asset.json";
import ewYoung from "@/assets/ew-young-stars.jpg.asset.json";
import mythologicalAsset from "@/assets/mythological.jpg.asset.json";
import bonnieTylerAsset from "@/assets/bonnie-tyler.jpg.asset.json";

export type ListItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  source: string;
};

const _LISTS_RAW: ListItem[] = [
  {
    slug: "christopher-nolan-en-iyi-oyunculuk-performanslari",
    title: "Christopher Nolan Filmlerinden 13 En İyi Oyunculuk Performansı: Matt Damon'dan Heath Ledger'a",
    excerpt: "Variety'nin ödül editörü Clayton Davis, Nolan'ın kariyerindeki en unutulmaz 13 oyunculuk performansını sıraladı — Heath Ledger'ın Joker'inden Matt Damon'ın Odysseus'una uzanan bir liste.",
    body: "Zaman Christopher Nolan'a iyi davrandı. Yönetmenin filmografisi, sadece görsel tasarımı ve zamansal deneyleriyle değil, çıkardığı oyunculuk performanslarıyla da bir referans noktası hâline geldi. Variety'nin ödül editörü Clayton Davis, Nolan'ın kariyerindeki en iyi 13 oyunculuk performansını sıraladı.\n\n**1. Heath Ledger — Joker (The Dark Knight, 2008):** Listede tartışmasız zirve. Ledger'ın kaotik, hesaplanamaz Joker'i, bir süper kahraman filminin oyuncuya Oscar kazandırabileceğini kanıtladı.\n\n**2. Cillian Murphy — J. Robert Oppenheimer (Oppenheimer, 2023):** Nolan-Murphy işbirliğinin doruğu; Murphy'ye ilk Oscar'ını getirdi. Tarihsel bir figürü içeriden dışarıya doğru inşa eden nadir bir performans.\n\n**3. Matt Damon — Dr. Mann / Odysseus (Interstellar, 2014 & The Odyssey, 2026):** Davis, Damon'ın iki farklı Nolan projesindeki performansını birlikte değerlendiriyor. 'The Odyssey'de Damon, kariyerinin en katmanlı işlerinden birini veriyor.\n\n**4. Marion Cotillard — Mal (Inception, 2010):** Cobb'un zihnindeki hayaletin sadece bir tehdit değil, bir yas figürü olduğunu unutturmayan performans.\n\n**5. Matthew McConaughey — Cooper (Interstellar):** 'McConaissance' döneminin en duygusal işi; kitaplık sahnesindeki gözyaşları hâlâ tartışılıyor.\n\nListe ayrıca Christian Bale (Batman üçlemesi ve The Prestige), Guy Pearce (Memento), Robert Pattinson (Tenet), Anne Hathaway (Interstellar & The Dark Knight Rises), Tom Hardy (Dunkirk, The Dark Knight Rises), Florence Pugh (Oppenheimer), Ken Watanabe (Batman Begins, Inception) ve Michael Caine (kariyer boyu Nolan işbirliği) ile devam ediyor.\n\nDavis'in sonucu net: Nolan bir 'oyuncu yönetmeni' olarak anılmasa da, filmografisi son yirmi yılın en zengin performans arşivlerinden birini oluşturuyor.",
    image: "https://variety.com/wp-content/uploads/2026/07/Christopher-Nolan-Movie-Performances.jpg?w=1200&h=800&crop=1",
    source: "Variety",
  },
  {
    slug: "guardian-okurlarinin-2026-favori-filmleri",
    title: "\"Sinemada Yedi Kez İzledim\": Guardian Okurlarının 2026 Favori Filmleri",
    excerpt: "Guardian editörlerinin 2026'nın en iyilerini seçmesinin ardından okurlar da söz aldı. 'Backrooms'tan 'The Secret Agent'a, yılın ilk yarısına damga vuran sihirli sinema anları.",
    body: "Guardian editörlerinin 2026'nın ilk yarısının en iyi filmlerini seçmesinin ardından, okurlardan da yılın ilk altı ayına ait sihirli sinema anlarını paylaşmalarını istediler. Gelen mesajlarda tekrar tekrar öne çıkan başlıklar ve şaşırtıcı seçimler dikkat çekici bir kolektif portre çiziyor.\n\n**The Secret Agent** — Kleber Mendonça Filho'nun filmi, Brezilya kırsalında bir benzin istasyonunda geçen tuhaf açılış sahnesiyle Londra'dan yazan Liz'i daha ilk kareden yakalamış. Kaçak akademisyen Armando'yu köşeye sıkıştırmaya çalışan yozlaşmış bir şirket yetkilisi Ghirotti, izleyicinin tüylerini diken diken eden bir kötü.\n\n**Backrooms** — Sonsuz sarı koridorlar ve floresan aydınlatmayla çekilen bu düşük bütçeli deneme, yılın ilk yarısının en çok konuşulan indie'lerinden biri. Bir okurun ifadesiyle \"sinemada yedi kez izledim\" — YouTube kısa filminden çıkıp uzun metraj olmayı başaran ender işlerden.\n\n**The Ballad of Wallis Island** — Küçük ölçekli, sıcak ve müzik dolu bir ada hikâyesi; birçok okur için yılın 'küçük mucize' filmi. Sinemadan çıkarken bir yabancıya sarılmak istedim diyenler var.\n\n**Sinners** — Ryan Coogler'ın vampir-müzik hibrid filmi, IMAX salonlarında yaşayan bir deneyime dönüşmüş. Okurlar özellikle blues sekansını yılın en cesur set-piece'i olarak anıyor.\n\n**Bring Her Back** — Danny ve Michael Philippou kardeşlerin 'Talk to Me' sonrası ikinci filmi, korkuseverler için beklentiyi karşıladığı gibi aştı da. \"Sinemada bu kadar suskun kalmış bir salonu son ne zaman gördüm hatırlamıyorum\" yazmış Manchester'dan bir okur.\n\nListe; 'Anora' cesaretiyle Cannes'da yankı bulan 'Sentimental Value', Werner Herzog'un yeni belgeseli, Payal Kapadia'nın yeni işi ve okurların sürpriz favorisi 'Friendship' gibi başlıklarla uzayıp gidiyor. Sinema salonuna dönüş her yıl kutlanan bir söylem olmaktan çıkıp somut bir alışkanlığa evriliyor gibi — en azından Guardian okurları için 2026'nın ilk yarısı bunun kanıtı.",
    image: "https://i.guim.co.uk/img/media/e245923817e6c5241c330a7af2bc71a910020417/0_0_1547_1031/master/1547.jpg?width=1200&dpr=1&s=none&crop=none",
    source: "The Guardian",
  },

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
  {
    slug: "2026-yilinin-en-iyi-10-filmi",
    title: "2026'nın (Şimdiye Kadar) En İyi 10 Filmi",
    excerpt: "Korkudan animasyona, uzay macerasından belgesele: Entertainment Weekly'nin 2026'nın ilk yarısında öne çıkardığı on filmlik seçki.",
    body: `2026, sinema için sürprizlerle dolu bir yıl oldu. *Sinners* Oscar'da En İyi Film ödülünü kaptı, *Obsession* düşük bütçesine rağmen fenomen haline geldi, *Toy Story 5* franchise rekorunu kırdı. Entertainment Weekly'nin editörlerinin yılın ilk yarısı için seçtiği on filmi Türkçeye çevirdik.

## 1. 28 Years Later: The Bone Temple

Nia DaCosta, Danny Boyle'un vizyoner devam filmini kendi karanlık ve gotik estetiğiyle sürdürüyor. Ralph Fiennes'in Dr. Kelson'ı yılın en unutulmaz karakterlerinden.

## 2. The Drama

Kristoffer Borgli'nin yönettiği, Zendaya ve Robert Pattinson'ı buluşturan bu A24 yapımı, sarsıcı twist'iyle ve düğün öncesi tempoyla akıllardan çıkmıyor.

## 3. EPiC: Elvis Presley in Concert

Baz Luhrmann, Elvis'in Vegas rezidansını daha önce görülmemiş görüntüler ve ses kayıtlarıyla yeniden inşa ediyor. Kralın kendi ağzından bir belgesel.

## 4. The Invite

Olivia Wilde'ın Seth Rogen, Penélope Cruz ve Edward Norton'la çektiği bu oda tiyatrosu; komşuluk, evlilik ve arzu üzerine cesur bir sohbet.

## 5. Obsession

Curry Barker'ın YouTube kökenli yönetmenliği, düşük bütçeli korku filmlerine olan iştahı yeniden alevlendirdi. Inde Navarrette'in bakışı yılın en tedirgin edici performansı.

## 6. Omaha

John Magaro'nun oynadığı, eşini kaybetmiş bir babanın iki çocuğuyla yaptığı yol hikâyesi. *Past Lives*'tan sonra Magaro kariyerinin en yıkıcı performanslarından birini veriyor.

## 7. Project Hail Mary

Ryan Gosling, Andy Weir uyarlamasında bir öğretmenin galaksinin kaderini kurtarma yolculuğunu üstleniyor. Merak ve umut dolu bir uzay macerası.

## 8. Send Help

Yaz aylarının en ilgi çekici bağımsız korku çıkışlarından biri. Türe minimalist bir tazelik getiriyor.

## 9. Sinners

Ryan Coogler'ın vampir filmi, Oscar'ı kazandıktan sonra hâlâ konuşulmaya devam ediyor. Michael B. Jordan'ın çift rolü performansların zirvesinde.

## 10. Toy Story 5

Pixar'ın franchise tarihinin en büyük açılışını yapan filmi. Jessie'nin öne çıktığı bu bölüm, oyuncakların dijital çağla imtihanını anlatıyor.

Kaynak: Entertainment Weekly – "The 10 Best Movies of 2026 (So Far)".`,
    image: ewMovies.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "en-gerilimli-suc-thrillerlari",
    title: "Tüm Zamanların En Gerilimli 30 Suç Thriller'ı",
    excerpt: "Klasik noir'lardan çağdaş şoklara: Hitchcock, Fincher ve Bong Joon Ho gibi ustaların imzasını taşıyan, gerilimin doruğunda dolaşan otuz film.",
    body: `İyi bir suç thriller'ı bizi tehlikeli, yüksek riskli bir durumun tam ortasına yerleştirir; ama yasayı çiğnemenin bedeliyle yüzleşmek zorunda bırakmaz. Karmaşık kurgular, ahlaki ikilemler ve gri karakterlerle inşa edilen bu filmler, toplumun karanlık yüzüne bir bakış sunar. İşte Entertainment Weekly'nin derlediği, türün doruklarında dolaşan 30 filmden öne çıkan başlıklar.

## 1. Memories of Murder (2003)

Bong Joon Ho'nun gerçek bir seri katil vakasını anlattığı bu Kore klasiği; yetersizlik, öfke ve umutsuzluğu bir polisiye çerçevesine oturtuyor.

## 2. Chinatown (1974)

Roman Polanski'nin yönettiği bu neo-noir başyapıtı, Jack Nicholson'un ikonik performansıyla Los Angeles'ın su ihalelerinin ardındaki çürümüşlüğü ifşa ediyor.

## 3. Seven (1995)

David Fincher'ın yedi ölümcül günahı yılın en karanlık polisiye kâbusuna dönüştüren yapımı. Morgan Freeman ve Brad Pitt'in kimyası tartışılmaz.

## 4. Zodiac (2007)

Yine Fincher'dan, obsesyonun bir gazeteciyi ve polisleri nasıl tükettiğini anlatan sabırlı, titiz ve rahatsız edici bir başyapıt.

## 5. Elevator to the Gallows (1958)

Louis Malle'in ilk uzun metrajı, Miles Davis'in doğaçlama saksafonu eşliğinde bir cinayet planının çözülüşünü izliyor.

## 6. The Silence of the Lambs (1991)

Anthony Hopkins ve Jodie Foster'ın buluşması, Oscar'ın en büyük beşlisini kazanan tek korku-thriller karışımını ortaya çıkardı.

## 7. Rear Window (1954)

Hitchcock'un komşusunun cinayetine tanık olduğunu düşünen bir fotoğrafçıyı anlattığı, tek mekân gerilimin ders kitabı örneği.

## 8. No Country for Old Men (2007)

Coen Kardeşler'in Cormac McCarthy uyarlaması; Anton Chigurh'un varlığı türe yeni bir kötü adam arketipi kazandırdı.

## 9. Prisoners (2013)

Denis Villeneuve'ün Hugh Jackman ve Jake Gyllenhaal'ı buluşturan uzun, ıslak, karanlık gerilimi. Ahlaki sınırların nerede biteceğini sorgulatıyor.

## 10. Listenin geri kalanı

*The Departed*, *Nightcrawler*, *Gone Girl*, *Mystic River*, *L.A. Confidential*, *Heat*, *The French Connection*, *Blue Ruin*, *Drive*, *A Simple Plan*, *Fargo*, *Blood Simple*, *The Long Goodbye*, *Klute*, *Vertigo*, *Strangers on a Train*, *Insomnia*, *The Vanishing*, *Cure*, *Memento* ve *The Third Man*.

Kaynak: Entertainment Weekly – "The 30 Most Suspenseful Crime Thrillers of All Time, Ranked".`,
    image: ewThrillers.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "2026-en-iyi-tv-dizileri-ew",
    title: "2026'nın (Şimdiye Kadar) En İyi 10 TV Dizisi",
    excerpt: "The Pitt'ten Widow's Bay'e, Hacks'ten Industry'ye: Entertainment Weekly'nin 2026'nın ilk yarısı için seçtiği on TV dizisi.",
    body: `Küçük ekran 2026'nın ilk yarısında hem yeni yapımlarla hem de güçlü devam sezonlarıyla doldu. Sterling K. Brown'ın *Paradise*'ı, Jean Smart'ın *Hacks*'i, Myha'la'nın *Industry*'si ve Sam Reid'in *Interview with the Vampire*'ı sezonun konuşulanları arasında.

## 1. The Pitt (Max)

Hastane draması formatını gerçek zamanlı, tek mekân gerilimiyle yeniden icat eden dizi. Noah Wyle kariyerinin en olgun performansını sergiliyor.

## 2. Paradise (Hulu)

Sterling K. Brown'ın başrolde olduğu bu politik thriller, ilk bölümdeki twist'iyle yılın en çok tartışılan pilot bölümünü verdi.

## 3. Hacks (Max)

Deborah Vance ve Ava'nın ilişkisi bu sezon en karanlık yerine ulaşıyor. Jean Smart'ın Emmy zaferi kesin görünüyor.

## 4. Industry (HBO)

Finansın acımasız dünyası, dördüncü sezonda yeni bir odaklamayla karakterlerin ahlaki çöküşünü daha da derinleştiriyor.

## 5. Interview with the Vampire (AMC)

Sam Reid'in Lestat'ı, Anne Rice uyarlamasının şimdiye kadarki en iyi ekran versiyonu olarak selamlanıyor.

## 6. The Studio (Apple TV+)

Seth Rogen'in yönettiği ve başrolde olduğu bu Hollywood hiciv dizisi, endüstrinin absürtlüğünü acımasızca kanıtlıyor.

## 7. Severance (Apple TV+)

İkinci sezon uzun beklemeye değdi. Ben Stiller'ın estetiği ve Dan Erickson'ın senaryosu türü yeniden şekillendirmeye devam ediyor.

## 8. The White Lotus (HBO)

Mike White'ın üçüncü sezonu Tayland'a taşındı. Ensemble kadrosu ve sosyal keskinliği yine yerinde.

## 9. Widow's Bay (Apple TV+)

Yılın en büyük sürprizi. Kıyı kasabasında geçen mistik gerilim, atmosferi kadar karakterleriyle de bağlılık kuruyor.

## 10. Andor (Disney+)

İkinci ve son sezon, *Star Wars* evreninin bugüne kadarki en yetişkin yapımı olarak tarihe geçiyor.

Kaynak: Entertainment Weekly – "The 10 Best TV Shows of 2026 (So Far)".`,
    image: ewTv.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "tum-zamanlarin-en-iyi-25-rock-sarkisi",
    title: "Tüm Zamanların En İyi 25 Rock Şarkısı",
    excerpt: "Prince'ten Led Zeppelin'e, The Beatles'tan Nirvana'ya: türün kalbini oluşturan, isyanı ve gürültüyü hiç kaybetmemiş 25 rock klasiği.",
    body: `Rock & roll özünde statükoya bir başkaldırıdır — gürültü çıkarmaktan, kaos yaratmaktan çekinmeyen bir isyan hali. Bu yüzden "tüm zamanların en iyi rock şarkıları" listesi hazırlamak biraz çelişkili bir iş. Ama Entertainment Weekly bu göreve girişti ve tür tarihine damga vurmuş 25 şarkıyı seçti.

## 1. "Let's Go Crazy" — Prince

*Purple Rain* açılışı; funk, rock ve gospel'in mükemmel buluşması. Prince'in dizüstü çıkışı hâlâ tüylerinizi diken diken ediyor.

## 2. "Smells Like Teen Spirit" — Nirvana

90'ların bir kuşağın manifestosu. Butch Vig'in produksiyonu ve Kurt Cobain'in ses kırılmaları hâlâ taze.

## 3. "Stairway to Heaven" — Led Zeppelin

Rock'ın belki de en tartışmalı "en iyi"si. Sekiz dakika boyunca akustik başlangıçtan elektrik zirveye tırmanıyor.

## 4. "Bohemian Rhapsody" — Queen

Kurallara meydan okuyan yapısı; opera, rock ve balad karışımıyla türün sınırlarını yeniden çizdi.

## 5. "Like a Rolling Stone" — Bob Dylan

Folk'tan rock'a geçişini ilan ettiği şarkı. Newport 1965 seyircisi bunu unutamadı.

## 6. "Born to Run" — Bruce Springsteen

New Jersey'nin sokakları rock'a şiir gibi işleniyor. "The Boss" lakabının başlangıcı.

## 7. "London Calling" — The Clash

Punk'ın en politik anı. 1979'da yayınlandığından beri her krizde yeniden dinleniyor.

## 8. "Respect" — Aretha Franklin

Otis Redding'in orijinali Aretha'nın elinde bir feminist himne dönüştü.

## 9. "Hey Jude" — The Beatles

Paul McCartney'nin Julian Lennon için yazdığı şarkı, yedi dakikalık koro finaliyle stadyum rock formatını başlattı.

## 10. "Purple Haze" — Jimi Hendrix

Gitarın elektrikli olarak ne yapabileceğini gösteren manifesto.

Listenin geri kalanı: "Whole Lotta Love", "Satisfaction", "Sweet Child o' Mine", "November Rain", "Comfortably Numb", "Won't Get Fooled Again", "Baba O'Riley", "Layla", "Free Bird", "Thunderstruck", "Enter Sandman", "One", "Black", "Everlong", "Somebody to Love" ve "Immigrant Song".

Kaynak: Entertainment Weekly – "The 25 Greatest Rock Songs of All Time".`,
    image: ewRock.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "genc-yasta-hayatini-kaybeden-tv-yildizlari",
    title: "Genç Yaşta Hayatını Kaybeden 8 TV Yıldızı",
    excerpt: "Heather O'Rourke'tan Cameron Boyce'a, Jonathan Brandis'ten Brittany Murphy'ye: ekrana damga vurup çok erken aramızdan ayrılan sekiz oyuncu.",
    body: `Bazı yıldızlar erken parlar, erken söner. Film ve müzik endüstrisinin James Dean, Jayne Mansfield, Jimi Hendrix ve Jim Morrison gibi kayıpları çoktur. Televizyon da benzer trajedilere sahne oldu: 12 yaşındaki Heather O'Rourke'tan *Descendants* yıldızı Cameron Boyce'a, bir kuşağın çocukluğunun kahramanları çok erken kayboldu.

## 1. Heather O'Rourke (12)

*Poltergeist* üçlemesinin unutulmaz "Carol Anne"i, tanı konamayan bağırsak rahatsızlığı yüzünden 1988'de hayatını kaybetti.

## 2. Cameron Boyce (20)

Disney Channel'ın parlayan yüzü, 2019'da uykusunda geçirdiği epilepsi nöbeti sonucu ailesini, hayranlarını ve endüstriyi yıktı.

## 3. Jonathan Brandis (27)

*SeaQuest DSV* yıldızı, kariyerinin durgunlaşması sonrası 2003'te intihar etti. Ölümü sonrası çocuk yıldızlarının psikolojik desteği tartışıldı.

## 4. Brittany Murphy (32)

*Clueless* ve *8 Mile* ile hafızalara kazınan Murphy, 2009'da beklenmedik biçimde hayatını kaybetti. Ölümüyle ilgili şüpheler yıllarca sürdü.

## 5. Anton Yelchin (27)

*Star Trek* yeniden başlatmasının Chekov'u. 2016'da kendi Jeep'i tarafından ezildiği trajik kaza, otomotiv geri çağırmalarını gündeme getirdi.

## 6. Naya Rivera (33)

*Glee*'nin Santana Lopez'i, 2020'de oğlunu tekneye bıraktıktan sonra göldeki bir kazada boğuldu.

## 7. Cory Monteith (31)

*Glee*'nin Finn Hudson'ı, 2013'te bağımlılık mücadelesinin sonunda hayatını kaybetti.

## 8. Angus Cloud (25)

*Euphoria*'nın Fezco'su. 2023'te babasının ölümünden hemen sonra kaza sonucu aşırı doz yüzünden vefat etti.

Kaynak: Entertainment Weekly – "8 TV Stars Who Died Tragically Young".`,
    image: ewYoung.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "en-iyi-mitolojik-filmler",
    title: "Yunan Destanlarından İncil Blockbuster'larına: Sıralanmış En İyi 20 Mitolojik Film",
    excerpt: "Christopher Nolan'ın The Odyssey'i gişeleri altüst etmeye hazırlanırken, Guardian sinemanın en görkemli, en tuhaf ve en unutulmaz mitolojik filmlerini sıraladı.",
    body: `Christopher Nolan'ın The Odyssey'i Aralık'ta beyaz perdeye taşımaya hazırlanırken, Guardian mitolojik sinemanın büyük dosyalarını yeniden açtı. Yunan destanlarından İncil blockbuster'larına, Kore folkloruna ve Marvel öncesinin dev süperkahraman yapımlarına uzanan bu 20 film, mitolojinin sinemayla nasıl \"eve döndüğünü\" gösteriyor.

## 20. Percy Jackson & the Olympians: The Lightning Thief (2010)

Chris Columbus'un yönettiği Rick Riordan uyarlaması, seri hayranlarını hayal kırıklığına uğratsa da Uma Thurman'ın Medusa'sı ve Steve Coogan'ın Hades'iyle unutulmaz bir çocuk-mitolojisi karışımı.

## 19. Immortals (2011)

Tarsem Singh'in görsel şölene dönüşen Theseus filmi, tarihsel doğrulukla değil, resimsel etkiyle ilgilenir. Henry Cavill'in ilk büyük rolü.

## 18. Wonder Woman (2017)

Patty Jenkins'in filmi, Amazon mitolojisini I. Dünya Savaşı melodramına ustaca yerleştirir. Gal Gadot'un Diana'sı süperkahraman filmlerinin en mitolojik olanlarından biri.

## 17. Troy (2004)

Wolfgang Petersen'in Homeros uyarlaması, tanrıları çıkarıp yerine Brad Pitt'in kasları ile insan trajedisini koyar. Peter O'Toole'un Priam'ı sarsıcı.

## 16. The Prince of Egypt (1998)

DreamWorks'ün animasyon başyapıtı. Musa'nın hikâyesini Yeşilköy-Broadway şarkılarıyla yeniden anlatır.

## 15. Excalibur (1981)

John Boorman'ın gotik Arthur uyarlaması, mitolojik sinemayı sisli, çamurlu ve mistik bir çukura sürükleyerek türü yeniden tanımladı.

## 14. Noah (2014)

Darren Aronofsky'nin İncil epigi, taş devi meleklerden dünyanın sonuna uzanan sanatsal bir sanrı. Russell Crowe'un Noah'ı monolitik.

## 13. The Odyssey (1997)

Andrei Konchalovsky'nin Emmy'li mini dizisi, Nolan'dan önceki büyük Odyssey uyarlaması. Armand Assante'nin sabırlı Odysseus'u.

## 12. Jason and the Argonauts (1963)

Ray Harryhausen'in iskelet savaşçıları ve Talos figürü, mitolojik sinemanın stop-motion altın çağını temsil eder.

## 11. Clash of the Titans (1981)

Yine Harryhausen; Perseus'un Medusa ile karşılaşması ve Kraken'in yükselişi kuşakların rüyalarına girdi.

## 10. The Passion of the Christ (2004)

Mel Gibson'ın Aramice-Latince çektiği, kanlı ve kesintisiz haçlanma anlatısı. Din sinemasının en tartışmalı örneklerinden.

## 9. Ben-Hur (1959)

William Wyler'ın 11 Oscar'lı epiği. At arabası yarışı hâlâ sinema tarihinin en etkileyici aksiyon sahnelerinden biri.

## 8. Black Orpheus (1959)

Marcel Camus'nün Rio karnavalında geçen Orpheus uyarlaması. Bossa nova müziği ve tropikal renkleriyle bir başyapıt.

## 7. Ulysses (1954)

Kirk Douglas'ın Odysseus'u. Mario Camerini'nin bu İtalyan yapımı, destanı 100 dakikaya sığdırma cüretiyle bugün bile şaşırtıcı.

## 6. Kagemusha (1980)

Akira Kurosawa'nın samuray filmleri, Japon feodal mitolojisinin destansı sinemadaki en güçlü ifadeleridir.

## 5. The Ten Commandments (1956)

Cecil B. DeMille'in Musa'sı. Charlton Heston, denizi ikiye ayırırken sinema mitolojisinin de sınırlarını genişletti.

## 4. Spirited Away (2001)

Hayao Miyazaki'nin Shinto ve Japon folkloruna yaptığı en büyük armağan. Mitolojik sinemanın animasyondaki zirvesi.

## 3. Medea (1969)

Pier Paolo Pasolini'nin Maria Callas ile çektiği bu film, Euripides'i modern bir arkeoloji dersine dönüştürür.

## 2. Orphée (1950)

Jean Cocteau'nun büyülü Orpheus modernizasyonu. Aynadan geçen ölüm figürüyle sinema tarihine gömüldü.

## 1. Andrei Rublev (1966)

Tarkovsky'nin Rus Ortodoks ikon ressamı üzerine çektiği bu film, kutsalın ve mitolojik olanın sinemadaki en soylu ifadesi olarak zirvede.

Kaynak: The Guardian – \"From Greek epics to biblical blockbusters: the 20 best mythological movies – ranked!\"`,
    image: mythologicalAsset.url,
    source: "The Guardian",
  },
  {
    slug: "evil-dead-tum-filmler-nerede",
    title: "Tüm 'Evil Dead' Filmleri Nerede İzlenir? Franchise'ın Tek Adres Rehberi",
    excerpt: "'Evil Dead Burn'un vizyonuyla birlikte Sam Raimi'nin başlattığı serinin tamamı tek bir yayın platformunda toplandı. Ash'in Deadite'larla savaşını baştan sona izlemek için pratik bir rehber.",
    body: `'Evil Dead Burn'un vizyona girmesinden önce sadece 2023 yapımı 'Evil Dead Rise'ı değil, tüm franchise'ı gözden geçirmeye değer. Ash'in Deadite'larla mücadelesini izlemekten şikâyet etmek zor, ama önce onları bulmanız gerek. Şanslıyız ki serinin tamamı tek bir uygun yerde ve devam dizisini de aynı adreste bulabilirsiniz.

## Tüm 'Evil Dead' filmleri nerede izlenir?

'Evil Dead Burn' nihayet vizyona girerken franchise'ı tazelemek için mükemmel bir zaman — çünkü serinin son halkasının ötesinde bir dizi bağlantı olduğu söyleniyor.

Önceki tüm filmlerin bulunabileceği yerler şöyle:

- **The Evil Dead** (1981) – HBO Max
- **Evil Dead II** (1987) – HBO Max
- **The Army of Darkness** (1992) – HBO Max
- **Evil Dead** (2013) – HBO Max
- **Evil Dead Rise** (2023) – HBO Max

Görüldüğü gibi HBO Max, franchise'ın tümü için tek durak alışveriş noktası hâline gelmiş durumda. Devam dizisi 'Ash vs. Evil Dead' de aynı platformda bulunuyor. Bu, yeni Sébastien Vaniček filmine hazırlanırken tüm seriyi ardışık olarak izlemek isteyen 'completionist' izleyiciler için ideal bir konfigürasyon.

Kaynak: TheWrap – "Where to Stream Every 'Evil Dead' Movie"`,
    image: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2023/04/Evil-Dead-2.jpeg?fit=1200%2C675&quality=89&ssl=1",
    source: "TheWrap",
  },
  {
    slug: "hbo-max-bu-haftanin-en-iyi-3-filmi",
    title: "HBO Max'te Bu Haftanın En İyi 3 Filmi: 'Mask of the Phantasm', 'Evil Dead II' ve 'Legally Blonde'",
    excerpt: "Emmy adaylıklarıyla dolu bir TV haftasında HBO Max, sinema tutkunları için de bir Batman animasyon başyapıtı, bir korku klasiği ve 2000'lerin en iyi komedilerinden biriyle iddialı.",
    body: `Emmy adaylıklarının yeni açıklandığı büyük bir TV haftası. Ama HBO Max, sinema severleri de mutlu edecek başlıklarla dolu. Bu hafta gelmiş geçmiş en iyi DC filmlerinden birine, bir korku klasiğine ve 2000'lerin başından mükemmel bir komediye göz atabilirsiniz.

## "Batman: Mask of the Phantasm"

Kendini pasif bir Batman hayranı bile sayan herkes, 'Batman: The Animated Series' evreninde geçen uzun metrajlı bu maceraya bir şans vermeli. Kevin Conroy ve Mark Hamill'in ikonik Batman/Joker ikilisinin yer aldığı film, geçmişten bir figürle yüzleşen Bruce Wayne'in bir zamanlar pelerini bırakmayı düşünecek kadar sevdiği Andrea Beaumont (Dana Delany) hikâyesine odaklanıyor. Bruce'un anne-babasının mezarını ziyaret ettiği sahne, karakterin ekrandaki en duygusal anlarından biri.

## "Evil Dead II"

Cuma günü Sébastien Vaniček'in imzasıyla yeni bir 'Evil Dead' filmi vizyona giriyor. Bu filmler başından beri güçlü kalmayı başardı, ama Sam Raimi'nin ilk iki yapımı hâlâ 'ormandaki kulübe' korkusunun en büyük örnekleri olmaya devam ediyor. İkinci filmde artan kara mizah öğesi (korkuyu hiç yumuşatmadan) pastanın üstündeki krema. Bruce Campbell'ın başrolde olduğu bu splatter şölen korkutucu, acımasız ve son derece eğlenceli.

## "Legally Blonde"

Prime Video'nun prekuel dizisi 'Elle' hakkında ne düşünürseniz düşünün, 'Legally Blonde'a dönmek her zaman iyi fikirdir. Robert Luketic'in yönetmenliğinde, Karen McCullah Lutz ve Kirsten Smith tarafından yazılan film, Harvard'da hukuk merdivenlerini tırmanarak muhaliflerine yanıldıklarını kanıtlayan bir kadını (Reese Witherspoon) anlatan komik ve düşündürücü bir yapıt. Witherspoon'un en iyi performanslarından biri ve 2000'lerin en iyi komedilerinden.

Kaynak: TheWrap – "The 3 Best Movies on HBO Max This Week"`,
    image: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2022/03/batman-mask-of-the-phantasm.jpg?resize=1024%2C576&quality=89&ssl=1",
    source: "TheWrap",
  },
  {
    slug: "bonnie-tyler-total-eclipse-en-iyi-5-film-sahnesi",
    title: "Bonnie Tyler'ın 'Total Eclipse of the Heart' Şarkısının En İyi 5 Sinema Anı",
    excerpt: "Bonnie Tyler'ın 75 yaşında hayatını kaybetmesinin ardından geriye kalan en güçlü mirası: 'Total Eclipse of the Heart'ın komedi, dram ve korku filmlerinde perdeyi patlatan beş anı.",
    body: `Efsanevi kısık sesli şarkıcı Bonnie Tyler'ı 75 yaşında kaybettik. Ardında bıraktığı en büyük miraslardan biri, 1983 tarihli power ballad'ı 'Total Eclipse of the Heart' — ve bu şarkının onlarca yıldır sinema salonlarında yarattığı unutulmaz anlar. Britt Hayes'in Entertainment Weekly için derlediği listeyi paylaşıyoruz.

## 1. "Old School" (2003) — The Dan Band Sahnesi

Todd Phillips'in kült komedisi 'Old School'da The Dan Band'in Frank Sinatra'yı andıran Frank'in (Will Ferrell) düğününde şarkıyı seslendirmesi, filmin en meşhur sahnelerinden biri. Perrey Reeves ile Ferrell'ın dansıyla birlikte bu sahne, şarkının 2000'ler nostaljisiyle yeniden doğuşunun başlangıcı sayılıyor.

## 2. "Bandslam" (2009) — Karaoke Sahnesi

Bir genç müzik draması olan 'Bandslam'de karakterlerin karaokede söylediği bu şarkı, filmin en samimi duygusal patlaması. Vanessa Hudgens ve Aly Michalka'nın yer aldığı sekans, şarkının kuşaklar arasında köprü kurma gücünü kanıtlıyor.

## 3. "It's Always Sunny in Philadelphia" — The Nightman Cometh

Teknik olarak bir TV bölümü olsa da 'The Nightman Cometh' müzikal bölümündeki finalin 'Total Eclipse' esintileri, popüler kültürün bu şarkıyla olan takıntısının en absürt örneklerinden biri.

## 4. "Urban Cowboy" (1980) — Öncü Duygusal Kullanım

Aslında Bonnie Tyler'ın hitinden önce, aynı yıl piyasaya çıkan bir başka aşk temalı şarkının kullanımıyla türün habercisi. Tyler'ın şarkısı daha sonra country ayrılık sahnelerinin şablonuna dönüştü.

## 5. "The Perks of Being a Wallflower" (2012) — Kamyonet Sahnesinin Ruhu

Şarkının doğrudan kullanıldığı bir film değil, ama duygusal DNA'sını devralıyor. Britt Hayes'in yazısında hatırlattığı gibi 'Total Eclipse of the Heart' aslında ergen romantizmi kanonunun kalbinde bir yerde duruyor — Emma Watson'ın "I feel infinite" sahnesi bu ruhun bir mirasçısı.

Bonnie Tyler'ın sesi gitti; ama Jim Steinman'ın melodramatik notaları sinema tarihinde kalıcı bir yer edindi.`,
    image: bonnieTylerAsset.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "paste-en-iyi-yeni-albumler-10-temmuz-2026",
    title: "Bu Hafta Dinlenmesi Gereken 12 Yeni Albüm (10 Temmuz 2026)",
    excerpt: "Finn Wolfhard'ın indie-rock çıkışından Jack White'ın blues-punk kükreyişine, Kelela'nın R&B laboratuvarından Xiu Xiu'nun Eraserhead güzellemesine: Paste'in bu haftaki New Music Friday seçkisi.",
    body: `Paste her Cuma New Music Friday'in kalbi olmaya devam ediyor. Best New Songs listelerinin ardından yayımlanan bu albüm derlemesi, 10 Temmuz haftasının en çarpıcı on iki plağını bir araya getiriyor. Rock, folk, elektronik ve deneysel arasında gidip gelen bir kesit.

## Finn Wolfhard — Fire From The Hip

Finn Wolfhard'ın *Fire from the Hip*'i ilk dinleyişte tanıdık geliyor: Sharp Pins, Alex G, Elliott Smith ve Pavement kokusu bariz. Ama Wolfhard'ın kendinden emin, hınzır sunumu pastişten uzak duruyor. "Lights Go Down" Nicole Kidman'ın ikonikleşip aşırı kullanılan AMC konuşmasını, bir oyuncunun film izleme deneyimine dair hüzünlü bir yorumuna çeviriyor. "Common Side Effects"te George Clooney, "Maggie"de George W. Bush esprileri; ama arka planda country-folk yaylılar ve "Nice to Meet You Again"in jam band havası tüm plağa dolgun bir doku katıyor.

## Houndmouth — Lordy

Beş yıllık sessizliğin ardından gelen *Lordy*, Matt Myers'ın yaratıcı krizinden doğan en samimi Houndmouth albümü. Kamp ateşi müziği gibi okunuyor: yetmişler etkili folk-rock parçaları, güneşe boğulmuş Güney yolları, muğlak bir fisheye anı defteri. "Never Gonna Die"da "yaptığımız bu ev / tahtası çürümesin diye dua edelim" diye titreyen bir sese kavuşuyoruz. "Holy Moses"ta Iron and Wine'dan Sam Beam eşlik ediyor.

## Hurry — Zoned Out

Matt Scottoline'un power-pop projesi Hurry'nin altıncı LP'si, yaşlanmakla ilgili karışık hissiyatların özeti. "The Dumbest Person You've Ever Seen"in şeker gibi kancalarında "her şey değişiyor, tırsıyorum" itirafı var. Cars tarzı Moog riff'leriyle "Untitled" ara sesi ve Teenage Fanclub'dan Gerard Love'ın vokal katkısıyla "Moving After You" plağı yaz albümü tartışmalarına dahil ediyor.

## Jack White — Frozen Charlotte

Jack White, modern söz yazımını White Stripes bulaşıcılığından geçirmenin yolunu bulmuş. *Frozen Charlotte*, "Ball and Biscuit"i andıran dev gitar sololarıyla dolu blues-punk barn burner'ların yeni bir koleksiyonu. Kapanış "Neighbors Blues"un çok bölümlü solosu, White'ın hâlâ nasıl shred ettiğinin ispatı.

## Kelela — new avatar

L.A. alt-pop sahnesinden çıkışının üzerinden on yılı aşkın süre geçen Kelela, *new avatar*'da geriye kısmen dönüp katalogunu yeniden yorumluyor. "point blank"in titreşen breakleri hem *Cut 4 Me*'nin grime ritmini hem *Raven*'ın en kulüp kısımlarını hatırlatıyor. Belki de kariyerinin en olgun plağı.

## Panda Bear / Sonic Boom — A ? of When

Panda Bear ile Sonic Boom'un yıllara yayılan iş birliğinde bile benzersiz duran bir plak. Rahatsız edici sözleri parıldayan psych-pop içine gömme geleneğinin en olgun örneği.

## Sad13 — 1331

Speedy Ortiz'den Sadie Dupuis'in Sad13 rumuzuyla yayımladığı 15 dakikalık mixtape. On üç kısa parçada JRPG oda müziği, mağara orgları ve programlanmış davullar dolaşıyor.

## Show Me The Body — Alone Together

Show Me The Body New York hardcore'unu her zaman sivil görev bilmişti. Dördüncü plakları *Alone Together*, "radikal sevgi" temelli bir eylem çağrısı. On üç parça, otuz yedi dakikaya sığan saf ses.

## The Temper Trap — Sungazer

On yıl aradan sonra dönen The Temper Trap, 2009'daki çıkış plağından beri en meraklı hallerinde. "Giving Up Air" grubun bugüne kadarki en iyi işi.

## Tracey Nelson — Hercules

Perennial etiketinden çıkan bu ilk plak, country-rock mükemmelliği. Karly Hartman, Jack Kraus ve MJ Lenderman'ın konuk katkılarıyla, modern hayatın küçük kalp kırıklıklarını sakin bir umursamazlıkla dolaşıyor.

## Twisted Teens — Florida Water Blues

Twisted Teens efekt kullanmıyor, Caspian'ın akordu bile yok. "Just plug in and go." Spaghetti-western gitar rulolarıyla dolu, sıkı ve dürüst bir plak.

## Xiu Xiu — Eraserhead Xiu Xiu

Xiu Xiu'nun David Lynch'in 1977 tarihli *Eraserhead*'ini yeniden yorumladığı yedi parçalık plak. Ev yapımı enstrümanlar, saha kayıtları, el fenerleri ve elektrik parazitiyle inşa edilmiş bir yeraltı.

Kaynak: Paste Magazine — "Best New Albums: July 10, 2026".`,
    image: "https://img.pastemagazine.com/wp-content/uploads/2026/07/10130803/ECC4B89C-35CC-4BFA-AE87-7B1AB37DBDF5-scaled.jpeg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-haziran-2026-en-iyi-10-sarki",
    title: "Haziran 2026'nın En İyi 10 Şarkısı",
    excerpt: "heavensouls'un yedi dakikalık kolajından Lily Seabird'ün Americana headbanger'ına, Kelela'nın broken beat'ından Mykki Blanco'nun queer flâneur teasine — Paste'in Haziran 2026 favorileri.",
    body: `Paste'in her hafta yayımladığı Best New Songs sütununda öne çıkan yirmi parçadan onunu seçtik. Bunlar, aralık ayında yılın en iyileri konuşulmaya başlandığında masaya en güçlü aday olarak gelecek şarkılar. Mykki Blanco ile Kelela ayı brilliant dans müziğiyle açtı; The Tubs ile Sullivan kardeşler ise rock and roll ziyafetiyle kapadı.

## heavensouls — "shipping times and quiet streets"

Nijerya doğumlu, Houston merkezli rapçi-yapımcı Chidi Obialo'nun *westside trapped* plağı yıl ortası listemizde ilk beşe girdi. Yeni single'ı "shipping times and quiet streets", fairy therapy'nin çevik caz saksafonu ve Sidepeices ortağı Stickerbush'un Auto-Tune mırıltılarıyla renklenen törensel bir kolaj. Yedi dakika boyunca sarmalanan detaylar.

## Kelela — "point blank"

*Cut 4 Me*'nin ruhu, "point blank"in Batı Londra broken beat'inde geziniyor. Kelela'nın feraheti gecikmelerde ve breakbeat'lerde geri dönüyor. Fade to Mind ve Night Slugs bağları tüm parçaya yayılıyor.

## L'Rain — "soulless cycle"

L'Rain'in yaklaşan LP'si *Fata Morgana*, ülkenin "faşizm ve trad kültüre inişi" ile hesaplaşmaktan doğuyor. "soulless cycle" habersizce sinip patlıyor. Kriz rutine dönüştüğünde ne oluyor sorusunun ses-dokusal cevabı.

## Lily Seabird — "Election Day"

Vermont'lu şarkı yazarının üç yılda üçüncü plağı *Lightspheres On Their Way* için yayımladığı bu single, isyancı distorsiyon, çığlık atan gitarlar ve düpedüz ulumalar barındırıyor. Bir Americana headbanger, folk için mosh giriş kapısı.

## Mykki Blanco — "Little Feet"

*CAFE PARADISO*'nun ilk teasi. Ian Isiah ve Breakaway'in yardımıyla iki dakikaya sığdırılmış tam kadro queer flâneur şarkısı. Sokak lambasının altında kaynaşan bedenler, dans ve adanmışlıkla döşenmiş bir oda.

## Sam & Louise Sullivan — "Working Girl"

Sullivan kardeşlerin folk-rock kimyası "Working Girl"de en olgun haline erişiyor. Yorgun bir mesai anlatısını yumuşak vokal harmonileriyle sarmalayan parça, ayın en insani anını sunuyor.

## SML — "Spontaneous Live Music"

Doğaçlama caz kuartetinin yeni single'ı, çevik bas hattı ve rüzgâr enstrümanlarının serbest diyalogu üzerinden ilerliyor. Live prodüksiyon estetiği plağa nefes veriyor.

## Tasha — "You Are Spring"

Şair-şarkı yazarı Tasha'nın albüm başlığı parçası, akustik gitar ve fısıltılı vokallerle bir bahar imgesi kuruyor.

## The Tubs — "Illusion Pt. II"

İngiliz jangle-pop grubu The Tubs'ın devam parçası, twin-guitar örgüleriyle klasik R.E.M. anlarına selam çakıyor. Ayı rock için kapatan bir anthem.

## Kelsey Lu — "So Help Me God"

Çellist ve şarkıcı Kelsey Lu'nun yeni albüm parçası, koro düzenlemeleri ve elektronik doku arasında dolaşan bir dua.

Kaynak: Paste Magazine — "The 10 Best Songs of June 2026".`,
    image: "https://img.pastemagazine.com/wp-content/uploads/2026/07/06121515/B3800E2E-09F5-496B-88A2-CAF8743A2B5A-scaled.jpeg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-bu-hafta-dinlenmesi-gereken-5-yeni-sarki-18-haziran-2026",
    title: "Bu Hafta Dinlenmesi Gereken 5 Yeni Şarkı (18 Haziran 2026)",
    excerpt: "Haftanın şarkısı Lily Seabird'ün 'Election Day'i. Julia Jacklin, No Joy & Fire-Toolz, Saul Williams ve daha fazlası: Paste'in 18 Haziran 2026 seçkisi.",
    body: `Her perşembe Paste ekibi ve katkı sağlayanları haftanın en sevdikleri beş şarkısını seçiyor; bir tanesine "Haftanın Şarkısı" unvanını veriyor. İşte 18 Haziran 2026 haftasının beş favorisi.

## Haftanın Şarkısı: Lily Seabird — "Election Day"

Vermont'lu şarkı yazarı Lily Seabird üç yılda üçüncü plağı *Lightspheres On Their Way*'i duyurdu. "Election Day", 2024'teki "Dirge"den bu yana Seabird'ün girmediği bir moda dönüşü işaret ediyor: isyancı distorsiyon, çığlık atan gitarlar, düpedüz ulumalar. Vokali hâlâ bir kanaryanın uyarısı gibi net, ama sözlerin duygusunda takılıyor ve kenarlarından yırtılıyor. Bir Americana headbanger, folk için mosh giriş kapısı.

## Julia Jacklin — "Get Away From Me (I Think I'll Love You Soon)"

Julia Jacklin indie rock'ın en ayırt edici seslerinden biri olmaya devam ediyor. Yaklaşan LP'si *The Gem*'in ilk single'ı, saçını başını yolduğu, muhtemelen sonuçsuz bir aşk ilişkisi üzerine. Bulutsu gitarların ve marş ritminin arasında bir ara solo parlıyor.

## No Joy & Fire-Toolz — "Big Life, Big Leaf"

Bir zamanlar Jasamine White-Gluz'un doom-shoegaze aracı olan No Joy, son on beş yıldır synth-pop ve techno karışımı garip bir tarafa savruluyor. Fire-Toolz'un Angel Marcloid yapımcılığındaki geçen yılın *Bugland*'inin ardından bu iş birliği, güneş ışığıyla ağartılmış bir dans müziği.

## Saul Williams feat. Moor Mother & Gonjasufi — "Conspiracy"

Saul Williams'ın yedi yıl aradan sonra çıkacak solo albümü *Leaf Life*, Massive Attack'ten Robert Del Naja, Kamasi Washington ve daha pek çok konuğa ev sahipliği yapacak. İlk single "Conspiracy"de Moor Mother ve Gonjasufi eşlik ediyor. Williams'ın "ses bir enstrümandır" felsefesinin bir dışa vurumu.

## The Tubs — "Illusion Pt. II"

İngiliz jangle-pop grubu The Tubs'ın *Cotton Crown* devamı. Twin-guitar örgüleriyle klasik R.E.M. anlarına selam çakan, haftanın en tazelenmiş anthem'ı.

Kaynak: Paste Magazine — "Best New Songs: June 18, 2026".`,
    image: "https://img.pastemagazine.com/wp-content/uploads/2026/06/18122900/DDC18B8D-4083-4DCD-9F47-2A813B9B3EC2-scaled.jpeg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-beach-boys-tum-zamanlarin-en-iyi-25-sarkisi",
    title: "The Beach Boys'un Tüm Zamanların En İyi 25 Şarkısı",
    excerpt: "'Surfin' U.S.A.'nın 63. yılında Paste, Brian Wilson ve arkadaşlarının kataloğunun zirvesini derliyor: 'Caroline, No'dan 'Heroes and Villains'a, 'God Only Knows'a uzanan bir dinleme rehberi.",
    body: `Altmış üç yıl önce The Beach Boys "Surfin' U.S.A."yı yayımladı ve grup, ABD'de ilk 1 numaralarını böyle aldı. Sonraki yıllarda Brian Wilson liderliğindeki Hawthorne, California grubu rock and roll'un en büyük şarkılarını ve en etkileyici plaklarını üretti. 1966'daki *Pet Sounds*, Amerika'nın ürettiği en büyük kayıtlardan biri. İşte Paste'in seçtiği en iyi 25 Beach Boys şarkısı.

## 25. "Busy Doin' Nothin" (1968)

Brian Wilson lounge pop'a giriyor. *Friends*'in lo-fi sinsi cevheri. Burt Bacharach, Chris Montez ve bossa nova esintili.

## 24. "Big Sur" (1973)

Mike Love'ın yazdığı bu şarkının 2021 *Feel Flows* box-set versiyonu grubun katalogundaki en büyülü kompozisyonlardan biri. Kaliforniya'nın Central Coast harikasına şiirsel bir saygı duruşu.

## 23. "Please Let Me Wonder" (1965)

*The Beach Boys Today!*'un B-tarafı. Doo-wop surf-rock ile Brian'ın *Pet Sounds*'a hazırlanan orkestral vizyonunu birleştiren, saf pop görkemi.

## 22. "Cabin Essence" (1967)

*20/20*'nin kapanış parçası. Brian ve Van Dyke Parks tarafından "Union Pacific Railroad'un donmuş bir karesi" olarak yazıldı.

## 21. "Feel Flows" (1971)

Bu listedeki tek Carl Wilson kompozisyonu. Baldwin org, Moog synth ve bantlı tellerle piyanolar.

## 20. "I'm Waiting For the Day" (1966)

Al de Lory'nin snake gibi piyano riff'i ve Sid Sharp Strings'in yaylılarıyla dolu bir hüzün.

## 19. "Disney Girls (1957)" (1971)

Bruce Johnston'ın en büyük Beach Boys katkısı. Walt Disney film yıldızları, garaj şarabı ve "açık arabalar ile daha berrak yıldızlar" fantezisi.

## 18. "Surfer Girl" (1963)

Brian'ın yazdığını iddia ettiği ilk şarkı. Dion and the Belmonts'un "When You Wish Upon a Star" yorumundan ilham.

## 17. "I Get Around" (1964)

Amerika'nın British Invasion'a cevabı. Surf-rock, doo-wop enerjisi ve o Kaliforniya sesi.

## 16. "Caroline, No" (1966)

*Pet Sounds*'un kapanışı. Hal Blaine bir Sparklett su şişesi çalıyor; Brian'ın köpekleri Banana ve Louie de sesleniyor.

## 15. "Heroes and Villains" (1967)

*Smile* için yazılan bu opera-benzeri parça, erken Kaliforniya tarihinin bir arşivi.

## 14. "The Night Was So Young" (1977)

*The Beach Boys Love You*'nun kalbi. Lester Bangs "grubun en iyi albümü" demişti.

## 13. "Don't Talk (Put Your Head On My Shoulder)" (1966)

Kromatik mükemmellik. Elvis Costello: "Yarın dünyadaki tüm plakçalarlar bozulursa, bu şarkılar yüz yıl sonra bile duyulabilir."

## 12. "'Til I Die" (1971)

Brian'ın Santa Monica iskelesinden atlatma tehdidinin ardından yazdığı varoluşsal krizin sese dökülmüş hali.

## 11. "I Just Wasn't Made For These Times" (1966)

Tony Asher ile birlikte yazılan, Electro-Theremin solosu bulunan epik bir balad.

## 10. "All I Wanna Do" (1970)

*Sunflower*'ın dream-pop cevheri. Yıllar sonra Panda Bear ve M83'e uzanan bir sesin habercisi.

## 9. "Sail On, Sailor" (1973)

*Holland*'ın açılışı. Blondie Chaplin'in vokali grubun en soul-etkili anlarından birini üretiyor.

## 8. "Wouldn't It Be Nice" (1966)

*Pet Sounds*'un açılışı. Pop müziğin en mükemmel giriş parçalarından biri.

## 7. "In My Room" (1963)

Brian ve Gary Usher'ın yazdığı, yalnızlık ve odaya sığınma üzerine bir başyapıt.

## 6. "Surf's Up" (1971)

Brian ile Van Dyke Parks'ın *Smile* için yazdığı, 1971'de tamamlanmış uzun kompozisyon.

## 5. "California Girls" (1965)

Phil Spector'un "Wall of Sound" mirasını devralan bir güneşli manifesto.

## 4. "Sloop John B" (1966)

*Pet Sounds*'un halk şarkısı uyarlaması. Grubun harmonik dehasının en berrak anlarından.

## 3. "Good Vibrations" (1966)

"Cep senfonisi." Elektro-Theremin, çello ve müzikal geçişlerle inşa edilen üç buçuk dakikalık bir pop mucizesi.

## 2. "God Only Knows" (1966)

Paul McCartney'nin "yazılmış en iyi şarkı" dediği başyapıt. Carl Wilson'ın vokali ve Fransız kornosuyla açılan giriş.

## 1. "Wouldn't It Be Nice / God Only Knows" — Pet Sounds Zirvesi

*Pet Sounds*'un ortasındaki geçit, pop müziğin şimdiye kadar ürettiği en mükemmel süreklilik.

Kaynak: Paste Magazine — "The 25 Greatest Beach Boys Songs of All Time".`,
    image: "https://img.pastemagazine.com/wp-content/uploads/2026/05/08232842/01C97D02-9176-4609-B2EC-B493F01665AB-scaled.jpeg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-en-buyuk-en-iyi-orijinal-sarki-oscar-kazananlari",
    title: "En Büyük 'En İyi Orijinal Şarkı' Oscar Kazananları, Sıralandı",
    excerpt: "'My Heart Will Go On'dan 'Moon River'a, 'Flashdance…What a Feeling'den 'Arthur's Theme'e — Paste, Akademi'nin 90 yıllık Best Original Song tarihinden en iyi 15 kazananı derledi.",
    body: `Her yıl Akademi; yönetmen, oyuncu, görüntü yönetmeni, yazar, makyaj sanatçısı ve bestecilerin en iyilerine ödül veriyor. 1935'ten beri Akademi En İyi Orijinal Şarkı Oscar'ını dağıtıyor. Con Conrad ve Herb Magidson *The Gay Divorcee*'nin "The Continental"ı için ilk ödülü kazandı; Johnny Mercer, Randy Newman, Giorgio Moroder, Henry Mancini, Burt Bacharach ve Elton John birden fazla kez ödül aldı. Paste, 90 yıllık tarihin en iyi 15 kazananını sıraladı.

## Onursal: "Man or Muppet" (*The Muppets*, 2011)

Jason Segel ve Peter Linz'in seslendirdiği Walter'ın piyano baladı. Bret McKenzie'nin yazımıyla, çocuk filmi olmasına rağmen tüm kuşaklarda karşılık bulan bir kalp taşıyor.

## 15. "My Heart Will Go On" (*Titanic*, 1997)

Dünya çapında 18 milyon satış, dört Grammy, 30 ülkede 1 numara. Celine Dion, *Titanic*'e ruhunu verdi. Kaynak filmini bile geride bırakan bir pop kültür hazinesi.

## 14. "Arthur's Theme (Best That You Can Do)" (*Arthur*, 1981)

Christopher Cross'un piyano baladı. "when you get caught between the moon and New York City" dizesi, kuşaklara New York rüyası taşıyan bir cümle.

## 13. "Moon River" (*Breakfast at Tiffany's*, 1961)

Henry Mancini'nin bestelediği, Audrey Hepburn'ün Holly Golightly'nin yangın merdivenindeki performansı.

## 12. "Flashdance…What a Feeling" (*Flashdance*, 1983)

Giorgio Moroder ve Keith Forsey'in Irene Cara ile birlikte yazdığı, 1980'lerin pop hareketini tek başına özetleyen bir marş.

## 11. "The Way You Look Tonight" (*Swing Time*, 1936)

Jerome Kern ve Dorothy Fields imzalı, Fred Astaire'in orijinal olarak seslendirdiği ölümsüz standart.

## 10. "Streets of Philadelphia" (*Philadelphia*, 1993)

Bruce Springsteen'in kısık bas synth'iyle söylediği ağıt. AIDS ve dışlanma üzerine yazılmış en insanca pop şarkılarından.

## 9. "Falling Slowly" (*Once*, 2007)

Glen Hansard ve Markéta Irglová'nın seslendirdiği folk duet. Küçük bütçeli bir İrlanda filminin kazandığı en büyük ödül.

## 8. "Skyfall" (*Skyfall*, 2012)

Adele'in James Bond marşı. Serinin en olgun tema şarkısı.

## 7. "Lose Yourself" (*8 Mile*, 2002)

Eminem'in rap için ilk Oscar. "One shot" temasının en çıplak, en dürüst hali.

## 6. "Shallow" (*A Star Is Born*, 2018)

Lady Gaga ve Bradley Cooper düeti. Geçtiğimiz on yılın en çok karşılık bulan aşk ilanı.

## 5. "Let It Go" (*Frozen*, 2013)

Idina Menzel'in seslendirdiği, animasyon müziklerinin son on beş yılını tanımlayan güç şarkısı.

## 4. "Over the Rainbow" (*The Wizard of Oz*, 1939)

Judy Garland'ın icrası, Amerikan popüler müziğinin belki de en simgesel anı.

## 3. "The Windmills of Your Mind" (*The Thomas Crown Affair*, 1968)

Michel Legrand ve Bergman'ların yazdığı, Noel Harrison'ın seslendirdiği sürreal düşünce döngüsü.

## 2. "White Christmas" (*Holiday Inn*, 1942)

Irving Berlin klasiği. Bing Crosby'nin yorumu, tüm zamanların en çok satan tekli olmaya devam ediyor.

## 1. "Days of Wine and Roses" (*Days of Wine and Roses*, 1962)

Henry Mancini ve Johnny Mercer'ın kanonun zirvesi. Alkol ve kayıp üzerine yazılmış, jazz standardına dönüşmüş bir başyapıt.

Kaynak: Paste Magazine — "The Greatest Best Original Song Oscar Winners, Ranked".`,
    image: "https://img.pastemagazine.com/wp-content/uploads/2026/03/15142116/6E8F79E6-31B3-4F8F-B116-CCFBE3DE6587-scaled.jpeg",
    source: "Paste Magazine",
  },
  {

    slug: "bbc-temmuz-2026-izlenecek-10-film",
    title: "Spider-Man'den The Odyssey'e: BBC'ye Göre Temmuz'da İzlenecek 10 Film",
    excerpt: "Tom Holland ve Zendaya'nın yılın en büyük iki gişe filminde başrolde olduğu bir ayda BBC Culture eleştirmeni Nicholas Barber, Temmuz'un sinema ve ev ekranı için en iyi 10 filmini seçti.",
    body: `BBC Culture eleştirmeni Nicholas Barber, Temmuz 2026'nın sinema ve evde izlenecek en iyi 10 filmini bir araya getirdi. Ay, Tom Holland ve Zendaya'nın başrolde olduğu iki dev yapıma sahne oluyor: Sony'nin 'Spider-Man: Brand New Day'i ve Christopher Nolan'ın 'The Odyssey'i. Ancak liste yalnızca tentpole'lardan ibaret değil.

## 1. Evil Dead Burn
Sam Raimi evreninin yeni halkası — bu kez daha vahşi, daha kanlı, ve şaşırtıcı biçimde duygusal.

## 2. Spider-Man: Brand New Day
Tom Holland'ın Peter Parker olarak dördüncü çıkışı; MCU'nun sıfırlanma noktası olarak konumlanıyor.

## 3. The Odyssey
Christopher Nolan'ın Homeros uyarlaması. Matt Damon Odysseus rolünde; Zendaya Penelope. IMAX 70mm çekim.

## 4. Superman: Man of Tomorrow
James Gunn'ın yeni DCU evreninin devam filmi. David Corenswet, Superman rolünde yerini sağlamlaştırıyor.

## 5. Bugonia
Yorgos Lanthimos'un 'Save the Green Planet' yeniden yorumu. Emma Stone başrolde.

## 6. Ella McCay
James L. Brooks'un uzun aradan sonra çektiği yeni filmi; Emma Mackey ve Woody Harrelson kadroda.

## 7. The Naked Gun
Reboot. Liam Neeson, Leslie Nielsen'ın rolünde — ve şaşırtıcı biçimde çalışıyor.

## 8. Splitsville
Michael Angelo Covino'nun evlilik komedisi; Sundance'ten övgüyle çıktı.

## 9. Sorry, Baby
Eva Victor'un ilk uzun metrajı; travma-sonrası komedi türüne yeni bir soluk.

## 10. Together
Michael Shanks'in kara komedi-korku hibridi; Alison Brie ve Dave Franco başrolde.

Kaynak: BBC Culture — Nicholas Barber.`,
    image: "https://ichef.bbci.co.uk/images/ic/1920xn/p0ntx7jd.jpg.webp",
    source: "BBC Culture",
  },
  {
    slug: "ew-en-iyi-binge-dizileri",
    title: "Tek Oturuşta Bitirmelik: EW'nun Binge-Watch İçin En İyi 45 Dizisi",
    excerpt: "Noah Wyle'lı 'The Pitt'ten 'Fleabag'e, 'Over the Garden Wall'dan 'The Americans'a — Entertainment Weekly'nin bir hafta sonuna sığdırabileceğiniz 45 dizilik binge listesi.",
    body: `Streaming çağı, tek seferde koca bir sezonu bitirme alışkanlığını neredeyse bir tür sinema deneyimine dönüştürdü. Entertainment Weekly'nin Robert English ve Kevin Jacobsen imzalı güncel listesi, bir oturuşta izlemek için en uygun 45 diziyi bir araya getiriyor.

## Zirvede: The Pitt (HBO Max)
Noah Wyle'ın Dr. Robby Robinavitch olarak döndüğü, tek bir 15 saatlik vardiyayı gerçek zamanlı anlatan medikal dram. Eleştirmenlerin 2026'nın en güçlü yeni dizisi ilan ettiği yapım, binge için birebir.

## Klasik köşeler: Fleabag, Over the Garden Wall, The Americans
Phoebe Waller-Bridge'in iki sezonluk mucizesi *Fleabag*, çocuk-yetişkin arası konumlanan animasyon başyapıtı *Over the Garden Wall* ve Cold War casus dizisi *The Americans* — üçü de "kısa ama tam" tanımına oturuyor.

## 2020'lerin binge favorileri
Listede *Severance*, *Shōgun*, *The Bear*, *Yellowjackets*, *Only Murders in the Building* ve *Beef* öne çıkıyor. EW ekibi, bir cumartesi öğleden sonrasında tamamlanabilecek 6-10 bölümlük dizileri özellikle işaretliyor.

## Kültleşenler
*Halt and Catch Fire*, *Rectify*, *Enlightened* gibi vizyonda az konuşulmuş ama yıllar içinde kült statüsüne yükselmiş yapımlar da listede.

## Neden binge?
EW'nun analizine göre kısa sezonlu, sıkı kurgulu diziler, film ve dizi arasındaki sınırı bulanıklaştırıyor. Her bölümün sonundaki cliffhanger'ı çözmek için ertesi haftayı beklemek zorunda kalmamak, bir tür yeni izleme dilbilgisi yaratıyor.

Kaynak: Entertainment Weekly — "The 45 best TV shows to binge-watch right now".`,
    image: "https://ew.com/thmb/gpv8tvHvykZZs-YqqzuhlVFu4jE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Shows-to-binge-watch-050225-d3ca16cb7bba4d01bfa2c83003d5d92f.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-hulu-en-iyi-gerilim-dizileri",
    title: "Hulu'da Nefes Kesen 24 Gerilim Dizisi",
    excerpt: "'Fargo'dan 'Only Murders in the Building'e, 'The Americans'tan 'The Handmaid's Tale'e — Entertainment Weekly'nin Hulu kataloğundan seçtiği koltuğa çivileyecek 24 gerilim dizisi.",
    body: `Entertainment Weekly'nin Gwen Ihnat ve Kevin Jacobsen imzalı listesi, Hulu'nun geniş kataloğunda gizlenmiş 24 gerilim dizisini gün yüzüne çıkarıyor. Ortak paydaları: Bölüm sonunda bir sonrakini oynatmayı düşünmeden başlatmanız.

## Suç ve karanlık mizah
Noah Hawley'in *Fargo*'su tüm sezonlarıyla listede — özellikle Chris Rock'lı 4. sezon. Steve Martin, Martin Short ve Selena Gomez üçlüsünün *Only Murders in the Building*'i, cinayet-komedi dozunu kaçırmayan modern klasik.

## Casusluk ve paranoya
Keri Russell'lı *The Americans*, Soğuk Savaş dönemi KGB casuslarının aile hayatını anlatarak türün son 20 yıldaki zirvelerinden biri olarak konumlanıyor. *Homeland*'in ilk sezonları ve *The Looming Tower* da bu kategoride.

## Distopya ve psikolojik gerilim
Elisabeth Moss'lu *The Handmaid's Tale*, altı sezonluk yolculuğunu 2025'te tamamladı. Listede ayrıca Amy Adams'lı *Sharp Objects*, *The Bear*'in gerilim yönü öne çıkan bölümleri ve *Dopesick* var.

## Sürpriz seçimler
*Under the Banner of Heaven*, *A Murder at the End of the World*, *The Patient* ve *Reservation Dogs*'un koyu bölümleri gibi az konuşulmuş yapımlar da EW ekibinin radarında.

Kaynak: Entertainment Weekly — "The 24 best thrillers on Hulu".`,
    image: "https://ew.com/thmb/ZGKGXtXGyR3FmMvaPhe61L5Dh_U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Suspense-series-on-Hulu-062623-511fece1efe64bfdb512496670a5b7d9.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-netflix-mart-2025-yenilikler",
    title: "Netflix'te Mart 2025: '50 First Dates', 'Ma', 'The Residence' ve Fazlası",
    excerpt: "Adam Sandler-Drew Barrymore klasiği '50 First Dates'ten Meghan Markle'ın yeni realite dizisine, Millie Bobby Brown'ın filminden Chelsea Handler ve John Mulaney'nin stand-up özeline — Netflix'in Mart 2025 katalog güncellemesi.",
    body: `Entertainment Weekly'den Ryan Coleman, Netflix'in Mart 2025 için hazırladığı geniş katalog güncellemesini derledi. Nostalji, orijinal drama ve stand-up karışımı bir ay bekliyor aboneleri.

## Nostaljik geri dönüşler
*50 First Dates* (2004) — Adam Sandler ve Drew Barrymore'un modern rom-com klasiği yeniden Netflix'te. *Friday* (1995) ve *Next Friday* (2000), Ice Cube ve Chris Tucker'lı kült komedi ikilisi de kütüphaneye ekleniyor. Ayrıca *The Karate Kid* üçlemesi, *Bruce Almighty* ve *Legally Blonde 2*.

## Orijinal diziler
*The Residence* — Shonda Rhimes'ın yeni Netflix dizisi. Uzo Aduba'nın başrolde olduğu Beyaz Saray içi cinayet-gizem yapımı. *With Love, Meghan* — Meghan Markle'ın yaşam tarzı realite dizisi. *Adolescence* — Stephen Graham'lı dört bölümlük İngiliz mini dizisi.

## Filmler
*The Electric State* — Anthony ve Joe Russo yönetiminde, Millie Bobby Brown ve Chris Pratt'in başrolde olduğu retro-fütürist macera. *Plankton: The Movie* — SpongeBob evreninden animasyon spin-off. *Ma* (2019) — Octavia Spencer'ın psikolojik gerilimi.

## Stand-up
Chelsea Handler ve John Mulaney'nin yeni stand-up özelleri ay içinde platformda.

Kaynak: Entertainment Weekly — "New on Netflix in March 2025".`,
    image: "https://ew.com/thmb/HejMWSbFszfXBFZ2xKB4TVYRwvo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nof-e0be2e8ccd304e97b9a1abdbd6cb2d95.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-netflix-en-iyi-aile-filmleri",
    title: "Netflix'in En İyi 20 Aile Filmi: 'Chicken Run'dan 'Matilda'ya",
    excerpt: "Wesley Stenzel'in EW için hazırladığı liste, hem çocukların hem yetişkinlerin izleyebileceği 20 Netflix filmini bir araya getiriyor: 'Rango', 'Galaxy Quest', 'Nimona' ve daha fazlası.",
    body: `Entertainment Weekly yazarı Wesley Stenzel, Netflix'in en iyi 20 aile filmini seçti. Aardman'ın kil animasyonlarından çağdaş animasyon hitlerine, klasik komedilere kadar uzanan çeşitli bir liste.

## Animasyon klasikleri
*Chicken Run* (2000) — Aardman'ın kaçış temalı stop-motion başyapıtı. *Rango* (2011) — Gore Verbinski'nin Johnny Depp'li western animasyonu; Oscar ödüllü. *Klaus* (2019) — Netflix'in kendi orijinal animasyonu, elde çizilmiş bir Noel hikâyesi.

## Yeni nesil favoriler
*Nimona* (2023) — ND Stevenson'ın grafik romanından uyarlanan, Netflix'in queer temalı orta çağ fantastik animasyonu. *The Sea Beast* (2022) — deniz canavarı avcıları hakkında Oscar adayı yapım.

## Canlı çekim klasikleri
*Matilda* (1996) — Roald Dahl uyarlaması, Danny DeVito yönetiminde. *Galaxy Quest* (1999) — bilim kurgu parodisinin altın standardı; hem çocuklar hem yetişkinler için mükemmel giriş. *The Adventures of Sharkboy and Lavagirl* (2005) — Robert Rodriguez'in çocuk fantastik filmi, artık kült statüsünde.

## Dünya sineması
*A Cat in Paris* (2010) — Fransız yapımı Oscar adayı animasyon. *The Boy, the Mole, the Fox and the Horse* (2022) — Charlie Mackesy'nin illüstre kitabından uyarlama, BAFTA ve Oscar sahibi.

## Neden bu liste önemli?
Stenzel'e göre "aile filmi" etiketi çocuk filmine indirgenmemeli; en iyi örnekleri, farklı yaş gruplarının aynı anda farklı katmanlar okuyabildiği çok yönlü yapımlar. Bu 20 film tam olarak bu formülü tutturuyor.

Kaynak: Entertainment Weekly — "The 20 best family movies on Netflix".`,
    image: "https://ew.com/thmb/f5RVoOZWLpQoNjOKlPZmwMj9DhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/netflix-family-movies-2000-88ebbfd8ea59454ba58a5b46b8b9d611.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-2023-sonbahar-en-iyi-yeni-diziler",
    title: "2023 Sonbaharının Kaçırılmayacak 6 Yeni Dizisi",
    excerpt: "EW TV eleştirmeni Kristen Baldwin, karanlık mizahlı Kore hayatta kalma dramasından tatlı-hüzünlü bir dönem romansına, 2023 sonbaharının izlenmesi gereken altı yeni dizisini derledi.",
    body: `Entertainment Weekly'nin TV eleştirmeni Kristen Baldwin, 2023 sonbahar sezonuna girerken ekranlara gelen en dikkat çekici altı yeni diziyi seçti. Her biri farklı bir tondan konuşuyor, ancak ortak paydaları: Sezonun ilk bölümünde izleyiciyi çekmeyi başarıyorlar.

## 1. Gyeongseong Creature (Netflix)
1945'te işgal altındaki Kore'de geçen karanlık fantezi. Park Seo-jun ve Han So-hee, savaş, hayatta kalma ve doğaüstü tehditlerin kesiştiği bir hikâyede buluşuyor.

## 2. All the Light We Cannot See (Netflix)
Anthony Doerr'in Pulitzer ödüllü romanından Shawn Levy tarafından uyarlanan sınırlı dizi. Aria Mia Loberti ve Louis Hofmann, II. Dünya Savaşı Fransası'nda birbirlerine radyo dalgaları üzerinden bağlanıyor.

## 3. Fellow Travelers (Showtime)
Matt Bomer ve Jonathan Bailey'nin başrolde olduğu, 1950'lerden 1980'lere uzanan bir gay aşk hikâyesi. McCarthy dönemi, AIDS krizi ve siyasi baskı arka planda.

## 4. Lessons in Chemistry (Apple TV+)
Brie Larson'un başrolde olduğu, Bonnie Garmus'un çok satan romanından uyarlanan 1960'lar hikâyesi. Erkek egemen bilim dünyasında yer bulmaya çalışan bir kimyagerin, tesadüfen televizyon aşçısına dönüşme öyküsü.

## 5. The Curse (Showtime)
Nathan Fielder ve Emma Stone'un başrolde olduğu, sahte HGTV dekorasyon dizisi arka planında geçen kara komedi. Baldwin'in "sezonun en tuhaf ve en cesur dizisi" olarak nitelediği yapım.

## 6. Bookie (Max)
Chuck Lorre imzalı, Sebastian Maniscalco'lu Los Angeles bahis komedisi. Yasadışı bir bookmaker'ın hayatını 30 dakikalık bölümlere sığdıran nadir bir tür denemesi.

Kaynak: Entertainment Weekly — "The 6 must-watch new TV shows this fall (2023)".`,
    image: "https://ew.com/thmb/8P3kKfF6y1Yb3ThJvS0DKG0oX1U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-new-tv-shows-fall-2023-081823-90ec52b4a2f34c25a017cf7f88a6b1f7.jpg",
    source: "Entertainment Weekly",
  },
];

// Deterministic shuffle so new lists spread across the interleaved homepage feed.
// New EW entries (indices 23-27) are interleaved near the top of the feed.
const _LIST_ORDER = [23, 22, 0, 24, 17, 16, 25, 18, 14, 26, 19, 15, 27, 1, 20, 13, 7, 21, 3, 11, 5, 9, 2, 12, 6, 4, 8, 10];



export const LISTS: ListItem[] = _LIST_ORDER
  .filter((i) => i < _LISTS_RAW.length)
  .map((i) => _LISTS_RAW[i]);

export function getList(slug: string) {
  return LISTS.find((l) => l.slug === slug);
}
