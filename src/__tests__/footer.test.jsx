import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer.jsx'
import { socialLinks } from '../data/social.js'

describe('Footer', () => {
  it('renders copyright and social profile links', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Richie Richardo/i)).toBeInTheDocument()
    expect(screen.getByText(/Python, data, and web portfolio/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub profile/i })).toHaveAttribute('href', socialLinks.github)
    expect(screen.getByRole('link', { name: /LinkedIn profile/i })).toHaveAttribute('href', socialLinks.linkedin)
    expect(screen.getByRole('link', { name: /Email Richie/i })).toHaveAttribute('href', socialLinks.email)
  })
})
