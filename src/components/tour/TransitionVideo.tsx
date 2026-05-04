import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CORRIDOR_IMAGE, TOUR_POINTS, type TourPointSlug } from '@/data/tourPoints'

type TransitionVideoProps = {
  from: TourPointSlug
  to: TourPointSlug
  onEnded: () => void
}

const STILL_FADE_MS = 700

export function TransitionVideo({ from, to, onEnded }: TransitionVideoProps) {
  const { t } = useTranslation('tour')
  const points = t('points', { returnObjects: true }) as Record<string, { title: string }>

  const fromPoint = TOUR_POINTS.find((p) => p.slug === from)!
  const toPoint = TOUR_POINTS.find((p) => p.slug === to)!

  const [stage, setStage] = useState<'leg1' | 'leg2'>('leg1')

  const leg1Video = fromPoint.exitVideo
  const leg2Video = toPoint.enterVideo

  useEffect(() => {
    if (stage === 'leg1' && !leg1Video) {
      const id = setTimeout(() => setStage('leg2'), STILL_FADE_MS)
      return () => clearTimeout(id)
    }
    if (stage === 'leg2' && !leg2Video) {
      const id = setTimeout(onEnded, STILL_FADE_MS)
      return () => clearTimeout(id)
    }
  }, [stage, leg1Video, leg2Video, onEnded])

  const onLegEnded = () => {
    if (stage === 'leg1') setStage('leg2')
    else onEnded()
  }

  const renderLeg = (videoSrc: string | undefined, fadeFrom: string, fadeTo: string) =>
    videoSrc ? (
      <video
        key={videoSrc}
        className="tour-video__clip"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onLegEnded}
      />
    ) : (
      <div className="tour-video__crossfade">
        <img src={fadeFrom} alt="" className="tour-video__crossfade-from" />
        <img src={fadeTo} alt="" className="tour-video__crossfade-to" />
      </div>
    )

  return (
    <div className="tour-video is-active">
      {stage === 'leg1'
        ? renderLeg(leg1Video, fromPoint.image, CORRIDOR_IMAGE)
        : renderLeg(leg2Video, CORRIDOR_IMAGE, toPoint.image)}
      <div className="tour-video__label">
        <span className="rec" /> {t('transitionTag')}
      </div>
      <div className="tour-video__caption-line">
        <span className="dot" /> {t('travelingTo')} · {points[to]?.title}
      </div>
    </div>
  )
}
