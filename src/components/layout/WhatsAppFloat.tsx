import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'

export function WhatsAppFloat() {
  const { t } = useTranslation('common')
  return (
    <a
      className="wa-float"
      href="https://wa.me/902420000000?text=Merhaba"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.preventDefault()}
    >
      <span className="wa-icon">
        <Icon name="wa" size={28} stroke={1.8} />
      </span>
      <span className="wa-label">{t('whatsapp.label')}</span>
    </a>
  )
}
