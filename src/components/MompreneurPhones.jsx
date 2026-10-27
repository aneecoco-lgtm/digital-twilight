import { useEffect, useRef, useState } from 'react'

const VIDEO = '/videos/mompreneur-phone.mp4'
const VIDEO_POSTER = '/images/mompreneur/phone-poster-0.jpg'
const STILL = '/images/mompreneur/phone-still.jpg'

function useMatches(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(query).matches
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMatches(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return matches
}

function PhoneShell({ id, children, decorative }) {
  return (
    <div className={`mp-phone mp-phone--${id}`} aria-hidden={decorative || undefined}>
      <div className="mp-phone-shell">
        <div className="mp-phone-notch" />
        <div className="mp-phone-screen">{children}</div>
        <div className="mp-phone-bar" />
      </div>
    </div>
  )
}

export default function MompreneurPhones() {
  const reducedMotion = useMatches('(prefers-reduced-motion: reduce)')
  const showTrio = useMatches('(min-width: 901px)')
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  // Start automatically unless the visitor prefers reduced motion.
  useEffect(() => { setPlaying(!reducedMotion) }, [reducedMotion])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (playing) el.play().catch(() => {})
    else el.pause()
  }, [playing])

  // Sound is off until the visitor asks for it: browsers block autoplay with
  // sound, and an unmute inside the click is always allowed.
  const toggleSound = () => {
    const el = videoRef.current
    const next = !muted
    if (el) {
      el.muted = next
      if (!next) {
        el.volume = 1
        if (el.paused) { setPlaying(true) }
      }
    }
    setMuted(next)
  }

  const still = (
    <img src={STILL} alt="" width="640" height="1160" loading="lazy" />
  )

  return (
    <div className="mp-phones" role="group" aria-label="Animated story: the Mompreneur Power Package">
      <div className="mp-phones-stage">
        {showTrio && <PhoneShell id="left" decorative>{still}</PhoneShell>}
        <PhoneShell id="center">
          <video
            ref={videoRef}
            src={VIDEO}
            poster={VIDEO_POSTER}
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          />
        </PhoneShell>
        {showTrio && <PhoneShell id="right" decorative>{still}</PhoneShell>}
      </div>
      <div className="mp-phones-controls">
        <button
          type="button"
          className="mp-phones-toggle"
          onClick={() => setPlaying((v) => !v)}
        >
          {playing ? 'Pause animation' : 'Play animation'}
        </button>
        <button
          type="button"
          className="mp-phones-toggle mp-phones-sound"
          onClick={toggleSound}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
            <path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor" />
            {muted ? (
              <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            ) : (
              <path d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            )}
          </svg>
          {muted ? 'Sound on' : 'Sound off'}
        </button>
      </div>
    </div>
  )
}
