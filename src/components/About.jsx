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
        <p>I have a small problem with obvious answers.</p>
        <p>It has led me through photography, design, film, branding and whatever comes next.</p>
        <p>Digital Twilight is where I put all of that to work.</p>
        <p>No fixed medium. Just the right one.</p>
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
