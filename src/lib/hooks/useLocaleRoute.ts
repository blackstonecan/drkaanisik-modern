import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DEFAULT_LOCALE, isLocale, type Locale, SUPPORTED_LOCALES } from '@/lib/i18n'

/**
 * Returns the current locale (from the URL) and helpers to build locale-prefixed
 * URLs and switch language while preserving the current path.
 */
export function useLocaleRoute() {
  const location = useLocation()
  const navigate = useNavigate()

  // Routes are mounted at '/', '/en', '/de' without a :locale param, so derive
  // the active locale from the first path segment.
  const firstSegment = location.pathname.split('/').filter(Boolean)[0]
  const locale: Locale = isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE

  const localePath = useCallback(
    (loc: Locale, path: string = '') => {
      const cleaned = path.startsWith('/') ? path.slice(1) : path
      const prefix = loc === DEFAULT_LOCALE ? '' : `/${loc}`
      return cleaned ? `${prefix}/${cleaned}` : prefix || '/'
    },
    [],
  )

  const link = useCallback((path: string = '') => localePath(locale, path), [locale, localePath])

  const switchLocale = useCallback(
    (target: Locale) => {
      if (!SUPPORTED_LOCALES.includes(target)) return
      // Strip current locale prefix, keep the rest of the pathname.
      const segments = location.pathname.split('/').filter(Boolean)
      if (segments[0] && isLocale(segments[0])) segments.shift()
      const rest = segments.join('/')
      navigate(localePath(target, rest), { replace: false })
      try {
        window.localStorage.setItem('locale', target)
      } catch {
        /* ignore */
      }
    },
    [location.pathname, localePath, navigate],
  )

  return { locale, link, localePath, switchLocale }
}
