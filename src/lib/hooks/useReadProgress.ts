import { useEffect, useState, type RefObject } from 'react'

/**
 * Returns 0–100 representing how far the user has scrolled through the given
 * element (the article body). Updates passively on scroll.
 */
export function useReadProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const calc = () => {
      const el = ref.current
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY
      const h = el.offsetHeight
      const wv = window.innerHeight
      const sc = window.scrollY + wv
      const pct = Math.max(0, Math.min(1, (sc - top) / h))
      setProgress(pct * 100)
    }
    calc()
    window.addEventListener('scroll', calc, { passive: true })
    window.addEventListener('resize', calc)
    return () => {
      window.removeEventListener('scroll', calc)
      window.removeEventListener('resize', calc)
    }
  }, [ref])
  return progress
}
