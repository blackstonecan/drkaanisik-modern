import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'

type Mode = 'phone' | 'email'

const MAP_LAT = 36.8516
const MAP_LNG = 30.6238

export function ContactSection() {
  const { t } = useTranslation('contact')
  const { locale } = useLocaleRoute()
  const [mode, setMode] = useState<Mode>('phone')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const mapsUrl = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`
  const mapsEmbed = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=${locale}&z=15&output=embed`

  useEffect(() => {
    if (!sent) return
    const id = setTimeout(() => setSent(false), 6000)
    return () => clearTimeout(id)
  }, [sent])

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const heading = t('heading', { returnObjects: true }) as string[]

  return (
    <section className="section section--ink" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2>
            {heading.map((s, i) => (i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>))}
          </h2>
          <p className="section-head__lead">{t('lead')}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-row">
              <div className="contact-row__icon">
                <Icon name="phone" size={18} />
              </div>
              <div>
                <div className="contact-row__label">{t('labels.phone')}</div>
                <div className="contact-row__value">
                  <a href="tel:+902420000000">+90 (242) 000 00 00</a>
                </div>
                <div className="contact-row__sub">{t('labels.addressSub')}</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-row__icon">
                <Icon name="mail" size={18} />
              </div>
              <div>
                <div className="contact-row__label">{t('labels.email')}</div>
                <div className="contact-row__value">
                  <a href="mailto:info@drkaanisik.com">info@drkaanisik.com</a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-row__icon">
                <Icon name="pin" size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-row__label">{t('labels.address')}</div>
                <div
                  className="contact-row__value"
                  style={{ fontSize: 15, fontFamily: 'var(--sans)' }}
                >
                  {t('labels.addressLine')}
                </div>
                <div className="map-mini">
                  <iframe
                    src={mapsEmbed}
                    title={t('labels.addressLine')}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map-mini__frame"
                  />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="map-mini__open"
                  >
                    <Icon name="arrow-right" size={10} stroke={2} /> &nbsp;{t('maps.open')}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="contact-row__label" style={{ marginBottom: 10 }}>
                {t('labels.social')}
              </div>
              <div className="social-row">
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                  <Icon name="instagram" size={16} />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                  <Icon name="linkedin" size={16} />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="WhatsApp">
                  <Icon name="wa" size={16} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={submit}>
            <h3>{t('form.title')}</h3>
            <p className="contact-form__lead">{t('form.lead')}</p>

            <div className="field">
              <label htmlFor="cf-name">{t('form.name')}</label>
              <input
                id="cf-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className={cn('switch', mode === 'email' && 'is-email')}>
              <span className="switch__indicator" />
              <button
                type="button"
                className={mode === 'phone' ? 'is-active' : ''}
                onClick={() => setMode('phone')}
              >
                <Icon name="phone" size={12} stroke={2} /> {t('form.switchPhone')}
              </button>
              <button
                type="button"
                className={mode === 'email' ? 'is-active' : ''}
                onClick={() => setMode('email')}
              >
                <Icon name="mail" size={12} stroke={2} /> {t('form.switchEmail')}
              </button>
            </div>

            {mode === 'phone' ? (
              <div className="field">
                <label htmlFor="cf-phone">{t('form.phone')}</label>
                <input
                  id="cf-phone"
                  type="tel"
                  placeholder="+90 ..."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            ) : (
              <div className="field">
                <label htmlFor="cf-email">{t('form.email')}</label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            )}

            <div className="field">
              <label htmlFor="cf-msg">{t('form.message')}</label>
              <textarea
                id="cf-msg"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button className="submit-btn" type="submit">
              <Icon name="send" size={14} stroke={2} />
              {t('form.submit')}
            </button>

            {sent && (
              <div className="toast">
                <Icon name="check" size={16} stroke={2} />
                {t('form.success')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
