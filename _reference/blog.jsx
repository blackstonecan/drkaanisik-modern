// blog.jsx — list + detail (single-file routing via hash)
const { useState, useEffect, useRef, useMemo } = React;
const _I18N = window.I18N;
const _BLOG_I18N = window.BLOG_I18N;
const _BLOG_POSTS = window.BLOG_POSTS;
const _BLOG_CATEGORIES = window.BLOG_CATEGORIES;
const Icon = window.Icon;

function fmtDate(iso, lang) {
  const d = new Date(iso);
  const opts = { year: "numeric", month: "short", day: "numeric" };
  const locale = { tr: "tr-TR", en: "en-GB", de: "de-DE" }[lang] || "en-GB";
  return d.toLocaleDateString(locale, opts);
}

function BlogHeader({ lang, setLang, onBack }) {
  return (
    <header className="header is-solid">
      <div className="container header__inner">
        <a href="index.html" className="brand"><span className="brand__mark">K</span>
          <span className="brand__name"><b>Op. Dr. Kaan Işık</b><span>Cardiac Surgery</span></span></a>
        <nav className="nav">
          <a href="index.html#services">{_I18N[lang].nav.services}</a>
          <a href="clinic-tour.html">{_I18N[lang].nav.tour}</a>
          <a href="blog.html">{_I18N[lang].nav.blog}</a>
          <a href="index.html#contact">{_I18N[lang].nav.contact}</a>
        </nav>
        <div className="lang">{["tr","en","de"].map(l => (
          <button key={l} className={l === lang ? "is-active" : ""} onClick={() => setLang(l)}><span>{l.toUpperCase()}</span></button>
        ))}</div>
        <a href="index.html#contact" className="cta-btn">{_I18N[lang].cta.contact}<Icon name="arrow-right" size={14} /></a>
      </div>
    </header>
  );
}

function BlogCard({ post, lang, onOpen }) {
  const t = _BLOG_I18N[lang];
  const c = t.posts_content[post.slug] || { title: post.slug, excerpt: "" };
  const cat = post.cats[0];
  return (
    <button className="blog-card" onClick={() => onOpen(post.slug)}>
      <div className="blog-card__image" style={{ "--bg-a": post.palette[0], "--bg-b": post.palette[1] }}>
        <span className="blog-card__cat">{t.cats[cat]}</span>
        {post.featured && <span className="blog-card__featured">★ {t.popular.split(" ")[0]}</span>}
        <span className="blog-card__image-tag">image · {post.slug}.jpg</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">{fmtDate(post.date, lang)} · {post.read} {t.minRead}</div>
        <h3 className="blog-card__title">{c.title}</h3>
        <p className="blog-card__excerpt">{c.excerpt}</p>
        <div className="blog-card__footer">
          <div className="blog-card__stats">
            <span className="blog-card__stat"><Icon name="heart" size={12} stroke={2}/>{post.likes}</span>
            <span className="blog-card__stat">◇ {post.views.toLocaleString()}</span>
          </div>
          <span className="blog-card__read">{t.read}<Icon name="arrow-right" size={12} stroke={2}/></span>
        </div>
      </div>
    </button>
  );
}

function BlogList({ lang, onOpen }) {
  const t = _BLOG_I18N[lang];
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [sort, setSort] = useState("recent");
  const [view, setView] = useState("grid");

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQ(q), 300);
    return () => clearTimeout(id);
  }, [q]);

  // Top categories by total views
  const ranked = useMemo(() => {
    const counts = {};
    _BLOG_POSTS.forEach(p => p.cats.forEach(c => { counts[c] = (counts[c] || 0) + p.views; }));
    return Object.entries(counts).sort((a,b) => b[1] - a[1]).map(([slug]) => slug);
  }, []);

  const filtered = useMemo(() => {
    let posts = _BLOG_POSTS.slice();
    if (cat !== "all") posts = posts.filter(p => p.cats.includes(cat));
    if (debouncedQ.trim()) {
      const ql = debouncedQ.toLowerCase();
      posts = posts.filter(p => {
        const c = t.posts_content[p.slug];
        if (!c) return false;
        return c.title.toLowerCase().includes(ql) || (c.excerpt || "").toLowerCase().includes(ql);
      });
    }
    if (sort === "recent") posts.sort((a,b) => b.date.localeCompare(a.date));
    if (sort === "popular") posts.sort((a,b) => b.views - a.views);
    if (sort === "likes") posts.sort((a,b) => b.likes - a.likes);
    return posts;
  }, [cat, debouncedQ, sort, lang, t.posts_content]);

  const catCount = (slug) => _BLOG_POSTS.filter(p => p.cats.includes(slug)).length;

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__inner">
            <div>
              <h1>{t.title.map((s, i) => i === 3 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>)}</h1>
              <p className="blog-hero__lead">{t.lead}</p>
            </div>
            <div className="blog-hero__count">
              <b>{_BLOG_POSTS.length}</b>
              <span>{t.countLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="popular">
        <div className="container">
          <div className="popular__head">
            <span className="popular__title">{t.popular}</span>
            <span className="popular__count">{t.popularSub}</span>
          </div>
          <div className="popular__chips">
            <button className={`cat-chip ${cat === "all" ? "is-active" : ""}`} onClick={() => setCat("all")}>
              {t.all}<span className="cat-chip__count">{_BLOG_POSTS.length}</span>
            </button>
            {ranked.map((slug, i) => (
              <button key={slug} className={`cat-chip ${cat === slug ? "is-active" : ""}`} onClick={() => setCat(slug)}>
                <span className="cat-chip__rank">#{i+1}</span>
                {t.cats[slug]}
                <span className="cat-chip__count">{catCount(slug)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="blog-filters">
          <div className="search">
            <span className="search__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></span>
            <input value={q} onChange={e => setQ(e.target.value)} placeholder={t.search} aria-label={t.search} />
          </div>
          <div className="sort">
            {t.sort}:&nbsp;
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="recent">{t.sortRecent}</option>
              <option value="popular">{t.sortPopular}</option>
              <option value="likes">{t.sortLikes}</option>
            </select>
          </div>
          <div className="view-toggle">
            <button className={view === "grid" ? "is-active" : ""} onClick={() => setView("grid")} aria-label="Grid"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg></button>
            <button className={view === "list" ? "is-active" : ""} onClick={() => setView("list")} aria-label="List"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="3" rx="1"/><rect x="3" y="10.5" width="18" height="3" rx="1"/><rect x="3" y="17" width="18" height="3" rx="1"/></svg></button>
          </div>
        </div>

        <section className="blog-list">
          <div className="blog-list__head">
            <h3>{t.listHead[0]}<em>{t.listHead[1]}</em></h3>
            <span style={{fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase"}}>
              {t.showing} {filtered.length} {t.of} {_BLOG_POSTS.length} {t.posts}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <h3>{t.empty.title}</h3>
              <p>{t.empty.body}</p>
            </div>
          ) : (
            <div className={`blog-grid ${view === "list" ? "blog-grid--list" : ""}`}>
              {filtered.map(p => <BlogCard key={p.slug} post={p} lang={lang} onOpen={onOpen} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function BlogPost({ slug, lang, onBack, onOpen }) {
  const t = _BLOG_I18N[lang];
  const post = _BLOG_POSTS.find(p => p.slug === slug);
  const content = t.posts_content[slug];
  const [liked, setLiked] = useState(() => {
    try { return localStorage.getItem(`like:${slug}`) === "1"; } catch { return false; }
  });
  const [progress, setProgress] = useState(0);
  const bodyRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const el = bodyRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const h = el.offsetHeight;
      const wv = window.innerHeight;
      const sc = window.scrollY + wv;
      const pct = Math.max(0, Math.min(1, (sc - top) / h));
      setProgress(pct * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post || !content) return <div style={{padding: 80, textAlign: "center"}}>Not found.</div>;

  const toggleLike = () => {
    setLiked(v => {
      const next = !v;
      try { localStorage.setItem(`like:${slug}`, next ? "1" : "0"); } catch {}
      return next;
    });
  };
  const likeCount = post.likes + (liked ? 1 : 0);

  const related = _BLOG_POSTS.filter(p => p.slug !== slug && p.cats.some(c => post.cats.includes(c))).slice(0, 3);

  return (
    <div className="blog-page">
      <div className="read-progress"><div className="read-progress__fill" style={{ width: `${progress}%` }} /></div>
      <section className="post-hero" style={{ "--ph-a": post.palette[0], "--ph-b": post.palette[1] }}>
        <div className="container">
          <div className="post-hero__inner">
            <div className="post-hero__breadcrumb">
              <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>{t.backToList}</a>
              <span className="sep">/</span>
              <span>{t.cats[post.cats[0]]}</span>
            </div>
            <div className="post-hero__cats">
              {post.cats.map(c => <span key={c} className="post-hero__cat">{t.cats[c]}</span>)}
            </div>
            <h1>{content.title}</h1>
            <div className="post-hero__meta">
              <div className="author-pill">
                <span className="author-pill__avatar">K</span>
                <span>
                  <span className="author-pill__name" style={{display: "block"}}>Op. Dr. Kaan Işık</span>
                  <span className="author-pill__role">{t.role}</span>
                </span>
              </div>
              <span className="post-meta-item">{fmtDate(post.date, lang)}</span>
              <span className="post-meta-item">{post.read} {t.minRead}</span>
              <span className="post-meta-item">{post.views.toLocaleString()} {t.viewShort}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="post-body">
        <div className="container">
          <div className="post-body__inner" ref={bodyRef}>
            <div className="like-bar">
              <button className={`like-btn ${liked ? "is-liked" : ""}`} onClick={toggleLike} aria-pressed={liked}>
                <span className="heart"><Icon name="heart" size={14} stroke={2}/></span>
                {liked ? t.likedBtn : t.likeBtn} · {likeCount}
              </button>
              <div className="like-bar__share">
                {t.share}:
                <a href="#" onClick={(e)=>e.preventDefault()} aria-label="Share"><Icon name="send" size={12} stroke={2}/></a>
                <a href="#" onClick={(e)=>e.preventDefault()} aria-label="LinkedIn"><Icon name="linkedin" size={12} stroke={2}/></a>
                <a href="#" onClick={(e)=>e.preventDefault()} aria-label="WhatsApp"><Icon name="wa" size={12} stroke={2}/></a>
              </div>
            </div>

            <div className="post-content">
              {content.body.map((b, i) => {
                if (typeof b === "string") return <p key={i}>{b}</p>;
                if (b.h2) return <h2 key={i}>{b.h2}</h2>;
                if (b.h3) return <h3 key={i}>{b.h3}</h3>;
                if (b.quote) return <blockquote key={i}>{b.quote}</blockquote>;
                return null;
              })}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related">
          <div className="container">
            <div className="related__head">
              <h2>{t.relatedHead}</h2>
            </div>
            <div className="blog-grid">
              {related.map(p => <BlogCard key={p.slug} post={p} lang={lang} onOpen={onOpen} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function BlogApp() {
  const [lang, setLang] = useState(() => {
    try {
      const l = (navigator.language || "tr").slice(0,2).toLowerCase();
      if (["tr","en","de"].includes(l)) return l;
    } catch {}
    return "tr";
  });
  const [slug, setSlug] = useState(() => {
    const h = (location.hash || "").replace(/^#\/?/, "");
    return h && h.startsWith("post/") ? h.slice(5) : null;
  });

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const onHash = () => {
      const h = (location.hash || "").replace(/^#\/?/, "");
      setSlug(h && h.startsWith("post/") ? h.slice(5) : null);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const open = (s) => { location.hash = `/post/${s}`; };
  const back = () => { location.hash = ""; };

  return (
    <>
      <BlogHeader lang={lang} setLang={setLang} />
      {slug ? <BlogPost slug={slug} lang={lang} onBack={back} onOpen={open} /> : <BlogList lang={lang} onOpen={open} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BlogApp />);
