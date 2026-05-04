import { useCallback, useState } from 'react'

function read(key: string): boolean {
  if (typeof window === 'undefined') return false
  try {
    return window.localStorage.getItem(key) === '1'
  } catch {
    return false
  }
}

/** Persist a per-post like flag in localStorage under `like:<slug>`. */
export function useLikeStorage(slug: string) {
  const key = `like:${slug}`
  const [liked, setLiked] = useState<boolean>(() => read(key))

  const toggle = useCallback(() => {
    setLiked((v) => {
      const next = !v
      try {
        window.localStorage.setItem(key, next ? '1' : '0')
      } catch {
        /* ignore */
      }
      return next
    })
  }, [key])

  return { liked, toggle }
}
