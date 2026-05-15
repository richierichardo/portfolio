import { useId, useState } from 'react'
import IconButton from './IconButton.jsx'
import { IconChevronDown, IconExternalLink, IconGitHub } from './icons.jsx'

export default function ProjectCard({ project, from, revealVisible, staggerMs = 0 }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const dirClass = from === 'left' ? 'reveal--left' : 'reveal--right'

  const toggle = () => setOpen((v) => !v)

  const onToggleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className={`reveal ${dirClass} ${revealVisible ? 'is-visible' : ''}`.trim()}
      style={{ transitionDelay: revealVisible ? `${staggerMs}ms` : '0ms' }}
    >
      <article className="card-surface project-card">
        <div
          className="project-card__toggle"
          role="button"
          tabIndex={0}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          onKeyDown={onToggleKeyDown}
        >
          <div className="project-card__thumb">
            <img src={project.imageSrc} alt={project.imageAlt} loading="lazy" decoding="async" />
          </div>

          <div className="project-card__body">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__excerpt">{project.shortDescription}</p>
            <div className="project-card__tags" role="list">
              {project.tech.map((t) => (
                <span className="tag" role="listitem" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="project-card__toggle-foot">
            <span className="text-sm font-semibold text-[rgb(var(--color-fg))]">Details</span>
            <IconChevronDown className={`project-card__chevron h-4 w-4 ${open ? 'is-open' : ''}`} />
          </div>
        </div>

        <div className="project-card__row">
          <IconButton
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            aria-label={`${project.title} on GitHub`}
          >
            <IconGitHub className="h-5 w-5" />
          </IconButton>
          {project.liveUrl ? (
            <IconButton
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label={`${project.title} live demo`}
            >
              <IconExternalLink className="h-5 w-5" />
            </IconButton>
          ) : null}
        </div>

        <div
          className={`project-card__details ${open ? 'is-open' : ''}`}
          id={panelId}
          role="region"
          aria-label={`${project.title} details`}
        >
          <div className="project-card__details-inner">
            <div className="project-card__panel">
              <div>
                <h4>Overview</h4>
                <p>{project.description}</p>
              </div>
              <div>
                <h4>Problem solved</h4>
                <p>{project.problem}</p>
              </div>
              <div>
                <h4>Key features</h4>
                <ul>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Tech stack</h4>
                <div className="project-card__tags">
                  {project.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
