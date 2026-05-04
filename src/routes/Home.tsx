import { useState } from 'react'
import { PortfolioPopup } from '@/components/home/PortfolioPopup'

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(true)
  return (
    <>
      <PortfolioPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
      <section className="hero" id="top">
        <div className="hero__bg" />
        <div className="hero__placeholder" />
        <div className="container hero__content">
          <div className="hero__eyebrow">PHASE 1 · APP SHELL</div>
          <h1>Header, footer, popup, language switcher.</h1>
          <p className="hero__sub">Phase 2 will fill in the home page sections.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p style={{ color: 'var(--muted)' }}>
            Hero placeholder above so the header has a tall section to react to. The footer and
            WhatsApp float live in <code>SiteLayout</code>.
          </p>
        </div>
      </section>
    </>
  )
}
