import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import SocialButton from '../components/SocialButton.jsx'
import { IconGitHub, IconGmail, IconLinkedIn } from '../components/icons.jsx'
import { socialLinks } from '../data/social.js'

const isTestEnv = import.meta.env.MODE === 'test'

/** Change this when your file is in `public/assets/`. */
const HERO_VIDEO_SRC = '/assets/Man_waves_in_retro_room_202605142255.mp4'
const HERO_VIDEO_POSTER = '/assets/hero-img.webp'

export default function Hero() {
  const videoRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = videoRef.current
    if (!el || isTestEnv) return
    if (reduced) {
      el.pause()
      el.removeAttribute('autoplay')
      return
    }
    const p = el.play()
    if (p && typeof p.catch === 'function') p.catch(() => {})
  }, [reduced])

  return (
    <div className="hero-video-section">
      <div className="hero-video-wrap" aria-hidden>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay={!reduced && !isTestEnv}
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_VIDEO_POSTER}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      <div className="hero-video-overlay" aria-hidden />
      <div className="hero-video-tint" aria-hidden />

      <div className="hero-content">
        <h1 id="hero-title" className="hero-content__title">
          Richie Richardo
        </h1>
        <p className="hero-content__role">Python and Data Specialist</p>
        <p className="hero-content__lead">
          I connect Python and data work with thoughtful React interfaces—turning messy information into decisions
          people can act on.
        </p>
        <div className="hero-content__actions">
          <SocialButton href={socialLinks.github} variant="github" icon={<IconGitHub className="h-5 w-5" />}>
            GitHub
          </SocialButton>
          <SocialButton href={socialLinks.linkedin} variant="linkedin" icon={<IconLinkedIn className="h-5 w-5" />}>
            LinkedIn
          </SocialButton>
          <SocialButton
            href={socialLinks.email}
            variant="gmail"
            external={false}
            icon={<IconGmail className="h-5 w-5" />}
          >
            Gmail
          </SocialButton>
        </div>
      </div>
    </div>
  )
}
