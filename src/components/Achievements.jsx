// === Achievements.jsx ===

import { motion } from "framer-motion"
import { AiOutlineSafetyCertificate } from "react-icons/ai"
import { GiArtificialIntelligence } from "react-icons/gi"
import { MdCampaign, MdGroups } from "react-icons/md"
import { SiCplusplus, SiPython } from "react-icons/si"
import { achievements, ui } from "../data/portfolioData.js"

const iconComponents = {
  AiOutlineSafetyCertificate,
  SiPython,
  GiArtificialIntelligence,
  SiCplusplus,
  MdGroups,
  MdCampaign,
}

export default function Achievements() {
  const sectionId = ui.sections.achievements.id

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
            {ui.achievements.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{ui.achievements.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = iconComponents[item.icon]
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 32px rgba(124, 58, 237, 0.35)",
                  borderColor: "rgba(167, 139, 250, 0.55)",
                }}
                className="glass-panel group relative overflow-hidden border border-white/10 bg-white/5 p-6 shadow-none transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/35 to-brand-blue/35 text-brand-cyan shadow-inner ring-1 ring-white/10">
                    {Icon ? <Icon className="h-6 w-6" aria-hidden /> : null}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.issuer}</p>
                    {item.date ? (
                      <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                        {item.date}
                      </p>
                    ) : null}
                    <p className="mt-4 text-sm leading-relaxed text-white/65">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
