import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pages, normalizePath, canonicalFor, buildJsonLd, SITE_URL } from '../seo-data'

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
    const key = normalizePath(pathname)
    const page = pages[key] || pages['/']
    const canonical = canonicalFor(pathname)
    const image = page.image.startsWith('http') ? page.image : `${SITE_URL}${page.image}`

    document.title = page.title
    setMeta('meta[name="description"]', { name: 'description', content: page.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: key === '/' ? 'website' : 'article' })
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
    structuredData.textContent = JSON.stringify(buildJsonLd(pathname))
  }, [pathname])

  return null
}
