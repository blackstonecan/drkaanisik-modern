import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'
import { BlogCard } from '@/components/blog/BlogCard'
import { BLOG_POSTS, type BlogCategorySlug } from '@/data/blogPosts'
import { useDebouncedValue } from '@/lib/hooks/useDebouncedValue'
import { cn } from '@/lib/utils'

type Sort = 'recent' | 'popular' | 'likes'
type View = 'grid' | 'list'

export function BlogList() {
  const { t } = useTranslation('blog')
  const [cat, setCat] = useState<BlogCategorySlug | 'all'>('all')
  const [q, setQ] = useState('')
  const debouncedQ = useDebouncedValue(q, 300)
  const [sort, setSort] = useState<Sort>('recent')
  const [view, setView] = useState<View>('grid')

  const cats = t('cats', { returnObjects: true }) as Record<BlogCategorySlug, string>
  const postsContent = t('posts_content', { returnObjects: true }) as Record<
    string,
    { title: string; excerpt: string }
  >
  const title = t('title', { returnObjects: true }) as string[]
  const listHead = t('listHead', { returnObjects: true }) as string[]

  const ranked = useMemo<BlogCategorySlug[]>(() => {
    const counts = new Map<BlogCategorySlug, number>()
    BLOG_POSTS.forEach((p) => {
      p.cats.forEach((c) => counts.set(c, (counts.get(c) ?? 0) + p.views))
    })
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([slug]) => slug)
  }, [])

  const filtered = useMemo(() => {
    let posts = BLOG_POSTS.slice()
    if (cat !== 'all') posts = posts.filter((p) => p.cats.includes(cat))
    if (debouncedQ.trim()) {
      const ql = debouncedQ.toLowerCase()
      posts = posts.filter((p) => {
        const c = postsContent[p.slug]
        if (!c) return false
        return (
          c.title.toLowerCase().includes(ql) ||
          (c.excerpt ?? '').toLowerCase().includes(ql)
        )
      })
    }
    if (sort === 'recent') posts.sort((a, b) => b.date.localeCompare(a.date))
    if (sort === 'popular') posts.sort((a, b) => b.views - a.views)
    if (sort === 'likes') posts.sort((a, b) => b.likes - a.likes)
    return posts
  }, [cat, debouncedQ, sort, postsContent])

  const catCount = (slug: BlogCategorySlug) =>
    BLOG_POSTS.filter((p) => p.cats.includes(slug)).length

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__inner">
            <div>
              <h1>
                {title.map((s, i) =>
                  i === 3 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>,
                )}
              </h1>
              <p className="blog-hero__lead">{t('lead')}</p>
            </div>
            <div className="blog-hero__count">
              <b>{BLOG_POSTS.length}</b>
              <span>{t('countLabel')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="popular">
        <div className="container">
          <div className="popular__head">
            <span className="popular__title">{t('popular')}</span>
            <span className="popular__count">{t('popularSub')}</span>
          </div>
          <div className="popular__chips">
            <button
              className={cn('cat-chip', cat === 'all' && 'is-active')}
              onClick={() => setCat('all')}
            >
              {t('all')}
              <span className="cat-chip__count">{BLOG_POSTS.length}</span>
            </button>
            {ranked.map((slug, i) => (
              <button
                key={slug}
                className={cn('cat-chip', cat === slug && 'is-active')}
                onClick={() => setCat(slug)}
              >
                <span className="cat-chip__rank">#{i + 1}</span>
                {cats[slug]}
                <span className="cat-chip__count">{catCount(slug)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="blog-filters">
          <div className="search">
            <span className="search__icon">
              <Icon name="search" size={16} stroke={1.8} />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('search')}
              aria-label={t('search')}
            />
          </div>
          <div className="sort">
            {t('sort')}:&nbsp;
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="recent">{t('sortRecent')}</option>
              <option value="popular">{t('sortPopular')}</option>
              <option value="likes">{t('sortLikes')}</option>
            </select>
          </div>
          <div className="view-toggle">
            <button
              className={view === 'grid' ? 'is-active' : ''}
              onClick={() => setView('grid')}
              aria-label="Grid"
            >
              <Icon name="grid" size={14} />
            </button>
            <button
              className={view === 'list' ? 'is-active' : ''}
              onClick={() => setView('list')}
              aria-label="List"
            >
              <Icon name="list" size={14} />
            </button>
          </div>
        </div>

        <section className="blog-list">
          <div className="blog-list__head">
            <h3>
              {listHead[0]}
              <em>{listHead[1]}</em>
            </h3>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: 'var(--muted)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              {t('showing')} {filtered.length} {t('of')} {BLOG_POSTS.length} {t('posts')}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <h3>{t('empty.title')}</h3>
              <p>{t('empty.body')}</p>
            </div>
          ) : (
            <div className={cn('blog-grid', view === 'list' && 'blog-grid--list')}>
              {filtered.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
