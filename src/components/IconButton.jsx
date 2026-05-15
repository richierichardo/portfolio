const base =
  'inline-flex items-center justify-center gap-2 rounded-md border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg-elevated)/0.85)] px-3 py-2 text-sm font-semibold text-[rgb(var(--color-fg))] transition-[transform,box-shadow,border-color,background-color] duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[rgb(var(--color-accent-primary)/0.35)] hover:shadow-[0_10px_28px_rgb(0_0_0/0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-accent-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg))] active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 dark:hover:shadow-[0_10px_28px_rgb(0_0_0/0.28)]'

/**
 * @param {object} props
 * @param {'button'|'a'} [props.as]
 * @param {boolean} [props.bare] If true, skip default surface/border styles (for composed buttons like `.btn`).
 */
export default function IconButton({ as = 'button', className = '', bare = false, children, ...rest }) {
  const Tag = as
  const baseClass = bare ? '' : base
  return (
    <Tag className={`${baseClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
