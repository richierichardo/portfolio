export default function InfoCard({ label, text, className = '' }) {
  return (
    <div className={`card-surface about-highlight ${className}`.trim()}>
      <p className="about-highlight__label">{label}</p>
      <p className="about-highlight__text">{text}</p>
    </div>
  )
}
