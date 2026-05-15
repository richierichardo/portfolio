import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SocialButton from '../components/SocialButton.jsx'

describe('SocialButton', () => {
  it('renders external link with target blank for github variant', () => {
    render(
      <SocialButton href="https://github.com/example" variant="github" icon={<span aria-hidden>G</span>}>
        GitHub
      </SocialButton>,
    )
    const link = screen.getByRole('link', { name: /GitHub/i })
    expect(link).toHaveAttribute('href', 'https://github.com/example')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('omits target for mailto gmail variant', () => {
    render(
      <SocialButton
        href="mailto:test@example.com"
        variant="gmail"
        external={false}
        icon={<span aria-hidden>@</span>}
      >
        Gmail
      </SocialButton>,
    )
    const link = screen.getByRole('link', { name: /Gmail/i })
    expect(link).not.toHaveAttribute('target')
  })
})
