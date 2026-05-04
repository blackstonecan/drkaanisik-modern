// Blog data — locale-agnostic metadata + per-locale content
const BLOG_CATEGORIES = [
  { slug: "coronary-artery-surgery", color: ["#0e3a48", "#0e5e6f"] },
  { slug: "heart-valve-surgery",     color: ["#1a2f3a", "#2c4759"] },
  { slug: "aortic-surgery",          color: ["#142634", "#1f3e54"] },
  { slug: "other",                   color: ["#1c2438", "#2a3a5a"] },
  { slug: "international",           color: ["#3a2218", "#724433"] },
  { slug: "lifestyle",               color: ["#142a30", "#235058"] }
];

const BLOG_POSTS = [
  { slug: "midcab-explained",      cats: ["coronary-artery-surgery"], featured: true,  views: 4218, likes: 187, date: "2026-03-12", read: 6, palette: ["#0e3a48","#0e5e6f"] },
  { slug: "tavi-vs-savr",          cats: ["heart-valve-surgery"],                       views: 3621, likes: 142, date: "2026-02-28", read: 8, palette: ["#1a2f3a","#2c4759"] },
  { slug: "what-is-bentall",       cats: ["aortic-surgery"],                            views: 2188, likes: 96,  date: "2026-02-14", read: 7, palette: ["#142634","#1f3e54"] },
  { slug: "off-pump-bypass",       cats: ["coronary-artery-surgery"],                   views: 1987, likes: 73,  date: "2026-01-30", read: 5, palette: ["#0e3a48","#0e5e6f"] },
  { slug: "patient-journey-de",    cats: ["international"], featured: true,             views: 1642, likes: 88,  date: "2026-01-17", read: 6, palette: ["#3a2218","#724433"] },
  { slug: "after-surgery-life",    cats: ["lifestyle"],                                 views: 1410, likes: 124, date: "2026-01-04", read: 5, palette: ["#142a30","#235058"] },
  { slug: "aortic-dissection-101", cats: ["aortic-surgery"],                            views: 1203, likes: 54,  date: "2025-12-22", read: 9, palette: ["#142634","#1f3e54"] },
  { slug: "atrial-fib-maze",       cats: ["other"],                                     views: 988,  likes: 41,  date: "2025-12-09", read: 6, palette: ["#1c2438","#2a3a5a"] },
  { slug: "sutureless-valves",     cats: ["heart-valve-surgery"],                       views: 924,  likes: 38,  date: "2025-11-26", read: 5, palette: ["#1a2f3a","#2c4759"] }
];

const BLOG_I18N = {
  tr: {
    title: ["Sağlıklı kalbe", " açılan", " ", "kapı."],
    lead: "Hekimin kaleminden, kalp sağlığı, ameliyat süreçleri ve hasta yolculuğu üzerine notlar.",
    countLabel: "yazı yayında",
    popular: "Popüler kategoriler",
    popularSub: "Görüntülenmeye göre",
    all: "Tümü",
    search: "Yazılarda ara…",
    sort: "Sırala", sortRecent: "En yeni", sortPopular: "En popüler", sortLikes: "En beğenilen",
    showing: "Gösterilen",
    of: "/",
    posts: "yazı",
    listHead: ["Tüm", " yazılar"],
    empty: { title: "Sonuç bulunamadı", body: "Aramanızı veya seçili kategoriyi değiştirmeyi deneyin." },
    read: "Yazıyı oku",
    minRead: "dk okuma",
    likeShort: "beğeni",
    viewShort: "görüntülenme",
    by: "Yazar",
    role: "Op. Dr. · Kardiyak Cerrahi",
    backToList: "Tüm yazılar",
    relatedHead: "Benzer yazılar",
    likeBtn: "Beğen",
    likedBtn: "Beğenildi",
    share: "Paylaş",
    cats: {
      "coronary-artery-surgery": "Koroner Bypass",
      "heart-valve-surgery": "Kalp Kapağı",
      "aortic-surgery": "Aort Cerrahisi",
      "other": "Diğer Eriş. Cerrahi",
      "international": "Sağlık Turizmi",
      "lifestyle": "Yaşam Sonrası"
    },
    posts_content: {
      "midcab-explained": {
        title: "MIDCAB nedir? Sternum açılmadan koroner bypass",
        excerpt: "Sol meme altından küçük bir kesiyle yapılan bypass; nasıl çalışır, kimler için uygundur ve iyileşme süreci klasikten neyle ayrılır?",
        body: [
          "Klasik koroner bypass denildiğinde aklımıza önce sternumu (göğüs kemiğini) ortadan açan büyük bir kesi geliyor. MIDCAB — Minimally Invasive Direct Coronary Artery Bypass — bu adımı atlar. Cerrah sol meme altından yaklaşık 6–8 santimetrelik küçük bir kesiyle çalışır; göğüs kemiği bütün kalır.",
          { h2: "Kimler için uygundur?" },
          "MIDCAB özellikle sol ön inen arterde (LAD) tek damar tıkanıklığı olan hastalar için idealdir. Birden fazla damar tutulumu varsa hibrit bir yaklaşım — MIDCAB + perkütan stent — gündeme gelebilir.",
          { h2: "İyileşme süreci" },
          "Sternumu kırmadığımız için ağrı belirgin ölçüde daha azdır. Hastaların büyük kısmı 3–4 gün içinde taburcu olur, 2 hafta içinde ofis işlerine, 4–6 hafta içinde ağır fiziksel aktiviteye dönebilir.",
          { quote: "Hedef damarın açılması her bypass tekniğinde aynıdır; fark, oraya nasıl ulaştığımızdadır." },
          { h2: "Sınırları" },
          "Her hasta MIDCAB için uygun değildir. Anatomik konum, akciğer yapışıklığı, geçirilmiş cerrahi öyküsü gibi faktörler ön değerlendirmede kritiktir. Karar, koroner anjiografi ve göğüs BT görüntülerinin ardından verilir."
        ]
      },
      "tavi-vs-savr": {
        title: "TAVI mı, açık aort kapak ameliyatı mı?",
        excerpt: "Aort darlığında transkateter (TAVI) ve cerrahi (SAVR) seçimi; risk, yaş, anatomi ve dayanıklılık denklemlerinin ışığında.",
        body: [
          "Aort darlığı tedavisinde son on yılın en önemli gelişmesi TAVI oldu. Kalp kateterizasyonuyla, çoğunlukla bacaktaki damardan ilerleyen bir kateter aracılığıyla yeni kapak yerine getirilir; göğüs açılmaz.",
          { h2: "TAVI kimler için?" },
          "Başlangıçta yalnızca açık ameliyatın çok yüksek riskli olduğu hastalar için tasarlandı. Bugün, orta-düşük riskli ileri yaş hastalarda da güvenli sonuçlarla uygulanıyor.",
          { h2: "Açık ameliyat ne zaman?" },
          "Genç hastalar, başka kalp ameliyatına da ihtiyacı olanlar (örn. eşlik eden bypass), kompleks anatomi veya iki yapraklı aort kapağı olanlar için cerrahi (SAVR) hâlâ standart.",
          { quote: "TAVI ile SAVR rakipler değil, aynı amacın iki farklı aracıdır. Hastayı doğru araca yönlendirmek hekimin görevidir." }
        ]
      },
      "what-is-bentall": {
        title: "Bentall prosedürü: Aort kökünün toptan değişimi",
        excerpt: "Aort kökünde anevrizma ve aort kapağında ileri yetersizlik bir aradaysa, Bentall iki sorunu tek seansta çözer.",
        body: [
          "Bentall prosedürü, aort kapağı + aort kökü + asendan aortayı tek bir kompozit greftle değiştiren cerrahidir. Tipik aday: aort kökü genişlemiş, kapağında ileri yetersizliği olan hasta.",
          { h2: "Cerrahi adımlar" },
          "Hastalıklı doku çıkarılır; mekanik ya da biyolojik kapak içeren tübüler bir greft yerleştirilir; koroner damar ağızları greft üzerine yeniden ekilir.",
          { h2: "Sonuçlar" },
          "Modern Bentall serilerinde 30 gün mortalite %2 altındadır. Uzun dönem sağkalım, kapak seçimine ve hasta uyumuna doğrudan bağlıdır."
        ]
      },
      "off-pump-bypass": {
        title: "Off-pump bypass: Atan kalpte cerrahi",
        excerpt: "Kalp-akciğer makinesi olmadan, kalp atmaya devam ederken yapılan bypass; avantajlar, sınırlar ve hasta seçimi.",
        body: [
          "Off-pump CABG, klasik bypassın ana farkı olarak kalp-akciğer makinesinin devre dışı bırakılmasıdır. Kalp ameliyat sırasında atmaya devam eder; cerrah özel stabilizatörlerle hedef damar bölgesini sabitler.",
          "Avantajlar: kan ürünleri kullanımı azalır, böbrek fonksiyonları daha iyi korunur, inme riski seçilmiş hastalarda düşer.",
          "Sınırlar: teknik olarak daha zorlayıcıdır, tüm damar bölgelerine eşit ulaşılması güçtür."
        ]
      },
      "patient-journey-de": {
        title: "Almanya'dan Antalya'ya: Bir hasta yolculuğu",
        excerpt: "Münih'ten gelen 64 yaşındaki hastamızın TAVI sürecini, ilk video görüşmeden ülkesine dönüşüne kadar baştan sona aktarıyoruz.",
        body: [
          "K. Bey, ileri aort darlığı tanısıyla Münih'ten Antalya'ya gelen 64 yaşında bir hastamız. Süreç, yerel kardiyoloğunun gönderdiği eko ve BT görüntüleriyle birlikte bir video konsültasyonla başladı.",
          { h2: "Planlama" },
          "Görüntüler üzerinden TAVI uygunluğu doğrulandı; iki hafta sonrasına ameliyat tarihi verildi. Kliniğimiz, anlaşmalı hastane ve konaklama arasındaki tüm koordinasyonu üstlendi.",
          { h2: "Hastanedeki günler" },
          "İşlem 90 dakika sürdü; hasta aynı gün ayağa kalktı, üçüncü gün taburcu oldu. Almanca tercüman muayene ve hasta eğitiminin tamamına katıldı.",
          { quote: "Hastanın evine döndüğü gün de bizim takibimiz başlıyor — telekonsültasyon ile üç ay düzenli görüşüyoruz." }
        ]
      },
      "after-surgery-life": {
        title: "Açık kalp ameliyatından sonra: İlk 12 hafta",
        excerpt: "Taburculuktan sonraki günler, haftalar ve ayların pratik bir takvimi: ne zaman yürünür, ne zaman araba kullanılır?",
        body: [
          "Ameliyat masasında geçirilen birkaç saat, geri kalan ömrünüzü şekillendirir. Ama iyi bir sonuç sadece masaya değil, sonraki ilk 12 haftaya da bağlıdır.",
          { h2: "1. hafta" },
          "Hastanede ya da yakın kontrol altında. Kısa, sık yürüyüşler. Sternum kemiğini koruyacak hareket eğitimi.",
          { h2: "2.–4. hafta" },
          "Eve dönüş. Hafif ev içi aktivite. 4. haftadan itibaren genelde araba kullanımına izin verilir.",
          { h2: "1.–3. ay" },
          "Kardiyak rehabilitasyon programı. Düşük yoğunluklu egzersiz, beslenme danışmanlığı, gerekirse psikolojik destek."
        ]
      },
      "aortic-dissection-101": {
        title: "Aort diseksiyonu: Acil durumun anatomisi",
        excerpt: "Saatlerin değil, dakikaların önemli olduğu bir tablo. Belirtiler, tipler ve modern cerrahi yaklaşımlar.",
        body: [
          "Aort diseksiyonu, aort duvarının iç tabakasının yırtılmasıyla başlar. Yırtık, kanı duvarın katmanları arasına yönlendirir; bu durum dakikalar içinde yaşamı tehdit eder.",
          { h2: "Tip A vs Tip B" },
          "Tip A asendan aortu kapsar — neredeyse her zaman acil cerrahi gerektirir. Tip B inen aortu etkiler ve seçilmiş vakalarda tıbbi takiple yönetilebilir."
        ]
      },
      "atrial-fib-maze": {
        title: "MAZE prosedürü: Atriyal fibrilasyona cerrahi cevap",
        excerpt: "İlaca ve ablasyona dirençli atriyal fibrilasyonda kalp odacıklarına çizilen yollar nasıl ritmi geri getirir?",
        body: [
          "MAZE, atriyal fibrilasyonu durdurmak için cerrahi olarak doku üzerinde kontrollü iletim hatları oluşturma tekniğidir. Genellikle başka bir kalp cerrahisiyle birlikte uygulanır."
        ]
      },
      "sutureless-valves": {
        title: "Sutureless aort kapak: Daha kısa sürede, daha az risk",
        excerpt: "Geleneksel dikiş gerektirmeyen kapaklar, ameliyat süresini kısaltır ve özellikle yaşlı hastalarda riskleri azaltır.",
        body: [
          "Sutureless aort kapaklar, bir miktar ön gerilimle yerine yerleşen ve dikişsiz tutunan biyoprotezlerdir. Cross-clamp süresi belirgin ölçüde kısalır."
        ]
      }
    }
  },
  en: {
    title: ["The doorway to", " a", " ", "healthier", " heart."],
    lead: "Notes from the surgeon's pen — heart health, surgical journeys and patient stories.",
    countLabel: "articles published",
    popular: "Popular categories",
    popularSub: "Sorted by views",
    all: "All",
    search: "Search articles…",
    sort: "Sort", sortRecent: "Most recent", sortPopular: "Most popular", sortLikes: "Most liked",
    showing: "Showing",
    of: "of",
    posts: "posts",
    listHead: ["All", " articles"],
    empty: { title: "No results", body: "Try a different search or category." },
    read: "Read article",
    minRead: "min read",
    likeShort: "likes",
    viewShort: "views",
    by: "By",
    role: "Op. Dr. · Cardiac Surgery",
    backToList: "All articles",
    relatedHead: "Related articles",
    likeBtn: "Like",
    likedBtn: "Liked",
    share: "Share",
    cats: {
      "coronary-artery-surgery": "Coronary Bypass",
      "heart-valve-surgery": "Heart Valve",
      "aortic-surgery": "Aortic Surgery",
      "other": "Other Adult Surgery",
      "international": "Health Tourism",
      "lifestyle": "After Surgery"
    },
    posts_content: {
      "midcab-explained": {
        title: "What is MIDCAB? Bypass without opening the sternum",
        excerpt: "Coronary bypass through a small incision under the left breast — how it works, who's a candidate, and how recovery differs.",
        body: [
          "When most people picture coronary bypass, they imagine a long incision down the middle of the chest. MIDCAB — Minimally Invasive Direct Coronary Artery Bypass — skips that step. The surgeon works through a 6–8 cm cut under the left breast; the sternum stays whole.",
          { h2: "Who is it for?" },
          "MIDCAB is ideal for patients with single-vessel disease in the LAD. With multi-vessel involvement, a hybrid approach — MIDCAB + percutaneous stent — may be considered.",
          { h2: "Recovery" },
          "Because the sternum isn't broken, post-op pain is significantly lower. Most patients are discharged in 3–4 days, return to office work in 2 weeks, and to heavy activity in 4–6 weeks.",
          { quote: "Reaching the target vessel is the same goal in every bypass technique; what differs is how we get there." },
          { h2: "Limits" },
          "Not every patient is a candidate. Anatomical position, lung adhesions, prior surgical history all matter at the planning stage."
        ]
      },
      "tavi-vs-savr": {
        title: "TAVI or open aortic valve replacement?",
        excerpt: "Choosing between transcatheter and surgical valve replacement in aortic stenosis — risk, age, anatomy, durability.",
        body: [
          "TAVI has been the most important advance in aortic valve treatment of the last decade. A new valve is delivered through a catheter — usually from the leg — without opening the chest.",
          { h2: "Who is TAVI for?" },
          "Originally for patients at very high surgical risk. Today it's also used safely in intermediate- and low-risk older patients.",
          { h2: "When is open surgery still preferred?" },
          "Younger patients, those needing concomitant procedures, complex anatomy, or bicuspid valves — SAVR remains the standard.",
          { quote: "TAVI and SAVR aren't rivals; they're two tools for the same goal. Matching patient to tool is the surgeon's job." }
        ]
      },
      "what-is-bentall": {
        title: "Bentall procedure: Replacing the aortic root as one",
        excerpt: "When aortic root aneurysm and severe valve insufficiency coexist, Bentall solves both in a single operation.",
        body: [
          "Bentall replaces the aortic valve, root and ascending aorta in one composite graft. Typical candidate: a patient with a dilated root and severe valve insufficiency.",
          { h2: "Surgical steps" },
          "Diseased tissue removed; a tubular graft containing a mechanical or biological valve is inserted; coronary ostia are reimplanted onto the graft.",
          { h2: "Outcomes" },
          "Modern series report 30-day mortality below 2%. Long-term survival depends directly on valve choice and patient compliance."
        ]
      },
      "off-pump-bypass": {
        title: "Off-pump bypass: Surgery on the beating heart",
        excerpt: "Bypass without the heart-lung machine — advantages, limits, and patient selection.",
        body: ["Off-pump CABG keeps the heart beating during the operation; specialised stabilisers immobilise the target vessel area only."]
      },
      "patient-journey-de": {
        title: "From Munich to Antalya: A patient's journey",
        excerpt: "Following our 64-year-old patient through the full TAVI pathway — from first video call to return home.",
        body: [
          "K., 64, came to us from Munich with severe aortic stenosis. The journey began with a video consultation built around the echo and CT his local cardiologist had sent us.",
          { h2: "Planning" },
          "Imaging confirmed TAVI eligibility; surgery was scheduled two weeks later. The clinic coordinated everything — hospital, transfer, accommodation.",
          { h2: "The hospital days" },
          "The procedure took 90 minutes. He stood up the same day and was discharged on day three. A German interpreter joined every consult and patient-education session."
        ]
      },
      "after-surgery-life": {
        title: "Life after open-heart surgery: The first 12 weeks",
        excerpt: "A practical week-by-week calendar for the months after discharge — when to walk, when to drive, when to lift.",
        body: ["The hours on the operating table shape the rest of your life — but the result depends just as much on the first twelve weeks after."]
      },
      "aortic-dissection-101": {
        title: "Aortic dissection: Anatomy of an emergency",
        excerpt: "Where minutes matter, not hours. Symptoms, types, and modern surgical approaches.",
        body: ["Aortic dissection begins with a tear in the inner layer of the aortic wall."]
      },
      "atrial-fib-maze": {
        title: "MAZE: A surgical answer to atrial fibrillation",
        excerpt: "How carefully drawn lines on the heart's chambers can restore rhythm when drugs and ablation fall short.",
        body: ["MAZE creates controlled conduction lines on cardiac tissue to interrupt fibrillation."]
      },
      "sutureless-valves": {
        title: "Sutureless aortic valves: Shorter time, lower risk",
        excerpt: "Valves that hold without traditional stitches reduce operating time and risk in older patients.",
        body: ["Sutureless valves are bioprostheses that anchor with radial force rather than sutures."]
      }
    }
  },
  de: {
    title: ["Der Eingang zu", " einem", " ", "gesünderen", " Herzen."],
    lead: "Notizen aus der Feder des Chirurgen — Herzgesundheit, Operationswege und Patientengeschichten.",
    countLabel: "Artikel veröffentlicht",
    popular: "Beliebte Kategorien",
    popularSub: "Nach Ansichten sortiert",
    all: "Alle",
    search: "Artikel durchsuchen…",
    sort: "Sortieren", sortRecent: "Neueste", sortPopular: "Beliebt", sortLikes: "Most liked",
    showing: "Angezeigt",
    of: "von",
    posts: "Artikel",
    listHead: ["Alle", " Artikel"],
    empty: { title: "Keine Treffer", body: "Versuchen Sie eine andere Suche oder Kategorie." },
    read: "Artikel lesen",
    minRead: "Min. Lesezeit",
    likeShort: "Likes",
    viewShort: "Aufrufe",
    by: "Von",
    role: "Op. Dr. · Herzchirurgie",
    backToList: "Alle Artikel",
    relatedHead: "Ähnliche Artikel",
    likeBtn: "Liken",
    likedBtn: "Geliked",
    share: "Teilen",
    cats: {
      "coronary-artery-surgery": "Koronarer Bypass",
      "heart-valve-surgery": "Herzklappe",
      "aortic-surgery": "Aorten-Chirurgie",
      "other": "Weitere Eingriffe",
      "international": "Gesundheitstourismus",
      "lifestyle": "Nach OP"
    },
    posts_content: {
      "midcab-explained": {
        title: "Was ist MIDCAB? Bypass ohne Sternotomie",
        excerpt: "Bypass durch einen kleinen Schnitt unter der linken Brust — wie es funktioniert und wer geeignet ist.",
        body: [
          "Beim klassischen Bypass denken die meisten an einen langen Schnitt in der Mitte des Brustkorbs. MIDCAB überspringt diesen Schritt. Operiert wird durch einen 6–8 cm kleinen Zugang unter der linken Brust; das Brustbein bleibt unversehrt.",
          { h2: "Für wen geeignet?" },
          "Ideal bei Eingefäß-Erkrankung der LAD. Bei Mehrgefäß-Befall kommt ein hybrider Ansatz mit Stent in Betracht.",
          { h2: "Erholung" },
          "Da das Brustbein nicht durchtrennt wird, sind die Schmerzen deutlich geringer. Die meisten Patienten gehen nach 3–4 Tagen nach Hause."
        ]
      },
      "tavi-vs-savr": { title: "TAVI oder offener Aortenklappenersatz?", excerpt: "Die Wahl bei Aortenstenose — Risiko, Alter, Anatomie und Haltbarkeit.", body: ["TAVI war der wichtigste Fortschritt der letzten Dekade in der Aortenklappenbehandlung."] },
      "what-is-bentall": { title: "Bentall: Aortenwurzel als Einheit ersetzen", excerpt: "Wenn Wurzelaneurysma und schwere Klappeninsuffizienz zusammen auftreten.", body: ["Bentall ersetzt Klappe, Wurzel und Aorta ascendens als eine Einheit."] },
      "off-pump-bypass": { title: "Off-pump Bypass: Operation am schlagenden Herzen", excerpt: "Bypass ohne Herz-Lungen-Maschine — Vorteile, Grenzen und Patientenauswahl.", body: ["Off-pump CABG verzichtet auf die Herz-Lungen-Maschine."] },
      "patient-journey-de": { title: "Von München nach Antalya: Eine Patientenreise", excerpt: "Der TAVI-Weg unseres 64-jährigen Patienten — vom ersten Videocall bis zur Rückkehr.", body: ["K., 64, kam aus München mit schwerer Aortenstenose."] },
      "after-surgery-life": { title: "Leben nach der offenen Herz-OP: Die ersten 12 Wochen", excerpt: "Ein praktischer Wochenkalender — wann gehen, wann fahren, wann heben.", body: ["Die Stunden im OP prägen den Rest Ihres Lebens — die ersten zwölf Wochen prägen das Ergebnis."] },
      "aortic-dissection-101": { title: "Aortendissektion: Anatomie eines Notfalls", excerpt: "Hier zählen Minuten, nicht Stunden. Symptome, Typen und moderne Verfahren.", body: ["Eine Aortendissektion beginnt mit einem Riss in der inneren Schicht der Aortenwand."] },
      "atrial-fib-maze": { title: "MAZE: Eine chirurgische Antwort auf Vorhofflimmern", excerpt: "Wie sorgfältig gezogene Linien den Rhythmus wiederherstellen können.", body: ["MAZE legt kontrollierte Leitungslinien auf das Herzgewebe."] },
      "sutureless-valves": { title: "Nahtlose Aortenklappen: Kürzere Zeit, weniger Risiko", excerpt: "Klappen, die ohne klassische Naht halten, reduzieren OP-Zeit und Risiko.", body: ["Nahtlose Klappen sind Bioprothesen, die durch radiale Kraft halten."] }
    }
  }
};

window.BLOG_CATEGORIES = BLOG_CATEGORIES;
window.BLOG_POSTS = BLOG_POSTS;
window.BLOG_I18N = BLOG_I18N;
