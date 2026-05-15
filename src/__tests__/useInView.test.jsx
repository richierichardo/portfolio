import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useInView } from '../hooks/useInView.js'

function Probe() {
  const [ref, visible] = useInView()
  return (
    <div ref={ref} data-testid="probe" data-visible={visible ? 'yes' : 'no'}>
      probe
    </div>
  )
}

describe('useInView', () => {
  it('sets visible when element intersects', async () => {
    render(<Probe />)
    expect(await screen.findByTestId('probe')).toHaveAttribute('data-visible', 'yes')
  })
})
