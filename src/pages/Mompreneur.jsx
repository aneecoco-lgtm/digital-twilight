import { Link } from 'react-router-dom'
import MompreneurPhones from '../components/MompreneurPhones'
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

const ENRIETA_GFX = [
  'Enrieta Power logo',
  'Enrieta Power portrait in red',
  'Enrieta Power heart mark in blue',
  'Enrieta Power black and white portrait with laptop',
  'Enrieta Power portrait in orange',
  'Enrieta Power portrait in magenta',
  'Enrieta Power portrait in teal with laptop',
  'Enrieta Power heart mark in pink',
  'Enrieta Power portrait in purple and blue',
  'Enrieta Power logo on cream',
  'Enrieta Power portrait in green',
  'Enrieta Power portrait in lavender',
  'Enrieta Power portrait in salmon',
  'Enrieta Power logo on mint',
  'Enrieta Power portrait in purple',
  'Enrieta Power logo on light blue',
  'Enrieta Power portrait in dark blue',
  'Enrieta Power portrait in peach with laptop',
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
    title: 'Logo & brand identity foundation',
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
    alt: 'A Digital Twilight studio desk with a camera, laptop and business cards',
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
          <div className="mp-byline">
            <img src="/images/mompreneur/annalisa-avatar.jpg" alt="Annalisa Cosentino" width="240" height="240" />
            <p>
              <strong>Annalisa Cosentino</strong>
              <span>Founder, Digital Twilight · Zürich</span>
            </p>
          </div>
        </div>
        <MompreneurPhones />
      </header>

      {/* ── Problem + benefits ── */}
      <section className="mp-section">
        <div className="mp-head">
          <span className="mp-label">Sound familiar?</span>
          <h2 className="mp-title">How long has your idea been waiting?<br /><em>And how much longer should it?</em></h2>
          <p className="mp-lede">
            You don't need another motivational quote telling you to follow your dreams.
            You need a realistic way to get started, one that fits around the life you
            already have.
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
              <span className="mp-label">Brand Launch</span>
              <div className="mp-price-block">
                <p className="mp-price">CHF 4,580</p>
                <p className="mp-instalment">Instalments possible</p>
              </div>
              <div className="mp-incl">
                <span className="mp-included">What's included</span>
                <ul>
                  <li><strong>Logo and brand identity foundation</strong><span>A look that is clearly yours, ready for your website, social media and print.</span></li>
                  <li><strong>Photo session and 20 photos</strong><span>Professional photos of you and your work, edited and ready to use.</span></li>
                  <li><strong>3-page website</strong><span>Your online home, so clients can find you and get in touch.</span></li>
                </ul>
              </div>
              <a href={BOOK_LINK} {...BOOK_LINK_PROPS} className="mp-btn mp-btn--solid">Book a free call</a>
            </div>
            <div className="mp-package mp-package--main">
              <span className="mp-label">Brand Launch + Film</span>
              <div className="mp-price-block">
                <p className="mp-price">CHF 5,480</p>
                <p className="mp-instalment">Instalments possible</p>
              </div>
              <div className="mp-incl">
                <span className="mp-included">What's included</span>
                <ul>
                  <li><strong>Everything in Brand Launch</strong><span>Logo and brand identity foundation, photo session and 3-page website.</span></li>
                  <li><strong>A branding promo video</strong><span>A short film that introduces you and your brand, for your website and social media.</span></li>
                </ul>
              </div>
              <a href={BOOK_LINK} {...BOOK_LINK_PROPS} className="mp-btn mp-btn--solid">Book a free call</a>
            </div>
          </div>
          <p className="mp-note">One price per package. Website hosting and domain are not included.</p>
          <div className="mp-work" aria-label="Brands I've built">
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
            <img src="/images/mompreneur/about-desk.jpg" alt="A design desk with colour swatches, a colour wheel, sticky notes and a computer" width="1600" height="1067" />
          </div>
          <div className="mp-about-text">
            <span className="mp-label">Hi, I'm Annalisa</span>
            <h2 className="mp-title">One creative,<br /><em>three skills, your brand.</em></h2>
            <p className="mp-lede">
              Your logo, your photos and your website should feel like one brand, not three separate
              jobs. I design the identity, shoot the photos and build the site, so everything looks
              and sounds like you.
            </p>
            <p className="mp-lede">
              Film, photography and graphic design are the tools I work with every day. For you, that
              means one person to talk to and a result that feels warm, personal and ready to launch.
            </p>
          </div>
        </section>
      </div>

      {/* ── Testimonial ── */}
      <section className="mp-section mp-testimonial">
        <div className="mp-head">
          <img className="mp-heart" src="/images/mompreneur/enrieta-heart.svg" alt="" aria-hidden="true" width="739" height="556" />
          <span className="mp-label">Client story</span>
          <h2 className="mp-title">Enrieta Power,<br /><em>mother of four.</em></h2>
          <p className="mp-lede">
            With four children and another on the way, Enrieta needed help that fit around
            her family. In under a month we created her logo, an ebook, her graphics and her video courses.
          </p>
        </div>

        <div className="mp-story">
          <div className="mp-story-main">
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
                <li>Brand Launch + Film, tailored to her needs</li>
              </ul>
            </figure>
          </div>
          <aside className="mp-story-gfx" role="group" aria-label="Graphics created for Enrieta Power">
            {ENRIETA_GFX.map((alt, i) => (
              <img key={i} src={`/images/mompreneur/enrieta-gfx-${i + 1}.jpg`} alt={alt} loading="lazy" width="190" height="190" />
            ))}
          </aside>
        </div>
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
        <div className="mp-final-text">
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
        </div>
        <figure className="mp-final-photo">
          <img
            src="/images/mompreneur/hero.jpg"
            alt="Annalisa Cosentino, founder of Digital Twilight, in a black and white portrait"
            width="1080"
            height="1528"
            loading="lazy"
          />
        </figure>
      </section>

      <footer className="mp-footer">
        <span>Digital Twilight · Zürich &amp; surroundings</span>
        <Link to="/impressum">Impressum</Link>
      </footer>

    </main>
  )
}
