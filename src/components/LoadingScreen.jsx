import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

export default function LoadingScreen({ visible }) {
  const reduced = usePrefersReducedMotion()

  return (
    <div
      className={`loading-screen ${visible ? '' : 'is-hidden'}`.trim()}
      aria-hidden={!visible}
      role="status"
      aria-live="polite"
      aria-busy={visible}
    >
      <div className="loading-screen__inner">
        <p className="loading-screen__brand">Richie Richardo</p>
        <div className="loading-screen__bar" aria-hidden={reduced}>
          <div className="loading-screen__bar-fill" />
        </div>
        <p className="loading-screen__hint">Loading portfolio…</p>
      </div>
    </div>
  )
}
