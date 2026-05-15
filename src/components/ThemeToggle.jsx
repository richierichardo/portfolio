import { useEffect, useState } from 'react'
import { IconMoon, IconSun } from './icons.jsx'

const STORAGE_KEY = 'theme'

function getDefaultTheme() {
  return 'dark'
}

function applyTheme(theme) {
  const el = document.documentElement
  const isLight = theme === 'light'
  el.setAttribute('data-theme', isLight ? 'light' : 'dark')
  el.classList.toggle('dark', !isLight)
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    return saved || getDefaultTheme()
  })

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const isLight = theme === 'light'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      className="btn-icon h-10 w-10 border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg-elevated)/0.65)] text-[rgb(var(--color-fg))] hover:border-[rgb(var(--color-accent-primary)/0.35)]"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {isLight ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
      <span className="sr-only">Toggle color theme</span>
    </button>
  )
}
