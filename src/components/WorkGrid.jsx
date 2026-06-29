import { useEffect, useRef } from 'react'
import './WorkGrid.css'

const projects = [
  {
    num: '01',
    category: 'Scientific Communication',
    title: 'ESNR Annual Meeting',
    year: '2024–2025',
    img: '/images/esnr-event.jpg',
    desc: 'Full-spectrum event communication for a 3,000-delegate European scientific congress.',
  },
  {
    num: '02',
    category: 'Brand Identity',
    title: 'Portofino',
    year: '2024',
    img: '/images/portofino.jpg',
    desc: 'Visual identity rooted in the light and restraint of the Italian Riviera.',
  },
  {
    num: '03',
    category: 'Brand Photography',
    title: 'Sapiens Production',
    year: '2023',
    img: '/images/sapiens.jpg',
    desc: 'Brand photography that defines the visual territory of a creative production house.',
  },
  {
    num: '04',
    category: 'Campaign Design',
    title: 'Fashion Revolution',
    year: '2023',
    img: '/images/fashion-revolution.jpg',
    desc: 'A campaign that turns discomfort into curiosity. And curiosity into action.',
  },
  {
    num: '05',
    category: 'Brand Strategy',
    title: 'Yoga on Art',
    year: '2025',
    img: '/images/yoa-thumb.jpg',
    desc: 'Brand strategy and visual concept for a cultural initiative merging yoga with fine art.',
  },
  {
    num: '06',
    category: 'AI Exploration',
    title: 'AI-assisted Storytelling',
    year: '2024',
    img: '/images/ai-creation.jpg',
    desc: 'Exploring AI as a creative collaborator with its own distinct logic.',
  },
]

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

function WorkCard({ p, delay }) {
  const ref = useReveal()
  return (
    <article
      ref={ref}
      className="wg-card reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="wg-img">
        <img src={p.img} alt={p.title} loading="lazy" />
      </div>
      <div className="wg-info">
        <div className="wg-top">
          <span className="label">{p.category}</span>
          <span className="wg-year label">{p.year}</span>
        </div>
        <h3 className="wg-title">{p.title}</h3>
        <p className="wg-desc">{p.desc}</p>
      </div>
    </article>
  )
}

export default function WorkGrid() {
  const headRef = useReveal()
  return (
    <section className="wg" id="work-grid">
      <div className="wg-header reveal" ref={headRef}>
        <span className="label">Selected Work</span>
      </div>
      <div className="wg-grid">
        {projects.map((p, i) => (
          <WorkCard key={p.num} p={p} delay={(i % 3) * 80} />
        ))}
      </div>
    </section>
  )
}
