import { useEffect, useRef } from 'react'
import './About.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function About() {
  const photoRef = useReveal()
  const textRef = useReveal()

  return (
    <section className="about" id="about">
      <div className="about-photo reveal" ref={photoRef}>
        <img src="/images/portrait-of-me.jpg" alt="Annalisa Cosentino" loading="lazy" />
      </div>
      <div className="about-text reveal" ref={textRef}>
        <span className="label" style={{ display: 'block', marginBottom: 32 }}>About</span>
        <h2 className="about-name">Annalisa<br /><em>Cosentino</em></h2>
        <p>I work with brands, research institutions and European organisations that need their visual communication to be as sharp as their thinking. Strategy and image, together.</p>
        <p>My background spans graphic design, photography, videography and brand strategy. From first brief to final file. No handoffs, no dilution.</p>
        <p>I founded Digital Twilight as an independent practice to give every project the full weight of my attention, working directly with the people who care most about the outcome.</p>
        <div className="about-facts">
          <div className="fact">
            <span className="fact-k label">Based</span>
            <span className="fact-v">Zürich, Switzerland</span>
          </div>
          <div className="fact">
            <span className="fact-k label">Languages</span>
            <span className="fact-v">Italian · English</span>
          </div>
          <div className="fact">
            <span className="fact-k label">Availability</span>
            <span className="fact-v">
              <span className="nav-dot" style={{ marginRight: 8 }} />
              Currently open
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
