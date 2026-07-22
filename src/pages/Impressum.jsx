import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Impressum.css'

export default function Impressum() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="imp">
      <nav className="imp-nav">
        <Link to="/" className="imp-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          Home
        </Link>
        <span className="imp-nav-title">Digital Twilight</span>
      </nav>

      <div className="imp-inner">
        <span className="imp-label">Legal</span>
        <h1 className="imp-title">Impressum</h1>

        <section className="imp-block">
          <span className="imp-block-label">Responsible for this website</span>
          <p className="imp-block-body">
            Digital Twilight<br />
            Annalisa Cosentino<br />
            Josackerweg 2<br />
            8135 Langnau am Albis<br />
            Switzerland
          </p>
        </section>

        <section className="imp-block">
          <span className="imp-block-label">Contact</span>
          <p className="imp-block-body">
            <a href="mailto:info@digital-twilight.com">info@digital-twilight.com</a>
          </p>
        </section>

        <section className="imp-block">
          <span className="imp-block-label">Copyright</span>
          <p className="imp-block-body">
            © {new Date().getFullYear()} Digital Twilight — Annalisa Cosentino.<br />
            All content on this website (text, images, video and design) is protected by
            copyright and may not be used without written permission.
          </p>
        </section>

        <section className="imp-block">
          <span className="imp-block-label">Disclaimer</span>
          <p className="imp-block-body">
            The content of this website has been compiled with care. No liability is accepted
            for the accuracy, completeness or timeliness of the content. Links to external
            websites are outside our responsibility; liability for their content lies solely
            with their respective operators.
          </p>
        </section>
      </div>
    </main>
  )
}
