import type { TourPoint } from '@/data/tourPoints'
import { cn } from '@/lib/utils'

type SceneProps = {
  point: TourPoint
  isLeaving: boolean
}

export function Scene({ point, isLeaving }: SceneProps) {
  const style: React.CSSProperties = {
    ...({ '--bg-a': point.palette[0], '--bg-b': point.palette[1] } as React.CSSProperties),
  }
  return (
    <div className={cn('tour-scene', isLeaving && 'is-leaving')} style={style}>
      <div className="tour-scene__bg" />
      <img
        key={point.slug}
        src={point.image}
        alt=""
        className="tour-scene__photo"
        draggable={false}
      />
      <div className="tour-scene__vignette" />
    </div>
  )
}
