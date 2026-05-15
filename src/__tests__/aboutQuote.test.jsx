import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AboutQuote from '../components/AboutQuote.jsx'

describe('AboutQuote', () => {
  it('renders blockquote content', () => {
    render(<AboutQuote>Sample quote text.</AboutQuote>)
    expect(screen.getByText('Sample quote text.')).toBeInTheDocument()
  })
})
