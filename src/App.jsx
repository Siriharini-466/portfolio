// === App.jsx ===

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Timeline from "./components/Timeline.jsx"
import Achievements from "./components/Achievements.jsx"
import SocialLinks from "./components/SocialLinks.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import { ui } from "./data/portfolioData.js"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    document.title = ui.documentTitle
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f]">
      <a
        href={`#${ui.nav.home.id}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-purple focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-glow-purple"
      >
        {ui.skipToContent}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
