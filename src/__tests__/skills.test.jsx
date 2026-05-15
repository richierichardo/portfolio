import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from '../sections/Skills.jsx'

describe('Skills', () => {
  it('renders toolkit heading and representative tools', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /Skills & tools/i })).toBeInTheDocument()
    expect(screen.getByText('React JS')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
  })
})
