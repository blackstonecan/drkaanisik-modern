import { useEffect } from 'react'

/**
 * Adds the `is-in` class to elements with the `reveal` class once they enter the
 * viewport. Mirrors the prototype's reveal-on-scroll behavior.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (els.length === 0) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
}
