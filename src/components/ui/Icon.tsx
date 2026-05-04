type IconProps = {
  name: IconName
  size?: number
  stroke?: number
  className?: string
}

export type IconName =
  | 'pulse'
  | 'valve'
  | 'aorta'
  | 'heart'
  | 'video'
  | 'shield'
  | 'globe'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'x'
  | 'plus'
  | 'chev-down'
  | 'arrow-right'
  | 'arrow-left'
  | 'send'
  | 'instagram'
  | 'linkedin'
  | 'wa'
  | 'check'
  | 'search'
  | 'grid'
  | 'list'

export function Icon({ name, size = 24, stroke = 1.6, className }: IconProps) {
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
    case 'pulse':
      return (
        <svg {...c}>
          <path d="M3 12h4l2-7 4 14 2-7h6" />
        </svg>
      )
    case 'valve':
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 8.5V4M12 19.5V15.5M8.5 12H4M19.5 12h-4" />
          <path d="M5.5 5.5l2.5 2.5M16 16l2.5 2.5M5.5 18.5L8 16M16 8l2.5-2.5" />
        </svg>
      )
    case 'aorta':
      return (
        <svg {...c}>
          <path d="M7 21V13a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v0" />
          <path d="M17 13v2a3 3 0 0 0 3 3" />
          <path d="M12 8V3" />
          <path d="M9 5h6" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...c}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    case 'video':
      return (
        <svg {...c}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...c}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...c}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...c}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...c}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case 'x':
      return (
        <svg {...c}>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...c}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      )
    case 'chev-down':
      return (
        <svg {...c}>
          <path d="M6 9l6 6 6-6" />
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
    case 'send':
      return (
        <svg {...c}>
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...c}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...c}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" />
        </svg>
      )
    case 'wa':
      return (
        <svg {...c}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      )
    case 'check':
      return (
        <svg {...c}>
          <path d="M5 12l5 5L20 7" />
        </svg>
      )
    case 'search':
      return (
        <svg {...c}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      )
    case 'grid':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
          <rect x="13" y="13" width="8" height="8" rx="1" />
        </svg>
      )
    case 'list':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <rect x="3" y="4" width="18" height="3" rx="1" />
          <rect x="3" y="10.5" width="18" height="3" rx="1" />
          <rect x="3" y="17" width="18" height="3" rx="1" />
        </svg>
      )
    default:
      return null
  }
}
