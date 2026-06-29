import { useReveal } from '../hooks/useReveal'
import './HowIWork.css'

const steps = [
  { num: '01', title: 'You work with me directly', body: "No account managers, no juniors. I’m the creative lead from first brief to final file." },
  { num: '02', title: 'I bring the right collaborators', body: 'For larger projects I bring in a trusted network — always introduced, always accountable.' },
  { num: '03', title: 'Scale without overhead', body: 'Senior-level attention on every decision, without the cost of agency structure.' },
]

export default function HowIWork() {
  const ref = useReveal()
  return (
    <section ref={ref} className="how reveal">
      <div className="how-header">
        <span className="section-label">How I work</span>
      </div>
      <div className="how-grid">
        {steps.map(s => (
          <div key={s.num} className="how-item">
            <span className="how-num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
