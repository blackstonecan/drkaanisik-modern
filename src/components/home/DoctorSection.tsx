import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { StatsGrid } from '@/components/home/StatsGrid'
import { cn } from '@/lib/utils'

type TimelineItem = { period: string; title: string; detail: string }

export function DoctorSection() {
  const { t } = useTranslation('home')
  const [open, setOpen] = useState(false)

  const heading = t('doctor.heading', { returnObjects: true }) as string[]
  const bioShort = t('doctor.bioShort', { returnObjects: true }) as string[]
  const timeline = t('doctor.timeline', { returnObjects: true }) as TimelineItem[]
  const tags = t('doctor.tags', { returnObjects: true }) as string[]

  return (
    <section className="section" id="doctor">
      <div className="container">
        <div className="doctor">
          <div className="doctor__photo reveal">
            <span className="doctor__photo-label">{t('doctor.photoLabel')}</span>
            <span className="doctor__photo-caption">{t('doctor.photoCaption')}</span>
            <div className="doctor__badge">
              <span>{t('doctor.badgeLabel')}</span>
              <b>2018</b>
            </div>
          </div>
          <div className="doctor__info reveal">
            <div className="eyebrow">{t('doctor.eyebrow')}</div>
            <h2>
              {heading.map((s, i) => (i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>))}
            </h2>
            <div className="doctor__credentials" style={{ marginTop: 18 }}>
              {t('doctor.credentials')}
            </div>
            <div className="doctor__bio">
              {bioShort.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <button
              className={cn('expand-btn', open && 'is-open')}
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="doctor-more"
            >
              <span className="icon">
                <Icon name="chev-down" size={14} />
              </span>
              {open ? t('doctor.collapse') : t('doctor.expand')}
            </button>
            <div id="doctor-more" className={cn('doctor__more', open && 'is-open')}>
              <div className="doctor__more-inner">
                <div className="divider-label" style={{ margin: '0 0 8px' }}>
                  {t('doctor.timelineTitle')}
                </div>
                <div className="timeline">
                  {timeline.map((it, i) => (
                    <div key={i} className="timeline-item">
                      <div className="timeline-item__period">{it.period}</div>
                      <div>
                        <div className="timeline-item__title">{it.title}</div>
                        <div className="timeline-item__detail">{it.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="divider-label">{t('doctor.memberships')}</div>
                <div className="tags">
                  {tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <StatsGrid />
      </div>
    </section>
  )
}
