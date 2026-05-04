import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type TransitionVideoProps = {
  from: string
  to: string
  onEnded: () => void
}

/**
 * Visual placeholder for the in-between walk-through video. The prototype uses
 * a 1.7s scripted progress bar to simulate playback; once it ends, the parent
 * swaps to the destination scene.
 */
export function TransitionVideo({ from, to, onEnded }: TransitionVideoProps) {
  const { t } = useTranslation('tour')
  const points = t('points', { returnObjects: true }) as Record<string, { title: string }>

  useEffect(() => {
    const id = setTimeout(onEnded, 1700)
    return () => clearTimeout(id)
  }, [from, to, onEnded])

  return (
    <div className="tour-video is-active">
      <div className="tour-video__placeholder" />
      <div className="tour-video__label">
        <span className="rec" /> {t('transitionTag')}
      </div>
      <div className="tour-video__progress">
        <div className="tour-video__caption">
          <span className="dot" /> {t('travelingTo')} · {points[to]?.title}
        </div>
        <div className="tour-video__progress-line">
          <div className="tour-video__progress-fill" />
        </div>
        <div className="tour-video__caption" style={{ opacity: 0.5 }}>
          {from} → {to}
        </div>
      </div>
    </div>
  )
}
