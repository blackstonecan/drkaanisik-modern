export type TourPointSlug =
  | 'entrance'
  | 'waiting-area'
  | 'consultation-room'
  | 'examination-room'
  | 'ekg-room'

export type TourIconName = 'door' | 'armchair' | 'speech' | 'stetho' | 'wave'

export type TourPoint = {
  slug: TourPointSlug
  icon: TourIconName
  palette: [string, string]
}

export const TOUR_POINTS: TourPoint[] = [
  { slug: 'entrance', icon: 'door', palette: ['#0e3a48', '#0e5e6f'] },
  { slug: 'waiting-area', icon: 'armchair', palette: ['#1a2f3a', '#2c4759'] },
  { slug: 'consultation-room', icon: 'speech', palette: ['#142634', '#1f3e54'] },
  { slug: 'examination-room', icon: 'stetho', palette: ['#0e2a36', '#155770'] },
  { slug: 'ekg-room', icon: 'wave', palette: ['#1c2438', '#2a3a5a'] },
]
