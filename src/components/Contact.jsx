// === Contact.jsx ===

import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2"
import { profile, socialLinks, ui } from "../data/portfolioData.js"

export default function Contact() {
  const sectionId = ui.sections.contact.id
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`)
    const body = encodeURIComponent(
      `${ui.contact.formMessage}:\n${message}\n\n---\n${ui.contact.formName}: ${name}\n${ui.contact.formEmail}: ${email}`,
    )
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }, [email, message, name])

  function handleSubmit(e) {
    e.preventDefault()
    window.location.href = mailtoHref
  }

  return (
    <section
      id={sectionId}
      data-nav-section={sectionId}
      className="relative scroll-mt-24 px-4 pb-28 pt-24 sm:px-6 lg:px-10"
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
            {ui.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{ui.contact.subtitle}</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            <a
              href={`mailto:${profile.email}`}
              className="glass-panel group flex items-center gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-brand-cyan/45 hover:shadow-glow-cyan"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-cyan ring-1 ring-white/10 transition group-hover:shadow-glow-cyan">
                <HiEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/55">{ui.contact.emailCardTitle}</p>
                <p className="mt-1 text-sm font-medium text-white">{profile.email}</p>
              </div>
            </a>

            <div className="glass-panel flex items-center gap-4 border border-white/10 bg-white/5 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-cyan ring-1 ring-white/10">
                <HiPhone className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/55">{ui.contact.phoneCardTitle}</p>
                <p className="mt-1 text-sm font-medium text-white">{profile.phone}</p>
              </div>
            </div>

            <div className="glass-panel flex items-center gap-4 border border-white/10 bg-white/5 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-cyan ring-1 ring-white/10">
                <HiMapPin className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/55">{ui.contact.locationCardTitle}</p>
                <p className="mt-1 text-sm font-medium text-white">{profile.location}</p>
              </div>
            </div>

            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-panel group flex items-center gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-[#0077b5]/55 hover:shadow-[0_0_28px_rgba(0,119,181,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0077b5]/15 text-[#0077b5] ring-1 ring-white/10">
                <FaLinkedin className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/55">{ui.contact.linkedinCardTitle}</p>
                <p className="mt-1 text-sm font-medium text-white">{socialLinks.linkedin.username}</p>
              </div>
            </a>

            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-panel group flex items-center gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-white/35 hover:shadow-[0_0_28px_rgba(255,255,255,0.14)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                <FaGithub className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/55">{ui.contact.githubCardTitle}</p>
                <p className="mt-1 text-sm font-medium text-white">{socialLinks.github.username}</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            aria-label={ui.contact.formAria}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="glass-panel space-y-5 border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white/80">
                {ui.contact.formName}
              </label>
              <input
                id="contact-name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-white/80">
                {ui.contact.formEmail}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white/80">
                {ui.contact.formMessage}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="input-glow w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                placeholder=""
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(124, 58, 237, 0.45)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-glow-purple transition sm:w-auto"
            >
              {ui.contact.sendButton}
              <span aria-hidden>{ui.contact.sendArrow}</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
