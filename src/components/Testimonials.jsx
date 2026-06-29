import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: "Annalisa has assisted us with the branding for two companies and we couldn't be happier. She is a great support in terms of know-how, effort, creativity and is always there for clients, even if we usually give her a very short notice. I can only recommend Digital Twilight!",
    name: "Michele Umberto Corbi",
    role: "Client",
    company: "United Counsel AG",
    avatar: "/images/testimonials/avatar-michele.png",
  },
  {
    quote: "I worked with Digital Twilight when Annalisa created the video 'Haplocare' for our company. What struck me from the start is the time and attention that Annalisa devoted to understanding the concept underlying Haplocare. It was important for her to understand the 'why' behind what we are doing — the 'what' and 'how' flowed from there. The end result was wonderful. Professionally and with a huge dollop of empathy.",
    name: "Sonali Quantius",
    role: "VP, R&D",
    company: "Inari · AI, Data Analysis",
    avatar: "/images/testimonials/avatar-sonali.png",
  },
  {
    quote: "I highly recommend Annalisa and her company — she is absolutely amazing! As a meeting planner working for an international medical association, I am very pleased to have found such a reliable and flexible partner who always understands the client's needs and tries to find the best solutions. Her creative eye and skills make her the best match for us.",
    name: "Giulia Oliviero",
    role: "Director of Meetings",
    company: "ESNR · European Society of Neuroradiology",
    avatar: "/images/testimonials/avatar-giulia.png",
  },
  {
    quote: "Annalisa has supported ShePro for the last 3 years. She is incredibly creative and supportive. If you have an idea, she gives her suggestions to make it perfect and delivers it. Working with her is effortless because she is a professional and cares about her clients with no exceptions.",
    name: "Liis Reitz",
    role: "Client",
    company: "ShePro",
    avatar: "/images/testimonials/avatar-liis.png",
  },
  {
    quote: "Annalisa was part of a team of diverse professionals for the development of an information platform on gender equality. From day 1 she showed engagement, creativity and high professionalism. She worked around the clock to propose and deliver high quality graphical products and was very quick to make small adjustments when requested — contributing to a great team morale throughout the project.",
    name: "Gretel Gambarelli",
    role: "Collaborator",
    company: "Gender Equality Platform",
    avatar: "/images/testimonials/avatar-gretel.jpg",
  },
  {
    quote: "Digital Twilight has done an excellent job. We could see their passion in creating high level content and performing the work with professionalism. Thank you guys, we are very happy!",
    name: "Stefano",
    role: "Founder",
    company: "Evolve Hair Atelier · Zürich",
    avatar: "/images/testimonials/avatar-stefano.png",
  },
]

export default function Testimonials() {
  const trackRef = useRef(null)
  const rafRef = useRef(null)
  const speedRef = useRef(0.5) // px per frame — slow drift
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const [dragging, setDragging] = useState(false)

  /* Auto-scroll */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const tick = () => {
      if (!isDragging.current) {
        track.scrollLeft += speedRef.current
        // seamless loop: when we reach halfway (duplicated content), reset
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  /* Drag to scroll */
  const onMouseDown = (e) => {
    isDragging.current = true
    setDragging(true)
    dragStartX.current = e.pageX
    dragStartScroll.current = trackRef.current.scrollLeft
  }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    const dx = e.pageX - dragStartX.current
    trackRef.current.scrollLeft = dragStartScroll.current - dx
  }
  const onMouseUp = () => { isDragging.current = false; setDragging(false) }

  /* Touch */
  const onTouchStart = (e) => {
    isDragging.current = true
    dragStartX.current = e.touches[0].pageX
    dragStartScroll.current = trackRef.current.scrollLeft
  }
  const onTouchMove = (e) => {
    if (!isDragging.current) return
    const dx = e.touches[0].pageX - dragStartX.current
    trackRef.current.scrollLeft = dragStartScroll.current - dx
  }
  const onTouchEnd = () => { isDragging.current = false }

  const allCards = [...testimonials, ...testimonials] // duplicate for seamless loop

  return (
    <section className="tm">

      {/* Header */}
      <div className="tm-header">
        <span className="tm-label">( Testimonials )</span>
        <span className="tm-sub">Don't take our word for it — take theirs.</span>
      </div>

      {/* Carousel */}
      <div
        className={`tm-track${dragging ? ' tm-track--dragging' : ''}`}
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {allCards.map((t, i) => (
          <div
            className={`tm-card tm-card--offset-${i % 3}`}
            key={i}
          >
            <p className="tm-quote">"{t.quote}"</p>
            <div className="tm-credit">
              <img className="tm-avatar" src={t.avatar} alt={t.name} />
              <div className="tm-credit-text">
                <span className="tm-name">{t.name}</span>
                <span className="tm-role">{t.role}</span>
                <span className="tm-company">{t.company}</span>
              </div>
              <span className="tm-bigquote">"</span>
            </div>
          </div>
        ))}
      </div>

      {/* Drag pill */}
      <div className="tm-drag-pill">
        <span>←</span>
        <span>DRAG</span>
        <span>→</span>
      </div>

    </section>
  )
}
