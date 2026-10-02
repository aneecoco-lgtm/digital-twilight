import { Link } from 'react-router-dom'
import './Mompreneur.css'

// Set to the video's path (e.g. '/videos/mompreneur-process.mp4') once it's uploaded;
// the video section stays hidden until then.
const PROCESS_VIDEO = null

const WORK = [
  { src: '/images/mompreneur/work-1.jpg', alt: 'Sunnely business cards in a gift box' },
  { src: '/images/mompreneur/work-2.jpg', alt: 'La Fabbrica di Zurigo brand identity, winner of a brand identity contest' },
  { src: '/images/mompreneur/work-3.jpg', alt: 'Rezzonico branded paper bags' },
  { src: '/images/mompreneur/work-4.jpg', alt: 'Borgia-Art catalogue and Cacao Rocks magazine design' },
]

const BOOK_MAIL = 'mailto:info@digital-twilight.com?subject=Mompreneur%20Power%20Package%20%E2%80%94%20free%2015-minute%20call'

// WhatsApp number, international format, digits only, stored REVERSED so it never
// appears in the page HTML or source as-is (keeps it away from spam scrapers).
// The link is only built when a visitor clicks. Empty = buttons fall back to email.
const WHATSAPP_REVERSED = '82866376714'
const WHATSAPP_TEXT = "Hi Anee, I'd like to book my free 15-minute call about the Mompreneur Power Package."
const openWhatsApp = e => {
  e.preventDefault()
  const number = WHATSAPP_REVERSED.split('').reverse().join('')
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_TEXT)}`, '_blank', 'noopener')
}
const WHATSAPP_NUMBER = WHATSAPP_REVERSED !== ''
const BOOK_LINK = WHATSAPP_NUMBER ? '#book' : BOOK_MAIL
const BOOK_LINK_PROPS = WHATSAPP_NUMBER ? { onClick: openWhatsApp } : {}

const weeks = [
  {
    week: 'Week 1',
    title: 'Logo & brand identity',
    image: '/images/mompreneur/week1-logo.jpg',
    alt: 'Logo design for the Moonbrè hair brand',
    items: [
      '2 unique logo concepts and 2 rounds of changes',
      'Final logo files for web and print, in colour, grayscale and a version for coloured backgrounds',
      'A 4-colour palette and a pair of brand fonts',
      'A brand style guide (PDF) with all your colour codes and fonts',
      'A double-sided business card design',
    ],
  },
  {
    week: 'Week 2',
    title: 'Visual content',
    image: '/images/mompreneur/week2-studio.jpg',
    alt: 'Annalisa in her photo studio with camera and lights',
    items: [
      'A photo session for your products, services or personal brand',
      '20 high-quality photos and images for your website and social media',
      'Scheduled around you. Kids welcome.',
    ],
  },
  {
    week: 'Week 3',
    title: 'Your website',
    image: '/images/mompreneur/week3-website.jpg',
    alt: 'Website design shown on a laptop',
    items: [
      '3 pages: Home, About, and Services or Products',
      'Designed for phones, tablets and computers',
      'Ready to launch with your new brand and photos',
    ],
  },
]

const faqs = [
  ['How much of my time does it take?', 'A kickoff call, the photo session and a few rounds of feedback. I handle everything else and schedule around your family.'],
  ['Where do you work?', 'In Zürich and the surroundings. Photo sessions happen in person, and calls can be online.'],
  ["What if I don't have a business name yet?", "That's fine, as long as you know what you want to offer. We can shape the name during week 1."],
  ['Can I pay in instalments?', "Yes. We'll agree on a payment plan on the free call."],
  ["What's not included?", 'Website hosting and the domain name, which you pay directly to the provider.'],
  ['What happens on the free call?', "We talk for 15 minutes about your vision and what you need. If the package is a good fit, I'll explain the next steps."],
]

export default function Mompreneur() {
  return (
    <main className="mp">

      {/* ── Nav ── */}
      <nav className="mp-nav">
        <Link to="/" className="mp-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Digital Twilight
        </Link>
        <a href={BOOK_LINK} {...BOOK_LINK_PROPS} className="mp-nav-cta">Book a free call</a>
      </nav>

      {/* ── Hero ── */}
      <header className="mp-hero">
        <div className="mp-hero-text">
          <span className="mp-label">Mompreneur Power Package</span>
          <h1 className="mp-hero-title">
            You have the idea.<br /><em>I'll build the brand</em><br />in 3 weeks.
          </h1>
          <p className="mp-hero-sub">
            Logo, professional photos and a website, done for you by one person
            who works around your family's schedule.
          </p>
          <div className="mp-actions">
            <a href={BOOK_LINK} {...BOOK_LINK_PROPS} className="mp-btn mp-btn--solid">Book a free 15-min call</a>
            <a href="#weeks" className="mp-btn">See the 3 weeks</a>
          </div>
          <ul className="mp-proof">
            <li>Done for you</li>
            <li>Flexible around nap times and evenings</li>
            <li>Instalments possible</li>
          </ul>
        </div>
        <div className="mp-hero-img">
          <img src="/images/mompreneur/hero.jpg" alt="Annalisa Cosentino, founder of Digital Twilight, in a black and white studio portrait" width="1080" height="1528" />
        </div>
      </header>

      {/* ── Problem + benefits ── */}
      <section className="mp-section">
        <div className="mp-head">
          <span className="mp-label">Sound familiar?</span>
          <h2 className="mp-title">The idea is clear.<br /><em>The time, tools and help are not.</em></h2>
          <p className="mp-lede">
            You know what you want to sell. But learning logo design, photography and website
            builders takes months you don't have, and most agencies work office hours on their
            schedule, not yours.
          </p>
        </div>
        <div className="mp-benefits">
          <div>
            <h3>Fast</h3>
            <p>In three weeks you have a logo, a brand identity, photos and a working website.</p>
          </div>
          <div>
            <h3>Flexible</h3>
            <p>Calls and the photo session fit around your family. Kids are welcome.</p>
          </div>
          <div>
            <h3>Affordable</h3>
            <p>Logo, photos and website for one price, with instalment payments possible.</p>
          </div>
        </div>
      </section>

      {/* ── The 3 weeks ── */}
      <section className="mp-section" id="weeks">
        <div className="mp-head">
          <span className="mp-label">How it works</span>
          <h2 className="mp-title">Three weeks,<br /><em>one step at a time.</em></h2>
          <p className="mp-lede">It starts with a free 15-minute call about your vision. Then we build your brand week by week.</p>
        </div>
        <ol className="mp-weeks">
          {weeks.map(w => (
            <li className="mp-week" key={w.week}>
              <div>
                <span className="mp-week-num">{w.week}</span>
                <h3>{w.title}</h3>
                <ul>
                  {w.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <img className="mp-week-img" src={w.image} alt={w.alt} loading="lazy" width="1400" height="945" />
            </li>
          ))}
        </ol>
      </section>

      {/* ── Process video (shown once PROCESS_VIDEO is set) ── */}
      {PROCESS_VIDEO && (
        <section className="mp-section mp-video">
          <div className="mp-head">
            <span className="mp-label">The process</span>
            <h2 className="mp-title">See how it works<br /><em>in a few minutes.</em></h2>
          </div>
          <video src={PROCESS_VIDEO} controls playsInline preload="metadata" poster="/images/mompreneur/video-poster.jpg" />
        </section>
      )}

      {/* ── Who it's for ── */}
      <section className="mp-section">
        <div className="mp-head mp-head--wide">
          <span className="mp-label">Who it's for</span>
          <h2 className="mp-title"><span className="mp-nowrap">For moms with a clear idea</span><br /><em>and a busy life.</em></h2>
        </div>
        <div className="mp-who">
          <div className="mp-fit">
          <div>
            <h3>This is for you if</h3>
            <ul>
              <li>You know what business you want to start, or have already started informally</li>
              <li>You have a talent, skill or product you're ready to sell</li>
              <li>You don't have the time or tools to build a brand yourself</li>
              <li>You need someone flexible who works around family life</li>
            </ul>
          </div>
          <div className="mp-fit-no">
            <h3>It's not the right fit if</h3>
            <ul>
              <li>You're still looking for a business idea</li>
              <li>You need an online shop with hundreds of products</li>
              <li>You'd rather do all the design yourself</li>
            </ul>
          </div>
          <p className="mp-note">Not a mom? If you're busy and have a clear idea, this works for you too.</p>
        </div>
          <img className="mp-who-img" src="/images/mompreneur/who.jpg" alt="Three women entrepreneurs smiling together" loading="lazy" width="1800" height="1120" />
        </div>
      </section>

      {/* ── Packages + About, side by side on wide screens ── */}
      <div className="mp-duo">
        {/* ── Packages ── */}
        <section className="mp-section" id="packages">
          <div className="mp-head">
            <span className="mp-label">Packages</span>
            <h2 className="mp-title">Pick your package,<br /><em>I'll do the rest.</em></h2>
          </div>
          <div className="mp-packages">
            <div className="mp-package mp-package--main">
              <span className="mp-label">Power Package 1</span>
              <p className="mp-price">CHF 4,580</p>
              <ul>
                <li>Logo and brand identity</li>
                <li>Photo session and 20 photos</li>
                <li>3-page website</li>
              </ul>
              <a href={BOOK_LINK} {...BOOK_LINK_PROPS} className="mp-btn mp-btn--solid">Book a free call</a>
            </div>
            <div className="mp-package mp-package--main">
              <span className="mp-label">Power Package 2</span>
              <p className="mp-price">CHF 5,480</p>
              <ul>
                <li>Everything in Package 1</li>
                <li>A branding promo video for your website and social media</li>
              </ul>
              <a href={BOOK_LINK} {...BOOK_LINK_PROPS} className="mp-btn mp-btn--solid">Book a free call</a>
            </div>
          </div>
          <p className="mp-note">Instalment payments possible. Website hosting and domain not included.</p>
          <div className="mp-work">
            <span className="mp-label">Brands I've built</span>
            <div className="mp-work-strip">
              {WORK.map(w => (
                <img key={w.src} src={w.src} alt={w.alt} loading="lazy" width="800" height="600" />
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="mp-section mp-about">
          <div className="mp-about-img">
            <img src="/images/mompreneur/about-bw.jpg" alt="Annalisa Cosentino in a black and white portrait" width="1080" height="1350" />
          </div>
          <div className="mp-about-text">
            <span className="mp-label">Hi, I'm Annalisa</span>
            <h2 className="mp-title">One creative,<br /><em>three skills, your brand.</em></h2>
            <p className="mp-lede">
              I'm Italian, and I studied Performing Arts before moving to London for a degree in
              Photography, working in the city's galleries and museums along the way. After 11 years
              I moved to Zürich and started Digital Twilight, working with organisations and small businesses.
            </p>
            <p className="mp-lede">
              Today I bring film, photography and graphic design together to help mompreneurs
              launch with a warm, personal approach.
            </p>
          </div>
        </section>
      </div>

      {/* ── Testimonial ── */}
      <section className="mp-section mp-testimonial">
        <div className="mp-head">
          <span className="mp-label">Client story</span>
          <h2 className="mp-title">Enrieta Power,<br /><em>mother of four.</em></h2>
          <p className="mp-lede">
            With four children and another on the way, Enrieta needed help that fit around
            her family. In under a month we created her logo, an ebook, her graphics and her video courses.
          </p>
        </div>

        <div className="mp-story-photos">
          {[1, 2, 3].map(n => (
            <img key={n} src={`/images/mompreneur/enrieta-${n}.jpg`} alt={`Enrieta Power, photo ${n} of 3`} loading="lazy" width="1080" height="1350" />
          ))}
        </div>

        <figure className="mp-quote">
          <p className="mp-pull">"Her flexibility and accommodating nature were invaluable."</p>
          <blockquote>
            <p>"I am deeply grateful to Annalisa for her exceptional support as a filmmaker and graphic designer. Despite being a mother of four (with another on the way), her flexibility and accommodating nature were invaluable. In under a month, she recorded my video courses with professionalism and helped me confidently engage my audience.</p>
            <p>She crafted a perfect logo, an extraordinary ebook, and numerous graphic elements that enhanced my project. Her creativity, expertise, and dedication were crucial to my success, transforming my ideas into reality and exceeding all expectations."</p>
          </blockquote>
          <figcaption>Enrieta Power</figcaption>
          <ul className="mp-made">
            <li>Logo</li>
            <li>Ebook</li>
            <li>Video courses</li>
            <li>Graphics</li>
            <li>Brand photography</li>
            <li className="mp-made-break" aria-hidden="true" />
            <li>Package 2, tailored to her needs</li>
          </ul>
        </figure>
      </section>

      {/* ── FAQ ── */}
      <section className="mp-section">
        <div className="mp-head">
          <span className="mp-label">Questions</span>
          <h2 className="mp-title">Before<br /><em>you book.</em></h2>
        </div>
        <div className="mp-faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="mp-section mp-final" id="book">
        <span className="mp-label">Get in touch</span>
        <h2 className="mp-final-title">Tell me<br /><em>about your idea.</em></h2>
        {WHATSAPP_NUMBER ? (
          <>
            <p className="mp-lede">
              Text me anytime, and we'll find a moment for an informal 15-minute chat.
            </p>
            <a href={BOOK_LINK} {...BOOK_LINK_PROPS} className="mp-btn mp-btn--solid">Text me on WhatsApp</a>
            <a href={BOOK_MAIL} className="mp-email">Prefer email? info@digital-twilight.com</a>
          </>
        ) : (
          <>
            <p className="mp-lede">
              Text me anytime, and we'll find a moment for an informal 15-minute chat.
            </p>
            <a href={BOOK_MAIL} className="mp-btn mp-btn--solid">Text me</a>
            <a href="mailto:info@digital-twilight.com" className="mp-email">info@digital-twilight.com</a>
          </>
        )}
      </section>

      <footer className="mp-footer">
        <span>Digital Twilight · Zürich &amp; surroundings</span>
        <Link to="/impressum">Impressum</Link>
      </footer>

    </main>
  )
}
