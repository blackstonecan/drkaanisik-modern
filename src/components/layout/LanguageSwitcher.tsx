import { SUPPORTED_LOCALES } from '@/lib/i18n'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'

export function LanguageSwitcher() {
  const { locale, switchLocale } = useLocaleRoute()
  return (
    <div className="lang" role="group" aria-label="Language">
      {SUPPORTED_LOCALES.map((l) => (
        <button
          key={l}
          className={l === locale ? 'is-active' : ''}
          onClick={() => switchLocale(l)}
          aria-pressed={l === locale}
        >
          <span>{l.toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}
