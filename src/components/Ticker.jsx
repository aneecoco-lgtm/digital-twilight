import './Ticker.css'

const items = [
  'Brand Identity', 'Photography', 'Videography',
  'Event Communication', 'Scientific Communication',
  'Graphic Design', 'AI-assisted Exploration',
]

export default function Ticker() {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}<span className="ticker-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
