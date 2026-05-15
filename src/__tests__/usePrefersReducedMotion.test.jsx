import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

describe('usePrefersReducedMotion', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query.includes('reduce'),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  })

  it('reflects prefers-reduced-motion media query', async () => {
    const { result } = renderHook(() => usePrefersReducedMotion())
    await waitFor(() => expect(result.current).toBe(true))
  })
})
