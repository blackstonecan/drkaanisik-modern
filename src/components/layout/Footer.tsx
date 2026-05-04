import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HashLink } from '@/components/ui/HashLink'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'

export function Footer() {
  const { t } = useTranslation('common')
  const { link } = useLocaleRoute()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <div className="brand" style={{ marginBottom: 16 }}>
              <span className="brand__mark">K</span>
              <span className="brand__name">
                <b>{t('brand.name')}</b>
                <span>{t('brand.role')}</span>
              </span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: '32ch' }}>
              {t('footer.tagline')}
            </p>
          </div>
          <div className="footer__col">
            <h5>{t('footer.cols.contact')}</h5>
            <a href="tel:+902420000000">+90 (242) 000 00 00</a>
            <a href="mailto:info@drkaanisik.com">info@drkaanisik.com</a>
            <p>Konyaaltı, Antalya · TR</p>
          </div>
          <div className="footer__col">
            <h5>{t('footer.cols.nav')}</h5>
            <HashLink to="#services">{t('nav.services')}</HashLink>
            <Link to={link('clinic-tour')}>{t('nav.tour')}</Link>
            <HashLink to="#faq">{t('nav.faq')}</HashLink>
            <HashLink to="#contact">{t('nav.contact')}</HashLink>
          </div>
          <div className="footer__col">
            <h5>{t('footer.cols.legal')}</h5>
            <a href="#" onClick={(e) => e.preventDefault()}>
              {t('footer.links.privacy')}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              {t('footer.links.terms')}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              {t('footer.links.kvkk')}
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t('footer.bottom')}</span>
          <span>
            {t('footer.attr')} ·{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>
              github
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
