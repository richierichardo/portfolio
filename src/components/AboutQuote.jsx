export default function AboutQuote({ children }) {
  return (
    <figure className="about-quote">
      <blockquote className="about-quote__body">
        <span className="about-quote__mark about-quote__mark--open" aria-hidden>
          “
        </span>
        <span className="about-quote__text">{children}</span>
        <span className="about-quote__mark about-quote__mark--close" aria-hidden>
          ”
        </span>
      </blockquote>
    </figure>
  )
}
