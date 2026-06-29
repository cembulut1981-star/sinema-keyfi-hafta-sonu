// Auto-curated news content. Sources: Rolling Stone film news.
import img_practical_magic_2 from "@/assets/news-rs-practical-magic-2.jpg";
import img_blair_witch_reboot from "@/assets/news-rs-blair-witch-reboot.jpg";
import img_tangled_up_in_blue from "@/assets/news-rs-tangled-up-in-blue.jpg";
import img_not_alone from "@/assets/news-rs-not-alone.jpg";
import img_artificial_amazon from "@/assets/news-rs-artificial-amazon.jpg";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  source: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: "practical-magic-2",
    title: "Haber: 'Practical Magic 2' Fragmanı Yayınlandı: Owens Cadıları Lanetle Yüzleşiyor",
    excerpt: "Sandra Bullock ve Nicole Kidman, kült klasiğin devam filminde Owens kardeşler olarak geri dönüyor. Yeni fragman, ailenin genç kuşağının ölümcül aşk lanetini kırmaya çalıştığı macerayı gözler önüne seriyor.",
    body: "Sandra Bullock'un 'Practical Magic 2' fragmanında söylediği gibi, \"İşte sihrin olayı bu, susturulamaz.\" 90'ların kült klasiğinin devam filminden gelen son fragman, sihirle dolu olsa da Owens kardeşlerin her zaman bu duruma hazır olmadığını gösteriyor. Özellikle de Bullock'un canlandırdığı Sally karakterinin.\n\nYönetmenliğini Susanne Bier'in üstlendiği ve Alice Hoffman'ın 2021 tarihli 'The Book of Magic' romanından uyarlanan film, Owens kardeşler Sally (Sandra Bullock) ve Gillian'a (Nicole Kidman) yeniden kavuşmamızı sağlıyor. İkili hala zıt kutuplar: Sally, harika pastalar pişiren ve erkeklerden kaçan sadık bir anne iken, Gillian ise hala Tinder'da kendine eş aramaktadır. Teyzeler Jet (Dianne Wiest) ve Frances (Stockard Channing) de bilgece öğütleriyle geri dönüyorlar.\n\nAncak asıl karmaşa, Owens ailesinin yeni neslinin, yani Sally'nin kızlarının sahneye çıkmasıyla başlıyor. Joey King'in canlandırdığı Kylie Owens, kardeşiyle (Maisie Williams) konuşurken, \"Annemizin, aşık olan herkesin öldüğü hikayeler anlattığı zamanları hatırla?\" diye soruyor. Kylie'nin sevgilisi olduğu düşünülen kişinin bir araba kazası geçirmesinin ardından bu hikayelerin gerçek olabileceğini anlayan ikili, \"laneti düzeltmek\" için bir yolculuğa çıkmak zorunda kalıyor.\n\nElbette Sally ve Gillian da kızların peşine takılarak kendilerini Londra'da buluyor ve burada Lee Pace tarafından canlandırılan yeni bir karakterden yardım istiyorlar. Fragman, aile draması, sihir ve maceranın iç içe geçtiği bir hikaye vadederek hem orijinal filmin hayranlarını memnun etmeyi hem de efsaneye yeni bir sayfa eklemeyi hedefliyor.",
    image: img_practical_magic_2,
    source: "Rolling Stone",
  },
  {
    slug: "blair-witch-reboot",
    title: "Haber: Blair Cadısı Kabusu Geri Dönüyor: Korku Klasiği TikTok Çağına Uyum Sağlayabilecek mi?",
    excerpt: "1999'un kült korku filmi 'Blair Cadısı', yeni nesil için yeniden çekiliyor. Lionsgate'in duyurduğu film, \"bulunmuş görüntü\" konseptini günümüz teknolojisi ve TikTok kuşağına uyarlamaya çalışacak.",
    body: "1999 yılında, ormanda kaybolan bir grup sinema öğrencisinin geride bıraktığı \"bulunmuş görüntüler\" ile sinema seyircisini dehşete düşüren 'The Blair Witch Project' (Blair Cadısı), yeni bir kabus için geri dönüyor. Lionsgate, korku klasiğini modern çağ için yeniden tasarlayacaklarını ve yeni filmin 24 Eylül 2027'de vizyona gireceğini duyurdu.\n\nOrijinal filmin başarısı, büyük ölçüde akıllı telefonların ve sosyal medyanın olmadığı bir dünyada karakterlerin yaşadığı izolasyon ve çaresizlik hissine dayanıyordu. Peki, herkesin cebinde bir GPS ve iletişim cihazı olduğu TikTok çağında bu korku nasıl yeniden yaratılacak? Lionsgate'in başkanı Adam Fogelson, bu projenin \"Blair Cadısı'nı yeni bir nesle tanıtacak yeni bir vizyon\" olacağını belirtse de, henüz senaryo hakkında detaylı bir bilgi paylaşılmadı.\n\nYönetmen koltuğunda, 'Bloody Bites' gibi korku projelerinde yer almış olan Dylan Clark oturacak. Senaryo ise 2022 tarihli 'Texas Chainsaw Massacre' ve 'Cobweb' filmlerinin yazarı Chris Thomas Devlin'e emanet. Clark, Instagram'da yaptığı bir paylaşımda, \"'Blair Cadısı Projesi', beni sinemacılığa başlatan filmlerden biri. Bu dünyaya, yaratımından sorumlu olan bazı insanlarla adım atma fırsatına sahip olmak mutlak bir rüya,\" ifadelerini kullandı.\n\nProjeye olan güveni artıran bir diğer unsur ise, orijinal filmin yıldızları Joshua Leonard ve Michael C. Williams'ın, yönetmenler Daniel Myrick ve Eduardo Sánchez ile birlikte yapımcı olarak projede yer alması. Bu durum, yeni filmin köklerine sadık kalma niyetini gösteriyor. Ancak asıl soru hala geçerliliğini koruyor: Blair Cadısı, dijital çağın gürültüsünde aynı ilkel korkuyu yeniden yakalamayı başarabilecek mi?",
    image: img_blair_witch_reboot,
    source: "Rolling Stone",
  },
  {
    slug: "tangled-up-in-blue",
    title: "Haber: Sürpriz İkili: Kylie Minogue ve Quentin Tarantino Aynı Filmde!",
    excerpt: "Pop ikonu Kylie Minogue ve efsanevi yönetmen Quentin Tarantino, adını Bob Dylan şarkısından alan 'Tangled Up in Blue' adlı filmde başrolleri paylaşacak. Çekimler Galler'de başladı.",
    body: "Yakın zamanda yayınlanan Netflix belgeselinin ardından pop ikonu Kylie Minogue, oyunculuğa geri dönüyor. Kariyerine Avustralya televizyon dizilerinde başlayan sanatçı, yönetmen Jamie Adams'ın yeni filmi 'Tangled Up in Blue'da rol alacak. Ancak filmin asıl sürprizi, Minogue'a eşlik edecek isim: Quentin Tarantino!\n\nAdını Bob Dylan'ın 1975 tarihli 'Blood on the Tracks' albümündeki ikonik şarkıdan alan filmin çekimleri Galler'in Porthcawl kasabasında başladı. Minogue ve Tarantino'nun birlikte bir restoranda görüntülenmesi, sinema dünyasında büyük bir heyecan yarattı. Görünen o ki, son filmini çekmek yerine her şeyi yapmaya kararlı olan Tarantino, bu kez kamera önüne geçmeyi tercih etti.\n\nVariety'nin doğruladığı bilgilere göre filmin zengin kadrosunda ayrıca Jason Isaacs, Allison Williams, Sofia Boutella ve RZA'nın yanı sıra Julian Lewis Jones, Craig Russell gibi Galli oyuncular da yer alıyor. Yönetmen Jamie Adams, Variety'ye verdiği demeçte, Tarantino'ya rolü doğrudan teklif ettiğini anlattı.\n\nAdams, süreci şöyle özetliyor: \"Ona hikayenin taslağını ve bir mektup gönderdim. Bir aktör olarak ona inandığım konusunda çok dürüst davrandım. Benim kullandığım doğaçlama yöntemi, anda kalmak ve organik tepkiler vermekle ilgili. O, en büyük hikaye anlatıcılarından biri. Bunun bir karakter içinde inanılmaz olacağını düşündüm. Geri döneceğini sanmıyordum ama iki hafta sonra menajeri aradı ve Quentin'in ilgilendiğini, bir Zoom görüşmesi istediğini söyledi.\"",
    image: img_tangled_up_in_blue,
    source: "Rolling Stone",
  },
  {
    slug: "not-alone",
    title: "Haber: Timothée Chalamet ve Selena Gomez Uzay Macerasında Buluşuyor: İşte 'Not Alone'",
    excerpt: "Timothée Chalamet ve Selena Gomez, 'Not Alone' adlı yeni animasyon filmi için bir araya geliyor. Film, iki aşık bilim insanının ve evlerine sığınan üç sevimli uzaylının maceralarını anlatacak.",
    body: "Galaksiler arası bir kutsal savaşı konu alan 'Dune' serisinin ardından Timothée Chalamet, bu kez çok daha aile dostu bir uzay macerası için Selena Gomez ile güçlerini birleştiriyor. İkilinin başrollerini seslendireceği yeni animasyon filmi 'Not Alone', 16 Nisan 2027'de izleyiciyle buluşacak.\n\nChalamet'nin bir gece öncesinde roket emojisi eşliğinde yaptığı \"Yarın yeni film duyurusu :) \" şeklindeki gizemli Instagram paylaşımı, hayranlarını heyecanlandırmıştı. Duyurulan proje 'Not Alone', Chalamet'nin ilk uzun metrajlı animasyon deneyimi olacak. Filmde Chalamet, \"içine kapanık bir roket tamircisi\" olan Joe karakterine hayat verirken, Gomez ise \"ilk bitki yakıtlı roketi\" icat eden \"astro-botanikçi\" Fran'i seslendirecek. İkili, roketin ilk fırlatılışı için bir araya geldiklerinde, romantizm konusunda pek de yetenekli olmasalar da birbirlerine aşık olurlar.\n\nHikayeye renk katan ise, Joe'nun evine sığınan Dunk, Welly ve Shirm adındaki üç sevimli uzaylı oluyor. Beceriksiz bir galaksiler arası polis olan Memur Zandro'dan kaçmaya çalışan uzaylılar, gezegenlerine güvenli bir şekilde dönebilmek için Fran'in roketini kullanmayı umuyorlar.\n\nFilmin yıldızlarla dolu seslendirme kadrosunda Chalamet ve Gomez'in yanı sıra, üç uzaylıyı sırasıyla Rob Brydon, Diane Morgan ve Jamie Demetriou seslendiriyor. Memur Zandro'ya 'Ted Lasso'nun yıldızı Brett Goldstein hayat verirken, yardımcı rollerde ise Allison Janney ve Lamorne Morris gibi isimler yer alıyor.",
    image: img_not_alone,
    source: "Rolling Stone",
  },
  {
    slug: "artificial-amazon",
    title: "Haber: Amazon, OpenAI ile Anlaşınca Kendi OpenAI Filmini Rafa Kaldırdı",
    excerpt: "Amazon, OpenAI ile yaptığı ortaklık sonrası çıkar çatışması endişesiyle, Sam Altman'ı konu alan ve Andrew Garfield'ın başrolünde olduğu 'Artificial' filmini iptal etti.",
    body: "Sinema dünyasında nadir görülen bir gelişmeyle Amazon MGM Studios, OpenAI ve kurucusu Sam Altman hakkındaki filmi 'Artificial'dan çekildiğini duyurdu. Andrew Garfield'ın başrolde olduğu ve yönetmenliğini Luca Guadagnino'nun üstlendiği projenin iptali, Amazon'un OpenAI ile milyonlarca dolarlık bir stratejik ortaklığa imza atmasından sadece dört ay sonra geldi.\n\nNeredeyse tamamlandığı ve hatta test gösterimlerinin yapıldığı bildirilen film, Amazon'un yaptığı bir açıklamayla aniden proje ortağı arayışına girdi. Amazon sözcüsü, \"Ödüllü bir sinemacı olan Luca Guadagnino'ya büyük saygı ve hayranlık duyuyoruz. 'Artificial' filminin farklı bir stüdyo tarafından yayınlanması durumunda daha iyi hizmet alacağına inanıyoruz ve filme yeni bir yuva bulmak için yapım ekibiyle yakın çalışıyoruz,\" diyerek dolaylı olarak ortadaki çıkar çatışmasını ima etti.\n\nBu çatışmanın temelinde, Amazon Web Services (AWS) ile OpenAI'nin bu yılın başlarında duyurduğu devasa iş birliği yatıyor. İki şirket, \"üretim ölçeğinde üretken yapay zeka uygulamaları geliştirmek\" amacıyla güçlerini birleştirmişti. Dolayısıyla Amazon'un, yeni ve önemli bir iş ortağı hakkında potansiyel olarak eleştirel bir ton taşıyabilecek bir filmi finanse etmesi ve dağıtması, ticari açıdan sürdürülemez bir durum olarak görüldü.\n\nVariety'nin haberine göre, 'Artificial' şimdiden diğer stüdyolara ve yayın servislerine sunulmaya başlandı. Özellikle OpenAI ile yüz milyarlarca dolarlık anlaşmaları olmayan şirketlerin filme ilgi göstermesi bekleniyor. Bu durum, filmin ilerleyen zamanlarda başka bir platformda izleyiciyle buluşma ihtimalini canlı tutarken, teknoloji ve sanat arasındaki karmaşık ve bazen de çelişkili ilişkilere dair önemli bir örnek teşkil ediyor.",
    image: img_artificial_amazon,
    source: "Rolling Stone",
  },
];

export function getNews(slug: string) { return NEWS.find((n) => n.slug === slug); }