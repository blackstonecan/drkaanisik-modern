import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { HashLink } from '@/components/ui/HashLink'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'
import { cn } from '@/lib/utils'

type HeaderProps = {
  solid: boolean
  /** When true, force the dark/transparent over-image styling regardless of scroll. */
  forceTransparent?: boolean
}

export function Header({ solid, forceTransparent = false }: HeaderProps) {
  const { t } = useTranslation('common')
  const { link } = useLocaleRoute()
  const isSolid = !forceTransparent && solid

  return (
    <header className={cn('header', isSolid ? 'is-solid' : 'is-transparent')}>
      <div className="container header__inner">
        <Link to={link()} className="brand" aria-label="Home">
          <span className="brand__mark">K</span>
          <span className="brand__name">
            <b>Op. Dr. Kaan Işık</b>
            <span>Cardiac Surgery</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main">
          <HashLink to="#services">{t('nav.services')}</HashLink>
          <Link to={link('clinic-tour')}>{t('nav.tour')}</Link>
          <Link to={link('blog')}>{t('nav.blog')}</Link>
          <HashLink to="#faq">{t('nav.faq')}</HashLink>
          <HashLink to="#contact">{t('nav.contact')}</HashLink>
        </nav>
        <LanguageSwitcher />
        <HashLink to="#contact" className="cta-btn">
          {t('cta.contact')}
          <Icon name="arrow-right" size={14} />
        </HashLink>
        <button className="hamburger" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
