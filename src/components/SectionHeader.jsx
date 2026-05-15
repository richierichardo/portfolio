export default function SectionHeader({ id, title, eyebrow, description, className = '' }) {
  return (
    <header className={className}>
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description ? <p className="section-header__desc">{description}</p> : null}
    </header>
  )
}
