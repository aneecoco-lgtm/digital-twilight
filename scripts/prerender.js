// Post-build prerender: bakes per-route <head> (title, meta, canonical,
// Open Graph/Twitter, JSON-LD incl. VideoObject) into a static HTML file for
// every route, so non-JS crawlers and social scrapers get correct, page-specific
// metadata. Runs after `vite build` (see package.json "build").
//
// It only rewrites the <head> block between the <!-- seo:start --> / <!-- seo:end -->
// sentinels in index.html; the body and Vite's hashed asset tags are untouched.
// When a real (JS) visitor loads the page, Seo.jsx updates the same tags in place.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pages, normalizePath, canonicalFor, buildJsonLd, SITE_URL } from '../src/seo-data.js'

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const abs = (p) => (p.startsWith('http') ? p : `${SITE_URL}${p}`)

function buildHead(pathname) {
  const key = normalizePath(pathname)
  const page = pages[key]
  const canonical = canonicalFor(pathname)
  const image = abs(page.image)
  const ogType = key === '/' ? 'website' : 'article'
  const jsonLd = JSON.stringify(buildJsonLd(pathname)).replace(/</g, '\\u003c')

  return [
    `<meta name="description" content="${esc(page.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<title>${esc(page.title)}</title>`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:site_name" content="Digital Twilight" />`,
    `<meta property="og:locale" content="en_CH" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:alt" content="${esc(page.title)} — project by Digital Twilight" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    `<script type="application/ld+json" data-digital-twilight-schema>${jsonLd}</script>`,
  ].join('\n    ')
}

const template = readFileSync(join(distDir, 'index.html'), 'utf8')
const sentinel = /<!-- seo:start[\s\S]*?<!-- seo:end -->/

if (!sentinel.test(template)) {
  throw new Error('prerender: SEO sentinel markers not found in dist/index.html')
}

let count = 0
for (const pathname of Object.keys(pages)) {
  const html = template.replace(sentinel, buildHead(pathname))
  const outPath =
    pathname === '/' ? join(distDir, 'index.html') : join(distDir, pathname, 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  count++
}

console.log(`prerender: wrote ${count} route(s) with baked SEO metadata`)
