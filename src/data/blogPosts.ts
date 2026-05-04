export type BlogCategorySlug =
  | 'coronary-artery-surgery'
  | 'heart-valve-surgery'
  | 'aortic-surgery'
  | 'other-cardiac-surgery'

export type BlogPost = {
  slug: string
  cats: BlogCategorySlug[]
  views: number
  likes: number
  /** ISO date string (YYYY-MM-DD). */
  date: string
  /** Estimated reading time in minutes. */
  read: number
  /** [from, to] gradient stops used as a fallback behind the cover image. */
  palette: [string, string]
  /** Public path to the cover image. */
  cover: string
  /** Per-locale URL slugs (mirrors classic; modern routing currently uses canonical slug). */
  slugByLocale: { tr: string; en: string; de: string }
}

const PALETTE: Record<BlogCategorySlug, [string, string]> = {
  'coronary-artery-surgery': ['#0e3a48', '#0e5e6f'],
  'heart-valve-surgery': ['#1a2f3a', '#2c4759'],
  'aortic-surgery': ['#142634', '#1f3e54'],
  'other-cardiac-surgery': ['#1c2438', '#2a3a5a'],
}

type BlogPostInput = Omit<BlogPost, 'cover'>

const POSTS: BlogPostInput[] = [
  {
    slug: 'midcab',
    cats: ['coronary-artery-surgery'],
    views: 4287,
    likes: 312,
    date: '2025-09-12',
    read: 6,
    palette: PALETTE['coronary-artery-surgery'],
    slugByLocale: { tr: 'midcab-nedir', en: 'what-is-midcab', de: 'was-ist-midcab' },
  },
  {
    slug: 'off-pump-vs-on-pump',
    cats: ['coronary-artery-surgery'],
    views: 2104,
    likes: 148,
    date: '2025-07-04',
    read: 5,
    palette: PALETTE['coronary-artery-surgery'],
    slugByLocale: {
      tr: 'off-pump-vs-on-pump-bypass',
      en: 'off-pump-vs-on-pump-bypass',
      de: 'off-pump-vs-on-pump-bypass',
    },
  },
  {
    slug: 'bypass-recovery',
    cats: ['coronary-artery-surgery'],
    views: 1872,
    likes: 122,
    date: '2025-05-22',
    read: 7,
    palette: PALETTE['coronary-artery-surgery'],
    slugByLocale: {
      tr: 'bypass-sonrasi-iyilesme',
      en: 'recovering-from-bypass',
      de: 'erholung-nach-bypass',
    },
  },
  {
    slug: 'classic-vs-minimal-bypass',
    cats: ['coronary-artery-surgery'],
    views: 1465,
    likes: 96,
    date: '2025-03-18',
    read: 6,
    palette: PALETTE['coronary-artery-surgery'],
    slugByLocale: {
      tr: 'klasik-vs-minimal-invaziv-bypass',
      en: 'classic-vs-minimally-invasive-bypass',
      de: 'klassisch-vs-minimalinvasiver-bypass',
    },
  },
  {
    slug: 'tavi',
    cats: ['heart-valve-surgery'],
    views: 5240,
    likes: 401,
    date: '2025-10-05',
    read: 6,
    palette: PALETTE['heart-valve-surgery'],
    slugByLocale: { tr: 'tavi-nedir', en: 'what-is-tavi', de: 'was-ist-tavi' },
  },
  {
    slug: 'sutureless-aortic',
    cats: ['heart-valve-surgery'],
    views: 1318,
    likes: 87,
    date: '2025-08-14',
    read: 5,
    palette: PALETTE['heart-valve-surgery'],
    slugByLocale: {
      tr: 'sutureless-aort-kapak',
      en: 'sutureless-aortic-valve',
      de: 'nahtloser-aortenklappenersatz',
    },
  },
  {
    slug: 'mitral-repair-vs-replacement',
    cats: ['heart-valve-surgery'],
    views: 1602,
    likes: 110,
    date: '2025-06-02',
    read: 5,
    palette: PALETTE['heart-valve-surgery'],
    slugByLocale: {
      tr: 'mitral-tamir-vs-degisim',
      en: 'mitral-repair-vs-replacement',
      de: 'mitralklappe-reparatur-vs-ersatz',
    },
  },
  {
    slug: 'valve-disease-signs',
    cats: ['heart-valve-surgery'],
    views: 2987,
    likes: 207,
    date: '2025-04-10',
    read: 4,
    palette: PALETTE['heart-valve-surgery'],
    slugByLocale: {
      tr: 'kalp-kapak-hastaligi-belirtileri',
      en: 'heart-valve-disease-signs',
      de: 'anzeichen-herzklappenerkrankung',
    },
  },
  {
    slug: 'aortic-aneurysm-guide',
    cats: ['aortic-surgery'],
    views: 2156,
    likes: 144,
    date: '2025-09-01',
    read: 7,
    palette: PALETTE['aortic-surgery'],
    slugByLocale: {
      tr: 'aort-anevrizmasi-rehberi',
      en: 'aortic-aneurysm-guide',
      de: 'aortenaneurysma-leitfaden',
    },
  },
  {
    slug: 'aortic-dissection-emergency',
    cats: ['aortic-surgery'],
    views: 3402,
    likes: 268,
    date: '2025-07-22',
    read: 5,
    palette: PALETTE['aortic-surgery'],
    slugByLocale: {
      tr: 'aort-diseksiyonu-acil-durum',
      en: 'aortic-dissection-emergency',
      de: 'aortendissektion-notfall',
    },
  },
  {
    slug: 'bentall-vs-david',
    cats: ['aortic-surgery'],
    views: 942,
    likes: 64,
    date: '2025-05-08',
    read: 6,
    palette: PALETTE['aortic-surgery'],
    slugByLocale: {
      tr: 'bentall-vs-david',
      en: 'bentall-vs-david',
      de: 'bentall-vs-david',
    },
  },
  {
    slug: 'living-with-aneurysm',
    cats: ['aortic-surgery'],
    views: 1264,
    likes: 91,
    date: '2025-02-19',
    read: 5,
    palette: PALETTE['aortic-surgery'],
    slugByLocale: {
      tr: 'anevrizma-ile-yasam',
      en: 'living-with-aneurysm',
      de: 'leben-mit-aneurysma',
    },
  },
  {
    slug: 'atrial-myxoma',
    cats: ['other-cardiac-surgery'],
    views: 612,
    likes: 48,
    date: '2025-08-29',
    read: 4,
    palette: PALETTE['other-cardiac-surgery'],
    slugByLocale: { tr: 'atriyal-miksoma', en: 'atrial-myxoma', de: 'vorhofmyxom' },
  },
  {
    slug: 'maze-procedure',
    cats: ['other-cardiac-surgery'],
    views: 1089,
    likes: 73,
    date: '2025-06-25',
    read: 5,
    palette: PALETTE['other-cardiac-surgery'],
    slugByLocale: {
      tr: 'maze-prosedurü',
      en: 'maze-procedure',
      de: 'maze-verfahren',
    },
  },
  {
    slug: 'pericardiectomy',
    cats: ['other-cardiac-surgery'],
    views: 528,
    likes: 39,
    date: '2025-04-30',
    read: 5,
    palette: PALETTE['other-cardiac-surgery'],
    slugByLocale: {
      tr: 'perikardiyektomi',
      en: 'pericardiectomy',
      de: 'perikardektomie',
    },
  },
  {
    slug: 'when-cardiac-surgery',
    cats: ['other-cardiac-surgery'],
    views: 2241,
    likes: 165,
    date: '2025-01-28',
    read: 6,
    palette: PALETTE['other-cardiac-surgery'],
    slugByLocale: {
      tr: 'kalp-cerrahisi-ne-zaman-gerekli',
      en: 'when-is-cardiac-surgery-needed',
      de: 'wann-ist-herzchirurgie-notwendig',
    },
  },
]

export const BLOG_POSTS: BlogPost[] = POSTS.map((p) => ({
  ...p,
  cover: `/images/blog/${p.slug}.jpg`,
}))
