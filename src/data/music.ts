// Auto-curated music news content. Sources: Rolling Stone music news.
import davidByrneAsset from "@/assets/david-byrne.jpg.asset.json";
import img_ariana from "@/assets/news-rs-music-ariana-grande.jpg";
import img_jayz from "@/assets/news-rs-music-jay-z-444.jpg";
import img_michael from "@/assets/news-rs-music-michael-biopic.jpg";
import img_gabriel from "@/assets/news-rs-music-peter-gabriel.jpg";
import img_rush from "@/assets/news-rs-music-rush-geddy-lee.jpg";
import img_yungblud from "@/assets/news-rs-music-yungblud.jpg";
import img_ramones from "@/assets/news-rs-music-ramones.jpg";
import img_u2 from "@/assets/news-rs-music-u2-list.jpg";
import img_rosalia from "@/assets/news-rs-music-rosalia.jpg";
import img_bennett from "@/assets/news-rs-music-lauren-bennett.jpg";


export type MusicItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  source: string;
};

export const MUSIC: MusicItem[] = [
  {
    slug: "david-byrne-guardian-reader-interview",
    title: "David Byrne'den \"Reader Interview\": Ramones'un Deri Ceketi, Lou Reed'in Dondurma Kaşığı ve Talking Heads Günleri",
    excerpt: "David Byrne, American Utopia turne filminin gösterime girmesi vesilesiyle Guardian okurlarının sorularını yanıtladı: Ramones ile 1977 UK turnesinden Brian Eno ile stüdyoda çalışma biçimine, Lou Reed'in şaşırtan tavsiyelerinden İskoç mizahının kendisine kattıklarına.",
    body: "David Byrne, American Utopia turne filminin sinemalara gelmesi vesilesiyle Guardian okurlarının sorularını yanıtladı ve kariyerinin en unutulmaz virajlarına dair sıra dışı bir hatıra defteri açtı. Byrne, Mayıs 1977'de Ramones ile birlikte Liverpool'daki Eric's Club'tan başlayan İngiltere turnesini punk patlamasının tam ortasında yaşadıklarını anlattı: \"O turnenin çok güzel bir yanı vardı çünkü birkaç single dışında seyirci bizi hiç görmemişti; hem bize hem Ramones'a büyük bir merak ve açıklık vardı. Roundhouse'daki bir konserde biri gruplara tükürüyordu; Ramones bunu 'saygının' bir işareti olarak görmüyordu haklı olarak. Onlar bizden daha çok tükürük yedi, ama en azından deri ceketleri vardı. Bizim yoktu.\"\n\nStop Making Sense turnesinden bu yana canlı gösterilerini rock konserinin fiziksel kısıtlamalarından kurtarma arayışına giren Byrne, bu yaklaşımın nereden geldiğini de ayrıntılandırdı. Gitarının kablosuz olabileceğini fark ettiğinde St. Vincent ile çıktığı turneden ilhamlanmış, oradaki nefesli sazlar Rio samba okulları ve Amerikan futbolu 'drumline' geleneğini akla getirmişti. Perkusyoncusu Mauro Refosco'ya bir davul setini bileşenlerine ayırmak için kaç kişiye ihtiyaçları olduğunu sormuş, altı kişilik cevabı aldığında \"Sanırım bunu karşılayabiliriz\" demişti. Ardından Macar bir şirketin geliştirdiği kendinden güç kaynaklı MIDI klavyeyi keşfetmesiyle grup tamamen özgürleşti: \"Artık her şeyi kablolara bağlı hâlde geri döndüremem.\"\n\nJohn Cameron Mitchell'den aktardığı \"Aşk ve nezaket şu an yapabileceğin en punk şey\" alıntısını konserlerinde tekrarlayan Byrne, kendisini mutlu edenin de bu tavır olduğunu söyledi. True Stories'ten sonra neden yeni bir sinema filmi çekmediği sorusuna ise kendine dönük bir dürüstlükle yanıt verdi: senaryoyu ve araştırmayı kendi cebinden karşılamıştı ama bir sonraki filmde parayı koyan kişi söz de istiyordu. \"Bu bazen faydalı olabiliyor, bazen yolunu şaşırıyorsun. Sonunda 'Bir plak yapıp bir gösteri çıkarabilirim' dedim ve müziğe döndüm. Yine de umuyorum ki bir gün dijital kameralarla ve bilgisayarda kurgu yaparak yeni bir film çekerim.\"\n\nİskoçya'da doğmuş ve İskoç ebeveynlerin çocuğu olarak önce Kanada'ya sonra ABD'ye taşınmış olmasının, ona Amerikan kültürünü dışarıdan izleme yeteneği kazandırdığını söyleyen Byrne, İskoç mizahının çok karanlık ve çok özgün olduğunu vurguladı. Brian Eno ile çalışmayı ise sıcak bir dostluk olarak tarif etti: \"Bir yapımcı olarak çenesini kaşıyıp 'Emin değilim' demek yerine 'Bu inanılmaz bir şeyin başlangıcı olabilir, bu yönde ilerleyelim' diyen bir amigo gibiydi.\" Fun Boy Three'nin Waiting albümünü ve Our Lips Are Sealed işbirliğini de bu 'amigolu' rolle üstlendiğini itiraf etti. Röportajın belki en enfes anısı ise CBGB günlerinden geliyor: Lou Reed onları kendi evine davet edip iki kart dondurmayı gözlerinin önünde silip süpürmüş, ardından Tentative Decisions şarkısını gitarla çalıp Velvet Underground temposuna indirilmesini önermişti. Byrne o zamanki koyu kollu görünümünü de hatırlıyor: \"Kollarım simsiyah, maymun gibi kıllıydı. Lou 'Sahnede asla kısa kollu gömlek giyme' dedi.\"",
    image: davidByrneAsset.url,
    source: "The Guardian",
  },
  {
    slug: "ariana-grande-eternal-sunshine-tour",
    title: "Ariana Grande 'Eternal Sunshine' Turnesinden Üç Tarihi Erteledi: \"Önce Güvenlik\"",
    excerpt: "Ariana Grande, üretim kaynaklı sorunlar nedeniyle 'Eternal Sunshine' turnesinden üç durağın tarihini değiştirdiğini duyurdu. Sanatçı ertelemenin \"en güvenli seçenek\" olduğunu vurguladı.",
    body: "Ariana Grande, uzun süredir beklenen 'Eternal Sunshine' turnesindeki üç konserin ertelendiği haberini pazartesi günü Instagram Stories üzerinden hayranlarına duyurdu. Sanatçı, ertelemenin sebebini üretim tarafında ortaya çıkan aksaklıklara bağladı.\n\n\"Bu talihsiz takvim değişiklikleri için çok üzgünüz\" diyen Grande, \"Üretimde karşımıza çıkan bu zorluklar göz önüne alındığında bu bizim en iyi ve en güvenli seçeneğimizdi\" ifadelerini kullandı. Brooklyn Barclays Center'da 12 Temmuz'da yapılması planlanan konser 14 Temmuz'a, Boston TD Garden'daki 22 ve 24 Temmuz konserleri ise sırasıyla 23 ve 26 Temmuz tarihlerine alındı.\n\nAçıklamada tüm biletlerin yeni tarihler için geçerli olacağı, bilet sahiplerine ek bilgilendirme yapılacağı belirtildi. Grande mesajında, \"Hepimiz için en önemli şey güvenlik ve bir de gösterinin tasarlandığı şekilde sahnelenmesi. Anlayışınız için çok teşekkür ederim, sizi görmek için sabırsızlanıyorum\" dedi.\n\n'Eternal Sunshine' turnesi bu ayın başında Oakland'da açılış yapmıştı. Aynı adlı yedinci stüdyo albümünü destekleyen turne, sanatçının 2019'dan bu yana çıktığı ilk baş sanatçı turnesi olması nedeniyle özellikle önemli. Set listesi ağırlıklı olarak son albümden şarkılara odaklanırken 'Positions'tan üç, 'Dangerous Woman', 'My Everything' ve 'thank u, next' albümlerinden ikişer şarkıya da yer veriliyor.",
    image: img_ariana,
    source: "Rolling Stone",
  },
  {
    slug: "jay-z-444-bonus-tracks",
    title: "Jay-Z'nin '4:44' Bonus Şarkıları Nihayet Tüm Dijital Platformlarda",
    excerpt: "Jay-Z'nin '4:44' albümünün Blue Ivy ve James Blake ile yaptığı işbirlikleri de dahil olmak üzere üç bonus şarkısı, dokuz yılın ardından tüm streaming servislerinde dinleyiciyle buluştu.",
    body: "Jay-Z, '4:44' albümünün üç bonus parçasını nihayet tüm streaming servislerinde erişime açtı. Roc Nation, bu geniş çaplı yayını '4:44'ün ilk çıkışının tam dokuzuncu yıldönümünde salı günü Instagram üzerinden doğruladı.\n\nDaha önce yalnızca Tidal'da bulunan üç şarkı; \"Adnis\", Jay'in kızı Blue Ivy Carter'ın da yer aldığı \"Blue's Freestyle/We Family\" ve James Blake'in katkı sunduğu \"ManyFacedGod\" artık dünyanın her yerinden dinlenebiliyor.\n\n2017'de çıkan '4:44', Jay-Z'nin hâlâ en yeni solo albümü olma özelliğini koruyor (bir yıl sonra Beyoncé ile ortak 'Everything Is Love' albümünü yayımlamıştı). Beyoncé, Frank Ocean ve Damian Marley'in de katkı verdiği albüm, özellikle Jay'in geçmiş sadakatsizlikleri için özür dilediği içe dönük ve kırılgan tavrı sayesinde büyük övgü toplamıştı.\n\nBonus şarkıların geniş yayını, süregelen \"Jay-Z30\" kutlamalarının bir parçası. Rapçi bu kapsamda Philadelphia'daki Roots Picnic'e baş sanatçı olarak çıkmış, 10 ve 11 Temmuz'da New York'ta Yankee Stadium'da iki gece üst üste sahne alacağını duyurmuştu. İlk gece 'Reasonable Doubt' albümünü baştan sona çalacak olan sanatçı, ikinci gecede 'The Blueprint'in 25. yılını kutlamak için o albümü bütünüyle icra edecek. Ayrıca Brooklyn Halk Kütüphanesi ile iş birliği yaparak 13 solo albümünü kutlayan sınırlı sayıda kütüphane kartı çıkardı; Rick Rubin'in yönettiği sekiz bölümlük belgesel de bu yıl içinde yayınlanacak.",
    image: img_jayz,
    source: "Rolling Stone",
  },
  {
    slug: "michael-highest-grossing-biopic",
    title: "'Michael' Tüm Zamanların En Çok Hasılat Yapan Biyografik Filmi Oldu",
    excerpt: "Michael Jackson'ı konu alan 'Michael', gösterime girmesinin sadece iki ay sonra 977 milyon dolarlık gişeyle 'Oppenheimer'ı geride bırakarak tarihin en çok kazanan biyografik filmi oldu.",
    body: "Michael Jackson'ın hayatını beyaz perdeye taşıyan 'Michael', vizyona girmesinin üzerinden yalnızca iki ay geçmişken tüm zamanların en çok hasılat yapan biyografik filmi ünvanını aldı. Lionsgate'in Rolling Stone'a doğruladığı üzere film, 977 milyon dolara ulaşarak üç yıl önce Christopher Nolan imzalı 'Oppenheimer'ın kırdığı 965 milyon dolarlık rekoru geçti.\n\nAntoine Fuqua'nın yönettiği ve Jaafar Jackson'ın süperstar amcasını canlandırdığı film, Nisan ayında dünya prömiyerini yaptığı ilk hafta sonunda 217 milyon dolar hasılatla küresel ölçekte rekor kırmıştı. Her gün 1 milyon doların üzerinde kazanmayı sürdüren film, 370 milyon dolara ulaşan yurtiçi hasılatıyla Lionsgate'in tüm zamanlar sıralamasında üçüncü sıraya yerleşti; 'The Hunger Games' (408 milyon) ve devam filmi 'Catching Fire' ilk iki basamağı elinde tutuyor.\n\n'Michael', pop yıldızının kardeşleriyle birlikte kurduğu The Jackson 5 dönemindeki ilk yıllarından 1988'deki 'Bad' turnesine kadar uzanıyor. Filmin, Jackson'ın karşılaştığı çocuk cinsel istismarı iddialarına değinmemesi eleştirilere yol açmış olsa da salonlarda büyük ilgi görmesine engel olmadı.\n\nBüyük bir gişe patlaması yaşayan filmin bir diğer önemli etkisi Jackson'ın müziğine olan ilgide görüldü. Sanatçının katalog stream sayıları yükselirken 'Thriller' albümü Billboard 200 listesinde yeniden 7. sıraya çıktı. Solo çalışmaları 24-30 Nisan haftasında 137,5 milyon on-demand stream sayısına ulaşarak kariyer rekoruna imza attı; bu rakam bir önceki en yüksek haftaya göre yüzde 146'lık bir artışa denk geliyor.",
    image: img_michael,
    source: "Rolling Stone",
  },
  {
    slug: "peter-gabriel-i-belong-to-the-sky",
    title: "Peter Gabriel'in Yeni Şarkısı 'I Belong to the Sky', 80'lerin Sentetik Ruhunu Çağırıyor",
    excerpt: "Peter Gabriel, yeni albümü 'o\\i'nin habercisi olarak 'I Belong to the Sky' şarkısının \"Bright-Side\" versiyonunu yayımladı. Yedi dakikayı aşan parça, sanatçının 1982 dönemine yaslanan bir atmosfer taşıyor.",
    body: "Peter Gabriel, çıkış tarihi henüz açıklanmayan yeni albümü 'o\\i'den ilk parça olarak 'I Belong to the Sky'ın \"Bright-Side Mix\" versiyonunu yayımladı. Ay takvimine göre yayın planı belirleyen sanatçı, dünyalıların çilek dolunayına şahitlik edeceği bir gecede aydınlık mikse yer verdi; \"Dark-Side Mix\" ise yeni ayla birlikte 14 Temmuz'da dinleyiciyle buluşacak.\n\nEn azından Bright-Side versiyonu yedi dakikayı aşan bir yavaş yanış olarak öne çıkıyor. Gabriel'in tümüyle dijital olan 1982 tarihli 'Peter Gabriel' albümünün derin kesitlerini hatırlatan fokurdayan synth'ler, üzerine serpiştirilmiş saksafon dumanları ve parlak arka vokallerle birleşerek nostaljik ama sisli bir doku oluşturuyor. Gabriel şarkının bir yerinde \"Rüyayı hayata geçiriyorum\" dedikten hemen sonra, ister bilinçli ister rastlantı olsun Newton'ın yerçekimi yasasını selamlar biçimde \"resim düşüyor\" diye söylüyor. Ton olarak pek de \"parlak\" olmayan parça, bir bildirimden çok bir dilek gibi duruyor.\n\nGabriel yayımladığı açıklamada şarkının uzun bir doğum sürecinin ürünü olduğunu, 2023'teki 'i/o' albümüne dâhil olmaya yaklaştığını fakat o dönemde tamamlayamadığını belirtti. Sanatçı, 'o\\i'nin adıyla ilgili de küçük bir sürprize kapı aralıyor: albüm adı okuduğunuzda 'i/o'nun tersten yazılışına dönüşüyor ve önceki albümdeki temaların ayna görüntüsü olarak yeni bir bakış açısı sunacağı sinyalini veriyor.",
    image: img_gabriel,
    source: "Rolling Stone",
  },
  {
    slug: "rush-geddy-lee-postponed-shows",
    title: "Rush, Geddy Lee'nin Larenjit Teşhisi Sonrası İki Konseri Erteledi",
    excerpt: "Rush, solist ve basçı Geddy Lee'ye larenjit ve bronşit teşhisi konulmasının ardından Fort Worth'ta yapılacak iki konseri ertelediğini duyurdu. Grup, ilerleyen tarihler için yeni bir takvim paylaşacak.",
    body: "Kanadalı rock efsanesi Rush, uzun bir aradan sonra çıktığı geri dönüş turnesinin Fort Worth ayağındaki iki konserini ertelemek zorunda kaldı. Grup, solist ve basçı Geddy Lee'ye larenjit ve bronşit teşhisi konulduğunu, ses tellerinin dinlenmeye ihtiyaç duyduğunu açıkladı.\n\nGrup, sosyal medya hesaplarından yayımladığı açıklamada, \"Geddy'nin en kısa sürede iyileşmesi ve sahneye tam gücüyle dönebilmesi için doktor tavsiyesine uyuyoruz\" ifadelerini kullandı. Erteleme kararı, turnenin en çok konuşulan duraklarından biri olan Fort Worth için hayal kırıklığı yaratsa da bilet sahiplerinin biletleri yeni tarihler için geçerli olacak. Yeni gün ve saatler önümüzdeki günlerde duyurulacak.\n\nRush için mevcut turne, davulcu Neil Peart'ın 2020'de kaybedilmesinin ardından yaşanan uzun aranın sonrasında sahneye dönüşü simgeliyor. Peart'ın yerine perküsyonist olarak Anika Nilles'ın katıldığı üçlü, hem yeni dönemine hem de yarım asrı deviren kariyerlerine bir saygı duruşu niteliğindeki set listesiyle eleştirmenlerden büyük övgü toplamıştı.\n\nGeddy Lee'nin durumu ciddi olmasa da doktorların birkaç gün tam ses istirahati önerdiği belirtiliyor. Grup, hayranlarından anlayış beklediğini vurgularken, \"Geddy iyileşir iyileşmez sahneye çıkacak ve kaçırdığımız her geceyi telafi edeceğiz\" mesajını da paylaştı. Bu gelişme, turne boyunca büyük dikkat çeken sesin fiziksel yıpranmasının ne denli ciddi bir mesele olduğunu bir kez daha gözler önüne serdi.",
    image: img_rush,
    source: "Rolling Stone",
  },
  {
    slug: "yungblud-industry-plant-destegi",
    title: "Yungblud'a \"Industry Plant\" Suçlamalarına Karşı SZA ve Anthrax'ten Destek Yağdı",
    excerpt: "Bludfest sahnesinde gözyaşlarını tutmakta zorlanan Yungblud, \"industry plant\" (endüstri kuklası) suçlamalarına yanıt verdi. SZA, Scott Ian ve Lauren Jauregui gibi isimler sanatçıya kamuoyu önünde destek verdi.",
    body: "İngiliz punk rock sanatçısı Yungblud, düzenlediği Bludfest festivalinin üçüncü yılını Çekya'da kapatırken duygusal anlar yaşadı. 20 bin kişilik kalabalığa hitap eden sanatçı, gözyaşlarını güçlükle tutarak \"her şeyden kopmuş\" hissettiğini ancak önündeki insan denizine bakınca \"dış dünyadan güvende\" olduğunu ve bir yere ait olduğunu hatırladığını söyledi.\n\nBu paylaşımın ardından sosyal medyada uzun bir yazı kaleme alarak kendisine yöneltilen \"industry plant\" — yani endüstri tarafından tepeden inme piyasaya sürülen sanatçı — suçlamalarına yanıt verdi. Yungblud, çocukluğundan bu yana verdiği emeği, küçük mekânlardan festival ana sahnesine uzanan yolculuğunu ve turnede fiziksel-ruhsal olarak ödediği bedeli anlattı.\n\nPaylaşımın hemen ardından müzik dünyasından yoğun bir destek dalgası geldi. SZA, Anthrax'in gitaristi Scott Ian, Lauren Jauregui ve oyuncu Alyssa Milano gibi isimler yorumlar ve alıntılarla sanatçının yanında olduklarını gösterdi. Sanatçının duygusal yükünü paylaşan hayranlar da bu suçlamaların haksız olduğunu vurguladı.\n\nYungblud, \"Bu sahnede olmak için yıllardır çalışıyorum. Hiçbir şey bir gecede gelmedi ve hiçbir şey kolay olmadı\" ifadelerini kullanırken, meslektaşlarından gelen destek onun yalnız olmadığını hatırlattı.",
    image: img_yungblud,
    source: "Rolling Stone",
  },
  {
    slug: "cretin-family-ramones-50-yil",
    title: "Billie Joe Armstrong, Tim Armstrong ve Travis Barker'dan Ramones İçin Süpergrup: Cretin Family",
    excerpt: "Ramones'un ilk albümünün 50. yılı için Hollywood Forever Cemetery'de düzenlenecek tribute konserinde Cretin Family adlı yeni süpergrup ilk kez sahne alacak.",
    body: "Ramones'un ilk stüdyo albümünün 50. yıl dönümü, 30 Ağustos'ta Los Angeles'taki Hollywood Forever Cemetery'de düzenlenecek resmi bir tribute gecesi ile kutlanacak. Etkinliğin en dikkat çekici sürprizi, sahne alacak isimlerin bir araya gelerek kurduğu yepyeni bir punk süpergrup olacak: Cretin Family.\n\nGrup; Green Day'den Billie Joe Armstrong, Rancid'ten Tim Armstrong, Blink-182'den Travis Barker ve Ramones'un son dönem basçısı C.J. Ramone'dan oluşuyor. Konserin geliri Dr. David Agus'un Ellison Institute Research Foundation bünyesinde yürüttüğü kanser araştırmalarına bağışlanacak.\n\nBillie Joe Armstrong yaptığı açıklamada, \"Ramones'un ruhu her arka bahçe punk konserinde, her punk kulübünde ve her festivalde yaşıyor\" dedi. \"Nesilden nesile 'cretin'ler ve tuhaflar Ramones aşığına dönüşüyor. Çocuklar Ramones'tan etkileniyor ve bunu henüz bilmiyor bile. ¡Viva Ramones!\"\n\nOrijinal kadrodaki tüm üyeleri son yirmi yılda kaybeden Ramones'un mirası, punk müziğin doğuşundan bu yana kuşaklar arasında el değiştiriyor. Cretin Family'nin ilk sahne performansı da bu mirasa saygı duruşu olarak konumlandırılıyor.",
    image: img_ramones,
    source: "Rolling Stone",
  },
  {
    slug: "u2-street-of-dreams-lider-single",
    title: "U2'nun Yeni Şarkısı \"Street of Dreams\" Grubun Lider Single Geleneğini Yeniliyor",
    excerpt: "U2, dokuz yıllık aranın ardından çıkacak yeni stüdyo albümünün ilk single'ı \"Street of Dreams\"i yayımladı. Rolling Stone bu vesileyle grubun tüm lider single'larını sıraladı.",
    body: "U2, Salı öğleden sonra bu yılın ilerleyen aylarında yayımlanması beklenen yeni stüdyo albümünün ilk single'ı \"Street of Dreams\"i dinleyiciyle buluşturdu. Hayranlar bu anı uzun süredir bekliyordu: grubun son albümü Songs of Experience, tam dokuz yıl önce yayımlanmıştı — bu, U2'nun iki stüdyo albümü arasında bugüne kadar bıraktığı en uzun ara.\n\n\"Street of Dreams\"i bütünüyle değerlendirmek için henüz erken olsa da Rolling Stone, grubun bugüne kadar yayımladığı tüm lider single'larını yeniden sıralayan bir liste yayımladı. Değerlendirmede iki ölçüt öne çıkarıldı: şarkının kendi başına kalitesi ve ait olduğu albümün sahnesini ne kadar başarılı kurduğu.\n\nListede beklendiği gibi \"Where the Streets Have No Name\" ve \"One\" gibi kariyer klasikleri üst sıralarda yer alırken, \"Get On Your Boots\" (2009) ve \"Fire\" (1981) gibi tartışmalı seçimler de tartışılıyor. \"Fire\", grubun ikinci albümü October'ın habercisi olarak yayımlandığında İngiltere'de Top 40'a giren ilk U2 single'ı olma özelliğini taşımasına rağmen bugün diskografideki en az hatırlanan çıkışlardan biri olarak kabul ediliyor.\n\nBono, The Edge, Adam Clayton ve Larry Mullen Jr. dörtlüsünün yeni albümünün sesi hakkında spekülasyonlar sürerken, \"Street of Dreams\"in özellikle 2000'lerin ortasındaki melodik rock damarına daha yakın durduğu belirtiliyor.",
    image: img_u2,
    source: "Rolling Stone",
  },
  {
    slug: "rosalia-lux-turnesi-itiraf-kabinleri",
    title: "Rosalía'nın Lux Turnesindeki İtiraf Kabinleri: Ünlü İsimler Sırlarını Döktü",
    excerpt: "Rosalía Lux dünya turnesinde her gece sahneye özel bir konuk çağırarak yeniden inşa edilen gotik itiraf kabininde günah çıkartıyor. Turnede birçok ünlü isim itirafçı olarak sahneye çıktı.",
    body: "Rosalía, pop yıldızlığında her zaman kendi çizgisini oluşturmasıyla tanınıyor; Lux dünya turnesi de bu farklılığın en somut örneklerinden biri. İspanyol sanatçı her gece göz kamaştıran görsellikler, bale figürleri ve opera vokalleriyle sahne alıyor. Bu unsurların arasına yerleştirdiği en özgün fikirlerden biri ise Lux'un dini imgelerini genişleten \"itiraf\" bölümü.\n\nKonseplerin her akşam yeniden kurulan gotik bir itiraf kabini üzerinden ilerlediği gösteride, sahneye davet edilen özel bir konuk Rosalía'ya bir itirafta bulunuyor; sanatçı hemen ardından sivri dilli \"La Perla\" şarkısına geçiyor. Bu ritüel, hem sahne şovunu kişiselleştiriyor hem de hayranların o geceyi eşsiz kılan bir sürprizle karşılaşmasını sağlıyor.\n\nTurne boyunca itiraf kabinine çok sayıda ünlü isim konuk oldu. Sanatçılar, oyuncular ve moda dünyasından figürler; ayrılıklar, kıskançlıklar, meslek hayatlarındaki pişmanlıklar ve bazen mizahi kabahatler üzerine küçük hikâyeler paylaştı. Bu itiraflar sosyal medyada da hızla viral hale gelerek Lux'u sıradan bir arena şovunun ötesine taşıdı.\n\nRosalía için Lux, hem müzikal hem tiyatral bir üretim; itiraf kabini ise sanatçının din, günah ve yıldızlık ilişkisini şovun kalbine yerleştirmesinin en cesur denemesi olarak öne çıkıyor.",
    image: img_rosalia,
    source: "Rolling Stone",
  },
  {
    slug: "lauren-bennett-hayatini-kaybetti",
    title: "\"Party Rock Anthem\"in Sesi Lauren Bennett 37 Yaşında Hayatını Kaybetti",
    excerpt: "LMFAO'nun 2011 hit şarkısı \"Party Rock Anthem\"deki vokaliyle tanınan Lauren Bennett, 37 yaşında hayatını kaybetti. Ölüm nedeni henüz açıklanmadı.",
    body: "2011 yılının fenomen hitleri arasında yer alan LMFAO şarkısı \"Party Rock Anthem\"deki vokaliyle tanınan şarkıcı Lauren Bennett, 37 yaşında hayatını kaybetti. Sanatçının G.R.L. grubundaki eski grup arkadaşları, 6 Temmuz Pazartesi günü Instagram üzerinden yaptıkları ortak açıklamayla haberi doğruladı. Ölüm nedeni paylaşılmadı.\n\nEmmalyn Estrada, Natasha Slayton ve Paula van Oppen'ın imzasını taşıyan açıklamada şu ifadeler yer aldı: \"Kalplerimiz kırık; onun bizim için ne kadar özel olduğunu anlatacak kelime bulamıyoruz. Bize armağan ettiği sevgiyi, kahkahaları ve sayısız anıyı sonsuza dek saklayacağız. Güzel ruhu pek çok hayata dokundu; derinden özlenecek ve daima sevilecek.\"\n\nBennett, İngiltere doğumluydu ve müzik kariyerinde en çok pop dünyasında iz bıraktı. \"Party Rock Anthem\" hem Billboard Hot 100 zirvesine oturmuş hem de 2010'ların en tanınmış elektronik pop şarkılarından biri olmuştu. Sanatçı ayrıca 2013'te Simon Cowell tarafından kurulan kız grubu G.R.L.'in de kurucu üyeleri arasında yer almıştı.\n\nBennett'in ani vefatı, birlikte çalıştığı isimler kadar geniş bir hayran kitlesini de derinden sarstı; sosyal medyada anma paylaşımları hızla çoğaldı. Rolling Stone, sanatçının temsilcilerinden ek açıklama beklendiğini duyurdu.",
    image: img_bennett,
    source: "Rolling Stone",
  },
];


export function getMusic(slug: string) {
  return MUSIC.find((m) => m.slug === slug);
}
