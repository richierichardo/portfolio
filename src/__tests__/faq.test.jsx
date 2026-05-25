import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Faq from '../sections/Faq.jsx'

describe('Faq', () => {
  it('renders section heading and FAQ entries', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: /^FAQ$/i })).toBeInTheDocument()
    expect(screen.getByText(/What is Richie Richardo's portfolio focused on/i)).toBeInTheDocument()
    expect(screen.getByText(/Python, data analysis, dashboard development/i)).toBeInTheDocument()
    expect(screen.getByText(/intersection of data and web development/i)).toBeInTheDocument()
  })
})
