import IconButton from './IconButton.jsx'

const variantClass = {
  github: 'btn btn-social-github',
  linkedin: 'btn btn-social-linkedin',
  gmail: 'btn btn-social-gmail',
}

/**
 * @param {object} props
 * @param {string} props.href
 * @param {string} props.children
 * @param {'github'|'linkedin'|'gmail'} [props.variant]
 * @param {boolean} [props.external]
 * @param {import('react').ReactNode} props.icon
 */
export default function SocialButton({ href, icon, children, external = true, variant = 'github' }) {
  const cls = variantClass[variant] ?? variantClass.github
  return (
    <IconButton
      as="a"
      href={href}
      bare
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon}
      {children}
    </IconButton>
  )
}
