// === Footer.jsx ===

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { profile, socialLinks, ui } from "../data/portfolioData.js"

export default function Footer() {
  const copyrightText = ui.footer.copyrightTemplate
    .replace("{year}", ui.footer.year)
    .replace("{name}", profile.fullName)
  const creditText = ui.footer.creditTemplate.replace("{name}", profile.fullName)

  return (
    <footer className="border-t border-white/10 bg-black/30 px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm text-white/70">{copyrightText}</p>
          <p className="mt-2 text-sm text-white/55">{creditText}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.linkedin.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={ui.footer.linkedinAria}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#0077b5] transition hover:scale-105 hover:border-[#0077b5]/45 hover:shadow-[0_0_22px_rgba(0,119,181,0.35)]"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.github.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={ui.footer.githubAria}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:scale-105 hover:border-white/30 hover:shadow-[0_0_22px_rgba(255,255,255,0.12)]"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
