// Single source of truth for all SEO metadata.
// Imported by both the runtime component (src/components/Seo.jsx) and the
// build-time prerender script (scripts/prerender.js) so they can never drift.

export const SITE_URL = 'https://www.digital-twilight.com'

// Per-route metadata. `video` (optional) emits schema.org VideoObject —
// the contentUrl files live on the server (some are gitignored locally).
export const pages = {
  '/': {
    title: 'Digital Twilight — Brand Design & Visual Storytelling Zürich',
    description: 'Independent creative practice by Annalisa Cosentino in Zürich, specialising in brand identity, visual communication, film and AI-assisted storytelling.',
    image: '/images/portrait.jpg',
  },
  '/work/hswiss-nexus': {
    title: 'HSWISS Nexus Brand Identity — Digital Twilight',
    description: 'A complete brand identity for a Swiss integrative health platform bridging Eastern botanical science and Western clinical research.',
    image: '/images/hswiss/page-01.jpg',
  },
  '/work/esnr': {
    title: 'ESNR Rebrand & Visual Communication — Digital Twilight',
    description: 'Brand identity and visual communication for the European Society of Neuroradiology, spanning congresses, education and digital campaigns.',
    image: '/images/esnr-rebrand.jpg',
  },
  '/work/yoga-on-art': {
    title: 'Yoga on Art Brand Identity & Film — Digital Twilight',
    description: 'Brand strategy, visual identity and film for Yoga on Art, a cultural concept bringing original fine art to daily yoga practice.',
    image: '/images/yoa/pitch-02.jpg',
    video: {
      name: 'Yoga on Art — Brand Film',
      description: 'Brand film for Yoga on Art, blending fine art and yoga practice, directed and produced by Digital Twilight.',
      thumbnailUrl: '/images/yoa/pitch-02.jpg',
      contentUrl: '/videos/yoa-intro-video.mp4',
      uploadDate: '2026-03-01',
    },
  },
  '/work/evolve': {
    title: 'Evolve Zürich Brand Film — Digital Twilight',
    description: 'Film direction, photography and brand content for Evolve Hair Atelier Zürich, capturing its craft, people and visual identity.',
    image: '/images/evolve/hero.jpg',
    video: {
      name: 'Evolve Zürich — Brand Film',
      description: 'Brand film for Evolve Hair Atelier Zürich — film direction, cinematography and edit by Digital Twilight.',
      thumbnailUrl: '/images/evolve/hero.jpg',
      contentUrl: '/videos/evolve-film.mp4',
      uploadDate: '2026-02-01',
    },
  },
  '/work/wer-ist-migrant': {
    title: 'Wer ist Migrant? AI Short Film — Digital Twilight',
    description: 'A hybrid short film and animation exploring migration through documentary interviews, visual storytelling and AI-generated scenes.',
    image: '/images/wim/wim-hero.jpg',
    video: {
      name: 'Wer ist Migrant? — Hybrid AI Short Film',
      description: 'A hybrid documentary and AI-generated short film on migration, directed by Digital Twilight — combining interviews, motion and generative video scenes.',
      thumbnailUrl: '/images/wim/wim-hero.jpg',
      contentUrl: '/images/wim/wim-film-final.mp4',
      uploadDate: '2026-05-01',
    },
  },
  '/work/ai-storytelling': {
    title: 'AI Storytelling & Generative Visuals — Digital Twilight',
    description: 'Selected AI-assisted visual storytelling projects combining human creative direction, generative imagery, film and motion.',
    image: '/images/ai-creation.jpg',
    video: {
      name: 'AI Storytelling — Generative Visual Reel',
      description: 'Selected AI-assisted moving-image work under human creative direction — generative video, motion and multimedia workflow development by Digital Twilight.',
      thumbnailUrl: '/images/ai-creation.jpg',
      contentUrl: '/videos/ai/ai-vid-01.mp4',
      uploadDate: '2026-06-01',
    },
  },
  '/impressum': {
    title: 'Impressum — Digital Twilight',
    description: 'Legal notice and contact details for Digital Twilight, the independent creative practice of Annalisa Cosentino in Zürich.',
    image: '/images/dt-logo-full.png',
  },
}

// Strip trailing slash(es) so '/work/esnr' and '/work/esnr/' resolve the same.
export function normalizePath(pathname) {
  const stripped = pathname.replace(/\/+$/, '')
  return stripped === '' ? '/' : stripped
}

// Canonical URL. Sub-routes get a trailing slash to match how the prerendered
// folder is actually served by Apache (directory index), so canonical ==
// served URL == sitemap entry — no redirect hops.
export function canonicalFor(pathname) {
  const key = normalizePath(pathname)
  return key === '/' ? `${SITE_URL}/` : `${SITE_URL}${key}/`
}

const abs = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path}`)

// schema.org @graph for a route: WebSite + Organization + Person are constant;
// a per-page node (WebPage/CreativeWork) and optional VideoObject are added.
export function buildJsonLd(pathname) {
  const key = normalizePath(pathname)
  const page = pages[key] || pages['/']
  const canonical = canonicalFor(pathname)
  const image = abs(page.image)
  const isHome = key === '/'

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Digital Twilight',
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'Digital Twilight',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/dt-logo-full.png`,
      image: `${SITE_URL}/images/portrait-of-me.jpg`,
      email: 'info@digital-twilight.com',
      founder: { '@id': `${SITE_URL}/#annalisa-cosentino` },
      address: { '@type': 'PostalAddress', addressLocality: 'Zürich', addressCountry: 'CH' },
      areaServed: 'Worldwide',
      sameAs: ['https://www.instagram.com/_digitaltwilight_'],
      knowsAbout: [
        'Brand identity',
        'Visual communication',
        'Creative direction',
        'Film production',
        'AI video production',
        'Generative AI storytelling',
        'Multimedia workflow development',
        'Motion design',
      ],
      slogan: 'Creative design, AI video and multimedia workflow development.',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#annalisa-cosentino`,
      name: 'Annalisa Cosentino',
      jobTitle: 'Creative Director and Founder',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/`,
    },
    {
      '@type': isHome ? 'WebPage' : 'CreativeWork',
      '@id': `${canonical}#page`,
      url: canonical,
      name: page.title,
      description: page.description,
      image,
      inLanguage: 'en',
      ...(isHome
        ? { isPartOf: { '@id': `${SITE_URL}/#website` } }
        : { creator: { '@id': `${SITE_URL}/#organization` } }),
    },
  ]

  if (page.video) {
    graph.push({
      '@type': 'VideoObject',
      '@id': `${canonical}#video`,
      name: page.video.name,
      description: page.video.description,
      thumbnailUrl: abs(page.video.thumbnailUrl),
      contentUrl: abs(page.video.contentUrl),
      uploadDate: page.video.uploadDate,
      creator: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${canonical}#page` },
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
