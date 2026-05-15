import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import LoadingScreen from '../components/LoadingScreen.jsx'

describe('LoadingScreen', () => {
  afterEach(() => cleanup())
  it('shows brand and hint when visible', () => {
    render(<LoadingScreen visible />)
    expect(screen.getByText('Richie Richardo')).toBeInTheDocument()
    expect(screen.getByText(/Loading portfolio/i)).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true')
  })

  it('marks hidden when not visible', () => {
    render(<LoadingScreen visible={false} />)
    const status = screen.getByRole('status', { hidden: true })
    expect(status).toHaveAttribute('aria-hidden', 'true')
    expect(status).toHaveAttribute('aria-busy', 'false')
  })
})
