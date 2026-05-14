// === Skills.jsx ===

import { motion } from "framer-motion"
import { HiCodeBracketSquare, HiServer } from "react-icons/hi2"
import {
  SiAnaconda,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecolab,
  SiHtml5,
  SiJupyter,
  SiMysql,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
} from "react-icons/si"
import { skills, ui } from "../data/portfolioData.js"

const iconComponents = {
  SiPython,
  SiOpenjdk,
  SiHtml5,
  SiFastapi,
  HiServer,
  HiCodeBracketSquare,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiJupyter,
  SiGooglecolab,
  SiAnaconda,
  SiGit,
  SiGithubactions,
}

const skillGroups = [
  { key: "languages", labelKey: "languages", items: skills.languages },
  { key: "frontend", labelKey: "frontend", items: skills.frontend },
  { key: "backend", labelKey: "backend", items: skills.backend },
  { key: "databases", labelKey: "databases", items: skills.databases },
  { key: "tools", labelKey: "tools", items: skills.tools },
  { key: "cloudDevOps", labelKey: "cloudDevOps", items: skills.cloudDevOps },
]

export default function Skills() {
  const sectionId = ui.sections.skills.id

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
            {ui.skills.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{ui.skills.subtitle}</p>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.05 }}
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {ui.skills.groups[group.labelKey]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => {
                  const Icon = iconComponents[skill.icon]
                  return (
                    <motion.span
                      key={`${group.key}-${skill.name}-${idx}`}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.35, delay: idx * 0.02 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 26px rgba(124, 58, 237, 0.45)",
                        borderColor: "rgba(167, 139, 250, 0.55)",
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 shadow-none ring-0 transition-colors"
                    >
                      {Icon ? <Icon className={`h-4 w-4 ${skill.color}`} aria-hidden /> : null}
                      <span>{skill.name}</span>
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
