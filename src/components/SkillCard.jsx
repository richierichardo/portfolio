export default function SkillCard({ name, category, logo, placeholder }) {
  return (
    <div className="card-surface skill-card">
      <div
        className={`skill-card__logo ${logo ? '' : 'skill-card__logo--placeholder'}`.trim()}
        aria-hidden={!!logo}
      >
        {logo ? (
          <img src={logo} alt="" width={34} height={34} loading="lazy" decoding="async" />
        ) : (
          <span>{placeholder || name.slice(0, 2)}</span>
        )}
      </div>
      <div className="skill-card__meta">
        <p className="skill-card__name">{name}</p>
        <p className="skill-card__cat">{category}</p>
      </div>
    </div>
  )
}
