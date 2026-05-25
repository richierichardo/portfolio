import SectionHeader from '../components/SectionHeader.jsx'
import { faqItems } from '../data/siteMeta.js'
import { useInView } from '../hooks/useInView.js'

export default function Faq() {
  const [ref, visible] = useInView({ rootMargin: '0px 0px -8% 0px', threshold: 0.12 })

  return (
    <div ref={ref}>
      <div
        className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
        style={{ transitionDelay: visible ? '0ms' : '0ms' }}
      >
        <SectionHeader
          id="faq-title"
          eyebrow="Questions"
          title="FAQ"
          description="Quick answers for recruiters, collaborators, and search tools exploring this portfolio."
        />
      </div>

      <dl className={`faq-list card-surface ${visible ? 'is-visible' : ''}`.trim()}>
        {faqItems.map((item) => (
          <div key={item.question} className="faq-list__item">
            <dt className="faq-list__question">{item.question}</dt>
            <dd className="faq-list__answer">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
