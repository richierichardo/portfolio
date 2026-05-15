import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SectionHeader from '../components/SectionHeader.jsx'

describe('SectionHeader', () => {
  it('renders eyebrow, title, and description', () => {
    render(
      <SectionHeader
        id="test-title"
        eyebrow="Eyebrow"
        title="Section title"
        description="Section description"
      />,
    )
    expect(screen.getByText('Eyebrow')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Section title', level: 2 })).toHaveAttribute('id', 'test-title')
    expect(screen.getByText('Section description')).toBeInTheDocument()
  })
})
