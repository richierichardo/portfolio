import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App.jsx'

describe('App', () => {
  it('renders all main sections with accessible landmarks', () => {
    render(<App />)
    expect(document.getElementById('hero')).toBeInTheDocument()
    expect(document.getElementById('about')).toBeInTheDocument()
    expect(document.getElementById('projects')).toBeInTheDocument()
    expect(document.getElementById('skills')).toBeInTheDocument()
    expect(document.getElementById('contact')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Richie Richardo/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About me/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Skills & tools/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument()
  })
})
