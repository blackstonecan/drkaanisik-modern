import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'

type HashLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** A target like `#services` or `services#faq`. Locale prefix is added automatically. */
  to: string
  children: ReactNode
}

/**
 * Anchor that scrolls smoothly to an `#id` on the same page, or navigates with
 * a hash to another route. Always emits a real `<a href>` so middle-click and
 * "open in new tab" still work.
 */
export function HashLink({ to, children, onClick, ...rest }: HashLinkProps) {
  const { link } = useLocaleRoute()
  const navigate = useNavigate()
  const [pathPart, hashPart] = to.split('#')
  const targetPath = pathPart ? link(pathPart) : link()
  const fullHref = hashPart ? `${targetPath}#${hashPart}` : targetPath

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return
    }
    // Same-page hash: smooth-scroll without router navigation.
    if (hashPart && window.location.pathname === targetPath) {
      const target = document.getElementById(hashPart)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', `${targetPath}#${hashPart}`)
      }
      return
    }
    // Cross-route navigation: use SPA navigation so the destination page
    // mounts via React Router; ScrollToHash handles the scroll after mount.
    e.preventDefault()
    navigate(fullHref)
  }

  return (
    <a href={fullHref} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
