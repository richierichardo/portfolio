import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '../components/Navbar.jsx'

function mountSections() {
  ;['hero', 'about', 'projects', 'skills', 'contact'].forEach((id) => {
    const el = document.createElement('section')
    el.id = id
    document.body.appendChild(el)
  })
}

describe('Navbar', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    mountSections()
  })

  it('renders brand and desktop nav links', () => {
    render(<Navbar />)
    const header = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(header).getByRole('link', { name: /Richie/i })).toHaveAttribute('href', '#hero')
    expect(within(header).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(header).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(within(header).getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
    expect(within(header).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const header = screen.getByRole('navigation', { name: 'Primary' })
    const toggle = within(header).getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const drawer = screen.getByRole('dialog', { name: /mobile navigation/i })
    expect(drawer).toHaveAttribute('aria-hidden', 'false')
    await user.click(within(drawer).getAllByRole('button', { name: /close menu/i })[0])
    expect(drawer).toHaveAttribute('aria-hidden', 'true')
  })
})
