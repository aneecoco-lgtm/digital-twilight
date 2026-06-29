import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Tagline from './components/Tagline'
import SelectedWork from './components/SelectedWork'
import About from './components/About'
import SiteFooter from './components/SiteFooter'
import Testimonials from './components/Testimonials'
import WorkMarquee from './components/WorkMarquee'
import ServicesTicker from './components/ServicesTicker'
import HswissCaseStudy from './pages/HswissCaseStudy'
import EsnrCaseStudy from './pages/EsnrCaseStudy'
import YoaCaseStudy from './pages/YoaCaseStudy'
import EvolveCaseStudy from './pages/EvolveCaseStudy'
import WerIstMigrantCaseStudy from './pages/WerIstMigrantCaseStudy'
import AiStorytelling from './pages/AiStorytelling'
import './App.css'

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/hswiss-nexus" element={<HswissCaseStudy />} />
      <Route path="/work/esnr" element={<EsnrCaseStudy />} />
      <Route path="/work/yoga-on-art" element={<YoaCaseStudy />} />
      <Route path="/work/evolve" element={<EvolveCaseStudy />} />
      <Route path="/work/wer-ist-migrant" element={<WerIstMigrantCaseStudy />} />
      <Route path="/work/ai-storytelling" element={<AiStorytelling />} />
    </Routes>
  )
}
