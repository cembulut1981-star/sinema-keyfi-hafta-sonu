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
  countdownBadge?: string;
};

const _LISTS_RAW: ListItem[] = [
  {
    slug: "orijinalinden-iyi-12-spin-off-dizi",
    title: "Orijinalinden Daha İyi 12 Spin-Off Dizi",
    excerpt: "\"Frasier\"dan \"Star Trek: The Next Generation\"a, doğduğu diziyi gölgede bırakan 12 spin-off. SlashFilm'in listesi, kalite ya da popülerlik bakımından ana yapımı aşan dizileri bir araya getiriyor.",
    countdownBadge: "12 dizi seçkisi",
    body: `Televizyonda spin-off yapmak ince bir iştir. Planlı ya da tesadüfi olsun, yazarların izleyicinin gönlünü kaptıracağı bir karakter yaratması, oyuncunun da o rolü taşıyacak karizmayı bulması gerekir. Yayına girdikten sonraysa asıl sınav başlar: dizinin en azından doğduğu yapım kadar iyi olması. Çoğu spin-off tam burada tökezler. Ama bir avuç dizi, ana yapımın seviyesine ulaşmakla kalmayıp bir adım öteye geçti.

Bu listede "Better Call Saul", "Batman Beyond" ya da "House of the Dragon" gibi "en az öncülü kadar iyi" sayılabilecek diziler yok; burada gerçekten öncüsünü aşanlar var.

## Frasier

![Frasier](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/frasier-1786452681.jpg)

Tüm zamanların en başarılı spin-off'larından biri: "Frasier", doğduğu dizi "Cheers"ın kalitesini geride bıraktı. Dr. Frasier Crane başta yalnızca birkaç bölüm için düşünülmüştü ama Kelsey Grammer'ın performansı onu dizinin merkezine taşıdı, ardından Seattle'da kurulu kendi dizisi geldi. Frasier ve kardeşi Niles'ın psikiyatr kimlikleri sayesinde yazarlar entelektüel esprilerle oynayabildi; diğer karakterlerse bu ince zekâya komik bir karşıtlık oluşturdu.

## Happy Days

![Happy Days](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/happy-days-1786452681.jpg)

Bugünün ölçütleriyle alışılmadık bir spin-off: dizi, ABC'nin "Love, American Style" antolojisinde satılamayan bir pilot olarak başladı. George Lucas, pilottaki Ron Howard'ı beğenip onu "American Graffiti"ye aldı; filmin başarısı pilota olan ilgiyi yeniden canlandırdı. Zamanla dizinin imza karakteri Fonzie oldu. "Happy Days" ayrıca literatüre "jumping the shark" deyimini kazandırdı ve "Laverne & Shirley" ile "Mork & Mindy" gibi kendi spin-off'larını doğurdu.

## Xena: Warrior Princess

![Xena: Warrior Princess](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/xena-warrior-princess-1786452682.jpg)

"Hercules: The Legendary Journeys"de üç bölümlük bir yay için görünen Xena, izleyicide öyle bir iz bıraktı ki kendi dizisini kazandı. Aksiyon, duygu ve karmaşık ilişkileriyle hem kadın hem erkek izleyiciyi buluşturan dizi, Xena ile Gabrielle arasındaki bağ sayesinde queer izleyicinin de kült yapımı oldu; Lucy Lawless bu okumayı yıllar içinde açıkça sahiplendi.

## A Different World

![A Different World](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/a-different-world-1786452682.jpg)

"The Cosby Show"un Denise Huxtable karakterini üniversiteye taşımak için kurulan dizi, Lisa Bonet'in ayrılmasının ardından Debbie Allen'ın yönetiminde kimliğini buldu. Toplumsal cinsiyet rollerinden ırkçılığa, sınıf meselesinden siyah kimliğine uzanan tartışmalarla üniversite komedisinin şablonunu kurdu ve içerik derinliğiyle ana dizisini aştı.

## Family Matters

![Family Matters](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/family-matters-1786452682.jpg)

Harriette Winslow başlangıçta "Perfect Strangers"ta bir asansör görevlisiydi; kocası Carl'la yakaladıkları komik uyum onlara kendi dizisini getirdi. 90'ların tamamına yayılan dizi, Steve Urkel'ın "Did I do that?" repliğiyle "inek" kavramını neredeyse tek başına tanımladı — ve siyah orta sınıf bir ailenin olumlu portresini yıllarca ekranda tuttu.

## Law & Order: SVU

![Law & Order: SVU](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/law-order-svu-1786452683.jpg)

"Law & Order" evreninin en güçlü halkası. 1999'da başlayan dizi, çeyrek asırdır Hollywood'un neredeyse her oyuncusunu konuk ettiği bir okul gibi çalışıyor. Suç prosedürelini mükemmelleştirmesinin yanında, Mariska Hargitay'in hem sertlik hem şefkat taşıyan Olivia Benson'ı diziyi soğuk bir vaka anlatısı olmaktan kurtarıyor.

## NCIS

![NCIS](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/ncis-1786452683.jpg)

Bugün kimsenin hatırlamadığı CBS dizisi "JAG"in sekizinci sezonunda görünen Leroy Gibbs ve ekibi, iki bölümlük bir yayla "NCIS"in pilotunu oluşturdu. Suç prosedürelini askeriyeyle birleştiren dizi 20 yılı aşkın süredir ayakta; Mark Harmon bayrak dizisinden çekilse de "NCIS: Origins"in anlatıcısı olarak evrende kalmaya devam ediyor.

## Good Times

![Good Times](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/good-times-1786452683.jpg)

Florida Evans ilk olarak Norman Lear'ın "Maude" dizisinde görünmüştü; "Good Times" için karakterin geçmişi baştan yazıldı ve aile Chicago'daki toplu konutlara taşındı. Çete şiddeti, hırsızlık, çocuk istismarı ve tahliye gibi meselelere eğilen dizi, ekranda evinde bulunan ilk siyah babayı sunmasıyla da tarihe geçti.

## The Flash

![The Flash](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/the-flash-1786452684.jpg)

The CW'nin altın döneminde Arrowverse'ün taç mücevheri oldu ve evrenin adını taşıyan "Arrow"u bile gölgede bıraktı. Ciddiyetle hafifliği dengeleyen tonu, kadronun sıcaklığı ve Grant Gustin ile Candice Patton arasındaki kimya, diziyi süper kahraman aksiyonunun ötesine taşıdı.

## The Jeffersons

![The Jeffersons](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/the-jeffersons-1786452684.jpg)

Yine bir Norman Lear yapımı. "All in the Family"den hatırladığınız tek karakter büyük olasılıkla Archie Bunker'dır; "The Jeffersons"ta ise George ve Weezie'nin komik uyumu ile Florence'ın keskin dili akılda kalır. Irkçılık, silah şiddeti ve madde bağımlılığı gibi konulara aynı cesaretle ama daha güçlü bir kadroyla eğildi.

## Daria

![Daria](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/daria-1786452685.jpg)

"Beavis and Butt-Head"in yan karakteri Daria Morgendorffer, kendi dizisinde MTV animasyonunun en zeki toplum eleştirisine dönüştü. Ergenlik, sınıf ve popülerlik üzerine söyledikleri onlarca yıl sonra bile geçerli; dizinin gücü, "aptal" karakterlere bile katmanlı bir geçmiş vermesinde.

## Star Trek: The Next Generation

![Star Trek: The Next Generation](https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/star-trek-the-next-generation-1786452685.jpg)

90'ların en iyi dizilerinden biri olmakla kalmıyor, tüm zamanların en iyi spin-off'larından biri de sayılıyor. Hikâyeleri daha karmaşık, oyunculuğu daha az teatral; bugün izlendiğinde orijinal diziden daha kolay hazmediliyor. Picard ve ekibi bilimkurguyu popüler kültürde saygın bir yere taşıdı ve "Deep Space Nine" gibi devam dizilerine sağlam bir zemin kurdu.

Kısacası: bir spin-off her zaman soluk bir kopya olmak zorunda değil. Bazen ana diziyi hatırlamamızın tek nedeni bile olabiliyor.`,
    image: "https://www.slashfilm.com/img/gallery/spin-offs-better-than-original-series/intro-1786452680.jpg",
    source: "SlashFilm",
  },

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
    body: `Streaming çağı, tek seferde koca bir sezonu bitirme alışkanlığını neredeyse bir tür sinema deneyimine dönüştürdü. Entertainment Weekly'nin Robert English ve Kevin Jacobsen imzalı güncel listesi (3 Temmuz 2026), bir oturuşta izlemek için en uygun 45 diziyi bir araya getiriyor. Aşağıda EW'nun alfabetik sıradaki tam listesi ve her başlığın kısa bir Türkçe özeti yer alıyor.

## 1. Abbott Elementary (2021–)
Quinta Brunson'ın yarattığı Philadelphia'daki bir devlet okulunda geçen mockumentary komedi. Sıcak, akıllı ve bölüm başı 22 dakika: klasik binge yakıtı.

## 2. Adolescence (2025)
Stephen Graham'lı, tek çekimde kaydedilen dört bölümlük Netflix draması. Bir cinayet soruşturması etrafında ergenlik, sosyal medya ve baba-oğul ilişkisini tarayan sarsıcı bir eser.

## 3. Baby Reindeer (2024)
Richard Gadd'in kendi hikâyesinden uyarladığı taciz-travma draması. Jessica Gunning'in Emmy'li Martha performansıyla dikkat çeken 7 bölümlük Netflix şoku.

## 4. Bait (2026)
Riz Ahmed'in başrolde olduğu Prime Video draması. James Bond rolüne aday bir aktörün kimlik ve utançla hesaplaşmasını takip ediyor.

## 5. The Bear (2022–2026)
Jeremy Allen White'ın Carmy'si; Chicago'da bir sandviççide geçen, mutfak stresini şiirsel bir kaygı dramına çeviren FX dizisi. 4 sezonda tamamlandı.

## 6. Black Doves (2024–)
Keira Knightley ve Ben Whishaw'lı Netflix casus gerilimi. Yılbaşı temalı Londra sokaklarında hızlı tempolu bir suikast operası.

## 7. Bodyguard (2018)
Richard Madden'lı BBC gerilimi. 6 bölümde biten, dakika başına nabız yükselten "tek gecede biter" prototipi.

## 8. Chernobyl (2019)
Craig Mazin'in HBO mini dizisi. 1986 nükleer felaketinin arkasındaki bürokrasiyi ve insan hatasını dakik bir dehşetle anlatıyor.

## 9. The Comeback (2005; 2014; 2026)
Lisa Kudrow'un Valerie Cherish'i geri döndü. HBO'nun kült cringe komedisinin yeni sezonu, üçlemeyi tamamlıyor.

## 10. Death Note (2006–2007)
Tsugumi Ohba ve Takeshi Obata mangasından uyarlanan anime klasiği. Light ve L arasındaki zekâ düellosu 37 bölümde tamamlanıyor.

## 11. Dying for Sex (2025)
Michelle Williams'lı FX mini dizisi. Ölümcül kanser teşhisi alan bir kadının cinsel özgürleşmesini gerçek bir podcast'ten uyarlıyor.

## 12. Enlightened (2011–2013)
Mike White'ın erken başyapıtı. Laura Dern'in Amy Jellicoe'su, "aydınlanmış" bir orta yaş krizi portresi çiziyor. 18 bölüm.

## 13. Firefly (2002–2003)
Joss Whedon'un uzay-western'i. Tek sezonda kesilse de kült oldu; 14 bölüm + Serenity filmi ideal hafta sonu paketi.

## 14. Fleabag (2016–2019)
Phoebe Waller-Bridge'in kameraya bakışlarıyla televizyonu yeniden tanımladığı iki sezonluk mucize. 12 bölüm, tam bir cumartesi.

## 15. Freaks and Geeks (1999–2000)
Judd Apatow ve Paul Feig'in 1980 Michigan lisesinde geçen kısa ömürlü klasiği. Genç Seth Rogen, James Franco, Linda Cardellini kadrosu efsanesi.

## 16. The Girlfriend (2025)
Robin Wright'lı Prime Video psikolojik gerilimi. Bir anne ile oğlunun kız arkadaşı arasındaki güç savaşını iki bakış açısından anlatıyor.

## 17. Hacks (2021–2026)
Jean Smart ve Hannah Einbinder'in nesiller arası komedyen ikilisi. HBO Max'in Emmy avcısı, beşinci ve son sezonuyla tamamlandı.

## 18. The Haunting of Hill House (2018)
Mike Flanagan'ın Shirley Jackson uyarlaması. Aile dramı ile korkuyu birleştiren 10 bölümlük Netflix ödevi.

## 19. Heartstopper (2022–2024)
Alice Oseman'ın grafik romanından uyarlanan Netflix romantik gençlik dizisi. Üç kısa sezonda tamamlanan sıcak bir dünya.

## 20. Heated Rivalry (2025–)
Rachel Reid'in queer buz hokeyi romanından Crave uyarlaması. Rakip iki NHL yıldızının yıllara yayılan gizli ilişkisi.

## 21. I May Destroy You (2020)
Michaela Coel'in yazdığı, yönettiği ve başrolünde olduğu HBO/BBC şaheseri. Rıza ve travmayı 12 bölümde parçalıyor.

## 22. Jury Duty (2023–) 
Freevee'nin doğaçlama sahte jüri deneyi. Ronald Gladden'ın hiçbir şeyden haberi olmadığı bir sosyal deney komedisi.

## 23. Love Story (2026–)
Ryan Murphy imzalı FX dizisi. Sarah Pidgeon ve Paul Kelly, Carolyn Bessette ve JFK Jr. rollerinde.

## 24. Mare of Easttown (2021)
Kate Winslet'in Emmy'li Delaware County dedektifi. 7 bölümlük HBO mini dizisi, "small-town noir" için ders kitabı.

## 25. Margo's Got Money Troubles (2026–)
Rufi Thorpe romanından Apple TV+ uyarlaması. Elle Fanning ve Michelle Pfeiffer, güreşçi babalı genç anne hikâyesinde.

## 26. The Night Of (2016)
Riz Ahmed'in çıkışını yaptığı 8 bölümlük HBO polisiyesi. Amerikan adalet sisteminin klostrofobik bir röntgeni.

## 27. Normal People (2020)
Sally Rooney romanının Hulu/BBC uyarlaması. Paul Mescal ve Daisy Edgar-Jones ikilisi, yılın en özenli aşk hikâyesi.

## 28. Over the Garden Wall (2014)
Patrick McHale'in 10 bölümlük Cartoon Network mini dizisi. Sonbahar atmosferi, Elijah Wood'un sesi ve zamansız bir masal tonu.

## 29. Overcompensating (2025–)
Benito Skinner'ın Prime Video komedi dizisi. Kolej ilk yılında dolaptan çıkma sürecini keskin bir mizahla anlatıyor.

## 30. Paradise (2025–)
Dan Fogelman'ın Sterling K. Brown'lı Hulu gerilimi. Suikast sonrası politik komplo bilim-kurgu ile buluşuyor.

## 31. The Pitt (2025–)
Noah Wyle'ın Pittsburgh acil servisinde geçirdiği 15 saatlik vardiyayı gerçek zamanlı anlatan HBO Max dizisi. 2026'nın en güçlü yeni draması.

## 32. Pluribus (2025–)
Vince Gilligan'ın Rhea Seehorn'lu yeni Apple TV+ bilim-kurgusu. Küresel bir mutluluk salgınına direnen tek insan.

## 33. The Queen's Gambit (2020)
Anya Taylor-Joy'lu Netflix mini dizisi. Soğuk Savaş dönemi kadın satranç dâhisinin 7 bölümlük yükselişi.

## 34. Schitt's Creek (2015–2020)
Eugene ve Dan Levy'nin Kanada komedisi. Zenginlikten düşen bir ailenin altı sezonluk sıcak dönüşümü.

## 35. Sense8 (2015–2018)
Wachowski kardeşlerin Netflix'te sekiz kıtaya yayılan psikolojik bağ epiği. Görsel şölen niteliğinde bir kült.

## 36. Severance (2022–present)
Dan Erickson'ın Apple TV+ dizisi. Adam Scott'lı Lumon Industries'in "innie/outie" çalışanları, 2020'lerin en özgün konsepti.

## 37. Shōgun (2024–)
James Clavell romanından FX uyarlaması. Anna Sawai, Hiroyuki Sanada ve Cosmo Jarvis'in 17. yüzyıl Japonya destanı Emmy'leri süpürdü.

## 38. Shrinking (2023–)
Bill Lawrence, Brett Goldstein ve Jason Segel'in Apple TV+ komedi dramı. Harrison Ford'un geç kariyer sürprizi.

## 39. Squid Game (2021–2025)
Hwang Dong-hyuk'un Netflix fenomeni. Üç sezonda tamamlanan sınıf mücadelesi alegorisi, dünya çapında bir olay oldu.

## 40. The Studio (2025–)
Seth Rogen'in Apple TV+ Hollywood hicvi. Bir stüdyo başkanının kaotik ilk yılını Kathryn Hahn ve büyük kamera kadrosuyla anlatıyor.

## 41. Survivor (2000–present)
Jeff Probst'lu CBS reality klasiği. 45+ sezonuyla "binge etmeye zaman ayır" gerektiren tek programı listede.

## 42. The Traitors (2023–)
Alan Cumming sunumlu Peacock reality gerilimi. Sosyal aldatma oyunu, iki gecede bitirilecek tempoda.

## 43. Twin Peaks (1990–1991)
David Lynch ve Mark Frost'un ABC'de televizyonun dilbilgisini değiştiren gizemli kasaba draması. Kim öldürdü Laura Palmer'ı?

## 44. The White Lotus (2021–)
Mike White'ın HBO antolojisi. Her sezon farklı bir lüks tatil köyünde geçen sınıf hicvi; üç sezonda üç yıldız kadrosu.

## 45. Widow's Bay (2026–)
Matthew Rhys'lı Apple TV+ gizemi. Sahil kasabasında kaybolan bir kızın izini süren, sisli-noir estetikli yeni bir keşif.

Kaynak: Entertainment Weekly — "The 45 best TV shows to binge-watch right now" (Robert English & Kevin Jacobsen, 3 Temmuz 2026).`,
    image: "/__l5e/assets-v1/0533f2d0-cc82-4ff7-be8b-7217b8fec22b/ew-binge-45.webp",
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
    image: "/__l5e/assets-v1/c5933f01-6f8e-4e7c-88a4-a5ee1e94947a/hulu.webp",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-netflix-mart-2025-yenilikler",
    title: "Netflix'te Mart: '50 First Dates', 'Ma', 'The Residence' ve Fazlası",
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
    image: "/__l5e/assets-v1/0d45694a-9768-47d5-8f11-8366afddb87d/netflix-march.jpg",
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
    image: "/__l5e/assets-v1/f3677a5e-8d50-4a4b-909c-51c809f1a54e/family.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "agustos-ayinin-en-iyi-10-dizisi-bbc",
    title: "Ted Lasso'dan The Shards'a: Ağustos'un İzlenmesi Gereken 10 Dizisi",
    excerpt: "Apple TV'nin futbol komedisinin dönüşünden Ryan Murphy imzalı karanlık bir gençlik gerilimine, DC'nin yeni süper kahraman dizisi Lanterns'ten Conan O'Brien'ın yol hikâyelerine — BBC Culture'dan Caryn James'in ağustos seçkisi.",
    body: `Yaz sonu televizyonu bu yıl alışılmadık ölçüde kalabalık. BBC Culture'dan Caryn James, ağustos boyunca yayına girecek yapımlar arasından on tanesini seçti: geri dönüşler, uyarlamalar ve tür denemeleri.

## 1. Fightland (31 Temmuz — Starz / 27 Ağustos — Sky & NOW)
Boks ve uyuşturucu kartelleri dünyasında geçen bir intikam draması. Yapımcılığını Curtis "50 Cent" Jackson üstleniyor. Ağır sıklet şampiyonu Duke Kilroy (Howard Charles), işlemediği bir cinayetten sekiz yıl hapis yattıktan sonra Londra'ya kendisini tuzağa düşüren uyuşturucu baronundan hesap sormaya dönüyor.

## 2. Ted Lasso (5 Ağustos — Apple TV)
Bittiğini sandığımız dizi üç yıl sonra bir dönüşle geri geliyor. Ted (Jason Sudeikis), Rebecca'nın (Hannah Waddingham) yeni kurduğu Richmond kadın takımını çalıştırmak üzere Kansas City'den Londra'ya dönüyor. Kadroda Brett Goldstein, Juno Temple, Jeremy Swift ve yeni katılan Tanya Reynolds var.

## 3. The Shards (5 Ağustos — Hulu / 6 Ağustos — Disney+)
Ryan Murphy yapımı, Bret Easton Ellis'in 2023 tarihli yarı otobiyografik romanından uyarlanan dizi 1981 Los Angeles'ında geçiyor. Lise son sınıftaki Bret (Igby Rigney), yeni öğrenci Robert (Homer Gere) okula geldiğinde "The Traveler" adlı bir seri katilin gölgesinde bir kimlik hikâyesine sürükleniyor. Kaia Gerber de kadroda.

## 4. Sterling Point (5 Ağustos — Prime Video)
"My Old Ass" ile tanınan Megan Park'ın yarattığı aile sırlarıyla dolu gençlik melodramı. İkiz kardeşler Annie (Ella Rubin) ve Connor (Keen Ruffalo), tanımadıkları dedelerinden Kanada'da bir ada miras alıyor.

## 5. Alley Cats (7 Ağustos — Netflix)
Ricky Gervais'in yarattığı ve seslendirdiği yetişkinlere yönelik İngiliz animasyon komedisi. Sokak kedilerinden oluşan çete varoluşsal sorular soruyor ve bolca küfrediyor. Gervais'in tanımı net: "Umarım kedileri ve küfrü seversiniz."

## 6. Reacher (12 Ağustos — Prime Video)
Alan Ritchson'ın Jack Reacher'ı yeni sezonuyla dönüyor; Lee Child uyarlaması aksiyon severler için ağustosun en garantili işi.

## 7. My Brilliant Career (13 Ağustos — Netflix)
Miles Franklin'in klasik Avustralya romanının yeni uyarlaması; 19. yüzyıl sonunda yazar olmak isteyen genç bir kadının hikâyesi.

## 8. Lanterns (16 Ağustos — HBO Max)
DC'nin yeni süper kahraman dizisi; Kyle Chandler ve Aaron Pierre'in Green Lantern'ları, süper kahraman formatını bir taşra polisiyesine dönüştürüyor.

## 9. Conan O'Brien Must Go (21 Ağustos — HBO Max)
Conan O'Brien'ın dünyayı dolaşıp internet üzerinden tanıştığı hayranlarını evlerinde ziyaret ettiği seyahat komedisi yeni bölümleriyle geri döndü.

## 10. Dark Matter (28 Ağustos — Apple TV)
Blake Crouch'un çok satan romanından uyarlanan paralel evren gerilimi ikinci sezonuyla devam ediyor; Joel Edgerton yeniden başrolde.

Kaynak: BBC Culture — Caryn James, "10 of the best TV shows to watch this August".`,
    image: "https://ichef.bbci.co.uk/images/ic/1920xn/p0p13955.jpg.webp",
    source: "BBC Culture",
  },
  {
    slug: "agustos-ayinin-en-iyi-10-filmi-bbc",
    title: "The Dog Stars'tan One Night Only'ye: Ağustos'un İzlenmesi Gereken 10 Filmi",
    excerpt: "Ridley Scott'ın Jacob Elordi'li kıyamet sonrası gerilimi, Eli Roth'un dondurmacı katili, Anthony Bourdain'in gençlik yılları ve rafa kaldırılmış Coyote vs Acme — BBC Culture'dan Nicholas Barber'ın ağustos seçkisi.",
    body: `Ağustos, salonlarda da evde de alışılmadık ölçüde kalabalık bir ay. BBC Culture'dan Nicholas Barber, aya damga vuracak on filmi seçti: absürt bir romcom'dan Ridley Scott'ın yeni distopyasına, Cannes'ın en iyi eleştiri alan filminden yıllarca rafta bekletilmiş bir Looney Tunes uyarlamasına.

## 1. One Night Only (7 Ağustos ABD/Kanada — 28 Ağustos İngiltere)
Görünürde tipik bir romantik komedi: Monica Barbaro ve Callum Turner'ın canlandırdığı iki çekici New Yorklu, "Friends with Benefits" ve "Anyone but You"nun yönetmeni Will Gluck. Ama Travis Braun'ın senaryosunda tuhaf bir çengel var: bekârların cinsel ilişkiye girmesinin yılda tek bir gece dışında yasak olduğu alternatif bir gerçeklik. İnternette "seks için Purge" diye anılan fikir, filmi çıkmadan tartışma konusu yaptı. Turner'ın The Hollywood Reporter'a tavsiyesi net: "Absürtlüğe kendinizi bırakırsanız iyi vakit geçirirsiniz. Kurallara takılacaksanız gidip belgesel izleyin."

## 2. Ice Cream Man (12–14 Ağustos, uluslararası)
"Cabin Fever" ve "Hostel"ın yönetmeni Eli Roth, düşük bütçeli ve kanlı korkuya dönüyor. Ari Millen, Amerikan taşrasında dolaşıp sattığı dondurmayla çocukları cinayet makinesine çeviren gizemli dondurmacıyı oynuyor. Roth'un hedefi mütevazı değil: "Şimdiye kadar yaptığım en çılgın film olsun istiyorum. Kuşlar gibi ama çocuklarla… Yani tamamen delilik."

## 3. The Dog Stars (7 Ağustos ABD/Kanada — 21 Ağustos İngiltere)
Ridley Scott 88 yaşında ama hiç bu kadar üretken olmamıştı. Peter Heller'ın romanından uyarlanan bu kıyamet sonrası gerilimde, yakın gelecekteki bir grip salgınından sağ çıkanlar arasında bir pilot (Jacob Elordi), bir sağlık görevlisi (Margaret Qualley) ve eski bir denizci (Josh Brolin) var. Elordi'nin Scott hakkındaki yorumu: "Hayatı boyunca sinemaya bağlı kaldı — kanında dolaşıyor. Sinemanın bir hayatı ayakta tuttuğunu izliyorum."

## 4. Tony (6–7 Ağustos, uluslararası)
2018'de hayatını kaybeden Anthony Bourdain, yemek ve seyahat yazarlığının rock yıldızıydı; dolayısıyla bir rock yıldızı köken hikâyesi hak ediyor. "Kitchen Confidential"dan esinlenen film 1970'lerin ortasında, Bourdain'in Provincetown'da bir restoranda çalıştığı üniversiteyi bırakma yıllarında geçiyor. Yönetmen Matt Johnson; 19 yaşındaki Bourdain'i Dominic Sessa ("The Holdovers"), ona akıl hocalığı yapan şefi Antonio Banderas oynuyor. Leo Woodall ve Emilia Jones da kadroda.

## 5. Teenage Sex and Death at Camp Miasma (14 Ağustos, ABD)
Bu yılın Cannes'ında en iyi eleştirileri alan film. "I Saw the TV Glow"un yönetmeni Jane Schoenbrun'un gerçeküstü postmodern komedisinde Hannah Einbinder ("Hacks"), Cuma 13 benzeri bir slasher serisini diriltmek ve genç liberal seyirci için "kabul edilebilir" hale getirmekle görevlendirilen queer bir yönetmeni oynuyor. Fikri, ilk filmin yıldızı olan oyuncuyu (Gillian Anderson) geri getirmek — ama o oyuncu artık filmin çekildiği yaz kampında münzevi yaşıyor. Variety'den Jessica Kiang: "Seks, ölüm, VHS ve abur cuburdan oluşan buharlı bir güveç; Schoenbrun'un en olgun ve en oyunbaz filmi."

## 6. The End of Oak Street (20–28 Ağustos, uluslararası)
"It Follows"un yönetmeni David Robert Mitchell'ın yazıp yönettiği, JJ Abrams'ın yapımcılığını üstlendiği dinozor filmi. Anne Hathaway ve Ewan McGregor sıradan bir banliyöde sıradan ebeveynler — tek sorun, mahallenin bir şekilde ilkel bir vahşi doğaya ışınlanmış olması. Abrams: "Jurassic filmlerini herkes kadar severim ama onlar güzel ormanlarda, uzak adalarda geçer. David'in yaklaşımı sıradan banliyö hayatıyla dinozorları yan yana koymaktı."

## 7. The Wrong Girls (7 Ağustos ABD — 14 Ağustos İngiltere)
İki arkadaş fazla esrar içer ve tehlikeli bir suç dünyasına yuvarlanır: "Up in Smoke"tan "Pineapple Express"e uzanan türün istisnasız erkek kadrolu geleneğini bozan nadir örneklerden. Kristen Stewart ve Alia Shawkat, deneysel bir mucize ilaç sevkiyatına denk gelen tembel ikiliyi oynuyor; halüsinasyon anlarında konuşan kedileri Seth Rogen ve Kumail Nanjiani seslendiriyor. Yazar-yönetmen Dylan Meyer: "Çekimler boyunca bunun anılarım olduğu şakasını yaptım — filmde dev mürekkep balıkları ve telepati olduğu için epey komik."

## 8. Union County (21 Ağustos, ABD/Kanada)
Will Poulter ve Noah Centineo, Ohio kırsalında hapisten uzak durmak için ayık kalmaya ve iş tutmaya çalışan iki opioid bağımlısı kardeşi oynuyor. İlk filmini çeken yazar-yönetmen Adam Meeks Ohio'da büyümüş; iyileşme programındaki neredeyse tüm diğer kişiler kendi hikâyelerini anlatan profesyonel olmayan oyuncular. The Wrap'ten Chase Hutchinson: "Film her duygusal gelişimi hak ediyor; o kadar sessiz bir insanlıkla dolu ki masalarda onlarla birlikte oturuyormuş gibi oluyorsunuz."

## 9. Coyote vs Acme (26–28 Ağustos, uluslararası)
Göreceğimizi hiç sanmadığımız film. Roger Rabbit tarzı canlı çekim–2D animasyon karışımı yapım, Wile E Coyote ile Roadrunner'a odaklanıyor: klasik çizgi filmlerde sürekli arızalı alet satın alan Coyote, bu kez onları satan şirkete dava açıyor; avukatını Will Forte oynuyor. Warner Bros filmi üç yıl önce vergi indirimi uğruna rafa kaldırmıştı ("Batgirl"de olduğu gibi); şimdi bağımsız bir şirket tarafından gösterime giriyor. Senarist Samy Burch: "Yüz kez başarısız olduktan sonra bile denemekte bir güzellik var."

## 10. The Magic Faraway Tree (21 Ağustos, ABD/Kanada)
"Paddington 2" ve "Wonka"nın ortak yazarı Simon Farnaby, Enid Blyton'ın klasik çocuk romanlarını modernize ediyor. Claire Foy ve Andrew Garfield'ın oynadığı mucit-eş çifti, üç çocuğunu internetten uzaklaştırmak için kırsalda ıssız bir kulübeye taşınıyor; çocuklar dallarında başka dünyalara açılan portaller olan bir ağaç keşfediyor. Silky (Nicola Coughlan), Moonface (Nonso Anozie), Dame Washalot (Jessica Gunning) ve kötü kalpli Dame Snap (Rebecca Ferguson) da kadroda. Time Out'tan Phil de Semlyen: "Blyton hikâyelerinin akıllı telefon dönemine akıllı bir güncellemesi."

Kaynak: BBC Culture — Nicholas Barber, "10 of the best films to watch this August".`,
    image: "https://ichef.bbci.co.uk/images/ic/1920xn/p0p0cq6q.jpg.webp",
    source: "BBC Culture",
  },
  {
    slug: "game-of-thrones-en-iyi-10-ani",
    title: "Game of Thrones'un En İyi 10 Anı: Büyük Savaşlar Değil, Fırtına Öncesi Sessizlikler",
    excerpt: "Giddy Up America'nın seçkisi, dizinin dev set parçalarını bir kenara bırakıp gerilimin patlamadan önceki o küçük anlarına odaklanıyor — havlayan köpeklerden Roose Bolton'ın zırhına, Littlefinger'ın yüzündeki o ifadeye.",
    body: `Game of Thrones'un mirasını konuşmak kolay değil: bir yanda dev savaşlar, şoke edici ölümler ve nefes kesen bölümler, öbür yanda kendinden önceki her şeye ters düşen aceleci final. Ama listeyi yapanın önerisi şu: dizinin gerçek gücü, fırtına öncesi o küçük anlarda. Havai fişekler akılda kalan şeydi, fakat asıl vuran genellikle patlamadan hemen önceki sessizlikti.

## 10. Mountain'ın Oberyn'in bacağını çelmesi — "The Mountain and the Viper" (S4, B8)
Kızıl Düğün sonrası Westeros'a gelen Dorne prensi, Tyrion'un şampiyonu olarak neredeyse bir sürprize imza atıyordu. Ama adamımız beş metre kala kutlamaya başladı — çaylak hatası. Bakmadığı anda Mountain önce gözlerini, sonra kafatasını ödetti. Yeni, taze bir karakterin ve Lannisterlara karşı olası bir gücün bir anda yok oluşu izlemesi zor bir sahneydi.

## 9. Jon'un Rickon'un ölümünü izlemesi — "Battle of the Bastards" (S6, B9)
İkinci ders: bir psikopattan düz çizgide kaçmayacaksın. Rickon sırtından oku aldı, Jon da özenle kurduğu planı pencereden atıp Ramsay'in ordusuna tek başına saldırdı. Diriltilişinden beri soğukkanlı görünen Jon'un duygularına kapılması hem şaşırtıcı hem de tam ona yakışan bir hamleydi.

## 8. Littlefinger'ın sıranın kendisine geldiğini anlaması — "The Dragon and the Wolf" (S7, B7)
Yedinci sezonda Stark kardeşlerin buluşması bekleneni vermedi; Sansa ile Arya'nın gerilimi izleyiciyi yordu. Sonra ikisi de bizi, Littlefinger'ı da kandırdı. Yedi sezon boyunca gölgede entrika kuran adamın, yargılananın Arya değil kendisi olduğunu fark ettiği andaki yüz ifadesi dizinin en tatmin edici karelerinden biri.

## 7. Margaery'nin Cersei'nin duruşmaya gelmemesinden şüphelenmesi — "The Winds of Winter" (S6, B10)
Serçeler Westeros'un aklını ele geçirmişti ve Cersei'nin duruşmasına herkes gelmişti — Cersei hariç. Yüksek Serçe'nin görmediği tehlikeyi Margaery gördü ve herkesi oradan çıkarmaya çalıştı. Dinlenmedi. Sonra hepsi öldü. Cersei hariç.

## 6. Tormund'un Brienne'in şövalye olmadığını öğrenmesi — "A Knight of the Seven Kingdoms" (S8, B2)
Bir sistemin çarpıklığını en iyi, o sistemin dışında yaşayanlar görür. Jaime'nin Brienne'i şövalye ilan etmesi kusurlu sekizinci sezonun en dokunaklı anıydı; ama Tormund'un "Brienne neden şövalye değil ki?" tepkisi asıl can alıcı olandı.

## 5. Gece Nöbeti kolcularının Ak Gezenlerin bıraktığı cesetleri bulması — "Winter is Coming" (S1, B1)
Dizi Starklarla, Lannisterlarla ya da ejderhalarla değil, Duvar'ın kuzeyinde titizlikle dizilmiş cesetlerle ve bir Wight'la açıldı. Yapımcıların diziye başlamak için seçtiği yol buydu — sonrasında hikâye başka yere gitse de, bir diziyi açmanın en iyi yollarından biri.

## 4. Daenerys'in Lekesizleri satın alırken köle tacirini oyuna getirmesi — "And Now His Watch Has Ended" (S3, B4)
Daenerys'in hafife alınacak biri olmadığını ilk iki sezonda öğrenmiştik: ateşe girip üç ejderha yavrusuyla çıkan biriydi. Ama Lekesizler karşılığında bir ejderha vermeye razı göründüğü an ve ardından tacire çevirdiği oyun, ününü kalıcı olarak çivileyen sahne oldu.

## 3. Catelyn Stark'ın Roose Bolton'ın zırhını görüp Twins'te ne olduğunu anlaması — "The Rains of Castamere" (S3, B9)
Kızıl Düğün'de hepimiz şoktaydık; Catelyn değil. Roose'la göz teması kurup ihanetin geldiğini onayladığı an, ikinci izleyişte iyice belirginleşen bir detay: her şey o kadar hızlı ve karanlık akıyor ki ilk seferde gözden kaçıyor. Ders: annenizi dinleyin.

## 2. Hardhome'da köpeklerin havlamaya başlaması — "Hardhome" (S5, B8)
Listeyi yapanın favori savaşı. Son yirmi dakika bir korku-aksiyon filmi gibi: her şey plana uygun görünürken köpekler havlamaya başlıyor, rüzgâr dönüyor, "Kapatın kapıları!" komutu geliyor ve her seferinde biri kapıya yetişemiyor. Ardından Gece Kralı'nın Jon'a bakıp ölüleri ayağa kaldırması: dizinin "biz şaka yapmıyoruz" dediği an.

## 1. Daenerys'in Westeros'a yelken açması — "The Winds of Winter" (S6, B10)
Nihayet. Altı sezon boyunca çölleri aşan, esir alınan, ölümden kaçan, ejderha büyüten Daenerys sonunda Westeros'a doğru yola çıkıyordu. Ölçeği hep dev olan dizi bu andan itibaren daralmaya, hikâyeler nihayet birbirine bağlanmaya başlıyordu — ve o kadro gemilerle birlikte akıp giden müzik, dizinin en görkemli finali oldu.

Kaynak: Giddy Up America — "The Ten Best Moments From 'Game of Thrones'".`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Game_of_Thrones_throne_model.jpg/1920px-Game_of_Thrones_throne_model.jpg",
    source: "Giddy Up America",
  },
  {
    slug: "mark-ruffalo-en-iyi-15-filmi",
    title: "Mark Ruffalo'nun En İyi 15 Filmi: Spotlight'tan Zodiac'a",
    excerpt: "Metacritic, Mark Ruffalo'nun kariyerini eleştirmen puanlarına göre sıraladı. Bağımsız dramalardan Marvel gişesine, adalet arayan gazetecilerden Viktorya dönemi komedisine uzanan 15 film.",
    body: `Mark Ruffalo, hem bağımsız sinemanın hem de dünyanın en büyük film serisinin içinde eşit rahatlıkla var olabilen ender oyunculardan biri. Metacritic, eleştirmen puanlarını esas alarak Ruffalo'nun en iyi 15 filmini sıraladı — geriye doğru sayıyoruz.

## 15. Collateral (2004)
![Collateral](https://www.metacritic.com/a/img/resize/6c073f12f85ce6c3740431b1532e2675ab77ed76/hub/2026/07/29/3be3852e-f0c4-4a3d-b637-bbf32e258901/collateral.jpg?auto=webp&quality=70&width=1024)
Ruffalo, Michael Mann'in gergin suç gerilimlerinde LAPD dedektifi Ray Fanning'i oynuyor. Tom Cruise ve Jamie Foxx'un taşıdığı filmde Ruffalo'nun rolü küçük ama Mann'in gece Los Angeles'ında iz bırakan bir varlık.

## 14. Where the Wild Things Are (2009)
![Where the Wild Things Are](https://www.metacritic.com/a/img/resize/6ec741bda77ec2ddd9d1a1681481b0d5b9384dd3/hub/2026/07/29/5fe5d79d-5d28-431d-8ea4-8aa042dffae3/wherethewildthingsare.jpg?auto=webp&quality=70&width=1024)
Spike Jonze'un Maurice Sendak klasiğinden yaptığı melankolik uyarlama. Hayal gücü büyük, duyguları daha da büyük sekiz yaşındaki Max'in adasına giden yolda Ruffalo, çocukluğun kırılganlığını çerçeveleyen yetişkin dünyasını temsil ediyor.

## 13. What Doesn't Kill You (2008)
![What Doesn't Kill You](https://www.metacritic.com/a/img/resize/a38737035466c4cf08a2d588c167f9d5cfdf3a24/hub/2026/07/29/a42bb4c5-77fb-44e6-b27c-6704e0e01a8b/whatdoesntkillyou.jpg?auto=webp&quality=70&width=1024)
Az izlenmiş ama eleştirmenlerin övdüğü bir suç draması. Ruffalo ve Ethan Hawke, South Boston'ın sert sokaklarından çıkmaya çalışan küçük çaplı suçluları oynuyor; hayatlarını düzeltme çabaları beklenen yöne gitmiyor.

## 12. Arco (2025)
![Arco](https://www.metacritic.com/a/img/resize/acd670f3dac345b198f6b41c1cecc1c10b341d8a/hub/2026/07/29/89ea9470-8db8-49dc-8958-a3cdf210ac69/arco.jpg?auto=webp&quality=70&width=1024)
Fransız animasyonu, 2932 yılının ütopik dünyasından dinozorları görmek için zamanda yolculuğa çıkan 10 yaşındaki Arco'yu anlatıyor. Çocuk, hedefini ıskalayıp 2075'e düşüyor. Ruffalo İngilizce seslendirme kadrosunda.

## 11. Mickey 17 (2025)
![Mickey 17](https://www.metacritic.com/a/img/resize/93bfbe9f14252f3b22c5c293e1885dea695cc5a8/hub/2026/07/29/b1401d9e-a48d-4adb-9827-f906cc784eb0/mickey17.jpg?auto=webp&quality=70&width=1024)
Bong Joon-ho'nun post-apokaliptik bilimkurgu komedisinde Ruffalo, buz gezegenini kolonileştirme misyonunun başındaki Kenneth Marshall'ı oynuyor: açıkça Trump'a göndermeler yapan, kibirli ve komik bir kötü.

## 10. Dark Waters (2019)
![Dark Waters](https://www.metacritic.com/a/img/resize/86f89ab7c77130a3ce85c9b6aab2e213b97b0b4d/hub/2026/07/29/4ca42598-7106-423a-be56-84c2c52ecb85/darkwaters.jpg?auto=webp&quality=70&width=1024)
Todd Haynes'in gerçek olaylara dayanan hukuk gerilimi. Ruffalo, DuPont şirketini kimyasal kirlilik nedeniyle yıllar süren bir mücadeleyle mahkemeye taşıyan çevre avukatı Robert Bilott'u canlandırıyor — aynı zamanda filmin yapımcısı.

## 9. Thor: Ragnarok (2017)
![Thor: Ragnarok](https://www.metacritic.com/a/img/resize/a3c747cfae2e4004355559b8ccb3d45f14dfcd68/hub/2026/07/29/1ca4ab56-35cd-4845-aaed-43db2368a3dc/thorragnarok.jpg?auto=webp&quality=70&width=1024)
Taika Waititi'nin yönettiği üçüncü Thor filmi, serinin tonunu tamamen komediye çeviriyor. Ruffalo'nun Hulk'u burada ilk kez tam anlamıyla konuşan, huysuz ve komik bir karakter hâline geliyor.

## 8. Avengers: Endgame (2019)
![Avengers: Endgame](https://www.metacritic.com/a/img/resize/8aaede0a77a1efbd901c86446f07726cd9599efd/hub/2026/07/29/8d0f93d8-6a4b-4266-830c-38d8c470d080/avengersendgame.jpg?auto=webp&quality=70&width=1024)
MCU'nun ilk on yılının epik finali ve bir dönem tüm zamanların en çok gişe yapan filmi. Ruffalo'nun "Profesör Hulk"u, karakterin uzun yolculuğunun mantıklı ve şaşırtıcı derecede duygusal varış noktası.

## 7. Zodiac (2007)
![Zodiac](https://www.metacritic.com/a/img/resize/9a8602d2023c3839c09b90e8a48b336999c71582/hub/2026/07/29/71fe075d-e8e7-45b3-860a-28bef1c807fc/zodiac.jpg?auto=webp&quality=70&width=1024)
David Fincher'ın takıntılı bakışını Zodiac cinayetlerine çevirdiği film. Ruffalo, davanın peşini bırakmayan dedektif Dave Toschi'yi oynuyor; kariyerinin "adalet arayan adam" rollerinin en soğukkanlısı.

## 6. Foxcatcher (2014)
![Foxcatcher](https://www.metacritic.com/a/img/resize/e80e65c05fbbce4ad34aea96908fdf612abe1314/hub/2026/07/29/0a49ca09-10f0-4ef6-a7f2-a655df2dcad7/foxcatcher.jpg?auto=webp&quality=70&width=1024)
Ruffalo'nun du Pont ailesiyle ilgili iki filminden ikincisi. Olimpiyat şampiyonu güreşçi Dave Schultz rolüyle En İyi Yardımcı Erkek Oyuncu dalında Oscar'a aday oldu; bedensel dönüşümü kadar sessiz şefkati de konuşuldu.

## 5. You Can Count on Me (2000)
![You Can Count on Me](https://www.metacritic.com/a/img/resize/0d61cce1132de93149a61c8b214a08ac8b2ed037/hub/2026/07/29/45cbc388-6ba4-489c-88c8-17ce852be38e/youcancountonme.jpg?auto=webp&quality=70&width=1024)
Ruffalo'nun çıkış rolü, Kenneth Lonergan'ın bağımsız dramasında geldi. Laura Linney'nin oynadığı yalnız anne Sammy'nin savruk kardeşi Terry olarak, oyunculuğunun bütün ileriki damarlarını burada gösteriyor.

## 4. The Kids Are All Right (2010)
![The Kids Are All Right](https://www.metacritic.com/a/img/resize/7300b1eeb9f180e9ae50f3588e9e0661bcd88bb1/hub/2026/07/29/28690a3b-85aa-46ad-962a-3973919cea81/kidsareallright.jpg?auto=webp&quality=70&width=1024)
Annette Bening ve Julianne Moore'un iki ergen çocuklu bir çifti oynadığı Lisa Cholodenko filmi. Çocukların biyolojik babası Paul'ü arayıp bulmasıyla aile dengesi bozuluyor; Ruffalo bu rolle ilk Oscar adaylığını aldı.

## 3. Poor Things (2023)
![Poor Things](https://www.metacritic.com/a/img/resize/0431474592af7a939c8c0c79f141210add8d7820/hub/2023/09/11/5213317d-b568-4859-9076-f106f44f6c5a/poorthings.jpg?auto=webp&quality=70&width=1024)
Yorgos Lanthimos'un Viktorya dönemi komedisinde Ruffalo, Bella Baxter'ı (Emma Stone) kaçıran züppe avukat Duncan Wedderburn'ü oynuyor. Kariyerinin en abartılı, en açıkça komik performansı — ve bir Oscar adaylığı daha.

## 2. Eternal Sunshine of the Spotless Mind (2004)
![Eternal Sunshine of the Spotless Mind](https://www.metacritic.com/a/img/resize/ee5ce8b3041e17fbd2fdd401170fdebfb1df7503/hub/2026/07/29/8afc5bcc-9d33-4cee-bbd9-3afcdfb17138/eternalsunshineofthespotlessmind.jpg?auto=webp&quality=70&width=1024)
Michel Gondry ve Charlie Kaufman'ın hafıza silme hikâyesinde Jim Carrey, Clementine'e (Kate Winslet) dair tüm anılarını sildirmeye karar veriyor. Ruffalo, işlemi yürüten klinikteki teknisyen Stan olarak filmin dağınık insani tarafını taşıyor.

## 1. Spotlight (2015)
![Spotlight](https://www.metacritic.com/a/img/resize/1272a237592d94346cdf4fe8ab40336281932c0e/hub/2026/07/29/5ced3abc-89c2-4c34-a535-0f5ac56a7ffd/spotlight.jpg?auto=webp&quality=70&width=1024)
Ruffalo'nun "adalet arayan" rollerinin en büyüğü. Boston Globe'un Spotlight ekibinde Katolik Kilisesi'nin istismar örtbasını ortaya çıkaran araştırmacı gazeteci Michael Rezendes'i oynuyor. Film En İyi Film Oscar'ını kazandı, Ruffalo yine adaylar arasındaydı.

Kaynak: Metacritic — "The Best Movies Starring Mark Ruffalo".`,
    image: "https://www.metacritic.com/a/img/resize/a38737035466c4cf08a2d588c167f9d5cfdf3a24/hub/2026/07/29/a42bb4c5-77fb-44e6-b27c-6704e0e01a8b/whatdoesntkillyou.jpg?auto=webp&quality=70&width=1024",
    source: "Metacritic",
  },
  {
    slug: "2026nin-en-iyi-yeni-korku-filmleri",
    title: "2026'nın En İyi 10 Yeni Korku Filmi",
    excerpt: "Rotten Tomatoes, yılın en yüksek Tomatometer puanlı korku filmlerini sıraladı. Slasher parodisinden Nia DaCosta'nın '28 Years Later' devamına, 2026'nın en iyi 10 korku filmi.",
    body: `2026 korku sineması için bereketli bir yıl oldu: kamp slasher'ları, dijital efsaneler, zombi devam filmleri ve klasik hayaletli ev hikâyeleri aynı sezonu paylaştı. Rotten Tomatoes'un Tomatometer sıralamasına göre yılın en iyi 10 yeni korku filmi:

## 1. Teenage Sex and Death at Camp Miasma (2026) — %98
![Teenage Sex and Death at Camp Miasma](https://resizing.flixster.com/V3Dlht0kQFwWScgUnZGsUl_Eo7w=/800x1200/v2/https://resizing.flixster.com/e6L--SBRx1PvceaQoUsdgmWeZqs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q2OTE2MjRiLTI0OWMtNDE1ZC04YTQwLTg0ZmVmMzhmMWE4Mi5qcGc=)
Jane Schoenbrun'un yönettiği film, yorgun düşmüş bir slasher serisinin genç bir yönetmene (Hannah Einbinder) devredilmesini anlatıyor. Eleştirmenler filmi "slasher türüne yazılmış kanlı bir sevgi mektubu" olarak tanımlıyor. Kadroda Gillian Anderson ve Jasmin Savoy Brown da var.

## 2. Obsession (2025) — %94
![Obsession](https://resizing.flixster.com/5BlfhxiWUygGuQ_wr755BlVGVlw=/800x1200/v2/https://resizing.flixster.com/wciPMzUm5zbBhWKN24eGdoRfK8I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBlZDNhZmI5LTM3N2EtNGIyZC1iZTA5LTU0NzUyY2M2ZGYyYi5qcGc=)
Curry Barker'ın filmi, gizemli "One Wish Willow"u kırıp aşkını kazanmak isteyen bir romantiğin dileğinin tam olarak gerçekleşmesiyle başlıyor. Rahatsız edici olduğu kadar eğlenceli de olmayı başaran nadir bir yapım.

## 3. Send Help (2026) — %92
![Send Help](https://resizing.flixster.com/m_3j1GhxYtAwK6L-U31pfjMtrXw=/800x1200/v2/https://resizing.flixster.com/WEelDTQoFz53v0hGRRC1rZ-3uxY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NkMzdhM2Y3LWYzMmEtNGNmYS04YzBjLTc1ZGNhN2JkZGFjOS5qcGc=)
Sam Raimi'nin uçak kazasından sağ kurtulan iki iş arkadaşını ıssız bir adaya hapseden filmi. Rachel McAdams ve Dylan O'Brien, Raimi'nin şeytani mizah anlayışına birebir uyuyor.

## 4. Leviticus (2026) — %92
![Leviticus](https://resizing.flixster.com/Ie45ZUWu67iP1micNmKazANJGiY=/800x1200/v2/https://resizing.flixster.com/AQQe8xVq4v1wD42l1mFji4ZGm7s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVkNTI5YTVmLWNkYjgtNDBiNy1hNzcwLTVjMjgyNmNkMWI4Ny5qcGc=)
Adrian Chiarella'nın filminde iki genç, en çok arzuladıkları kişinin — yani birbirlerinin — suretine bürünen bir varlıktan kaçmak zorunda. Duygusal bir aşk hikâyesiyle zekice bir canavar fikrini birleştiriyor.

## 5. 28 Years Later: The Bone Temple (2026) — %91
![28 Years Later: The Bone Temple](https://resizing.flixster.com/wzWUyaYeWCvCjpH-nMxdojatc_Q=/800x1200/v2/https://resizing.flixster.com/KhvweFDt8lqqSgqfVdOUZVXZzow=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFmNjI1OGU2LTY2MDEtNDMyNi04NGFiLTY3NjZhNDA3ODA2MS5qcGc=)
Nia DaCosta, Danny Boyle ve Alex Garland'ın kurduğu dünyayı devralıp baş aşağı çeviriyor. Ralph Fiennes ve Jack O'Connell'ın performansları filmin dehşetini derinleştiriyor.

## 6. Hokum (2026) — %90
![Hokum](https://resizing.flixster.com/CsdnPMckJ4MRD64GQgwTM0n3oeU=/800x1200/v2/https://resizing.flixster.com/jRvqYBpvhPAKUPk2mY9cUsGwuRA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FhMzRlOTkxLWI4MmUtNDcxOS1hYWI2LWU3OGQ4NGNhYjdkMS5qcGc=)
Damian McCarthy'nin filminde romancı Ohm Bauman (Adam Scott), ailesinin küllerini savurmak için gittiği ıssız handa bir cadı efsanesine saplanıyor. Atmosferik folklorla beslenmiş klasik bir perili ev hikâyesi.

## 7. Backrooms (2026) — %87
![Backrooms](https://resizing.flixster.com/vNXC0QV1iooJ0p7jei-lQJmjqNc=/800x1200/v2/https://resizing.flixster.com/rhgxSrAD0DJLjAa7CXGBQU5h81E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3YzFlM2U0LWM1NzctNDg5Yy05M2Y4LTVmYWYxOTQyMDEyMy5qcGc=)
Kane Parsons'ın YouTube'dan doğan liminal koridor efsanesini uzun metraja taşıyan ilk filmi. Chiwetel Ejiofor ve Renate Reinsve'nin yer aldığı yapım, hipnotik olduğu kadar dehşet verici.

## 8. We Bury the Dead (2024) — %87
![We Bury the Dead](https://resizing.flixster.com/s_tZm2eyH-KstknuuyeKSqBvHuY=/800x1200/v2/https://resizing.flixster.com/h3jkbQNfvS-0g3ADQTmnH6-2cJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZlNmFmZTlkLTZmYjAtNDRhNi04ZjE5LTY1ZjhhZGQ5MTk1NS5qcGc=)
Daisy Ridley'nin taşıdığı film, zombi klişelerini yas ve kayıp üzerine bir meditasyona dönüştürüyor. Askeri bir felaketin ardından ölüler yalnızca dirilmiyor, avlanıyor.

## 9. Primate (2025) — %77
![Primate](https://resizing.flixster.com/smtVXh-Oyl8DXPD4-rFqfvpGcK0=/800x1200/v2/https://resizing.flixster.com/hRGJ1nHXf3xkpX4qyQisxuSZyE0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1OWQ2MzdmLWU5OTMtNGM3Yi05NDQxLWYwMjIzOTJjZWFhNy5qcGc=)
Johannes Roberts'ın yılın başında vizyona giren filmi, tropikal bir tatili ilkel bir hayatta kalma kâbusuna çeviriyor. Kısa, yalın ve etkili.

## 10. Ready or Not 2: Here I Come (2026) — %75
![Ready or Not 2](https://resizing.flixster.com/jf21tFzvWtc6lc1ezusO4yn6ZHM=/800x1200/v2/https://resizing.flixster.com/mb7jKn6kPjbfdG_ec1yxUpObtic=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RhYTI3MWU2LTJiMDctNDU3OC1hYTRmLTQ1NWZjNWExZGEyMi5qcGc=)
Grace (Samara Weaving) Le Domas ailesinden kurtulduktan hemen sonra oyunun bir üst seviyesine geçiyor. Devam filmi lanetini büyük ölçüde Weaving'in vahşi enerjisi sayesinde kırıyor.

Kaynak: Rotten Tomatoes — "Best New Horror Movies of 2026".`,
    image: "https://resizing.flixster.com/V3Dlht0kQFwWScgUnZGsUl_Eo7w=/800x1200/v2/https://resizing.flixster.com/e6L--SBRx1PvceaQoUsdgmWeZqs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q2OTE2MjRiLTI0OWMtNDE1ZC04YTQwLTg0ZmVmMzhmMWE4Mi5qcGc=",
    source: "Rotten Tomatoes",
    countdownBadge: "10 → 1 geri sayım",
  },
  {
    slug: "2026nin-en-iyi-yeni-komedi-filmleri",
    title: "2026'nın En İyi 10 Yeni Komedi Filmi",
    excerpt: "Olivia Wilde'ın 'The Invite'ından Pixar'ın 'Hoppers'ına, Rotten Tomatoes'un Tomatometer sıralamasına göre yılın en çok güldüren 10 filmi.",
    body: `Boots Riley'den Olivia Wilde'a, Pixar'dan Minions'a: 2026 komedi sineması hem yazar sinemasının hem de büyük stüdyo animasyonlarının aynı anda güçlü olduğu bir yıl. Rotten Tomatoes'un Tomatometer sıralamasına göre yılın en iyi 10 yeni komedisi:

## 1. The Invite (2026) — %97
![The Invite](https://resizing.flixster.com/vu3WNu2gCk5JheviBy5KMw07wyc=/800x1200/v2/https://resizing.flixster.com/oQP7j5g3mdXhrPzuVM1Kt5yKNbo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMyM2E1MzNiLWJjYzgtNDQ1MC05M2Q0LTY2NWJmM2IyYjk4ZC5qcGc=)
Olivia Wilde'ın yönettiği filmde evliliği çatırdayan Joe ve Angela, üst kattaki gizemli komşularını yemeğe davet ediyor. Seth Rogen, Penélope Cruz ve Edward Norton'lı kadrosuyla yılın en sofistike farsı.

## 2. The Sheep Detectives (2026) — %95
![The Sheep Detectives](https://resizing.flixster.com/mQRp4QAya4hb3SShwOckjngwLIA=/800x1200/v2/https://resizing.flixster.com/LviGdc9-5BykrMyhX1oGyU-HhXE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYzNjA4ZWQ1LTE1M2UtNGI2Mi05NTJlLWM0ZTg2NWM5ODJhNC5qcGc=)
Hugh Jackman, koyunlarına her gece dedektif romanı okuyan bir çobanı oynuyor. Emma Thompson ve Nicholas Braun'un da yer aldığı film, sıcak bir aile eğlencesi ambalajına şaşırtıcı derinlikte temalar sarıyor.

## 3. Hoppers (2026) — %94
![Hoppers](https://resizing.flixster.com/PLxuRQLKTav6wOOrBIvqw736EBE=/800x1200/v2/https://resizing.flixster.com/bwWq8XLRwb_i2OuzPIq0JwPPyw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkzNjM1M2U4LWVmODYtNGM4Mi1iYzJmLTNkZWU0MjkxZTU0Yi5qcGc=)
Pixar'ın yeni filmi, hayvanlarla konuşabilmeyi mümkün kılan bir bilim kurgu fikrinden yola çıkıyor. Eleştirmenlere göre stüdyonun bugüne kadarki en komik işi.

## 4. Toy Story 5 (2026) — %92
![Toy Story 5](https://resizing.flixster.com/_qrGu1iWuHN_tDhkSw22ZvHl1B8=/800x1200/v2/https://resizing.flixster.com/mA3D_vy893aAyLJ9qFLLW4U6LIU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YxNjlmZDVkLWU1YjEtNGU5Mi1hMDQwLWE0ZjNhYmNiMGFkZS5qcGc=)
Bu kez oyuncaklar ekranlarla yarışıyor. Woody ve Buzz'ın dönüşü, seri yorgunluğuna rağmen çocukların bu karakterlere hâlâ ihtiyacı olduğunu hatırlatıyor.

## 5. I Love Boosters (2026) — %92
![I Love Boosters](https://resizing.flixster.com/xsf25W7RBZbGmis3mCgVcDfiqMY=/800x1200/v2/https://resizing.flixster.com/buDvWJ5KfAV4_4MVcFG_-nZBqLQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNiZGNiNDA2LTY0NDItNGJlNy04NmRlLTM0OTllZjk0ZGQ2MS5qcGc=)
Boots Riley'nin Keke Palmer, Naomi Ackie ve Taylour Paige'li yeni filmi; yönetmenin keskin toplumsal hicvini yine kaotik bir mizahla birleştiriyor.

## 6. I Want Your Sex (2026) — %90
![I Want Your Sex](https://resizing.flixster.com/_XzDHRpLdtIfwZBI0ssBt96kSsk=/800x1200/v2/https://resizing.flixster.com/fArozlChMxf5nY6-Ey0bvc32ig0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlYjVjMmQ1LTc2YTQtNDBhNC04NzJhLWE2OWEwOTYyYWVkZi5qcGc=)
Gregg Araki'nin en ulaşılabilir işlerinden biri. Cooper Hoffman'ın canlandırdığı Elliot, provokatif sanatçı Erika Tracy'nin (Olivia Wilde) yanında işe girince fantezileri gerçeğe dönüşüyor.

## 7. Minions & Monsters (2026) — %89
![Minions & Monsters](https://resizing.flixster.com/LeSi5fpSggaQ4EayHfYv_dCv_0c=/800x1200/v2/https://resizing.flixster.com/1gyu0k41JOFVHiGEh8aA1Pw7X14=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0ZTNhMGQwLWEwN2QtNDIxNS05ZTNmLTEzMGM1YmM0ZmYyNC5qcGc=)
Minion'lar bu kez Hollywood tarihini fethediyor: yıldız oluyorlar, her şeylerini kaybediyorlar ve dünyaya canavarlar salıyorlar. Serinin en keyifli halkası.

## 8. Power Ballad (2026) — %88
![Power Ballad](https://resizing.flixster.com/48xFRdscTddL_6EpBxYa6QDLY0k=/800x1200/v2/https://resizing.flixster.com/D6ZNf6XfT_f-L-2iIpnUFpG21rA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM3MTdjMjYzLTE4MzItNGU1MC1hZTYzLWI3NzUwMThjODI4OC5qcGc=)
John Carney'nin filminde eski günlerini arayan düğün şarkıcısı Rick (Paul Rudd), sönmekte olan boyband yıldızı Danny (Nick Jonas) ile tanışıyor. Şöhretin cazibesini de bedelini de sakin bir zarafetle anlatıyor.

## 9. GOAT (2026) — %82
![GOAT](https://resizing.flixster.com/brDsSDz6YaqMD1PUxm6VepaVaEw=/800x1200/v2/https://resizing.flixster.com/E4RWTXg58eK-yeETfMDBjOKjfGI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk1YWYwNTYzLWNjYjMtNGYyNi1iMGE4LWM2NWM5NmVhMWZkYi5qcGc=)
Sony Pictures Animation'ın tamamen hayvanlardan oluşan dünyasında geçen aksiyon-komedisi. Steph Curry ve Gabrielle Union'ın da yer aldığı seslendirme kadrosu işi kotarıyor.

## 10. Cold Storage (2026) — %81
![Cold Storage](https://resizing.flixster.com/kytUurP27KN3R5E4ikzZDvVwUig=/800x1200/v2/https://resizing.flixster.com/ou6aGKAZo60oUaTDVfNmdc6wZcA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UxZDY1YzRlLTZlMTYtNDUwOS05Mjc0LThkOGJmM2UzOWRhNS5qcGc=)
Joe Keery ve Georgina Campbell'ın oynadığı film, eski bir askeri üssün üzerine kurulmuş depo tesisinde geçen bir B-film güzellemesi. Liam Neeson'lı kadrosuyla yapış yapış ve esprili bir bilim kurgu.

Kaynak: Rotten Tomatoes — "Best New Comedies of 2026".`,
    image: "https://resizing.flixster.com/vu3WNu2gCk5JheviBy5KMw07wyc=/800x1200/v2/https://resizing.flixster.com/oQP7j5g3mdXhrPzuVM1Kt5yKNbo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMyM2E1MzNiLWJjYzgtNDQ1MC05M2Q0LTY2NWJmM2IyYjk4ZC5qcGc=",
    source: "Rotten Tomatoes",
  },
  {
    slug: "tum-9-live-action-spider-man-filmi-siralamasi",
    countdownBadge: "9 → 1 geri sayım",
    title: "Tüm 9 Live-Action Spider-Man Filmi: En Kötüden En İyiye Sıralama",
    excerpt: "Nerdist, yaklaşık 25 yıllık Spider-Man sinemasını baştan sona sıraladı: Raimi üçlemesinden Amazing ikilisine, Tom Holland dönemine ve gişe rekorları kıran Brand New Day'e.",
    body: `Yaklaşık 25 yıl boyunca *Spider-Man* serisi sinema tarihinin en başarılı markalarından biri oldu. Dokuzuncu halka *Spider-Man: Brand New Day* dünya genelinde gişe rekorları kırarken, seride hem çok yüksek zirveler hem de epey düşük çukurlar birikti. Nerdist, Spidey'nin konuk olduğu MCU filmlerini saymadan, dokuz live-action filmi en kötüden en iyiye sıraladı.

## 9. The Amazing Spider-Man 2 (2014) — Marc Webb
![The Amazing Spider-Man 2](https://cdn.nerdist.com/wp-content/uploads/2026/08/07010713/The-Amazing-Spider-Man-2.webp)
Bir stüdyonun MCU'dan yanlış dersler çıkarmasının ders kitabı örneği: karakter, hikâye ve mantıktan önce evren kurma hevesi. Jamie Foxx'un Electro'su neredeyse Joel Schumacher'in 90'lar Batman'inden fırlamış gibi; Andrew Garfield'ın oynadığı filmle taban tabana zıt bir ton. Serinin en iyi Spider-Man kostümünü vermesi dışında dibi temsil ediyor.

## 8. Spider-Man 3 (2007) — Sam Raimi
![Spider-Man 3](https://cdn.nerdist.com/wp-content/uploads/2026/08/07010912/Spider-Man-3.webp)
Raimi, sevmediği Venom'u stüdyo baskısıyla filme soktu; elinde zaten iki kötü varken üçüncüsü dengeyi tamamen bozdu. Thomas Haden Church'ün Sandman'i, özellikle "doğuş" sahnesi muhteşem; amnezi hattı ve çığlık atan MJ ise yorucu. Dağınık ama hiç sıkmayan, izlenebilir bir karmaşa.

## 7. The Amazing Spider-Man (2012) — Marc Webb
![The Amazing Spider-Man](https://cdn.nerdist.com/wp-content/uploads/2026/08/07011203/The-Amazing-Spider-Man.webp)
Raimi üçlemesinden sadece beş yıl sonra gelen, esasen maliyet kesmek için yapılmış bir reboot. Garfield'ın kastingi doğruydu, film ise "fena değil"in ötesine geçemedi. Daha gerçekçi yaklaşım serinin çekiciliğini alıp götürdü; üstüne serinin en kötü kostümü.

## 6. Spider-Man: Far From Home (2019) — Jon Watts
![Spider-Man: Far From Home](https://cdn.nerdist.com/wp-content/uploads/2026/08/07011403/Spider-Man-Far-From-Home.webp)
MCU'nun zirvedeki hâline iyi bir örnek: Avrupa gezisi Peter, Ned ve Midtown ekibine bol bol hafiflik alanı açıyor. Tom Holland ile Zendaya'nın kimyası inandırıcı, Jake Gyllenhaal'ın Mysterio'su Peter'ın hayatına gerçek hasar veren bir kötü. Hologram kâbus sekansı MCU'nun en iyi görsel anlarından biri.

## 5. Spider-Man: No Way Home (2021) — Jon Watts
![Spider-Man: No Way Home](https://cdn.nerdist.com/wp-content/uploads/2026/08/07011556/Spider-Man-No-Way-Home.webp)
Kâğıt üstünde çökmesi gereken bir film: kimlik cliffhanger'ını çözmek, Doctor Strange'le ekip kurmak, iki eski Spider-Man'i ve kötülerini geri getirmek. Yine de işliyor, çünkü mesele sadece nostalji değil; üç Peter Parker'ı da gerçekten önemsiyoruz. Holland'ın Peter'ı nihayet Tony Stark'ın gölgesinden çıkıyor.

## 4. Spider-Man (2002) — Sam Raimi
![Spider-Man (2002)](https://cdn.nerdist.com/wp-content/uploads/2026/08/07011801/Spider-Man-2002.webp)
Neredeyse kusursuz bir origin hikâyesi. Tobey Maguire dâhi bir kasting; David Koepp'in senaryosu Gümüş Devir çizgi romanlarının yıllarını tek filme sığdırıyor ve hiç acele etmiş gibi durmuyor. Willem Dafoe'nun Norman Osborn'u ve J.K. Simmons'ın J. Jonah Jameson'ı ikonik. Eksileri: yüzeysel kalan MJ ve o berbat Goblin kostümü.
![Tobey Maguire — Spider-Man (2002)](https://cdn.nerdist.com/wp-content/uploads/2026/02/02111237/Tobey-Maguire-Spider-Man.webp)

## 3. Spider-Man: Homecoming (2017) — Jon Watts
![Spider-Man: Homecoming](https://cdn.nerdist.com/wp-content/uploads/2026/08/07012129/Spider-Man-Homecoming.webp)
On beş yıl sonra nihayet gerçekten lise çağında görünen bir Spidey. İki origin filminin ardından örümcek ısırığını atlamak akıllıca bir karardı. Bendis'in *Ultimate Spider-Man* çizgi romanlarına yakın bu versiyon, Michael Keaton'ın Vulture'ı ile MCU'nun en iyi kötülerinden birini de getiriyor.
![Spider-Man: Homecoming — Peter Parker](https://cdn.nerdist.com/wp-content/uploads/2019/12/13065336/spiderman_homecoming_image_5.0.jpg)

## 2. Spider-Man: Brand New Day (2026) — Destin Daniel Cretton
![Spider-Man: Brand New Day](https://cdn.nerdist.com/wp-content/uploads/2026/08/07103253/Spider-Man-Brand-New-Day-banner.webp)
Serinin dokuzuncu filmi hem gişede hem eleştirmen nezdinde patladı. Cretton, Holland'ın Peter'ını sıfırdan kuran, daha sokak seviyesinde ve duygusal bir Spider-Man hikâyesi anlatıyor; kostüm tasarımı da serinin en iyisi.
![Spider-Man: Brand New Day](https://cdn.nerdist.com/wp-content/uploads/2026/08/03145104/Spider-Man-Brand-New-Day-Mask-Off.webp)

## 1. Spider-Man 2 (2004) — Sam Raimi
![Spider-Man 2](https://cdn.nerdist.com/wp-content/uploads/2026/08/07012546/Spider-Man-2.webp)
Zirvede sürpriz yok. Raimi'nin ikinci filmi hâlâ sadece en iyi Spider-Man filmi değil, aynı zamanda tüm zamanların en iyi süper kahraman filmlerinden biri. Alfred Molina'nın Doc Ock'u trajik ve korkutucu, tren sahnesi türün ölçüt sahnelerinden, kahramanlık ile kişisel fedakârlık arasındaki gerilim ise filmi bir arada tutan asıl güç.
![Spider-Man 2 — pizza sahnesi](https://cdn.nerdist.com/wp-content/uploads/2019/07/13093728/spider-man-pizza.jpg)

Kaynak: Nerdist — "Ranking All 9 Live-Action Spider-Man Films".`,
    image: "https://cdn.nerdist.com/wp-content/uploads/2026/08/07012546/Spider-Man-2.webp",
    source: "Nerdist",
  },
  {
    slug: "mcu-oncesi-izlenmesi-gereken-3-x-men-filmi",
    title: "Mutantlar MCU'ya Gelmeden Önce İzlemeniz Gereken 3 Muhteşem X-Men Filmi",
    excerpt: "Emma Frost rolüne Samara Weaving'in kastlanmasıyla mutantların MCU yolculuğu hızlanırken, Empire ekibi seriye dönmek için en iyi üç durağı seçti: X2, Days Of Future Past ve Logan.",
    body: `Marvel Sinematik Evreni'nin mutantlara giderek yaklaştığını bir süredir biliyoruz. *X-Men '97* ile MCU çatısı altında bir X-Men anlatısı hâlihazırda sürüyor; üstüne telepat Emma Frost rolü için Samara Weaving'in kastlandığı haberi geldi. Yani türü başlatan seriye dönüp bakmak için bundan iyi zaman yok. Ama bütün X-filmleri eşit doğmadı — Empire'ın uzmanları yeniden izlemeye en çok değen üçünü seçti.

## X2 (2003) — Bryan Singer
![X2](https://images.bauerhosting.com/empire/2024/08/X-Men-2.jpg?auto=format&w=1440&q=80)
**Süre:** 2sa 15dk · **Platform:** Disney+ · **Kadro:** Patrick Stewart, Hugh Jackman, Ian McKellen, Halle Berry, Famke Janssen, James Marsden

İlk *X-Men* kendi başına iyi bir film, ama ikinci halkanın yaptığı sıçrama tartışmasız. Aksiyon daha büyük, ölçek daha geniş ve film karakterlerinin içine çok daha derin giriyor: Wolverine 'Weapon X' projesiyle örtülmüş geçmişini kazıyor, Jean Grey'in telekinetik güçleri yaklaşan felaketi fısıldıyor. Beyaz Saray'a sızma açılışından (merhaba Nightcrawler!) X-Malikânesi saldırısına, Alkali Lake'teki Lady Deathstrike hesaplaşmasına kadar tam bir çizgi roman filmi klasiği. Üstüne Brian Cox'un William Stryker'ı ve Professor X ile Magneto'nun operatik satranç oyunu var. Sinematik şah mat.

&nbsp;

## X-Men: Days Of Future Past (2014) — Bryan Singer
![X-Men: Days Of Future Past](https://images.bauerhosting.com/empire/2024/08/X-Men-Days-Of-Future-Past.jpg?auto=format&w=1440&q=80)
**Süre:** 2sa 13dk · **Platform:** Disney+ · **Kadro:** Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence, Halle Berry, Nicholas Hoult

MCU çoklu evrenlerle oynamaya başlamadan çok önce, iki mutant kuşağı devasa bir zaman yolculuğu hikâyesinde bir araya geldi. Chris Claremont ve John Byrne'ün iki parçalık çizgi roman hattından serbestçe uyarlanan film, adamantium pençeli Kanadalıyı Mystique'in bir senatörü öldürmesini — ve robot kıyametini — engellemek için 1973'e yolluyor. Açılıştaki acımasız Sentinel dövüşünden ağır çekim Quicksilver hapishane kaçışına kadar seride hayran isteyeceği her şey var. Logan'ın 1973 şaşkınlığı ("biri sana çok kötü asit vermiş") kadar, X-Men'in bilinen çetrefil politik alanlarına pençe atmaktan da çekinmiyor.

&nbsp;

## Logan (2017) — James Mangold
![Logan](https://images.bauerhosting.com/empire/2024/08/X-Men-2.jpg?auto=format&w=1440&q=80)
**Süre:** 2sa 20dk · **Platform:** Disney+ · **Kadro:** Hugh Jackman, Patrick Stewart, Dafne Keen, Stephen Merchant

Hugh Jackman teknik olarak *Deadpool & Wolverine* ile geri döndü, ama James Mangold'un hüzünlü şaheseri *Logan* hâlâ sinemanın en tanımlayıcı çizgi roman karakterlerinden birine mükemmel bir final sunuyor: *Shane* usulü bir Western vedası. Yetişkinler için X-Men; küfürden, aşırı şiddetten ve yoğun duygudan kaçınmıyor. Alzheimer'ı telepatik güçleriyle birleşip onu bir kitle imha silahına çeviren Charles Xavier, ölümlülüğün nihayet peşine düştüğünü kabul eden Logan ve 'X-23' olarak Dafne Keen'in vahşi performansı, seriye yirmi yıl sonra bile yeni bir damar açıyor. Tek kelimeyle: X-traordinary.

&nbsp;

Kaynak: Empire — "3 Great X-Men Movies You Should See Before The Mutants Arrive In The MCU".`,
    image: "https://images.bauerhosting.com/empire/2026/07/xmen-2.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    source: "Empire",
  },
  {
    slug: "brand-new-day-oncesi-3-spider-man-disi-tom-holland-filmi",
    title: "Brand New Day'den Önce İzlenmesi Gereken 3 Spider-Man Dışı Tom Holland Filmi",
    excerpt: "On yıldır MCU'nun tek Spider-Man'i olan Tom Holland, örümcek ağının çok ötesinde bir oyuncu. Empire ekibi onun en iyi üç Spidey dışı filmini seçti.",
    body: `Adı Tom Holland ve son on yıldır Marvel Sinematik Evreni'nin tek Spider-Man'i — yakında *Spider-Man: Brand New Day* ile geri dönüyor. Ama dünya onu en çok mahalleden süper kahraman olarak tanısa da, İngiliz yıldızda Peter Parker'dan çok daha fazlası var. *The Odyssey*'deki işine hayran kalmaya devam ederken, Empire'ın uzmanları arşivi kazıp en iyi üç Spidey dışı filmini çıkardı.

## The Impossible (2012) — J.A. Bayona
![The Impossible](https://images.bauerhosting.com/empire/2026/07/The-Impossible.jpg?auto=format&w=1440&q=80)
**Süre:** 1sa 54dk · **Kadro:** Ewan McGregor, Naomi Watts, Tom Holland

*Billy Elliot* günlerine daha yakın, genç bir Tom Holland; 2004'te Tayland'ı vuran Boxing Day tsunamisine yakalanan bir İngiliz ailenin gerçek hikâyesinde başrolde. Bayona'nın elinde film hem nefes kesici hem de yorucu derecede sarsıcı: felaketin fiziksel dehşetiyle bir ailenin birbirini bulma çabası aynı sahnede yaşıyor. Holland'ın buradaki olgunluğu, onun yıllar sonra taşıyacağı dramatik yükün ilk kanıtı.

## The Lost City Of Z (2016) — James Gray
![The Lost City Of Z](https://images.bauerhosting.com/empire/2026/07/The-Lost-City-Of-Z.jpg?auto=format&w=1440&q=80)
**Kadro:** Charlie Hunnam, Robert Pattinson, Sienna Miller, Tom Holland

Amazon'da kayıp bir uygarlığın peşine düşen kâşif Percy Fawcett'in hikâyesi; Holland, babasının takıntısına derin bir kırgınlıkla bakan, sonra yavaş yavaş dünyayı onun gözünden görmeye başlayan oğlu oynuyor. Keşfin güzelliği kadar hastalığı, açlığı ve acımasız iklimi de kadraja alan, artık pek çekilmeyen türden eski usul bir epik. Hunnam ile Holland ikilisi inandırıcı; ayrıca Holland ile Robert Pattinson'ın ilk kez aynı karede olduğu film.

## The Devil All The Time (2020) — Antonio Campos
![The Devil All The Time](https://images.bauerhosting.com/legacy/media/5f2a/93d9/d6ff/5e31/dc1f/3126/devil-all-the-time-excl-crop.jpg?auto=format&w=1440&q=80)
**Süre:** 2sa 18dk · **Platform:** Netflix · **Kadro:** Bill Skarsgård, Robert Pattinson, Tom Holland, Sebastian Stan, Riley Keough, Jason Clarke

Bir felaket filmiyle açılış yapmış, yarım düzine MCU filminde oynamış ve bir James Gray filminde dramatik kaslarını göstermiş olmasına rağmen, izleyicinin "sonsuza dek genç" Tom Holland algısını kıran film Campos'un zifiri karanlık Southern Gothic mücevheri oldu. Holland'ın Arvin Russell'ında şiddet, yoğunluk ve kuşatıcı karanlık aynı anda duruyor: sahte inanç önderleri ve seri katillerin insafına kalmış kanunsuz bir kasabada, tarifsizin intikamını almak için tarifsizi yapmaya razı bir genç adam. Üstüne yırtıcı bir vaiz olarak fena hâlde ipini koparmış bir Robert Pattinson var.

Kaynak: Empire — "Three Non-Spider-Man Tom Holland Movies To Watch Before Brand New Day".`,
    image: "https://images.bauerhosting.com/empire/2026/07/Tom-Holland-Non-Spidey-Movies.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    source: "Empire",
  },
  {
    slug: "tum-zamanlarin-en-iyi-zombi-filmleri",
    title: "Tüm Zamanların En İyi Zombi Filmleri: Empire'ın İlk 10'u",
    excerpt: "Night Of The Living Dead'den 28 Years Later'a, Empire'ın 25'lik zombi listesinin zirvesindeki 10 film — Romero klasiklerinden Train To Busan'a türün en iyileri.",
    countdownBadge: "10 → 1 geri sayım",
    body: `Zombi filmi, sinemanın en esnek türlerinden biri: aynı canavarla hem toplumsal hiciv hem saf komedi hem de saf dehşet yapılabiliyor. Empire, *Night Of The Living Dead*'den *28 Years Later*'a uzanan 25'lik bir sıralama hazırladı. İşte o listenin zirvesindeki 10 film.

## 10. Re-Animator (1985) — Stuart Gordon
![Re-Animator](https://images.bauerhosting.com/legacy/media/5eea/4621/d165/1354/a1d4/9ffb/9-reanimator.jpg?auto=format&w=1440&q=80)
H.P. Lovecraft öyküsünden uyarlanan film, ölülere bambaşka bir açıdan bakıyor: Jeffrey Combs'un çıldırmış profesörü Herbert West, ölü dokuyu canlandıran limon yeşili bir sıvı icat ediyor ve kısa süre sonra bunu cesetlere uygulamaya başlıyor. Korku ile komedinin pulp kıvamında karışımı; 80'lerin kanlı standartlarına göre bile fazlasıyla kanlı, sıkı senaryosuyla mide bulandırıcı derecede eğlenceli.

## 9. 28 Years Later (2025) — Danny Boyle
![28 Years Later](https://images.bauerhosting.com/empire/2025/06/28-years-later-1.jpg?auto=format&w=1440&q=80)
Boyle ve Alex Garland'ın kendi başlattıkları salgına dönüşü, beklenen nostalji turu değil: karantinaya alınmış bir adada büyüyen bir çocuğun gözünden şiddetin, inancın ve yasın hikâyesi. Görsel cesareti ve final hamlesiyle serinin en tartışılan halkası.

## 8. [REC] (2007) — Jaume Balagueró, Paco Plaza
![REC](https://images.bauerhosting.com/empire/2020/06/8-rec.jpg?auto=format&w=1440&q=80)
Found-footage korkusunun en verimli örneği: Barselona'da karantinaya alınmış bir apartman, tek bir kamera ve giderek daralan koridorlar. Finaldeki tavan arası sekansı, türün en çok kopyalanan dehşet anlarından biri.

## 7. Braindead (1992) — Peter Jackson
![Braindead](https://images.bauerhosting.com/legacy/media/5eea/465f/f973/9f39/e0a2/c1b5/7-braindead.jpg?auto=format&w=1440&q=80)
Peter Jackson'ın Orta Dünya'dan önceki hâli: sinema tarihinin en kanlı filmlerinden biri, üstüne bir de çim biçme makinesi. Splatter komedisini absürtlüğün sınırına kadar götüren, mutlu bir çılgınlık.

## 6. Night Of The Living Dead (1968) — George A. Romero
![Night Of The Living Dead](https://images.bauerhosting.com/legacy/media/5eea/4675/f973/9fcb/f5a2/c1b6/6-night-of-the-living-dead.jpg?auto=format&w=1440&q=80)
Türü icat eden film. Siyah-beyaz, düşük bütçeli ve hâlâ acımasız; kuşatılmış bir çiftlik evini 60'lar Amerika'sının ırk ve otorite gerilimlerine dair bir laboratuvara çeviriyor. Finali sinemanın en soğuk son sahnelerinden.

## 5. Train To Busan (2016) — Yeon Sang-ho
![Train To Busan](https://images.bauerhosting.com/legacy/media/5eea/4768/d165/137a/f8d4/a004/train-to-busan-main.jpg?auto=format&w=1440&q=80)
Hızlı trende geçen bir salgın filmi olarak kusursuz kurgulanmış bir gerilim; ama gerçek gücü, karakterlerine harcadığı zamanda. Sınıf eleştirisiyle babalık melodramını aynı vagona bindiren, finalinde seyirciyi dağıtan modern klasik.

## 4. Shaun Of The Dead (2004) — Edgar Wright
![Shaun Of The Dead](https://images.bauerhosting.com/empire/2024/04/shaun-of-the-dead-doppelgangers-1.jpg?auto=format&w=1440&q=80)
Zombi komedisinin ölçütü: Romero'ya duyulan sevgi kadar keskin bir Britanya taşra hicvi. Wright'ın kurgu ritmi, plak fırlatma sahnesi ve "hepsi bittiğinde Winchester'da buluşalım" fikri türü kalıcı biçimde değiştirdi.

## 3. 28 Days Later (2002) — Danny Boyle
![28 Days Later](https://images.bauerhosting.com/empire/2025/01/28-days-later-cillian-murphy.jpg?auto=format&w=1440&q=80)
Boş Londra sahneleriyle açılan, dijital videonun pürüzünü estetiğe çeviren film, koşan ölüleri ana akıma taşıdı. Ama gerçek dehşet, salgının değil hayatta kalanların — özellikle askerî üsteki insanların — getirdiği bölümde.

## 2. Day Of The Dead (1985) — George A. Romero
![Day Of The Dead](https://images.bauerhosting.com/legacy/media/5eea/46cb/740f/850a/8cbd/456e/2-day-of-the-dead.jpg?auto=format&w=1440&q=80)
Romero'nun en karamsar ve en radikal filmi: bir yeraltı sığınağında bilim ile ordu birbirini yiyor, Bub adında bir zombi ise filmin en insani karakteri oluyor. Tom Savini'nin makyaj işleri hâlâ efsane.

## 1. Dawn Of The Dead (1978) — George A. Romero
![Dawn Of The Dead](https://images.bauerhosting.com/legacy/media/5eea/4719/740f/859d/40bd/4572/1-dawn-of-the-dead.jpg?auto=format&w=1440&q=80)
Zirvede tüketim toplumunun mezar taşı var: bir alışveriş merkezine sığınan hayatta kalanlar, cennet sandıkları yerin kendi tuzağı olduğunu keşfediyor. Hem tür sineması hem keskin bir hiciv; zombi filmini bir metafor makinesine dönüştüren film.

Kaynak: Empire — "The 25 Best Zombie Movies Of All Time".`,
    image: "https://images.bauerhosting.com/empire/2020/06/Best-Zombie-Movies.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    source: "Empire",
  },
  {
    slug: "2026-nin-en-iyi-10-oyunu",
    title: "2026'nın En İyi 10 Oyunu (Şimdilik)",
    excerpt: "\"Cairn\"den \"007 First Light\"a, \"Resident Evil Requiem\"den \"Saros\"a: Empire'ın yılın ilk yarısında öne çıkan 10 oyunu. 2026, sinema ile oyunun en çok kesiştiği yıl olmaya aday.",
    countdownBadge: "10 → 1 geri sayım",
    body: `2026 oyun dünyasında sinemanın yılı mı olacak? Yılın henüz yarısındayız ama James Bond yıllar sonra ilk kez tamamen yeni bir maceraya çıktı — "007 First Light" dünyanın en meşhur ajanının nasıl doğduğunu anlatıyor. "Resident Evil Requiem" beyazperdeye yakışır bir korku sunuyor, "Lego Batman" bile Tim Burton estetiğiyle yeniden doğuyor. Diğer adaylar ise John Hughes filmografisinden ya da "2001"in yapay zekâ paranoyasından besleniyor.

Yanı sıra "klasik zihniyetli" oyunlar da sahnede: Metroidvania'lar, bullet-hell roguelike'lar ve elbette "Pokémon". İşte Empire'ın sıralaması.

## 10. MIO: Memories In Orbit
![MIO: Memories In Orbit](https://images.bauerhosting.com/empire/2026/02/MIO-Memories-In-Orbit-Review.png?auto=format&w=1440&q=80)
Metroidvania takıntılılarının dışında kimse "MIO"dan bu kadarını beklemiyordu; oyun yılların en sürükleyici aksiyon platformcusu çıktı. Adını taşıyan robot olarak, yalnızca "Gemi" diye bilinen kolosal ve çürümeye terk edilmiş bir yapıda uyanıyor, keşfe bırakılıyorsunuz. Ortaya çıkan şey, hayatta kalmak için atılmış son bir kumar ve tek bir insan olmamasına rağmen fazlasıyla insani bir hikâye. 3B modellerin üzerine boyanmış suluboya görselleri, keskin dövüşü ve zorlu boss'larıyla türün yeni referans noktası.

## 9. Lego Batman: Legacy Of The Dark Knight
![Lego Batman: Legacy Of The Dark Knight](https://images.bauerhosting.com/empire/2026/06/LEGO-Batman-Legacy-Of-The-Dark-Knight.webp?auto=format&w=1440&q=80)
Bir Lego oyunu ne zaman Lego oyunu olmaktan çıkar? Gizliden gizliye "Arkham" serisinin altın günlerinden bu yana en iyi Batman oyunu olduğunda. TT Games, binlerce açılabilir eşya ve yüzlerce karakter yığını yerine iyi anlatılmış bir hikâyeyi, dar bir kadroyu ve gerçek mekanikleri seçiyor. Dövüşün nüansı var, yetenekler RPG mantığıyla açılıyor, Batmobil'le Gotham'ın şaşırtıcı ayrıntıdaki sokaklarında dolaşmak ise saf keyif.

## 8. Pokémon Pokopia
![Pokémon Pokopia](https://images.bauerhosting.com/empire/2026/03/Pokopia-Review.webp?auto=format&w=1440&q=80)
"Animal Crossing"in yaşam simülasyonunu alın, "Minecraft"ın baştan inşa edilebilir dünyalarıyla karıştırın, "Pokémon" kalıbına dökün. Sonuç: herkesin favori mor jölesi Ditto olarak, insanlığın terk etmek zorunda kaldığı gezegeni yeniden kurduğunuz sevimli bir kum havuzu oyunu. Keşfetmek, yüzlerce terk edilmiş Pokémon'u toplumun içine çekmek ve tüm biyomları tek başınıza şekillendirmek günler boyu geri getiriyor. Tek kusuru: hayatınızı çalacak.

## 7. Pragmata
![Pragmata](https://images.bauerhosting.com/empire/2026/04/pragmata-1.jpg?auto=format&w=1440&q=80)
Hem çılgın bir yapay zekânın ele geçirdiği ay üssünde geçen bilimkurgu destanı, hem de hırçın uzay tamircisi Hugh ile evlat edindiği robot kızı Diana arasındaki dokunaklı bir hikâye. Capcom'un gerçek dehası dövüşte: dünyanın ilk birinci şahıs nişancı–gerçek zamanlı bulmaca melezi. Hugh'la ateş ederken Diana'yla aynı anda düşmanları panel çevirme bulmacasıyla hack'leyip açık yaratıyorsunuz. Başka hiçbir şeye benzemiyor, üstelik yapay zekâ üzerine beklenmedik ölçüde düşündürücü.

## 6. Cairn
![Cairn](https://images.bauerhosting.com/empire/2026/07/Cairn.jpg?auto=format&w=1440&q=80)
"127 Hours" ya da "Touching the Void" sizi kaya yüzüne bakmaktan bile caydırdıysa, "Cairn" nelerden mahrum kaldığınıza ikna edebilir. Aava olarak 9.000 metrelik Kami Dağı'nı fethetmeye çalışıyor, Aava'nın uzuvlarını ayrı ayrı kontrol ederek kendi rotanızı çiziyorsunuz. The Game Bakers, tırmanışın teknik becerisini açlık, susuzluk ve yorgunluk yönetimiyle titizlikle dengeliyor. Gergin ve talepkâr ama tuhaf biçimde zen; cel-shading estetiğiyle eşsiz.

## 5. Mixtape
![Mixtape](https://images.bauerhosting.com/empire/2026/05/Mixtape.png?auto=format&w=1440&q=80)
Beethoven & Dinosaur'un müziğe, 90'lar gençliğine ve güzelce harcanmış bir ergenliğe yazdığı ağıt çok tartışıldı: kimileri "oyun değil" dedi, kimileri fazla doğrusal buldu. Haksız da değiller — ama unutulmaz. Müzik takıntılı Stacey Rockford olarak, lise bitmeden en yakın iki arkadaşıyla geçirdiği son günleri yaşıyorsunuz. Sihri tam burada: duygular, anılar, pişmanlıklar ve her ana özenle seçilmiş bir şarkı. Oynanabilir bir John Hughes filmi.

## 4. 007 First Light
![007 First Light](https://images.bauerhosting.com/empire/2026/06/007-first-light-1-1920x1080-1bcef6df295e.jpg?auto=format&w=1440&q=80)
Yeni bir sinema Bond'unu beklerken IO Interactive boşluğu takdire değer biçimde dolduruyor. Ian Fleming'in öykülerinden ilhamla, 26 yaşındaki James'in (Patrick Gibson) MI6'ya alınışını, eğitimini ve o ikonik 00 kodunu kazanışını anlatan bir "Bond Begins". Moneypenny, Q ve M ile ilk karşılaşmalar, "Hitman" yapımcılarından beklenen kusursuz nişancılık–sürüş–gizlilik dengesi ve Lana Del Rey imzalı bir açılış şarkısı.

## 3. Forza Horizon 6
![Forza Horizon 6](https://images.bauerhosting.com/empire/2026/05/Forza-Horizon-6-Review.png?auto=format&w=1440&q=80)
"Forza Horizon" uzun zamandır yarış oyunu sevmeyenler için de bir yarış oyunu. Altıncı halka bu kez Japonya'da: Tokyo'nun sokakları, kırsal huzur ve doğa harikaları yan yana. Japon otomobil kültürüne saygıyla yaklaşıyor — "Tokyo Drift"e ve "Initial D"ye göndermeler bol. 500'ün üzerinde detaylı araç ve yüzlerce yarışla motor tutkunları için türün zirvesi, diğerleri için ise bu geniş dünyada amaçsızca dolaşmanın meditatif keyfi.

## 2. Saros
![Saros](https://images.bauerhosting.com/empire/2026/05/Saros-Review.png?auto=format&w=1440&q=80)
Housemarque'ın "Returnal"ının teknik olarak devamı değil ama açıkça onun suretinde: zaman döngüsü ve roguelike mekanikleri korunuyor, gerisi neredeyse her açıdan iyileştiriliyor. Kurumsal uzay askeri Arjun Devraj (Rahul Kohli) olarak Carcosa'da kayıp "kolonicileri" araştırıyor, her seferinde ölüp gizemli biçimde diriliyorsunuz. Her denemede güçlenip biraz daha ileri gitmek bağımlılık yapan bir deneme-yanılma döngüsü kuruyor. Selefinden ayıran şey ise cilası: kusursuz hassasiyette dövüş.

## 1. Resident Evil Requiem
![Resident Evil Requiem](https://images.bauerhosting.com/empire/2026/02/Resident-Evil-Requiem-Review.jpg?auto=format&w=1440&q=80)
Capcom için bayrak yılı. "Pragmata" ve "Monster Hunter Stories 3"e rağmen hiçbir şey "Resident Evil Requiem"i tahtından indiremiyor. Dönen aksiyon kahramanı Leon S. Kennedy ile yeni gelen Grace Ashcroft arasında bölünen çift kollu bir korku hikâyesi: Grace annesinin yıllar önce öldürüldüğü otelde başlayan bir ölüm zincirini araştırıyor, Leon ise Umbrella yaratıklarının peşinde. Leon'u üçüncü şahıs, Grace'i birinci şahıs oynamanız öneriliyor; her iki halde de seri yıllardır bu kadar korkutmamıştı. Yer yer fotogerçekçi görselleriyle her köşeden korkmanıza neden oluyor — ve yılın şimdiye kadarki en iyi oyunu.

Kaynak: Empire — "The Best Games Of 2026… So Far".`,
    image: "https://images.bauerhosting.com/empire/2026/07/Games-Of-The-Year-2026.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    source: "Empire",
  },
];

// Deterministic shuffle so new lists spread across the interleaved homepage feed.
// New EW entries (indices 23-27) are interleaved near the top of the feed.
const _LIST_ORDER = [38, 34, 35, 32, 31, 37, 29, 28, 23, 36, 22, 0, 24, 17, 30, 33, 16, 25, 18, 14, 26, 19, 15, 27, 1, 20, 13, 7, 21, 3, 11, 5, 9, 2, 12, 6, 4, 8, 10];






export const LISTS: ListItem[] = _LIST_ORDER
  .filter((i) => i < _LISTS_RAW.length)
  .map((i) => _LISTS_RAW[i]);

export function getList(slug: string) {
  return LISTS.find((l) => l.slug === slug);
}
