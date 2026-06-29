import { useState, useEffect, useCallback, useRef } from 'react'
import './Carousel.css'

const slides = [
  {
    category: 'Brand Identity · Zürich 2026',
    title: 'HSWISS\nNexus',
    tagline: 'Full brand identity system for a Swiss integrative health platform — where precision science meets holistic wellness.',
  },
  {
    category: 'Brand Identity · Medical Society',
    title: 'European\nSociety of\nNeuroradiology',
    subtitle: 'Rebranding',
    tagline: 'A complete identity transformation for the European Society of Neuroradiology — redefining how science, prestige and clinical leadership communicate to the world.',
  },
  {
    category: 'Brand Strategy · Visual Concept',
    title: 'Yoga\non Art',
    tagline: 'Where practice meets culture — brand strategy and visual identity for an initiative merging yoga with fine art.',
  },
  {
    category: 'Brand Identity · Motion',
    title: 'Portofino\nConnection',
    tagline: 'Logo animation for an Italian luxury lifestyle concept — identity in motion, built to last.',
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const videoRef = useRef(null)

  const go = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 800)
  }, [animating])

  const next = useCallback(() => go((current + 1) % slides.length), [current, go])
  const prev = useCallback(() => go((current - 1 + slides.length) % slides.length), [current, go])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  // Ensure video plays (autoplay policy)
  useEffect(() => {
    const el = videoRef.current
    if (el) el.play().catch(() => {})
  }, [])

  const pad = n => String(n + 1).padStart(2, '0')

  return (
    <section className="carousel" id="work">

      {/* Persistent video background */}
      <video
        ref={videoRef}
        className="carousel-hero-video"
        src="/videos/hero-bg.mp4"
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="carousel-overlay" />

      {/* Fixed brand name — always visible */}
      <div className="carousel-brand-name">
        <p className="carousel-founder-name">Annalisa Cosentino</p>
        <h1 className="carousel-agency-title">
          <span className="carousel-agency-line" style={{ animationDelay: '0ms' }}>Digital</span>
          <br />
          <span className="carousel-agency-line" style={{ animationDelay: '140ms' }}>Twilight</span>
        </h1>
        <div className="carousel-brand-rule" />
        <p className="carousel-agency-sub">Creative instinct, visual communication and storytelling<br />for brands, science and culture.</p>
      </div>


      {/* Controls */}
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </button>
        <button className="carousel-btn" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </button>
      </div>

      {/* Counter */}
      <div className="carousel-counter">
        <span className="carousel-current">{pad(current)}</span>
        <span className="carousel-sep">/</span>
        <span className="carousel-total">{pad(slides.length - 1)}</span>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="carousel-progress">
        <div
          className="carousel-progress-fill"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

    </section>
  )
}
