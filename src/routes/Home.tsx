import { useState } from 'react'
import { PortfolioPopup } from '@/components/home/PortfolioPopup'
import { HeroVideo } from '@/components/home/HeroVideo'
import { DoctorSection } from '@/components/home/DoctorSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { TrustSection } from '@/components/home/TrustSection'
import { FAQSection } from '@/components/home/FAQSection'
import { ContactSection } from '@/components/home/ContactSection'
import { useReveal } from '@/lib/hooks/useReveal'

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(true)
  useReveal()
  return (
    <>
      <PortfolioPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
      <HeroVideo />
      <DoctorSection />
      <ServicesSection />
      <TrustSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
