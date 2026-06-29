import { useEffect, useRef } from 'react'
import './WorkMarquee.css'

const marqueeImages = [
  '/images/cs/mock-GASTRO_PHOTOGRAPHY.jpg',
  '/images/cs/mock-ADSMOCKUP.jpg',
  '/images/cs/mock-Branding_Mockup_1.jpg',
  '/images/cs/mock-Google_poster_design,_digital_twilightzurich.jpg',
  '/images/cs/mock-brochure_design_zurich.jpg',
  '/images/cs/mock-business_cards.jpg',
  '/images/cs/mock-graphic_design_magazine.jpg',
  '/images/cs/mock-Esnr,juniors_connect,_Digital_Twilight_switzerland.png',
  '/images/cs/mock-Notepad_Mockup_Wed.jpg.jpg.jpg.jpg',
  '/images/cs/mock-10-untitled.jpg',
  '/images/cs/mock-10-Screenshot_2026-06-19.png',
  '/images/cs/mock-11.png',
  '/images/cs/mock-smida.jpg.jpg.jpg.jpg',
  '/images/cs/mock-MAGAZINE_MOCK_UP.jpg',
  '/images/cs/mock-REZZONICO_MOCKUP_BAGS.png',
  '/images/cs/mock-ROLL_UP_mockup_esnr.png',
  '/images/cs/mock-banner_Mockup_20.png',
  '/images/cs/mock-digital_twilight_ribbon.jpg',
  '/images/cs/mock-website_creation_digital_twilight.png',
  '/images/cs/mock-PORTOFINO_PRESENTAZIONE_ESTERNA.jpg',
  '/images/cs/mock-ESNR__FOTOBRAIN_FOR_WEB.jpg',
  '/images/cs/mock-EVOLVE_moonbre__logo_mock_up.png',
  '/images/cs/mock-Screenshot_2026-03-26_at_12.27.43.png',
  '/images/cs/mock-Screenshot_2026-03-26_at_12.27.53.png',
  '/images/cs/mock-Screenshot_2026-06-12_at_17.43.43.png',
]

export default function WorkMarquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY + e.deltaX
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div className="wm-strip" ref={ref}>
      <div className="wm-track">
        {[...marqueeImages, ...marqueeImages].map((src, i) => (
          <div className="wm-item" key={i}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
