import { useEffect, useRef, useState, useCallback } from 'react'
import './Tagline.css'

const ME_IMAGES = [
  '/images/me/me-01.jpg',
  '/images/me/me-02.jpg',
  '/images/me/me-03.jpg',
  '/images/me/me-04.jpg',
  '/images/me/me-05.jpg',
  '/images/me/me-06.jpg',
  '/images/me/me-07.jpg',
  '/images/me/me-08.jpg',
  '/images/me/me-09.jpg',
  '/images/me/me-10.jpg',
  '/images/me/me-11.jpg',
  '/images/me/me-12.jpg',
  '/images/me/me-13.jpg',
  '/images/me/me-14.jpg',
  '/images/me/me-15.jpg',
  '/images/me/me-16.jpg',
]

export default function Tagline() {
  const ref = useRef(null)
  const imgRef = useRef(null)
  const [active, setActive] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const currentRef = useRef({ x: 0, y: 0 })
  const cycleRef = useRef(null)

  // IntersectionObserver for fade-in
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Lerp loop
  const lerp = (a, b, t) => a + (b - a) * t
  const animate = useCallback(() => {
    const img = imgRef.current
    if (!img) return
    currentRef.current.x = lerp(currentRef.current.x, posRef.current.x, 0.1)
    currentRef.current.y = lerp(currentRef.current.y, posRef.current.y, 0.1)
    img.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -60%)`
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  const onMouseMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect()
    posRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }, [])

  const onMouseEnter = useCallback(() => {
    setActive(true)
    rafRef.current = requestAnimationFrame(animate)
    // cycle images every 600ms
    cycleRef.current = setInterval(() => {
      setImgIndex(i => (i + 1) % ME_IMAGES.length)
    }, 400)
  }, [animate])

  const onMouseLeave = useCallback(() => {
    setActive(false)
    cancelAnimationFrame(rafRef.current)
    clearInterval(cycleRef.current)
  }, [])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current)
      clearInterval(cycleRef.current)
    }
  }, [])

  return (
    <section
      className="tagline"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="tagline-text">
        I'm a translator for things that don't speak <strong>visual</strong> yet. Somewhere between your brief and your brain, that's where I live.
      </p>

      {/* Cursor-follow image */}
      <div
        ref={imgRef}
        className={`tagline-cursor-img${active ? ' tagline-cursor-img--visible' : ''}`}
        aria-hidden="true"
      >
        {ME_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`tagline-cursor-frame${i === imgIndex ? ' tagline-cursor-frame--active' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
