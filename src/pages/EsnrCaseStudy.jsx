import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneStories from '../components/PhoneStories'
import './EsnrCaseStudy.css'

function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('ecs-visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`ecs-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function LaptopMockup() {
  const vidRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = vidRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  return (
    <div className="ecs-laptop-stage">
      <span className="ecs-laptop-label">ESNR · Annual Meeting 2024</span>
      <div className="ecs-laptop">
        <div className="ecs-laptop-housing">
          <div className="ecs-laptop-camera" />
          <div className="ecs-laptop-screen">
            <video
              ref={vidRef}
              src="/videos/esnr-annual-2024.mp4"
              playsInline
              onEnded={() => setPlaying(false)}
            />
          </div>
        </div>
        <div className="ecs-laptop-hinge" />
        <div className="ecs-laptop-base" />
      </div>
      <div className="ecs-laptop-controls">
        <button className="ecs-laptop-playbtn" onClick={toggle} aria-label="Play / Pause">
          <svg viewBox="0 0 24 24">
            {playing
              ? <><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></>
              : <path d="M8 5v14l11-7z"/>
            }
          </svg>
        </button>
        <span className="ecs-laptop-caption">ESNR Annual Meeting 2024 — Visual Communication Reel</span>
      </div>
    </div>
  )
}

const galleryPhotos = [
  { src: '/images/esnr/congress/congress-01.jpg', label: 'Istanbul 2025', istanbul: true },
  { src: '/images/esnr/congress/congress-02.jpg', label: 'Istanbul 2025', istanbul: true },
  { src: '/images/esnr/congress/congress-03.jpg', label: 'Istanbul 2025', istanbul: true },
  { src: '/images/esnr/congress/congress-04.jpg', label: 'Paris 2024', paris: true },
  { src: '/images/esnr/congress/congress-05.jpg', label: 'Paris 2024', paris: true },
  { src: '/images/esnr/congress/congress-09.jpg', label: 'Paris 2024', paris: true },
  { src: '/images/esnr/congress/congress-06.jpg', label: 'Vienna 2023', vienna: true },
  { src: '/images/esnr/congress/congress-07.jpg', label: 'Vienna 2023', vienna: true },
  { src: '/images/esnr/congress/congress-08.jpg', label: 'Vienna 2023', vienna: true },
]

function useTooltip() {
  const [visible, setVisible] = useState(false)
  const posRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const tooltipRef = useRef(null)

  const lerp = (a, b, t) => a + (b - a) * t

  const animate = () => {
    currentRef.current.x = lerp(currentRef.current.x, posRef.current.x, 0.1)
    currentRef.current.y = lerp(currentRef.current.y, posRef.current.y, 0.1)
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`
    }
    rafRef.current = requestAnimationFrame(animate)
  }

  const handlers = {
    onMouseMove: (e) => { posRef.current = { x: e.clientX + 20, y: e.clientY - 20 } },
    onMouseEnter: () => { setVisible(true); rafRef.current = requestAnimationFrame(animate) },
    onMouseLeave: () => { setVisible(false); cancelAnimationFrame(rafRef.current) },
  }

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  return { visible, tooltipRef, handlers }
}

function GalleryGrid() {
  const istanbul = useTooltip()
  const paris = useTooltip()
  const vienna = useTooltip()

  return (
    <div className="ecs-gallery-grid">
      {galleryPhotos.map((img, i) => (
        <Reveal key={i} delay={i * 40} className="ecs-gallery-item">
          <div
            className="ecs-gallery-photo"
            {...(img.istanbul ? istanbul.handlers : img.paris ? paris.handlers : img.vienna ? vienna.handlers : {})}
          >
            <img src={img.src} alt={img.label} loading="lazy" />
            <span className="ecs-gallery-caption">{img.label}</span>
          </div>
        </Reveal>
      ))}
      <div ref={istanbul.tooltipRef} className={`ecs-cursor-tooltip${istanbul.visible ? ' ecs-cursor-tooltip--visible' : ''}`}>
        ICC — Istanbul Congress Center
      </div>
      <div ref={paris.tooltipRef} className={`ecs-cursor-tooltip${paris.visible ? ' ecs-cursor-tooltip--visible' : ''}`}>
        Paris Marriott Rive Gauche Hotel &amp; Conference Center
      </div>
      <div ref={vienna.tooltipRef} className={`ecs-cursor-tooltip${vienna.visible ? ' ecs-cursor-tooltip--visible' : ''}`}>
        Hofburg Vienna Congress Center
      </div>
    </div>
  )
}

export default function EsnrCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="ecs">

      {/* ── Nav ── */}
      <nav className="ecs-nav">
        <Link to="/" className="ecs-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Work
        </Link>
        <span className="ecs-nav-title">ESNR · European Society of Neuroradiology</span>
      </nav>

      {/* ══════════════════════════════════════════
          SECTION 1 — REBRANDING PROPOSAL
      ══════════════════════════════════════════ */}

      {/* Hero */}
      <header className="ecs-hero">
        <div className="ecs-hero-img">
          <img src="/images/esnr-rebrand.jpg" alt="ESNR Rebranding" />
        </div>
        <div className="ecs-hero-content">
          <div className="ecs-hero-meta">
            <span className="ecs-label">Brand Identity · Medical Society · 2025–2026</span>
          </div>
          <h1 className="ecs-hero-title">European<br />Society of<br />Neuroradiology</h1>
          <p className="ecs-hero-sub">Rebranding</p>
        </div>
      </header>

      {/* Project intro */}
      <section className="ecs-intro">
        <Reveal className="ecs-intro-left">
          <div className="ecs-detail-block">
            <span className="ecs-detail-label">Client</span>
            <span className="ecs-detail-value">ESNR — European Society of Neuroradiology</span>
          </div>
          <div className="ecs-detail-block">
            <span className="ecs-detail-label">Scope</span>
            <span className="ecs-detail-value">Brand Identity</span>
          </div>
          <div className="ecs-detail-block">
            <span className="ecs-detail-label">Year</span>
            <span className="ecs-detail-value">2025–2026</span>
          </div>
        </Reveal>
        <Reveal delay={100} className="ecs-intro-right">
          <p className="ecs-lead">
            A full rebrand for Europe's leading neuroradiology society. Scientific authority, made visible.
          </p>
          <p className="ecs-body">
            The European Society of Neuroradiology is the continent's foremost scientific body in diagnostic and interventional neuroradiology. The brief was direct: build a visual identity that holds the same authority in a congress hall, a clinical journal and a digital course platform.
          </p>
          <p className="ecs-body">
            The new identity draws from the society's intellectual tradition. The brain, rendered as a precious object. Crystalline, precise, irreducible. A visual language as serious as the science it represents.
          </p>
        </Reveal>
      </section>

      {/* Colour palette full-bleed */}
      <Reveal>
        <div className="ecs-full-img ecs-full-img--light">
          <img src="/images/esnr/rollup-corridor.jpg" alt="ESNR Fetal Brain course roll-up banner" loading="lazy" style={{ objectPosition: 'center 40%' }} />
        </div>
      </Reveal>

      {/* Imagery Style */}
      <Reveal>
        <div className="ecs-full-img ecs-full-img--light">
          <img src="/images/esnr/imagery-style.jpg" alt="ESNR Imagery Style" loading="lazy" style={{ objectPosition: 'center center' }} />
        </div>
      </Reveal>

      {/* Membership lightbox campaign */}
      <Reveal>
        <div className="ecs-full-img ecs-full-img--dark">
          <img src="/images/esnr/lightbox-member.jpg" alt="ESNR Membership Lightbox Campaign" loading="lazy" style={{ objectPosition: 'center center' }} />
        </div>
      </Reveal>

      {/* Visual concept text */}
      <section className="ecs-text-block">
        <Reveal className="ecs-text-inner">
          <span className="ecs-section-label">Visual Concept</span>
          <h2 className="ecs-section-title">The Brain as<br />a Precious Object</h2>
          <p className="ecs-body">
            The visual language is built around a single idea: the brain as an object of extraordinary value. Three-dimensional renders treat it as crystalline, gem-like, sculptural. Each image holds both precision and wonder, reflecting the dual nature of neuroradiology as a discipline.
          </p>
          <p className="ecs-body">
            Custom AI-assisted imagery was developed for each clinical subspecialty: glioma imaging, interventional neuroradiology, fetal and paediatric brain, head and neck. Every course and event carries a distinctive visual identity while remaining unmistakably ESNR.
          </p>
        </Reveal>
      </section>

      {/* Course banners — four-up grid */}
      <section className="ecs-four-up">
        <Reveal className="ecs-four-up-item">
          <img src="/images/esnr/S1.png" alt="Advanced Imaging Techniques Course Banner" loading="lazy" />
        </Reveal>
        <Reveal delay={80} className="ecs-four-up-item">
          <img src="/images/esnr/S5.jpg" alt="Four Seasons Paediatric Webinar Banner" loading="lazy" />
        </Reveal>
        <Reveal delay={40} className="ecs-four-up-item">
          <img src="/images/esnr/S3.png" alt="Advanced Course on Paediatric Neuroradiology Banner" loading="lazy" />
        </Reveal>
        <Reveal delay={120} className="ecs-four-up-item">
          <img src="/images/esnr/S4.png" alt="Advanced Course in Diagnostic NR on Neurodegenerative Disease" loading="lazy" />
        </Reveal>
      </section>



      {/* ── Stories in Motion ── */}
      <PhoneStories />

      {/* ══════════════════════════════════════════
          SECTION DIVIDER
      ══════════════════════════════════════════ */}
      <div className="ecs-section-divider ecs-section-divider--video">
        <video
          className="ecs-divider-video"
          src="/videos/brain-spin.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="ecs-divider-video-overlay" />
        <Reveal>
          <div className="ecs-divider-inner">
            <span className="ecs-divider-label">Part Two</span>
            <h2 className="ecs-divider-title">Visual Communication<br />for ESNR.<br />Years of Creative<br />Partnership</h2>
            <p className="ecs-divider-body">
              For years, Digital Twilight has set the visual tone of Europe's most prestigious scientific venues. From London to Istanbul, Vienna to Prague: stage backdrops, print signage, digital screens, roll-up banners and congress environments designed before a single word is spoken from the podium.
            </p>
            <p className="ecs-divider-body" style={{ marginTop: '20px' }}>
              Each event is built from scratch. Scientific programme graphics, advertising materials, promotional campaigns, delegate collateral, all on-site visual communication. A coherent system that carries the full weight of Europe's leading neuroradiology society.
            </p>
          </div>
        </Reveal>
      </div>


      {/* ══════════════════════════════════════════
          SECTION 2 — WORK OVER THE YEARS
      ══════════════════════════════════════════ */}

      {/* Photo gallery — 9 images */}
      <section className="ecs-gallery">
        <Reveal className="ecs-gallery-header">
          <span className="ecs-section-label">Annual Meetings · Congress Event Design — Istanbul | Paris | Vienna</span>
        </Reveal>
        <GalleryGrid />
      </section>

      {/* Scope of work */}
      <section className="ecs-work-intro">
        <Reveal className="ecs-work-scope">
          <div className="ecs-scope-item">
            <span className="ecs-scope-num">01</span>
            <h3 className="ecs-scope-title">Congress & Event Design</h3>
            <p className="ecs-scope-desc">Full visual identity for annual meetings, advanced courses, webinars and European symposia. Roll-ups, banners, programmes, digital slides. Every surface considered.</p>
          </div>
          <div className="ecs-scope-item">
            <span className="ecs-scope-num">02</span>
            <h3 className="ecs-scope-title">Educational Courses</h3>
            <p className="ecs-scope-desc">Visual identity and communication materials for ESNR's accredited European educational courses across all clinical subspecialties.</p>
          </div>
          <div className="ecs-scope-item">
            <span className="ecs-scope-num">03</span>
            <h3 className="ecs-scope-title">Digital and Social Media</h3>
            <p className="ecs-scope-desc">Campaign graphics, webinar visuals, social media templates and animated content across ESNR's digital channels and live online events.</p>
          </div>
        </Reveal>
      </section>


      {/* ESNR Live Logo */}
      <Reveal>
        <div className="ecs-live-logo-block">
          <img src="/images/esnr/esnr-live-logo.png" alt="ESNR Live Logo" />
        </div>
      </Reveal>

      {/* Roll-up + certificate rebrand side by side */}
      <section className="ecs-two-up">
        <Reveal className="ecs-two-up-item">
          <img src="/images/esnr/rollup-warsaw.jpg" alt="Fetal Brain MR Imaging Course — Warsaw 2025" loading="lazy" />
        </Reveal>
        <Reveal delay={80} className="ecs-two-up-item">
          <img src="/images/esnr/certificate-rebrand.png" alt="Certificate of Attendance — Rebrand Version" loading="lazy" />
        </Reveal>
      </section>


      {/* Closing + Laptop side by side */}
      <section className="ecs-closing ecs-closing--split">
        <div className="ecs-closing-text">
          <blockquote className="ecs-quote">
            "Science deserves<br />design that matches<br />its ambition."
          </blockquote>
          <p className="ecs-closing-body">
            A multi-year creative partnership covering brand identity, event design, stage communication, scientific programme graphics, advertising and digital content. For an organisation at the forefront of neuroradiology in Europe.
          </p>
          <div className="ecs-closing-meta">
            <span>Digital Twilight, Visual Communication Partner to ESNR, 2022 to present</span>
          </div>
        </div>
        <div className="ecs-closing-laptop">
          <LaptopMockup />
        </div>
      </section>

      {/* Back */}
      <div className="ecs-next">
        <Link to="/" className="ecs-next-link">
          <span>Back to work</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M10 4L16 10L10 16" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </Link>
      </div>

    </main>
  )
}
