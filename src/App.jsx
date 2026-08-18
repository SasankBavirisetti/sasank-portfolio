import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function Divider() {
  return <hr className="divider" />
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <Metrics />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}
