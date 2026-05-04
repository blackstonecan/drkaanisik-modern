import { useTranslation } from 'react-i18next'
import { BlogList } from '@/components/blog/BlogList'
import { useDocumentMeta } from '@/lib/hooks/useDocumentMeta'

export default function Blog() {
  const { t } = useTranslation('common')
  useDocumentMeta({
    title: t('meta.blog.title'),
    description: t('meta.blog.description'),
  })
  return <BlogList />
}
