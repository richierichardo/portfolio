import { describe, it, expect } from 'vitest'
import { isValidEmail } from '../utils/validation.js'

describe('isValidEmail', () => {
  it('accepts valid emails', () => {
    const valids = [
      'user@example.com',
      'USER+tag@sub.example.co.uk',
      'first.last@domain.io',
      "o'hara@mail.com",
    ]
    for (const e of valids) expect(isValidEmail(e)).toBe(true)
  })

  it('rejects invalid emails', () => {
    const invalids = [
      '',
      '   ',
      'no-at-symbol.com',
      'a@b',
      'a@b.',
      'a@.com',
      '@example.com',
      'user@example,com',
    ]
    for (const e of invalids) expect(isValidEmail(e)).toBe(false)
  })
})
