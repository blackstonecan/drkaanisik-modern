type TourIconProps = {
  name: string
  size?: number
  stroke?: number
  className?: string
}

/** Tour-specific icons (door, armchair, stetho, arrows). */
export function TourIcon({ name, size = 24, stroke = 1.6, className }: TourIconProps) {
  const c = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }
  switch (name) {
    case 'door':
      return (
        <svg {...c}>
          <path d="M4 21h16" />
          <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
          <path d="M14 12.5v.5" />
        </svg>
      )
    case 'armchair':
      return (
        <svg {...c}>
          <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
          <path d="M3 14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" />
          <path d="M5 19v2M19 19v2" />
        </svg>
      )
    case 'stetho':
      return (
        <svg {...c}>
          <path d="M4 4v5a4 4 0 0 0 8 0V4" />
          <path d="M4 4h2M10 4h2" />
          <path d="M8 13v2a5 5 0 0 0 10 0v-1" />
          <circle cx="18" cy="11" r="2.5" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...c}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    case 'arrow-left':
      return (
        <svg {...c}>
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      )
    default:
      return null
  }
}
