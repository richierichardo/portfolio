import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

describe('ProjectCard', () => {
  const project = projects[0]

  it('renders title, excerpt, tags, and GitHub link', () => {
    render(<ProjectCard project={project} from="left" revealVisible staggerMs={0} />)
    expect(screen.getByRole('heading', { name: project.title, level: 3 })).toBeInTheDocument()
    expect(screen.getByText(project.shortDescription)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(`${project.title} on GitHub`, 'i') })).toHaveAttribute(
      'href',
      project.githubUrl,
    )
  })

  it('expands details panel on click', async () => {
    const user = userEvent.setup()
    const { container } = render(<ProjectCard project={project} from="left" revealVisible staggerMs={0} />)
    const toggle = container.querySelector('.project-card__toggle')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const panel = container.querySelector('.project-card__details.is-open')
    expect(panel).toBeTruthy()
    expect(panel).toHaveTextContent('Overview')
    expect(panel).toHaveTextContent(project.description)
    expect(panel).toHaveTextContent('Key features')
  })
})
