import { useTranslation } from 'react-i18next'
import { TourIcon } from '@/components/tour/TourIcon'
import type { TourPoint, TourPointSlug } from '@/data/tourPoints'
import { cn } from '@/lib/utils'

type RailProps = {
  current: TourPoint
  visited: Set<TourPointSlug>
  points: TourPoint[]
  onSelect: (p: TourPoint) => void
  dim: boolean
}

export function Rail({ current, visited, points, onSelect, dim }: RailProps) {
  const { t } = useTranslation('tour')
  const tPoints = t('points', { returnObjects: true }) as Record<
    string,
    { title: string; desc: string }
  >
  const others = points.filter((p) => p.slug !== current.slug)

  return (
    <div className={cn('tour-rail', dim && 'is-dim')}>
      <div className="tour-rail__head">
        <div className="tour-rail__head-left">{t('progressLabel')}</div>
        <div className="tour-rail__progress" aria-hidden="true">
          {points.map((p) => {
            const cls =
              p.slug === current.slug
                ? 'is-current'
                : visited.has(p.slug)
                  ? 'is-visited'
                  : ''
            return <span key={p.slug} className={`tour-rail__progress-dot ${cls}`} />
          })}
        </div>
      </div>
      <div className="tour-rail__buttons">
        {others.map((p) => {
          const idx = points.findIndex((x) => x.slug === p.slug)
          const info = tPoints[p.slug]
          return (
            <button
              key={p.slug}
              className="tour-btn"
              onClick={() => onSelect(p)}
              aria-label={`${t('travelingTo')} ${info.title}`}
            >
              <span className="tour-btn__icon">
                <TourIcon name={p.icon} size={18} stroke={1.6} />
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span className="tour-btn__num">
                  {t('stepLabel')} {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="tour-btn__label">{info.title}</span>
              </span>
              <span className="tour-btn__arrow">
                <TourIcon name="arrow-right" size={16} stroke={1.8} />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
