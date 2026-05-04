import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { SUPPORTED_LOCALES } from '@/lib/i18n'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'

type PortfolioPopupProps = {
  open: boolean
  onClose: () => void
}

export function PortfolioPopup({ open, onClose }: PortfolioPopupProps) {
  const { t } = useTranslation('common')
  const { locale, switchLocale } = useLocaleRoute()

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const body = t('popup.body', { returnObjects: true }) as string[]

  return (
    <div
      className="popup-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
        <button className="popup__close" onClick={onClose} aria-label={t('popup.closeLabel')}>
          <Icon name="x" size={16} />
        </button>
        <div className="popup__lang">
          {SUPPORTED_LOCALES.map((l) => (
            <button
              key={l}
              className={l === locale ? 'is-active' : ''}
              onClick={() => switchLocale(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="popup__eyebrow">{t('popup.eyebrow')}</div>
        <h3 id="popup-title">{t('popup.title')}</h3>
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="popup__footer">
          <span className="popup__attr">
            {t('popup.attr')} ·{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>
              github
            </a>
          </span>
          <button className="popup__btn" onClick={onClose}>
            {t('popup.btn')}
          </button>
        </div>
      </div>
    </div>
  )
}
