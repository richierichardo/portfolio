import { useEffect, useId, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [compact, setCompact] = useState(false)
  const [activeId, setActiveId] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0, 0.1, 0.25] },
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${compact ? 'is-scrolled' : ''}`.trim()}>
        <div className="site-header__shell">
          <nav className="site-header__nav" aria-label="Primary">
            <a href="#hero" className="site-header__brand font-display">
              Richie<span className="text-[rgb(var(--color-accent-primary))]">.</span>
            </a>

            <ul className="nav-menu-desktop list-none">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`nav-link ${activeId === s.id ? 'is-active' : ''}`.trim()}
                    aria-current={activeId === s.id ? 'page' : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="site-header__actions">
              <ThemeToggle />
              <button
                type="button"
                className={`nav-toggle hamburger ${menuOpen ? 'is-open' : ''}`.trim()}
                aria-expanded={menuOpen}
                aria-controls={menuId}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className="hamburger__line" />
                <span className="hamburger__line" />
                <span className="hamburger__line" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`nav-drawer ${menuOpen ? 'is-open' : ''}`.trim()}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 cursor-default border-0 bg-transparent"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={closeMenu}
        />
        <div className="nav-panel">
          <ul className="flex list-none flex-col gap-1 p-0">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`nav-link block rounded-md px-3 py-3 text-base ${activeId === s.id ? 'is-active' : ''}`.trim()}
                  aria-current={activeId === s.id ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
