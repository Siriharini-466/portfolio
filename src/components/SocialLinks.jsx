// === SocialLinks.jsx ===

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { socialLinks, ui } from "../data/portfolioData.js"

const platformIcons = {
  FaLinkedin,
  FaGithub,
}

export default function SocialLinks() {
  const sectionId = ui.social.sectionId
  const platforms = [socialLinks.linkedin, socialLinks.github]

  return (
    <section
      id={sectionId}
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-10"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl text-center mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-cyan">{sectionId}</p>
          <h2 id={`${sectionId}-heading`} className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {ui.social.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{ui.social.subtitle}</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {platforms.map((platform, index) => {
            const Icon = platformIcons[platform.icon]
            return (
              <motion.a
                key={platform.username}
                href={platform.url}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  boxShadow:
                    platform.icon === "FaLinkedin"
                      ? "0 0 36px rgba(0, 119, 181, 0.35)"
                      : "0 0 36px rgba(255, 255, 255, 0.14)",
                }}
                className={`glass-panel flex flex-col items-center gap-6 border bg-white/5 p-10 text-center transition ${platform.borderHoverClass}`}
              >
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 text-4xl ring-1 ring-white/10"
                  style={{ color: platform.brandHex }}
                >
                  {Icon ? <Icon aria-hidden /> : null}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">{platform.displayName}</p>
                  <p className="mt-3 text-xl font-semibold text-white">{platform.username}</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-glow-purple">
                  {ui.social.visitProfile}
                  <span aria-hidden>{ui.social.arrow}</span>
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
