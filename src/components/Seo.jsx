import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.digital-twilight.com'

const pages = {
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
  },
  '/work/evolve': {
    title: 'Evolve Zürich Brand Film — Digital Twilight',
    description: 'Film direction, photography and brand content for Evolve Hair Atelier Zürich, capturing its craft, people and visual identity.',
    image: '/images/evolve/hero.jpg',
  },
  '/work/wer-ist-migrant': {
    title: 'Wer ist Migrant? AI Short Film — Digital Twilight',
    description: 'A hybrid short film and animation exploring migration through documentary interviews, visual storytelling and AI-generated scenes.',
    image: '/images/wim/wim-hero.jpg',
  },
  '/work/ai-storytelling': {
    title: 'AI Storytelling & Generative Visuals — Digital Twilight',
    description: 'Selected AI-assisted visual storytelling projects combining human creative direction, generative imagery, film and motion.',
    image: '/images/ai-creation.jpg',
  },
  '/impressum': {
    title: 'Impressum — Digital Twilight',
    description: 'Legal notice and contact details for Digital Twilight, the independent creative practice of Annalisa Cosentino in Zürich.',
    image: '/images/dt-logo-full.png',
  },
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pages[pathname] || pages['/']
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    const image = `${SITE_URL}${page.image}`

    document.title = page.title
    setMeta('meta[name="description"]', { name: 'description', content: page.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: pathname === '/' ? 'website' : 'article' })
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Digital Twilight' })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_CH' })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: page.title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: page.description })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: `${page.title} — project by Digital Twilight` })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: page.title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: page.description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical

    let structuredData = document.head.querySelector('script[data-digital-twilight-schema]')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.type = 'application/ld+json'
      structuredData.dataset.digitalTwilightSchema = ''
      document.head.appendChild(structuredData)
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
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
          knowsAbout: ['Brand identity', 'Visual communication', 'Creative direction', 'Film production', 'AI storytelling'],
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
          '@type': pathname === '/' ? 'WebPage' : 'CreativeWork',
          '@id': `${canonical}#page`,
          url: canonical,
          name: page.title,
          description: page.description,
          image,
          inLanguage: 'en',
          ...(pathname === '/' ? { isPartOf: { '@id': `${SITE_URL}/#website` } } : { creator: { '@id': `${SITE_URL}/#organization` } }),
        },
      ],
    })
  }, [pathname])

  return null
}
