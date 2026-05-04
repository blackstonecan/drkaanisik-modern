import { useTranslation } from 'react-i18next'
import { Icon, type IconName } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

type Procedure = { name: string; featured?: boolean; badge?: string }
type ServiceCard = {
  num: string
  icon: IconName
  title: string
  desc: string
  procedures: Procedure[]
}

export function ServicesSection() {
  const { t } = useTranslation('services')
  const heading = t('heading', { returnObjects: true }) as string[]
  const cards = t('cards', { returnObjects: true }) as ServiceCard[]

  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2>
            {heading.map((s, i) => (i === 3 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>))}
          </h2>
          <p className="section-head__lead">{t('lead')}</p>
        </div>
        <div className="services-grid">
          {cards.map((c, i) => (
            <div key={i} className="service-card reveal">
              <div className="service-card__num">— {c.num}</div>
              <div className="service-card__icon">
                <Icon name={c.icon} size={28} stroke={1.5} />
              </div>
              <h3>{c.title}</h3>
              <p className="service-card__desc">{c.desc}</p>
              <ul className="proc-list">
                {c.procedures.map((p, j) => (
                  <li key={j} className={cn(p.featured && 'proc-featured')}>
                    <span className="proc-dot" />
                    <span className="proc-name">{p.name}</span>
                    {p.badge && <span className="proc-badge">★ {p.badge}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="signature reveal">
          <div className="signature__icon">
            <Icon name="pulse" size={22} stroke={2} />
          </div>
          <div className="signature__text">
            <b>{t('signature.title')}</b>
            <span>{t('signature.sub')}</span>
          </div>
          <div className="signature__note">{t('signature.note')}</div>
        </div>
      </div>
    </section>
  )
}
