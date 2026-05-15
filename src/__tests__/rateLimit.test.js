import { describe, it, expect } from 'vitest'
import { SimpleRateLimiter } from '../../src/utils/rateLimit.js'

describe('SimpleRateLimiter', () => {
  it('allows first request and blocks subsequent within window when max=1', () => {
    const rl = new SimpleRateLimiter({ windowMs: 1000, max: 1 })
    const t0 = 1_000_000
    const k = 'ip|email'

    const r1 = rl.check(k, t0)
    expect(r1.allowed).toBe(true)
    const r2 = rl.check(k, t0 + 200)
    expect(r2.allowed).toBe(false)
    expect(r2.retryAfterMs).toBeGreaterThan(0)
  })

  it('resets after window', () => {
    const rl = new SimpleRateLimiter({ windowMs: 500, max: 1 })
    const k = 'x'
    const r1 = rl.check(k, 0)
    expect(r1.allowed).toBe(true)
    const r2 = rl.check(k, 100)
    expect(r2.allowed).toBe(false)
    const r3 = rl.check(k, 600)
    expect(r3.allowed).toBe(true)
  })
})
