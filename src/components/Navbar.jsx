// === Navbar.jsx ===

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { profile, ui } from "../data/portfolioData.js"

const sectionSelectors = [
  { id: ui.nav.home.id, selector: `#${ui.nav.home.id}` },
  ...ui.nav.links.map((l) => ({ id: l.sectionId, selector: `#${l.sectionId}` })),
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(ui.nav.home.id)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const orderedIds = useMemo(() => sectionSelectors.map((s) => s.id), [])

  useEffect(() => {
    const elements = sectionSelectors
      .map((s) => document.querySelector(s.selector))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
          return
        }

        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        if (window.scrollY >= docHeight - 4) {
          setActive(orderedIds[orderedIds.length - 1])
        }
      },
      { root: null, threshold: [0.25, 0.45, 0.65], rootMargin: "-20% 0px -55% 0px" },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [orderedIds])

  function scrollToId(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  const navItems = [
    { id: ui.nav.home.id, label: ui.nav.home.label },
    ...ui.nav.links.map((l) => ({ id: l.sectionId, label: l.label })),
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-[#0a0a0f]/75 backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10" aria-label="Primary">
        <motion.button
          type="button"
          onClick={() => scrollToId(ui.nav.home.id)}
          whileHover={{ scale: 1.04, boxShadow: "0 0 22px rgba(124, 58, 237, 0.35)" }}
          whileTap={{ scale: 0.98 }}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-sm font-bold text-white shadow-glow-purple ring-1 ring-white/10"
          aria-label={ui.navBrandAria}
        >
          {profile.initials}
        </motion.button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue shadow-glow-purple" />
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center md:hidden">
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.96 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-inner ring-1 ring-white/10"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            aria-label={open ? ui.menuToggleCloseAria : ui.menuToggleOpenAria}
          >
            {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav-drawer"
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-5 pt-2 sm:px-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((link) => {
                  const isActive = active === link.id
                  return (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => scrollToId(link.id)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                          isActive
                            ? "bg-white/10 text-white shadow-glow-purple ring-1 ring-white/10"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <span className="text-xs text-white/40">{isActive ? "●" : ""}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
