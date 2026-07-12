import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()
  return (
    <section ref={ref} className="contact reveal" id="contact">
      <div className="contact-inner">
        <p className="contact-eyebrow section-label">Start a conversation</p>
        <h2>Have a project<br /><em>worth making?</em></h2>
        <p>I take on a limited number of projects each year.<br />Not because of capacity — because of quality.</p>
        <a href="mailto:info@digital-twilight.com" className="contact-btn">
          info@digital-twilight.com
        </a>
      </div>
    </section>
  )
}
