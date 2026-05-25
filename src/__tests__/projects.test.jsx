import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from '../sections/Projects.jsx'
import { projects } from '../data/projects.js'

describe('Projects', () => {
  it('renders project cards with titles and GitHub links', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByText('Pokémon Team Builder')).toBeInTheDocument()
    expect(screen.getByText(projects[1].title)).toBeInTheDocument()
    const githubLinks = screen.getAllByRole('link', { name: /on GitHub/i })
    expect(githubLinks.length).toBeGreaterThan(0)
  })
})
