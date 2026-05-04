import { TOUR_POINTS, type TourPointSlug } from '@/data/tourPoints'

type FloorMapProps = { current: TourPointSlug }

const LAYOUT: Record<TourPointSlug, { x: number; y: number }> = {
  entrance: { x: 50, y: 86 },
  'waiting-area': { x: 50, y: 62 },
  'consultation-room': { x: 26, y: 38 },
  'examination-room': { x: 74, y: 38 },
  'ekg-room': { x: 50, y: 14 },
}

/** Decorative SVG floor plan with a pulse on the active point. */
export function FloorMap({ current }: FloorMapProps) {
  return (
    <svg
      className="tour-scene__floor"
      viewBox="0 0 100 100"
      fill="none"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="0.4"
    >
      <rect x="6" y="6" width="88" height="88" rx="2" />
      <line x1="6" y1="50" x2="94" y2="50" strokeDasharray="1 2" opacity="0.5" />
      <line x1="50" y1="6" x2="50" y2="94" strokeDasharray="1 2" opacity="0.5" />
      {TOUR_POINTS.map((p) => {
        const pos = LAYOUT[p.slug]
        const isActive = p.slug === current
        return (
          <g key={p.slug}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isActive ? 3 : 1.6}
              fill={isActive ? '#d97757' : 'rgba(255,255,255,0.5)'}
              stroke="none"
            />
            {isActive && (
              <circle
                cx={pos.x}
                cy={pos.y}
                r="6"
                fill="none"
                stroke="#d97757"
                strokeWidth="0.4"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="8"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.7"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        )
      })}
    </svg>
  )
}
