// Localization for clinic tour
const TOUR_I18N = {
  tr: {
    title: "Klinik Turu",
    pageEyebrow: "İNTERAKTİF KLİNİK TURU",
    backHome: "Ana sayfaya dön",
    stepLabel: "Durak",
    progressLabel: "İlerleme",
    travelingTo: "Geçiş yapılıyor",
    points: {
      entrance: { title: "Klinik Girişi", desc: "Kapıdan adım attığınız andan itibaren sıcak ve ferah bir karşılama. Doğal aydınlatma, sade malzemeler — kliniğe değil, bir misafirhaneye geldiğinizi hissedersiniz." },
      "waiting-area": { title: "Bekleme Alanı", desc: "Az kişiyle, yumuşak ışık ve sessizlikte bir hazırlık alanı. Çay servisi, dijital olmayan dergiler ve sakin bir oturma planıyla tasarlandı." },
      "consultation-room": { title: "Konsültasyon Odası", desc: "Bilgi paylaşımının yapıldığı oda. Dr. Işık burada görüntülerinizi inceler, planı sizinle birlikte adım adım gözden geçirir." },
      "examination-room": { title: "Muayene Odası", desc: "Steril ve modern bir ortamda fizik muayene. Hasta-hekim diyalogunu zedelemeden, klinik gereklilikleri eksiksiz karşılar." },
      "ekg-room": { title: "EKG / USG Odası", desc: "Kardiyak değerlendirme için ileri seviye ekipman. EKG, ekokardiyografi ve USG hepsi tek bir odada, kısa sürede tamamlanır." }
    },
    placeholder: "VIDEO YERİ · 360 derece veya kısa walk-in mp4",
    transitionTag: "GEÇİŞ VİDEOSU"
  },
  en: {
    title: "Clinic Tour",
    pageEyebrow: "INTERACTIVE CLINIC TOUR",
    backHome: "Back to home",
    stepLabel: "Stop",
    progressLabel: "Progress",
    travelingTo: "Walking to",
    points: {
      entrance: { title: "Entrance", desc: "From the moment you step inside, a calm and bright welcome. Natural light, plain materials — it feels less like a clinic, more like a guest house." },
      "waiting-area": { title: "Waiting Area", desc: "A quiet preparation space with soft lighting and few people. Tea service, paper magazines and unhurried seating." },
      "consultation-room": { title: "Consultation Room", desc: "Where the information is shared. Dr. Işık reviews your imaging here and walks you through the plan together." },
      "examination-room": { title: "Examination Room", desc: "Sterile, modern, but without losing the conversation. Clinical needs handled fully without compromising the patient relationship." },
      "ekg-room": { title: "EKG / USG Room", desc: "Advanced cardiac assessment in one room. EKG, echocardiography and ultrasound completed efficiently in a single visit." }
    },
    placeholder: "VIDEO PLACEHOLDER · 360° or short walk-in mp4",
    transitionTag: "TRANSITION VIDEO"
  },
  de: {
    title: "Klinik-Tour",
    pageEyebrow: "INTERAKTIVE KLINIK-TOUR",
    backHome: "Zur Startseite",
    stepLabel: "Station",
    progressLabel: "Fortschritt",
    travelingTo: "Auf dem Weg zu",
    points: {
      entrance: { title: "Eingang", desc: "Vom ersten Schritt an: ein ruhiger, heller Empfang. Natürliches Licht, schlichte Materialien — eher Gästehaus als Klinik." },
      "waiting-area": { title: "Wartebereich", desc: "Ein leiser Vorbereitungsraum mit weichem Licht und wenig Menschen. Tee, Print-Zeitschriften, entspannte Sitzgruppen." },
      "consultation-room": { title: "Beratungsraum", desc: "Hier wird die Information geteilt. Dr. Işık geht Ihre Bilder durch und geht den Plan Schritt für Schritt mit Ihnen durch." },
      "examination-room": { title: "Untersuchungsraum", desc: "Steril und modern — ohne dass das Gespräch verloren geht. Klinische Anforderungen voll erfüllt." },
      "ekg-room": { title: "EKG / USG-Raum", desc: "Fortschrittliche kardiale Diagnostik in einem Raum. EKG, Echokardiografie und Ultraschall in einem Termin." }
    },
    placeholder: "VIDEO-PLATZHALTER · 360° oder kurzes Walk-in MP4",
    transitionTag: "ÜBERGANGSVIDEO"
  }
};

// Static point definitions (locale-independent)
const TOUR_POINTS = [
  { slug: "entrance",           icon: "door",       palette: ["#0e3a48", "#0e5e6f"] },
  { slug: "waiting-area",       icon: "armchair",   palette: ["#1a2f3a", "#2c4759"] },
  { slug: "consultation-room",  icon: "speech",     palette: ["#142634", "#1f3e54"] },
  { slug: "examination-room",   icon: "stetho",     palette: ["#0e2a36", "#155770"] },
  { slug: "ekg-room",           icon: "wave",       palette: ["#1c2438", "#2a3a5a"] }
];

window.TOUR_I18N = TOUR_I18N;
window.TOUR_POINTS = TOUR_POINTS;
