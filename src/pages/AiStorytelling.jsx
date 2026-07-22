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

function ProjectBlock({ project, index }) {
  const live = project.to && project.to !== '#'

  const inner = (
    <>
      <div className="ais-proj-head">
        <span className="ais-proj-title">
          <span className="ais-proj-num">{project.num}</span>
          {project.title}
        </span>
        <span className="ais-proj-scope">{project.scope}</span>
      </div>
      <div
        className="ais-proj-media"
        role="img"
        aria-label={project.title}
        style={{ backgroundImage: `url(${project.img})` }}
      >
        {!live && <span className="ais-proj-soon">Coming Soon</span>}
        {live && (
          <span className="ais-proj-view">
            View project
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
        )}
      </div>
    </>
  )

  return (
    <Reveal delay={index * 60} className="ais-proj-reveal">
      {live ? (
        <Link to={project.to} className="ais-proj ais-proj--live">{inner}</Link>
      ) : (
        <div className="ais-proj ais-proj--soon">{inner}</div>
      )}
    </Reveal>
  )
}

export default function AiStorytelling() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
              Where the prompt is the brief, the model is the collaborator,
              and the frame is never quite predictable.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── Projects (stacked, clickable) ── */}
      <section className="ais-projects">
        <Reveal className="ais-projects-header">
          <span className="ais-label">Selected Projects</span>
        </Reveal>
        <div className="ais-projects-list">
          {projects.map((p, i) => (
            <ProjectBlock key={p.num} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ais-footer">
        <Reveal>
          <p className="ais-footer-label">Explore the featured project</p>
          <Link to="/work/wer-ist-migrant" className="ais-footer-link">
            Wer ist Migrant?
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.2" />
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
