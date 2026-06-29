import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HswissCaseStudy.css'

export default function HswissCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="cs">

      {/* ── Back nav ── */}
      <nav className="cs-nav">
        <Link to="/" className="cs-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Work
        </Link>
        <span className="cs-nav-title">HSWISS Nexus</span>
      </nav>

      {/* ── Hero: Brand Guidelines cover ── */}
      <header className="cs-hero">
        <div className="cs-hero-img">
          <img src="/images/hswiss/page-01.jpg" alt="HSWISS Nexus Brand Guidelines" />
        </div>
        <div className="cs-hero-content">
          <div className="cs-hero-meta">
            <span className="cs-label">Brand Identity · Zürich 2026</span>
          </div>
          <h1 className="cs-hero-title">HSWISS<br />Nexus</h1>
        </div>
      </header>

      {/* ── Project intro ── */}
      <section className="cs-intro">
        <div className="cs-intro-left">
          <div className="cs-detail-block">
            <span className="cs-detail-label">Client</span>
            <span className="cs-detail-value">HSWISS Nexus</span>
          </div>
          <div className="cs-detail-block">
            <span className="cs-detail-label">Scope</span>
            <span className="cs-detail-value">Full Brand Identity System</span>
          </div>
          <div className="cs-detail-block">
            <span className="cs-detail-label">Year</span>
            <span className="cs-detail-value">2026</span>
          </div>
          <div className="cs-detail-block">
            <span className="cs-detail-label">Location</span>
            <span className="cs-detail-value">Zürich, Switzerland</span>
          </div>
        </div>
        <div className="cs-intro-right">
          <p className="cs-lead">
            A complete brand identity for a Swiss integrative health platform bridging Eastern botanical science and Western clinical research.
          </p>
          <p className="cs-body">
            HSWISS Nexus required a visual language that could earn trust across two distinct medical cultures simultaneously. The system had to feel rigorous enough for clinicians, warm enough for patients, and prestigious enough for the Swiss market — without compromising any of these registers.
          </p>
        </div>
      </section>

      {/* ── Brand Essence: full-width ── */}
      <section className="cs-full-img">
        <img src="/images/hswiss/page-04.jpg" alt="Brand Essence" loading="lazy" />
      </section>

      {/* ── Challenge + Role: two-up ── */}
      <section className="cs-two-up">
        <div className="cs-two-up-img">
          <img src="/images/hswiss/page-05.jpg" alt="Brand Challenge" loading="lazy" />
        </div>
        <div className="cs-two-up-img">
          <img src="/images/hswiss/page-06.jpg" alt="Brand Role" loading="lazy" />
        </div>
      </section>

      {/* ── Brand Values ── */}
      <section className="cs-values">
        <span className="cs-section-label">Brand Values</span>
        <div className="cs-values-grid">
          <div className="cs-value-item">
            <span className="cs-value-num">01</span>
            <h3 className="cs-value-title">Legitimises Tradition</h3>
            <p className="cs-value-desc">Scientific validation applied to traditional practices — giving Eastern medicine the credibility it deserves in Western clinical contexts.</p>
          </div>
          <div className="cs-value-item">
            <span className="cs-value-num">02</span>
            <h3 className="cs-value-title">Humanises Science</h3>
            <p className="cs-value-desc">Cultural narrative makes clinical knowledge approachable. Precision without coldness.</p>
          </div>
          <div className="cs-value-item">
            <span className="cs-value-num">03</span>
            <h3 className="cs-value-title">Swiss Standards</h3>
            <p className="cs-value-desc">Rooted in Swiss neutrality, the brand operates as a trusted bridge across health traditions and borders.</p>
          </div>
          <div className="cs-value-item">
            <span className="cs-value-num">04</span>
            <h3 className="cs-value-title">Neutral Framework</h3>
            <p className="cs-value-desc">A visual system designed to hold authority without imposing it — adaptable, consistent, quietly confident.</p>
          </div>
        </div>
      </section>

      {/* ── Chapter divider: Logo ── */}
      <div className="cs-chapter-label">
        <span>02 · Brand Logo</span>
      </div>

      {/* ── Our Logo: full-width green ── */}
      <section className="cs-full-img cs-full-img--light">
        <img src="/images/hswiss/page-08.jpg" alt="HSWISS Nexus Logo" loading="lazy" />
      </section>

      {/* ── Logo rationale ── */}
      <section className="cs-text-block">
        <div className="cs-text-inner">
          <span className="cs-section-label">The Mark</span>
          <h2 className="cs-section-title">A Symbol Built<br />for Two Worlds</h2>
          <p className="cs-body">
            The HSWISS Nexus mark is a geometric form inspired by the leaf — the universal symbol of botanical origin — rendered with the precision of Swiss design. Two interlocking shapes create a single unified structure: a visual metaphor for the convergence of Eastern knowledge and Western science.
          </p>
          <p className="cs-body">
            Clean geometry. Muted sage. Nothing decorative. Every decision in the mark earns its place.
          </p>
        </div>
      </section>

      {/* ── Colour Variations: full-width ── */}
      <section className="cs-full-img cs-full-img--light">
        <img src="/images/hswiss/page-14.jpg" alt="Logo Colour Variations" loading="lazy" />
      </section>

      {/* ── Chapter divider: Colour ── */}
      <div className="cs-chapter-label">
        <span>03 · Brand Colour</span>
      </div>

      {/* ── Brand Color section title: full-width graphic ── */}
      <section className="cs-full-img">
        <img src="/images/hswiss/page-16.jpg" alt="Brand Colour" loading="lazy" />
      </section>

      {/* ── Primary Colors: arched swatches ── */}
      <section className="cs-full-img cs-full-img--light">
        <img src="/images/hswiss/page-17.jpg" alt="Primary Colours" loading="lazy" />
      </section>

      {/* ── Colour text + dropper ── */}
      <section className="cs-split-colour">
        <div className="cs-split-colour-text">
          <span className="cs-section-label">Colour System</span>
          <h2 className="cs-section-title">Rooted in Nature,<br />Grounded in Science</h2>
          <p className="cs-body">
            The primary palette draws from the Swiss Alpine landscape: sage greens that carry botanical credibility, cooled by the restraint of mountain light. Secondary tones — Porcelain White (#D4D2CF), Mineral Grey (#313131) — provide the clinical clarity the brand requires. A single precise Red (#A2292B) nods to Swiss heritage without announcing itself.
          </p>
        </div>
        <div className="cs-split-colour-img">
          <img src="/images/hswiss/page-40.jpg" alt="HSWISS Nexus product" loading="lazy" />
        </div>
      </section>

      {/* ── Chapter divider: Applications ── */}
      <div className="cs-chapter-label">
        <span>05 · Stationery</span>
      </div>

      {/* ── Full stationery spread: constrained for sharpness ── */}
      <section className="cs-contained-img">
        <img src="/images/hswiss/page-28.jpg" alt="Brand Stationery System" loading="lazy" />
      </section>

      {/* ── Business Card ── */}
      <section className="cs-full-img cs-full-img--light">
        <img src="/images/hswiss/page-25.jpg" alt="Business Card" loading="lazy" />
      </section>

      {/* ── Packaging: frosted bottle + tote ── */}
      <section className="cs-two-up">
        <div className="cs-two-up-img">
          <img src="/images/hswiss/page-39.jpg" alt="Product Packaging" loading="lazy" />
        </div>
        <div className="cs-two-up-img">
          <img src="/images/hswiss/page-41.jpg" alt="Brand Tote Bag" loading="lazy" />
        </div>
      </section>

      {/* ── Environmental signage: full-width ── */}
      <section className="cs-full-img">
        <img src="/images/hswiss/page-38.jpg" alt="Environmental Signage" loading="lazy" />
      </section>

      {/* ── Chapter divider: Social Media ── */}
      <div className="cs-chapter-label">
        <span>06 · Social Media</span>
      </div>

      {/* ── Social Post Templates ── */}
      <section className="cs-full-img cs-full-img--light">
        <img src="/images/hswiss/page-32.jpg" alt="Social Media Post Templates" loading="lazy" />
      </section>

      {/* ── Pattern: full-width graphic close ── */}
      <section className="cs-full-img cs-full-img--light">
        <img src="/images/hswiss/page-37.jpg" alt="Brand Pattern" loading="lazy" />
      </section>

      {/* ── Closing ── */}
      <section className="cs-closing">
        <blockquote className="cs-quote">
          "The difference between seeing and understanding."
        </blockquote>
        <p className="cs-closing-body">
          Logo system, colour palette, typography, stationery, packaging, social media templates, iconography and environmental applications. A complete visual identity built to earn trust across Eastern and Western medical cultures — and to hold its integrity at every scale.
        </p>
        <div className="cs-closing-meta">
          <span>Brand Guidelines Version 1.0 · March 2026</span>
        </div>
      </section>

      {/* ── Next project ── */}
      <div className="cs-next">
        <Link to="/work/esnr" className="cs-next-link">
          <span className="cs-next-label">Next: ESNR Rebranding</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M10 4L16 10L10 16" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </Link>
      </div>

    </main>
  )
}
