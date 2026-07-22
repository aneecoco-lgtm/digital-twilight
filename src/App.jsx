import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Tagline from './components/Tagline'
import SelectedWork from './components/SelectedWork'
import About from './components/About'
import SiteFooter from './components/SiteFooter'
import Seo from './components/Seo'
import Testimonials from './components/Testimonials'
import WorkMarquee from './components/WorkMarquee'
import ServicesTicker from './components/ServicesTicker'
import HswissCaseStudy from './pages/HswissCaseStudy'
import EsnrCaseStudy from './pages/EsnrCaseStudy'
import YoaCaseStudy from './pages/YoaCaseStudy'
import EvolveCaseStudy from './pages/EvolveCaseStudy'
import WerIstMigrantCaseStudy from './pages/WerIstMigrantCaseStudy'
import AiStorytelling from './pages/AiStorytelling'
import Impressum from './pages/Impressum'
import './App.css'

// Reset scroll when navigating between pages (hash links within a page are unaffected)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function Home() {
  return (
    <>
      <Nav />
      <Carousel />
      <Tagline />
      <ServicesTicker />
      <SelectedWork />
      <About />
      <WorkMarquee />
      <Testimonials />
      <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/hswiss-nexus" element={<HswissCaseStudy />} />
        <Route path="/work/esnr" element={<EsnrCaseStudy />} />
        <Route path="/work/yoga-on-art" element={<YoaCaseStudy />} />
        <Route path="/work/evolve" element={<EvolveCaseStudy />} />
        <Route path="/work/wer-ist-migrant" element={<WerIstMigrantCaseStudy />} />
        <Route path="/work/ai-storytelling" element={<AiStorytelling />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
