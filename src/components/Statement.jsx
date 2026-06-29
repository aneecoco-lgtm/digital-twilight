import { useReveal } from '../hooks/useReveal'
import './Statement.css'

export default function Statement() {
  const ref = useReveal()
  return (
    <section ref={ref} className="statement reveal">
      <p>
        I don't make things<br />
        <em>look good.</em><br />
        I make ideas legible.
      </p>
    </section>
  )
}
