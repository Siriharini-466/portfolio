// === Projects.jsx ===

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useRef } from "react"
import { FaGithub, FaRocket } from "react-icons/fa"
import { projects, ui } from "../data/portfolioData.js"

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)

  const rotateX = useMotionTemplate`${rx}deg`
  const rotateY = useMotionTemplate`${ry}deg`

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    rx.set(py * -10)
    ry.set(px * 12)
  }

  function handleLeave() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <div className="h-full [perspective:1200px]" style={{ transformStyle: "preserve-3d" }}>
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.03, borderColor: "rgba(167, 139, 250, 0.55)", boxShadow: "0 0 40px rgba(124, 58, 237, 0.35)" }}
        className="glass-panel group relative h-full overflow-hidden border border-white/10 bg-white/5 p-6"
      >
      {project.featured ? (
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/10 bg-gradient-to-r from-brand-purple/30 to-brand-blue/30 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10">
          <FaRocket className="h-3.5 w-3.5 text-brand-cyan" aria-hidden />
          {ui.projects.featuredBadge}
        </div>
      ) : null}
      <h3 className="pr-24 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/25 hover:shadow-glow-purple"
        >
          <FaGithub className="h-4 w-4" aria-hidden />
          {ui.projects.githubButton}
        </motion.a>
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-glow-blue"
        >
          {ui.projects.liveDemoButton}
        </motion.a>
      </div>
      </motion.article>
    </div>
  )
}

export default function Projects() {
  const sectionId = ui.sections.projects.id

  return (
    <section
      id={sectionId}
      data-nav-section={sectionId}
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-10"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-cyan">{sectionId}</p>
          <h2 id={`${sectionId}-heading`} className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {ui.projects.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{ui.projects.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, index) => (
            <ProjectCard key={p.key} project={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
