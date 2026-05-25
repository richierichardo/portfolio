import IconButton from './IconButton.jsx'
import { IconGitHub, IconLinkedIn, IconMail } from './icons.jsx'
import { socialLinks } from '../data/social.js'

export default function Footer() {
  return (
    <footer className="footer-surface">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="footer-surface__brand text-center sm:text-left">
          <p className="text-sm text-[rgb(var(--color-muted))]">© 2026 Richie Richardo. All rights reserved.</p>
          <p className="footer-surface__tagline text-sm text-[rgb(var(--color-muted))]">
            Python, data, and web portfolio.
          </p>
        </div>
        <nav aria-label="Social links">
          <ul className="flex list-none items-center gap-2 p-0">
            <li>
              <IconButton
                as="a"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub profile"
              >
                <IconGitHub className="h-5 w-5" />
              </IconButton>
            </li>
            <li>
              <IconButton
                as="a"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn profile"
              >
                <IconLinkedIn className="h-5 w-5" />
              </IconButton>
            </li>
            <li>
              <IconButton
                as="a"
                href={socialLinks.email}
                className="btn-icon"
                aria-label="Email Richie"
              >
                <IconMail className="h-5 w-5" />
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
