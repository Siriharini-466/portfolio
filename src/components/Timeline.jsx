// === Timeline.jsx ===

import { motion } from "framer-motion"
import { experience, ui } from "../data/portfolioData.js"

export default function Timeline() {
  const sectionId = ui.sections.experience.id

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
            {ui.timeline.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{ui.timeline.subtitle}</p>
        </motion.div>

        <div className="relative">
          <div
            className="pointer-events-none absolute bottom-0 left-[17px] top-0 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <div className="space-y-14 md:space-y-20">
            {experience.map((item, index) => {
              const isWork = item.variant === "work"
              const dotClass = isWork ? "bg-brand-purple shadow-glow-purple" : "bg-brand-blue shadow-glow-blue"
              const label = isWork ? ui.timeline.workLabel : ui.timeline.educationLabel
              const isLeft = index % 2 === 0

              return (
                <div key={item.key} className="relative grid grid-cols-1 items-start md:grid-cols-2 md:gap-x-10">
                  <div
                    className={`absolute left-[17px] top-8 z-10 -translate-x-1/2 md:left-1/2 ${isLeft ? "" : ""}`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-[#0a0a0f] ${dotClass}`}
                      aria-hidden
                    />
                  </div>

                  <motion.article
                    initial={{ opacity: 0, x: isLeft ? -56 : 56 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={`glass-panel ml-10 border border-white/10 bg-white/5 p-6 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1 md:mr-auto md:max-w-xl md:justify-self-end md:pr-10"
                        : "md:col-start-2 md:ml-auto md:max-w-xl md:justify-self-start md:pl-10"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-cyan">
                        {label}
                      </span>
                      <span className="text-xs text-white/55">{item.dateRange}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.organization}</p>
                    <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/75">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
