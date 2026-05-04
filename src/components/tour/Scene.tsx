import { useTranslation } from 'react-i18next'
import { FloorMap } from '@/components/tour/FloorMap'
import type { TourPoint } from '@/data/tourPoints'
import { cn } from '@/lib/utils'

type SceneProps = {
  point: TourPoint
  isLeaving: boolean
}

export function Scene({ point, isLeaving }: SceneProps) {
  const { t } = useTranslation('tour')
  const style: React.CSSProperties = {
    ...({ '--bg-a': point.palette[0], '--bg-b': point.palette[1] } as React.CSSProperties),
  }
  return (
    <div className={cn('tour-scene', isLeaving && 'is-leaving')} style={style}>
      <div className="tour-scene__bg" />
      <FloorMap current={point.slug} />
      <div className="tour-scene__vignette" />
      <div className="tour-scene__placeholder-tag">
        <span className="dot" /> {t('placeholder')}
      </div>
    </div>
  )
}
