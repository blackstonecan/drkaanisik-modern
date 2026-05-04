export type TourPointSlug = 'entrance' | 'waiting-area' | 'examination-room'

export type TourIconName = 'door' | 'armchair' | 'stetho'

export type TourPoint = {
  slug: TourPointSlug
  icon: TourIconName
  palette: [string, string]
  image: string
  exitVideo?: string
  enterVideo?: string
}

export const TOUR_POINTS: TourPoint[] = [
  {
    slug: 'entrance',
    icon: 'door',
    palette: ['#0e3a48', '#0e5e6f'],
    image: '/images/tour/entrance.png',
    exitVideo: '/videos/tour/entrance_to_corridor.mp4',
    enterVideo: '/videos/tour/corridor_to_entrance.mp4',
  },
  {
    slug: 'waiting-area',
    icon: 'armchair',
    palette: ['#1a2f3a', '#2c4759'],
    image: '/images/tour/waiting.png',
    exitVideo: '/videos/tour/waiting_to_corridor.mp4',
    enterVideo: '/videos/tour/corridor_to_waiting.mp4',
  },
  {
    slug: 'examination-room',
    icon: 'stetho',
    palette: ['#0e2a36', '#155770'],
    image: '/images/tour/examination.png',
    exitVideo: '/videos/tour/examination_to_corridor.mp4',
    enterVideo: '/videos/tour/corridor_to_examination.mp4',
  },
]

export const CORRIDOR_IMAGE = '/images/tour/corridor.png'
