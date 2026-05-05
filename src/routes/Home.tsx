import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PortfolioPopup } from '@/components/home/PortfolioPopup'
import { shouldShowPortfolioPopup } from '@/components/home/portfolioPopupStorage'
import { HeroVideo } from '@/components/home/HeroVideo'
import { DoctorSection } from '@/components/home/DoctorSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { TrustSection } from '@/components/home/TrustSection'
import { FAQSection } from '@/components/home/FAQSection'
import { ContactSection } from '@/components/home/ContactSection'
import { useDocumentMeta } from '@/lib/hooks/useDocumentMeta'

export default function Home() {
  const { t } = useTranslation('common')
  const [popupOpen, setPopupOpen] = useState(() => shouldShowPortfolioPopup())
  useDocumentMeta({
    title: t('meta.home.title'),
    description: t('meta.home.description'),
  })
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
