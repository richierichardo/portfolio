import { heroProfile } from '../data/heroProfile.js'

/**
 * Portrait for the hero. Replace assets in `src/data/heroProfile.js` only.
 */
export default function HeroProfileImage({ className = '', loading = 'eager', fetchPriority }) {
  return (
    <div className={`hero__frame ${className}`.trim()}>
      <div className="hero__glow" aria-hidden />
      <div className="hero__frame-inner">
        <img
          src={heroProfile.imageSrc}
          alt={heroProfile.imageAlt}
          className="hero__img"
          loading={loading}
          decoding="async"
          {...(fetchPriority ? { fetchPriority } : {})}
        />
      </div>
    </div>
  )
}
