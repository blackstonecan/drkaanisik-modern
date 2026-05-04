import { useTranslation } from 'react-i18next'
import { TourIcon } from '@/components/tour/TourIcon'
import type { TourPoint } from '@/data/tourPoints'
import { cn } from '@/lib/utils'

type InfoCardProps = {
  point: TourPoint
  hidden: boolean
  index: number
  total: number
}

export function InfoCard({ point, hidden, index, total }: InfoCardProps) {
  const { t } = useTranslation('tour')
  const points = t('points', { returnObjects: true }) as Record<
    string,
    { title: string; desc: string }
  >
  const info = points[point.slug]
  return (
    <div className={cn('tour-info', hidden && 'is-hidden')} key={point.slug}>
      <div className="tour-info__step">
        {t('stepLabel')} {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
      <div className="tour-info__icon">
        <TourIcon name={point.icon} size={22} stroke={1.5} />
      </div>
      <h2>{info.title}</h2>
      <p>{info.desc}</p>
    </div>
  )
}
