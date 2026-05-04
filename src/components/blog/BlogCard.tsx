import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import type { BlogPost } from '@/data/blogPosts'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'
import { formatDate } from '@/lib/utils'

type BlogCardProps = { post: BlogPost }

export function BlogCard({ post }: BlogCardProps) {
  const { t, i18n } = useTranslation('blog')
  const { link } = useLocaleRoute()
  const cats = t('cats', { returnObjects: true }) as Record<string, string>
  const postsContent = t('posts_content', { returnObjects: true }) as Record<
    string,
    { title: string; excerpt: string }
  >
  const c = postsContent[post.slug] ?? { title: post.slug, excerpt: '' }
  const cat = post.cats[0]

  const style: React.CSSProperties = {
    ...({ '--bg-a': post.palette[0], '--bg-b': post.palette[1] } as React.CSSProperties),
  }

  return (
    <Link to={link(`blog/${post.slug}`)} className="blog-card">
      <div className="blog-card__image" style={style}>
        <span className="blog-card__cat">{cats[cat]}</span>
        <span className="blog-card__image-tag">image · {post.slug}.jpg</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          {formatDate(post.date, i18n.language)} · {post.read} {t('minRead')}
        </div>
        <h3 className="blog-card__title">{c.title}</h3>
        <p className="blog-card__excerpt">{c.excerpt}</p>
        <div className="blog-card__footer">
          <div className="blog-card__stats">
            <span className="blog-card__stat">
              <Icon name="heart" size={12} stroke={2} />
              {post.likes}
            </span>
            <span className="blog-card__stat">◇ {post.views.toLocaleString()}</span>
          </div>
          <span className="blog-card__read">
            {t('read')}
            <Icon name="arrow-right" size={12} stroke={2} />
          </span>
        </div>
      </div>
    </Link>
  )
}
