import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCountUp } from '@/lib/hooks/useCountUp'

type StatItem = { num: number; suffix: string; label: string }

function StatTile({ item, go }: { item: StatItem; go: boolean }) {
  const n = useCountUp(item.num, go)
  return (
    <div className="stat">
      <div className="stat__num">
        {n}
        <em>{item.suffix}</em>
      </div>
      <div className="stat__label">{item.label}</div>
    </div>
  )
}

export function StatsGrid() {
  const { t } = useTranslation('home')
  const items = t('stats.items', { returnObjects: true }) as StatItem[]
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px 15% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="stats reveal" ref={ref}>
      {items.map((s, i) => (
        <StatTile key={i} item={s} go={inView} />
      ))}
    </div>
  )
}
