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
import projectHailMaryAsset from "@/assets/project_hail_mary.jpg.asset.json";
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
};

export const REVIEWS: Review[] = [
  {
    slug: "resident-evil-requiem-game-review",
    origTitle: "Resident Evil Requiem",
    title: "‘Resident Evil Requiem’ İncelemesi: Serinin Zirvesinde Geçen Dopdolu On Saat",
    excerpt: "Capcom; bulmacaları, korkuyu, aksiyonu ve Leon S. Kennedy’yi son derece ölçülü bir hayatta kalma korku oyununda bir araya getiriyor.",
    rating: "92/100",
    image: gameRe,
    body: `Yıllardır her biri farklı bir alanda parlayan Resident Evil oyunlarının ardından Capcom, hepsinin en iyi yanlarını bir araya getirmeye soyundu. Bulmacaları, korkuyu, aksiyonu ve Leon S. Kennedy’yi buluşturan **Resident Evil Requiem**, bunu başarmakla kalmıyor; üstelik yaklaşık **10 saatte** yapıyor.

Oyuncular Leon ile seriye yeni katılan **Grace Ashcroft** arasında geçiş yapıyor. Grace’in bölümleri ağır tempolu, gergin ve gerçekten korkutucu; Leon’un bölümleri ise son yeniden yapımlardaki son derece tatmin edici silahlı çatışmaları sunuyor.

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

**Patrick Gibson’ın** canlandırdığı 26 yaşındaki Bond, karakterin on yıllardır gördüğümüz en inandırıcı video oyunu yorumu. **Gemma Chan** ve **Lenny Kravitz** de güçlü performanslarıyla ona eşlik ediyor. Lana Del Rey’in tema şarkısı ve Hans Zimmer’ın müzikleri, serinin hep peşinde olduğu sinematik tonu yakalıyor.

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
    body: `Emekli bir asker, köpeği ve acımasız bir vahşi doğa:*Heart of the Beast*önermesini basit tutuyor, ardından iki başrol oyuncusu arasındaki güven konusunda şaşırtıcı derecede etkileyici bir hikaye buluyor.Director David Ayer, bir sonraki saatte hayatta kalmanın eğitim kadar arkadaşlığa da bağlı olduğu kalabalık aksiyonun yerine daha samimi bir tehlikeyi tercih ediyor.

Brad Pitt, emekli askeri çalışma köpeğiOdinile Alaska dağlarına kaçan eski bir ABD Ordusu Özel Kuvvetler subayı olanJames'yi canlandırıyor. Her ikisi de hizmetlerinin hatırlatıcılarını taşıyor:Jamesyalnızlık arıyor,Odinise protez bacak ve kalıcı travmayla yaşıyor.James'nin uçağının kumandasında kalp krizi geçirmesi ve yardımdan uzakta kaza yapmasıyla rutin yolculukları eve dönüş mücadelesine dönüşür.

Film, onu oraya getiren olaylara dönmeden önceOdin'nin uzak bir yolda tek başına gösterilmesiyle başlıyor. O noktaya geldiğini bilmek gerilimi ortadan kaldırmaz. Bunun yerine soru, bu çiftin yol boyunca neye katlanması gerektiği ve birbirlerini hayatta tutup tutamayacakları haline geliyor.

![James and OdinAlaska'nın vahşi doğasını birlikte geçiyor](${heartOfTheBeastStill.url})

Nehirler, yaban hayatı ve engebeli arazi, hayatta kalma filminden beklenen engelleri oluşturuyor, ancak aksiyon işe yarıyor çünkü neJamesne deOdinbu yolculuğa hazır değil.Odin,Jamesçöktüğünde yardım etmeye çalışır; Kazadan sonraJamesyaralı arkadaşıyla ilgileniyor. Ayer tekrar tekrar bu koruma alışverişine odaklanıyor ve tanıdık tehlikelere bile kişisel bir maliyet getiriyor.

Pitt,James'nin yalnız mücadelesini yaşanmış gibi hissettirirken,Odin'yi oynayanGerman ShepherdUber, filmi bir hileye indirgenmeden sabitliyor. Film zaman zaman köpeğin iç yaşamını hayal etmeye çok fazla eğiliyor, ancak çoğunlukla onun hareketinin ve dikkatinin hikayeyi anlatmasına izin veriyor.J.K. Simmonsküçük bir destekleyici rolde görünüyor; filmin kalbi tek başına olan adam ve köpek olmaya devam ediyor.

Vahşi doğadaki rota tahmin edilebilir olabilir, ancak*Heart of the Beast*, ikna edici bir şekilde paylaşılan bir çile yoluyla hissini kazanıyor. En güçlü anları doğayı fethetmekle ilgili değil. Birbirlerini geride bırakmayı reddeden iki eski ortak hakkındadırlar.`,
  },
  {
    slug: "star-wars-galactic-racer-review",
    origTitle: "Star Wars: Galactic Racer",
    title: "‘Star Wars: Galactic Racer’ İncelemesi: Çok Çok Uzak Bir Galaksiye Dönmenin En Hızlı Yolu",
    excerpt: "Fuse Games, podracing heyecanını riskli hız takviyeleri, çeşit çeşit araç ve her kazanın önem taşıdığı bir hikâye moduyla müthiş bir arcade yarış oyununa dönüştürüyor.",
    rating: "Recommended",
    image: galacticRacerCover.url,
    body: `*Star Wars: Galactic Racer*'nin galaksisini heyecanlı kılmak için ışın kılıcına ihtiyacı yok. Önceki filmlerin pod yarışı sekansının ardındaki heyecan verici fikri alıp hızı, gürültüsü ve tehlikeli makineleri etrafında bütün bir yarış oyunu inşa ediyor. Sonuç, pistin neredeyse okunamayacak kadar hızlı olduğu ve yıpranmış bir aracı sağlam tutmanın başlı başına bir zafer gibi hissettirdiği durumlarda en iyisidir.

Hikaye, bir zamanlar zengin ailesiShade'nin ana dünyasını ele geçiren şampiyonKestar Bool'ye meydan okumak için galaktik bir lige giren yarışçıShade'yi konu alıyor. Bu rekabet, her yarışı franchise tarihinde bir derse dönüştürmeden kampanyaya bir hedef sağlıyor. Önemli olan mitoloji değil aksiyondur.

Araç seçimi rekabete dokusunu kazandırır. Landspeeder'lar güvenli sürüklenmeyi ödüllendirir, skimmer'lar dar virajları farklı şekilde alır ve speeder bisikletleri dayanıklılığı keskin hızlanmayla değiştirir. Pod yarışçıları hızı çok daha ileri iterek farklı türde bir cesaret isterler. Her makinenin ne zaman itilebileceğini ve ne zaman geri çekileceğini öğrenmek, bir virajdan geçen en hızlı çizgiyi ezberlemekten daha tatmin edicidir.

![Uzak birGalactic Racerparkurunda bir yarış gemisi yanaşıyor](${galacticRacerTrack.url})

Yükseltme başka bir risk katmanı ekler. Geleneksel bir turbo anında patlama sağlarken, daha güçlü Ramjet yanlış kullanıldığında aracınıza zarar verebilir. Tehlikelerle ve agresif rakiplerle dolu pistlerde bu ayrım, yarışların rutin hale gelmesini engelliyor. En iyi anlar, iddialı bir kısayolun, dar bir aralığın ve neredeyse bitmiş bir motorun bir anda karar verilmesini gerektirdiğinde gelir.

Ana kampanya, yarışları bir dizi koşu olarak çerçeveliyor. Galibiyetler parça ve yükseltmeleri beraberinde getirir; ağır hasar makinenin bir kenara çekilmesine neden olurken, çok fazla arıza yeni bir başlangıca zorlar.Sponsors andrakip yarışçılar sezonu daha da şekillendiriyor. Bu yapı, yakın bir bitiş meselesidir çünkü tek bir sıralama pozisyonundan daha fazlasını etkiler, ancak tekrarlanan yaya araları yarışlar arasındaki ivmeyi yavaşlatır.

Shade'in kampanyasının ötesinde atari etkinlikleri, zamana karşı denemeler ve daha kısa karakter senaryoları dahil yapılacak daha çok şey var. Pod yarışı meraklıları, özel pod yarışı aksiyonunun çoğunun ana hikayeden ziyade bu ekstra modlarda yaşandığını bilmelidir. Çevrimiçi rekabet, yarışmanın başka bir yolunu sunar, ancak uzun vadeli çekiciliği, lansmandan sonra bir araya gelen topluluğa bağlıdır.

![Pod yarışçılarıStar Wars: Galactic Racer'de su üzerinde yarışıyor](${galacticRacerPodrace.url})

Oyunun kirli görsel detayları ve güçlü motor sesi, araçlarına somut bir kişilik kazandırıyor. Daha da önemlisi, yüksek hızlı aksiyon akıcı kalır.*Galactic Racer*ritmini bulduğunda, duvara yapılan her sürtünme ve mükemmel zamanlanmış her güçlendirme bir sonraki turun karşı konulmasını zorlaştırır. Yaya olarak yapılan esnemeler daha az zorlayıcıdır, ancak pistte bu alışılmadık derecede kendine güvenen ve cömert bir atari yarışçısıdır.

**Oyun ayrıntıları:**Fuse Gamestarafından geliştirildi;Secret Mode. PlayStation5,Xbox Series Xtarafından yayınlandı |S and PC. Releasetarihi: 6 Ekim 2026.Images: Fuse Games/Lucasfilm Games.[Orijinal inceleme](https://kotaku.com/star-wars-galactic-racer-the-kotaku-review-2000739105).`,
  },
  {
    slug: "godzilla-minus-zero-review-takashi-yamazaki",
    origTitle: "Godzilla Minus Zero",
    title: "‘Godzilla Minus Zero’ İncelemesi: Takashi Yamazaki’nin Görkemli Devam Filminde Godzilla ile King Ghidorah Karşı Karşıya",
    excerpt: "Takashi Yamazaki, Godzilla Minus One’ın merkezindeki aileyi geri getirerek sinema canavarlarını daha büyük ve daha vahşi bir çatışmada buluşturuyor; üstelik onların ayakları altındaki insanları da unutmuyor.",
    rating: "4.5/5",
    image: godzillaCoverAsset.url,
    body: `*Godzilla Minus One*'nin başarısı sadece devasa bir yaratığı yeniden korkutucu hale getirmek değildi.Takashi Yamazaki, enkazın kişisel bir his uyandırmasını sağladı ve parçalanmış her sokağı hâlâ savaştan sonra bir hayat kurmaya çalışan insanlara bağladı. Onun devamı olan*Godzilla Minus Zero*, bu samimi ölçeği unutmadan tuvali genişletiyor. Bu seferGodzillayalnız değil: HikayeyeKing Ghidorahgiriyor ve çarpışmaları savaş sonrası Japonya'yı şaşırtıcı bir gösteriye sahne ediyor.

Set in1949, filmGhidorah'nin önceMatsumoto. At'ye saldırmasıyla başlar. Canavarın yalnızca tek kafası vardır, ancak onun gelişi şimdiden şehri kaosa sürükler. Yıkım sadece uzaktan değil, Hiroşima'dan sağ kurtulan ve bu olağanüstü yaratıkları inceleyenProfessor Murakami'nin gözlerinden de görülüyor.Yamazaki, kamera, onların altında tek bir kişinin ne kadar küçük olduğunu hissetmemize izin verdiğinde canavarların daha da rahatsız edici hale geldiğini anlıyor.

![Godzilla Minus Zero: şehrin üzerine bir canavar iniyor](${godzillaAttackAsset.url})

Son filmin sonundakiGodzilla at the'nin görünürdeki yıkımı çok az güvenlik sağladı.As thetehdidi büyüyor,Kenji Nodaumutsuz bir tepkinin sorumluluğunu üstleniyor: iki devi aynı yere çekin, savaşmalarına izin verin, sonra hangisi hayatta kalırsa işini bitirmeye çalışın. Kağıt üzerinde basit görünüyor. Ekranda plan, hataya neredeyse hiç yer vermeyen insanlar tarafından verilen son derece tehlikeli kararların bir zincirine dönüşüyor.

![Kenji Nodayeni canavar tehdidine verilen yanıtı yönlendiriyor](${godzillaNodaAsset.url})

Ghidorahözellikle canlı bir eklentidir. Ejderhaya benzeyen kafaları turuncu şimşekler saçarken, devasa kanatları her hava karşılaşmasını ölçek ve hareket açısından çılgın bir mücadeleye dönüştürüyor. Yaratığın üzerine gönderilen uçakların yer aldığı bir sahne, başka bir filmin doruk noktası gibi oynuyor; burada sadeceGodzilla'nin geri dönüşünün başlangıcı var.Yamazaki'nin görsel efekt koreografisi, canavarlara birbirinin yerine geçebilir dijital rakipler gibi davranmak yerine, hem ağırlık hem de karakter kazandırıyor.

![Professor Murakami in Godzilla Minus Zero](${godzillaMurakamiAsset.url})

Bir o kadar da önemlisi, filmKōichi Shikishima'ye geri dönüyor; Noriko ve evlatlık kızlarıAkiko. Theirailesi ilk filmin dehşetinden kurtuldu, ancak hayatta kalmak onları bu terörün sonuçlarından kurtarmadı. Kōichi kokpite doğru çekilirken Noriko'nunGodzilla'nin önceki saldırısıyla bağlantısı ona gelişen krizde bir rol veriyor. Bu insani kazıklar, gösterinin yok ettiği dünyadan özgürce süzülmesini engelliyor.

![Shiro Mizushima, 1949'da geçen devam filmiyle geri dönüyor](${godzillaMizushimaAsset.url})

Yardımcı oyuncu kadrosu bu insanın bakış açısını genişletiyor. Noda'nın endişeli kararlılığı operasyona gergin enerji verir. Murakami, bilimsel gizeme savaş anılarını hatırlatıyor; meteorologMakoto Aoyamaise yaratıkları çevreleyen fırtınalardaki desenleri görüyor. Aksiyonu kesintiye uğratmak yerine, bu karakterler filme hangi canavarın kazanacağı sorusunun ötesinde tehlikede olan bir şey veriyor.

![Meteorologist Makoto Aoyama in Godzilla Minus Zero](${godzillaAoyamaAsset.url})

When GodzillasonundaGhidorahile buluşuyor,Yamazakibir boyut yarışmasından daha fazlasını sahneliyor. Savaş, bir efsaneye duyulan saygıyı ve gerçek bir şehrin başına gelen bir felaketin aciliyetini taşıyor. Yıkımı hem güzel bir şekilde bestelenmiş hem de gerçekten endişe verici hissettirme becerisi hâlâ serinin en büyük varlığıdır. Son bölüm zaman zaman daha gizemli olay örgüsünü birbirine karıştırıyor, ancak momentum ve duygusal yatırım filmi devam ettiriyor.

![Godzilla,Takashi Yamazaki'sdevam filminde yıkımın ortasında geri dönüyor](${godzillaReturnAsset.url})

Sonuç, insanlarını seyirciye indirgemeden daha büyük düşünen bir devam filmi.*Godzilla Minus Zero*, izleyicilere amaçladıkları devasa hesaplaşmayı yaşatıyor ve ardından kimin onun gölgesinde yaşaması gerektiğini bize hatırlatarak bu çatışmayı önemli kılıyor.

**Film ayrıntıları:**Written and,Takashi Yamazakitarafından yönetilmiştir;Ryunosuke Kamiki,Minami Hamabe,Hidetaka Yoshioka,Min Tanaka and Masami Nagasawa. Premiered at the'nin başrol oynadığı 2026New York Film Festival. Set for North American, 6 Kasım 2026'da yayınlandı.`,
  },
  {
    slug: "hope-review-na-hong-jin",
    origTitle: "Hope",
    title: "‘Hope’ İncelemesi: Na Hong-jin’in Canavar Filmi, Silahların Susmadığı Bir Aksiyon ve Müstehcen Mizah Cümbüşü",
    excerpt: "Na Hong-jin; ustalıklı aksiyon sahnelerini, yer yer aksayan yaratık efektleri ve 160 dakikaya yayılan dağınık anlatımıyla buluşturan devasa, dizginlenemez bir Kore canavar filmiyle dönüyor.",
    rating: "3.5/5",
    image: hopeReviewAsset.url,
    body: `*The Wailing*'den sonraki on yıl boyunca,Na Hong-jin's'nin bir sonraki filmi hakkındaki her yeni söylenti bir olayın ağırlığını taşıyordu.*Hope*sonunda tamamen görünür bir baskıyla geliyor: Devasa, dağınık, çok komik ve uzun süre boyunca heyecan verici derecede canlı. Film, 160 dakika boyunca en iyi fikirlerini sürdüremeyebilir, ancak en güçlü pasajları, bir tiyatroyu bir anda öne eğdiren türden aksiyon filmi yapımıdır.

OrtamHope Harbor, casuslar ve kara mayınlarıyla ilgili eski uyarıların hala manzarada yer aldığı, kuzeye yeterince yakın, eski püskü birSouth Koreansahil kasabası. Hikaye, düz bir alanda sakatlanmış bir ineğin ve yeri doldurulamaz derecede komik birHwang Jung-mintarafından canlandırılanPolice Chief Bum-seok'nin vahşeti anlamlandırmaya çalışmasıyla başlıyor. Yerel avcılar bir kaplanın Kuzey'den geldiğini öne sürüyor ancak film, tehdidin daha tuhaf, daha büyük ve kontrol altına alınmasının çok daha zor olduğunu hemen ortaya koyuyor.

Na'nın ilk saati, filmin en iyi halidir: 1950'lerin Batı tarzı bilimkurguB-movie and Koreanküçük kasaba komedisinin vahşi bir karışımı.Bum-seokharabeye dönmüş sokaklarda hızla ilerliyor, herkes birinin kuzeni ya da komşusu olduğu için cesetleri tanıyor ve duvarları yıkan bir felakete sıradan polis mantığı empoze etmeye çalışıyor.  Büyük ekrandaOfficer Sung-aeolarak müthiş bir izlenim bırakanHoyeon, canavara bir gizemden çok ahlaki bir saldırı gibi davrandığında kaosa mükemmel bir öfke sarsıntısı veriyor.

Zevk, aptallığın ne kadar dikkatli sahnelendiğinden geliyor.Hong Kyung-pyo'skamera, şakayı, korkuyu ve kargaşayı tek bir elastik ritme dönüştüren bir zarafetle paniğin içinde süzülüyor. Arabalar dönüyor, avcılar tekleme yapıyor, çevredekiler korkunç kararlar veriyor ve her yeni felaket, bir şakanın zamanlaması ve bir aksiyon setinin gücüyle ortaya çıkıyor.When thefilmi,Hope Harbor'nin dehşete düşmüş, gülünç insanlarına yakın duruyor, son derece eğlenceli.

Büyünün zayıfladığı yer yaratığın kendisidir.Once thefilmi, uzaylı tehdidini tamamen ortaya koyuyor; tasarım, canlı aksiyon dünyasının fiziksel güzelliğiyle çatışan, ağırlıksız, eski tarz bir video oyunu kalitesine sahip. Avcılar ormanın derinliklerine doğru ilerledikçe, mitoloji genişledikçe veMichael Fassbender,Alicia Vikander and Taylor Russelluzaylı klanının bir parçası olarak ağır efekt çalışmaları altında ortaya çıktıkça orta bölüm de ivme kaybediyor. Varlıkları ilgi çekicidir, ancak film, işgalcileri anlatırken, sıradan insanların onlardan kurtulmayı başaramamalarını izlemekten çok daha az ilgi çekicidir.

Yine de*Hope*, araçlardan, cesetlerden, kötü planlardan ve absürt gerilimden oluşan bir otoyol kovalamacasına doğru ilerleyen son üçte birlik bölümde yeniden nabzını buluyor. O zamana kadar, daha zayıf olan görsel efektler, insani gösterilerden, komik ivmeden ve Na'nın filmin tuhaflığını azaltmayı reddetmesinden daha az önem taşıyor. Kendi mitolojisi konusunda çok uzun, çok düzensiz ve bazen de çok aptalca ama yine de en iyi sahneleri o kadar kendinden emin ki, pürüzlü kenarlar isyanın bir parçası haline geliyor.

Geriye büyük bir felsefi yük taşımayan ve bayağı zevkleri için özür dilemeyen aşırı doldurulmuş bir canavar filmi kalıyor. Bu hafiflik, onu tuhaf bir Cannes yarışması girişi haline getiriyor, ama aynı zamanda canlandırıcı da.Hope Harbor'nin insanları, aralarına gelenlerden daha yavaş, daha zayıf ve daha az asil olabilir ama izlemesi çok daha eğlenceli.

**Film detayları:**Directed andNa Hong-jintarafından yazılmıştır; başrollerdeHwang Jung-min,Zo In-sung,Hoyeon,Taylor Russell,Cameron Britton,Alicia Vikander and Michael Fassbender. Reviewed at Cannes Film Festival. Runningsüre: 160 dakika.`,
  },
  {
    slug: "resident-evil-review-zach-cregger-austin-abrams",
    origTitle: "Resident Evil",
    title: "‘Resident Evil’ İncelemesi: Zach Cregger Yorgun Seriye Heyecan Verici Bir Can Suyu Katıyor",
    excerpt: "Austin Abrams, Zach Cregger’ın hayatta kalma korku serisini vahşi ve komik bir üslupla yeniden yorumladığı bu filmi, Raccoon City’de felaketlerin birbirini kovaladığı tek bir gece boyunca sırtlıyor.",
    rating: "4/5",
    image: residentEvilCoverAsset.url,
    videoUrl: "https://www.youtube.com/embed/mNd1gb19A-c",
    body: `*Barbar*ve*Silahları*'nin devamı olarakZach Cregger'solarak*Resident Evil*'nin seçilmesi, başlangıçta tanıdık fikri mülkiyete bir geri çekilme gibi geliyordu. Video oyunu uyarlamaları, kaynak materyallerinin korku, gerilim veya grotesk buluşuyla nadiren eşleşiyor.Cregger'nin cevabı önceki filmleri taklit etmek değil, onları geride bırakmak ve aynı kirlenmiş dünyada basit, orijinal bir hayatta kalma hikayesi inşa etmek.

![Austin Abramstıbbi kurye olarakBryan in Resident Evil](${residentEvilStill1Asset.url})

Austin Abrams, karlı bir gecede son bir acil işi kabul ettiğinde kişisel hayatı zaten çözülmeye başlayan tıbbi kuryeBryan'yi canlandırıyor. Paketin, serinin tuzağın kapandığını görebileceğini bilenRaccoon City. Anyone'deki bir hastaneye ulaşması gerekiyor, ancakAbrams,Bryan'nin kararını inandırıcı kılıyor: O sıradan, iyi niyetli ve şehir sınırlarının ötesinde bekleyenlere karşı olağanüstü derecede hazırlıksız.

![Bryan,Raccoon City'ye doğru gece koşusuna başlıyor](${residentEvilStill2Asset.url})

İlk felaket,Bryan'nin yoluna çıkan bir kadına çarptığı izole bir yolda gelir. Vücudu imkansız bir açıyla bükülmüş olmasına ve sessizliği şoktan çok daha kötü bir şeye işaret etmesine rağmen yardım etmeye çalışıyor. Bir polis memuru hastaneye kadar eşlik etmeyi teklif eder, ancak görünüşteki bu kurtarma yalnızca giderek daha da kötüleşen bir dizi karşılaşmanın kapısını açar.

![Zach Cregger's Resident Evil'den gergin bir sahne](${residentEvilStill3Asset.url})

Cregger andortak yazarıShay Hatten, yolculuğu artan oyun seviyeleri gibi yapılandırıyor.Bryanaracını kaybeder, görünüşte terk edilmiş bir çiftlik evine ulaşır, bir bekçi köpeğinden sağ kurtulur ve insan anatomisinin olması gereken yerde dokunaçları ve çeneleri olan yaratıkları keşfeder. Her konum, onu bir sonraki kontrol noktasına doğru itmeden önce yeni bir kural, tehdit veya korkunç can alıcı noktayı getirir.

![The Raccoon Citysalgını,Bryan'nin teslimatını hayatta kalma mücadelesine dönüştürüyor](${residentEvilStill4Asset.url})

Filmin en iyi yinelenen şakası aynı zamanda en insani fikridir:Bryaninsanlara yardım etmeye çalışmaktan kendini alamıyor. Her kurtarma girişimi felaketle sonuçlanır. Karavanda ağlayan bir çocuk bile başka bir virüslü saldırgana dönüşürken, zayıf nişan alması ve asma kilitten ateş edememesi, temel aksiyon filmi becerisini anlamsız bir komediye dönüştürüyor. Mizah asla tehlikeyi ortadan kaldırmaz; şiddeti daha öngörülemez hale getiriyor.

Paul Walter Hauser,Bryan'nin paketinin şehirde çok ihtiyaç duyulan bir panzehir içerdiğini açıklayan Şemsiye bilimcisi Carl olarak hoş bir komik enerji getiriyor.Kali Reis, Carl'ın silahlı eskortu Maxine rolünde amansız bir karşı ağırlık rolünde. Onların gelişi, endişeli mırıldanması ve sıradan herkese hitap eden tüylü sesiyle izleyiciyi kaosun ortasında sabit tutanAbrams'den çalmadan hikayeyi genişletiyor.

![Kali Reis and thehayatta kalanlar enfeksiyon kapmış kişilerle karşı karşıya](${residentEvilStill5Asset.url})

Nefes kesen 90 dakikada film neredeyse hiçbir şeyi boşa harcamıyor. Bir kanalizasyon karşılaşması en kötü biyolojik sürprizlerinden birini sunar. Enfekte cesetler binalardan yağarken sokak bir eldiven haline geliyor. Hastane finali,Hieronymus Boschtarafından boyanmış hissi veren bir doğumhane vizyonuna doğru tırmanıyor ve ardından operatik bir final perdesine dönüşüyor.

Creggerara sıra birinci şahıs bakış açısına geçerek seyirciyi kısacaBryan'nin gözlerinin arkasına yerleştiriyor. Bu, oyunlara etkili bir göndermedir çünkü hayranlara hizmet etmek için filmi durdurmak yerine, film yapımında doğal olarak gelişir.Dariusz Wolski'sgörüntüleri,Tom Hammock'sprodüksiyon tasarımı ve yaratık çalışması, her yeni odayı incelenmeye değer bir tehdide dönüştürüyor.

Bu*Resident Evil*'nin çalışmasını sağlayan şey kendine olan güvenidir. Oyunların hayatta kalma-korku ritmini, karakterlerin veya kronolojinin tuzağına düşmeden anlıyor ve yenilmez bir aksiyon kahramanı yerine savunmasız bir kahramana güveniyor. Barok vahşet, keskin görsel şakalar veAbrams'nin çılgın samimiyeti, yıpranmış bir seriye tam olarak ihtiyaç duyduğu sarsıntıyı veriyor.

**Film detayları:**Yönetmen:Zach Cregger;Zach Cregger and Shay Hattentarafından yazılmıştır; başrollerdeAustin Abrams,Zach Cherry,Kali Reis,Paul Walter Hauser and Will Merrick. Rated R. Runningsüre: 90 dakika.Released September18, 2026.`,
  },
  {
    slug: "the-uprising-review-andrew-garfield",
    origTitle: "The Uprising",
    title: "‘The Uprising’ İncelemesi: Andrew Garfield, Bugünü Yakıcı Biçimde Hatırlatan Bir Devrime Öncülük Ediyor",
    excerpt: "Paul Greengrass, İngiltere’deki 1381 Köylü İsyanı’nı sarsıcı bir tarihî dramaya dönüştürürken Andrew Garfield yasın, öfkenin ve sınırlarının ötesine itilmiş bir işçi sınıfının vücut bulmuş hâli oluyor.",
    rating: "4/5",
    image: theUprisingAsset.url,
    videoUrl: "https://www.youtube.com/embed/ZVkrhHebz1Q",
    body: `İsyanlar nadiren tek bir an ile başlar. Yıllar süren baskı, aşağılama ve kayıplardan sonra, son bir hareket kıvılcımı sağlayana kadar büyürler.Paul Greengrass'"The Uprising"England's Peasants' Revolt of1381'e geri döner ve öfkesinin şaşırtıcı derecede güncel olduğu bir hikaye bulur.

Ülke hâlâ yoksul toplulukları harap eden bir felaket olanBlack Death'nin sersemlemesini yaşıyor. Genç birKing Richard II, yozlaşmış danışmanlar, sevilmeyen bir dış savaş ve aristokrasiyi korumak için tasarlanmış vergiler tarafından şekillendirilen bir hükümetin üzerinde oturuyor. Kraliyet yetkilileri Brentwood'da zorla daha fazla para koparmaya çalıştığında direniş bir köyden Londra'ya doğru yayılır.

Andrew Garfield, kısacaPloughman. He'nin ailesini vebadan kaybettiği ve geriye kalanlarla zar zor hayatta kalabildiği bilinen kederli bir çiftçiyi canlandırıyor.Garfield, karakterin sessizliğini yüklü hissettiriyor: devlet şiddetine tanık oldukça ve sonunda artık yeter diye bağırdıkça üzüntü sertleşiyor ve kararlılığa dönüşüyor. Bir gardiyana karşılık verdiğinde, kişisel acılar toplumsal isyana dönüşür.

Ploughman,Jamie Bell'nin canlandırdığı radikal vaizJohn Ballve hareketin tarihi figürüCosmo Jarvis' Wat Tyler'ye katılıyor.Thomasin McKenzie's Alyceaynı zamanda davayı üstlenen kadınları da temsil ediyor. Birlikte, korkmuş çocuk kralla ve onun adına hüküm süren adamlarla yüzleşmeyi umarakCanterbury to London'den yürüyorlar.

MahkemedeKatherine Waterston's Countess and the Lords Appellanthareketin nasıl bastırılacağını tartışıyor.Tom Hollander,Treasurer Hales'ye yağlı bir tehdit getiriyor,Stephen Dillane,Archbishop Sudburyoynuyor veJonny Lee Miller, belediye başkanını korkutucu bir siyasi uygulayıcıya dönüştürüyor. Egemen sınıf, çaresizliği saray kapısına ulaşana kadar rahatsızlık olarak görüyor.

Greengrassayaklanmayı tanıdık, huzursuz tarzıyla çekiyor. Kameralar kalabalıkların arasında, cesetlerin arasında ve hücum eden birliklerin yanında hareket ederek tarihi yeniden yapılanmayı görgü tanıklarının görüntülerine daha yakın bir şeye dönüştürüyor. Yaklaşım "Bloody Sunday"yi hatırlatıyor: Aksiyon felakete dönüşür ve izleyici, karmaşanın güvenli bir şekilde üstünden çıkmak yerine, karmaşanın içine yerleştirilir.

Filmin amacını ifade etmek için modern konuşmalara ihtiyacı yok.Talk of"işlerinizi çalan" göçmenler, sınırlarını aşan vatandaşlar ve günah keçisi arayan liderler kendi yankılarını yaratıyor.Greengrass, popülist öfkeyi politik olarak istikrarsız, aynı kalabalıkta adalet, önyargı ve şiddet taleplerini taşıyabilecek kapasitede görüyor.

Son bölümü ünlü bir İngiliz halk kahramanının kökeniyle flört ediyor; bu seçim, kendisinden önceki trajediden daha eğlenceli gelebilir.Yet thefilminin ana fikri değişmeden kalıyor: Tarih tekerrür etmiyor, aynı zamanda eşitsizlikler, korkular ve sloganlar da kafiyeli olmaya devam ediyor.

"The Uprising", baskının protestoya dönüşmesinin sürükleyici bir kroniği olarak en iyi sonucu verir.Garfield, bu dönüşüme bir insan merkezi kazandırırkenGreengrass, 600 yıllık bir isyanın müze eserinden çok, gerçek zamanlı olarak gelen bir uyarı gibi görünmesini sağlıyor.`,
  },
  {
    slug: "lanterns-inceleme-hbo-green-lantern",
    origTitle: "Lanterns",
    title: "“Lanterns” İncelemesi: HBO’nun Green Lantern Dizisi Işıl Işıl Parlıyor",
    excerpt: "IndieWire’a göre Chris Mundy, Damon Lindelof ve Tom King’in izlerini taşıyan dizi, Aaron Pierre ile Kyle Chandler arasındaki sürtüşmeli uyumu Nebraska’da geçen bir cinayet soruşturmasına bağlıyor; ortaya bir çizgi roman uyarlamasından çok, zıt karakterli polis ikilisi kalıbını tersyüz eden cesur bir drama çıkıyor.",
    rating: "A-",
    image: lanternsCover.url,
    gallery: [lanternsG1.url, lanternsG2.url, lanternsG3.url, lanternsG4.url],
    body: `Aaron Pierretarafından kayda değer bir inançla oynanan, gezegende gelmiş geçmiş en kusursuz yapılı adamlardan biri olanJohn Stewart, kazandığı saygıyı bir türlü alamıyor. Adam neredeyse 1,80 boyunda, defans oyuncusu gibi yapılı ve askeri eğitimli bir keskin nişancıTom Cruise. Asgibi koşuyor ve kilometrelerce uzaktan hedefi çivileyebiliyor. Sadıktır, uyanıktır ve insanüstü bir sabra sahiptir.

Kısacası tam bir paket. O halde doğal olarak emekli olmayı reddeden yaşlı beyaz bir adama ikinci keman oynuyor.

"Lanterns" başladığında,Johnyol kenarında aktifGreen Lantern to'nin onu almasını bekliyor. Dünyanın ilk ve tek galaksiler arası kolluk kuvvetiHal Jordan'nin (Kyle Chandler),John'yi kendi yedeği olarak eğitmesi gerekiyor: evrenin en güçlü silahının emanet edildiği adama bir şey olması durumunda devreye girecek "acil durum" süper kahramanı.

Ve bir şeyin olacağına inanmak için nedenler var. Galaksinin etrafında 20 yıl boyunca mekik dokuyarak gezegeni meteorlardan ve uzaylı istilalarından kurtardıktan sonraHalartık şöhretinin üzerinde dinleniyor. Artık üniformasını giymiyor çünkü kot pantolon "tuvalete gitmeyi kolaylaştırıyor." Yoktan bir ustura yaratamayan bir adamın kronik sakalına sahip. Grileşen saçları, çocukça şakalarının inkar etmeye çalıştığı bir yaşı ele veriyor; NihayetJohn'yi almaya geldiğinde iki hafta gecikmiş ve gururlu bir şekilde akşamdan kalmadır.

Usta ile çırak arasında sevgi yok demek pek doğru olmaz. Ancak saygı yalnızca tek bir yönde akar ve kusursuz bir özgeçmişe rağmen, onu alan kişiJohndeğildir. İki aylık "eğitimden" sonra, bırakın yüzüğü takmayı, hâlâ onunla uzaya bile gitmemişti. Patronunun kahvesini getirmekten biraz daha fazlasına tekabül eden ayak işleri yapmadığı zamanlarda bekliyor:Hal to'nin hayranlarıyla fotoğraf çektirmeyi bitirmesini, şakalaşmayı bırakıp bir kez daha seçilmesini bekliyor.

Halyüzüğü vermeden önce öleceğini söylüyor; veHBO'nin anti-dost-polis dramındaki gerilimi körükleyen de bu yetki duygusu, bu üstünlük duygusu, eski yöntemlere bağlılık - tam karşınızda parlak yeni fırsatlar dursa bile -. Dizi, hikayeyi sistematik olarak hafife alınan kahramanın gözünden anlatmaya olduğu kadar, huzursuz polis-prosedür ikilisine de yatırım yapıyor.

Johngenç bir Siyah adam,Halise yaşlı beyaz bir adam.Johnher şeyi doğru yapıyor;Halher şeyi doğru yaptığını düşünüyor.Johntüm hayatınıGreen Lantern Corps'ye layık görülmek için çalışarak geçirdi;Hal, bir evet-hayır sorusunu doğru yanıtladıktan sonra yüzüğü kucağında buldu. Elbette gri alanlar var ama "Lanterns" bu iki adamın kim olduğu ve kültürel ve nesilsel olarak neyi temsil ettikleri konusunda net.

Bu arada durum gerçek bir baş ağrısıdır. Gecikmiş antrenman dönüşlerinin ardından ikili, bir lise futbol maçında dört yabancının öldürüldüğü küçük bir Nebraska kasabası olan Rushville'e çağrılır.Hal'nin içgüdüsü uzaylıların işin içinde olduğunu söylüyor, bu da yerel şerifin iyi niyetli uyarılarının onları toparlamaya yetmeyeceği anlamına geliyor.

Sheriff Kerry Kane(harika birKelly Macdonald) keskindir ve emir almaz. Şüphelileri,Hal'nin kendi flörtlerini etkisiz hale getirebileceğinden daha hızlı tespit ediyor; dürüstlük ve güven yayıyor... ama kasabanın en zengin adamıWilliam Macon'nin (Garret Dillahunt) oğluBilly(Jason Ritter) ile evli olduğu veMacon'nin tepeden tırnağa özel bir milis silahlandırdığı ve bir şeye karşı savaşa hazırlandığı ortaya çıktı.

Macon, kaynaklarının "gizemli bir hayırseverden" geldiğini ve gizlilik anlaşmasının onu konuşmaktan alıkoyduğunu söylüyor. Karısı Zoe (Poorna Jagannathan) de hiç yardımcı olmuyor ve kasabanın geri kalanı da fiili liderlerinin aynısını yapıyor:Hal and'nin çırağının ortalıkta olmasını istemiyorlar.

Her şey biraz şüpheli geliyor ve ilk bölümlerde sorular hızla birikiyor. Kimin kim olduğunu, neyin ne zaman olduğunu ve yeşil yüzüğü taşıyan kişinin nasıl itirazda bulunabileceğini takip etmek, DC biliminde doktorası olmayan herkes için yorucu olabilir. Tez açıklamalarında karakterlerin konuştuğu hantal anlar oluyor ve büyük resim zaman zaman bireysel dinamikler arasında kaybolabiliyor.

Ancak dizi sorumlusuChris Mundy,Tom King and Damon Lindelofile birlikte önemli olanı unutmanıza asla izin vermez; temiz kurgu, duygusal mantık ve karizmatik oyuncular izleyiciyi hikayenin özüne taşıyor.

At thebu karizma listesinin başındaChandlervar; onun iyi yaşlı çocuk cazibesi, seni kazanmak için kurnazca bir silah haline getirildi.Hal, onun iyi adamlardan biri olduğuna inandığınız sürece, aşağılamaları "sert aşk" olarak değerlendirilebilecek huysuz, eski bir adamdır. "Lanterns"nin bu varsayımı hem baltalama hem de benimseme biçimi, dizinin en iyi hilelerinden biri ve Emmy kazananının kariyerindeki en iyi performanslardan biri.

Bu aradaPierre,Hal'nin sözleriyle "iyi hissettiren hiçbir şeye inanmayan" bir vegan olanJohn'ye bolca zeka, tutku ve gizem getiriyor. Aslında "Lanterns" onun başlangıç ​​hikayesidir vePierre'nin havalı çekiciliği, geçmişiyle ilgili damlatılmış bilgilerle mükemmel bir şekilde uyum sağlar.

Lindelof'un en iyi eseri gibi fikirlerle dolup taşmasa da, "Lanterns" yaratıcılarının güçlü yönlerinin heyecan verici bir sentezidir. "Watchmen" gibi bu da Amerika'nın kalbinde sistemik ırkçılığı merkeze alan bir prosedür seti; "True Detective" gibi uyumsuz ortakları tek bir vaka için bir araya getiriyor.

Best ofall: "Lanterns" incelediği ahlakı yaşar.Green Lanternolabilmek için değerli görülmeniz ve tehlike anında tek bir soruyu yanıtlamanız gerekir: Korkuyor musunuz? "Lanterns" gölgesinde kaldığı talihsizRyan Reynoldsfilminden bile daha riskli bir girişim değil ama taşıdığımız korkuların gerçekte ne anlama geldiğine dair söyleyecek çok şeyi var.

Görünüşe göre "Lanterns" mükemmel ekibi bir araya getirmiş. Şu ışıkları açın.

**Not:**"Lanterns" 16 Ağustos Pazar günü saat 21.00'de gösterime girecek.HBO'de; sekiz bölümlük ilk sezon finali 4 Ekim'de yayınlanacak.`,
  },
  {

    slug: "camp-miasma-inceleme-cannes",
    origTitle: "Teenage Sex and Death at Camp Miasma",
    title: "“Teenage Sex and Death at Camp Miasma” İncelemesi: Jane Schoenbrun’dan Cannes’da Kanlı Bir Geçit",
    excerpt: "TheWrap’e göre Jane Schoenbrun’un yeni filmi, slasher türünün transfobisinden Hollywood’un ikiyüzlü “woke” gösterişine kadar pek çok konuyu deşiyor; Gillian Anderson ile Hannah Einbinder’in birlikteliği ise büyüleyici bir elektrik yaratıyor.",
    rating: "4.5/5",
    image: miasma1,
    body: `Jane Schoenbrun's"Teenage Sex and Death at Camp Miasma" henüz kelimeleri icat edilmemiş görüntüler ve çekimler içerir. Bazı filmler izlediğiniz medya olarak değil, sizi ele geçiren bir vizyon olarak gelir;Schoenbrunve ekibinin titizlikle inşa ettiği dünya buna çok yaklaşıyor. Katil katillerin ölü kampçıları patlayana kadar bir top direğine çarptığı, cesetlerin bir video mağazasının duvarlarını fiberglas yalıtım gibi sıraladığı,Gillian Anderson'nin baştan çıkarıcı bir şekilde bir kucak dolusu KFC taşıyan bir sahnenin kükreyen bir şömineye dönüştüğü bir dünya.

![Camp Miasma](${miasma2})

Slasher filmlerindeki transfobiden Hollywood'un yalnızca uygun olduğunda "uyandıran" anlatıları savunma eğilimine kadar her şeyi saptıranSchoenbrun, portalların ustası olduğunu kanıtlıyor. Dijital dünyaları - "I Saw the TV Glow" TV programlarını veya "We're All Going to the World's Fair" internetin karanlık köşelerini - kendi "özel alternatif evrenleri" olarak çerçevelemede her zaman başarılı oldular. Bu sanal dünyalar, dış dünyanın asla vermediği bir güvenlik ve görülme şansı sunuyor.

Bu filmdeSchoenbrunonların bu alanlarla ilişkilerini daha da derinlemesine sorguluyor: onlara ihtiyaç duymanın trajedisi ile gerçekliklerinin güzelliği arasındaki gerilim. Nihayet kendi bedenlerimizde rahat ettiğimizde bu alanlara ne olur? Diriliş her zaman önce bir çeşit ölümü mü gerektirir? Hayatımızda dönüşüm için çok geç kaldığımız bir an var mı?

![Camp Miasma](${miasma3})

Açılış sekansı bu dünyayı anında "yaşanmış" hissettiriyor. Yükselen yönetmenKris(Hannah Einbinder), uzun süredir devam eden slasher serisi "Camp Miasma"nin yeniden yapımını yönetmesi için işe alındı.As Kriskurnazca şunu belirtiyor: Bu işe alım bir taşla iki kuşu vuruyor: Hollywood eski fikri mülkiyetlere doyamıyor ve bir LGBTQ+ yönetmeni işe alarak stüdyo, transfobikliğiyle meşhur bir diziyi yeniden canlandırdığı için eleştirileri saptırabilir.

As Okay Kaya's"Nightswimming" jeneriği üzerinden oynuyor, "Camp Miasma"nin hikayesini ürünler ve gazete kupürleri aracılığıyla izliyoruz: aşırı doygunluğa ulaşmış çok filmli bir seriye dönüşen sürpriz bir kült hit. Masa oyunları ve diziyle alay eden bir dergi karikatürü, hikayelerin Hollywood makinesi tarafından ne kadar çabuk sıradanlığa indirgenebileceğini gösteriyor.

![Camp Miasma](${miasma4})

Kris, orijinal "Camp Miasma" filminin hayatta kalan tek kişisini yeniden yapımda canlandıranBilly Presley'yi (Gillian Anderson) kadroya almak istiyor. Emekli oyuncu, filmlerin çekildiği terk edilmiş kampa evini kurdu. Konuşmaları tuhaf bir şekilde başlıyor ama aralarında salt merakın ötesinde bir bağ olduğu açık: Sadece arzu değil, yüzeyin altında kaynayan bir açlık da var.

Gerçek şölen şu: tek filmde birden fazla film var. Önceki "Camp Miasma" filmlerinden,Counting Crows'"A Long December" için koreografisi yapılan komik, uzun bir katliam sahnesi de dahil olmak üzere başlı başına sanat eseri niteliğindeki uzun bölümleri izliyoruz. Bu canlandırmalar,Schoenbrun'nin türün mihenk taşlarına duyduğu saygının kanıtıdır.

![Camp Miasma](${miasma5})

Yapım tasarımcılarıMatt Hyland and Brandon Tonner-Connolly, sanat yönetmeniCourtney Stockstadve set dekoratörüHana Cookarasındaki neşeli işbirliğini ister kana bulanmış "Camp Miasma" dünyasında, isterNarnia. Though thefilminin Lynchian versiyonunu çağrıştıranBilly'nin kamp evinde hissedebilirsiniz; bu,Anderson and Einbinderarasında iki yönlü bir çalışmadır, kamp sahneleri verirSchoenbrun'nin yeni ve geri dönen işbirlikçileri kalıcı bir izlenim bırakacak - özellikleEva Victor,DJ Ella Giasticolarak.

Kesinlikle bunaltıcı gelebilecek sekanslar ve motifler var - ancak bu filmin bir kusuru değil, bir özelliği. Onu izledikten sonra tutarlı düşünceler oluşturamamak, onun tuhaf gücünün ve kalabilme yeteneğinin bir işaretidir. Yeni bir müjdeyi ilk karşılaşmada kabul etmek zordur;Schoenbrun'nin çalışmasının hediyesi her şeyden önce cömert bir davet ruhu taşımasıdır. Onların kendine güvenen, dengesiz dalga boylarına yerleşin ve gözlerinizdeki perdenin düşüşünü izleyin. Bol miktarda jelibon getirin - sonuçtaKris'nin dediği gibi altın bir çağda yaşıyoruz.`,
  },
  {

    slug: "late-fame-inceleme-willem-dafoe",
    origTitle: "Late Fame",
    title: "“Late Fame” İncelemesi: Willem Dafoe, Ömrünün Sonbaharında Bir Şair",
    excerpt: "Wall Street Journal eleştirmeni Kyle Smith’e göre Kent Jones’un Arthur Schnitzler uyarlaması, bir zamanlar ün kazanmış, şimdiyse postanede çalışan bir yazara hayranlıkla yaklaşan entelektüellerin hikâyesini küçük, zarif bir şiir gibi anlatıyor.",
    rating: "4/5",
    image: "/__l5e/assets-v1/cd5de13f-cb66-4817-899c-cec802694a3e/e1f3780a9297.avif",
    body: `Ed Saxbergeredebiyat adamıdır: postanede çalışmaktadır. Kendisi aynı zamanda bir edebiyat dehasıdır. Yoksa bu bir dahi "idi mi"?Back in1979'da, çok küçük ama çok sadık çevrelerde hâlâ hayranlık duyulan bir şiir kitabı yayınladı. "Late Fame"de artık yaşlı,Willem Dafoetarafından sakin bir denge duygusuyla canlandırılıyor.

Hayatı,West Villagedairesinin önünde gizlenirken yakaladığı tuhaf bir genç adamın ziyaretiyle alt üst olur.Greta Lee and Edmund Donovan'nin de başrol oynadığı film, bir zamanlar unutulmuş yazarı yeniden keşfeden ve ona aşık olan entelektüel bir çevreyi konu alıyor.

1895'te yazılan ancak bu yüzyıla kadar yayınlanmayanArthur Schnitzler'skısa romanından uyarlanan "Late Fame", sonuçlarıyla aynı anda birçok yöne ulaşan bir karakter çalışması ve aynı zamanda bir benzetmedir.Kent Jones'filmi bir bakıma harika bir küçük şiire benziyor.

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
    body: `On yıllardır bağımsız sinema efsanesi olanGregg Araki, cinsel ahlak kurallarına meydan okurcasına meydan okuma üzerine bir kariyer inşa etti. Son filmi 'I Want Your Sex'de bu sefer sözde iffetliGen Z'yi hedef alıyor ve kariyerinin en iyi oyuncu kadrosundan biri sayesinde sonuç oldukça komik.

Çocuksu, dağınıkElliot(mükemmel birCooper Hoffman) okulu yeni bitirmiş ve seksin neredeyse hiç gerçekleşmediği, gerçekleştiğinde ise tam bir esneme olduğu bir ilişki içinde sıkışıp kalmıştır. Ancak bir "yenilikçi depoda" işe girdiğinde yatak odası hayatı ters bir hal alır:Elliotorada ikonik sanat provokatörüErika Tracy'nin (muhteşem birOlivia Wilde) büyüsüne kapılır.

Wilde's Erika, film boyunca hem itici hem de karşı konulmaz olmayı başaran bir güç;Araki'in mizahı,Elliot'nin kendi arzularını anlamaya çalıştığı anlarda en keskin şekilde ortaya çıkıyor. Charli xcx,Mason Gooding,Chase Sui WondersveMargaret Cho and Johnny Knoxville'den oluşan kadro, filmin tuhaf enerjisini dengeli tutuyor.

90 dakikalık film erotik komedi ile gerilim arasında gidip geliyor, zaman zaman kendi provokasyonlarına biraz fazla güveniyor. Yine de,Araki'nin açıklık yerine kırılganlığı öne çıkardığı son, filmi basit bir şok komedinin ötesine taşıyor: birbirleri tarafından gerçekten görülmek isteyen insanlar hakkında şaşırtıcı derecede tatlı bir hikaye.`,
  },



  {
    slug: "the-shards-inceleme-ryan-murphy-bret-easton-ellis",
    origTitle: "The Shards",
    title: "“The Shards” İncelemesi: Ryan Murphy’nin Seri Katil Gerilimi Sığ Sulardan Çıkamıyor",
    excerpt: "TIME eleştirmeni Judy Berman’a göre Murphy ile Bret Easton Ellis’in FX dizisi, göz alıcı prodüksiyonuna ve sayısız göndermesine rağmen aktarmaya çalıştığı derinliğe bir türlü ulaşamıyor.",
    rating: "2.5/5",
    imdbRating: "5.8",
    image: "/__l5e/assets-v1/be94dc0b-a977-4a10-a99a-b33a3cc63a80/25873eeb06ef.webp",
    body: `Ryan Murphy and Bret Easton Ellisarasında verimli bir işbirliği hem kaçınılmaz hem de imkansız görünüyor.Murphyher anlamda bir maksimalisttir: Her diziyi seri halinde yayınlayan, karakterlerine her öyküde sessiz kalması gereken kısımları yüksek sesle söyleten bir süper yapımcı ve televizyonun kapsayıcı, kimlik politikası odaklı programlamanın en etkili savunucularından biridir.Ellis, nesli tanımlayan ilk romanı 'Less Than Zero'nin minimalist tarzıyla ve yakın zamanda eğlence endüstrisinin "sahte uyandırılmış kurumsal kültürüne" karşı çıkan bir kültür savaşçısı olarak yaşadığı dönemle tanınıyor. Ancak ikisi de kışkırtmaktan korkmayan isimler; ikisi de psikopat katillerin psikolojisine ve popüler kültürle gerçek hayat arasındaki geçirgenliğe takıntılı.Boomer and Gen X'nin eşiğinde doğmuş olan ikisi de 80'lerde eşcinsel olarak büyümenin nasıl bir şey olduğunu hatırlıyor.

Ellis'nin 2023 tarihli romanından uyarlanan 'The Shards'de deneyimlerin bu sinerjisi, duyarlılıklarının çatışmasını silmeden hakim oluyor.On theyüzeyi, 1981'deEllis'nin lisesindeki öğrencileri avlayan bir seri katilin otokurgusal ama tanıdık hikayesi;Murphy'nin alamet-i farikası şık prodüksiyon tasarımı, tür pastişi ve muhteşem set parçaları ön plana çıkıyor.  5 Ağustos'taFX and Hulu'de iki bölümle prömiyerini yapanYet theserisinin daha büyük hedefleri olduğu açık: dönemin kültürel mihenk taşlarına gönderme yapıyor ve günümüzBret'nin seslendirmesi aracılığıyla ergenlikten yetişkinliğe geçiş hakkında derin bir şeyler söylemeye çalışıyor. İster uyumsuz bir yaratıcı ekibi suçlayın, ister görsel ortamın fikirlerin yerine görselleri tercih etme eğilimini suçlayın, sonuçta yüzeysellik kazanır.

Son sınıf başlıyor ve grubun ebeveynleri çoktan sahneden ayrılmış durumda. (Bret'ler görünüşe göre yurtdışında tatil yapıyorlar.) Bu, hiçbir sokağa çıkma yasağı veya kısıtlama olmadan şehirde dolaşan, beyaz masa örtülü restoranlarda performanstan bıkmış, art arda sigara içen gençlere yakışıyor.Only Debbie'skorkunç ailesi kareye giriyor. BabasıTerry(Wes Bentley), reşit olmayan erkek çocuklarına bakan klişe, yırtıcı bir yapımcıdır; annesiLiz(Evan Rachel Wood) uyuşturucu, alkol ve öfke patlamalarıyla kendi kendini tedavi ediyor; bu,Debbie'nin kendi geleceğinin bir önizlemesi. Hane halkının dördüncü üyesi, kenarlarda gizlenenTerry'nin çift cinsiyetli estetik asistanıSteven(Jordan Roth)'dir.

Bir kızın parçalanmış bedeni tenis ağına bağlı halde bulunduğunda ve sınıf arkadaşları ortadan kaybolmaya başladığında, bunlar gençlerin birlikte çalışmak zorunda olduğu yetişkinlerdir.Bret, katilin okuldaki yeni yakışıklıRobert Mallory(Homer Gere) olduğuna inanıyor - ancak mantığı zayıf:Robert,Bret'nin onu ilk fark ettiği 'The Shining'' gösterimine katıldığını basitçe reddediyor. Bazı nedenlerden dolayıBretarkadaşlarının cinayetlerle ilgilenmesini sağlayamıyor; balo ve dans yarışması programlarıyla çok meşguller.

'The Shards'referanslarla dolu. Olay örgüsünün ötesini okumak için şunu bilmeniz gerekir: 'The Shining', çılgınca delirmiş bir yazarın hikayesidir; 'Çin Mahallesi', savaşamayacak kadar köklü sistemik kötülüğün eşanlamlısıdır veMichael Cimino's'Heaven's Gate'fiyaskosu,New Hollywood'syönetmen odaklı dönemin sonunu simgelemektedir. Oyuncu kadrosu daha fazla anlam katmanını bir araya getiriyor:Kaia Gerber, annesinin ürkütücü bir kopyası, nihaiGen XgüzelliğiCindy Crawford;Homer Gere, babası Richard ile aynı kare çeneyi paylaşıyor veRichard Gere, 90'ların başındaCrawford in theile evliydi.

Bu anlamın çoğu, 40 yaşın altındaki çoğu izleyicinin kaçıracağı referanslara dayandığından,Murphy and Ellisaslında iki şovu bir arada yaptı: 'Riverdale'/'Pretty Little Liars' damarında hokey bir genç cinayeti dizisi ve daha yaşlı izleyicileri hedefleyen daha katmanlı ve tanımlanması daha zor bir şey.Only theikincisi yeni hissettiriyor, ancak daha düşünceli unsurları sürekli olarak bir kenara atılıyor. Anlatıcının "Mattbenim hakkımda hiçbir zaman onun hakkında hissettiğim şeyleri hissetmedi, bu hayatımın geri kalanında yinelenen bir tema haline gelecekti" gibi dizeler merak uyandırıyor: yaşlıBret'nin hüznü, gerçek olgunlukla gelen, yüzeye çıkan ama hiçbir zaman tamamen delip geçemeyen kişisel bilgiyi kazanmadan çocukluk masumiyetini yetişkin yazarlık kariyeriyle takas eden erken gelişmiş gençBret'ye olan öfkesi.

Dizi son bölümleriyle ortaya çıkıyor. Birinde, gençlerin takıldığıHamburger Hamlet'nin isminden yararlanıyor ve karakterler ile Shakespeare'in trajik figürleri arasında öyle abartılı paralellikler kuruyor ki, öz farkındalığın bile onu kurtaramayacağı bir şey. Daha büyük hayal kırıklığı, anlatısal açıdan karışık bomba finali: patlamak yerine sönüyor. Bizi oraya taşıyacak olan psikolojik tırmanış hiçbir zaman tam olarak gerçekleşmez. Sınırlı iç gözlemin sonuçlarını anlatan bir dizi, bu sonuçların bizzat yaşanmasıyla sonuçlanır.`,
  },
  {
    slug: "los-vampires-inceleme",
    origTitle: "Los Vampires",
    title: "“Los Vampires” İncelemesi: İki Dracula’nın Çarpıştığı, Eski Hollywood’a Sevimli Ama Dengesiz Bir Yolculuk",
    excerpt: "Craig Mitchell’ın yazıp yönettiği film, Universal’ın 1931 yapımı “Dracula”sının aynı setlerde hem İngilizce hem İspanyolca konuşan oyuncularla çekildiği efsanevi yapım sürecine karanlık bir kurmaca ekliyor.",
    rating: "3/5",
    image: "/__l5e/assets-v1/289cd565-85ad-48d8-86b8-b68b2137c342/ad0bebdd4dbd.webp",
    body: "The arrival of sound cinema was, in many ways, a massive upheaval for the film industry: theater owners had to install expensive new equipment, while studios could no longer export their products to lucrative foreign markets as easily as before. One of the era's solutions to that second problem was shooting alternate versions of the same film in different languages.\n\nUniversal took this idea further than most studios at the end of 1930, shooting 'Dracula' twice on the same sets with completely different casts and directors. One, of course, was the legendary film starring Bela Lugosi and directed by Tod Browning. The other bore the signature of George Melford, who had directed Rudolph Valentino in 'The Sheik'; the caped bloodsucker was played by Spanish immigrant actor Carlos Villarias. This second version was forgotten for decades, but after restorations and revival screenings in the 1990s, some viewers declared it the better of the two.\n\nWriter-director Craig Mitchell's 'Los Vampires' imagines the sinister events unfolding on that very shared set: the rivalry between two Draculas, with one crew working days and the other nights on the same sets, spiraling into a tension woven from jealousy, class divides and eerie coincidences.\n\nThe film's greatest strength is its atmosphere: period-accurate design, cinematography that plays with shadow, and a sly irony underscoring the secondary status the studio system assigned to the Spanish-speaking crew. However, the narrative sometimes loses its balance as it swings between fictional tension and a lesson in film history; some side characters remain underdeveloped.\n\nStill, for those who share a cinephile's curiosity about 'Dracula's lost twin, 'Los Vampires' offers an engaging watch despite its flaws.",
  },

  {
    slug: "spider-man-brand-new-day-inceleme",
    origTitle: "Spider-Man: Brand New Day",
    title: "“Spider-Man: Brand New Day”, Bir Marvel Filmi İçin Daha Fazla Çaba Göstermenin Mümkün Olduğunu Kanıtlıyor",
    excerpt: "Destin Daniel Cretton’ın yönettiği filmde Tom Holland’ın Peter Parker’ı, “No Way Home” sonrasında herkesin hafızasından silinmiş, yapayalnız biri. TIME eleştirmeni Stephanie Zacharek’e göre aşırı yüklü olay örgüsünün altında keyifli bir yaz filmi saklı.",
    rating: "3.5/5",
    imdbRating: "8.1",
    image: "/__l5e/assets-v1/751dd6e8-0c8c-4423-affb-bae75d4e2604/c7239471c22a.webp",
    body: `At the2021'in sonu 'Spider-Man: No Way Home'Tom Holland's Peter Parkerparamparça bir genç adamdı. En yakın arkadaşıNed andkız arkadaşı MJ, mistik bir büyü sayesinde onu tamamen unutmuştu;Aunt May'si Yeşil Goblin'in saldırısında ölmüştü. 'Brand New Day'bu yıkımın hemen ardından başlıyor: "Sometimes Spider-Man, zor olanı yapabilmek içinPeter Parker's'nin kalbini kırmak zorunda."

Destin Daniel Cretton andtarafından yönetilen veChris McKenna and Erik Sommerstarafından yazılan film, klişe denebilecek temalar, olay örgüsü manevraları ve çarpışan duygularla o kadar dolu ki, bazen gerçek hikayeye ve kahramanımızın acısına odaklanmakta zorlanıyor. Yine de tüm bu aşırı kalabalık makinelerin altında gerçekten keyifli bir yaz eğlencesi yatıyor.

Holland'nin samimiyeti filmin en büyük varlığı olmaya devam ediyor:Peter'nin yalnızlığı asla acıya dönüşmüyor;New York'de suçla savaşmaya devam ediyor ama bunu yapmaktan mutsuz.According to TIMEeleştirmeniStephanie Zacharek'ye göre film, Marvel'ın son aşamadaki yorgunluğuna rağmen en azından "daha iyisini yapmaya çalışma" konusundaki istekliliğini gösteriyor - ve bu tek başına bir başarı olarak kabul ediliyor.`,
  },
  {
    slug: "amadeus-en-yanlis-anlasilan-oscar-filmi",
    origTitle: "Amadeus",
    title: "“Amadeus”, Tüm Zamanların En Yanlış Anlaşılan En İyi Film Oscar’ı Sahibi Olabilir mi?",
    excerpt: "Miloš Forman’ın En İyi Film Oscar’lı başyapıtı 40 yaşında. BBC Culture’a göre tarihsel açıdan hatalı olmakla suçlansa da filmin asıl konusu hiçbir zaman Mozart’ın hayatı değildi; Soğuk Savaş dönemi SSCB’sine örtük bir eleştiriydi.",
    rating: "5/5",
    image: "/__l5e/assets-v1/e474fc4d-84ce-427c-a497-bb266656cd9a/bdcfc5ef6736.webp",
    body: `According to BBC CultureyazarıTom Joudrey,Miloš Forman's1984 yapımı 'Amadeus' filmi çıktığı günden beri yanlış okunuyor.Best Picture,Best DirectorveBest Actor for F. Murray Abrahamdahil olmak üzere sekiz Oscar kazanan film,Mozart'nin hayatının çarpık bir biyografisi olduğu için büyük ölçüde eleştirildi. AncakJoudrey'e göre filmin asıl konusu hiçbir zamanMozart attamamı olmadı.

Peter Shaffer'soyununa dayanan senaryo,Salieri'nin kıskançlığını merkeze alırken aslında çok daha büyük bir alegori inşa ediyor: devletin sanat üzerindeki kontrolü, dehanın bürokrasi tarafından boğulması ve otoritenin sanatçıyı evcilleştirme çabaları. Filmin Prag'da, hâlâIron Curtain at thezamanının gerisinde çekilmiş olması tesadüf değil.

Forman'nin kendisi,Czechoslovakia and'den kaçan bir sürgündü ve 1968Prague Spring'nin bastırıldığını ilk elden biliyordu.Joudrey, filminSalieri'yi "yeteneği ödüllendirmek yerine evcilleştirmeye çalışan vasat, kurallara uyan devlet adamı" portresininUSSR'nin kültür politikasına doğrudan bir gönderme olduğunu savunuyor.Mozart'nin anarşik kahkahası ve iktidara boyun eğmeyi reddeden dehası, sanatçının imkânsız özgürlüğünü temsil ediyor.

40 yıl sonra geriye baktığımızda 'Amadeus' sadece büyük bir kostüm draması değil; sansür, otorite ve sanatın hayatta kalma stratejileri etrafında inşa edilmiş, hâlâ geçerliliğini koruyan bir siyasi manifesto.`,
  },
  {
    slug: "a-useful-ghost-thai-black-comedy",
    origTitle: "A Useful Ghost",
    title: "“A Useful Ghost” — Hayaletli Bir Elektrikli Süpürge Üzerinden Tayland Siyasetini Hedef Alan Bir Kara Komedi",
    excerpt: "Ratchapoom Boonbunchachoke’un şık ve kendine has filmi, elektrikli süpürgeye musallat olmuş huzursuz bir ruhu Tayland’ın siyasi geçmişiyle çarpıştıran heyecan verici bir kara komedi sunuyor; Guardian’ın eleştirisine göre yılın en özgün işlerinden biri.",
    rating: "4/5",
    image: aUsefulGhostAsset.url,
    body: `According to the Guardian'sincelemesi,Ratchapoom Boonbunchachoke's'nin ilk uzun metrajlı filmi 'A Useful Ghost', son yılların en orijinal ve cesur türler arası deneylerinden biridir. Film bir hayalet öyküsünü, politik alegoriyi, tuhaf romantik melodramı ve endüstriyel kara komediyi tek bir çatı altında harmanlıyor ve şaşırtıcı bir şekilde hepsi bir arada duruyor.

At theHikayenin merkezinde, ölen karısının ruhunun evdeki elektrikli süpürgeye ve bu "perili vakumu" işçi olarak çalıştırmaya istekli bir fabrikaya yerleştiğine inanan genç bir adam var. Tayland'ın hava kirliliği krizinden askeri yönetim tarihine, kapitalist sömürüden eşcinsel hafıza politikalarına kadar çeşitli konular absürt mizahla iç içe geçiyor.

**Ne doğru oluyor?**Boonbunchachoke'nin görsel dili disiplinli ve şıktır: fabrika iç mekanlarının soğuk floresan ışığı, ev sahnelerinin sıcak tungsten tonları ve ses tasarımında elektrikli süpürgenin motor uğultusunun kullanılması filme farklı bir doku kazandırır.In the Guardian'ssözleriyle sonuç "rahatsız edici, erotik ve derinden etkileyici".

**Kararı.**'A Useful Ghost'hem festival izleyicilerinin hem de türün sinema hayranlarının kalbini kazanma kapasitesine sahip ender bir film.Boonbunchachoke, ilk çıkışıylaApichatpong Weerasethakul Thaisonrası sinemanın en dikkat çekici sesi olarak sahneye çıkıyor.`,
  },
  {
    slug: "possession-inceleme-plantasyon-korku-drami-sky-atlantic",
    origTitle: "Possession",
    title: "“Possession” İncelemesi: İzleyiciyi İkiye Bölen Doğaüstü Sürpriziyle Kâbus Gibi Bir Plantasyon Draması",
    excerpt: "Gugu Mbatha-Raw, bir miras gizemini çözmek üzere Jamaika’ya gönderilen bir avukatı canlandırıyor. Ardından gelenler korkularla, geçmişin adaletsizlikleriyle ve ya seveceğiniz ya da nefret edeceğiniz doğaüstü bir unsurla dolu.",
    rating: "3/5",
    imdbRating: "6.2",
    image: possessionAsset.url,
    body: `Jamaika'daki bir şeker plantasyonuna inşa edilmiş 50 milyon sterlinlik bir servete sahip olan müşteriniz ölürse ve vasiyeti, tek çocuğunu mirastan mahrum bırakıp, adını daha önce kimsenin duymadığıCudjoe Eastadlı birine devretseydi ne yapardınız? Firmanızın muhtemelen tek karma ırklı avukatıClaudia'yi (Gugu Mbatha-Raw),Kingston to'nin bu adamın izini sürmesi ve mümkün olan en kısa sürede itibarını sarsması için gönderirsiniz.Claudia, "Daha çok bir ortak için uygun bir işe benziyor" diyor ve bu süreçte kendi terfisini garanti altına almak için annesinin memleketine doğru yola çıkıyor.

Plantasyon evinin son zamanlarda gördüğü kabuslarda görünen evin aynısı olduğu ortaya çıkar: yangınlar, korkmuş figürler, tuhaf semboller. Ama o, hurafelerin değil, hukukun kadınıdır;Afro-Gothicuyarılarını bir kenara bırakır ve vasiyeti geçersiz kılabilecek herhangi bir şeyi aramaya başlar. Çok geçmeden, mirastan mahrum kalan oğluOliver(Jonny Lee Miller, kibar ve huzursuz modda), hem araştırma yapmak hem de biraz cinsel gerilim oluşturmak için ona katılır.

Sonra ikili zaman çizelgesine sahip bir gizem gelir: Biri günümüzde, diğeri 300 yıl önce, mülkün köleleştirilmiş insanlar tarafından işletildiği dönemde,Oliver'nin ataları giderek daha acımasız hale geldi ve Tacky's War olarak bilinen ayaklanmalar zinciri gerçekleşti. Doğaüstü bir ton, iki zaman çizgisini giderek daha fazla birbirine karıştırıyor: Rüya dünyasında ortaya çıkan görüntüler ve nesneler, sömürgeciliğin soyut dehşetine somut bir biçim veren belgelerle birlikte evde hayata geçiyor.

Dizinin en büyük gücü atmosferi veMbatha-Raw'sölçülü, gerilim taşıma performansıdır. En tartışmalı unsuru paranormal yönüdür: Bazıları için geçmişin bastırılmış anılarını dile getiren güçlü bir metafor; diğerleri için gerçek tarihsel korkunun tür heyecanına dönüştürülmesi. Sonuç, kusurlu olmasına rağmen unutulması zor bir seridir.`,
  },

  {
    slug: "spider-man-brand-new-day-sf-chronicle-inceleme",
    origTitle: "Spider-Man: Brand New Day",
    title: "“Spider-Man: Brand New Day”, Tom Holland’ın Şimdiye Kadarki En İyi Spider-Man Filmi",
    excerpt: "San Francisco Chronicle eleştirmeni Mick LaSalle’e göre Destin Daniel Cretton’ın filmi, Holland’ın üçlemesindeki tüm hikâye ipliklerini birleştiriyor ve seriyi hem daha duygusal hem de daha eğlenceli bir noktaya taşıyor.",
    rating: "4/5",
    imdbRating: "8.1",
    image: "/__l5e/assets-v1/46f9cd50-4da3-4eb7-b447-b94a66df09bd/spiderman-brand-new-day-hq.jpg",
    body: `San Francisco Chronicle'dekiAccording to Mick LaSalle'sincelemesi, 'Spider-Man: Brand New Day',Tom Holland's Spider-Manfilmlerinin en iyisidir. Bunun nedeni gösterişli bir final savaşı ya da sürpriz kamera oyuncuları değil, filminPeter Parker'ye bir kez daha sıradan, kırılgan ve yalnız bir genç adam gibi davranmaya cesaret etmesidir.

'No Way Home'nin sonunda herkesin hafızasından silinenPeterartık bir takıma ya da aileye yaslanamaz. Cretton bu dibe vuran anı bir kayıp hikayesi gibi kurguluyor: Asıl soru, kahramanın gücü değil, kimin için savaştığı oluyor.As LaSalle, serinin ilk kez süper kahraman mitolojisinden ziyade bir yetişkinliğe geçiş hikayesine benzediğine dikkat çekiyor.

Holland'nin performansı bu tonu taşıyacak kadar olgun. Aksiyon sahneleri gereksizCGIkarmaşasından kaçınıyor, mizah karakterden organik olarak doğuyor ve filminNew York'si yeniden somut, kalabalık ve tanıdık geliyor.

Sonuç, Marvel'ın son aşamadaki formül yorgunluğuna karşı sağlam bir panzehir: hem çizgi roman okuyucularını hem de süper kahraman filmlerinden tükenmiş izleyicileri tatmin edebilen şaşırtıcı derecede duygusal bir yaz filmi.`,
  },
  {
    slug: "animal-farm-serkis-orwell-adaptation",
    origTitle: "Animal Farm",
    title: "“Animal Farm” — Andy Serkis’in Orwell Uyarlaması Bir Klasiği Şekere Buluyor",
    excerpt: "Seth Rogen, Laverne Cox ve Glenn Close’un seslendirdiği yeni animasyon, Orwell’ın Stalinizm alegorisini mutlu sonla biten bir gösteriye çevirerek yazara ihanet ediyor; Guardian’a göre yılın en cesaretsiz uyarlaması.",
    rating: "2/5",
    image: animalFarmAsset.url,
    body: `Nicholas Stollertarafından yönetilen,Andy Serkis andtarafından yazılan yeni 'Animal Farm'animasyon filmiAccording to the Guardian'sincelemesi,George Orwell's1945 klasiğine karşı işlenen en tatsız sinema suçlarından biridir. Ucuz görünen dijital estetiğin yanı sıra, filmin asıl sorunuOrwell's StalinismalegorisiniDisneytarzı mutlu sonla etkisiz hale getirmesidir.

Seth Rogen,Laverne Cox,Glenn Close and Kieran Culkin'nin yer aldığı seslendirme kadrosu güçlü ancak karakterlerin ağzından aktarılan diyalog, orijinalin acımasız politik zekasından yoksun.Napoleon'nin yükselişi,Snowball'nin sürgünü ve "Tüm hayvanlar eşittir, ancak bazıları diğerlerinden daha eşittir" cümlesinin ardındaki soğuk ironi; bunların hepsi filmde yumuşatılıyor.

**Nerede tökezliyor?**Serkis'nin yönetmen olarak seçimleri şaşırtıcı derecede temkinli. 'Mowgli' and'Breathe' gibi eserlerden tanıdığımız duygusal derinlik burada hiçbir yerde bulunmuyor. Film, genç izleyicilere "uygun" olabilmek için hem şiddeti hem de politik ağırlığı sansürlüyor; ancak bu iki öğeyi çıkardığınızda geriye ne kitabın kalbi ne de bağımsız bir animasyon çalışması kalır.

**Kararı.**According to the Guardian, 'Animal Farm'film uyarlamalarının nasıl yapılmaması gerektiğine dair bir vaka çalışmasıdır.Orwell'nin metnini hiç okumamış bir çocuk için bile monotondur ve okumuş olanlar için ise düpedüz çileden çıkarıcıdır.`,
  },

  {
    slug: "the-day-she-returns-hong-sang-soo",
    origTitle: "The Day She Returns",
    title: "“The Day She Returns” — Hong Sang-soo’dan Ağır Ağır Açılan, İçkili Bir Tefekkür",
    excerpt: "Kore sinemasının üretken, düşük bütçeli sinema ustası Hong Sang-soo, oyunculuğa ara vermiş bir kadının dönüşünü anlattığı yeni siyah-beyaz filmiyle tanıdık ama gizemli biçimde bağımlılık yaratan bir işe daha imza atıyor.",
    rating: "4/5",
    image: theDayShereturnsAsset.url,
    body: `According to the Guardian'sincelemesi, üretken Koreli sinema ustasıHong Sang-soo'nin yeni siyah beyaz filmi 'The Day She Returns' sadık takipçilerini şaşırtmayacak - ve bu iyi bir şey. Uzun çekimler, sabit kamera açısı, restoran masaları üzerindeki konuşmalar ve ani, açıklanamaz yakınlaştırmalar olması gerektiği yerde.

Song Seon-miuzun bir aradan sonra sinemaya dönmeye çalışan bir oyuncuyu canlandırıyor. Eski iş arkadaşları, yeni yönetmen adayları ve unutulmaya yüz tutmuş bir aşk arasında kalan karakter,Hong'nin tipik "gündüz içki içme" sahnelerinde soju şişeleri içerken geçmişiyle yüzleşiyor.

**Ne doğru oluyor?**As the Guardian, "hiç kimse gündüz içki içmeyiHonggibi göstermiyor" ve bu tekrarlar filmde bir tür meditasyon ritmi yaratıyor.What thekarakterleri söyledikleri kadar söylenmemiş şeyleri de bırakır; uzun sessizlikler, tereddütler ve yarım kalan cümleler filmin duygusal omurgasını oluşturuyor.

**Kararı.**'The Day She Returns',Hong Sang-soo's'nin neredeyse otuz filmlik filmografisine yeni bir başyapıt eklemeyebilir - ancak konu hiçbir zaman bu olmadı.As the Guardian'nin ifadesiyle, "her zamanki gibi gizemli bir şekilde bağımlılık yaratan" bir başkaHongdeneyimi. Onun evrenine ilk kez girenler için de kötü bir başlangıç ​​noktası değil.`,
  },

  {
    slug: "project-hail-mary-boston-globe-inceleme",
    origTitle: "Project Hail Mary",
    title: "“Project Hail Mary” İncelemesi: Ryan Gosling ile Bir Uzaylının Şaşırtıcı Dostluğu",
    excerpt: "Boston Globe eleştirmeni Odie Henderson’a göre Lord ve Miller’ın filmi hem büyük bir uzay macerası hem de beklenmedik ölçüde duygusal bir karakter incelemesi: “HAL 9000 ile Dave’in en iyi arkadaş olduğunu düşünün.”",
    rating: "4/5",
    imdbRating: "7.9",
    image: "/__l5e/assets-v1/78a6dda8-0fdc-4c61-bace-3f103cff7d74/632433bdb55f.avif",
    body: `Imagine HAL9000 ve Dave, '2001:A Space Odyssey'de çok iyi arkadaşlar ve 'Project Hail Mary''nin ne tür bir film olduğuna dair iyi bir fikriniz olacak. Büyük ölçüde uzayda geçen veRyland Grace(Ryan Gosling) ile "Rocky" adını verdiği bir uzaylı arasındaki ikili ilişkiler etrafında inşa edilen film, birAndy Weirromanının en son uyarlamasıdır.Weir'nin 'The Martian' in2015'inde olduğu gibi, senaryo bir kez dahaDrew Goddardtarafından yazıldı; zekice hazırlanmış, iyi yapılandırılmış bir senaryo.Christopher Miller and Phil Lord, 2014 yapımı '22Jump Street'den bu yana ilk kez yönetmen koltuğuna oturuyor.

Weir'nin 2021 tarihli bilim kurgu romanı hayranlar tarafından çok seviliyor. Ancak kitabı okumuş olsam bile, bu muhteşem görüntülerinIMAX70mm ekrana yayıldığını veyaDaniel Pemberton's'nin çarpıcı skorunu hayal edebileceğimi sanmıyorum.Rocky'nin neye benzeyeceğini de tahmin edemezdim:CGI'nin her şeye hakim olduğu bir çağda, onun kısmen bir kuklayla hayata geçirileceğini asla tahmin edemezdim.

Film tamamen tatmin edici bir "sahil okuması" gibi akıyor; Kahramanımız geçmişte - ya da daha doğrusu ötesinde - başına ne geldiğini anlamaya çalışırken tempo kasıtlı olarak sakin tutuluyor.Earth. Strategicgeri dönüşleri, bir lise fen bilgisi öğretmeni olanGrace'nin insanlığı kurtarma görevi için nasıl uzaya gittiğini ortaya koyuyor.Gracebir gemide uyanır, baktığı yıldızın güneş sistemimizde olmadığını fark eder ve geminin bilgisayarından pilotun ve diğer yolcuların öldüğünü öğrenir.

Görev,Sun. A'yi yiyen bir tür uzaylı virüsüne çare bulmak için insanları derin uzaya tek yönlü bir yolculuğa göndermek.Venus to the Sun'den uzanan "Petrova çizgisi", "uzay zerreleri" onu kemiriyor. Aynı kader diğer galaksileri de bekliyor; ama bağışık görünen bir yıldız var veGrace'nin gemisi oraya doğru gidiyor.Rockyde kendi gezegenini kurtarmak için benzer bir görevde. İkilinin karşılaşması "sevimli bir buluşma"dan ziyade "meraklı bir buluşma"dır: İlk başta birbirlerini izlerler ve korku içinde geri çekilirler.Once Graceiletişim kurmanın bir yolunu bulur ve bir çeviri kütüphanesi oluşturur, film başarılı bir arkadaşlık komedisine dönüşür, 'The Odd Couple''nin bir varyasyonu,GraceileFelix and RockyolarakFelix and RockyolarakOscar. Goslinginsan olmayan bir başrol oyuncusunun karşısında sıra dışıdır: bizi bu ilişkinin sevinç ve üzüntü hissedecek kadar sağlam ve karmaşık olduğuna ikna eden kişi odur.

The Earthboundgeri dönüş sahneleri bize soğukkanlı hükümet ajanıEva Stratt'yi (kusursuz birSandra Hüller) ve bilim adamlarından oluşan ekibini sunuyor.Graceisteksiz bir katılımcıyla başlıyor;Stratt, eski işinden kovulmasına neden olan teorilere inanan tek kişiydi.Like theuzay sahneleri, bu bölümler sürece odaklanıyor: bir dizi deney ve soru, bazıları cevaplandı, bazıları cevaplanmadı. Film, izleyicinin zekasına ve dikkat aralığına güvenilen bir sinema dönemini hatırlatıyor.

BuLord and Miller'nin ağır bir film yaptığı anlamına gelmiyor. Yerçekimi problemlerinden gergin uzay yürüyüşlerine ve patlamalara kadar bir uzay filminden bekleyeceğiniz her şey burada; efektler birinci sınıftır ve büyük ekranda (özellikle 70 mm'de) harika görünür. Ancak tüm bu gösterinin ötesinde, 'Project Hail Mary', jenerikler ilerledikçe beklenmedik biçimde dokunaklı, acı-tatlı bir karakter çalışması: insan ve uzaylı arasında bir pas de deux.

Directors: Christopher Miller,Phil Lord. Screenplay: Drew Goddard(Andy Weir'nin romanından uyarlanmıştır).Cast: Ryan Gosling,Sandra Hüller,James Ortiz. 156 dakika. PG-13.`,
  },


  {
    slug: "they-fight-boxing-drama-holland",
    origTitle: "They Fight",
    title: "“They Fight” — André Holland’ın Boks Draması Duygusal Bir “Yumruk” Gibi",
    excerpt: "“Creed” ve “Million Dollar Baby” geleneğini sürdüren “They Fight”, unutulmaz bir André Holland performansıyla Washington DC’nin sert atmosferinde şefkat ve sıcaklık buluyor; Guardian’a göre yılın en dokunaklı spor filmlerinden biri.",
    rating: "4/5",
    image: theyFightAsset.url,
    body: `According to the Guardian'sincelemesi, 'They Fight', 'Creed' and'Million Dollar Baby''den türeyen bir boks dramasıdır — ve boksun neden insanlık durumu için ebedi bir alegori olarak kaldığını bir kez daha kanıtlıyor. Bu kez tuvale çarpma tehlikesiyle karşı karşıya olan adam,André Holland'nin canlandırdığıWalt'dir.

Bir zamanlarWashington DC'sboks sahnesinde yükselen bir yıldız olanWalt, kariyerini şehrin uyuşturucu ticaretine kaptırdı. Uzun bir hapis cezasının ardından şartlı tahliyeyle serbest bırakılan karakter, eski kız arkadaşı (Samira Wiley) ve küçük oğullarıyla birlikte bir hayat kurmaya çalışır.Wendell Pierce,Walt'nin akıl hocası olarak kadroya ağırlık katıyor;Anthony B Jenkins,Walt'nin oğlu olarak filmin en dokunaklı sahnelerinden bazılarında onun ortağıdır.

**Ne doğru oluyor?**Holland'nin performansı,Guardian'nin deyimiyle "kalınamaz"dır. Ringte sertleşen, evinde çocuğunun önünde yumuşayan ve geçmişiyle yüzleşirken kırılan bir adamı taşıyor; üstelik tek bir abartılı hareket bile yapmadan. YönetmeninWashington DC'yi çekme şekli de dikkat çekicidir: turistik anıtlar değil, terk edilmiş spor salonları, apartman koridorları ve gece geç saatlere kadar süren otobüs durakları.

**Kararı.**'They Fight'tür geleneklerini yeniden icat etmez - ancak içinde çalıştığı türü büyük bir beceri, hassasiyet ve dayanıklılıkla kullanır. Bu,Hollandiçin ödül sezonu konuşmalarını başlatması gereken bir performans; Andscape'in bugüne kadarki en olgun prodüksiyonu.`,
  },
  {
    slug: "sterling-point-inceleme-genc-draması-prime-video",
    origTitle: "Sterling Point",
    title: "“Sterling Point” İncelemesi: Gossip Girl Ekibinden Kusursuz Bir Kaçış Dizisi",
    excerpt: "Kanada’nın cennet gibi bir adasında geçen bu büyüme hikâyesi, entrika ve melodram bakımından oldukça zengin: Son dönemin gençlik dizilerindeki karanlığın yerine sıcaklığı, mizahı ve şaşırtıcı derecede sürükleyici bir gizemi koyuyor.",
    rating: "4/5",
    imdbRating: "7.0",
    image: sterlingPointAsset.url,
    body: `Dürüst olacağım:Prime Video's'nin yeni reşit olma dizisi 'Sterling Point' ile sıradan bir lise draması bekleyerek dişlerimi gıcırdatmaya hazırlandım. Dizi,New York for'nin pitoresk bir Kanada adasında güneşli bir kendini keşfetme yolculuğundan ayrılan A tipi bir genci konu alıyor.On thebunun mütevazı, yaz kampı tadında bir hikaye olduğunu ortaya koyuyor; ancak geçen yılın mevsimsel fenomeni olan 'The Summer I Turned Pretty'nin üçüncü sezonu gibi, gençlik draması nişinin sınırlarını aşarak nefis sabunlu bir şeye doğru itiyor.

LiderimizAnnie(Ella Rubin), bir yaz iş programından reddedilmeyi hâlâ atlatamamış, 17 yaşında endişeli bir genç. Tam o sırada, görüşmediği anne tarafından büyükbabasının ona gizemli bir miras bıraktığı haberi gelir. Annesini yıllar önce kaybedenAnnie and, ikiziConnor(Keen Ruffalo), babalarının (Jay Duplass) rahatsızlığına rağmen aile sırlarını araştırmaya başlar. Kanada'da kendilerine bir ev miras kaldığını öğrenenAnnie, annesinin hayatıyla ilgili yanıtlar bulmak için gizli bir yolculuğa çıkar.

In Sterling Point,Anniehızla özgür ruhlu bir arkadaş grubu bulur:Oonagrubunun kaygısız, cinsel açıdan kendine güvenen temel taşı, cılız bir deniz uçağıylaAnnie to theadasını taşıyan şakacı yerel çocukEllis(Jacob Whiteduck-Lavoie), hassasNew Yorker Rory(Daniel Quinn-Toye),Timothée ChalametveRamona(Amélie Elisabeth Hoefe) ile karşılaştırılan kişi.

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
    body: `Marissa Stapley, 2021 tarihli romanı 'Lucky'yi yazarken, dolandırıcıların nasıl çalıştığını soygun filmleri izleyerek, konuyla ilgili kitaplar okuyarak ve saf kurbanları paralarından ayırmayla ilgiliYouTubevideolarını inceleyerek öğrendiğini söylüyor. Ancak gerçek ilham kaynağını ancak çok sonra hatırladığını yazıyor: on yaşındayken annesinin tüm birikimini bir dolandırıcıya kaptırmasını izlemek.Stapleyşöyle diyor: "Dolandırılma gerçeğinin gerçekte ne kadar acımasız olduğu göz önüne alındığında, yetenekli bir kurgu dolandırıcıyı desteklememenin neden neredeyse imkansız olduğunu merak ediyorum."

Bu bariz çelişki, romanın uyarlamasının tam kalbinde yer alıyor. Gösteri, izleyicinin, diğer insanların açgözlülüğünü ve iyi niyetini sömürmenin hem kurbanlar hem de dolandırıcılar açısından insani maliyetini asla gözden kaçırmadan, kahramanın becerisine hayran kalmasına olanak tanıyor.Jonathan Tropper("Warrior", "Your Friends& Neighbors") ve ortak dizi sorumlusuCassie Pappas("Silo") tarafından yaratılan 'Lucky', hızlı bir şekilde açılıyor ve yedi bölümü boyunca hiç yavaşlamıyor. Ancak uzun bir oyun oynayan bir dolandırıcı gibi, dizinin ikinci yarısı tehlikede olanın sadece kahramanın hayatı değil, ruhu olduğunu ortaya koyuyor.

Anya Taylor-Joy's Luckyseriyi koşarken başlatıyor ve son bölüme kadar çalışmayı bırakmıyor.As thegeri dönüşleri, bunun onun dikkatlice hazırlanmış planının bir parçası olmadığını ortaya koyuyor: Milyonlarca dolar nakde çevirdikten ve kocasıCary(Drew Starkey) ileCaesar's Palace'de kutlama yaptıktan sonra, ülkeyi terk etmesi gerekiyordu. Ancak aşırı uyuduktan ve şiddetli bir baş ağrısıyla uyandıktan sonraCary'nin parayla birlikte ortadan kaybolduğunu fark eder. Daha da kötüsü, polis kumarhanenin çıkışını kapatmıştır veLucky, odasına geri dönmeye çalışırken karmaşık geçmişinden bir figür olan FBI ajanıBillie Rand'yi (Aunjanue Ellis-Taylor) görür.

AslındaLucky'nin hayatındaki neredeyse herkesle karmaşık bir geçmişi var. Bu servete, babasıJohn'nin (Timothy Olyphant) onu tek başına yetiştirirken ve ona aldatma sanatını öğretirken kurduğu dolandırıcılık tarafından hazırlandı;Johnhapiste ama bunu geçici bir aksilik olarak görüyor. Diğer ilgili taraflar arasında Malibu'daki bir at çiftliğinde saygın bir hayat sürdüğü görünen soğukkanlı gangsterPriscilla(Annette Bening— ayrıcaLucky'nin kayınvalidesi) vePriscilla'nin bile sinirlerini bozan mafya patronuWhittaker(William Fichtner) yer alıyor.

Dizi, kahramanın her şeyden önce hayatta kalma içgüdüsüyle hareket ettiğini daha ilk andan itibaren ortaya koyuyor. Çevresindeki insanların incinmesini istemiyor ve insanların iyi niyetini istismar etmek için yalan söylemekten hoşlanmıyor; ama onu kovalayanlardan kaçmak için her ikisini de kaçınılmaz olarak görüyor. Sürükleyici aksiyon sahneleri ve amansız bir huzursuzluk hissi bu perspektifi destekliyor. Yine de sezon ilerledikçe gizli akıntının sesi daha da artıyor:Lucky, şimdiye kadar bildiği tek hayatı yaşamanın bedelini, planlar işe yaradığında bile pişmanlığın onu kemirmesiyle gelen yalnızlığı hesaba katmaya başlıyor.

Taylor-Joy'sperformansının gücü burada ortaya çıkıyor: Bu kadar çarpıcı bir yüze sahip birinin fark edilmeden hareket etmesinin ne kadar zor olması gerektiğini unutuyorsunuz. Etrafındaki oyuncu kadrosu da bir o kadar güçlü. Baykuş gözlüklerinin ardındaBening, kariyerinde nadiren bu kadar soğuk (ve tüyler ürpertici) bir karakteri canlandırıyor.Though Olyphantilk bölümlerde idareli bir şekilde ortaya çıkıyor, ekrana tamamen çıktığında beklemeye değer olduğunu kanıtlıyor ve her zamanki zahmetsiz çekiciliğinin karanlık tarafını ortaya çıkarıyor.Ellis-Taylor, kanunun diğer tarafında, duyguları bazenLucky'ninkini yansıtan bir karakter olarak mükemmel;Clifton Collins Jr. ayrıcaPriscilla'nin sadık uygulayıcısı olarak güzel anlar yaşıyor.

Tropper and Pappas's'nin aksiyon ve gerilim dalgaları arasına dikkatle yerleştirilmiş nefes alma odasıyla bir araya gelmesiyle, akıcı olabilecek senaryonun altında atan bir kalp ortaya çıkıyor.Watching Lucky'skara büyü canlandırıcıdır; ancak dizi, kahramanı gibi, heyecan azaldığında içine yerleşen boşluğu biliyor.

İlk iki bölümün prömiyeri 15 Temmuz Çarşamba günüApple TV'de yapıldı; sonraki bölümler haftalık olarak yayınlanır.`,
  },


  {
    slug: "deep-water-aaron-eckhart-shark",
    origTitle: "Deep Water",
    title: "“Deep Water” — Uçak Kazasından Kurtulanlar Köpekbalıklarıyla Varoluşsal Rulet Oynuyor",
    excerpt: "Renny Harlin’in yeni felaket filmi, köpekbalıklarıyla dolu sularda hayatta kalmaya çalışan uçak yolcularını izliyor; Aaron Eckhart’ın başrolde olduğu film, aksiyonla başkalarının felaketinden alınan hazzı tam kıvamında buluşturan bir tür ziyafeti.",
    rating: "3/5",
    image: deepWaterAsset.url,
    body: `According to the Guardian'sincelemesine göre, iyi çekilmiş bir felaket filmi, başka hiçbir şeyin yapamayacağı kaşıntıyı gideriyor: duygusallığı, gerilimi ve schadenfreude'u küçük, küçük aksiyon paketlerinde paketliyor.Renny Harlin's'nin yeni çalışması 'Deep Water' bunu tam olarak biliyor ve öncüllerine göz kırpsa da ne yaptığının tamamen farkında.

Aaron Eckhart, çoğunlukla ikinci sınıf film yıldızlarını taşıyan bir Amerikan uçağının köpek balıklarının istila ettiği sulara düşmesinin ardından hayatta kalanlara liderlik etmek için ayağa kalkan karakteri canlandırıyor.Molly Belle Wright'nin canlandırdığı genç yolcuyla olan neredeyse "baba-kız" bağı, filmin duygusal dayanak noktasıdır. Gerisi klasikHarlin: köpekbalığı saldırıları, patlayan yakıt tankları, yolcuların birbirini suçlaması ve okyanus üzerinde hızla kararan bir gökyüzü.

**Ne doğru oluyor?**Harlin('Cliffhanger,' 'Deep Blue Sea') türün ritmini biliyor: Film 100 dakikanın biraz üzerinde sürüyor, üzerinde hiç yağ yok. Köpekbalığı sahneleri (kısmenCGI, kısmen animatronik) izlenebilir durumda; Sinema salonunda patlayan ses tasarımıIMAX'nin seçilmesini sağlıyor.

**Nerede tökezliyor?**Karakterler sıradan tiplerdir: alkolik pilot, kibirli iş adamı, paniğe kapılan anne, cesaretini çok geç bulan genç. Diyalog çoğu zaman didaktik bir hal alıyor ve tadı "Discovery Channelözel"i gibi oluyor.

**Kararı.**'Deep Water'bir başyapıt değildir ve olmayı da hedeflememektedir.But forköpekbalıkları, panik atak ve alaycılığın doğru karışımını arayan bir yaz sonu tiyatro gezisi, tam doğru sıcaklıkta servis edilen bir tür zevk.`,
  },

  {
    slug: "the-odyssey-nolan-inceleme",
    origTitle: "The Odyssey",
    title: "“The Odyssey” — Nolan’ın Tunç Çağı Destanı Görkemli Ama Kalbi Soğuk",
    excerpt: "IMAX 65 mm formatında çekilen Christopher Nolan imzalı “The Odyssey”, Matt Damon ve Zendaya’nın başrollerinde büyük bir mitolojik yolculuk sunuyor; ancak Rolling Stone’a göre teknik ihtişamına zaman zaman duygusal bir soğukluk eşlik ediyor.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/4fde943e-5272-44ce-971b-0849796439e1/fac9b0f2884e.webp",
    body: `Rolling Stone'dekiAccording to David Fear'sincelemesi,Christopher Nolan's'The Odyssey', yönetmenin bugüne kadar denediği en cesur biçimsel deney: Homeros'un destanınıIMAX65 mm'de, çoğunlukla gerçek mekanlarda ve minimum dijital efektlerle sahnelemek.

Matt Damon's Odysseusbaba, koca, savaşçı, kraldır veBronze Age. With'de kaybolmuş bir ruhtur, sakalı ve yorgun bakışları, çok fazla şey görmüş bir adamın huzursuzluğunu taşır.Zendaya(Penelope),Tom Holland(Telemachus),Anne Hathaway(Athena),Charlize Theron(Calypso),Lupita Nyong'o and Robert Pattinsonkadronun geri kalanını tamamlıyor.

**Ne doğru oluyor?**Nolan'nin kamera kompozisyonları epiktir: Ithaca kıyılarındaki uzun çekimler, Tepegöz mağarasının karanlık iç mekanları, siren sekansındaki ses tasarımı.Ludwig Göransson'sskoru tanıdıkNolanyoğunluğuna sahiptir ancak aynı zamanda eski bir tonu da yakalar.Damon'nin performansı,Cooper in'Interstellar'dan bu yana yaptığı en duygusal çalışmadır.

**Nerede tökezliyor?**According to Fear, tam olarakNolan'nin diğer filmlerinden beklediğimiz yer: karakterler arasındaki yakınlık.  Filmin duygusal omurgası olması gerekenThe Penelope-Odysseusilişkisi soğukkanlı ve mesafeli kalıyor.Zendaya'nin performansı iyi ancak karakterin ekran başında kalma süresi çok az.The Telemachusalt grafiği de aynı sorundan muzdariptir.

**Kararı.**'The Odyssey',Nolan'nin 'Dunkirk'ten bu yana görsel açıdan en etkileyici filmi; SinemadaIMAX65mm'de izlenmeyi gerektiren ender bir deneyim.But theHomer'ın gerçek gücü olan yuva özlemi bazen gösterinin gölgesinde kayboluyor. Bu ödül sezonunda teknik kategorilerde güçlü bir rakip amaNolan'nin kariyerinin zirvesi değil.`,
  },

  {
    slug: "the-hawk-will-ferrell-golf",
    origTitle: "The Hawk",
    title: "“The Hawk” — Will Ferrell’ın Golf Komedisi Bir “Talladega Nights” Değil",
    excerpt: "Netflix’in Will Ferrell başrollü yeni golf komedisi “The Hawk”, yıldızının klasikleşmiş spor komedilerinin ağırlığına yaklaşamıyor: Ferrell tanıdık ama yorgun, tempo düşük, kahkahalar ise seyrek.",
    rating: "2.5/5",
    image: "/__l5e/assets-v1/97de953b-ae63-455e-a185-eebe141392f2/4a4ea25b4356.webp",
    body: `Variety'deAccording to Alison Herman'sincelemesi,Will Ferrell'syeniNetflixgolf komedisi*The Hawk*, izleyici hafızasına kazınan 'Talladega Nights' and'Blades of Glory'gibi spor komedileriyle aynı ligde rekabet etmeyi vaat ediyor - ancak sahaya girdiğinde o ligin çok altına düşüyor.

Ferrell, kariyerinin sonuna yaklaşan huysuz, alkolik, solgun profesyonel golfçüLonnie"The Hawk"Hawkins'yi canlandırıyor. 2004 şampiyonluğunu kazandıktan sonra kariyeri çöktü ve şimdiPGA Champions Tour. Molly Shannon'de eski karısını,Jimmy Tatrosinir bozucu genç rakibini veLuke Wilsonhasta menajerini canlandırarak geri dönüş peşinde.

**Where's thesorun mu var?**Ferrell'nin karakter tipi oldukça tanıdıktır: patlayıcı patlamalara eğilimli içi boş, telaşlı, yaşlanan atlet. Sorun türün kendisi değil, betiğin bu türe söyleyecek yeni bir şey vermemesidir.Director Jason Woliner('Borat Subsequent Moviefilm') temayı ciddiye almakla saf aptallık üretmek arasında bir denge kuramıyor; sonuçta ne 'Talladega Nights''anarşik enerji ne de 'The Squid and the Whale' gibi bir şeyin acı-tatlı düşüş draması var.

**Onu ne kurtarır?**Molly Shannonher sahneye enerji katıyor;Luke Wilson's"yorgun ama sadık" yönetici sürekli izlenmeye devam ediyor.Netflix'nin son yıllardaki en "kartpostal güzelliğindeki" komedilerinden biri olan Herman'a göre golf sahası sinematografisi çok hoş.

**Kararı.***The Hawk*, birWill Ferrellfilmi izlemek kadar kolaydır ve bir film kadar çabuk unutulur.Ferrell'nin spor-komedi klasiklerine ayıracak vaktinin kaldığına hâlâ inananları tatmin etmeyecek; klasikleri hiç görmemiş olanlar için zayıf bir giriş noktasıdır.`,
  },
  {
    slug: "evil-dead-burn",
    origTitle: "Evil Dead Burn",
    title: "“Evil Dead Burn” — Serinin En Karanlık, En Sinir Bozucu Bölümü",
    excerpt: "Yönetmenliği Sébastien Vaniček’in devraldığı yeni Evil Dead filmi, kanlı fiziksel komediyi bir kenara bırakıp saf bir kâbusa dönüşüyor. Başrolde Souheila Yacoub var; Deadites ise bütün güçleriyle sahnede.",
    rating: "4/5",
    image: "/__l5e/assets-v1/f0e6c61d-6c5a-4d10-b1c6-db14f1dc5a21/77eb447d9b8f.avif",
    body: `Empire'dekiAccording to Ben Travis'sincelemesi,Evil Deadserisi başından itibaren ton ölçeğinde sallandı: bir yanda*Evil Dead II*ve*Army Of Darkness*'nin sert kahkahaları, diğer yandaSam Raimi'sorijinalinin saf dehşeti veFede Alvarez's2013'ün yeniden yapımı.Lee Cronin's*Evil Dead Rise*iki kolu birleştirdi;  Artık devraldığıSébastien Vaniček's*Evil Dead Burn*, sinir bozucu derecede etkili sonuçlarla kararlı bir şekilde iğneyi en karanlık uç noktaya doğru sallıyor.

Hikaye, istismarcı kocasını (George Pullar) bir araba kazasında kaybedenAlice(Souheila Yacoub) üzerine odaklanıyor. Kişisel cehenneminin sona ereceğine dair bir işaret yok: Kocası huzura kavuşurkenDeaditeskapıyı çalmaya başlıyor.Vaniček, aile içi şiddetin mecazi ağırlığının üstüne doğaüstü korkuyu eklemekten çekinmiyor; bu seçim filmin en rahatsız edici sahnelerinde bile kalıcı bir alt metin bırakıyor.

Vaniček'nin yönetmenlik dili kağıt kadar gerilimden yanadır: kamera uzun mesafeler boyunca geniş çekimler yapar, ses tasarımı titreşir ve kan Cronin'inki kadar cömert ama çok daha az eğlencelidir.Yacoub'nin performansı filmin dayanak noktasını oluşturuyor; travma taşıyan bir bedenin aniden avdan yırtıcıya dönüşebileceğini inandırıcı kılıyor.

According to Empire,*Evil Dead Burn*'nin amacı franchise'a yeni hayranlar kazandırmaktan çok, uzun süredir hayranlara "bu şeyler gerçekten sizi hala korkutabilir" diye hatırlatıyor. Splatstick'i arayanlar yanlış tiyatroda; Kabus arayanlar için bu şimdiye kadarki en tavizsizEvil Deaddeneyimlerinden biri.`,
  },
  {
    slug: "the-furious",
    origTitle: "The Furious",
    title: "“The Furious” — Hong Kong Aksiyon Sinemasının Kemik Kıran Dönüşü",
    excerpt: "Aksiyon koreograflığından yönetmenliğe geçen Kenji Tanigaki, Taken’ın temel iskeletini alıp iki saatlik kesintisiz bir dövüş gösterisine dönüştürüyor. Xie Miao ve Joe Taslim bir an olsun hız kesmiyor.",
    rating: "4/5",
    image: "/__l5e/assets-v1/7809f3ca-276b-4fd6-aabb-6fe59c9e965f/81623f60a4b3.avif",
    body: `Empire'deAccording to Harry Stainer'sincelemesi,*The Furious*'nin kana bulanmış son düellosu geldiğinde, birisi yumruklanmadığı, tekmelenmediği veya yüzünü masaya çarpmadığı iki saatlik çalışma süresi boyunca beş dakikayı saymakta zorlanırsınız.  Aksiyon koreografisinden yönetmen koltuğuna geçenKenji Tanigakibu alanda kendini tamamen evinde hissediyor;*Taken*'nin "kızım kaçırıldı" iskeletini alıyor ve onuHong Kongdövüş sanatları sinemasının tam kapsamlı kutlamasına sarıyor.

Kızı kaçırılan dilsiz bir babanın (Xie Miao), çocuk kaçakçılığı yapan bir çetenin peşine düşmek için bir gazeteciyle (Joe Taslim) iş birliği yaptığı hikaye, sayfada yeni bir şey vaat etmiyor. AncakTanigaki'nin içgüdüleri doğrudur: Karakterlerinin konuşmak yerine kavga etmesine izin verir. Setler, koridorlar, sokaklar, restoran mutfakları; hepsi neredeyse tek çekimlik koreografide kullanılıyor.Xie Miao'sfiziksel dil diyalog eksikliğini fazlasıyla telafi ediyor;Joe Taslimen sert vuruşlarını sanki hiç çaba harcamadan yapıyormuş gibi yapıyor.

Filmin başarısı, türün izleyicisinin tam olarak ne istediğini bilmesinde ve bunu hiçbir aksama olmadan sunabilmesinde yatıyor. Duygusal derinlik arayanlar farklı bir tiyatroya yönelmeli; ama net coğrafyaya sahip, kemik kıran, nefes kesen dövüş sahneleri isteyen herkes için bu yılın en tatmin edici aksiyon filmlerinden biri.`,
  },
  {
    slug: "500-miles",
    origTitle: "500 Miles",
    title: "“500 Miles” — Sheffield’dan Dingle’a Uzanan Şefkatli Bir Yol Filmi",
    excerpt: "Morgan Matthews’ın duyarlı yol filminde iki kardeş, dedelerine (Bill Nighy) kavuşmak için evden kaçıyor. Gözyaşları garanti.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/295d7bf9-7708-4133-84a9-9137defda072/a471559adef3.avif",
    body: `Empire'dekiAccording to Barry Levitt'sincelemesi,Morgan Matthews'*500 Miles*, ismine rağmen bir Proclaimers müzikali değil - ama duygusal olarak o şarkıyla aynı damardan besleniyor.Finn(Roman Griffin Davis) ve küçük kardeşiCharlie(Dexter Sol Ansell) evden kaçtılar ve planları basit:Ireland's Dinglekıyısındaki küçük bir kasaba olanSheffield to'den ayrı kaldıkları büyükbabalarıyla (Bill Nighy) yeniden bir araya gelmek ve ailelerini yeniden bir araya getirmek.

Film, kartpostal gibi mükemmel bir aile mutluluğu gününü gösteren bir geri dönüşle açılıyor: kuma inşa edilmiş kaleler, kumsalda saklambaç, torunlarına sarılmış büyükanne ve büyükbabalar. Bugünün karanlığı o kayıp cennetin ışığıyla tersine aydınlanıyor.Matthews'yönelimi kadrajı mümkün olduğu kadar düşük tutuyor; hikaye çocukların gözünden anlatılıyor; kamera çoğunlukla omuz yüksekliğinde oturuyor.

Roman Griffin Davis,*Jojo Rabbit*'den bildiğimiz hassas oyunculuğu büyümenin başka bir aşamasına taşıyor;  Filmin sürpriziDexter Sol Ansellmasumiyeti ve inatçılığı aynı anda taşıyor.Bill Nighybeklendiği gibi sahneleri sadece orada bulunarak ısıtıyor.Maisie Williamsküçük ama etkili bir rolde karşımıza çıkıyor.

According to Empire,*500 Miles*melodrama kapılmadan flört ediyor; klişelere yaklaşıyor ama zamanda geriye gidiyor. Sonuç, seyirciyi arabaya bindiren ve yol boyunca güldüren ve ağlatan hassas ama sağlam bir aile dramasıdır.`,
  },
  {
    slug: "voicemails-for-isabelle",
    origTitle: "Voicemails For Isabelle",
    title: "“Voicemails For Isabelle” — Yanlış Numaradan Doğan Sıcacık Bir Romantik Komedi",
    excerpt: "Zoey Deutch ile Nick Robinson arasındaki uyum, ölen bir kız kardeşe bırakılan sesli mesajların yanlış telefona ulaşmasıyla başlayan son derece sıra dışı bir aşk hikâyesini sırtlıyor.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/18b3d1be-d808-4621-9e0b-53c9f2b60e7e/a1052aa810be.avif",
    body: `Empire'dekiAccording to Jordan King'sincelemesi,*Voicemails For Isabelle*, klasik "yanlış numara" romantik komedi cihazını kederle birleştiren beklenmedik derecede hassas bir tür karışımıdır.San Francisco'de kaotik bir hayat yaşayan gelecek vaat eden bir pasta şefi olanJill(Zoey Deutch), ölen kız kardeşiIsabelle'ye her gün bir sesli mesaj bırakıyor; bu mesajlar onun hem terapisi hem de günlüğü görevi görüyor.

Sorun şu ki, mesajlar artıkIsabelle'nin eski numarasına ulaşmıyor; bunun yerineWes'nin (Nick Robinson) yeni iş telefonuna ulaşırlar.WesTeksaslı bir emlakçıdır; düzenli, temkinli ve biraz kırılgandır. Çok geçmeden kendiniJill'nin sesini duymayı sabırsızlıkla beklerken bulur. Klasik romantik komedi senaryosu şöyle:Wesona gerçeği söylemeli mi, ne zaman söylemeli ve söylediğinde ne olacak?

Filmin gücü eşleştirmesinden geliyor.Zoey Deutch, karakterin dağınıklığını, mizahını ve altta yatan kederini aynı anda barındırıyor;Nick Robinsononu sessiz ve dikkatli bir performansla dengeliyor.According to Empire, en iyi sahneler ikisinin aslında birbirine bakmadığı sahnelerdir: Yalnızca sese dayalı bir yakınlık, filmin duygusal omurgasını oluşturur.

Yönetmen bazen güvenli davranıyor ve sonlara doğru romantik komedi formülüne çok fazla dayanıyor. Ancak King'e göre*Voicemails For Isabelle*'nin gerçek başarısı, "kederli olduğunuz biriyle konuşmaya devam etme" fikrini bir hileden filmin atan kalbine dönüştürmektir. Sıcak, hüzünlü, izlemesi kolay bir romantik komedi.`,
  },
  {
    slug: "nirvanna-the-band-the-show-the-movie",
    origTitle: "Nirvanna The Band The Show The Movie",
    title: "“Nirvanna The Band The Show The Movie” — Deliliğin Eşiğinde, Müthiş Özgün Bir Film",
    excerpt: "Matt Johnson ile Jay McCarrol’ın onlarca yıldır peşinden koştuğu hayal, Toronto’daki Rivoli’de konser verme arzusu, sonunda beyazperdeye taşınıyor. Çılgın, dahiyane, yürek burkan.",
    rating: "4.5/5",
    image: "/__l5e/assets-v1/92a46c27-5a03-4106-b7b3-4162f39ee7f9/57d9366be4c8.avif",
    body: `*Nirvanna The Band The Show The Movie*'nin - 2008'de çekilen - açılış sahnesi olanEmpire'dekiAccording to Ben Travis'sincelemesi,Matt Johnson'skarakterinin "görmek üzere olduğunuz şeyin daha önce hiç görmediğiniz bir şey olduğunu" söylemesiyle başlıyor. Karakter, grubunun (ki bu gerçek bir grup bile değil - kendisi, arkadaşıJayve bir klavye) bir gün Toronto'nun efsanevi mekanında, filmin kendisi için de geçerli olanRivoli. But'yi çalacağını hayal ediyor: çılgın, parlak, gülmekten acı veren komik, yürek burkan ve tamamen orijinal.

Matt(Matt Johnson) veJay(Jay McCarrol), on yıllardır kovaladıkları hayali gerçekleştirmek için en saçma planlarını harekete geçirir:Rivolisahnesinde oynamak. Film, kısa filmden diziye, uzun metrajlı filme evrilen bir projenin her katmanını taşıyor: gerilla çekimi estetiği, seyircilerden gelen samimi tepkiler, meta şakalar, alışılmadık bir kurgu ritmi.

Johnson and McCarrolarasındaki kimya filmin var olmasının tek ve yeterli nedenidir; ikili hem çocuksu bir enerjiyle hem de artık genç olmadıklarını bilmenin getirdiği kırılganlıkla oynuyor.According to Empireile film, salt komedinin ötesinde bir şeye ulaşıyor: onlarca yıldır bir hayali sürdürmenin komik, absürd ama son derece samimi bir portresi.

Travis filmi "sadece varlığıyla dahiyane bir hareket" olarak nitelendiriyor. Bağımsız komedinin gerçekte nasıl görünebileceğini merak eden herkes için bu, 2026'nın en tuhaf ve en tatlı sürprizlerinden biri.`,
  },
  {
    slug: "moana-live-action",
    origTitle: "Moana",
    title: "“Moana” — Disney’nin Gerçekten İşe Yarayan İlk Canlı Çekim Yeniden Çevrimi",
    excerpt: "Filmin yarısı hâlâ animasyon, Dwayne Johnson tam anlamıyla Maui’ye dönüşmüş, yeni yıldız Catherine Laga’aia ise Moana’yı ışıl ışıl bir coşkuyla canlandırıyor. Owen Gleiberman’a göre bu, Disney’nin gerçekten başarılı ilk canlı çekim uyarlaması.",
    rating: "4/5",
    image: "/__l5e/assets-v1/cc4d9f5f-e716-4745-9405-20606e5616ee/6358dc99c9a4.webp",
    body: `Variety'dekiAccording to Owen Gleiberman'sparçası,Disney'nin son yıllardaki canlı aksiyon uyarlamaları dizisi, sadakat ve ilhamsız yumuşaklık arasında sıkışmış durumda. 'Moana' bu döngüyü kırıyor:Thomas Kailtarafından yönetilen film, 2016 orijinaline sadık kalırken kendi görsel şiirsel dilini de yaratıyor.

En cesur yönetmen seçimi, filmin neredeyse yarısının animasyon olarak kalmasıdır. Okyanus, ada ruhları, kum canavarları ve özellikleMaui'nin dövmelerinin yaşayan dünyası,CGI and'nin stilize animasyonu arasında bir yerde oturuyor; bu seçim uyarlamanın masalsı tonunu koruyor.Cook Islands and New Zealand'de çekilen gerçek Pasifik manzaralarının fotogerçekçi güzelliğiyle harmanlanan sonuç, sıra dışı bir melezdir.

Yeni yıldızCatherine Laga'aia,Auli'i Cravalho'nin animasyonluMoana'ye getirdiği tazeliği taklit etmeye çalışmıyor; bunun yerine kendi ışıltısını getiriyor: meraklı, inatçı, ışıltılı bir kaşif.  Bu aradaDwayne Johnson, tamamenMauiolarak serbest bırakıldı; karaktere kendi ikonik sırıtışını kazandırıyor ve bir konser başrol oyuncusu gibi "You're Welcome" numarasını taşıyor. ŞarkılarLin-Manuel Miranda and Opetaia Foa'itarafından yeniden düzenlendi ve iki yeni parça eklendi.

Gleiberman'ın temel argümanı şu: 'The Lion King'veya 'Mulan' gibi girişimlerden farklı olarak 'Moana' tam olarak animasyonun kendi dilinden korkmadığı için çalışıyor.Disneysonunda "canlı aksiyon" etiketini seyreltme yerine zenginleştirme aracı olarak kullanmayı öğrenmiş görünüyor.`,
  },
  {
    slug: "night-nurse",
    origTitle: "Night Nurse",
    title: "“Night Nurse” — İki Sapkının Yollarının Kesiştiği Kışkırtıcı Bir Bakıcılık Fantezisi",
    excerpt: "Georgia Bernstein’ın cesur ilk uzun metrajı, gerçek bir istismar vakasını rahatsız edici ölçüde gösterişli bir erotik gerilime dönüştürüyor. Bruce McKenzie ve Cemre Paksoy büyülüyor.",
    rating: "3.5/5",
    image: "/__l5e/assets-v1/0a83f2eb-46a8-44d0-8de6-b7bdb170d9b0/1b2ee0af6835.webp",
    body: `Variety'dekiAccording to Beatrice Loayza'sincelemesi,Georgia Bernstein's'nin ilk yönetmenlik denemesi 'Night Nurse'tehlikeli bir tazelik taşıyor. Gerçek bir sömürü öyküsünden yola çıkan film, konusunu didaktik bir dram olarak değil, kışkırtıcı, karanlık, zaman zaman komik bir erotik gerilim olarak ele alıyor ve bu risk çoğunlukla karşılığını veriyor.

Hikaye, mali açıdan sıkıntı çeken genç bir bakıcı olanAda'nin (yeni gelenCemre Paksoy), yaşlı, hasta ama son derece manipülatif bir dolandırıcının (Bruce McKenzie) evine taşınmasıyla başlıyor. Klasik bir bakım düzenlemesi olarak başlayan şey, hızla karmaşık bir güç oyununa dönüşür: Kim kimi kullanıyor, kim kimden besleniyor, giderek bulanıklaşıyor.Bernsteinbu belirsizliği yalnızca anlatıya değil, bakış açısına da yerleştiriyor; kamera kasıtlı olarak arzu nesnesinin kim olduğunu değiştirmeye devam ediyor.

Paksoy'nin performansı filmin en büyük keşfi: Yüzünde masumluk ile hesaplı soğukluk arasında gidip gelen, okunamayan bir ifade var.McKenzie,Loayza'nin ifadesiyle "karakteri gölge ve ışık arasına tam olarak yerleştirmeyi" başarıyor.Bernstein'nin görsel dili Hitchcock'tan çokPaul Verhoeven'ye yakın; abartılı bir zenginlik, kırmızı ve altın rengi bir palet, ara sıra rüya gibi.

Filmin zayıf noktası, gerçek hikayeden uzaklaştıkça ahlaki çerçevesinin de gevşemesi; bazı izleyiciler bunu "estetikleştirilmiş sömürü" olarak okuyabilir. AncakLoayza'ye göre 'Night Nurse''nin gerçek gücü tam olarak bu rahatsız edici rahatlıkta yatıyor: Film sizin acımanızı istemiyor, izlemenin suçluluğunu istiyor. Cesur, sapkın ve umut verici bir başlangıç.`,
  },
  {
    slug: "young-washington",
    origTitle: "Young Washington",
    title: "“Young Washington” — Finaldeki Bağış Çağrısıyla Kendi Ayağına Sıkan Bir Biyografi",
    excerpt: "Jon Erwin’in yönettiği, Angel Studios’un yapımcılığını üstlendiği film, George Washington’ı mitleştirmeye çalışırken kapanış jeneriğine eklediği bağış çağrısıyla neredeyse tatmin edici olabilecek bir biyografiyi zehirliyor.",
    rating: "2.5/5",
    image: "/__l5e/assets-v1/e706e279-6f5b-4163-9c37-73be55a4c46a/af56945dd2e0.avif",
    body: `Başka hiçbir büyük stüdyo, muhafazakarChristian and AmericandeğerleriniAngel Studioskadar karşılamaya kendini adamıştır ve başka hiçbir stüdyo, Amerikalıların aslında bu değerleri paylaştığına bu kadar az inanmaz. Diğer yapımcılar filmlerini sinemalarda yayınlayıp izleyicilerin bilet almasını beklerken,Angel Studiosen şoven, en dini filmlerini kapanış jeneriğine yapılan son dakika bağış toplama çağrısıyla bitirmekte ısrar ediyor.

Jon Erwin'nin yönettiği, yapımcılığını üstlendiği ve ortak yazdığı 'Young Washington'deWilliam Franklyn-Miller,George Washington. He'll'yi canlandırıyor ve sonunda Amerika'nın ilk başkanı oluyor, ancak önce liderlik hakkında bazı değerli dersler alması veFrench in the'nin arka ucunu ağır çekimde tekmelemesi gerekiyor. Başlık,John Ford's1939 'Young Mr. Lincoln''yi çağrıştırıyor - ancakErwinFord değil veFranklyn-Miller,Henry Fondadeğil.

Tüm bu karşılaştırmaları bir kenara bırakırsak,Founding Father. His'nin ilk sahnelerdeki çocuksu, yavru köpek ciddiyeti yavaş yavaş acımasız, hak edilmiş bir ciddiyete dönüştüğü içinFranklyn-Milleridare edilebilir.Erwin'nin yönü son derece yetkindir; 1750'lerinVirginia and Ohio'sini canlı, çeşitli tonlarla boyuyor. Kostümler ve setler de ikna edici.

Ancak oyuncu kadrosuKristopher Kimlin'ssinematografisi kadar tutarlı değil.Sir Ben Kingsleyfilmin çoğunu masa başında geçiriyor çünküLieutenant Governor of Virginia. Kelsey Grammerolay örgüsünü ilerletmeye kararlı;Andy Serkis,Braddock'yi basit bir palavracı gibi oynuyor.  Mantıklı ve alaycı bir milis adamı oynayanOnly Angus Castle-Doughty, sahneleri çalmaya kararlı görünüyor ve içinde bulunduğu her filmde bundan sıyrılıyor.

Young Washington'o kadar mekanik bir biyografi ki küçük hatalarına odaklanmamak elde değil. Her şeyden önce temaları hiçbir zaman tutarlı değildir; film tarihin çirkin yönlerine hiç ilgi göstermiyor.Washington, içinde bulunduğu koşulların adaletsizliğinden hareket ediyor; okula gidememek, İngiliz ordusuna katılamamak. Ancak filmin kendi itirafına göre on tane köle sahibi var.Washington'nin yardımcı öğeleri hiçbir zaman ekranda görünmez; Diyalogda onlardan bir kez bahsedildiğinde, ailesinin hayır kurumundan yararlananlar olarak tanımlanıyorlar.

In the21. yüzyıl,Founding Fathers'nin basit bir portresinin satılması zor.French inağır çekimde düello yapan ve dizanteri dolu at sırtında gösteriler yapan birWashington'yi izlemek, filmi ciddiye almayı imkansız hale getiriyor. Amerika'nın 250. doğum günü için yapılan, mısırla beslenen bu ısrarcı yapım iyi bir gişe bile yapabilir; ancakAngel Studios'nin bunu bilmesinin hiçbir yolu yok çünkü bilet satış rakamları gerçek izleyici sayılarından çok daha yüksek olabilir. Bağış toplama kumarının sahtekarlığı, aksi halde başka bir yapay biyografi olabilecek şeyi zehirliyor.`,
  },
  {
    slug: "the-last-one-for-the-road",
    origTitle: "The Last One for the Road",
    title: "“The Last One for the Road” — Yaşlı Ayyaşların Venedik Yolundaki Trajikomik Serüveni",
    excerpt: "Francesco Sossai’nin filmi, alkolizmi bir hastalık olarak değil, iflah olmaz iyimserlerin kaçınılmaz sonu olarak resmediyor. Kasvetli ama komik, kendine özgü bir dostluk ve yol filmi.",
    rating: "3.5/5",
    image: lastOneRoadAsset.url,
    body: `Francesco Sossai's'nin yeni filmi "alkolizm" gibi şüpheli klinik terimlere pek inanmıyor. Bunun yerine sarhoşluğa, bulanıklığa, üzüntüye ve ara sıra yaşanan mide bulantısına alaycı bir hoşgörüyle bakıyor; günün her saatinde içmeye devam etme süper gücüne sahip orta yaşlı sarhoşların trajikomik iyimserliğine göz kırpıyor, her zaman "sadece bir tane daha" istiyor. Filmin başında ve sonunda tekrarlanan aynı anlamsız şaka her şeyi özetliyor: kalıcı bir vedanın eşiğinde olan biri hayati bir tavsiye verir ama bu, anlaşılamayacak kadar anlaşılmaz bir şekilde ortaya çıkar.

Bu bir yol filmi, bir dost filmi, biraz başıboş bir tüylü köpek hikayesi; reşit olmayı reddeden bir reşit olma hikayesi; tatlılığın silinip gittiği acı-tatlı bir komedi.Doriano(Pierpaolo Capovilla) veCarlobianchi(Sergio Romano), küçük dolandırıcılıkların kıyısından geçen, sürekli iyi niyetli iki sarhoş, ağızdan ağıza orta yaşlı serserilerdir. OrtaklarıGenio'nin (Andrea Pennacchi) bir fabrikadan neredeyse bedavaya çaldığı tasarım gözlükleri satmaktan arta kalan lüks bir arabada yaşıyorlar.

When Genio, yıllar sonra Venedik'e döneceğini duyurur. İkili yola çıkar ancak saçma bir hata onu özlemelerine neden olur.Along the, başka bir öğrenciye karşılıksız özlem duyan genç mimarlık öğrencisiGiulio(Filippo Scotti) ile tanışırlar.Doriano and Carlobianchibunu hissediyor ve biraz sinirlenenGiulio, iki adamla birlikte takılmayı kabul ediyor. OnuCarlo Scarpa'spostmodernist Brion'un mezarına götürürler; Somut biçimlerin ortasında duran, ölüm üzerine bir meditasyon olan film, karakterlerin de sessizce kendi hesaplaşmalarını yaptıklarını ima ediyor.

Sossai, Venedik'i hiçbir duygusallık belirtisi olmadan gösteriyor:Santa Croce'ye ve İtalya'nın "Luton havaalanı" Treviso'ya kısa bir bakış. Filmin ana konusuDoriano and Carlobianchi'ninGiulio'nin romantik yarasını iyileştirip iyileştiremeyeceği; belki de aslında iyileştirdikleri şeyinGenio. Giulio'ye olan özlemleri olduğu ortaya çıkar veGenio'nin asla olamayacağı gerçek üçüncü silahşör olur. Öğleden sonra tökezleyen bir sarhoş gibi, nereye götürürse götürsün burnunu takip eden sevimli bir film.`,
  },
  {
    slug: "enola-holmes-3",
    origTitle: "Enola Holmes 3",
    title: "“Enola Holmes 3” — Büyüme Sancıları Çeken Sevimli Bir Dedektiflik Serüveni",
    excerpt: "Millie Bobby Brown’ın cazibesi yerli yerinde, ancak yönetmenliğini Philip Barantini’nin devraldığı üçüncü film, olgunlaşma çabasıyla serinin coşkulu ruhu arasında bir türlü karar veremiyor.",
    rating: "2.5/5",
    image: "/__l5e/assets-v1/b3cfde76-b2ea-43e2-a430-e64f3a93c0c2/2cd09b4a5932.webp",
    body: `Zaman durmuyor; görünüşe göre büyük ölçüde sevimli birNetflixfilm serisi için bile değil. Büyüme sancıları en keskin beyinlerin bile kaçamayacağı bir kaderdir.*Enola Holmes 3*,Philip Barantini in theyönetmen koltuğuylaMillie Bobby Brown'sgenç dedektifi bir kez daha geri getiriyor; ancak seri bu kez ilk iki filmin coşkulu ritmini pek yakalayamıyor.

Brown,Nancy Springer's YAkitaplarından alınan karakter için kusursuz bir seçim olmaya devam ediyor. HemEnola'nin çocuksu neşesini hem de keskin zekasını taşıyabilen ender sanatçılardan biri.But in theüçüncü bölüm, karaktere doğal olarak uyan bir şeyden çok, ağır bir kostüm gibi şeyler bindiriyor.Barantini'nin daha yetişkin, daha ciddi yaklaşımı -*Adolescence*'den tanıdık -Jack Thorne'ssenaryosunun eğlenceli tarafıyla hiçbir zaman tam olarak örtüşmüyor. Sonuç, aynı zamanda hem büyümek hem de "eskiEnola" olarak kalmak isteyen ve bu nedenle hiçbirinde tam anlamıyla başarılı olmayan bir filmdir.

Açılış etkileyici derecede iddialı:Malta,Enola and Lord Tewkesbury's(Louis Partridge) düğün gününde çekilen muhteşem bir düğün.Then theklasikEnolaçilesi başlıyor; törene geç kalmak, haydutlar, evlilik kurumu hakkındaki şüpheler. Gizem,Sherlock'nin (Henry Cavill) kaçırıldığına dair haber geldiğinde başlar ve düğün kaosa sürüklenir. Yönetmenin geniş çekim seçimleriMalta'nin taşını, ışığını ve denizi güzel bir kartpostal gibi çerçeveliyor; Ancak hikayenin iç ritmi hiçbir zaman aynı özen düzeyine ulaşmıyor.

Filmin asıl sorunu ilerleme hızında ortaya çıkıyor.Tewkesbury'nin annesi kaçırılır, otel alev alır, Maltalı özgürlük savaşçıları devreye girer, eski bir düşman geri döner - ancak bu üst üste gelen dramatik olayların hiçbiri gerçek bir gerilim yaratmaz.Enola'nin dedektiflik çalışması bu sefer bir istihbarat kıvılcımından, tanık olduğu her şeyi toplayan bir gözlemciye dönüşüyor.Whenever thekamera "önemli ayrıntı" nesnesine yakınlaşır, gizem anında çözülür; sanki filmin adı "dedektiflik işi" değil "dolly zoom" olmalı gibi.

On theÖte yandan, franchise her zaman daha ağır konularla nasıl flört edileceğini biliyordu - kadın hakları, sınıf ayrımları, sanayi devriminin insani maliyeti.*Enola Holmes 3*savaş suçlarına, sömürüye, işgale değiniyor; ancak dramatik gerilimi, bu ağır konuların hikayenin doğal bir parçası gibi hissettirecek kadar sıkı bir şekilde vidalayamaz.While Enola thekarakteri olgunlaşıyor gibi görünüyor, hikaye onun yanında büyüyemiyor - bir yetişkinin ceketini giyen bir çocuk gibi.

In thesonu,*Enola Holmes 3*,Millie Bobby Brownhayranları için hala izlenebilir birNetflixakşamı sunuyor; ancak ilk filmin tazeliğini veya ikincinin tam anlamıyla kaosunu arayanlar için biraz "giriş seviyesi" kalıyor. Bir sonraki bölüm için tek dileğimiz:Enola'nin gerçekten büyümesine ve gizemlerin onunla birlikte gerçekten daha karmaşık hale gelmesine izin vermek.`,
  },
  {
    slug: "glastonbury-the-movie",

    origTitle: "Glastonbury the Movie",
    title: "“Glastonbury the Movie” — Çamur, Müzik ve Yitirilen Masumiyet",
    excerpt: "Dijital dünyanın gürültüsünden uzakta, 16 mm’nin dokusuyla çekilmiş, 1993 Glastonbury festivalinin çamurlu ve özgür ruhuna nostaljik, neredeyse antropolojik bir yolculuk.",
    rating: "4/5",
    image: glastonburyImg,
    videoUrl: "https://www.youtube.com/embed/jKAfhqmJ4ME",
    body: `Robin Mahoney,Matthew Salkeld and William Beaton,*Glastonbury the Movieüçlüsünün yönettiği*, modern festival kültürünün endüstriyel bir canavara dönüşmeden önceki son saf, masum nefesi gibi karşımızda duruyor. 1993 yılında meşhur çamurlu arazide çekilen yapım, klasik bir konser filminden ziyade antropolojik bir kazıyı andırıyor. Akıllı telefon ekranlarının karanlığı kirletmediği, kurumsal sponsor logolarının her köşeden fırlamadığı bir dönemin ruhunu bir zaman kapsülü hassasiyetiyle günümüze taşıyor.

Filmin anlatı yapısı her zamanki "başrol" veya "vokalist" etrafında dönmüyor; burada gerçek kahraman kalabalığın kendisidir. Yönetmenler kameranın bir gözlemci gibi kalabalığın içinde dolaşmasına izin verdi. Çadırlarını kurmaya çalışan sarhoşlar, şafakta dans eden silüetler, o meşhur İngiliz çamurunda kaybolan botlar... 16mm ve 35mm dokuda çekilen, ara sıra sallanan ama her zaman samimi hissettiren sinematografi, dijitalin kısır dünyasına bir başkaldırı niteliği taşıyor. Görüntülerdeki gren, festivalin toz ve dumanına karışarak izleyiciyi oturduğu yerden kaldırıyor veWorthy Farm'nin rahatsız edici ama özgür atmosferine bırakıyor.

Film, müzikal açıdan bir küratörlük harikası olmaktan ziyade anın akışını yansıtıyor. Performanslar müzik-video cilasıyla kurgulanmış değil, sanki buralardan geçip gitmişsiniz ve tesadüfen yakalamışsınız gibi. Bu seçim filmi didaktik bir belgeselden duyusal bir deneyime dönüştürüyor. Hippi rüyasının gün batımı diyebileceğimiz bu dönemde, eski "komünal yaşam" ideali henüz tam olarak ölmemişken, çiçek çocukların yavaş yavaş rave kültürünün kaotik enerjisine kapılmalarını izliyoruz.

Ancak bu gevşeklik filmin en zayıf halkası olduğu kadar en büyük gücüdür. Net bir anlatım akışının veya odak noktasının bulunmaması, zaman zaman genel izleyici kitlesi için yorucu bir tempoya neden olabilir. Bazı sahneler ihtiyaç duyulandan daha uzun sürüyor ve bu, izleyicileri anın içinde tutmak anlamına gelse de bazen ritmi aşağı çekiyor. Yine de bu "amaçsızlık" filmin aktarmaya çalıştığı özgürlükle yapısal olarak uyum içindedir. Disiplinsiz bir kurgu belki de bu kadar disiplinsiz bir festivali anlatmanın en dürüst yoludur.

In thesonu, otuz yıl sonra geriye baktığımızda,*Glastonbury the Movie*sadece bir müzik etkinliğini değil aynı zamanda bir neslin son özgürlük çığlığını temsil ediyor. Kameralı telefonların ve sosyal medya doğrulamasının olmadığı bir dünyada, insanların sadece "orada" olmak için orada oldukları o büyülü anları izlemek, günümüzün gözetim toplumu altında yaşayan bizler için hem kederli hem de ilham verici. Bu film, hippi rüyasının son közlerine yakılmış, çamur kokulu, içten bir ağıt gibi duruyor.`,
  },
  {
    slug: "strung",
    origTitle: "Strung",
    title: "“Strung” — Korku ile Melodramın Çatışması Arasında Sıkışan Bir Tür Denemesi",
    excerpt: "Blumhouse tarzı gerilimle Tyler Perry tarzı dramatik anlatıyı ilginç biçimde çarpıştıran Strung, yoğun senaryosuyla boğuşan ama atmosferiyle merak uyandıran bir tür denemesi sunuyor.",
    rating: "2.5/5",
    image: strungImg,
    body: `Blumhouse'nin montaj hattındaki klostrofobik gerilimi,Tyler Perry's'nin şuruplu melodram geleneğiyle aynı potada eridiğinde ne olur?*Strung*bu soruyu izleyicinin hem ilgisini çeken hem de kafasını karıştıran garip bir tür karışımı olarak sunarak yanıtlıyor.When theFilm boyunca hissedilen ürkütücü atmosfer sonunda yerini aile trajedilerine ve bitmek bilmeyen diyaloglara bırakıyor. İzlediğimiz şeyin bir korku filminden ziyade "korku tadında bir pembe dizi" olduğunu fark ediyoruz.

Yönetmenlik seçimlerinin düşük bütçenin kısıtlamalarıyla birleştiğinde ilginç bir görsel dil ürettiğini söylemek doğru olur. Kapalı alanlardaki dar kamera açıları, karakterlerin psikolojik tuzağa düşmelerini başarılı bir şekilde yansıtıyor. Ancak bu görsel çaba, beceriksiz bir senaryo tarafından boğuluyor. Hikaye sanki sekiz bölümlük bir mini dizi için tasarlanmış ve ardından son dakika kurgu odası kesintileriyle 90 dakikaya sıkıştırılmış gibi geliyor. Bu, karakter gelişiminde boşluklara ve asla gerçekleşmeyecek ani duygusal değişimlere neden olur.

Performanslar tam tersine bir çalışmadır.Against thebaşrolün türe uygun, abartılı performansı, yardımcı karakterlerin sıradanlığı, gündüz dizi oyunculuğuna daha yakın olması, sahneler arasındaki ton uyumsuzluğunu keskinleştiriyor. Bir sahnede iliklerinize kadar donuyorsunuz; hemen ardından öğretici bir monolog sizi filmin gerçekliğinden çekip çıkarıyor. Bu uyumsuzluk filmin hem en büyük gücü hem de en büyük zayıflığıdır.

Teknik olarak ses tasarımı ve ışıklandırma, prodüksiyonun sınırlamalarını maskeleme konusunda iyi bir iş çıkarıyor. Gölge kullanımı ve ani ses patlamaları, hayranların aradığı atlama korkusu türünü besliyor. Ancak hikayenin kalbindeki trajik sır ortaya çıktığında, gizem yerini asla finaline ulaşamayan dramatik bir döngüye bırakıyor. Senaryonun yoğunluğu izleyiciye nefes alacak alan bırakmıyor ve gizemin süreçteki rahatsız edici etkisini azaltıyor.

In theend,*Strung*tür deneylerinden hoşlananlar ve "suçlu bir zevk" arayanlar için kötü bir seçim değil. Sinematografik açıdan muhteşem anlara sahip olsa da, dağınık hikaye anlatımı ve ani tür değişimleri, onun kalıcı bir izlenim bırakmasını engelliyor. KendiniziBlumhouse'nin karanlık koridorlarında yürürken, anidenTyler Perry's'in gözyaşlarıyla ıslanmış oturma odalarında bulurken bulmaya hazır olun. Yenilikçi bir sinematik ses arayanlar için bu karışım biraz fazla sarsıcı gelebilir.`,
  },
  {
    slug: "the-mission",
    origTitle: "The Mission",
    title: "“The Mission” — Karanlığı Neşterle Yaran Bir Film",
    excerpt: "Gazze’nin karanlık hastane koridorlarında umutsuzluğa meydan okuyan cerrah Muhammed Tahir’in hikâyesi, insan onurunun en saf ve en sarsıcı belgesine dönüşüyor.",
    rating: "4.5/5",
    image: missionImg,
    body: `İnsanların birbirlerine yaptıklarını izlemek her zaman zordur, ancak*The Mission*, o karanlığın tam kalbinde yeşeren bir dayanıklılığın anatomisini önümüze koyarak beklentilere meydan okuyor. Film, savaşın harap ettiği Gazze'de, bombardıman seslerinin hastane koridorlarında yankılandığı kaosun ortasında, cerrahMuhammed Tahir andekibinin yürüttüğü olağanüstü mücadeleyi mercek altına alıyor. Yönetmen izleyiciyi sadece savaşın yarattığı yıkıma değil, o yıkımın ortasında titreyen elleriyle yaraları diken cerrahların nefesine de ortak ediyor.

Belgeselin en dikkat çekici özelliği, trajediyi estetik bir nesneye dönüştürmek yerine, ham, sarsıcı bir gerçeklikle sunması. Sinematografi, klostrofobik hastane odaları ile gökyüzünden yağan ateşin geniş açılı görüntüleri arasında sürekli geçiş yaparak kalıcı bir rahatsızlık hissi yaratıyor. Elektrik kesintileri sırasında cep telefonu ışığıyla yapılan ameliyatlar, yalnızca teknik bir eksikliği değil, insanlığın kendi ışığının ne kadar sönükleştiğini de simgeliyor.Muhammed Tahir's'nin yüzüne kazınan her yeni derin çizgi, belgeselin anlatım ağırlığını herhangi bir diyalogdan daha iyi taşıyor.

Film, bir yönetmen tercihi olarak mesafeli ama vicdanlı bir duruşu benimsiyor. Kamera sadece cerrahların başarılarını değil aynı zamanda çaresizlikten doğan omuzlarının sessiz çöküşünü de kaydediyor. Elindeki kıt tıbbi malzemeyle kimin yaşayıp kimin öleceğine karar vermek zorunda kalan bir cerrahın karşılaştığı etik uçurum, izleyicinin boğazına yerleşiyor. Film, "dayanıklılığın" bedelinin gerçekte ne kadar ağır olduğunu göstermek için kahramanlık mitini bir kenara bırakıyor.

Filmin kurgusu kaosun ritmini takip ediyor. Hızlı kesintiler, koridorlardaki sedyelerin takırtıları ve dışarıdaki patlama sesleri izleyiciyi bir an bile dinlendirmiyor. Ancak bu gürültünün ortasında Tahir'in hastalarına fısıldadığı teselli edici birkaç kelime filmin duygusal omurgasını oluşturur. Bu karşıtlık, filmin yalnızca bir savaş günlüğü değil, aynı zamanda yaşama isteğinin derin bir manifestosu olmasını da sağlıyor.

In thesonu,*The Mission*kolay bir izleme değil; bazen bakmak istediğimizden daha da zordur. Ama sinemayı bir tanıklık biçimi olarak kabul edersek bu belgesel kaçırılmaması gereken bir kayıt olarak duruyor. MeslektaşlarınınMuhammed Tahir andaracılığıyla anlattığı hikaye, siyasetin çok ötesinde, etten kemikten, umut ve yıkımın en saf haliyle buluştuğu yerdir. Modern dünyanın sağırlaştığı çığlıkları steril salonlara taşıyan bu yapım, jeneriği geldikten sonra da uzun süre sizlerle birlikte kalacak.`,
  },
  {
    slug: "little-brother",
    origTitle: "Little Brother",
    title: "“Little Brother” — Vaat Ettiği Tuhaflıktan Uzak, Kaosu Ehlileştirilmiş Bir Yol Hikâyesi",
    excerpt: "Eric André’nin dizginlenemez enerjisini ehlileştiren bu yol hikâyesi, kara komediyle aile draması arasında kararsız kalmış, unutulabilir bir Netflix deneyimine dönüşüyor.",
    rating: "2.5/5",
    image: littleBrotherImg,
    body: `Sherman Paynetarafından yönetilen*Little Brother*, kağıt üzerindeEric André's'nin kaotik, absürt mizah anlayışını modern bir yol hikayesiyle harmanlamayı vaat ediyor. Ancak beyazperdede gördüklerimiz bu potansiyelin oldukça gerisinde kalıyor; güvenli sularda yüzmek ve nihayetinde hedeflediği keskin komediyi yakalamaya çalışmak.Though thefilmi, intihara meyilli ağabeyini (Philip Ettinger) eve götürmek zorunda kalan küçük bir erkek kardeş (Eric André) arasındaki endişe verici ilişkiye odaklanıyor; bu dramatik temel, komedi unsurlarıyla hiçbir zaman organik bir bağ kurmuyor.

Eric André, daha kontrollü bir performans için sınırları zorlayan, rahatsız edici, zekice "anti-komedi" TV kişiliğinden kurtulmaya çalışıyor. Ancak sorun tam olarak burada başlıyor:Andréşaşırtıcı derecede "normal" kaldığında, onun patlamaya hazır enerjisine alışkın olan izleyiciler bir şeylerin eksik olduğunu hissediyor. Yazıldığı gibi karakter,André'nin doğal yeteneklerine yeterince yer vermiyor ve oyuncuyu bir tür evcilleştirilmiş rolle sınırlı bırakıyor.Philip Ettingerdramatik ağırlığı omuzlamaya çalışıyor, ancak ikisi arasındaki kimya asla olması gerektiği gibi kıvılcımlanmıyor.

Looking at theyönetmenlik seçimleri,Payne'nin görsel dili büyük ölçüde oldukça standart bir bağımsız film estetiğine sıkışmış durumda. Yol boyunca karşılaşılan manzaralar ve seçilen kompozisyonlar hiçbir zaman tür klişelerinin ötesine geçmediği gibi hikayenin duygusal tonunu yükseltecek görsel buluşlar da sunmuyor. Kardeşlerin iç yolculuklarına eşlik etmek yerine, sinematografi soğuk kalıyor, daha çok karakterlerin yolculuğunuA tonoktasından B noktasından kaydeden bir gözlemciye benziyor.

On thesenaryo tarafında en büyük zayıflık kara komedi ile aile draması arasındaki dengeyi kuramamaktır. Bazı sahnelerde film gerçek bir psikolojik derinliğin peşinde koşuyor, ancak hemen ardından bu derinliğin altını oymak için zayıf şakalar yapılıyor.Eric André'den beklediğimiz "tuhaflık" dozu o kadar düşük ki film ne tam anlamıyla absürt bir komedi ne de ilgi çekici bir karakter çalışmasıyla sonuçlanıyor. Bu arada diyalog çoğunlukla tahmin edilebilir, öğretici bir tonda ilerliyor.

In theend,*Little Brother*tür tutkunları için vakit geçirme olanağı sunuyor ancak hafızada çok az iz bırakıyor.  KarşımızdakiWhat's in,Eric André'shayranlarını tatmin edemeyecek kadar uysal ve bağımsız sinema hayranlarını şaşırtamayacak kadar kalıplaşmış. Yüksek potansiyele sahip bir ikilinin vasat bir senaryonun içinde kaybolmasını izlemek utanç verici. Film ne yazık kiNetflix'nin kütüphanesine hiçbir zaman kendi kaosunu yaratmayı başaramayan, her anlamda "küçük" kalan bir giriş olarak çıkıyor.`,
  },
  {
    slug: "jackass-best-and-last",
    origTitle: "Jackass: Best and Last",
    title: "“Jackass: Best and Last” — Acıya ve Kahkahaya Grotesk Bir Veda",
    excerpt: "Johnny Knoxville ve ekibi, bu veda filminde acının ve kahkahanın sınırlarını son bir kez zorluyor; sinema tarihinin en pis ama en içten dostluk hikâyelerinden birini sunuyor.",
    rating: "4/5",
    image: jackassImg,
    body: `Kusma, kan, idrar ve çatırdayan kemiklerin sonsuz müziği... Sinema tarihinin en "kakafoni" ve alışılmadık topluluklarından biri olan ekip,*Jackass Forever*(*(Jackass: Best and Last) ile sadece bir veda değil, yaşlanmanın ve dostluğun mümkün olan en grotesk portresini sunuyor. Yirmi yılı aşkın bir süredir bu ekip, fiziksel sınırları ve sosyal görgü kurallarını zorluyor ve ekrandaki son danslarında izleyiciyi bir kez daha o meşhur "bakmaya korkmak ama bakışlarını başka tarafa çevirememek" ikileminin içinde bırakıyorlar.

Director Jeff Tremainebu son derlemede nostaljiyi saf anarşiyle ustalıkla harmanlıyor. Film yalnızca geçmişteki çılgın gösterilerin anıldığı bir film değil; daha doğrusu, ellili yaşlarındaki erkeklerin hala on beş yaşındakiler gibi birbirlerine şakalar yapan hüzünlü ama derinden yaşamı onaylayan yanını gösteriyor.Johnny Knoxville's'nin ağaran saçları veSteve-O's'nin artık yorgun olan vücudu, yaptıkları gösterilerin ağırlığını (ve saçmalığını) yalnızca artırıyor. Sinematografik olarak, yüksek çözünürlüklü kameraların artık bu tür "çirkin" ayrıntıları (arı sokmalarının veya mide bulantısına neden olan sıvıların yakın çekimleri) bu kadar net yakalayabilmesi, filmin gerçeküstü kalitesini güçlendiriyor.

Jackass evreninde "oyunculuk"tan bahsetmek saçma gelebilir ama burada sergilenen şey bir tür "adrenalin oyunculuk". Mürettebatın yeni üyeleriyle eski üyeleri arasındaki kimya şaşırtıcı derecede taze.Knoxville'nin liderliği ve korkusuzluğu mürettebatın geri kalanını hizada tutuyor.But theBu filmde fark ettiğiniz en büyük şey, bu ekibin birbirlerine olan derin sevgisidir. Birbirlerine bu kadar acı veren insanların aynı zamanda birbirlerinin en büyük destekçileri olduğunu izlemek, Jackass'ı sadece bir "şaka gösterisi" olmaktan çıkarıp bir kabile ritüeli gibi bir şeye dönüştürüyor.

Filmin en büyük gücü izleyiciyi dürüst bir katarsise sürüklüyor. Dünyanın kendisini bu kadar ciddiye aldığı ve politik doğruculuğun her köşede nöbet tuttuğu bir çağda Jackass ekibi orta parmağını kaldırıp şöyle diyor: "Hala buradayız ve hâlâ çok gülünç durumdayız." Zayıf noktası elbette ki bu tür bir mizahın herkese hitap etmemesidir.For thetitiz olanlar ya da sinemayı yalnızca entelektüel derinlik için bir araç olarak görenler için bu yapım bir kabus gibi gelebilir.

In theson, bu veda, yerinde, gürültülü ve pis.The Jackassekibi acıyla kahkahanın kardeş olduğunu bir kez daha kanıtlıyor. Ekrandan uzaklaştıkça bize bıraktıkları miras, biraz morarma, birkaç eksik diş ve hepsinden önemlisi ne olursa olsun gülebilmenin paha biçilemez hafifliği. Onları özleyeceğiz; ancak muhtemelen hastane faturalarını ve yaralanmalarını değil ama o sonsuz, çocuksu enerjilerini özleyeceğiz.`,
  },
  {
    slug: "the-odyssey-ilk-tepkiler",
    origTitle: "The Odyssey",
    title: "“The Odyssey” İçin İlk Tepkiler: “Hantal”, “Muhteşem” ve “Peter Jackson’ın Lord of the Rings’i Gibi”",
    excerpt: "Christopher Nolan’ın uzun zamandır beklenen “The Odyssey” filminin prömiyeri Londra’da yapıldı. Yunan mitolojisinin dehşetini cesurca kucaklayan bu dev yapım için eleştirmenlerin ilk tepkileri büyük ölçüde olumlu.",
    rating: "Early reactions",
    image: "/__l5e/assets-v1/a4fd62bf-4318-469a-8990-5f1bab6fff38/cf9640eb777c.webp",
    body: `Christopher Nolan's'Oppenheimer'dan sonraki yeni destan 'The Odyssey'nin prömiyeri 6 Temmuz'da Londra'da yapıldı; geniş gösterim 17 Temmuz'da başlıyor.IMAXbiletleri zaten tükendi ve düzenli gösterimler de hızla dolabilir.Matt Damon,Anne Hathaway,Tom Holland,John Leguizamo,Robert Pattinson,Lupita Nyong'o and'nin rol aldığı filmin tam incelemeleri henüz yayınlanmadı; ancak eleştirmenlerin sosyal medyadaki ilk izlenimleri, filmin beklentileri karşılayacağına dair güçlü sinyaller veriyor.

Damon'ninkiler de dahil olmak üzere ekrandaki performanslar geniş çapta övülüyor; ama eleştirmenleri asıl heyecanlandıran şey yapımın büyüklüğü ve titiz detayları.According to The Hollywood Reporter's Aaron Crouch, filmde "Nolan'nin baştan sona inşa ettiği ilk korku sekansı" yer alıyor.Polygon's Jacob Kleinman, ayrıntılara gösterilen özeni doğrudan 'The Lord of the Rings' ile karşılaştırır.IndieWire's David Ehrlich, filmin "A-tier Nolanolamayacak kadar hantal" olduğunu söylese de filmin 'Oppenheimer' kadar acımasız olmadığını belirtiyor.

According to Tom Page'sdeğerlendirmesi, 'The Odyssey'hem baş döndürücü bir gösteri hem de zekice, yıkıcı bir uyarlama;Nolan'nin olayları psikolojik olarak sorgulama şekli, ölçeğin kendisinden bile önce şaşırtıcıdır ve onun "canlandırıcı derecede modern" bir yorum olarak adlandırdığı sonuçla sonuçlanır.Andrew J. Salazarfilmi "şaşırtıcı bir başarı" olarak nitelendiriyor veNolan'nin Yunan mitolojisinin dehşetini cesurca kucaklarken hikayeyi zarif bir şekilde çağdaş dile uyarladığını yazıyor.

Herkes buna "kusursuz" demiyor; ancak büyük bütçeli bir yaz filmi için bu, şu ana kadar umulabilecek kadar olumlu bir karşılama. Bu mutlaka ilk vızıltıyı karşılayacağı anlamına gelmez, ancak kesinlikle kötü bir işaret de değildir. Tam sürüm önümüzdeki hafta ekranlarda olacak; o zamana kadar, "her şey bitti" ve "geri döndük" arasında birkaç tur daha geçireceğiz gibi görünüyor.`,
  },
  {
    slug: "good-luck-have-fun-dont-die",
    origTitle: "Good Luck, Have Fun, Don't Die",
    title: "“Good Luck, Have Fun, Don’t Die” — Bir Lokantada Başlayan Zaman Yolculuğu Karnavalı",
    excerpt: "Aksiyon, komedi ve bilimkurguyu harmanlayan film, Sam Rockwell, Juno Temple ve Haley Lu Richardson’ı Los Angeles’ın simgeleşmiş bir lokantasında buluşturuyor; gelecekten geldiğini iddia eden bir adam, müşterileri rehin alıp onları dünyayı kurtaracak beklenmedik bir ekibe dönüştürüyor.",
    rating: "3.5/5",
    image: goodLuckAsset.url,
    body: `2 saat 14 dakikada*Good Luck, Have Fun, Don't Die*, başlığının vaat ettiği enerjiyi asla kaybetmiyor.In the'nin ikonik birLos Angelesgece yarısı lokantasında geçen açılış sekansı, "Man From the Future" adlı isimsizSam Rockwell'sbir silah çeker ve oturan müşterileri rehin alır. O, paranın ya da intikamın peşinde değil; dünyayı kurtarabilecek "muhtemel adayları" arıyor.

Rockwell, kariyerinin bu aşamasında tam da vermesi gereken performansı sunuyor: yarı deli, yarı melankolik, tamamen karizmatik.Juno Temple's Susanfilmin şüpheci sesi olarak başlıyor;Haley Lu Richardson's Ingridgrubun en tuhaf üyesi olmasına rağmen grubun duygusal çekirdeği haline geliyor. Yemek masasındaki üçlü sohbet filmin en iyi 20 dakikasıdır.

Yönetmen bilimkurguyu arka plan dokusu olarak kullanıyor; asıl konu, rastgele insanların ortak bir amaç etrafında toplandıklarında kendilerinde keşfettikleri şeydir.When theAksiyon geliyor, tempoyu hiç yavaşlatmıyor ama bilmiş bir gülümsemeyle birlikte geliyor: Bir motel odasında geçen bir kovalamaca sahnesi, filmin türden tam olarak almak istediği şeyi anlatan mini bir manifesto gibi oynuyor.

Sonuç: Genellikle kendi kuyruğunu kovalayan, ancak son derece keyifli bir yaz alternatifi olan, R dereceli, biraz kaotik bir film. Gişe rekorları kıran bir yorgunluktan şikayetçiyseniz, restorana uğrayın; fatura çok yüksek olmayacaktır.`,
  },
  {
    slug: "project-hail-mary",
    origTitle: "Project Hail Mary",
    title: "“Project Hail Mary” — Ryan Gosling’in Cazibesiyle Ayakta Kalan Bir Uzay Kumarı",
    excerpt: "Andy Weir’ın çok satan romanından uyarlanan bu son çare uzay macerası, içten bir ciddiyetle çocuksu muziplik arasında gidip geliyor; ama Gosling’in doğal karizması gemiyi güvenli limana ulaştırıyor.",
    rating: "3/5",
    image: projectHailMaryAsset.url,
    body: `Andy Weir's'nin çok satan bilimkurgu romanından uyarlanan*Project Hail Mary*, Amerikan futbolu "Hail Mary" geçişinden sonraSun. Named'yi söndüren uzaylı bir mikrobu durdurmak için Dünya'nın son umudu olarak uzaya fırlatılan bir görevin hikayesini anlatıyor. Bu görev, adından da anlaşılacağı gibi, başka seçeneği olmayan uzak bir ihtimal.*The Lego Movie*ve*Spider-Man: Into the Spider-Verse*Phil Lord and Chris Millerekibinin yönetmenliğinde, filmin tonunun şakacı, yaramaz, çocuksu bir çizgi taşıması şaşırtıcı değil.

Ryan Gosling, moleküler biyologDr. Ryland Graceolarak rolünü tam bir rahatlıkla oynuyor: Uyarılmış bir komadan, dağınık uzun saçları, dağınık bir sakalı ve neden orada olduğuna dair sıfır hatırayla uyanıyor. Mürettebatın geri kalanı öldü; Görevi hem oraya nasıl geldiğini hem de insanlığı nasıl kurtaracağını bulmaktır.Gosling'nin ekrandaki zahmetsiz büyüsü, filmin daha yavaş uzamasını ve zaman zaman dikkat dağıtıcı derecede hafif tonunun affedilmesi kolay olmasını sağlıyor.

Filmin gerçek kalbi,Grace'nin, mürettebat kayıtlarında "Rocky" olarak belirtilen, taş gövdeli, örümceğe benzeyen bir uzaylıyla kurduğu tuhaf dostlukta atıyor.Once Grace'syazılımı,Rocky'nin iletişimini Hulk konuşmasına çevirir ("Rockydüzeltme", "Rockyyardım"), film*E.Tarasında sallanmaya başlar.*nostaljisi ve*The Martian*'nin neşeli mühendislik-porno enerjisi.Sandra Hüller's'nin soğukkanlı Alman teknokratıEva Stratt'nin alevlere girip çıktığı geçmişe dönüşler, senaryoya ara sıra biraz ağırlık katmaya çalışıyor.

Yine de bu geri dönüşlerin dramatik işlevi her zaman belirsiz kalıyor.Grace'nin gerçekten bir şeyleri hatırlayıp hatırlamadığı veya yönetmenlerin bu sekansları sadece çerçeveyi değiştirmek için mi kullandığı belli değil.Nolan'nin*Interstellar*'sinin parçalanmış harikasını veya Spaihts'in*Yolcuları*'nin romantik izolasyonunu aramayın;*Project Hail Mary*bilinçli olarak daha hafif, daha eğlenceli bir yerde kalıyor. Bu seçim bazen akıllıca, bazen de "çocuk kanalı finali" gibi geliyor.

Sonuç:Weir'nin*The Martian*'sinin neşeli, esprili tonuna aşina iseniz, kendinizi evinizdeymiş gibi hissedeceksiniz.*Project Hail Mary*sinematik bir devrim değil; ancakHail MarypasıGosling, her şeye rağmen, alıcının ellerine toprak atar.`,
  },
  {
    slug: "avatar-son-hava-bukucu-s2",
    origTitle: "Avatar: The Last Airbender Season 2",
    title: "“Avatar: The Last Airbender” 2. Sezon — Netflix’in Canlı Çekim Uyarlaması Hâlâ Yolunu Bulamıyor",
    excerpt: "Netflix’in canlı çekim uyarlaması sürükleyici bir hikâye örgüsünü ele alıyor, ancak tempo ve mizah eksikliğiyle karanlık ışıklandırması yüzünden özgün animasyonun cazibesini bir kez daha ıskalıyor.",
    rating: "2/5",
    image: avatar2Asset.url,
    body: `Netflix'nin canlı aksiyon*Avatar: The Last Airbender*uyarlaması, orijinal Nickelodeon çizgi filminin neden bu kadar sevildiğini hâlâ anlayamıyor. İkinci sezon, birinci sezonun neredeyse tüm temel sorunlarını düzeltmeden geri getiriyor. Ana suçlu bir kez daha hızlanmadır. Hızlı, komik 20 dakikalık bölümlerle ortaokul izleyicisini hedefleyen animasyon dizisi, burada yedi bölüm, saat süren, olaylarla dolu bir yapıya sıkıştırılıyor. Bu daha olgun bir yorum yaratmaz; yalnızca daha ağır, daha ciddi bir versiyon yaratır ki bu kesinlikle kaynak materyale yapabileceğiniz en kötü şeydir.

Water Tribe'denKatara(Kiawentiio) veSokka'den (Ian Ousley) su bükmeyi öğrenenTwelve-year-old Avatar Aang(Gordon Cormier), sezonuEarth Kingdom. He'de seyahat ederek geçirir ve dört elementte de ustalaşacak bir toprak bükme öğretmenine ihtiyaç duyar ve gruba kör kızToph(Miyako) da katılır. şimdiye kadarki en canlı ve en yaramaz figür. Bu arada, Ateş Ulusu'nun güçleriEarth Kingdom'ye yayılırken, kahramanlarımız duvarlarla çevriliBa Sing Se. Thisşehrinin propaganda, gözetleme ve gizli polis üçgeninin ortasında kalır; orijinal serinin en akılda kalan olaylarından biridir; potansiyeli yadsınamaz.

Sorun tam olarak bu potansiyelin nasıl israf edildiğidir.Instead ofparlak renkler ve hızlı şakalar, karanlıkta çekilen uzun, yavaş diyalog sahnelerine takılıp kalıyoruz; neredeyse hiç mizah bulunmuyor. Cormier elinden geleni yapıyor amaAang'nin çocuksu çekiciliğini taşıması için ihtiyaç duyduğu komedi odası ona hiçbir zaman verilmedi.Bumi'nin (Utkarsh Ambudkar) nedenAang'yi öğretemediğini açıkladığı, çizgi filmde 45 saniyelik anlatımla sona eren bir kovalamaca sekansı olan sahne, gösteride karanlık bir odada üç dakikalık statik bir konuşmaya dönüşüyor. Hiç kimse, özellikle de 10 yaşındaki çocuklar, bir hikayenin bu şekilde anlatılmasından hoşlanmaz.

Yine de kayda değer bir güçlü not var:Zuko(Dallas Liu).Fire Lord'nin oğlu,Ba Sing Se'de amcasıIroh(Paul Sun-Hyung Lee) ile birlikte varsayılan bir isim altında yaşamaya çalışırken, kurtuluşun ilk kıvılcımlarını ateşlemeye başlıyor. Kendini babasına kanıtlama arzusu ile kız kardeşiAzula'nin (Elizabeth Yu) zulmü arasında kalan bu genç figür, sezonun en ilgi çekici karakter çalışmasıdır. Ne yazık ki etrafındaki yardımcı kadro yeterince iyi yazılmadığındanZukobu ağırlığı neredeyse tamamen tek başına taşımak zorunda.

In thesonu,Netflix'nin*Avatarı*, M. Night Shyamalan'ın kötü şöhretli kötü film uyarlaması seviyesine düşmüyor - sadık oyuncu seçimi seçimleri en azından bu çıtayı temizliyor. Ancak popüler bir markadan yararlanmanın ötesinde var olma nedeni olduğunu söylemek zor. Karizmadan, tempodan yoksun ve sürekli loş ışıklı bu uyarlama, "çizgi film olmamayı" sanki başlı başına bir erdemmiş gibi sunuyor - ki öyle değil.`,
  },
  {
    slug: "cape-fear-apple-tv",
    origTitle: "Cape Fear",
    title: "“Cape Fear” — Apple TV Uyarlaması Selefinin Peşinden Giderken Kendini Kaybediyor",
    excerpt: "Javier Bardem ve Amy Adams’ın başrollerinde olduğu 10 bölümlük Apple TV uyarlaması, Scorsese’nin klasiğini hem taklit eden hem de ondan kaçmaya çalışan, kendi tonunu bir türlü bulamayan huzursuz bir gerilim.",
    rating: "2.5/5",
    image: capeFearAsset.url,
    body: `Herhangi bir aktörden daha önceRobert De Nirotarafından oynanan bir role adım atmasını istemek zaten adil değil - özellikle de bu karakterMax Cady. In theşiddetli olduğunda 1991*Cape Fear*,De NiroCady'ye o kadar güçlü bir kibir, öfke ve Güney cazibesi kattı ki, karakter hem dehşet verici hem de bakışlarını kaçırılması imkansız olmayı başardı.Nick Antosca(*Channel Zero*,*A Friend of the Family*) tarafından oluşturulan yeni 10 bölümlükApple TVmini dizisi,Javier Bardem'yi bu koltuğa oturtuyor.

Bardem, zor figürleri canlandırma konusunda deneyimli iyi bir aktör; sonuçtaAnton Chigurh. As Cady'yi yaratan adam bu; manipülatif, rahatsız edici, baştan çıkarıcı ve kaypak. Ancak performansı hiçbir zamanDe Niro's'nin sahip olduğu lazer odağına sahip olmadı; aksanına kadar bile sallanıyor. Çoğunlukla İspanyolcadan etkilenen konuşmaya dayanan bir performans, bazen Güney'in çekiciliğine, bazen de*Mare of Easttown*'ye daha yakın bir şeye kayıyor. Her zamanBardem'nin rol yaptığını hissedersiniz;De Niroile durum asla böyle olmadı.

Antosca andYazarları, 128 dakikalık orijinal filmi yaklaşık 10 saate çıkarmak için hikayeye ciddi eklemeler yapmışlar. Bu versiyondaCady, temyizde mahkûmiyeti bozulan karısını ve oğlunu öldürmekle suçlanan bir adamdır. Ailenin reisi bu sefer bir kadın:Cady in'nin cinayet davasını temsil eden ve şu andaSouthern Justice Legal Project. Heradlı kurgusal bir kar amacı gütmeyen kuruluşta çalışanAnna Bowden(Amy Adams) kocasıTom(Patrick Wilson) bu davanın savcısıydı - yaniCady'nin her ikisiyle de hesaplaşması gereken bir hesap var. Derin depresyonla boğuşan genç kızlarıNatalie(Lily Collias) ve üvey oğullarıZack(Joe Anders),Cady to'nin akıllarına girmesi için yeni dijital yollar açar.

Dizinin asıl sorunu bu genişlemede ortaya çıkıyor. Herkes "doğruyu yapmak" için o kadar çabalıyor ki bu çaba hikaye anlatımını gölgede bırakıyor.Adams'nin performansı sağlam;Anna'nin özel bir hapishane olanCEO ofile yüzleştiği jilet gibi keskin sahne yılın en tatmin edici anlarından biri.But thekarakteri o kadar içine kapalı ki onu asla tam olarak tanıyamazsınız.  Bu aradaCollias and Anders, kendilerini tamamen farklı bir diziye aitmiş gibi hissediyorlar; üzerlerindeMax Cadykaygısı olmadan yaşayabilen iki sessiz genç. Görsel dil doğrudanScorsese'den ödünç alınmıştır: Hitchcock tarzı hızlı yakınlaştırmalar, X-ışını aydınlatması veBernard Herrmann-styleskoru;De Niro'nin sinema salonundaki meşhur kahkaha sahnesi bile burada hafif rötuşlarla yeniden çekildi; bu seçimin yapılmaması gerektiğini düşünüyorum.

Aralarında*Fargo*'nin de bulunduğu bazı filmden diziye uyarlamalar, bağımsız bir drama oluşturmaya devam ederken kaynak materyallerine göz kırpmayı başardılar.*Cape Fear*aynı yaratıcı cesarete sahip değil. Fena değil ama biraz daha fazlasını bekliyordum avukat.`,
  },
  {
    slug: "the-boroughs",
    origTitle: "The Boroughs",
    title: "“The Boroughs” — Alfred Molina ve Geena Davis Önderliğinde, Spielberg Tadında Eğlenceli Bir Bilimkurgu",
    excerpt: "New Mexico çölündeki bir emekli yerleşiminde canavarların ve şirket gözetiminin peşine düşen deneyimli oyuncu kadrosuyla iç ısıtan, yer yer temposu düşse de son derece sevimli bir Netflix dizisi.",
    rating: "3.5/5",
    image: boroughAsset.url,
    body: `Netflix'nin*The Boroughs*, çoğu dizinin yalnızca hayal edebileceği türden bir kadroyla geliyor ve bu arada,Alfred Molina and Geena Davisgibi sevilen karakter aktörlerinin yardımcı rollere doldurulduğunu görmeye alışkın olanTV. We'retüründe yaşlı ayrımcılığına dair oldukça keskin bir eleştiri sunuyor; onların kahraman olarak liderlik etmelerini izlemek nadir bir zevktir.*The Boroughs*, ölümcül bir komployu çözmeye çalışan bir grup yaşlı vatandaşı Spielberg tarzı bir maceranın merkezine yerleştirerek bu kalıbı kırıyor.

Akıl hastanelerinin korku sinemasının vazgeçilmezi olmasının nedeni, bu emeklilik topluluğunun bir gizeme bu kadar iyi uymasının nedeni ile aynı: Otorite figürlerine güvenemezsiniz.New Mexicoçölünün ücra bir köşesine sıkışmış olan İlçeler, konutlardan spor salonuna ve yerel polis gücüne kadar her şeyin tek bir şirkete ait olduğu bir "kasabadır". Her evde bir gözetleme aracı olarak da kullanılabilen sahte bir Siri cihazı bulunur. Yaşlı bir sakin şüpheli koşullar altında ölürse (örneğin, ince, kimliği belirsiz bir yaratığın saldırısına uğradıktan sonra), bunu halının altına süpürmek yeterince kolaydır. Sonuçta, yaşlı insanlar her zaman ölürler ve unutkanlıkları, herhangi bir görgü tanığının ifadesini "kafa karışıklığı" olarak nitelendirmek için hazır bir mazeret oluşturur.

Kahramanımız, yeni dul kalmış emekli mühendisSam Cooper(Molina), hiç de kafası karışık bir tip değil.Moving to the Boroughskarısının fikriydi; Beklenmedik ölümünün ardından kızıClaire(Jena Malone) burada yeni bir hayat kuracağını umuyor.But Sam, ne Stepford karısı gibi neşeli komşularına ne de çapkın parti hayvanıJack'nin (Bill Pullman) golf, dedikodu ve tıbbi esrar rutinine pek uymuyor.Geena Davis'skarizmatik resim eğitmeni,Alfre Woodard'sciddi eski gazeteci,Clarke Peters's New Age-inclinedtalip ve*American Horror Story*mezunuDenis O'Hare'sölümcül hasta emekli doktor - bu topluluğun her üyesi ekran başında geçirilen her saniyeyi kazanıyor.

Creators Jeffrey Addiss and Will Matthews(*The Lord of the Rings: The War of the Rohirrim*), yaratık özelliği araştırması olarak başlayan şeyi yavaş yavaş kurumsal gücün rahatsız edici bir portresine dönüştürüyor. Ana karakterler, sözde kendi çıkarlarını gözeten insanlar tarafından gaza getiriliyor.While theÖzel güvenlik firmasıRenee'nin özensiz gardiyanı (Davis), endişelerini bir şakayla geçiştirmek için suçu bildirir,Sam andkomşuları da demans tanısıyla hastaneye kaldırılma tehdidini hissederler. Bu fikir daha da ileri gidebilirdi; Dizinin konusu ciddileştikçe gizli tünel sistemleri ve morg soygunları gibi daha eğlenceli materyallere yöneliyor.

In theend,*The Boroughs*, ana kötü karakterini ilk bölümden pratik olarak tahmin edebileceğiniz ve ikinci yarıda temposu düşen ancak oyuncu kadrosu sayesinde sonuna kadar keyifli kalan bir*X-Files*/*Twilight Zone*melezidir.Molina'nin nihayet kariyerinin bu kadar sonlarında gerçek bir başrol oynaması, izlemek için başlı başına yeterli bir neden.`,
  },
  {
    slug: "star-city",
    origTitle: "Star City",
    title: "“Star City” — For All Mankind’ın Sürükleyici Yan Dizisi, Soğuk Savaş Paranoyasını Bilimkurguya İşliyor",
    excerpt: "Rhys Ifans ve Anna Maxwell Martin’in başrollerinde olduğu bu For All Mankind yan dizisi, KGB’nin gölgesindeki Sovyet uzay programını keşfederek daha karanlık, psikolojik yönü daha güçlü bir bilimkurguya kapı aralıyor.",
    rating: "4.5/5",
    image: starCityAsset.url,
    body: `*For All Mankind*'nin alternatif tarih önermesi her zaman tamamen ikna edici bir dünyadan ziyade bir istek listesine daha yakın hissettirmiştir.In the Apple TVserisinin evreninde,USSR,U.S. to the Moon'yi yendi ve bu şok, sonundaNASA to'nin tamamı kadınlardan oluşan bir astronot birliği kurmasına yol açan bir domino etkisi yarattı.Over theonlarca yıldır ırk ve cinsiyet eşitliği kendi zaman çizelgemizde olduğundan çok daha hızlı ilerlemektedir; 1990'lara gelindiğinde insanlıkMoon and MarsveU.S'ye yerleşti. lezbiyen bir başkanı var Dizinin resmi olmayan misyonu her zaman*Star Trek*'nin ütopik geleceğine doğru gerçekçi bir yol çizmek olmuştur - bazen bu, var olmayan bir Amerika için propaganda gibi geldi.

Yeni yan ürün*Star City*, 1969Soviet MooninişiyleCold War. Opening'nin diğer tarafından o zaman çizelgesinin en eski yıllarını anlatarak saati geri sarıyor; seri bizi*For All Mankind*'nin parlak, iyimser atmosferinden çok farklı bir dünyaya sürüklüyor:KGBHikayenin merkezinde kozmonotların kahramanlıkları kadar paranoya da yer alıyor. Aynı çekirdek ekip -Ronald D. Moore,Ben Nedivi and Matt Wolpert- bu kez pembe dizi unsurlarını sıkı, psikolojik bir drama adına kesiyor. Bilimkurgu yeterliliği pornosu hâlâ var ama çok daha baskıcı bir atmosfer altında.

Leading thekadrosunda yer alanRhys Ifans, uzay programının muhteşem ancak yeterince takdir edilmeyenChief Designer. He's'si sürekli olarakKGB and thehükümetinin müdahalesine karşı savaşırken, kederli birGary Oldman-caliberperformansı sunuyor. Onun karşısında,*Line of Duty*izleyicileri tarafından bilinenAnna Maxwell Martin, tüyler ürpertici derecede acımasız birKGBsubayı olanLyudmilla Raskova'yi canlandırıyor.Star City'nin bodrumundaki havasız gözetim ofisini yönetiyor; burada genç kadınlar, insanların evlerine yerleştirilen böceklerin kayıtlarını yazıya dökmek için saatler harcıyor.Ambitious Irina Morozova(Agnes O'Casey),Raskova'nin iyi niyetinde kalabilmek için kozmonotValya Mironov(Adam Nagaitis) ve eşiTanya'nin (Ruby Ashbourne Serkis) özel hayatlarını haber yapmak zorundadır.

*For All Mankind*ile kaçınılmaz karşılaştırma, iki dizinin feminist bilim kurgu olarak nasıl sıralandığına büyüleyici bir bakış sağlıyor.In theorijinal, kadınlar sistemin önyargılarını yıktı ve dünyayı değiştirdi;*Star City*'nin başlangıç ​​noktası farklıdır.In the1970'lerin başında,USSR'nin uzay programı hâlâ erkek egemendir; ancakKGBofisleri ve kadın kozmonot programı - özellikleAlice Englert'sutangaçAnastasia Belikovaaracılığıyla - kadınların bazen Amerikalı meslektaşlarından daha büyük, bazen de onlarla aynı seviyede engellerle karşılaştığı incelikli bir tablo çiziyor.Valya, araştırma üssünde kendi hayatında sıkışıp kalan karısıTanya'nin ne kadar mutsuz olduğunu göremiyor;  Bu aradaAnastasia, devlete olan bağlılığına rağmen değil, devlete olan bağlılığı nedeniyle terfi alıyor ve kendisini tamamen farklı türde bir kafeste kilitli buluyor.

*Star City*kısa sürede ideal bir yan ürün olduğunu kanıtladı: bağımsız bir drama olarak kendi ayakları üzerinde dururken selefinin güçlü yanlarını da alıyor. Uzay yarışının onlarca yıllık geniş kronolojisini zaten bildiğimiz için, dizinin Sovyet programının dış dünyanın hiç görmediği kısımlarına odaklanmaktan başka seçeneği yok; bu da yazarların birinci sezonun omurgasını oluşturan nefes kesici bir gizli program icat etmesine yol açıyor. Sahte Rus aksanı gibi bariz tuzaklardan kaçınan ve Sovyet sisteminin kusurları ile onun içinde sıkışıp kalan sıradan insanlar arasında net bir çizgi çeken bu yapım,Apple TV's'nin son yılların en iyi bilim kurgu çalışmalarından biri olmaya hazırlanıyor.`,
  },
];

export const getReview = (slug: string) => REVIEWS.find(r => r.slug === slug);
