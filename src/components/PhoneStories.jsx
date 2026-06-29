import { useEffect, useRef } from 'react'
import './PhoneStories.css'

const phones = [
  { src: '/videos/x1.mp4', fallback: '/videos/x3.mp4', label: 'Brand Identity' },
  { src: '/videos/x2.mp4', fallback: '/videos/x3.mp4', label: 'Yoga on Art' },
  { src: '/videos/x3.mp4', fallback: '/videos/x3.mp4', label: 'Motion & Film' },
]

function PhoneFrame({ src, fallback, label, index }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(() => {})
  }, [])

  const handleError = () => {
    const el = videoRef.current
    if (el && el.src !== fallback) {
      el.src = fallback
      el.play().catch(() => {})
    }
  }

  return (
    <div className="ps-phone" style={{ '--delay': `${index * 0.15}s` }}>
      {/* Phone shell */}
      <div className="ps-shell">
        {/* Notch */}
        <div className="ps-notch" />

        {/* Screen */}
        <div className="ps-screen">
          {/* Video background */}
          <video
            ref={videoRef}
            className="ps-video"
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            onError={handleError}
          />

          {/* Dim overlay */}
          <div className="ps-overlay" />

          {/* Stories progress bar */}
          <div className="ps-progress-bar">
            <div className="ps-progress-fill" />
          </div>

          {/* Profile header */}
          <div className="ps-profile">
            <div className="ps-avatar">
              <img src="/images/dt-logo.png" alt="Digital Twilight" />
            </div>
            <div className="ps-profile-info">
              <span className="ps-handle">Digital Twilight</span>
              <span className="ps-time">Zürich · Studio</span>
            </div>
          </div>

          {/* Bottom label */}
          <div className="ps-caption">
            <span className="ps-caption-label">{label}</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="ps-home-bar" />
      </div>
    </div>
  )
}

export default function PhoneStories() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('ps-visible'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="ps-section" ref={sectionRef}>
      <div className="ps-header">
        <span className="ps-eyebrow">Content &amp; Motion</span>
        <h2 className="ps-title">Stories in Motion</h2>
        <p className="ps-sub">Visual storytelling built for the formats that shape culture today.</p>
      </div>

      <div className="ps-phones">
        {phones.map((p, i) => (
          <PhoneFrame key={i} {...p} index={i} />
        ))}
      </div>
    </section>
  )
}
