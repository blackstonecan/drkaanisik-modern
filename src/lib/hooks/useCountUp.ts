import { useEffect, useState } from 'react'

export function useCountUp(target: number, start: boolean): number {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    const dur = 1600
    const t0 = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur)
      const eased = 1 - Math.pow(1 - k, 3)
      setN(Math.round(target * eased))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start])
  return n
}
