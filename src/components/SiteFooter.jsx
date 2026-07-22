import { Link } from 'react-router-dom'
import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-cta">
          <span className="label" style={{ display: 'block', marginBottom: 20 }}>Start a conversation</span>
          <h2 className="footer-headline">
            Have a project<br /><em>worth making?</em>
          </h2>
          <p className="footer-sub">
            I take on a limited number of projects each year.<br />
            Not because of capacity. Because of quality.
          </p>
          <a href="mailto:info@digital-twilight.com" className="footer-email">
            info@digital-twilight.com
          </a>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="label footer-col-title">Navigation</span>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <span className="label footer-col-title">Follow</span>
            <a href="https://www.instagram.com/_digitaltwilight_" target="_blank" rel="noopener">Instagram</a>
          </div>
          <div className="footer-col">
            <span className="label footer-col-title">Location</span>
            <span>Zürich</span>
            <span>Switzerland</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-logo">Digital Twilight</span>
        <span className="footer-copy">© 2025 Annalisa Cosentino</span>
        <Link to="/impressum" className="footer-impressum">Impressum</Link>
      </div>
    </footer>
  )
}
