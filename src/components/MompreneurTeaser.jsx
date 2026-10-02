import { Link } from 'react-router-dom'
import './MompreneurTeaser.css'

export default function MompreneurTeaser() {
  return (
    <section className="mpt">
      <Link to="/mompreneur" className="mpt-card">
        <img
          className="mpt-img"
          src="/images/mompreneur/week2-studio.jpg"
          alt="Annalisa in her photo studio with camera and lights"
          loading="lazy"
          width="1152"
          height="768"
        />
        <div className="mpt-text">
          <span className="mpt-label">New · Mompreneur Power Package</span>
          <h2 className="mpt-title">Your brand,<br /><em>ready in 3 weeks.</em></h2>
          <p className="mpt-sub">Logo, photos and a website, done for you around your family's schedule.</p>
          <span className="mpt-cta">Discover the package <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </section>
  )
}
