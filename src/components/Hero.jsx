// === Hero.jsx ===

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { profile, socialLinks, ui } from "../data/portfolioData.js"

export default function Hero() {
  const sectionId = ui.nav.home.id
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = profile.typewriterTitles
  const typeInterval = ui.hero.typewriterIntervalMs
  const cursorMs = ui.hero.cursorBlinkMs

  useEffect(() => {
    const full = titles[titleIndex] ?? ""
    if (!isDeleting) {
      if (displayed.length < full.length) {
        const t = window.setTimeout(() => {
          setDisplayed(full.slice(0, displayed.length + 1))
        }, 45)
        return () => window.clearTimeout(t)
      }
      const hold = window.setTimeout(() => setIsDeleting(true), typeInterval)
      return () => window.clearTimeout(hold)
    }
    if (displayed.length > 0) {
      const t = window.setTimeout(() => {
        setDisplayed(full.slice(0, displayed.length - 1))
      }, 28)
      return () => window.clearTimeout(t)
    }
    const next = window.setTimeout(() => {
      setIsDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }, 320)
    return () => window.clearTimeout(next)
  }, [displayed, isDeleting, titleIndex, titles, typeInterval])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.05 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id={sectionId}
      data-nav-section={sectionId}
      className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden px-4 py-28 sm:px-6 lg:px-10"
      aria-label={ui.nav.home.label}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-transparent to-brand-blue/5" />
      <div className="hero-particles" aria-hidden>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="sr-only">{ui.hero.particlesLabel}</div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p variants={item} className="text-lg text-white/90 sm:text-xl">
          {ui.hero.greeting}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-3 bg-gradient-to-r from-brand-purple via-fuchsia-400 to-brand-blue bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          {profile.fullName}
        </motion.h1>
        <motion.div
          variants={item}
          className="mt-6 flex min-h-[2.5rem] items-center justify-center text-base text-brand-cyan sm:text-lg md:text-xl"
        >
          <span className="font-medium">
            {displayed}
            <span
              className="ml-0.5 inline-block w-2 translate-y-px text-brand-cyan"
              style={{ animation: `cursor-blink ${cursorMs}ms steps(1) infinite` }}
            >
              |
            </span>
          </span>
        </motion.div>
        <style>
          {`
            @keyframes cursor-blink {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }
          `}
        </style>
        <motion.div variants={item} className="mx-auto mt-8 max-w-2xl space-y-3 text-sm leading-relaxed text-white/70 sm:text-base">
          {profile.heroBio.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </motion.div>
        <motion.div variants={item} className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <motion.a
            href={ui.hero.resumeFilePath}
            download
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(124, 58, 237, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-glow-purple backdrop-blur-md transition"
          >
            {ui.hero.downloadResumeLabel}
          </motion.a>
          <motion.a
            href={`#${ui.sections.projects.id}`}
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(37, 99, 235, 0.45)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-glow-blue"
          >
            {ui.hero.viewProjectsLabel}
          </motion.a>
          <motion.a
            href={`#${ui.sections.contact.id}`}
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/10 px-5 py-3 text-sm font-semibold text-white shadow-glow-cyan"
          >
            {ui.hero.contactMeLabel}
          </motion.a>
          <motion.a
            href={socialLinks.github.url}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
          >
            <FaGithub className="h-4 w-4" aria-hidden />
            {ui.hero.githubActionLabel}
          </motion.a>
          <motion.a
            href={socialLinks.linkedin.url}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(0, 119, 181, 0.45)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0077b5]/40 bg-[#0077b5]/10 px-5 py-3 text-sm font-semibold text-white"
          >
            <FaLinkedin className="h-4 w-4" aria-hidden />
            {ui.hero.linkedinActionLabel}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
