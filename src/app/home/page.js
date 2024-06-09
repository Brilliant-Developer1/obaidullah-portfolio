import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Education from '../components/Education'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
    </div>
  )
}

export default HomePage