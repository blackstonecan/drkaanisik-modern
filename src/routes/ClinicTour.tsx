import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from '@/components/layout/Header'
import { Scene } from '@/components/tour/Scene'
import { InfoCard } from '@/components/tour/InfoCard'
import { Rail } from '@/components/tour/Rail'
import { TransitionVideo } from '@/components/tour/TransitionVideo'
import { TourIcon } from '@/components/tour/TourIcon'
import { TOUR_POINTS, type TourPoint, type TourPointSlug } from '@/data/tourPoints'
import { useDocumentMeta } from '@/lib/hooks/useDocumentMeta'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'

type Transition = { from: TourPointSlug; to: TourPointSlug }

export default function ClinicTour() {
  const { t } = useTranslation('tour')
  const { t: tc } = useTranslation('common')
  const { link } = useLocaleRoute()

  const [currentSlug, setCurrentSlug] = useState<TourPointSlug>('entrance')
  const [visited, setVisited] = useState<Set<TourPointSlug>>(new Set(['entrance']))
  const [transition, setTransition] = useState<Transition | null>(null)
  const [infoHidden, setInfoHidden] = useState(false)

  useDocumentMeta({
    title: tc('meta.tour.title'),
    description: tc('meta.tour.description'),
  })

  const current = useMemo<TourPoint>(
    () => TOUR_POINTS.find((p) => p.slug === currentSlug)!,
    [currentSlug],
  )
  const currentIdx = TOUR_POINTS.findIndex((p) => p.slug === currentSlug)

  const goTo = (point: TourPoint) => {
    if (transition) return
    setInfoHidden(true)
    setTransition({ from: currentSlug, to: point.slug })
  }

  const onTransitionEnded = () => {
    setTransition((tr) => {
      if (!tr) return null
      setCurrentSlug(tr.to)
      setVisited((prev) => new Set([...prev, tr.to]))
      setTimeout(() => setInfoHidden(false), 100)
      return null
    })
  }

  return (
    <div className="tour-page">
      <Header solid={false} forceTransparent />
      <Link className="tour-back" to={link()}>
        <TourIcon name="arrow-left" size={12} stroke={2} /> {t('backHome')}
      </Link>
      <div className="tour-stage">
        <Scene point={current} isLeaving={!!transition} />
        {transition && (
          <TransitionVideo
            from={transition.from}
            to={transition.to}
            onEnded={onTransitionEnded}
          />
        )}
        <InfoCard
          point={current}
          hidden={infoHidden}
          index={currentIdx}
          total={TOUR_POINTS.length}
        />
        <Rail
          current={current}
          visited={visited}
          points={TOUR_POINTS}
          onSelect={goTo}
          dim={!!transition}
        />
      </div>
    </div>
  )
}
