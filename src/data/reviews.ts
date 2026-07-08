import glastonburyImg from "@/assets/review-glastonbury.jpg";
import strungImg from "@/assets/review-strung.jpg";
import missionImg from "@/assets/review-mission.jpg";
import littleBrotherImg from "@/assets/review-little-brother.jpg";
import jackassImg from "@/assets/review-jackass.jpg";
import goodLuckAsset from "@/assets/good_luck.jpg.asset.json";

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
    image: "https://i.guim.co.uk/img/media/631da20497bc83156d6c7a990ea6c3b542c935bc/508_0_3750_3000/master/3750.jpg?width=1600",
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
    image: "https://www.tvguide.com/a/img/resize/f8dbe7d183cac272ba1073217f644b7a47c54b1a/hub/2026/05/19/d90e13bd-3abc-4657-b413-a9ba17da3e41/avtr-s2-unit-05752r-colored.jpg?auto=webp&width=1600",
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
    image: "https://www.tvguide.com/a/img/resize/789e3c950743f060057c024a74b677d8b2d2668c/hub/2026/05/26/740346ad-cff2-48e5-9dfe-adc4a52bafce/260526-cape-fear-1.jpg?auto=webp&width=1600",
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
    image: "https://www.tvguide.com/a/img/resize/d758a62ef93097e519e39f2b53efc7b434693bdb/hub/2026/05/20/62e34572-5460-4652-95f9-a837495311fb/260520-boroughs-2.jpg?auto=webp&width=1600",
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
    image: "https://www.tvguide.com/a/img/resize/a4fb2655a69e251eaf0c9923e57c3131522f7054/hub/2026/03/17/4bfaa030-02b6-4372-9e11-3d15ee141bc8/starc.jpg?auto=webp&width=1600",
    body: `*For All Mankind*'ın alternatif tarih fikri her zaman inandırıcı bir dünya kurmaktan çok bir dilek listesine yakındı. Apple TV dizisinin evreninde SSCB, ABD'yi Ay'a inişte geçmiş ve bu şok, NASA'ya kadınlardan oluşan bir astronot kadrosu kurmasına kadar giden bir domino etkisi yaratmıştı. On yıllar içinde ırk ve cinsiyet eşitliği bizim evrenimizden çok daha hızlı ilerlemiş; 1990'lara gelindiğinde insanlık Ay ve Mars'a yerleşmiş, ABD'nin ise lezbiyen bir başkanı olmuştu. Dizinin resmi olmayan amacı, *Star Trek*'in ütopik geleceğine giden gerçekçi bir yol çizmekti — bazen olmayan bir Amerika için propaganda gibi hissettiriyordu.

Yeni yan ürün *Star City*, saati geri sarıp bu zaman çizelgesinin ilk yıllarını Soğuk Savaş'ın öteki tarafından anlatıyor. 1969'daki Sovyet Ay inişiyle açılan dizi, bizi *For All Mankind*'ın parlak, iyimser atmosferinden çok farklı bir dünyaya sokuyor: kozmonotların kahramanlıkları kadar KGB paranoyası da anlatının merkezinde. Aynı çekirdek ekip — Ronald D. Moore, Ben Nedivi ve Matt Wolpert — bu kez soap opera unsurlarını kesip yerine sıkı, psikolojik bir dram koymuş. Bilimkurgu yetkinlik pornosu hâlâ orada, ama daha bastırıcı bir hava altında.

Kadronun başında Rhys Ifans, uzay programının parlak ama hakkı yenmiş Baş Tasarımcısı olarak Gary Oldman ayarında hüzünlü bir performans sergiliyor. KGB'nin ve hükümetin sürekli müdahalelerine karşı direniyor. Onun karşısında, İngiliz TV izleyicisinin *Line of Duty*'den tanıdığı Anna Maxwell Martin, Lyudmilla Raskova olarak ürpertici derecede acımasız bir KGB subayı. Star City'nin bodrumundaki havasız gözetim ofisini yönetiyor — genç kadınların insanların evlerine yerleştirilmiş dinleme cihazlarından gelen kayıtları saatlerce daktilo ile deşifre ettiği bir yer. Hırslı Irina Morozova (Agnes O'Casey), Raskova'nın gözüne girmek için kozmonot Valya Mironov (Adam Nagaitis) ve karısı Tanya'nın (Ruby Ashbourne Serkis) özel hayatlarını raporlamak zorunda kalıyor.

*For All Mankind*'la kaçınılmaz karşılaştırmayı yaparsak, iki dizinin feminist bilimkurgu olarak nasıl hizalandığını görmek çok ilginç. Öncekinde kadınlar bir sistemin önyargılarını yıkıp dünyayı değiştiriyordu; *Star City*'nin başlangıç noktası farklı. 1970'lerin başında SSCB'nin uzay merkezi hâlâ erkek egemen; ama KGB ofisleri ve kadın kozmonot programı — özellikle Alice Englert'in canlandırdığı çekingen Anastasia Belikova üzerinden — kadınların ABD'li muadillerinden bazen daha fazla, bazen aynı derecede engelle karşılaştığı nüanslı bir tablo çiziyor. Valya karısı Tanya'nın araştırma üssüne hapsolmuş yaşamındaki mutsuzluğunu göremiyor; Anastasia ise devlete sadakati için değil, sadakati sayesinde yükseltilerek bambaşka bir kafeste sıkışıyor.

*Star City*, ideal bir yan ürün olarak kendini hızlıca kanıtlıyor: selefinin güçlü yönlerini kopyalarken bağımsız bir dram olarak da ayakta kalıyor. Uzay yarışının onlarca yıllık genel kronolojisini zaten bildiğimiz için dizi, Sovyet programının dışarıdan görülemeyen kısmına odaklanmak zorunda — bu da senaristleri birinci sezonun omurgası olan nefes kesici bir gizli programı icat etmeye götürüyor. Sahte Rus aksanları gibi bariz tuzaklardan kaçınıp Sovyet sisteminin kusurlarıyla o sistem içindeki sıradan insanlar arasına bir çizgi çeken bu yapım, Apple TV'nin son yıllardaki en iyi bilimkurgu işlerinden biri olmaya aday.`,
  },
];

export const getReview = (slug: string) => REVIEWS.find(r => r.slug === slug);
