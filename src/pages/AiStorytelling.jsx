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
    scope: 'AI Portrait',
    year: '2025',
    img: '/images/wim/wim-gap-face.png',
    video: '/videos/ai/ai-vid-01.mp4',
    to: '#',
  },
]

function MediaCard({ project, idx }) {
  const live = project.to && project.to !== '#'
  const soon = !live && !project.video
  const media = project.video
    ? <video src={project.video} autoPlay muted loop playsInline preload="metadata" />
    : <img src={project.img} alt={project.title} loading="lazy" />
  const inner = (
    <div className={`ais-media-card${soon ? ' ais-media-card--soon' : ''}`}>
      {media}
      {soon && <span className="ais-media-soon">Coming Soon</span>}
    </div>
  )
  return live
    ? <Link to={project.to} className="ais-media-link" data-idx={idx}>{inner}</Link>
    : <div className="ais-media-link" data-idx={idx}>{inner}</div>
}

export default function AiStorytelling() {
  const mediaRef = useRef(null)
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Auto-scroll + drag for the image column, and surface the centred title.
  useEffect(() => {
    const container = mediaRef.current
    const track = trackRef.current
    if (!container || !track) return

    const offset = { y: 0 }
    let loop = track.scrollHeight / 2   // half = one full set (duplicated)
    const measure = () => { loop = track.scrollHeight / 2 }
    const ro = new ResizeObserver(measure); ro.observe(track)

    const drag = { active: false, lastY: 0, moved: 0 }
    const speed = 0.75                  // px/frame auto-scroll
    let raf

    const frame = () => {
      if (!drag.active) offset.y -= speed
      if (loop > 0) {
        if (offset.y <= -loop) offset.y += loop
        else if (offset.y > 0) offset.y -= loop
      }
      track.style.transform = `translateY(${offset.y}px)`

      // active title = card nearest the box centre
      const box = container.getBoundingClientRect()
      const cy = box.top + box.height / 2
      let best = 0, bestDist = Infinity
      track.querySelectorAll('[data-idx]').forEach((card) => {
        const r = card.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - cy)
        if (d < bestDist) { bestDist = d; best = Number(card.dataset.idx) }
      })
      setActive((prev) => (prev === best ? prev : best))
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const onDown = (e) => {
      drag.active = true; drag.moved = 0
      drag.lastY = e.clientY
      container.classList.add('is-dragging')
    }
    const onMove = (e) => {
      if (!drag.active) return
      const dy = e.clientY - drag.lastY
      drag.lastY = e.clientY
      drag.moved += Math.abs(dy)
      offset.y += dy
    }
    const onUp = () => {
      drag.active = false
      container.classList.remove('is-dragging')
    }
    // Suppress the click that follows a real drag, so it doesn't navigate.
    const onClickCapture = (e) => {
      if (drag.moved > 6) { e.preventDefault(); e.stopPropagation() }
    }

    container.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    container.addEventListener('click', onClickCapture, true)

    return () => {
      cancelAnimationFrame(raf); ro.disconnect()
      container.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      container.removeEventListener('click', onClickCapture, true)
    }
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
          <div className="ais-media-track" ref={trackRef}>
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
