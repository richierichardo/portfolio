// A small, testable in-memory rate limiter utility (token-per-key, simple cooldown)
export class SimpleRateLimiter {
  constructor({ windowMs = 60_000, max = 1 } = {}) {
    this.windowMs = windowMs
    this.max = max
    this.map = new Map()
  }

  // returns { allowed: boolean, remaining: number, retryAfterMs: number }
  check(key, now = Date.now()) {
    const w = this.windowMs
    const rec = this.map.get(key)
    if (!rec || now - rec.start >= w) {
      this.map.set(key, { start: now, count: 1 })
      return { allowed: true, remaining: this.max - 1, retryAfterMs: 0 }
    }
    if (rec.count < this.max) {
      rec.count += 1
      this.map.set(key, rec)
      return { allowed: true, remaining: this.max - rec.count, retryAfterMs: 0 }
    }
    const retryAfterMs = rec.start + w - now
    return { allowed: false, remaining: 0, retryAfterMs }
  }
}
