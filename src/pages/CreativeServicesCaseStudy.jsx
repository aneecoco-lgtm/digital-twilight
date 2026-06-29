import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './CreativeServicesCaseStudy.css'

/* A A A MOCK UPS — ordered by the numeric prefix in the original folder */
const marqueeImages = [
  // 2
  '/images/cs/mock-GASTRO_PHOTOGRAPHY.jpg',
  // 3
  '/images/cs/mock-ADSMOCKUP.jpg',
  // 4
  '/images/cs/mock-Branding_Mockup_1.jpg',
  // 5
  '/images/cs/mock-Google_poster_design,_digital_twilightzurich.jpg',
  '/images/cs/mock-brochure_design_zurich.jpg',
  // 6
  '/images/cs/mock-business_cards.jpg',
  '/images/cs/mock-graphic_design_magazine.jpg',
  // 7
  '/images/cs/mock-Esnr,juniors_connect,_Digital_Twilight_switzerland.png',
  '/images/cs/mock-Notepad_Mockup_Wed.jpg.jpg.jpg.jpg',
  // 10
  '/images/cs/mock-10-untitled.jpg',
  '/images/cs/mock-10-Screenshot_2026-06-19.png',
  // 11
  '/images/cs/mock-11.png',
  // 12
  '/images/cs/mock-smida.jpg.jpg.jpg.jpg',
  // unnumbered
  '/images/cs/mock-MAGAZINE_MOCK_UP.jpg',
  '/images/cs/mock-REZZONICO_MOCKUP_BAGS.png',
  '/images/cs/mock-ROLL_UP_mockup_esnr.png',
  '/images/cs/mock-banner_Mockup_20.png',
  '/images/cs/mock-bsiness_cards_vforvisible.jpg',
  '/images/cs/mock-digital_twilight_ribbon.jpg',
  '/images/cs/mock-website_creation_digital_twilight.png',
  // previously included extras
  '/images/cs/mock-PORTOFINO_PRESENTAZIONE_ESTERNA.jpg',
  '/images/cs/mock-ESNR__FOTOBRAIN_FOR_WEB.jpg',
  '/images/cs/mock-EVOLVE_moonbre__logo_mock_up.png',
  '/images/cs/mock-Screenshot_2023-12-05_at_19.26.13.png',
  '/images/cs/mock-Screenshot_2026-03-26_at_12.27.43.png',
  '/images/cs/mock-Screenshot_2026-03-26_at_12.27.53.png',
  '/images/cs/mock-Screenshot_2026-03-26_at_12.29.04.png',
  '/images/cs/mock-Screenshot_2026-06-12_at_17.43.43.png',
]

/* Mouse-wheel horizontal scroll on the marquee strip */
function useMarqueeScroll() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e) => {
      // only hijack when the strip is under the cursor
      e.preventDefault()
      el.scrollLeft += e.deltaY + e.deltaX
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])
  return ref
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('csp-visible'); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* Sliding ticker inside each placeholder */
function Ticker({ label = 'Mockup' }) {
  const words = Array(12).fill(label)
  return (
    <div className="csp-ticker-wrap">
      <div className="csp-ticker">
        {words.map((w, i) => (
          <span key={i} className="csp-ticker-item">
            {w} <span className="csp-ticker-dot">·</span>
          </span>
        ))}
        {/* duplicate for seamless loop */}
        {words.map((w, i) => (
          <span key={`b${i}`} className="csp-ticker-item">
            {w} <span className="csp-ticker-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`csp-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const categories = [
  {
    num: '01',
    title: 'Logo & Brand Identities',
    sub: 'Print & Collateral',
    tags: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Stationery', 'Poster', 'Roll-up', 'Certificate'],
    body: 'From the initial mark to a full visual system. Every surface a brand touches — designed with the same rigour and attention.',
    mains: 2, // number of large placeholder blocks
    accent: ['A', 'B', 'C'],
  },
  {
    num: '02',
    title: 'Brand & Event Photography',
    sub: 'Art Direction · Post-Production',
    tags: ['Brand Photography', 'Event Coverage', 'Congress', 'Portraiture', 'Art Direction', 'Retouching'],
    body: 'Shot with intention. Brand portraiture, event documentation and editorial direction — every frame a considered piece of communication.',
    mains: 3,
    accent: ['A', 'B', 'C'],
  },
  {
    num: '03',
    title: 'Videography',
    sub: 'Film · Motion · Social Content',
    tags: ['Brand Film', 'Awareness Campaign', 'Social & Reels', 'Event Video', 'Motion Graphics', 'Sound & Edit'],
    body: 'Visual storytelling that moves. Brand films, social content and event coverage — from concept to final delivery.',
    mains: 2,
    accent: ['A', 'B'],
  },
]

export default function CreativeServicesCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const marqueeRef = useMarqueeScroll()

  return (
    <div className="csp-page">

      {/* ── NAV ── */}
      <nav className="csp-nav">
        <Link to="/" className="csp-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.1"/>
          </svg>
          Work
        </Link>
        <span className="csp-nav-title">Creative Services</span>
        <span className="csp-nav-loc">Zürich, CH</span>
      </nav>

      {/* ── HERO ── */}
      <header className="csp-hero">
        <Reveal className="csp-hero-label-wrap">
          <span className="csp-eyebrow">Digital Twilight · Services</span>
        </Reveal>
        <Reveal delay={60} className="csp-hero-title-wrap">
          <h1 className="csp-hero-title">Creative<br/>Services</h1>
        </Reveal>
        {/* Hero — auto-scrolling image marquee (mouse-wheel scrollable) */}
        <div className="csp-hero-img-wrap">
          <div className="csp-marquee-strip" ref={marqueeRef}>
            <div className="csp-marquee-track">
              {marqueeImages.map((src, i) => (
                <div className="csp-marquee-item" key={i}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Reveal delay={160} className="csp-hero-foot">
          <p className="csp-hero-desc">Photography · Film · Brand Identity · Print · Art Direction</p>
          <p className="csp-hero-body">A full creative offering — from the first mark of a brand identity to the last frame of a brand film. For organisations and people who understand that visual communication is the argument.</p>
        </Reveal>
      </header>

      {/* ── CATEGORY SECTIONS ── */}
      {categories.map((cat, ci) => (
        <section className="csp-section" key={cat.num}>

          {/* Section header — editorial index bar */}
          <Reveal className="csp-sec-head">
            <span className="csp-sec-num">{cat.num}</span>
            <div className="csp-sec-info">
              <span className="csp-sec-title">{cat.title}</span>
              <span className="csp-sec-sep">·</span>
              <span className="csp-sec-sub">{cat.sub}</span>
            </div>
            <div className="csp-sec-tags">
              {cat.tags.map(t => <span key={t} className="csp-tag">{t}</span>)}
            </div>
          </Reveal>

          {/* Main large image */}
          <Reveal delay={60} className="csp-main-img-wrap">
            <div className="csp-main-img">
              <div className="csp-hatch" />
              <Ticker label={cat.title} />
            </div>
          </Reveal>

          {/* Body + side mockup row */}
          <div className="csp-sec-row">
            <Reveal className="csp-sec-body-wrap">
              <p className="csp-sec-body">{cat.body}</p>
            </Reveal>
            {cat.mains >= 2 && (
              <div className="csp-side-imgs">
                {cat.accent.slice(1).map((l, i) => (
                  <Reveal key={l} delay={i * 80} className="csp-side-img-wrap">
                    <div className="csp-side-img">
                      <div className="csp-hatch" />
                      <Ticker label={cat.sub} />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="csp-divider" />

        </section>
      ))}

      {/* ── CLOSING ── */}
      <section className="csp-closing">
        <Reveal className="csp-closing-inner">
          <blockquote className="csp-close-quote">
            "Every format is an<br/>opportunity to be precise."
          </blockquote>
          <p className="csp-close-body">
            Whether it is a congress banner, a brand film or a logo — the standard does not change. Craft, intention and clarity. Always.
          </p>
          <a href="mailto:hello@digitaltwilight.com" className="csp-cta">
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M8 2L14 8L8 14" stroke="currentColor" strokeWidth="1.1"/>
            </svg>
          </a>
        </Reveal>
      </section>

      {/* ── FOOTER ROW ── */}
      <div className="csp-foot">
        <Link to="/" className="csp-foot-back">← Back to work</Link>
        <span className="csp-foot-copy">Digital Twilight © 2025</span>
      </div>

    </div>
  )
}
