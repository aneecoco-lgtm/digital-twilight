import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './AiStorytelling.css'

// ── Projects ──  Edit this list to add / rename / relink projects.
// `to` is the internal link. Leave it as '#' for a slot that isn't live yet.
const projects = [
  {
    num: '01',
    title: 'Wer ist Migrant?',
    scope: 'AI Hybrid Short Film · Creative Direction',
    year: '2023',
    img: '/images/wim/wim-hero.jpg',
    to: '/work/wer-ist-migrant',
  },
  {
    num: '02',
    title: 'Project Two',
    scope: 'AI Film · Coming Soon',
    year: '2024',
    img: '/images/wim/wim-ai-studio.jpg',
    to: '#',
  },
  {
    num: '03',
    title: 'Project Three',
    scope: 'Generative Series · Coming Soon',
    year: '2024',
    img: '/images/wim/wim-extension.png',
    to: '#',
  },
  {
    num: '04',
    title: 'Project Four',
    scope: 'AI Portrait · Coming Soon',
    year: '2025',
    img: '/images/wim/wim-gap-face.png',
    to: '#',
  },
]

function MediaCard({ project, idx }) {
  const live = project.to && project.to !== '#'
  const inner = (
    <div className={`ais-media-card${live ? '' : ' ais-media-card--soon'}`}>
      <img src={project.img} alt={project.title} loading="lazy" />
      {!live && <span className="ais-media-soon">Coming Soon</span>}
    </div>
  )
  return live
    ? <Link to={project.to} className="ais-media-link" data-idx={idx}>{inner}</Link>
    : <div className="ais-media-link" data-idx={idx}>{inner}</div>
}

export default function AiStorytelling() {
  const mediaRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Track which media card is passing the centre of the box and surface its title.
  useEffect(() => {
    const container = mediaRef.current
    if (!container) return
    let raf
    const tick = () => {
      const box = container.getBoundingClientRect()
      const cy = box.top + box.height / 2
      let best = 0, bestDist = Infinity
      container.querySelectorAll('[data-idx]').forEach((card) => {
        const r = card.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - cy)
        if (d < bestDist) { bestDist = d; best = Number(card.dataset.idx) }
      })
      setActive((prev) => (prev === best ? prev : best))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const current = projects[active]

  return (
    <div className="ais-page">

      {/* ── Nav ── */}
      <nav className="ais-nav">
        <Link to="/" className="ais-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          Work
        </Link>
        <span className="ais-nav-title">AI Storytelling</span>
        <span className="ais-nav-loc">Digital Twilight · Zürich</span>
      </nav>

      {/* ── Stage: scrolling images (left) · title + projects (right) ── */}
      <section className="ais-stage">

        {/* LEFT — auto-scrolling image box */}
        <div className="ais-stage-media" ref={mediaRef}>
          <div className="ais-media-track">
            {projects.map((p, i) => <MediaCard key={p.num} project={p} idx={i} />)}
            {/* Duplicate set for a seamless upward loop */}
            {projects.map((p, i) => <MediaCard key={`dup-${p.num}`} project={p} idx={i} />)}
          </div>
        </div>

        {/* RIGHT — title top, live current-project title (centre), projects below */}
        <div className="ais-stage-content">
          <div className="ais-stage-head">
            <span className="ais-eyebrow">AI · Generative Storytelling</span>
            <h1 className="ais-title">AI<br />Storytelling</h1>
            <p className="ais-hero-desc">
              Projects at the intersection of artificial intelligence and visual
              narrative — images, sequences and stories built with, and through,
              machine perception.
            </p>
            <p className="ais-hero-quote">
              AI is not the end of human creativity. It is the end of pretending
              that execution alone was creativity. When everyone can create, the
              rare skill is no longer making things. It's knowing what deserves to exist.
            </p>
          </div>

          <div className="ais-stage-current" key={active}>
            <span className="ais-current-title">{current.title}</span>
            <span className="ais-current-scope">{current.scope}</span>
          </div>
        </div>

      </section>

      {/* ── Footer ── */}
      <footer className="ais-footer">
        <div>
          <p className="ais-footer-label">Explore the featured project</p>
          <Link to="/work/wer-ist-migrant" className="ais-footer-link">
            Wer ist Migrant?
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>
        <Link to="/" className="ais-foot-back">← Back to all work</Link>
      </footer>

    </div>
  )
}
