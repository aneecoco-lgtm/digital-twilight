import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${solid ? 'nav--solid' : ''}`}>
      <a href="#" className="nav-logo">
        {/* Icon mark only — clip bottom text portion via overflow hidden */}
        <span className="nav-logo-icon-wrap">
          <img
            src="/images/dt-logo-full.png"
            alt=""
            className="nav-logo-icon"
          />
        </span>
        <span className="nav-logo-text">Digital Twilight</span>
      </a>

      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-status">
        <span className="nav-dot" />
        Available
      </div>

      <button
        className={`nav-burger ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span />
      </button>

      <div className={`nav-mobile ${open ? 'nav-mobile--open' : ''}`}>
        <a href="#work" onClick={() => setOpen(false)}>Work</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  )
}
