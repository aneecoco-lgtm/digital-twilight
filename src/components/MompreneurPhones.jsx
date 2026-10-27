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
  const videoRef = useRef(null)

  // Start automatically unless the visitor prefers reduced motion.
  useEffect(() => { setPlaying(!reducedMotion) }, [reducedMotion])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (playing) el.play().catch(() => {})
    else el.pause()
  }, [playing])

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
      <button
        type="button"
        className="mp-phones-toggle"
        onClick={() => setPlaying((v) => !v)}
      >
        {playing ? 'Pause animation' : 'Play animation'}
      </button>
    </div>
  )
}
