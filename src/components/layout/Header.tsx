import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <>
      <header className={cn('header', isSolid ? 'is-solid' : 'is-transparent')}>
        <div className="container header__inner">
          <Link to={link()} className="brand" aria-label="Home">
            <span className="brand__mark">K</span>
            <span className="brand__name">
              <b>{t('brand.name')}</b>
              <span>{t('brand.role')}</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            <Link to={link()}>{t('nav.home')}</Link>
            <Link to={link('clinic-tour')}>{t('nav.tour')}</Link>
            <HashLink to="#services">{t('nav.services')}</HashLink>
            <Link to={link('blog')}>{t('nav.blog')}</Link>
            <HashLink to="#contact">{t('nav.contact')}</HashLink>
          </nav>
          <LanguageSwitcher />
          <HashLink to="#contact" className="cta-btn header__cta">
            {t('cta.contact')}
            <Icon name="arrow-right" size={14} />
          </HashLink>
          <button
            className={cn('hamburger', menuOpen && 'is-open')}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn('mobile-menu', menuOpen && 'is-open')}
        aria-hidden={!menuOpen}
      >
        <div
          className="mobile-menu__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <nav className="mobile-menu__nav" aria-label="Mobile">
            <Link to={link()} onClick={() => setMenuOpen(false)}>
              {t('nav.home')}
            </Link>
            <Link to={link('clinic-tour')} onClick={() => setMenuOpen(false)}>
              {t('nav.tour')}
            </Link>
            <HashLink to="#services" onClick={() => setMenuOpen(false)}>
              {t('nav.services')}
            </HashLink>
            <Link to={link('blog')} onClick={() => setMenuOpen(false)}>
              {t('nav.blog')}
            </Link>
            <HashLink to="#contact" onClick={() => setMenuOpen(false)}>
              {t('nav.contact')}
            </HashLink>
          </nav>
          <div className="mobile-menu__foot">
            <LanguageSwitcher />
            <HashLink
              to="#contact"
              className="cta-btn"
              onClick={() => setMenuOpen(false)}
            >
              {t('cta.contact')}
              <Icon name="arrow-right" size={14} />
            </HashLink>
          </div>
        </div>
      </div>
    </>
  )
}
