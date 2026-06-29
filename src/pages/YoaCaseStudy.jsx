import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './YoaCaseStudy.css'

function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('ycs-visible'); obs.disconnect() } },
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
    <Tag
      ref={ref}
      className={`ycs-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default function YoaCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="ycs">

      {/* ── Nav ── */}
      <nav className="ycs-nav">
        <Link to="/" className="ycs-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Work
        </Link>
        <span className="ycs-nav-title">Yoga on Art</span>
      </nav>

      {/* ── Hero — full image, no crop ── */}
      <header className="ycs-hero ycs-hero--contain">
        <div className="ycs-hero-img">
          <img
            src="/images/yoa/pitch-02.jpg"
            alt="Where Art Meets Movement — Yoga on Art"
            className="ycs-hero-img-contain"
          />
        </div>
        <div className="ycs-hero-content">
          <div className="ycs-hero-meta">
            <span className="ycs-label">Brand Identity · Film Production · 2025</span>
          </div>
          <h1 className="ycs-hero-title">Yoga<br />on Art</h1>
        </div>
      </header>

      {/* ── Intro + Concept with video panel ── */}
      <div className="ycs-intro-video-wrap">

        {/* Left: intro + concept stacked */}
        <div className="ycs-intro-video-left">

          <section className="ycs-intro">
            <Reveal className="ycs-intro-left">
              <div className="ycs-detail-block">
                <span className="ycs-detail-label">Client</span>
                <span className="ycs-detail-value">Yoga on Art</span>
              </div>
              <div className="ycs-detail-block">
                <span className="ycs-detail-label">Scope</span>
                <span className="ycs-detail-value">Brand Film · Promotional Campaign · Brand Awareness</span>
              </div>
              <div className="ycs-detail-block">
                <span className="ycs-detail-label">Year</span>
                <span className="ycs-detail-value">2025</span>
              </div>
            </Reveal>
            <Reveal delay={100} className="ycs-intro-right">
              <p className="ycs-lead">
                A brand for people who bring the same care to their daily practice as they do to art.
              </p>
              <p className="ycs-body">
                Yoga on Art starts from a simple conviction: a yoga mat can be more than a functional object. Each edition carries an original artwork, placing fine art in direct contact with daily practice. The mat becomes a collector's piece, a cultural statement, a surface you choose with intention.
              </p>
              <p className="ycs-body">
                The brief was to build an identity that holds both worlds with equal respect: the rigour of the artist and the stillness of the practitioner. Not a wellness product decorated with art references. A genuine cultural proposition from the ground up.
              </p>
            </Reveal>
          </section>

          <section className="ycs-text-block">
            <Reveal className="ycs-text-inner">
              <span className="ycs-section-label">The Concept</span>
              <h2 className="ycs-section-title">Art You Practice On.<br />Culture You Carry.</h2>
              <p className="ycs-body">
                Each mat is a limited edition. The surface carries an original artwork by a selected artist. The act of practice becomes daily contact with something made with full attention. A collector's object that gets used.
              </p>
              <p className="ycs-body">
                The brand identity was built around this tension: clean and minimal enough to let the art lead, strong enough to stand on its own as a premium cultural brand.
              </p>
            </Reveal>
          </section>

        </div>

        {/* Right: sticky video */}
        <div className="ycs-intro-video-right">
          <video
            className="ycs-intro-vid"
            src="/videos/yoa-intro-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

      </div>


      {/* ── Brand Pitch Deck — chapter label ── */}
      <div className="ycs-chapter-label">
        <span>Brand Strategy · Pitch</span>
      </div>

      {/* ── Pitch cover + Where Art Meets Movement ── */}
      <section className="ycs-two-up ycs-two-up--pitch">
        <Reveal className="ycs-two-up-item">
          <img src="/images/yoa/pitch-01.jpg" alt="This isn't just a yoga mat" loading="lazy" />
        </Reveal>
        <Reveal delay={80} className="ycs-two-up-item">
          <img src="/images/yoa/pitch-02.jpg" alt="Where Art Meets Movement" loading="lazy" />
        </Reveal>
      </section>

      {/* ── Energy. Calm. Connection. — full width 16:9 ── */}
      <Reveal>
        <div className="ycs-full-img ycs-full-img--slide">
          <img src="/images/yoa/pitch-03.jpg" alt="Energy. Calm. Connection." loading="lazy" />
        </div>
      </Reveal>

      {/* ── Born from Nature — full width 16:9 ── */}
      <Reveal>
        <div className="ycs-full-img ycs-full-img--slide" style={{ background: '#e8e2d9' }}>
          <img src="/images/yoa/pitch-04.jpg" alt="Born from Nature and Art" loading="lazy" />
        </div>
      </Reveal>


      {/* ── A Flow of Senses + Limited Artist Edition ── */}
      <section className="ycs-two-up ycs-two-up--pitch">
        <Reveal className="ycs-two-up-item">
          <img src="/images/yoa/pitch-05.jpg" alt="A Flow of Senses" loading="lazy" />
        </Reveal>
        <Reveal delay={80} className="ycs-two-up-item">
          <img src="/images/yoa/pitch-06.jpg" alt="Limited Artist Edition" loading="lazy" />
        </Reveal>
      </section>

      {/* ── Quote page — full width 16:9 ── */}
      <Reveal>
        <div className="ycs-full-img ycs-full-img--slide" style={{ background: '#d8d2c8' }}>
          <img src="/images/yoa/pitch-07.jpg" alt="Every brushstroke is energy. Every movement, connection." loading="lazy" />
        </div>
      </Reveal>

      {/* ── Closing pitch slide — full width ── */}
      <Reveal>
        <div className="ycs-full-img ycs-full-img--slide">
          <img src="/images/yoa/pitch-08.jpg" alt="Yoga on Art — closing pitch" loading="lazy" />
        </div>
      </Reveal>

      {/* ── Art direction ── */}
      <section className="ycs-text-block">
        <Reveal className="ycs-text-inner">
          <span className="ycs-section-label">Art Direction</span>
          <h2 className="ycs-section-title">The Mat as<br />a Stage</h2>
          <p className="ycs-body">
            The mat is both prop and protagonist. Shot on natural surfaces that echo the materials and mood of each artwork: sand, light, texture. The body in practice becomes a further layer of composition. Nothing is incidental.
          </p>
        </Reveal>
      </section>

      {/* ── Yoga Mat collection — horizontal strip ── */}
      <section className="ycs-mat-strip">
        {['mat-01','mat-02','mat-05','mat-06'].map((name, i) => (
          <Reveal key={name} delay={i * 60} className="ycs-mat-item">
            <img src={`/images/yoa/${name}.jpg`} alt={`Yoga on Art mat ${i + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </section>

      {/* ── Pose photography — three up ── */}
      <section className="ycs-three-up">
        <Reveal className="ycs-three-item">
          <img src="/images/yoa/pose-child-green.jpg" alt="Child's pose on green Yoga on Art mat" loading="lazy" />
        </Reveal>
        <Reveal delay={80} className="ycs-three-item">
          <img src="/images/yoa/artist-portrait.jpg" alt="Artist — Yoga on Art collaboration" loading="lazy" />
        </Reveal>
        <Reveal delay={160} className="ycs-three-item">
          <img src="/images/yoa/pose-cobra-black.jpg" alt="Cobra pose on black Yoga on Art mat" loading="lazy" />
        </Reveal>
      </section>


      {/* ── Making Of — single phone frame ── */}
      <section className="ycs-making-of">
        <Reveal className="ycs-making-of-text">
          <span className="ycs-section-label">Behind the Scenes</span>
          <h2 className="ycs-section-title">Making Of</h2>
          <p className="ycs-body">
            A glimpse into the creative process behind Yoga on Art. The shoot, the mat, the light. Where the brand comes to life before a single image is published.
          </p>
        </Reveal>
        <Reveal delay={120} className="ycs-making-of-phone">
          <div className="ycs-phone-shell">
            <div className="ycs-phone-notch" />
            <div className="ycs-phone-screen">
              <video
                className="ycs-phone-video"
                src="/videos/yoa-making-of.mp4"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />
              <div className="ycs-phone-overlay" />
              <div className="ycs-phone-progress"><div className="ycs-phone-progress-fill" /></div>
              <div className="ycs-phone-profile">
                <div className="ycs-phone-avatar">
                  <img src="/images/dt-logo.png" alt="Digital Twilight" />
                </div>
                <div className="ycs-phone-profile-info">
                  <span className="ycs-phone-handle">Yoga on Art</span>
                  <span className="ycs-phone-time">Making Of · Studio</span>
                </div>
              </div>
              <div className="ycs-phone-caption">
                <span>Behind the Scenes</span>
              </div>
            </div>
            <div className="ycs-phone-home-bar" />
          </div>
        </Reveal>
      </section>

      {/* ── Video — 720×1280, portrait format — shown contained, never stretched ── */}
      <section className="ycs-video-section">
        <Reveal className="ycs-video-header">
          <span className="ycs-section-label">In Motion</span>
          <h2 className="ycs-section-title">The Brand Film</h2>
          <p className="ycs-body">
            A short brand film capturing the world of Yoga on Art. The textures, the movement, the objects. Shot to feel like the thing it represents.
          </p>
        </Reveal>
        <Reveal delay={80} className="ycs-video-wrap">
          {/* 720×1280 portrait — displayed at max 480px wide, auto height ~853px */}
          <video
            className="ycs-video"
            src="/videos/yoa-hero.mp4"
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
          />
        </Reveal>
      </section>


      {/* ── Closing — text left, double-exposure right ── */}
      <section className="ycs-closing-split-final">
        <Reveal className="ycs-closing-text">
          <blockquote className="ycs-quote">
            "Where practice<br />meets culture."
          </blockquote>
          <p className="ycs-body">
            A brand identity, a product line, a cultural proposition. Yoga on Art asks what happens when you bring the same care to the objects of daily practice as you bring to the practice itself. The answer is something that lives between gallery and studio. Between art and body.
          </p>
          <p className="ycs-closing-meta">
            Brand Strategy · Visual Identity · Art Direction · 2025
          </p>
        </Reveal>
        <Reveal delay={120} className="ycs-closing-img-right">
          <img src="/images/yoa/double-exposure.jpg" alt="Yoga on Art — double exposure" loading="lazy" />
        </Reveal>
      </section>

      {/* ── Back ── */}
      <div className="ycs-next">
        <Link to="/" className="ycs-next-link">
          <span>Back to work</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M10 4L16 10L10 16" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </Link>
      </div>

    </main>
  )
}
