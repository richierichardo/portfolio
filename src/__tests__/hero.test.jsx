import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../sections/Hero.jsx'

describe('Hero', () => {
  it('renders name, role, social CTAs, and Gmail mailto', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Richie Richardo/i })).toBeInTheDocument()
    expect(screen.getByText(/Python and Data Specialist/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    const gmail = screen.getByRole('link', { name: /Gmail/i })
    expect(gmail).toHaveAttribute('href', expect.stringContaining('mailto:richieforwork17@gmail.com'))
  })
})
