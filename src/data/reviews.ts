import yoteiCover from "@/assets/ghost-of-yotei-cover.webp.asset.json";
import yoteiCharacters from "@/assets/ghost-of-yotei-characters.webp.asset.json";
import yoteiSekigahara from "@/assets/ghost-of-yotei-sekigahara.webp.asset.json";
import gameRe from "@/assets/game-re-requiem.jpg";
import gameRe2 from "@/assets/game-re-requiem-2.jpg";
import gameCrimson from "@/assets/game-crimson-desert.jpg";
import gameCrimson2 from "@/assets/game-crimson-desert-2.jpg";
import gameSpy from "@/assets/game-spy-first-light.jpg";
import gameSpy2 from "@/assets/game-spy-first-light-2.jpg";
import miasma1 from "@/assets/miasma-1.jpg";
import miasma2 from "@/assets/miasma-2.jpg";
import miasma3 from "@/assets/miasma-3.jpg";
import miasma4 from "@/assets/miasma-4.jpg";
import miasma5 from "@/assets/miasma-5.jpg";
import lastOneRoadAsset from "@/assets/last-one-road.jpg.asset.json";
import glastonburyImg from "@/assets/review-glastonbury.jpg";
import strungImg from "@/assets/review-strung.jpg";
import missionImg from "@/assets/review-mission.jpg";
import littleBrotherImg from "@/assets/review-little-brother.jpg";
import jackassImg from "@/assets/review-jackass.jpg";
import goodLuckAsset from "@/assets/good_luck.jpg.asset.json";
import starCityAsset from "@/assets/star_city.jpg.asset.json";
import avatar2Asset from "@/assets/avatar2.jpg.asset.json";
import boroughAsset from "@/assets/borough.jpg.asset.json";
import capeFearAsset from "@/assets/cape_fear.jpg.asset.json";
import projectHailMaryAsset from "@/assets/project_hail_mary-wide.jpg.asset.json";
import aUsefulGhostAsset from "@/assets/ausefulghost.jpg.asset.json";
import animalFarmAsset from "@/assets/animalfarm.jpg.asset.json";
import theDayShereturnsAsset from "@/assets/thedayshereturns.jpg.asset.json";
import theyFightAsset from "@/assets/theyfight.jpg.asset.json";
import deepWaterAsset from "@/assets/deepwater.jpg.asset.json";

import possessionAsset from "@/assets/posession.jpg.asset.json";
import sterlingPointAsset from "@/assets/sterlingpoint.jpg.asset.json";

import lanternsCover from "@/assets/lanterns-cover.jpg.asset.json";
import lanternsG1 from "@/assets/lanterns-g1.jpg.asset.json";
import lanternsG2 from "@/assets/lanterns-g2.jpg.asset.json";
import lanternsG3 from "@/assets/lanterns-g3.jpg.asset.json";
import lanternsG4 from "@/assets/lanterns-g4.jpg.asset.json";
import theUprisingAsset from "@/assets/the-uprising.jpg.asset.json";
import residentEvilCoverAsset from "@/assets/resident-evil-cover.jpg.asset.json";
import residentEvilStill1Asset from "@/assets/resident-evil-still-1.jpg.asset.json";
import residentEvilStill2Asset from "@/assets/resident-evil-still-2.jpg.asset.json";
import residentEvilStill3Asset from "@/assets/resident-evil-still-3.jpg.asset.json";
import residentEvilStill4Asset from "@/assets/resident-evil-still-4.jpg.asset.json";
import residentEvilStill5Asset from "@/assets/resident-evil-still-5.jpg.asset.json";
import hopeReviewAsset from "@/assets/hope-review.jpg.asset.json";
import godzillaCoverAsset from "@/assets/godzilla-minus-zero-43.jpg.asset.json";
import godzillaAoyamaAsset from "@/assets/godzilla-minus-zero-45.jpg.asset.json";
import godzillaAttackAsset from "@/assets/godzilla-minus-zero-46.jpg.asset.json";
import godzillaMurakamiAsset from "@/assets/godzilla-minus-zero-11.jpg.asset.json";
import godzillaNodaAsset from "@/assets/godzilla-minus-zero-12.jpg.asset.json";
import godzillaReturnAsset from "@/assets/godzilla-minus-zero-17.jpg.asset.json";
import godzillaMizushimaAsset from "@/assets/godzilla-minus-zero-13.jpg.asset.json";
import galacticRacerCover from "@/assets/galactic-racer-cover.jpg.asset.json";
import galacticRacerTrack from "@/assets/galactic-racer-track.jpg.asset.json";
import galacticRacerPodrace from "@/assets/galactic-racer-podrace.jpg.asset.json";
import heartOfTheBeastCover from "@/assets/heart-of-the-beast-cover.jpg.asset.json";
import heartOfTheBeastStill from "@/assets/heart-of-the-beast-still.jpg.asset.json";

export type Review = {
  slug: string;
  origTitle: string;
  title: string;
  excerpt: string;
  rating: string;
  body: string;
  image: string;
  videoUrl?: string;
  imdbRating?: string;
  gallery?: string[];
  source?: string;
  homepagePlacement?: "lower";
};

export const REVIEWS: Review[] = [
  {
    slug: "ghost-of-yotei-complete-edition-review",
    origTitle: "Ghost of Yōtei Complete Edition",
    title: "Ghost of Yōtei Complete Edition: Yeni Hikâye ve Most Wanted Moduyla Güçlü Bir Dönüş",
    excerpt: "Echoes of Sekigahara, Atsu’nun geçmişine yeni bir pencere açarken Most Wanted modu dövüş sistemini kısa, yoğun ve tekrar oynanabilir mücadelelerle öne çıkarıyor.",
    rating: "Olumlu",
    image: yoteiCover.url,
    source: "Final Weapon — October 23, 2026 — https://finalweapon.net/2026/10/23/ghost-of-yotei-complete-edition-review/",
    homepagePlacement: "lower",
    body: `**Ghost of Yōtei Complete Edition**, yalnızca ek içerikleri aynı pakete toplayan bir sürüm olarak değil, ana oyunun güçlü yanlarını yeniden öne çıkaran bir genişletme olarak dikkat çekiyor. 23 Ekim tarihli incelemenin odağında iki yenilik var: **Most Wanted** adlı roguelike mod ve **Echoes of Sekigahara** hikâye genişlemesi. Biri dövüşlerin temposunu değiştirirken diğeri Atsu’nun yolculuğuna yeni anlamlar katıyor.

Bu yazı, yayımlanan PS5 incelemesindeki değerlendirmeleri derleyen bir içeriktir; bağımsız bir oynanış testine dayanmaz. İncelemenin genel yaklaşımı olumlu olsa da yeni hikâyenin kısa oluşu, paketin en belirgin çekincesi olarak öne çıkıyor.

## Most Wanted: Kısa turlar, yoğun mücadeleler

Most Wanted’da düşman dalgalarını aşarak Yōtei Six üyelerinden biriyle karşılaşmaya ilerliyorsunuz. Her aşamada seçilen güçlendirmeler ve ara karşılaşmaların ardından açılan silahlar, aynı dövüş sisteminden farklı stratejiler çıkarmayı mümkün kılıyor. Başarısız bir denemede bile o ana kadar kazanılan para korunuyor; kalıcı geliştirmeler bir sonraki tur için yeni seçenekler sunuyor.

Dallanan rotalardan çok, arka arkaya gelen karşılaşmalara dayanan yapı bir arcade mücadele merdivenini andırıyor. Kısa turlar ve hızlı yeniden başlama, modun ritmini diri tutuyor. Kılıç darbelerini savuşturmak, oklardan kaçmak ve sıra dışı avantajları birleştirmek, ana oyunun dövüşlerinin neden etkili olduğunu hatırlatıyor.

![Most Wanted modunda Ghost of Tsushima’nın kahramanı Jin Sakai](${yoteiCharacters.url})

## Atsu’dan Jin Sakai’ye dört farklı yaklaşım

Başlangıçta yalnızca Atsu ile oynanırken ilerleme sayesinde Oyuki, Nagato ve **Ghost of Tsushima**’dan Jin Sakai açılıyor. Karakterlerin yetenekleri farklı oyun tarzlarını destekliyor: Nagato uzaktan saldırılara ve patlayıcı oka yaslanırken Jin’in duruşları, çeşitli düşmanlara karşı esnek bir yaklaşım sağlıyor.

İlk altı bölüm sonu karşılaşmasının ardından daha yüksek zorluklar ve kozmetik ödüller devreye giriyor. Bu tekrar oynanabilirlik, Most Wanted’ı tek seferlik bir yan etkinlikten daha değerli hale getiriyor. Bazı kostümler başka PlayStation oyunlarına göndermeler de içeriyor.

## Echoes of Sekigahara: İntikamın ötesindeki hesaplaşma

Yeni hikâye, ana oyunun olayları sürerken Atsu’nun geçmişinden Nagato ile yeniden karşılaşmasına odaklanıyor. Sekigahara Savaşı’nın bıraktığı izler, iki karakterin eski yaraları ve yeniden güven kurma çabası, anlatının merkezine yerleşiyor. Böylece hikâye yalnızca intikamın bedelini değil, hırsın ve saplantının insanları nasıl şekillendirdiğini de tartışıyor.

İncelemede özellikle Atsu ile Nagato arasındaki ilişkinin ana oyunun anlatısını zenginleştirdiği vurgulanıyor. Karakterlerin geçmiş kararlarıyla yüzleşmesi, önceki çatışmaların anlamını genişletiyor; yeni bölüm, ayrı bir macera olmanın yanında mevcut hikâyeyi yeniden değerlendirmeye de alan açıyor.

![Echoes of Sekigahara genişlemesinde Atsu ile Nagato’nun karşılaşması](${yoteiSekigahara.url})

## Yeni yetenekler, sınırlı süre

Genişleme; aynı anda üç hedefe ok atma, ağır silahları geçici olarak kullanma ve düşman oklarını yakalayıp geri gönderme gibi yetenekler ekliyor. Yeni bir bölge, kozmetikler ve Watanabe Mode için ek müzikler de paketi tamamlıyor. Buna karşılık yenilikler bütünüyle farklı bir dövüş sistemi kurmuyor; mevcut yapıyı tazeleyen eklemeler olarak kalıyor.

En önemli sınırlama hikâyenin süresi: ana görevler bir öğleden sonra tamamlanabilecek kadar kısa, yan görevler ise birkaç saat daha ekliyor. Daha uzun bir macera bekleyenler için bu önemli bir not. Paketin değerini artıran unsur, hikâyenin uzunluğundan çok Most Wanted’ın tekrar oynanabilirliğiyle birlikte sunduğu bütünlük.

## Kimler için anlamlı bir geri dönüş?

İncelemede mevcut oyuncular için **15 dolarlık yükseltme**, yeni oyuncular için **70 dolarlık paket** üzerinden değerlendirme yapılıyor; bunlar yerel mağaza fiyatı veya güncel Türkiye fiyatı değildir. Ana oyunun dövüşlerini seven ama geri dönmek için yeni bir neden arayanlar, Most Wanted’da güçlü bir teşvik bulabilir. Hikâyeye önem verenler içinse Echoes of Sekigahara’nın katkısı, kısa süresine rağmen dikkat çekici.

Genel tablo, iki eklemenin birbirini tamamladığı yönünde: Most Wanted mekanikleri yeniden parlatıyor, Echoes of Sekigahara ise karakterlerin hikâyesini derinleştiriyor. **Değerlendirmenin platformu PlayStation 5**; burada bir PC sürümü duyurusu veya PC performans testi aktarılmıyor.`,
  },
  {
    slug: "resident-evil-requiem-game-review",
    origTitle: "Resident Evil Requiem",
    title: "‘Resident Evil Requiem’ İncelemesi: Serinin Zirvesinde Geçen Dopdolu On Saat",
    excerpt: "Capcom; bulmacaları, korkuyu, aksiyonu ve Leon S. Kennedy’yi son derece ölçülü bir hayatta kalma korku oyununda bir araya getiriyor.",
    rating: "92/100",
    image: gameRe,
    body: `Yıllardır her biri farklı bir alanda parlayan Resident Evil oyunlarının ardından Capcom, hepsinin en iyi yanlarını bir araya getirmeye soyundu. Bulmacaları, korkuyu, aksiyonu ve Leon S. Kennedy’yi buluşturan **Resident Evil Requiem**, bunu başarmakla kalmıyor; üstelik yaklaşık **10 saatte**yapıyor.

Oyuncular Leon ile seriye yeni katılan**Grace Ashcroft** arasında geçiş yapıyor. Grace’in bölümleri ağır tempolu, gergin ve gerçekten korkutucu; Leon’un bölümleri ise son yeniden yapımlardaki son derece tatmin edici silahlı çatışmaları sunuyor.

![Resident Evil Requiem’de Leon enfektelerle karşı karşıya](${gameRe2})

## Boşa harcanan tek an yok

Bu saatlerdeki her şey gerekli hissettiriyor: gereksiz getir götür görevleri de uzayıp giden gizlilik sekansları da yok. Her bulmaca, koridor ve aksiyon patlaması titizlikle kurgulanmış. On saat aslında seri için alışıldık bir süre; Resident Evil 7 de aşağı yukarı bu uzunlukta, Village ve RE2 yeniden yapımı ise yaklaşık 12 saat sürüyor. 70 dolarlık oyunda kalite bir an olsun düşmüyor.

## Küçük pürüzler

Bazı bölüm sonu canavarı mücadeleleri tekdüze, birkaç hedef de tekrara düşüyor; ancak bunlar yılların en eksiksiz Resident Evil oyununda ufak kusurlar olarak kalıyor. PC’de korku sevenlerin mutlaka oynaması gereken bir yapım.

**Bilmeniz gerekenler:** Çıkış tarihi 27 Şubat 2026 · Geliştirici/Yayıncı Capcom · Fiyat 70 $ / 60 £ · Tek oyunculu.`,
  },
  {
    slug: "crimson-desert-game-review",
    origTitle: "Crimson Desert",
    title: "‘Crimson Desert’ İncelemesi: Her Şeye Evet Diyen, Baş Döndürücü Bir Fantastik Destan",
    excerpt: "Pearl Abyss’in devasa açık dünya rol yapma oyunu, büyülediği kadar da sinir bozuyor; oyun sistemlerini kurcalamayı sevenler için biçilmiş kaftan.",
    rating: "80/100",
    image: gameCrimson,
    body: `**Crimson Desert**, video oyunlarının “Evet, bir de…” diyen örneği: Akla gelebilecek hemen her mekanik ve fikirle tıka basa dolu, keşfedilecek şeylerle baş döndüren bir okyanus. 75 saatin ardından bile keşfedilmeyi bekleyen daha çok şey olduğu hissini veriyor.

Alec Newman’ın seslendirdiği, Greymane grubundan sert mizaçlı İskoç paralı asker **Kliff**’i yönetiyorsunuz. Rakip Black Bears’ın pususunda boğazı kesilen, yoldaşları **Pywel** kıtasının dört bir yanına dağılan Kliff, eski müttefiklerini yeniden bir araya getirip yenilerini kazanarak her şeye yeniden başlamak zorunda.

![Crimson Desert’te Pywel boyunca at sürerken](${gameCrimson2})

## MMO DNA’sı

Pearl Abyss’in 12 yıllık MMO deneyimi her yerde kendini gösteriyor: anlaşılması güç sistemler, muazzam karakter geliştirme çeşitliliği ve vasat görevler. Dövüş sistemi sürekli gelişiyor, bulmacalar özenle tasarlanmış ve dünya, tek oyunculu bir oyun için yaratılmış en görkemli dünyalardan biri.

## Tökezlediği noktalar

Hikâye anlatıldığı hâliyle sürükleyici değil, ara sahnelerin temposu aksıyor ve bazı eskimiş tasarım tercihleri oyuncuları bunaltabilir. Ekipman depolama sistemi ile hataların da elden geçirilmesi gerekiyor.

Yine de sabırlı oyuncular için büyüleyici bir yolculuk; varılan yer beklentileri karşılamasa bile.

**Bilmeniz gerekenler:** Çıkış tarihi 19 Mart 2026 · Geliştirici/Yayıncı Pearl Abyss · Fiyat 70 $ / 55 £ · PC, PS5, Xbox Series X|S.`,
  },
  {
    slug: "007-first-light-game-review",
    origTitle: "007 First Light",
    title: "‘007 First Light’ İncelemesi: GoldenEye’dan Bu Yana En İyi James Bond Oyunu",
    excerpt: "IO Interactive, Hitman’in sabır gerektiren, oyuncuya özgürlük tanıyan tasarımını genç bir Bond’la buluşturuyor: Kendinden emin, sinematik, 25 saatlik bir casusluk gerilimi.",
    rating: "9/10",
    image: gameSpy,
    body: `Bond oyunu hasreti sona erdi. **007 First Light**, GoldenEye’dan bu yana en kendinden emin, en sinematik ve vizyonunu en iyi hayata geçiren James Bond oyunu; lisansına, oyuncularına ve oyun mecrasına saygı duyan, **25 saatlik** tek oyunculu bir casusluk gerilimi.

**Patrick Gibson’ın**canlandırdığı 26 yaşındaki Bond, karakterin on yıllardır gördüğümüz en inandırıcı video oyunu yorumu.**Gemma Chan**ve**Lenny Kravitz** de güçlü performanslarıyla ona eşlik ediyor. Lana Del Rey’in tema şarkısı ve Hans Zimmer’ın müzikleri, serinin hep peşinde olduğu sinematik tonu yakalıyor.

![007 First Light’ta Bond, Hong Kong’da bir çatıda](${gameSpy2})

## Bond dokunuşlu bir oyun alanı

IO Interactive’in Glacier Engine üzerinde kurduğu gizlilik ve kılık değiştirme döngüsü buraya harika uyarlanmış. Silahlı çatışmalar ölçülü, sinematik ve belirleyici. Iceland, Marrakesh, Vienna, Hong Kong, Pyrenees ve South of France boyunca dünyayı dolaşan hikâye, her bölüme ayrı bir doku kazandırıyor. Vienna opera binası ile Hong Kong kulesi görevleri, stüdyonun en iyi bölümleri arasında.

## Verilen tavizler

Hitman kadar serbest değil: kamusal alanlar çoğunlukla yalnızca gözlem yapmaya izin veriyor ve uygunsuz davranışlar görevin doğrudan başarısız olmasına yol açabiliyor. Düşman yapay zekâsı zaman zaman tökezliyor, görev yapısı da daha öngörülebilir. Ama mikro ödeme ya da canlı servis kancaları olmadan, eksiksiz ve özenle parlatılmış bir paket sunuyor.`,
  },
  {
    slug: "heart-of-the-beast-review",
    origTitle: "Heart of the Beast",
    title: "‘Heart of the Beast’ İncelemesi: Brad Pitt ve Köpeği Alaska’nın Vahşi Doğasına Meydan Okuyor",
    excerpt: "David Ayer’ın hayatta kalma draması, duygusal odağını yaralı bir eski askerle sadık askerî köpeği arasındaki bağda buluyor.",
    rating: "Recommended",
    image: heartOfTheBeastCover.url,
    body: `Emekli bir asker, köpeği ve acımasız bir vahşi doğa: *Heart of the Beast* önermesini basit tutuyor, ardından iki başrol oyuncusu arasındaki güven konusunda şaşırtıcı derecede etkileyici bir hikaye buluyor. Yönetmen David Ayer, bir sonraki saatte hayatta kalmanın eğitim kadar arkadaşlığa da bağlı olduğu kalabalık aksiyondan daha samimi bir tehlikeyi tercih ediyor.

Brad Pitt, emekli askeri çalışma köpeği Odin ile Alaska dağlarına kaçan eski bir US Army Special Forces subayı olan James'yi canlandırıyor. Her ikisi de hizmetlerinin hatırlatıcılarını taşıyor: James yalnızlık arıyor, Odin ise protez bacak ve kalıcı travmayla yaşıyor. James'nin uçağının kontrolünde kalp krizi geçirmesi ve yardımdan uzakta kaza yapmasıyla rutin yolculukları eve dönüş mücadelesine dönüşür.

Film, onu oraya getiren olaylara dönmeden önce Odin'nin uzak bir yolda tek başına gösterilmesiyle başlıyor. O noktaya geldiğini bilmek gerilimi ortadan kaldırmaz. Bunun yerine soru, bu çiftin yol boyunca neye katlanması gerektiği ve birbirlerini hayatta tutup tutamayacakları haline geliyor.

![James ve Odin Alaska'nın vahşi doğasını birlikte geçiyor](${heartOfTheBeastStill.url})

Nehirler, yaban hayatı ve engebeli arazi, hayatta kalma filminden beklenen engelleri oluşturuyor, ancak aksiyon işe yarıyor çünkü ne James ne de Odin bu yolculuğa hazır değil. Odin, James çöktüğünde yardım etmeye çalışır; Kazadan sonra James yaralı arkadaşıyla ilgileniyor. Ayer tekrar tekrar bu koruma alışverişine odaklanıyor ve tanıdık tehlikelere bile kişisel bir maliyet getiriyor.

Pitt, James'nin yalnız mücadelesini yaşanmış gibi hissettirirken, Odin'yi oynayan German Shepherd Uber, filmi bir hileye indirgenmeden sabitliyor. Film zaman zaman köpeğin iç yaşamını hayal etmeye çok fazla eğiliyor, ancak çoğunlukla onun hareketinin ve dikkatinin hikayeyi anlatmasına izin veriyor. J.K. Simmons küçük bir destekleyici rolde görünüyor; filmin kalbi tek başına olan adam ve köpek olmaya devam ediyor.

Vahşi doğadaki rota tahmin edilebilir olabilir, ancak *Heart of the Beast*, ikna edici bir şekilde paylaşılan bir çile yoluyla hissini kazanıyor. En güçlü anları doğayı fethetmekle ilgili değil. Birbirlerini geride bırakmayı reddeden iki eski ortak hakkındadırlar.`,
  },
  {
    slug: "star-wars-galactic-racer-review",
    origTitle: "Star Wars: Galactic Racer",
    title: "‘Star Wars: Galactic Racer’ İncelemesi: Çok Çok Uzak Bir Galaksiye Dönmenin En Hızlı Yolu",
    excerpt: "Fuse Games, podracing heyecanını riskli hız takviyeleri, çeşit çeşit araç ve her kazanın önem taşıdığı bir hikâye moduyla müthiş bir arcade yarış oyununa dönüştürüyor.",
    rating: "Recommended",
    image: galacticRacerCover.url,
    body: `*Star Wars: Galactic Racer*'nin galaksisini heyecanlı kılmak için ışın kılıcına ihtiyacı yok. Önceki filmlerin pod yarışı sekansının ardındaki heyecan verici fikri alıp hızı, gürültüsü ve tehlikeli makineleri etrafında bütün bir yarış oyunu inşa ediyor. Sonuç, pistin neredeyse okunamayacak kadar hızlı olduğu ve yıpranmış bir aracı sağlam tutmanın başlı başına bir zafer gibi hissettirdiği durumlarda en iyisidir.

Hikaye, bir zamanlar zengin ailesi Shade'nin ana dünyasını ele geçiren şampiyon Kestar Bool'ye meydan okumak için galaktik bir lige giren yarışçı Shade'yi konu alıyor. Bu rekabet, her yarışı franchise tarihinde bir derse dönüştürmeden kampanyaya bir hedef sağlıyor. Önemli olan mitoloji değil aksiyondur.

Araç seçimi rekabete dokusunu kazandırır. Landspeeder'lar güvenli sürüklenmeyi ödüllendirir, skimmer'lar dar virajları farklı şekilde alır ve speeder bisikletleri dayanıklılığı keskin hızlanmayla değiştirir. Pod yarışçıları hızı çok daha ileri iterek farklı türde bir cesaret isterler. Her makinenin ne zaman itilebileceğini ve ne zaman geri çekileceğini öğrenmek, bir virajdan geçen en hızlı çizgiyi ezberlemekten daha tatmin edicidir.

![Uzak bir Galactic Racer parkurunda bir yarış gemisi yanaşıyor](${galacticRacerTrack.url})

Yükseltme başka bir risk katmanı ekler. Geleneksel bir turbo anında patlama sağlarken, daha güçlü Ramjet yanlış kullanıldığında aracınıza zarar verebilir. Tehlikelerle ve agresif rakiplerle dolu pistlerde bu ayrım, yarışların rutin hale gelmesini engelliyor. En iyi anlar, iddialı bir kısayolun, dar bir aralığın ve neredeyse bitmiş bir motorun bir anda karar verilmesini gerektirdiğinde gelir.

Ana kampanya, yarışları bir dizi koşu olarak çerçeveliyor. Galibiyetler parça ve yükseltmeleri beraberinde getirir; ağır hasar makinenin bir kenara çekilmesine neden olurken, çok fazla arıza yeni bir başlangıca zorlar. Sponsorlar ve rakip yarışçılar sezonu daha da şekillendiriyor. Bu yapı, yakın bir bitiş meselesidir çünkü tek bir sıralama pozisyonundan daha fazlasını etkiler, ancak tekrarlanan yaya araları yarışlar arasındaki ivmeyi yavaşlatır.

Shade'in kampanyasının ötesinde atari etkinlikleri, zamana karşı denemeler ve daha kısa karakter senaryoları dahil yapılacak daha çok şey var. Pod yarışı meraklıları, özel pod yarışı aksiyonunun çoğunun ana hikayeden ziyade bu ekstra modlarda yaşandığını bilmelidir. Çevrimiçi rekabet, yarışmanın başka bir yolunu sunar, ancak uzun vadeli çekiciliği, lansmandan sonra bir araya gelen topluluğa bağlıdır.

![Pod yarışçıları Star Wars: Galactic Racer'de su üzerinde yarışıyor](${galacticRacerPodrace.url})

Oyunun kirli görsel detayları ve güçlü motor sesi, araçlarına somut bir kişilik kazandırıyor. Daha da önemlisi, yüksek hızlı aksiyon akıcı kalır. *Galactic Racer* ritmini bulduğunda, duvara yapılan her sürtünme ve mükemmel zamanlanmış her güçlendirme bir sonraki turun karşı konulmasını zorlaştırır. Yaya olarak yapılan esnemeler daha az zorlayıcıdır, ancak pistte bu alışılmadık derecede kendine güvenen ve cömert bir atari yarışçısıdır.

**Oyun ayrıntıları:** Fuse Games tarafından geliştirildi; Secret Mode. PlayStation tarafından yayınlandı 5, Xbox Series X |S ve PC. Release tarih: 6 Ekim 2026. Resimler: Fuse Games / Lucasfilm Games. [ Orijinal inceleme ]( https://kotaku.com/star-wars-galactic-racer-the-kotaku-review-2000739105 ).`,
  },
  {
    slug: "godzilla-minus-zero-review-takashi-yamazaki",
    origTitle: "Godzilla Minus Zero",
    title: "‘Godzilla Minus Zero’ İncelemesi: Takashi Yamazaki’nin Görkemli Devam Filminde Godzilla ile King Ghidorah Karşı Karşıya",
    excerpt: "Takashi Yamazaki, Godzilla Minus One’ın merkezindeki aileyi geri getirerek sinema canavarlarını daha büyük ve daha vahşi bir çatışmada buluşturuyor; üstelik onların ayakları altındaki insanları da unutmuyor.",
    rating: "4.5/5",
    image: godzillaCoverAsset.url,
    body: `*Godzilla Minus One*'nin başarısı sadece devasa bir yaratığı yeniden korkutucu hale getirmek değildi. Takashi Yamazaki, enkazın kişisel bir his uyandırmasını sağladı ve parçalanmış her sokağı hâlâ savaştan sonra bir hayat kurmaya çalışan insanlara bağladı. Onun devamı olan *Godzilla Minus Zero*, bu samimi ölçeği unutmadan tuvali genişletiyor. Bu sefer Godzilla yalnız değil: Hikayeye King Ghidorah giriyor ve çarpışmaları savaş sonrası Japonya'yı şaşırtıcı bir gösteriye sahne ediyor.

1949'da geçen film, önce Ghidorah'nin Matsumoto. At'ye saldırmasıyla açılıyor. Canavarın tek kafası var ama onun gelişi şimdiden şehri kaosa sürükler. Yıkım sadece uzaktan değil, Hiroşima'dan sağ kurtulan ve bu olağanüstü yaratıkları inceleyen Professor Murakami'nin gözlerinden de görülüyor. Yamazaki, kamera, onların altında tek bir kişinin ne kadar küçük olduğunu hissetmemize izin verdiğinde canavarların daha da rahatsız edici hale geldiğini anlıyor.

![Godzilla Minus Zero : şehrin üzerine bir canavar iniyor](${godzillaAttackAsset.url})

Son filmin sonunda Godzilla'nin görünürdeki yıkımı çok az güvenlik sağladı. Tehdit büyüdükçe Kenji Noda çaresiz bir tepkinin sorumluluğunu üstleniyor: iki devi aynı yere çekin, savaşmalarına izin verin ve sonra hangisi hayatta kalırsa onun işini bitirmeye çalışın. Kağıt üzerinde basit görünüyor. Ekranda plan, hataya neredeyse hiç yer vermeyen insanlar tarafından verilen son derece tehlikeli kararların bir zincirine dönüşüyor.

![Kenji Noda yeni canavar tehdidine verilen yanıtı yönlendiriyor](${godzillaNodaAsset.url})

Ghidorah özellikle canlı bir eklentidir. Ejderhaya benzeyen kafaları turuncu şimşekler saçarken, devasa kanatları her hava karşılaşmasını ölçek ve hareket açısından çılgın bir mücadeleye dönüştürüyor. Yaratığın üzerine gönderilen uçakların yer aldığı bir sahne, başka bir filmin doruk noktası gibi oynuyor; burada sadece Godzilla'nin geri dönüşünün başlangıcı var. Yamazaki'nin görsel efekt koreografisi, canavarlara birbirinin yerine geçebilir dijital rakipler gibi davranmak yerine, hem ağırlık hem de karakter kazandırıyor.

![Godzilla Minus Zero'deki Professor Murakami](${godzillaMurakamiAsset.url})

Bir o kadar da önemlisi, film Kōichi Shikishima'ye geri dönüyor; Noriko ve evlatlık kızları Akiko. Their ailesi ilk filmin dehşetinden kurtuldu, ancak hayatta kalmak onları bu terörün sonuçlarından kurtarmadı. Kōichi kokpite doğru çekilirken Noriko'nun Godzilla'nin önceki saldırısıyla bağlantısı ona gelişen krizde bir rol veriyor. Bu insani kazıklar, gösterinin yok ettiği dünyadan özgürce süzülmesini engelliyor.

![Shiro Mizushima, 1949'da geçen devam filmiyle geri dönüyor](${godzillaMizushimaAsset.url})

Yardımcı oyuncu kadrosu bu insanın bakış açısını genişletiyor. Noda'nın endişeli kararlılığı operasyona gergin enerji verir. Murakami, bilimsel gizeme savaş anılarını hatırlatıyor; meteorolog Makoto Aoyama ise yaratıkları çevreleyen fırtınalardaki desenleri görüyor. Aksiyonu kesintiye uğratmak yerine, bu karakterler filme hangi canavarın kazanacağı sorusunun ötesinde tehlikede olan bir şey veriyor.

![Godzilla Minus Zero'deki Meteorologist Makoto Aoyama](${godzillaAoyamaAsset.url})

When Godzilla sonunda Ghidorah ile buluşuyor, Yamazaki bir boyut yarışmasından daha fazlasını sahneliyor. Savaş, bir efsaneye duyulan saygıyı ve gerçek bir şehrin başına gelen bir felaketin aciliyetini taşıyor. Yıkımı hem güzel bir şekilde bestelenmiş hem de gerçekten endişe verici hissettirme becerisi hâlâ serinin en büyük varlığıdır. Son bölüm zaman zaman daha gizemli olay örgüsünü birbirine karıştırıyor, ancak momentum ve duygusal yatırım filmi devam ettiriyor.

![Godzilla, Takashi Yamazaki's devam filminde yıkımın ortasında geri dönüyor](${godzillaReturnAsset.url})

Sonuç, insanlarını seyirciye indirgemeden daha büyük düşünen bir devam filmi. *Godzilla Minus Zero*, izleyicilere amaçladıkları devasa hesaplaşmayı yaşatıyor ve ardından kimin onun gölgesinde yaşaması gerektiğini bize hatırlatarak bu çatışmayı önemli kılıyor.

**Film ayrıntıları:** Yazan ve yöneten Takashi Yamazaki; Başrollerinde Ryunosuke Kamiki , Minami Hamabe , Hidetaka Yoshioka , Min Tanaka ve Masami Nagasawa. Premiered'nin yer aldığı North American için 2026 New York Film Festival. Set 6 Kasım 2026'da vizyona girecek.`,
  },
  {
    slug: "hope-review-na-hong-jin",
    origTitle: "Hope",
    title: "‘Hope’ İncelemesi: Na Hong-jin’in Canavar Filmi, Silahların Susmadığı Bir Aksiyon ve Müstehcen Mizah Cümbüşü",
    excerpt: "Na Hong-jin; ustalıklı aksiyon sahnelerini, yer yer aksayan yaratık efektleri ve 160 dakikaya yayılan dağınık anlatımıyla buluşturan devasa, dizginlenemez bir Kore canavar filmiyle dönüyor.",
    rating: "3.5/5",
    image: hopeReviewAsset.url,
    body: `*The Wailing*'den sonraki on yıl boyunca, Na Hong-jin'nin bir sonraki filmi hakkındaki her yeni söylenti bir olayın ağırlığını taşıyordu. *Hope* nihayet tamamen görünür bir baskıyla geliyor: Devasa, dağınık, çok komik ve uzun süre boyunca heyecan verici derecede canlı. Film, 160 dakika boyunca en iyi fikirlerini sürdüremeyebilir, ancak en güçlü pasajları, bir tiyatroyu bir anda öne eğdiren türden aksiyon filmi yapımıdır.

Ortam Hope Harbor, casuslar ve kara mayınlarıyla ilgili eski uyarıların hala manzarada yer aldığı, kuzeye yeterince yakın, eski püskü bir South Korean sahil kasabası. Hikaye, düz bir alanda sakatlanmış bir ineğin ve yeri doldurulamaz derecede komik bir Hwang Jung-min tarafından canlandırılan Police Chief Bum-seok'nin vahşeti anlamlandırmaya çalışmasıyla başlıyor. Yerel avcılar bir kaplanın Kuzey'den geldiğini öne sürüyor ancak film, tehdidin daha tuhaf, daha büyük ve kontrol altına alınmasının çok daha zor olduğunu hemen ortaya koyuyor.

Na'nın ilk saati filmin en iyi halidir: Western tarzı, 1950'lerin bilimkurgu B-filmi ile Kore küçük kasaba komedisinin vahşi bir karışımı. Bum-seok harabeye dönmüş sokaklarda hızla ilerliyor, herkes birinin kuzeni ya da komşusu olduğu için cesetleri tanıyor ve duvarları yıkan bir felakete sıradan polis mantığı empoze etmeye çalışıyor. Büyük ekranda Officer Sung-ae olarak müthiş bir izlenim bırakan Hoyeon, canavara bir gizemden çok ahlaki bir saldırı gibi davrandığında kaosa mükemmel bir öfke sarsıntısı veriyor.

Zevk, aptallığın ne kadar dikkatli sahnelendiğinden geliyor. Hong Kyung-pyo's kamera, şakayı, korkuyu ve kargaşayı tek bir elastik ritme dönüştüren bir zarafetle paniğin içinde süzülüyor. Arabalar dönüyor, avcılar tekleme yapıyor, çevredekiler korkunç kararlar veriyor ve her yeni felaket, bir şakanın zamanlaması ve bir aksiyon setinin gücüyle ortaya çıkıyor. Film, Hope Harbor'nin dehşete düşmüş, gülünç insanlarına yakın kaldığında son derece eğlenceli oluyor.

Büyünün zayıfladığı yer yaratığın kendisidir. Film, uzaylı tehdidini tam olarak ortaya çıkardığında, tasarım, canlı aksiyon dünyasının fiziksel güzelliğiyle çatışan, ağırlıksız, eski tarz bir video oyunu kalitesine sahip oluyor. Avcılar ormanın derinliklerine doğru ilerledikçe, mitoloji genişledikçe ve Michael Fassbender, Alicia Vikander ve Taylor Russell uzaylı klanının bir parçası olarak ağır efekt çalışmaları altında ortaya çıktıkça orta bölüm de ivme kaybediyor. Varlıkları ilgi çekicidir, ancak film, işgalcileri anlatırken, sıradan insanların onlardan kurtulmayı başaramamalarını izlemekten çok daha az ilgi çekicidir.

Yine de *Hope*, araçlardan, cesetlerden, kötü planlardan ve absürt gerilimden oluşan bir otoyol kovalamacasına doğru ilerleyen son üçte birlik bölümde yeniden nabzını buluyor. O zamana kadar, daha zayıf olan görsel efektler, insani gösterilerden, komik ivmeden ve Na'nın filmin tuhaflığını azaltmayı reddetmesinden daha az önem taşıyor. Kendi mitolojisi konusunda çok uzun, çok düzensiz ve bazen de çok aptalca ama yine de en iyi sahneleri o kadar kendinden emin ki, pürüzlü kenarlar isyanın bir parçası haline geliyor.

Geriye büyük bir felsefi yük taşımayan ve bayağı zevkleri için özür dilemeyen aşırı doldurulmuş bir canavar filmi kalıyor. Bu hafiflik, onu tuhaf bir Cannes yarışması girişi haline getiriyor, ama aynı zamanda canlandırıcı da. Hope Harbor'nin insanları, aralarına gelenlerden daha yavaş, daha zayıf ve daha az asil olabilir ama izlemesi çok daha eğlenceli.

**Film detayları:** Yönetmen ve yazar Na Hong-jin; Hwang Jung-min , Zo In-sung , Hoyeon , Taylor Russell , Cameron Britton , Alicia Vikander ve Michael Fassbender. Reviewed'nin başrol oynadığı Cannes Film Festival. Running süresi: 160 dakika.`,
  },
  {
    slug: "resident-evil-review-zach-cregger-austin-abrams",
    origTitle: "Resident Evil",
    title: "‘Resident Evil’ İncelemesi: Zach Cregger Yorgun Seriye Heyecan Verici Bir Can Suyu Katıyor",
    excerpt: "Austin Abrams, Zach Cregger’ın hayatta kalma korku serisini vahşi ve komik bir üslupla yeniden yorumladığı bu filmi, Raccoon City’de felaketlerin birbirini kovaladığı tek bir gece boyunca sırtlıyor.",
    rating: "4/5",
    image: residentEvilCoverAsset.url,
    videoUrl: "https://www.youtube.com/embed/mNd1gb19A-c",
    body: `*Barbar* ve *Silahları*'nin devamı olarak Zach Cregger's olarak *Resident Evil*'nin seçilmesi, başlangıçta tanıdık fikri mülkiyete bir geri çekilme gibi geliyordu. Video oyunu uyarlamaları, kaynak materyallerinin korku, gerilim veya grotesk buluşuyla nadiren eşleşiyor. Cregger'nin cevabı önceki filmleri taklit etmek değil, onları geride bırakmak ve aynı kirlenmiş dünyada basit, orijinal bir hayatta kalma hikayesi inşa etmek.

![Resident Evil'de tıbbi kurye Bryan olarak Austin Abrams](${residentEvilStill1Asset.url})

Austin Abrams, karlı bir gecede son bir acil işi kabul ettiğinde kişisel hayatı zaten çözülmeye başlayan tıbbi kurye Bryan'yi canlandırıyor. Paketin, serinin tuzağın kapandığını görebileceğini bilen Raccoon City. Anyone'deki bir hastaneye ulaşması gerekiyor, ancak Abrams, Bryan'nin kararını inandırıcı kılıyor: O sıradan, iyi niyetli ve şehir sınırlarının ötesinde bekleyenlere karşı olağanüstü derecede hazırlıksız.

![Bryan, Raccoon City'ye doğru gece koşusuna başlıyor](${residentEvilStill2Asset.url})

İlk felaket, Bryan'nin yoluna çıkan bir kadına çarptığı izole bir yolda gelir. Vücudu imkansız bir açıyla bükülmüş olmasına ve sessizliği şoktan çok daha kötü bir şeye işaret etmesine rağmen yardım etmeye çalışıyor. Bir polis memuru hastaneye kadar eşlik etmeyi teklif eder, ancak görünüşteki bu kurtarma yalnızca giderek daha da kötüleşen bir dizi karşılaşmanın kapısını açar.

![Zach Cregger's Resident Evil'den gergin bir sahne](${residentEvilStill3Asset.url})

Cregger ve ortak yazar Shay Hatten, yolculuğu artan oyun seviyeleri gibi yapılandırıyor. Bryan aracını kaybeder, görünüşte terk edilmiş bir çiftlik evine ulaşır, bir bekçi köpeğinden sağ kurtulur ve insan anatomisinin olması gereken yerde dokunaçları ve çeneleri olan yaratıkları keşfeder. Her konum, onu bir sonraki kontrol noktasına doğru itmeden önce yeni bir kural, tehdit veya korkunç can alıcı noktayı getirir.

![Raccoon City salgını, Bryan'nin teslimatını hayatta kalma mücadelesine dönüştürüyor](${residentEvilStill4Asset.url})

Filmin en iyi yinelenen şakası aynı zamanda en insani fikridir: Bryan insanlara yardım etmeye çalışmaktan kendini alamıyor. Her kurtarma girişimi felaketle sonuçlanır. Karavanda ağlayan bir çocuk bile başka bir virüslü saldırgana dönüşürken, zayıf nişan alması ve asma kilitten ateş edememesi, temel aksiyon filmi becerisini anlamsız bir komediye dönüştürüyor. Mizah asla tehlikeyi ortadan kaldırmaz; şiddeti daha öngörülemez hale getiriyor.

Paul Walter Hauser, Bryan'nin paketinin şehirde çok ihtiyaç duyulan bir panzehir içerdiğini açıklayan Şemsiye bilimcisi Carl olarak hoş bir komik enerji getiriyor. Kali Reis, Carl'ın silahlı eskortu Maxine rolünde amansız bir karşı ağırlık rolünde. Onların gelişi, endişeli mırıldanması ve sıradan herkese hitap eden tüylü sesiyle izleyiciyi kaosun ortasında sabit tutan Abrams'den çalmadan hikayeyi genişletiyor.

![Kali Reis ve hayatta kalanlar enfeksiyon kapmış kişilerle karşı karşıya](${residentEvilStill5Asset.url})

Nefes kesen 90 dakikada film neredeyse hiçbir şeyi boşa harcamıyor. Bir kanalizasyon karşılaşması en kötü biyolojik sürprizlerinden birini sunar. Enfekte cesetler binalardan yağarken sokak bir eldiven haline geliyor. Hastane finali, Hieronymus Bosch tarafından boyanmış hissi veren bir doğumhane vizyonuna doğru tırmanıyor ve ardından operatik bir final perdesine dönüşüyor.

Cregger ara sıra birinci şahıs bakış açısına geçerek seyirciyi kısaca Bryan'nin gözlerinin arkasına yerleştiriyor. Bu, oyunlara etkili bir göndermedir çünkü hayranlara hizmet etmek için filmi durdurmak yerine, film yapımında doğal olarak gelişir. Dariusz Wolski's görüntüleri, Tom Hammock's prodüksiyon tasarımı ve yaratık çalışması, her yeni odayı incelenmeye değer bir tehdide dönüştürüyor.

Bu *Resident Evil*'nin çalışmasını sağlayan şey kendine olan güvenidir. Oyunların hayatta kalma-korku ritmini, karakterlerin veya kronolojinin tuzağına düşmeden anlıyor ve yenilmez bir aksiyon kahramanı yerine savunmasız bir kahramana güveniyor. Barok vahşet, keskin görsel şakalar ve Abrams'nin çılgın samimiyeti, yıpranmış bir seriye tam olarak ihtiyaç duyduğu sarsıntıyı veriyor.

**Film detayları:** Yönetmen: Zach Cregger; Zach Cregger ve Shay Hatten tarafından yazılmıştır; başrollerde Austin Abrams , Zach Cherry , Kali Reis , Paul Walter Hauser ve Will Merrick. Rated R. Running'nin yer aldığı filmin süresi: 90 dakika. Released September 18, 2026.`,
  },
  {
    slug: "the-uprising-review-andrew-garfield",
    origTitle: "The Uprising",
    title: "‘The Uprising’ İncelemesi: Andrew Garfield, Bugünü Yakıcı Biçimde Hatırlatan Bir Devrime Öncülük Ediyor",
    excerpt: "Paul Greengrass, İngiltere’deki 1381 Köylü İsyanı’nı sarsıcı bir tarihî dramaya dönüştürürken Andrew Garfield yasın, öfkenin ve sınırlarının ötesine itilmiş bir işçi sınıfının vücut bulmuş hâli oluyor.",
    rating: "4/5",
    image: theUprisingAsset.url,
    videoUrl: "https://www.youtube.com/embed/ZVkrhHebz1Q",
    body: `İsyanlar nadiren tek bir an ile başlar. Yıllar süren baskı, aşağılama ve kayıplardan sonra, son bir hareket kıvılcımı sağlayana kadar büyürler. Paul Greengrass' "The Uprising" 1381'deki England's Peasants' Revolt'ye geri döner ve öfkesinin şaşırtıcı derecede güncel olduğu bir hikaye bulur.

Ülke hâlâ yoksul toplulukları harap eden bir felaket olan Black Death'nin sersemlemesini yaşıyor. Genç bir King Richard II, yozlaşmış danışmanlar, sevilmeyen bir dış savaş ve aristokrasiyi korumak için tasarlanmış vergiler tarafından şekillendirilen bir hükümetin üzerinde oturuyor. Kraliyet yetkilileri Brentwood'da zorla daha fazla para koparmaya çalıştığında direniş bir köyden Londra'ya doğru yayılır.

Andrew Garfield, kısaca Ploughman. He'nin ailesini vebadan kaybettiği ve geriye kalanlarla zar zor hayatta kalabildiği bilinen kederli bir çiftçiyi canlandırıyor. Garfield, karakterin sessizliğini yüklü hissettiriyor: devlet şiddetine tanık oldukça ve sonunda artık yeter diye bağırdıkça üzüntü sertleşiyor ve kararlılığa dönüşüyor. Bir gardiyana karşılık verdiğinde, kişisel acılar toplumsal isyana dönüşür.

Ploughman, Jamie Bell'nin canlandırdığı radikal vaiz John Ball ve hareketin tarihi figürü Cosmo Jarvis' Wat Tyler'ye katılıyor. Thomasin McKenzie's Alyce aynı zamanda davayı üstlenen kadınları da temsil ediyor. Korkmuş çocuk kralla ve onun adına hüküm süren adamlarla yüzleşmeyi umarak birlikte Canterbury'den Londra'ya yürürler.

Mahkemede Katherine Waterston's Countess ve Lords Appellant, hareketin nasıl bastırılacağını tartışıyor. Tom Hollander, Treasurer Hales'ye yağlı bir tehdit getiriyor, Stephen Dillane, Archbishop Sudbury oynuyor ve Jonny Lee Miller, belediye başkanını korkutucu bir siyasi uygulayıcıya dönüştürüyor. Egemen sınıf, çaresizliği saray kapısına ulaşana kadar rahatsızlık olarak görüyor.

Greengrass ayaklanmayı tanıdık, huzursuz tarzıyla çekiyor. Kameralar kalabalıkların arasında, cesetlerin arasında ve hücum eden birliklerin yanında hareket ederek tarihi yeniden yapılanmayı görgü tanıklarının görüntülerine daha yakın bir şeye dönüştürüyor. Yaklaşım "Bloody Sunday"yi hatırlatıyor: Aksiyon felakete dönüşür ve izleyici, karmaşanın güvenli bir şekilde üstünden çıkmak yerine, karmaşanın içine yerleştirilir.

Filmin amacını ifade etmek için modern konuşmalara ihtiyacı yok. Göçmenlerin "işlerinizi çaldığı", sınırlarını aşan vatandaşlar ve günah keçisi arayan liderlerin yankıları kendi yankılarını yaratıyor. Greengrass, popülist öfkeyi siyasi açıdan istikrarsız, aynı kalabalıkta adalet, önyargı ve şiddet taleplerini taşıyabilecek kapasitede görüyor.

Son bölümü ünlü bir İngiliz halk kahramanının kökeniyle flört ediyor; bu seçim, kendisinden önceki trajediden daha eğlenceli gelebilir. Yine de filmin ana fikri değişmeden kalıyor: Tarih tekerrür etmiyor; eşitsizlikler, korkular ve sloganlar da kafiyeli olmaya devam ediyor.

"The Uprising", baskının protestoya dönüşmesinin sürükleyici bir kroniği olarak en iyi sonucu verir. Garfield, bu dönüşüme bir insan merkezi kazandırırken Greengrass, 600 yıllık bir isyanın müze eserinden çok, gerçek zamanlı olarak gelen bir uyarı gibi görünmesini sağlıyor.`,
  },
  {
    slug: "lanterns-inceleme-hbo-green-lantern",
    origTitle: "Lanterns",
    title: "“Lanterns” İncelemesi: HBO’nun Green Lantern Dizisi Işıl Işıl Parlıyor",
    excerpt: "IndieWire’a göre Chris Mundy, Damon Lindelof ve Tom King’in izlerini taşıyan dizi, Aaron Pierre ile Kyle Chandler arasındaki sürtüşmeli uyumu Nebraska’da geçen bir cinayet soruşturmasına bağlıyor; ortaya bir çizgi roman uyarlamasından çok, zıt karakterli polis ikilisi kalıbını tersyüz eden cesur bir drama çıkıyor.",
    rating: "A-",
    image: lanternsCover.url,
    gallery: [lanternsG1.url, lanternsG2.url, lanternsG3.url, lanternsG4.url],
    body: `Aaron Pierre tarafından kayda değer bir inançla oynanan, gezegende gelmiş geçmiş en kusursuz yapılı adamlardan biri olan John Stewart, kazandığı saygıyı bir türlü alamıyor. Adam neredeyse 1,80 boyunda, defans oyuncusu gibi yapılı ve askeri eğitimli bir keskin nişancı Tom Cruise. As gibi koşuyor ve kilometrelerce uzaktan hedefi çivileyebiliyor. Sadıktır, uyanıktır ve insanüstü bir sabra sahiptir.

Kısacası tam bir paket. O halde doğal olarak emekli olmayı reddeden yaşlı beyaz bir adama ikinci keman oynuyor.

" Lanterns " başladığında, John yol kenarında aktif Green Lantern'nin onu almasını bekliyor. Dünyanın ilk ve tek galaksiler arası kolluk kuvveti Hal Jordan'nin (Kyle Chandler), John'yi kendi yedeği olarak eğitmesi gerekiyor: evrenin en güçlü silahının emanet edildiği adama bir şey olması durumunda devreye girecek "acil durum" süper kahramanı.

Ve bir şeyin olacağına inanmak için nedenler var. Galaksinin etrafında 20 yıl boyunca mekik dokuyarak gezegeni meteorlardan ve uzaylı istilalarından kurtardıktan sonra Hal artık şöhretinin üzerinde dinleniyor. Artık üniformasını giymiyor çünkü kot pantolon "tuvalete gitmeyi kolaylaştırıyor." Yoktan bir ustura yaratamayan bir adamın kronik sakalına sahip. Grileşen saçları, çocukça şakalarının inkar etmeye çalıştığı bir yaşı ele veriyor; Nihayet John'yi almaya geldiğinde iki hafta gecikmiş ve gururlu bir şekilde akşamdan kalmadır.

Usta ile çırak arasında sevgi yok demek pek doğru olmaz. Ancak saygı yalnızca tek bir yönde akar ve kusursuz bir özgeçmişe rağmen, onu alan kişi John değildir. İki aylık "eğitimden" sonra, bırakın yüzüğü takmayı, hâlâ onunla uzaya bile gitmemişti. Patronunun kahvesini getirmekten biraz daha fazlası olan ayak işlerini yapmadığı zamanlarda bekliyor: Hal'nin hayranlarıyla fotoğraf çektirmeyi bitirmesini, şakalaşmayı bırakıp bir kez daha seçilmesini bekliyor.

Hal yüzüğü vermeden önce öleceğini söylüyor; ve HBO'nin anti-dost-polis dramındaki gerilimi körükleyen de bu yetki duygusu, bu üstünlük duygusu, eski yöntemlere bağlılık - tam karşınızda parlak yeni fırsatlar dursa bile -. Dizi, hikayeyi sistematik olarak hafife alınan kahramanın gözünden anlatmaya olduğu kadar, huzursuz polis-prosedür ikilisine de yatırım yapıyor.

John genç bir Siyah adam, Hal ise yaşlı beyaz bir adam. John her şeyi doğru yapıyor; Hal her şeyi doğru yaptığını düşünüyor. John tüm hayatını Green Lantern Corps'ye layık görülmek için çalışarak geçirdi; Hal, bir evet-hayır sorusunu doğru yanıtladıktan sonra yüzüğü kucağında buldu. Elbette gri alanlar var ama "Lanterns" bu iki adamın kim olduğu ve kültürel ve nesilsel olarak neyi temsil ettikleri konusunda net.

Bu arada durum gerçek bir baş ağrısıdır. Gecikmiş antrenman dönüşlerinin ardından ikili, bir lise futbol maçında dört yabancının öldürüldüğü küçük bir Nebraska kasabası olan Rushville'e çağrılır. Hal'nin içgüdüsü uzaylıların işin içinde olduğunu söylüyor, bu da yerel şerifin iyi niyetli uyarılarının onları toparlamaya yetmeyeceği anlamına geliyor.

Sheriff Kerry Kane (harika bir Kelly Macdonald) keskindir ve emir almaz. Şüphelileri, Hal'nin kendi flörtlerini etkisiz hale getirebileceğinden daha hızlı tespit ediyor; dürüstlük ve güven yayıyor... ama kasabanın en zengin adamı William Macon'nin (Garret Dillahunt) oğlu Billy (Jason Ritter) ile evli olduğu ve Macon'nin tepeden tırnağa özel bir milis silahlandırdığı ve bir şeye karşı savaşa hazırlandığı ortaya çıktı.

Macon, kaynaklarının "gizemli bir hayırseverden" geldiğini ve gizlilik anlaşmasının onu konuşmaktan alıkoyduğunu söylüyor. Karısı Zoe (Poorna Jagannathan) de hiç yardımcı olmuyor ve kasabanın geri kalanı da fiili liderlerinin aynısını yapıyor: Hal ve çırağının ortalıkta olmasını istemiyorlar.

Her şey biraz şüpheli geliyor ve ilk bölümlerde sorular hızla birikiyor. Kimin kim olduğunu, neyin ne zaman olduğunu ve yeşil yüzüğü taşıyan kişinin nasıl itirazda bulunabileceğini takip etmek, DC biliminde doktorası olmayan herkes için yorucu olabilir. Tez açıklamalarında karakterlerin konuştuğu hantal anlar oluyor ve büyük resim zaman zaman bireysel dinamikler arasında kaybolabiliyor.

Ancak dizi sorumlusu Chris Mundy, Tom King ve Damon Lindelof ile birlikte önemli olanı unutmanıza asla izin vermez; temiz kurgu, duygusal mantık ve karizmatik oyuncular izleyiciyi hikayenin özüne taşıyor.

Bu karizma listesinin başında Chandler var; onun iyi yaşlı çocuk cazibesi, seni kazanmak için kurnazca bir silah haline getirildi. Hal, onun iyi adamlardan biri olduğuna inandığınız sürece, aşağılamaları "sert aşk" olarak değerlendirilebilecek huysuz, eski bir adam. "Lanterns"nin bu varsayımı hem baltalama hem de benimseme biçimi, dizinin en iyi hilelerinden biri ve Emmy kazananının kariyerindeki en iyi performanslardan biri.

Bu arada Pierre, Hal'nin sözleriyle "iyi hissettiren hiçbir şeye inanmayan" bir vegan olan John'ye bolca zeka, tutku ve gizem getiriyor. Aslında "Lanterns" onun başlangıç ​​hikayesidir ve Pierre'nin havalı çekiciliği, geçmişiyle ilgili damlatılmış bilgilerle mükemmel bir şekilde uyum sağlar.

Lindelof'un en iyi eseri gibi fikirlerle dolup taşmasa da, "Lanterns" yaratıcılarının güçlü yönlerinin heyecan verici bir sentezidir. "Watchmen" gibi bu da Amerika'nın kalbinde sistemik ırkçılığı merkeze alan bir prosedür seti; "True Detective" gibi uyumsuz ortakları tek bir vaka için bir araya getiriyor.

En iyisi: " Lanterns " incelediği ahlakı yaşıyor. Green Lantern olabilmek için değerli görülmeniz ve tehlike anında tek bir soruyu yanıtlamanız gerekir: Korkuyor musunuz? "Lanterns" gölgesinde kaldığı talihsiz Ryan Reynolds filminden bile daha riskli bir girişim değil ama taşıdığımız korkuların gerçekte ne anlama geldiğine dair söyleyecek çok şeyi var.

Görünüşe göre "Lanterns" mükemmel ekibi bir araya getirmiş. Şu ışıkları açın.

**Not:** " Lanterns " 16 Ağustos Pazar günü saat 21.00'de gösterime girecek. HBO'de; sekiz bölümlük ilk sezon finali 4 Ekim'de yayınlanacak.`,
  },
  {

    slug: "camp-miasma-inceleme-cannes",
    origTitle: "Teenage Sex and Death at Camp Miasma",
    title: "“Teenage Sex and Death at Camp Miasma” İncelemesi: Jane Schoenbrun’dan Cannes’da Kanlı Bir Geçit",
    excerpt: "TheWrap’e göre Jane Schoenbrun’un yeni filmi, slasher türünün transfobisinden Hollywood’un ikiyüzlü “woke” gösterişine kadar pek çok konuyu deşiyor; Gillian Anderson ile Hannah Einbinder’in birlikteliği ise büyüleyici bir elektrik yaratıyor.",
    rating: "4.5/5",
    image: miasma1,
    body: `Jane Schoenbrun's " Teenage Sex and Death at Camp Miasma " henüz kelimeleri icat edilmemiş görüntüler ve çekimler içerir. Bazı filmler izlediğiniz medya olarak değil, sizi ele geçiren bir vizyon olarak gelir; Schoenbrun ve ekibinin titizlikle inşa ettiği dünya buna çok yaklaşıyor. Katil katillerin ölü kampçıları patlayana kadar bir top direğine çarptığı, cesetlerin bir video mağazasının duvarlarını fiberglas yalıtım gibi sıraladığı, Gillian Anderson'nin baştan çıkarıcı bir şekilde bir kucak dolusu KFC taşıyan bir sahnenin kükreyen bir şömineye dönüştüğü bir dünya.

![Camp Miasma](${miasma2})

Slasher filmlerindeki transfobiden Hollywood'un yalnızca uygun olduğunda "uyandıran" anlatıları savunma eğilimine kadar her şeyi saptıran Schoenbrun, portalların ustası olduğunu kanıtlıyor. Dijital dünyaları - " I Saw TV Glow " TV programlarını veya " We're All Going - World's Fair " internetin karanlık köşelerini kendi "özel alternatif evrenleri" olarak çerçevelemede her zaman başarılı oldular. Bu sanal dünyalar, dış dünyanın asla vermediği bir güvenlik ve görülme şansı sunuyor.

Bu filmde Schoenbrun onların bu alanlarla ilişkilerini daha da derinlemesine sorguluyor: onlara ihtiyaç duymanın trajedisi ile gerçekliklerinin güzelliği arasındaki gerilim. Nihayet kendi bedenlerimizde rahat ettiğimizde bu alanlara ne olur? Diriliş her zaman önce bir çeşit ölümü mü gerektirir? Hayatımızda dönüşüm için çok geç kaldığımız bir an var mı?

![Camp Miasma](${miasma3})

Açılış sekansı bu dünyayı anında "yaşanmış" hissettiriyor. Yükselen yönetmen Kris (Hannah Einbinder), uzun süredir devam eden slasher serisi "Camp Miasma"nin yeniden yapımını yönetmesi için işe alındı. As Kris kurnazca şunu belirtiyor: Bu işe alım bir taşla iki kuşu vuruyor: Hollywood eski fikri mülkiyetlere doyamıyor ve bir LGBTQ+ yönetmeni işe alarak stüdyo, transfobikliğiyle meşhur bir diziyi yeniden canlandırdığı için eleştirileri saptırabilir.

As Okay Kaya's "Nightswimming" jeneriği üzerinden oynuyor, "Camp Miasma"nin hikayesini ürünler ve gazete kupürleri aracılığıyla izliyoruz: aşırı doygunluğa ulaşmış çok filmli bir seriye dönüşen sürpriz bir kült hit. Masa oyunları ve diziyle alay eden bir dergi karikatürü, hikayelerin Hollywood makinesi tarafından ne kadar çabuk sıradanlığa indirgenebileceğini gösteriyor.

![Camp Miasma](${miasma4})

Kris, orijinal " Camp Miasma " filminin hayatta kalan tek kişisini yeniden yapımda canlandıran Billy Presley'yi (Gillian Anderson) kadroya almak istiyor. Emekli oyuncu, filmlerin çekildiği terk edilmiş kampa evini kurdu. Konuşmaları tuhaf bir şekilde başlıyor ama aralarında salt merakın ötesinde bir bağ olduğu açık: Sadece arzu değil, yüzeyin altında kaynayan bir açlık da var.

Gerçek şölen şu: tek filmde birden fazla film var. Önceki " Camp Miasma " filmlerinden, Counting Crows' "Uzun Bir Aralık" için koreografisi yapılan komik, uzun bir katliam sahnesi de dahil olmak üzere başlı başına sanat eseri niteliğindeki uzun bölümleri izliyoruz. Bu canlandırmalar, Schoenbrun'nin türün mihenk taşlarına duyduğu saygının kanıtıdır.

![Camp Miasma](${miasma5})

Yapım tasarımcıları Matt Hyland ve Brandon Tonner-Connolly, sanat yönetmeni Courtney Stockstad ve set dekoratörü Hana Cook arasındaki keyifli işbirliğini, ister kana bulanmış "Camp Miasma" dünyasında ister Narnia. Though'nin Lynchian versiyonunu çağrıştıran Billy'nin kamp evinde hissedebilirsiniz. ve Einbinder , kamp sahneleri Schoenbrun'nin yeni ve geri dönen işbirlikçilerine kalıcı bir izlenim bırakmaları için yer veriyor - özellikle Eva Victor, DJ Ella Giastic olarak.

Kesinlikle bunaltıcı gelebilecek sekanslar ve motifler var - ancak bu filmin bir kusuru değil, bir özelliği. Onu izledikten sonra tutarlı düşünceler oluşturamamak, onun tuhaf gücünün ve kalabilme yeteneğinin bir işaretidir. Yeni bir müjdeyi ilk karşılaşmada kabul etmek zordur; Schoenbrun'nin çalışmasının hediyesi her şeyden önce cömert bir davet ruhu taşımasıdır. Onların kendine güvenen, dengesiz dalga boylarına yerleşin ve gözlerinizdeki perdenin düşüşünü izleyin. Bol miktarda jelibon getirin - sonuçta Kris'nin dediği gibi altın bir çağda yaşıyoruz.`,
  },
  {

    slug: "late-fame-inceleme-willem-dafoe",
    origTitle: "Late Fame",
    title: "“Late Fame” İncelemesi: Willem Dafoe, Ömrünün Sonbaharında Bir Şair",
    excerpt: "Wall Street Journal eleştirmeni Kyle Smith’e göre Kent Jones’un Arthur Schnitzler uyarlaması, bir zamanlar ün kazanmış, şimdiyse postanede çalışan bir yazara hayranlıkla yaklaşan entelektüellerin hikâyesini küçük, zarif bir şiir gibi anlatıyor.",
    rating: "4/5",
    image: "/__l5e/assets-v1/cd5de13f-cb66-4817-899c-cec802694a3e/e1f3780a9297.avif",
    body: `Ed Saxberger edebiyat adamıdır: postanede çalışmaktadır. Kendisi aynı zamanda bir edebiyat dehasıdır. Yoksa bu bir dahi "idi mi"? 1979'da, hâlâ çok küçük ama çok sadık çevrelerde hayranlık duyulan bir şiir kitabı yayınladı. "Late Fame"de artık yaşlı, Willem Dafoe tarafından sakin bir denge duygusuyla canlandırılıyor.

Hayatı, West Village dairesinin önünde gizlenirken yakaladığı tuhaf bir genç adamın ziyaretiyle alt üst olur. Greta Lee ve Edmund Donovan'nin de rol aldığı film, bir zamanlar unutulmuş yazarı yeniden keşfeden ve ona aşık olan entelektüel bir çevreyi konu alıyor.

1895'te yazılan ancak bu yüzyıla kadar yayınlanmayan Arthur Schnitzler's kısa romanından uyarlanan "Late Fame", sonuçlarıyla aynı anda birçok yöne ulaşan bir karakter çalışması ve aynı zamanda bir benzetmedir. Kent Jones' filmi bir bakıma harika bir küçük şiire benziyor.

Aynı zamanda geçmişe de dokunaklı bir gönderme: "Metropolitan" ve "Dead Poets Society"nin hassasiyetlerini zarif bir şekilde bir araya getirerek, şöhretin gecikmiş gelişinin bir kişiyi hem iyileştirebileceğini hem de yeniden yaralayabileceğini hatırlatıyor.`,
  },
  {
    slug: "i-want-your-sex-gregg-araki-inceleme",
    origTitle: "I Want Your Sex",
    title: "“I Want Your Sex” İncelemesi: Gregg Araki, Çılgın Bir Komediyle Z Kuşağının Tutuculuğunu Hedef Alıyor",
    excerpt: "San Francisco Chronicle eleştirmeni David Lewis’e göre Araki’nin yeni filmi, kariyerinin en iyi oyuncu kadrolarından biri sayesinde çok eğlenceli: Olivia Wilde’ın canlandırdığı provokatör sanatçı Erika Tracy, filmin tamamında sahneyi çalıyor.",
    rating: "4/5",
    imdbRating: "6.4",
    image: "/__l5e/assets-v1/4f7e4921-657d-4899-b61f-f6b51e2c7770/a3533725b5e5.jpg",
    body: `On yıllardır bağımsız sinema efsanesi olan Gregg Araki, cinsel ahlak kurallarına meydan okurcasına meydan okuma üzerine bir kariyer inşa etti. Son filmi 'I Want Your Sex'de bu sefer sözde iffetli Gen Z'yi hedef alıyor ve kariyerinin en iyi oyuncu kadrosundan biri sayesinde sonuç oldukça komik.

Çocuksu, dağınık Elliot (mükemmel bir Cooper Hoffman) okulu yeni bitirmiş ve seksin neredeyse hiç gerçekleşmediği, gerçekleştiğinde ise tam bir esneme olduğu bir ilişki içinde sıkışıp kalmıştır. Ancak bir "yenilikçi depoda" işe girdiğinde yatak odası hayatı ters bir hal alır: Elliot orada ikonik sanat provokatörü Erika Tracy'nin (muhteşem bir Olivia Wilde) büyüsüne kapılır.

Wilde's Erika, film boyunca hem itici hem de karşı konulmaz olmayı başaran bir güç; Araki'in mizahı, Elliot'nin kendi arzularını anlamaya çalıştığı anlarda en keskin şekilde ortaya çıkıyor. Charli xcx, Mason Gooding, Chase Sui Wonders, Margaret Cho ve Johnny Knoxville'den oluşan kadro, filmin tuhaf enerjisini dengede tutuyor.

90 dakikalık film erotik komedi ile gerilim arasında gidip geliyor, zaman zaman kendi provokasyonlarına biraz fazla güveniyor. Yine de, Araki'nin açıklık yerine kırılganlığı öne çıkardığı son, filmi basit bir şok komedinin ötesine taşıyor: birbirleri tarafından gerçekten görülmek isteyen insanlar hakkında şaşırtıcı derecede tatlı bir hikaye.`,
  },



  {
    slug: "the-shards-inceleme-ryan-murphy-bret-easton-ellis",
    origTitle: "The Shards",
    title: "“The Shards” İncelemesi: Ryan Murphy’nin Seri Katil Gerilimi Sığ Sulardan Çıkamıyor",
    excerpt: "TIME eleştirmeni Judy Berman’a göre Murphy ile Bret Easton Ellis’in FX dizisi, göz alıcı prodüksiyonuna ve sayısız göndermesine rağmen aktarmaya çalıştığı derinliğe bir türlü ulaşamıyor.",
    rating: "2.5/5",
    imdbRating: "5.8",
    image: "/__l5e/assets-v1/be94dc0b-a977-4a10-a99a-b33a3cc63a80/25873eeb06ef.webp",
    body: `Ryan Murphy ve Bret Easton Ellis arasında verimli bir işbirliği hem kaçınılmaz hem de imkansız görünüyor. Murphy her anlamda bir maksimalisttir: Her diziyi seri halinde yayınlayan, karakterlerine her öyküde sessiz kalması gereken kısımları yüksek sesle söyleten bir süper yapımcı ve televizyonun kapsayıcı, kimlik politikası odaklı programlamanın en etkili savunucularından biridir. Ellis, nesli tanımlayan ilk romanı 'Less Than Zero'nin minimalist tarzıyla ve yakın zamanda eğlence endüstrisinin "sahte uyandırılmış kurumsal kültürüne" karşı çıkan bir kültür savaşçısı olarak yaşadığı dönemle tanınıyor. Ancak ikisi de kışkırtmaktan korkmayan isimler; ikisi de psikopat katillerin psikolojisine ve popüler kültürle gerçek hayat arasındaki geçirgenliğe takıntılı. Boomer ve Gen X'nin zirvesinde doğmuş olan ikisi de 80'lerde eşcinsel olarak büyümenin nasıl bir şey olduğunu hatırlıyorlar.

Ellis'nin 2023 tarihli romanından uyarlanan 'The Shards'de deneyimlerin bu sinerjisi, duyarlılıklarının çatışmasını silmeden hakim oluyor. Görünüşte, 1981'de Ellis'nin lisesindeki öğrencileri avlayan bir seri katilin otokurgusal ama tanıdık hikayesi; Murphy'nin alamet-i farikası şık prodüksiyon tasarımı, tür pastişi ve muhteşem set parçaları ön plana çıkıyor. Ancak FX ve Hulu'da 5 Ağustos'ta iki bölümle prömiyerini yapan dizinin daha büyük hedefleri olduğu açık: dönemin kültürel mihenk taşlarına gönderme yapıyor ve günümüz Bret'nin seslendirmesi aracılığıyla ergenlikten yetişkinliğe geçiş hakkında derin bir şeyler söylemeye çalışıyor. İster uyumsuz bir yaratıcı ekibi suçlayın, ister görsel ortamın fikirlerin yerine görselleri tercih etme eğilimini suçlayın, sonuçta yüzeysellik kazanır.

Son sınıf başlıyor ve grubun ebeveynleri çoktan sahneden ayrılmış durumda. (Bret'ler görünüşe göre yurtdışında tatil yapıyorlar.) Bu, hiçbir sokağa çıkma yasağı veya kısıtlama olmadan şehirde dolaşan, beyaz masa örtülü restoranlarda performanstan bıkmış, art arda sigara içen gençlere yakışıyor. Only Debbie's korkunç ailesi kareye giriyor. Babası Terry (Wes Bentley), reşit olmayan erkek çocuklarına bakan klişe, yırtıcı bir yapımcıdır; annesi Liz (Evan Rachel Wood) uyuşturucu, alkol ve öfke patlamalarıyla kendi kendini tedavi ediyor; bu, Debbie'nin kendi geleceğinin bir önizlemesi. Hane halkının dördüncü üyesi, kenarlarda gizlenen Terry'nin çift cinsiyetli estetik asistanı Steven (Jordan Roth)'dir.

Bir kızın parçalanmış bedeni tenis ağına bağlı halde bulunduğunda ve sınıf arkadaşları ortadan kaybolmaya başladığında, bunlar gençlerin birlikte çalışmak zorunda olduğu yetişkinlerdir. Bret, katilin okula yeni gelen yakışıklı Robert Mallory (Homer Gere) olduğuna inanıyor - ancak mantığı zayıf: Robert, Bret'nin onu ilk fark ettiği 'The Shining'in gösterimine katıldığını basitçe reddediyor. Bazı nedenlerden dolayı Bret arkadaşlarının cinayetlerle ilgilenmesini sağlayamıyor; balo ve dans yarışması programlarıyla çok meşguller.

' The Shards ' referanslarla yoğundur. Olay örgüsünün ötesini okumak için 'The Shining'in çılgınca çılgına dönmüş bir yazarın hikayesi olduğunu, 'Çin Mahallesi'nin savaşamayacak kadar köklü sistemik kötülüğün eşanlamlısı olduğunu ve Michael Cimino's ' Heaven's Gate' fiyaskosunun New Hollywood's yönetmen odaklı dönemin sonunu simgelediğini bilmeniz gerekir. Oyuncu kadrosu daha fazla anlam katmanını bir araya getiriyor: Kaia Gerber, annesinin ürkütücü bir kopyası, Gen X'nin nihai güzelliği Cindy Crawford; Homer Gere, babası Richard'la aynı kare çeneyi paylaşıyor ve Richard Gere, 90'ların başında Crawford'la evliydi.

Bu anlamın çoğu, 40 yaşın altındaki çoğu izleyicinin kaçıracağı referanslara dayandığından, Murphy ve Ellis aslında iki gösteriyi bir arada yaptı: 'Riverdale'/'Pretty Little Liars' damarında hokey bir genç cinayeti dizisi ve daha yaşlı izleyicileri hedefleyen daha katmanlı ve tanımlanması daha zor bir şey. Yalnızca ikincisi yeni hissettiriyor, ancak daha düşünceli unsurları sürekli olarak bir kenara atılıyor. Anlatıcının "Matt benim hakkımda hiçbir zaman onun hakkında hissettiğim şeyleri hissetmedi, bu hayatımın geri kalanında yinelenen bir tema haline gelecekti" gibi dizeler merak uyandırıyor: yaşlı Bret'nin hüznü, gerçek olgunlukla gelen, yüzeye çıkan ama hiçbir zaman tamamen delip geçemeyen kişisel bilgiyi kazanmadan çocukluk masumiyetini yetişkin yazarlık kariyeriyle takas eden erken gelişmiş genç Bret'ye olan öfkesi.

Dizi son bölümleriyle ortaya çıkıyor. Birinde, gençlerin takıldığı Hamburger Hamlet'nin isminden yararlanıyor ve karakterler ile Shakespeare'in trajik figürleri arasında öyle abartılı paralellikler kuruyor ki, öz farkındalığın bile onu kurtaramayacağı bir şey. Daha büyük hayal kırıklığı, anlatısal açıdan karışık bomba finali: patlamak yerine sönüyor. Bizi oraya taşıyacak olan psikolojik tırmanış hiçbir zaman tam olarak gerçekleşmez. Sınırlı iç gözlemin sonuçlarını anlatan bir dizi, bu sonuçların bizzat yaşanmasıyla sonuçlanır.`,
  },
  {
    slug: "los-vampires-inceleme",
    origTitle: "Los Vampires",
    title: "“Los Vampires” İncelemesi: İki Dracula’nın Çarpıştığı, Eski Hollywood’a Sevimli Ama Dengesiz Bir Yolculuk",
    excerpt: "Craig Mitchell’ın yazıp yönettiği film, Universal’ın 1931 yapımı “Dracula”sının aynı setlerde hem İngilizce hem İspanyolca konuşan oyuncularla çekildiği efsanevi yapım sürecine karanlık bir kurmaca ekliyor.",
    rating: "3/5",
    image: "/__l5e/assets-v1/289cd565-85ad-48d8-86b8-b68b2137c342/ad0bebdd4dbd.webp",
    body: "Sesli sinemanın gelişi, birçok açıdan film endüstrisi için büyük bir altüst oluştu: sinema işletmecileri pahalı yeni ekipmanlar kurmak zorunda kalırken, stüdyolar ürünlerini eskisi kadar kolayca kazançlı yabancı pazarlara ihraç edemez hâle geldi. Dönemin bu ikinci soruna bulduğu çözümlerden biri, aynı filmin farklı dillerde alternatif versiyonlarını çekmekti.\n\nUniversal, 1930'un sonunda bu fikri çoğu stüdyodan daha ileri taşıyarak 'Dracula'yı aynı dekorlarda, tamamen farklı oyuncu kadroları ve yönetmenlerle iki kez çekti. Bunlardan biri, elbette, Bela Lugosi'nin başrolde olduğu ve Tod Browning'in yönettiği efsanevi filmdi. Diğeri ise Rudolph Valentino'yu 'The Sheik'te yönetmiş olan George Melford'un imzasını taşıyordu; pelerinli kan emiciyi İspanyol göçmen oyuncu Carlos Villarias canlandırdı. Bu ikinci versiyon onlarca yıl unutuldu, ancak 1990'lardaki restorasyonların ve yeniden gösterimlerin ardından bazı izleyiciler onu iki filmin daha iyisi ilan etti.\n\nSenarist-yönetmen Craig Mitchell'in 'Los Vampires'ı, tam da bu paylaşılan dekorda yaşanan uğursuz olayları hayal ediyor: aynı dekorlarda bir ekip gündüz, diğeri gece çalışırken iki Dracula arasındaki rekabet; kıskançlık, sınıf farkları ve ürkütücü tesadüflerle örülmüş bir gerilime dönüşüyor.\n\nFilmin en büyük gücü atmosferi: döneme sadık tasarım, gölgeyle oynayan sinematografi ve stüdyo sisteminin İspanyolca konuşan ekibe biçtiği ikincil statünün altını çizen ince bir ironi. Ancak anlatı, kurgusal gerilim ile film tarihi dersi arasında gidip gelirken bazen dengesini kaybediyor; bazı yan karakterler yeterince geliştirilemiyor.\n\nYine de 'Dracula'nın kayıp ikizine sinefil merakı duyanlar için 'Los Vampires', kusurlarına rağmen keyifli bir izleme deneyimi sunuyor.",
  },

  {
    slug: "spider-man-brand-new-day-inceleme",
    origTitle: "Spider-Man: Brand New Day",
    title: "“Spider-Man: Brand New Day”, Bir Marvel Filmi İçin Daha Fazla Çaba Göstermenin Mümkün Olduğunu Kanıtlıyor",
    excerpt: "Destin Daniel Cretton’ın yönettiği filmde Tom Holland’ın Peter Parker’ı, “No Way Home” sonrasında herkesin hafızasından silinmiş, yapayalnız biri. TIME eleştirmeni Stephanie Zacharek’e göre aşırı yüklü olay örgüsünün altında keyifli bir yaz filmi saklı.",
    rating: "3.5/5",
    imdbRating: "8.1",
    image: "/__l5e/assets-v1/751dd6e8-0c8c-4423-affb-bae75d4e2604/c7239471c22a.webp",
    body: `2021'deki 'Spider-Man : No Way Home'nin sonunda Tom Holland's Peter Parker paramparça bir genç adamdı. En yakın arkadaşı Ned ve kız arkadaşı MJ, mistik bir büyü sayesinde onu tamamen unutmuşlardı; Aunt May'si Green Goblin's saldırısında ölmüştü. ' Brand New Day' bu yıkımın hemen ardından başlıyor: "Sometimes Spider-Man, zor olanı yapabilmek için Peter Parker'nin kalbini kırmak zorunda."

Destin Daniel Cretton tarafından yönetilen ve Chris McKenna ile Erik Sommers tarafından yazılan film, klişe denebilecek temalar, olay örgüsü manevraları ve çarpışan duygularla o kadar dolu ki, bazen gerçek hikayeye ve kahramanımızın acısına odaklanmakta zorlanıyor. Yine de tüm bu aşırı kalabalık makinelerin altında gerçekten keyifli bir yaz eğlencesi yatıyor.

Holland'nin samimiyeti filmin en büyük varlığı olmaya devam ediyor: Peter'nin yalnızlığı asla acıya dönüşmüyor; New York'de suçla savaşmaya devam ediyor ama bunu yapmaktan mutsuz. TIME eleştirmeni Stephanie Zacharek'ye göre film, Marvel'ın son aşamadaki yorgunluğuna rağmen en azından "daha iyisini yapmaya çalışma" konusundaki istekliliğini gösteriyor - ve bu tek başına bir başarı olarak kabul ediliyor.`,
  },
  {
    slug: "amadeus-en-yanlis-anlasilan-oscar-filmi",
    origTitle: "Amadeus",
    title: "“Amadeus”, Tüm Zamanların En Yanlış Anlaşılan En İyi Film Oscar’ı Sahibi Olabilir mi?",
    excerpt: "Miloš Forman’ın En İyi Film Oscar’lı başyapıtı 40 yaşında. BBC Culture’a göre tarihsel açıdan hatalı olmakla suçlansa da filmin asıl konusu hiçbir zaman Mozart’ın hayatı değildi; Soğuk Savaş dönemi SSCB’sine örtük bir eleştiriydi.",
    rating: "5/5",
    image: "/__l5e/assets-v1/e474fc4d-84ce-427c-a497-bb266656cd9a/bdcfc5ef6736.webp",
    body: `BBC Culture yazarı Tom Joudrey'ye göre, Miloš Forman's 1984 yapımı 'Amadeus' filmi çıktığı günden bu yana yanlış okundu. F. Murray Abraham için En İyi Film, En İyi Yönetmen ve En İyi Erkek Oyuncu da dahil olmak üzere sekiz Oscar kazanan film, büyük ölçüde Mozart'nin hayatının çarpık bir biyografisi olduğu için eleştirildi. Ancak Joudrey'ye göre filmin asıl konusu hiçbir zaman Mozart olmadı.

Peter Shaffer's oyununa dayanan senaryo, Salieri'nin kıskançlığını merkeze alırken aslında çok daha büyük bir alegori inşa ediyor: devletin sanat üzerindeki kontrolü, dehanın bürokrasi tarafından boğulması ve otoritenin sanatçıyı evcilleştirme çabaları. Filmin o dönemde hala Iron Curtain'nin gerisinde olan Prag'da çekilmiş olması tesadüf değil.

Forman'nin kendisi Çekoslovakya'dan kaçan bir sürgündü ve 1968 Prague Spring'nin bastırılışını ilk elden biliyordu. Joudrey, filmin Salieri'yi "yeteneği ödüllendirmek yerine evcilleştirmeye çalışan vasat, kurallara uyan devlet adamı" portresinin USSR'nin kültür politikasına doğrudan bir gönderme olduğunu savunuyor. Mozart'nin anarşik kahkahası ve iktidara boyun eğmeyi reddeden dehası, sanatçının imkânsız özgürlüğünü temsil ediyor.

40 yıl sonra geriye baktığımızda 'Amadeus' sadece büyük bir kostüm draması değil; sansür, otorite ve sanatın hayatta kalma stratejileri etrafında inşa edilmiş, hâlâ geçerliliğini koruyan bir siyasi manifesto.`,
  },
  {
    slug: "a-useful-ghost-thai-black-comedy",
    origTitle: "A Useful Ghost",
    title: "“A Useful Ghost” — Hayaletli Bir Elektrikli Süpürge Üzerinden Tayland Siyasetini Hedef Alan Bir Kara Komedi",
    excerpt: "Ratchapoom Boonbunchachoke’un şık ve kendine has filmi, elektrikli süpürgeye musallat olmuş huzursuz bir ruhu Tayland’ın siyasi geçmişiyle çarpıştıran heyecan verici bir kara komedi sunuyor; Guardian’ın eleştirisine göre yılın en özgün işlerinden biri.",
    rating: "4/5",
    image: aUsefulGhostAsset.url,
    body: `Guardian'nin incelemesine göre, Ratchapoom Boonbunchachoke'nin ilk uzun metrajlı filmi 'A Useful Ghost', son yılların en orijinal ve cesur türler arası deneylerinden biri. Film bir hayalet öyküsünü, politik alegoriyi, tuhaf romantik melodramı ve endüstriyel kara komediyi tek bir çatı altında harmanlıyor ve şaşırtıcı bir şekilde hepsi bir arada duruyor.

Hikayenin merkezinde, ölen karısının ruhunun evdeki elektrikli süpürgeye yerleştiğine inanan genç bir adam ve bu "perili vakumu" işçi olarak çalıştırmaya istekli bir fabrika var. Tayland'ın hava kirliliği krizinden askeri yönetim tarihine, kapitalist sömürüden eşcinsel hafıza politikalarına kadar çeşitli konular absürt mizahla iç içe geçiyor.

**Ne doğru oluyor?** Boonbunchachoke'nin görsel dili disiplinli ve şıktır: fabrika iç mekanlarının soğuk floresan ışığı, ev sahnelerinin sıcak tungsten tonları ve ses tasarımında elektrikli süpürgenin motor uğultusunun kullanılması filme farklı bir doku kazandırır. Guardian'nin ifadesiyle sonuç "rahatsız edici, erotik ve derinden etkileyici".

**Kararı.** 'A Useful Ghost' hem festival izleyicilerinin hem de türün sinema tutkunlarının kalbini kazanma kapasitesine sahip ender bir film. Boonbunchachoke, ilk çıkışıyla Apichatpong Weerasethakul Thai sonrası sinemanın en dikkat çekici sesi olarak sahneye çıkıyor.`,
  },
  {
    slug: "possession-inceleme-plantasyon-korku-drami-sky-atlantic",
    origTitle: "Possession",
    title: "“Possession” İncelemesi: İzleyiciyi İkiye Bölen Doğaüstü Sürpriziyle Kâbus Gibi Bir Plantasyon Draması",
    excerpt: "Gugu Mbatha-Raw, bir miras gizemini çözmek üzere Jamaika’ya gönderilen bir avukatı canlandırıyor. Ardından gelenler korkularla, geçmişin adaletsizlikleriyle ve ya seveceğiniz ya da nefret edeceğiniz doğaüstü bir unsurla dolu.",
    rating: "3/5",
    imdbRating: "6.2",
    image: possessionAsset.url,
    body: `Jamaika'daki bir şeker plantasyonuna inşa edilmiş 50 milyon sterlinlik bir servete sahip olan müşteriniz ölürse ve vasiyeti, tek çocuğunu mirastan mahrum bırakıp, adını daha önce kimsenin duymadığı Cudjoe East adlı birine devretseydi ne yapardınız? Firmanızın muhtemelen tek karma ırklı avukatı Claudia'yi (Gugu Mbatha-Raw), bu adamın izini sürmesi ve mümkün olduğu kadar çabuk itibarını sarsması için Kingston'ye gönderirsiniz. Claudia, "Daha çok bir ortak için uygun bir işe benziyor" diyor ve bu süreçte kendi terfisini garanti altına almak için annesinin memleketine doğru yola çıkıyor.

Plantasyon evinin son zamanlarda gördüğü kabuslarda görünen evin aynısı olduğu ortaya çıkar: yangınlar, korkmuş figürler, tuhaf semboller. Ama o, hurafelerin değil, hukukun kadınıdır; Afro-Gothic uyarılarını bir kenara bırakır ve vasiyeti geçersiz kılabilecek herhangi bir şeyi aramaya başlar. Çok geçmeden, mirastan mahrum kalan oğlu Oliver (Jonny Lee Miller, kibar ve huzursuz modda), hem araştırma yapmak hem de biraz cinsel gerilim oluşturmak için ona katılır.

Sonra ikili zaman çizelgesine sahip bir gizem gelir: Biri günümüzde, diğeri 300 yıl önce, mülkün köleleştirilmiş insanlar tarafından işletildiği dönemde, Oliver'nin ataları giderek daha acımasız hale geldi ve Tacky's War olarak bilinen ayaklanmalar zinciri gerçekleşti. Doğaüstü bir ton, iki zaman çizgisini giderek daha fazla birbirine karıştırıyor: Rüya dünyasında ortaya çıkan görüntüler ve nesneler, sömürgeciliğin soyut dehşetine somut bir biçim veren belgelerle birlikte evde hayata geçiyor.

Dizinin en büyük gücü atmosferi ve Mbatha-Raw's ölçülü, gerilim taşıma performansıdır. En tartışmalı unsuru paranormal yönüdür: Bazıları için geçmişin bastırılmış anılarını dile getiren güçlü bir metafor; diğerleri için gerçek tarihsel korkunun tür heyecanına dönüştürülmesi. Sonuç, kusurlu olmasına rağmen unutulması zor bir seridir.`,
  },

  {
    slug: "spider-man-brand-new-day-sf-chronicle-inceleme",
    origTitle: "Spider-Man: Brand New Day",
    title: "“Spider-Man: Brand New Day”, Tom Holland’ın Şimdiye Kadarki En İyi Spider-Man Filmi",
    excerpt: "San Francisco Chronicle eleştirmeni Mick LaSalle’e göre Destin Daniel Cretton’ın filmi, Holland’ın üçlemesindeki tüm hikâye ipliklerini birleştiriyor ve seriyi hem daha duygusal hem de daha eğlenceli bir noktaya taşıyor.",
    rating: "4/5",
    imdbRating: "8.1",
    image: "/__l5e/assets-v1/46f9cd50-4da3-4eb7-b447-b94a66df09bd/spiderman-brand-new-day-hq.jpg",
    body: `San Francisco Chronicle'deki Mick LaSalle's incelemesine göre 'Spider-Man: Brand New Day', Tom Holland's Spider-Man filmlerinin en iyisidir. Bunun nedeni gösterişli bir final savaşı ya da sürpriz kamera oyuncuları değil, filmin Peter Parker'ye bir kez daha sıradan, kırılgan ve yalnız bir genç adam gibi davranmaya cesaret etmesidir.

'No Way Home'nin sonunda herkesin hafızasından silinen Peter artık bir takıma ya da aileye yaslanamaz. Cretton bu dibe vuran anı bir kayıp hikayesi gibi kurguluyor: Asıl soru, kahramanın gücü değil, kimin için savaştığı oluyor. As LaSalle, serinin ilk kez süper kahraman mitolojisinden ziyade bir yetişkinliğe geçiş hikayesine benzediğine dikkat çekiyor.

Holland'nin performansı bu tonu taşıyacak kadar olgun. Aksiyon sahneleri gereksiz CGI karmaşasından kaçınıyor, mizah karakterden organik olarak doğuyor ve filmin New York'si yeniden somut, kalabalık ve tanıdık geliyor.

Sonuç, Marvel'ın son aşamadaki formül yorgunluğuna karşı sağlam bir panzehir: hem çizgi roman okuyucularını hem de süper kahraman filmlerinden tükenmiş izleyicileri tatmin edebilen şaşırtıcı derecede duygusal bir yaz filmi.`,
  },
  {
    slug: "animal-farm-serkis-orwell-adaptation",
    origTitle: "Animal Farm",
    title: "“Animal Farm” — Andy Serkis’in Orwell Uyarlaması Bir Klasiği Şekere Buluyor",
    excerpt: "Seth Rogen, Laverne Cox ve Glenn Close’un seslendirdiği yeni animasyon, Orwell’ın Stalinizm alegorisini mutlu sonla biten bir gösteriye çevirerek yazara ihanet ediyor; Guardian’a göre yılın en cesaretsiz uyarlaması.",
    rating: "2/5",
    image: animalFarmAsset.url,
    body: `Guardian'nin incelemesine göre Andy Serkis tarafından yönetilen ve Nicholas Stoller tarafından yazılan yeni 'Animal Farm' animasyon filmi, George Orwell's 1945 klasiğine karşı işlenen en tatsız sinema suçlarından biri. Ucuz görünen dijital estetiğin yanı sıra, filmin asıl sorunu Orwell's Stalinism alegorisini Disney tarzı mutlu sonla etkisiz hale getirmesidir.

Seth Rogen , Laverne Cox , Glenn Close ve Kieran Culkin'nin yer aldığı seslendirme kadrosu güçlü ancak karakterlerin ağzından çıkan diyalog, orijinalin acımasız politik zekasından yoksun. Napoleon'nin yükselişi, Snowball'nin sürgünü ve "Tüm hayvanlar eşittir, ancak bazıları diğerlerinden daha eşittir" cümlesinin ardındaki soğuk ironi; bunların hepsi filmde yumuşatılıyor.

**Nerede tökezliyor?** Serkis'nin yönetmen olarak seçimleri şaşırtıcı derecede temkinli. 'Mowgli' ve 'Breathe' gibi eserlerden tanıdığımız duygusal derinlik burada hiçbir yerde bulunmuyor. Film, genç izleyicilere "uygun" olabilmek için hem şiddeti hem de politik ağırlığı sansürlüyor; ancak bu iki öğeyi çıkardığınızda geriye ne kitabın kalbi ne de bağımsız bir animasyon çalışması kalır.

**Kararı.** Guardian'ye göre 'Animal Farm', film uyarlamalarının nasıl yapılmaması gerektiğine dair bir örnek olay. Orwell'nin metnini hiç okumamış bir çocuk için bile monotondur ve okumuş olanlar için ise düpedüz çileden çıkarıcıdır.`,
  },

  {
    slug: "the-day-she-returns-hong-sang-soo",
    origTitle: "The Day She Returns",
    title: "“The Day She Returns” — Hong Sang-soo’dan Ağır Ağır Açılan, İçkili Bir Tefekkür",
    excerpt: "Kore sinemasının üretken, düşük bütçeli sinema ustası Hong Sang-soo, oyunculuğa ara vermiş bir kadının dönüşünü anlattığı yeni siyah-beyaz filmiyle tanıdık ama gizemli biçimde bağımlılık yaratan bir işe daha imza atıyor.",
    rating: "4/5",
    image: theDayShereturnsAsset.url,
    body: `Guardian'nin incelemesine göre, üretken Koreli sinema ustası Hong Sang-soo'nin yeni siyah beyaz filmi 'The Day She Returns' sadık takipçilerini şaşırtmayacak ve bu iyi bir şey. Uzun çekimler, sabit kamera açısı, restoran masaları üzerindeki konuşmalar ve ani, açıklanamaz yakınlaştırmalar olması gerektiği yerde.

Song Seon-mi uzun bir aradan sonra sinemaya dönmeye çalışan bir oyuncuyu canlandırıyor. Eski iş arkadaşları, yeni yönetmen adayları ve unutulmaya yüz tutmuş bir aşk arasında kalan karakter, Hong'nin tipik "gündüz içki içme" sahnelerinde soju şişeleri içerken geçmişiyle yüzleşiyor.

**Ne doğru oluyor?** Guardian'nin belirttiği gibi, "hiç kimse gündüz içki içmeyi Hong gibi göstermiyor" ve bu tekrarlar filmde bir tür meditasyon ritmi yaratıyor. Karakterlerin söyledikleri kadar söylenmemiş bıraktıkları da önemlidir; uzun sessizlikler, tereddütler ve yarım kalan cümleler filmin duygusal omurgasını oluşturuyor.

**Kararı.** 'The Day She Returns', neredeyse otuz filmlik Hong Sang-soo's filmografisine yeni bir başyapıt eklemeyebilir - ama mesele asla bu değildi. Guardian'nin ifadesiyle, "her zamanki gibi gizemli bir şekilde bağımlılık yaratan" bir başka Hong deneyimi. Onun evrenine ilk kez girenler için de kötü bir başlangıç ​​noktası değil.`,
  },

  {
    slug: "project-hail-mary-boston-globe-inceleme",
    origTitle: "Project Hail Mary",
    title: "“Project Hail Mary” İncelemesi: Ryan Gosling ile Bir Uzaylının Şaşırtıcı Dostluğu",
    excerpt: "Boston Globe eleştirmeni Odie Henderson’a göre Lord ve Miller’ın filmi hem büyük bir uzay macerası hem de beklenmedik ölçüde duygusal bir karakter incelemesi: “HAL 9000 ile Dave’in en iyi arkadaş olduğunu düşünün.”",
    rating: "4/5",
    imdbRating: "7.9",
    image: "/__l5e/assets-v1/78a6dda8-0fdc-4c61-bace-3f103cff7d74/632433bdb55f.avif",
    body: `Imagine HAL 9000 ve Dave, '2001: A Space Odyssey'de çok iyi arkadaşlar ve 'Project Hail Mary''nin ne tür bir film olduğu hakkında iyi bir fikriniz olacak. Büyük ölçüde uzayda geçen ve Ryland Grace (Ryan Gosling) ile "Rocky" adını verdiği bir uzaylı arasındaki ikili ilişkiler etrafında inşa edilen film, bir Andy Weir romanının en son uyarlamasıdır. Weir'nin 2015'teki 'Marslı' filminde olduğu gibi, senaryo yine Drew Goddard tarafından yazılıyor; zekice hazırlanmış, iyi kurgulanmış bir senaryo. Christopher Miller ve Phil Lord, 2014 yapımı '22 Jump Street'den bu yana ilk kez yönetmen koltuğuna oturuyor.

Weir'nin 2021 tarihli bilim kurgu romanı hayranlar tarafından çok seviliyor. Ancak kitabı okumuş olsam bile, bu muhteşem görüntülerin IMAX 70mm ekrana yayıldığını veya Daniel Pemberton'nin çarpıcı skorunu hayal edebileceğimi sanmıyorum. Rocky'nin neye benzeyeceğini de tahmin edemezdim: CGI'nin her şeye hakim olduğu bir çağda, onun kısmen bir kuklayla hayata geçirileceğini asla tahmin edemezdim.

Film tamamen tatmin edici bir "sahil okuması" gibi akıyor; Kahramanımız geçmişte - ya da daha doğrusu ötesinde - başına ne geldiğini anlamaya çalışırken tempo kasıtlı olarak sakin tutuluyor. Earth. Strategic geri dönüşleri, bir lise fen bilgisi öğretmeni olan Grace'nin insanlığı kurtarma görevi için nasıl uzaya gittiğini ortaya koyuyor. Grace bir gemide uyanır, baktığı yıldızın güneş sistemimizde olmadığını fark eder ve geminin bilgisayarından pilotun ve diğer yolcuların öldüğünü öğrenir.

Görev, Venüs'ten Güneş'e uzanan "Petrova çizgisi"nin oluşturduğu Sun. A'yi yiyen ve "uzay zerreleri" onu kemiren bir tür uzaylı virüsüne çare bulmak için insanları derin uzaya tek yönlü bir yolculuğa göndermek. Aynı kader diğer galaksileri de bekliyor; ama bağışık görünen bir yıldız var ve Grace'nin gemisi oraya doğru gidiyor. Rocky de kendi gezegenini kurtarmak için benzer bir görevde. İkilinin karşılaşması "sevimli bir buluşma"dan ziyade "meraklı bir buluşma"dır: İlk başta birbirlerini izlerler ve korku içinde geri çekilirler. Once Grace iletişim kurmanın bir yolunu buluyor ve bir çeviri kütüphanesi oluşturuyor; film başarılı bir arkadaşlık komedisine dönüşüyor; 'The Odd Double'ın bir varyasyonu; Felix rolünde Grace ve Oscar. Gosling rolünde Rocky, insan olmayan bir başrol oyuncusunun karşısında sıra dışı bir rol oynuyor: bizi bu ilişkinin sevinç ve üzüntü hissedecek kadar sağlam ve karmaşık olduğuna ikna eden kişi o.

Dünya'ya giden geri dönüş sahneleri bize soğukkanlı hükümet ajanı Eva Stratt'yi (kusursuz bir Sandra Hüller) ve onun bilim adamlarından oluşan ekibini sunuyor. Grace isteksiz bir katılımcıyla başlıyor; Stratt, eski işinden kovulmasına neden olan teorilere inanan tek kişiydi. Uzay sahneleri gibi, bu bölümler de sürece odaklanıyor: bazıları cevaplanmış, bazıları cevaplanmamış bir dizi deney ve soru. Film, izleyicinin zekasına ve dikkat aralığına güvenilen bir sinema dönemini hatırlatıyor.

Bu, Lord ve Miller'nin ağır bir film yaptığı anlamına gelmez. Yerçekimi problemlerinden gergin uzay yürüyüşlerine ve patlamalara kadar bir uzay filminden bekleyeceğiniz her şey burada; efektler birinci sınıftır ve büyük ekranda (özellikle 70 mm'de) harika görünür. Ancak tüm bu gösterinin ötesinde, 'Project Hail Mary', jenerikler ilerledikçe beklenmedik biçimde dokunaklı, acı-tatlı bir karakter çalışması: insan ve uzaylı arasında bir pas de deux.

Yönetmenler: Christopher Miller , Phil Lord. Screenplay : Drew Goddard (Andy Weir'nin romanından uyarlanmıştır). Oyuncular: Ryan Gosling, Sandra Hüller, James Ortiz. 156 dakika. PG-13.`,
  },


  {
    slug: "they-fight-boxing-drama-holland",
    origTitle: "They Fight",
    title: "“They Fight” — André Holland’ın Boks Draması Duygusal Bir “Yumruk” Gibi",
    excerpt: "“Creed” ve “Million Dollar Baby” geleneğini sürdüren “They Fight”, unutulmaz bir André Holland performansıyla Washington DC’nin sert atmosferinde şefkat ve sıcaklık buluyor; Guardian’a göre yılın en dokunaklı spor filmlerinden biri.",
    rating: "4/5",
    image: theyFightAsset.url,
    body: `Guardian'nin incelemesine göre, 'They Fight', 'Creed' ve 'Million Dollar Baby''den türeyen bir boks draması — ve boksun neden insanlık durumu için ebedi bir alegori olarak kaldığını bir kez daha kanıtlıyor. Bu kez tuvale çarpma tehlikesiyle karşı karşıya olan adam, André Holland'nin canlandırdığı Walt'dir.

Bir zamanlar Washington DC's boks sahnesinde yükselen bir yıldız olan Walt, kariyerini şehrin uyuşturucu ticaretine kaptırdı. Uzun bir hapis cezasının ardından şartlı tahliyeyle serbest bırakılan karakter, eski kız arkadaşı (Samira Wiley) ve küçük oğullarıyla birlikte bir hayat kurmaya çalışır. Wendell Pierce, Walt'nin akıl hocası olarak kadroya ağırlık katıyor; Anthony B Jenkins, Walt'nin oğlu olarak filmin en dokunaklı sahnelerinden bazılarında onun ortağıdır.

**Ne doğru oluyor?** Holland'nin performansı, Guardian'nin deyimiyle "kalınamaz"dır. Ringte sertleşen, evinde çocuğunun önünde yumuşayan ve geçmişiyle yüzleşirken kırılan bir adamı taşıyor; üstelik tek bir abartılı hareket bile yapmadan. Yönetmenin Washington DC'yi çekme şekli de dikkat çekicidir: turistik anıtlar değil, terk edilmiş spor salonları, apartman koridorları ve gece geç saatlere kadar süren otobüs durakları.

**Kararı.** ' They Fight' tür geleneklerini yeniden icat etmez - ancak içinde çalıştığı türü büyük bir beceri, hassasiyet ve dayanıklılıkla kullanır. Bu, Holland için ödül sezonu konuşmalarını başlatması gereken bir performans; Andscape'in bugüne kadarki en olgun prodüksiyonu.`,
  },
  {
    slug: "sterling-point-inceleme-genc-draması-prime-video",
    origTitle: "Sterling Point",
    title: "“Sterling Point” İncelemesi: Gossip Girl Ekibinden Kusursuz Bir Kaçış Dizisi",
    excerpt: "Kanada’nın cennet gibi bir adasında geçen bu büyüme hikâyesi, entrika ve melodram bakımından oldukça zengin: Son dönemin gençlik dizilerindeki karanlığın yerine sıcaklığı, mizahı ve şaşırtıcı derecede sürükleyici bir gizemi koyuyor.",
    rating: "4/5",
    imdbRating: "7.0",
    image: sterlingPointAsset.url,
    body: `Dürüst olacağım: Prime Video'nin yeni reşit olma dizisi 'Sterling Point' ile sıradan bir lise draması bekleyerek dişlerimi gıcırdatmaya hazırlandım. Dizi, güzel bir Kanada adasında güneşli bir kendini keşfetme yolculuğu için New York'den ayrılan A tipi bir genci konu alıyor. Görünüşte mütevazı, yaz kampı tadında bir hikaye; ancak geçen yılın sezonluk fenomeni olan 'The Summer I Turned Pretty'nin üçüncü sezonu gibi, gençlik draması nişinin sınırlarını aşarak nefis sabunlu bir şeye doğru itiyor.

Liderimiz Annie (Ella Rubin), bir yaz iş programından reddedilmeyi hâlâ atlatamamış, 17 yaşında endişeli bir genç. Tam o sırada, görüşmediği anne tarafından büyükbabasının ona gizemli bir miras bıraktığı haberi gelir. Annelerini yıllar önce kaybetmiş olan Annie ve ikizi Connor (Keen Ruffalo), babalarının (Jay Duplass) rahatsızlığına rağmen aile sırlarını araştırmaya başlarlar. Kanada'da kendilerine bir ev miras kaldığını öğrenen Annie, annesinin hayatıyla ilgili yanıtlar bulmak için gizli bir yolculuğa çıkar.

Sterling Point'de Annie hızla özgür ruhlu bir arkadaş grubu bulur: Oona grubunun kaygısız, cinsel açıdan kendine güvenen temel taşı, Annie'yi cılız bir deniz uçağıyla adaya taşıyan şakacı yerel çocuk Ellis (Jacob Whiteduck-Lavoie), hassas New Yorker Rory (Daniel Quinn-Toye) ), Timothée Chalamet ve Ramona (Amélie Elisabeth Hoefe) ile karşılaştırılan.

Gossip Girl'nin yaratıcılarından gelen dizi, ekibin en iyi yaptığı şeyi yapıyor: keskin diyaloglar, hızlı ilerleme ve tam olarak doğru anlarda dağıtılan sırlar. Ama bu sefer karanlık ve zulüm yerine sıcaklık ve mizah var. Sonuç olarak yazın en rahatlatıcı, en sürükleyici kaçışçı televizyonu ortaya çıktı.`,
  },

  {
    slug: "lucky-inceleme-anya-taylor-joy-apple-tv",
    origTitle: "Lucky",
    title: "“Lucky” İncelemesi: Anya Taylor-Joy’un Kaçışı Hem Tempolu Hem Düşündürücü Bir Suç Gerilimi",
    excerpt: "TVGuide eleştirmeni Keith Phipps’e göre Apple TV’nin yedi bölümlük mini dizisi, bir dolandırıcının becerisine hayran bırakırken cezasız kurtulmanın bedelini de sorgulatıyor; Taylor-Joy’a Annette Bening ve Timothy Olyphant eşlik ediyor.",
    rating: "8.5/10",
    imdbRating: "7.6",
    image: "/__l5e/assets-v1/fe99a6fc-9e5a-4fcc-860e-c1f9d28861e3/742ec822fb31.webp",
    body: `Marissa Stapley, 2021 tarihli romanı 'Lucky'yi yazarken, dolandırıcıların nasıl çalıştığını soygun filmleri izleyerek, konuyla ilgili kitaplar okuyarak ve saf kurbanları paralarından ayırmayla ilgili YouTube videolarını inceleyerek öğrendiğini söylüyor. Ancak gerçek ilham kaynağını ancak çok sonra hatırladığını yazıyor: on yaşındayken annesinin tüm birikimini bir dolandırıcıya kaptırmasını izlemek. Stapley şöyle diyor: "Dolandırılma gerçeğinin gerçekte ne kadar acımasız olduğu göz önüne alındığında, yetenekli bir kurgu dolandırıcıyı desteklememenin neden neredeyse imkansız olduğunu merak ediyorum."

Bu bariz çelişki, romanın uyarlamasının tam kalbinde yer alıyor. Gösteri, izleyicinin, diğer insanların açgözlülüğünü ve iyi niyetini sömürmenin hem kurbanlar hem de dolandırıcılar açısından insani maliyetini asla gözden kaçırmadan, kahramanın becerisine hayran kalmasına olanak tanıyor. Jonathan Tropper ("Warrior", "Your Friends & Neighbors") ve ortak dizi sorumlusu Cassie Pappas ("Silo") tarafından yaratılan 'Lucky', hızlı bir şekilde açılıyor ve yedi bölümü boyunca hiç yavaşlamıyor. Ancak uzun bir oyun oynayan bir dolandırıcı gibi, dizinin ikinci yarısı tehlikede olanın sadece kahramanın hayatı değil, ruhu olduğunu ortaya koyuyor.

Anya Taylor-Joy's Lucky seriyi koşarken başlatıyor ve son bölüme kadar çalışmayı bırakmıyor. Geriye dönüşlerin ortaya çıkardığı gibi, bu onun dikkatle hazırlanmış planının bir parçası değildi: Milyonlarca dolar nakde çevirdikten ve kocası Cary (Drew Starkey) ile Caesar's Palace'de kutlama yaptıktan sonra ülkeyi terk etmesi gerekiyordu. Ancak aşırı uyuduktan ve şiddetli bir baş ağrısıyla uyandıktan sonra Cary'nin parayla birlikte ortadan kaybolduğunu fark eder. Daha da kötüsü, polis kumarhanenin çıkışını kapatmıştır ve Lucky, odasına geri dönmeye çalışırken karmaşık geçmişinden bir figür olan FBI ajanı Billie Rand'yi (Aunjanue Ellis-Taylor) görür.

Aslında Lucky'nin hayatındaki neredeyse herkesle karmaşık bir geçmişi var. Bu servete, babası John'nin (Timothy Olyphant) onu tek başına yetiştirirken ve ona aldatma sanatını öğretirken kurduğu dolandırıcılık tarafından hazırlandı; John hapiste ama bunu geçici bir aksilik olarak görüyor. Diğer ilgili taraflar arasında Malibu'daki bir at çiftliğinde saygın bir hayat sürdüğü görünen soğukkanlı gangster Priscilla (Annette Bening — ayrıca Lucky'nin kayınvalidesi) ve Priscilla'nin bile sinirlerini bozan mafya patronu Whittaker (William Fichtner) yer alıyor.

Dizi, kahramanın her şeyden önce hayatta kalma içgüdüsüyle hareket ettiğini daha ilk andan itibaren ortaya koyuyor. Çevresindeki insanların incinmesini istemiyor ve insanların iyi niyetini istismar etmek için yalan söylemekten hoşlanmıyor; ama onu kovalayanlardan kaçmak için her ikisini de kaçınılmaz olarak görüyor. Sürükleyici aksiyon sahneleri ve amansız bir huzursuzluk hissi bu perspektifi destekliyor. Yine de sezon ilerledikçe gizli akıntının sesi daha da artıyor: Lucky, şimdiye kadar bildiği tek hayatı yaşamanın bedelini, planlar işe yaradığında bile pişmanlığın onu kemirmesiyle gelen yalnızlığı hesaba katmaya başlıyor.

Taylor-Joy's performansının gücü burada ortaya çıkıyor: Bu kadar çarpıcı bir yüze sahip birinin fark edilmeden hareket etmesinin ne kadar zor olması gerektiğini unutuyorsunuz. Etrafındaki oyuncu kadrosu da bir o kadar güçlü. Baykuş gözlüklerinin ardında Bening, kariyerinde nadiren bu kadar soğuk (ve tüyler ürpertici) bir karakteri canlandırıyor. Though Olyphant ilk bölümlerde idareli bir şekilde ortaya çıkıyor, ekrana tamamen çıktığında beklemeye değer olduğunu kanıtlıyor ve her zamanki zahmetsiz çekiciliğinin karanlık tarafını ortaya çıkarıyor. Ellis-Taylor, kanunun diğer tarafında, duyguları bazen Lucky'ninkini yansıtan bir karakter olarak mükemmel; Clifton Collins Jr. ayrıca Priscilla'nin sadık uygulayıcısı olarak güzel anlar yaşıyor.

Tropper ve Pappas'nin aksiyon ve gerilim dalgaları arasına özenle yerleştirilmiş nefes alma odasıyla birleştiğinde, akıcı olabilecek senaryonun altında atan bir kalp ortaya çıkıyor. Watching Lucky's kara büyü canlandırıcıdır; ancak dizi, kahramanı gibi, heyecan azaldığında içine yerleşen boşluğu biliyor.

İlk iki bölümün prömiyeri 15 Temmuz Çarşamba günü Apple TV'de yapıldı; sonraki bölümler haftalık olarak yayınlanır.`,
  },


  {
    slug: "deep-water-aaron-eckhart-shark",
    origTitle: "Deep Water",
    title: "“Deep Water” — Uçak Kazasından Kurtulanlar Köpekbalıklarıyla Varoluşsal Rulet Oynuyor",
    excerpt: "Renny Harlin’in yeni felaket filmi, köpekbalıklarıyla dolu sularda hayatta kalmaya çalışan uçak yolcularını izliyor; Aaron Eckhart’ın başrolde olduğu film, aksiyonla başkalarının felaketinden alınan hazzı tam kıvamında buluşturan bir tür ziyafeti.",
    rating: "3/5",
    image: deepWaterAsset.url,
    body: `Guardian'nin incelemesine göre, iyi çekilmiş bir felaket filmi, başka hiçbir şeyin yapamayacağı kaşıntıyı giderir: duygusallığı, gerilimi ve schadenfreude'u küçük, küçük aksiyon paketlerinde paketler. Renny Harlin'nin yeni çalışması 'Deep Water' bunu tam olarak biliyor ve öncüllerine göz kırpsa da ne yaptığının tamamen farkında.

Aaron Eckhart, çoğunlukla ikinci sınıf film yıldızlarını taşıyan bir Amerikan uçağının köpek balıklarının istila ettiği sulara düşmesinin ardından hayatta kalanlara liderlik etmek için ayağa kalkan karakteri canlandırıyor. Molly Belle Wright'nin canlandırdığı genç yolcuyla olan neredeyse "baba-kız" bağı, filmin duygusal dayanak noktasıdır. Gerisi klasik Harlin: köpekbalığı saldırıları, patlayan yakıt tankları, yolcuların birbirini suçlaması ve okyanus üzerinde hızla kararan bir gökyüzü.

**Ne doğru oluyor?** Harlin ('Cliffhanger,' 'Deep Blue Sea') türün ritmini biliyor: Film 100 dakikanın biraz üzerinde sürüyor, üzerinde hiç yağ yok. Köpekbalığı sahneleri (kısmen CGI, kısmen animatronik) izlenebilir durumda; Sinema salonunda patlayan ses tasarımı IMAX'nin seçilmesini sağlıyor.

**Nerede tökezliyor?** Karakterler sıradan tiplerdir: alkolik pilot, kibirli iş adamı, paniğe kapılan anne, cesaretini çok geç bulan genç. Diyalog çoğu zaman didaktik bir hal alıyor ve tadı "Discovery Channel özel"i gibi oluyor.

**Kararı.** ' Deep Water' bir başyapıt değildir ve olmayı da hedeflememektedir. Ancak köpek balıklarının, panik atakların ve alaycılığın doğru karışımını arayan bir yaz sonu tiyatro gezisi için bu, tam olarak doğru sıcaklıkta servis edilen bir tür zevktir.`,
  },

  {
    slug: "the-odyssey-nolan-inceleme",
    origTitle: "The Odyssey",
    title: "“The Odyssey” — Nolan’ın Tunç Çağı Destanı Görkemli Ama Kalbi Soğuk",
    excerpt: "IMAX 65 mm formatında çekilen Christopher Nolan imzalı “The Odyssey”, Matt Damon ve Zendaya’nın başrollerinde büyük bir mitolojik yolculuk sunuyor; ancak Rolling Stone’a göre teknik ihtişamına zaman zaman duygusal bir soğukluk eşlik ediyor.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/4fde943e-5272-44ce-971b-0849796439e1/fac9b0f2884e.webp",
    body: `Rolling Stone'deki David Fear's incelemesine göre, Christopher Nolan's 'The Odyssey', yönetmenin bugüne kadar denediği en cesur resmi deney: Homeros'un destanını IMAX 65 mm'de, çoğunlukla gerçek mekanlarda ve minimum dijital efektlerle sahnelemek.

Matt Damon's Odysseus baba, koca, savaşçı, kraldır ve Bronze Age. With'de kaybolmuş bir ruhtur, sakalı ve yorgun bakışları, çok fazla şey görmüş bir adamın huzursuzluğunu taşır. Zendaya (Penelope), Tom Holland (Telemachus), Anne Hathaway (Athena), Charlize Theron (Calypso), Lupita Nyong'o ve Robert Pattinson, kadronun geri kalanını tamamlıyor.

**Ne doğru oluyor?** Nolan'nin kamera kompozisyonları epiktir: Ithaca kıyılarındaki uzun çekimler, Tepegöz mağarasının karanlık iç mekanları, siren sekansındaki ses tasarımı. Ludwig Göransson's skoru tanıdık Nolan yoğunluğuna sahiptir ancak aynı zamanda eski bir tonu da yakalar. Damon'nin performansı Cooper'ın 'Interstellar' filmindeki performansından bu yana yaptığı en duygusal çalışma oldu.

**Nerede tökezliyor?** Fear'a göre Nolan'nin diğer filmlerinden tam olarak beklediğimiz yer: karakterler arasındaki yakınlık. Filmin duygusal omurgası olması gereken Penelope - Odysseus ilişkisi soğukkanlı ve mesafeli kalıyor. Zendaya'nin performansı iyi ancak karakterin ekran başında kalma süresi çok az. Telemachus alt grafiği de aynı sorundan muzdariptir.

**Kararı.** 'The Odyssey', Nolan'nin 'Dunkirk'ten bu yana görsel açıdan en etkileyici filmi; Sinemada IMAX 65mm'de izlenmeyi gerektiren ender bir deneyim. Ancak Homer'ın gerçek gücü olan yuva özlemi bazen gösterinin gölgesinde kaybolur. Bu ödül sezonunda teknik kategorilerde güçlü bir rakip ama Nolan'nin kariyerinin zirvesi değil.`,
  },

  {
    slug: "the-hawk-will-ferrell-golf",
    origTitle: "The Hawk",
    title: "“The Hawk” — Will Ferrell’ın Golf Komedisi Bir “Talladega Nights” Değil",
    excerpt: "Netflix’in Will Ferrell başrollü yeni golf komedisi “The Hawk”, yıldızının klasikleşmiş spor komedilerinin ağırlığına yaklaşamıyor: Ferrell tanıdık ama yorgun, tempo düşük, kahkahalar ise seyrek.",
    rating: "2.5/5",
    image: "/__l5e/assets-v1/97de953b-ae63-455e-a185-eebe141392f2/4a4ea25b4356.webp",
    body: `Variety'deki Alison Herman's incelemesine göre, Will Ferrell's yeni Netflix golf komedisi *The Hawk*, 'Talladega Nights' ve 'Blades of Glory' gibi izleyici hafızasına kazınan spor komedileriyle aynı ligde rekabet etmeyi vaat ediyor - ancak sahaya girdiğinde o ligin çok altına düşüyor.

Ferrell, kariyerinin sonuna yaklaşan huysuz, alkolik, solgun profesyonel golfçü Lonnie "The Hawk" Hawkins'yi canlandırıyor. 2004 şampiyonluğunu kazandıktan sonra kariyeri çöktü ve şimdi PGA Champions Tour. Molly Shannon'de eski karısını, Jimmy Tatro sinir bozucu genç rakibini ve Luke Wilson hasta menajerini canlandırarak geri dönüş peşinde.

**Sorun nerede?** Ferrell'nin karakter tipi oldukça tanıdıktır: patlayıcı patlamalara eğilimli içi boş, telaşlı, yaşlanan atlet. Sorun türün kendisi değil, betiğin bu türe söyleyecek yeni bir şey vermemesidir. Yönetmen Jason Woliner ('Borat Subsequent Moviefilm') temayı ciddiye almakla saf aptallık üretmek arasında bir denge kuramıyor; sonuçta ne Talladega Nights'' anarşik enerji ne de 'Kalamar ve Balina' gibi bir şeyin acı-tatlı düşüş draması var.

**Onu ne kurtarır?** Molly Shannon her sahneye enerji katıyor; Luke Wilson's "yorgun ama sadık" yönetici sürekli izlenmeye devam ediyor. Netflix'nin son yıllardaki en "kartpostal güzelliğindeki" komedilerinden biri olan Herman'a göre golf sahası sinematografisi çok hoş.

**Kararı.** *The Hawk*, bir Will Ferrell filmi izlemek kadar kolaydır ve bir film kadar çabuk unutulur. Ferrell'nin spor-komedi klasiklerine ayıracak vaktinin kaldığına hâlâ inananları tatmin etmeyecek; klasikleri hiç görmemiş olanlar için zayıf bir giriş noktasıdır.`,
  },
  {
    slug: "evil-dead-burn",
    origTitle: "Evil Dead Burn",
    title: "“Evil Dead Burn” — Serinin En Karanlık, En Sinir Bozucu Bölümü",
    excerpt: "Yönetmenliği Sébastien Vaniček’in devraldığı yeni Evil Dead filmi, kanlı fiziksel komediyi bir kenara bırakıp saf bir kâbusa dönüşüyor. Başrolde Souheila Yacoub var; Deadites ise bütün güçleriyle sahnede.",
    rating: "4/5",
    image: "/__l5e/assets-v1/f0e6c61d-6c5a-4d10-b1c6-db14f1dc5a21/77eb447d9b8f.avif",
    body: `Empire'deki Ben Travis's incelemesine göre, Evil Dead serisi başından itibaren ton ölçeğinde sallandı: bir tarafta *Evil Dead II* ve *Army Of Darkness*'nin sert kahkahaları, diğer tarafta Sam Raimi's orijinalinin saf dehşeti ve Fede Alvarez's 2013'ün yeniden yapımı. Lee Cronin's *Evil Dead Rise* iki kolu birleştirdi; Artık devraldığı Sébastien Vaniček's *Evil Dead Burn*, sinir bozucu derecede etkili sonuçlarla kararlı bir şekilde iğneyi en karanlık uç noktaya doğru sallıyor.

Hikaye, istismarcı kocasını (George Pullar) bir araba kazasında kaybeden Alice (Souheila Yacoub) üzerine odaklanıyor. Kişisel cehenneminin sona ereceğine dair bir işaret yok: Kocası huzura kavuşurken Deadites kapıyı çalmaya başlıyor. Vaniček, aile içi şiddetin mecazi ağırlığının üstüne doğaüstü korkuyu eklemekten çekinmiyor; bu seçim filmin en rahatsız edici sahnelerinde bile kalıcı bir alt metin bırakıyor.

Vaniček'nin yönetmenlik dili kağıt kadar gerilimden yanadır: kamera uzun mesafeler boyunca geniş çekimler yapar, ses tasarımı titreşir ve kan Cronin'inki kadar cömert ama çok daha az eğlencelidir. Yacoub'nin performansı filmin dayanak noktasını oluşturuyor; travma taşıyan bir bedenin aniden avdan yırtıcıya dönüşebileceğini inandırıcı kılıyor.

Empire'ye göre, *Evil Dead Burn*, seriye yeni hayranlar kazanmaktan çok, uzun süredir hayranlara "bu şeylerin sizi gerçekten hala korkutabileceğini" hatırlatıyor. Splatstick'i arayanlar yanlış tiyatroda; Kabus arayanlar için bu şimdiye kadarki en tavizsiz Evil Dead deneyimlerinden biri.`,
  },
  {
    slug: "the-furious",
    origTitle: "The Furious",
    title: "“The Furious” — Hong Kong Aksiyon Sinemasının Kemik Kıran Dönüşü",
    excerpt: "Aksiyon koreograflığından yönetmenliğe geçen Kenji Tanigaki, Taken’ın temel iskeletini alıp iki saatlik kesintisiz bir dövüş gösterisine dönüştürüyor. Xie Miao ve Joe Taslim bir an olsun hız kesmiyor.",
    rating: "4/5",
    image: "/__l5e/assets-v1/7809f3ca-276b-4fd6-aabb-6fe59c9e965f/81623f60a4b3.avif",
    body: `Empire'deki Harry Stainer's incelemesine göre, *The Furious*'nin kana bulanmış son düellosu geldiğinde, birisi yumruklanmadığı, tekmelenmediği veya yüzünün masaya çarpmadığı iki saatlik çalışma süresi boyunca beş dakikayı saymakta zorlanırsınız. Aksiyon koreografisinden yönetmen koltuğuna geçen Kenji Tanigaki bu alanda kendini tamamen evinde hissediyor; *Taken*'nin "kızım kaçırıldı" iskeletini alıyor ve onu Hong Kong dövüş sanatları sinemasının tam kapsamlı kutlamasına sarıyor.

Kızı kaçırılan dilsiz bir babanın (Xie Miao), çocuk kaçakçılığı yapan bir çetenin peşine düşmek için bir gazeteciyle (Joe Taslim) iş birliği yaptığı hikaye, sayfada yeni bir şey vaat etmiyor. But Tanigaki'nin içgüdüleri doğrudur: Karakterlerinin konuşmak yerine kavga etmesine izin verir. Setler, koridorlar, sokaklar, restoran mutfakları; hepsi neredeyse tek çekimlik koreografide kullanılıyor. Xie Miao's fiziksel dil diyalog eksikliğini fazlasıyla telafi ediyor; Joe Taslim en sert vuruşlarını sanki hiç çaba harcamadan yapıyormuş gibi yapıyor.

Filmin başarısı, türün izleyicisinin tam olarak ne istediğini bilmesinde ve bunu hiçbir aksama olmadan sunabilmesinde yatıyor. Duygusal derinlik arayanlar farklı bir tiyatroya yönelmeli; ama net coğrafyaya sahip, kemik kıran, nefes kesen dövüş sahneleri isteyen herkes için bu yılın en tatmin edici aksiyon filmlerinden biri.`,
  },
  {
    slug: "500-miles",
    origTitle: "500 Miles",
    title: "“500 Miles” — Sheffield’dan Dingle’a Uzanan Şefkatli Bir Yol Filmi",
    excerpt: "Morgan Matthews’ın duyarlı yol filminde iki kardeş, dedelerine (Bill Nighy) kavuşmak için evden kaçıyor. Gözyaşları garanti.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/295d7bf9-7708-4133-84a9-9137defda072/a471559adef3.avif",
    body: `Empire'deki Barry Levitt's incelemesine göre, Morgan Matthews' *500 Miles*, ismine rağmen bir Proclaimers müzikali değil - ancak duygusal olarak o şarkıyla aynı damardan besleniyor. Finn (Roman Griffin Davis) ve küçük kardeşi Charlie (Dexter Sol Ansell) evden kaçtılar ve planları basit: ayrı oldukları büyükbabalarıyla (Bill Nighy) yeniden bir araya gelmek ve ailelerini yeniden bir araya getirmek için Sheffield'den Ireland's Dingle kıyısındaki küçük bir kasabaya seyahat etmek.

Film, kartpostal gibi mükemmel bir aile mutluluğu gününü gösteren bir geri dönüşle açılıyor: kuma inşa edilmiş kaleler, kumsalda saklambaç, torunlarına sarılmış büyükanne ve büyükbabalar. Bugünün karanlığı o kayıp cennetin ışığıyla tersine aydınlanıyor. Matthews 'yönelimi kadrajı mümkün olduğu kadar düşük tutuyor; hikaye çocukların gözünden anlatılıyor; kamera çoğunlukla omuz yüksekliğinde oturuyor.

Roman Griffin Davis, *Jojo Rabbit*'den bildiğimiz hassas oyunculuğu büyümenin başka bir aşamasına taşıyor; Filmin sürprizi Dexter Sol Ansell masumiyeti ve inatçılığı aynı anda taşıyor. Bill Nighy beklendiği gibi sahneleri sadece orada bulunarak ısıtıyor. Maisie Williams küçük ama etkili bir rolde karşımıza çıkıyor.

Empire'ye göre *500 Miles*, melodramın içine düşmeden onunla flört ediyor; klişelere yaklaşıyor ama zamanda geriye gidiyor. Sonuç, seyirciyi arabaya bindiren ve yol boyunca güldüren ve ağlatan hassas ama sağlam bir aile dramasıdır.`,
  },
  {
    slug: "voicemails-for-isabelle",
    origTitle: "Voicemails For Isabelle",
    title: "“Voicemails For Isabelle” — Yanlış Numaradan Doğan Sıcacık Bir Romantik Komedi",
    excerpt: "Zoey Deutch ile Nick Robinson arasındaki uyum, ölen bir kız kardeşe bırakılan sesli mesajların yanlış telefona ulaşmasıyla başlayan son derece sıra dışı bir aşk hikâyesini sırtlıyor.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/18b3d1be-d808-4621-9e0b-53c9f2b60e7e/a1052aa810be.avif",
    body: `Empire'deki Jordan King's incelemesine göre, *Voicemails For Isabelle*, klasik "yanlış numara" romantik komedi cihazını kederle birleştiren beklenmedik derecede hassas bir tür karışımıdır. San Francisco'de kaotik bir hayat yaşayan gelecek vaat eden bir pasta şefi olan Jill (Zoey Deutch), ölen kız kardeşi Isabelle'ye her gün bir sesli mesaj bırakıyor; bu mesajlar onun hem terapisi hem de günlüğü görevi görüyor.

Sorun şu ki, mesajlar artık Isabelle'nin eski numarasına ulaşmıyor; bunun yerine Wes'nin (Nick Robinson) yeni iş telefonuna ulaşırlar. Wes Teksaslı bir emlakçıdır; düzenli, temkinli ve biraz kırılgandır. Çok geçmeden kendini Jill'nin sesini duymayı sabırsızlıkla beklerken bulur. Klasik romantik komedi senaryosu şöyle: Wes ona gerçeği söylemeli mi, ne zaman söylemeli ve söylediğinde ne olacak?

Filmin gücü eşleştirmesinden geliyor. Zoey Deutch, karakterin dağınıklığını, mizahını ve altta yatan kederini aynı anda barındırıyor; Nick Robinson onu sessiz ve dikkatli bir performansla dengeliyor. Empire'ye göre en iyi sahneler, ikisinin aslında birbirine bakmadığı sahnelerdir: Yalnızca sese dayalı bir yakınlık, filmin duygusal omurgasını oluşturur.

Yönetmen bazen güvenli davranıyor ve sonlara doğru romantik komedi formülüne çok fazla dayanıyor. Ancak King'e göre *Voicemails For Isabelle*'nin gerçek başarısı, "kederli olduğunuz biriyle konuşmaya devam etme" fikrini bir hileden filmin atan kalbine dönüştürmektir. Sıcak, hüzünlü, izlemesi kolay bir romantik komedi.`,
  },
  {
    slug: "nirvanna-the-band-the-show-the-movie",
    origTitle: "Nirvanna The Band The Show The Movie",
    title: "“Nirvanna The Band The Show The Movie” — Deliliğin Eşiğinde, Müthiş Özgün Bir Film",
    excerpt: "Matt Johnson ile Jay McCarrol’ın onlarca yıldır peşinden koştuğu hayal, Toronto’daki Rivoli’de konser verme arzusu, sonunda beyazperdeye taşınıyor. Çılgın, dahiyane, yürek burkan.",
    rating: "4.5/5",
    image: "/__l5e/assets-v1/92a46c27-5a03-4106-b7b3-4162f39ee7f9/57d9366be4c8.avif",
    body: `Empire'deki Ben Travis's incelemesine göre, *Nirvanna The Band The Show The Movie*'nin - 2008'de çekilen - açılış sahnesi, Matt Johnson's karakterinin "görmek üzere olduğunuz şeyin daha önce hiç görmediğiniz bir şey olduğunu" ilan etmesiyle başlıyor. Karakter, grubunun (ki bu gerçek bir grup bile değil - kendisi, arkadaşı Jay ve bir klavye) bir gün Toronto'nun efsanevi mekanında, filmin kendisi için de geçerli olan Rivoli. But'yi çalacağını hayal ediyor: çılgın, parlak, gülmekten acı veren komik, yürek burkan ve tamamen orijinal.

Matt (Matt Johnson) ve Jay (Jay McCarrol), on yıllardır kovaladıkları hayali gerçekleştirmek için en saçma planlarını harekete geçirir: Rivoli sahnesinde oynamak. Film, kısa filmden diziye, uzun metrajlı filme evrilen bir projenin her katmanını taşıyor: gerilla çekimi estetiği, seyircilerden gelen samimi tepkiler, meta şakalar, alışılmadık bir kurgu ritmi.

Johnson ve McCarrol arasındaki kimya, filmin var olmasının tek ve yeterli nedenidir; ikili hem çocuksu bir enerjiyle hem de artık genç olmadıklarını bilmenin getirdiği kırılganlıkla oynuyor. Empire'ye göre film, salt komedinin ötesinde bir şeyi başarıyor: onlarca yıldır bir hayali sürdürmenin komik, absürd ama son derece samimi bir portresi.

Travis filmi "sadece varlığıyla dahiyane bir hareket" olarak nitelendiriyor. Bağımsız komedinin gerçekte nasıl görünebileceğini merak eden herkes için bu, 2026'nın en tuhaf ve en tatlı sürprizlerinden biri.`,
  },
  {
    slug: "moana-live-action",
    origTitle: "Moana",
    title: "“Moana” — Disney’nin Gerçekten İşe Yarayan İlk Canlı Çekim Yeniden Çevrimi",
    excerpt: "Filmin yarısı hâlâ animasyon, Dwayne Johnson tam anlamıyla Maui’ye dönüşmüş, yeni yıldız Catherine Laga’aia ise Moana’yı ışıl ışıl bir coşkuyla canlandırıyor. Owen Gleiberman’a göre bu, Disney’nin gerçekten başarılı ilk canlı çekim uyarlaması.",
    rating: "4/5",
    image: "/__l5e/assets-v1/cc4d9f5f-e716-4745-9405-20606e5616ee/6358dc99c9a4.webp",
    body: `Variety'deki Owen Gleiberman's parçasına göre, Disney'nin son yıllardaki canlı aksiyon uyarlamaları dizisi, sadakat ve ilhamsız yumuşaklık arasında sıkışmış durumda. 'Moana' bu döngüyü kırıyor: Thomas Kail tarafından yönetilen film, 2016 orijinaline sadık kalırken kendi görsel şiirsel dilini de yaratıyor.

En cesur yönetmen seçimi, filmin neredeyse yarısının animasyon olarak kalmasıdır. Okyanus, ada ruhları, kum canavarları ve özellikle Maui'nin dövmelerinin yaşayan dünyası, CGI ile stilize animasyon arasında bir yerde oturuyor; bu seçim uyarlamanın masalsı tonunu koruyor. Cook Islands ve New Zealand ile çekilen gerçek Pasifik manzaralarının fotogerçekçi güzelliğiyle harmanlanan sonuç, sıra dışı bir melezdir.

Yeni yıldız Catherine Laga'aia, Auli'i Cravalho'nin animasyonlu Moana'ye getirdiği tazeliği taklit etmeye çalışmıyor; bunun yerine kendi ışıltısını getiriyor: meraklı, inatçı, ışıltılı bir kaşif. Bu arada Dwayne Johnson, tamamen Maui olarak serbest bırakıldı; karaktere kendi ikonik sırıtışını kazandırıyor ve bir konser başrol oyuncusu gibi "You're Welcome" numarasını taşıyor. Şarkılar Lin-Manuel Miranda ve Opetaia Foa'i tarafından yeniden düzenlendi ve iki yeni parça eklendi.

Gleiberman'ın temel argümanı şu: 'Aslan Kral' veya 'Mulan' gibi girişimlerden farklı olarak 'Moana' tam olarak animasyonun kendi dilinden korkmadığı için çalışıyor. Disney sonunda "canlı aksiyon" etiketini seyreltme yerine zenginleştirme aracı olarak kullanmayı öğrenmiş görünüyor.`,
  },
  {
    slug: "night-nurse",
    origTitle: "Night Nurse",
    title: "“Night Nurse” — İki Sapkının Yollarının Kesiştiği Kışkırtıcı Bir Bakıcılık Fantezisi",
    excerpt: "Georgia Bernstein’ın cesur ilk uzun metrajı, gerçek bir istismar vakasını rahatsız edici ölçüde gösterişli bir erotik gerilime dönüştürüyor. Bruce McKenzie ve Cemre Paksoy büyülüyor.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/0a83f2eb-46a8-44d0-8de6-b7bdb170d9b0/1b2ee0af6835.webp",
    body: `Variety'deki Beatrice Loayza's incelemesine göre, Georgia Bernstein'nin ilk yönetmenlik denemesi 'Night Nurse' tehlikeli bir tazelik taşıyor. Gerçek bir sömürü öyküsünden yola çıkan film, konusunu didaktik bir dram olarak değil, kışkırtıcı, karanlık, zaman zaman komik bir erotik gerilim olarak ele alıyor ve bu risk çoğunlukla karşılığını veriyor.

Hikaye, mali açıdan sıkıntı çeken genç bir bakıcı olan Ada'nin (yeni gelen Cemre Paksoy), yaşlı, hasta ama son derece manipülatif bir dolandırıcının (Bruce McKenzie) evine taşınmasıyla başlıyor. Klasik bir bakım düzenlemesi olarak başlayan şey, hızla karmaşık bir güç oyununa dönüşür: Kim kimi kullanıyor, kim kimden besleniyor, giderek bulanıklaşıyor. Bernstein bu belirsizliği yalnızca anlatıya değil, bakış açısına da yerleştiriyor; kamera kasıtlı olarak arzu nesnesinin kim olduğunu değiştirmeye devam ediyor.

Paksoy'nin performansı filmin en büyük keşfi: Yüzünde masumluk ile hesaplı soğukluk arasında gidip gelen, okunamayan bir ifade var. McKenzie, Loayza'nin ifadesiyle "karakteri gölge ve ışık arasına tam olarak yerleştirmeyi" başarıyor. Bernstein'nin görsel dili Hitchcock'tan çok Paul Verhoeven'ye yakın; abartılı bir zenginlik, kırmızı ve altın rengi bir palet, ara sıra rüya gibi.

Filmin zayıf noktası, gerçek hikayeden uzaklaştıkça ahlaki çerçevesinin de gevşemesi; bazı izleyiciler bunu "estetikleştirilmiş sömürü" olarak okuyabilir. Ancak Loayza'ye göre 'Night Nurse''nin gerçek gücü tam olarak bu rahatsız edici rahatlıkta yatıyor: Film sizin acımanızı istemiyor, izlemenin suçluluğunu istiyor. Cesur, sapkın ve umut verici bir başlangıç.`,
  },
  {
    slug: "young-washington",
    origTitle: "Young Washington",
    title: "“Young Washington” — Finaldeki Bağış Çağrısıyla Kendi Ayağına Sıkan Bir Biyografi",
    excerpt: "Jon Erwin’in yönettiği, Angel Studios’un yapımcılığını üstlendiği film, George Washington’ı mitleştirmeye çalışırken kapanış jeneriğine eklediği bağış çağrısıyla neredeyse tatmin edici olabilecek bir biyografiyi zehirliyor.",
    rating: "2.5/5",
    image: "/__l5e/assets-v1/e706e279-6f5b-4163-9c37-73be55a4c46a/af56945dd2e0.avif",
    body: `Başka hiçbir büyük stüdyo Angel Studios kadar muhafazakar Hıristiyan ve Amerikan değerlerine hizmet vermeye kendini adamış değildir ve başka hiçbir stüdyo Amerikalıların aslında bu değerleri paylaştığına bu kadar az inanmamaktadır. Diğer yapımcılar filmlerini sinemalarda yayınlayıp izleyicilerin bilet almasını beklerken, Angel Studios en şoven, en dini filmlerini kapanış jeneriğine yapılan son dakika bağış toplama çağrısıyla bitirmekte ısrar ediyor.

Jon Erwin'nin yönettiği, yapımcılığını üstlendiği ve ortak yazdığı 'Young Washington'de William Franklyn-Miller, George Washington. He'll'yi canlandırıyor ve sonunda Amerika'nın ilk başkanı oluyor, ancak önce liderlik hakkında bazı değerli dersler alması ve Fransızları ağır çekimde arkadan tekmelemesi gerekiyor. Başlık, John Ford's 1939 ' Young Mr. Lincoln''yi çağrıştırıyor - ancak Erwin Ford değil ve Franklyn-Miller, Henry Fonda değil.

Tüm bu karşılaştırmaları bir kenara bırakırsak, Founding Father. His'nin ilk sahnelerdeki çocuksu, yavru köpek ciddiyeti yavaş yavaş acımasız, hak edilmiş bir ciddiyete dönüştüğü için Franklyn-Miller idare edilebilir. Erwin'nin yönü son derece yetkindir; 1750'lerin Virginia ve Ohio'sunu canlı, çeşitli tonlarla boyuyor. Kostümler ve setler de ikna edici.

Ancak oyuncu kadrosu Kristopher Kimlin's sinematografisi kadar tutarlı değil. Virginia. Kelsey Grammer'nin Lieutenant Governor'si olay örgüsünü ilerletmeye kararlı olduğundan, Sir Ben Kingsley filmin çoğunu bir masanın arkasında geçiriyor; Andy Serkis, Braddock'yi basit bir palavracı gibi oynuyor. Mantıklı ve alaycı bir milis rolünü oynayan Only Angus Castle-Doughty, sahneleri çalmaya kararlı görünüyor ve bulunduğu her filmde bundan sıyrılıyor.

Young Washington' o kadar mekanik bir biyografi ki küçük hatalarına odaklanmamak elde değil. Her şeyden önce temaları hiçbir zaman tutarlı değildir; film tarihin çirkin yönlerine hiç ilgi göstermiyor. Washington, içinde bulunduğu koşulların adaletsizliğinden hareket ediyor; okula gidememek, İngiliz ordusuna katılamamak. Ancak filmin kendi itirafına göre on tane köle sahibi var. Washington'nin yardımcı öğeleri hiçbir zaman ekranda görünmez; Diyalogda onlardan bir kez bahsedildiğinde, ailesinin hayır kurumundan yararlananlar olarak tanımlanıyorlar.

21. yüzyılda Founding Fathers'nin basit bir portresinin satışı zor. Fransızlarla ağır çekimde düello yapan ve dizanteri dolu at sırtında gösteriler yapan bir Washington'yi izlemek, filmi ciddiye almayı imkansız hale getiriyor. Amerika'nın 250. doğum günü için yapılan, mısırla beslenen bu ısrarcı yapım iyi bir gişe bile yapabilir; ancak Angel Studios'nin bunu bilmesinin hiçbir yolu yok çünkü bilet satış rakamları gerçek izleyici sayılarından çok daha yüksek olabilir. Bağış toplama kumarının sahtekarlığı, aksi halde başka bir yapay biyografi olabilecek şeyi zehirliyor.`,
  },
  {
    slug: "the-last-one-for-the-road",
    origTitle: "The Last One for the Road",
    title: "“The Last One for the Road” — Yaşlı Ayyaşların Venedik Yolundaki Trajikomik Serüveni",
    excerpt: "Francesco Sossai’nin filmi, alkolizmi bir hastalık olarak değil, iflah olmaz iyimserlerin kaçınılmaz sonu olarak resmediyor. Kasvetli ama komik, kendine özgü bir dostluk ve yol filmi.",
    rating: "3.5/5",
    image: lastOneRoadAsset.url,
    body: `Francesco Sossai'nin yeni filmi "alkolizm" gibi şüpheli klinik terimlere pek inanmıyor. Bunun yerine sarhoşluğa, bulanıklığa, üzüntüye ve ara sıra yaşanan mide bulantısına alaycı bir hoşgörüyle bakıyor; günün her saatinde içmeye devam etme süper gücüne sahip orta yaşlı sarhoşların trajikomik iyimserliğine göz kırpıyor, her zaman "sadece bir tane daha" istiyor. Filmin başında ve sonunda tekrarlanan aynı anlamsız şaka her şeyi özetliyor: kalıcı bir vedanın eşiğinde olan biri hayati bir tavsiye verir ama bu, anlaşılamayacak kadar anlaşılmaz bir şekilde ortaya çıkar.

Bu bir yol filmi, bir dost filmi, biraz başıboş bir tüylü köpek hikayesi; reşit olmayı reddeden bir reşit olma hikayesi; tatlılığın silinip gittiği acı-tatlı bir komedi. Doriano ( Pierpaolo Capovilla ) ve Carlobianchi ( Sergio Romano ), küçük dolandırıcılıkların kıyısından geçen, sürekli iyi niyetli iki sarhoş, ağızdan ağıza orta yaşlı serserilerdir. Ortakları Genio'nin (Andrea Pennacchi) bir fabrikadan neredeyse bedavaya çaldığı tasarım gözlükleri satmaktan arta kalan lüks bir arabada yaşıyorlar.

When Genio, yıllar sonra Venedik'e döneceğini duyurur. İkili yola çıkar ancak saçma bir hata onu özlemelerine neden olur. Yolda, başka bir öğrenciye karşılıksız özlem duyan genç bir mimarlık öğrencisi olan Giulio (Filippo Scotti) ile tanışırlar. Doriano ve Carlobianchi bunu hissediyor ve biraz sinirlenen Giulio, iki adamla birlikte takılmayı kabul ediyor. Onu Carlo Scarpa's postmodernist Brion'un mezarına götürürler; Somut biçimlerin ortasında duran, ölüm üzerine bir meditasyon olan film, karakterlerin de sessizce kendi hesaplaşmalarını yaptıklarını ima ediyor.

Sossai, Venedik'i hiçbir duygusallık belirtisi olmadan gösteriyor: Santa Croce'ye ve İtalya'nın "Luton havaalanı" Treviso'ya kısa bir bakış. Filmin ana konusu Doriano ve Carlobianchi'nin Giulio'nin romantik yarasını iyileştirip iyileştiremeyeceği; belki de aslında iyileştirdikleri şeyin Genio. Giulio'ye olan özlemleri olduğu ortaya çıkar ve Genio'nin asla olamayacağı gerçek üçüncü silahşör olur. Öğleden sonra tökezleyen bir sarhoş gibi, nereye götürürse götürsün burnunu takip eden sevimli bir film.`,
  },
  {
    slug: "enola-holmes-3",
    origTitle: "Enola Holmes 3",
    title: "“Enola Holmes 3” — Büyüme Sancıları Çeken Sevimli Bir Dedektiflik Serüveni",
    excerpt: "Millie Bobby Brown’ın cazibesi yerli yerinde, ancak yönetmenliğini Philip Barantini’nin devraldığı üçüncü film, olgunlaşma çabasıyla serinin coşkulu ruhu arasında bir türlü karar veremiyor.",
    rating: "2.5/5",
    image: "/__l5e/assets-v1/b3cfde76-b2ea-43e2-a430-e64f3a93c0c2/2cd09b4a5932.webp",
    body: `Zaman durmuyor; görünüşe göre büyük ölçüde sevimli bir Netflix film serisi için bile değil. Büyüme sancıları en keskin beyinlerin bile kaçamayacağı bir kaderdir. *Enola Holmes 3*, Philip Barantini'nin yönetmen koltuğunda oturduğu Millie Bobby Brown's genç dedektifi bir kez daha geri getiriyor; ancak seri bu kez ilk iki filmin coşkulu ritmini pek yakalayamıyor.

Brown, Nancy Springer's YA kitaplarından alınan karakter için kusursuz bir seçim olmaya devam ediyor. Hem Enola'nin çocuksu neşesini hem de keskin zekasını taşıyabilen ender sanatçılardan biri. Ancak üçüncü bölümde, karaktere doğal olarak uyan bir şeyden çok, ağır bir kostüm gibi şeyler geliyor. Barantini'nin daha yetişkin, daha ciddi yaklaşımı (*Adolescence*'den tanıdık), Jack Thorne's senaryosunun eğlenceli tarafıyla hiçbir zaman tam olarak örtüşmüyor. Sonuç, aynı zamanda hem büyümek hem de "eski Enola" olarak kalmak isteyen ve bu nedenle ikisinde de tam anlamıyla başarılı olmayan bir filmdir.

Açılış etkileyici derecede iddialı: Malta, Enola ve Lord Tewkesbury's (Louis Partridge) düğün gününde çekilen muhteşem bir düğün. Sonra klasik Enola çilesi başlıyor; törene geç kalmak, haydutlar ve evlilik kurumu hakkındaki şüpheler. Gizem, Sherlock'nin (Henry Cavill) kaçırıldığına dair haber geldiğinde başlar ve düğün kaosa sürüklenir. Yönetmenin geniş çekim seçimleri Malta'nin taşını, ışığını ve denizi güzel bir kartpostal gibi çerçeveliyor; Ancak hikayenin iç ritmi hiçbir zaman aynı özen düzeyine ulaşmıyor.

Filmin asıl sorunu ilerleme hızında ortaya çıkıyor. Tewkesbury'nin annesi kaçırılır, otel alev alır, Maltalı özgürlük savaşçıları devreye girer, eski bir düşman geri döner - ancak bu üst üste gelen dramatik olayların hiçbiri gerçek bir gerilim yaratmaz. Enola'nin dedektiflik çalışması bu sefer bir istihbarat kıvılcımından, tanık olduğu her şeyi toplayan bir gözlemciye dönüşüyor. Kamera ne zaman "önemli detay" nesnesine yakınlaşsa, gizem anında çözülüyor; sanki filmin adı "dedektiflik işi" değil "dolly zoom" olmalı gibi.

Öte yandan, franchise her zaman daha ağır konularla (kadın hakları, sınıf ayrımları, sanayi devriminin insani maliyeti) nasıl flört edileceğini biliyordu. *Enola Holmes 3* savaş suçlarına, sömürüye, işgale değiniyor; ancak dramatik gerilimi, bu ağır konuların hikayenin doğal bir parçası gibi hissettirecek kadar sıkı bir şekilde vidalayamaz. While Enola Karakter olgunlaşıyor gibi görünüyor, hikaye onun yanında büyüyemiyor - bir çocuğun yetişkin ceketi giymesi gibi.

Sonuçta *Enola Holmes 3*, Millie Bobby Brown hayranları için hala izlenebilir bir Netflix akşamı sunuyor; ancak ilk filmin tazeliğini veya ikincinin tam anlamıyla kaosunu arayanlar için biraz "giriş seviyesi" kalıyor. Bir sonraki bölüm için tek dileğimiz: Enola'nin gerçekten büyümesine ve gizemlerin onunla birlikte gerçekten daha karmaşık hale gelmesine izin vermek.`,
  },
  {
    slug: "glastonbury-the-movie",

    origTitle: "Glastonbury the Movie",
    title: "“Glastonbury the Movie” — Çamur, Müzik ve Yitirilen Masumiyet",
    excerpt: "Dijital dünyanın gürültüsünden uzakta, 16 mm’nin dokusuyla çekilmiş, 1993 Glastonbury festivalinin çamurlu ve özgür ruhuna nostaljik, neredeyse antropolojik bir yolculuk.",
    rating: "4/5",
    image: glastonburyImg,
    videoUrl: "https://www.youtube.com/embed/jKAfhqmJ4ME",
    body: `Robin Mahoney, Matthew Salkeld ve William Beaton üçlüsünün yönettiği *Glastonbury the Movie*, modern festival kültürünün endüstriyel bir canavara dönüşmeden önceki son saf, masum nefesi gibi karşımızda duruyor. 1993 yılında meşhur çamurlu arazide çekilen yapım, klasik bir konser filminden ziyade antropolojik bir kazıyı andırıyor. Akıllı telefon ekranlarının karanlığı kirletmediği, kurumsal sponsor logolarının her köşeden fırlamadığı bir dönemin ruhunu bir zaman kapsülü hassasiyetiyle günümüze taşıyor.

Filmin anlatı yapısı her zamanki "başrol" veya "vokalist" etrafında dönmüyor; burada gerçek kahraman kalabalığın kendisidir. Yönetmenler kameranın bir gözlemci gibi kalabalığın içinde dolaşmasına izin verdi. Çadırlarını kurmaya çalışan sarhoşlar, şafakta dans eden silüetler, o meşhur İngiliz çamurunda kaybolan botlar... 16mm ve 35mm dokuda çekilen, ara sıra sallanan ama her zaman samimi hissettiren sinematografi, dijitalin kısır dünyasına bir başkaldırı niteliği taşıyor. Görüntülerdeki gren, festivalin toz ve dumanına karışarak izleyiciyi oturduğu yerden kaldırıyor ve Worthy Farm'nin rahatsız edici ama özgür atmosferine bırakıyor.

Film, müzikal açıdan bir küratörlük harikası olmaktan ziyade anın akışını yansıtıyor. Performanslar müzik-video cilasıyla kurgulanmış değil, sanki buralardan geçip gitmişsiniz ve tesadüfen yakalamışsınız gibi. Bu seçim filmi didaktik bir belgeselden duyusal bir deneyime dönüştürüyor. Hippi rüyasının gün batımı diyebileceğimiz bu dönemde, eski "komünal yaşam" ideali henüz tam olarak ölmemişken, çiçek çocukların yavaş yavaş rave kültürünün kaotik enerjisine kapılmalarını izliyoruz.

Ancak bu gevşeklik filmin en zayıf halkası olduğu kadar en büyük gücüdür. Net bir anlatım akışının veya odak noktasının bulunmaması, zaman zaman genel izleyici kitlesi için yorucu bir tempoya neden olabilir. Bazı sahneler ihtiyaç duyulandan daha uzun sürüyor ve bu, izleyicileri anın içinde tutmak anlamına gelse de bazen ritmi aşağı çekiyor. Yine de bu "amaçsızlık" filmin aktarmaya çalıştığı özgürlükle yapısal olarak uyum içindedir. Disiplinsiz bir kurgu belki de bu kadar disiplinsiz bir festivali anlatmanın en dürüst yoludur.

Sonuçta, otuz yıl sonra geriye dönüp baktığımızda, *Glastonbury the Movie* sadece bir müzik olayını değil, bir neslin son özgürlük çığlığını temsil ediyor. Kameralı telefonların ve sosyal medya doğrulamasının olmadığı bir dünyada, insanların sadece "orada" olmak için orada oldukları o büyülü anları izlemek, günümüzün gözetim toplumu altında yaşayan bizler için hem kederli hem de ilham verici. Bu film, hippi rüyasının son közlerine yakılmış, çamur kokulu, içten bir ağıt gibi duruyor.`,
  },
  {
    slug: "strung",
    origTitle: "Strung",
    title: "“Strung” — Korku ile Melodramın Çatışması Arasında Sıkışan Bir Tür Denemesi",
    excerpt: "Blumhouse tarzı gerilimle Tyler Perry tarzı dramatik anlatıyı ilginç biçimde çarpıştıran Strung, yoğun senaryosuyla boğuşan ama atmosferiyle merak uyandıran bir tür denemesi sunuyor.",
    rating: "2.5/5",
    image: strungImg,
    body: `Blumhouse'nin montaj hattındaki klostrofobik gerilimi, Tyler Perry'nin şuruplu melodram geleneğiyle aynı potada eridiğinde ne olur? *Strung* bu soruyu izleyicinin hem ilgisini çeken hem de kafasını karıştıran garip bir tür karışımı olarak sunarak yanıtlıyor. Film boyunca hissedilen ürkütücü atmosfer yerini aile trajedilerine ve bitmek bilmeyen diyaloglara bıraktığında, izlediğimiz şeyin bir korku filminden ziyade "korku tadında bir pembe dizi" olduğunu fark ediyoruz.

Yönetmenlik seçimlerinin düşük bütçenin kısıtlamalarıyla birleştiğinde ilginç bir görsel dil ürettiğini söylemek doğru olur. Kapalı alanlardaki dar kamera açıları, karakterlerin psikolojik tuzağa düşmelerini başarılı bir şekilde yansıtıyor. Ancak bu görsel çaba, beceriksiz bir senaryo tarafından boğuluyor. Hikaye sanki sekiz bölümlük bir mini dizi için tasarlanmış ve ardından son dakika kurgu odası kesintileriyle 90 dakikaya sıkıştırılmış gibi geliyor. Bu, karakter gelişiminde boşluklara ve asla gerçekleşmeyecek ani duygusal değişimlere neden olur.

Performanslar tam tersine bir çalışmadır. Başrolün türe uygun, abartılı performansına karşılık, yardımcı karakterlerin gündüz dizi oyunculuğuna daha yakın olan düzlüğü, sahneler arasındaki ton uyumsuzluğunu keskinleştiriyor. Bir sahnede iliklerinize kadar donuyorsunuz; hemen ardından öğretici bir monolog sizi filmin gerçekliğinden çekip çıkarıyor. Bu uyumsuzluk filmin hem en büyük gücü hem de en büyük zayıflığıdır.

Teknik olarak ses tasarımı ve ışıklandırma, prodüksiyonun sınırlamalarını maskeleme konusunda iyi bir iş çıkarıyor. Gölge kullanımı ve ani ses patlamaları, hayranların aradığı atlama korkusu türünü besliyor. Ancak hikayenin kalbindeki trajik sır ortaya çıktığında, gizem yerini asla finaline ulaşamayan dramatik bir döngüye bırakıyor. Senaryonun yoğunluğu izleyiciye nefes alacak alan bırakmıyor ve gizemin süreçteki rahatsız edici etkisini azaltıyor.

Sonuç olarak *Strung* tür deneylerinden hoşlanan ve "suçlu bir zevk" arayanlar için kötü bir seçim değil. Sinematografik açıdan muhteşem anlara sahip olsa da, dağınık hikaye anlatımı ve ani tür değişimleri, onun kalıcı bir izlenim bırakmasını engelliyor. Kendinizi Blumhouse'nin karanlık koridorlarında yürürken aniden Tyler Perry'nin gözyaşlarıyla ıslanmış oturma odalarında bulurken bulmaya hazır olun. Yenilikçi bir sinematik ses arayanlar için bu karışım biraz fazla sarsıcı gelebilir.`,
  },
  {
    slug: "the-mission",
    origTitle: "The Mission",
    title: "“The Mission” — Karanlığı Neşterle Yaran Bir Film",
    excerpt: "Gazze’nin karanlık hastane koridorlarında umutsuzluğa meydan okuyan cerrah Muhammed Tahir’in hikâyesi, insan onurunun en saf ve en sarsıcı belgesine dönüşüyor.",
    rating: "4.5/5",
    image: missionImg,
    body: `İnsanların birbirlerine yaptıklarını izlemek her zaman zordur, ancak *The Mission*, o karanlığın tam kalbinde yeşeren bir dayanıklılığın anatomisini önümüze koyarak beklentilere meydan okuyor. Film, savaşın harap ettiği Gazze'de, bombardıman seslerinin hastane koridorlarında yankılandığı kaosun ortasında, cerrah Muhammed Tahir ve ekibinin yürüttüğü olağanüstü mücadeleyi mercek altına alıyor. Yönetmen izleyiciyi sadece savaşın yarattığı yıkıma değil, o yıkımın ortasında titreyen elleriyle yaraları diken cerrahların nefesine de ortak ediyor.

Belgeselin en dikkat çekici özelliği, trajediyi estetik bir nesneye dönüştürmek yerine, ham, sarsıcı bir gerçeklikle sunması. Sinematografi, klostrofobik hastane odaları ile gökyüzünden yağan ateşin geniş açılı görüntüleri arasında sürekli geçiş yaparak kalıcı bir rahatsızlık hissi yaratıyor. Elektrik kesintileri sırasında cep telefonu ışığıyla yapılan ameliyatlar, yalnızca teknik bir eksikliği değil, insanlığın kendi ışığının ne kadar sönükleştiğini de simgeliyor. Muhammed Tahir'nin yüzüne kazınan her yeni derin çizgi, belgeselin anlatım ağırlığını herhangi bir diyalogdan daha iyi taşıyor.

Film, bir yönetmen tercihi olarak mesafeli ama vicdanlı bir duruşu benimsiyor. Kamera sadece cerrahların başarılarını değil aynı zamanda çaresizlikten doğan omuzlarının sessiz çöküşünü de kaydediyor. Elindeki kıt tıbbi malzemeyle kimin yaşayıp kimin öleceğine karar vermek zorunda kalan bir cerrahın karşılaştığı etik uçurum, izleyicinin boğazına yerleşiyor. Film, "dayanıklılığın" bedelinin gerçekte ne kadar ağır olduğunu göstermek için kahramanlık mitini bir kenara bırakıyor.

Filmin kurgusu kaosun ritmini takip ediyor. Hızlı kesintiler, koridorlardaki sedyelerin takırtıları ve dışarıdaki patlama sesleri izleyiciyi bir an bile dinlendirmiyor. Ancak bu gürültünün ortasında Tahir'in hastalarına fısıldadığı teselli edici birkaç kelime filmin duygusal omurgasını oluşturur. Bu karşıtlık, filmin yalnızca bir savaş günlüğü değil, aynı zamanda yaşama isteğinin derin bir manifestosu olmasını da sağlıyor.

Sonuçta *The Mission* kolay bir izleme değil; bazen bakmak istediğimizden daha da zordur. Ama sinemayı bir tanıklık biçimi olarak kabul edersek bu belgesel kaçırılmaması gereken bir kayıt olarak duruyor. Muhammed Tahir ve meslektaşları aracılığıyla anlatılan hikaye, politikanın çok ötesinde, etten kemikten, umut ve yıkımın en saf haliyle buluştuğu yerdir. Modern dünyanın sağırlaştığı çığlıkları steril salonlara taşıyan bu yapım, jeneriği geldikten sonra da uzun süre sizlerle birlikte kalacak.`,
  },
  {
    slug: "little-brother",
    origTitle: "Little Brother",
    title: "“Little Brother” — Vaat Ettiği Tuhaflıktan Uzak, Kaosu Ehlileştirilmiş Bir Yol Hikâyesi",
    excerpt: "Eric André’nin dizginlenemez enerjisini ehlileştiren bu yol hikâyesi, kara komediyle aile draması arasında kararsız kalmış, unutulabilir bir Netflix deneyimine dönüşüyor.",
    rating: "2.5/5",
    image: littleBrotherImg,
    body: `Sherman Payne tarafından yönetilen *Little Brother*, kağıt üzerinde Eric André'nin kaotik, absürt mizah anlayışını modern bir yol hikayesiyle harmanlamayı vaat ediyor. Ancak beyazperdede gördüklerimiz bu potansiyelin oldukça gerisinde kalıyor; güvenli sularda yüzmek ve nihayetinde hedeflediği keskin komediyi yakalamaya çalışmak. Film, intihara meyilli ağabeyini (Philip Ettinger) eve götürmek zorunda kalan küçük bir erkek kardeş (Eric André) arasındaki endişe verici ilişkiye odaklansa da, bu dramatik temel, komedi unsurlarıyla hiçbir zaman organik bir bağ kurmuyor.

Eric André, daha kontrollü bir performans için sınırları zorlayan, rahatsız edici, zekice "anti-komedi" TV kişiliğinden kurtulmaya çalışıyor. Ancak sorun tam olarak burada başlıyor: André şaşırtıcı derecede "normal" kaldığında, onun patlamaya hazır enerjisine alışkın olan izleyiciler bir şeylerin eksik olduğunu hissediyor. Yazıldığı gibi karakter, André'nin doğal yeteneklerine yeterince yer vermiyor ve oyuncuyu bir tür evcilleştirilmiş rolle sınırlı bırakıyor. Philip Ettinger dramatik ağırlığı omuzlamaya çalışıyor, ancak ikisi arasındaki kimya asla olması gerektiği gibi kıvılcımlanmıyor.

Yönetmenlik seçimlerine bakıldığında, Payne'nin görsel dili büyük ölçüde oldukça standart bir bağımsız film estetiğine sıkışmış durumda. Yol boyunca karşılaşılan manzaralar ve seçilen kompozisyonlar hiçbir zaman tür klişelerinin ötesine geçmediği gibi hikayenin duygusal tonunu yükseltecek görsel buluşlar da sunmuyor. Sinematografi, kardeşlerin iç yolculuklarına eşlik etmek yerine, karakterlerin A noktasından B noktasına olan yolculuğunu kaydeden bir gözlemci gibi soğuk kalıyor.

Senaryo tarafında en büyük zayıflık kara komedi ile aile draması arasındaki dengeyi kuramamaktır. Bazı sahnelerde film gerçek bir psikolojik derinliğin peşinde koşuyor, ancak hemen ardından bu derinliğin altını oymak için zayıf şakalar yapılıyor. Eric André'den beklediğimiz "tuhaflık" dozu o kadar düşük ki film ne tam anlamıyla absürt bir komedi ne de ilgi çekici bir karakter çalışmasıyla sonuçlanıyor. Bu arada diyalog çoğunlukla tahmin edilebilir, öğretici bir tonda ilerliyor.

Sonuç olarak, *Little Brother* tür tutkunları için bir zaman geçirme aracı sunuyor ancak hafızada çok az iz bırakıyor. Önümüzdeki şey Eric André's hayranlarını tatmin edemeyecek kadar uysal ve bağımsız sinema hayranlarını şaşırtamayacak kadar kalıplaşmış. Yüksek potansiyele sahip bir ikilinin vasat bir senaryonun içinde kaybolmasını izlemek utanç verici. Film ne yazık ki Netflix'nin kütüphanesine hiçbir zaman kendi kaosunu yaratmayı başaramayan, her anlamda "küçük" kalan bir giriş olarak çıkıyor.`,
  },
  {
    slug: "jackass-best-and-last",
    origTitle: "Jackass: Best and Last",
    title: "“Jackass: Best and Last” — Acıya ve Kahkahaya Grotesk Bir Veda",
    excerpt: "Johnny Knoxville ve ekibi, bu veda filminde acının ve kahkahanın sınırlarını son bir kez zorluyor; sinema tarihinin en pis ama en içten dostluk hikâyelerinden birini sunuyor.",
    rating: "4/5",
    image: jackassImg,
    body: `Kusma, kan, idrar ve çatırdayan kemiklerin sonsuz müziği... Sinema tarihinin en "kakafoni" ve alışılmadık topluluklarından biri olan ekip, *Jackass Forever* (Jackass: Best and Last) ile sadece bir veda değil, yaşlanmanın ve dostluğun mümkün olan en grotesk portresini sunuyor. Yirmi yılı aşkın bir süredir bu ekip, fiziksel sınırları ve sosyal görgü kurallarını zorluyor ve ekrandaki son danslarında izleyiciyi bir kez daha o meşhur "bakmaya korkmak ama bakışlarını başka tarafa çevirememek" ikileminin içinde bırakıyorlar.

Yönetmen Jeff Tremaine bu son derlemede nostaljiyi saf anarşiyle ustalıkla harmanlıyor. Film yalnızca geçmişteki çılgın gösterilerin anıldığı bir film değil; daha doğrusu, ellili yaşlarındaki erkeklerin hala on beş yaşındakiler gibi birbirlerine şakalar yapan hüzünlü ama derinden yaşamı onaylayan yanını gösteriyor. Johnny Knoxville'nin ağaran saçları ve Steve-O'nin artık yorgun olan vücudu, yaptıkları gösterilerin ağırlığını (ve saçmalığını) yalnızca artırıyor. Sinematografik olarak, yüksek çözünürlüklü kameraların artık bu tür "çirkin" ayrıntıları (arı sokmalarının veya mide bulantısına neden olan sıvıların yakın çekimleri) bu kadar net yakalayabilmesi, filmin gerçeküstü kalitesini güçlendiriyor.

Jackass evreninde "oyunculuk"tan bahsetmek saçma gelebilir ama burada sergilenen şey bir tür "adrenalin oyunculuk". Mürettebatın yeni üyeleriyle eski üyeleri arasındaki kimya şaşırtıcı derecede taze. Knoxville'nin liderliği ve korkusuzluğu mürettebatın geri kalanını hizada tutuyor. Ancak bu filmde fark ettiğiniz en büyük şey, bu ekibin birbirlerine olan derin sevgisidir. Birbirlerine bu kadar acı veren insanların aynı zamanda birbirlerinin en büyük destekçileri olduğunu izlemek, Jackass'ı sadece bir "şaka gösterisi" olmaktan çıkarıp bir kabile ritüeli gibi bir şeye dönüştürüyor.

Filmin en büyük gücü izleyiciyi dürüst bir katarsise sürüklüyor. Dünyanın kendisini bu kadar ciddiye aldığı ve politik doğruculuğun her köşede nöbet tuttuğu bir çağda Jackass ekibi orta parmağını kaldırıp şöyle diyor: "Hala buradayız ve hâlâ çok gülünç durumdayız." Zayıf noktası elbette ki bu tür bir mizahın herkese hitap etmemesidir. Titiz olanlar ya da sinemayı yalnızca entelektüel derinlik için bir araç olarak görenler için bu yapım bir kabus gibi gelebilir.

Sonuçta bu veda, yerinde, gürültülü ve pis. Jackass ekibi acıyla kahkahanın kardeş olduğunu bir kez daha kanıtlıyor. Ekrandan uzaklaştıkça bize bıraktıkları miras, biraz morarma, birkaç eksik diş ve hepsinden önemlisi ne olursa olsun gülebilmenin paha biçilemez hafifliği. Onları özleyeceğiz; ancak muhtemelen hastane faturalarını ve yaralanmalarını değil ama o sonsuz, çocuksu enerjilerini özleyeceğiz.`,
  },
  {
    slug: "the-odyssey-ilk-tepkiler",
    origTitle: "The Odyssey",
    title: "“The Odyssey” İçin İlk Tepkiler: “Hantal”, “Muhteşem” ve “Peter Jackson’ın Lord of the Rings’i Gibi”",
    excerpt: "Christopher Nolan’ın uzun zamandır beklenen “The Odyssey” filminin prömiyeri Londra’da yapıldı. Yunan mitolojisinin dehşetini cesurca kucaklayan bu dev yapım için eleştirmenlerin ilk tepkileri büyük ölçüde olumlu.",
    rating: "Early reactions",
    image: "/__l5e/assets-v1/a4fd62bf-4318-469a-8990-5f1bab6fff38/cf9640eb777c.webp",
    body: `Christopher Nolan's 'Oppenheimer'dan sonraki yeni destan 'The Odyssey'nin prömiyeri 6 Temmuz'da Londra'da yapıldı; geniş gösterim 17 Temmuz'da başlıyor. IMAX biletleri zaten tükendi ve düzenli gösterimler de hızla dolabilir. Matt Damon , Anne Hathaway , Tom Holland , John Leguizamo , Robert Pattinson , Lupita Nyong'o ve diğer pek çok kişinin rol aldığı filmin tam incelemeleri henüz yayınlanmadı; ancak eleştirmenlerin sosyal medyadaki ilk izlenimleri, filmin beklentileri karşılayacağına dair güçlü sinyaller veriyor.

Damon'ninkiler de dahil olmak üzere ekrandaki performanslar geniş çapta övülüyor; ama eleştirmenleri asıl heyecanlandıran şey yapımın büyüklüğü ve titiz detayları. The Hollywood Reporter'dan Aaron Crouch'a göre filmde "Nolan'nin baştan sona inşa ettiği ilk korku sahnesi" yer alıyor. Polygon's Jacob Kleinman, ayrıntılara gösterilen özeni doğrudan 'Yüzüklerin Lord'si ile karşılaştırıyor. IndieWire's David Ehrlich, filmin "A-tier Nolan olamayacak kadar hantal" olduğunu söylese de filmin 'Oppenheimer' kadar acımasız olmadığını belirtiyor.

Tom Page's değerlendirmesine göre 'The Odyssey' hem baş döndürücü bir gösteri hem de zekice, yıkıcı bir uyarlama; Nolan'nin olayları psikolojik olarak sorgulama şekli, ölçeğin kendisinden bile önce şaşırtıcıdır ve onun "canlandırıcı derecede modern" bir yorum olarak adlandırdığı sonuçla sonuçlanır. Andrew J. Salazar filmi "şaşırtıcı bir başarı" olarak nitelendiriyor ve Nolan'nin Yunan mitolojisinin dehşetini cesurca kucaklarken hikayeyi zarif bir şekilde çağdaş dile uyarladığını yazıyor.

Herkes buna "kusursuz" demiyor; ancak büyük bütçeli bir yaz filmi için bu, şu ana kadar umulabilecek kadar olumlu bir karşılama. Bu mutlaka ilk vızıltıyı karşılayacağı anlamına gelmez, ancak kesinlikle kötü bir işaret de değildir. Tam sürüm önümüzdeki hafta ekranlarda olacak; o zamana kadar, "her şey bitti" ve "geri döndük" arasında birkaç tur daha geçireceğiz gibi görünüyor.`,
  },
  {
    slug: "good-luck-have-fun-dont-die",
    origTitle: "Good Luck, Have Fun, Don't Die",
    title: "“Good Luck, Have Fun, Don’t Die” — Bir Lokantada Başlayan Zaman Yolculuğu Karnavalı",
    excerpt: "Aksiyon, komedi ve bilimkurguyu harmanlayan film, Sam Rockwell, Juno Temple ve Haley Lu Richardson’ı Los Angeles’ın simgeleşmiş bir lokantasında buluşturuyor; gelecekten geldiğini iddia eden bir adam, müşterileri rehin alıp onları dünyayı kurtaracak beklenmedik bir ekibe dönüştürüyor.",
    rating: "3.5/5",
    image: goodLuckAsset.url,
    body: `2 saat 14 dakikada *Good Luck, Have Fun, Don't Die*, başlığının vaat ettiği enerjiyi asla kaybetmiyor. Açılış sekansında, ikonik bir Los Angeles gece yarısı lokantasında geçen Sam Rockwell's, adı bilinmeyen "Man From Gelecek" silahını çekiyor ve oturan müşterileri rehin alıyor. O, paranın ya da intikamın peşinde değil; dünyayı kurtarabilecek "muhtemel adayları" arıyor.

Rockwell, kariyerinin bu aşamasında tam da vermesi gereken performansı sunuyor: yarı deli, yarı melankolik, tamamen karizmatik. Juno Temple's Susan filmin şüpheci sesi olarak başlıyor; Haley Lu Richardson's Ingrid grubun en tuhaf üyesi olmasına rağmen grubun duygusal çekirdeği haline geliyor. Yemek masasındaki üçlü sohbet filmin en iyi 20 dakikasıdır.

Yönetmen bilimkurguyu arka plan dokusu olarak kullanıyor; asıl konu, rastgele insanların ortak bir amaç etrafında toplandıklarında kendilerinde keşfettikleri şeydir. Aksiyon geldiğinde tempoyu asla yavaşlatmaz, bilakis bir gülümsemeyle birlikte gelir: Bir motel odasında geçen bir kovalamaca sahnesi, filmin türden tam olarak almak istediği şeyi anlatan mini bir manifesto gibi oynuyor.

Sonuç: Genellikle kendi kuyruğunu kovalayan, ancak son derece keyifli bir yaz alternatifi olan, R dereceli, biraz kaotik bir film. Gişe rekorları kıran bir yorgunluktan şikayetçiyseniz, restorana uğrayın; fatura çok yüksek olmayacaktır.`,
  },
  {
    slug: "project-hail-mary",
    origTitle: "Project Hail Mary",
    title: "“Project Hail Mary” — Ryan Gosling’in Cazibesiyle Ayakta Kalan Bir Uzay Kumarı",
    excerpt: "Andy Weir’ın çok satan romanından uyarlanan bu son çare uzay macerası, içten bir ciddiyetle çocuksu muziplik arasında gidip geliyor; ama Gosling’in doğal karizması gemiyi güvenli limana ulaştırıyor.",
    rating: "3/5",
    image: projectHailMaryAsset.url,
    body: `Andy Weir'nin çok satan bilimkurgu romanından uyarlanan *Project Hail Mary*, Amerikan futbolu "Hail Mary" geçişinden sonra Sun. Named'yi söndüren uzaylı bir mikrobu durdurmak için Dünya'nın son umudu olarak uzaya fırlatılan bir görevin hikayesini anlatıyor. Bu görev, adından da anlaşılacağı gibi, başka seçeneği olmayan uzak bir ihtimal. Yönetmenliğini *The Lego Movie* ve *Spider-Man'den alan: Spider-Verse* Phil Lord ve Chris Miller ekibine dahil olan filmin tonunun eğlenceli, yaramaz, çocuksu bir çizgi taşıması şaşırtıcı değil.

Ryan Gosling, moleküler biyolog Dr. Ryland Grace olarak rolünü tam bir rahatlıkla oynuyor: Uyarılmış bir komadan, dağınık uzun saçları, dağınık bir sakalı ve neden orada olduğuna dair sıfır hatırayla uyanıyor. Mürettebatın geri kalanı öldü; Görevi hem oraya nasıl geldiğini hem de insanlığı nasıl kurtaracağını bulmaktır. Gosling'nin ekrandaki zahmetsiz büyüsü, filmin daha yavaş uzamasını ve zaman zaman dikkat dağıtıcı derecede hafif tonunun affedilmesi kolay olmasını sağlıyor.

Filmin gerçek kalbi, Grace'nin, mürettebat kayıtlarında "Rocky" olarak belirtilen, taş gövdeli, örümceğe benzeyen bir uzaylıyla kurduğu tuhaf dostlukta atıyor. Once Grace's yazılımı, Rocky'nin iletişimini Hulk konuşmasına çevirir ("Rocky düzeltme", "Rocky yardım"), film *E.T arasında sallanmaya başlar.* nostalji ve *Marslı*'nin neşeli mühendislik-porno enerjisi. Sandra Hüller'nin soğukkanlı Alman teknokratı Eva Stratt'nin alevlere girip çıktığı geçmişe dönüşler, senaryoya ara sıra biraz ağırlık katmaya çalışıyor.

Yine de bu geri dönüşlerin dramatik işlevi her zaman belirsiz kalıyor. Grace'nin gerçekten bir şeyleri hatırlayıp hatırlamadığı veya yönetmenlerin bu sekansları sadece çerçeveyi değiştirmek için mi kullandığı belli değil. Nolan'nin *Interstellar*'sinin parçalanmış harikasını veya Spaihts'in *Yolcuları*'nin romantik izolasyonunu aramayın; *Project Hail Mary* bilinçli olarak daha hafif, daha eğlenceli bir yerde kalıyor. Bu seçim bazen akıllıca, bazen de "çocuk kanalı finali" gibi geliyor.

Sonuç: Weir'nin *The Martian*'sinin neşeli, esprili tonuna aşina iseniz, kendinizi evinizdeymiş gibi hissedeceksiniz. *Project Hail Mary* sinematik bir devrim değil; ancak Hail Mary pası Gosling, her şeye rağmen, alıcının ellerine toprak atar.`,
  },
  {
    slug: "avatar-son-hava-bukucu-s2",
    origTitle: "Avatar: The Last Airbender Season 2",
    title: "“Avatar: The Last Airbender” 2. Sezon — Netflix’in Canlı Çekim Uyarlaması Hâlâ Yolunu Bulamıyor",
    excerpt: "Netflix’in canlı çekim uyarlaması sürükleyici bir hikâye örgüsünü ele alıyor, ancak tempo ve mizah eksikliğiyle karanlık ışıklandırması yüzünden özgün animasyonun cazibesini bir kez daha ıskalıyor.",
    rating: "2/5",
    image: avatar2Asset.url,
    body: `Netflix'nin canlı aksiyon *Avatarı: Son Hava Bükücü* uyarlaması, orijinal Nickelodeon çizgi filminin neden bu kadar sevildiğini hâlâ anlayamıyor. İkinci sezon, birinci sezonun neredeyse tüm temel sorunlarını düzeltmeden geri getiriyor. Ana suçlu bir kez daha hızlanmadır. Hızlı, komik 20 dakikalık bölümlerle ortaokul izleyicisini hedefleyen animasyon dizisi, burada yedi bölüm, saat süren, olaylarla dolu bir yapıya sıkıştırılıyor. Bu daha olgun bir yorum yaratmaz; yalnızca daha ağır, daha ciddi bir versiyon yaratır ki bu kesinlikle kaynak materyale yapabileceğiniz en kötü şeydir.

Water Tribe'den Katara (Kiawentiio) ve Sokka'den (Ian Ousley) su bükmeyi öğrenen Twelve-year-old Avatar Aang (Gordon Cormier), sezonu Earth Kingdom. He'de seyahat ederek geçirir ve dört elementte de ustalaşacak bir toprak bükme öğretmenine ihtiyaç duyar ve gruba kör kız Toph (Miyako) da katılır. şimdiye kadarki en canlı ve en yaramaz figür. Bu arada, Fire Nation's güçleri Earth Kingdom'ye yayıldıkça kahramanlarımız duvarlarla çevrili Ba Sing Se. This şehrinin propaganda, gözetleme ve gizli polis üçgeninin ortasında kalır; orijinal serinin en akılda kalıcı olaylarından biridir; potansiyeli yadsınamaz.

Sorun tam olarak bu potansiyelin nasıl israf edildiğidir. Parlak renkler ve hızlı şakalar yerine, karanlıkta çekilen uzun, yavaş diyalog sahnelerine takılıp kalıyoruz; neredeyse hiç mizah bulunmuyor. Cormier elinden geleni yapıyor ama Aang'nin çocuksu çekiciliğini taşıması için ihtiyaç duyduğu komedi odası ona hiçbir zaman verilmedi. Bumi'nin (Utkarsh Ambudkar) neden Aang'yi öğretemediğini açıkladığı, çizgi filmde 45 saniyelik anlatımla sona eren bir kovalamaca sekansı olan sahne, gösteride karanlık bir odada üç dakikalık statik bir konuşmaya dönüşüyor. Hiç kimse, özellikle de 10 yaşındaki çocuklar, bir hikayenin bu şekilde anlatılmasından hoşlanmaz.

Yine de kayda değer bir güçlü not var: Zuko (Dallas Liu). Fire Lord'nin oğlu, Ba Sing Se'de amcası Iroh (Paul Sun-Hyung Lee) ile birlikte varsayılan bir isim altında yaşamaya çalışırken, kurtuluşun ilk kıvılcımlarını ateşlemeye başlıyor. Kendini babasına kanıtlama arzusu ile kız kardeşi Azula'nin (Elizabeth Yu) zulmü arasında kalan bu genç figür, sezonun en ilgi çekici karakter çalışmasıdır. Ne yazık ki etrafındaki yardımcı kadro yeterince iyi yazılmadığından Zuko bu ağırlığı neredeyse tamamen tek başına taşımak zorunda.

Sonuçta, Netflix'nin *Avatarı*, M. Night Shyamalan'nin kötü şöhretli film uyarlaması seviyesine düşmüyor - sadık oyuncu seçimi seçimleri en azından bu çıtayı temizliyor. Ancak popüler bir markadan yararlanmanın ötesinde var olma nedeni olduğunu söylemek zor. Karizmadan, tempodan yoksun ve sürekli loş ışıklı bu uyarlama, "çizgi film olmamayı" sanki başlı başına bir erdemmiş gibi sunuyor - ki öyle değil.`,
  },
  {
    slug: "cape-fear-apple-tv",
    origTitle: "Cape Fear",
    title: "“Cape Fear” — Apple TV Uyarlaması Selefinin Peşinden Giderken Kendini Kaybediyor",
    excerpt: "Javier Bardem ve Amy Adams’ın başrollerinde olduğu 10 bölümlük Apple TV uyarlaması, Scorsese’nin klasiğini hem taklit eden hem de ondan kaçmaya çalışan, kendi tonunu bir türlü bulamayan huzursuz bir gerilim.",
    rating: "2.5/5",
    image: capeFearAsset.url,
    body: `Herhangi bir aktörden daha önce Robert De Niro tarafından oynanan bir role adım atmasını istemek zaten adil değil - özellikle de bu karakter şiddetli 1991 *Cape Fear* olduğunda, De Niro, Cady'ye o kadar güçlü bir kibir, öfke ve Güney cazibesi karıştırdı ki, karakter hem dehşet verici hem de bakışlarını kaçırılması imkansız olmayı başardı. Nick Antosca (*Channel Zero*, *Ailenin Arkadaşı*) tarafından yaratılan yeni 10 bölümlük Apple TV mini dizisi, Javier Bardem'yi bu koltuğa oturtuyor.

Bardem, zor figürleri canlandırma konusunda deneyimli iyi bir aktör; sonuçta Anton Chigurh. As Cady'yi yaratan adam bu; manipülatif, rahatsız edici, baştan çıkarıcı ve kaypak. Ancak performansı hiçbir zaman De Niro'nin sahip olduğu lazer odağına sahip olmadı; aksanına kadar bile sallanıyor. Çoğunlukla İspanyolcadan etkilenen konuşmalara dayanan bir performans, bazen Güney'in çekiciliğine, bazen de *Easttown'dan Mare*'ye daha yakın bir şeye kayıyor. Her zaman Bardem'nin rol yaptığını hissedersiniz; De Niro ile durum asla böyle olmadı.

Antosca ve yazarları, 128 dakikalık orijinal filmi yaklaşık 10 saate çıkarmak için hikayeye ciddi eklemeler yapmışlar. Bu versiyonda Cady, temyizde mahkûmiyeti bozulan karısını ve oğlunu öldürmekle suçlanan bir adamdır. Ailenin reisi bu sefer bir kadın: Cinayet davasında Cady'yi temsil eden ve şu anda Southern Justice Legal Project. Her adlı kurgusal bir kâr amacı gütmeyen kuruluşta çalışan Anna Bowden (Amy Adams) kocası Tom (Patrick Wilson) bu davanın savcısıydı - yani Cady'nin her ikisiyle de hesaplaşması gereken bir hesabı var. Derin depresyonla boğuşan genç kızları Natalie (Lily Collias) ve üvey oğulları Zack (Joe Anders), Cady'nin zihinlerine sızması için yeni dijital yollar açar.

Dizinin asıl sorunu bu genişlemede ortaya çıkıyor. Herkes "doğruyu yapmak" için o kadar çabalıyor ki bu çaba hikaye anlatımını gölgede bırakıyor. Adams'nin performansı sağlam; Anna'nin özel bir hapishanenin CEO'suyla yüzleştiği jilet gibi keskin sahne yılın en tatmin edici anlarından biri. Ama karakter o kadar içine kapalı ki onu hiçbir zaman tam olarak tanıyamıyorsunuz. Bu arada Collias ve Anders, tamamen farklı bir diziye ait olduklarını hissediyorlar; üzerlerinde Max Cady kaygısı olmadan yaşayabilen iki sessiz genç. Görsel dil doğrudan Scorsese'den ödünç alınmıştır: Hitchcock tarzı hızlı yakınlaştırmalar, X-ışını aydınlatması ve Bernard Herrmann-style skoru; De Niro'nin sinema salonundaki meşhur kahkaha sahnesi bile burada hafif rötuşlarla yeniden çekildi; bu seçimin yapılmaması gerektiğini düşünüyorum.

Aralarında *Fargo*'nin de bulunduğu bazı filmden diziye uyarlamalar, bağımsız bir drama oluşturmaya devam ederken kaynak materyallerine göz kırpmayı başardılar. *Cape Fear* aynı yaratıcı cesarete sahip değil. Fena değil ama biraz daha fazlasını bekliyordum avukat.`,
  },
  {
    slug: "the-boroughs",
    origTitle: "The Boroughs",
    title: "“The Boroughs” — Alfred Molina ve Geena Davis Önderliğinde, Spielberg Tadında Eğlenceli Bir Bilimkurgu",
    excerpt: "New Mexico çölündeki bir emekli yerleşiminde canavarların ve şirket gözetiminin peşine düşen deneyimli oyuncu kadrosuyla iç ısıtan, yer yer temposu düşse de son derece sevimli bir Netflix dizisi.",
    rating: "3.5/5",
    image: boroughAsset.url,
    body: `Netflix'nin *The Boroughs*, çoğu dizinin yalnızca hayal edebileceği türden bir kadroyla geliyor ve bu arada, Alfred Molina ve Geena Davis gibi sevilen karakter aktörlerinin yardımcı rollere doldurulduğunu görmeye alışkın olan TV. We're türünde yaşlı ayrımcılığına dair oldukça keskin bir eleştiri sunuyor; onların kahraman olarak liderlik etmelerini izlemek nadir bir zevktir. *The Boroughs*, ölümcül bir komployu çözmeye çalışan bir grup yaşlı vatandaşı Spielberg tarzı bir maceranın merkezine yerleştirerek bu kalıbı kırıyor.

Akıl hastanelerinin korku sinemasının vazgeçilmezi olmasının nedeni, bu emeklilik topluluğunun bir gizeme bu kadar iyi uymasının nedeni ile aynı: Otorite figürlerine güvenemezsiniz. New Mexico çölünün ücra bir köşesine sıkışmış olan İlçeler, konutlardan spor salonuna ve yerel polis gücüne kadar her şeyin tek bir şirkete ait olduğu bir "kasabadır". Her evde bir gözetleme aracı olarak da kullanılabilen sahte bir Siri cihazı bulunur. Yaşlı bir sakin şüpheli koşullar altında ölürse (örneğin, ince, kimliği belirsiz bir yaratığın saldırısına uğradıktan sonra), bunu halının altına süpürmek yeterince kolaydır. Sonuçta, yaşlı insanlar her zaman ölürler ve unutkanlıkları, herhangi bir görgü tanığının ifadesini "kafa karışıklığı" olarak nitelendirmek için hazır bir mazeret oluşturur.

Kahramanımız, yeni dul kalmış emekli mühendis Sam Cooper (Molina), hiç de kafası karışık bir tip değil. İlçelere taşınmak karısının fikriydi; Beklenmedik ölümünün ardından kızı Claire (Jena Malone) burada yeni bir hayat kuracağını umuyor. But Sam, ne Stepford karısı gibi neşeli komşularına ne de çapkın parti hayvanı Jack'nin (Bill Pullman) golf, dedikodu ve tıbbi esrar rutinine pek uymuyor. Geena Davis's karizmatik resim eğitmeni, Alfre Woodard's ciddi eski gazeteci, Clarke Peters's New Age-inclined talip ve *American Horror Story* mezun Denis O'Hare's ölümcül hasta emekli doktor - bu topluluğun her üyesi ekran başında geçirilen her saniyeyi kazanıyor.

Creators Jeffrey Addiss ve Will Matthews (*The Lord of the Rings: The War of the Rohirrim*), bir yaratık özelliği araştırması olarak başlayan şeyi yavaş yavaş kurumsal gücün rahatsız edici bir portresine dönüştürüyor. Ana karakterler, sözde kendi çıkarlarını gözeten insanlar tarafından gaza getiriliyor. Özel güvenlik firması Renee'nin (Davis) özensiz gardiyanı, endişelerini şakayla geçiştirmek için suçu bildirirken, Sam ve komşuları da demans tanısıyla hastaneye kaldırılma tehdidinin yaklaştığını hissediyorlar. Bu fikir daha da ileri gidebilirdi; Dizinin konusu ciddileştikçe gizli tünel sistemleri ve morg soygunları gibi daha eğlenceli materyallere yöneliyor.

Sonuçta, *The Boroughs*, ana kötü karakterini ilk bölümden pratik olarak tahmin edebileceğiniz ve ikinci yarıda temposu düşen, ancak oyuncu kadrosu sayesinde sonuna kadar keyifli kalan bir *X-Files* / *Twilight Zone* melezidir. Molina'nin sonunda kariyerinin bu kadar sonlarında gerçek bir başrol oynaması, izlemek için başlı başına yeterli bir neden.`,
  },
  {
    slug: "star-city",
    origTitle: "Star City",
    title: "“Star City” — For All Mankind’ın Sürükleyici Yan Dizisi, Soğuk Savaş Paranoyasını Bilimkurguya İşliyor",
    excerpt: "Rhys Ifans ve Anna Maxwell Martin’in başrollerinde olduğu bu For All Mankind yan dizisi, KGB’nin gölgesindeki Sovyet uzay programını keşfederek daha karanlık, psikolojik yönü daha güçlü bir bilimkurguya kapı aralıyor.",
    rating: "4.5/5",
    image: starCityAsset.url,
    body: `*For All Mankind*'nin alternatif tarih önermesi her zaman tamamen ikna edici bir dünyadan ziyade bir istek listesine daha yakın hissettirmiştir. Apple TV serisinin evreninde USSR, U.S'yi yendi. Ay'a gitti ve bu şok, sonunda NASA'nin tamamı kadınlardan oluşan bir astronot birliği kurmasına yol açan bir domino etkisi yarattı. On yıllar boyunca ırk ve cinsiyet eşitliği bizim zaman çizelgemizde olduğundan çok daha hızlı ilerlemektedir; 1990'lara gelindiğinde insanlık Ay'a, Mars'a ve U.S'ye yerleşti. lezbiyen bir başkanı var Dizinin resmi olmayan misyonu her zaman *Star Trek*'nin ütopik geleceğine doğru gerçekçi bir yol çizmek oldu - bazen bu, var olmayan bir Amerika için propaganda gibi geldi.

Yeni yan ürün *Star City*, 1969 Soviet Moon inişiyle Cold War. Opening'nin diğer tarafından o zaman çizelgesinin en eski yıllarını anlatarak saati geri sarıyor; seri bizi *For All Mankind*'nin parlak, iyimser atmosferinden çok farklı bir dünyaya sürüklüyor: KGB Hikayenin merkezinde kozmonotların kahramanlıkları kadar paranoya da yer alıyor. Aynı çekirdek ekip - Ronald D. Moore, Ben Nedivi ve Matt Wolpert - bu kez pembe dizi unsurlarını sıkı, psikolojik bir drama adına kesiyor. Bilimkurgu yeterliliği pornosu hâlâ var ama çok daha baskıcı bir atmosfer altında.

Oyuncu kadrosunun başında yer alan Rhys Ifans, uzay programının muhteşem ancak yeterince takdir edilmeyen Chief Designer. He'si, KGB ve hükümetin müdahalesine karşı sürekli mücadele ederken, kederli bir Gary Oldman-caliber performansı sergiliyor. Onun karşısında, *Line of Duty*'den British TV izleyicileri tarafından bilinen Anna Maxwell Martin, tüyler ürpertici derecede acımasız bir KGB subayı olan Lyudmilla Raskova'yi canlandırıyor. Star City'nin bodrumunda, genç kadınların insanların evlerine yerleştirilen böceklerin kayıtlarını yazıya dökmek için saatler harcadığı havasız gözetleme ofisini yönetiyor. Ambitious Irina Morozova (Agnes O'Casey), Raskova'nin iyi niyetinde kalabilmek için kozmonot Valya Mironov (Adam Nagaitis) ve eşi Tanya'nin (Ruby Ashbourne Serkis) özel hayatlarını haber yapmak zorundadır.

*For All Mankind* ile kaçınılmaz karşılaştırma, iki dizinin feminist bilim kurgu olarak nasıl sıralandığına büyüleyici bir bakış sağlıyor. Orijinalinde kadınlar sistemin önyargılarını yıkıp dünyayı değiştirdiler; *Star City*'nin başlangıç ​​noktası farklıdır. 1970'lerin başında USSR'nin uzay programı hâlâ erkek egemendi; ancak KGB ofisleri ve kadın kozmonot programı - özellikle Alice Englert's utangaç Anastasia Belikova aracılığıyla - kadınların bazen Amerikalı meslektaşlarından daha büyük, bazen de onlarla aynı seviyede engellerle karşılaştığı incelikli bir tablo çiziyor. Valya, araştırma üssünde kendi hayatında sıkışıp kalan karısı Tanya'nin ne kadar mutsuz olduğunu göremiyor; Bu arada Anastasia, devlete olan bağlılığına rağmen değil, devlete olan bağlılığı nedeniyle terfi alıyor ve kendisini tamamen farklı türde bir kafeste kilitli buluyor.

*Star City* kısa sürede ideal bir yan ürün olduğunu kanıtladı: bağımsız bir drama olarak kendi ayakları üzerinde dururken selefinin güçlü yanlarını da alıyor. Uzay yarışının onlarca yıllık geniş kronolojisini zaten bildiğimiz için, dizinin Sovyet programının dış dünyanın hiç görmediği kısımlarına odaklanmaktan başka seçeneği yok; bu da yazarların birinci sezonun omurgasını oluşturan nefes kesici bir gizli program icat etmesine yol açıyor. Sahte Rus aksanı gibi bariz tuzaklardan kaçınan ve Sovyet sisteminin kusurları ile onun içinde sıkışıp kalan sıradan insanlar arasında net bir çizgi çeken bu yapım, Apple TV'nin son yılların en iyi bilim kurgu çalışmalarından biri olmaya hazırlanıyor.`,
  },
];

export const getReview = (slug: string) => REVIEWS.find(r => r.slug === slug);
