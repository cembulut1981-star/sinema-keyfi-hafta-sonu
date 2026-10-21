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
import bobCover from "@/assets/ew-band-of-brothers-cover.jpg";
import bobG1 from "@/assets/ew-band-of-brothers-g1.jpg";
import bobG2 from "@/assets/ew-band-of-brothers-g2.jpg";
import bobG3 from "@/assets/ew-band-of-brothers-g3.jpg";
import bobG4 from "@/assets/ew-band-of-brothers-g4.jpg";
import bobG5 from "@/assets/ew-band-of-brothers-g5.jpg";
import bobG6 from "@/assets/ew-band-of-brothers-g6.jpg";
import bobG7 from "@/assets/ew-band-of-brothers-g7.jpg";
import ridleyScottCover from "@/assets/ridley-scott-ranked.jpg.asset.json";
import ridleyGladiator from "@/assets/ridley-gladiator-2.jpg.asset.json";
import ridleyBladeRunner from "@/assets/ridley-blade-runner.jpg.asset.json";
import ridleyAlien from "@/assets/ridley-alien.jpg.asset.json";
import nhjCover from "@/assets/na-hong-jin-hope-cover.jpg.asset.json";
import nhjChaser from "@/assets/na-hong-jin-chaser.jpg.asset.json";
import nhjYellowSea from "@/assets/na-hong-jin-yellow-sea.jpg.asset.json";
import nhjWailing from "@/assets/na-hong-jin-wailing.jpg.asset.json";

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
    slug: "band-of-brothers-cast-then-and-now-25-years-later",
    title: "Band of Brothers Oyuncuları Dün ve Bugün: HBO'nun Emmy Ödüllü Mini Dizisinin Yıldızları 25 Yıl Sonra Nerede?",
    excerpt: "Easy Company'nin Normandiya'ya paraşütle inişinin üzerinden yirmi beş yıl geçti; HBO'nun 10 bölümlük destanına hayat veren oyuncular bugün prestijli dizilerde, geniş kitlelere ulaşan yapımlarda ve kamera arkasında kariyerlerini sürdürüyor. İşte geldikleri nokta.",
    countdownBadge: "25 yıl sonra",
    image: bobCover,
    source: "Entertainment Weekly",
    body: `"Band of Brothers" 2001'de HBO'de prömiyerini yaptığında, şimdiye kadar yapılmış en pahalı televizyon yapımıydı: Tom Hanks and Steven Spielberg tarafından üretilen 10 bölümlük bir destan, Easy Company'nin, 506. Parachute Infantry Regiment'nin, Camp Toccoa'deki eğitimden Normandiya'ya, Bastogne and the'nin Avrupa'daki savaşın sonuna kadar olan gerçek adamlarını konu alıyor. 20 Emmy adaylığı topladı ve Outstanding Miniseries. dahil yedi ödül kazandı

Aynı zamanda modern televizyondaki en büyük oyuncu seçimi oturumlarından biri olarak da işlev gördü - o zamanlar bilinmeyen ve yarı bilinen aktörlerden oluşan bir kadro, çoğu İngiliz, Amerikalıları canlandıran ve kendi dizilerinin manşetlerine çıkacak olan oyuncular. Yirmi beş yıl sonra topluluğun durduğu yer burası.

##  Damian Lewis

![Then and now](${bobG1})

As Major Richard " Dick " Winters , Lewis mini diziyi taşıdı: diğer tüm performansların yörüngesinde döndüğü sessiz, gösterişsiz merkez. O zamanlar Amerika'da neredeyse hiç kimse onu tanımıyordu.  In the yıllar sonra prestijli televizyonun demirbaşlarından biri haline geldi; en çok " Homeland " filmindeki Nicholas Brody rolüyle   - ona Emmy kazandıran bir rol - ve " Billions, " filmindeki hedge fonu avcısı Bobby Axelrod rolüyle ve ayrıca soğukkanlılığı bir tür zırh olan adamlara geri dönmeye devam eden sahne çalışmaları ve film rolleriyle ünlü.

##  Ron Livingston

![Then and now](${bobG2})

Livingston, Winters'nin çok içki içen, keskin gözlü istihbarat subayı ve en yakın arkadaşı olan Captain Lewis Nixon'yi canlandırdı. Zaten "Office Space" ve "Sex and the City,"den tanınabilen "Band of Brothers"ye ulaştı ve o zamandan bu yana onlarca yılını "A Million Little Things." dizisindeki Joel Graham rolü de dahil olmak üzere televizyonun en güvenilir başrol ve karakter oyuncularından biri olarak geçirdi.

##  Scott Grimes

![Then and now](${bobG3})

As Technical Sergeant Donald Malarkey, Grimes mini diziye sıcaklığının ve acısının çoğunu verdi. Çocukluğundan beri çalışan bir aktör olarak, "ER" dizisinde Dr. Archie Morris rolünde uzun süre çalıştı, "American Dad!," dizisinde Steve Smith seslendirme çalışması yaptı ve "The Orville." dizisinde Gordon Malloy rolünde başrol oynadı.

##  Donnie Wahlberg

![Then and now](${bobG4})

Wahlberg'den Carwood Lipton, Bastogne'da komedyen olmayan kişiydi ve performansı onun Block'taki New Kids'den ciddi sinema oyuncusuna geçişini tamamlamasına yardımcı oldu. O zamandan bu yana on yılı aşkın bir süredir "Blue Bloods," programında Danny Reagan olarak televizyonun sunuculuğunu üstlenirken aynı zamanda yapımcılık ve sunuculuk da yapıyor.

##  Michael Cudlitz

![Then and now](${bobG5})

As Staff Sergeant Denver " Bull " Randleman, Cudlitz mini dizinin en akılda kalıcı solo sekanslarından birini aldı. Daha sonra Abraham Ford olarak "Southland" ve "The Walking Dead" arasında tanıdık bir yüz haline geldi ve çizgi roman televizyonunda yönetmen ve yapımcı olarak giderek daha fazla kamera arkasına geçti.

##  David Schwimmer

![Then and now](${bobG6})

Schwimmer'nin Captain Herbert Sobel'si ilk bölümlerin düşmanıdır - Easy Company'nin Easy Company. He'ye dönüşmesinin nedeni Toccoa'daki zulmü olan martinet, " Friends, " sayesinde o dönemde oyuncu kadrosunun açık ara en ünlü üyesiydi ve o zamandan beri zamanını " The People v. O. J. Simpson, "   " de dahil olmak üzere American and British televizyonları arasında paylaştırdı. Feel Good " ve " Intelligence, " artı 2021'deki yeniden birleşme için Central Perk'ye dönüş.

## Easy Company'nin geri kalanı

![Then and now](${bobG7})

Part of the "Band of Brothers"yi yeniden izlemenin kalıcı zevki, daha sonra yıldız olacak yüzlerin geçit törenidir: savaş onları hikayeden çıkarmadan önce bir bölüm, bir sahne veya tek bir satır için ortaya çıkan geleceğin başrol oyuncuları ve karakter oyuncuları. Çeyrek yüzyıl sonra, mini dizi hem 506.'nın adamlarına bir anıt hem de yükselişe geçen tüm oyuncu kuşağının anlık görüntüsü olarak oynuyor.`,
  },
  {
    slug: "hayden-panettiere-kacirilmamasi-gereken-6-rolu",
    title: "Hayden Panettiere'nin Mutlaka İzlenmesi Gereken 6 Rolü",
    excerpt: "Beş yaşında başlayan bir kariyer, yaklaşık 60 yapım ve 36 yaşında ani bir veda. Remember the Titans'tan Nashville'e, Hayden Panettiere'nin ekranda bıraktığı izi anlatan altı performans.",
    countdownBadge: "6 rol seçkisi",
    body: `Beş yaşında gündüz pembe dizisi _One Life to Live_ile başlayan kariyeri, Hayden Panettiere'nin ekran için doğduğunu kanıtladı. Erken gelişmiş bir çocuk yıldızdan, hem büyük hem de küçük ekranda çekici bir oyuncuya dönüştü: Disney yapımlarından cesur genç kraliçe rollerine ve oradan dramatik performanslara. _A Bug's Life_gibi hit animasyonlarda ve _Ally McBeal_gibi sitcom devlerinde rol aldı.

Panettiere o kadar uzun süre ve o kadar çalıştı ki, Pazar günü 36 yaşında vefat ettiğinde arkasında yaklaşık 60 kredilik çarpıcı bir özgeçmiş bıraktı. İşte mutlaka görülmesi gereken altı performans.

## 'Remember the Titans'   (2000)

![Hayden Panettiere in Remember the Titans](/__l5e/assets-v1/812ce90e-278d-40c2-b832-579dd9964b2e/afb6a6af3283.webp)

Disney'nin _Remember the Titans_geleceğin yıldızlarını bir araya getirdi, aralarında Ryan Gosling and Donald Faison. Panettiere futbol takıntılı erkek fatma rolünü üstlendiğinde sadece 10 yaşındaydı Sheryl Yoast: T.C.'nin kızı.  Williams High School'nin yardımcı antrenörü Bill Yoast (Will Patton). 1971 Virginia'da ırk ayrımcılığının ortadan kaldırıldığı bir lise futbol takımının gerçek hikayesine dayanan film, Patton'u Güney'deki ırksal gerilimleri idare eden iki antrenör olarak Denzel Washington ile karşı karşıya getirdi; Sheryl, babasının rütbesi düşürülüp yerine Washington getirildiğinde babası adına kızmıştı.

Kalın Güney aksanı, dağınık sarı örgüleri ve beyzbol tişörtleriyle filmin komedi anlarının çoğu Panettiere'ye aitti. _This Is Me: A Reckoning_adlı anı kitabında, kendisini seçmelerde daha hırslı yapan "pretty JonBenét Ramsey type," olarak görülmesi nedeniyle rolü neredeyse kaçırdığını anlattı. Aynı işi hayatının "biggest role"si olarak tanımladı:   "I had never felt so happy as an actor."

## 'Ice Princess'   (2005)

![Hayden Panettiere in Ice Princess](/__l5e/assets-v1/d4827fa2-c607-4b4f-8534-ac1f6cf232ff/7737c3e672d0.webp)

2005 yılına gelindiğinde, _Remember the Titans_ve _Tiger Cruise_'den sonra dünya Panettiere'nin bir Disney sevgilisi olduğunu biliyordu.  But the buz pateni hikayesi _Buz Prensesi_, son Disney Channel filmi, genç oyuncunun daha büyük şeylere hazır olduğunu gösterdi.  In the filminde Michelle Trachtenberg'nin Casey Carlyle'sinin isteksiz rakibi Gennifer "Gen" Harwood'u canlandırıyor; tüm bunları yaparken de katı annesi ve ondan da katı antrenörü Tina (Kim Cattrall) ile mücadele ediyor.

Neredeyse hiç deneyimi olmadan girdiği For the rolünü 2024 yılında   "Bize altı haftalık eğitim verdiklerinde ilk gün buzun üzerindeki Bambi gibiydim."   "By the sonunda, gerçekten iyiydim."

## 'Bring It On: All or Nothing'   (2006)

![Hayden Panettiere in Bring It On: All or Nothing](/__l5e/assets-v1/44cce2c2-c08f-4fe1-a147-c6e617796e50/b989506c92f5.webp)

Her gençlik komedisinin devamı _American Pie 2_olamaz. _Bring It On: Hepsi ya da Hiçbir Şey_, doğrudan DVD'ye prodüksiyonun tüm özelliklerini taşırken, orijinalin gerçek bir devamı olarak kabul edilen tek _Bring It On_yan ürünüdür.  Panettiere, Crenshaw Heights.'nin daha fakir tarafına geçmek için zengin arkadaşlarını ve mahallesini terk etmek zorunda kalan bir Pacific Vista amigo kızı olan Britney Allen kadar akıllı ve heyecan verici.

İlk filmde olduğu gibi burada da gerilim kibirli zengin çocuklarla akrobatik, cesur mazlumlar arasında.  But Panettiere, "Hip-Hop Barbie" karakterini özgüven ve duygusal kırılganlığın özüne dönüştürüyor; Solange and Rihanna.'nin de yer aldığı bir filmde gösteriyi çalmak

## 'Heroes'   (2006-2010)

![Hayden Panettiere as Claire Bennet in Heroes](/__l5e/assets-v1/d7caf0a8-5601-44f8-a643-8bd599ed03ab/153901eaf9e2.webp)

_Heroes_'nin ilk 15 dakikası izleyiciye neyin peşinde olduklarını anlatıyor: bir binadan atlamak üzere olan bir adam, babasının gizemli araştırmasını takip eden bir profesör, oğluyla birlikte mafyadan kaçan bir kameraman kız ve zamanı geri çevirebileceğine inanan kaiju'ya takıntılı bir ofis çalışanı. Ama Panettiere'nin Claire Bennet'nin bir yabancıyı kurtarmak için alevlerden oluşan bir duvara dalmasını kim unutabilir ki?

As the NBC serisi dünyanın dört bir yanındaki yabancıların güçleriyle yüzleşmesini izledi; Panettiere hikayenin merkezinde kaldı; ölçülü ve kararlı performansı, izleyiciyi büyülü güçler ve kötü niyetli devlet kurumlarıyla dolu bu kafa karıştırıcı dünyaya oturttu.   "Save the cheerleader, save the world" yalnızca güçlü bir slogan değil; bu bir miras.

## 'Scream 4'   (2011)

![Hayden Panettiere as Kirby Reed in Scream 4](/__l5e/assets-v1/81b80705-9957-4467-8ce6-ceecc9ab4be9/d9720ffee461.webp)

Bazen insanlar her şeyi bilenleri gerçekten severler. _Scream 4_'de, Panettiere'nin Kirby Reed'si bir trivia manyağı ve korku sinemasının alaycı bir ansiklopedisidir.  Wes Craven'nin ölümünden önceki son _Scream_filmine bin yıllık bir boya katma girişimleri bazen sinir bozucu; ancak Panettiere'nin çekiciliği, gözlerinizi Kirby'den ayırmanızı imkansız kılıyor.

Tek kullanımlık replikleri anında klasiklere dönüştürdü ve Kirby'ye öyle bir özveriyle yaklaştı ki, hayranların tekrar görmekte ısrar ettiği bir "final girl" oldu.   (2023'te _Scream VI_'deki rolünü tekrarladı.) Ghostface'nin onu bilgi düellosuna davet etmesinden sonra söylediği o unutulmaz söz:   " I got it right. Damn it, I was right! "

## ' Nashville '   (2012-2018)

![Hayden Panettiere as Juliette Barnes in Nashville](/__l5e/assets-v1/d418b116-f182-4a4c-a2da-0bf1da9d8c9d/005c22ecd052.webp)

The ABC dizisi _Nashville_, komedi entrikası ile yürek burkan dram arasında gidip gelme yeteneği sayesinde Hayden Panettiere. Aside olmadan var olamazdı; dizinin hikayesi doğrudan Panettiere'nin kendi hayatından ve mücadelelerinden alınmıştır. Anılarında, diziyi sürekli olarak hayat hikayesini araştıran bir " traumatic " deneyimi olarak tanımladı:   "O kadar açıktı ki... Ödevlerini yapmıyorlardı. Yeni hikayeler yaratmıyorlardı. Sadece benim hayatıma bakıyorlardı ve diyorlardı ki,   'Hadi onun şu anda neler yaşadığını alalım ve ona kendi yorumumuzu koyalım.'"

Yine de Panettiere malzemeyi yükseltti. Country yıldızı Juliette Barnes olarak, tipik bir pembe dizi rolünü dramatik oyunculukta bir ustalık sınıfına dönüştürdü; Juliette'nin gözlerinin arkasında kaynayan acıyı gösteriyor. Zarif bir şekilde yapıldı ve dürüst olalım: gösterinin yıldızından hak ettiğinden daha fazlasıydı.`,
    image: "/__l5e/assets-v1/c17433ad-8d07-4bd0-b8b1-f1d0c5191a13/5642bf3b0576.webp",
    source: "Rolling Stone",
  },
  {
    slug: "orijinalinden-iyi-12-spin-off-dizi",
    title: "Orijinalini Geride Bırakan 12 Yan Dizi",
    excerpt: "Frasier'dan Star Trek: The Next Generation'a, doğdukları dizileri gölgede bırakan 12 yan dizi. SlashFilm'in listesi, kalitesi veya popülerliğiyle asıl yapımı aşan dizileri bir araya getiriyor.",
    countdownBadge: "12 series selection",
    body: `Televizyonda bir spin-off yapmak hassas bir sanattır. İster planlı ister tesadüfi olsun, yazarların izleyicinin kalbini fetheden bir karakter yaratması gerekir ve oyuncunun da bu rolü taşıyacak karizmayı bulması gerekir. Yayınlandıktan sonra gerçek test başlıyor: Dizinin en azından çıktığı prodüksiyon kadar iyi olması. Çoğu yan ürün tam burada tökezliyor. Ancak bir avuç gösteri sadece ana prodüksiyon seviyesine ulaşmakla kalmadı, bir adım daha ileri gitti.

Bu liste, " at least as good as their predecessor " olarak değerlendirilebilecek " Better Call Saul, "   " Batman Beyond, " veya " House of the Dragon, " gibi şovları içermez; burada gerçekten seleflerini geride bırakanlar var.

##  Frasier

![Frasier](/__l5e/assets-v1/2691e87a-8668-4388-a7b0-154b2a8a1ff0/48d0ef13d165.jpg)

One of the tüm zamanların en başarılı yan ürünleri:   "Frasier" ana dizisi "Cheers."nin kalitesini aştı. Frasier and'nin kardeşi Niles'nin psikiyatrist kimlikleri sayesinde yazarlar entelektüel mizahla oynayabiliyordu; diğer karakterler bu ince zekaya komik bir tezat oluşturuyordu.

##  Happy Days

![Happy Days](/__l5e/assets-v1/14726fa7-5b9c-466e-b9f8-8cbdc355319f/8f85a586c907.jpg)

Günümüz standartlarına göre sıra dışı bir yan ürün: dizi, ABC'nin "Love, American Style" antolojisinde satılmamış bir pilot bölüm olarak başladı.  George Lucas pilotta Ron Howard'yi beğendi ve onu "American Graffiti" dizisinde rol aldı; Filmin başarısı pilota olan ilgiyi yeniden alevlendirdi. Zamanla Fonzie dizinin imza karakteri haline geldi.   "Happy Days" aynı zamanda "jumping the shark" ifadesini de icat etti ve "Laverne & Shirley" ve "Mork & Mindy." gibi kendi yan ürünlerini ortaya çıkardı.

##  Xena: Warrior Princess

![Xena: Warrior Princess](/__l5e/assets-v1/ac71609c-0a5c-4103-bb7f-ccd6d43cfc9f/44e9ba58ec9b.jpg)

"Hercules: The Legendary Journeys," dizisinde üç bölümlük bir yayında yer alan Xena izleyiciler üzerinde öyle bir izlenim bıraktı ki kendi dizisini kazandı. Aksiyonu, duygusu ve karmaşık ilişkileriyle hem erkek hem de kadın izleyiciyi bir araya getiren dizi, Xena and Gabrielle arasındaki bağ sayesinde queer izleyicilerin de kült favorisi haline geldi;  Lucy Lawless bu yorumu yıllar boyunca açıkça benimsedi.

##  A Different World

![A Different World](/__l5e/assets-v1/8b766f77-37c1-40c4-bb13-cf49294450ed/842f882aacc6.jpg)

Denise Huxtable'yi "The Cosby Show"den üniversiteye taşımak için oluşturulan dizi, Lisa Bonet'nin ayrılışından sonra kimliğini Debbie Allen'nin yönlendirmesinde buldu. Cinsiyet rollerinden ırkçılığa, sınıf sorunlarından Black kimliğine kadar uzanan tartışmalarla üniversite komedilerinin şablonunu oluşturdu ve içerik derinliği açısından ana dizisini geride bıraktı.

##  Family Matters

![Family Matters](/__l5e/assets-v1/c46919b2-029a-4c3d-8666-d1a8295b7bb5/f6a7dc81c954.jpg)

Harriette Winslow başlangıçta " Perfect Strangers " de bir asansör operatörüydü; kocası Carl'la olan komedi kimyası onlara kendi şovlarını kazandırdı.  Spanning the 90'ların tamamı boyunca, seri neredeyse tek başına Steve Urkel'nin "Did I do that?" sloganıyla "nerd" konseptini tanımladı ve yıllarca ekranda Black orta sınıf bir ailenin olumlu bir tasvirini sürdürdü.

##  Law & Order: SVU

![Law & Order: SVU](/__l5e/assets-v1/9f988baf-a7aa-43b5-b00b-2c329afe542e/8ecb10e0ea08.jpg)

"Law & Order" evrenindeki en güçlü halka. 1999 yılında başlayan dizi çeyrek asır boyunca hemen hemen her Hollywood oyuncusuna okul olarak hizmet vermiştir. Suç prosedürünü mükemmelleştirmenin yanı sıra, Mariska Hargitay'nin hem sertliği hem de şefkati bünyesinde barındıran Olivia Benson'si, diziyi çözülmemiş bir vaka anlatımı olmaktan kurtarıyor.

##  NCIS

![NCIS](/__l5e/assets-v1/37534866-8183-4254-a2ef-d4ce7484df09/c907436940f8.jpg)

Leroy Gibbs and Artık unutulmaya yüz tutmuş CBS dizisi "JAG,"nin sekizinci sezonunda yer alan ekibi, iki bölümlük bir yay ile "NCIS"nin pilot bölümünü oluşturdu. Askeri temaları birleştiren suç usulü 20 yılı aşkın süredir uygulanıyor; Mark Harmon amiral gemisi serisinden emekli olsa da "NCIS: Origins."nin anlatıcısı olarak evrenin bir parçası olmaya devam ediyor

##  Good Times

![Good Times](/__l5e/assets-v1/f5efc164-7797-4843-9a6a-02cfdbb73197/c0e4cd144741.jpg)

Florida Evans ilk olarak Norman Lear'nin "Maude" adlı filminde göründü; " Good Times, " için karakterin geçmişi yeniden yazıldı ve aile Chicago'daki toplu konutlara taşındı. Çete şiddeti, hırsızlık, çocuk istismarı ve tahliye gibi konuları ele alan dizi, aynı zamanda evde bulunan ilk Black babayı beyaz perdede sunarak da tarih yazdı.

##  The Flash

![The Flash](/__l5e/assets-v1/2d0f4cb2-5a8c-4985-ae60-4ea7426df62e/8cbf4efa0a08.jpg)

During The CW'nin altın çağı, Arrowverse'in baş mücevheri haline geldi, hatta evrene adını veren "Arrow,"yi bile gölgede bıraktı. Ciddiyeti hafiflikle dengeleyen tonu, oyuncu kadrosunun sıcaklığı ve Grant Gustin and Candice Patton arasındaki kimya, seriyi süper kahraman aksiyonunun ötesine taşıdı.

##  The Jeffersons

![The Jeffersons](/__l5e/assets-v1/22519ce9-15eb-48b7-bf9d-4c6376ef9ec9/79b46e85c251.jpg)

Another Norman Lear üretimi. "All in the Family"den muhtemelen hatırlayacağınız tek karakter Archie Bunker'dir; "The Jeffersons,"de George and Weezie and Florence'nin keskin dilinin komedi kimyası aklınıza kazınıyor. Irkçılık, silahlı şiddet ve madde bağımlılığı gibi konuları aynı cesaretle ancak daha güçlü bir kadroyla ele aldı.

##  Daria

![Daria](/__l5e/assets-v1/21062e1d-e648-4024-8356-c107b4db3bc8/791cc2580aeb.jpg)

"Beavis and Butt-Head," dizisinin bir yan karakteri olan Daria Morgendorffer, kendi serisinde MTV animasyonunun en akıllı sosyal yorumuna dönüştü. Ergenlik, sınıf ve popülerlik hakkında söyledikleri onlarca yıl sonra bile hâlâ geçerliliğini koruyor; Dizinin gücü "stupid" karakterlerine bile katmanlı bir geçmiş vermesinde yatıyor.

##  Star Trek: The Next Generation

![Star Trek: The Next Generation](/__l5e/assets-v1/11ce8507-8c98-4d36-b82a-5a1b2d3dc81d/b48daf2fae24.jpg)

Bu sadece 90'ların en iyi dizilerinden biri değil, aynı zamanda tüm zamanların en iyi spin-off'larından biri olarak kabul ediliyor. Hikâyeleri daha karmaşık, oyunculukları daha az teatral; bugün izlendiğinde orijinal diziye göre daha sindirilebilir.  Picard and ekibi bilim kurguyu popüler kültürde saygın bir yere yükseltti ve " Deep Space Nine. " gibi sonraki diziler için sağlam bir temel attı

Kısacası: Bir yan ürün her zaman soluk bir kopya olmak zorunda değildir. Hatta bazen orijinal diziyi hatırlamamızın tek nedeni bile olabiliyor.`,
    image: "/__l5e/assets-v1/8f5bc766-009c-4ed5-8933-dc72fb71b77a/a644ab98d1d9.jpg",
    source: "SlashFilm",
  },

  {
    slug: "christopher-nolan-en-iyi-oyunculuk-performanslari",
    title: "Christopher Nolan Filmlerindeki En İyi 13 Oyunculuk Performansı: Matt Damon'dan Heath Ledger'a",
    excerpt: "Variety'nin ödül editörü Clayton Davis, Nolan'ın kariyerindeki en unutulmaz 13 oyunculuk performansını sıraladı: Heath Ledger'ın Joker'inden Matt Damon'ın Odysseus'una uzanan bir seçki.",
    body: "Zaman, Christopher Nolan'a iyi davrandı. Yönetmenin filmografisi; yalnızca görsel tasarımı ve zamansal deneyleriyle değil, ortaya çıkardığı oyunculuk performanslarıyla da bir ölçüt hâline geldi. Variety'nin ödül editörü Clayton Davis, Nolan'ın kariyerindeki en iyi 13 oyunculuk performansını sıraladı.\n\n**1. Heath Ledger — Joker (The Dark Knight, 2008):** Tartışmasız listenin zirvesinde. Ledger'ın kaotik, öngörülemez Joker'i, bir süper kahraman filminin bir oyuncuya Oscar kazandırabileceğini kanıtladı.\n\n**2. Cillian Murphy — J. Robert Oppenheimer (Oppenheimer, 2023):** Nolan-Murphy iş birliğinin zirvesi; Murphy'ye ilk Oscar'ını getirdi. Tarihî bir figürü içten dışa inşa eden nadir bir performans.\n\n**3. Matt Damon — Dr. Mann / Odysseus (Interstellar, 2014 & The Odyssey, 2026):** Davis, Damon'ın iki farklı Nolan projesindeki performanslarını birlikte değerlendiriyor. 'The Odyssey'de Damon, kariyerinin en katmanlı işlerinden birine imza atıyor.\n\n**4. Marion Cotillard — Mal (Inception, 2010):** Cobb'un zihnindeki hayaletin yalnızca bir tehdit değil, bir yas figürü olduğunu hatırlatan bir performans.\n\n**5. Matthew McConaughey — Cooper (Interstellar):** 'McConaissance' döneminin en duygusal işi; kitaplık sahnesindeki gözyaşları hâlâ tartışılıyor.\n\nListe; Christian Bale (Batman üçlemesi ve The Prestige), Guy Pearce (Memento), Robert Pattinson (Tenet), Anne Hathaway (Interstellar ve The Dark Knight Rises), Tom Hardy (Dunkirk, The Dark Knight Rises), Florence Pugh (Oppenheimer), Ken Watanabe (Batman Begins, Inception) ve Michael Caine (kariyer boyu süren Nolan iş birliği) ile devam ediyor.\n\nDavis'in sonucu net: Nolan bir 'oyuncu yönetmeni' olarak tanınmasa da filmografisi, son yirmi yılın en zengin performans arşivlerinden birini oluşturuyor.",
    image: "/__l5e/assets-v1/dddaf637-3b47-4ce6-a8ce-e2993a1c4f3f/041f9cdc3736.webp",
    source: "Variety",
  },
  {
    slug: "guardian-okurlarinin-2026-favori-filmleri",
    title: "“Sinemada Yedi Kez İzledim”: Guardian Okurlarının 2026 Favorileri",
    excerpt: "Guardian editörlerinin 2026'nın en iyilerini seçmesinin ardından söz okurlara geçti. Backrooms'tan The Secret Agent'a, yılın ilk yarısına damga vuran büyülü sinema anları.",
    body: "Guardian editörleri 2026'nın ilk yarısının en iyi filmlerini seçtikten sonra, okurlardan yılın ilk altı ayındaki büyülü sinema anlarını paylaşmalarını istedi. Gelen mesajlardaki tekrar eden temalar ve şaşırtıcı seçimler, çarpıcı bir kolektif portre çiziyor.\n\n**The Secret Agent** — Kleber Mendonça Filho'nun filmi, Londra'dan yazan Liz'i daha ilk kareden, Brezilya kırsalındaki bir benzin istasyonunda geçen tuhaf açılış sahnesiyle yakaladı. Kaçak akademisyen Armando'yu köşeye sıkıştırmaya çalışan yozlaşmış şirket yöneticisi Ghirotti, izleyicinin tüylerini diken diken eden bir kötü adam.\n\n**Backrooms** — Sonsuz sarı koridorlar ve floresan aydınlatmayla çekilen bu düşük bütçeli deney, yılın ilk yarısının en çok konuşulan bağımsızlarından. Bir okurun sözleriyle, \"Sinemada yedi kez izledim\" — bir YouTube kısa filminden uzun metraja başarıyla geçen ender işlerden.\n\n**The Ballad of Wallis Island** — Küçük ölçekli, sıcak ve müzik dolu bir ada hikâyesi; pek çok okur için yılın 'küçük mucize' filmi. Bazıları sinemadan çıkınca bir yabancıya sarılmak istediklerini söyledi.\n\n**Sinners** — Ryan Coogler'ın vampir-müzik melezi filmi, IMAX salonlarında yaşayan bir deneyime dönüştü. Okurlar özellikle blues sekansını yılın en cesur set-piece'i olarak anıyor.\n\n**Bring Her Back** — Danny ve Michael Philippou kardeşlerin 'Talk to Me'den sonraki ikinci filmi, korku hayranlarının beklentilerini karşılamakla kalmayıp aştı. Manchester'dan bir okur, \"Bir sinemayı en son ne zaman bu kadar sessiz gördüğümü hatırlamıyorum\" diye yazdı.\n\nListe; 'Anora' cesaretiyle Cannes'da yankı uyandıran 'Sentimental Value', Werner Herzog'un yeni belgeseli, Payal Kapadia'nın yeni işi ve okurların sürpriz favorisi 'Friendship' gibi yapımlarla sürüyor. Sinemaya dönüş, övülen bir söylemden her yıl somut bir alışkanlığa dönüşüyor gibi görünüyor — en azından Guardian okurları için 2026'nın ilk yarısı bunun kanıtı.",
    image: "/__l5e/assets-v1/1b267def-cd4a-4daa-9213-d87b0baeb668/1f975db04bfc.avif",
    source: "The Guardian",
  },

  {
    slug: "az-bilinen-korku-filmleri",
    title: "Kimsenin Konuşmadığı 10 Harika Korku Filmi",
    excerpt: "Gişe hitlerinin ve klasiklerin gölgesinde kalan, ancak türün en cesur, en atmosferik ve en unutulmaz örnekleri arasında yer alan on korku filmi.",
    body: `Korku sineması denilince akla hep aynı isimler geliyor:  *The Exorcist*,  *Halloween*,  *Hereditary*. Ancak türün geniş arşivi gişe rekorları kıran yapımların gölgesinde kalan ama bir o kadar da cesur, sinematografik ve rahatsız edici yapımlarla dolu. Bu listede dijital platform algoritmalarının bile nadiren tavsiye ettiği ancak izledikten sonra günlerce aklınızda kalacak 10 filmi bir araya getirdik.

## 1. The Hunger (1983)

Tony Scott'nin yönetmenlik kariyerinin başlangıcına işaret eden bu vampir filmi, David Bowie and Catherine Deneuve.'nin ikonik performanslarıyla korkuyu moda çekimi estetiğine dönüştürüyor.

## 2. Session 9 ( 2001 )

Terk edilmiş bir akıl hastanesinde çekilen bu film, atmosferi ana karakteri haline getiriyor. Ses tasarımı ve mekan kullanımı "slow burn horror" türünün en güzel örnekleri arasında yer alıyor.

## 3. Afflicted (2013)

One of the Buluntu film türünün en yaratıcı örnekleri. Vampirizmi hastalık metaforu olarak ele alan bağımsız bir Kanada yapımı.

## 4. Lake Mungo (2008)

This Australian sahte belgesel, doğaüstü bir ortamda keder ve kayıp temalarını çerçeveliyor. Sonu izledikten sonra günlerce aklınızda kalıyor.

## 5. The Endless (2017)

Justin Benson and Aaron Moorhead'nin kozmik korku başyapıtı. Küçük bütçesine rağmen büyük fikirler üretmeyi başarıyor.

## 6. Kill List (2011)

Ben Wheatley imzasını taşıyan This British yapımı, bir aile draması olarak başlayıp halk-korku kabusuna dönüşüyor.

## 7. Noroi: The Curse (2005)

Japon buluntu görüntü geleneğinin zirvesi. Ayrıca karmaşık mitolojisi ve rahatsız edici temposuyla da bir kült klasik.

## 8. Pontypool (2008)

Dilin kendisinin bir virüse dönüştüğü küçük bir radyo istasyonunda geçen minimalist bir korku.

## 9. The Beyond (1981)

Lucio Fulci'nin gotik-gerçeküstü başyapıtı. Mantıktan çok ruh halinize dayanan bir kabus koleksiyonu.

## 10. Possum (2018)

Matthew Holness tarafından yönetilen bu yapım, çocukluk travmalarını korkunç bir kukla aracılığıyla anlatıyor. Hem sanat filmi, hem korku.`,
    image: img1,
    source: "WhatCulture",
  },
  {
    slug: "degeri-bilinmemis-korku-filmleri",
    title: "Tüm Zamanların En Az Takdir Edilen 10 Korku Filmi",
    excerpt: "Gösterime girdiklerinde hak ettikleri ilgiyi görmeyen, ancak yıllar içinde kült mertebesine yükselen ya da hâlâ yeniden keşfedilmeyi bekleyen on korku klasiği.",
    body: `Korku türü "underrated" hikayeleriyle doludur. Bazen bir film zamanının ilerisinde olur, bazen yanlış zamanda vizyona girer, bazen de pazarlama açısından büyük stüdyolar tarafından ölüme terk edilir. Aşağıdaki on yapım, eleştirmenlerden veya gişede hak ettiği değeri görememiş, ancak zaman içinde yeniden değerlendirilmesi gereken kült klasiklerdir.

## 1. The Exorcist III (1990)

William Peter Blatty tarafından bizzat yönetilen bu devam filmi, orijinali kadar teolojik derinliğe sahip. Ünlü koridor sahnesi, türün tarihindeki en iyi atlama korkusu olarak kabul edilir.

## 2. Event Horizon (1997)

" A production that tackles the theme of  "Uzayda Cehennem" en cesur şekilde. Yayınlandığında yanlış anlaşıldı, ancak DVD çağında bir kült klasik haline geldi."

## 3. In the Mouth of Madness (1994)

John Carpenter'nin Lovecraft tarzı başyapıtı. Kariyer sonu hazinelerinden biri olmasına rağmen hâlâ yeterince konuşulmuyor.

## 4. Trick 'r Treat (2007)

Halloween -temalı antoloji filmi. Stüdyo tarafından üç yıl boyunca rafa kaldırıldı ancak artık her Ekim ayında yeniden keşfediliyor.

## 5. The Descent (2005)

Neil Marshall'nin klostrofobik mağara kabusu. 2000'li yıllarda türün belirleyici yapımlarından biri olmasına rağmen ana akım tartışmalarda hâlâ hafife alınıyor.

## 6. Frailty ( 2001 )

Bill Paxton'nin yönetmenlik şaheseri. Din, aile ve seri cinayet temalarını şok edici bir dengede sunuyor.

## 7. Cure (1997)

Kiyoshi Kurosawa'nin psikolojik gerilim başyapıtı. Batılı izleyicilerden ziyade Doğu sinemasının kalbine konumlanmış bir eser.

## 8. Prince of Darkness (1987)

Carpenter'ın "Apocalypse Trilogy." kitabındaki orta halka Kuantum fiziğini ve kadim iblis mitolojisini birleştiren cesur bir metin.

## 9. The Reflecting Skin (1990)

Philip Ridley'nin gotik ve şiirsel korku deneyi. Rüya gibi görüntüleri ve rahatsız edici temasıyla benzersiz.

## 10. Angel Heart (1987)

Alan Parker'nin neo-noir ve okült korkuyu bir araya getiren yapımı. Robert De Niro and Mickey Rourke.'in unutulmaz performanslarıyla`,
    image: img2,
    source: "WhatCulture",
  },
  {
    slug: "kotu-olacagi-belli-son-donem-filmleri",
    title: "Kötü Olacağını Herkesin Bildiği 10 Yeni Film",
    excerpt: "Fragmanı yayımlandığı andan itibaren tehlike çanları çaldıran, daha vizyona girmeden sinemaseverlerin ve eleştirmenlerin sert tepkisiyle karşılaşan, son dönemin en tartışmalı yapımlarından biri.",
    body: `Bazı filmler ilk fragmanları çıktığı andan itibaren herkes tarafından "this won't work" olarak damgalanır. Ne yazık ki bazen tahminler doğru çıkıyor ve bazen stüdyolar bu erken sinyalleri görmezden geliyor. İşte 2025-2026 dönemine ait en çok tartışılan, çoğunun kaderi baştan yazılan 10 yapım.

## 1.Scream 7

Dizinin başrol oyuncularının ayrılmasının ardından çekilen film, senaryo sızıntılarıyla şimdiden hayranlarını hayal kırıklığına uğrattı.

## 2.Madame Web

Sony'nin Spider-Man evreni için bir çıkmaz sokak daha.  Even Dakota Johnson röportajlarda filmden uzaklaştı.

## 3.Argylle

Matthew Vaughn'nin "big twist" vaadi boş dumana dönüştü. Fragmanı bile kafa karışıklığı yarattı.

## 4. Borderlands

Eli Roth'nin video oyunu uyarlaması aynı anda hem oyun hayranlarını hem de sinemaseverleri sinirlendirdi.

## 5. The Marvels

MCU yorgunluğunun en somut örneği. Piyasaya sürülmeden önce bile pazarlama ekibinin sessizliği kötü bir işaretti.

## 6. Rebel Moon: Part Two

Zack Snyder'nin Netflix için bilim kurgu devamı, ilk filmden bile daha zayıf eleştiriler aldı.

## 7.Kraven the Hunter

Sony'nin kötü adam film serisi devam ediyor. R derecesi bile filmi kurtarmaya yetmedi.

## 8.Trap

M. Night Shyamalan'nin son gezisi. Konsept iddialıydı ama uygulama seyirciyi yorucu bir gecikmeye mahkum etti.

## 9.Bad Boys: Ride or Die

Dizinin nostaljik enerjisi tükenmiş gibi görünüyor. Fragmanın kötü CGI'sı bir uyarıydı.

## 10. Snow White ( Live Action )

Disney'nin klasik animasyonlarını canlı aksiyon filmleri olarak yeniden yapma çabası bu yapımla belki de dibe vurdu.`,
    image: img3,
    source: "WhatCulture",
  },
  {
    slug: "2020lerin-en-uc-korku-filmleri",
    title: "2020'lerin En Sıra Dışı 10 Korku Filmi",
    excerpt: "2020'lerin bugüne kadarki en cesur, en tartışmalı ve en sıra dışı korku yapımları. Türün sınırlarını zorlayan ve seyirciyi rahatsız etmekten çekinmeyen on film.",
    body: `2020'li yılların ilk yarısı korku sineması açısından beklenmedik bir rönesans oldu. Bağımsız yapımların Blumhouse and A24 gibi stüdyolarla popülerleşmesi, tür sinemasının "unusual."yi takip etmesine olanak tanıdı. İşte bu on yılın şu ana kadarki en ekstrem, en unutulmaz on korku yapımı.,

## 1. Titane (2021)

Julia Ducournau'nin Cannes Palme d'Or ödüllü prodüksiyonu. Vücut korkusunu, cinsiyet kimliğini ve aileyi yeniden tanımlayan şok edici bir film.

## 2. Lamb (2021)

This Icelandic halk korku filmi, yavaş yavaş ilerleyen atmosferi ve şok edici finaliyle unutulmaz.

## 3. Longlegs (2024)

Nicolas Cage'nin 90'ların polisiye estetiğini gizli korkuyla harmanlayan dehşet verici performansıyla dolu gişe sürprizi.

## 4. Terrifier 3 (2024)

Art the Clown'nin Noel temalı katliamı. Pratik efektli sinema için güçlü bir manifesto.

## 5. The Substance (2024)

Coralie Fargeat'nin vücut korku başyapıtı. Hollywood'un yaşlanma korkusunu grotesk bir alegoriye dönüştürüyor.

## 6. Skinamarink (2022)

Küçük bütçesine rağmen, çocukluk kabuslarına dair stil denemeleriyle tartışmalara yol açan minimalist bir deneyim.

## 7. Men (2022)

Alex Garland'nin feminist halk-korku yorumu. Sonu türün en çok tartışılan sekanslarından biridir.

## 8. Infinity Pool (2023)

Babasının izinden giden Brandon Cronenberg'nin saykodelik ve sınırları zorlayan tatil kabusu.

## 9. In My Mother's Skin (2023)

This Filipino yapımı peri masalı korku filmi, World War II.'nin arka planında geçen orijinal bir peri masalıdır.

## 10. Immaculate (2024)

Dini korku temasını modern bir bakış açısıyla ele alan Sydney Sweeney başrollü bir yapım.`,
    image: img4,
    source: "WhatCulture",
  },
  {
    slug: "2026-en-cok-beklenen-filmler",
    title: "2026'nın Geri Kalanında En Çok Beklenen 10 Film",
    excerpt: "Yılın ikinci yarısında sinemalara gelecek en heyecan verici yapımlar. Büyük stüdyo devam filmlerinden auteur sinemasına, 2026'nın geri kalanına damga vurmaya aday on film.",
    body: `2026 yılı sinema takvimi açısından son yılların en yoğun dönemlerinden biri olmaya hazırlanıyor. Takvim, uzun süredir ertelenen ve nihayet sinemalarda gösterime giren büyük stüdyo yapımları, büyük yönetmenlerin yeni eserleri ve festival sezonlarından sürprizlerle dolu. İşte yılın geri kalanında en çok konuşulan on film.,

## 1.Avatar: Fire and Ash

James Cameron'nin serideki üçüncü filmi. Pandora'nın "ash clan," adlı filmini tanıtacak olan yapım kesinlikle yılın gişe fenomeni.

## 2.Dune: Part Three

Denis Villeneuve, Frank Herbert'nin*Dune Messiah*'sini büyük ekrana getiriyor.  Timothée Chalamet'den Paul artık tamamen farklı bir yerde.

## 3.The Odyssey

Christopher Nolan'nin Homer uyarlaması. IMAX kamerayla çekilen ilk mitolojik destansı çekim olduğu iddia ediliyor.

## 4. Bugonia

Yorgos Lanthimos'nin Emma Stone. ile üçüncü işbirliği South Korean filmi*Save the Green Planet*'nin yeniden yorumlanması.

## 5. Zootopia 2

Disney animasyon stüdyosunun en başarılı orijinal serisinin devamı. Yıl sonu aile filmi tahtının güçlü bir yarışmacısı.

## 6. Wicked: For Good

Müzikalin ikinci kısmı.  Cynthia Erivo and Ariana Grande'nin performansları Oscar tartışmalarında yeniden gündeme gelecek.

## 7.The Bride!

Başrollerde Maggie Gyllenhaal'nin Bride of Frankenstein. Christian Bale and Jessie Buckley'yi yeniden yorumlaması.

## 8.Frankenstein

Guillermo del Toro'nun uzun zamandır beklenen tutku projesi. Netflix aracılığıyla sinemalara ve platforma geliyor.

## 9.Michael

Antoine Fuqua'nin Michael Jackson biyografisi. Yasal engeller nedeniyle ertelenen projenin nihayet vizyon tarihi belli oldu.

## 10. After the Hunt

Luca Guadagnino'nin akademik gerilim filmi Julia Roberts and Ayo Edebiri.'yi bir araya getiriyor. Oscar sezonunda Venedik'ten sonra güçlü bir rakip.`,
    image: img5,
    source: "WhatCulture",
  },
  {
    slug: "2026-nin-simdiye-kadar-en-iyi-tv-dizileri",
    title: "2026'nın Şimdiye Kadarki En İyi Dizileri",
    excerpt: "Türleri harmanlayan, kaygıları mizah ve özgün hikâyelerle ele alan, 2026'nın ilk altı ayında öne çıkan en güçlü diziler.",
    body: `Bu liste Rolling Stone'nin "The Best TV Shows of 2026 So Far" makalesinden ilham almıştır. 2026 yılının ilk yarısında öne çıkan dizi, çoğunlukla kaygı, kimlik ve iş dünyasının gerilimlerini konu alırken, aynı zamanda şaşırtıcı mizah ve özgün anlatımlar da sunuyor.

## 1.   ' A Knight of the Seven Kingdoms '   ( HBO )

*Game of Thrones*evreninde geçen bu yan ürün, Dunk and Egg. The hikayesinin destansı ihtişamına daha az ve aynı anda hem komik hem de içten maceralarına daha çok odaklanıyor, HBO'nin fantastik dünyasında, resmi destanın çevresinde özgürce dolaşan taze bir nefes gibi geliyor.

## 2.   'Bait'   (Asal)

This Riz Ahmed liderliğindeki yapım, James Bond. It rolü için yarışan bir oyuncunun kimlik, utanç ve kişisel değerlerle mücadelesini incelikli bir şekilde ele alıyor ve İngiliz sinemasına benzersiz bir kara mizah katıyor.

## 3.   ‘ Beef’ Sezon 2 ( Netflix )

İlk sezonun karanlık ve keskin mizahını koruyan bu devam filmi, beklenmedik çatışmaların ve modern öfkenin toplumdaki yankılarını daha da güçlü bir şekilde yansıtıyor. Karakterlerin iç kırılmaları izleyicilere gerilimi yüksek bir deneyim sunuyor.

## 4.   ‘Big Mistakes’   ( Netflix )

İktidar, medya ve ceza adaleti üzerinden ilerleyen bu çalışma, hataların nasıl büyük bir sarmala dönüşebileceğini anlatıyor. Ciddi tonu yanlış anlaşılmaktan uzak, dengeli bir mizah ve gerilim barındırıyor.

## 5.   ‘ The Comeback’ Sezon 3 ( HBO )

Dizi dünyasının acımasızlığına ve yeniden doğma çabasına gönderme olarak geri dönen bu sezon, karakterin kamera karşısına düşüşünü ve ardından yükselişini trajikomik bir dille sunuyor.

## 6.   'The Fall and Rise of Reggie Dinkins'   (NBC)

Kamu hizmeti, medya ve siyasi kariyer arasında kalan bir karakterin hikayesi. NBC formatına rağmen yapım cesur bir siyasi hiciv ve kimlik keşfi sunuyor.

## 7.   ‘ Hacks’ Sezon 5 (Maks.)

" Entering the komedi yazımının acımasız dünyası, bu sezon nesiller arası çatışmaları ve yaratıcılığın baskısını hicivli ama nazik bir tonla ele alıyor. Max için klasik bir hit olmaya devam ediyor."

## 8.   ‘ Industry’ Sezon 4 ( HBO )

Finans dünyasının acımasız rekabetini gözler önüne seren bu sezon, genç profesyonellerin başarı uğruna ahlaki sınırları nasıl zorladığını ve değiştiğini ortaya koyuyor.

## 9.   ' Margo’s Got Money Troubles '   ( Apple TV )

Apple TV'nin genç yetişkinlere yönelik komedisi, borcun ve yetişkinlerin kaygısının öyküsünü renkli ve akıcı bir dille anlatıyor. Margo'nun mali sorunları beklenmedik bir mizah ve samimiyetle birleşiyor.

## 10.   ' The Pitt’ Sezon 2 ( HBO Max )

Hastane dramını kurumsal çatışmalarla harmanlayan bu sezon, sağlık sektörünün kaotik ve insani hikayelerini güçlü karakterler aracılığıyla anlatıyor.

## 11.   ' Widow’s Bay '   ( Apple TV )

Kötü bir sahil kasabasına yerleşen yeni dul karakterlerin etrafında dönen bu gizemli dizi, yavaş yavaş gerilim yaratan bir atmosfere sahip ilgi çekici bir gerilim sunuyor.

## 12.   ' Wonder Man '   ( Disney +)

Süper kahraman formatına meta bakış açısı sunan bu seri, Hollywood and the üretim endüstrisindeki kimlik krizlerini akıllıca araştırıyor. Disney + için hem eğlenceli hem de düşündürücü bir seçenek.
`,
    image: "/__l5e/assets-v1/5878242b-5eba-4476-abe1-d70f79b394c9/86f0ca23976b.webp",
    source: "Rolling Stone",
  },
  {
    slug: "2026-yilinin-en-iyi-10-filmi",
    title: "2026'nın En İyi 10 Filmi (Şimdiye Kadar)",
    excerpt: "Korkudan animasyona, uzay macerasından belgesele: Entertainment Weekly'nin 2026'nın ilk yarısında öne çıkardığı on film.",
    body: `2026 yılı sinema açısından sürprizlerle dolu bir yıl oldu.  *Sinners*, Best Picture Oscar'yi kaptı,  *Obsession*düşük bütçesine rağmen fenomen oldu,  *Toy Story 5*franchise rekorları kırdı. Entertainment Weekly'nin editörlerinin yılın ilk yarısına ait on filmden oluşan seçkisini tercüme ettik.

## 1.28 Years Later: The Bone Temple

Nia DaCosta, Danny Boyle'nin vizyoner devamına kendi karanlık ve gotik estetiğiyle devam ediyor.  Ralph Fiennes ' Dr. Kelson yılın en unutulmaz karakterlerinden biri.

## 2.The Drama

Yönetmenliğini Kristoffer Borgli'nin yaptığı, Zendaya and Robert Pattinson'yi bir araya getiren bu A24 yapımı, şok edici değişimi ve düğün öncesi temposuyla unutulmaz olmaya devam ediyor.

## 3.EPiC: Elvis Presley in Concert

Baz Luhrmann, Elvis'in Vegas'taki ikametgahını daha önce hiç görülmemiş görüntüler ve ses kayıtlarıyla yeniden inşa ediyor. Kralın kendi ağzından çıkan bir belgesel.

## 4. The Invite

Başrollerini Seth Rogen, Penélope Cruz ve Edward Norton'nin paylaştığı, Olivia Wilde'nin bu oda oyunu; mahalle, evlilik ve arzu hakkında cesur bir konuşmadır.

## 5. Obsession

Curry Barker'nin YouTube kökenli yönetmenliği, düşük bütçeli korku filmlerine olan ilgiyi yeniden alevlendirdi.  Inde Navarrette'nin bakışı yılın en rahatsız edici performansı.

## 6. Omaha

Starring John Magaro, karısını ve iki çocuğunu kaybeden bir babanın yolculuk hikayesidir.*Past Lives*'den sonra Magaro, kariyerinin en yıkıcı performanslarından birini sergiliyor.

## 7.Project Hail Mary

Ryan Gosling, bu Andy Weir uyarlamasında galaksinin kaderini kurtaran bir öğretmenin yolculuğuna çıkıyor. Merak ve umutla dolu bir uzay macerası.

## 8.Send Help

One of the Yazın en ilgi çekici bağımsız korku filmleri. Türe minimalist bir tazelik getiriyor.

## 9.Sinners

Ryan Coogler'nin vampir filmi Oscar ödülünü kazandıktan sonra da hâlâ konuşulmaya devam ediyor.  Michael B. Jordan'nin ikili rolü performansların zirvesindedir.

## 10. Toy Story 5

Pixar'ın filmi franchise tarihindeki en büyük açılışı yaptı. Jessie'nin öne çıktığı bu bölüm, oyuncakların dijital çağla mücadelesinin öyküsünü anlatıyor.`,
    image: ewMovies.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "en-gerilimli-suc-thrillerlari",
    title: "Tüm Zamanların En Çok Gerilim Yaratan 30 Suç Filmi",
    excerpt: "Klasik kara filmlerden günümüzün sarsıcı yapımlarına: Hitchcock, Fincher ve Bong Joon Ho gibi ustaların imzasını taşıyan, gerilimi zirveye çıkaran otuz film.",
    body: `İyi bir polisiye gerilim filmi bizi tehlikeli, riskli bir durumun tam ortasına yerleştirir; ancak bizi yasaları çiğnemenin sonuçlarıyla yüzleşmeye zorlamaz. Karmaşık olay örgüsü, ahlaki ikilemler ve gri karakterlerle inşa edilen bu filmler, toplumun karanlık tarafına bir bakış sunuyor. İşte Entertainment Weekly tarafından derlenen ve türün zirvesine çıkan 30 filmden öne çıkan başlıklar.

## 1. Memories of Murder (2003)

Bong Joon Ho'nin This Korean klasiği, bir seri katilin gerçek hikayesini anlatıyor, yetersizliği, öfkeyi ve çaresizliği bir polisiye hikaye içinde çerçeveliyor.

## 2. Chinatown (1974)

Roman Polanski'nin neo-noir başyapıtı, Jack Nicholson'nin ikonik performansıyla, Los Angeles'nin su anlaşmalarının ardındaki yolsuzlukları açığa çıkarıyor.

## 3. Seven (1995)

David Fincher'nin yedi ölümcül günahı yılın en karanlık dedektif kabusuna dönüştüren yapımı. Morgan Freeman and Brad Pitt arasındaki kimya inkar edilemez.

## 4. Zodiac (2007)

Another Fincher başyapıt, takıntının bir gazeteciyi ve polisi nasıl tükettiğini gösteren sabırlı, titiz ve rahatsız edici bir çalışma.

## 5. Elevator to the Gallows (1958)

Louis Malle'in ilk uzun metrajlı filmi, Miles Davis'nin doğaçlama saksafonunun eşliğinde bir cinayet planının ortaya çıkmasını konu alıyor.

## 6. The Silence of the Lambs (1991)

Anthony Hopkins and Jodie Foster'nin buluşması, beş büyük Oscar'ı kazanan tek korku-gerilim karışımını yarattı.

## 7. Rear Window (1954)

Hitchcock'un, komşusunun cinayetine tanık olduğuna inanan bir fotoğrafçı hakkındaki tek mekânlı gerilime ders kitabı örneği.

## 8. No Country for Old Men (2007)

The Coen Brothers'nin Cormac McCarthy uyarlaması;  Anton Chigurh'nin varlığı türe yeni bir kötü adam arketipini getirdi.

## 9. Prisoners (2013)

Denis Villeneuve'in başrolünü Hugh Jackman and Jake Gyllenhaal. It'nin üstlendiği uzun, ıslak ve karanlık gerilim filmi, ahlaki sınırların nerede bittiğini sorgulamamıza neden oluyor.

## 10. Listenin geri kalanı

*The Departed*,  *Nightcrawler*,  *Gone Girl*,  *Mystic River*,  *L.A. Confidential*,  *Heat*,  *The French Connection*,  *Blue Ruin*,  *Drive*,  *A Simple Plan*,  *Fargo*,  *Blood Simple*,  *The Long Goodbye*,  *Klute*,  *Vertigo*,  *Strangers on a Train*,  *Insomnia*,  *The Vanishing*,  *Cure*,  *Memento*ve*The Third Man*.`,
    image: ewThrillers.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "2026-en-iyi-tv-dizileri-ew",
    title: "2026'nın En İyi 10 Dizisi (Şimdiye Kadar)",
    excerpt: "The Pitt'ten Widow's Bay'e, Hacks'ten Industry'ye: Entertainment Weekly'nin 2026'nın ilk yarısı için seçtiği en iyi on dizi.",
    body: `Küçük ekran, 2026'nın ilk yarısında hem yeni yapımlar hem de güçlü geri dönüş sezonlarıyla doluydu. Sterling K. Brown'nin*Paradise*, Jean Smart'nin*Hacks*, Myha'la'nın*Industry*ve Sam Reid'nin*Interview with the Vampire*sezonun en çok konuşulan programları arasında yer alıyor.

## 1. The Pitt (Maks.)

Bu dizi, gerçek zamanlı, tek mekânlı gerilimle hastane draması formatını yeniden keşfediyor.  Noah Wyle kariyerinin en olgun performansını sergiliyor.

## 2. Paradise (Hulu)

Bu politik gerilim filmi Starring Sterling K. Brown, ilk bölümüyle yılın en çok tartışılan pilot bölümünü gerçekleştirdi.

## 3. Hacks (Maks.)

Deborah Vance and Ava'nin ilişkisi bu sezon en karanlık noktasına ulaşıyor.  Jean Smart'nin Emmy kazanması kesin görünüyor.

## 4. Industry ( HBO )

Acımasız finans dünyası, dördüncü sezonunda yeni bir odak noktasıyla karakterlerin ahlaki çöküşünü daha da derinleştiriyor.

## 5. Interview with the Vampire (AMC)

Sam Reid'nin Lestat'ı, Anne Rice'nin çalışmalarının bugüne kadarki en iyi beyazperde uyarlaması olarak selamlanıyor.

## 6. The Studio ( Apple TV +)

Seth Rogen'nin yönettiği ve başrolünde yer aldığı bu Hollywood hicvisi, sektörün saçmalığını acımasızca kanıtlıyor.

## 7. Severance ( Apple TV +)

İkinci sezon uzun bekleyişe değdi.  Ben Stiller'nin estetiği ve Dan Erickson'nin senaryosu türü yeniden şekillendirmeye devam ediyor.

## 8. The White Lotus ( HBO )

Mike White'nin üçüncü sezonu Tayland'a taşındı. Oyuncu kadrosu ve sosyal keskinliği bir kez daha göze çarpıyor.

## 9. Widow's Bay ( Apple TV +)

Yılın en büyük sürprizi. Bir sahil kasabasında geçen bu mistik gerilim, atmosferi kadar karakterleriyle de bağlantı kuruyor.

## 10. Andor ( Disney +)

İkinci ve son sezon,*Star Wars*evreninde bugüne kadarki en yetişkinlere yönelik yapım olarak tarihe geçti.`,
    image: ewTv.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "tum-zamanlarin-en-iyi-25-rock-sarkisi",
    title: "Tüm Zamanların En İyi 25 Rock Şarkısı",
    excerpt: "Prince'ten Led Zeppelin'e, The Beatles'tan Nirvana'ya: Türün kalbini oluşturan, isyanını ve gürültüsünü hiç yitirmeyen 25 rock klasiği.",
    body: `Rock & roll, özünde statükoya karşı bir isyandır; gürültü yapmaktan ve kaos yaratmaktan korkmayan bir meydan okuma durumudur. Bu nedenle " the best rock songs of all time " listesini derlemek biraz çelişkili bir iştir.  But Entertainment Weekly bu zorluğu üstlendi ve türün tarihine damgasını vuran 25 şarkıyı seçti.

## 1.   " Let's Go Crazy "   — Prens

*Purple Rain*açıcı; funk, rock ve gospel'in mükemmel birleşimi. Prince'in dizden kayan girişi hâlâ tüylerinizi diken diken ediyor.

## 2.   " Smells Like Teen Spirit "   — Nirvana

90'larda bir kuşağın manifestosu.  Butch Vig'nin prodüksiyonu ve Kurt Cobain'nin vokal araları hala taze geliyor.

## 3.   " Stairway to Heaven "   — Led Zeppelin

Belki de rock'ın en tartışmalı şarkısı "best." Akustik bir başlangıçtan elektriksel bir zirveye sekiz dakika içinde tırmanıyor.

## 4.   " Bohemian Rhapsody "   — Kraliçe

Opera, rock ve ballad karışımı, kurallara meydan okuyan yapısı türün sınırlarını yeniden tanımladı.

## 5.   " Like a Rolling Stone "   — Bob Dylan

Folk'tan rock'a geçişini ilan ettiği şarkı.  The Newport 1965 izleyicisi bunu unutamadı.

## 6.   " Born to Run "   — Bruce Springsteen

New Jersey sokakları şiir gibi kayalarla örülmüş. "The Boss" lakabının başlangıcı.

## 7.   " London Calling "   — The Clash

Punk'ın en politik anı. Yayınlandığı 1979 yılından bu yana her kriz anında yeniden dinlendi.

## 8.   " Respect "   — Aretha Franklin

Otis Redding'nin orijinali Aretha'nın ellerinde feminist bir marşa dönüştü.

## 9.   " Hey Jude "   — The Beatles

Paul McCartney'nin Julian Lennon için şarkısı, yedi dakikalık koro finaliyle Stadium Rock formatını başlattı.

## 10.   " Purple Haze "   — Jimi Hendrix

Elektro gitarın neler yapabileceğini gösteren bir manifesto.

Listenin geri kalanı:   " Whole Lotta Love ",   " Satisfaction ",   " Sweet Child o' Mine ",   " November Rain ",   " Comfortably Numb ",   " Won't Get Fooled Again ",   " Baba O'Riley ",   " Layla ",   " Free Bird ",   " Thunderstruck ",   " Enter Sandman ",   " One ",   "Black",   "Everlong",   "Somebody to Love" ve "Immigrant Song".`,
    image: ewRock.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "genc-yasta-hayatini-kaybeden-tv-yildizlari",
    title: "Genç Yaşta Hayatını Kaybeden 8 Televizyon Yıldızı",
    excerpt: "Heather O'Rourke'tan Cameron Boyce'a, Jonathan Brandis'ten Brittany Murphy'ye: Ekranda iz bırakan ve aramızdan çok erken ayrılan sekiz oyuncu.",
    body: `Bazı yıldızlar erken parlar ve erken söner. Film ve müzik endüstrileri James Dean , Jayne Mansfield , Jimi Hendrix ve Jim Morrison. Television gibi pek çok kayıp yaşadı ve Jim Morrison. Television de benzer trajedilere tanık oldu: 12 yaşındaki Heather O'Rourke'den*Descendants*yıldızı Cameron Boyce'ye kadar, bir neslin çocukluğunun kahramanları çok erken ortadan kayboldu.

## 1. Heather O'Rourke (12)

*Poltergeist*üçlemesinin unutulmaz "Carol Anne"si, teşhis edilemeyen bağırsak hastalığı nedeniyle 1988 yılında vefat etti.

## 2. Cameron Boyce (20)

Disney Channel'nin parlayan yıldızı, 2019'da uykusunda geçirdiği epilepsi nöbeti ailesini, hayranlarını ve sektörü mahvetti.

## 3. Jonathan Brandis (27)

*SeaQuest DSV*yıldızı, kariyeri durduktan sonra 2003 yılında intihar etti. Ölümü, çocuk yıldızlara yönelik psikolojik destek konusunda tartışmalara yol açtı.

## 4. Brittany Murphy (32)

*Clueless*ve*8 Mile*ile anılan Murphy, 2009 yılında beklenmedik bir şekilde vefat etti. Ölümüne ilişkin şüpheler yıllarca devam etti.

## 5. Anton Yelchin (27)

*Star Trek*'nin yeniden başlatılmasından Chekov. 2016 yılında kendi jipinin altında kaldığı trajik kaza, otomotiv geri çağırmalarını gündeme getirmişti.

## 6. Naya Rivera (33)

*Glee*'nin Santana Lopez'si, oğlunu teknede bıraktıktan sonra 2020 yılında bir göl kazasında boğuldu.

## 7. Cory Monteith (31)

*Glee*'den Finn Hudson, bağımlılıkla mücadelesi sonunda 2013 yılında vefat etti.

## 8. Angus Cloud (25)

*Euphoria*'nin Fezco'su. Babasının ölümünden kısa bir süre sonra 2023 yılında kazara aşırı dozdan öldü.`,
    image: ewYoung.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "en-iyi-mitolojik-filmler",
    title: "Yunan Destanlarından İncil Uyarlamalarına: En İyi 20 Mitolojik Film Sıralaması",
    excerpt: "Christopher Nolan'ın The Odyssey filmi gişeye çıkmaya hazırlanırken Guardian, sinemanın en görkemli, en tuhaf ve en unutulmaz mitolojik filmlerini sıraladı.",
    body: `As Christopher Nolan, The Odyssey'yi Aralık ayında beyazperdeye taşımaya hazırlanan Guardian, mitolojik sinemanın muhteşem dosyalarını yeniden açtı.  From Greek İncil'deki gişe rekorları kıran filmlere, Kore folkloruna ve Marvel öncesi dönemin dev süper kahraman yapımlarına destansı olan bu 20 film, mitolojinin sinemaya nasıl "come home" kattığını gösteriyor.

## 20. Percy Jackson & the Olympians: The Lightning Thief (2010)

Chris Columbus'nin Rick Riordan uyarlaması, dizi hayranlarını hayal kırıklığına uğratsa da, Uma Thurman'nin Medusa and Steve Coogan'si Hades ile unutulmaz bir çocuk mitolojisi karışımıdır.

## 19. Immortals (2011)

Tarsem Singh'nin görsel bir şölen olan Theseus filmi, tarihsel doğrulukla değil, resimsel efektle ilgileniyor.  Henry Cavill'nin ilk büyük rolü.

## 18. Wonder Woman (2017)

Patty Jenkins'nin filmi, Amazon mitolojisini ustaca bir World War I melodramına yerleştiriyor.  Gal Gadot'nin Diana'sı en mitolojik süper kahraman filmlerinden biridir.

## 17. Troy (2004)

Wolfgang Petersen'nin Homerik uyarlaması tanrıları ortadan kaldırır ve onların yerine Brad Pitt'nin kasları ve insan trajedisini koyar. Peter O'Toole'un Priam'ı paramparça oluyor.

## 16. The Prince of Egypt (1998)

DreamWorks'ün animasyonlu başyapıtı. Musa'nın hikayesini Hollywood-Broadway şarkılarıyla yeniden anlatıyor.

## 15. Excalibur (1981)

John Boorman'nin gotik Arthur uyarlaması, mitolojik sinemayı sisli, çamurlu ve mistik bir çukura sürükleyerek türü yeniden tanımladı.

## 14. Noah (2014)

Darren Aronofsky'nin İncil'deki destanı, dev kaya meleklerinden dünyanın sonuna kadar uzanan sanatsal bir halüsinasyon.  Russell Crowe'nin Noah'si monolitiktir.

## 13. The Odyssey (1997)

Andrei Konchalovsky'nin Emmy ödüllü mini dizisi, Nolan'den önceki harika Odyssey uyarlaması.  Armand Assante'nin hastası Odysseus.

## 12. Jason and the Argonauts (1963)

Ray Harryhausen'nin iskelet savaşçıları ve Talos figürü, mitolojik sinemanın stop motion altın çağını temsil ediyor.

## 11. Clash of the Titans (1981)

Again Harryhausen ; Perseus'un Kraken'in Medusa and the yükselişiyle karşılaşması nesillerin hayallerine girdi.

## 10. The Passion of the Christ (2004)

Mel Gibson'nin kanlı ve kesintisiz çarmıha gerilme anlatımı, dini sinemanın en tartışmalı örneklerinden Aramaic-Latin. One of the'de filme alınmıştır.

## 9. Ben-Hur (1959)

William Wyler'nin 11- Oscar destanı. Araba yarışı hâlâ sinema tarihinin en etkileyici aksiyon sahnelerinden biri.

## 8. Black Orpheus (1959)

Marcel Camus'nin Orpheus uyarlaması Rio karnavalında geçiyor. Bossa nova müziği ve tropik renklerin hakim olduğu bir başyapıt.

## 7. Ulysses (1954)

Odysseus rolünde Kirk Douglas.  Mario Camerini'nin İtalyan yapımı, destanı 100 dakikaya sığdırma cüretkarlığıyla bugün hala şaşırtıyor.

## 6. Kagemusha (1980)

Akira Kurosawa'nin samuray filmleri, Japon feodal mitolojisinin epik sinemadaki en güçlü ifadeleridir.

## 5. The Ten Commandments (1956)

Cecil B. DeMille'nin Musa'sı.  Denizi ayıran Charlton Heston, sinema mitolojisinin de sınırlarını genişletti.

## 4. Spirited Away ( 2001 )

Hayao Miyazaki'nin Shinto and Japanese folkloruna en büyük hediyesi. Animasyonda mitolojik sinemanın zirvesi.

## 3. Medea (1969)

Pier Paolo Pasolini'nin Maria Callas'li filmi Euripides'i modern bir arkeoloji dersine dönüştürüyor.

## 2. Orphée (1950)

Jean Cocteau'nin büyülü Orpheus modernizasyonu. Aynanın içinden geçen ölüm figürüyle sinema tarihine geçmiştir.

## 1. Andrei Rublev (1966)

Tarkovsky'nin Russian Orthodox ikon ressamını konu alan filmi, sinemada kutsal ve mitolojik olanın en asil ifadesi olarak zirvede duruyor.`,
    image: mythologicalAsset.url,
    source: "The Guardian",
  },
  {
    slug: "evil-dead-tum-filmler-nerede",
    title: "Tüm Evil Dead Filmleri Nereden İzlenir? Serinin Tek Adreslik Rehberi",
    excerpt: "Evil Dead Burn'ün gösterime girmesiyle, Sam Raimi'nin başlattığı serinin tamamı tek bir dijital platformda toplandı. Ash'in Deadite'larla mücadelesini baştan sona izlemek için pratik bir rehber.",
    body: `'Evil Dead Burn'nin Before the sürümü, yalnızca 2023 'Evil Dead Rise'yi değil, tüm seriyi yeniden gözden geçirmeye değer. Ash'in Deadite'larla dövüşmesini izlemekten şikayet etmek zor ama önce onları bulmalısın. Neyse ki tüm seri tek bir uygun yerde ve devam serisini de aynı adreste bulabilirsiniz.

## Tüm 'Evil Dead' filmleri nerede izlenir?

'Evil Dead Burn' nihayet piyasaya sürüldüğünde, seriyi yenilemenin tam zamanı çünkü serinin son bölümünün ötesinde bir takım bağlantıların olduğu söyleniyor.

Önceki filmlerin tamamını burada bulabilirsiniz:

- **The Evil Dead**  (1981)   – HBO Max
- **Evil Dead II**  (1987)   – HBO Max
- **The Army of Darkness**  (1992)   – HBO Max
- **Evil Dead**  (2013)   – HBO Max
- **Evil Dead Rise**  (2023)   – HBO Max

Görüldüğü gibi HBO Max tüm seri için tek adres haline geldi. Devam serisi 'Ash vs. Evil Dead' de aynı platformda mevcut. Bu, yeni Sébastien Vaniček filmine hazırlanırken serinin tamamını sırayla izlemek isteyen 'tamamlayıcı' izleyiciler için ideal bir yapılandırmadır.`,
    image: "/__l5e/assets-v1/ea493545-12b1-4a2d-99a4-e0bf71238dc0/e46c495fcf0b.webp",
    source: "TheWrap",
  },
  {
    slug: "hbo-max-bu-haftanin-en-iyi-3-filmi",
    title: "Bu Hafta HBO Max'te İzlenecek En İyi 3 Film: Mask of the Phantasm, Evil Dead II ve Legally Blonde",
    excerpt: "Emmy adaylıklarının gündemi doldurduğu bir haftada HBO Max, bir Batman animasyon başyapıtı, bir korku klasiği ve 2000'lerin en iyi komedilerinden biriyle sinemaseverlere de güçlü seçenekler sunuyor.",
    body: `Emmy adaylarının az önce açıklandığı büyük bir TV haftası.  But HBO Max aynı zamanda sinema severleri sevindirecek başlıklarla dolu. Bu hafta, tüm zamanların en iyi DC filmlerinden birine, bir korku klasiğine ve 2000'li yılların başından kalma mükemmel bir komediye göz atabilirsiniz.

## "Batman: Mask of the Phantasm"

Kendisini pasif bir Batman hayranı olarak gören herkes 'Batman : The Animated Series' evreninde geçen bu uzun metrajlı maceraya bir şans vermeli.  Featuring the ikonik Batman / Kevin Conroy and Mark Hamill'nin Joker ikilisi olan film, Bruce Wayne'nin geçmişinden bir figürle, bir zamanlar pelerini bırakmayı düşünecek kadar sevdiği Andrea Beaumont (Dana Delany) ile yüzleşmesine odaklanıyor. Bruce'un ebeveynlerinin mezarını ziyaret ettiği sahne, karakterin beyazperdedeki en duygusal anlarından biri.

## "Evil Dead II"

Sébastien Vaniček'nin yönettiği yeni bir 'Evil Dead' filmi Friday'de gösterime girdi. Bu filmler başından beri güçlü kalmayı başardı, ancak Sam Raimi'nin ilk iki yapımı 'ormandaki kulübe' korku türünün en büyük örnekleri olmaya devam ediyor. İkinci filmde artan kara mizah unsuru (dehşeti hiç yumuşatmadan) pastanın üzerine kremadır. Bruce Campbell'nin başrol oynadığı bu sıçrayan ziyafet korkunç, acımasız ve son derece eğlenceli.

## "Legally Blonde"

Prime Video'nin ön bölüm serisi 'Elle' hakkında ne düşünürseniz düşünün, 'Legally Blonde'ye geri dönmek her zaman iyi bir fikirdir. Yönetmenliğini Robert Luketic and'nin üstlendiği, senaryosunu Karen McCullah Lutz and Kirsten Smith'nin yazdığı film, Harvard'da hukuk basamaklarını tırmanarak kendisini eleştirenlerin haksız olduğunu kanıtlayan bir kadının (Reese Witherspoon) hikayesini anlatan komik ve düşündürücü bir çalışma.  One of Witherspoon'nin en iyi performansları ve 2000'li yılların en iyi komedilerinden biri.`,
    image: "/__l5e/assets-v1/c6201118-3568-4be0-aaa3-60e0c40f7159/192b59f6e69f.webp",
    source: "TheWrap",
  },
  {
    slug: "bonnie-tyler-total-eclipse-en-iyi-5-film-sahnesi",
    title: "Bonnie Tyler'ın Total Eclipse of the Heart Şarkısının Sinemadaki En İyi 5 Anı",
    excerpt: "75 yaşında hayatını kaybeden Bonnie Tyler'ın en güçlü mirası: Total Eclipse of the Heart'ın komedi, dram ve korku filmlerinde perdeyi kasıp kavurduğu beş an.",
    body: `Efsanevi boğuk sesli şarkıcı Bonnie Tyler'yi 75 yaşında kaybettik. One of the'nin geride bıraktığı en büyük miras, 1983 tarihli güçlü şarkısı ' Total Eclipse of the Heart '   ve bu şarkının onlarca yıldır sinema salonlarında yarattığı unutulmaz anlardır. Britt Hayes'nin Entertainment Weekly. için derlediği listeyi paylaşıyoruz

## 1.   " Old School "   (2003)   — The Dan Band Sahnesi

The Dan Band'nin Frank Sinatra'yi anımsatan şarkıyı Frank'in (Will Ferrell) düğününde Todd Phillips 'kült komedisi 'Old School'de seslendirmesi filmin en ünlü sahnelerinden biridir. Bu sahne, Ferrell'in Perrey Reeves ile dansıyla birlikte şarkının 2000'ler nostaljisiyle yeniden dirilişinin başlangıcı sayılıyor.

## 2.   " Bandslam "   (2009)   — Karaoke Sahnesi

Gençlik müzikal draması 'Bandslam'deki karakterlerin karaoke sırasında söylediği bu şarkı, filmin en samimi duygusal patlamasıdır. Vanessa Hudgens and Aly Michalka'nin yer aldığı sekans, şarkının nesiller arasında köprü kurma gücünü kanıtlıyor.

## 3.   " It's Always Sunny in Philadelphia "   — The Nightman Cometh

Teknik olarak bir TV bölümü olmasına rağmen 'The Nightman Cometh' müzikal bölümünün finalindeki 'Total Eclipse' etkileri popüler kültürün bu şarkıya olan takıntısının en absürt örneklerinden biri.

## 4.   " Urban Cowboy "   (1980)   — Pioneering Emotional Use

Aslında, aynı yıl Bonnie Tyler'nin hitinden önce yayınlanan başka bir aşk temalı şarkının kullanılmasıyla bu türün öncüsü. Tyler'ın şarkısı daha sonra ülkenin dağılma sahnelerinin şablonu haline geldi.

## 5.   " The Perks of Being a Wallflower "   (2012)   — Kamyonet Sahnesinin Ruhu

Şarkının doğrudan kullanıldığı bir film değil ama onun duygusal DNA'sını miras alıyor.  As Britt Hayes yazılarında bize   'Total Eclipse of the Heart'nin aslında ergenlik romantizmi kanonunun kalbinde yer aldığını hatırlatıyor — Emma Watson'nin "I feel infinite" sahnesi bu ruhun mirasçısıdır.

Bonnie Tyler'nin sesi gitti; ancak Jim Steinman'nin melodramatik notaları sinema tarihinde kalıcı bir yer edindi.`,
    image: bonnieTylerAsset.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "paste-en-iyi-yeni-albumler-10-temmuz-2026",
    title: "Bu Hafta Dinlemeniz Gereken 12 Yeni Albüm (10 Temmuz 2026)",
    excerpt: "Finn Wolfhard'ın ilk indie rock albümünden Jack White'ın blues-punk kükreyişine, Kelela'nın R&B laboratuvarından Xiu Xiu'nun Eraserhead'e övgüsüne: Paste'in bu haftaki New Music Friday seçkisi.",
    body: `Paste, her Friday Yeni Müzik Friday'nin kalbi olmaya devam ediyor. Best New Songs listelerinin ardından yayınlanan bu albüm derlemesi, 10 Temmuz haftasının en çarpıcı on iki kaydını bir araya getiriyor. Rock, folk, elektronik ve deneyselden oluşan bir kesit.

##  Finn Wolfhard — Fire From The Hip

Finn Wolfhard'nin*Fire from the Hip*'si ilk dinleyişte tanıdık geliyor: Sharp Pins, Alex G, Elliott Smith ve Pavement'in kokusu bariz.  But Wolfhard'nin kendine güvenen, yaramaz teslimatı taklitten uzak duruyor.   " Lights Go Down ", Nicole Kidman'nin ikonik ve aşırı kullanılan AMC konuşmasını, bir oyuncunun film izleme deneyimine ilişkin melankolik bir yoruma dönüştürüyor.  George Clooney, " Common Side Effects, " ile ilgili şakalar yapıyor George W. Bush, " Maggie " ile ilgili şakalar yapıyor; ancak arka planda country-folk yaylıları ve "Nice to Meet You Again"nin jam-band havası tüm plağa zengin bir doku katıyor.

##  Houndmouth — Lordy

açıklama: Beş yıllık sessizliğin ardından gelen  *Lordy*, Matt Myers'nin yaratıcı krizinden doğan en samimi Houndmouth albümüdür. Kamp ateşi müziği gibi okunuyor: yetmişlerden etkilenen folk-rock parçaları, güneşte ıslanmış Güney yolları, puslu bir balıkgözü not defteri. "Never Gonna Die,"de titreyen bir sesin "this house we built / let's pray its boards don't rot." şarkısını söylediğini görüyoruz. Iron and Wine'den Sam Beam, "Holy Moses."ye eşlik ediyor.

##  Hurry — Zoned Out

Matt Scottoline'nin power-pop projesi Hurry'nin altıncı LP'si, yaşlanmayla ilgili karışık duyguların bir özetidir.   "Everything's changing, I'm scared", "The Dumbest Person You've Ever Seen."nin şekerli kancalarında itiraf ediliyor Cars-esque Moog riffleriyle "Untitled" ve Teenage Fanclub'nin Gerard Love vokallerinin yer aldığı "Moving After You", rekoru yaz albümü tartışmalarına taşıyor.

##  Jack White — Frozen Charlotte

Jack White, modern şarkı yazımını White Stripes'nin bulaşıcılığı aracılığıyla filtrelemenin bir yolunu buldu.  *Frozen Charlotte*, " Ball and Biscuit. "yi anımsatan dev gitar sololarıyla dolu yeni bir blues-punk ambar yakıcı koleksiyonudur. Kapanış "Neighbors Blues"deki çok parçalı solo, Beyaz'ın hâlâ parçalayabildiğinin kanıtıdır.

##  Kelela — new avatar

Los Angeles alt-pop sahnesinden çıkışından on yıldan fazla bir süre sonra, Kelela kısmen geriye dönüp bakıyor ve kataloğunu*new avatar*olarak yeniden yorumluyor. "point blank"nin titreşen araları, hem*Cut 4 Me*'nin kirli ritmini hem de*Raven*'nin en kulüp odaklı kısımlarını hatırlatıyor.  Perhaps the kariyerinin en olgun rekoru.

##  Panda Bear / Sonic Boom — Bir ? ne zaman

Panda Bear and Sonic Boom'nin yıllar süren işbirliğinde bile öne çıkan bir rekor. Rahatsız edici şarkı sözlerini ışıltılı psych-pop'a yerleştirme geleneğinin en olgun örneği.

##  Sad13 — 1331

Sadie Dupuis of Speedy Ortiz tarafından Sad13 adıyla yayınlanan 15 dakikalık bir mixtape. JRPG zindan müziği, mağara orgları ve programlanmış davullar on üç kısa parçada dolaşıyor.

##  Show Me The Body — Alone Together

Show Me The Body her zaman New York'nin hardcore'unu bir yurttaşlık görevi olarak görmüştür. Dördüncü kayıtları  *Alone Together*, "radical love." on üç parçaya dayalı, saf sesin otuz yedi dakikaya sığdırıldığı bir eylem çağrısıdır.

##  The Temper Trap — Sungazer

On yıl sonra geri dönen The Temper Trap, 2009'daki ilk çıkışlarından bu yana en meraklı hallerini yaşıyor.   "Giving Up Air" grubun bugüne kadarki en iyi eseridir.

##  Tracey Nelson — Herkül

Perennial'ın bu ilk albümü country rock mükemmelliğidir. Karly Hartman, Jack Kraus ve MJ Lenderman'nin konuk katkılarıyla, modern yaşamın küçük kalp kırıklıklarını sakin bir kayıtsızlıkla atlatıyor.

##  Twisted Teens — Florida Water Blues

Twisted Teens efekt kullanmıyor, Caspian'ın akordu bile yok.   " Just plug in and go. " Spagetti western gitar melodileriyle dolu, sıkı ve dürüst bir kayıt.

##  Xiu Xiu — Eraserhead Xiu Xiu

Xiu Xiu'nin, David Lynch'nin 1977*Eraserhead*'sinin yedi kanallı yeniden yorumlanması. Ev yapımı enstrümanlar, saha kayıtları, el fenerleri ve elektriksel parazitlerle inşa edilmiş bir yeraltı.`,
    image: "/__l5e/assets-v1/81dea29c-7607-46d8-8cdb-862da33018af/e88a980d1f2f.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-haziran-2026-en-iyi-10-sarki",
    title: "Haziran 2026'nın En İyi 10 Şarkısı",
    excerpt: "heavensouls'un yedi dakikalık kolajından Lily Seabird'ün baş sallatan Americana parçasına, Kelela'nın kırık ritimlerinden Mykki Blanco'nun kuir flanör edalı oyunbazlığına: Paste'in Haziran 2026 favorileri.",
    body: `Paste'nin haftalık Best New Songs sütununda yer alan yirmi parçadan on tanesini seçtik. Aralık ayında yılın en iyileri tartışmaları başladığında en güçlü adaylar olarak masaya gelecek şarkılar bunlar.  Mykki Blanco and Kelela ayı muhteşem dans müziğiyle açtı;  The Tubs and the Sullivan kardeşler etkinliği bir rock and roll şöleni ile kapattılar.

##  heavensouls —   " shipping times and quiet streets "

Nijerya doğumlu, Houston merkezli rapçi-yapımcı Chidi Obialo'nin*westside trapped*rekoru, yıl ortası listemizde ilk beşe girdi. Yeni single'ı "shipping times and quiet streets", peri terapisinin çevik caz saksafonuyla ve Sidepeice'in ortağı Labelbush'un Auto-Tune mırıltılarıyla renklenen törensel bir kolajdır. Ayrıntılar yedi dakikada tamamlandı.

##  Kelela —   " point blank "

*Cut 4 Me*'nin ruhu, " point blank. " West London'nin kırık ritminde dolaşıyor Kelela'nin tazeliği, gecikmeler ve kırılma vuruşlarıyla geri dönüyor. Fade to Mind and Night Slugs bağları parçanın tamamına nüfuz ediyor.

##  L'Rain —   " soulless cycle "

L'Rain'nin yakında çıkacak olan LP'si*Fata Morgana*, ülkenin " descent into fascism and trad culture. "   " soulless cycle " ile boğuşmasından ortaya çıkıyor ve beklenmedik bir şekilde patlıyor. Kriz rutin hale geldiğinde ne olur sorusuna sağlam dokusal bir cevap.

##  Lily Seabird —   " Election Day "

Vermont şarkı yazarının üç yıl içindeki üçüncü albümü  *Lightspheres On Their Way*için yayınlanan bu single, isyankar distorsiyon, çığlık atan gitarlar ve düpedüz feryatlar içeriyor.  An Americana headbanger, halk için bir mosh pit geçidi.

##  Mykki Blanco —   " Little Feet "

*CAFE PARADISO*'nin ilk teaserı. Tam teşekküllü bir queer flâneur şarkısı, Ian Isiah and Breakaway. Bodies'nin yardımıyla dans ve bağlılıkla donatılmış bir oda olan sokak lambasının altında karışarak iki dakikaya yoğunlaştı.

##  Sam & Louise Sullivan —   " Working Girl "

Sullivan kardeşlerin folk-rock kimyası "Working Girl."de en olgun formuna ulaşıyor. Yorgun bir iş gününün anlatımını yumuşak vokal armonileriyle saran parça, ayın en insani anını sunuyor.

##  SML —   " Spontaneous Live Music "

Doğaçlama caz dörtlüsü'nün yeni single'ı çevik bir bas hattı ve nefesli çalgıların özgür diyaloğuyla ilerliyor. Canlı prodüksiyon estetiği plağa hayat veriyor.

##  Tasha —   " You Are Spring "

Şair-söz yazarı Tasha'nin albüm başlık şarkısı, akustik gitar ve fısıltılı vokallerle bahar havası yaratıyor.

##  The Tubs —   " Illusion Pt. II "

İngiliz jangle pop grubu The Tubs'nin devam şarkısı klasik R.E.M.'e saygı duruşunda bulunuyor. ikiz gitar dokuması ile anlar. Rock için ayı kapatan bir marş.

##  Kelsey Lu —   " So Help Me God "

Cellist and şarkıcısı Kelsey Lu'nin yeni albüm parçası, koro düzenlemeleri ve elektronik dokular arasında gidip gelen bir dua niteliğinde.`,
    image: "/__l5e/assets-v1/45386981-14ad-4204-8c7d-7aca07c9ae44/7341660cfb7d.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-bu-hafta-dinlenmesi-gereken-5-yeni-sarki-18-haziran-2026",
    title: "Bu Hafta Dinlemeniz Gereken 5 Yeni Şarkı (18 Haziran 2026)",
    excerpt: "Haftanın şarkısı Lily Seabird'den Election Day. Julia Jacklin, No Joy & Fire-Toolz, Saul Williams ve daha fazlası: Paste'in 18 Haziran 2026 seçkisi.",
    body: `Every Thursday, Paste ekibi ve katkıda bulunanlar haftanın en sevdikleri beş şarkısını seçerek bunlardan birine "Haftanın Şarkısı" unvanını veriyor. İşte 18 Haziran 2026 haftasının beş favorisi.

## Haftanın Şarkısı: Lily Seabird —   " Election Day "

Vermont şarkı yazarı Lily Seabird, üç yıl içindeki üçüncü rekoru olan  *Lightspheres On Their Way*'yi duyurdu.   "Election Day", Seabird'ün 2024'teki "Dirge"den bu yana girmediği bir moda dönüşü işaret ediyor: isyankar distorsiyon, çığlık atan gitarlar, düpedüz feryatlar. Sesi hâlâ bir kanarya uyarısı kadar netti ama sözcüklerin duygu kenarlarında takılıp kalıyor ve yırtılıyor.  An Americana headbanger, halk için bir mosh pit geçidi.

##  Julia Jacklin —   " Get Away From Me (I Think I'll Love You Soon) "

Julia Jacklin indie rock'ın en farklı seslerinden biri olmaya devam ediyor. Yaklaşan LP'si*The Gem*'nin ilk single'ı tüyler ürpertici, muhtemelen karşılıksız bir aşk ilişkisini konu alıyor. Bulutlu gitarlar ve yürüyen ritim arasında geçici bir solo parlıyor.

##  No Joy & Fire-Toolz —   " Big Life, Big Leaf "

Bir zamanlar Jasamine White-Gluz'nin kıyamet ayakkabısı aracı olan No Joy, son on beş yıldır garip bir synth-pop ve tekno karışımına sürükleniyor.  Following Fire-Toolz'nin geçen yıl ürettiği Angel Marcloid*Bugland*, bu işbirliği güneşte ağartılmış dans müziğidir.

##  Saul Williams feat. Moor Mother & Gonjasufi —   " Conspiracy "

Saul Williams'nin yedi yıldır ilk kez çıkacak olan solo albümü*Leaf Life*, Robert Del Naja of Massive Attack, Kamasi Washington ve çok daha fazlasının da aralarında bulunduğu konukları ağırlayacak. İlk single "Conspiracy", Moor Mother and Gonjasufi. An'nin Williams'ın   "voice is an instrument" felsefesinin dışa yansımasını içeriyor.

##  The Tubs —   " Illusion Pt. II "

İngiliz jangle-pop grubu The Tubs. The'nin*Cotton Crown*'nin devamı niteliğindeki bu şarkı, klasik R.E.M. çift ​​gitar dokumalı anlar.,`,
    image: "/__l5e/assets-v1/b7285837-6839-4b6d-995a-0c713eccf1ea/f2792b810467.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-beach-boys-tum-zamanlarin-en-iyi-25-sarkisi",
    title: "The Beach Boys'un Tüm Zamanların En İyi 25 Şarkısı",
    excerpt: "Surfin' U.S.A.'in 63. yıl dönümünde Paste, Brian Wilson ve arkadaşlarının diskografisinin zirvelerini derliyor: Caroline, No'dan Heroes and Villains'e ve God Only Knows'a uzanan bir dinleme rehberi.",
    body: `Altmış üç yıl önce, The Beach Boys "Surfin' U.S.A."yi piyasaya sürdü ve grup ABD'de ilk 1 numaraya ulaştı.  Bunu takip eden In the yıllarında, Brian Wilson liderliğindeki Hawthorne, Kaliforniya grubu, rock and roll'un en harika şarkılarından ve en etkili kayıtlarından bazılarını üretti. 1966'nın*Pet Sounds*'si Amerika'nın şimdiye kadar ürettiği en büyük plaklardan biridir. İşte Paste'nin en iyi 25 Beach Boys şarkısı için seçtikleri.

## 25.   " Busy Doin' Nothin "   (1968)

Brian Wilson lounge pop'a katılıyor.  *Friends*'in lo-fi sinsi cevheri.  Burt Bacharach , Chris Montez ve bossa nova esintili.

## 24.   " Big Sur "   (1973)

Mike Love tarafından kaleme alınan bu şarkının 2021*Feel Flows*kutu set versiyonu, grubun kataloğundaki en büyülü bestelerden biridir. Kaliforniya'nın Central Coast. harikasına şiirsel bir övgü

## 23.   " Please Let Me Wonder "   (1965)

*The Beach Boys Today!*'nin B tarafı. Doo-wop sörf rock'ını Brian'ın*Pet Sounds*'ye hazırlanan orkestral vizyonuyla birleştiren saf pop zaferi.

## 22.   " Cabin Essence "   (1967)

*20/20*'nin kapanış parçası. Brian and Van Dyke Parks tarafından "a frozen frame of the Union Pacific Railroad." olarak yazıldı

## 21.   " Feel Flows "   (1971)

Bu listedeki tek Carl Wilson kompozisyonu. Baldwin org, Moog synth ve bantlı yaylı piyanolar.

## 20.   " I'm Waiting For the Day "   (1966)

Al de Lory'nin yılan gibi piyano riff'i ve Sid Sharp Strings'nin telleriyle dolu bir hüzün.

## 19.   " Disney Girls (1957) "   (1971)

Bruce Johnston'nin en büyük Beach Boys katkısı. Walt Disney film yıldızlarının, garaj şarabının ve "open cars and clearer stars."nin fantezisi

## 18.   " Surfer Girl "   (1963)

Brian'ın yazdığını iddia ettiği ilk şarkı. Dion and the Belmonts'nin "When You Wish Upon a Star." yorumundan ilham alınmıştır

## 17.   " I Get Around "   (1964)

Amerika'nın British Invasion. Surf'ye cevabı - rock, doo-wop enerjisi ve Kaliforniya sesi.

## 16.   " Caroline, No "   (1966)

*Pet Sounds*'nin kapanış parçası.  Hal Blaine Sparklett su şişesini çalıyor; Brian'ın köpekleri Banana and Louie de ortaya çıkıyor.

## 15.   " Heroes and Villains "   (1967)

*Smile*için yazılan bu opera benzeri eser, Kaliforniya'nın erken dönem tarihinin bir arşividir.

## 14.   " The Night Was So Young "   (1977)

*The Beach Boys Love You*'nin kalbi.  Lester Bangs buna "the band's best album." adını verdi

## 13.   " Don't Talk (Put Your Head On My Shoulder) "   (1966)

Kromatik mükemmellik.  Elvis Costello :   "Yarın dünyadaki tüm plak çalarlar kırılsa, bu şarkılar bundan yüz yıl sonra bile hâlâ duyulabilirdi."

## 12.   " 'Til I Die "   (1971)

Brian'ın varoluşsal krizi, Santa Monica iskelesinden atlama tehdidinin ardından yazıldı.

## 11.   " I Just Wasn't Made For These Times "   (1966)

Tony Asher ile birlikte yazılmış, Electro-Theremin solosunu içeren destansı bir balad.

## 10.   " All I Wanna Do "   (1970)

*Sunflower*'nin rüya gibi pop cevheri. Yıllar sonra Panda Bear and M83'ye ulaşacak bir sesin habercisi.

## 9.   " Sail On, Sailor "   (1973)

*Holland*'nin açılış parçası.  Blondie Chaplin'nin vokali grubun ruhundan en çok etkilenen anlarından birini yaratıyor.

## 8.   " Wouldn't It Be Nice "   (1966)

*Pet Sounds*'nin açılış parçası.  One of pop müziğin en mükemmel giriş parçaları.

## 7.   " In My Room "   (1963)

Brian and Gary Usher. tarafından yazılan, yalnızlık ve kişinin odasına sığınması üzerine bir başyapıt

## 6.   " Surf's Up "   (1971)

Brian and Van Dyke Parks tarafından*Smile*için yazılan, 1971'de tamamlanan uzun bir kompozisyon.

## 5.   " California Girls "   (1965)

Phil Spector'nin "Wall of Sound" mirasını miras alan neşeli bir manifesto.

## 4.   " Sloop John B "   (1966)

*Pet Sounds*' türkü uyarlaması.  One of the Grubun armonik dehasının en net anları.

## 3.   " Good Vibrations "   (1966)

" Pocket symphony. " Electro-Theremin, çello ve müzik geçişleriyle oluşturulmuş üç buçuk dakikalık bir pop mucizesi.

## 2.   " God Only Knows "   (1966)

Paul McCartney'nin "the best song ever written." olarak adlandırdığı bir başyapıt. Carl Wilson'nin vokali ve Fransız korna eşliğindeki girişi.

## 1.   " Wouldn't It Be Nice / God Only Knows "   — Pet Sounds Peak

*Pet Sounds*'nin ortasındaki geçiş, pop müziğin şimdiye kadar ürettiği en mükemmel süreklilik.`,
    image: "/__l5e/assets-v1/f04225bc-4b45-42ec-87c7-a50de91a833e/cd0254496ddc.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-en-buyuk-en-iyi-orijinal-sarki-oscar-kazananlari",
    title: "En İyi Özgün Şarkı Oscar'ını Kazanan En İyi Şarkılar Sıralaması",
    excerpt: "My Heart Will Go On'dan Moon River'a, Flashdance…What a Feeling'den Arthur's Theme'e: Paste, Akademi'nin 90 yıllık En İyi Özgün Şarkı tarihinde ödüle layık görülen en iyi 15 şarkıyı derledi.",
    body: `Akademi her yıl en iyi yönetmenleri, oyuncuları, görüntü yönetmenlerini, yazarları, makyaj sanatçılarını ve bestecileri ödüllendiriyor. Akademi 1935'ten beri Best Original Song Oscar. Con Conrad dağıtıyor ve Herb Magidson,*The Gay Divorcee*'den "The Continental" için ilk ödülü kazandı;  Johnny Mercer , Randy Newman , Giorgio Moroder , Henry Mancini , Burt Bacharach ve Elton John birden çok kez kazandı.  Paste, 90 yıllık tarihin en iyi 15 kazananını sıraladı.

## Mansiyon Ödülü:   " Man or Muppet "   (*The Muppets*, 2011)

Bret McKenzie tarafından Jason Segel and Peter Linz. Written tarafından seslendirilen Walter'ın piyano baladı, bir çocuk filmi olmasına rağmen tüm nesillerde yankılanan bir kalp taşıyor.

## 15.   " My Heart Will Go On "   (*Titanic*, 1997)

Dünya çapında 18 milyon satış, dört Grammy,   30 ülkede 1 numara.  Celine Dion,*Titanic*'ye ruhunu verdi. Kaynak filmini bile geride bırakan bir popüler kültür hazinesi.

## 14.   " Arthur's Theme (Best That You Can Do) "   (*Arthur*, 1981)

Christopher Cross'nin piyano baladı. "when you get caught between the moon and New York City" satırı, New York hayalini nesillere aktaran bir cümledir.

## 13.   " Moon River "   (*Breakfast at Tiffany's*, 1961)

Henry Mancini tarafından bestelenen, Audrey Hepburn'nin Holly Golightly olarak yangın merdivenindeki performansı.

## 12.   " Flashdance…What a Feeling "   (*Flashdance*, 1983)

Giorgio Moroder and Keith Forsey tarafından Irene Cara ile yazılmış, 1980'lerin pop hareketini tek başına özetleyen bir marş.

## 11.   " The Way You Look Tonight "   (*Swing Time*, 1936)

Orijinal olarak Fred Astaire. tarafından gerçekleştirilen, Jerome Kern and Dorothy Fields tarafından ölümsüz bir standart

## 10.   " Streets of Philadelphia "   (*Philadelphia*, 1993)

Bruce Springsteen'nin sessiz bas senteziyle söylenen ağıtı.  One of the, AIDS and'nin dışlanmasıyla ilgili yazılmış en insancıl pop şarkıları.

## 9.   " Falling Slowly "   (*Once*, 2007)

Glen Hansard and Markéta Irglová. The tarafından gerçekleştirilen bir halk düeti, düşük bütçeli bir İrlanda filminin kazandığı en büyük ödül.

## 8.   " Skyfall "   (*Skyfall*, 2012)

Adele'in James Bond marşı. Serinin en olgun tema şarkısı.

## 7.   " Lose Yourself "   (*8 Mile*, 2002)

Eminem'in rap için ilk Oscar'si. "one shot" temasının en ham, en dürüst tasviri.

## 6.   " Shallow "   (*A Star Is Born*, 2018)

Lady Gaga and Bradley Cooper'nin düeti. Son on yılın en yankı uyandıran aşk ilanı.

## 5.   " Let It Go "   (*Frozen*, 2013)

Idina Menzel'nin son on beş yıllık animasyon müzikallerini tanımlayan güçlü şarkısı.

## 4.   " Over the Rainbow "   (*The Wizard of Oz*, 1939)

Judy Garland'nin yorumu, belki de Amerikan popüler müziğinin en ikonik anı.

## 3.   " The Windmills of Your Mind "   (*The Thomas Crown Affair*, 1968)

Michel Legrand and the Bergmans tarafından yazılan ve Noel Harrison. tarafından gerçekleştirilen gerçeküstü bir düşünce döngüsü

## 2.   " White Christmas "   (*Holiday Inn*, 1942)

Irving Berlin klasik.  Bing Crosby'nin yorumu tüm zamanların en çok satan single'ı olmaya devam ediyor.

## 1.   " Days of Wine and Roses "   (*Days of Wine and Roses*, 1962)

Henry Mancini and Johnny Mercer. tarafından kanonun zirvesi Alkol ve kayıplarla ilgili bir başyapıt, caz standardına dönüştürüldü.`,
    image: "/__l5e/assets-v1/aba2a09d-1e66-4497-a3b9-b732fc76d665/26c30f530c88.jpg",
    source: "Paste Magazine",
  },
  {

    slug: "bbc-temmuz-2026-izlenecek-10-film",
    title: "Spider-Man'den The Odyssey'e: BBC'ye Göre Temmuzda İzlenecek 10 Film",
    excerpt: "Tom Holland ve Zendaya'nın yılın en büyük iki gişe yapımında başrolü paylaştığı bu ayda, BBC Culture eleştirmeni Nicholas Barber temmuzda sinemada ve evde izlenecek en iyi 10 filmi seçiyor.",
    body: `BBC Culture eleştirmeni Nicholas Barber, Temmuz 2026 için sinemalarda ve evde izlenecek en iyi 10 filmini derledi. Bu ay, Tom Holland and Zendaya'nin başrol oynadığı iki büyük yapım yer alıyor: Sony'nin 'Spider-Man: Brand New Day' ve Christopher Nolan'nin 'The Odyssey' filmi.  But the listesi yalnızca destek direkleriyle ilgili değil.

## 1.Evil Dead Burn
Sam Raimi evreninin yeni bölümü; bu sefer daha çılgın, daha kanlı ve şaşırtıcı derecede duygusal.

## 2.Spider-Man: Brand New Day
Tom Holland'nin Peter Parker olarak dördüncü çıkışı; MCU'nin sıfırlama noktası olarak konumlandırılmıştır.

## 3.The Odyssey
Christopher Nolan'nin Homer uyarlaması.  Odysseus rolünde Matt Damon;  Penelope rolünde Zendaya.  IMAX 70 mm atış.

## 4. Superman: Man of Tomorrow
James Gunn'nin yeni DCU evreninin devamı.  David Corenswet Süpermen rolünü güçlendiriyor.

## 5. Bugonia
Yorgos Lanthimos'nin 'Save the Green Planet'yi yeniden yorumlaması.  Emma Stone başrolde.

## 6. Ella McCay
James L. Brooks'nin uzun bir aradan sonra çıkan yeni filmi;  Kadroda Emma Mackey and Woody Harrelson.

## 7.The Naked Gun
Yeniden başlat.  Leslie Nielsen rolünde Liam Neeson - ve şaşırtıcı bir şekilde işe yarıyor.

## 8.Splitsville
Michael Angelo Covino'nin evlilik komedisi; Sundance'in övgüleriyle ortaya çıktı.

## 9.Sorry, Baby
Eva Victor'nin ilk uzun metrajlı filmi; travma sonrası komedi türüne yeni bir bakış.

## 10. Together
Michael Shanks'nin kara komedi-korku melezi;  Alison Brie and Dave Franco başrollerde.`,
    image: "/__l5e/assets-v1/6d939522-d231-4a43-91ff-02b07e8aff5f/a80f8bb516fd.webp",
    source: "BBC Culture",
  },
  {
    slug: "ew-en-iyi-binge-dizileri",
    title: "Bir Oturuşta İzlemelik: EW'den Peş Peşe İzlenecek En İyi 45 Dizi",
    excerpt: "Noah Wyle'lı The Pitt'ten Fleabag'e, Over the Garden Wall'dan The Americans'a: Entertainment Weekly'den bir hafta sonuna sığdırabileceğiniz 45 dizilik bir maraton listesi.",
    body: `Yayın çağı, tüm sezonu tek seferde bitirme alışkanlığını neredeyse sinematik bir deneyime dönüştürdü.  Entertainment Weekly'nin Robert English and Kevin Jacobsen tarafından güncellenen listesi (3 Temmuz 2026), art arda izlenmeye en uygun 45 programı derliyor. Aşağıda her başlığın kısa bir İngilizce özetiyle birlikte EW'nin alfabetik sırayla tam listesi bulunmaktadır.

## 1. Abbott Elementary (2021–)
Quinta Brunson'nin bir Philadelphia devlet okulunda geçen sahte belgesel komedisi. Sıcak, akıllı ve bölüm başına 22 dakika: klasik aşırı yakıt.

## 2. Adolescence (2025)
Stephen Graham'nin başrolde olduğu, tek çekimde çekilen dört bölümlük bir Netflix draması. Bir cinayet soruşturması etrafında ergenliği, sosyal medyayı ve baba-oğul ilişkisini araştıran yürek parçalayıcı bir çalışma.

## 3. Baby Reindeer (2024)
Richard Gadd'nin kendi hikayesinden uyarlanan taciz-travma draması. Jessica Gunning'nin Martha rolündeki Emmy ödüllü performansıyla dikkat çeken, 7 bölümlük şok edici bir Netflix.

## 4. Bait (2026)
Riz Ahmed. It'nin başrol oynadığı Prime Video draması, James Bond rolüne aday olan bir aktörün kimlik ve utançla boğuşmasını konu alıyor.

## 5.The Bear (2022–2026)
Jeremy Allen White'nin Carmy'si; Chicago'daki bir sandviç dükkanında geçen FX serisi, mutfak stresini şiirsel bir kaygı dramasına dönüştürüyor. 4 sezonda tamamlandı.

## 6.Black Doves (2024–)
Başrolünde Keira Knightley and Ben Whishaw.'nin yer aldığı bir Netflix casus gerilim filmi. Noel temalı Londra sokaklarında geçen hızlı tempolu bir suikast operası.

## 7. Bodyguard (2018)
Başrolünde Richard Madden.'nin yer aldığı bir BBC gerilim filmi "finishes in one night,"nin kalp atışlarını her dakika yükselten 6 bölümlük bir prototipi.

## 8. Chernobyl (2019)
Craig Mazin'nin HBO mini dizisi. 1986'daki nükleer felaketin ardındaki bürokrasiyi ve insan hatasını titizlikle ve dehşetle anlatıyor.

## 9.The Comeback (2005; 2014; 2026)
Lisa Kudrow'nin Valerie Cherish'si geri döndü. HBO'nin kült utanç verici komedisinin yeni sezonu üçlemeyi tamamlıyor.

## 10. Death Note (2006–2007)
Tsugumi Ohba and Takeshi Obata'nin mangasından uyarlanmış bir anime klasiği. Light and L arasındaki zeka düellosu 37 bölümle son buluyor.

## 11. Dying for Sex (2025)
Başrolünde Michelle Williams. It'nin yer aldığı FX mini dizisi, ölümcül kanser teşhisi konulan ve cinsel özgürlüğe adım atan bir kadın hakkında gerçek bir podcast'i uyarlıyor.

## 12. Enlightened (2011–2013)
Mike White'nin ilk başyapıtı.  Laura Dern'nin Amy Jellicoe'si "enlightened" orta yaş krizinin portresini çiziyor. 18 bölüm.

## 13. Firefly (2002–2003)
Joss Whedon'nin uzay-batı tarzı. Bir sezon sonra iptal edilse de kült bir klasik haline geldi; 14 bölüm + Serenity filmi ideal bir hafta sonu paketi oluşturuyor.

## 14.Fleabag (2016–2019)
Phoebe Waller-Bridge'nin dördüncü duvarı kırmasıyla televizyonu yeniden tanımlayan iki sezonluk mucizesi. 12 bölüm, mükemmel bir cumartesi.

## 15. Freaks and Geeks (1999–2000)
Judd Apatow and Paul Feig'nin 1980'de Michigan'daki bir lisede geçen kısa ömürlü klasik filmi. Genç Seth Rogen, James Franco ve Linda Cardellini.'den oluşan efsanevi bir kadro

## 16. The Girlfriend (2025)
Robin Wright. It'nin başrolde olduğu Prime Video psikolojik gerilim filmi, bir anne ile oğlunun kız arkadaşı arasındaki güç mücadelesini iki perspektiften anlatıyor.

## 17.Hacks (2021–2026)
Jean Smart and Hannah Einbinder'nin nesiller arası komedyen ikilisi.  HBO Max'nin mıknatısı Emmy, beşinci ve son sezonuyla sona erdi.

## 18. The Haunting of Hill House (2018)
Mike Flanagan'nin Shirley Jackson uyarlaması. Aile dramını korkuyla birleştiren 10 bölümlük bir Netflix ödevi.

## 19.Heartstopper (2022–2024)
Alice Oseman'nin çizgi romanından uyarlanan Netflix romantik gençlik dizisi. Üç kısa sezonda tamamlanan sıcak bir dünya.

## 20. Heated Rivalry (2025–)
Rachel Reid'nin tuhaf buz hokeyi romanının Crave uyarlaması. İki rakip NHL yıldızının yıllar süren gizli ilişkisi.

## 21. I May Destroy You (2020)
Michaela Coel'nin yazdığı, yönettiği ve başrol oynadığı HBO /BBC başyapıtı. Rıza ve travmayı 12 bölümde inceliyor.

## 22. Jury Duty (2023–)
Freevee'nin doğaçlama sahte jüri deneyi. Ronald Gladden'nin tamamen habersiz olduğu bir sosyal deney komedisi.

## 23. Love Story (2026–)
Ryan Murphy. Sarah Pidgeon and Paul Kelly'nin Carolyn Bessette and JFK Jr. rolünde hazırladığı bir FX serisi

## 24. Mare of Easttown (2021)
Kate Winslet'nin Emmy ödüllü Delaware County dedektifi. 7 bölümlük bir HBO mini dizisi, " small-town noir. " için bir ders kitabı örneği

## 25. Margo's Got Money Troubles (2026–)
An Apple TV + Rufi Thorpe'nin romanının uyarlaması.  Elle Fanning and Michelle Pfeiffer, güreşçi bir babaya sahip genç bir annenin hikâyesinde.

## 26. The Night Of (2016)
Riz Ahmed'nin çığır açan 8 bölümlük HBO suç draması. Amerikan adalet sisteminin klostrofobik bir röntgeni.

## 27. Normal People (2020)
Sally Rooney'nin romanının Hulu/BBC uyarlaması. Yılın en titiz aşk hikayesi Paul Mescal and Daisy Edgar-Jones ikilisi.

## 28. Over the Garden Wall (2014)
Patrick McHale'nin 10 bölümlük Cartoon Network mini dizisi. Sonbahar atmosferi, Elijah Wood'nin sesi ve zamansız bir masal tonu.

## 29. Overcompensating (2025–)
Benito Skinner'nin Prime Video komedi dizisi. Üniversitenin birinci yılında ortaya çıkışının öyküsünü keskin bir mizahla anlatıyor.

## 30. Paradise (2025–)
Dan Fogelman'nin başrolünde Sterling K. Brown.'nin yer aldığı Hulu gerilim filmi Suikast sonrası siyasi komplo bilim kurguyla buluşuyor.

## 31. The Pitt (2025–)
Noah Wyle'nin HBO Max serisi, Pittsburgh'daki bir acil servisteki 15 saatlik vardiyayı gerçek zamanlı olarak tasvir ediyor. 2026'nın en güçlü yeni draması.

## 32. Pluribus (2025–)
Vince Gilligan'nin yeni Apple TV + bilim kurgusu, Rhea Seehorn. The ile küresel bir mutluluk salgınına direnen tek kişi.

## 33. The Queen's Gambit (2020)
Anya Taylor-Joy. The döneminde bir kadın satranç dehasının 7 bölümlük yükselişinin başrol oynadığı bir Netflix mini dizisi.

## 34. Schitt's Creek (2015–2020)
Eugene and Dan Levy'nin Kanada komedisi. Zenginlikten düşen bir ailenin altı mevsimdeki sıcak dönüşümü.

## 35. Sense8 (2015–2018)
The Wachowski kız kardeşlerin Netflix'de sekiz kıtaya yayılan psikolojik bağ destanı. Görsel bir şölen ve kült bir klasik.

## 36. Severance (2022-günümüz)
Dan Erickson'nin Apple TV + serisi.  Adam Scott'nin "innie/outie" çalışanları, 2020'lerin en özgün konsepti Lumon Industries'de.

## 37. Shōgun (2024–)
James Clavell'nin romanının FX uyarlaması.  Anna Sawai , Hiroyuki Sanada ve Cosmo Jarvis'nin 17. yüzyıl Japonya destanı Emmy ödüllerini silip süpürdü.

## 38. Shrinking (2023–)
Bill Lawrence , Brett Goldstein ve Jason Segel'nin Apple TV + komedi-drama filmi.  Harrison Ford'nin kariyer sonu sürprizi.

## 39. Squid Game (2021–2025)
Hwang Dong -hyuk'un Netflix fenomeni. Üç sezonda tamamlanan bir sınıf mücadelesi alegorisi, küresel bir olaya dönüştü.

## 40. The Studio (2025–)
Seth Rogen'nin Apple TV + Hollywood hicvisi. Kathryn Hahn and'nin geniş bir kadroya sahip olduğu bir stüdyo başkanının kaotik ilk yılını anlatıyor.

## 41. Survivor (2000 – günümüz)
Jeff Probst'nin CBS gerçeklik klasiği. 45'ten fazla sezonuyla listede "making time to binge." gerektiren tek dizi.

## 42. The Traitors (2023–)
Alan Cumming - Peacock'un sunduğu gerçeklik gerilim filmi. İki gecede bitirilmesi planlanan bir sosyal aldatma oyunu.

## 43. Twin Peaks (1990–1991)
David Lynch and Mark Frost'nin televizyonun gramerini değiştiren ABC'deki gizemli kasaba draması. Laura Palmer'yi kim öldürdü?

## 44. The White Lotus (2021–)
Mike White'nin HBO antolojisi. Her sezon farklı bir lüks tesiste geçen klas bir hiciv; üç sezonda üç yıldızla dolu oyuncu kadrosu.

## 45. Widow's Bay (2026–)
Matthew Rhys'nin Apple TV + gizemi. Bir sahil kasabasında kayıp bir kızın izini süren sisli kara estetiğiyle yeni bir keşif.`,
    image: "/__l5e/assets-v1/0533f2d0-cc82-4ff7-be8b-7217b8fec22b/ew-binge-45.webp",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-hulu-en-iyi-gerilim-dizileri",
    title: "Hulu'da Nefes Kesen 24 Gerilim Dizisi",
    excerpt: "Fargo'dan Only Murders in the Building'e, The Americans'tan The Handmaid's Tale'e: Entertainment Weekly'den Hulu kataloğunda sizi koltuğunuza çivileyecek 24 gerilim dizisi.",
    body: `Gwen Ihnat and Kevin Jacobsen tarafından kaleme alınan Entertainment Weekly listesi, Hulu'nun kapsamlı kataloğunda gizlenmiş 24 heyecan verici seriyi ortaya çıkarıyor. Ortak paydaları: At the Her bölümün sonunda, bir sonrakine hiç düşünmeden başlayacaksınız.

##  Crime and kara mizah
Noah Hawley'nin*Fargo*tüm sezonlarıyla listede - özellikle Steve Martin, Martin Short ve*'deki Chris Rock. The üçlüsüyle 4. sezon Only Murders in the Building*, kaliteden ödün vermeyen modern bir klasik. Cinayet-komedi dozu.

##  Espionage and paranoya
Başrolünü Keri Russell'nin paylaştığı*The Americans*, kendisini türün son 20 yıldaki zirvelerinden biri olarak konumlandıran Cold War sırasında KGB casuslarının aile yaşamının öyküsünü anlatıyor.*Homeland*ve*The Looming Tower*'nin ilk sezonları da bu kategoridedir.

##  Dystopia and psikolojik gerilim
Elisabeth Moss'nin*The Handmaid's Tale*altı sezonluk yolculuğunu 2025'te tamamladı. Listede ayrıca Amy Adams'nin*Sharp Objects*'si,*The Bear*'nin gerilim yönünü öne çıkaran bölümleri ve*Dopesick*.

## Sürpriz seçimler
*Under the Banner of Heaven*,  *A Murder at the End of the World*,  *The Patient*ve*Reservation Dogs'nin daha karanlık bölümleri gibi daha az tartışılan yapımlar*de EW ekibinin radarında.`,
    image: "/__l5e/assets-v1/c5933f01-6f8e-4e7c-88a4-a5ee1e94947a/hulu.webp",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-netflix-mart-2025-yenilikler",
    title: "Martta Netflix'te: 50 First Dates, Ma, The Residence ve Daha Fazlası",
    excerpt: "Adam Sandler ve Drew Barrymore klasiği 50 First Dates'ten Meghan Markle'ın yeni reality programına, Millie Bobby Brown'ın filminden Chelsea Handler ve John Mulaney'nin stand-up gösterilerine: Netflix'in Mart 2025 katalog güncellemesi.",
    body: `Entertainment Weekly'den Ryan Coleman, Netflix'nin Mart 2025 için kapsamlı katalog güncellemesini derledi. Aboneler nostalji, orijinal drama ve stand-up'ın bir karışımı olan bir ay bekleyebilirler.

## Nostaljik dönüşler
*50 First Dates*  (2004)   — Adam Sandler and Drew Barrymore'nin modern romantik komedi klasiği Netflix'de geri döndü.  *Friday*  (1995) ve Ice Cube and Chris Tucker ile kült komedi ikilisi*Next Friday*  (2000) da kütüphaneye ekleniyor. Ayrıca*The Karate Kid*üçlemesi,  *Bruce Almighty*ve*Legally Blonde 2*.

## Orijinal seri
*The Residence*  — Shonda Rhimes ' yeni Netflix serisi. Uzo Aduba.  *With Love, Meghan*   'nin başrol oynadığı bir White House cinayet gizemi yapımı — Meghan Markle'nin yaşam tarzı gerçeklik serisi.  *Adolescence*  — Stephen Graham.'nin başrol oynadığı dört bölümlük bir İngiliz mini dizisi

##  Films
*The Electric State*  — Anthony and Joe Russo tarafından yönetilen, başrolde Millie Bobby Brown and Chris Pratt.  *Plankton: The Movie*  — SpongeBob evreninin animasyonlu bir yan ürünü.  *Ma*  (2019)   — Octavia Spencer'nin psikolojik gerilim filmi.

##  Stand-up
Chelsea Handler and John Mulaney'nin yeni stand-up spesiyalleri bu ay platformda olacak.`,
    image: "/__l5e/assets-v1/0d45694a-9768-47d5-8f11-8366afddb87d/netflix-march.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-netflix-en-iyi-aile-filmleri",
    title: "Netflix'teki En İyi 20 Aile Filmi: Chicken Run'dan Matilda'ya",
    excerpt: "Wesley Stenzel'ın EW için hazırladığı liste, çocukların da yetişkinlerin de izleyebileceği 20 Netflix filmini bir araya getiriyor: Rango, Galaxy Quest, Nimona ve daha fazlası.",
    body: `Entertainment Weekly yazarı Wesley Stenzel, Netflix'nin en iyi 20 aile filmini seçti. Aardman'ın kil animasyonlarından çağdaş hit animasyonlara ve klasik komedilere kadar geniş bir liste.

## Animasyon klasikleri
*Chicken Run*  (2000)   — Aardman'ın kaçış temalı stop motion başyapıtı.  *Rango*  (2011)   — Gore Verbinski'nin, Johnny Depp.  *Klaus*'nin başrol oynadığı Oscar ödüllü batı animasyonu   (2019)   — Netflix'nin kendi orijinal animasyonu, elle çizilmiş bir Noel hikayesi.

## Yeni nesil favoriler
*Nimona*  (2023)   — ND Stevenson'nin çizgi romanı Netflix'nin tuhaf temalı ortaçağ fantastik animasyonundan uyarlanmıştır.  *The Sea Beast*  (2022)   — Oscar -deniz canavarı avcılarını konu alan aday yapım.

## Canlı aksiyon klasikleri
*Matilda*  (1996)   — Danny DeVito. tarafından yönetilen Roald Dahl uyarlaması  *Galaxy Quest*  (1999)   — Altın standart bilim kurgu parodisi; hem çocuklar hem de yetişkinler için mükemmel bir giriş.  *The Adventures of Sharkboy and Lavagirl*  (2005)   — Robert Rodriguez'nin artık kült statüsünde olan fantastik çocuk filmi.

## Dünya sineması
*A Cat in Paris*  (2010)   — Fransız yapımı Oscar adayı animasyon.  *The Boy, the Mole, the Fox and the Horse*  (2022)   — Charlie Mackesy'nin resimli kitabından uyarlanmıştır, BAFTA and Oscar kazananı.

## Bu liste neden önemli?
Stenzel'e göre "family movie" etiketi bir çocuk filmine indirgenmemeli; Bunun en iyi örneği, farklı yaş gruplarının farklı katmanları aynı anda okuyabildiği, çok yönlü yapımlardır. Bu 20 film bu formüle mükemmel bir şekilde uyuyor.`,
    image: "/__l5e/assets-v1/f3677a5e-8d50-4a4b-909c-51c809f1a54e/family.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "agustos-ayinin-en-iyi-10-dizisi-bbc",
    title: "Ted Lasso'dan The Shards'a: Ağustosta Mutlaka İzlenmesi Gereken 10 Dizi",
    excerpt: "Apple TV'nin futbol komedisinin dönüşünden Ryan Murphy imzalı karanlık bir gençlik gerilimine, DC'nin yeni süper kahraman dizisi Lanterns'ten Conan O'Brien'ın yol hikâyelerine: BBC Culture'dan Caryn James'in ağustos seçkisi.",
    body: `Yaz sonu televizyonu bu yıl alışılmadık derecede kalabalık.  BBC Culture'den Caryn James, Ağustos ayı boyunca yayınlanacak on yapımı seçti: geri dönüşler, uyarlamalar ve tür denemeleri.

## 1. Fightland (31 Temmuz — Starz / 27 Ağustos — Sky & NOW)
Boks ve uyuşturucu kartellerinin dünyasında geçen bir intikam draması. Yapımcılığını Curtis "50 Cent" Jackson üstleniyor. Ağır siklet şampiyonu Duke Kilroy (Howard Charles), işlemediği bir cinayetten dolayı sekiz yıl hapis yattıktan sonra kendisine komplo kuran uyuşturucu baronuyla yüzleşmek için Londra'ya geri döner.

## 2. Ted Lasso (5 Ağustos — Apple TV)
Bittiğini sandığımız dizi 3 yıl aradan sonra geri dönüyor. Ted (Jason Sudeikis), Rebecca'nın (Hannah Waddingham) yeni kurulan Richmond kadın takımına koçluk yapmak için Kansas City'den Londra'ya döner. Oyuncular arasında Brett Goldstein , Juno Temple , Jeremy Swift ve yeni gelen Tanya Reynolds. yer alıyor

## 3. The Shards (5 Ağustos — Hulu / 6 Ağustos — Disney +)
Bret Easton Ellis'nin 2023 tarihli yarı otobiyografik romanından uyarlanan bir Ryan Murphy yapımı olan dizi, 1981 yılında geçiyor. Los Angeles. High okul son sınıf öğrencisi Bret (Igby Rigney), yeni öğrenci Robert'ın (Homer Gere) okula gelmesiyle "The Traveler" adlı bir seri katilin gölgesinde geçen bir ergenlik hikayesinin içine çekilir.  Kaia Gerber de kadroda yer alıyor.

## 4. Sterling Point (5 Ağustos — Prime Video )
"My Old Ass." olarak tanınan Megan Park tarafından yaratılan, aile sırlarıyla dolu bir gençlik melodramı. İkiz kardeşler Annie (Ella Rubin) ve Connor (Keen Ruffalo), hiç tanımadıkları büyükanne ve büyükbabalarından Kanada'da bir adayı miras alır.

## 5. Alley Cats (7 Ağustos — Netflix)
Ricky Gervais. tarafından yaratılan ve seslendirilen, yetişkinlere yönelik animasyonlu bir İngiliz komedisi. Bir sokak kedisi çetesi, varoluşsal sorular sorar ve bol bol küfür eder. Gervais'in açıklaması net:   " I hope you like cats and swearing. "

## 6. Reacher (12 Ağustos — Prime Video)
Alan Ritchson'den Jack Reacher yeni sezonla geri dönüyor; Lee Child uyarlaması, aksiyon severler için Ağustos ayının en garantili hitidir.

## 7. My Brilliant Career (13 Ağustos — Netflix )
Miles Franklin'nin klasik Avustralya romanının yeni uyarlaması; 19. yüzyılın sonlarında yazar olmak isteyen genç bir kadının hikayesi.

## 8. Lanterns (16 Ağustos — HBO Max)
DC'nin yeni süper kahraman serisi;  Kyle Chandler and Aaron Pierre'nin Green Lanterns'si süper kahraman formatını kırsal bir dedektif hikayesine dönüştürüyor.

## 9. Conan O'Brien Must Go (21 Ağustos — HBO Max )
Conan O'Brien'ın internette tanıştığı hayranlarını evlerinde ziyaret etmek için dünyayı dolaştığı seyahat komedisi yeni bölümleriyle geri dönüyor.

## 10. Dark Matter (28 Ağustos — Apple TV )
Blake Crouch'nin çok satan romanından uyarlanan paralel evren gerilim filmi ikinci sezonuyla devam ediyor;  Joel Edgerton başrolünü yeniden üstleniyor.`,
    image: "/__l5e/assets-v1/62da9ae1-b2b3-481e-b623-517b76967f1d/4bde2a1381a0.webp",
    source: "BBC Culture",
  },
  {
    slug: "agustos-ayinin-en-iyi-10-filmi-bbc",
    title: "The Dog Stars'tan One Night Only'ye: Ağustosta Mutlaka İzlenmesi Gereken 10 Film",
    excerpt: "Ridley Scott'ın Jacob Elordi'li kıyamet sonrası gerilimi, Eli Roth'un dondurmacı katili, Anthony Bourdain'in gençliği ve rafa kaldırılan Coyote vs Acme: Nicholas Barber'ın BBC Culture için hazırladığı ağustos seçkisi.",
    body: `Ağustos, hem sinemalarda hem de evde alışılmadık derecede yoğun bir aydır.  BBC Culture'den Nicholas Barber bu aya damgasını vuracak on filmi seçti: absürd bir romantik komediden Ridley Scott'nin yeni distopyasına, Cannes'ın en çok beğenilen filminden yıllardır rafa kaldırılan Looney Tunes uyarlamasına kadar.

## 1. One Night Only (7 Ağustos ABD/Kanada - 28 Ağustos Birleşik Krallık)
Görünüşte tipik bir romantik komedi: Monica Barbaro and Callum Turner tarafından canlandırılan iki çekici New Yorkers, aynı zamanda "Friends with Benefits" ve "Anyone but You."yi de yöneten Will Gluck tarafından yönetiliyor But Travis Braun'nin senaryosunun tuhaf bir kancası var: bekarların yılda bir gece dışında seks yapmasının yasak olduğu alternatif bir gerçeklik. İnternette "Purge for sex" olarak adlandırılan fikir, filmi vizyona girmeden önce tartışma konusu haline getirdi. Turner'ın The Hollywood Reporter'ye tavsiyesi net:   "Saçmalığa kapılırsan iyi vakit geçirirsin. Kurallara takılıp kalacaksan git belgesel izle."

## 2. Ice Cream Man (12–14 Ağustos, uluslararası)
"Cabin Fever" ve "Hostel," filmlerinin yönetmeni Eli Roth, düşük bütçeli, kanlı korkuya geri dönüyor.  Ari Millen, Amerika'nın kırsal kesimlerinde dolaşan ve sattığı dondurmalarla çocukları ölüm makinesine dönüştüren gizemli bir dondurma adamını canlandırıyor. Roth'un hedefi mütevazı değil:   "Şimdiye kadar yaptığım en çılgın film olmasını istiyorum. Like The Birds ama çocuklarla... Yani tamamen çılgın."

## 3. The Dog Stars (7 Ağustos ABD/Kanada - 21 Ağustos Birleşik Krallık)
Ridley Scott 88 yaşında ama hiç bu kadar üretken olmamıştı. Peter Heller'nin romanından uyarlanan bu kıyamet sonrası gerilimde, yakın gelecekteki bir grip salgınından sağ kalanlar arasında bir pilot (Jacob Elordi), bir sağlık görevlisi (Margaret Qualley) ve eski bir denizci (Josh Brolin) yer alıyor. Elordi'nin Scott hakkındaki yorumu :   "Tüm hayatı boyunca sinemaya bağlıydı; bu onun kanında var. Sinemanın bir hayat sürdürmesini izliyorum."

## 4. Tony (6–7 Ağustos, uluslararası)
2018 yılında vefat eden Anthony Bourdain, yemek ve seyahat yazarlığının rock yıldızıydı; bu nedenle bir rock yıldızının köken hikayesini hak ediyor. "Kitchen Confidential,"den esinlenen film, 1970'lerin ortalarında, Bourdain'in Provincetown'daki bir restoranda çalıştığı üniversiteyi bıraktığı dönemde geçiyor.  Director Matt Johnson; 19 yaşındaki Bourdain'i Dominic Sessa ("The Holdovers") canlandırıyor ve ona akıl hocalığı yapan şefi Antonio Banderas. Leo Woodall and Emilia Jones canlandırıyor.

## 5. Teenage Sex and Death at Camp Miasma (14 Ağustos, ABD)
Bu yıl Cannes'ın en çok beğenilen filmi.  In Jane Schoenbrun'nin (" I Saw the TV Glow ") gerçeküstü postmodern komedisi Hannah Einbinder (" Hacks "), Friday the 13. benzeri bir slasher serisini yeniden canlandırmakla ve onu genç liberal izleyiciler için " acceptable " yapmakla görevlendirilmiş tuhaf bir yönetmeni canlandırıyor. Onun fikri, ilk filmde (Gillian Anderson)  'de rol alan oyuncuyu geri getirmek; ancak bu oyuncu şu anda filmin çekildiği yaz kampında münzevi olarak yaşıyor.  Variety'den Jessica Kiang:   "Seks, ölüm, VHS ve abur cuburdan oluşan ateşli bir karışım; Schoenbrun'un en olgun ve eğlenceli filmi."

## 6. The End of Oak Street (20–28 Ağustos, uluslararası)
David Robert Mitchell tarafından yazılan ve yönetilen, "It Follows," filminin yönetmeni ve yapımcılığını JJ Abrams. Anne Hathaway and Ewan McGregor'un üstlendiği bir dinozor filmi, sıradan bir banliyöde yaşayan sıradan ebeveynlerdir - tek sorun, mahallenin bir şekilde ilkel bir vahşi doğaya ışınlanmış olmasıdır. Abrams:   "Jurassic filmlerini herkes kadar seviyorum ama onlar uzak adalardaki güzel ormanlarda geçiyor. David'in yaklaşımı sıradan banliyö yaşamını dinozorlarla yan yana getirmekti."

## 7. The Wrong Girls (7 Ağustos ABD - 14 Ağustos Birleşik Krallık)
İki arkadaş çok fazla ot içer ve tehlikeli bir suç yeraltı dünyasına düşer: "Up in Smoke"den "Pineapple Express."ye kadar türün yalnızca erkeklere özel oyuncu kadrosu geleneğini bozan ender örneklerden biri. Kristen Stewart and Alia Shawkat, deneysel mucize ilaçlardan oluşan bir sevkiyatla karşılaşan tembel ikiliyi canlandırıyor;  Seth Rogen and Kumail Nanjiani halüsinasyonları sırasında konuşan kedileri seslendiriyor. Yazar-yönetmen Dylan Meyer :   "Çekim boyunca bunların benim anılarım olduğuna dair şaka yaptım; filmde dev mürekkep balıkları ve telepati olduğu için bu oldukça komik."

## 8. Union County (21 Ağustos, ABD/Kanada)
Will Poulter and Noah Centineo, Ohio kırsalında ayık kalmaya ve hapishaneden kaçınmak için işlerini sürdürmeye çalışan iki opioid bağımlısı kardeşi canlandırıyor. İlk kez yazar-yönetmen olan Adam Meeks, Ohio'da büyüdü; İyileşme programındaki diğer kişilerin neredeyse tamamı, kendi hikayelerini anlatan profesyonel olmayan aktörlerdir.  Chase Hutchinson - The Wrap :   "Film her duyguyu hak ediyor; o kadar sessiz bir insanlıkla dolu ki, sanki onlarla aynı masada oturuyormuşsunuz gibi hissediyorsunuz."

## 9. Coyote vs Acme (26–28 Ağustos, uluslararası)
Hiç göreceğimizi düşünmediğimiz bir film.  This Roger Rabbit tarzı canlı aksiyon – 2D animasyon hibriti Wile E. Coyote and the Roadrunner'ye odaklanır: klasik çizgi filmlerde Coyote sürekli olarak arızalı aletler satın alır ve bu sefer bunları satan şirkete dava açar;  Will Forte avukatını oynuyor.  Warner Bros, filmi üç yıl önce vergi indirimi nedeniyle rafa kaldırdı (" Batgirl " örneğinde olduğu gibi); şimdi bağımsız bir şirket tarafından piyasaya sürülüyor.  Screenwriter Samy Burch :   "There's a beauty in trying even after failing a hundred times."

## 10. The Magic Faraway Tree (21 Ağustos, ABD/Kanada)
"Paddington 2" ve "Wonka," kitaplarının ortak yazarı Simon Farnaby, Enid Blyton'nin klasik çocuk romanlarını modernleştiriyor. Mucit bir çift (Claire Foy and Andrew Garfield), üç çocuğunu internetten uzaklaştırmak için kırsal kesimdeki ücra bir kulübeye taşıyor; Çocuklar, dalları başka dünyalara açılan kapılar olan bir ağaç keşfederler. Silky (Nicola Coughlan), Moonface (Nonso Anozie), Dame Washalot (Jessica Gunning) ve kötü Dame Snap (Rebecca Ferguson) da kadroda yer alıyor.  Time Out'den Phil de Semlyen :   " A smart update of Blyton's stories for the smartphone age. "`,
    image: "/__l5e/assets-v1/1888ebd5-2a74-4f79-88f5-981ada8aa718/2fcf98a1ee08.webp",
    source: "BBC Culture",
  },
  {
    slug: "game-of-thrones-en-iyi-10-ani",
    title: "Game of Thrones'un En İyi 10 Anı: Büyük Savaşlar Değil, Fırtına Öncesi Sessizlikler",
    excerpt: "Giddy Up America'nın seçkisi, dizinin dev sahnelerini bir kenara bırakıp her şeyin patlak vermesinden önceki küçük gerilim anlarına odaklanıyor: havlayan köpeklerden Roose Bolton'ın zırhına, Littlefinger'ın yüzündeki o ifadeye.",
    body: `Game of Thrones'nin mirasından bahsetmek kolay değil: bir yanda destansı savaşlar, şok edici ölümler ve nefes kesici bölümler; diğer yandan, kendisinden önceki her şeyle çelişen aceleye getirilmiş bir final.  But the liste oluşturucunun önerisi şu: Dizinin gerçek gücü fırtınadan önceki o küçük anlarda yatıyor. Havai fişekler hafızalarda kalanlardı ama asıl canımı sıkan şey genellikle patlamadan hemen önceki sessizlikti.

## 10. The Mountain, Oberyn'in bacağını kaydırıyor —   " The Mountain and the Viper "   (S4, E8)
Red Wedding'den sonra Westeros'a gelen The Prince of Dorne, Tyrion'un şampiyonu olarak neredeyse bir sürprizi başardı. Ancak adamımız kutlamaya beş metre erken başladı; bir çaylak hatasıydı. Bakmadığı zamanlarda Dağ önce gözlerini, sonra da kafatasını aldı.  Watching the Yeni, yeni bir karakterin ve Lannisterlara karşı potansiyel bir gücün ani ölümü zor bir sahneydi.

## 9. Jon, Rickon'un ölümünü izliyor —   " Battle of the Bastards "   (S6, E9)
İkinci ders: Bir psikopattan düz bir çizgide koşmayın. Rickon oku sırtına aldı ve Jon dikkatlice hazırladığı planını pencereden dışarı fırlatarak Ramsay'in ordusuna tek başına saldırdı. Dirilişinden bu yana soğukkanlı görünen Jon'un duygularına teslim olması hem şaşırtıcı hem de ona çok yakışan bir hareketti.

## 8. Serçeparmak sırasının geldiğini fark eder —   " The Dragon and the Wolf "   (S7, E7)
Stark kardeşlerin yedinci sezonda yeniden bir araya gelmesi beklendiği gibi sonuç vermedi; Sansa and Arya arasındaki gerilim seyirciyi yordu. Sonra ikisi de bizi kandırdı, Serçeparmak da. Yedi sezondur gölgelerde entrikalar çeviren adamın, yargılananın Arya değil kendisi olduğunu anlayınca yüzünde oluşan ifade, dizinin en tatmin edici karelerinden biri.

## 7. Margaery, Cersei'nin duruşmasına gelmeyeceğinden şüpheleniyor —   " The Winds of Winter "   (S6, E10)
The Sparrows, Westeros'un zihnini ele geçirmişti ve Cersei hariç herkes Cersei'nin duruşmasına gelmişti. Margaery, High Sparrow'nin göremediği tehlikeyi gördü ve herkesi oradan çıkarmaya çalıştı. Dinlenmedi. Sonra hepsi öldü.  Except Cersei.

## 6. Tormund, Brienne'in şövalye olmadığını öğrenir —   " A Knight of the Seven Kingdoms "   (S8, E2)
Bir sistemin dışında yaşayanlar onun kusurlarını en iyi şekilde görebilirler. Jaime'nin Brienne'e şövalyelik yapması kusurlu sekizinci sezonun en dokunaklı anıydı; ama Tormund'un "Why isn't Brienne a knight?" tepkisi asıl belirleyici oldu.

## 5. Gece Nöbetçileri korucuları White Walkers —   " Winter is Coming "   (S1, E1) tarafından bırakılan cesetleri bulur.
Dizi Starklar, Lannisterlar veya ejderhalarla değil, Wall and a Wight'ın kuzeyinde titizlikle düzenlenmiş gövdelerle açıldı. Bu, yapımcıların diziyi başlatmak için seçtiği yoldu; hikaye daha sonra başka bir yere gitse bile, bir diziyi başlatmanın en iyi yollarından biri bu.

## 4. Daenerys, Lekesizleri satın alırken köle tüccarını kandırıyor —   " And Now His Watch Has Ended "   (S3, E4)
İlk iki sezonda Daenerys'in hafife alınmaması gerektiğini öğrenmiştik: O, ateşe giren ve üç ejderha yavrusuyla ortaya çıkan biriydi.  But the an Lekesizler karşılığında bir ejderha vermeye istekli görünüyordu ve ardından tüccara oynadığı numara, itibarını kalıcı olarak güçlendiren sahne oldu.

## 3. Catelyn Stark, Roose Bolton'nin zırhını görür ve İkizlerde ne olduğunu anlar —   " The Rains of Castamere "   (S3, E9)
Red Wedding'de hepimiz şoktaydık; Catelyn değildi. Roose and ile göz teması kurduğu an, ihanetin ikinci izlemede çok daha net bir şekilde ortaya çıkan bir ayrıntı olduğunu doğruladı: Her şey o kadar hızlı ve karanlık oluyor ki, ilk seferde gözden kaçıyor. Ders: Anneni dinle.

## 2. Köpekler Hardhome —   " Hardhome "   (S5, E8) noktasında havlamaya başlar.
Liste yapıcının favori savaşı. Son yirmi dakikası bir korku-aksiyon filmi gibidir: Köpekler havlamaya başladığında, rüzgar döndüğünde, "Close the gates!" komutu geldiğinde ve her seferinde birisi kapıya varmadığında her şey planlanmış gibi görünür.  Then the Night King, Jon and'ye bakar ölüyü diriltir: gösterinin söylediği an   " we're not kidding. "

## 1. Daenerys Westeros'a yelken açıyor —   " The Winds of Winter "   (S6, E10)
Nihayet. Altı sezon boyunca çölleri aşıp yakalandıktan, ölümden kaçtıktan ve ejderhaları yetiştirdikten sonra Daenerys nihayet Westeros'a doğru yelken açıyordu. Her zaman büyük ölçekli olan gösteri, bu andan itibaren daralmaya başladı, hikayeler nihayet birbirine bağlanmaya başladı ve gemi filosuna eşlik eden akıcı müzik, serinin en muhteşem finali oldu.`,
    image: "/__l5e/assets-v1/856a6902-7d72-4e6d-8395-dde39eed016c/9ed45e0eb91b.jpg",
    source: "Giddy Up America",
  },
  {
    slug: "mark-ruffalo-en-iyi-15-filmi",
    title: "Mark Ruffalo'nun En İyi 15 Filmi: Spotlight'tan Zodiac'a",
    excerpt: "Metacritic, Mark Ruffalo'nun kariyerini eleştirmen puanlarına göre sıraladı. Bağımsız dramlardan Marvel'ın gişe canavarlarına, adalet arayan gazetecilerden Viktorya dönemi komedilerine uzanan 15 film.",
    body: `Mark Ruffalo, hem bağımsız sinemada hem de dünyanın en büyük film serisinde eşit kolaylıkla var olabilen ender oyunculardan biridir. Metacritic, eleştirmen puanlarına göre Ruffalo'nin en iyi 15 filmini sıraladı; geri sayıyoruz.

## 15. Collateral (2004)
![Collateral](/__l5e/assets-v1/ef582f8a-ca37-4614-9116-89bbb74578f6/5561bce62a75.webp)
Ruffalo, Michael Mann'nin gerilim dolu suç geriliminde LAPD dedektifi Ray Fanning'yi canlandırıyor. Tom Cruise and Jamie Foxx tarafından çekilen bir filmdeki rolü küçük olsa da, Ruffalo, Mann'ın gece filmi Los Angeles.'de unutulmaz bir varlık bırakıyor.

## 14. Where the Wild Things Are (2009)
![Where the Wild Things Are](/__l5e/assets-v1/ab3524f0-6f62-4630-a95e-30e6446b3e84/d0f48de7e7c5.webp)
Spike Jonze'nin Maurice Sendak klasiğinin melankolik uyarlaması.  Hayal gücü büyük ve duyguları daha da büyük olan sekiz yaşındaki Max'in adasına giden On the, çocukluğun kırılganlığını çerçeveleyen yetişkinlerin dünyasını temsil ediyor.

## 13. What Doesn't Kill You (2008)
![What Doesn't Kill You](/__l5e/assets-v1/7cb5952e-b2c0-445f-9281-51fb2832bf6d/eb4d9ed77fc9.webp)
Az görülen ancak eleştirmenlerce beğenilen bir suç draması.  Ruffalo and Ethan Hawke, South Boston'nin zorlu sokaklarından kaçmaya çalışan küçük çaplı suçluları canlandırıyor; Hayatlarını düzeltmeye yönelik girişimleri beklendiği gibi gitmez.

## 12. Arco (2025)
![Arco](/__l5e/assets-v1/6ff81be6-c695-4abb-b305-1136618d6bbe/e0bbb0c00f29.webp)
The French animasyonu, dinozorları görmek için 2932'nin ütopik dünyasından zamanda geriye yolculuk eden 10 yaşındaki Arco'nin hikayesini anlatıyor. Çocuk hedefini ıskalayıp 2075 yılına iniyor. Ruffalo İngilizce seslendirme kadrosunda yer alıyor.

## 11. Mickey 17 (2025)
![Mickey 17](/__l5e/assets-v1/fac62ba2-5a21-4c9f-a050-b413d2a31f80/e609888ed199.webp)
In Bong Joon -ho'nun kıyamet sonrası bilim kurgu komedisi Ruffalo, bir buz gezegenini kolonileştirme misyonunun başı olan Kenneth Marshall'yi canlandırıyor: kibirli ve komik bir kötü adam, açıkça Trump'a gönderme yapıyor.

## 10. Dark Waters (2019)
![Dark Waters](/__l5e/assets-v1/79191e30-c3f9-4329-ac5e-edf38c110c83/2431965d2b44.webp)
Todd Haynes 'gerçek olaylara dayanan hukuki gerilim filmi.  Ruffalo, kimyasal kirlilik nedeniyle DuPont'la yıllarca süren bir mücadeleye giren çevre avukatı Robert Bilott'yi canlandırıyor; aynı zamanda filmin yapımcılığını da üstleniyor.

## 9. Thor: Ragnarok (2017)
![Thor: Ragnarok](/__l5e/assets-v1/11d7f3c1-093f-4282-a57b-576c77e30952/697dde5d4dea.webp)
Taika Waititi'nin üçüncü Thor filmi serinin tonunu tamamen komediye çeviriyor.  Ruffalo'nin Hulk'ı burada ilk kez tamamen konuşan, huysuz ve komik bir karaktere dönüşüyor.

## 8. Avengers: Endgame (2019)
![Avengers: Endgame](/__l5e/assets-v1/75150622-ece0-4303-ad41-2e8f7c1b1752/749cdf71280c.webp)
MCU'nin ilk on yılının destansı finali ve bir süre için tüm zamanların en çok hasılat yapan filmi.  Ruffalo'nin "Professor Hulk"si, karakterin uzun yolculuğunun mantıksal ve şaşırtıcı derecede duygusal doruk noktasıdır.

## 7. Zodiac (2007)
![Zodiac](/__l5e/assets-v1/a20af508-d054-4814-91c2-94ca7e6e353b/a5345100c976.webp)
David Fincher'nin filmi takıntılı bakışlarını Zodiac cinayetlerine çeviriyor.  Ruffalo, davayı amansızca takip eden dedektif Dave Toschi'yi canlandırıyor; "man seeking justice" rollerinin en sabırlılarından biri.

## 6. Foxcatcher (2014)
![Foxcatcher](/__l5e/assets-v1/47bae6b4-e0eb-4dbc-87ef-e4e6daae8608/a40ba325e4aa.webp)
Ruffalo'nin du Pont ailesiyle ilgili iki filminden ikincisi. Olimpiyat şampiyonu güreşçi Dave Schultz rolünden dolayı Best Supporting Actor için Oscar'ye aday gösterildi; sessiz şefkati, fiziksel dönüşümü kadar tartışıldı.

## 5. You Can Count on Me (2000)
![You Can Count on Me](/__l5e/assets-v1/705e115b-fc20-43e6-a110-cdfc91ecf26b/3a74940e0c16.webp)
Ruffalo'nin çıkış yapan rolü Kenneth Lonergan'nin bağımsız dramasında geldi.  Yalnız anne Sammy'nin (Laura Linney tarafından canlandırılan) asi kardeşi As Terry, burada oyunculuğunun gelecekteki tüm damarlarını sergiliyor.

## 4. The Kids Are All Right (2010)
![The Kids Are All Right](/__l5e/assets-v1/e3e43aa3-bbad-404b-b6b4-6f293130c034/c96979583932.webp)
Lisa Cholodenko'nin, Annette Bening and Julianne Moore'nin iki genç çocuklu bir çifti canlandırdığı filmi. Çocuklar biyolojik babaları Paul'u arayıp bulduğunda aile dengesi bozulur;  Ruffalo bu rol için ilk Oscar adaylığını aldı.

## 3. Poor Things (2023)
![Poor Things](/__l5e/assets-v1/949a1a81-4dd1-4df5-b18d-f17daad197b2/8f0048c37848.webp)
In Yorgos Lanthimos 'Viktorya dönemi komedisi Ruffalo, Bella Baxter'yi (Emma Stone) kaçıran züppe avukat Duncan Wedderburn'yi canlandırıyor. Kariyerinin en abartılı, en açık komedi performansı ve bir başka Oscar adaylığı.

## 2. Eternal Sunshine of the Spotless Mind (2004)
![Eternal Sunshine of the Spotless Mind](/__l5e/assets-v1/2b5b8bef-026a-48a1-9058-2c50218358c1/b18db8f93010.webp)
In Michel Gondry and Charlie Kaufman'nin hafıza silen hikayesi, Jim Carrey, Clementine'in (Kate Winslet) tüm anılarını silmeye karar verir.  Klinikte işlemi gerçekleştiren teknisyen Stan rolünde Ruffalo, filmin karmaşık insani yönünü taşıyor.

## 1. Spotlight (2015)
![Spotlight](/__l5e/assets-v1/252074f6-d159-4f13-8671-0653bb7409b7/a8a62a9b9e27.webp)
Ruffalo'nin en büyük "justice-seeking" rolü. Boston Globe'nin Spotlight ekibinin bir parçası olarak Catholic Church'nin kötüye kullanım örtbasını ortaya çıkaran araştırmacı gazeteci Michael Rezendes'yi canlandırıyor. Film Best Picture Oscar ödülünü kazandı ve Ruffalo yine adaylar arasında yer aldı.`,
    image: "/__l5e/assets-v1/7cb5952e-b2c0-445f-9281-51fb2832bf6d/eb4d9ed77fc9.webp",
    source: "Metacritic",
  },
  {
    slug: "2026nin-en-iyi-yeni-korku-filmleri",
    title: "2026'nın En İyi 10 Yeni Korku Filmi",
    excerpt: "Rotten Tomatoes, yılın en yüksek puanlı korku filmlerini Tomatometer puanına göre sıraladı. Bir slasher parodisinden Nia DaCosta'nın 28 Years Later devam filmine, 2026'nın en iyi 10 korku filmi.",
    body: `2026, korku sineması için verimli bir yıldı: Kamp slasher'ları, dijital efsaneler, zombi devam filmleri ve klasik perili ev hikayeleri aynı sezonda paylaşıldı. Rotten Tomatoes' Tomatometer sıralamasına göre işte yılın en iyi 10 yeni korku filmi:

## 1. Teenage Sex and Death at Camp Miasma (2026)   —   %98
![Teenage Sex and Death at Camp Miasma](/__l5e/assets-v1/eebe0338-8465-4e8f-918a-f8c76c0ebb7e/57bbe5df91c4.jpg)
Jane Schoenbrun tarafından yönetilen film, yorgun bir slasher serisinin genç bir yönetmene (Hannah Einbinder) devredilmesini konu alıyor. Eleştirmenler filmi " a bloody love letter to the slasher genre. " olarak tanımlıyor. Oyuncu kadrosunda Gillian Anderson and Jasmin Savoy Brown. de yer alıyor

## 2. Obsession (2025)   —   %94
![Obsession](/__l5e/assets-v1/361b868d-d71d-4f8b-9d31-8807b7c5c915/a1bab121c8c0.jpg)
Curry Barker'nin filmi, bir romantikin gizemli "One Wish Willow"yi kırma ve aşkının tam da istediği gibi gerçekleşmesini kazanma arzusuyla başlar. Rahatsız edici olduğu kadar eğlenceli de olmayı başaran nadir bir yapım.

## 3. Send Help (2026)   —   %92
![Send Help](/__l5e/assets-v1/ea20c74d-b01f-4ec4-a2af-3a2f8c5a0227/2f5e1f30913a.jpg)
Sam Raimi'nin, bir uçak kazasından sağ kurtulan ve ıssız bir adaya düşen iki iş arkadaşını konu alan filmi.  Rachel McAdams and Dylan O'Brien, Raimi'nin şeytani mizah anlayışına mükemmel bir uyum sağlıyor.

## 4. Leviticus (2026)   —   %92
![Leviticus](/__l5e/assets-v1/3a157f6c-f63f-44f7-83ff-f4b6214e385f/978edc327881.jpg)
In Adrian Chiarella'nin filminde iki genç, en çok arzuladıkları kişinin, yani birbirlerinin şeklini alan bir yaratıktan kaçmak zorunda kalıyor. Duygusal bir aşk hikayesini akıllı bir canavar konseptiyle birleştiriyor.

## 5. 28 Years Later: The Bone Temple (2026)   —   %91
![28 Years Later: The Bone Temple](/__l5e/assets-v1/9f56e460-b823-4a50-8b4d-bec0c19fe5c6/13e2ac57fd9a.jpg)
Nia DaCosta, Danny Boyle and Alex Garland and'nin kurduğu dünyayı ele geçirir ve onu alt üst eder.  Ralph Fiennes and Jack O'Connell'in performansları filmin dehşetini derinleştiriyor.

## 6. Hokum (2026)   —   %90
![Hokum](/__l5e/assets-v1/4e462f13-13cf-4031-8d85-da58f2b3419e/dab8c4495a3b.jpg)
In Damian McCarthy'nin filmi, romancı Ohm Bauman (Adam Scott), ailesinin küllerini dağıtmak için gittiği ıssız bir handa bir cadı efsanesinin ortasında kalır. Atmosfer folklorundan beslenen klasik bir perili ev hikayesi.

## 7. Backrooms (2026)   —   %87
![Backrooms](/__l5e/assets-v1/51852159-797a-48e7-9067-b20cb762cf48/8f297513098b.jpg)
Kane Parsons'nin ilk uzun metrajlı filmi, YouTube doğumlu eşik koridor efsanesini beyazperdeye taşıyor.  Starring Chiwetel Ejiofor and Renate Reinsve, prodüksiyon korkutucu olduğu kadar hipnotik de.

## 8. We Bury the Dead (2024)   —   %87
![We Bury the Dead](/__l5e/assets-v1/b1092187-4490-40ba-9e99-b5f3db729ecb/4b4150ed1943.jpg)
Daisy Ridley'nin başrol oynadığı film, zombi kinayelerini keder ve kayıp üzerine bir meditasyona dönüştürüyor. Askeri bir felaketin ardından ölüler sadece dirilmez, aynı zamanda avlanırlar.

## 9. Primate (2025)   —   %77
![Primate](/__l5e/assets-v1/1f0e26e8-fe19-43dc-a316-7790c6498083/ba05adef402c.jpg)
Johannes Roberts'nin bu yılın başında vizyona giren filmi, tropik bir tatili ilkel bir hayatta kalma kabusuna dönüştürüyor. Kısa, yalın ve etkili.

## 10. Ready or Not 2: Here I Come (2026)   —   %75
![Ready or Not 2](/__l5e/assets-v1/b8d26bf9-a9c9-4835-9a84-40fd36cd0116/37bd82ed47ee.jpg)
Grace (Samara Weaving), Le Domas ailesinden kaçtıktan hemen sonra seviye atlar. Devam filmi, Weaving'in vahşi enerjisi sayesinde devam filmlerinin lanetini büyük ölçüde kırıyor.`,
    image: "/__l5e/assets-v1/eebe0338-8465-4e8f-918a-f8c76c0ebb7e/57bbe5df91c4.jpg",
    source: "Rotten Tomatoes",
    countdownBadge: "10 → 1 countdown",
  },
  {
    slug: "2026nin-en-iyi-yeni-komedi-filmleri",
    title: "2026'nın En İyi 10 Yeni Komedi Filmi",
    excerpt: "Olivia Wilde'ın The Invite filminden Pixar'ın Hoppers'ına, Rotten Tomatoes'un Tomatometer sıralamasına göre yılın en komik 10 filmi.",
    body: `From Boots Riley'den Olivia Wilde'ye, Pixar'dan Minyonlara: 2026 komedi sineması hem auteur sinemanın hem de büyük stüdyo animasyonlarının aynı anda güçlü olduğu bir yıl. Rotten Tomatoes 'Tomatometer sıralamasına göre yılın en iyi 10 yeni komedisi:

## 1. The Invite (2026)   —   %97
![The Invite](/__l5e/assets-v1/f3c21a03-1544-4142-9c27-d19243bb53f7/2eacf819ef58.jpg)
Olivia Wilde'nin yönettiği In the filmi, evlilikleri dağılmakta olan Joe and Angela, üst kattaki gizemli komşularını akşam yemeğine davet eder. Seth Rogen, Penélope Cruz ve Edward Norton'den oluşan oyuncu kadrosuyla bu yılın en sofistike komedisi.

## 2. The Sheep Detectives (2026)   —   %95
![The Sheep Detectives](/__l5e/assets-v1/df744ded-659b-46e3-89da-89b07c2caa15/a47b73279c60.jpg)
Hugh Jackman her gece koyunlarına polisiye romanlar okuyan bir çobanı canlandırıyor. Emma Thompson and Nicholas Braun'nin de başrol oynadığı film, şaşırtıcı derinlikteki temaları sıcak bir aile eğlence paketiyle birleştiriyor.

## 3. Hoppers (2026)   —   %94
![Hoppers](/__l5e/assets-v1/65df64b1-fb15-4ce7-942c-a3018c9358e6/9270a83231fc.jpg)
Pixar'ın yeni filmi, hayvanlarla konuşmayı mümkün kılan bir bilim kurgu fikrine dayanıyor. Eleştirmenlere göre stüdyonun bugüne kadarki en komik çalışması.

## 4. Toy Story 5 (2026)   —   %92
![Toy Story 5](/__l5e/assets-v1/272b5515-53d7-4935-be21-e9002c3b4537/25353ed7da60.jpg)
Bu kez oyuncaklar ekranlarla yarışıyor. Woody and Buzz'nin geri dönüşü bize, serinin yorgunluğuna rağmen çocukların bu karakterlere hâlâ ihtiyaç duyduğunu hatırlatıyor.

## 5. I Love Boosters (2026)   —   %92
![I Love Boosters](/__l5e/assets-v1/84913933-55b1-41c3-8ebf-f3a460d1cabb/19903ba1cc72.jpg)
Boots Riley'nin başrollerini Keke Palmer, Naomi Ackie ve Taylour Paige'nin paylaştığı yeni filmi, bir kez daha yönetmenin keskin toplumsal hicivini kaotik mizahla birleştiriyor.

## 6. I Want Your Sex (2026)   —   %90
![I Want Your Sex](/__l5e/assets-v1/28e7c32b-c12b-4317-879f-7aa7fe2209e3/6911022747f9.jpg)
One of Gregg Araki'nin en erişilebilir eserleri. Cooper Hoffman'nin canlandırdığı Elliot, kışkırtıcı sanatçı Erika Tracy (Olivia Wilde) için çalışmak üzere bir iş bulduğunda fantezilerinin gerçeğe dönüştüğünü fark eder.

## 7. Minions & Monsters (2026)   —   %89
![Minions & Monsters](/__l5e/assets-v1/3f906c9b-1f22-47f9-8eb7-266751a88e4b/0f0688aa3ee1.jpg)
Minyonlar bu sefer Hollywood tarihini fethediyor: Yıldız oluyorlar, her şeylerini kaybediyorlar ve canavarları dünyaya salıyorlar. Serinin en keyifli bölümü.

## 8. Power Ballad (2026)   —   %88
![Power Ballad](/__l5e/assets-v1/a5d29a70-3ee8-4021-8574-b21c12a5d696/eea1d3fd971b.jpg)
In John Carney'nin filminde, eski günlerini özleyen düğün şarkıcısı Rick (Paul Rudd), solmakta olan erkek grup yıldızı Danny (Nick Jonas) ile tanışır. Şöhretin cazibesini ve bedelini sessiz bir zarafetle anlatıyor.

## 9. GOAT (2026)   —   %82
![GOAT](/__l5e/assets-v1/60f4d837-a93e-4392-a70d-7ebdb318492b/522421cb2e82.jpg)
Sony Pictures Animation'nin tamamı hayvanlardan oluşan dünyasında geçen bir aksiyon-komedi. Steph Curry and Gabrielle Union dahil seslendirme kadrosu işi hallediyor.

## 10. Cold Storage (2026)   —   %81
![Cold Storage](/__l5e/assets-v1/be80a1fc-1a5d-4b7d-90a2-d6d762a03ab3/04595477da0f.jpg)
Joe Keery and Georgina Campbell'nin başrol oynadığı film, eski bir askeri üs üzerine inşa edilmiş bir depolama tesisinde geçen bir B-filmi saygı duruşudur. Liam Neeson benzeri oyuncu kadrosuyla yapışkan ve esprili bir bilim kurgu.`,
    image: "/__l5e/assets-v1/f3c21a03-1544-4142-9c27-d19243bb53f7/2eacf819ef58.jpg",
    source: "Rotten Tomatoes",
  },
  {
    slug: "tum-9-live-action-spider-man-filmi-siralamasi",
    countdownBadge: "9 → 1 countdown",
    title: "Canlı Çekim 9 Spider-Man Filminin Tamamı: En Kötüden En İyiye",
    excerpt: "Nerdist, Spider-Man'in yaklaşık 25 yıllık sinema serüvenini baştan sona sıraladı: Raimi üçlemesinden Amazing ikilisine, Tom Holland dönemine ve gişe hiti Brand New Day'e.",
    body: `*Spider-Man*serisi yaklaşık 25 yıldır sinema tarihinin en başarılı markalarından biri olmuştur.  While the dokuzuncu bölüm,  *Spider-Man: Brand New Day*dünya çapında gişe rekorları kırdı, seri hem çok yüksek zirvelere hem de oldukça düşük diplere ulaştı. Nerdist, Spidey'in konuk oyuncu olarak yer aldığı MCU filmlerini saymadan, dokuz canlı aksiyon filmini en kötüden en iyiye doğru sıraladı.

## 9. The Amazing Spider-Man 2 (2014)   — Marc Webb
![The Amazing Spider-Man 2](/__l5e/assets-v1/be9db875-255f-456e-a895-426757582d18/0a2dc303ac05.webp)
MCU'den yanlış dersler çıkaran bir stüdyonun ders kitabı örneği: karakter, hikaye ve mantıktan önce bir evren inşa etme hevesi.  Jamie Foxx'nin Electro'su Joel Schumacher'nin 90'lardaki Batman'sinden neredeyse tamamen farklı; Andrew Garfield'nin performansına taban tabana zıt bir ton. Bize serideki en iyi Spider-Man takımını vermesi dışında dibi temsil ediyor.

## 8. Spider-Man 3 (2007)   — Sam Raimi
![Spider-Man 3](/__l5e/assets-v1/cb8aacfa-1651-42bb-b7a7-b358ebd0d7d5/eb0c0aa2f454.webp)
Raimi'ye hoşlanmadığı Venom'u dahil etmesi için stüdyo tarafından baskı yapıldı; Zaten iki kötü adam varken, üçüncüsü dengeyi tamamen bozdu.  Thomas Haden Church'nin Sandman'i, özellikle de "birth" sahnesi muhteşem; hafıza kaybı alt planı ve MJ'in çığlık atması yorucu. Dağınık ama asla sıkıcı olmayan, izlenebilir bir kaos.

## 7. The Amazing Spider-Man (2012)   — Marc Webb
![The Amazing Spider-Man](/__l5e/assets-v1/023995bb-cd25-4364-99ae-ab3b90560512/253ad99d5cc2.webp)
Raimi üçlemesinden yalnızca beş yıl sonra gerçekleşen ve esasen maliyetleri düşürmek için yapılan yeniden başlatma.  Garfield'nin oyuncu kadrosu doğruydu ama film "not bad."nin ötesine geçemedi. Daha gerçekçi yaklaşım, serinin cazibesini yok etti; üstelik serinin en kötü kostümüne sahipti.

## 6. Spider-Man: Far From Home (2019)   — Jon Watts
![Spider-Man: Far From Home](/__l5e/assets-v1/ef1db7d1-4bee-4975-9a4d-9c8db6884b77/a58f60149ffc.webp)
MCU'nin zirvedeki durumuna güzel bir örnek: Avrupa gezisi Peter, Ned ve Midtown ekibine bolca keyifli alan açıyor.  Tom Holland and Zendaya'nin kimyası ikna edici, Jake Gyllenhaal'nin Mysterio'su Peter'ın hayatına gerçek zarar veren bir kötü adam. Hologram kabusu dizisi MCU'nin en iyi görsel anlarından biridir.

## 5. Spider-Man: No Way Home (2021)   — Jon Watts
![Spider-Man: No Way Home](/__l5e/assets-v1/6020b1f9-9beb-4561-a0fb-34f9e0808b8e/e37ec691d910.webp)
Kağıt üzerinde çökmesi gereken bir film: kimlik meselesini çözmek, Doctor Strange ile ekip kurmak, iki eski Örümcek Men ve onların kötü adamlarını geri getirmek. Yine de işe yarıyor çünkü mesele yalnızca nostalji değil; biz üç Peter Parkers. Holland'yi de gerçekten önemsiyoruz Peter sonunda Tony Stark'nin gölgesinden çıkıyor.

## 4. Spider-Man (2002)   — Sam Raimi
![Spider-Man (2002)](/__l5e/assets-v1/23041930-1a3f-404c-8208-284d6cb86756/efab32e4e70e.webp)
Neredeyse kusursuz bir başlangıç ​​hikayesi.  Tobey Maguire mükemmel bir dökümdür;  David Koepp'in senaryosu, yıllarca süren Silver Age çizgi romanlarını tek bir filmde yoğunlaştırıyor ve asla aceleye getirilmiyor.  Willem Dafoe'nin Norman Osborn and J.K. Simmons'si J. Jonah Jameson ikoniktir. Dezavantajları: o berbat Goblin kıyafeti yüzeysel bir MJ and.
![Tobey Maguire — Spider-Man (2002)](/__l5e/assets-v1/7ef21f3a-0ec6-4286-a98a-c99543219cfc/0269c0aab256.webp)

## 3. Spider-Man: Homecoming (2017)   — Jon Watts
![Spider-Man: Homecoming](/__l5e/assets-v1/ec16ad67-546c-419d-bf3b-b3e9e008545e/05127d21ee3a.webp)
On beş yıl sonra nihayet gerçekten lise çağında görünen bir Örümcek.  İki orijinal filmden sonra Skipping the örümcek ısırığı akıllıca bir karardı. Bendis'in*Ultimate Spider-Man*çizgi romanlarına yakın olan bu versiyon, aynı zamanda MCU'nin en iyi kötü adamlarından birini Michael Keaton'nin Akbaba'sında da beraberinde getiriyor.
![Spider-Man: Homecoming — Peter Parker](/__l5e/assets-v1/c985e0db-c3cc-4a7f-8623-c83a9efa00eb/213c3727b497.jpg)

## 2. Spider-Man: Brand New Day (2026)   — Destin Daniel Cretton
![Spider-Man: Brand New Day](/__l5e/assets-v1/9fb8e69d-87c6-4722-9e4d-479e0f958ed4/a608ab03f035.webp)
Serinin dokuzuncu filmi hem gişede hem de eleştirmenlerde patlama yaptı. Cretton, Holland'nin Peter'ını sıfırdan inşa ederek daha sokak düzeyinde ve duygusal bir Spider-Man hikayesi anlatıyor; kostüm tasarımı da serinin en iyisi.
![Spider-Man: Brand New Day](/__l5e/assets-v1/340be605-533e-4d18-a46e-cbca408ae9e3/b9c0b4fbec32.webp)

## 1. Spider-Man 2 (2004)   — Sam Raimi
![Spider-Man 2](/__l5e/assets-v1/b5de47ff-47d8-4ee0-bb4c-fc93c44f3306/c9e89900a912.webp)
Zirvede sürpriz yok  Raimi'nin ikinci filmi hala sadece en iyi Spider-Man filmi değil, aynı zamanda tüm zamanların en iyi süper kahraman filmlerinden biri.  Alfred Molina'nin Doc Ock'si trajik ve dehşet vericidir; tren sahnesi türün referans sahnelerinden biridir ve kahramanlık ile kişisel fedakarlık arasındaki gerilim, filmi bir arada tutan gerçek güçtür.
![Spider-Man 2 — pizza sahnesi](/__l5e/assets-v1/a62957eb-bfa9-4284-8e13-f1cdb1ebca2b/45c16c20686e.jpg)`,
    image: "/__l5e/assets-v1/b5de47ff-47d8-4ee0-bb4c-fc93c44f3306/c9e89900a912.webp",
    source: "Nerdist",
  },
  {
    slug: "mcu-oncesi-izlenmesi-gereken-3-x-men-filmi",
    title: "Mutantlar MCU'ya Gelmeden Önce İzlemeniz Gereken 3 Harika X-Men Filmi",
    excerpt: "Samara Weaving'in Emma Frost rolüne seçilmesiyle mutantların MCU yolculuğu hız kazanırken Empire ekibi, seriyi yeniden ziyaret etmek için en iyi üç durağı seçiyor: X2, Days Of Future Past ve Logan.",
    body: `Bir süredir Marvel Cinematic Universe'nin mutantlara yaklaştığını biliyorduk.*X-Men '97*ile bir X-Men anlatımı zaten MCU şemsiyesi altında devam ediyor; üstüne Samara Weaving'nin telepat Emma Frost rolü için seçildiği haberi geldi. Dolayısıyla türü başlatan diziye dönüp bakmak için daha iyi bir zaman olamaz. Ancak tüm X filmleri eşit yaratılmadı; Empire'ın uzmanları yeniden izlenmeye en değer üç filmi seçti.

##  X2 (2003)   — Bryan Singer
![X2](/__l5e/assets-v1/af368ed6-e055-40c1-beff-62db847a2984/12a4791602ce.avif)
**Süre:**2 sa 15 dk ·  **Platform:**Disney +   ·  **Oyuncular:**Patrick Stewart , Hugh Jackman , Ian McKellen , Halle Berry, Famke Janssen, James Marsden

İlk*X-Men*başlı başına iyi bir film, ancak ikinci taksitin yaptığı sıçrama yadsınamaz. Aksiyon daha büyük, ölçek daha geniş ve film, karakterlerin derinliklerine iniyor: Wolverine, Jean Grey'nin telekinetik güçlerinin yaklaşmakta olan kıyametin fısıltısı olan 'Silah X' projesi tarafından örtülen geçmişini ortaya çıkarıyor.  From the, White House'nin (merhaba Nightcrawler!) X-Mansion'a yapılan saldırıya, Alkali Lake'deki Lady Deathstrike hesaplaşmasına sızmasını başlatıyor; baştan sona klasik bir çizgi roman filmi. Bunun da ötesinde, Profesör X ve Magneto arasında Brian Cox'nin William Stryker and the operatik satranç oyunu var. Sinematik şah mat.

&nbsp;

##  X-Men: Days Of Future Past (2014)   — Bryan Singer
![X-Men: Days Of Future Past](/__l5e/assets-v1/efa14035-7198-40ae-991f-16ae36ffc882/648e0b002144.avif)
**Süre:**2sa 13dk ·  **Platform:**Disney +   ·  **Oyuncular:**Hugh Jackman , James McAvoy , Michael Fassbender , Jennifer Lawrence, Halle Berry, Nicholas Hoult

MCU çoklu evrenlerle oynamaya başlamadan çok önce, iki nesil mutant devasa bir zaman yolculuğu hikayesinde bir araya geldi. Chris Claremont and John Byrne'nin iki bölümlük çizgi roman akışından gevşek bir şekilde uyarlanan film, adamantium pençeli Kanadalıyı, Mystique'nin bir senatöre suikast düzenlemesini ve robot kıyametini engellemesi için 1973'e gönderiyor.  From the acımasız açılış Sentinel mücadelesinden ağır çekim Quicksilver hapishane kaçışına kadar seri, bir hayranın isteyebileceği her şeye sahip. Logan'nin 1973'teki şaşkınlığı kadar ("someone gave you some really bad acid"), X-Men'nin bilinen karmaşık siyasi manzaralarını tırmalamaktan çekinmiyor.

&nbsp;

##  Logan (2017)   — James Mangold
![Logan](/__l5e/assets-v1/af368ed6-e055-40c1-beff-62db847a2984/12a4791602ce.avif)
**Süre:**2 sa 20 dk ·  **Platform:**Disney +   ·  **Oyuncular:**Hugh Jackman , Patrick Stewart , Dafne Keen , Stephen Merchant

Hugh Jackman teknik olarak*Deadpool & Wolverine*ile geri döndü, ancak James Mangold'nin melankolik başyapıtı*Logan*hâlâ sinemanın en tanımlayıcı çizgi roman karakterlerinden biri olan*Shane*'ye mükemmel bir final sunuyor:*Shane*-esque Western veda.  Yetişkinler için X-Men; küfürden, aşırı şiddetten ve yoğun duygulardan çekinmez.  Alzheimer hastalığıyla telepatik güçlerini birleştirerek kendisini bir kitle imha silahına dönüştüren Charles Xavier, sonunda ölümlülüğün kendisini yakaladığını kabul eden Logan ve Dafne Keen'nin 'X-23' rolündeki vahşi performansı, yirmi yıl sonra bile seriye yeni bir damar açıyor. Tek kelimeyle: X-olağanüstü.

&nbsp;`,
    image: "/__l5e/assets-v1/88a22799-7f90-4ed3-9e8b-290c67f0080d/f431798f6130.avif",
    source: "Empire",
  },
  {
    slug: "brand-new-day-oncesi-3-spider-man-disi-tom-holland-filmi",
    title: "Brand New Day'den Önce İzlenecek, Spider-Man Dışındaki 3 Tom Holland Filmi",
    excerpt: "On yıldır MCU'nun tek Spider-Man'i olan Tom Holland, ağ fırlatan kahramanın çok ötesinde bir oyuncu. Empire ekibi, onun Spider-Man dışındaki en iyi üç filmini seçti.",
    body: `Adı Tom Holland ve son on yıldır Marvel Cinematic Universe'nin tek Spider-Man'si oldu — yakında*Spider-Man: Brand New Day*ile geri dönecek. Ancak dünya onu en iyi mahallenin dost canlısı süper kahramanı olarak tanırken, İngiliz yıldızda Peter Parker. While'den çok daha fazlası var.*The Odyssey*'deki çalışmalarına hayran olmaya devam ediyoruz. Empire'ın uzmanları onun Örümcek olmayan en iyi üç filmini seçmek için arşivleri araştırdı.

##  The Impossible (2012)   — J.A. Bayona
![The Impossible](/__l5e/assets-v1/18b55c5e-99f6-4183-b856-d3cb8a0d15c4/4bece403b6be.avif)
**Çalışma Süresi:**1sa 54 dk ·  **Oyuncular:**Ewan McGregor , Naomi Watts , Tom Holland

*Billy Elliot*günlerine daha yakın olan daha genç bir Tom Holland, 2004'te Tayland'ı vuran Boxing Day tsunamisine yakalanan İngiliz bir ailenin gerçek hikayesinde başrolde. In Bayona'nin ellerinde, film hem nefes kesici hem de yorucu derecede üzücü: Felaketin fiziksel dehşeti ve bir ailenin birbirini bulma mücadelesi aynı anda var oluyor. sahne.  Holland'nin buradaki olgunluğu, yıllar sonra taşıyacağı dramatik ağırlığın ilk kanıtıdır.

##  The Lost City Of Z (2016)   — James Gray
![The Lost City Of Z](/__l5e/assets-v1/fe639fdd-2cd3-4b14-a4da-8c1a6adf36b7/1aeb7ceb512a.avif)
**Oyuncular:**Charlie Hunnam , Robert Pattinson , Sienna Miller , Tom Holland

Amazon'da kayıp bir medeniyetin peşine düşen kaşif Percy Fawcett'nin hikayesi;  Holland, babasının takıntısına derin bir kırgınlıkla bakan, sonra yavaş yavaş dünyayı onun gözlerinden görmeye başlayan oğlunu canlandırıyor. Hastalık, açlık ve acımasız iklim kadar keşfin güzelliğini de yakalayan, artık nadiren yapılan türden eski moda bir destan. Hunnam and Holland ikilisi ikna edici; aynı zamanda Holland and Robert Pattinson'nin aynı karede olduğu ilk film.

##  The Devil All The Time (2020)   — Antonio Campos
![The Devil All The Time](/__l5e/assets-v1/a018db1b-f3c4-490b-ba9b-522f96f71df6/f3adcb3d62be.avif)
**Çalışma Süresi:**2 saat 18 dk ·  **Platform:**Netflix ·  **Oyuncular:**Bill Skarsgård , Robert Pattinson , Tom Holland , Sebastian Stan , Riley Keough , Jason Clarke

Bir felaket filmiyle açılmasına, yarım düzine MCU filminde başrol oynamasına ve James Gray filminde dramatik kaslarını göstermesine rağmen, izleyicinin "forever young" Tom Holland. In Holland'nin Arvin Russell'si, şiddet, yoğunluk ve yaygın karanlığın bir arada var olduğuna dair algısını paramparça eden şey Campos'un zifiri karanlık Southern Gothic mücevheriydi: şiddet, yoğunluk ve yaygın karanlığın bir arada var olduğu: Sahte din liderlerinin ve seri katillerin insafına kalmış, kanunsuz bir kasabada ağza alınmayacak olanın intikamını almak için ağza alınmayacak bir şey. Üstelik yırtıcı bir vaiz olarak çılgınca dengesiz bir Robert Pattinson var.`,
    image: "/__l5e/assets-v1/8ead4289-bf4d-4794-b90f-101722ad7f3a/c88a28918d19.avif",
    source: "Empire",
  },
  {
    slug: "tum-zamanlarin-en-iyi-zombi-filmleri",
    title: "Tüm Zamanların En İyi Zombi Filmleri: Empire'ın İlk 10'u",
    excerpt: "Night Of The Living Dead'den 28 Years Later'a, Empire'ın 25 filmlik zombi listesinin ilk 10'u: Romero klasiklerinden Train To Busan'a türün en iyileri.",
    countdownBadge: "10 → 1 countdown",
    body: `Zombi filmi sinemanın en esnek türlerinden biridir: Aynı canavar sosyal hiciv, saf komedi ve saf korku için kullanılabilir. Empire,*Night Of The Living Dead*ile*28 Years Later*arasında değişen 25 listeyi derledi. İşte o listenin en iyi 10 filmi.

## 10. Re-Animator (1985)   — Stuart Gordon
![Re-Animator](/__l5e/assets-v1/290a74c4-1721-44a4-a770-de9061acbd1f/2c42985d6e5c.avif)
Bir H.P.'den uyarlanmıştır. Lovecraft hikayesinde film, ölülere bambaşka bir açıdan bakıyor: Jeffrey Combs'nin deli profesörü Herbert West, ölü dokuyu yeniden canlandıran limon yeşili bir sıvı icat ediyor ve çok geçmeden bunu cesetlere uygulamaya başlıyor. Korku ve komedinin ucuz bir karışımı; 80'lerin kanlı standartlarına göre bile aşırı derecede kanlı ve sıkı bir senaryosu onu mide bulandırıcı derecede eğlenceli kılıyor.

## 9. 28 Years Later (2025)   — Danny Boyle
![28 Years Later](/__l5e/assets-v1/4265c7e5-5c4a-49a1-8afc-307940e549a5/7f11841c52a6.avif)
Boyle and Alex Garland'nin başlattığı pandemiye dönüşü beklenen nostalji yolculuğu değil: Karantinaya alınmış bir adada büyüyen bir çocuğun gözünden şiddetin, inancın ve acının hikayesi. Görsel cesareti ve son hamlesiyle serinin en çok tartışılan bölümü.

## 8.   [REC]   (2007)   — Jaume Balagueró , Paco Plaza
![REC](/__l5e/assets-v1/3e23697b-318e-4706-a9d1-8a563e43be05/941e53d15ab6.avif)
Buluntu korku filminin en verimli örneği: Barselona'da karantinaya alınmış bir apartman, tek kamera ve giderek daralan koridorlar. Sondaki tavan arası sahnesi türdeki en çok kopyalanan korku anlarından biridir.

## 7. Braindead (1992)   — Peter Jackson
![Braindead](/__l5e/assets-v1/e33abd64-309c-48e5-ba5d-a05f2a0a5d5a/a0eb49fe5f88.avif)
Peter Jackson Orta Dünya'dan önce: Çim biçme makinesiyle sinema tarihinin en kanlı filmlerinden biri. Saçma sapan komediyi saçmalığın sınırlarına kadar zorlayan mutlu bir çılgınlık.

## 6. Night Of The Living Dead (1968)   — George A. Romero
![Night Of The Living Dead](/__l5e/assets-v1/86ba50b1-b09f-461a-8cf9-39362ea03c64/d6b42944dbad.avif)
Türü icat eden film.  Black-and -beyaz, düşük bütçeli ve hâlâ acımasız; kuşatılmış bir çiftlik evini 60'ların Amerika'sındaki ırk ve otorite gerilimlerinin laboratuvarına dönüştürüyor. Sonu sinemanın en soğuk final sahnelerinden biridir.

## 5. Train To Busan (2016)   — Yeon Sang -ho
![Train To Busan](/__l5e/assets-v1/c0569d98-5073-4bec-b7f7-d01705285212/fd54dee5d475.avif)
Hızlı trende geçen bir pandemik filmi olarak mükemmel hazırlanmış bir gerilim filmi; ama asıl gücü karakterleri için harcadığı zamanda yatıyor. Sınıf eleştirisini ve babalık melodramını aynı arabada buluşturan, sonunda izleyiciyi perişan eden modern bir klasik.

## 4. Shaun Of The Dead (2004)   — Edgar Wright
![Shaun Of The Dead](/__l5e/assets-v1/c7ab4a84-df4f-49b3-842d-dc42cbf3e3d8/07dc0ed05145.avif)
Zombi komedisinin mihenk taşı: Romero'ya yazılmış bir aşk mektubu kadar keskin bir İngiliz taşra hicvisi. Wright'ın kurgu ritmi, plak atma sahnesi ve "let's meet at the Winchester when all this blows over" fikri türü kalıcı olarak değiştirdi.

## 3. 28 Days Later (2002)   — Danny Boyle
![28 Days Later](/__l5e/assets-v1/b0c15ae5-f2b7-4a93-b4fc-6697c745cb00/75db7b9f8110.avif)
Boş Londra sahneleriyle açılan, dijital videonun cesaretini estetiğe dönüştüren film, koşan zombileri ana akım haline getirdi.  But the Gerçek korku pandemiden değil hayatta kalanlardan, özellikle de askeri üsteki insanlardan geliyor.

## 2. Day Of The Dead (1985)   — George A. Romero
![Day Of The Dead](/__l5e/assets-v1/5f308f2e-18a3-4845-8ad0-c78e7aed27ab/8311f6fd1fa1.avif)
Romero'nun en karamsar ve radikal filmi: Bir yeraltı sığınağında bilim ve ordu birbirini yutarken, Bub adlı bir zombi filmin en insani karakteri haline gelir.  Tom Savini'nin makyaj çalışmaları hâlâ efsane.

## 1. Dawn Of The Dead (1978)   — George A. Romero
![Dawn Of The Dead](/__l5e/assets-v1/84233674-bedb-40c3-bd58-edfe172ed017/cb5f9cbaf90f.avif)
At the top, tüketim toplumunun mezar taşıdır: Bir alışveriş merkezine sığınan hayatta kalanlar, cennet olduğunu düşündükleri yerin kendi tuzakları olduğunu keşfederler. Hem tür sineması hem de keskin hiciv; zombi filmini metafor makinesine dönüştüren film.`,
    image: "/__l5e/assets-v1/a476ef2f-dcb2-46d9-b2fd-b1f25ff5d8cd/905c449f6930.avif",
    source: "Empire",
  },
  {
    slug: "2026-nin-en-iyi-10-oyunu",
    title: "2026'nın En İyi 10 Oyunu (Şimdiye Kadar)",
    excerpt: "Cairn'den 007 First Light'a, Resident Evil Requiem'den Saros'a: Empire'ın yılın ilk yarısındaki en iyi 10 oyunu. 2026, sinema ve oyun dünyasının en çok kesiştiği yıl olmaya aday.",
    countdownBadge: "10 → 1 countdown",
    body: `2026 oyun dünyasında sinema yılı mı olacak? Yılın sadece yarısına geldik ama James Bond yıllardır ilk kez tamamen yeni bir maceraya atıldı —   "007 First Light" dünyanın en ünlü ajanının nasıl doğduğunun hikayesini anlatıyor.   "Resident Evil Requiem" beyazperdeye yakışır bir korku sunuyor ve hatta "Lego Batman" Tim Burton estetiğiyle yeniden doğuyor. Diğer yarışmacılar John Hughes'nin filmografisinden veya "2001"nin yapay zeka paranoyasından ilham alıyor.

Bunların yanı sıra   " classically minded " oyunları da sahnede: Metroidvania'lar, kurşun cehennemi roguelike'ler ve tabii ki   " Pokémon ". İşte Empire'ın sıralaması.

## 10. MIO: Memories In Orbit
![MIO: Memories In Orbit](/__l5e/assets-v1/7fc70a6a-3559-4b88-a68e-079ee72277bf/736b1885c566.avif)
Metroidvania takıntılıları dışında hiç kimse "MIO"den bu kadar fazlasını beklemiyordu; Oyunun son yılların en sürükleyici aksiyon platform oyunu olduğu ortaya çıktı.  As the adlı robot, yalnızca "The Ship" olarak bilinen devasa, çürüyen bir yapıda uyanıyorsunuz ve keşfetmeniz gerekiyor. Ortaya çıkan şey, hayatta kalmak için oynanan son bir kumar ve tek bir insanın yokluğuna rağmen tamamen insani olan bir hikaye. 3D modeller üzerine boyanmış sulu boya görselleri, keskin dövüşler ve zorlu bölüm sonu canavarlarıyla bu oyun, türün yeni standardıdır.

## 9.Lego Batman: Legacy Of The Dark Knight
![Lego Batman: Legacy Of The Dark Knight](/__l5e/assets-v1/c5cb1da0-b555-4d1f-b826-d9e5fcb05b2a/d7ba4c525eaf.avif)
Bir Lego oyunu ne zaman Lego oyunu olmaktan çıkar? " Arkham " serisinin altın günlerinden bu yana gizlice en iyi Batman oyunu olduğunda.  TT Games, binlerce kilidi açılabilir öğe ve yüzlerce karakter yığını yerine iyi anlatılmış bir hikayeyi, sıkı bir oyuncu kadrosunu ve gerçek mekaniği tercih ediyor. Savaşta nüanslar var, yetenekler RPG mantığıyla açılıyor ve Batmobile'de Gotham'nin şaşırtıcı derecede ayrıntılı sokaklarında gezinmek saf bir keyif.

## 8.Pokémon Pokopia
![Pokémon Pokopia](/__l5e/assets-v1/3a2bca2b-525a-4315-b43b-4698d0ed881b/255a1fbcc2f3.avif)
"Animal Crossing"nin Take the yaşam simülasyonu, onu "Minecraft"nin yeniden inşa edilebilir dünyalarıyla karıştırın ve "Pokémon" kalıbına dökün. Sonuç: herkesin en sevdiği mor damla Ditto olarak insanlığın terk etmek zorunda kaldığı bir gezegeni yeniden inşa ettiğiniz büyüleyici bir sanal alan oyunu. Yüzlerce terk edilmiş Pokémon'yi keşfetmek, topluma geri getirmek ve tüm biyomları kendiniz şekillendirmek, günlerce geri gelmenizi sağlar. Tek kusuru: hayatınızı çalacak.

## 7.Pragmata
![Pragmata](/__l5e/assets-v1/63a1be92-ceda-4fe3-b538-55b4f20d3d97/ebc59ab5527b.avif)
Hem haydut bir yapay zekanın istila ettiği ay üssünde geçen bir bilim kurgu destanı hem de huysuz uzay tamircisi Hugh and, evlat edindiği robot kızı Diana arasındaki dokunaklı bir hikaye.  Capcom'nin gerçek dehası savaşta yatıyor: dünyanın ilk birinci şahıs nişancı-gerçek zamanlı bulmaca melezi.  While Hugh ateş ettiğinde, paneli çeviren bir bulmaca kullanarak Diana ile aynı anda düşmanları hacklersin ve açıklıklar yaratırsın. Başka hiçbir şeye benzemiyor ve yapay zeka konusunda şaşırtıcı derecede düşündürücü.

## 6. Cairn
![Cairn](/__l5e/assets-v1/e314c589-662d-4ead-baa8-3a6f261621b2/81e68a7a3c33.avif)
" 127 Hours " veya " Touching the Void " sizi bir kaya yüzüne bakmaktan bile caydırdıysa,   " Cairn " sizi neyi kaçırdığınıza ikna edebilir.  As Aava, Aava'nın uzuvlarını ayrı ayrı kontrol ederek kendi rotanızı çizerek 9.000 metrelik Mount Kami'yi fethetmeye çalışıyorsunuz.  The Game Bakers, tırmanışın teknik becerisi ile açlık, susuzluk ve yorgunluğun yönetimini titizlikle dengeler. Gergin ve talepkar ama tuhaf bir şekilde zen; cel-gölgeli estetiğiyle benzersizdir.

## 5. Mixtape
![Mixtape](/__l5e/assets-v1/06912954-1626-42c9-aa3c-2daafae0c0e9/e66cec6de6a5.avif)
Beethoven & Dinosaur'nin müziğe, 90'ların gençliğine ve güzelce boşa harcanmış bir ergenliğe ağıtı çok tartışıldı: Bazıları buna "not a game," adını verdi, diğerleri onu fazla doğrusal buldu. Haklı değiller ama unutulmaz. Müzik tutkunu Stacey Rockford olarak, lise bitmeden son günlerini en yakın iki arkadaşıyla birlikte yaşıyorsunuz. Sihir tam burada: duygular, anılar, pişmanlıklar ve her an için özenle seçilmiş bir şarkı. Oynanabilir bir John Hughes filmi.

## 4. 007 First Light
![007 First Light](/__l5e/assets-v1/d24119ec-98e0-497e-9cbd-171fdc92c458/7ad885158bbf.avif)
Yeni bir sinematik Bond beklerken, IO Interactive boşluğu takdire şayan bir şekilde dolduruyor. Ian Fleming'nin hikayelerinden ilham alan bu hikaye, 26 yaşındaki James'in   (Patrick Gibson)'nin MI6'ya alımını, eğitimini ve ikonik 00 kodunu nasıl kazandığını anlatan bir "Bond Begins" hikayesi. " Hitman " yaratıcılarından beklenen kusursuz atış-sürüş-gizlilik dengesi olan Moneypenny, Q ve M ile ilk karşılaşmalar ve Lana Del Rey.'den bir açılış şarkısı

## 3.Forza Horizon 6
![Forza Horizon 6](/__l5e/assets-v1/d8a8ab8a-92da-4820-b0f5-7f27f3ed41cc/1839d35db8b9.avif)
"Forza Horizon" uzun zamandır yarış oyunlarını sevmeyenler için bile bir yarış oyunu. Altıncı film bu kez Japonya'da geçiyor: Tokyo'nun sokakları, kırsal huzur ve doğa harikaları bir arada. Japon otomobil kültürüne saygıyla yaklaşıyor; "Tokyo Drift" ve "Initial D"ye çok sayıda gönderme var. 500'den fazla ayrıntılı araç ve yüzlerce yarışla, motor tutkunları için türün zirvesi, diğerleri için ise bu geniş dünyayı amaçsızca dolaşmanın meditasyon dolu keyfi.

## 2.Saros
![Saros](/__l5e/assets-v1/c90e6528-1c88-4254-870c-146beeefc3d8/6aa90a546d03.avif)
Teknik olarak Housemarque'ın "Returnal" oyununun devamı değil ama imajında ​​açıkça görülüyor: zaman döngüsü ve roguelike mekanikler korundu, geri kalanı neredeyse her açıdan geliştirildi. Kurumsal uzay denizcisi Arjun Devraj (Rahul Kohli) olarak, Carcosa'da her seferinde ölen ve gizemli bir şekilde yeniden dirilen kayıp "colonists"yi araştırıyorsunuz. Her denemede güçlenmek ve biraz daha ilerlemek bağımlılık yaratan bir deneme-yanılma döngüsü yaratır. Onu selefinden ayıran şey cilasıdır: Kusursuz bir hassasiyetle dövüşün.

## 1.Resident Evil Requiem
![Resident Evil Requiem](/__l5e/assets-v1/a9279cad-c577-4d9c-926e-ba186320114f/c40d2d0eb487.avif)
Capcom için bir banner yılı. "Pragmata" ve "Monster Hunter Stories 3,"ye rağmen hiçbir şey "Resident Evil Requiem."yi tahtından indiremez. Geri dönen aksiyon kahramanı Leon S. Kennedy and'nin yeni üyesi Grace Ashcroft arasında bölünmüş çift yönlü bir korku hikayesi: Leon, Şemsiye yaratıklarını avlarken Grace, annesinin yıllar önce öldürüldüğü otelde başlayan bir ölüm zincirini araştırır. Üçüncü şahıs olarak Leon'u ve birinci şahıs olarak Grace'i oynamaya teşvik ediliyorsunuz; her iki durumda da dizi yıllardır bu kadar korkutucu olmamıştı. Bazen fotogerçekçi görselleriyle sizi her köşede korkutuyor ve bu yılın şu ana kadarki en iyi oyunu.`,
    image: "/__l5e/assets-v1/6820d01e-c52d-41cd-8296-43f90543e611/f510feeb2ff2.avif",
    source: "Empire",
  },
  {
    slug: "ridley-scott-movies-ranked-worst-to-best",
    title: "Tüm Ridley Scott Filmleri: En Kötüden En İyiye",
    excerpt: "Başarısız İncil uyarlamalarından bilimkurgunun dönüm noktalarına, Rolling Stone 29 Ridley Scott filmini sıralıyor; olağanüstü çeşitlilikteki bu kariyerin zirvesinde Alien, Blade Runner ve Thelma & Louise var.",
    countdownBadge: "29 film sıralandı",
    image: ridleyScottCover.url,
    source: "Rolling Stone",
    body: `Elli yıldır türler arasında Ridley Scott. Across kadar özgürce geçiş yapan çok az film yapımcısı var; o, bilimkurguda simge yapılar, tarihi destanlar, polisiye gerilim filmleri, savaş filmleri, korku filmleri ve samimi karakter çalışmaları yaptı; çoğu zaman ölçek ve atmosfere anında tanınabilen bir hakimiyetle.

Rolling Stone eleştirmenleri A.A. Dowd, David Fear ve Tim Grierson and Emily Zemler, Scott'nin özelliklerini en az başarılı olandan en önemli olana doğru 29. sırada sıraladı. Sonuç, alışılmadık derecede huzursuz bir kariyerin her iki tarafını da yansıtıyor: neredeyse her dünyayı gösteriye dönüştürebilen görsel zanaatkar ve deneyleri her zaman sonuç vermeyen üretken yönetmen.

## 29. Exodus: Gods and Kings (2014)

Kendini adamış oyuncu kadrosu ve anıtsal imgeleri, kör diyalogların ve Musa'nın duygusal açıdan uzaktan yeniden anlatımının üstesinden gelemeyen muazzam bir İncil yapımı.

## 28. Robin Hood (2010)

Russell Crowe'nin acımasız başlangıç ​​hikayesi, maceranın çoğunu tanıdık efsaneden alıp, gösterişli eğlencenin yerini çamurlu siyasi entrikayla alıyor.

## 27. 1492: Conquest of Paradise (1992)

Christopher Columbus.'nin sıkıntılı portresi kadar Vangelis'in müziğiyle de hatırlanan, gösterişli ama çarpıcı biçimde bağlantısız bir tarihi destan

## 26. Legend (1985)

Scott'nin fantastik dünyası hala güzel görünüyor ancak masalsı anlatımı asla Tim Curry'nin olağanüstü Lord of Darkness.'si kadar canlı olmuyor

## 25. Someone to Watch Over Me (1987)

Merkezi ilişkileri ve sınıf gerilimleri az gelişmiş olsa bile Scott'nin neo-noir içgüdülerini gösteren gösterişli bir romantik gerilim.

## 24. Body of Lies (2008)

Leonardo DiCaprio and Russell Crowe, tanıdık politikaları onu Scott'nin en güçlü modern çalışmasının altında tutan kaslı bir casusluk gerilim filminin öncüsü.

## 23. White Squall (1996)

Bu denizcilik çağına girme draması, etkileyici fırtına sahneleri ve ciddi performanslara sahip, ancak erkeklik konusundaki derslerinin de altı çokça çiziliyor.

## 22. Kingdom of Heaven (2005)

Yönetmenin kurgusu inanç, siyasi güç ve kırılgan bir arada yaşama etrafında inşa edilmiş daha zengin bir Haçlı Seferleri destanını ortaya çıkarırken, tiyatro kurgusu tehlikeye atıldı.

## 21. A Good Year (2006)

Manzarası dönüşüm hikayesinden daha ikna edici olan bu hafif romantik komedide Scott and Crowe, Provence için savaş alanlarını değiştiriyor.

## 20. Hannibal ( 2001 )

The Silence of the Lambs'nin psikolojik hassasiyetinden yoksun ama yozlaşmış korkuyu şaşmaz bir üslupla kucaklayan operatik, korkunç bir devam filmi.

## 19. Black Rain (1989)

Michael Douglas, gece görüntüleri, endüstriyel yüzeyler ve katı momentumla desteklenen bu şık suç geriliminde Osaka'nın yeraltı dünyasına giriyor.

## 18. House of Gucci (2021)

Kısmen aile trajedisi ve kısmen kamp gösterisi olan moda evi destanı çılgınca dengesiz ama nadiren sıkıcıdır ve Lady Gaga aşırılıklarına tamamen kendini adamıştır.

## 17. All the Money in the World (2017)

Christopher Plummer'nin petrol patronu J. Paul Getty. olarak geç gelen performansıyla daha da keskinleşen gergin bir adam kaçırma dramı

## 16. Napoleon (2023)

Joaquin Phoenix'nin imparatoru, savaş sahneleri çoğu zaman sıkıştırılmış biyografisini gölgede bırakan bir filmde savaşçı, aşık ve güvensiz bir gösteri olarak tasvir ediliyor.

## 15. Matchstick Men (2003)

Nicolas Cage, Scott'nin dolandırıcılık, babalık ve değişim olasılığı hakkındaki çevik dolandırıcı hikayesinde en kontrollü performanslarından birini sergiliyor.

## 14. Alien: Covenant (2017)

Ön bölüm, acımasız yaratık korkusunu Michael Fassbender'nin ürkütücü ikili performansı ve Scott'nin yaratılışla ilgili giderek kasvetli sorularıyla birleştiriyor.

## 13. The Last Duel (2021)

Jodie Comer.'nin şiddetli performansının yer aldığı, resmen iddialı bir dramada, bir Orta Çağ saldırısı, çelişkili bakış açıları aracılığıyla yeniden ele alınıyor

## 12. Prometheus (2012)

Scott, inanç ve kökenlere dair büyük fikirlerle kozmik dehşete geri dönüyor; gizemler sinir bozucu olabilir ama görüntüler ve korku duygusu kalıcıdır.

## 11. G.I. Jane (1997)

Demi Moore'nin yoğunluğu, kurumsal direniş ve kendini kanıtlamanın fiziksel maliyeti hakkında zorlu, doğrudan bir askeri dramayı yönlendiriyor.

## 10. Gladiator II (2024)

![Paul Mescal and Pedro Pascal in Gladiator II](${ridleyGladiator.url})

Scott, Roma'yı yeni yıldızlarla ve özür dilemeyecek kadar büyük aksiyonla yeniden ziyaret ederek, siyasi entrikalar ve arena gösterisiyle enerjilenen bir devam filmi yaratıyor.

## 9. Black Hawk Down ( 2001 )

Teknik komutası, çökmekte olan bir görevde mahsur kalan askerlerin kafa karışıklığını ve dehşetini yansıtan, şehir savaşının sürükleyici, cezalandırıcı bir anlatımı.

## 8. American Gangster (2007)

Denzel Washington and Russell Crowe, gücün, yolsuzluğun ve disiplinin sabırla haritasını çıkaran genişleyen bir suç destanının karşıt taraflarını işgal ediyor.

## 7. The Counselor (2013)

Once reddedildi, Scott and Cormac McCarthy'nin nihilist gerilim filmi kült bir nesneye dönüştü: sert, tuhaf ve sonuçları konusunda acımasız.

## 6. The Duellists (1977)

Scott'nin ilk filmi, onlarca yıldır süren çekişmeyi resimsel bir sinemaya dönüştürüyor ve kariyerini belirleyecek görsel titizliği zaten sergiliyor.

## 5. The Martian (2015)

Matt Damon'nin mahsur kalan astronotu, Scott'nin felaketten ziyade iyimserlik üzerine inşa edilmiş, kalabalığı memnun eden ender oyununda bilim, zeka ve işbirliği sayesinde hayatta kalıyor.

## 4. Gladiator (2000)

Russell Crowe'den Maximus, Scott'ye modern bir kılıç ve sandalet klasiği kazandırdı: duygusal açıdan doğrudan, teknik açıdan etkileyici ve sonsuzca alıntı yapılabilir.

## 3. Thelma & Louise (1991)

İki kadın kendilerini kısıtlayan hayatlardan uzaklaşıyor ve Scott kaçışlarını komik, öfkeli ve nihayet efsanevi bir özgürlük eylemine dönüştürüyor.

## 2. Blade Runner (1982)

![Harrison Ford on the set of Blade Runner](${ridleyBladeRunner.url})

Yağmurla ıslanan geleceği bilim kurguyu sonsuza dek değiştirdi.  Beneath the'nin yapım tasarımı hafıza, ölümlülük ve yaşamı insan yapan şeyin melankolik bir araştırmasını içeriyor.

## 1. Alien (1979)

![Harry Dean Stanton in Alien](${ridleyAlien.url})

Scott'nin uzaydaki perili ev filmi sabırlı bir terör örneği olmaya devam ediyor. Endüstriyel tasarım, sınıf gerilimi ve ksenomorf, hâlâ tehlikeli hissettiren bir korku filminde birleşiyor.`,
  },
  {
    slug: "na-hong-jin-movies-to-watch-before-hope",
    title: "Hope Vizyona Girerken İzlemeniz Gereken 3 Na Hong-jin Filmi",
    excerpt: "Güney Kore'nin bugüne kadarki en pahalı filmi sinemalara iddialı bir giriş yaparken Na Hong-jin'in filmografisinde bir yolculuğa çıkıyoruz: Kore gerilim ve korku sinemasından üç modern klasik ve onları izleyebileceğiniz platformlar.",
    countdownBadge: "3 film",
    image: nhjCover.url,
    source: "Empire",
    body: `While the haftasının en büyük manşetleri başka bir yere ait; son derece eğlenceli, biraz hantal, gülünç derecede hırslı, neredeyse üç saatlik, gişe rekorları kıran, şu sıralar ilgi bekleyen başka bir bilim kurgu filmi daha var: Na Hong -jin'in gonzo yaratığı özelliği " Hope. "

Şimdiye kadar yapılmış en pahalı South Korean filmi olarak bildirilen Director Na'nin son filminde, North and South Korea arasındaki askerden arındırılmış bölgeye yakın küçük bir kasabada iki polis memurunun gizemli bir yaratığın saldırısına uğraması anlatılıyor; mümkün olan en büyük ekranı gerektiren bir deneyim.

" Hope " multiplekslere doğru ilerlerken, işte Director Na'nin bugüne kadarki filmografisine dair rehberli bir tur: bundan sonra görmeniz gereken üç Na Hong -jin filmi ve bunları nerede yayınlayacağınız.

##  The Chaser (2008)

![The Chaser](${nhjChaser.url})

**Çalışma Süresi:**2 saat 5 dk |  **Yayını:**Prime Video , Arrow Video , Shudder

**Oyuncular:**Kim Yun -seok, Ha Jung -woo, Seo Young -hee, Kim You -jung, Jung In -gi

Thought David Fincher'nin "Se7en" veya "Zodiac" adlı filmi en sarsıcı seri katil gerilim filmleri arasında mıydı? Na'nın çığır açan özelliğindeki inanılmaz derecede acımasız katil, John Doe'nin kıyaslandığında oldukça soğuk görünmesini sağlıyor ve hatta Bong Joon Ho'nin "Memories of Murder"sine parasının karşılığını veriyor. Yağmur ve kanla ıslanmış bir dünyada geçen bu kedi-fare hikayesi, her tarafa yayılan bir umutsuzluk duygusu taşıyor ama aynı zamanda o kadar amansız bir tempoya sahip ve son derece sürükleyici ki, gözlerinizi ondan alamayacaksınız. Kore'nin polisiye ve hukuk sistemlerine yönelik keskin bir eleştiri de eklenince "The Chaser" yeni ve önemli bir film yapımcılığı yeteneğinin ortaya çıkışını inanılmaz derecede net bir şekilde ortaya koyuyor.

##  The Yellow Sea (2010)

![The Yellow Sea](${nhjYellowSea.url})

**Çalışma Süresi:**2 saat 36 dk |  **Satın Al/Kirala:**Apple TV

**Oyuncular:**Ha Jung -woo, Kim Yun -seok, Cho Seong -ha, Lee Cheol -min, Kwak Do -won, Im Ye -won

Yönetmenin kasvetli çizgisini sürdüren bu kaçak adam gerilim filmi, baş taksi şoförü Gu-nam'ı (Ha Jung -woo) çaresizlik dolu bir dünyaya sürüklüyor. Sözleşmeli cinayeti ters gidince, bacaklarını kırmak isteyen gangsterlerle ve onları kırmak isteyen polisle karşı karşıya kalır. Yol boyunca pek çok kanlı bıçak ve parçalanmış kafayla birlikte, topallayarak bir zorlu durumdan diğerine geçen bir adamın acımasız bir anlatımı. 156 dakikalık müthiş süresinin sonunda sizi nefes almak için çaresiz bırakacak terli, terli bir film.

##  The Wailing (2016)

![The Wailing](${nhjWailing.url})

**Çalışma Süresi:**2 saat 36 dk |  **Yayını:**Prime Video

**Oyuncular:**Kwak Do -won, Hwang Jung -min, Chun Woo -hee, Jun Kunimura , Kim Hwan -hee, Heo Jin

Korku türüne tam anlamıyla giren Director Na, 21. yüzyılın en düpedüz dehşet verici filmlerinden birini sundu; yerel bir Japon yabancıyla bağlantılı olduğu anlaşılan, doğaüstü cinayetlerle parçalanan bir South Korean köyünün hikayesinde ilkel bir şeyi kanalize etti. Yerel polis memuru Jong-goo'nun (Kwak Do -won) korkunç cinayetleri araştırmasıyla, film tamamen uyanıkken kabus moduna geçmeden önce bir tür polis prosedürü olarak başlıyor. Muhteşem bir şekilde çekilmiş, inanılmaz derecede atmosferik ve ilkel düzeyde dehşet uyandıran bir son sahneye sahip olan bu 150 dakikalık destan, tüm zamanların meşru bir örneği olmasına rağmen yine de bir şekilde suç teşkil edecek şekilde göz ardı ediliyor. Devam et!`,
  },
];

// Deterministic shuffle so new lists spread across the interleaved homepage feed.
// New EW entries (indices 23-27) are interleaved near the top of the feed.
const _LIST_ORDER = [38, 34, 35, 32, 31, 37, 29, 28, 23, 36, 22, 0, 24, 17, 30, 33, 16, 25, 18, 14, 26, 19, 15, 27, 1, 20, 13, 7, 21, 3, 11, 5, 9, 2, 12, 6, 4, 8, 10];






const newestList = _LISTS_RAW[_LISTS_RAW.length - 1];
export const LISTS: ListItem[] = [
  ...(newestList ? [newestList] : []),
  ..._LIST_ORDER
    .filter((i) => i < _LISTS_RAW.length - 1)
    .map((i) => _LISTS_RAW[i]),
];

export function getList(slug: string) {
  return LISTS.find((l) => l.slug === slug);
}
