// =================================================================
// tour.jsx — interactive clinic tour
// =================================================================
const { useState, useEffect, useRef, useMemo } = React;
const _I18N = window.I18N;
const _TOUR_I18N = window.TOUR_I18N;
const _TOUR_POINTS = window.TOUR_POINTS;
const Icon = window.Icon;
const TourIcon = window.TourIcon;

// Decorative floor map for placeholder scenes
function FloorMap({ current }) {
  // 5 dots arranged like a clinic floor plan
  const layout = {
    "entrance":           { x: 50, y: 86 },
    "waiting-area":       { x: 50, y: 62 },
    "consultation-room":  { x: 26, y: 38 },
    "examination-room":   { x: 74, y: 38 },
    "ekg-room":           { x: 50, y: 14 }
  };
  return (
    <svg className="tour-scene__floor" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.4">
      <rect x="6" y="6" width="88" height="88" rx="2" />
      <line x1="6" y1="50" x2="94" y2="50" strokeDasharray="1 2" opacity="0.5" />
      <line x1="50" y1="6" x2="50" y2="94" strokeDasharray="1 2" opacity="0.5" />
      {_TOUR_POINTS.map((p, i) => {
        const pos = layout[p.slug];
        const isActive = p.slug === current;
        return (
          <g key={p.slug}>
            <circle cx={pos.x} cy={pos.y} r={isActive ? 3 : 1.6} fill={isActive ? "#d97757" : "rgba(255,255,255,0.5)"} stroke="none" />
            {isActive && <circle cx={pos.x} cy={pos.y} r="6" fill="none" stroke="#d97757" strokeWidth="0.4" opacity="0.6"><animate attributeName="r" from="3" to="8" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" /></circle>}
          </g>
        );
      })}
    </svg>
  );
}

// Static scene placeholder for a given point
function Scene({ point, lang, isLeaving }) {
  const t = _TOUR_I18N[lang];
  const info = t.points[point.slug];
  return (
    <div className={`tour-scene ${isLeaving ? "is-leaving" : ""}`} style={{ "--bg-a": point.palette[0], "--bg-b": point.palette[1] }}>
      <div className="tour-scene__bg"></div>
      <FloorMap current={point.slug} />
      <div className="tour-scene__vignette"></div>
      <div className="tour-scene__placeholder-tag"><span className="dot"></span> {t.placeholder}</div>
    </div>
  );
}

// Transition video placeholder
function TransitionVideo({ from, to, lang, onEnded }) {
  const t = _TOUR_I18N[lang];
  useEffect(() => {
    const id = setTimeout(onEnded, 1700);
    return () => clearTimeout(id);
  }, [from, to, onEnded]);
  return (
    <div className="tour-video is-active">
      <div className="tour-video__placeholder"></div>
      <div className="tour-video__label"><span className="rec"></span> {t.transitionTag}</div>
      <div className="tour-video__progress">
        <div className="tour-video__caption"><span className="dot"></span> {t.travelingTo} · {t.points[to].title}</div>
        <div className="tour-video__progress-line"><div className="tour-video__progress-fill"></div></div>
        <div className="tour-video__caption" style={{opacity: 0.5}}>{from} → {to}</div>
      </div>
    </div>
  );
}

// Info card
function InfoCard({ point, lang, hidden, index }) {
  const t = _TOUR_I18N[lang];
  const info = t.points[point.slug];
  return (
    <div className={`tour-info ${hidden ? "is-hidden" : ""}`} key={point.slug}>
      <div className="tour-info__step">{t.stepLabel} {String(index + 1).padStart(2,"0")} / {String(_TOUR_POINTS.length).padStart(2,"0")}</div>
      <div className="tour-info__icon"><TourIcon name={point.icon} size={22} stroke={1.5} /></div>
      <h2>{info.title}</h2>
      <p>{info.desc}</p>
    </div>
  );
}

// Bottom rail
function Rail({ current, visited, points, lang, onSelect, dim }) {
  const t = _TOUR_I18N[lang];
  const others = points.filter(p => p.slug !== current.slug);
  return (
    <div className={`tour-rail ${dim ? "is-dim" : ""}`}>
      <div className="tour-rail__head">
        <div className="tour-rail__head-left">{t.progressLabel}</div>
        <div className="tour-rail__progress" aria-hidden="true">
          {points.map((p) => {
            const cls = p.slug === current.slug ? "is-current" : (visited.has(p.slug) ? "is-visited" : "");
            return <span key={p.slug} className={`tour-rail__progress-dot ${cls}`}></span>;
          })}
        </div>
      </div>
      <div className="tour-rail__buttons">
        {others.map(p => {
          const idx = points.findIndex(x => x.slug === p.slug);
          const info = t.points[p.slug];
          return (
            <button key={p.slug} className="tour-btn" onClick={() => onSelect(p)} aria-label={`${t.travelingTo} ${info.title}`}>
              <span className="tour-btn__icon"><TourIcon name={p.icon} size={18} stroke={1.6} /></span>
              <span style={{flex: 1, minWidth: 0}}>
                <span className="tour-btn__num">{t.stepLabel} {String(idx+1).padStart(2,"0")}</span>
                <span className="tour-btn__label">{info.title}</span>
              </span>
              <span className="tour-btn__arrow"><TourIcon name="arrow-right" size={16} stroke={1.8} /></span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Lightweight header (reuses brand and lang switcher)
function TourHeader({ lang, setLang }) {
  return (
    <header className="header is-transparent">
      <div className="container header__inner">
        <a href="index.html" className="brand" aria-label="Home">
          <span className="brand__mark">K</span>
          <span className="brand__name">
            <b>Op. Dr. Kaan Işık</b>
            <span>Cardiac Surgery</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main">
          <a href="index.html#services">{_I18N[lang].nav.services}</a>
          <a href="clinic-tour.html">{_I18N[lang].nav.tour}</a>
          <a href="index.html#faq">FAQ</a>
          <a href="index.html#contact">{_I18N[lang].nav.contact}</a>
        </nav>
        <div className="lang" role="group" aria-label="Language">
          {["tr","en","de"].map(l => (
            <button key={l} className={l === lang ? "is-active" : ""} onClick={() => setLang(l)} aria-pressed={l === lang}>
              <span>{l.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <a href="index.html#contact" className="cta-btn">{_I18N[lang].cta.contact}<Icon name="arrow-right" size={14} /></a>
      </div>
    </header>
  );
}

function ClinicTour() {
  const [lang, setLang] = useState(() => {
    if (typeof navigator !== "undefined") {
      const l = (navigator.language || "tr").slice(0,2).toLowerCase();
      if (["tr","en","de"].includes(l)) return l;
    }
    return "tr";
  });
  const [currentSlug, setCurrentSlug] = useState("entrance");
  const [visited, setVisited] = useState(new Set(["entrance"]));
  const [transition, setTransition] = useState(null); // { from, to } or null
  const [infoHidden, setInfoHidden] = useState(false);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const current = useMemo(() => _TOUR_POINTS.find(p => p.slug === currentSlug), [currentSlug]);
  const currentIdx = useMemo(() => _TOUR_POINTS.findIndex(p => p.slug === currentSlug), [currentSlug]);

  const goTo = (point) => {
    if (transition) return;
    setInfoHidden(true);
    setTransition({ from: currentSlug, to: point.slug });
  };

  const onTransitionEnded = () => {
    if (!transition) return;
    setCurrentSlug(transition.to);
    setVisited(prev => new Set([...prev, transition.to]));
    setTransition(null);
    setTimeout(() => setInfoHidden(false), 100);
  };

  const t = _TOUR_I18N[lang];

  return (
    <div className="tour-page">
      <TourHeader lang={lang} setLang={setLang} />
      <a className="tour-back" href="index.html">
        <TourIcon name="arrow-left" size={12} stroke={2} /> {t.backHome}
      </a>
      <div className="tour-stage">
        <Scene point={current} lang={lang} isLeaving={!!transition} />
        {transition && <TransitionVideo from={transition.from} to={transition.to} lang={lang} onEnded={onTransitionEnded} />}
        <InfoCard point={current} lang={lang} hidden={infoHidden} index={currentIdx} />
        <Rail current={current} visited={visited} points={_TOUR_POINTS} lang={lang} onSelect={goTo} dim={!!transition} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ClinicTour />);
