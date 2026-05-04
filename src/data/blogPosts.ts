export type BlogCategorySlug =
  | 'coronary-artery-surgery'
  | 'heart-valve-surgery'
  | 'aortic-surgery'
  | 'other'
  | 'international'
  | 'lifestyle'

export type BlogPost = {
  slug: string
  cats: BlogCategorySlug[]
  featured?: boolean
  views: number
  likes: number
  /** ISO date string (YYYY-MM-DD). */
  date: string
  /** Estimated reading time in minutes. */
  read: number
  /** [from, to] gradient stops for the placeholder hero. */
  palette: [string, string]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'midcab-explained',
    cats: ['coronary-artery-surgery'],
    featured: true,
    views: 4218,
    likes: 187,
    date: '2026-03-12',
    read: 6,
    palette: ['#0e3a48', '#0e5e6f'],
  },
  {
    slug: 'tavi-vs-savr',
    cats: ['heart-valve-surgery'],
    views: 3621,
    likes: 142,
    date: '2026-02-28',
    read: 8,
    palette: ['#1a2f3a', '#2c4759'],
  },
  {
    slug: 'what-is-bentall',
    cats: ['aortic-surgery'],
    views: 2188,
    likes: 96,
    date: '2026-02-14',
    read: 7,
    palette: ['#142634', '#1f3e54'],
  },
  {
    slug: 'off-pump-bypass',
    cats: ['coronary-artery-surgery'],
    views: 1987,
    likes: 73,
    date: '2026-01-30',
    read: 5,
    palette: ['#0e3a48', '#0e5e6f'],
  },
  {
    slug: 'patient-journey-de',
    cats: ['international'],
    featured: true,
    views: 1642,
    likes: 88,
    date: '2026-01-17',
    read: 6,
    palette: ['#3a2218', '#724433'],
  },
  {
    slug: 'after-surgery-life',
    cats: ['lifestyle'],
    views: 1410,
    likes: 124,
    date: '2026-01-04',
    read: 5,
    palette: ['#142a30', '#235058'],
  },
  {
    slug: 'aortic-dissection-101',
    cats: ['aortic-surgery'],
    views: 1203,
    likes: 54,
    date: '2025-12-22',
    read: 9,
    palette: ['#142634', '#1f3e54'],
  },
  {
    slug: 'atrial-fib-maze',
    cats: ['other'],
    views: 988,
    likes: 41,
    date: '2025-12-09',
    read: 6,
    palette: ['#1c2438', '#2a3a5a'],
  },
  {
    slug: 'sutureless-valves',
    cats: ['heart-valve-surgery'],
    views: 924,
    likes: 38,
    date: '2025-11-26',
    read: 5,
    palette: ['#1a2f3a', '#2c4759'],
  },
]
