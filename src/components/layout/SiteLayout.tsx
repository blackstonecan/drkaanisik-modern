import { useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToHash } from '@/components/layout/ScrollToHash'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { PageTransition } from '@/components/ui/PageTransition'
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

  const isPost = mode === 'page' && location.pathname.includes('/blog/')

  if (mode === 'tour') {
    return (
      <>
        <ScrollToHash />
        <PageTransition />
      </>
    )
  }

  return (
    <>
      <ScrollToHash />
      {!isPost && <ScrollProgress />}
      <Header solid={solid} />
      <PageTransition />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
