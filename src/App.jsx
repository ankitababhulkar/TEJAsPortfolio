import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './Navbar'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Journey from './components/Journey.jsx'
import Education from './components/Education.jsx'
import Projects from './Projects.jsx'
import Contact from './components/Contact.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="w-full bg-[#0a0f1c] min-h-screen  text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Education />
      <Projects />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
