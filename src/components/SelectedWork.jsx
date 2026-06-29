import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './SelectedWork.css'

const projects = [
  {
    num: '01',
    link: '/work/hswiss-nexus',
    category: 'Brand Identity · Zürich 2026',
    title: 'HSWISS\nNexus',
    desc: 'Brand identity for a Swiss health platform bridging Eastern botanical medicine and Western clinical research. Two traditions, one authoritative visual language.',
    img: '/images/hswiss-hero.png',
    imgPosition: 'center center',
    wide: false,
  },
  {
    num: '02',
    category: 'Brand Identity · Medical Society',
    title: 'ESNR\nRebranding',
    desc: 'Full rebrand for Europe\'s leading neuroradiology society. Scientific authority, made visible.',
    img: '/images/esnr-rebrand.jpg',
    imgPosition: 'center 40%',
    wide: false,
    link: '/work/esnr',
  },
  {
    num: '03',
    category: 'Brand Strategy · Visual Concept',
    title: 'Yoga\non Art',
    desc: 'Brand strategy and visual identity for a cultural initiative placing original artworks on yoga mats.',
    img: '/images/yoa-thumb.jpg',
    imgPosition: 'center 40%',
    wide: false,
    link: '/work/yoga-on-art',
  },
  {
    num: '04',
    category: 'Film Direction · Brand Content',
    title: 'Evolve',
    desc: 'Film direction and brand content for a Zürich hair atelier. The people, the craft and the space, on film.',
    img: '/images/evolve-thumb.jpg',
    imgPosition: 'center center',
    wide: false,
    link: '/work/evolve',
  },
  {
    num: '05',
    category: 'AI · Generative Storytelling',
    title: 'AI\nStorytelling',
    desc: 'Experimental projects at the intersection of artificial intelligence and visual narrative. Images, sequences and stories built with and through machine perception.',
    img: '/images/wim/wim-ai-05.jpg',
    imgPosition: 'center center',
    imgBg: '#0a0a14',
    wide: true,
    link: '/work/ai-storytelling',
    videos: [
      '/videos/ai/ai-vid-01.mp4',
      '/videos/ai/ai-vid-02.mp4',
      '/videos/ai/ai-vid-03.mp4',
    ],
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('sw-visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function ProjectCard({ p, delay }) {
  const ref = useReveal()
  const inner = (
    <>
      {/* If card has videos, show 3-square video strip instead of single image */}
      {p.videos ? (
        <div className="sw-video-strip">
          {p.videos.map((src, i) => (
            <video key={i} className="sw-video-sq" src={src} autoPlay muted loop playsInline />
          ))}
        </div>
      ) : (
        <div className="sw-img" style={p.imgBg ? { background: p.imgBg } : {}}>
          <img src={p.img} alt={p.title.replace('\n', ' ')} loading="lazy" style={{ objectPosition: p.imgPosition, objectFit: p.imgFit || 'cover' }} />
        </div>
      )}
      <div className="sw-info">
        <div className="sw-meta">
          <span className="sw-num">{p.num}</span>
          <span className="sw-category">{p.category}</span>
        </div>
        <h3 className="sw-title">
          {p.title.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </h3>
        <p className="sw-desc">{p.desc}</p>
        {p.link
          ? <span className="sw-cta">View case study →</span>
          : <span className="sw-cta sw-cta--soon">Coming soon</span>
        }
      </div>
    </>
  )

  return (
    <article
      ref={ref}
      className={`sw-card sw-reveal${p.link ? ' sw-card--linked' : ''}${p.wide ? ' sw-card--wide' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {p.link ? <Link to={p.link} className="sw-link">{inner}</Link> : inner}
    </article>
  )
}

export default function SelectedWork() {
  const headRef = useReveal()
  return (
    <section className="sw" id="selected-work">
      <div className="sw-header sw-reveal" ref={headRef}>
        <span className="sw-label">Selected Work</span>
        <span className="sw-count">05 Projects</span>
      </div>

      {/* 2×3 grid */}
      <div className="sw-grid">
        <ProjectCard p={projects[0]} delay={0} />
        <ProjectCard p={projects[1]} delay={80} />
        <ProjectCard p={projects[2]} delay={160} />
        <ProjectCard p={projects[3]} delay={240} />
        <ProjectCard p={projects[4]} delay={320} />
      </div>
    </section>
  )
}
