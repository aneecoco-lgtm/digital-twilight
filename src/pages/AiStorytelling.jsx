import { useEffect } from 'react'
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

function MediaCard({ project }) {
  const live = project.to && project.to !== '#'
  const inner = (
    <div className={`ais-media-card${live ? '' : ' ais-media-card--soon'}`}>
      <img src={project.img} alt={project.title} loading="lazy" />
      {!live && <span className="ais-media-soon">Coming Soon</span>}
    </div>
  )
  return live
    ? <Link to={project.to} className="ais-media-link">{inner}</Link>
    : <div className="ais-media-link">{inner}</div>
}

function ProjectRow({ project }) {
  const live = project.to && project.to !== '#'
  const inner = (
    <>
      <span className="ais-row-title">
        <span className="ais-row-num">{project.num}</span>
        {project.title}
      </span>
      <span className="ais-row-scope">{project.scope}</span>
    </>
  )
  return live
    ? <Link to={project.to} className="ais-row ais-row--live">{inner}</Link>
    : <div className="ais-row ais-row--soon">{inner}</div>
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

      {/* ── Stage: scrolling images (left) · title + projects (right) ── */}
      <section className="ais-stage">

        {/* LEFT — auto-scrolling image box */}
        <div className="ais-stage-media">
          <div className="ais-media-track">
            {projects.map((p) => <MediaCard key={p.num} project={p} />)}
            {/* Duplicate set for a seamless upward loop */}
            {projects.map((p) => <MediaCard key={`dup-${p.num}`} project={p} />)}
          </div>
        </div>

        {/* RIGHT — title top, projects below */}
        <div className="ais-stage-content">
          <div className="ais-stage-head">
            <span className="ais-eyebrow">AI · Generative Storytelling</span>
            <h1 className="ais-title">AI<br />Storytelling</h1>
            <p className="ais-hero-desc">
              Projects at the intersection of artificial intelligence and visual
              narrative — images, sequences and stories built with, and through,
              machine perception.
            </p>
          </div>

          <div className="ais-proj-list">
            <span className="ais-label">Selected Projects</span>
            {projects.map((p) => <ProjectRow key={p.num} project={p} />)}
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
