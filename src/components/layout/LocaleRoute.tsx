import { useEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { i18nReady, NAMESPACES, type Locale } from '@/lib/i18n'

type LocaleRouteProps = {
  locale: Locale
  children: ReactNode
}

export function LocaleRoute({ locale, children }: LocaleRouteProps) {
  const { i18n } = useTranslation()

  useEffect(() => {
    let cancelled = false
    void i18nReady.then(async () => {
      if (cancelled) return
      if (i18n.language !== locale) {
        await i18n.changeLanguage(locale)
      }
      await i18n.loadNamespaces([...NAMESPACES])
      try {
        window.localStorage.setItem('locale', locale)
      } catch {
        /* ignore */
      }
      document.documentElement.lang = locale
    })
    return () => {
      cancelled = true
    }
  }, [locale, i18n])

  return <>{children}</>
}
