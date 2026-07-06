import glastonburyImg from "@/assets/review-glastonbury.jpg";
import strungImg from "@/assets/review-strung.jpg";
import missionImg from "@/assets/review-mission.jpg";
import littleBrotherImg from "@/assets/review-little-brother.jpg";
import jackassImg from "@/assets/review-jackass.jpg";

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
];

export const getReview = (slug: string) => REVIEWS.find(r => r.slug === slug);
