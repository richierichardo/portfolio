import SectionHeader from '../components/SectionHeader.jsx'
import IconButton from '../components/IconButton.jsx'
import { IconGitHub, IconGmail, IconLinkedIn } from '../components/icons.jsx'
import { socialLinks } from '../data/social.js'
import { useInView } from '../hooks/useInView.js'

export default function Contact() {
  const [ref, visible] = useInView({ rootMargin: '0px 0px -10% 0px', threshold: 0.12 })

  return (
    <div ref={ref} className="contact-cta card-surface">
      <div
        className={`reveal relative ${visible ? 'is-visible' : ''}`.trim()}
        style={{ transitionDelay: visible ? '0ms' : '0ms' }}
      >
        <SectionHeader
          id="contact-title"
          eyebrow="Let’s talk"
          title="Contact"
          description="Reach out by email or connect on GitHub and LinkedIn."
        />
      </div>

      <div className="contact-simple">
        <p
          className={`reveal contact-simple__lead muted ${visible ? 'is-visible' : ''}`.trim()}
          style={{ transitionDelay: visible ? '75ms' : '0ms' }}
        >
          Prefer email? Tap Gmail to open your mail app. No forms required.
        </p>
        <ul className="contact-simple__actions">
          <li
            className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
            style={{ transitionDelay: visible ? '130ms' : '0ms' }}
          >
            <IconButton
              as="a"
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="btn !border-transparent !bg-[rgb(var(--color-accent-primary))] !text-[rgb(var(--color-accent-primary-contrast))] hover:!shadow-[0_10px_28px_rgb(var(--color-accent-primary)/0.28)]"
            >
              <IconGitHub className="h-5 w-5" />
              GitHub
            </IconButton>
          </li>
          <li
            className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
            style={{ transitionDelay: visible ? '190ms' : '0ms' }}
          >
            <IconButton
              as="a"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn !border-transparent !bg-[rgb(var(--color-accent-primary))] !text-[rgb(var(--color-accent-primary-contrast))] hover:!shadow-[0_10px_28px_rgb(var(--color-accent-primary)/0.28)]"
            >
              <IconLinkedIn className="h-5 w-5" />
              LinkedIn
            </IconButton>
          </li>
          <li
            className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
            style={{ transitionDelay: visible ? '250ms' : '0ms' }}
          >
            <IconButton
              as="a"
              href={socialLinks.email}
              className="btn !border-transparent !bg-[rgb(var(--color-accent-primary))] !text-[rgb(var(--color-accent-primary-contrast))] hover:!shadow-[0_10px_28px_rgb(var(--color-accent-primary)/0.28)]"
            >
              <IconGmail className="h-5 w-5" />
              Gmail
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  )
}
