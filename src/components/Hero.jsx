import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow section-label">Zürich — Independent visual practice</p>
        <h1 className="hero-headline">
          Brand, image<br />
          and <em>communication</em><br />
          that lands.
        </h1>
        <div className="hero-sub">
          <strong className="hero-name">Annalisa Cosentino</strong>
          <span className="hero-role">Art director &amp; visual communication specialist</span>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
