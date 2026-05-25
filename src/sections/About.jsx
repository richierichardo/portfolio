import SectionHeader from '../components/SectionHeader.jsx'
import AboutQuote from '../components/AboutQuote.jsx'
import InfoCard from '../components/InfoCard.jsx'
import { whatIDoCopy } from '../data/siteMeta.js'
import { useInView } from '../hooks/useInView.js'

const highlights = [
  {
    label: 'Focus',
    text: 'Data, Python, and web—bridging analysis and interfaces.',
  },
  {
    label: 'Current stack',
    text: 'React, Tailwind, Node.js, and Python end to end.',
  },
  {
    label: 'Interests',
    text: 'Data analytics, IT consulting, SAP/ERP, and web apps.',
  },
  {
    label: 'Goal',
    text: 'Useful, data-driven tools and maintainable portfolio work.',
  },
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
          I work at the intersection of Python, data, and the web—shaping raw information into clear decisions, then
          shipping responsive interfaces that stay fast and readable. I like pairing analytical rigor with practical
          execution: fewer buzzwords, more things that actually work in the browser.
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
