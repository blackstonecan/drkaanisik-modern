import { useEffect } from 'react'

type DocumentMetaInput = {
  title: string
  description?: string
}

function setMetaTag(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Sets <title> and <meta name="description"> for the current page. */
export function useDocumentMeta({ title, description }: DocumentMetaInput) {
  useEffect(() => {
    document.title = title
    if (description) setMetaTag('description', description)
  }, [title, description])
}
