import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { useScrollPastHero } from '@/lib/hooks/useScrollPastHero'
import { isLocale } from '@/lib/i18n'

type LayoutMode = 'home' | 'page' | 'tour'

function detectMode(pathname: string): LayoutMode {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] && isLocale(segments[0])) segments.shift()
  if (segments.length === 0) return 'home'
  if (segments[0] === 'clinic-tour') return 'tour'
  return 'page'
}

export function SiteLayout() {
  const location = useLocation()
  const mode = detectMode(location.pathname)
  const scrolled = useScrollPastHero()

  // Home → transparent over hero, solid after scroll.
  // Page (blog) → always solid.
  // Tour → its own page chrome, no header here (the tour page renders its own).
  const solid = mode === 'page' ? true : scrolled

  if (mode === 'tour') {
    return <Outlet />
  }

  return (
    <>
      <Header solid={solid} />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
