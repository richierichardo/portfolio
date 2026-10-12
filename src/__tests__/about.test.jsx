import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../sections/About.jsx'

describe('About', () => {
  it('renders section header, quote, and highlight cards', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About me/i })).toBeInTheDocument()
    expect(screen.getByText(/intersection of backend systems, data, and applied AI/i)).toBeInTheDocument()
    expect(screen.getByText(/Python-first foundation, building backend systems/i)).toBeInTheDocument()
    expect(screen.getByText('Focus')).toBeInTheDocument()
    expect(screen.getByText('Current stack')).toBeInTheDocument()
    expect(screen.getByText('Interests')).toBeInTheDocument()
    expect(screen.getByText('Goal')).toBeInTheDocument()
  })
})
