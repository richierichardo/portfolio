import SectionHeader from '../components/SectionHeader.jsx'
import AboutQuote from '../components/AboutQuote.jsx'
import InfoCard from '../components/InfoCard.jsx'
import { whatIDoCopy } from '../data/siteMeta.js'
import { useInView } from '../hooks/useInView.js'

const highlights = [
  { label: 'Focus', text: 'Backend systems, Python, data, and applied AI.' },
  { label: 'Current stack', text: 'Python, FastAPI, Laravel, PostgreSQL, and React.' },
  { label: 'Interests', text: 'Data pipelines, automation, financial data, and AI systems.' },
  { label: 'Goal', text: 'Grow into a full-stack engineer building reliable data products.' },
]

export default function About() {
  const [ref, visible] = useInView({ rootMargin: '0px 0px -8% 0px', threshold: 0.15 })

  return (
    <div ref={ref}>
      <div
        className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
        style={{ transitionDelay: visible ? '0ms' : '0ms' }}
      >
        <SectionHeader id="about-title" eyebrow="Introduction" title="About me" />
      </div>

      <div
        className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
        style={{ transitionDelay: visible ? '85ms' : '0ms' }}
      >
        <AboutQuote>
          I build software at the intersection of backend systems, data, and applied AI—turning unstructured information
          into reliable workflows, useful APIs, and interfaces people can actually use. I am still deepening my Python
          practice while growing toward full-stack systems engineering.
        </AboutQuote>
      </div>

      <div
        className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
        style={{ transitionDelay: visible ? '130ms' : '0ms' }}
      >
        <p className="about-what-i-do">{whatIDoCopy}</p>
      </div>

      <div className="about-info-grid">
        {highlights.map((h, i) => (
          <div
            key={h.label}
            className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
            style={{ transitionDelay: visible ? `${170 + i * 60}ms` : '0ms' }}
          >
            <InfoCard label={h.label} text={h.text} />
          </div>
        ))}
      </div>
    </div>
  )
}
