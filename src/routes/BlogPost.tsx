import { useEffect, useMemo, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { BlogCard } from '@/components/blog/BlogCard'
import { PostBody } from '@/components/blog/PostBody'
import { BLOG_POSTS } from '@/data/blogPosts'
import { useDocumentMeta } from '@/lib/hooks/useDocumentMeta'
import { useLikeStorage } from '@/lib/hooks/useLikeStorage'
import { useReadProgress } from '@/lib/hooks/useReadProgress'
import { useLocaleRoute } from '@/lib/hooks/useLocaleRoute'
import { cn, formatDate } from '@/lib/utils'

type PostContentBlock =
  | { p: string }
  | { h2: string }
  | { h3: string }
  | { quote: string }
  | { ul: string[] }

type PostContent = {
  title: string
  excerpt: string
  body: PostContentBlock[]
}

export default function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation('blog')
  const { link } = useLocaleRoute()

  const post = BLOG_POSTS.find((p) => p.slug === slug)
  const postsContent = t('posts_content', { returnObjects: true }) as Record<string, PostContent>
  const content = post ? postsContent[post.slug] : undefined
  const cats = t('cats', { returnObjects: true }) as Record<string, string>

  useDocumentMeta({
    title: content ? `${content.title} — Op. Dr. Kaan Işık` : 'Op. Dr. Kaan Işık',
    description: content?.excerpt,
  })

  const bodyRef = useRef<HTMLDivElement>(null)
  const progress = useReadProgress(bodyRef)
  const { liked, toggle } = useLikeStorage(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const related = useMemo(() => {
    if (!post) return []
    return BLOG_POSTS.filter(
      (p) => p.slug !== post.slug && p.cats.some((c) => post.cats.includes(c)),
    ).slice(0, 3)
  }, [post])

  if (!post || !content) {
    return (
      <div className="blog-page">
        <section className="post-body">
          <div className="container">
            <div className="post-body__inner" style={{ textAlign: 'center', padding: '40px 0' }}>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, marginBottom: 16 }}>
                Not found.
              </h1>
              <button
                className="cta-btn"
                onClick={() => navigate(link('blog'))}
                style={{ display: 'inline-flex' }}
              >
                {t('backToList')}
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const likeCount = post.likes + (liked ? 1 : 0)
  const heroStyle: React.CSSProperties = {
    ...({ '--ph-a': post.palette[0], '--ph-b': post.palette[1] } as React.CSSProperties),
  }

  return (
    <div className="blog-page">
      <div className="read-progress">
        <div className="read-progress__fill" style={{ width: `${progress}%` }} />
      </div>

      <section className="post-hero" style={heroStyle}>
        <div className="container">
          <div className="post-hero__inner">
            <div className="post-hero__breadcrumb">
              <Link to={link('blog')}>{t('backToList')}</Link>
              <span className="sep">/</span>
              <span>{cats[post.cats[0]]}</span>
            </div>
            <div className="post-hero__cats">
              {post.cats.map((c) => (
                <span key={c} className="post-hero__cat">
                  {cats[c]}
                </span>
              ))}
            </div>
            <h1>{content.title}</h1>
            <div className="post-hero__meta">
              <div className="author-pill">
                <span className="author-pill__avatar">K</span>
                <span>
                  <span className="author-pill__name" style={{ display: 'block' }}>
                    Op. Dr. Kaan Işık
                  </span>
                  <span className="author-pill__role">{t('role')}</span>
                </span>
              </div>
              <span className="post-meta-item">{formatDate(post.date, i18n.language)}</span>
              <span className="post-meta-item">
                {post.read} {t('minRead')}
              </span>
              <span className="post-meta-item">
                {post.views.toLocaleString()} {t('viewShort')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="post-body">
        <div className="container">
          <div className="post-body__inner" ref={bodyRef}>
            <div className="like-bar">
              <button
                className={cn('like-btn', liked && 'is-liked')}
                onClick={toggle}
                aria-pressed={liked}
              >
                <span className="heart">
                  <Icon name="heart" size={14} stroke={2} />
                </span>
                {liked ? t('likedBtn') : t('likeBtn')} · {likeCount}
              </button>
              <div className="like-bar__share">
                {t('share')}:
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Share">
                  <Icon name="send" size={12} stroke={2} />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                  <Icon name="linkedin" size={12} stroke={2} />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="WhatsApp">
                  <Icon name="wa" size={12} stroke={2} />
                </a>
              </div>
            </div>

            <PostBody blocks={content.body} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related">
          <div className="container">
            <div className="related__head">
              <h2>{t('relatedHead')}</h2>
            </div>
            <div className="blog-grid">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
