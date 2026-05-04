import { clsx, type ClassValue } from 'clsx'

export function cn(...values: ClassValue[]): string {
  return clsx(values)
}

export function formatDate(iso: string, lang: string): string {
  const d = new Date(iso)
  const locales: Record<string, string> = { tr: 'tr-TR', en: 'en-GB', de: 'de-DE' }
  return d.toLocaleDateString(locales[lang] ?? 'en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
