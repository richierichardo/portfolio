import SkillCard from '../components/SkillCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { skillsTools } from '../data/skills.js'
import { useInView } from '../hooks/useInView.js'

export default function Skills() {
  const [ref, visible] = useInView({ rootMargin: '0px 0px -8% 0px', threshold: 0.1 })

  return (
    <div ref={ref}>
      <div
        className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
        style={{ transitionDelay: visible ? '0ms' : '0ms' }}
      >
        <SectionHeader
          id="skills-title"
          eyebrow="Toolkit"
          title="Skills & tools"
          description="The software I reach for most often—organized for recruiters who scan fast and engineers who read deeper."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillsTools.map((s, i) => (
          <div
            key={s.name}
            className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
            style={{ transitionDelay: visible ? `${90 + i * 35}ms` : '0ms' }}
          >
            <SkillCard name={s.name} category={s.category} logo={s.logo} placeholder={s.placeholder} />
          </div>
        ))}
      </div>
    </div>
  )
}
