import './App.css'
import Hero from './Hero.jsx'
import Navbar from './Navbar'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Journey from './Journey.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'

function App() {
  return (
    <div className="w-full bg-[#0a0f1c] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Education />
      <Projects />
    </div>
  )
}

export default App
