import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './WerIstMigrantCaseStudy.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('wim-visible'); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`wim-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Vid({ src, className = '' }) {
  return (
    <video className={`wim-vid ${className}`} src={src}
      autoPlay muted loop playsInline />
  )
}

export default function WerIstMigrantCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="wim-page">

      {/* ── NAV ── */}
      <nav className="wim-nav">
        <Link to="/work/ai-storytelling" className="wim-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.1"/>
          </svg>
          AI Storytelling
        </Link>
        <span className="wim-nav-loc">OKTO TV · Austria · 2023</span>
      </nav>

      {/* ── PROJECT INTRO ── */}
      <header className="wim-header">
        <div className="wim-header-inner">
          <p className="wim-eyebrow">AI Hybrid Short Film · Creative Direction</p>
          <h1 className="wim-title">Wer ist<br/>Migrant?</h1>
          <div className="wim-intro-cols">
            <p className="wim-intro-text">
              A unique hybrid shortfilm-animation that pioneers a groundbreaking cinematic language through an innovative semantic approach. Commissioned by OKTO in collaboration with OKTOLab and Digital Twilight, with support of SECI and the European Union.
            </p>
            <div className="wim-header-meta">
              <div className="wim-meta-item">
                <span className="wim-meta-label">Role</span>
                <span className="wim-meta-value">Creative Director</span>
              </div>
              <div className="wim-meta-item">
                <span className="wim-meta-label">Client</span>
                <span className="wim-meta-value">OKTO · OKTOLab</span>
              </div>
              <div className="wim-meta-item">
                <span className="wim-meta-label">Year</span>
                <span className="wim-meta-value">2023</span>
              </div>
              <div className="wim-meta-tags">
                {['AI', 'Short Film', 'Animation', 'Creative Direction'].map(t => (
                  <span key={t} className="wim-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO FILM — full bleed ── */}
      <div className="wim-full-bleed">
        <Vid src="/images/wim/wim-film-final.mp4" className="wim-vid--hero" />
      </div>

      {/* ── COLLABORATION ── */}
      <section className="wim-section">
        <Reveal className="wim-section-intro">
          <div className="wim-collab-logos">
            <div className="wim-logo-okto">
              <span className="wim-okto-eight">8</span>
              <span className="wim-okto-label">OKTO</span>
            </div>
            <div className="wim-logo-divider" />
            <div className="wim-logo-dt">
              <img src="/images/dt-logo.png" alt="Digital Twilight" />
            </div>
          </div>
          <div className="wim-collab-grid">
            <div className="wim-collab-copy">
              <p className="wim-body-lg">
                This video was produced with the support of SECI and the European Union. Commissioned by OKTO in collaboration with OKTOLab and Digital Twilight.
              </p>
              <p className="wim-body-italic">
                A unique hybrid shortfilm-animation that pioneers a groundbreaking cinematic language through an innovative semantic approach.
              </p>
              <p className="wim-hashtags">#creativedirection &nbsp;#AI &nbsp;#shortfilm &nbsp;#animation &nbsp;#videoproduction</p>
            </div>
            <div className="wim-collab-logos-img">
              <img src="/images/wim/wim-logos.png" alt="Partners, Donors and Supporters" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="wim-full-bleed">
        <img src="/images/wim/wim-gap-face.png" alt="Wer ist Migrant — film still" className="wim-img--hero" />
      </div>

      {/* ── THE PLOT ── */}
      <section className="wim-section">
        <Reveal className="wim-section-intro">
          <h2 className="wim-section-h">The plot</h2>
          <div className="wim-two-col-text">
            <p className="wim-body-lg">
              In a game show reminiscent of <em>"Who Wants to Be a Millionaire,"</em> a man faces a series of complex immigration-themed questions. With unconventional lifelines, he approaches the climax of the show.
            </p>
            <p className="wim-body-lg">
              The final question poses the fate of Vienna without immigration — and his daring answer triggers a stunning transformation, leading to the gradual disappearance of Vienna's people and culture.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <div className="wim-full-bleed">
          <img src="/images/wim/wim-extension.png" alt="Game show still" className="wim-img--mid" />
        </div>
      </Reveal>

      {/* ── PULL QUOTE ── */}
      <section className="wim-section wim-section--quote">
        <Reveal>
          <blockquote className="wim-quote">
            "We are all humans,<br/>living on the same planet."
          </blockquote>
          <cite className="wim-cite">— Film subtitle, Wer ist Migrant?</cite>
        </Reveal>
      </section>

      {/* ── THE MAKING OF ── */}
      <section className="wim-section">
        <Reveal className="wim-section-intro">
          <h2 className="wim-section-h">The making of</h2>
          <div className="wim-two-col-text">
            <p className="wim-body-lg">
              This short film is a fusion of traditional studio filming with cutting-edge AI technology. The approach involves capturing scenes conventionally while utilising AI software programmed with specific prompts derived from the script.
            </p>
            <p className="wim-body-lg">
              This innovative technique reinterpreted the footage, adding a distinct visual layer that enriches storytelling and elevates the film's emotional impact — a cinematic experience that transcends boundaries.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Interview still — full bleed */}
      <Reveal>
        <div className="wim-full-bleed">
          <img src="/images/wim/wim-interview.jpg" alt="We are all humans" className="wim-img--mid" />
        </div>
      </Reveal>

      {/* ── BEHIND THE SCENES ── */}
      <section className="wim-section">
        <Reveal className="wim-section-intro">
          <h2 className="wim-section-h">Behind the scenes</h2>
          <p className="wim-body-lg wim-body-lg--narrow">
            Studio footage captured conventionally, then transformed through AI processing — blending documentary realism with animated fantasy.
          </p>
        </Reveal>
      </section>

      {/* BTS — wide + two stacked */}
      <div className="wim-bts-grid">
        <Reveal className="wim-bts-wide">
          <Vid src="/images/wim/wim-scene1.mp4" />
        </Reveal>
        <Reveal delay={60} className="wim-bts-stack">
          <div className="wim-bts-sq"><img src="/images/wim/wim-hero.jpg" alt="Street interview" /></div>
          <div className="wim-bts-sq"><img src="/images/wim/wim-poster.jpg" alt="Film still" /></div>
        </Reveal>
      </div>

      {/* ── SCENES ── */}
      <section className="wim-section">
        <Reveal className="wim-section-intro">
          <h2 className="wim-section-h">AI Scenes</h2>
          <p className="wim-body-lg wim-body-lg--narrow">
            Vienna reimagined — AI-generated sequences visualising the gradual erasure of the city's immigrant culture.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <div className="wim-full-bleed">
          <Vid src="/images/wim/wim-carosello.mp4" className="wim-vid--mid" />
        </div>
      </Reveal>

      <div className="wim-grid-4">
        {[
          '/images/wim/wim-outro.mp4',
          '/images/wim/wim-outro-1.mp4',
          '/images/wim/wim-outro-2.mp4',
          '/images/wim/wim-outro-3.mp4',
          '/images/wim/wim-outro-4.mp4',
          '/images/wim/wim-outro-5.mp4',
          '/images/wim/wim-outro-7.mp4',
          '/images/wim/wim-street.mp4',
        ].map((src, i) => (
          <Reveal key={i} delay={i * 30}>
            <Vid src={src} />
          </Reveal>
        ))}
      </div>

      {/* ── FOOTER ── */}
      <footer className="wim-foot">
        <Link to="/work/ai-storytelling" className="wim-foot-link">← AI Storytelling</Link>
        <Link to="/" className="wim-foot-link">← All work</Link>
        <span className="wim-foot-copy">Digital Twilight © 2025</span>
      </footer>

    </div>
  )
}
