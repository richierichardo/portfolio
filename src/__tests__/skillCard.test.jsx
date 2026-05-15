import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SkillCard from '../components/SkillCard.jsx'

describe('SkillCard', () => {
  it('renders name and category with logo', () => {
    const { container } = render(
      <SkillCard name="React JS" category="Framework" logo="/assets/tools/reactjs.png" />,
    )
    expect(screen.getByText('React JS')).toBeInTheDocument()
    expect(screen.getByText('Framework')).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute('src', '/assets/tools/reactjs.png')
  })

  it('renders placeholder when logo is missing', () => {
    render(<SkillCard name="Python" category="Language" logo={null} placeholder="Py" />)
    expect(screen.getByText('Py')).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
