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

const _LISTS_RAW: ListItem[] = [
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
    image: "https://ew.com/thmb/CoqXR_xQBeqcojP4V0Gt0SHs3qc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-movies-sofar-2026-2f3913f606af48f2b946e2802d15cceb.jpg",
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
    image: "https://ew.com/thmb/OWWU1fEGv3QoNEQAG4y7TL1jJ0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thrillers-4739c362cdcd41ca930dfe5bc361c97f.jpg",
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
    image: "https://ew.com/thmb/rx4q94jgpMeYpKN2D1EmwC2Rw5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EW-Best-TV-Shows-SoFar-2026-0bb8e8f6f7b4444280230587426e29dd.jpg",
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
    image: "https://ew.com/thmb/1VfMnMHiGOcyw0SRobYIfnufA2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/prince-3a3609373b9b4cc8aa04a06e03f09bdc.jpg",
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
    image: "https://ew.com/thmb/BhJIB3fj9IqLUu8FY1RJWfTmZYA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/deaths-tout-56e249d36d5b47efbc4b4aad82404316.jpg",
    source: "Entertainment Weekly",
  },
];

// Deterministic shuffle so new lists spread across the interleaved homepage feed.
const _LIST_ORDER = [5, 8, 1, 9, 3, 7, 0, 10, 4, 2, 6];
export const LISTS: ListItem[] = _LIST_ORDER
  .filter((i) => i < _LISTS_RAW.length)
  .map((i) => _LISTS_RAW[i]);

export function getList(slug: string) {
  return LISTS.find((l) => l.slug === slug);
}
