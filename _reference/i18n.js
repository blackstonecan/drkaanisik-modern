// Localized strings + content for the site
const I18N = {
  tr: {
    nav: { home: "Anasayfa", services: "Hizmetler", tour: "Klinik Turu", blog: "Blog", contact: "İletişim" },
    cta: { contact: "İletişime Geç", appointment: "Randevu Al" },
    hero: {
      eyebrow: "OP. DR. KAAN IŞIK · KARDİYAK CERRAHİ",
      title: ["Modern kalp", " cerrahisi,", " ", "güvenli", " eller."],
      sub: "Almanya'da yetişmiş, minimal invaziv kardiyak cerrahi alanında uzmanlaşmış. Antalya Konyaaltı'ndaki kliniğinde 8 yıldır hastalarına hizmet veriyor.",
      meta: ["ANTALYA · KONYAALTI", "TR · EN · DE"],
      scroll: "Aşağı kaydır"
    },
    doctor: {
      eyebrow: "Hekim Hakkında",
      heading: ["Bir hayatın", " ritmi", " — kalp."],
      credentials: "MD · ADULT CARDIAC SURGERY · EACTS MEMBER",
      bioShort: [
        "Op. Dr. Kaan Işık, koroner bypass, kalp kapak ve aort cerrahisinde uzmanlaşmış bir kardiyak cerrahıdır. Almanya'daki iki yıllık fellowship döneminde minimal invaziv tekniklere odaklanmış; bugün hem kendi kliniğinde hasta görür hem de Antalya'daki anlaşmalı özel hastanelerde ameliyat yapar.",
        "Tedavinin yalnızca ameliyat masasında değil; karşılıklı anlayış, açık iletişim ve kişiye özel bir bakım planıyla başladığına inanır."
      ],
      expand: "Tam özgeçmiş",
      collapse: "Daralt",
      timelineTitle: "Eğitim & Kariyer",
      memberships: "Üyelikler",
      tags: ["TKDCD", "EACTS", "Almanya Eğitimli", "TR · EN · DE"],
      timeline: [
        { period: "2002 — 2008", title: "Koç Üniversitesi Tıp Fakültesi", detail: "Tıp doktoru (MD)" },
        { period: "2008 — 2014", title: "İstanbul Üniversitesi Cerrahpaşa", detail: "Erişkin Kalp Cerrahisi uzmanlık eğitimi" },
        { period: "2014 — 2016", title: "Almanya — Fellowship", detail: "Minimal invaziv kardiyak cerrahi (2 yıl)" },
        { period: "2016 — 2018", title: "Özel Hastane Pratiği", detail: "Türkiye'de özel hastanelerde kıdemli kardiyak cerrah" },
        { period: "2018 — bugün", title: "Kendi Kliniği — Konyaaltı", detail: "Konsültasyon merkezi + anlaşmalı hastanelerde ameliyat" }
      ]
    },
    stats: {
      eyebrow: "Bir bakışta",
      heading: ["Sayılarla", " Op. Dr. Kaan Işık."],
      items: [
        { num: "2000", suffix: "+", label: "Açık kalp ameliyatı" },
        { num: "8", suffix: " yıl", label: "Kendi kliniğinde hizmet" },
        { num: "95", suffix: "%+", label: "Hasta memnuniyeti" },
        { num: "3", suffix: " dil", label: "TR · EN · DE hizmet" }
      ]
    },
    services: {
      eyebrow: "Hizmetler",
      heading: ["Erişkin kalp", " cerrahisinde", " ", "uzmanlık alanları."],
      lead: "Tedaviler her zaman anlaşmalı, tam donanımlı özel hastane ortamında uygulanır. Klinik konsültasyon, planlama ve takip için kullanılır.",
      cards: [
        {
          num: "01",
          icon: "pulse",
          title: "Koroner Arter Cerrahisi",
          desc: "Koroner damarlardaki tıkanıklıkların açılması — klasik, off-pump ve minimal invaziv tekniklerle.",
          procedures: [
            { name: "MIDCAB — Sol meme altı küçük kesi", featured: true, badge: "İmza" },
            { name: "Off-pump (atan kalpte) bypass" },
            { name: "Klasik açık bypass (CABG)" }
          ]
        },
        {
          num: "02",
          icon: "valve",
          title: "Kalp Kapak Cerrahisi",
          desc: "Aort ve mitral kapak hastalıklarında, hastaya özel açık veya transkateter yaklaşımlar.",
          procedures: [
            { name: "TAVI — Transkateter aort kapak" },
            { name: "Sutureless aort kapak değişimi" },
            { name: "Mitral kapak tamiri / değişimi (mini torakotomi)" },
            { name: "Triküspit kapak cerrahisi" }
          ]
        },
        {
          num: "03",
          icon: "aorta",
          title: "Aort Cerrahisi",
          desc: "Aort kökü, asendan ve diseksiyon vakalarında elektif ve acil prosedürler.",
          procedures: [
            { name: "Asendan aort anevrizması" },
            { name: "Aort diseksiyonu (acil)" },
            { name: "Bentall prosedürü" },
            { name: "David prosedürü (kök koruyucu)" }
          ]
        },
        {
          num: "04",
          icon: "heart",
          title: "Diğer Erişkin Kalp Cerrahisi",
          desc: "Kalp tümörleri, ritim cerrahisi ve perikard hastalıklarında bütüncül yaklaşım.",
          procedures: [
            { name: "Atriyal miksoma eksizyonu" },
            { name: "Perikardiyektomi" },
            { name: "MAZE — Atriyal fibrilasyon cerrahisi" }
          ]
        }
      ],
      signature: {
        title: "MIDCAB — Doktorun imza prosedürü",
        sub: "Sol meme altından küçük bir kesiyle, sternumu açmadan yapılan koroner bypass.",
        note: "ALMANYA EĞİTİMLİ"
      }
    },
    trust: {
      eyebrow: "Sağlık Turizmi",
      heading: ["Üç dilde,", " kapsamlı bir", " bakım yolculuğu."],
      lead: "Yurt dışından gelen hastalar için ön konsültasyondan ameliyat sonrası takibe kadar bütünleşik bir program.",
      items: [
        { icon: "video", title: "Video ön konsültasyon", desc: "Ameliyat öncesi planlama, görüntü değerlendirmesi ve risk konuşmasını uzaktan yapın." },
        { icon: "shield", title: "Karşılama & koordinasyon", desc: "Havalimanı transferi, konaklama ve klinik ziyaretleri tek elden organize edilir." },
        { icon: "globe", title: "Sahada tercüman", desc: "İngilizce ve Almanca konuşan tercümanlar muayene boyunca size eşlik eder." }
      ]
    },
    faq: {
      eyebrow: "Sıkça Sorulan Sorular",
      heading: ["Kararını vermeden önce", " bilmek istediklerin."],
      lead: "Hasta ve yakınlarının en sık yönelttiği sorular ve özet cevaplar.",
      items: [
        { q: "Ameliyatlar nerede yapılıyor?", a: "Klinik, Konyaaltı'ndaki konsültasyon ve takip merkezimizdir. Ameliyatlar Antalya'da anlaşmalı, tam donanımlı özel hastanelerde yapılır. Ameliyat öncesi tüm görüşmeler, planlama ve sonrası kontroller burada gerçekleştirilir." },
        { q: "MIDCAB klasik bypastan farklı mı?", a: "Evet. MIDCAB'de sternumu açmak yerine sol meme altından küçük bir kesiyle çalışılır. Bu sayede ağrı daha az olur, hastanede kalış süresi kısalır ve hastalar günlük yaşamlarına çok daha hızlı dönerler — uygun anatomi ve damar yapısına sahip hastalarda." },
        { q: "Yurt dışından geliyorum, süreç nasıl işliyor?", a: "Önce video konsültasyon ile değerlendirme yaparız. Uygunsa anlaşmalı hastanede tarih belirlenir, transfer ve konaklama koordinasyonu organize edilir. Muayene ve ameliyat sürecinde İngilizce/Almanca tercüman sizinle birlikte olur, ülkenize döndükten sonra da telekonsültasyonla takip ederiz." },
        { q: "TAVI hangi hastalar için uygundur?", a: "TAVI özellikle açık ameliyat riski yüksek, ileri yaştaki ya da ek hastalıkları olan aort darlığı hastaları için tasarlanmış bir yöntemdir. Karar; eko, BT ve kapsamlı bir kalp ekibi değerlendirmesinin ardından kişiye özel verilir." },
        { q: "Hangi sigorta ve dilleri kabul ediyorsunuz?", a: "Türkçe, İngilizce ve Almanca hizmet veriyoruz. Pek çok özel sigorta ve uluslararası sigorta paketi anlaşmalı hastanelerimiz üzerinden geçerlidir; net bilgi için iletişim formundan ulaşmanız yeterli." }
      ]
    },
    contact: {
      eyebrow: "İletişim",
      heading: ["Bir görüşme,", " bir başlangıç."],
      lead: "Sorularınız, ikinci görüş talepleri ve randevu için bize ulaşın.",
      labels: {
        phone: "Telefon", email: "E-posta", address: "Adres",
        addressLine: "Mah. Liman, Konyaaltı / Antalya, Türkiye",
        addressSub: "Pazartesi — Cumartesi · 09:00 — 18:00",
        social: "Sosyal medya"
      },
      form: {
        title: "Mesaj bırakın",
        lead: "Genellikle 24 saat içinde dönüş yapıyoruz.",
        name: "Adınız", phone: "Telefon", email: "E-posta", message: "Mesajınız",
        switchPhone: "Telefon", switchEmail: "E-posta",
        submit: "Mesajı gönder",
        success: "Mesajınız iletildi. (Bu site bir portfolyo örneğidir, gerçek gönderim yapılmaz.)"
      },
      maps: { open: "Yol Tarifi", label: "KONYAALTI · ANTALYA" }
    },
    footer: {
      tagline: "Modern kalp cerrahisi, güvenli eller.",
      cols: {
        contact: "İletişim",
        nav: "Site Haritası",
        legal: "Yasal"
      },
      links: {
        privacy: "Gizlilik", terms: "Kullanım Koşulları", kvkk: "KVKK"
      },
      bottom: "© 2026 Op. Dr. Kaan Işık · Tüm hakları saklıdır.",
      attr: "Frontend by Emre Can Karataş"
    },
    popup: {
      eyebrow: "PORTFOLYO BİLDİRİMİ",
      title: "Bu bir portfolyo örnek sitesidir.",
      body: [
        "Bu site, Emre Can Karataş tarafından geliştirilmiş bir frontend portfolyo projesidir. Op. Dr. Kaan Işık kurgusal bir karakterdir; bu sitede yer alan hiçbir bilgi, istatistik veya kimlik gerçek bir tıp profesyoneline ait değildir.",
        "Form gönderimi, beğeni sayıları ve görüntülenme verileri görseldir; arka uç bağlantısı yoktur."
      ],
      attr: "Frontend by Emre Can Karataş",
      btn: "Anladım, devam et"
    }
  },
  en: {
    nav: { home: "Home", services: "Services", tour: "Clinic Tour", blog: "Blog", contact: "Contact" },
    cta: { contact: "Get in touch", appointment: "Book a visit" },
    hero: {
      eyebrow: "OP. DR. KAAN IŞIK · CARDIAC SURGERY",
      title: ["Modern cardiac", " surgery,", " ", "in trusted", " hands."],
      sub: "German-trained, specialised in minimally invasive cardiac surgery. Eight years of independent practice from a Konyaaltı, Antalya clinic.",
      meta: ["ANTALYA · KONYAALTI", "TR · EN · DE"],
      scroll: "Scroll down"
    },
    doctor: {
      eyebrow: "About the surgeon",
      heading: ["The rhythm of", " a life", " — the heart."],
      credentials: "MD · ADULT CARDIAC SURGERY · EACTS MEMBER",
      bioShort: [
        "Op. Dr. Kaan Işık is a cardiac surgeon focused on coronary bypass, valve and aortic surgery. After a two-year fellowship in Germany he has built a practice around minimally invasive techniques, dividing his time between his Konyaaltı clinic and contracted hospitals across Antalya.",
        "He treats every case as a conversation first — listening, planning, then operating with calm precision."
      ],
      expand: "Full résumé",
      collapse: "Collapse",
      timelineTitle: "Education & career",
      memberships: "Memberships",
      tags: ["TKDCD", "EACTS", "German-trained", "TR · EN · DE"],
      timeline: [
        { period: "2002 — 2008", title: "Koç University, School of Medicine", detail: "Doctor of Medicine (MD)" },
        { period: "2008 — 2014", title: "Istanbul University, Cerrahpaşa", detail: "Residency in Adult Cardiac Surgery" },
        { period: "2014 — 2016", title: "Germany — Fellowship", detail: "Minimally invasive cardiac surgery (2 years)" },
        { period: "2016 — 2018", title: "Private hospital practice", detail: "Senior cardiac surgeon at private hospitals in Turkey" },
        { period: "2018 — present", title: "Own clinic — Konyaaltı", detail: "Outpatient consultations + operations at contracted hospitals" }
      ]
    },
    stats: {
      eyebrow: "At a glance",
      heading: ["Op. Dr. Kaan Işık,", " in numbers."],
      items: [
        { num: "2000", suffix: "+", label: "Open-heart procedures" },
        { num: "8", suffix: " yrs", label: "In private practice" },
        { num: "95", suffix: "%+", label: "Patient satisfaction" },
        { num: "3", suffix: " langs", label: "TR · EN · DE service" }
      ]
    },
    services: {
      eyebrow: "Services",
      heading: ["Specialty areas in", " adult cardiac", " ", "surgery."],
      lead: "All operations take place at fully equipped contracted hospitals. The clinic itself is used for consultation, planning and follow-up.",
      cards: [
        { num: "01", icon: "pulse", title: "Coronary artery surgery",
          desc: "Restoring blood flow through occluded coronaries — classic, off-pump and minimally invasive approaches.",
          procedures: [
            { name: "MIDCAB — Small left-chest incision", featured: true, badge: "Signature" },
            { name: "Off-pump (beating-heart) bypass" },
            { name: "Classic open bypass (CABG)" }
          ]
        },
        { num: "02", icon: "valve", title: "Heart valve surgery",
          desc: "Tailored open and transcatheter approaches for aortic and mitral valve disease.",
          procedures: [
            { name: "TAVI — Transcatheter aortic valve" },
            { name: "Sutureless aortic valve replacement" },
            { name: "Mitral repair / replacement (mini-thoracotomy)" },
            { name: "Tricuspid valve surgery" }
          ]
        },
        { num: "03", icon: "aorta", title: "Aortic surgery",
          desc: "Elective and emergency procedures for the aortic root, ascending aorta and dissection.",
          procedures: [
            { name: "Ascending aortic aneurysm" },
            { name: "Aortic dissection (emergency)" },
            { name: "Bentall procedure" },
            { name: "David procedure (root-sparing)" }
          ]
        },
        { num: "04", icon: "heart", title: "Other adult cardiac surgery",
          desc: "Cardiac tumours, rhythm surgery and pericardial disease — handled with the same care.",
          procedures: [
            { name: "Atrial myxoma excision" },
            { name: "Pericardiectomy" },
            { name: "MAZE — atrial fibrillation surgery" }
          ]
        }
      ],
      signature: { title: "MIDCAB — the surgeon's signature procedure",
        sub: "Coronary bypass through a small incision under the left breast — no sternotomy.",
        note: "GERMAN-TRAINED" }
    },
    trust: {
      eyebrow: "International patients",
      heading: ["A complete journey", " in three", " languages."],
      lead: "An end-to-end programme for patients arriving from abroad — from pre-op consultation to post-op follow-up.",
      items: [
        { icon: "video", title: "Video pre-op consultation", desc: "Plan the procedure, review imaging and discuss risk before you travel." },
        { icon: "shield", title: "Welcome & coordination", desc: "Airport transfer, accommodation and clinic visits handled by one team." },
        { icon: "globe", title: "On-site interpreter", desc: "English- and German-speaking interpreters accompany every consultation." }
      ]
    },
    faq: {
      eyebrow: "Frequently asked",
      heading: ["The things you'd ask", " before deciding."],
      lead: "The questions patients and families bring up most often, with concise answers.",
      items: [
        { q: "Where do the operations take place?", a: "The clinic in Konyaaltı is a consultation and follow-up centre. Operations themselves are performed at fully-equipped contracted private hospitals across Antalya. All pre-op planning and post-op visits happen at the clinic." },
        { q: "How is MIDCAB different from a classic bypass?", a: "MIDCAB avoids opening the sternum. Surgery is done through a small incision under the left breast, which means less pain, a shorter hospital stay and faster return to daily life — for patients whose anatomy and vessels make them suitable candidates." },
        { q: "I'm coming from abroad — how does it work?", a: "We start with a video consultation. If you're a candidate, a date is set at one of our partner hospitals; transfer and accommodation are coordinated for you. An English- or German-speaking interpreter joins your visits, and we follow up via telemedicine after you return home." },
        { q: "Who is TAVI suitable for?", a: "TAVI is designed for patients with aortic stenosis who would face high risk in open surgery — typically older patients or those with comorbidities. Eligibility is decided case-by-case after echo, CT imaging and a full heart-team review." },
        { q: "Which insurance and languages do you accept?", a: "We work in Turkish, English and German. Many private and international insurance plans are accepted via our partner hospitals — reach out through the form for specific cover." }
      ]
    },
    contact: {
      eyebrow: "Contact",
      heading: ["One conversation,", " one beginning."],
      lead: "Get in touch for questions, second opinions or to book a consultation.",
      labels: {
        phone: "Phone", email: "Email", address: "Address",
        addressLine: "Liman Mah., Konyaaltı / Antalya, Türkiye",
        addressSub: "Monday — Saturday · 09:00 — 18:00",
        social: "Social"
      },
      form: {
        title: "Send a message",
        lead: "We usually reply within 24 hours.",
        name: "Your name", phone: "Phone", email: "Email", message: "Your message",
        switchPhone: "Phone", switchEmail: "Email",
        submit: "Send message",
        success: "Message sent. (This site is a portfolio project — no real submission is made.)"
      },
      maps: { open: "Open in Maps", label: "KONYAALTI · ANTALYA" }
    },
    footer: {
      tagline: "Modern cardiac surgery, in trusted hands.",
      cols: { contact: "Contact", nav: "Site map", legal: "Legal" },
      links: { privacy: "Privacy", terms: "Terms", kvkk: "Data policy" },
      bottom: "© 2026 Op. Dr. Kaan Işık · All rights reserved.",
      attr: "Frontend by Emre Can Karataş"
    },
    popup: {
      eyebrow: "PORTFOLIO NOTICE",
      title: "This is a portfolio sample site.",
      body: [
        "This site is a frontend portfolio project by Emre Can Karataş. Op. Dr. Kaan Işık is a fictional persona; no information, statistic or identity on this site belongs to a real medical professional.",
        "Form submissions, like counts and view metrics are visual only — there is no backend."
      ],
      attr: "Frontend by Emre Can Karataş",
      btn: "I understand, continue"
    }
  },
  de: {
    nav: { home: "Start", services: "Leistungen", tour: "Klinik-Tour", blog: "Blog", contact: "Kontakt" },
    cta: { contact: "Kontakt aufnehmen", appointment: "Termin buchen" },
    hero: {
      eyebrow: "OP. DR. KAAN IŞIK · HERZCHIRURGIE",
      title: ["Moderne", " Herzchirurgie,", " ", "in sicheren", " Händen."],
      sub: "In Deutschland ausgebildet, spezialisiert auf minimalinvasive Herzchirurgie. Seit acht Jahren in eigener Praxis in Konyaaltı, Antalya.",
      meta: ["ANTALYA · KONYAALTI", "TR · EN · DE"],
      scroll: "Nach unten scrollen"
    },
    doctor: {
      eyebrow: "Über den Chirurgen",
      heading: ["Der Rhythmus", " eines Lebens", " — das Herz."],
      credentials: "MD · ERWACHSENEN-HERZCHIRURGIE · EACTS MITGLIED",
      bioShort: [
        "Op. Dr. Kaan Işık ist Herzchirurg mit Schwerpunkt auf koronarer Bypass-, Klappen- und Aortenchirurgie. Nach einem zweijährigen Fellowship in Deutschland hat er seine Praxis konsequent auf minimalinvasive Verfahren ausgerichtet.",
        "Jede Behandlung beginnt für ihn mit einem Gespräch — zuhören, planen, dann ruhig und präzise operieren."
      ],
      expand: "Vollständiger Lebenslauf",
      collapse: "Einklappen",
      timelineTitle: "Ausbildung & Karriere",
      memberships: "Mitgliedschaften",
      tags: ["TKDCD", "EACTS", "In Deutschland ausgebildet", "TR · EN · DE"],
      timeline: [
        { period: "2002 — 2008", title: "Koç Universität, Med. Fakultät", detail: "Doktor der Medizin (MD)" },
        { period: "2008 — 2014", title: "Istanbul Üniversitesi Cerrahpaşa", detail: "Facharztausbildung Erwachsenen-Herzchirurgie" },
        { period: "2014 — 2016", title: "Deutschland — Fellowship", detail: "Minimalinvasive Herzchirurgie (2 Jahre)" },
        { period: "2016 — 2018", title: "Privatklinik-Praxis", detail: "Senior-Herzchirurg an privaten Kliniken in der Türkei" },
        { period: "2018 — heute", title: "Eigene Praxis — Konyaaltı", detail: "Sprechstunde + Operationen an Partnerkliniken" }
      ]
    },
    stats: {
      eyebrow: "Auf einen Blick",
      heading: ["Op. Dr. Kaan Işık,", " in Zahlen."],
      items: [
        { num: "2000", suffix: "+", label: "Offene Herzoperationen" },
        { num: "8", suffix: " J.", label: "Eigene Praxis" },
        { num: "95", suffix: "%+", label: "Patientenzufriedenheit" },
        { num: "3", suffix: " Sprachen", label: "TR · EN · DE" }
      ]
    },
    services: {
      eyebrow: "Leistungen",
      heading: ["Schwerpunkte in der", " Erwachsenen-", " ", "Herzchirurgie."],
      lead: "Alle Operationen finden in voll ausgestatteten Partnerkliniken statt. Die Praxis dient der Beratung, Planung und Nachsorge.",
      cards: [
        { num: "01", icon: "pulse", title: "Koronare Bypass-Chirurgie",
          desc: "Wiederherstellung der Durchblutung verschlossener Herzkranzgefäße — klassisch, off-pump und minimalinvasiv.",
          procedures: [
            { name: "MIDCAB — Kleiner Zugang unter der linken Brust", featured: true, badge: "Signature" },
            { name: "Off-pump (am schlagenden Herzen)" },
            { name: "Klassischer offener Bypass (CABG)" }
          ]
        },
        { num: "02", icon: "valve", title: "Herzklappen-Chirurgie",
          desc: "Individuelle offene und Katheter-Verfahren bei Aorten- und Mitralklappenerkrankungen.",
          procedures: [
            { name: "TAVI — Katheter-Aortenklappe" },
            { name: "Nahtloser Aortenklappenersatz" },
            { name: "Mitralrekonstruktion / -ersatz (Mini-Thorakotomie)" },
            { name: "Trikuspidalklappen-Chirurgie" }
          ]
        },
        { num: "03", icon: "aorta", title: "Aorten-Chirurgie",
          desc: "Geplante und Notfall-Eingriffe an Aortenwurzel, Aorta ascendens und Dissektionen.",
          procedures: [
            { name: "Aneurysma der Aorta ascendens" },
            { name: "Aortendissektion (Notfall)" },
            { name: "Bentall-Operation" },
            { name: "David-Operation (klappenerhaltend)" }
          ]
        },
        { num: "04", icon: "heart", title: "Weitere Eingriffe",
          desc: "Herztumoren, Rhythmuschirurgie und Perikarderkrankungen — mit derselben Sorgfalt.",
          procedures: [
            { name: "Vorhofmyxom-Exzision" },
            { name: "Perikardektomie" },
            { name: "MAZE — Vorhofflimmern-Chirurgie" }
          ]
        }
      ],
      signature: { title: "MIDCAB — die Signature-Methode",
        sub: "Bypass über einen kleinen Schnitt unter der linken Brust — ohne Sternotomie.",
        note: "IN DEUTSCHLAND AUSGEBILDET" }
    },
    trust: {
      eyebrow: "Internationale Patienten",
      heading: ["Eine vollständige", " Reise in drei", " Sprachen."],
      lead: "Ein Programm vom Erstgespräch bis zur Nachsorge — durchdacht für Patienten aus dem Ausland.",
      items: [
        { icon: "video", title: "Video-Voruntersuchung", desc: "Planung, Bildbeurteilung und Risikogespräch noch bevor Sie reisen." },
        { icon: "shield", title: "Empfang & Koordination", desc: "Flughafentransfer, Unterkunft und Klinikbesuche aus einer Hand." },
        { icon: "globe", title: "Dolmetscher vor Ort", desc: "Englisch- und deutschsprachige Dolmetscher begleiten jede Sprechstunde." }
      ]
    },
    faq: {
      eyebrow: "Häufige Fragen",
      heading: ["Was Sie wissen sollten,", " bevor Sie sich entscheiden."],
      lead: "Die häufigsten Fragen — kurz und klar beantwortet.",
      items: [
        { q: "Wo finden die Operationen statt?", a: "Die Praxis in Konyaaltı ist ein Beratungs- und Nachsorgezentrum. Die Operationen selbst werden in voll ausgestatteten Partnerkliniken in Antalya durchgeführt. Alle Vor- und Nachgespräche finden in der Praxis statt." },
        { q: "Worin unterscheidet sich MIDCAB vom klassischen Bypass?", a: "Bei MIDCAB wird das Brustbein nicht geöffnet. Über einen kleinen Schnitt unter der linken Brust operieren wir gezielt — das bedeutet weniger Schmerzen, kürzeren Klinikaufenthalt und schnellere Rückkehr in den Alltag." },
        { q: "Ich komme aus dem Ausland — wie läuft das ab?", a: "Wir beginnen mit einer Video-Sprechstunde. Bei Eignung wird ein Termin in einer unserer Partnerkliniken geplant; Transfer und Unterkunft werden organisiert. Ein Dolmetscher begleitet Sie, und wir bleiben über Telemedizin in Kontakt." },
        { q: "Für wen ist TAVI geeignet?", a: "TAVI ist für Patienten mit Aortenstenose gedacht, bei denen eine offene Operation ein hohes Risiko bedeutet — meist ältere oder mehrfach erkrankte Patienten. Die Entscheidung fällt im Heart-Team nach Echo und CT." },
        { q: "Welche Versicherungen und Sprachen?", a: "Wir arbeiten auf Türkisch, Englisch und Deutsch. Viele private und internationale Versicherungen werden über unsere Partnerkliniken akzeptiert — fragen Sie uns gerne über das Formular." }
      ]
    },
    contact: {
      eyebrow: "Kontakt",
      heading: ["Ein Gespräch,", " ein Anfang."],
      lead: "Schreiben Sie uns für Fragen, Zweitmeinungen oder einen Termin.",
      labels: {
        phone: "Telefon", email: "E-Mail", address: "Adresse",
        addressLine: "Liman Mah., Konyaaltı / Antalya, Türkei",
        addressSub: "Montag — Samstag · 09:00 — 18:00",
        social: "Social"
      },
      form: {
        title: "Nachricht senden",
        lead: "Wir antworten in der Regel innerhalb von 24 Stunden.",
        name: "Ihr Name", phone: "Telefon", email: "E-Mail", message: "Ihre Nachricht",
        switchPhone: "Telefon", switchEmail: "E-Mail",
        submit: "Nachricht senden",
        success: "Nachricht gesendet. (Diese Seite ist ein Portfolio-Projekt — kein echter Versand.)"
      },
      maps: { open: "Route", label: "KONYAALTI · ANTALYA" }
    },
    footer: {
      tagline: "Moderne Herzchirurgie, in sicheren Händen.",
      cols: { contact: "Kontakt", nav: "Sitemap", legal: "Rechtliches" },
      links: { privacy: "Datenschutz", terms: "AGB", kvkk: "Datenrichtlinie" },
      bottom: "© 2026 Op. Dr. Kaan Işık · Alle Rechte vorbehalten.",
      attr: "Frontend by Emre Can Karataş"
    },
    popup: {
      eyebrow: "PORTFOLIO-HINWEIS",
      title: "Dies ist eine Portfolio-Beispielseite.",
      body: [
        "Diese Seite ist ein Frontend-Portfolio-Projekt von Emre Can Karataş. Op. Dr. Kaan Işık ist eine fiktive Person; keine Information, Statistik oder Identität auf dieser Seite gehört zu einer realen medizinischen Fachperson.",
        "Formulare, Likes und View-Zähler sind rein visuell — es gibt keinen Backend-Anschluss."
      ],
      attr: "Frontend by Emre Can Karataş",
      btn: "Verstanden, weiter"
    }
  }
};

window.I18N = I18N;
