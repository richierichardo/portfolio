import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../sections/Contact.jsx'

describe('Contact', () => {
  it('renders social links including Gmail mailto', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    const gmail = screen.getByRole('link', { name: /Gmail/i })
    expect(gmail).toHaveAttribute('href', expect.stringContaining('mailto:richieforwork17@gmail.com'))
    expect(screen.queryByLabelText(/email address/i)).not.toBeInTheDocument()
  })
})
