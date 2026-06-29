import './ServicesTicker.css'

const ITEMS = [
  'Branding',
  'Concepting',
  'Creative Direction',
  'Photo + Video',
  'AI Storytelling',
  'Visual Communication',
]

const SEP = <span className="st-sep" aria-hidden="true">/</span>

export default function ServicesTicker() {
  // Triple-duplicate for seamless infinite scroll
  const track = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="st-outer" aria-hidden="true">
      <div className="st-track">
        {track.map((item, i) => (
          <span className="st-item" key={i}>
            {item}{SEP}
          </span>
        ))}
      </div>
    </div>
  )
}
