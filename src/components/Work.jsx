import { useReveal } from '../hooks/useReveal'
import './Work.css'

const projects = [
  {
    num: '01',
    title: 'ESNR Annual Meeting',
    discipline: 'Event Identity · Scientific Communication',
    year: '2024 – 2025',
    summary: "Europe's leading neuroradiology congress.",
    body: 'Full-spectrum visual communication for a 3,000-delegate European scientific congress — from brand identity and spatial design to on-site signage and digital assets. The challenge: making complex scientific programming feel cohesive, credible, and human.',
    img: '/images/esnr-event.jpg',
    imgAlt: 'ESNR Annual Meeting 2025 — event photography',
  },
  {
    num: '02',
    title: 'Portofino',
    discipline: 'Brand Identity · Visual Direction',
    year: '2024',
    summary: 'From place into brand.',
    body: 'A visual identity rooted in the light, texture and restraint of the Italian Riviera. Logo, typography, colour system and motion — built to carry a lifestyle concept that competes at the luxury end without borrowing its language from anyone else.',
    img: '/images/portofino.jpg',
    imgAlt: 'Portofino brand identity — exterior presentation',
  },
  {
    num: '03',
    title: 'Sapiens Production',
    discipline: 'Brand Photography',
    year: '2023',
    summary: 'Image as identity.',
    body: 'Brand photography that defines the visual territory of a creative production house. Every frame was built around one question: what does this company look like when it is completely itself? The result is a library that works across every touchpoint — not just a shoot.',
    img: '/images/sapiens.jpg',
    imgAlt: 'Sapiens Production — brand photography campaign',
  },
  {
    num: '04',
    title: 'Fashion Revolution',
    discipline: 'Campaign Design · Graphic Design',
    year: '2023',
    summary: 'Design with a point of view.',
    body: 'Visual campaign for a global sustainability movement in fashion. The brief demanded urgency without panic, beauty without complicity. The result: a campaign language that turns discomfort into curiosity — and curiosity into action.',
    img: '/images/fashion-revolution.jpg',
    imgAlt: 'Fashion Revolution — campaign design',
  },
  {
    num: '05',
    title: 'Yoga on Art',
    discipline: 'Brand Strategy · Visual Concept',
    year: '2025',
    summary: 'Where practice meets culture.',
    body: 'Brand strategy and visual identity for a cultural initiative merging yoga practice with fine art. Developed from pitch deck to full concept — positioning, naming rationale, visual system and audience strategy. A project that required thinking before designing.',
    img: '/images/yoa-thumb.jpg',
    imgAlt: 'Yoga on Art — beach yoga session',
  },
  {
    num: '06',
    title: 'AI-assisted Storytelling',
    discipline: 'AI Exploration · Visual Authorship',
    year: '2024',
    summary: 'A new layer of authorship.',
    body: 'An ongoing experimental practice exploring AI not as a shortcut but as a creative collaborator with its own logic. Applied to documentary, narrative and abstract visual work — the question is always: where does the tool end and the author begin?',
    img: '/images/ai-creation.jpg',
    imgAlt: 'AI-assisted visual creation — Digital Twilight studio',
  },
]

function WorkItem({ project, delay }) {
  const ref = useReveal()
  return (
    <article
      ref={ref}
      className="work-item reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="work-img">
        <img src={project.img} alt={project.imgAlt} loading="lazy" />
      </div>
      <div className="work-info">
        <span className="work-num">{project.num}</span>
        <div className="work-meta">
          <p className="work-summary">{project.summary}</p>
          <h2 className="work-title">{project.title}</h2>
          <p className="work-body">{project.body}</p>
          <div className="work-footer">
            <span className="work-tag section-label">{project.discipline}</span>
            <span className="work-year">{project.year}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  const headerRef = useReveal()
  return (
    <section className="work" id="work">
      <div ref={headerRef} className="work-header reveal">
        <span className="section-label">Selected Work</span>
        <span className="work-count">06 projects</span>
      </div>
      <div className="work-list">
        {projects.map((p, i) => (
          <WorkItem key={p.num} project={p} delay={i * 60} />
        ))}
      </div>
    </section>
  )
}
