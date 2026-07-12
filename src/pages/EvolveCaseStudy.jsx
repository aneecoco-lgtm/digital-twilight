import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './EvolveCaseStudy.css'

function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('evo-visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

function Reveal({ children, delay = 0, tag = 'div', className = '' }) {
  const ref = useReveal()
  const Tag = tag
  return (
    <Tag ref={ref} className={`evo-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

export default function EvolveCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="evo">

      {/* ── Nav ── */}
      <nav className="evo-nav">
        <Link to="/" className="evo-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Work
        </Link>
        <span className="evo-nav-title">Evolve · Film Direction</span>
      </nav>

      {/* ── Hero ── */}
      <header className="evo-hero">
        <div className="evo-hero-img">
          <img src="/images/evolve/hero.jpg" alt="Evolve Zürich" />
        </div>
        <div className="evo-hero-overlay" />
        <div className="evo-hero-content">
          <Reveal className="evo-hero-meta" delay={200}>
            <span>Film Direction</span>
            <span className="evo-hero-dot" />
            <span>Brand Content</span>
            <span className="evo-hero-dot" />
            <span>Zürich · 2024</span>
          </Reveal>
          <Reveal tag="h1" className="evo-hero-title" delay={380}>Evolve</Reveal>
          <Reveal className="evo-hero-rule" delay={560} />
          <Reveal className="evo-hero-sub" delay={700}>
            A brand film for a premium hair atelier in Zürich.<br />
            Craft, identity and transformation on screen.
          </Reveal>
        </div>
      </header>

      {/* ── Intro: Brief + Scope ── */}
      <section className="evo-intro">
        <Reveal className="evo-intro-grid">
          <div className="evo-intro-brief">
            <span className="evo-label">Brief</span>
            <p>
              Evolve Hair Atelier Zürich commissioned a full brand film production.
              Cinematic and direct: the artists, the space, the process and the result,
              told as a single coherent story.
            </p>
            <p>
              Every frame was considered against the salon's visual identity — minimal,
              precise, confident. The film needed to feel exactly like the brand looks.
            </p>
          </div>
          <div className="evo-intro-scope">
            <span className="evo-label">Scope</span>
            <div className="evo-scope-list">
              {['Film Direction', 'Brand Content', 'Space Photography', 'Marketing Collateral'].map((s, i) => (
                <div className="evo-scope-item" key={i}>
                  <span className="evo-scope-num">0{i + 1}</span>
                  <span className="evo-scope-name">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── The Film ── */}
      <section className="evo-film-section">
        <Reveal className="evo-film-header">
          <span className="evo-label">The Film</span>
          <h2 className="evo-section-title">Direction<br />in motion.</h2>
          <p className="evo-film-desc">
            Directed and produced by Digital Twilight. Behind-the-scenes intimacy
            meets editorial precision — capturing the rhythm of a working atelier,
            from the first touch to the final look.
          </p>
        </Reveal>
        <Reveal className="evo-film-split" delay={100}>
          <div className="evo-film-video-main">
            <video
              src="/videos/evolve-film.mp4"
              controls
              playsInline
              poster="/images/evolve/hero.jpg"
              className="evo-video"
            />
          </div>
        </Reveal>
      </section>

      {/* ── The Brand / Portrait ── */}
      <section className="evo-portrait-section">
        <Reveal className="evo-portrait-split">
          <div className="evo-portrait-text">
            <span className="evo-label">The Brand</span>
            <h2 className="evo-section-title">Built on<br />people.</h2>
            <p>
              The Evolve identity is carried by the people behind it. Brand portrait sessions
              were directed to place talent at the centre of the visual world — styled against
              the salon's signature grey, lit for confidence and precision.
            </p>
          </div>
          <div className="evo-portrait-img">
            <img src="/images/evolve/portrait.jpg" alt="Evolve brand portrait" />
          </div>
        </Reveal>
      </section>

      {/* ── The Space ── */}
      <section className="evo-space-section">
        <Reveal className="evo-space-header">
          <span className="evo-label">The Space</span>
          <h2 className="evo-section-title">A stage<br />for craft.</h2>
          <p>
            Architectural photography captured the salon as it truly is: a precision
            environment designed for the client. These stills anchor the brand's digital
            presence and define the visual grammar of everything produced for Evolve.
          </p>
        </Reveal>
        <div className="evo-space-grid">
          <Reveal className="evo-space-img evo-space-img--full" delay={60}>
            <img src="/images/evolve/salon-lounge.jpg" alt="Evolve salon — lounge" />
          </Reveal>
          <Reveal className="evo-space-img" delay={100}>
            <img src="/images/evolve/salon-wash.jpg" alt="Evolve salon — wash area" />
          </Reveal>
          <Reveal className="evo-space-img" delay={140}>
            <img src="/images/evolve/products.jpg" alt="Evolve salon — products" />
          </Reveal>
        </div>
      </section>

      {/* ── The Craft ── */}
      <section className="evo-craft-section">
        <Reveal className="evo-craft-header">
          <span className="evo-label">The Craft</span>
          <h2 className="evo-section-title">Every gesture<br />is intentional.</h2>
        </Reveal>
        <div className="evo-craft-grid">
          <Reveal className="evo-craft-img" delay={60}>
            <img src="/images/evolve/hair-craft.jpg" alt="Evolve — hair styling craft" />
          </Reveal>
          <Reveal className="evo-craft-img" delay={120}>
            <img src="/images/evolve/hair-results.jpg" alt="Evolve — hair results" />
          </Reveal>
        </div>
      </section>

      {/* ── Collateral ── */}
      <section className="evo-collateral-section">
        <Reveal className="evo-collateral-header">
          <span className="evo-label">Collateral</span>
          <h2 className="evo-section-title">Identity<br />applied.</h2>
          <p>
            Brand collateral extends the visual system into print and digital:
            seasonal campaign posters, in-salon communications and promotional
            materials, all consistent with the Evolve identity.
          </p>
        </Reveal>
        <div className="evo-collateral-grid">
          <Reveal delay={60} className="evo-collateral-item">
            <img src="/images/evolve/collateral-posters.jpg" alt="Evolve campaign posters — Winter Moonshine & Winter Relax" loading="lazy" />
          </Reveal>
          <Reveal delay={140} className="evo-collateral-item">
            <img src="/images/evolve/collateral-grid.jpg" alt="Evolve brand collateral — brochure, gift card, voucher, stationery, packaging" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="evo-footer">
        <Reveal className="evo-footer-next">
          <p className="evo-footer-label">Next Project</p>
          <Link to="/work/hswiss-nexus" className="evo-next-link">
            HSWISS Nexus
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </Link>
        </Reveal>
        <Reveal delay={150}>
          <Link to="/" className="evo-back-home">← Back to all work</Link>
        </Reveal>
      </footer>

    </main>
  )
}
