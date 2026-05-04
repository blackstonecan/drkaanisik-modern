import { useTranslation } from 'react-i18next'
import { Icon, type IconName } from '@/components/ui/Icon'

type TrustItem = { icon: IconName; title: string; desc: string }

export function TrustSection() {
  const { t } = useTranslation('trust')
  const heading = t('heading', { returnObjects: true }) as string[]
  const items = t('items', { returnObjects: true }) as TrustItem[]

  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2>
            {heading.map((s, i) => (i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>))}
          </h2>
          <p className="section-head__lead">{t('lead')}</p>
        </div>
        <div className="trust-band reveal">
          {items.map((it, i) => (
            <div key={i} className="trust-card">
              <div className="trust-card__icon">
                <Icon name={it.icon} size={20} />
              </div>
              <div>
                <b>{it.title}</b>
                <span>{it.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
