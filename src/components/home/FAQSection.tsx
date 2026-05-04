import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

type FAQEntry = { q: string; a: string }

export function FAQSection() {
  const { t } = useTranslation('faq')
  const heading = t('heading', { returnObjects: true }) as string[]
  const items = t('items', { returnObjects: true }) as FAQEntry[]
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2>
            {heading.map((s, i) => (i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>))}
          </h2>
          <p className="section-head__lead">{t('lead')}</p>
        </div>
        <div className="faq-list">
          {items.map((item, i) => {
            const isOpen = open.has(i)
            return (
              <div key={i} className={cn('faq-item', isOpen && 'is-open')}>
                <button className="faq-q" onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <span className="faq-q__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-q__text">{item.q}</span>
                  <span className="faq-q__icon">
                    <Icon name="plus" size={16} />
                  </span>
                </button>
                <div className="faq-a">
                  <div className="faq-a__inner">
                    <div>{item.a}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
