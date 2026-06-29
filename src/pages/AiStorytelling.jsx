import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './AiStorytelling.css'

function useReveal(threshold = 0.08) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('ais-visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

function Reveal({ children, className = '', delay = 0, tag = 'div' }) {
  const ref = useReveal()
  const Tag = tag
  return (
    <Tag ref={ref} className={`ais-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

// Mosaic strip — real project images
const mosaicImages = [
  '/images/wim/wim-hero.jpg',
  '/images/wim/wim-interview.jpg',
  '/images/wim/wim-poster.jpg',
  '/images/wim/wim-gap-face.png',
  '/images/wim/wim-ai-02.png',
  '/images/wim/wim-poster.jpg',
  '/images/wim/wim-ai-03.jpg',
  '/images/wim/wim-extension.png',
]

// Still gallery — on-brand project images
const galleryImages = [
  { src: '/images/wim/wim-hero.jpg',       label: 'Film — Opening Frame' },
  { src: '/images/wim/wim-interview.jpg',   label: 'Interview Setup' },
  { src: '/images/wim/wim-gap-face.png',    label: 'AI Portrait — Gap Face' },
  { src: '/images/wim/wim-extension.png',   label: 'Visual Extension' },
  { src: '/images/wim/wim-logos.png',       label: 'Identity & Logos' },
]

export default function AiStorytelling() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="ais-page">

      {/* ── Nav ── */}
      <nav className="ais-nav">
        <Link to="/" className="ais-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.1"/>
          </svg>
          Work
        </Link>
        <span className="ais-nav-title">AI Storytelling</span>
        <span className="ais-nav-loc">Digital Twilight · Zürich</span>
      </nav>

      {/* ── Hero ── */}
      <header className="ais-hero">
        <div className="ais-hero-inner">
          <Reveal className="ais-hero-left">
            <span className="ais-eyebrow">AI · Generative Storytelling</span>
            <h1 className="ais-title">AI<br />Storytelling</h1>
          </Reveal>
          <Reveal className="ais-hero-right" delay={80}>
            <p className="ais-hero-desc">
              Projects at the intersection of artificial intelligence and visual narrative.
              Images, sequences and stories built with — and through — machine perception.
            </p>
            <p className="ais-hero-desc ais-hero-desc--muted">
              These are experiments in a new language. Where the prompt is the brief,
              the model is the collaborator, and the frame is never quite predictable.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── Mosaic strip ── */}
      <div className="ais-mosaic">
        {mosaicImages.map((src, i) => (
          <div key={i} className="ais-mosaic-img">
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      {/* ── Featured Project ── */}
      <section className="ais-featured">
        <Reveal className="ais-featured-header">
          <span className="ais-label">Featured Project</span>
        </Reveal>

        <Reveal className="ais-featured-split" delay={60}>
          <div className="ais-featured-text">
            <div className="ais-featured-meta">
              <span className="ais-featured-num">01</span>
              <span className="ais-featured-year">2023</span>
            </div>
            <h2 className="ais-featured-title">Wer ist<br />Migrant?</h2>
            <p className="ais-featured-cat">AI Hybrid Short Film · Creative Direction</p>
            <p className="ais-featured-desc">
              A hybrid short film for OKTO TV Austria — live footage reinterpreted through
              AI to pioneer a new cinematic language around immigration and identity in Vienna.
              Generative sequences, animated typography and AI-transformed imagery are woven
              into original interview footage to create something neither fully documentary
              nor fiction.
            </p>
            <div className="ais-featured-tags">
              {['AI', 'Short Film', 'Animation', 'OKTO TV', 'Vienna'].map(t => (
                <span key={t} className="ais-tag">{t}</span>
              ))}
            </div>
            <Link to="/work/wer-ist-migrant" className="ais-featured-cta">
              View project →
            </Link>
          </div>
          <div className="ais-featured-img">
            <img src="/images/wim/wim-poster.jpg" alt="Wer ist Migrant?" loading="lazy" />
          </div>
        </Reveal>
      </section>


      {/* ── Production Frames ── */}
      <section className="ais-gallery">
        <Reveal className="ais-gallery-header">
          <span className="ais-label">Production Frames</span>
          <h2 className="ais-section-title">On location.<br />On screen.</h2>
        </Reveal>
        <div className="ais-gallery-grid">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 60} className="ais-gallery-item">
              <img src={img.src} alt={img.label} loading="lazy" />
              <span className="ais-gallery-caption">{img.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ais-footer">
        <Reveal>
          <p className="ais-footer-label">Explore the project</p>
          <Link to="/work/wer-ist-migrant" className="ais-footer-link">
            Wer ist Migrant?
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <Link to="/" className="ais-foot-back">← Back to all work</Link>
        </Reveal>
      </footer>

    </div>
  )
}
