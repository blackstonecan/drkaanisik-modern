import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to `location.hash` after route changes. Retries briefly to handle
 * lazy-loaded routes whose target element isn't in the DOM yet, and resets to
 * top when navigating to a hash-less route.
 */
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    let cancelled = false
    let attempts = 0

    const tryScroll = () => {
      if (cancelled) return
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts++ < 40) {
        window.setTimeout(tryScroll, 50)
      }
    }

    tryScroll()

    return () => {
      cancelled = true
    }
  }, [pathname, hash, key])

  return null
}
