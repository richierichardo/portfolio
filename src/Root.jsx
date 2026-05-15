import { useEffect, useState } from 'react'
import './styles/base.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

export default function Root() {
  const [bootDone, setBootDone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ms = reduced ? 380 : 960
    const t = window.setTimeout(() => setBootDone(true), ms)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <LoadingScreen visible={!bootDone} />
      <div
        className={`app-shell transition-opacity duration-500 ease-[var(--ease-out)] ${bootDone ? 'opacity-100' : 'pointer-events-none opacity-0'}`.trim()}
      >
        <div className="page-backdrop" aria-hidden>
          <div className="page-backdrop__mesh" />
          <div className="page-backdrop__grid" />
          <div className="page-backdrop__noise" />
        </div>
        <Navbar />
        <main id="main" className="app-main">
          <App />
        </main>
        <Footer />
      </div>
    </>
  )
}
