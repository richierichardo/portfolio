import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <>
      <section id="hero" aria-labelledby="hero-title" className="section section--hero">
        <Hero />
      </section>
      <div className="container mx-auto w-full max-w-6xl px-4 sm:px-6">
        <section id="about" aria-labelledby="about-title" className="section">
          <About />
        </section>
        <section id="projects" aria-labelledby="projects-title" className="section">
          <Projects />
        </section>
        <section id="skills" aria-labelledby="skills-title" className="section">
          <Skills />
        </section>
        <section id="contact" aria-labelledby="contact-title" className="section">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
