// =================================================================
// App.jsx — single-page site for Op. Dr. Kaan Işık (fictional)
// =================================================================
const { useState, useEffect, useRef, useCallback, useMemo } = React;
const _I18N = window.I18N;
const Icon = window.Icon;

// ---------- Hooks ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function useCountUp(target, start) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const dur = 1600; const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setN(Math.round(target * eased));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return n;
}

// ---------- Disclaimer popup ----------
function Popup({ open, onClose, lang, setLang }) {
  const t = _I18N[lang].popup;
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="popup-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="popup" ref={ref} role="dialog" aria-modal="true" aria-labelledby="popup-title">
        <button className="popup__close" onClick={onClose} aria-label="Close"><Icon name="x" size={16} /></button>
        <div className="popup__lang">
          {["tr","en","de"].map(l => (
            <button key={l} className={l === lang ? "is-active" : ""} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
        <div className="popup__eyebrow">{t.eyebrow}</div>
        <h3 id="popup-title">{t.title}</h3>
        {t.body.map((p, i) => <p key={i}>{p}</p>)}
        <div className="popup__footer">
          <span className="popup__attr">{t.attr} · <a href="#" onClick={(e) => e.preventDefault()}>github</a></span>
          <button className="popup__btn" onClick={onClose}>{t.btn}</button>
        </div>
      </div>
    </div>
  );
}

// ---------- Header ----------
function Header({ solid, lang, setLang, onCta }) {
  const t = _I18N[lang];
  return (
    <header className={`header ${solid ? "is-solid" : "is-transparent"}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="Home">
          <span className="brand__mark">K</span>
          <span className="brand__name">
            <b>Op. Dr. Kaan Işık</b>
            <span>Cardiac Surgery</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#services">{t.nav.services}</a>
          <a href="clinic-tour.html">{t.nav.tour}</a>
          <a href="blog.html">{t.nav.blog}</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="lang" role="group" aria-label="Language">
          {["tr","en","de"].map(l => (
            <button key={l} className={l === lang ? "is-active" : ""} onClick={() => setLang(l)} aria-pressed={l === lang}>
              <span>{l.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <a href="#contact" className="cta-btn" onClick={onCta}>{t.cta.contact}<Icon name="arrow-right" size={14} /></a>
        <button className="hamburger" aria-label="Menu"><span/><span/><span/></button>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero({ lang }) {
  const t = _I18N[lang].hero;
  return (
    <section className="hero" id="top">
      <div className="hero__bg" />
      <div className="hero__placeholder" />
      <div className="hero__placeholder-label">
        <span className="dot" /> hero video · clinic walk-in loop · 1080p mp4 placeholder
      </div>
      <div className="container hero__content">
        <div className="hero__eyebrow">{t.eyebrow}</div>
        <h1>
          {t.title.map((s, i) => i === 3 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>)}
        </h1>
        <p className="hero__sub">{t.sub}</p>
        <div className="hero__actions">
          <a href="#contact" className="cta-btn">{_I18N[lang].cta.contact}<Icon name="arrow-right" size={14} /></a>
          <a href="#services" className="cta-btn cta-btn--ghost">{_I18N[lang].nav.services}</a>
        </div>
      </div>
      <div className="hero__meta">
        {t.meta.map((m, i) => <div key={i} className="hero__meta-line">{m}</div>)}
      </div>
      <div className="scroll-cue">
        <span>{t.scroll}</span>
        <span className="scroll-cue__line" />
      </div>
    </section>
  );
}

// ---------- Doctor section ----------
function DoctorSection({ lang }) {
  const t = _I18N[lang].doctor;
  const [open, setOpen] = useState(false);
  return (
    <section className="section" id="doctor">
      <div className="container">
        <div className="doctor">
          <div className="doctor__photo reveal">
            <span className="doctor__photo-label">portrait · 4:5 placeholder</span>
            <span className="doctor__photo-caption">drop in: studio portrait, soft side light, neutral bg</span>
            <div className="doctor__badge"><span>est.</span><b>2018</b></div>
          </div>
          <div className="doctor__info reveal">
            <div className="eyebrow">{t.eyebrow}</div>
            <h2>{t.heading.map((s, i) => i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>)}</h2>
            <div className="doctor__credentials" style={{marginTop: 18}}>{t.credentials}</div>
            <div className="doctor__bio">
              {t.bioShort.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <button className={`expand-btn ${open ? "is-open" : ""}`} onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="doctor-more">
              <span className="icon"><Icon name="chev-down" size={14} /></span>
              {open ? t.collapse : t.expand}
            </button>
            <div id="doctor-more" className={`doctor__more ${open ? "is-open" : ""}`}>
              <div className="doctor__more-inner">
                <div className="divider-label" style={{margin: "0 0 8px"}}>{t.timelineTitle}</div>
                <div className="timeline">
                  {t.timeline.map((it, i) => (
                    <div key={i} className="timeline-item">
                      <div className="timeline-item__period">{it.period}</div>
                      <div>
                        <div className="timeline-item__title">{it.title}</div>
                        <div className="timeline-item__detail">{it.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="divider-label">{t.memberships}</div>
                <div className="tags">
                  {t.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stats lang={lang} />
      </div>
    </section>
  );
}

// ---------- Stats ----------
function Stats({ lang }) {
  const t = _I18N[lang].stats;
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div className="stats reveal" ref={ref}>
      {t.items.map((s, i) => <StatItem key={i} item={s} go={inView} />)}
    </div>
  );
}
function StatItem({ item, go }) {
  const target = parseInt(item.num, 10);
  const n = useCountUp(target, go);
  return (
    <div className="stat">
      <div className="stat__num">{n}<em>{item.suffix}</em></div>
      <div className="stat__label">{item.label}</div>
    </div>
  );
}

// ---------- Services ----------
function ServicesSection({ lang }) {
  const t = _I18N[lang].services;
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.heading.map((s, i) => i === 3 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>)}</h2>
          <p className="section-head__lead">{t.lead}</p>
        </div>
        <div className="services-grid">
          {t.cards.map((c, i) => (
            <div key={i} className="service-card reveal">
              <div className="service-card__num">— {c.num}</div>
              <div className="service-card__icon"><Icon name={c.icon} size={28} stroke={1.5} /></div>
              <h3>{c.title}</h3>
              <p className="service-card__desc">{c.desc}</p>
              <ul className="proc-list">
                {c.procedures.map((p, j) => (
                  <li key={j} className={p.featured ? "proc-featured" : ""}>
                    <span className="proc-dot"></span>
                    <span className="proc-name">{p.name}</span>
                    {p.badge && <span className="proc-badge">★ {p.badge}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="signature reveal">
          <div className="signature__icon"><Icon name="pulse" size={22} stroke={2} /></div>
          <div className="signature__text">
            <b>{t.signature.title}</b>
            <span>{t.signature.sub}</span>
          </div>
          <div className="signature__note">{t.signature.note}</div>
        </div>
      </div>
    </section>
  );
}

// ---------- Trust band (Intl patients) ----------
function TrustSection({ lang }) {
  const t = _I18N[lang].trust;
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.heading.map((s, i) => i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>)}</h2>
          <p className="section-head__lead">{t.lead}</p>
        </div>
        <div className="trust-band reveal">
          {t.items.map((it, i) => (
            <div key={i} className="trust-card">
              <div className="trust-card__icon"><Icon name={it.icon} size={20} /></div>
              <div>
                <b>{it.title}</b>
                <span>{it.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function FAQSection({ lang }) {
  const t = _I18N[lang].faq;
  const [open, setOpen] = useState(new Set([0]));
  const toggle = (i) => {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.heading.map((s, i) => i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>)}</h2>
          <p className="section-head__lead">{t.lead}</p>
        </div>
        <div className="faq-list">
          {t.items.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <div key={i} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button className="faq-q" onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <span className="faq-q__num">{String(i+1).padStart(2,"0")}</span>
                  <span className="faq-q__text">{item.q}</span>
                  <span className="faq-q__icon"><Icon name="plus" size={16} /></span>
                </button>
                <div className="faq-a">
                  <div className="faq-a__inner"><div>{item.a}</div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function ContactSection({ lang }) {
  const t = _I18N[lang].contact;
  const [mode, setMode] = useState("phone"); // phone | email
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };
  return (
    <section className="section section--ink" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.heading.map((s, i) => i === 1 ? <em key={i}>{s}</em> : <span key={i}>{s}</span>)}</h2>
          <p className="section-head__lead">{t.lead}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-row">
              <div className="contact-row__icon"><Icon name="phone" size={18} /></div>
              <div>
                <div className="contact-row__label">{t.labels.phone}</div>
                <div className="contact-row__value"><a href="tel:+902420000000">+90 (242) 000 00 00</a></div>
                <div className="contact-row__sub">{t.labels.addressSub}</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-row__icon"><Icon name="mail" size={18} /></div>
              <div>
                <div className="contact-row__label">{t.labels.email}</div>
                <div className="contact-row__value"><a href="mailto:info@drkaanisik.com">info@drkaanisik.com</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-row__icon"><Icon name="pin" size={18} /></div>
              <div style={{flex: 1}}>
                <div className="contact-row__label">{t.labels.address}</div>
                <div className="contact-row__value" style={{fontSize: 15, fontFamily: "var(--sans)"}}>{t.labels.addressLine}</div>
                <div className="map-mini">
                  <div className="map-mini__open"><Icon name="arrow-right" size={10} stroke={2} /> &nbsp;{t.maps.open}</div>
                  <div className="map-mini__pin" />
                  <div className="map-mini__label">{t.maps.label}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="contact-row__label" style={{marginBottom: 10}}>{t.labels.social}</div>
              <div className="social-row">
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram"><Icon name="instagram" size={16} /></a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="WhatsApp"><Icon name="wa" size={16} /></a>
              </div>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submit}>
            <h3>{t.form.title}</h3>
            <p className="contact-form__lead">{t.form.lead}</p>
            <div className="field">
              <label htmlFor="cf-name">{t.form.name}</label>
              <input id="cf-name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className={`switch ${mode === "email" ? "is-email" : ""}`}>
              <span className="switch__indicator" />
              <button type="button" className={mode === "phone" ? "is-active" : ""} onClick={() => setMode("phone")}>
                <Icon name="phone" size={12} stroke={2} /> {t.form.switchPhone}
              </button>
              <button type="button" className={mode === "email" ? "is-active" : ""} onClick={() => setMode("email")}>
                <Icon name="mail" size={12} stroke={2} /> {t.form.switchEmail}
              </button>
            </div>
            {mode === "phone" ? (
              <div className="field">
                <label htmlFor="cf-phone">{t.form.phone}</label>
                <input id="cf-phone" type="tel" placeholder="+90 ..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              </div>
            ) : (
              <div className="field">
                <label htmlFor="cf-email">{t.form.email}</label>
                <input id="cf-email" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            )}
            <div className="field">
              <label htmlFor="cf-msg">{t.form.message}</label>
              <textarea id="cf-msg" rows="4" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
            <button className="submit-btn" type="submit"><Icon name="send" size={14} stroke={2} />{t.form.submit}</button>
            {sent && (
              <div className="toast"><Icon name="check" size={16} stroke={2} />{t.form.success}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// ---------- WhatsApp float ----------
function WhatsApp({ lang }) {
  const labels = { tr: "WhatsApp ile yaz", en: "Chat on WhatsApp", de: "WhatsApp-Chat" };
  return (
    <a className="wa-float" href="https://wa.me/902420000000?text=Merhaba" target="_blank" rel="noopener" onClick={(e) => e.preventDefault()}>
      <span className="wa-icon"><Icon name="wa" size={28} stroke={1.8} /></span>
      <span className="wa-label">{labels[lang]}</span>
    </a>
  );
}

// ---------- Footer ----------
function Footer({ lang }) {
  const t = _I18N[lang].footer;
  const nav = _I18N[lang].nav;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <div className="brand" style={{marginBottom: 16}}>
              <span className="brand__mark">K</span>
              <span className="brand__name">
                <b>Op. Dr. Kaan Işık</b>
                <span>Cardiac Surgery</span>
              </span>
            </div>
            <p style={{color: "var(--muted)", fontSize: 14, maxWidth: "32ch"}}>{t.tagline}</p>
          </div>
          <div className="footer__col">
            <h5>{t.cols.contact}</h5>
            <a href="tel:+902420000000">+90 (242) 000 00 00</a>
            <a href="mailto:info@drkaanisik.com">info@drkaanisik.com</a>
            <p>Konyaaltı, Antalya · TR</p>
          </div>
          <div className="footer__col">
            <h5>{t.cols.nav}</h5>
            <a href="#services">{nav.services}</a>
            <a href="#trust">{nav.tour}</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">{nav.contact}</a>
          </div>
          <div className="footer__col">
            <h5>{t.cols.legal}</h5>
            <a href="#" onClick={(e)=>e.preventDefault()}>{t.links.privacy}</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>{t.links.terms}</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>{t.links.kvkk}</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t.bottom}</span>
          <span>{t.attr} · <a href="#" onClick={(e)=>e.preventDefault()}>github</a></span>
        </div>
      </div>
    </footer>
  );
}

// ---------- App ----------
function App() {
  const [lang, setLang] = useState("tr");
  const [popup, setPopup] = useState(true);
  const [solid, setSolid] = useState(false);

  // Header solid state on scroll past hero
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > window.innerHeight - 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Set <html lang>
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  useReveal();

  return (
    <>
      <Header solid={solid} lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <DoctorSection lang={lang} />
      <ServicesSection lang={lang} />
      <TrustSection lang={lang} />
      <FAQSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
      <WhatsApp lang={lang} />
      <Popup open={popup} onClose={() => setPopup(false)} lang={lang} setLang={setLang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
