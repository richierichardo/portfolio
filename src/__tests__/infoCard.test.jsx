import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import InfoCard from '../components/InfoCard.jsx'

describe('InfoCard', () => {
  it('renders label and text', () => {
    render(<InfoCard label="Focus" text="Data and web." />)
    expect(screen.getByText('Focus')).toBeInTheDocument()
    expect(screen.getByText('Data and web.')).toBeInTheDocument()
  })
})
