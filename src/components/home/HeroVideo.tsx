import { useTranslation } from 'react-i18next'
import { HashLink } from '@/components/ui/HashLink'
import { Icon } from '@/components/ui/Icon'

type HeroLocale = {
  hero: {
    eyebrow: string
    title: string[]
    sub: string
    meta: string[]
    scroll: string
    placeholder: string
  }
}

export function HeroVideo() {
  const { t } = useTranslation('home')
  const { t: tc } = useTranslation('common')
  const hero = t('hero', { returnObjects: true }) as HeroLocale['hero']

  return (
    <section className="hero" id="top">
      <div className="hero__bg" />
      <div className="hero__placeholder" />
      <div className="hero__placeholder-label">
        <span className="dot" /> {hero.placeholder}
      </div>
      <div className="container hero__content">
        <div className="hero__eyebrow">{hero.eyebrow}</div>
        <h1>
          {hero.title.map((s, i) =>
            i === 3 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>,
          )}
        </h1>
        <p className="hero__sub">{hero.sub}</p>
        <div className="hero__actions">
          <HashLink to="#contact" className="cta-btn">
            {tc('cta.contact')}
            <Icon name="arrow-right" size={14} />
          </HashLink>
          <HashLink to="#services" className="cta-btn cta-btn--ghost">
            {tc('nav.services')}
          </HashLink>
        </div>
      </div>
      <div className="hero__meta">
        {hero.meta.map((m, i) => (
          <div key={i} className="hero__meta-line">
            {m}
          </div>
        ))}
      </div>
      <div className="scroll-cue">
        <span>{hero.scroll}</span>
        <span className="scroll-cue__line" />
      </div>
    </section>
  )
}
