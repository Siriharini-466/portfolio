// === About.jsx ===

import { motion } from "framer-motion"
import { education, profile, ui } from "../data/portfolioData.js"

export default function About() {
  const sectionId = ui.sections.about.id

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
            {ui.about.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{ui.about.subtitle}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="relative flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple via-fuchsia-500 to-brand-blue p-[3px] shadow-glow-purple"
              aria-label={ui.about.avatarAria}
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0f] ring-1 ring-white/10">
                <span className="bg-gradient-to-br from-brand-purple to-brand-blue bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                  {profile.initials}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 text-base leading-relaxed text-white/75"
            >
              {profile.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45 }}
                className="mb-5 text-lg font-semibold text-white"
              >
                {ui.about.educationSectionTitle}
              </motion.h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.key}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="glass-panel border border-white/10 bg-white/5 p-5 shadow-none"
                  >
                    <p className="text-sm font-semibold text-white">{edu.degree}</p>
                    <p className="mt-2 text-sm text-white/70">{edu.institution}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/65">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {edu.yearLabel}: {edu.year}
                      </span>
                      {edu.scoreLabel && edu.score ? (
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
