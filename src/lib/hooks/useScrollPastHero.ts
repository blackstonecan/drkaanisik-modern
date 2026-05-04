import { useEffect, useState } from 'react'

/**
 * `true` once the page has scrolled past (window.innerHeight - 120) — used by
 * the header to flip from transparent (over hero) to solid (after hero).
 */
export function useScrollPastHero(): boolean {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > window.innerHeight - 120)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return solid
}
