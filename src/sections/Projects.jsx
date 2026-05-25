import SectionHeader from '../components/SectionHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { useInView } from '../hooks/useInView.js'

export default function Projects() {
  const [ref, stageVisible] = useInView({ rootMargin: '0px 0px -6% 0px', threshold: 0.08 })

  return (
    <div ref={ref}>
      <div
        className={`reveal ${stageVisible ? 'is-visible' : ''}`.trim()}
        style={{ transitionDelay: stageVisible ? '0ms' : '0ms' }}
      >
        <SectionHeader
          id="projects-title"
          eyebrow="Selected work"
          title="Projects"
          description="Case studies across finance tools, dataset exploration, dashboards, and API utilities—open a card for problem, stack, and features."
        />
      </div>

      <div className={`projects-stage grid gap-6 sm:grid-cols-2 ${stageVisible ? 'is-visible' : ''}`.trim()}>
        {projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            from={i % 2 === 0 ? 'left' : 'right'}
            revealVisible={stageVisible}
            staggerMs={90 + i * 75}
          />
        ))}
      </div>
    </div>
  )
}
