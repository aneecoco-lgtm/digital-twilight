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
  const [featurePlaying, setFeaturePlaying] = useState(false)
  const [readMore, setReadMore] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Auto-scroll + drag for the image strip, and surface the centred title.
  useEffect(() => {
    const container = mediaRef.current
    const track = trackRef.current
    if (!container || !track) return

    const offset = { x: 0 }
    let loop = track.scrollWidth / 2    // half = one full set (duplicated)
    const measure = () => { loop = track.scrollWidth / 2 }
    const ro = new ResizeObserver(measure); ro.observe(track)

    const drag = { active: false, lastX: 0, moved: 0 }
    const speed = 0.75                  // px/frame auto-scroll (leftward)
    let raf

    const frame = () => {
      if (!drag.active) offset.x -= speed
      if (loop > 0) {
        if (offset.x <= -loop) offset.x += loop
        else if (offset.x > 0) offset.x -= loop
      }
      track.style.transform = `translateX(${offset.x}px)`

      // active title = card nearest the box centre
      const box = container.getBoundingClientRect()
      const cx = box.left + box.width / 2
      let best = 0, bestDist = Infinity
      track.querySelectorAll('[data-idx]').forEach((card) => {
        const r = card.getBoundingClientRect()
        const d = Math.abs(r.left + r.width / 2 - cx)
        if (d < bestDist) { bestDist = d; best = Number(card.dataset.idx) }
      })
      setActive((prev) => (prev === best ? prev : best))
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const onDown = (e) => {
      drag.active = true; drag.moved = 0
      drag.lastX = e.clientX
      container.classList.add('is-dragging')
    }
    const onMove = (e) => {
      if (!drag.active) return
      const dx = e.clientX - drag.lastX
      drag.lastX = e.clientX
      drag.moved += Math.abs(dx)
      offset.x += dx
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

      {/* ── Page header ── */}
      <header className="ais-head">
        <span className="ais-eyebrow">AI · Generative Storytelling</span>
        <h1 className="ais-title">AI Storytelling</h1>
        <p className="ais-hero-quote">
          AI is not the end of human creativity. It is the end of pretending
          that execution alone was creativity. When everyone can create, the
          rare skill is no longer making things. It's knowing what deserves to exist.
        </p>
      </header>

      {/* ── Featured most-recent project · video (3/4) + description (1/4) ── */}
      <section className="ais-feature">
        <span className="ais-label">Most Recent Project</span>
        <div
          className={`ais-feature-video${featurePlaying ? ' is-playing' : ''}`}
          onClick={featurePlaying ? undefined : () => setFeaturePlaying(true)}
          role={featurePlaying ? undefined : 'button'}
          tabIndex={featurePlaying ? undefined : 0}
          onKeyDown={featurePlaying ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFeaturePlaying(true) } }}
          aria-label={featurePlaying ? undefined : 'Play The Last Witness film'}
        >
          {featurePlaying ? (
            <video
              className="ais-feature-poster"
              src="/videos/last-witness.mp4"
              poster="/images/last-witness/shell.jpg"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <>
              <img className="ais-feature-poster" src="/images/last-witness/shell.jpg" alt="The Last Witness" loading="lazy" />
              <span className="ais-ph-play">
                <svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span className="ais-ph-label">Play Film</span>
            </>
          )}
        </div>
        <div className="ais-feature-desc">
          <div className="ais-feature-desc-head">
            <span className="ais-feature-tag">Latest · 2026</span>
            <h2 className="ais-feature-title">The Last Witness</h2>
            <p className="ais-feature-cat">AI Short Film · Creative Direction</p>
          </div>
          <p className="ais-feature-body">
            A cinematic AI short about a child who becomes the last witness to a
            vanished ocean — heard, never shown. Built frame by frame inside a
            Museum of Extinct Things.
          </p>
        </div>
      </section>

      {/* ── Briefing — The Last Witness (collapsible) ── */}
      <section className="ais-brief">
        <span className="ais-label">Briefing</span>

        <div className="ais-lw-head">
          <h2 className="ais-lw-title">The Last Witness</h2>
          <p className="ais-lw-tag">The ocean is never shown. Sound makes the audience see it.</p>
        </div>

        <p className="ais-brief-lead">
          A cinematic AI short film. A child walks through a Museum of Extinct Things
          and — through a single shell and a pair of headphones — hears an ocean that
          no longer exists, becoming its last witness.
        </p>

        {/* Visible teaser frame */}
        <figure className="ais-lw-full">
          <img src="/images/last-witness/glass.jpg" alt="The child meets the last shell through the glass" loading="lazy" />
          <figcaption>The child meets the Last Shell through the glass.</figcaption>
        </figure>

        <div className={`ais-brief-more${readMore ? ' open' : ''}`}>
          <div className="ais-brief-more-inner">

            {/* Concept & Visual Language */}
            <div className="ais-lw-block">
              <span className="ais-label">Concept &amp; Visual Language</span>
              <p className="ais-brief-body">
                Premium live-action cinematic realism, shot as if on a physically built
                set — cool 4300K museum light with a single amber spotlight on the Ocean
                installation. Pale limestone, optically real glass, a restrained
                pearl-grey grade, natural film grain. Symmetrical compositions at a
                child's eye height; locked frames and barely-there dolly moves.
              </p>
              <p className="ais-brief-body">
                Across six acts, the ocean, the waves and the vanished world are never
                shown. They exist only through sound and through their effect on the
                child's face — indifference turning slowly into attention, wonder,
                grief and, finally, understanding.
              </p>
            </div>

            {/* The Film in Frames */}
            <div className="ais-lw-block">
              <span className="ais-label">The Film in Frames</span>
              <figure className="ais-lw-full ais-lw-full--strip">
                <img src="/images/last-witness/corridor-bracket.jpg" alt="Museum corridor and listening bracket" loading="lazy" />
                <figcaption>The Museum of Extinct Things — corridor and listening bracket.</figcaption>
              </figure>
              <div className="ais-lw-masonry">
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/shell.jpg" alt="The Last Shell on its plinth" loading="lazy" />
                  <figcaption>The Last Shell, preserved on its plinth.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/faces.jpg" alt="Close-ups of the child" loading="lazy" />
                  <figcaption>Emotion in close-up — the film's only true subject.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/museum.jpg" alt="Approach and threshold" loading="lazy" />
                  <figcaption>Approach and threshold.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/corridor-frames.jpg" alt="Extinct world establishing frames" loading="lazy" />
                  <figcaption>Extinct world — establishing frames.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/exhibits.jpg" alt="Vitrine typography" loading="lazy" />
                  <figcaption>The Last Bloom · The Last Rain — vitrine typography.</figcaption>
                </figure>
              </div>
            </div>

            {/* The Process */}
            <div className="ais-lw-block">
              <span className="ais-label">The Process</span>
              <p className="ais-brief-body ais-brief-body--tight">
                From a first pencil sketch to the character bible and the shot-by-shot
                storyboards — the experiments and iterations that fixed the film's
                language before a single frame was generated.
              </p>
              <div className="ais-lw-masonry ais-lw-masonry--3">
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/sketch.jpg" alt="First concept sketch" loading="lazy" />
                  <figcaption>First concept — pencil on grid.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/character-sheet.jpg" alt="Character reference sheet" loading="lazy" />
                  <figcaption>CHILD-A — character reference.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/storyboard-full.jpg" alt="Full sequence storyboard" loading="lazy" />
                  <figcaption>Full sequence storyboard.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/storyboard-a.jpg" alt="Threshold storyboards" loading="lazy" />
                  <figcaption>Act I — Threshold.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/storyboard-b.jpg" alt="Shot continuity boards" loading="lazy" />
                  <figcaption>Continuity — same girl, same façade.</figcaption>
                </figure>
                <figure className="ais-lw-fig">
                  <img src="/images/last-witness/storyboard-c.jpg" alt="Continuity boards" loading="lazy" />
                  <figcaption>Fixed screen direction.</figcaption>
                </figure>
              </div>
              <figure className="ais-lw-full ais-lw-full--strip">
                <img src="/images/last-witness/storyboard-strip.jpg" alt="Opening approach strip" loading="lazy" />
                <figcaption>Opening strip — approach to the museum.</figcaption>
              </figure>
            </div>

          </div>
        </div>

        <button
          className="ais-brief-toggle"
          onClick={() => setReadMore((v) => !v)}
          aria-expanded={readMore}
        >
          {readMore ? 'Show Less' : 'Keep Reading'}
          <svg viewBox="0 0 20 20" width="15" height="15" className={`ais-brief-chevron${readMore ? ' up' : ''}`}>
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>
      </section>

      {/* ── Auto-scroll stage — horizontal strip ── */}
      <section className="ais-stage">
        {/* Title bar above the strip */}
        <div className="ais-stage-content">
          <span className="ais-label">Selected Projects</span>
          <div className="ais-stage-current" key={active}>
            <span className="ais-current-num">{current.num}</span>
            <span className="ais-current-title">{current.title}</span>
            <span className="ais-current-scope">{current.scope}</span>
          </div>
        </div>

        {/* Full-width horizontal auto-scrolling image strip */}
        <div className="ais-stage-media" ref={mediaRef}>
          <div className="ais-media-track" ref={trackRef}>
            {projects.map((p, i) => <MediaCard key={p.num} project={p} idx={i} />)}
            {/* Duplicate set for a seamless left-scrolling loop */}
            {projects.map((p, i) => <MediaCard key={`dup-${p.num}`} project={p} idx={i} />)}
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
