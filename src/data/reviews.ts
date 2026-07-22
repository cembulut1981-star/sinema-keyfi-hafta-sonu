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

export type Review = {
  slug: string;
  origTitle: string;
  title: string;
  excerpt: string;
  rating: string;
  body: string;
  image: string;
  videoUrl?: string;
};

export const REVIEWS: Review[] = [
  {
    slug: "a-useful-ghost-thai-black-comedy",
    origTitle: "A Useful Ghost",
    title: "\"A Useful Ghost\" — Perili Elektrik Süpürgesiyle Tayland Siyasetine Kara Komedi",
    excerpt: "Ratchapoom Boonbunchachoke'nin şık ve benzersiz filmi, bir elektrik süpürgesine yerleşen huzursuz bir ruhu Tayland'ın siyasi geçmişiyle çarpıştıran heyecan verici bir kara komedi sunuyor — Guardian eleştirisine göre yılın en özgün işlerinden biri.",
    rating: "4/5",
    image: aUsefulGhostAsset.url,
    body: `Guardian eleştirisine göre Ratchapoom Boonbunchachoke'nin ilk uzun metrajı 'A Useful Ghost', son yılların en özgün ve cesur türler-arası denemelerinden biri. Film; hayalet hikâyesi, siyasi alegori, kuir aşk melodramı ve endüstriyel kara komediyi tek bir çatı altında birleştiriyor — ve şaşırtıcı biçimde hepsi tutuyor.

Hikâyenin merkezinde, ölen karısının ruhunun bir ev tipi elektrik süpürgesine yerleştiğine inanan genç bir adam ve bu 'perili süpürgeyi' işgücü olarak kullanmak isteyen bir fabrika var. Tayland'ın hava kirliliği krizinden askeri iktidar geçmişine, kapitalist sömürüden queer bellek politikasına kadar uzanan bir dizi mesele, absürt bir mizahla iç içe geçiyor.

**Neyi doğru yapıyor?** Boonbunchachoke'nin görsel dili disiplinli ve şık: fabrika iç mekânlarının soğuk florasan ışığı, ev sahnelerinin sıcak tungsten tonları ve süpürgenin motor sesinin sound design'daki kullanımı filme kendine özgü bir doku katıyor. Guardian'ın deyimiyle sonuç 'rahatsız edici, erotik ve son derece hüzünlü'.

**Sonuç.** 'A Useful Ghost' hem festival izleyicisini hem de tür sinemasını sevenleri kazanabilecek nadir bir film. Boonbunchachoke, ilk filmiyle Apichatpong Weerasethakul sonrası Tayland sinemasının en dikkate değer sesi olarak sahneye çıkıyor.

Kaynak: The Guardian`,
  },

  {
    slug: "animal-farm-serkis-orwell-adaptation",
    origTitle: "Animal Farm",
    title: "\"Animal Farm\" — Andy Serkis'in Orwell Uyarlaması Klasiği Şekerle Boğuyor",
    excerpt: "Seth Rogen, Laverne Cox ve Glenn Close'un seslendirdiği yeni animasyon; Stalinizm alegorisini mutlu sonlu bir pandomime dönüştürerek Orwell'e ihanet ediyor — Guardian'a göre yılın en cesaretsiz uyarlaması.",
    rating: "2/5",
    image: animalFarmAsset.url,
    body: `Guardian eleştirisine göre Andy Serkis'in yönettiği ve Nicholas Stoller'ın senaryosunu yazdığı yeni 'Animal Farm' animasyonu, George Orwell'in 1945 tarihli klasiğine karşı işlenen en tatsız sinema suçlarından biri. Ucuz görünen dijital estetik bir yana, filmin asıl sorunu Orwell'in Stalinizm alegorisini Disney tarzı bir mutlu sonla defanging etmesi.

Seth Rogen, Laverne Cox, Glenn Close ve Kieran Culkin'in yer aldığı seslendirme kadrosu güçlü, ancak karakterlerin ağzına konulan diyaloglar orijinalin acımasız politik zekâsından yoksun. Napoleon'un yükselişi, Snowball'un sürgünü ve 'Bütün hayvanlar eşittir ama bazıları daha eşittir' cümlesinin arkasındaki soğuk ironi — hepsi filmde yumuşatılıyor.

**Nerede takılıyor?** Serkis'in yönetmen olarak seçimleri şaşırtıcı biçimde temkinli. 'Mowgli' ve 'Breathe' gibi işlerinden bildiğimiz duygusal derinlik burada yok. Film, çocuk seyirciye 'uygun' olmak için hem şiddeti hem de politik yükü sansürlüyor; ama bu iki unsuru çıkardığınızda geriye ne kitabın kalbi ne de bağımsız bir animasyon eseri kalıyor.

**Sonuç.** Guardian'a göre 'Animal Farm', sinema uyarlamalarının nasıl yapılmaması gerektiğine dair bir vaka çalışması. Orwell'in metnini bilmeyen bir çocuk için bile monoton, bilenler içinse doğrudan sinir bozucu.

Kaynak: The Guardian`,
  },

  {
    slug: "the-day-she-returns-hong-sang-soo",
    origTitle: "The Day She Returns",
    title: "\"The Day She Returns\" — Hong Sang-soo'nun Ağır Çekim İçkili Meditasyonu",
    excerpt: "Kore sinemasının üretken lo-fi ustası Hong Sang-soo, kariyerine ara vermiş bir oyuncunun dönüşünü anlatan yeni siyah-beyaz filmiyle yine tanıdık ama gizemli biçimde bağımlılık yaratan bir esere imza atıyor.",
    rating: "4/5",
    image: theDayShereturnsAsset.url,
    body: `Guardian eleştirisine göre üretken Kore sineması ustası Hong Sang-soo'nun yeni siyah-beyaz filmi 'The Day She Returns', yönetmenin sadık takipçilerini şaşırtmayacak — ve bu iyi bir şey. Uzun sahneler, sabit kamera açısı, restoran masasında geçen konuşmalar ve nedeni belirsiz ani zoom-in'ler yerli yerinde.

Song Seon-mi, kariyerine uzun bir ara verdikten sonra sinemaya dönmeye çalışan bir oyuncuyu canlandırıyor. Eski meslektaşları, yeni yönetmen adayları ve unutulmaya yüz tutmuş bir aşk arasında gidip gelen karakter; Hong'un tipik 'gündüz içkisi' sahnelerinde soju şişeleri eşliğinde geçmişiyle yüzleşiyor.

**Neyi doğru yapıyor?** Guardian'ın belirttiği gibi 'kimse Hong kadar gündüz içkisi göstermez' ve bu tekrarlar filmde bir tür meditatif ritim yaratıyor. Karakterlerin söyledikleri kadar söylemedikleri de önemli; uzun sessizlikler, tereddütler ve yarım kalan cümleler filmin duygusal omurgasını oluşturuyor.

**Sonuç.** 'The Day She Returns', Hong Sang-soo'nun otuza yaklaşan filmografisine yeni bir başyapıt eklemiyor olabilir — ama zaten iddiası da bu değil. Guardian'ın deyimiyle 'her zaman olduğu gibi gizemli biçimde bağımlılık yaratan' bir başka Hong deneyimi. Yönetmenin evrenine ilk kez girecekler için de fena bir başlangıç noktası değil.

Kaynak: The Guardian`,
  },

  {
    slug: "they-fight-boxing-drama-holland",
    origTitle: "They Fight",
    title: "\"They Fight\" — André Holland'ın Boks Draması Duygusal Bir Gut Punch",
    excerpt: "'Creed' ve 'Million Dollar Baby' geleneğini sürdüren 'They Fight', unutulmaz bir André Holland performansıyla Washington DC'nin sert arka planında şefkat ve sıcaklık buluyor — Guardian'a göre yılın en dokunaklı spor filmlerinden.",
    rating: "4/5",
    image: "https://i.guim.co.uk/img/media/25c81b7cc1d516dbf31f54fa4fed63a31beea2f3/122_0_2528_2022/master/2528.jpg?width=1200&quality=85&auto=format&fit=max&s=none",
    body: `Guardian eleştirisine göre 'They Fight', 'Creed' ve 'Million Dollar Baby' soyundan gelen bir boks draması — ve boksun neden hâlâ insanlık durumu için zamansız bir alegori olduğunu bir kez daha kanıtlıyor. Bu kez ringde 10 sayımın altında kalma tehlikesiyle yüzleşen kişi, André Holland'ın canlandırdığı Walt.

Bir zamanlar Washington DC boks sahnesinin parlayan yıldızlarından olan Walt, kariyerini şehrin uyuşturucu ticaretine kaptırmış. Uzun bir hapis cezasının ardından şartlı tahliye edilen karakter; eski sevgilisi (Samira Wiley) ve küçük oğluyla yeniden bir hayat kurmaya çalışıyor. Wendell Pierce, Walt'un mentoru olarak kadroya ağırlık katıyor; Anthony B Jenkins ise Walt'un oğlu rolünde film boyunca en dokunaklı sahnelerin ortağı.

**Neyi doğru yapıyor?** Holland'ın performansı Guardian'ın deyimiyle 'silinmez'. Ringde sertleşen, evde çocuğunun karşısında yumuşayan, geçmişiyle yüzleşirken kırılan bir adamı hiçbir jesti abartmadan taşıyor. Yönetmenin Washington DC'yi çekim biçimi de dikkat çekici: turistik anıtlar değil, terkedilmiş salonlar, apartman koridorları ve gece otobüs durakları.

**Sonuç.** 'They Fight', tür kalıplarını yeniden icat etmiyor — ama içinde çalıştığı türü büyük bir ustalıkla, şefkatle ve sertlikle kullanıyor. Holland için ödül sezonu konuşmalarını başlatacak bir performans; Andscape yapımının şimdiye kadarki en olgun işi.

Kaynak: The Guardian`,
  },

  {
    slug: "deep-water-aaron-eckhart-shark",
    origTitle: "Deep Water",
    title: "\"Deep Water\" — Uçak Kazasından Sağ Çıkanlar Köpekbalıklarıyla Egzistansiyel Rulet Oynuyor",
    excerpt: "Renny Harlin'in yeni felaket filmi, köpekbalıklarıyla dolu sularda hayatta kalmaya çalışan uçak yolcularını izliyor — Aaron Eckhart başrolünde, aksiyon-şaadenfrud dozu tam ayarında bir tür lezzeti.",
    rating: "3/5",
    image: "https://i.guim.co.uk/img/media/bb9e0a0a1577cd9c6652ca6c9a48d8fb327f2e4f/908_0_3830_3064/master/3830.jpg?width=1200&quality=85&auto=format&fit=max&s=none",
    body: `Guardian eleştirisine göre, iyi yapıldığında bir felaket filmi hiçbir şeyin kaşıyamadığı bir sinema kaşıntısını giderir: duygusallık, gerilim ve şaadenfrud'u derli toplu aksiyon paketleri halinde sunar. Renny Harlin'in yeni işi 'Deep Water', bunu tam olarak biliyor — ve pek çok selefine göz kırparken bile ne yaptığının farkında.

Aaron Eckhart, yolcularının çoğu ikinci sınıf film yıldızlarından oluşan bir Amerikan uçağının köpekbalığı sularına düşmesinden sonra hayatta kalanların lideri konumuna yükselen karakteri canlandırıyor. Molly Belle Wright'ın oynadığı genç yolcuyla kurduğu 'baba-kız' benzeri ilişki, filmin duygusal çıpası. Geri kalanı ise klasik Harlin: köpekbalığı saldırıları, patlayan yakıt tankları, birbirini suçlayan yolcular ve okyanusun içinde hızla kararan gökyüzü.

**Neyi doğru yapıyor?** Harlin ('Cliffhanger', 'Deep Blue Sea') tür ritmini biliyor: film 100 dakikayı biraz aşıyor, yağ yok. Köpekbalığı sahneleri (kısmen CGI, kısmen animatronik) izlenebilir kalıyor; sesin salonda patlaması, IMAX seçiminin doğru olduğunu düşündürüyor.

**Nerede takılıyor?** Karakterler kalıp: alkolik pilot, kibirli iş insanı, panikleyen anne, cesaretini geç bulan genç. Diyaloglar sık sık 'Discovery Channel özel programı' tadında didaktikleşiyor.

**Sonuç.** 'Deep Water' başyapıt değil, olmaya da niyeti yok. Ama yaz sonu salon programına köpekbalığı, panik atak ve sinizmin doğru dozda karışımını arayanlar için tam kıvamında bir tür lezzeti.

Kaynak: The Guardian`,
  },

  {
    slug: "the-odyssey-nolan-inceleme",
    origTitle: "The Odyssey",
    title: "\"The Odyssey\" — Nolan'ın Bronz Çağ Epiği İhtişamlı, Ama Kalbi Serin",
    excerpt: "Christopher Nolan'ın IMAX 65mm ile çektiği 'The Odyssey', Matt Damon ve Zendaya başrolünde görkemli bir mitolojik yolculuk sunuyor — fakat Rolling Stone'a göre teknik büyüklüğü zaman zaman duygusal soğuklukla el ele gidiyor.",
    rating: "3.5/5",
    image: "https://www.rollingstone.com/wp-content/uploads/2026/06/the-odyssey-Lead.jpg?w=1581&h=1054&crop=1",
    body: `David Fear'ın Rolling Stone'da yayımlanan eleştirisine göre Christopher Nolan'ın 'The Odyssey'i, yönetmenin şimdiye kadar giriştiği en cüretkâr biçimsel deney: Homeros'un destanını IMAX 65mm ile, çoğunlukla gerçek mekânlarda ve minimum dijital efektle sahneye koyuyor.

Matt Damon'ın Odysseus'u; baba, koca, savaşçı, kral ve Bronz Çağı'nda yolunu kaybetmiş bir ruh. Sakalıyla, yorgun bakışlarıyla, çok şey görmüş bir adamın huzursuzluğunu taşıyor. Zendaya (Penelope), Tom Holland (Telemakhos), Anne Hathaway (Athena), Charlize Theron (Kalypso), Lupita Nyong'o ve Robert Pattinson kadronun geri kalanında.

**Neyi doğru yapıyor?** Nolan'ın kamera kompozisyonları destansı: Ithaka kıyılarındaki uzun planlar, Kykloplar mağarasındaki karanlık iç mekânlar, sirenler sekansındaki ses tasarımı. Ludwig Göransson'un müziği tanıdık Nolan yoğunluğunda ama antik bir tını yakalıyor. Damon'ın performansı 'Interstellar'daki Cooper'dan bu yana en duygusal işi.

**Nerede takılıyor?** Fear'a göre, tam olarak Nolan'ın diğer filmlerinde de karşılaştığımız yerde: karakter yakınlığı. Penelope-Odysseus ilişkisi, filmin duygusal omurgası olması gerekirken serin ve mesafeli kalıyor. Zendaya'nın performansı iyi ama karakterin ekranda geçirdiği zaman az. Aynı sorun Telemakhos alt hikâyesinde de var.

**Sonuç.** 'The Odyssey', Nolan'ın 'Dunkirk'ten bu yana en görsel olarak etkileyici filmi; sinema salonunda IMAX 65mm ile izlenmesi gereken nadir bir deneyim. Ama Homeros'un asıl gücü olan insanın eve dönme özlemi, ihtişamın gölgesinde bazen kayboluyor. Ödül sezonunun teknik dallarında güçlü bir aday, ancak Nolan'ın kariyerinin zirvesi değil.

Kaynak: Rolling Stone — David Fear`,
  },

  {
    slug: "the-hawk-will-ferrell-golf",
    origTitle: "The Hawk",
    title: "\"The Hawk\" — Will Ferrell'ın Golf Komedisi \"Talladega Nights\" Değil",
    excerpt: "Netflix'in Will Ferrell'lı yeni golf komedisi \"The Hawk\", yıldızının klasik spor komedilerinin ağırlığına yaklaşamıyor: Ferrell tanıdık ama yorgun, tempo düşük, kahkaha az.",
    rating: "2.5/5",
    image: "https://variety.com/wp-content/uploads/2026/07/THEHAWK_101_250915_CH_00106_R2.jpg?w=1000&h=667&crop=1",
    body: `Alison Herman'ın Variety'de yayımlanan eleştirisine göre Will Ferrell'ın Netflix için çektiği yeni golf komedisi *The Hawk*, yıldızının seyirci hafızasında yer eden 'Talladega Nights' ve 'Blades of Glory' gibi spor komedileriyle aynı kulvarda yarışmayı vaat ediyor — ama sahaya çıktığında ligin çok altında kalıyor.

Ferrell, kariyerinin sonlarına yaklaşan, huysuz, alkolik ve unutulmakta olan bir profesyonel golfçü olan Lonnie 'The Hawk' Hawkins'i canlandırıyor. 2004 şampiyonasını kazandıktan sonra kariyeri çöken karakter, PGA Champions Tour üzerinden bir geri dönüş kovalıyor. Molly Shannon eski eşi, Jimmy Tatro sinir bozucu genç rakibi, Luke Wilson ise sabırlı menajeri olarak kadroda.

**Sorun nerede?** Ferrell'ın karakter tipi çok tanıdık: içi boş, iddialı, patlayan çıkışlarla tetiklenen yaşlı sporcu. Sorun tipin kendisinde değil, senaryonun bu tipe yeni bir şey söyletmemesinde. Yönetmen Jason Woliner ('Borat Subsequent Moviefilm') temayı ciddiye almakla saçmalık üretmek arasında bir denge kuramıyor; sonuçta ne 'Talladega Nights'ın anarşik enerjisi ne de 'The Squid and the Whale' türü acı-tatlı bir düşüş dramı var elimizde.

**Neyi kurtarıyor?** Molly Shannon her sahneye enerji taşıyor; Luke Wilson'ın 'yorgun ama sadık' menajer rolü sürekli izlenebilir. Golf mekânlarının cinematografisi güzel — Herman'a göre Netflix'in son yıllardaki en 'kartpostal gibi görünen' komedilerinden biri.

**Sonuç.** *The Hawk*, bir Will Ferrell filmi kadar kolay izleniyor ve bir Will Ferrell filmi kadar hızlı unutuluyor. Ferrell'ın spor komedisi klasikleri için hâlâ zamanı olduğuna inananlar için tatminkâr değil; klasikleri hiç izlememişler içinse zayıf bir başlangıç noktası.

Kaynak: Variety — Alison Herman`,
  },
  {
    slug: "evil-dead-burn",
    origTitle: "Evil Dead Burn",
    title: "\"Evil Dead Burn\" — Serinin En Karanlık, En Sinir Bozucu Halkası",
    excerpt: "Sébastien Vaniček'in devraldığı yeni Evil Dead filmi; splatstick kahkahasını bir kenara bırakıp saf bir kâbusa dönüşüyor. Souheila Yacoub başrolde, Deadite'lar tam kadro.",
    rating: "4/5",
    image: "https://images.bauerhosting.com/empire/2026/07/Evil-Dead-Burn-Review.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    body: `Ben Travis'in Empire'da yayımlanan eleştirisine göre Evil Dead serisi baştan beri bir ton skalası üzerinde salınıyor: Bir yanda *Evil Dead II* ve *Army Of Darkness*'ın splatstick kahkahası, diğer yanda Sam Raimi'nin orijinali ve Fede Alvarez'in 2013 yeniden çevriminin saf dehşeti. Lee Cronin'in *Evil Dead Rise*'ı iki damarı birleştirmişti; Sébastien Vaniček'in devraldığı *Evil Dead Burn* ise ibreyi kararlı bir şekilde en karanlık uca çeviriyor — ve sinir bozucu ölçüde etkili sonuçlar üretiyor.

Hikâye, istismarcı kocasını (George Pullar) bir trafik kazasında kaybeden Alice (Souheila Yacoub) üzerine kuruluyor. Kişisel cehennemi bitmek bilmez: Koca toprağa verilirken Deadite'lar kapıyı çalıyor. Vaniček, aile içi şiddetin metaforik yükünü doğaüstü dehşetin üstüne bindirmekten çekinmiyor; bu tercih, filmin en rahatsız edici sahnelerinde bile sırıtan bir alt metin bırakıyor.

Vaniček'in yönetmenlik dili, kâğıt inceliğinde bir gerilimi tercih ediyor: Kamera geniş açılarda uzun süre tutuluyor, ses tasarımı zonklayıcı, gore sahneleri Cronin'inki kadar cömert ama çok daha az eğlenceli. Yacoub'un performansı filmin çıpası — travmayı taşıyan bedenin, bir anda av olmaktan avcıya dönüşmesini inandırıcı kılıyor.

Empire'a göre *Evil Dead Burn*, seriye yeni bir hayran kazandırmaktan çok, eski hayranlara "bu iş gerçekten korkutabilir" diye hatırlatıyor. Splatstick isteyenler yanlış salondadır; kâbus isteyenler için ise en tavizsiz Evil Dead deneyimlerinden biri.

Kaynak: Empire — Ben Travis`,
  },
  {
    slug: "the-furious",
    origTitle: "The Furious",
    title: "\"The Furious\" — Hong Kong Dövüş Sinemasının Kemik Kıran Geri Dönüşü",
    excerpt: "Aksiyon koreograflığından yönetmenliğe terfi eden Kenji Tanigaki, Taken'ın iskeletini alıp iki saate yayılan kesintisiz bir dövüş resitaline çeviriyor. Xie Miao ve Joe Taslim durmuyor.",
    rating: "4/5",
    image: "https://images.bauerhosting.com/empire/2026/07/The-Furious-Review.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    body: `Harry Stainer'ın Empire'da yayımlanan eleştirisine göre *The Furious*'un kanla ıslanmış final düellosu geldiğinde, iki saatlik süresi boyunca birinin yumruklanmadığı, tekmelenmediği ya da suratının masaya çarpılmadığı beş dakikayı zar zor sayarsınız. Aksiyon koreograflığından yönetmen koltuğuna geçen Kenji Tanigaki bu alanda tam anlamıyla evinde; *Taken*'ın "kızım kaçırıldı" iskeletini paketleyip Hong Kong dövüş sanatları furyasına adanmış bir festivale dönüştürüyor.

Kızı kaçırılan dilsiz bir baba (Xie Miao) ile bir gazetecinin (Joe Taslim) çocuk kaçakçılığı çetesinin peşine düşmesi öyküsü, senaryo olarak yeni bir şey vaat etmiyor. Ama Tanigaki'nin sezgileri doğru: Karakterleri konuşturmak yerine dövüştürüyor. Setler, koridorlar, sokaklar, restoran mutfakları — hepsi tek uzun plana yakın koreografilerle kullanılıyor. Xie Miao'nun bedensel dili, dilin yerini fazlasıyla dolduruyor; Joe Taslim ise en sert vuruşları en az efor harcıyormuş gibi savuruyor.

Filmin başarısı, tür seyircisinin gerçekten istediği şeyi bilmesi ve o şeyi hiç aksatmadan servis etmesi. Duygusal derinlik arayanlar başka salona; kemik kıran, nefes kesen, coğrafyası net kurulmuş dövüş sahneleri isteyenler ise yılın en tatminkâr aksiyon filmlerinden biriyle karşı karşıya.

Kaynak: Empire — Harry Stainer`,
  },
  {
    slug: "500-miles",
    origTitle: "500 Miles",
    title: "\"500 Miles\" — Sheffield'dan Dingle'a Uzanan Kalbi Yumuşak Bir Yol Filmi",
    excerpt: "Morgan Matthews'un yönettiği bu hassas yol filminde iki kardeş, dedeleriyle (Bill Nighy) buluşmak için Sheffield'dan İrlanda'ya kaçıyor. Yaş gözyaşı garantili.",
    rating: "3.5/5",
    image: "https://images.bauerhosting.com/empire/2026/07/500-Miles.png?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    body: `Barry Levitt'in Empire'da yayımlanan eleştirisine göre Morgan Matthews'un yönettiği *500 Miles*, adına rağmen bir Proclaimers müzikali değil — ama duygusal olarak o şarkıyla aynı damardan besleniyor. Finn (Roman Griffin Davis) ile küçük kardeşi Charlie (Dexter Sol Ansell), evden kaçmışlardır ve planları basittir: Sheffield'dan İrlanda'nın Dingle sahilindeki küçük kasabaya gidip yabancılaştıkları dedeleriyle (Bill Nighy) buluşmak, ailelerini bir arada yeniden toplamak.

Film, açılıştaki flashback'te aile mutluluğunun kartpostal gibi bir gününü gösterir: Sahilde bulünürler oynanır, kumdan kaleler kurulur, dede ve büyükanne torunlarıyla iç içedir. Bugünün karanlığı, o kayıp cennetin ışığıyla ters aydınlanır. Matthews'un yönetmenliği kadrajı olabildiğince alçak tutuyor — hikâye çocukların gözünden anlatılıyor; kamera çoğunlukla omuz hizasında.

Roman Griffin Davis, *Jojo Rabbit*'ten tanıdığımız o hassas oyunculuğu bir başka gelişim çağına taşıyor; Dexter Sol Ansell filmin sürprizi olarak masumiyetle inatçılığı aynı anda taşıyabiliyor. Bill Nighy ise beklendiği gibi, sadece varlığıyla sahneleri ısıtıyor. Maisie Williams küçük ama etkili bir rolde.

Empire'a göre *500 Miles* melodrama flört ediyor ama düşmüyor; klişelere yaklaşıyor ama zamanında geri çekiliyor. Sonuç, izleyiciyi arabaya bindirip yol boyunca ağlatıp güldüren, hassas ama sağlam bir aile dramı.

Kaynak: Empire — Barry Levitt`,
  },
  {
    slug: "voicemails-for-isabelle",
    origTitle: "Voicemails For Isabelle",
    title: "\"Voicemails For Isabelle\" — Yanlış Numaradan Doğan Sıcak Bir Romantik Komedi",
    excerpt: "Zoey Deutch ve Nick Robinson'ın kimyası; ölmüş kız kardeşe bırakılan sesli mesajların yanlış telefona ulaşmasıyla başlayan sıra dışı bir aşk hikâyesini taşıyor.",
    rating: "3.5/5",
    image: "https://images.bauerhosting.com/empire/2026/06/Voicemails-For-Isabelle.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    body: `Jordan King'in Empire'da yayımlanan eleştirisine göre *Voicemails For Isabelle*, romantik komedinin klasik "yanlış numara" motifini yasla harmanlayan, beklenmedik ölçüde hassas bir tür karışımı. Jill (Zoey Deutch), San Francisco'da kaotik bir hayat süren, umut vaat eden bir pastacı; ölen kız kardeşi Isabelle'e her gün sesli mesajlar bırakıyor — bu mesajlar onun için hem terapisi hem günlüğü.

Ne var ki mesajlar artık Isabelle'in eski numarasına değil; Wes'in (Nick Robinson) yeni iş telefonuna düşüyor. Wes, Teksaslı bir emlakçı — düzenli, temkinli, biraz kırılgan. Jill'in sesini duymayı bir süre sonra bekler hale geliyor. Klasik rom-com kurgusu buradan doğuyor: Wes gerçeği söylemeli mi, ne zaman söylemeli, söylediğinde ne olacak?

Filmin gücü ikili oyunculuktan geliyor. Zoey Deutch, karakterin dağınıklığını, mizahını ve altındaki yasını aynı anda tutabiliyor; Nick Robinson ise sessiz, gözlemci performansıyla dengeliyor. Empire'a göre en iyi sahneler ikilinin aslında birbirini görmediği anlar: Ses üstüne kurulan yakınlık, filmin duygusal omurgası.

Yönetmenlik zaman zaman güvenli oynuyor ve sonlara doğru rom-com formülüne fazla teslim oluyor. Ama King'e göre *Voicemails For Isabelle*'in asıl başarısı, "yas tutulan biriyle konuşmaya devam etmek" fikrini bir bahaneden çıkarıp filmin kalbi haline getirmesi. Sıcak, hüzünlü, izlemesi kolay bir romantik komedi.

Kaynak: Empire — Jordan King`,
  },
  {
    slug: "nirvanna-the-band-the-show-the-movie",
    origTitle: "Nirvanna The Band The Show The Movie",
    title: "\"Nirvanna The Band The Show The Movie\" — Cinnetin Eşiğinde Parlak Bir Orijinal",
    excerpt: "Matt Johnson ve Jay McCarrol'un onlarca yıldır sürdürdüğü hayal — Toronto'daki Rivoli'de sahne almak — sonunda beyazperdeye taşındı. Deli, dahiyane, hüzünlü.",
    rating: "4.5/5",
    image: "https://images.bauerhosting.com/empire/2026/06/ntbtstm-1.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
    body: `Ben Travis'in Empire'da yayımlanan eleştirisine göre *Nirvanna The Band The Show The Movie*'nin açılış sahnesi — ta 2008'de çekilmiş — Matt Johnson'ın karakteri "birazdan izleyeceğiniz şey daha önce hiç görmediğiniz bir şey" diye ilan etmesiyle başlıyor. Karakter, aslında bir grup bile olmayan (o, arkadaşı Jay ve bir piyano) topluluğunun bir gün Toronto'nun efsanevi mekânı Rivoli'de sahneye çıktığını hayal ediyor. Ama bu cümle, film için de birebir geçerli: Delice, parlak, kahkaha atmaktan ağrıyan, hüzünlü ve tamamen orijinal.

Matt (Matt Johnson) ile Jay (Jay McCarrol), on yıllardır sürdürdükleri hayali — Rivoli sahnesinde çalmak — gerçekleştirmek için en çılgın planlarını devreye sokuyor. Film, kısa filmden diziye, oradan uzun metraja evrilen bir projenin tüm katmanlarını üstünde taşıyor: Gerilla çekim estetiği, halktan gerçek tepkiler, meta şakalar, sıra dışı bir kurgu ritmi.

Johnson ve McCarrol'un kimyası filmin tek ve yeter sebebi; ikili, hem çocuksu bir enerjiyle hem de artık genç olmadıklarını bilen bir kırılganlıkla oynuyor. Empire'a göre film, salt komedi olmanın ötesine geçen bir şey başarıyor: Bir hayali onlarca yıl boyunca sürdürmenin komik, saçma ama derinden içten portresi.

Travis, filmi "sadece varlığı bile bir zekâ eylemi" olarak nitelendiriyor. Bağımsız komedinin gerçekten neye benzeyebileceğini merak edenler için 2026'nın en tuhaf ve en tatlı sürprizlerinden biri.

Kaynak: Empire — Ben Travis`,
  },
  {
    slug: "moana-live-action",
    origTitle: "Moana",
    title: "\"Moana\" — Disney'in İşe Yarayan İlk Live-Action Yeniden Çekimi",
    excerpt: "Filmin yarısı hâlâ animasyon, Dwayne Johnson tam Maui modunda ve yeni yıldız Catherine Laga'aia Moana'yı ışıltılı bir coşkuyla oynuyor. Owen Gleiberman'a göre bu, Disney'in ilk gerçek başarılı live-action uyarlaması.",
    rating: "4/5",
    image: "https://variety.com/wp-content/uploads/2026/05/Moana.jpg?w=1000&h=667&crop=1",
    body: `Owen Gleiberman'ın Variety'de yayımlanan yazısına göre Disney'in son yıllarda üst üste çektiği live-action uyarlamalar, sadakat ile ilhamsızlık arasında sıkışıp kalmıştı. 'Moana' ise bu döngüyü kırıyor: Thomas Kail'in yönettiği film, hem 2016 orijinaline kalbi çarpan bir sadakatle bağlı hem de kendi görsel şiirsel diline sahip.

Yönetmenlik tercihlerinin en cesuru, filmin neredeyse yarısının hâlâ animasyon olarak kalması. Okyanus, ada ruhları, kum canavarları ve özellikle Maui'nin dövmelerinin canlanan dünyası CGI ve stilize animasyon arasında bir yerde duruyor; bu tercih uyarlamanın masalsı tonunu koruyor. Görsellik, Cook Adaları ve Yeni Zelanda'da çekilen gerçek Pasifik manzaralarının fotogerçekçi güzelliğiyle harmanlanınca ortaya sıra dışı bir hibrit çıkıyor.

Yeni yıldız Catherine Laga'aia, Moana'yı canlandırırken Auli'i Cravalho'nun animasyondaki tazeliğini taklit etmek yerine kendi ışıltısını getiriyor: Meraklı, inatçı, ışıl ışıl gülen bir kâşif. Dwayne Johnson ise Maui rolünde tamamen serbest — kendi ikonik gülüşünü karaktere devredip 'You're Welcome' sahnesini adeta bir konser yıldızı gibi taşıyor. Şarkılar Lin-Manuel Miranda ve Opetaia Foa'i imzasıyla yeniden düzenlenmiş; iki yeni parça eklenmiş.

Gleiberman'ın vurguladığı temel argüman şu: 'The Lion King' ya da 'Mulan' gibi denemelerin aksine 'Moana' animasyonun dilinden korkmadığı için çalışıyor. Disney nihayet 'live-action' etiketini bir soğutma değil, bir zenginleştirme aracı olarak kullanmayı öğrenmiş görünüyor.

Kaynak: Variety — Owen Gleiberman`,
  },
  {
    slug: "night-nurse",
    origTitle: "Night Nurse",
    title: "\"Night Nurse\" — İki Sapkın Yolu Kesiştiğinde Kışkırtıcı Bir Bakım Fantezisi",
    excerpt: "Georgia Bernstein'ın cesur ilk uzun metrajı; sömürüye dair gerçek bir vakayı rahatsız edici ölçüde şatafatlı bir erotik gerilime dönüştürüyor. Bruce McKenzie ve Cemre Paksoy hipnotize ediyor.",
    rating: "3.5/5",
    image: "https://variety.com/wp-content/uploads/2026/05/NIGHT-NURSE-STILL-1-1.jpg?w=1000&h=667&crop=1",
    body: `Beatrice Loayza'nın Variety'de yayımlanan eleştirisine göre Georgia Bernstein'ın yönetmen olarak çıkış filmi 'Night Nurse', tehlikeli bir tazelik taşıyor. Gerçek bir sömürü hikâyesinden yola çıkan film, konuyu didaktik bir drama olarak değil; kışkırtıcı, karanlık, zaman zaman komik bir erotik gerilim olarak ele alıyor — ve bu risk büyük ölçüde tutuyor.

Hikâye, ekonomik olarak sıkışmış genç bir bakıcı olan Ada'nın (yeni yüz Cemre Paksoy), yaşlı, hasta ama son derece manipülatif bir dolandırıcının (Bruce McKenzie) evine yerleşmesiyle başlıyor. Klasik bakım anlaşması kısa sürede karmaşık bir üstünlük oyununa dönüşüyor: Kim kimi kullanıyor, kim kimden besleniyor, giderek bulanıklaşıyor. Bernstein bu bulanıklığı sadece anlatıda değil, bakış açısında da kuruyor; kamera, kimin arzu nesnesi olduğunu bilinçli olarak sürekli değiştiriyor.

Paksoy'un performansı filmin en büyük keşfi: Yüzünde masumiyetle hesaplı bir soğukluk arasında gidip gelen bir okunaksızlık var. McKenzie ise Loayza'nın deyimiyle 'karakteri gölge ve ışığın tam ortasına yerleştirmeyi' başarıyor. Bernstein'ın görsel dili, Hitchcock'tan çok Paul Verhoeven'e daha yakın — abartılı bir zenginlik, kırmızı-altın bir palet, zaman zaman rüya gibi.

Filmin zayıf yanı, gerçek olaydan uzaklaştıkça ahlaki çerçevesini de gevşetmesi; bazı izleyiciler bunu 'estetize edilmiş sömürü' olarak okuyabilir. Ancak Loayza'ya göre 'Night Nurse'ün asıl gücü tam da bu rahatsız edici konfor: Film sizden acımayı değil, seyretmenin suçluluğunu istiyor. Cesur, sapkın ve gelecek vaat eden bir çıkış.

Kaynak: Variety — Beatrice Loayza`,
  },
  {
    slug: "young-washington",
    origTitle: "Young Washington",
    title: "\"Young Washington\" — Kapanıştaki Bağış Ricasıyla Kendi Ayağına Kurşun Sıkan Bir Biyografi",
    excerpt: "Jon Erwin'in yönettiği Angel Studios yapımı; George Washington'ı efsaneleştirmeye çalışırken kapanış jeneriğindeki bağış çağrısıyla neredeyse tatmin edici olan bir biyografiyi zehirliyor.",
    rating: "2.5/5",
    image: "https://www.thewrap.com/wp-content/uploads/2026/07/Young-Washington-William-Franklyn-Miller.jpg",
    body: `Angel Studios kadar muhafazakâr Hristiyan ve Amerikan değerlerine hitap etmeye adanmış başka bir büyük stüdyo yok — ve başka hiçbir stüdyo da Amerikalıların bu değerleri paylaştığına bu kadar az inanmıyor. Diğer yapımcılar filmlerini vizyona sokup seyircinin bilet parasını ödemesini beklerken, Angel Studios ısrarla en jingoist ve dini filmlerini kapanış jeneriğinin üzerine yerleştirilmiş bir son-dakika bağış çağrısıyla bitiriyor.

Jon Erwin'in yönettiği, ürettiği ve senaryoya ortak imza attığı 'Young Washington'da George Washington'ı William Franklyn-Miller canlandırıyor. Sonunda ABD'nin ilk başkanı olacak, ama önce liderlik hakkında değerli dersler öğrenmesi ve yavaş çekimde Fransızların kıçına tekmeyi basması gerek. Başlık, John Ford'un 1939 yapımı 'Young Mr. Lincoln'ünü çağrıştırıyor — ancak Erwin, Ford değil; Franklyn-Miller de Henry Fonda değil.

Tüm karşılaştırmaları bir yana bıraksak bile Franklyn-Miller Amerika'nın kurucu babası rolünde kabul edilebilir. Erken sahnelerdeki oğlansı, samimi köpek yavrusu ifadesi giderek ciddi, hak edilmiş bir suratsızlığa dönüşüyor. Erwin'in yönetmenliği son derece yetkin; 1750'lerin Virginia ve Ohio topraklarını canlı ve çeşitli tonlarla resmediyor. Kostümler ve dekorlar da inandırıcı.

Ne var ki oyuncu kadrosu, Kristopher Kimlin'in görüntü yönetmenliği kadar tutarlı değil. Sir Ben Kingsley Virginia Vali Yardımcısı olarak filmin büyük bölümünü bir masanın arkasında geçiriyor. Kelsey Grammer olayı öne taşımaya adanmış; Andy Serkis, karakteri Braddock'ı basit bir palavracı olarak oynuyor. Sadece Angus Castle-Doughty, mantıklı ve alaycı bir milis rolünde sahne çalmaya kararlı — ve çaldığı her sahnede paçayı sıyırıyor.

'Young Washington' o kadar mekanik bir biyografi ki küçük parçalara odaklanmamak zor. Özellikle temalar bir arada tutamıyor; film, tarihin çirkin taraflarına ilgisiz. Washington doğduğu koşulların adaletsizliğinden motive oluyor — okula gidememesi, İngiliz ordusuna katılamaması. Ancak filmin kendi itirafına göre on kölesi var. Washington'ın köleleri ekranda hiç görünmüyor; diyalogda bir kez anıldıklarında ailesinin hayırseverliğinin alıcıları olarak tanımlanıyorlar.

21. yüzyılda Kurucu Babalar'ın basit bir portresi zor yutulur. Yavaş çekimde Fransızlarla silah düellosu yapıp dizanteriyle at üstünde numara çeken bir Washington görünce filmi ciddiye almak imkânsızlaşıyor. Amerika'nın çeyrek binyıllık doğum gününde yapılmış bu mısır tadında insistant bir yapım gişe rekoru bile kırabilir; ama Angel Studios bunu bilemez, çünkü satılan bilet sayısı gerçek seyirci sayısından çok daha yüksek olabilir. Para kazanma girişiminin dürüstsüzlüğü, aslında sadece bir başka yapay biyografi olabilecek bu filmi zehirliyor.

Kaynak: TheWrap – William Bibbiani`,
  },
  {
    slug: "the-last-one-for-the-road",
    origTitle: "The Last One for the Road",
    title: "\"The Last One for the Road\" — Venedik Yolunda Yaşlı Ayyaşların Trajikomik Odesi",
    excerpt: "Francesco Sossai'nin filmi; alkolizmi bir hastalık olarak değil, iflah olmaz iyimserlerin kaçınılmaz zamanı olarak resmediyor. Karamsar ama komik, tuhaf bir buddy-yol filmi.",
    rating: "3.5/5",
    image: lastOneRoadAsset.url,
    body: `Francesco Sossai'nin yeni filmi, \"alkolizm\" gibi işkilli klinik kavramlara pek prim vermiyor. Bunun yerine sarhoşluğa, bulanıklığa, hüzne ve arada mide bulantısına alaycı bir hoşgörüyle bakıyor; günün her saatinde içmeye devam edebilme süper gücüne sahip, hep \"son bir kadeh daha\" isteyen orta yaşlı ayyaşların trajikomik iyimserliğine göz kırpıyor. Filmin başında ve sonunda tekrarlanan aynı deadpan şaka bunu özetliyor: Biri kalıcı bir vedanın eşiğinde hayati bir öğüt bağırıyor ama bu öğüt anlaşılmayacak kadar boğuk çıkıyor.
      
Bu bir yol filmi, bir buddy filmi, biraz saçmalayan bir shaggy-dog masalı; olgunlaşmayı reddeden bir olgunlaşma hikâyesi; tatlı yanı silinmiş bir tatlı-acı komedi. Doriano (Pierpaolo Capovilla) ile Carlobianchi (Sergio Romano), sürekli iyi niyetle sarhoş, elden ağıza yaşayan, küçük dolandırıcılıkların kıyısındaki iki orta yaşlı serseri. Ortakları Genio'nun (Andrea Pennacchi) fabrikadan çaldığı marka gözlükleri yok pahasına satmalarından kalan lüks bir arabada yaşıyorlar.

Genio yıllar sonra Venedik'e döneceğini haber verince ikili yola koyulur; ama saçma bir hata yüzünden onu ıskalarlar. Yolda tanıştıkları genç mimarlık öğrencisi Giulio (Filippo Scotti), bir başka öğrenciye karşılıksız bir aşk yaşamaktadır. Doriano ile Carlobianchi bunu sezerler ve Giulio, canı sıkıla sıkıla bu iki adamla takılmayı kabul eder. Onları Carlo Scarpa'nın postmodernist Brion mezarına götürür; beton formları ölüm üzerine bir meditasyon gibi duran bu yapıda film karakterlerin de sessiz sedasız bir hesaplaşma içinde olduğunu ima eder.

Sossai, Venedik'i hiç sentimentalleştirmeden gösteriyor: Santa Croce'ye kısa bir bakış ve İtalya'nın 'Luton havalimanı' Treviso. Filmin ana damarı, Doriano ile Carlobianchi'nin Giulio'nun romantik yarasını iyileştirip iyileştirmediği; belki de gerçekte iyileştirdikleri onların Genio'ya duyduğu özlem oluyor. Giulio, Genio'nun olamadığı gerçek üçüncü silahşor. Öğleden sonra sallana sallana yürüyen bir sarhoş gibi burnunun izlediği yönü takip eden, sevimli bir film.`,
  },
  {
    slug: "enola-holmes-3",
    origTitle: "Enola Holmes 3",
    title: "\"Enola Holmes 3\" — Büyüme Sancıları Çeken Sevimli Bir Dedektif Sagası",
    excerpt: "Millie Bobby Brown'ın cazibesi hâlâ yerli yerinde; ancak Philip Barantini'nin devraldığı üçüncü film, olgunlaşma denemesiyle serinin coşkulu ruhu arasında kararsız kalıyor.",
    rating: "2.5/5",
    image: "https://www.indiewire.com/wp-content/uploads/2026/06/EH3_Unit_12046R.jpg?w=1600",
    body: `Zaman durmuyor; görünen o ki büyük ölçüde sevimli bir Netflix film serisi için bile. Büyüme sancıları, en keskin zekâların bile kaçamadığı bir yazgı. Philip Barantini'nin yönetmen koltuğuna oturduğu *Enola Holmes 3*, Millie Bobby Brown'ın canlandırdığı genç dedektifi bir kez daha karşımıza çıkarıyor; ancak seri, ilk iki filmin coşkulu ritmini bu kez tam olarak yakalayamıyor.

Brown, Nancy Springer'ın YA külliyatından beslenen bu karakter için hâlâ kusursuz bir seçim. Enola'nın hem çocuksu neşesini hem de keskin zekâsını taşıyabilecek nadir oyunculardan biri o. Ne var ki üçüncü filmde işler yürümek yerine ağır bir kostüm gibi karakterin üstüne biniyor. Barantini'nin — *Adolescence* damarından tanıdığımız — daha yetişkin, daha ağırbaşlı yaklaşımı, Jack Thorne'un senaryosunun oyuncaklı yanıyla tam olarak uyumlanamıyor. Sonuç: aynı anda hem büyümek hem de "eski Enola" olmak isteyen, dolayısıyla ikisinde de tam başarılı olamayan bir film.

Açılış son derece iddialı: Malta'da çekilen görkemli bir düğün, Enola ile Lord Tewkesbury'nin (Louis Partridge) evlilik günü. Sonra klasik Enola çilesi devreye giriyor — kiliseye geç kalış, yol kesiciler, evlilik kurumuna dair kuşkular. Ardından Sherlock'un (Henry Cavill) kaçırıldığı haberiyle düğün altüst oluyor ve gizem başlıyor. Yönetmenin geniş plan tercihleri Malta'nın taşını, ışığını, denizini güzel bir kartpostal gibi kadrajlarken; hikâyenin iç ritmi bir türlü aynı özene ulaşamıyor.

Filmin gerçek sorunu tempoda ortaya çıkıyor. Tewkesbury'nin annesi kaçırılıyor, otel yanıyor, Maltalı özgürlük savaşçıları sahneye giriyor, eski bir düşman geri dönüyor — ama yığılan dramatik olayların hiçbiri gerçek bir gerilim üretmiyor. Enola'nın dedektifliği bu kez zekâ pırıltısından ziyade tanık olduğu şeyleri bir bir toplayan bir gözlemciliğe dönüşüyor. Kamera, "önemli detay" olan nesneye zoom yaptığında iş çözülüyor; sanki filmin adı "dedektiflik değil, dolly zoom" gibi.

Öte yandan seri, her zaman ağır konularla flört etmeyi bilmişti — kadın hakları, sınıf farkları, sanayi devriminin insana bedeli. *Enola Holmes 3* de savaş suçlarına, sömürüye, işgale değiniyor; ama bu ağır meseleleri hikâyenin doğal parçası hâline getirecek dramatik vidayı sıkamıyor. Karakter olan Enola olgunlaşıyor gibi görünürken, hikâye onunla birlikte büyüyemiyor; adeta yetişkin bir ceket giymiş çocuk gibi.

Sonuç olarak *Enola Holmes 3*, Millie Bobby Brown hayranları için hâlâ izlenebilir bir Netflix akşamı sunuyor; ama ilk filmin taze enerjisini ya da ikinci filmin dolu dolu kaosunu arayanlar için biraz "temel seviye" kalıyor. Bir sonraki bölüm için tek dileğimiz şu: Bırakın Enola gerçekten büyüsün — ve gizemler de onunla birlikte gerçekten karmaşıklaşsın.`,
  },
  {
    slug: "glastonbury-the-movie",

    origTitle: "Glastonbury the Movie",
    title: "\"Glastonbury the Movie\" — Çamur, Müzik ve Kaybolan Masumiyet",
    excerpt: "Dijital dünyanın gürültüsünden uzak, 1993 Glastonbury festivalinin çamurlu ve özgür ruhuna yapılan, 16mm dokusunda nostaljik ve antropolojik bir yolculuk.",
    rating: "4/5",
    image: glastonburyImg,
    videoUrl: "https://www.youtube.com/embed/jKAfhqmJ4ME",
    body: `Robin Mahoney, Matthew Salkeld ve William Beaton üçlüsünün yönetmen koltuğunda oturduğu *Glastonbury the Movie*, modern festival kültürünün endüstriyel bir canavara dönüşmeden önceki son saf, son masum nefesi gibi karşımızda duruyor. 1993 yılının o meşhur çamurlu düzlüğünde kaydedilen bu yapım, klasik bir konser filminden ziyade, antropolojik bir kazı çalışmasını andırıyor. Akıllı telefonların ekran ışıklarının karanlığı kirletmediği, kurumsal sponsorların logolarının her köşeden fırlamadığı bir dönemin ruhunu, adeta bir zaman kapsülü titizliğiyle günümüze taşıyor.

Filmin anlatı yapısı, alışılagelmiş bir "başrol" veya "vokalist" etrafında dönmüyor; burada asıl kahraman kalabalığın kendisi. Yönetmenler, kamerayı bir gözlemci gibi kalabalığın içine salıyor. Çadır kurmaya çalışan sarhoşlar, şafak vaktinde dans eden siluetler ve o meşhur İngiliz çamurunun içinde kaybolan botlar... Sinematografi, yer yer yalpalayan ama her zaman samimi olan 16mm ve 35mm dokusuyla, dijitalin o steril dünyasına bir başkaldırı niteliğinde. Görüntülerdeki grenler, festivalin tozuna ve dumanına karışarak izleyiciyi koltuğundan alıp Worthy Farm'ın tekinsiz ama özgür atmosferine bırakıyor.

Müzikal anlamda film, bir küratörlük harikası olmaktan ziyade o anın akışını yansıtıyor. Sahne performansları, birer klip estetiğiyle değil, sanki yoldan geçerken kulak misafiri oluyormuşsunuz hissiyle kurgulanmış. Bu tercih, filmi didaktik bir belgesel olmaktan çıkarıp duyusal bir deneyime dönüştürüyor. Hippi rüyasının gün batımı olarak nitelendirilebilecek bu dönemde, çiçek çocukların yerini yavaş yavaş rave kültürünün kaotik enerjisine bıraktığını, ancak o eski "komün yaşam" idealinin henüz ölmediğini görüyoruz.

Ancak filmin en güçlü yanı olduğu kadar en zayıf karnı da bu dağınıklığı. Belirli bir olay örgüsüne ya da odak noktasına sahip olmaması, genel izleyici için zaman zaman yorucu bir tempoya sebep olabilir. Bazı sekansların gereğinden fazla uzatılması, seyirciyi o anın içinde tutmak istese de bazen ritmi düşürüyor. Yine de bu "başıboşluk", anlatmak istediği özgürlük temasıyla yapısal bir uyum içinde. Disiplinsiz bir kurgu, belki de bu kadar disiplinsiz bir festivali anlatmanın en dürüst yoludur.

Sonuç olarak *Glastonbury the Movie*, otuz yıl sonra geriye dönüp baktığımızda sadece bir müzik etkinliğini değil, bir kuşağın son özgürlük çığlığını temsil ediyor. Kamera telefonlarının ve sosyal medya onayının olmadığı bir dünyada, insanların sadece "orada" olmak için orada olduğu o büyülü anları izlemek, bugünün gözetim toplumunda yaşayan bizler için hem hüzünlü hem de ilham verici. Bu film, hippi rüyasının son demlerine yakılmış, çamur kokulu ve samimi bir ağıt niteliğinde.`,
  },
  {
    slug: "strung",
    origTitle: "Strung",
    title: "\"Strung\" — Korku ve Melodramın Çatışmasında Kısılan Bir Tür Denemesi",
    excerpt: "Blumhouse gerilimi ile Tyler Perry dramatizminin ilginç bir çarpışması olan Strung, senaryo yoğunluğuyla boğuşan ancak atmosferiyle merak uyandıran bir tür denemesi sunuyor.",
    rating: "2.5/5",
    image: strungImg,
    body: `Korku türünün seri üretim fabrikası Blumhouse'un klostrofobik gerilimi ile Tyler Perry'nin ağdalı melodram geleneği aynı potada erirse ne olur? *Strung*, işte bu sorunun cevabını ararken izleyiciyi hem meraklandıran hem de kafasını karıştıran tuhaf bir tür kırması olarak karşımıza çıkıyor. Film boyunca hissedilen o tekinsiz atmosfer, bir noktadan sonra yerini aile trajedilerine ve bitmek bilmeyen diyaloglara bıraktığında, elimizdekinin bir korku filminden ziyade "korku soslu bir pembe dizi" olduğunu anlıyoruz.

Yönetmenlik koltuğundaki tercihlerin, düşük bütçenin getirdiği kısıtlı imkanlarla birleşince ortaya ilginç bir görsel dil çıkardığını söylemek mümkün. Dar mekanlarda kurulan kamera açıları, karakterlerin psikolojik sıkışmışlığını başarıyla yansıtıyor. Ancak görsel taraftaki bu çaba, senaryonun hantallığına yenik düşüyor. Hikaye, sanki 8 bölümlük bir mini dizi için tasarlanmış da son anda kurgu masasında budanarak 90 dakikaya sığdırılmış gibi duruyor. Bu da karakter gelişimindeki boşlukların ve ani duygu değişimlerinin havada kalmasına neden oluyor.

Oyunculuklar konusunda ise film tam bir ikiye bölünmüşlük yaşıyor. Başrolün janra uygun abartılı performansına karşın, yan karakterlerin daha çok gündüz kuşağı dizilerini andıran donukluğu, sahneler arasındaki ton farkını iyice keskinleştiriyor. Bir sahnede iliklerinize kadar ürperirken, hemen ardından gelen didaktik bir tiratla filmin gerçekliğinden kopabiliyorsunuz. Bu uyumsuzluk, filmin en büyük hem güçlü hem de zayıf halkasını oluşturuyor.

Teknik açıdan ses tasarımı ve ışık kullanımı, prodüksiyonun kısıtlılığını örtbas etmekte başarılı. Gölgelerin kullanımı ve ani ses patlamaları, türün meraklılarını memnun edecek "jump scare" anlarını besliyor. Ancak hikayenin kalbindeki o trajik sır açığa çıktığında, gizem yerini bir türlü finale ulaşılamayan bir dramatik döngüye bırakıyor. Senaryonun yoğunluğu, izleyiciye nefes alacak alan bırakmadığı gibi, gizemin ürkütücü etkisini de seyreltiyor.

Sonuç olarak *Strung*, türsel denemeleri seven ve "guilty pleasure" (izlemekten utanç duyulan zevk) kategorisinde bir film arayanlar için fena bir tercih sayılmaz. Sinematografik açıdan parlak anları olsa da, anlatımındaki dağınıklık ve türler arası geçişlerdeki sert manevralar filmin kalıcı bir etki bırakmasını engelliyor. Blumhouse'un karanlık koridorlarında yürürken kendinizi bir anda Tyler Perry'nin gözyaşı dolu salonlarında bulmaya hazırlıklı olun. Sinemada yenilikçi bir dil arayanlar için bu karışım biraz fazla sert gelebilir.`,
  },
  {
    slug: "the-mission",
    origTitle: "The Mission",
    title: "\"The Mission\" — Karanlığın İçinde Bir Neşter Darbesi",
    excerpt: "Gazze'nin karanlık hastane koridorlarında çaresizliğe meydan okuyan Cerrah Muhammed Tahir'in hikayesi, insanlık onurunun en saf ve sarsıcı belgesine dönüşüyor.",
    rating: "4.5/5",
    image: missionImg,
    body: `İnsanın insana ettiğini izlemek her zaman zordur ancak *The Mission*, bu karanlığın tam kalbinde yeşeren bir mukavemetin anatomisini önümüze koyarak ezber bozuyor. Film, savaşın pençesindeki Gazze'de, bombardıman seslerinin hastane koridorlarında yankılandığı bir kaosta, cerrah Muhammed Tahir ve ekibinin verdiği olağanüstü mücadeleyi merceğe alıyor. Yönetmen, izleyiciyi sadece bir savaşın yıkımına değil, o yıkımın içinde titreyen ellerle dikiş atan cerrahların nefes alışverişine ortak ediyor.

Belgeselin en çarpıcı yönü, trajediyi estetik bir nesneye dönüştürmeden, çıplak ve sarsıcı bir gerçeklikle sunması. Sinematografi, klostrofobik hastane odalarıyla gökyüzünden yağan ateşin geniş açıları arasında gidip gelerek sürekli bir tekinsizlik hissi yaratıyor. Elektrik kesintileri sırasında cep telefonu ışığında yapılan ameliyatlar, sadece teknik bir yetersizliği değil, insanlığın ışığının ne kadar azaldığını da sembolize ediyor. Muhammed Tahir'in yüzündeki her yeni derin çizgi, belgeselin anlatı yükünü herhangi bir diyalogdan daha iyi taşıyor.

Yönetmenlik tercihi olarak mesafeli ama vicdani bir duruş sergilenmiş. Kamera, cerrahların sadece başarılarını değil, çaresizlikten kaynaklanan sessiz omuz düşüşlerini de yakalıyor. Bir cerrahın, elindeki kısıtlı tıbbi malzemeyle kimin yaşayıp kimin öleceğine karar vermek zorunda kaldığı o etik uçurum, izleyicinin boğazında düğümleniyor. Film, kahramanlık mitini bir kenara itip, "dayanıklılığın" aslında ne kadar ağır bir bedeli olduğunu gösteriyor.

Filmin kurgusu, kaosun ritmini takip ediyor. Hızlı kesimler, sedyelerin koridorlardaki gürültüsü ve dışarıdaki patlamaların uğultusu, izleyiciyi bir an bile rahat bırakmıyor. Ancak bu gürültünün arasında Tahir'in hastalarına fısıldadığı o birkaç teselli cümlesi, filmin duygusal omurgasını oluşturuyor. Bu tezat, filmin sadece bir savaş günlüğü değil, aynı zamanda derin bir "yaşam istenci" manifestosu olmasını sağlıyor.

Sonuç olarak *The Mission*, izlemesi kolay bir film değil; hatta bazen bakışlarımızı kaçırmak istediğimiz kadar sert. Ancak sinemanın bir tanıklık biçimi olduğunu düşünürsek, bu belgesel kaçırılmaması gereken bir belge niteliğinde. Muhammed Tahir ve meslektaşlarının üzerinden anlatılan bu hikaye, politikanın çok ötesinde, etin ve kemiğin, umudun ve yıkımın en saf haliyle buluştuğu yer. Modern dünyanın sağır kaldığı çığlıkları, steril sinema salonlarına taşıyan bu yapım, uzun süre zihninizden silinmeyecek.`,
  },
  {
    slug: "little-brother",
    origTitle: "Little Brother",
    title: "\"Little Brother\" — Ehlileştirilmiş Bir Kaos ve Beklenen Sıra Dışılığın Uzağında Bir Yol Hikâyesi",
    excerpt: "Eric André'nin vahşi enerjisinin ehlileştirildiği bu yol hikâyesi, kara mizah ile aile dramı arasında kararsız kalarak unutulabilir bir Netflix deneyimine dönüşüyor.",
    rating: "2.5/5",
    image: littleBrotherImg,
    body: `Sherman Payne'in yönetmen koltuğunda oturduğu *Little Brother*, kağıt üzerinde Eric André'nin o kaotik ve absürt mizah anlayışıyla modern bir yol hikâyesini birleştirme vaadi sunuyor. Ancak perdede izlediğimiz şey, bu potansiyelin oldukça uzağında, güvenli sularda yüzmeye çalışan ve ne yazık ki hedeflediği o keskin mizahı yakalamakta zorlanan bir yapım. Film, intihara meyilli bir abiyi (Philip Ettinger) eve geri götürmek zorunda kalan küçük kardeşin (Eric André) çatışmalı ilişkisine odaklansa da, bu dramatik altyapı komedi unsurlarıyla organik bir bağ kuramıyor.

Eric André, televizyondaki o sınır tanımayan, rahatsız edici ve dahi "anti-komedi" persona'sından sıyrılıp daha kontrollü bir performans sergilemeye çalışmış. Ancak sorun da tam burada başlıyor: André, izleyiciyi şaşırtacak kadar "normal" kaldığında, onun o patlamaya hazır enerjisine alışkın olan bünyeler bir eksiklik hissediyor. Karakteri yazılırken André'nin doğal yetenekleri yeterince alan bulamamış, bu da oyuncuyu kısıtlanmış ve bir nevi evcilleştirilmiş bir rolde bırakmış. Philip Ettinger ise dramatik yükü sırtlanmaya çalışsa da, ikili arasındaki kimya beklenen kıvılcımı çakmaktan uzak kalıyor.

Yönetmenlik tercihlerine baktığımızda, Payne'in görsel dili oldukça standart bir bağımsız film estetiğine sıkışmış durumda. Yol boyunca karşılaşılan manzaralar ve kurulan kadrajlar, türün klişelerinden öteye geçemediği gibi, hikâyenin duygusal tonunu yükseltecek görsel bir buluş da sunmuyor. Sinematografi, kardeşlerin içsel yolculuğuna eşlik etmek yerine, sadece karakterlerin A noktasından B noktasına gidişini kayıt altına alan bir gözlemci gibi soğuk kalıyor.

Senaryo tarafında ise en büyük zaaf, kara mizah ile aile draması arasındaki o ince çizgide dengeyi kuramamak. Film, bazı sahnelerde ciddi bir psikolojik derinlik arayışına girerken hemen ardından gelen zayıf şakalar bu derinliği baltalıyor. Eric André'den beklediğimiz o "tuhaflık" dozu o kadar düşük ki, film ne tam anlamıyla bir absürt komedi ne de etkileyici bir karakter çalışması olabiliyor. Diyaloglar ise çoğu zaman tahmin edilebilir ve didaktik bir tonda ilerliyor.

Sonuç olarak *Little Brother*, türün meraklıları için vakit geçirmelik bir seyirlik sunsa da, hafızalarda yer edecek bir iz bırakmaktan hayli uzak. Eric André'nin hayranlarını tatmin etmeyecek kadar uysal, bağımsız sinema tutkunlarını şaşırtmayacak kadar formüllere dayalı bir yapım var karşımızda. Potansiyeli yüksek bir ikilinin, vasat bir senaryonun içinde kaybolup gitmesine tanıklık etmek üzücü. Film, maalesef kendi kaosunu yaratamayan, "küçük" kalmış bir deneme olarak Netflix kütüphanesindeki yerini alıyor.`,
  },
  {
    slug: "jackass-best-and-last",
    origTitle: "Jackass: Best and Last",
    title: "\"Jackass: Best and Last\" — Acının ve Kahkahanın Grotesk Vedası",
    excerpt: "Johnny Knoxville ve ekibi, acının ve kahkahanın sınırlarını zorlayan bu son veda ile sinema tarihinin en iğrenç ama en samimi dostluk hikayelerinden birine imza atıyor.",
    rating: "4/5",
    image: jackassImg,
    body: `Kusmuk, kan, idrar ve bitmek bilmeyen kemik kırılma sesleri... Sinema tarihinin en "kakofonik" ve aykırı topluluklarından biri olan ekip, *Jackass Forever* (Jackass: Best and Last) ile bizlere sadece bir veda değil, aynı zamanda yaşlanmanın ve dostluğun en grotesk halini sunuyor. Yirmi yılı aşkın bir süredir fiziksel sınırları ve toplumsal nezaket kurallarını zorlayan bu ekip, beyazperdedeki son danslarında izleyiciyi yine o meşhur "bakmaya cesaret edememe ama gözünü de ayıramama" ikilemiyle baş başa bırakıyor.

Yönetmen Jeff Tremaine, bu son derlemede nostalji ile safi anarşiyi ustalıkla harmanlıyor. Film, sadece geçmişteki çılgın anların bir güzellemesi değil; aksine, ellili yaşlarına gelmiş adamların hala 15 yaşındaki birer ergen gibi birbirlerine şakalar yapmasının hüzünlü ama bir o kadar da hayata bağlı tarafını gösteriyor. Johnny Knoxville'in ağarmış saçları ve Steve-O'nun artık yorgun düşmüş bedeni, yapılan eylemlerin ağırlığını (ve saçmalığını) daha da artırıyor. Sinematografik açıdan bakıldığında, yüksek çözünürlüklü kameraların bu denli "çirkin" detayları (yakın çekim arı sokmaları veya mide bulandırıcı sıvılar) bu kadar net kaydetmesi, filmin gerçeküstücülüğünü pekiştiriyor.

Oyunculuktan bahsetmek Jackass evreninde biraz absürt kaçabilir ama burada sergilenen şey "adrenalin oyunculuğu". Ekibin yeni üyeleri ile eski tüfekler arasındaki kimya şaşırtıcı derecede taze. Knoxville'in liderlik vasfı ve korkusuzluğu, tayfanın geri kalanını da hizada tutuyor. Ancak bu filmde fark edilen en büyük detay, ekibin birbirine olan derin sevgisi. Birbirlerinin canını bu kadar yakan insanların, aynı zamanda birbirlerinin en büyük destekçisi olması, Jackass'i sadece bir "şaka programı" olmaktan çıkarıp bir tür kabile ritüeline dönüştürüyor.

Filmin en güçlü yanı, izleyicisini dürüst bir katharsise sürüklemesi. Dünyanın bu kadar ciddiye alındığı, politik doğruluğun her köşe başında nöbet tuttuğu bir dönemde, Jackass ekibi orta parmağını havaya kaldırıp "Hala buradayız ve hala çok saçmayız" diyor. Zayıf yanı ise kuşkusuz, bu tür mizahın herkese hitap etmemesi. Midesi hassas olanlar veya sinemayı sadece entelektüel bir derinlik aracı olarak görenler için bu yapım bir kabustan farksız olabilir.

Sonuç olarak bu veda, şanına yaraşır bir şekilde gürültülü ve kirli. Jackass ekibi, acının ve kahkahanın kardeş olduğunu bir kez daha kanıtlıyor. Perdeden çekilirken bize bıraktıkları miras; bir miktar morluk, birkaç eksik diş ve her şeye rağmen gülebilmenin o paha biçilemez hafifliği. Onları özleyeceğiz ama muhtemelen hastane faturalarını ve sakatlıklarını değil, o bitmek bilmeyen çocuksu enerjilerini.`,
  },
  {
    slug: "the-odyssey-ilk-tepkiler",
    origTitle: "The Odyssey",
    title: "\"The Odyssey\" İlk Tepkileri: 'Hantal', 'Muhteşem' ve 'Peter Jackson'ın Yüzüklerin Efendisi Gibi'",
    excerpt: "Christopher Nolan'ın uzun süredir beklenen 'The Odyssey' filmi Londra'da prömiyer yaptı. Eleştirmenlerden gelen ilk tepkiler, Yunan mitolojisinin korkularını cesurca kucaklayan bu devasa yapım için büyük ölçüde olumlu.",
    rating: "Erken tepkiler",
    image: "https://kotaku.com/app/uploads/2026/07/the-odyssey.jpg",
    body: `Christopher Nolan'ın 'Oppenheimer' sonrası imza attığı yeni epik 'The Odyssey', 6 Temmuz'da Londra'da prömiyer yaptı; tam gösterim 17 Temmuz'da başlıyor. IMAX biletleri şimdiden tükendi, sıradan gösterimler de hızla dolmaya başlayabilir. Matt Damon, Anne Hathaway, Tom Holland, John Leguizamo, Robert Pattinson, Lupita Nyong'o ve daha pek çok ismin yer aldığı yapımın tam eleştirileri henüz yayımlanmadı; ancak eleştirmenlerin sosyal medyadaki ilk izlenimleri filmin beklentileri karşılayacağına dair güçlü sinyaller veriyor.

Ekran performansları, Damon'ınki dahil, büyük ölçüde övülüyor; ama eleştirmenleri asıl heyecanlandıran şey yapımın devasa ölçeği ve titiz detayı. The Hollywood Reporter'dan Aaron Crouch'a göre film, Nolan'ın kariyerindeki 'ilk baştan sona kurulmuş korku sekansına' sahne oluyor. Polygon'dan Jacob Kleinman ise detayların özenini doğrudan 'Yüzüklerin Efendisi'ne benzetiyor. IndieWire'dan David Ehrlich 'S sınıfı Nolan olmak için biraz fazla hantal' dese de filmin 'Oppenheimer' kadar kasvetli olmadığını söylüyor.

Tom Page'in tespitiyle 'The Odyssey' hem şaşırtıcı bir gösteri hem de zekice, altüst edici bir uyarlama; Nolan'ın olayları psikolojik olarak sorgulama biçimi ölçekten bile önce şaşırtıyor, sonuç ise 'canlandırıcı derecede modern' bir yorum. Andrew J. Salazar filmi 'akıl almaz bir başarı' olarak nitelendiriyor; Nolan'ın Yunan mitolojisinin korkularını cesurca kucakladığını, hikâyeyi modern günün diline zarifçe uyarladığını yazıyor.

Herkes 'kusursuz' demiyor; ama büyük bütçeli bir yaz filmi için beklenebilecek en olumlu tepkilerden biri şu ana kadarki tablo. Bu, initial buzz kadar iyi olacağı anlamına gelmese de kesinlikle kötü bir işaret değil. Tam sürüm önümüzdeki hafta perdede; o zamana kadar 'her şey bitti' ile 'geri döndük' arasında birkaç tur daha atacağa benziyoruz.`,
  },
  {
    slug: "good-luck-have-fun-dont-die",
    origTitle: "Good Luck, Have Fun, Don't Die",
    title: "\"Good Luck, Have Fun, Don't Die\" — Diner'da Başlayan Bir Zaman Yolculuğu Karnavalı",
    excerpt: "Sam Rockwell, Juno Temple ve Haley Lu Richardson'ı Los Angeles'ın ikonik bir diner'ında buluşturan aksiyon-komedi-bilimkurgu; gelecekten geldiğini iddia eden bir adamın rehin aldığı müşterileri dünyayı kurtaracak sıra dışı bir ekibe dönüştürüyor.",
    rating: "3.5/5",
    image: goodLuckAsset.url,
    body: `2 saat 14 dakikalık *Good Luck, Have Fun, Don't Die*, adının verdiği enerjiyi bir an bile kaybetmiyor. Los Angeles'ın ikonik bir gece diner'ında geçen açılış sekansında Sam Rockwell'in canlandırdığı isimsiz "Gelecekten Gelen Adam", elinde silahla masalara oturmuş müşterileri rehin alıyor. Ne para istiyor ne de intikam — dünyayı kurtaracak "olası adayları" arıyor.

Rockwell, tam da kariyerinin bu döneminde yapması gereken türden bir performans veriyor: yarı deli, yarı melankolik, tamamen karizmatik. Juno Temple'ın canlandırdığı Susan başlangıçta filmin şüpheci sesi; Haley Lu Richardson'ın Ingrid'i ise en sıra dışı olmasına rağmen ekibin duygusal çekirdeği hâline geliyor. Üçünün diner masasındaki uzun diyaloğu, filmin en iyi 20 dakikası.

Yönetmen, bilimkurguyu bir arka plan dokusu olarak kullanıyor; gerçek konu, rastgele insanların bir amacın etrafında toplandığında kendilerinde keşfettikleri şey. Aksiyon geldiğinde de tempoyu düşürmeden, ama sırıtan bir zekâyla geliyor: bir motel odasında geçen kovalamaca, filmin türden tam olarak ne almak istediğini gösteren mini bir manifesto gibi.

Sonuç: R sertifikalı, biraz kaotik, sık sık kendi kuyruğunu kovalayan ama son derece keyifli bir yaz alternatifi. Blockbuster yorgunluğu çekenler için diner'a bir uğrayın; hesap çok tuzlu değil.`,
  },
  {
    slug: "project-hail-mary",
    origTitle: "Project Hail Mary",
    title: "\"Project Hail Mary\" — Ryan Gosling'in Cazibesiyle Ayakta Kalan Bir Uzay Kumarı",
    excerpt: "Andy Weir'in çok satan romanından uyarlanan bu son çare uzay macerası, ciddi olmakla çocuksu bir muzırlık arasında salınıyor; ama Gosling'in doğal karizması gemiyi limana getiriyor.",
    rating: "3/5",
    image: projectHailMaryAsset.url,
    body: `Andy Weir'in çok satan bilimkurgu romanından uyarlanan *Project Hail Mary*, Güneş'i söndüren uzaylı mikropları durdurmak için Dünya'nın son umudu olarak uzaya fırlatılan bir görevi anlatıyor. Amerikan futbolundan "Hail Mary" pasına atıfla adlandırılan bu misyon; adı üstünde, hesabı tutmayan ama başka çare olmayan bir kumar. Yönetmenliği *The Lego Movie*'nin ve *Spider-Man: Into the Spider-Verse*'ün ekibi Phil Lord ve Chris Miller üstlenince, filmin tonundaki oynak, muzır çocuksuluk pek de sürpriz olmuyor.

Ryan Gosling, moleküler biyolog Dr. Ryland Grace rolünde adeta yerleşik bir konforla oynuyor: bakımsız uzun saçlar, dağınık sakal ve neden orada olduğuna dair sıfır hafıza ile indüklenmiş komadan uyanır. Geminin geri kalan mürettebatı ölmüştür; onun görevi hem oraya nasıl geldiğini çözmek hem de insanlığı kurtarmaktır. Gosling'in ekrandaki o eforsuz büyüsü, filmin bazı yavaş anlarını ve zaman zaman rahatsız edici derecede hafifleşen tonunu tolere edilebilir kılıyor.

Filmin gerçek kalbi, Grace'in taştan bedenli, örümceğe benzer bir uzaylıyla — ki mürettebat notlarında adı "Rocky" olarak geçer — kurduğu tuhaf dostlukta atıyor. Grace'in yazılımı Rocky'nin iletişimini Hulk gramerine çevirdiğinde ("Rocky tamir eder", "Rocky yardım eder") film hem *E.T.* nostaljisi hem de *The Martian*'ın neşeli mühendislik pornosu arasında salınmaya başlıyor. Sandra Hüller'in soğuk kanlı Alman teknokrat Eva Stratt olarak alevlerin arasına dalıp çıktığı flashback'ler ise senaryoya arada bir ağırlık kazandırmaya çalışıyor.

Ne var ki bu geri dönüşlerin dramatik işlevi hep muğlak kalıyor. Grace bir şeyleri hatırlıyor mu, yoksa yönetmenler sadece kadrajı değiştirmek için mi bu sekanslara başvuruyor belli değil. Nolan'ın *Interstellar*'ındaki o sarsılmış hayranlığı ya da Spaihts'ın *Passengers*'ının romantik izolasyonunu aramayın; *Project Hail Mary* bilinçli olarak daha hafif, daha oyuncaklı bir yerde duruyor. Bu tercih zaman zaman zekice, zaman zaman ise "çocuk kanalı finali" hissi veriyor.

Sonuç: Weir'in *The Martian*'daki neşeli, esprili tonuna aşinaysanız kendinizi tanıdık sularda hissedeceksiniz. *Project Hail Mary*, sinemasal olarak bir devrim değil; ama Gosling'in tuttuğu bu Hail Mary pası, umulmadık şekilde eldivende kalıyor.`,
  },
  {
    slug: "avatar-son-hava-bukucu-s2",
    origTitle: "Avatar: The Last Airbender Season 2",
    title: "\"Avatar: Son Hava Bükücü\" 2. Sezon — Netflix'in Canlı Aksiyon Uyarlaması Hâlâ Ayaklarını Yere Basamıyor",
    excerpt: "Netflix'in canlı aksiyon uyarlaması etkileyici bir hikâye kolunu adapte etse de temposuz, mizahsız ve karanlık lightingiyle animasyon orijinalinin cazibesini bir kez daha ıskalıyor.",
    rating: "2/5",
    image: avatar2Asset.url,
    body: `Netflix'in canlı aksiyon *Avatar: The Last Airbender* uyarlaması, orijinal Nickelodeon çizgi filminin neyi neden sevildiğini hâlâ anlamıyor. İkinci sezon, birinci sezonun bütün temel sorunlarını neredeyse hiç düzeltmeden geri getiriyor. Başat problem yine tempo. Ortaokul yaş grubuna hitap eden, 20 dakikalık bölümleri hızlı ve komik olan animasyon, burada yedi bölümlük, saatlik, olay yığılı bir yapıya sıkıştırılıyor. Bu, daha olgun bir yorum getirmiyor — sadece daha ağır ve daha ciddi bir versiyon yaratıyor; ki kaynağa yapılabilecek en büyük kötülük tam da bu.

Su bükmeyi Su Kabilesi'nden Katara (Kiawentiio) ve Sokka (Ian Ousley) ile öğrenmiş 12 yaşındaki Avatar Aang (Gordon Cormier), sezon boyunca Toprak Krallığı'nda dolaşıyor. Dört elementte de ustalaşmak için bir toprak bükücü öğretmene ihtiyacı vardır ve bu, ekibe en canlı ve haşarı figürü olan kör kız Toph (Miyako) olarak katılıyor. Aynı zamanda Ateş Ulusu güçleri Toprak Krallığı'na yayılırken kahramanlar surlarla çevrili Ba Sing Se şehrinin propaganda, gözetim ve gizli polis üçgenine düşer. Bu, orijinal serinin en akılda kalan yaylarından biri — potansiyeli tartışılmaz.

Sorun tam da bu potansiyelin nasıl harcandığında. Parlak renkler ve hızlı espriler yerine karanlıkta çekilmiş uzun, yavaş diyalog sahneleriyle karşı karşıyayız; şaka neredeyse yok. Cormier elinden geleni yapıyor ama Aang'in o çocuksu çekiciliğini taşımak için gereken mizah alanı ona verilmiyor. Ba Sing Se'de Bumi'nin (Utkarsh Ambudkar) neden ona öğretmenlik yapamayacağını anlattığı sahne çizgi filmde 45 saniyelik expozisyonla biten bir aksiyon kovalamacasıyken, dizide karanlık bir odada geçen üç dakikalık statik bir sohbete dönüşüyor. Kimse — özellikle 10 yaşındaki çocuklar — böyle anlatılmayı sevmez.

Yine de kaydedilmesi gereken bir güçlü not var: Zuko (Dallas Liu). Ateş Lordu'nun oğlu, amcası Iroh (Paul Sun-Hyung Lee) ile birlikte takma isimlerle Ba Sing Se'de yaşamaya çalışırken kurtuluş yayının ilk kıvılcımlarını yakıyor. Babasına kanıtlanma arzusuyla ablası Azula'nın (Elizabeth Yu) acımasızlığı arasında sıkışmış bu ergen figürü, sezonun en ilgi çekici karakter çalışması. Ne yazık ki yanındaki ekip yeterince yazılmadığı için Zuko'nun ağırlığını tek başına taşıması gerekiyor.

Sonuç olarak Netflix'in *Avatar*'ı, M. Night Shyamalan'ın kötü şöhretli sinema uyarlamasının altına düşmüyor — orijinaline sadık casting kararlarıyla en azından o eşiği geçiyor. Ama popüler bir markadan faydalanmanın ötesinde bir varlık sebebine sahip olduğunu söylemek zor. Karizmasız, temposuz ve ışıkları sürekli sönük bir uyarlama, "çizgi film olmama" özelliğini kendi başına bir erdem gibi sunuyor; ki değil.`,
  },
  {
    slug: "cape-fear-apple-tv",
    origTitle: "Cape Fear",
    title: "\"Cape Fear\" — Apple TV Uyarlaması, Selefini Takip Ederken Kendini Kaybediyor",
    excerpt: "Javier Bardem ve Amy Adams'ın başrolde olduğu 10 bölümlük Apple TV uyarlaması, Scorsese'nin klasiğini hem taklit edip hem ondan kaçmak isterken kendi tonunu bulamayan tekinsiz bir gerilim.",
    rating: "2.5/5",
    image: capeFearAsset.url,
    body: `Herhangi bir oyuncudan, daha önce Robert De Niro'nun canlandırdığı bir karakterin altına girmesini istemek zaten haksızlıktır — hele o karakter Max Cady ise. 1991'in şiddet dolu *Cape Fear* uyarlamasında De Niro, Cady'ye kibri, öfkeyi ve Güney cazibesini öyle bir dozda karıştırmıştı ki karakter hem korkutucu hem de gözünüzü ayıramadığınız kadar çekici oluyordu. Nick Antosca'nın (*Channel Zero*, *A Friend of the Family*) yaratıcısı olduğu, 10 bölüme yayılan yeni Apple TV mini dizisi, bu koltuğa Javier Bardem'i oturtuyor.

Bardem iyi bir oyuncu ve zorlu figürleri canlandırma konusunda deneyimli — Anton Chigurh'u yaratmış bir aktörden bahsediyoruz. Cady olarak da manipülatif, ürkütücü, baştan çıkarıcı ve kaygan. Ama performansı De Niro'nunki gibi lazerle odaklanmamış; aksana kadar her şeyi yer yer dağılıyor. Anadili İspanyolca ağırlıklı bir konuşmanın arasına ara sıra Güneyli, ara sıra *Mare of Easttown* tınısı karışıyor. Bardem'in oyun oynadığını hep hissediyorsunuz; De Niro'da bu asla olmuyordu.

Antosca ve senaristleri, 128 dakikalık orijinal filmi neredeyse 10 saate yaymak için hikâyeye ciddi eklemeler yapmışlar. Bu versiyonda Cady, eşi ve oğlunu öldürmekle suçlanmış ve mahkumiyeti bozularak beraat etmiş bir figür. Ailenin reisi kadın: Anna Bowden (Amy Adams), Cady'nin cinayet davasında onu temsil etmiş ve şimdi Southern Justice Legal Project adlı hayali bir sivil toplum örgütünde çalışıyor. Kocası Tom (Patrick Wilson) ise o davada savcıydı — yani Cady'nin her ikisiyle de hesabı var. Ergen kızı Natalie (Lily Collias) ve derin bir depresyonla boğuşan üvey oğlu Zack (Joe Anders), Cady'nin dijital yollarla zihinlere sızmasına yeni kapılar açıyor.

Dizinin problemi tam da bu genişleme çabasında ortaya çıkıyor. Herkes o kadar çok "doğru yapmaya" çalışıyor ki gayret perdenin önüne geçiyor. Adams'ın performansı sağlam; Anna'nın özel bir cezaevi CEO'suyla giriştiği o keskin sahne yılın en tatmin edici anlarından. Ama karakter öyle içine kapalı ki onu asla tam tanıyamıyorsunuz. Collias ve Anders ise adeta başka bir dizide, Max Cady endişesi olmadan yaşayabilecek iki suskun genç gibi. Görsel dil Hitchcockvari hızlı zoom'ları, X-ray aydınlatmayı ve Bernard Herrmann skorunu Scorsese'den birebir devralıyor; hatta De Niro'nun sinema salonunda kahkahayla güldüğü ünlü sahne bile hafif rötuşlarla yeniden çekilmiş — ki bu bence yapılmamalıydı.

*Fargo* başta olmak üzere bazı film uyarlaması diziler, kaynak esere göz kırparken bağımsız bir dram inşa edebildi. *Cape Fear* aynı yaratıcı cesarete sahip değil. Fena değil — ama biraz daha fazlasını beklerdim, Sayın Avukat.`,
  },
  {
    slug: "the-boroughs",
    origTitle: "The Boroughs",
    title: "\"The Boroughs\" — Alfred Molina ve Geena Davis'in Öncülüğünde Eğlenceli, Spielbergvari Bir Bilimkurgu",
    excerpt: "New Mexico çölünde bir emeklilik köyünde canavarların ve şirket gözetiminin peşine düşen kıdemli oyuncu kadrosuyla ısınan, tempoda bazı düşüşler yaşayan ama son derece sevimli bir Netflix serisi.",
    rating: "3.5/5",
    image: boroughAsset.url,
    body: `Netflix'in *The Boroughs*'u, çoğu dizinin sadece hayalini kurabileceği türde bir topluluk oyuncu kadrosuyla geliyor ve bu süreçte tür TV'sindeki yaşçılığa oldukça açık bir eleştiri de yazıyor. Alfred Molina ve Geena Davis gibi sevilen karakter oyuncularını yardımcı rollere sıkıştırmaya alışkınız; onları kahraman başrol olarak görmek nadir bir keyif. *The Boroughs* bu eğilimi bozup emeklilik köyündeki ölümcül bir komployu çözmeye çalışan bir grup yaşlı vatandaşı Spielbergvari bir maceranın merkezine yerleştiriyor.

Ruh hastanelerinin korku sinemasının vazgeçilmezi olmasının sebebi neyse, bu emeklilik topluluğunun da gizemli bir kurguya bu kadar yakışmasının sebebi aynı: otorite figürlerine güvenilemez. New Mexico çölünün tenha bir köşesindeki Boroughs, konutlardan spor salonlarına ve yerel polis gücüne kadar her şeyi tek bir şirketin sahiplendiği bir "kasaba". Her ev, aynı zamanda gözetim aracı olarak iş gören taklit bir Siri cihazıyla donatılmış. Yaşlı bir sakin şüpheli koşullarda ölürse — diyelim ince uzuvlu, kaynağı belirsiz bir yaratık tarafından saldırıya uğradıktan sonra — bunu halının altına süpürmek gayet kolay. Ne de olsa yaşlılar hep ölür ve unutkanlıkları herhangi bir görgü tanıklığını "kafa karışıklığı"na indirgemek için hazır bir gerekçe.

Kahramanımız, yeni dul kalmış emekli mühendis Sam Cooper (Molina), kafası karışan bir tipoloji değil. Boroughs'a taşınmak eşinin fikriydi, o beklenmedik ölüm sonrası kızı Claire (Jena Malone) burada yeni bir hayat kurmasını umuyor. Ama Sam ne komşularının Stepford kadınlarını andıran neşesine ne de flörtöz parti aslanı Jack'in (Bill Pullman) golf, dedikodu ve tıbbi esrar programına pek uyum sağlamıyor. Geena Davis'in karizmatik resim öğretmeni, Alfre Woodard'ın ciddi eski gazeteci karakteri, Clarke Peters'ın New Age tavırlı yavuklusu ve *American Horror Story* mezunu Denis O'Hare'in terminal kanser hastası emekli doktoru — ekibin her bir üyesi ekrandaki her saniyeyi hak ediyor.

Yaratıcılar Jeffrey Addiss ve Will Matthews (*The Lord of the Rings: The War of the Rohirrim*), yaratık filmi gibi başlayan araştırmayı yavaş yavaş kurumsal iktidarın rahatsız edici bir portresine çeviriyor. Ana karakterler, güya iyiliklerini düşünen insanlar tarafından gaslighting'e uğruyor. Renee'nin (Davis) suçu bildirmek için gittiği özel güvenlik firmasının pasaklı görevlisi endişelerini bir alayla savuştururken, Sam ve komşuları bunama teşhisiyle enterne edilme tehdidini de üzerlerinde hissediyor. Bu düşünce biraz daha ileri gidebilirdi; çünkü dizi konu ciddileştikçe geri çekilip gizli tünel sistemleri ve morg soygunları gibi daha oyuncaklı malzemelere sığınıyor.

Sonuç olarak *The Boroughs*, ana kötü karakterin kimliğini neredeyse ilk bölümden tahmin edebileceğiniz, ikinci yarıda temposu düşen ama oyuncu kadrosu sayesinde sonuna kadar keyifle izlenen bir *X-Files* / *Twilight Zone* melezi. Molina'nın kariyerinin geç döneminde nihayet gerçek bir başrol taşıması bile başlı başına bir izleme sebebi.`,
  },
  {
    slug: "star-city",
    origTitle: "Star City",
    title: "\"Star City\" — For All Mankind'ın Sarsıcı Yan Ürünü, Soğuk Savaş Paranoyasını Bilimkurguyla Örüyor",
    excerpt: "Rhys Ifans ve Anna Maxwell Martin'in başrolde olduğu bu For All Mankind spin-off'u, Sovyet uzay programını KGB gölgesinde işleyerek daha kasvetli, daha psikolojik bir bilimkurguya kapı açıyor.",
    rating: "4.5/5",
    image: starCityAsset.url,
    body: `*For All Mankind*'ın alternatif tarih fikri her zaman inandırıcı bir dünya kurmaktan çok bir dilek listesine yakındı. Apple TV dizisinin evreninde SSCB, ABD'yi Ay'a inişte geçmiş ve bu şok, NASA'ya kadınlardan oluşan bir astronot kadrosu kurmasına kadar giden bir domino etkisi yaratmıştı. On yıllar içinde ırk ve cinsiyet eşitliği bizim evrenimizden çok daha hızlı ilerlemiş; 1990'lara gelindiğinde insanlık Ay ve Mars'a yerleşmiş, ABD'nin ise lezbiyen bir başkanı olmuştu. Dizinin resmi olmayan amacı, *Star Trek*'in ütopik geleceğine giden gerçekçi bir yol çizmekti — bazen olmayan bir Amerika için propaganda gibi hissettiriyordu.

Yeni yan ürün *Star City*, saati geri sarıp bu zaman çizelgesinin ilk yıllarını Soğuk Savaş'ın öteki tarafından anlatıyor. 1969'daki Sovyet Ay inişiyle açılan dizi, bizi *For All Mankind*'ın parlak, iyimser atmosferinden çok farklı bir dünyaya sokuyor: kozmonotların kahramanlıkları kadar KGB paranoyası da anlatının merkezinde. Aynı çekirdek ekip — Ronald D. Moore, Ben Nedivi ve Matt Wolpert — bu kez soap opera unsurlarını kesip yerine sıkı, psikolojik bir dram koymuş. Bilimkurgu yetkinlik pornosu hâlâ orada, ama daha bastırıcı bir hava altında.

Kadronun başında Rhys Ifans, uzay programının parlak ama hakkı yenmiş Baş Tasarımcısı olarak Gary Oldman ayarında hüzünlü bir performans sergiliyor. KGB'nin ve hükümetin sürekli müdahalelerine karşı direniyor. Onun karşısında, İngiliz TV izleyicisinin *Line of Duty*'den tanıdığı Anna Maxwell Martin, Lyudmilla Raskova olarak ürpertici derecede acımasız bir KGB subayı. Star City'nin bodrumundaki havasız gözetim ofisini yönetiyor — genç kadınların insanların evlerine yerleştirilmiş dinleme cihazlarından gelen kayıtları saatlerce daktilo ile deşifre ettiği bir yer. Hırslı Irina Morozova (Agnes O'Casey), Raskova'nın gözüne girmek için kozmonot Valya Mironov (Adam Nagaitis) ve karısı Tanya'nın (Ruby Ashbourne Serkis) özel hayatlarını raporlamak zorunda kalıyor.

*For All Mankind*'la kaçınılmaz karşılaştırmayı yaparsak, iki dizinin feminist bilimkurgu olarak nasıl hizalandığını görmek çok ilginç. Öncekinde kadınlar bir sistemin önyargılarını yıkıp dünyayı değiştiriyordu; *Star City*'nin başlangıç noktası farklı. 1970'lerin başında SSCB'nin uzay merkezi hâlâ erkek egemen; ama KGB ofisleri ve kadın kozmonot programı — özellikle Alice Englert'in canlandırdığı çekingen Anastasia Belikova üzerinden — kadınların ABD'li muadillerinden bazen daha fazla, bazen aynı derecede engelle karşılaştığı nüanslı bir tablo çiziyor. Valya karısı Tanya'nın araştırma üssüne hapsolmuş yaşamındaki mutsuzluğunu göremiyor; Anastasia ise devlete sadakati için değil, sadakati sayesinde yükseltilerek bambaşka bir kafeste sıkışıyor.

*Star City*, ideal bir yan ürün olarak kendini hızlıca kanıtlıyor: selefinin güçlü yönlerini kopyalarken bağımsız bir dram olarak da ayakta kalıyor. Uzay yarışının onlarca yıllık genel kronolojisini zaten bildiğimiz için dizi, Sovyet programının dışarıdan görülemeyen kısmına odaklanmak zorunda — bu da senaristleri birinci sezonun omurgası olan nefes kesici bir gizli programı icat etmeye götürüyor. Sahte Rus aksanları gibi bariz tuzaklardan kaçınıp Sovyet sisteminin kusurlarıyla o sistem içindeki sıradan insanlar arasına bir çizgi çeken bu yapım, Apple TV'nin son yıllardaki en iyi bilimkurgu işlerinden biri olmaya aday.`,
  },
];

export const getReview = (slug: string) => REVIEWS.find(r => r.slug === slug);
