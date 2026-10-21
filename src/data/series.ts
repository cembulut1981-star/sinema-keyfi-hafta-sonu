import cluelessG1 from "@/assets/clueless-c1.webp.asset.json";
import cluelessG2 from "@/assets/clueless-c2.webp.asset.json";
import cluelessG3 from "@/assets/clueless-c3.jpg.asset.json";
import cluelessG4 from "@/assets/clueless-c4.jpg.asset.json";
import cluelessG5 from "@/assets/clueless-c5.jpg.asset.json";
import duttonAsset from "@/assets/dutton.jpg.asset.json";
import spiderNoirAsset from "@/assets/spider_noir.jpg.asset.json";
import capeFearAsset from "@/assets/cape_fear.jpg.asset.json";
import furiousG1 from "@/assets/furious-g1.png.asset.json";
import furiousG2 from "@/assets/furious-g2.png.asset.json";
import furiousG3 from "@/assets/furious-g3.png.asset.json";
import furiousG4 from "@/assets/furious-g4.png.asset.json";
import furiousG5 from "@/assets/furious-g5.png.asset.json";
import hotd1 from "@/assets/hotd3-1.jpg.asset.json";
import hotd2 from "@/assets/hotd3-2.jpg.asset.json";
import hotd3 from "@/assets/hotd3-3.jpg.asset.json";
import hotd4 from "@/assets/hotd3-4.jpg.asset.json";
import img_visionquest from "@/assets/news-empire-visionquest.jpg";
import robocopAsset from "@/assets/robocop-stevens.jpg.asset.json";
import lofCover from "@/assets/ew-line-of-fire-cover.jpg";
import lofG1 from "@/assets/ew-line-of-fire-g1.jpg";
import lofG2 from "@/assets/ew-line-of-fire-g2.jpg";
import lofG3 from "@/assets/ew-line-of-fire-g3.jpg";
import lofG4 from "@/assets/ew-line-of-fire-g4.jpg";
import lofG5 from "@/assets/ew-line-of-fire-g5.jpg";
import furFinaleCover from "@/assets/ew-furious-finale-cover.jpg";
import furFinaleG1 from "@/assets/ew-furious-finale-g1.jpg";
import furFinaleG2 from "@/assets/ew-furious-finale-g2.jpg";
import furFinaleG3 from "@/assets/ew-furious-finale-g3.jpg";
import wednesdayCover from "@/assets/wednesday-cover.jpg.asset.json";
import wednesdayGala from "@/assets/wednesday-gala.jpg.asset.json";
import wednesdayStill from "@/assets/wednesday-still.jpg.asset.json";
import wednesdayPromo from "@/assets/wednesday-promo.jpg.asset.json";
import jennaWednesdayPortrait from "@/assets/jenna-wednesday.jpg.asset.json";
import trueDetectiveS5 from "@/assets/true-detective-s5.jpg";
import trueDetectiveS5Scene from "@/assets/true-detective-s5-2.jpg";

export type SeriesItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  source: string;
  imdbRating?: string;
  customBadge?: string;
  customBadgeStyle?: "default" | "light";
  gallery?: string[];
};

export const SERIES: SeriesItem[] = [
  {
    slug: "true-detective-season-5-nicolas-cage-antonio-banderas",
    title: "True Detective 5. sezonunda Nicolas Cage ve Antonio Banderas'ı buluşturuyor",
    excerpt: "HBO'nun antoloji türündeki polisiye dizisi, çekimleri 2027'de başlayacak beşinci sezonu için sinemanın iki efsane ismiyle anlaştı.",
    customBadge: "HBO",
    customBadgeStyle: "light",
    image: trueDetectiveS5,
    source: "The Hollywood Reporter — October 16, 2026",
    body: `**True Detective**, bugüne kadarki en göz alıcı başrol ikilisiyle geri dönüyor: **Nicolas Cage** ve **Antonio Banderas**, HBO'nun antoloji dizisinin beşinci sezonunun kadrosuna resmen katıldı. Çekimlerin 2027'de başlaması planlanıyor.

![True Detective geleneğine uygun kasvetli bir atmosferde, yağmurlu bir gecede sokak lambasının altında duran iki dedektif](${trueDetectiveS5})

Bu seçim, diziyi ilk sezonuna damga vuran türden güçlü bir ikiliyle yeniden buluşturuyor. O sezon Matthew McConaughey ve Woody Harrelson, diziyi bir fenomene dönüştürmüştü. Son dönemdeki performanslarıyla övgü toplayan Cage ve Oscar adayı Banderas, yeni sezonu şimdiden ödül yarışının iddialı yapımları arasına taşıyor.

![Yeni sezonun serinin alametifarikası olan sis, el fenerleri ve küçük kasaba tedirginliğini öne çıkarması bekleniyor](${trueDetectiveS5Scene})

HBO olay örgüsüne dair ayrıntıları saklı tutuyor. Ancak dizinin antoloji formatı gereği Cage ve Banderas, yeni karakterler ve yeni bir mekânla kendi içinde tamamlanan bir hikâyenin merkezinde yer alacak. HBO'nun amiral gemisi dramalarından biri olmayı sürdüren dizinin bu çapta iki oyuncuyu kadrosuna katması, kanalın yapımı yeniden kültürel gündemin odağına taşıma iddiasını gösteriyor.

Yayın tarihi henüz açıklanmadı. Kameraların 2027'de kayda gireceği düşünüldüğünde, dizinin 2027 sonlarında ya da 2028'de izleyiciyle buluşması olası görünüyor.`,
  },
  {
    slug: "wednesday-season-3-wraps-production",
    title: "Wednesday'in 3. sezon çekimleri Dublin'de geçen yedi ayın ardından tamamlandı",
    excerpt: "Netflix çekimlerin tabutuna son çiviyi çakarken Jenna Ortega yeniden daktilosunun başında; Eva Green, Winona Ryder ve Lena Headey ise Nevermore'un giderek genişleyen çevresine katılıyor.",
    customBadge: "Netflix",
    customBadgeStyle: "light",
    image: wednesdayCover.url,
    source: "The Hollywood Reporter",
    gallery: [wednesdayGala.url, wednesdayStill.url, wednesdayPromo.url, jennaWednesdayPortrait.url],
    body: `*Wednesday*'in 3. sezon çekimleri, Dublin'de geçen yedi ayın ardından resmen tamamlandı. Netflix bu dönüm noktasını, Jenna Ortega'nın canlandırdığı kahramanı daktilosunun başında gösteren bir ilk bakış görseliyle duyurdu. Wednesday her zamanki gibi ifadesiz; bulunduğu oda ise dizinin imzası hâline gelen siyah-beyaz palete bürünmüş durumda.

![Jenna Ortega, 3. sezondan ilk karede yeniden daktilosunun başında](${wednesdayCover.url})

Çekimlerin tamamlanmasıyla dizi, doğaüstü efektlerle dolu yoğun bir post prodüksiyon sürecine giriyor. Netflix henüz yayın tarihini açıklamasa da dizinin 2027'de dönmesi bekleniyor. İlk sezonuyla platformun en çok izlenen İngilizce orijinal dizisi olan bir yapım için bu ara yine de epey uzun hissedilecek.

![Jenna Ortega, Wednesday'in 2. sezon etkinliğinde](${wednesdayGala.url})

3. sezon, önceki sezonun sonunda ortaya çıkan Addams ailesi gizemini derinleştiriyor. Eva Green, Morticia'nın uzun süredir kayıp kız kardeşi Ophelia Frump rolüyle kadroya katılıyor; böylece Tim Burton, gotik dünyalara içgüdüsel bir yakınlığı olan bir başka isimle daha buluşuyor. Winona Ryder, Tabitha rolüyle diziye dahil olurken Lena Headey, Chris Sarandon, Noah Taylor, Andrew McCarthy ve James Lance de yeni yüzler arasında yer alıyor.

![Wednesday, Nevermore Academy'de yeni bir gizemin peşine düşüyor](${wednesdayStill.url})

Geri dönen oyuncu kadrosu da son derece zengin: Emma Myers, Hunter Doohan, Joy Sunday, Moosa Mostafa, Georgie Farmer, Isaac Ordonez ve Billie Piper'ın yanı sıra Luis Guzmán, Catherine Zeta-Jones, Joanna Lumley ve Fred Armisen da dönüyor. Ortega yalnızca başkarakter olarak değil, yürütücü yapımcı olarak da görevini sürdürüyor.

![Dizi, 3. sezonda gotik oyuncu kadrosunu genişletiyor](${wednesdayPromo.url})

Dizinin yaratıcıları Alfred Gough ve Miles Millar, yaratıcı yönetimin başında kalırken Burton da yönetmen ve yürütücü yapımcı olarak geri dönüyor. Şubat 2026'da başlayan çekimler İrlanda'da sürdü; yapım, ilk sezonun Romanya çekimlerinin ardından buraya taşınmıştı.

![Jenna Ortega, Netflix'in Addams Family fenomeninin merkezinde kalmayı sürdürüyor](${jennaWednesdayPortrait.url})

Hikâyenin ayrıntıları hâlâ gizli tutuluyor. Ancak Ortega, yeni sezonun son sınıfın getirdiği huzursuzluklarla yüzleştiğini söylüyor: aile baskısı, yetişkinlik ve Wednesday Addams'ın bile geleceği için bir plana ihtiyaç duyabileceği gerçeği. Kameralar durdu; şimdi Nevermore'un sıradaki gizemi kurgu odasına taşınıyor.`,
  },
  {
    slug: "line-of-fire-peter-krause-hope-davis-cover-story",
    title: "The Line of Fire kadrosu, EW'ye özel kapak portrelerinde adalet dağıtıyor",
    excerpt: "Peter Krause diziyi “silah kuşanmış bir Parenthood”, yaratıcısı Joshua Safran ise “haftalık vakalarla ilerleyen bir Gossip Girl” diye tanımlıyor. Dört federal kuruma dağılmış tek bir aileyle, Hollingsworth'lerle tanışın.",
    customBadge: "NBC",
    customBadgeStyle: "light",
    image: lofCover,
    source: "Entertainment Weekly — Cover Story",
    gallery: [lofG1, lofG2, lofG3, lofG4, lofG5],
    body: `Çoğu aile bulaşıkları kimin yıkayacağını tartışır. Hollingsworth'ler ise yetki alanını. Joshua Safran'ın yarattığı NBC'nin yeni draması "Line of Fire"da bir aile; Secret Service, Department of Justice, FBI ve U.S. Marshals arasında dağılmış durumda. Yani yemek masasındaki her sohbet teknik olarak kurumlar arası bir brifing, her vaka da dönüp dolaşıp eve geliyor.

Merkezde, ailenin annesi Jane Hollingsworth rolünde Hope Davis ve Mike rolünde Peter Krause var. Çocukları da onların izinden giderek kolluk kuvvetlerine katılmış; şimdi birbirlerinin üstü oluyor, işlerini baltalıyor, zaman zaman da birbirlerinin şüphelilerini tutukluyorlar. Kadroda Clare rolünde Kat Cunning, Micah rolünde Tommy O'Brien ve Russell rolünde Taylor Bloom da yer alıyor. Bu kardeşlerin sadakati sürekli rozetleriyle soyadları arasında bölünüyor.

Krause, dizinin tonunu kendince şöyle özetliyor: "Silah kuşanmış bir Parenthood." Bu bir şaka ama aynı zamanda dizinin özeti. Yapım, bir aile dramasının sıcaklığını ve iğneleyici mizahını alıp çatışmaların, gözetleme araçlarının ve emir komuta zincirinde evdekilerin itiraf etmek isteyeceğinden çok daha yukarılara uzanan komploların içine yerleştiriyor.

Safran'ın tanımı biraz daha muzip: "Haftalık vakalarla ilerleyen bir Gossip Girl." Her hafta çözülecek vakalar var ama asıl keyif fısıltılarda: Kim kime ne söyledi, hangi kardeş bir dosyayı sakladı, hangi ebeveyn sessizce nüfuzunu kullandı? Komplo hikâyesi, haftalık vaka yapısının altında ilerliyor. Böylece dizi, izleyiciyi tatmin eden bir tutuklama sunarken aile üyelerinin birbirlerinden bölümün başındakinden daha fazla şüphe duymasını da sağlayabiliyor.

Oyuncular, EW'ye özel kapak portrelerinde bu ikiliği yansıttı: şık takımlar, rahat gülümsemeler ve kadrajdaki herkesin yine kadrajdaki bir başkasından bir şey sakladığı hissi. Davis ve Krause, onlarca yıllık sırları birlikte atlatmış bir çift gibi poz veriyor; genç Hollingsworth'ler ise şimdiden kendi sırlarını biriktiriyor gibi görünüyor.

"Line of Fire", 21 Eylül'de NBC'de başlıyor.`,
  },
  {
    slug: "furious-liz-meriwether-season-1-finale-interview",
    title: "Furious'un yaratıcısı 1. sezon finalini anlatıyor, Alice'in geleceğine dair ipuçları veriyor",
    excerpt: "Uyarı: Spoiler içerir. Liz Meriwether, “Hart Island” bölümünü, oksijen hortumunu ve 2. sezona girerken Alice Black'i dizinin en tehlikeli karakterine dönüştüren o gülümsemeyi anlatıyor.",
    customBadge: "Hulu",
    customBadgeStyle: "light",
    image: furFinaleCover,
    source: "Entertainment Weekly — Interview",
    gallery: [furFinaleG1, furFinaleG2, furFinaleG3],
    body: `**Uyarı: Bu yazı, "Furious"un 1. sezon finaline dair spoiler içerir.**

"Furious", ilk sezonunun büyük bölümünde avlanan kişinin Alice Black olduğuna inanmamıza izin verdi. "Hart Island" adlı final bölümü ise bunu sessizce tersine çeviriyor: Alice, Catherine Grace'i yakalayıp Jay Easton'ın evine getiriyor ve iki kadın aynı evdeyken Jay'in oksijenini kesiyor. Catherine hemen şüpheleniyor. Alice gülümsüyor. Ekran kararıyor.

Dizinin yaratıcısı Liz Meriwether, EW'ye "Sezonun son karesinde seyircinin, aslında tanımadığı birini desteklediğini fark etmesini istedim" diyor. "Alice'in o evde yaptığı her şey bir tercih. Köşeye sıkışmış değil. Karar veriyor."

Meriwether, oksijen sahnesinin en başından beri planda olduğunu, ancak gülümsemenin sonradan eklendiğini söylüyor. "Bir versiyonda kendinden dehşete düşmüş gibi bakıyordu ve bu, suçluluk duygusu olarak okunuyordu. Suçluluk, seyircinin içini rahatlatıyor. Gülümseme ise öyle değil." Bu an, sezon boyunca paranoyak olduğu söylenen Catherine'i de başka bir ışık altında gösteriyor: Son dakikada odadaki insanlar arasında Alice'i doğru okuyan tek kişi o.

Böylece 2. sezonun önüne çözülmesi gereken çok belirgin bir mesele çıkıyor ve Meriwether bundan memnun. "Artık Catherine kanıtlayamadığı bir şeyi biliyor, Alice de Catherine'in bildiğini biliyor. Bu artık bir gizem değil, bir restleşme." Bir mahkeme sahnesi ya da itiraf sözü vermemeye özen gösteriyor; hatırlattığı üzere dizi, çözüme ulaşmaktan çok baskıyı artırmakla ilgileniyor.

Hulu, finalin yayımlanmasından birkaç gün önce "Furious"a ikinci sezon onayı verdi. Yani bu merak uyandıran son, devamı geleceği bilinerek yazıldı. Meriwether, "Cevap verme fırsatı bulup bulamayacağımız konusunda ketum davranmamız gerekmiyordu" diyor. "Biz de finalin olabildiğince çirkinleşmesine izin verdik."

"Furious"un 1. sezonu şimdi Hulu'da izlenebilir.`,
  },
  {
    slug: "dan-stevens-robocop-prime-video-series",
    title: "Prime Video'nun RoboCop dizisinde RoboCop'u Dan Stevens canlandıracak",
    excerpt: "Günümüzün en öngörülemez oyuncusu, Peter Weller'ın mekanik çizmelerini giyiyor: Dan Stevens, James Wan ve Blumhouse Atomic Monster imzalı sekiz bölümlük RoboCop dizisinin başrolünü üstlenecek.",
    customBadge: "Prime Video",
    customBadgeStyle: "light",
    image: robocopAsset.url,
    source: "Empire — Jordan King",
    body: `Son dönemde Dan Stevens'ı "Godzilla x Kong: The New Empire"da bir Titan veterineri, "Abigail"da farkında olmadan vampir bir balerini kaçıran ekibin lideri ve "Cuckoo"da tekinsiz bir tatil tesisi sahibi olarak izledik. Günümüzün en öngörülemez oyuncusu unvanını pekiştirmeyi sürdüren Stevens'ın sıradaki büyük projesi de belli oldu: Deadline'ın haberine göre aranan oyuncu, Prime Video ve Blumhouse Atomic Monster'ın James Wan yapımcılığında hazırladığı yeni dizide RoboCop'u canlandıracak.

Yaratıcı yönetimini Peter Ocko'nun üstlendiği yapım, Paul Verhoeven'ın efsanevi 1987 tarihli hicvine dayanıyor. O keskin siberpunk bilimkurgu, Peter Weller'ın canlandırdığı polis Murphy'nin ölümden döndürülüp suçlulara göz açtırmayan bir siborga dönüştürülürken kelimenin tam anlamıyla insanlığından koparılmasını anlatıyordu. Prime Video'nun "RoboCop"u, kaynak malzemeyi sekiz bölümlük güncel bir yorumla ele alacak. Stevens, kötü niyetli bir teknoloji devinin yakın geleceğin Detroit'ine üniformalı metal adamlar getirme planına bilinciyle güç veren, görev sırasında hayatını kaybetmiş polis rolünde Weller'ın mekanik çizmelerini giyecek.

"RoboCop"a ilk onay çıktığında yapımcı Wan, Verhoeven'ın kült klasiğinin evrenine dönme heyecanını paylaşmıştı. Basın açıklamasında, "Kendimi bildim bileli büyük bir RoboCop hayranıyım; bu dünyayı televizyona taşımaya yardımcı olmak bir hayalin gerçekleşmesi" demişti. "Paul Verhoeven'ın 1987'de yarattığı şey, zamanının onlarca yıl ilerisindeydi. Teknoloji, kimlik ve şirketlerin gerçekte kime hizmet ettiği konusundaki soruları ise giderek daha da acil hâle geldi."

Wan ayrıca "Peter'ın kendine özgü vizyonunu ve hikâye anlatımındaki cesur yaklaşımını" överek Ocko'nun bizzat kaleme aldığı yorumun, "orijinali ikonik kılan unsurlara saygı duyacağını ve teknoloji odaklı modern dünyadaki güncelliğini vurgularken küresel izleyici için tartışmasız yeni bir şey inşa edeceğini" söyledi.

"RoboCop", yıllar boyunca devam filmleri, televizyon uyarlamaları, çocuklara yönelik çizgi diziler ve Joel Kinnaman'lı 2014 yeniden çevrimi sayesinde gündemde kalmayı başardı. Ancak hiçbiri Paul Verhoeven'ın kara hicivle örülü orijinal tür başyapıtının seviyesine tam olarak ulaşamadı. Stevens'ın kadroya katıldığı, televizyonun deneyimli ismi Ocko'nun yaratıcı yönetimi üstlendiği, Amazon ve Blumhouse Atomic Monster'ın gücünü arkasına alan bu yeni diziyle RoboCop'un devriyeye dönmesinin vakti belki de gelmiştir: toplumun güvenine layık olmak, masumları korumak ve kanunu uygulamak için.`,
  },
  {
    slug: "visionquest-paul-bettany-identity-crisis",
    title: "VisionQuest'te Paul Bettany'nin Marvel kahramanı “kimlik krizinden geçiyor”",
    excerpt: "Dizinin yaratıcı sorumlusu Terry Matalas, WandaVision üçlemesini tamamlayan yapımı anlatıyor: Vision ilk kez hikâyeye bizzat yön veriyor ve gerçekte kim olduğu sorusuyla yüzleşiyor.",
    customBadge: "Marvel",
    image: img_visionquest,
    source: "Empire — Ben Travis",
    body: `Vision kim? Güzel soru. Paul Bettany'nin Marvel karakterinin MCU'daki uzun ve olaylarla dolu geçmişi, "Avengers: Age of Ultron"da resmen Vision olarak ortaya çıkmasından da önceye, "Iron Man"de Tony Stark'ın JARVIS işletim sistemini seslendirdiği günlere uzanıyor. O zamandan bu yana Ultron ve Zihin Taşı ile birleşti, bir otomata dönüştü, Thanos tarafından öldürüldü, sevgilisi Wanda tarafından sahte bir gerçeklikte diriltildi ve kendi orijinal bedeninde White Vision olarak yeniden ortaya çıktı. Yeni dizisi "VisionQuest"te kim olduğunu sorgulamasına şaşmamalı.

Dizinin yaratıcı sorumlusu Terry Matalas'a göre "WandaVision" ve "Agatha All Along" ile başlayan üçlemeyi tamamlayan bu yapım, Vision'ın varoluşsal sorulara dalması için kusursuz bir fırsat. Empire'a, "Vision'ın hikâyeye bizzat yön verdiğini ilk kez izliyoruz; kim olduğunu, geçmişte kim olduğunu düşündüğünü anlıyoruz" diyor. "Bu karakterin bir kimlik krizinden geçişine tanık oluyoruz. Bir bakıma Vision filmi diyebiliriz."

Bu arayışın bir bölümünde Vision, Ultron, EDITH, DUM-E ve U'nun insan avatarlarına büründüğü içsel bir sanal gerçekliğe çekiliyor. Bettany, "Ona yardım etmek için oradalar" diye açıklıyor. "Dünyaya küçük adımlarla karışmaya çalışıyor; geceleri de bu verileri indirip başından geçenleri farklı özelliklere sahip bu yapay zekâlarla konuşuyor. Onlar da farklı nitelikleri ve becerileri anlamasına yardımcı oluyor. Ama bunu, dünyayla ve kendisiyle arasına mesafe koymak için bir bahane olarak da kullanıyor. Elbette olaylar birleşip onu gerçekten dünyanın içine çekiyor."

Matalas'a göre dizi, kendinden önceki "WandaVision" ve "Agatha" gibi, insan olmanın ne anlama geldiğiyle ilgili. "Bence Vision'ın yaşadıkları, nihayetinde hepimizin yaşadığı ve baş etmeye çalıştığı şeyler" diyor. "Travma, ilişkilerle başa çıkmak, sevgiyi deneyimlediğimizde ya da deneyimleyemediğimizde verdiğimiz tepkilerle yüzleşmek. Bir yapay zekâyı anlatan dizinin hepsinden daha insani olması tuhaf."

"VisionQuest", 14 Ekim'den itibaren Disney+'ta yayımlanacak.`,
  },
  {
    slug: "it-welcome-to-derry-2-sezon-1935-buyuk-buhran",
    title: "“It: Welcome to Derry”nin 2. sezonu 1935'te geçecek ve “dönemin korkunç olaylarını” görmezden gelmeyecek",
    excerpt: "Dizinin yaratıcı sorumlusu Andy Muschietti'ye göre yeni sezon, Büyük Buhran'ın yıkımı altında çökmüş bir Derry'de geçecek: yoksul, işsiz, umutsuz bir kasaba ve sırf hayatta kalabilmek için çılgınca şeyler yapan karakterler.",
    body: `"It: Welcome to Derry", ikinci sezonunda 1935'e gidiyor. Pennywise'ın her 27 yılda bir Derry'ye dönmesi gerektiği için bunu zaten biliyorduk. Ancak zaman çizelgesi farklı ilerleyen Stephen King'in orijinal romanının aksine, dizinin ikinci sezonu Büyük Buhran'ın yıkımıyla doğrudan yüzleşmek zorunda.

Muschietti, Variety'ye "Karakterlerimizin dünyasına Buhran döneminin çaresizliği hâkim olacak" diyor. "Herkes geçinmeye, içinde bulunduğu koşullarda hayatta kalmaya çalışıyor. Çılgınca şeyler yapacaklar."

Muschietti şöyle devam ediyor: "Bu koşullarda Derry, dışarıdan bakınca neredeyse bir mezarlık. Bir ceset gibi; çünkü insanlar tükenmiş, yoksul, yorgun, işsiz ve evsiz. Çocukların banliyö rahatlığı içinde geçen hayatları yok. Çok farklı bir durumdalar." Bazıları yetim, bazıları evden kaçmış; dolayısıyla atmosfer oldukça karanlık. "Ama her zaman yanan küçücük bir umut ışığı var ve yeni grubumuzu ayakta tutan da tam olarak bu."

## 27 yıllık geri sayım tersine işliyor

"It: Welcome to Derry"nin ilk sezonu 1962'de geçiyor ve yaratığın, 2017 yapımı "It" filmindeki orijinal Losers' Club üyelerinden bazılarının ebeveynlerini hedef almasını anlatıyor. İlk film, birinci sezondan 27 yıl sonra; ikinci film de ilk filmden 27 yıl sonra geçiyordu. İkinci film palyaçonun sonunu getirdiği için hikâyeyi anlatmaya devam etmenin tek yolu geçmişe gitmek. İkinci sezonun ardından üçüncü sezon, 27 yıl daha geriye, It'in ilk kez palyaço biçimini aldığı 1908'e dönecek.

King'in eserlerinde ortaya koyduğu üzere It her döndüğünde yıkıcı bir olay yaşanıyor. İlk filmde Bill'in kardeşi Georgie vahşice öldürülmüş, ikinci film ise bir turiste karşı işlenen korkunç bir nefret suçuyla açılmıştı. İlk sezonda bu olay, yıkıcı Black Spot yangınıydı.

İkinci sezon, Bradley Gang Katliamı'na odaklanacak: Derry'ye gelip kasabayı kana bulayan bir haydut çetesinin hikâyesine.

"It: Welcome to Derry"nin 2. sezonunun yayın tarihi henüz belli değil.`,
    image: "/__l5e/assets-v1/dfefa887-d412-4598-986b-45902811c84e/449b67182390.jpg",
    source: "GamesRadar+",
    customBadge: "HBO",
    customBadgeStyle: "light",
  },
  {
    slug: "lanterns-1-bolum-final-surprizi-dcu-sorulari",
    title: "“Lanterns”ın ilk bölüm finalindeki sürpriz, DC evrenine dair pek çok soru doğuruyor",
    excerpt: "HBO'nun yeni dizisi ilk bölümün sonunda bombayı patlattı: John Stewart, akıl hocası Hal Jordan'ı ölü buluyor; üstelik Güç Yüzüğü parmağında değil.",
    body: `_Bu yazı, "Lanterns"ın ilk bölümüne dair **spoiler** içerir._

"Lanterns", şoke edici hamlesini yapmak için hiç beklemedi. Dizinin ilk bölümü, John Stewart'ın (Aaron Pierre) eski akıl hocası Hal Jordan'ı (Kyle Chandler) ölü bulmasıyla bitti. Bu yalnızca Chandler'ın kahramanı dizinin başrollerinden biri olduğu için değil, tüm DC evrenine dair büyük sorular doğurduğu için de sarsıcı.

DCU, James Gunn'ın izleyicinin beğenisini kazanan "Superman"iyle asıl ivmesini yakalamıştı. Ancak destanın en yeni halkası "Lanterns", son on yılın prestijli dramalarından, özellikle de "True Detective" ve "Slow Horses"tan beslenen çok daha ağırbaşlı bir yapım. Bu iki dizinin ruhuna sadık kalan "Lanterns", merkezindeki gizemi bir cinayet üzerine kuruyor; ancak bu kez kurban, dizinin kendi yıldızlarından biri.

HBO dizisi üç ayrı zaman çizelgesinde ilerliyor: 1996, 2016 ve 2026. 2016'da Chandler'ın Jordan'ı, Pierre'in Stewart'ını eğitiyor; ikili Nebraska'nın Rushville kasabasındaki tuhaf olayları araştırıyor. Dizinin ağırlığı bu zaman çizelgesinde gibi görünüyor. Ancak ilk bölümün sonunda, doğrudan "True Detective: Night Country"den çıkmış hissi veren bir sahneyle 2026'ya atlıyoruz. Stewart bu kez tek başına, karla kaplı Rushville'e geliyor ve lise futbol sahasının önünde Şerif Kerry Kane (Kelly Macdonald) ile buluşuyor. İçeri girdiklerinde nedenini anlıyoruz: Hal Jordan ölmüş.

## Jordan'ın ölümü John Stewart ve Guy Gardner için ne anlama geliyor?

Stewart, "Başka bilen var mı?" diye soruyor. Şerifin yanıtı net: "Sadece saha görevlisi." Jordan'ı tribünde, on yıl önce Stewart'ın yanında oturduğu noktada buluyorlar. Ama bu kez alnında bir kurşun deliği var ve bedeni kaskatı donmuş. Üstelik Stewart elinin üzerindeki karı temizlediğinde Güç Yüzüğü'nün yerinde olmadığını görüyoruz.

Bundan ne anlamalıyız? İlk soru şu: Stewart neden 2026'da bir Lantern değil? Sahne boyunca elleri çoğunlukla ceplerinde olsa da ikisini de kısa süreliğine görüyoruz; hiçbirinde yüzük yok. 2025'te geçen "Superman" sayesinde, 2026'da Dünya'da Nathan Fillion'ın Guy Gardner'ıyla birlikte birden fazla Lantern bulunduğunu biliyoruz. Peki Stewart neden onlardan biri değil? 2016'daki eğitim başarısız mı oldu?

Ve en büyük soru: Jordan'ı kim öldürdü, yüzüğü kim aldı? Belki Guy Gardner, Dünya'daki Lantern'lardan biri değil de doğrudan bu ölümle bağlantılı biri; belki Jordan'ın yüzüğünü taşıyor. DC'nin en öfkeli süper kahramanı bu dizinin kötüsü olabilir mi? Mümkün, ama başka açıklamalar da var.

## DCU açısından büyük sonuçlar

"Lanterns", DC'nin şimdiye kadarki en riskli hamlesi ve ilk bölüm bunun kusursuz bir örneği. Bölüm, Dünya'nın yalnızca tek bir Green Lantern'ı olduğunu ima ediyor. 2016 zaman çizelgesinde Jordan, yüzüğü nasıl aldığını Stewart'a anlatıyor: Hava Kuvvetleri'nde test pilotu olduğu ilk yıllarda yatağından alınıp Abin Sur adlı bir uzaylının düştüğü Rushville'e gönderilmiş. Jordan'a göre Sur, Dünya'nın da içinde bulunduğu "2814. sektörün barışını ve egemenliğini korumakla görevli" Lantern'mış. Tek başına.

Sur yüzüğü ona verdiğinde gerekçe basitmiş: Yüzük, halef olarak onu "seçmiş". Yani bir Lantern öldüğünde yerini bir başkası alıyor. 2026'da Gardner'ın "Superman"deki Justice Gang'in lideri olduğunu biliyoruz. Yüzüğünü Jordan ölmeden önce mi aldı? Nasıl? Yoksa Jordan başka bir sektörü korumak için Dünya'dan ayrılıp yerini Gardner'a mı bıraktı? Peki Stewart neden görevi devralmadı?

Cesedin bulunduğu yer de ayrı bir mesele. Rushville, hem Jordan'ın Lantern olarak seçildiği hem de ikilinin 2016 zaman çizelgesinde uzaylıları keşfettiği kasaba; tesadüf olamayacak kadar merkezi bir yer. Jordan'ın bardaki bir sohbette dediği gibi: "İçimde bir şey hep o düşüşün kaza olmadığını söyledi. Bana bir fırtınanın yaklaştığını söylüyorsa, geldiğinde beni uyaracak bir gözcüm olduğundan emin olurum." Cesedin aynı bölgede bulunması, fırtınanın gerçekten koptuğunu gösteriyor.

"Lanterns", HBO Max'te yayımlanıyor.`,
    image: "/__l5e/assets-v1/e791f387-d61a-4251-8e02-a60e6655126b/0a72a350c2a4.jpg",
    source: "SlashFilm",
    customBadge: "HBO",
    customBadgeStyle: "light",
    gallery: [
      "/__l5e/assets-v1/489f4c26-de93-4b23-96d5-db2aba0ee7ea/8cdd0adf646f.jpg",
      "/__l5e/assets-v1/b050d495-c16e-405b-819a-c543525ea8b7/fcd8efa7b951.jpg",
    ],
  },
  {
    slug: "house-of-the-dragon-3-sezon-finali-21-milyon-izleyici",
    title: "“House of the Dragon”ın 3. sezon finali üç günde 21 milyon izleyiciye ulaştı",
    excerpt: "HBO'nun ejderha destanı sezonu güçlü kapattı: Final, ilk üç gününde 11 milyonu ABD'den olmak üzere toplam 21 milyon izleyiciye ulaştı. Sezonun bölüm başına izleyici ortalaması ise 34 milyon oldu.",
    body: `"House of the Dragon", pazar akşamı HBO'da üçüncü sezonunu tamamladı. Final bölümü, yayımlandığı ilk üç gün içinde 21 milyon izleyiciye ulaştı. Bu izleyicilerin 11 milyondan fazlası ABD'deydi.

Bu toplam, Nielsen'ın HBO kablolu kanalındaki geleneksel yayın ölçümleriyle Warner Bros. Discovery'nin HBO Max'teki kendi izlenme verilerinin birleşiminden oluşuyor. Rakamlar, sezon boyunca büyük ölçüde istikrarlı bir gidişata işaret ediyor: 3. sezonun 21,5 milyonluk açılış izleyicisine kıyasla düşüş yalnızca yüzde 2.

WBD, 2. bölümden 7. bölüme kadar olan izlenme rakamlarını açıklamadı. Şirket, 2024'teki 2. sezon finalinin üç günlük toplamını da paylaşmamıştı. Yine de 3. sezon açılışının, yalnızca yüzde 2 farkla 2. sezon açılışının izleyici sayısını neredeyse yakaladığını belirtmekte fayda var.

Genel olarak "Game of Thrones"un devam dizisi, bu sezon bölüm başına ortalama 34 milyon izleyiciye ulaşıyor; bu da 2. sezonun 35 milyonluk ortalamasının hemen altında. HBO'ya göre bu performans, diziyi HBO Max tarihinde geri dönen sezonlar arasında en çok izlenen ilk üçe yerleştiriyor.

Pazar akşamı ayrıca "Life, Larry and the Pursuit of Unhappiness"ın yedinci ve son bölümü de yayımlandı. Larry David'in yarattığı ve başrolünde yer aldığı skeç dizisi, ABD'de bölüm başına ortalama 4 milyon izleyiciye ulaşarak HBO Max tarihinde yayına başlayan HBO komedileri arasında en çok izlenen ikinci yapım oldu. İlk sırada ise bu yılın başlarında başlayan, Steve Carell başrollü "Rooster" var. Yapım, "Hung" (2009) ve "Sex and the City" (1998) dışında, son 15 yılın en çok izlenen HBO komedisi olarak açılış yapmıştı.

Rakamlar, HBO'nun yayın akışını Westeros evreni etrafında şekillendirme stratejisinin hâlâ işe yaradığını gösteriyor: Sezon boyunca izleyici kaybının yüzde 2 civarında kalması, dizinin sadık kitlesini koruduğu anlamına geliyor.`,
    image: hotd1.url,
    source: "Variety",
    customBadge: "HBO",
    customBadgeStyle: "light",
    gallery: [hotd1.url, hotd3.url, hotd2.url, hotd4.url],
  },
  {
    slug: "furious-hulu-kadin-ofkesi-neden-herkes-bu-diziye-kilitlendi",
    title: "Hulu'nun yeni dizisi “Furious” neden herkesi ekrana kilitledi?",
    excerpt: "Sekiz bölümlük polisiye gerilim, şimdiden yılın en iyi yeni dramaları arasında gösteriliyor. Televizyon eleştirmenleri Roxana Hadadi ve Alison Herman, dizinin kadın öfkesi üzerine söylediklerini tartışıyor.",
    body: "Yeni polisiye drama _Furious_, eleştirmenler arasında ses getirmeyi sürdürüyor. Kanada'da Disney+'ta yayımlanan dizi, kanunun karşıt taraflarında duran iki kadını izliyor: güçlü erkekleri hedef alan bir seri katil ve onu bulmakle görevlendirilen FBI ajanı.\n\nCBC'nin kültür programı _Commotion_'da Vulture televizyon eleştirmeni Roxana Hadadi ve Variety televizyon eleştirmeni Alison Herman, konuk sunucu Amil Niazi'nin sorularını yanıtladı: İzleyiciler bu diziye neden böylesine bağlandı ve yapım kadınların öfkesi hakkında tam olarak ne söylüyor?\n\nTartışmanın merkezinde, Epstein sonrası dönemde televizyonun nasıl değiştiği vardı. Eleştirmenlere göre _Furious_, güçlü erkeklerin cezasız kalmasına yönelik ortak hüsranı doğrudan bir intikam fantezisine dönüştürüyor; üstelik bunu ahlak dersi vermeden ya da şiddeti bütünüyle haklı çıkarmadan yapıyor. Dizi, katilin nedenlerini anlaşılır kılarken peşindeki ajanın da benzer bir öfke taşıdığını gizlemiyor. Asıl gerilim, bu iki kadının birbirine ne kadar benzediğinden doğuyor.\n\nSekiz bölümlük yapı da dizinin lehine işliyor: Hikâyeyi uzatmak yerine tempoyu sıkı tutarken karakterlere soluklanacak alan bırakıyor. Riley Vinson ve Lola Petticrew'un performansları, \"My Life Had Stood - A Loaded Gun\" adlı bölümde olduğu gibi, ev hayatının sessiz anlarında bile gerilimi canlı tutuyor.\n\nEleştirmenlerin ortak kanısı şu: _Furious_, yalnızca iyi kurulmuş bir kovalamaca hikâyesi değil; kadınların öfkesinin ne zaman meşru, ne zaman \"fazla\" sayıldığına dair güncel bir tartışmayı da beraberinde getiriyor. Yılın en iyi yeni dramaları arasında anılmasının başlıca nedeni de bu.\n\n_Panelin yapımcısı Nikky Manfredi. Tartışmanın tamamına CBC Listen ve Commotion with Elamin Abdelmahmoud podcast'inden ulaşılabilir._",
    image: "/__l5e/assets-v1/7893022b-cb18-455a-9a54-5e236c458d92/f099040b32db.avif",
    source: "CBC Arts",
    customBadge: "Furious",
    customBadgeStyle: "light",
    gallery: [furiousG1.url, furiousG2.url, furiousG3.url, furiousG4.url, furiousG5.url],
  },
  {
    slug: "sugar-2-sezon-colin-farrell-sir-ortaya-cikti",
    title: "Sır açığa çıktı: “Sugar” nihayet 2. sezonunda kendini buldu",
    excerpt: "Colin Farrell'ın kayıp kişilerin izini süren sinema tutkunu dedektifi, çok fazla şeyi çok uzun süre saklayan ilk sezonuyla kötü bir başlangıç yapmıştı. İkinci sezon yalnızca doğru sırları saklamakla kalmıyor, başka kritik değişikliklere de imza atıyor.",
    body: "John Sugar bir uzaylı. Colin Farrell'ın canlandırdığı Los Angeles'lı özel dedektif John Sugar'ın uzaylı olduğu, dizinin ilk sezonunda tam altı bölüm boyunca gizlendi; sanki hikâyenin temelini değil de sezon finalindeki sürprizi oluşturuyormuş gibi. Sonuç, tek bir duyguya hapsolmuş bir karakter ve büyüleyici olabilecekken sinir bozucu, samimi hissettirmesi gerekirken mesafeli kalan bir sezondu.\n\nVulture eleştirmeni Kathryn VanArendonk, isyankâr yazısında durumu açıkça ortaya koydu: \"Bir şeyi saklamak, onu eğlenceli yapmaz!\" Yine de Apple TV dizisinin izleyicileri, yapımın aslında ne anlattığını olması gerekenden çok daha geç, ancak şimdi keşfediyor.\n\nSugar'ın tüm kusurlarını bu gizlenen bilgiye bağlamak haksızlık olur; ama sır açığa çıktığında ikinci sezonun ne kadar iyileştiği gerçekten şaşırtıcı. John artık açık bir kitap. Uzaylı doğasının ona neler yapma imkânı verdiği sorusu, ya sevimli bir komediye dönüşüyor (hipnotize ettiği köpek sürüsünün önünde tenis topunu havada asılı bırakması gibi) ya da etkili bir keşfe (arabadan açılan ateşle kurşun yağmuruna tutulup ışıldayan uzaylı kanını yenilemek için eve dönmesi gibi). Büyük dertleri artık kapalı bir iç monoloğun ardında saklı değil; bütün arkadaşlarını kaybetmiş yalnız bir adamın yaşadıklarına ortak olabiliyoruz. Gizem artık kendisi değil, vakalar.\n\nİyileşme yalnızca bundan kaynaklanmıyor. Yeni yaratıcı sorumlu Sam Catlin, Sugar'ı insanlarla karşı karşıya getirmek yerine kendisini onlarda görmesini sağlayan bir soruşturma kuruyor. İkinci sezonda yükselen boksör Danny Moon (Jin Ha), kaybolan ve savrulup duran kardeşi Ji-Seok'u (Raymond Lee) bulması için Sugar'ı tutuyor. Başta herkes Ji-Seok'un günlerdir içip dağıttığını ya da polisten saklandığını düşünüyor; elbette mesele bundan ibaret değil.\n\nKriz büyüyünce Sugar, Danny'ye şehirden ayrılmasını öneriyor. Danny reddediyor: Burası onun evi, Ji-Seok ise ailesi. Kaç kez dibe vururlarsa vursunlar bu kardeşler birbirinden vazgeçmeyecek. Kız kardeşine ne olduğunu öğrenmeden gezegenine dönmeyi reddeden John, bu duyguyu çok iyi anlıyor.\n\n\"Ben gidersem onlara kim yardım edecek?\" diye soruyor Sugar. İşte ikinci sezonun ince ama köklü değişimlerinden biri daha: Farrell'ın performansı. İlk sezonda Sugar, dünyada korku salarak yol alan sert, kendinden emin bir dedektifti. İç sesi artık gerçek benliğini saklamadığı için Farrell da karakteri harika biçimde açıyor. Tek kelimeyle daha tatlı. Sesi daha yumuşak, omuzları daha gevşek ve şefkati her konuşmasına yansıyor. Torununu kaybetmiş yaşlı bir kadını ziyaret ettiğinde görüşmeyi bitiriyor, sessizce kalkıyor ve _kadının bulaşıklarını yıkıyor_.\n\nGüçlenen yardımcı oyuncu kadrosunun da katkısı var. Shea Whigham, sağlık sorunlarıyla boğuşan cana yakın federal ajan rolüne tam oturuyor; Tony Dalton, dışarıdan sempatik görünen şerife etkileyici bir tehditkârlık katıyor. Laura Donnelly ise femme fatale ile masum sevgili arasındaki dengeyi tutturuyor. Sasha Calle de Sugar'ın asistanı ve öğrencisi olarak yanına aldığı dolandırıcı Val rolünde öne çıkıyor.\n\nBütün bunlara alan açan, sezonlara yayılan uzaylı yan hikâyesinin erken çözüme kavuşması. Sugar, birinci sezon sonunda peşine düşmeye yemin ettiği Henry'yi (Jason Butler Harner) ikinci sezonun açılış sahnelerinde buluyor; ölümüne tanık oluyor, kız kardeşi Djen (Mireille Enos) hakkında hiçbir şey öğrenemiyor ve yoluna devam etmeye çalışıyor.\n\nDiğer uzaylılarla bağı kopan Sugar, şimdi fazlasıyla uyum sağlama korkusuyla yüzleşiyor: Nereden geldiğini unutmak istemiyor ama yaşadığı yerin tadını da çıkarmak istiyor. Los Angeles böyle bir arayış için ideal mekân; yabancı bir diyarda yabancı olmak ve orada başka yabancılar bulmak, dokunaklı, ölçülü ve etkili bir alegoriye dönüşüyor.\n\nSugar kim olduğunu tanımlamaya çalışırken \"Sugar\" artık ne olduğunu biliyor. İnsanlığın onu değiştirip değiştirmediğine dair kesin yanıt geldiğinde rahatlıyoruz; hem dürüst olduğu hem de ne anlama geldiğini bütünüyle kavradığımız için.\n\nJohn Sugar bir uzaylı. Ve neyse ki artık bundan çok daha fazlası.\n\n_\"Sugar\"ın 1. ve 2. sezonları Apple TV'de yayımlanıyor. Dizi henüz üçüncü sezon onayı almadı._",
    image: "/__l5e/assets-v1/cfef14e3-e672-44c6-8449-06c620f4bf4e/8e6261262575.webp",
    source: "IndieWire",
    customBadge: "Sugar",
    customBadgeStyle: "light",
  },
  {
    slug: "empire-2026-yilin-en-iyi-dizileri",
    title: "Empire'ın seçimi: 2026'nın şimdiye kadarki en iyi 10 dizisi",
    excerpt: "Empire ve Pilot TV ekipleri, yılın ilk yarısına damga vuran dizileri sıraladı: Westeros'a iki ayrı dönüş, zihin büken bilimkurgular, nefes kesen gerilimler ve zirvede “The Pitt”.",
    body: "Yılın henüz yarısındayız ama 2026, televizyon açısından tam gaz ilerliyor. Dijital platformlar da geleneksel kanallar da art arda kaçırılmayacak yapımlar sunuyor; Westeros'a iki ayrı yolculuktan zihin büken bilimkurgu dramalarına, nefes kesen gerilimlerden yürekten anlatılan karakter hikâyelerine kadar, en iyi hikâyelerin bugünkü adresi televizyon. Empire ve Pilot TV uzmanları, yılın ilk yarısının en iyi 10 dizisini seçti.\n\n## 10) Cape Fear\n\n**Platform:** Apple TV\n\nYapımcıları arasında Martin Scorsese ve Steven Spielberg, kadrosunda Javier Bardem, Amy Adams ve Patrick Wilson olsa da dizi ciddi bir kuşkuyla karşılandı: Max Cady hikâyesinin zaten üç iyi versiyonu vardı. Yine de Nick Antosca'nın mini dizisi kendi ayakları üzerinde duruyor; başta öncüllerine saygıyla göz kırpıyor, ardından Bardem Cady rolünde sınırları zorladığında hem dehşet verici hem de gösterişli bir abartıyla eğlenen bir noktaya savruluyor.\n\n## 9) House Of The Dragon: 3. Sezon\n\n**Platform:** HBO Max\n\nİlk iki sezonda üst üste yığılan çıralar sonunda alev aldı. Battle of the Gullet ile açılan sezon, King's Landing'deki güç dengesini kökten değiştiriyor; James Norton'ın kötücül Ormund Hightower'ıyla birlikte Rhaenyra'nın (giderek daha da iyi oynayan Emma D'Arcy) hayatını cehenneme çeviriyor. Ryan Condal'ın uyarlaması bu kez büyük hamleler yapıyor.\n\n## 8) Silo: 3. Sezon\n\n**Platform:** Apple TV\n\nSilo'nun gizemleri hâlâ acele etmeden açılıyor ama dizi günümüzün en sürükleyici bilimkurgu yapımlarından biri olmayı sürdürüyor. Rebecca Ferguson'ın inatçı Juliette'i ilaçların yol açtığı hafıza kaybıyla savaşırken 10 bin kişinin hayatı tehlikede. Yeni bir geçmiş hikâyesi ise insanlığın bu dev sığınaklara nasıl kapandığını araştırıyor.\n\n## 7) Star City\n\n**Platform:** Apple TV\n\nApple'ın en iyi saklanan sırrı. For All Mankind'dan bir yan dizi çıkarmak kolay değil; bunu 1960'ların Sovyet Rusya'sında geçen kasvetli bir tonla yapmak daha da zor. Star City bunu başarıyor: Anna Maxwell Martin ve Rhys Ifans mükemmel, Agnes O'Casey ise Irina Morozova rolünde dizinin asıl çıkış yapan yıldızı olarak parlıyor.\n\n## 6) A Knight Of The Seven Kingdoms\n\n**Platform:** HBO Max\n\nKahramanı Ser Duncan The Tall'ın (Peter Claffey) bir ağacın arkasında tuvaletini yaptığı sahneyle açılan dizi, daha ilk saniyeden Game of Thrones evreninde farklı bir şey izleyeceğimizi ilan ediyor. Dunk ve genç yaveri 'Egg'in mütevazı maceraları, Westeros hikâyelerinin ölçeğinin ve tonunun ne kadar farklılaşabileceğini gösteriyor.\n\n## 5) Widow's Bay\n\n**Platform:** Apple TV\n\nKomediyle korkuyu bu kadar iyi harmanlayan yaratıcı azdır; Katie Dippold artık o listede. Lanetli bir New England adasında turizmi canlandırmaya çalışan belediye başkanının hikâyesi, adanın karanlık geçmişine dolambaçlı ve zaman zaman gerçekten dehşet verici bir iniş sunuyor. Matthew Rhys, Kate O'Flynn ve Stephen Root ne yaptıklarını çok iyi biliyor.\n\n## 4) Tip Toe\n\n**Platform:** Channel 4\n\nRussell T. Davies, Who evreninden uzaklaşıp ülkesinin öfkeli bir portresiyle dönüyor. Sarsıcı bir şiddet olayının ardından kuir bar sahibi Leo (Alan Cumming) ve tamirci komşusu Clive (David Morrissey), beş bölüm boyunca kaçınılmaz bir çarpışmaya sürükleniyor. Dizi, kuir neşeye de yer açarken erkek şiddetini, önyargıları ve kabileciliği mercek altına alıyor.\n\n## 3) Spider-Noir\n\n**Platform:** Prime Video\n\nNicolas Cage'in huysuz örümceği, bu kez siyah-beyaz bir canlı çekim dünyasında. Cage içindeki Humphrey Bogart'ı ortaya çıkarıyor; iğneli tek cümlelik laflar eşliğinde gökdelenler arasında salınırken Brendan Gleeson'ın gerçekten ürkütücü İrlandalı gangsteri Silvermane ile çatışıyor. Biraz kara film, biraz çizgi roman macerası, biraz da ateşli bir rüya.\n\n## 2) The Bear: 5. Sezon\n\n**Platform:** Disney+\n\nMalzemeler tükeniyor, Chicago fırtınayla boğuşuyor, mali çöküş kapıda. Carmy (Jeremy Allen White) aşçılığı geride bırakmaya hazırlanırken dizginleri, devraldıkları karmaşadan hiç memnun olmayan Syd (Ayo Edebiri) ve Richie'ye (Ebon Moss-Bachrach) bırakıyor. Kurgu, ton ve tempo açısından ders niteliğinde bir final.\n\n## 1) The Pitt: 2. Sezon\n\n**Platform:** HBO Max\n\nR. Scott Gemmill'in gerçek zamanlı hastane draması, ikinci sezonuyla anında klasikleştiğini doğruluyor. 4 Temmuz'da geçen sezon, bu kez tek bir büyük olaya yaslanmak yerine ayrıntılara iniyor; siber saldırılar, göçmenlik baskınları, terk edilmiş bir çocuk ve çığır açan bir muayene, ön saflardaki bu kahramanları kendi travmalarıyla yüzleştiriyor. Keskin senaryosu ve oyuncularının kariyerlerini tanımlayan performanslarıyla zirveyi hak ediyor.",
    image: "/__l5e/assets-v1/207f3033-c30e-400e-9e70-baa5b74291d2/18b3de1888ca.avif",
    source: "Empire",
  },
  {
    slug: "clueless-devam-dizisi-alicia-silverstone-paramount",
    title: "Alicia Silverstone'lu “Clueless” devam dizisine Paramount+'tan yeşil ışık",
    excerpt: "Amy Heckerling'in 90'lar klasiğinin 31 yıl sonra gelen devamına Paramount+'tan onay çıktı: Cher Horowitz geri dönüyor, bu kez ergenlik çağında bir çocuğun annesi olarak.",
    body: "Cher Horowitz resmen geri dönüyor. Amy Heckerling'in tüm zamanların en iyi gençlik filmlerinden sayılan 'Clueless'ı çekmesinden 31 yıl sonra, uzun süredir konuşulan devam dizisi sonunda adresini buldu: Deadline'ın haberine göre Paramount+ projeye onay verdi. Üstelik herkesin sevdiği, başkalarının işine karışan ama iyi niyetli Beverly Hills kızı rolüne Alicia Silverstone dönüyor.\n\nProjenin arkasında The O.C.'nin yaratıcısı Josh Schwartz, O.C. senaristi ve Gossip Girl'ün ortak yaratıcısı Stephanie Savage ile Jordan Weiss var. 2019'dan beri farklı biçimlerde geliştirilen proje, yine Silverstone'un Cher'ine odaklanan, özel etkinlik niteliğinde bir mini dizi olacak.\n\nDeadline'a verilen özete göre dizi, orijinal filmden 30 yıl sonra geçiyor: Kariyerinde başarıya ulaşmış, anneliği çözmüş bir Cher'le yeniden buluşuyoruz; ta ki kızının lise yılları başlayana kadar. Bir ergen büyütmek, Cher'e kendini yeniden \"ne yapacağını bilmez\" hissettiriyor.\n\nDaha önce Stacey Dash'in Dionne karakterine odaklanan bir devam dizisi planlanmıştı; Dash'in ya da orijinal kadrodan Paul Rudd'ın bu projede yer alıp almayacağı belirsizliğini koruyor.\n\nProje, Y kuşağının sevdiği markaları dijital platform çağı için canlandırma eğiliminin son halkası. Prime Video'nun Legally Blonde öncesini anlatan Elle dizisi, Disney+'ın Malcolm In The Middle dönüşü ve ne yazık ki erkenden iptal edilen, Chloé Zhao yapımcılığındaki Buffy dizisi de aynı dalganın parçaları. Çekimlerin en erken gelecek yıl Los Angeles'ta başlaması bekleniyor.",
    image: "/__l5e/assets-v1/8ab23d27-43cb-4305-8f55-25e81e9ca544/9a9678fe0748.avif",
    source: "Empire",
    gallery: [
      cluelessG1.url,
      cluelessG2.url,
      cluelessG3.url,
      cluelessG4.url,
      cluelessG5.url,
    ],
  },
  {
    slug: "rings-of-power-3-sezon-nazgnagol-ringwraith",
    title: "“The Rings Of Power”ın 3. sezonu, Yüzük Tayfları'nın atalarını tanıtıyor: Nazgnagôl",
    excerpt: "Charlie Vickers'ın Sauron'u yükselirken dizi, Nazgûl'ün hâlâ insan olduğu hâlini gözler önüne seriyor. Dizinin yaratıcıları, Tolkien'in dil çalışmalarının derinliklerine inerek bu ara evreye “Nazgnagôl” adını verdi.",
    customBadge: "The Rings of Power",
    customBadgeStyle: "light",
    body: "Middle-earth'ün karanlık köşelerinde her tür yaratık dolaşıyor: mağara trolleri, Balrog'lar, Orklar. Bir de Peter Jackson'ın filmlerinde gördüğümüz, dokuz yüzük tarafından korkunç tayflara dönüştürülmüş eski insanlar, Sauron'un Yüzük Tayfları var. The Rings Of Power'ın üçüncü sezonu, Charlie Vickers'ın Sauron'unun Second Age'deki yükselişini izlediğinden Nazgûl'ün kökenlerini de göreceğiz.\n\nYa da dizinin onlara verdiği adla Nazgnagôl'ü. Burada hâlâ insanlar; Sauron'a hizmet ediyor, güç açlığıyla yanıp tutuşuyorlar. Yaratıcı sorumlular J.D. Payne ve Patrick McKay, bu ara evrenin ne olacağını bulmak için Tolkien'in dil çalışmalarına daldı. Payne, \"Tolkien'e ilham veren şeylere bakmayı seviyoruz\" diyor. \"Dille başladı; dil, mitin üzerine asıldığı iskelete dönüştü. 'Nazgûl', Mordor'un Kara Lisanı'nda 'Yüzük Tayfı' demek. Ama Yüzük Tayfları'na dönüşmeden önce sıradan insanlar olduklarını biliyoruz. Böylece Kara Lisan'da 'nagôl' sözcüğünün 'hizmetkâr' anlamına gelebileceğini çıkardık.\"\n\nBu yüzük hizmetkârlarından biri, Zubin Varla'nın canlandırdığı Khamûl the Easterling; insanlığını yitirmeye mahkûm olduğunu bildiğimiz bir karakter. Varla, \"Bir bakıma Gollum'la aynı yolculuktalar\" diyor. \"Kötülük kötülüğü, şiddet şiddeti doğuruyor. Ruhları ve bedenleri çürüyor, içleri boşalıyor; sonunda neredeyse fiziksel biçimden yoksun kalıyorlar.\"\n\nYine de Nazgnagôl kendisini kötü olarak görmüyor. Payne, \"Her karakter kendi hikâyesinin kahramanı olmaya devam ediyor\" diyor. \"Khamûl'ün gözünden bakınca o, kral olmayı hak eden, gücü karanlık bir büyücü tarafından elinden alınmış bir savaş ağası. Sauron ona yeniden zirveye çıkmanın yolunu sunuyor.\" Unutmayın: Bazı 'armağanları' reddetmek gerekir.\n\nThe Lord Of The Rings: The Rings Of Power'ın üçüncü sezonu, 11 Kasım'da Prime Video'da başlıyor.",
    image: "/__l5e/assets-v1/52f1e152-411b-45c7-b309-ae05ff50771e/f2c6f20e1e80.avif",
    source: "Empire",
  },
  {
    slug: "robocop-dizisi-prime-video-blumhouse-james-wan",
    title: "Blumhouse ve James Wan imzalı “RoboCop” dizisi Prime Video'ya geliyor",
    excerpt: "Paul Verhoeven'ın 1987 yapımı klasiği, yaklaşık 40 yıl sonra yeni bir uyarlamayla dönüyor. Yeni dijital platform dizisinin arkasında Blumhouse ve yapımcı James Wan var.",
    body: "Sokaklara ilk çıkışının üzerinden neredeyse 40 yıl geçmişken RoboCop hâlâ güçlü bir fikir. Paul Verhoeven'ın, Peter Weller'ın canlandırdığı polis Murphy'nin insanlığından koparılıp suçlulara göz açtırmayan bir siborga dönüştürüldüğü efsanevi 1987 hicvi, o zamandan beri kültürde yaşamayı sürdürdü: devam filmleri, tartışmalı televizyon uyarlamaları, bir çocuk çizgi dizisi ve bir yeniden çevrim. Ama yolculuk henüz bitmedi: RoboCop'un beyni bir kez daha çıkarılıp yeni bir mekanik bedene yerleştiriliyor. Bu kez, arkasında büyük isimler bulunan bir dijital platform dizisine.\n\nProje, korku sinemasının güçlü şirketi Blumhouse'un yapımcılığında Prime Video'ya geliyor. Orijinal filmin senaristleri Edward Neumeier ve Michael Miner da yürütücü yapımcılar arasında; yapımcılardan biri ise James Wan.\n\nWan, \"Her zaman büyük bir RoboCop hayranıydım; bu dünyayı televizyona taşımaya yardımcı olmak bir hayal\" diyor. \"Paul Verhoeven'ın 1987'de yarattığı şey, zamanının onlarca yıl ilerisindeydi; teknoloji, kimlik ve şirketlerin gerçekte kime hizmet ettiği soruları giderek daha acil hâle geldi.\" Wan, dizinin \"orijinali ikonik kılan unsurlara saygı duyacağını\", teknolojiye doymuş günümüz dünyasındaki güncelliğini vurgulayacağını ve \"küresel izleyici için tartışmasız yeni bir şey inşa edeceğini\" söylüyor.\n\nRoboCop'un yeni versiyonu, 40 yıl sonra tüketim kültürü ve insanlıktan çıkarılma üzerine söyleyecek yeni şeyler bulabilecek mi? Yeni kuşağın zırhını kim giyecek? Yapım ilerledikçe göreceğiz.",
    image: "/__l5e/assets-v1/a3634393-235a-42b7-9257-13ce8b886a37/32a22975b7cf.avif",
    source: "Empire",
  },
  {
    slug: "furious-hulu-emmy-rossum-inceleme",
    title: "“Furious”: Hulu'nun polisiye gerilimi türün kurallarını sarsıyor",
    excerpt: "Emmy Rossum ve Lola Petticrew'un başrollerini paylaştığı “Furious”, bir seri katil takibini, izleyicinin kadına yönelik şiddeti tüketme biçimini sorgulayan bir karakter dramasına dönüştürüyor.",
    body: "Polisiye gerilimler televizyonun en popüler türlerinden biri. Son yıllarda aynı anlatı formüllerini ve temaları tekrar tekrar kullansalar da izleyiciyi kendilerine çekmeyi sürdürüyorlar. 'Furious' duyurulduğunda konusu, kendisinden önceki onlarca dizinin özeti gibiydi: Özel hayatı darmadağın olan bir kadın dedektif, bir seri katilin peşine düşüyor. Ancak ilk bölümün sonunda bu dizinin yılın diğer yapımlarından farklı olduğu anlaşılıyor.\n\nDizi, cinayet masasından ayrılıp FBI ihbar hattında çalışmaya başlayan Alice Black'i (Emmy Rossum) izliyor. Varlıklı bir adamın cinayetini araştırmak üzere çağrıldığında bunun bir yıl önce üzerinde çalıştığı başka bir davayla bağlantısını fark ediyor. Her iki davanın da baş şüphelisi, ölen iki adamla da ilişki yaşamış Catherine (Lola Petticrew) adlı genç bir kadın. Maskeyle kameralardan kaçan, dikkat çekmeyen görünümü sayesinde fark edilmeyen Catherine, kurbanlarını uyuşturuyor, sorguluyor ve ardından öldürüyor. Alice davayı derinleştirdikçe iki kadının aynı madalyonun iki yüzü olduğu anlaşılıyor; aralarındaki bağ sürükleyici bir kedi fare oyununa dönüşüyor.\n\n'Furious'ı benzerlerinden ayıran, şiddeti ele alış biçimi: İstismardan sağ kurtulanların bu eylemlerle nasıl farklı ilişkiler kurduğunu sorguluyor. Alice, sert fiziksel birliktelikler için evine erkekler çağırıyor, ardından onları kapı dışarı ediyor. Yaşadığı istismarın içinde bir şeyleri kırdığının farkında. Yaratıcı Elizabeth Meriwether, onu utandırmak yerine geçmişinin onu buraya nasıl getirdiğini ve iyileşmeye çalışan biri için bunun anlamını cesaretle araştırıyor. Diğer uçtaki Catherine ise şiddeti hayatının kontrolünü ele geçirmenin bir yolu olarak kullanıyor. Dizi ilerledikçe kurbanlarının, güçlerini sayısız kadın ve kız çocuğunu mağdur etmek için kullanan erkekler olduğu ortaya çıkıyor.\n\nHer iki karakter de kadınlığın \"kabul edilebilir\" temsillerinin dışında duruyor. Dizi, istismardan sağ kurtulanların kendilerine ve çevrelerine bakışına empatiyle yaklaşıyor. Alice, yakalamaya çalıştığı kadında kendisinin bir başka hâlini görüyor; bu yakınlık Catherine'in hem güdülerini hem de sonraki hamlelerini okumasını sağlıyor. Biçimsel açıdan övgüye değer büyük yenilikler olmayabilir; ancak sert ışıklar ve soluk arka planlar, yılın diğer bütün polisiyelerini aşan bir karakter dramasına alan açıyor.\n\nRossum ve Petticrew olağanüstü; çevrelerinde de müthiş bir yardımcı oyuncu kadrosu var. Alice'in yanında duran az sayıda insandan biri, arkadaşı Dan Kelly (Scoot McNairy). Erkeklerin bedeli ne olursa olsun birbirinden sadakat beklediği bir meslekte Alice'e yakınlığı, Dan'in konumuna mal olmuş. İlişkileri platonik olanla romantik olan arasındaki çizgiyi aşıyor; öylesine şefkatli ki birlikte göründüklerinde sanki başka bir dizide yaşıyorlar. Arabadaki bir tartışmadan banyo zemininde fısıldanan bir konuşmaya kadar her karşılaşma, diziye hem ferahlık hem de yürek parçalayan bir duygu katıyor.\n\nKadınlara ve kız çocuklarına yönelik şiddet, uzun zamandır polisiye dramalarla iç içe. Saldırı ve cinayet vakaları, ekrandaki kurbanları ve hayatta kalanları anlama biçimimizi sık sık şekillendirdi. Onlarca yıllık sömürünün ardından 'Furious', nihayet türün yerleşik kurallarını kemiriyor; izleyiciyi bu hikâyeleri nasıl tükettiğiyle ve istismardan sağ kurtulanlar hakkında nasıl konuştuğuyla yüzleştiriyor. İyileşmeye giden yolların ne güzel ne de dümdüz olduğunu hatırlatıyor.\n\n'Furious' sürprizler ve ters köşelerle dolu olsa da varlığı, bir polisiye dramadan fazlasına işaret ediyor. Dizi, izleyicisinden kadınlara uygulanan şiddete bakmasını isteyen bir türü alıp bu eylemlerin çevremizdeki insanları nasıl şekillendirdiğiyle yüzleşmeye zorluyor. Bu türün izleyicileri olarak onun varlığında bizim de sorumluluğumuz olup olmadığını soruyor.",
    image: furiousG1.url,
    source: "RogerEbert.com",
    imdbRating: "7.6",
  },
  {
    slug: "human-vapor-netflix-toho-anti-otorite-reboot",
    title: "“Human Vapor”: Netflix ve Toho'dan klasik Japon filmine otoriterlik karşıtı yeni yorum",
    excerpt: "Netflix'in Toho ile ilk ortak yapımı, 1960 yapımı “The Human Vapor”ı sekiz bölümlük bir gerilime dönüştürüyor. Yeon Sang-ho ve Shinzo Katayama, tokusatsu geleneğini beden korkusu ve siyasi öfkeyle harmanlıyor.",
    body: "'Human Vapor'ın açılış sahnesi, dizinin nereye gittiğini hemen belli ediyor. Gazeteci Kyoko Kono (Yû Aoi), biyokütle enerjisi üzerine çalışan bir bilim insanıyla canlı yayında röportaj yaparken stüdyoya kendi kendine tuhaf bir buhar sızıyor. Bilim insanının kıyafetlerinin altına, ardından solunum yollarına giriyor; onu havaya kaldırıp sonunda patlatıyor. Titreşen bilgisayar efektleriyle çekilen bu açık beden korkusu sahnesi, yeniden çevrimin 1960'ların ölçülü kaiju sinemasıyla sınırlı kalmayacağını ilan ediyor.\n\nNetflix ile köklü Japon stüdyosu Toho'nun ilk ortaklığı olan yapımda Koreli dizi sorumlusu Yeon Sang-ho ile Japon yönetmen Shinzo Katayama'nın imzası var. Özgün film ise 'Godzilla' yönetmeni Ishirō Honda ve efektlerin öncü ismi Eiji Tsuburaya'dan gelmişti.\n\n**Özgün \"The Human Vapor\" ne anlatıyordu?**\n\nFilm bir tokusatsu yapımıydı. Kelime anlamı \"özel çekim\" olan bu kavram; kostümlü yaratıklar, minyatür şehirler, maskeli kahramanlar ve dev robotlar gibi fiziksel efektlere dayanan Japon sinema ve televizyon geleneğini anlatıyor. Özgün 'Ultraman' dizisini de yaratan Tsuburaya, bazen \"tokusatsu'nun babası\" olarak anılıyor.\n\n'The Human Vapor', Toho'nun \"Transforming Human Series\" üçlemesinde yer alıyor: Bilimsel müdahaleyle değişen insanların yeni güçleriyle hırsızlık ve cinayet işlediği, kendi ahlak kurallarını koyup yasadan kaçtığı üç film. Filmde Mizuno (Yoshio Tsuchiya), sağlık sorunları nedeniyle hava kuvvetlerinden ayrılmış bir kütüphaneci. Katıldığı deney ters gidince gaz hâline geçebilen bir varlığa dönüşüyor ve sevdiği dansçı Fujichiyo'nun sahneye dönüşünü finanse etmek için banka soymaya başlıyor.\n\n**Filmi özel kılan neydi?**\n\nHonda ile Tsuburaya ilk dönüşümü geciktiriyor, ancak ikinci yarıda kuru buz, optik birleştirme ve tel sistemlerini aynı sahnede kullanarak etkiyi inandırıcı kılıyor. Filmin en çarpıcı yanı, sessizce taşıdığı siyasi alt metin: Mizuno'ya gücünü veren atom çağı, ona yeni bir ahlak da kazandırıyor. \"Artık insan değilim,\" diyor. \"Dolayısıyla artık insanların yasalarına bağlı değilim.\"\n\n**Dizi özgün filme ne kadar yakın?**\n\nDizide banka soygunu yok; sekiz bölümlük hikâye tamamen özgün ve odağını idol dünyasına ve yakuzaya çeviriyor. Yine de Honda'nın filmine selamlar var: Başkarakterler Dedektif Kenji Okamoto (Shun Ogori) ve Kyoko Kono ile aynı isimleri taşıyor, ancak artık sevgili değiller. Kyoko'nun bir şüpheliyle zamansız röportajı Kenji'nin soruşturmasını batırmış ve Kenji açığa alınmış.\n\nEn büyük fark, Human Vapor'ın (model UTA) görevinin artık açıkça siyasi olması. Bol mavi takımı ve ifadesiz sesiyle, \"White Center\"a bulaşmış herkesin geçmişteki suçlarının hesabını vermesini istiyor; siyasetçileri, şirket yöneticilerini ve yozlaşmış polisleri birbirine bağlayan bir komployu harekete geçiriyor. Özgün Mizuno konuşkan ve akılcıydı; dizideki hâli ise neredeyse hipnotik bir trans içinde: Az konuşuyor, bakışları boş ve tehditkâr.\n\n**Toplumsal eleştiriyi güçlendirmek**\n\nDizi, özgün Toho filminin ruhuna en çok temalarıyla yaklaşıyor. Katayama'nın Netflix'e söylediği gibi amaç, \"günümüz Japon toplumunda güçlülerle güçsüzler arasındaki ilişki gibi dinamikleri doğru biçimde yansıtmak\". Yeon Sang-ho ile ortak senarist Takeshi Kimura, dünyada yozlaşmanın dokunmadığı köşe bırakmıyor: Kenji'nin ilk sahnesinde göçmen bir işçiyi sömüren restoran sahibine müdahalesini görüyoruz; Kyoko, White Center hakkında ısrarla haber yaptığı için dışlanmış alkol bağımlısı bir gazeteciyle buluşuyor; bunamış eski bir White Center yöneticisi ise son yıllarını suçluluğun ağırlığı altında bir kıyı komününde geçiriyor.\n\nSonuçta 'Human Vapor' akıllı uyarlama tercihleri yapıyor: Yalnızca efektlerin gösterişini artırmıyor, filmin alt metnindeki otoriteye başkaldırıyı da öne çıkarıyor. Trajik karakter ilişkileri aracılığıyla aksiyonu, özgün yapımın tokusatsu yaratıklarının asla ulaşamayacağı bir yere taşıyor.",
    image: "/__l5e/assets-v1/cc43fd98-013c-4bde-8eff-690edcb82fcd/ba0c98f7cdd7.webp",
    source: "TIME",
    imdbRating: "6.6",
  },
  {
    slug: "neil-patrick-harris-barney-stinson-toksik-tartismasi",
    title: "Neil Patrick Harris, Barney Stinson'ın neden “toksik” göründüğünün asıl sebebini açıkladı",
    excerpt: "“How I Met Your Mother”ın dokuz sezonunda da Barney'yi canlandıran Harris'e göre karakterin davranışlarının hiçbiri “kanıtlanmış, hatta gerçek bile değil”: Her şey, hikâyeyi anlatan yaşlı Ted'in öznel bakışından süzülüyor.",
    body: "Neil Patrick Harris, 'How I Met Your Mother'daki karakterinin neden bu kadar \"toksik\" göründüğünü ve bu karanlık tarafın neden her zaman göründüğü gibi olmadığını açıkladı.\n\n53 yaşındaki Harris, 2005–2014 arasında yayımlanan CBS dizisinin dokuz sezonu boyunca zengin ve çapkın Barney Stinson'ı canlandırdı. Vicdansız bir kadın avcısı olarak yazılan karakterin, yıllar içinde izleyiciler ve eleştirmenler tarafından sık sık \"toksik erkeklik\" tanımı olarak gösterildiği vurgulandı.\n\nThe Times'a konuşan Harris, karakterin toksik yapısıyla ilgili soruya yanıt verirken bütün dizinin yaşlı Ted'in anlattığı bir hikâye olarak çerçevelendiğini hatırlattı. Geçmiş sahnelerinde Josh Radnor'ı görüyor, anlatıcı olarak Bob Saget'ı duyuyoruz. Yani Barney'nin tasviri baştan sona öznel.\n\n\"Bu davranışların hiçbiri, yani, kanıtlanmış, hatta gerçek bile değil,\" dedi. \"Bu yüzden Barney'nin aslında olduğundan çok daha müstehcen, çok daha gülünç ve pervasız olma özgürlüğüm vardı. O her zaman Ted'in omzundaki şeytandı.\"\n\nHarris, 2023'te yan dizi 'How I Met Your Father'da Barney rolüne döndü. İki sezonluk Hulu yapımının ikinci sezonunda iki bölümde göründü; üstelik daha önce \"herkesin başını belaya sokma\" endişesiyle dönmeyeceğini söylemişti.\n\nHilary Duff'ın 'Wondercade' bülteni için verdiği röportajda şöyle yazmıştı: \"Barney'nin maskaralıkları, büyüklük hezeyanları muhtemelen herkesin başını epey belaya sokar. O yüzden huyunu değiştirmediyse ya da manastıra kapanmadıysa bunun kimseye iyi geleceğinden emin değilim.\" Duff da bu mantığa katılıp şaka yapmıştı: \"Bunu nasıl karşılarsın bilmiyorum ama Barney, 2022'ye gelindiğinde kesin hapiste olurdu.\"\n\n'How I Met Your Mother', yayın hayatı boyunca istikrarlı bir reyting başarısı yakaladı; ilk sezonları eleştirmenlerden de yüksek not aldı. Dizi, En İyi Komedi Dizisi kategorisi dâhil toplam 28 Emmy adaylığı kazandı.",
    image: "/__l5e/assets-v1/42b4c175-dc82-405c-be87-de99583dcce1/89272643cabf.jpg",
    source: "The Independent",
  },

  {
    slug: "house-of-the-dragon-sunfyre-donusu-dreamfyre-yonetmen",
    title: "“House of the Dragon” yönetmeni Sunfyre'ın dönüşünü ve Dreamfyre sürprizini anlatıyor",
    excerpt: "Üçüncü sezonun sondan bir önceki bölümü iki büyük ejderha sürprizi sundu: Öldüğü sanılan Sunfyre'ın dönüşü ve Helaena'nın bağ kurduğu Dreamfyre'ın ilk kez görünmesi. Yönetmen Nina Lopez-Corrado, sahnelerin nasıl hazırlandığını anlatıyor.",
    body: "Uyarı: Bu yazı, 'House of the Dragon'ın 3. sezon 7. bölümüne dair sürpriz gelişmeler içerir.\n\n'House of the Dragon'ın sezon finalinden önceki bölümü, hikâyeyi neredeyse tamamen ejderhalar aracılığıyla ilerletti. Dizinin tarihinde ilk kez Helaena'ya (Phia Saban) bağlı Dreamfyre perde arkasından çıktı; Caraxes, Syrax ve Seasmoke'un Sheepstealer'la karşı karşıya geldiğini de gördük. Ancak bunların hiçbiri, Rook's Rest yakınlarındaki ormanda çürümeye terk edildiği sanılan Sunfyre'ın dönüşü kadar etkili olmadı.\n\nAegon (Tom Glynn-Carney), Tom Tangletongue'dan Rhaenyra'nın adamlarının yolda olduğunu öğrenince önünde iki seçenek kalıyor: Yeni bir kaçış yolu bulmak ya da kalıp kahramanca ölmek. İkincisini seçiyor. Larys onu terk ederken Tyland kralının yanında kalmayı tercih ediyor; Sunfyre ise Aegon'un ona en çok ihtiyaç duyduğu anda dönüyor.\n\nBölümün yönetmeni Nina Lopez-Corrado, Rook's Rest Savaşı'nda ağır yaralanan ejderhanın hayatta kalmasını, kitaplardaki iyileşme sürecine dayanan bir tercih olarak açıklıyor: Sunfyre hiçbir zaman eski hâline tam dönemiyor; sakat ve yaralı biçimde savaşmayı sürdürüyor. Yönetmene göre bu, Aegon'un kendi bedensel çöküşünü yansıtıyor.\n\nDreamfyre'ın uzun zamandır beklenen görünüşü, dizi finale giderken başka bir eşiğe de işaret ediyor: Alys Rivers'ın gizli yumurtaları ve Helaena'nın bağının ardından gelen bu sahne, ejderhaların sezonun son bölümlerinde güç dengesini nasıl değiştireceğinin açık bir hazırlığı.",
    image: "/__l5e/assets-v1/a336da47-cfe6-4f71-bccf-e409668241bd/95ceb2539be4.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "the-east-palace-final-aciklamasi-netflix",
    title: "“The East Palace”ın doğaüstü finali: 30 yıllık lanetin ardındaki gerçek",
    excerpt: "Netflix'in Joseon Hanedanlığı döneminde geçen Kore dizisi, sekiz bölüm boyunca saray entrikalarını doğaüstü gizemlerle harmanlıyor. Gu-cheon ve Saeng-gang'ın hikâyesi, kraliyet lanetinin ardındaki gerçek suçluyu ortaya çıkararak son buluyor.",
    body: "Sekiz bölümlük 'The East Palace' (özgün adıyla '동궁'), şaşırtıcı ölçüde yoğun bir anlatı sunuyor. Netflix dizisi, yaşayanlarla ölüler arasındaki sınırın aşılabildiği kurgusal bir Joseon hanedanlığında geçiyor. Kraliyet ailesi, 30 yıldır tahtın varislerini hedef alan bir lanetle savaşıyor. Kralın hayatta kalan son oğlunun yaşamı tehdit edilince Kral Ju-sang (Cho Seung-woo), laneti bozması için hayalet avcısı Gu-cheon'u (Nam Joo-hyuk) saraya çağırıyor.\n\nGu-cheon'un yanında, ruhları duyabildiği için çocukken saraydan sürülen prenses Saeng-gang (Roh Yoon-seo) var. Saeng-gang'ın asıl amacı, yıllar önce öldürülen annesinin intikamını almak. Başlangıçta isteksizce ortak olan ikili; krallığı, kraliyet ailesini ve birbirlerini kurtarmaya çalışırken yakınlaşıyor.\n\n**Hayaletler ve ruhlar sistemi**\n\nDizinin en güçlü yanı, kurduğu dünya. 'The Guest' ve 'Bulgasal'ın da senaristleri olan Kwon So-ra ile Seo Jae-won, Kore'nin şaman geleneğinden besleniyor. Kore folklorunda hayaletler _gwi-shin_ olarak biliniyor. Dizide _gwi-mae_, ölümden kalan pişmanlıkla dünyaya bağlı ruhları; _won-gwi_, nefret ve intikam arzusuyla ölenleri; _ak-gwi_ ise Gu-cheon'un dönüşmekten korktuğu, can alıp giderek yozlaşan ruhları tanımlıyor.\n\nBir de canlıların \"Yang\" enerjisiyle beslenen _ggeomeoksali_ yaratıkları var. Kendisinde Yang bulunmayan Gu-cheon onlardan korkuyor, ancak saraydaki günlerinde tesadüfen biriyle arkadaş oluyor: Ölümlüler dünyasında sakar ve küçük olan bu yaratık, ruhlar âleminde kocaman ve korkunç.\n\n**Gwi Realm**\n\nAksiyonun önemli kısmı, ruhların yaşadığı ayna dünya Gwi Realm'de geçiyor. Yönetmen Choi Jung-kyu, iki dünyayı ayırmak için bu âlemi turuncu bir sisle kaplıyor. İlginç biçimde Gwi Realm sahnelerinin son hâlinde görsel efektlerin payı yalnızca yaklaşık yüzde 20–30. Choi, \"Olabildiğince çok şeyi yapım tasarımıyla çözmeye çalıştım; örneğin gerçek dünya için ayrı, Gwi Realm için ayrı bir dekor kurduk,\" diyor.\n\n**Havuzdaki ruh kim?**\n\nDizi başlarken saray, veliaht prensin ölümünü 30 yıllık lanete bağlıyor. Lanet, dönemin kralının gözdesi olan bir saray görevlisinin, kraliyet muhafızından hamile kaldığı suçlamasıyla idam edilmesiyle başlamış. Söylentiyi çıkaran, kocasının sıradan bir hizmetkârı cariyeliğe yükseltmesi düşüncesine öfkelenen, statü takıntılı Ana Kraliçe (Jang Young-nam). Saray görevlisi ölmeden önce, kendisinin ve doğmamış çocuğunun bir won-gwi olarak intikam alacağına yemin etmiş.\n\n**Kraliyet soyunu gerçekte kim lanetledi?**\n\nLanet hikâyesini tezgâhlayan kişi, kralın annesi ve Saeng-gang'ın çok sevdiği büyükannesi Lady Choi Suk-bin (Hwang Young-hee). İdam günü edilen yemine tanık olunca oğlunun tahtını güvenceye alma fırsatı görmüş: Ana Kraliçe'den doğan oğullarını zehirleyip ölümlerini gözde saray görevlisinin won-gwi'sine yüklemiş.\n\nGerçeği öğrenmek, annesiyle babasının da her şeyi bildiğini anlamak kadar yıkıyor Saeng-gang'ı. Çünkü büyükannesi, sarayda güvendiği neredeyse tek kişi. Roh'nun sözleriyle: \"Büyükannesi tek dayanağıydı; o büyükannenin yalnızca bir hain değil, bir anlamda her şeyin temel nedeni olduğu ortaya çıktığında Saeng-gang'ın ne hissettiğini ölçmeye bile başlayamam.\"",
    image: "/__l5e/assets-v1/fb0da848-105e-4279-af76-0bb26996c3a2/4104a6be28c4.webp",
    source: "TIME",
    imdbRating: "7.4",
  },
  {
    slug: "juliette-lewis-cape-fear-gosterimi-sonrasi-ozur",
    title: "Juliette Lewis, “Cape Fear” gösteriminden sonra seyircilerden özür diledi: “Gerçekten çok rahatsız ediciydi”",
    excerpt: "1991 yapımı filmde Danielle Bowden'ı canlandıran Juliette Lewis, Apple TV+ dizisinde gizemli maskeli karakter Crystal olarak geri dönüyor. Yıllar sonra Scorsese'nin filmini seyircilerle yeniden izlediğinde ilk içgüdüsü özür dilemek oldu.",
    body: "Uyarı: Bu yazı, 'Cape Fear' dizisinin 3. bölümüne dair sürpriz gelişmeler içerir.\n\nJuliette Lewis, John D. MacDonald'ın 'The Executioners' romanının Apple TV+ için hazırlanan yeni uyarlamasında Amy Adams ve Javier Bardem'e sürpriz bir yardımcı rolle katıldı. On bölümlük dizinin finali 31 Temmuz'da yayımlandı.\n\nLewis'in uyarlama tarihinde eşsiz bir yeri var: Martin Scorsese'nin 1991 tarihli filminde Sam Bowden'ın (Nick Nolte) ergen kızı Danielle'i canlandırmıştı; dizide ise tamamen farklı bir karakter olan Crystal'ı oynuyor. Karakter ilk kez yüzünü gizleyen bir maskeyle göründü; oyuncunun kimliği, 3. bölümde maske çıkınca ortaya çıktı.\n\nEntertainment Weekly'ye konuşan Lewis, bir gösterim ve soru-cevap etkinliğinde Scorsese'nin filmini yeniden izleyince verdiği tepkiyi anlattı: \"İlk iş seyirciden özür diledim, çünkü çok rahatsız ediciydi,\" diyor gülerek. \"'Özür dilerim!'\"\n\nDiziye katılması eski bir bağlantıya dayanıyor: Dizi sorumlusu Nick Antosca'yla 'The Act'in bir bölümünde çalışmıştı. \"2019 civarında konuşmuştuk; Cape Fear'ın bir dizi olabileceğini bana ilk o zaman anlattı,\" diyor Lewis. Amy Adams ile Bardem'in kadroya katıldığını duyunca Antosca'ya dostça bir e-posta gönderdi. İki gün sonra, sürpriz olması için gizli tutulan rol teklifi geldi.\n\nEn zor kısmı sırrı saklamaktı: \"Gerçekten çok zordu. Bunun için çok uğraştık. Adımı jeneriğe koymadılar.\" Oyuncu, rol için sesini de değiştirdi ve karakterin ilk sahnelerinde maskenin ardında kalmayı kabul etti. Onu Max Cady'yle yüz yüze getiren bu dönüşün, geçmiş düşünüldüğünde izleyicileri heyecanlandıracağını biliyordu.",
    image: "/__l5e/assets-v1/23e751c2-8fef-4f48-8d6c-28fc8a16c835/97a59a40ed73.jpg",
    source: "Entertainment Weekly",
  },

  {
    slug: "javier-bardem-cape-fear-final-lily-collias-sac-sahnesi",
    title: "Javier Bardem, “Cape Fear” finalinde Lily Collias'ın saçını çekmeden önce özür diledi: “Çok özür dilerim canım”",
    excerpt: "Apple TV+'ın yaza damga vuran dizisi “Cape Fear”ın finalinde Max Cady'yi canlandıran Javier Bardem, şiddet içeren bir sahne öncesinde rol arkadaşı Lily Collias'ı nazikçe uyarıp peşinen özür diledi.",
    body: "Javier Bardem, 2007'de 'No Country for Old Men'deki Anton Chigurh rolüyle yüzyılın en ürpertici performanslarından birini sunmuştu. Yaklaşık yirmi yıl sonra, bir sosyopatı ne kadar inandırıcı oynayabildiğini yeniden kanıtlıyor: Apple TV+'ın yazın en çok konuşulan dizisi 'Cape Fear'da intikam peşindeki katil Max Cady'yi yeniden yorumluyor.\n\nCady'yi daha önce 1962'de Robert Mitchum, 1991'de Robert De Niro canlandırmıştı. Bardem'in yorumunun asıl gücü, uzun süreler boyunca koruduğu hareketsizlikte. Bu sessizlik, Bowden ailesiyle oynadığı kedi fare oyununun gerilimini büyütüyor.\n\nDizinin genç yıldızı Lily Collias, deneyimi \"çok eğlenceli\" ama \"bazen bunaltacak kadar yoğun\" diye tanımlıyor. New York'taki final gösteriminde Variety'ye konuşan Collias, \"Kedi fare oynuyoruz, sonra kameralar duruyor ama ben hâlâ fare gibi hissediyorum. O da hâlâ 'Tom and Jerry'deki Tom,\" dedi.\n\nCollias'a göre finaldeki saldırı sahnesinde saçının çekilmesi gerekiyordu. Bardem çekim öncesinde onu nazikçe uyarıp peşinen özür dilemişti: \"Çok özür dilerim, canım.\" Oyuncu, sahnenin şiddetine rağmen sette kurulan güvenin işi kolaylaştırdığını söylüyor.",
    image: "/__l5e/assets-v1/59ae74b1-037d-4477-a864-3ddf0469f98c/922281fd5634.webp",
    source: "Variety",
  },

  {
    slug: "crystal-lake-hbo-max-avrupa-friday-the-13th",
    title: "HBO Max, “Friday the 13th” öncesini anlatan “Crystal Lake”i Avrupa'ya getiriyor",
    excerpt: "Linda Cardellini'nin Pamela Voorhees'i canlandırdığı A24 imzalı korku dizisi “Crystal Lake”, Avrupa genelinde HBO Max'te yayımlanacak. Dizi, ABD'de ekim ayında Peacock'ta başlayacak.",
    body: "A24 yapımı korku dizisi 'Crystal Lake', Avrupa genelinde HBO Max'e geliyor. Dizi bölgede bu yılın ilerleyen aylarında başlayacak; ABD'de ise ekimde Peacock'ta yayımlanacak.\n\nPeacock diziyi ilk olarak 2022'de sipariş etmiş, senarist ve dizi sorumlusu olarak Bryan Fuller projeye bağlanmıştı. Ancak yaratıcı görüş ayrılıkları, Fuller'ın Mayıs 2024'te ayrılmasına yol açtı. Fuller o dönemde A24'ün \"malzemeyi farklı bir yöne taşımaya karar verdiğini\" söylemişti. Şu anda dizinin yaratıcısı, senaristi ve dizi sorumlusu Brad Caleb Kane ('It: Welcome to Derry').\n\n'Crystal Lake'te Emmy adayı Linda Cardellini ('Dead to Me', 'Mad Men'), 'Friday the 13th'ün meşhur katili Jason'ın annesi Pamela Voorhees'i canlandırıyor. Dizi, Jason'ın gölde boğulmasından bir yıl sonra açılıyor. Pamela'nın geçmişini araştıran iki yabancının gelişi, Crystal Lake sakinlerinin onun gerçekte kim olduğunu sorgulamasına yol açan olayları tetikliyor.\n\nWilliam Catlett yerel polis şefi Levon Brooks'u oynuyor. Devin Kessler, Cameron Scoggins ve Gwendolyn Sundstrom da kadroda. Genç Jason Voorhees'i Callum Vinson canlandırıyor. Kane; A24 ve Marc Toberoff, Victor Miller, Stuart Manashil, Tyson Bidner, Michael Lennox ve Roy Lee'nin yer aldığı ekiple birlikte yürütücü yapımcılığı üstleniyor.",
    image: "/__l5e/assets-v1/6f6b5b34-22d9-430a-909c-79e085e21c2f/6f65e7dc0683.webp",
    source: "The Hollywood Reporter",
  },

  {
    slug: "reacher-5-sezon-yeni-kadro-alan-ritchson",
    title: "“Reacher”ın 5. sezon kadrosu açıklandı: Jay Baruchel ve Kevin Durand, Ritchson'ın karşısına çıkacak",
    excerpt: "Dördüncü sezonun başlamasına iki haftadan az kala Prime Video, beşinci sezon için dört yeni oyuncu açıkladı: Amanda Ip, Jay Baruchel, Ciara Bravo ve Kevin Durand, Lee Child'ın “Make Me” romanından uyarlanan sezonda Alan Ritchson'a katılacak.",
    body: "'Reacher'ın 4. sezon galasına iki haftadan az kalmışken Prime Video, sonraki adımı şimdiden hazırladığını gösterdi: 5. sezon kadrosuna dört yeni isim katıldı.\n\nLee Child'ın 'Make Me' romanından uyarlanan beşinci sezonda Amanda Ip, Jay Baruchel, Ciara Bravo ve Kevin Durand, Alan Ritchson'ın Jack Reacher'ının karşısına çıkacak. Yürütücü yapımcı ve dizi sorumlusu Nick Santora yönetiminde Reacher, klasik formüle sadık kalarak kendisini yine ölümcül bir suç komplosunun ortasında buluyor.\n\nRol dağılımı şöyle: Amanda Ip, Michelle Chang'i; Jay Baruchel, Chief Buck Bauer'ı; Ciara Bravo, Eunice'i; Kevin Durand ise Nokes'u canlandıracak. Kanadalı oyuncu Ip, CTV'nin 'Transplant' dizisindeki Carmen rolüyle tanınıyor; 'Cross', 'Hudson & Rex' ve 'Plan B' de filmografisinde.\n\nBaruchel; 'This Is the End', 'Knocked Up', 'Tropic Thunder', 'BlackBerry' ve Oscar ödüllü 'Million Dollar Baby' gibi filmlerle tanınan deneyimli bir isim. 'How to Train Your Dragon' serisinde Hiccup'ı da seslendiriyor. Kevin Durand ise son olarak 'Kingdom of the Planet of the Apes'teki Proximus Caesar rolüyle hatırlanıyor.\n\n4. sezon şu anda Prime Video'da yayımlanıyor; ardından 5. sezonun yapımına başlanacak.",
    image: "/__l5e/assets-v1/a14c7b7f-c7ec-4766-8675-b8cd9db937fb/833de1511c36.webp",
    source: "The Hollywood Reporter",
  },
  {
    slug: "elon-musk-the-boys-finali-tepki",
    title: "Elon Musk, “The Boys” finaline öfkelenmeye devam ediyor",
    excerpt: "Amazon Prime'ın “The Boys” dizisi, beşinci sezon finalinde milyarderleri hedef alan bir sahneye yer verdi. Elon Musk'ı hicveden bir karakter Homelander tarafından uzaya fırlatılınca gerçek Musk, X'te karşılık vererek finali “acınası” bulduğunu söyledi.",
    body: "Amazon Prime'ın süper kahraman hicvi 'The Boys', beş sezonluk yolculuğunu sekiz bölümlük son sezonla tamamladı. Finalde ise dünyanın en zengin adamını doğrudan hedef aldı. Kotaku yazarı Ethan Gach'ın ifadesiyle bu, \"inceliği levyeyle söküp atan\" bir dizi.\n\nHikâyeye aniden yeni bir karakter giriyor: Dünyanın en zengin adamı, 17 çocuk babası, amatör astronot Günter Van Ellis. Elon Musk'ın MAGA şapkasını andıran siyah bir Homelander şapkası takıyor. Homelander'a \"beyazların doğurganlık oranları\" için kaygılandığını söylüyor; Homelander da onu uzaya götürüp orada bırakıyor. Bir dakikadan kısa süren bu espri, apaçık bir Musk parodisi.\n\nMusk sosyal medyada karşılık verip bölümün finalini \"acınası\" bulduğunu söyledi, ardından \"aslında diziyi izlemediğini\" ekleyerek kendisiyle çelişti. Dizi sorumlusu Erik Kripke, \"Daha iyi bir eleştiri isteyemezdim,\" diye yanıtladı. Antony Starr ve Jack Quaid gibi oyuncular da Instagram'da gülüp geçerek konuyu kapattı. Kotaku, Musk'ın 'The Odyssey' filmi hakkındaki ırkçı sözlerinin ardından bu final tepkisinin \"öfke nöbetleri\" zincirine eklenen bir halka daha olduğunu belirtiyor.",
    image: "/__l5e/assets-v1/e40ec96d-710a-42f1-96e8-dd64a5a9f0ac/8d6695f8fc61.jpg",
    source: "Kotaku",
  },
  {
    slug: "house-of-the-dragon-s3-premiere-tek-cumle",
    title: "Tek bir replik, “House of the Dragon”ın 3. sezon açılışını baştan sona mahvediyor",
    excerpt: "Kotaku yazarı Ash Parrish'e göre “House of the Dragon”ın üçüncü sezon açılışı, Gullet Muharebesi ile dizinin en iyi savaş sahnelerinden birini sunuyor; ancak Kraliçe Rhaenyra'nın I. Elizabeth'e yaptığı beceriksiz gönderme, karakterin tüm inşasını yerle bir ediyor.",
    body: "HBO'nun 'Game of Thrones' öncesini anlatan dizisi 'House of the Dragon', duygu yüklü bir açılışla 3. sezonuna döndü. Ash Parrish'e göre dizinin devasa deniz ve ejderha çarpışması Gullet Savaşı, 'Battle of the Bastards' ve 'Hardhome' ile aynı ligde. Amiral Sharako Lohar'ın (Abigail Thorn) ve gemisi 'Bitchfist'in öncülük ettiği bu sahne, serinin kimliğini belirleyen anlardan biri.\n\nAncak bölümün ortasında savaşa katılması yasaklanan Kraliçe Rhaenyra Targaryen, odasına kapanıp elbisesini yırtıyor ve gözyaşları içinde şöyle diyor: \"Zayıf ve güçsüz bir kadının bedenine sahip görünebilirim ama bir kralın yüreğine ve cesaretine sahibim.\" Bu, Kraliçe I. Elizabeth'in 1588'de İspanyol Armadası'na karşı birliklerinin önünde, at sırtında ve zırhıyla yaptığı efsanevi Tilbury konuşmasının başarısız bir kopyası.\n\nParrish, senaristlerin Rhaenyra'yı tarihin en güçlü kadın hükümdarlarından biriyle ilişkilendirme isteğini takdir ettiğini yazıyor. Ancak bu sözü bir danışmana gözyaşları içinde fısıldayan karaktere vererek bütün gücünü yok ettiklerini düşünüyor. Ona göre bu söz Amiral Lohar'ın ağzından çıksaydı \"ayağa kalkıp alkışlardık\". Bunun yerine Rhaenyra'nın karakter yolculuğu, bu bölümle geri dönülmez bir darbe almış oldu.",
    image: "/__l5e/assets-v1/63d5ee09-3cbd-4152-9466-b9651adf519d/7dca26e928b6.webp",
    source: "Kotaku",
  },
  {
    slug: "cyberpunk-edgerunners-2-sezon-premiere",
    title: "“Cyberpunk: Edgerunners”ın 2. sezonu Michael Bay'den Scorsese'ye geçiyor",
    excerpt: "İlk gösterimi Anime Expo 2026'da yapılan Netflix dizisi “Cyberpunk: Edgerunners”ın ikinci sezonu, ilk sezonun aksiyon dolu temposundan uzaklaşıp Night City halkına odaklanan, daha ağır tempolu ve sinematik bir hikâyeye yöneliyor.",
    body: "Netflix'in Studio Trigger yapımı 'Cyberpunk: Edgerunners' dizisi, 1. sezonun sonundaki David Martinez trajedisiyle kült statüsüne ulaştı. Anime Expo 2026'da gösterilen 2. sezon açılışı ise CD Projekt Red'e göre bambaşka bir tonda: \"1. sezon bir Michael Bay filmiyse 2. sezonda Martin Scorsese'yi hedefliyoruz.\"\n\nAçılış sahnesinde \"King\" olarak bilinen, \"Weak\" adını kullanan bir siberpunk, soygun sırasında neredeyse siberpsikoza sürükleniyor. Yalnızca en üst seviye sağlık sigortasına para ödediği için hayatta kalıyor; ancak geri kalan her şeyini, ekibini, evini ve implantlarını kaybediyor. Yeni karakter Roman, bu kaotik sahneyi kamerasıyla kaydediyor. James Galizio'ya göre dizinin merkezindeki tema artık \"sinema\"nın kendisi; çünkü Night City'deki baskın eğlence biçimi, başkasının anılarını edilgen biçimde deneyimlemek, yani braindance olmuş durumda.\n\nKai Ikarashi önderliğindeki Studio Trigger, 90'lar animasyon estetiğini yakalamayı hedeflemiş; açılış bölümü görsel açıdan nefes kesiyor. Bölüm, sinyalin kesilmesi ve 'Cyberpunk' logosunun DVD logosu gibi ekranda sekmesiyle kapanıyor. 2. sezon 2026 sonbaharında Netflix'te başlayacak.",
    image: "/__l5e/assets-v1/f93a0192-ed5a-4fa9-8f05-f9a28c188053/55f23b222d35.webp",
    source: "Kotaku",
  },
  {
    slug: "walking-dead-dead-city-negan-maggie-romantizm",
    title: "“Dead City” 3. sezon fragmanı: Negan ve Maggie'ye ne oldu?",
    excerpt: "AMC'nin “The Walking Dead: Dead City” dizisinin üçüncü sezonundan sızan bir sahnede, bir zamanlar Maggie'nin kocası Glenn'i öldüren Negan, bir barda sarhoş Maggie'ye sarılıyor. Hayranlar, ikili arasındaki romantizm imasını pek hazmedemiyor.",
    body: "AMC, 'The Walking Dead: Dead City'nin 3. sezonu için bir kamera arkası videosu yayımladı. Ancak 3:45'teki bir an hayranları yıktı: Jeffrey Dean Morgan'ın Negan'ı ile Lauren Cohan'ın Maggie'si, bir barda sarhoşken birbirlerinin yüzüne dokunuyor.\n\nKotaku yazarı Kenneth Shepard, ana dizi 'The Walking Dead'i 4. sezondan sonra bıraktığını, ancak 7. sezonda Negan'ın Maggie'nin kocası Glenn'i döverek öldürdüğü anın bugün bile kültürel hafızada yaşadığını yazıyor. Şimdiyse bu iki karakter, kıyamet sonrası Manhattan harabelerinde birlikte hayatta kalmaya çalıştıkları 'Dead City'nin başrolleri.\n\nHayranların asıl sorusu şu: Aradan on yıl geçmiş ve karakterler büyük ölçüde değişmiş olsa bile Maggie'nin sarhoşken kocasının katilinin yüzünü okşaması, hikâyenin inandırıcılığını \"saçma bir hayran kurgusuna\" mı dönüştürüyor? Twitter, \"mahvolduk\" diyenlerle \"senaristler Rick-Negan dostluğunu mahvetti, şimdi de Maggie barda onunla flört ediyor\" diyenler arasında bölünmüş durumda. Yeni sezon 2026 sonbaharında AMC'de başlayacak.",
    image: "/__l5e/assets-v1/a2edc728-3929-40b8-b329-4ba33b77fdac/d6a2c270afe4.webp",
    source: "Kotaku",
  },
  {
    slug: "house-of-the-dragon-link-zelda-oyuncu",
    title: "“House of the Dragon”, yeni Link oyuncusunun yeteneğine harika bir bakış sunuyor",
    excerpt: "“House of the Dragon”ın bu haftaki bölümü, Benjamin Evan Ainsworth'ü Prens Daeron Targaryen olarak karşımıza çıkarıyor. Ainsworth, yakında gelecek canlı çekim “Legend of Zelda” filminde Link'i canlandıracak oyuncu. Kotaku'dan Ash Parrish, performansı Link için “iyi bir işaret” olarak nitelendiriyor.",
    body: "HBO'nun 'House of the Dragon' dizisinin son bölümü, Rhaenyra Targaryen ile Hightower cephesi arasındaki büyüyen çatışmanın yanı sıra yaklaşan 'Legend of Zelda' filmi için önemli bir ön izleme sunuyor: Prens Daeron Targaryen rolünde Benjamin Evan Ainsworth. Ainsworth, Nintendo ve Sony ortak yapımı canlı aksiyon 'Zelda' filminde Link'i canlandırmak üzere seçildi.\n\nDaeron, Kraliçe Alicent ile merhum Kral Viserys'in en küçük oğlu; kitaplarda \"Cesur Daeron\" olarak biliniyor. Kardeşlerinin yozlaşmasından uzak büyümesi umuduyla bebekken saraydan gönderilmiş ve annesinin ailesi Hightower'ların yanında yetişmiş. Ash Parrish'e göre Ainsworth'ün performansı gelecekteki Link için iyi bir işaret: Çocuk pek konuşmuyor, duygularını daha çok yüzünde ve bakışlarında taşıyor.\n\nAinsworth daha önce Netflix'in 'The Haunting of Bly Manor' dizisinde rol aldı ve 'Pinocchio'da seslendirme yaptı. Parrish, senaristlerin filmde Link'e mümkün olduğunca az replik vermesini umduğunu yazıyor; çünkü Ainsworth çok az şeyle çok şey anlatabildiğini şimdiden kanıtladı. 'Legend of Zelda' filmi, Mart 2027'de Sony Pictures tarafından gösterime sokulacak.",
    image: "/__l5e/assets-v1/e082e493-6148-499f-af77-972a21e52318/c4026ab14fb0.webp",
    source: "Kotaku",
  },
  {
    slug: "euphoria-kendini-astti-3-sezon",
    title: "“Euphoria” hem ekranda hem de ekran dışında kendi sınırlarını aştı",
    excerpt: "CNN'e göre 2019'da mütevazı bir HBO dizisi olarak başlayan “Euphoria”, yıldızlarının dünya çapındaki şöhreti ve süreçte yaşanan trajedilerle üçüncü sezona girerken kendi ölçeğine sığmaz hâle geldi.",
    body: "CNN yazarı Alli Rosenbloom'a göre 'Euphoria' 2019'da başladığında her şey farklıydı. Sydney Sweeney ile Jacob Elordi henüz yeni yüzlerdi; Zendaya'nın Marvel'ın 'Spider-Man' serisinin ardından böylesine sert bir role soyunması konuşuluyordu. Eric Dane ile Angus Cloud hâlâ aramızdaydı ve rapçi Drake'in yürütücü yapımcılardan biri olması şaşırtmıştı.\n\nAradan geçen yedi yılda dizi, hem sanatsal iddiası hem de yıldızlarla dolu kadrosuyla küresel bir fenomene dönüştü. Ancak ekran dışındaki dramlar da büyüyüp dizinin önüne geçti. Angus Cloud'un 2023'teki zamansız ölümü ve Eric Dane'in ALS teşhisini kamuoyuna açıklaması, yapım sürecini derinden etkiledi. Zendaya iki Emmy kazandı; Sweeney bağımsız bir sinema imparatorluğu kurdu; Elordi ise 'Saltburn' ve 'Priscilla' ile en gözde yıldızlar arasına girdi.\n\n3. sezon 2026 sonbaharında geldiğinde 'Euphoria' artık yalnızca bir gençlik draması olmayacak; popüler kültürün kendi sınırlarını sınayan bir inceleme konusu hâline gelecek. Rosenbloom'a göre asıl soru şu: \"Kendi sınırlarını bu kadar aşmış bir dizi, ilk günkü ruhunu hâlâ koruyabilir mi?\"",
    image: "/__l5e/assets-v1/a4fa6036-2f2f-49d5-957d-9de485e0b3b3/af79af480720.jpg",
    source: "CNN",
  },
  {
    slug: "ed-harris-dutton-ranch-misled",
    title: "Ed Harris, “Dutton Ranch” konusunda “yanıltıldığını” söyledi: “Beni buradan çıkarın”",
    excerpt: "Oscar adayı Ed Harris, Taylor Sheridan'ın “Yellowstone” yan dizisi “Dutton Ranch”teki rolünün önemi konusunda yanıltıldığını açıkladı. Variety'ye verdiği röportajda, ilk sezonun ortasında ekibine “onu oradan çıkarmalarını” söylediğini itiraf etti.",
    body: "Ed Harris, Paramount+'ın 'Yellowstone' evrenindeki yeni dizisi 'Dutton Ranch'teki rolünden duyduğu memnuniyetsizliği açıkça dile getirdi. Apple TV'nin 'The Dink' galasında Variety'ye konuşan oyuncu, dört ana karakterden biri olacağı sözüyle projeye katıldığını, ancak gerçeğin çok farklı çıktığını söyledi.\n\nHarris, \"İmza atmadan önce sezonun nasıl olacağı, karakterimin neler yapacağı ve dört başrolden biri olacağım bana uzun uzun anlatıldı,\" diyor. \"Ama gerçekte pek öyle olmadı.\" 1. sezonun ortasına gelindiğinde ekibine \"beni buradan çıkarın\" demeye başladığını itiraf ediyor.\n\nHarris'in karakteri Everett McKinney, Beth Dutton'la (Kelly Reilly) yolu kesişen gizemli bir figür olarak tanıtılmıştı. Ancak oyuncuya göre bölümler ilerledikçe \"önemsiz\" bir role indirgendi. Taylor Sheridan cephesinden henüz bir yanıt yok. Paramount+'ta 'Dutton Ranch'in 2. sezon hazırlıkları duyuruldu, ancak Harris'in dönüp dönmeyeceği belirsiz.",
    image: "/__l5e/assets-v1/af8c66bc-81ac-4b2a-ae4e-ad2aefe0df8c/036274aabc2a.webp",
    source: "Variety",
  },
  {
    slug: "afterlife-with-archie-disney-plus",
    title: "“Afterlife With Archie” dizisine Disney+'tan yeşil ışık",
    excerpt: "“Riverdale” ekibinin uzun süredir geliştirdiği Archie Comics uyarlaması sonunda dizi onayını aldı. Riverdale kasabasını altüst eden bir zombi salgınını konu alan yapım, 2027'de Cadılar Bayramı civarında başlayacak.",
    body: "Disney+, uzun süredir geliştirilen 'Afterlife With Archie' çizgi roman uyarlamasına onay verdi. 2025'te senaryodan diziye geçiş taahhüdüyle başlayan proje, artık tam dizi siparişine dönüştü; hedef, 2027 Cadılar Bayramı civarında izleyiciyle buluşmak.\n\nRoberto Aguirre-Sacasa ile Francesco Francavilla'nın 2013'te başlattığı çizgi roman, Sabrina Spellman'ın Jughead Jones'un ölen köpeği Hot Dog'u kara büyüyle diriltmesiyle Riverdale'de başlayan zombi salgınını anlatıyor. Bu karanlık ton, 'Riverdale' ve 'Chilling Adventures of Sabrina'dan tanıdığımız Aguirre-Sacasa dokunuşunun şimdiye kadarki en uç örneği.\n\nDizinin yapımını Aguirre-Sacasa ile 'Riverdale'in yürütücü yapımcıları üstlenecek. Oyuncu kadrosu henüz açıklanmadı. Archie Comics evreninin bu en karanlık kolu, Disney+'ın yetişkinlere yönelik içerik stratejisinin bir parçası olarak konumlandırılıyor.",
    image: "/__l5e/assets-v1/5a264360-b686-454b-8a70-3aaace73f73e/b28feaee59fa.webp",
    source: "Variety",
  },
  {
    slug: "widows-bay-hiro-murai-roportaj",
    title: "Hiro Murai, “Widow's Bay” finalini anlatıyor: “Stephen King, Parks and Recreation'ı yeniden yazsa böyle olurdu”",
    excerpt: "Apple TV'nin sürpriz hiti “Widow's Bay”in ilk sezon finalini yöneten Hiro Murai, Rolling Stone'a diziyi, King etkilerini ve komedi-korku dengesini anlatıyor: “Katie Dippold'ın senaryolarını ilk okuduğum anda hemen evet dedim.”",
    body: "Katie Dippold'ın yarattığı Apple TV korku komedisi 'Widow's Bay', ilk sezonunu tamamlayıp dönemin en beklenmedik başarılarından birine dönüştü. Dizi, nostaljik korku kalıplarını komedi kılığında yeniden yorumluyor; neredeyse Stephen King'in 'Parks and Recreation'ı yeniden yazması gibi. Stephen King külliyatından 'Jaws'a, John Carpenter'dan 'A Clockwork Orange'a uzanan göndermelerle dolu.\n\nSezonun beş bölümünü yöneten ve yürütücü yapımcı olarak görev alan Hiro Murai ('Atlanta', 'Station Eleven'), projeye nasıl katıldığını Rolling Stone'a anlattı: \"Katie'nin senaryosunu okuduğumda aynı anda hem ne kadar komik hem de ne kadar gerçekten korkutucu olduğuna şaşırdım. Aynı sahnede iki tonu da canlı tutmak inanılmaz zor, ama Katie'nin sesi öylesine kendine özgü ki hemen kabul ettim.\"\n\nMurai, sezon finalinin şaşırtıcı dönüşlerine de değindi (SÜRPRİZ GELİŞME UYARISI). Stephen Root, Matthew Rhys ve Kate O'Flynn'ın canlandırdığı karakterler arasında yükselen gerilimi \"karakter temelli dehşet\" diye tanımlıyor: \"Bir korku yaratığı ortaya çıkarmak kolay; asıl korku, seyircinin gerçekten sevdiği bir karakterin başına kötü bir şey gelmesidir.\"\n\nApple TV diziye ikinci sezon onayı verdi. Murai, ikinci sezonun daha da \"karanlık ve tuhaf\" olacağını, ancak komedi tonunu koruyacağını söylüyor: \"Katie'yle birlikte bu dünyada hâlâ yapılacak çok şey olduğunu düşünüyoruz.\"",
    image: "/__l5e/assets-v1/56896424-48bb-4e23-a605-ccab7bd09ca1/c7cfd86b0358.webp",
    source: "Rolling Stone",
  },

  {
    slug: "lanterns-hbo-tom-king-cia-green-lantern",
    title: "Tom King, HBO'nun “Lanterns” dizisiyle Green Lantern'ı “True Detective”e dönüştürüyor",
    excerpt: "Çizgi roman yazarı Tom King, “WandaVision” ve “Supergirl”ün ardından HBO'nun yeni DC dizisi “Lanterns”ta Green Lantern mitolojisini yeryüzüne indirip ayakları yere basan bir polis dramasına dönüştürüyor.",
    body: "Çizgi roman yazarı Tom King'in dokunduğu her şey altına dönüşüyor: 2021'de Marvel için 'WandaVision', 2026'da DC için 'Supergirl'. Şimdiyse HBO'nun 'Lanterns' dizisiyle yeni DC evrenini şekillendiren kilit isimlerden biri.\n\nGreen Lantern karakteri Hollywood için her zaman zorlu bir sınav oldu. Ryan Reynolds'ın 2011 tarihli 'Green Lantern' filmi hâlâ efsanevi bir fiyasko. King, Variety röportajında bu kez bambaşka bir yaklaşım benimsediklerini söylüyor: \"'Lanterns'ı, 'True Detective'deki Matthew McConaughey ve Woody Harrelson karakterleri gibi ayakları yere basan, gerçekçi dedektifler olarak yeniden düşündük.\n\nBu bir aksiyon dizisi ya da uzay operası değil. Bunun yerine iki Green Lantern'ın Dünya'da yürüttüğü cinayet soruşturmasını karanlık bir polisiye biçiminde izleyeceğiz. King, DC'nin CIA odaklı hikâyelerine, özellikle 'Sheriff of Babylon' ve 'The Human Target' çizgi romanlarına uzun zamandır ilgi duyduğunu, 'Lanterns'ı da aynı damarın televizyondaki uzantısı olarak tasarladığını söylüyor. Dizinin 2026'nın sonlarında HBO Max'te başlaması planlanıyor.",
    image: "/__l5e/assets-v1/9aa97bb1-1201-4211-a6c7-2bea5c71c997/248bbafa7dd3.jpg",
    source: "Variety",
  },
  {
    slug: "hacks-emmy-rekoru-final-sezon",
    title: "“Hacks”, final sezonuyla komedi dalında Emmy rekorunu kırdı",
    excerpt: "HBO Max'in “Hacks” dizisi, beşinci ve son sezonuyla 24 Emmy adaylığı kazanarak komedi dizileri tarihinde tek sezonda en fazla adaylık alan yapım oldu. Önceki rekor “The Studio”ya aitti.",
    body: "HBO Max'in Jean Smart başrollü komedisi 'Hacks', final sezonuyla 24 Emmy adaylığı toplayarak bir komedi dizisinin tek sezonda en çok adaylık kazanma rekorunu kırdı. Önceki rekor 'The Bear'a, ardından da 'The Studio'ya (23) aitti.\n\nYaşlanan Las Vegas efsanesi Deborah Vance ile kariyerini yeniden ateşleyen Y kuşağından yazar Ava'yı izleyen 'Hacks', beşinci sezonuyla sona erdi. Variety'ye göre mesele yalnızca final sezonuna gösterilen sevgi değil; dizinin kalitesini sonuna kadar koruması. Emmy tarihinde çok az yapım bunu başarabildi; dikkat çekici örneklerden biri 'Schitt's Creek'.\n\nAdaylar arasında Jean Smart (Komedide En İyi Kadın Başrol), Hannah Einbinder (En İyi Yardımcı Kadın Oyuncu), Christopher McDonald ve Paul W. Downs (En İyi Yardımcı Erkek Oyuncu) var. En iyi komedi dizisi, yönetmenlik, senaryo ve teknik başarı başta olmak üzere önemli kategorilerin çoğunda da yer alıyor. 78. Primetime Emmy Ödülleri 14 Eylül'de sahiplerini bulacak.\n\nDizinin kaç Emmy'yle döneceği henüz belli değil, ancak 'Hacks', tıpkı kendi Deborah Vance'i gibi \"zirveye çıkıp orada bırakmak\" fikrinin örneklerinden birine dönüşüyor.",
    image: "/__l5e/assets-v1/f9b255c0-7bef-4bb0-a743-a6d7e51bfb1e/a9ddb422b97c.webp",
    source: "Variety",
  },
  {
    slug: "temmuz-2026-en-iyi-yeni-diziler",
    title: "Temmuzda izlenecek 10 dizi: “The Hawk”tan yeni “Little House on the Prairie” uyarlamasına",
    excerpt: "BBC Culture'ın Temmuz 2026 seçkisi: Will Ferrell'ın golf komedisi “The Hawk”, “Legally Blonde”un öncesini anlatan “Elle”, Netflix'in yeni “Little House on the Prairie” uyarlaması ve daha fazlası.",
    body: "BBC Culture eleştirmeni Caryn James, Temmuz 2026'nın öne çıkan 10 dizisini seçti. Liste, komediyle golfü cesurca birleştiren bir yapımdan yeni bir dönem draması uyarlamasına kadar geniş bir yelpazeye uzanıyor.\n\n**1. Elle (Prime Video, 1 Temmuz).** Reese Witherspoon'ın yapımcılığını üstlendiği bu 'Legally Blonde' öncülü, 1995'te Bel Air'den Seattle'a taşınan Elle Woods'u (Lexi Minetree) izliyor. Elle, grunge ortamında pembe bir hayal gibi öne çıkıyor. Witherspoon, Netflix'in 'Wednesday' dizisinden ilham aldığını söylüyor.\n\n**2. Little House on the Prairie (Netflix, 9 Temmuz).** Laura Ingalls Wilder'ın sevilen kitap serisinin yeni uyarlaması. 1868'de Wisconsin'den Kansas'a göç eden Ingalls ailesini izliyor; Osage halkına daha anlayışlı yaklaşımıyla klasik yapımdan ayrılıyor.\n\n**3. The Five Star Weekend (Peacock, 9 Temmuz).** Jennifer Garner, hayatının farklı dönemlerinden dört arkadaşını Nantucket'ta bir araya getiren dul bir yazarı oynuyor. Chloe Sevigny, Regina Hall ve Gemma Chan de başrollerde.\n\n**4. The Westies (MGM+, 12 Temmuz).** 1980'lerin New York'unda İrlanda mafyasını konu alan, J.K. Simmons başrollü bir polisiye drama.\n\n**5. Ride or Die (Prime Video, 15 Temmuz).** Octavia Spencer ile Hannah Waddingham'ın başrollerini paylaştığı, 'Thelma & Louise' damarında bir aksiyon komedisi. Bill Nighy tehditkâr bir patronu oynuyor.\n\n**6. The Hawk (Netflix, 16 Temmuz).** Will Ferrell'ın golf komedisi. Molly Shannon, Jimmy Tatro ve Luke Wilson'ın rol aldığı yapım, 2004 şampiyonu bir golfçünün geri dönüşünü anlatıyor.\n\n**7. Heartstopper Forever (Netflix, 17 Temmuz).** Nick ile Charlie'nin hikâyesini sonlandıran uzun metrajlı final.\n\n**8. Lucky (Apple TV, 15 Temmuz).** Anya Taylor-Joy'un başrolünde olduğu, Annette Bening ve Timothy Olyphant'ın eşlik ettiği bir polisiye gerilim.\n\n**9. Stuart Fails to Save the Universe (HBO Max, 23-24 Temmuz).** 'The Big Bang Theory' evreninin en yeni yan dizisi. Kevin Sussman'ın karakteri Stuart, kendisini alternatif bir evrende mahsur buluyor.\n\n**10. Furious (Hulu / Disney+, 27 Temmuz).** Emmy Rossum başrollü psikolojik gerilimde gizemli seri katili Lola Petticrew canlandırıyor.\n\nTemmuz sonuna kadar platformlarda yerini alacak bu 10 yapımla, ister nostalji ister yeni sesler arayanlar için menü hayli zengin.",
    image: "/__l5e/assets-v1/480798bf-4801-4d7f-9364-8de4a44e9aa2/fdc3750a0d9c.webp",
    source: "BBC Culture",
  },
  {
    slug: "the-westies-inceleme-jk-simmons",
    title: "“The Westies” incelemesi: MGM+'ın şık ama sıradan mafya dramasını J.K. Simmons ve Titus Welliver sırtlıyor",
    excerpt: "1980'lerin New York'undaki İrlandalı çeteler arasında geçen “The Westies”, teknik açıdan özenli olsa da karakter derinliği ve özgünlük söz konusu olduğunda türün en bildik klişelerine yaslanıyor.",
    body: "MGM+'ın yeni mafya draması 'The Westies', hikâye düzeyinde kurallara boyun eğmeyen insanları izliyor. 1980'lerin New York'undaki İrlandalı ve İtalyan suç örgütlerinde alt kademedeki gangsterler, uzak durmaları söylenen rakiplere saldırıyor; orta kademedekiler, patronlarının yasakladığı uyuşturucuyu satıyor. Ancak üst anlatı düzeyinde dizi bunun tam tersini yapıyor: Sekiz saatlik sezon boyunca çizgilerin dışına hiç çıkmıyor.\n\nAngie Han, THR eleştirisinde J.K. Simmons (Eamon Sweeney) ile Titus Welliver (yozlaşmış NYPD polisi Glenn Keenan) eşleşmesinin yeterince güçlü olduğunu belirtiyor. Ancak 'Godfather of Harlem'ın yaratıcıları Chris Brancato ile Michael Panes, son derece yetkin ama fazlasıyla tanıdık bir gangster dizisi sunuyor.\n\nPilot bölümünü Alan Taylor'ın yönettiği hikâye, İrlandalı Westies ile John Gotti'nin de içinde bulunduğu İtalyan Gambino ailesi arasındaki ateşkesle açılıyor. İki patron, Sweeney ve Paul Castellano, Javits Center inşaatından birlikte kâr etmek için savaşı durdurmaya karar veriyor. Ancak alt kademedekiler barıştan memnun değil. Tom Brittney'nin genç Jimmy Roarke'u ile Hamish Allan-Headly'nin genç John Gotti'si bu hoşnutsuzluğu temsil ediyor. FBI ajanı Birdie Polk (Jessica Frances Dukes) ise örgütün etrafında dolaşıyor.\n\n**Neyi doğru yapıyor?** Tempo akıcı, gerilim istikrarlı; yapım tasarımcısı Rocco Mateo'nun yıpranmış New York'u son derece inandırıcı. Simmons ve Welliver, satır aralarına yorgunluk hissi ve bir iç dünya sığdırabiliyor. Sıradan bir izleyici bile olup biteni rahatça takip edebilir.\n\n**Neyi yanlış yapıyor?** Karakterlerin neredeyse hiçbiri bir \"birey\" olarak var olmuyor. Başkarakter Jimmy, sırf kahramanların öyle olması gerektiği için \"iyi ve zeki\". Sevgilisi Bridget (Sarah Bolger) ve onun IRA geçmişiyle ilgili yan hikâye potansiyel taşıyor, ama ana hikâyeden neredeyse kopuk duruyor. Yakın arkadaşı Mickey ise \"öfkeli alt kademe gangster\" kalıbının neredeyse parodisi.\n\nEn zarar verici tercih, John Gotti'yi bütünüyle klişeye indirgemek: Sanki alt kademeden biri ona hakaret etmiş gibi kahkahaya boğularak tanıtılıyor. Çünkü elbette öyle olması gerekiyor.\n\nHan'ın hükmü net: Coppola, Scorsese ve David Chase'in klasikleri üslup, karakter ve fikri aynı anda ustalıkla örerken 'The Westies', yalnızca bu geleneğin siluetini takip ediyor. \"Nefret edilemeyecek kadar pürüzsüz, sevilemeyecek kadar sıkıcı\" bir dizi. Yayın tarihi: 12 Temmuz Pazar, MGM+.",
    image: "/__l5e/assets-v1/ad2f3f9c-dfc3-41d1-8ef2-6dcff041bd9d/89c23cde868e.webp",
    source: "The Hollywood Reporter",
  },
  {
    slug: "ariana-grande-ahs-13-ayrildi",
    title: "Ariana Grande, “American Horror Story”nin 13. sezonundan ayrıldı: Sebep “Eternal Sunshine” turnesi",
    excerpt: "Yeni sezon kadrosunda yer alacağı açıklanan Ariana Grande, 23 Ağustos'ta Londra'da sona erecek “Eternal Sunshine” dünya turnesiyle takvim çakışması nedeniyle “American Horror Story: 13” kadrosundan ayrıldı.",
    body: "The Hollywood Reporter'ın doğruladığı habere göre Ariana Grande, 'American Horror Story'nin 13. sezonunda yer almayacak. Nedeni, 23 Ağustos'ta Londra'da sona erecek 'Eternal Sunshine' dünya turnesiyle yaşanan takvim çakışması.\n\nGrande'nin katılımı, Ryan Murphy Productions'ın Cadılar Bayramı'ndaki sosyal medya paylaşımıyla duyurulmuştu. Yeni sezonda Sarah Paulson, Evan Peters, Angela Bassett, Kathy Bates, Emma Roberts, Billie Lourd, Gabourey Sidibe, Leslie Grossman ve Jessica Lange geri dönüyor. Kadro, üçüncü sezon 'Coven'daki karakterlerini yeniden canlandırmak için New York'ta çekimlere başlamıştı.\n\nGrande daha önce 2015'te Fox'un 'Scream Queens' dizisinde Ryan Murphy'yle çalışmıştı. Son yıllarda oyunculuğa ağırlık vererek 'Wicked' ve 'Wicked: For Good'da başrol üstlendi. Sırada Meet the Parents serisinin dördüncü filmi 'Focker In-Law' ile Jon M. Chu'nun animasyon uyarlaması 'Oh, the Places You'll Go!' var.\n\n13. sezonun kısa tanıtımı, dizinin onlarca yıllık mirasını taçlandıracak \"süper bir sürpriz\" vadediyor: \"Herkesin en çok korktuğu on üç sayısına layık, hayranların gözdesi rollerine dönen yıldızlarla dolu bir sezon.\" Dizi 24 Eylül Perşembe FX'te başlayacak; ertesi gün ABD'de Hulu'da, uluslararası olarak da Disney+'ta yayımlanacak.\n\nGrande'nin AHS kadrosundan ayrılması projeyi geciktirmiyor, ancak yoğun müzik takvimiyle prestijli antoloji dizileri arasındaki gerilime bir örnek daha ekliyor.",
    image: "/__l5e/assets-v1/00ce16a2-057d-4ac4-87b6-95b959fa361d/4463a1613fee.webp",
    source: "The Hollywood Reporter",
  },
  {
    slug: "house-of-david-s3-yenilendi",
    title: "Prime Video, “House of David”e 3. sezon onayını verdi",
    excerpt: "Wonder Project imzalı “House of David”, Prime Video'da üçüncü sezon onayını aldı. Yeni sezon, David'in çobanlıktan savaşçılığa, oradan da tahta uzanan yolculuğunun sürgün dönemini ele alacak.",
    body: "Amazon Prime Video, Wonder Project yapımı 'House of David'e üçüncü sezon onayı verdi. Yaratıcılar ve baş yapımcılar Jon Erwin ile Jon Gunn, diziyi benimseyen milyonlarca izleyiciye minnettar olduklarını söylüyor. Üçüncü sezon, David'in hayatının en belirleyici dönemlerinden birini, tahta çıkmadan önceki sürgün yıllarını ele alacak.\n\n**Konu.** Üçüncü sezonda David, \"dışlanmış bir çobandan çetin bir savaşçıya, oradan da kaçınılmaz kaderi olan taca\" uzanan yolculuğunu tamamlıyor. Ancak tahttan önce sürgün var: David, düşmanlarının arasında saklanmak zorunda kalan bir kaçağa dönüşüyor. Sezon; kaderin gerçek bedeline, ihanetlere, geride bırakılan kimliklere ve bir kahramanın yükselmeden önce verdiği fedakârlıklara odaklanacak.\n\n**Oyuncu kadrosu.** Michael Iskander (David), Ali Suliman (Kral Saul), Ayelet Zurer (Kraliçe Ahinoam) ve Stephen Lang (Samuel) geri dönüyor. Indy Lewis, Yali Topol Margalith, Ethan Kai, Sam Otto, Oded Fehr, Louis Ferreira, Davood Ghadami, Ashraf Barhom ve Alexander Uloom da kadroyu tamamlıyor.\n\n**Yapımcı açıklaması.** Wonder Project CEO'su Kelly Merryman Hoogstraten, \"Amacımız, dirençli ve ilham veren evrensel hikâyeler etrafında seriler kurmak,\" diyor. Amazon MGM Studios drama sorumlusu Kara Smith ise dizinin küresel başarısını ve \"nefes kesen ölçek ile duygusal sahicilik\" arasındaki dengesini vurguluyor.\n\n**Yapım.** Diziyi Wonder Project ve Amazon MGM Studios; Nomadic Pictures, Argonauts, Kingdom Story Company ve Lionsgate Television iş birliğiyle hazırlıyor. Yürütücü yapımcılar arasında Justin Rosenblatt, Gavin J. Behrman, Adam Abel, Chad Oakes, Michael Frislev ve Erik Mountain yer alıyor.",
    image: "/__l5e/assets-v1/59d5dac8-e5f0-4f2f-92f0-e85496bfbdb1/629a2988766f.webp",
    source: "The Hollywood Reporter",
  },
  {
    slug: "alien-earth-s2-yeni-oyuncular",
    title: "“Alien: Earth”ün 2. sezon kadrosuna Tracey Ullman, Sam Spruell ve Jerome Flynn katıldı",
    excerpt: "Noah Hawley'nin FX dizisi “Alien: Earth”ün ikinci sezon çekimleri Londra'da başladı. Kadroya çok sayıda Emmy ödülü bulunan Tracey Ullman, “Fargo”dan tanıdığımız Sam Spruell ve “Game of Thrones” oyuncusu Jerome Flynn katılıyor.",
    body: "FX'in Noah Hawley imzalı 'Alien: Earth' dizisinin ikinci sezon çekimleri Londra'da başladı. Kadroya üç dikkat çekici isim katıldı: Emmy ödüllü komedyen ve oyuncu Tracey Ullman; 'Fargo'nun beşinci sezonundaki \"günah yiyici\" Ole Munch rolüyle hatırlanan Sam Spruell; 'Game of Thrones' ve Yellowstone öncülü '1923'ten tanınan Jerome Flynn.\n\nYeni isimler; Sydney Chandler, Alex Lawther, Timothy Olyphant, Essie Davis, Babou Ceesay, Samuel Blenkin, Adarsh Gourav, Jonathan Ajayi, Erana James, Lily Newmark, Adrian Edmondson, David Rysdahl, Moe Bar-El ve Sandra Yi Sencindiver'ın yer aldığı geri dönen kadroya ve daha önce duyurulan Peter Dinklage'a katılıyor.\n\nSpruell ile Hawley, 'Fargo'nun beşinci sezonunda da birlikte çalışmıştı. Yeni sezondaki rolleri hakkında henüz ayrıntı verilmedi.\n\nİlk sezon büyük bir merak unsuruyla bitmişti. Finalden sonra THR'a konuşan Hawley, \"Bu sayfa kapandı ama Yutani güçleri iniş yapıyor. Güç dengesi değişti,\" demişti. Bir diğer kilit sözü de şuydu: \"Bu çocukların başlarına ne geleceğinden haberleri yok.\" Hawley'nin ikinci sezon için işaret ettiği tema, ilk sezonun zafer dolu \"Artık yönetim bizde\" anının ne kadar çabuk tehdit altına girebileceği.\n\n**Oyuncu kadrosundan kısa notlar.** Ullman son olarak CBS'in 'Elsbeth' dizisine konuk oldu ve 'Ted Lasso'nun dördüncü sezonunda görünecek; son yıllarda 'Black Doves', 'Curb Your Enthusiasm' ve 'Mrs. America'da da yer aldı. Spruell, HBO'nun 'A Knight of the Seven Kingdoms' dizisinden geliyor. Flynn ise 'Game of Thrones', '1923' ve 'John Wick: Chapter 3 – Parabellum' ile tanınıyor.",
    image: "/__l5e/assets-v1/138f0fb0-cf0d-41f4-9280-84e84affde1a/5a3670c2f5cd.webp",
    source: "The Hollywood Reporter",
  },

  {
    slug: "cape-fear-asit-sekansi-goruntu-yonetmeni",
    title: "“Cape Fear”ın LSD sekansı için yepyeni görsel teknikler gerekti",
    excerpt: "Görüntü yönetmeni Celiana Cárdenas, Apple TV'nin “Cape Fear” dizisinin altıncı bölümündeki LSD deneyimini ekrana taşımak için objektif, görüntü oranı ve renk kullanımında köklü değişiklikler yaptı.",
    body: "Martin Scorsese'nin 1991 tarihli 'Cape Fear' uyarlaması, bir Hollywood stüdyosundan çıkan görsel açıdan en cesur filmlerden biriydi. Hızlı çevrinmeler, hızlandırılmış kamera hareketleri ve alışılmadık açılar; Bowden ailesinin (Nick Nolte, Jessica Lange, Juliette Lewis) ve Robert De Niro'nun ikonik kötü karakteri Max Cady'nin ruh hâllerini ekrana taşıyordu. Nick Antosca yönetiminde hazırlanan yeni Apple TV dizisi 'Cape Fear', Scorsese'nin cüretini on saatlik bir formata yayıyor. Görüntü yönetmenleri Celiana Cárdenas ile Eben Bolter, Scorsese'nin bazı tekniklerini içselleştirirken kendilerine özgü bir görsel dil kuruyor.\n\nIndieWire'a konuşan Cárdenas, her bölümün farklı bir tonu olduğunu vurguluyor: \"Karakterlerin nerede olduğunu, kameranın nesnel mi öznel mi olması gerektiğini anlamak çok önemliydi.\" En cesur öznel kamera denemesi altıncı bölümde geliyor: Max Cady ya da başka biri, Bowden ailesinin içkisine LSD katıyor. Cárdenas ile yönetmen Trey Edward Shults, bu deneyimi klişe görsel bozulmalar yerine daha içsel bir huzursuzluk olarak yansıtmayı seçmiş.\n\n\"Dizi, Atlas Mercury objektiflerle 2.35:1 görüntü oranında çekiliyor. 'Neden daha yumuşak, daha rüya gibi bir şeye geçmiyoruz?' dedim.\" Cárdenas, Atlas objektiflerden 1960'ların eski Super Baltar objektiflerine geçiyor; görüntü oranını da yavaş yavaş 2.35'ten daha dikey bir biçime kaydırıyor. LSD etkisini gösterdikçe alıştığımız siyah bantlı görüntü, televizyon ekranını daha fazla doldurmaya başlıyor. İnce ama etkili bu dokunuşlar, seyircinin ne olduğunu tam anlamadan Bowden ailesinin ayakları altındaki zeminin kaydığını hissetmesini sağlıyor. Ortaya, Scorsese'nin ruhuna sadık kalırken tamamen kendine ait bir görsel kimlik kuran bir 'Cape Fear' çıkıyor.",
    image: capeFearAsset.url,
    source: "IndieWire",
  },

  {
    slug: "the-bear-s5-final-anilar",
    title: "“The Bear” finali her şeyden önce anılarla ilgili",
    excerpt: "Beşinci sezonun kapanışı, seçici bir hafızayla izlendiğinde en iyi hâlini buluyor: Michelin gerilimi arka plana çekilirken asıl ağırlık, Carmy ve ekibinin kurduğu “ailenin” geride bıraktığı anılara düşüyor.",
    body: "*The Bear*'ın beşinci sezon finali, bir restoran hikâyesinden çok bir aile albümü gibi kapanıyor. Christopher Storer bu son bölümü bilinçli olarak seçici bir hafızayla kurmuş: Michelin yıldızı meselesi çoktan çözülmüş olsa da ekibin son servisindeki gerilimi hissetmek için bu bilgiyi bir anlığına kenara bırakmanız isteniyor. Bu, finalin hem en cesur hem de en tartışmalı hamlesi.\n\nDördüncü sezonda The Bear iki Michelin yıldızı kazanmıştı, ancak mutfak ekibinin haberi yoktu. Peter Clark (Gary Janetti) adlı sessiz bir müşteri o karlı gece gelmiş, karar da Richie'nin (Ebon Moss-Bachrach) tatildeki bir aileye gösterdiği özen sayesinde verilmişti. Beşinci sezon boyunca senaryo Clark'ı bize unutturmaya çalışıyor. 7. bölümdeki \"Mr. Dearborn\" servisinin gerilimi böyle korunuyor. Ancak bu \"hatırla ve unut\" oyunu, izleyicinin finali karşılayışını doğrudan şekillendiriyor.\n\nFinalin en güçlü yanı, karakterlerin duygusal yolculuklarını olay örgüsünün önüne koyması. Syd (Ayo Edebiri) yıldızları kazandıran deniz taraklarını hazırlarken mutfağa yayılan pembe ve mor ışıklar içindeki üç dakikalık ağır çekim, son sezonun gerçek başrolünün kim olduğuna güçlü bir işaret. Yine de kapanış saatlerinde Syd arka plana çekiliyor; final kaçınılmaz olarak Carmy'ye (Jeremy Allen White) dönüyor.\n\nCarmy'nin sonu bilerek belirsiz bırakılmış. Bonnie Hunt'ın canlandırdığı mimarla iş görüşmesinde \"taze bezelye\" sözünü duyduğunda gözlerinde beliren kıvılcım yeterli: Bu adam mutfaktan uzun süre uzak kalamayacak. Restorana dönmesi, üniformasını giymesi ve Mikey'ye \"İyiyim\" mesajını atması bir aidiyet ilanı. Carmy artık yalnızca kaosun içinde hayatta kalmaya çalışan biri değil; huzuru, kederi ve kahkahayı aynı serviste bir arada tutabilen bir şef.\n\nHerkes mutlu sona kavuşuyor: Richie ilk kez uçağa biniyor, Tina terfi alıyor, Marcus babasıyla barışıyor, Ebra şubeleşme planını yürütüyor, Natalie ise huzurlu bir iş-yaşam dengesi buluyor. Her biri tek başına dokunaklı; ancak hepsi bir saatlik bölüme yığılınca, fazla peynir sosuna boğulmuş bir İtalyan usulü etli sandviç gibi biraz ağır geliyor.\n\nSonuçta *The Bear*'ın kapanışı, dizinin kendisi gibi: Dengesiz ama içten, gergin ama sıcak. Yıllar boyunca \"bütün bu insanları bir arada görmenin\" bizim için ne anlam taşıdığını fark edince senaryodaki küçük tutarsızlıklar arka plana çekiliyor. Hatırlayacağımız şey iki Michelin yıldızı değil, bir mutfağın etrafında büyüyen aile olacak.",
    image: "/__l5e/assets-v1/ab48afc1-57ab-4f40-ac16-2fdfb2e8819f/eb866eafb812.webp",
    source: "IndieWire",
  },
  {
    slug: "house-of-the-dragon-s3-b3-rhaenyra-corlys-catlagi",

    title: "“House of the Dragon” 3. sezon 3. bölüm: Rhaenyra ile Corlys arasındaki çatlak büyüyor",
    excerpt: "Demir Taht'ta oturmanın yükü Rhaenyra'nın omuzlarına çökerken en güçlü müttefiklerinden Lord Corlys Velaryon ile arasında geri dönüşü olmayan bir kriz patlak veriyor. Bu çatlak, Siyahlar'ın deniz gücünün geleceğini tehdit edebilir.",
    body: "Bilge biri, \"Taç giyen baş ağırdır,\" demiş. 'House of the Dragon'ın üçüncü sezonunun üçüncü bölümü, Rhaenyra'nın hikâyesini tam da bu sözle özetliyor. Oğullarının kanlı ölümlerinden sonra nihayet Iron Throne'a oturan Rhaenyra, halkın gönlünü kazanmış olabilir. Ancak şimdi en büyük müttefiklerinden Lord Corlys Velaryon'la çözülmesi çok zor bir çatışmaya sürükleniyor.\n\nBölümde Corlys, Addam, Alyn ve Rhaenyra samimi bir akşam yemeğinde buluşuyor. Corlys ile Alyn'in Rhaenyra adına savaştığı Gullet Savaşı, pek çok askerine ve High Tide'ın kendisine mal oldu. Addam ise güvenilir bir ejderha binicisi olarak kraliçesinin yanında durmayı sürdürüyor. Corlys bu masada, Addam ve Alyn'in evlilik dışı oğulları olduğunu, onları resmen tanımak ve Alyn'i varisi ilan etmek istediğini Rhaenyra'ya açıklıyor. Kraliçeden onları Velaryon adı altında meşrulaştırmasını istiyor. Rhaenyra tereddüt edince Corlys konunun üzerine gidiyor.\n\nKonuşmanın devamını görmüyoruz, ancak Rhaenyra, Addam'ı şövalye ilan ederken soyadını \"Hull\" olarak bırakıyor. Addam tek kelime etmese de gözlerindeki kırgınlık belli. Elbette haber kısa sürede Corlys'e ulaşıyor. Rhaenyra'nın karşısına çıkıp oğullarını neden meşrulaştırmadığını soruyor. Kraliçe, kendi oğullarının meşruiyeti zaten sorgulanırken saltanatının bu kadar erken döneminde evlilik dışı çocukları yüceltemeyeceğini söylüyor.\n\nCorlys bunu hanesine hakaret sayıyor ve kendi oğullarının meşruiyeti sorgulandığında onu savunanın kendisi olduğunu hatırlatıyor. Ardından sesini yükseltip hayatta kalan Joffrey dâhil Rhaenyra'nın oğullarının aslında piç olduğunu açıkça ilan ediyor. Rhaenyra öfkeden köpürürken bu konuşma başka kulaklara da ulaşıyor. Peki bu gerilim, 'House of the Dragon'ın geleceği için ne anlama geliyor? Açıkçası iyi bir şey görünmüyor.\n\nBölüm sonunda Rhaenyra, Daeron Targaryen'ı aslında hiç ele geçiremediğini ve Lord Ormund Hightower'ın Tumbleton'ı aldığını öğreniyor. Yeni bir savaş kaçınılmaz görünüyor; ancak Corlys'in desteği olmadan hem sayı hem de deniz gücü açısından ciddi dezavantajda. Üstelik Corlys, Rhaenyra'nın kişisel olarak güvenebildiği, Daemon'dan çok daha az kaotik nadir isimlerden biriydi.\n\nEn tehlikeli ihtimal, Corlys'in Rhaenyra'yı King's Landing'den uzaklaştırmak için Siyahlar'dan Yeşiller'e geçmesi. Aemond ile Vhagar hâlâ sahadayken tükenmiş görünen Yeşiller'in yeniden yükselmesi imkânsız değil. Corlys'in kendi oğlu Addam'a, hatta Baela'ya karşı savaşmayı göze alıp almayacağı belirsiz. Rhaenyra'nın meseleyi bitirmek için Corlys'i öldürtmesi de bir ihtimal; bu hamle onu halkın gözünde bitirir. Ne olursa olsun Rhaenyra, zaten sancılı olan iktidara geçişini daha da zorlaştırdı.",
    image: "/__l5e/assets-v1/637b6fa4-7554-4ffd-a295-042589249bf9/014dee8d16f6.webp",
    source: "Nerdist",
  },
  {
    slug: "matt-smith-hotd-oyunculari-doctor-who-testi",
    title: "Matt Smith, “House of the Dragon” kadrosunu Doctor Who sınavına soktu: Çoğu sınıfta kaldı",
    excerpt: "Matt Smith, HOTD kadrosuna kaçıncı Doctor'ı canlandırdığını ve kendi döneminin hangi yıl başladığını sordu. Fabien Frankel'ın yüksek sesle verdiği yanlış yanıt ve Emma D'Arcy'nin nokta atışı tahmini geceye damga vurdu.",
    body: "Matt Smith, Westeros'ta kılıç sallayıp kaos yaratmadan çok önce, içi dışından büyük mavi bir kutuda zaman ve uzayda yolculuk ediyordu. 'Doctor Who' hayranları ve genel olarak Britanya televizyonunu izleyenler, onun 2010–2013 arasında On Birinci Doktor'u canlandırdığını iyi bilir. Ancak 'House of the Dragon'daki rol arkadaşlarının çoğu, Smith'in kaçıncı Doktor'u hangi yıldan itibaren oynadığını ya bilmiyor ya da ancak tahmin edebiliyor.\n\nVanity Fair için yapılan toplu kadro röportajında Smith, rol arkadaşlarını sıkıştırıp kaçıncı Doktor olduğunu ve hangi yıl başladığını sordu. Ser Criston Cole'u oynayan Fabien Frankel, anında ve yüksek sesle ama yanlış cevap verdi: \"On İkinci Doktor.\" Elbette o rol Peter Capaldi'nindi. Frankel, bir ara Smith'i İkinci Doktor sandığını da itiraf etti. Matt Smith'in doğumundan bir yıl öncesine, 1966'ya uzanan bu tahmin karşısında bütün kadro kahkahaya boğuldu.\n\nFrankel, yılı 2000, Smith'in role başladığı yaşı da 25 tahmin ederek güldürmeyi sürdürdü. Smith karşılık olarak \"Şu anda kaç yaşındasın?\" diye sorunca Frankel, \"Bir hanıma asla yaşı sorulmaz,\" diye şaka yaptı. Matt Smith, Ekim 2026'da 44 yaşına girecek; 'Doctor Who' rolünü üstlendiğinde 26 yaşındaydı.\n\nOlivia Cooke, Doktor'un numarasını bilemedi ama döneminin 2010'da başladığını doğru tahmin etti. Emma D'Arcy doğrudan \"On Birinci Doktor\" yanıtını verdi; Tom Glynn-Carney ise \"On İki\" dedi. Kadronun geri kalanı far ışığına yakalanmış geyikler gibi donup cevap veremedi. Smith doğruları açıklayınca Frankel küfretti, masanın kalanı kahkahaya boğuldu.\n\nKısa video, 'House of the Dragon'da ekranda hissedilen sıcaklığın kamera arkasına da uzandığını gösteriyor. Kadro, Matt Smith hakkında yaygın olarak bilinen bir bilgiyi kaçırmış olabilir; ama onun Daemon Targaryen rolünde hâlâ efsane olduğunu kesinlikle biliyor.",
    image: "/__l5e/assets-v1/54403409-e7b4-42ee-a550-a8a130904559/391fcd2d3b15.webp",
    source: "Nerdist",
  },
  {
    slug: "gilmore-girls-netflixten-prime-videoya-tasindi",
    title: "Bir devrin sonu: “Gilmore Girls”, Netflix'ten ayrılıp Prime Video'ya geçti",
    excerpt: "12 yıldır Netflix'in vazgeçilmezlerinden olan “Gilmore Girls”, 1 Temmuz itibarıyla Prime Video'ya taşındı. 2016 yapımı devam dizisi “A Year in the Life” ise Netflix'te kalıyor.",
    body: "Bir dönem sona erdi. Netflix'in 12 yıldır iç ısıtan vazgeçilmezi olan 'Gilmore Girls', Prime Video'ya taşındı. 2016 yapımı devam dizisi 'Gilmore Girls: A Year in the Life' Netflix'te kalacak, ancak özgün yedi sezon artık başka bir platformun raflarında.\n\nDizide Lauren Graham sivri dilli Lorelai'ı, Alexis Bledel ise çalışkan kızı Rory'yi canlandırıyor. Küçük ve kendine özgü bir kasabada birlikte \"büyüyen\" anne-kızın hikâyesi, Lorelai'ın genç yaşta anneliğini Rory'nin lise ve üniversite yıllarıyla iç içe geçiriyor. Yardımcı karakterlerin her biri kendi başına kült bir favori: Lorelai'ın sonunda birlikte olduğu Luke, en yakın arkadaşı Sookie ve kasabanın tuhafı Kirk. Rory'nin okul yıllarında tanıştığı arkadaşları, rakipleri ve sevgilileri de diziye başka bir katman ekliyor.\n\nDizi ilk yayımlandığında da çok seviliyordu, ancak bugün belki daha da popüler. İzleyiciler özellikle sonbaharda ona sarılmayı seviyor: Hikâyenin en güzel anları bu mevsimde geçtiği için hüznü dağıtan sıcak, huzurlu bir yol arkadaşına dönüşüyor.\n\n'Gilmore Girls'ün 2014'te Netflix'e gelmesinden kısa süre sonra platform, her biri 90 dakikalık dört bölümden oluşan 'A Year in the Life' mini dizisini duyurmuştu. Özgün finalden yaklaşık dokuz yıl sonrasında geçen bu devam yapımı Netflix'te kalacak. Ek içerik tarafında, Ink On Paper Studios'un dizinin 25. yılı için duyurduğu 'Searching for Stars Hollow' belgeseli de konuşulmaya devam ediyor, ancak yayın tarihi henüz yok.\n\nKısacası 'A Year in the Life' Netflix'te kalıyor, 'Gilmore Girls'ün özgün yedi sezonu ise tamamen Prime Video'ya taşındı. Yıllık sonbahar ritüeline hazırlananlara not: Dizi, 1 Temmuz itibarıyla yalnızca Prime Video'da izlenebiliyor.",
    image: "/__l5e/assets-v1/f152e200-326e-41b9-b0da-8d4ddec85deb/bfa451ea996c.webp",
    source: "Nerdist",
  },
  {
    slug: "hotd-s3-cinsel-saldiri-tartismasi",
    title: "“House of the Dragon”ın 3. sezonunda yine gereksiz bir cinsel saldırı sahnesi var",
    excerpt: "“House of the Dragon”ın son bölümünde Alicent Hightower'a yönelik cinsel saldırı girişimi, dizinin “Game of Thrones”un tartışmalı geçmişinden gerçekten bir şey öğrenip öğrenmediği sorusunu yeniden gündeme getiriyor.",
    body: "'Game of Thrones' ve yan dizilerinde kadınlara yönelik cinsel şiddetin aşırı ve açık biçimde gösterilmesi yıllardır tartışılıyor. 'House of the Dragon'ın bu geleneği bozacağı düşünülüyordu, ancak son bölüm bu umudu söndürdü. Ash Parrish, Kotaku yazısında sahnenin neden böylesine öfke yarattığını anlatıyor.\n\nSon bölümde Westeros'un Ana Kraliçesi Alicent Hightower, kızı ve torunuyla başkentten kaçmaya çalışıyor. Kaçamadan kralın konseyinden biri onu köşeye sıkıştırıyor ve bir Kingsguard üyesiyle yasak ilişkisini gündeme getirerek tehdit ediyor. Sahne şiddetli bir saldırıya dönüşüyor; Alicent son anda kurtarılıyor. Fiziksel saldırı engellense de saldırgan, kendisini yakalayan muhafızlara Alicent'in bunu \"hak ettiğini\" söyleyerek psikolojik saldırısını sürdürüyor. Neyse ki manipülasyon işe yaramıyor, ancak izleyicide son derece kötü bir tat bırakıyor.\n\nÖzgün 'Game of Thrones', Cersei Lannister, Sansa Stark ve Daenerys Targaryen'a ekranda uygulanan saldırılarla ve arka plandaki sayısız \"gözden çıkarılabilir\" kadın karakterin başına gelenlerle sık sık eleştirilmişti. Vanity Fair, Esquire ve The Atlantic gibi yayınlar konuyu ele alan yazılar yayımladı. Düşünceli herhangi bir dizi sorumlusunun \"Bunu bir daha yapmayalım\" demesi beklenirdi.\n\nParrish'in vurguladığı gibi asıl mesele üç sorunun yanıtında: Bu sahne bize karakter hakkında ne öğretiyor? Olay örgüsünü hangi yönde ilerletiyor? Kaynak esere sadık mı? 'House of the Dragon'daki bu saldırı için üçünün de yanıtı hayır. Saldırgan zaten önemsiz bir figür; saldırı, Alicent'in kişisel yolculuğuna da yeni bir şey söylemiyor. Çevresindeki erkeklerin manipülasyonları onun iradesini zaten elinden almıştı. Üstelik bu olay George R. R. Martin'in kitabında hiç yok; senaristler tarafından sıfırdan icat edilmiş.\n\nEn sinir bozucu yanı, 'House of the Dragon'ın taht için savaşan iki güçlü kadının çatışmasını buna başvurmadan da gayet iyi anlatabilecek olması. Güçlü kadınların sayısız yolla güçsüzleştirilmesine dair söyleyecek bunca sözü olan bir dizi, eskimiş ve zararlı bir kalıbı tekrarlamak yerine kendisine güvenebilirdi.",
    image: "/__l5e/assets-v1/8bf52d51-1710-44fc-b72c-cbdd2dd84fae/39e1def29434.webp",
    source: "Kotaku",
  },
  {
    slug: "dutton-ranch-s1-final",
    title: "“Dutton Ranch”in 1. sezon finali bizi yanıtsız sorularla baş başa bıraktı",
    excerpt: "Paramount+'ın “Yellowstone” evreninde geçen yeni dizisi “Dutton Ranch”, aksiyon dolu ama hikâye boşluklarıyla yüklü ilk sezonunu tamamladı. İkinci sezonun bu boşlukları kapatıp diziyi yeniden rayına oturtması gerekiyor.",
    body: "'Dutton Ranch', ilk sezonunu tuhaf ifşalarla dolu, aksiyon yüklü bir finalle kapattı; ancak bütün parçalar tam yerine oturmadı. Yine de tam bu boşluklar, ikinci sezona sorunları düzeltip diziyi yolunda tutma fırsatı veriyor. Çünkü 'Dutton Ranch' şu anda oldukça kaygan bir zeminde duruyor.\n\nDizi sezon boyunca bazı olay örgüsü ayrıntılarını bilinçli olarak sakladı. Annette Bening'in Beulah'sı, 3. bölümde \"Mariano\" adlı biriyle tuhaf bir telefon konuşması yapıyor. 7. bölümde ise ona tecavüz eden kişiyi öldürdüğü bir geçmiş sahnesini görüyoruz; Mariano da orada. Finalde bu ismin, çiftliğe saldıran organize suç figürüne ait olduğu ortaya çıkıyor. Ancak güdüleri, geçmişi ve Beulah'yla ilişkisinin gerçek niteliği hâlâ yeterince açıklanmıyor.\n\nAksiyon sekansı, 'Yellowstone' evreninin en iyi geleneklerini hatırlatıyor: Geniş planlar, kamyon konvoyları ve sert bir çatışma. Kelly Reilly'nin, Beulah'nın çevresine ördüğü sessiz duvarı tek bir bakışla yıkabilen performansı, sezonun asıl dayanağı olmayı sürdürüyor. Ancak yardımcı karakterlerin çoğu, finalin duygusal yükünü taşıyacak kadar geliştirilmemiş.\n\nİkinci sezon için bir not: 'Dutton Ranch'in şu anda ihtiyacı daha büyük aksiyon sahneleri değil, karakterlerinin geçmişine daha fazla saygı duyan bir senaryo. Kim olduğunu bilmiyorsak Mariano'nun yalnızca \"kötü\" olması yeterli bir motivasyon değil. İşlerin düzelmesi için umut var, ancak dizi bu kez kendi kurduğu tuzağa düşmeyi göze alamaz.",
    image: duttonAsset.url,
    source: "TV Guide",
  },
  {
    slug: "spider-noir-inceleme",
    title: "“Spider-Noir” incelemesi: Spider-Man sonunda yeniden kirli ve tuhaf",
    excerpt: "Prime Video'nun Nicolas Cage başrollü “Spider-Noir” dizisi, süper kahraman türünün “tertemiz” yorumundan bilinçli olarak uzaklaşan, incelikli ve stilize bir kara film yorumu sunuyor; beklentilerin çok üzerinde bir dizi.",
    body: "Nicolas Cage'in 1930'lar Spider-Man'i, Prime Video'nun 'Spider-Noir' dizisine yalnızca siyah-beyaz bir görüntü değil, tam anlamıyla işlenmiş bir karakter olarak geliyor. Dizi, son on yılda gördüğümüz \"temiz, evrensel, aile dostu\" süper kahraman anlayışını bilinçli biçimde tersine çeviriyor: Kirli bir New York, viski kokan bir dedektif bürosu ve gerçekten tuhaflaşmaya hazır bir Peter Parker.\n\nCage'in performansı diziyi kesintisiz bir gösteriye dönüştürüyor. Karakterin melankolisini komik bir kabadayılıkla dengeliyor; kara filmin soğuk, gözlemci sesini ve çizgi romanların grotesk enerjisini aynı anda taşıyor. Yardımcı kadro da güçlü. Özellikle karanlık bir kabare şarkıcısı, dizinin tür iddiasını ne kadar ciddiye aldığını gösteriyor.\n\nDizinin en büyük gücü görselliği. Yağmurla ıslanmış sokakların tek renkli paleti, örümcek hissinin sarı-kırmızı vurgularla öne çıkarıldığı sekanslar ve seçici renk kullanımıyla 'Spider-Noir', Marvel'ın bir yan projesi gibi değil, gerçek bir sinema ciddiyetiyle çekilmiş dönem kara filmi gibi hissettiriyor. Aksiyon sahneleri kısa ve sert; tipik süper kahraman koreografisi yerine gangster filminin ritmini izliyor.\n\nKusurları da var: Bazı bölümlerde tempo düşüyor, mitolojiye fazla yaslanan sahneler dizinin kendine özgü tonundan çalıyor. Ancak genel olarak 'Spider-Noir', son yılların en cesur süper kahraman uyarlaması olmasa da en özgünü olabilir. Bu türde işlerin farklı yapılabileceğini hatırlatıyor; tek başına bu bile önemli.",
    image: spiderNoirAsset.url,
    source: "TV Guide",
  },
  {
    slug: "from-son-sezon-set-ziyareti",
    title: "“Harika ve tuhaf”: MGM+'ın “From” dizisinin final sezonu setine içeriden bir bakış",
    excerpt: "The Hollywood Reporter, MGM+'ın gizemli korku dizisi “From”un final sezonu setini ziyaret etti. Dizinin yaratıcısı John Griffin, Sarılı Adam'ın gerçek kimliğini ve dizinin nasıl biteceğini açıkladığı sürprizlerle dolu bir set turu sunuyor.",
    body: "MGM+'ın 'From' dizisinin kasabasında bir şeyler oluyor ve bu, neredeyse herkesten saklanan bir sır. Yaratıcı John Griffin, THR muhabiri Josh Wigler'ı Eylül 2025'te sete davet ettiğinde dördüncü sezonun büyük bölümü çekilmişti. Griffin, deneyimli bir hikâye anlatıcısı gibi sezonlar arasındaki boşluğu aşıp üçüncü sezon finalinin travmatik anına döndü: Dizinin asıl kötüsü sonunda kendini göstermişti.\n\n\"Kaldığımız noktanın ivmesini yakalayıp hikâyeye yeni bir katman eklememiz gerekiyordu,\" diyor Griffin. \"Vardığımız fikir şu: Man in Yellow, Sophia adlı küçük bir kız olarak kasabaya geliyor ve herkesin arasında yaşıyor.\" Muhabirin yüzündeki şaşkınlığı görünce bir an durup kahkahaya boğuluyor: \"Dur, bunu ilk kez mi duyuyorsun?\"\n\nSet gezisi böyle ifşalarla sürüyor. Kahverengi bir sedan, sanki içine gömülmüş gibi postane binasının duvarına sabitlenmiş. Saatler sonra Griffin bunu da açıklıyor: \"Şeytanı kasabaya getiren araba bu.\" Bir bar sahnesinde şeytanın kendisi gülümseyerek içeri giriyor: \"Merhaba, ben Julia.\"\n\nBaşrol oyuncuları Harold Perrineau ve Catalina Sandino Moreno da son sezonla ilgili düşüncelerini paylaşıyor. Perrineau'nun Şerif Boyd Stevens'ı, dört sezonluk gerilimin ağırlığını taşıyor; oyuncu için bu son, karakterin kendisiyle hesaplaşmasının da doruğu. Süreci \"harika ve tuhaf\" diye özetliyor. Bu ifade hem dizinin tonunu hem de son sezonu çekme deneyimini yakalıyor. 'From' hayranlarına not: Uzun zamandır beklenen yanıtlar geliyor. Griffin'in ipuçlarına bakılırsa bu yanıtlar, soruların kendisi kadar tuhaf olacak.",
    image: "/__l5e/assets-v1/abc33217-6567-45b4-af3d-983ee5825575/e58775de8f1f.webp",
    source: "The Hollywood Reporter",
  },
];

export function getSeries(slug: string) {
  return SERIES.find((s) => s.slug === slug);
}
