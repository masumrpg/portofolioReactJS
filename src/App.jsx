import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Portofolio from './components/portofolio/Portofolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollReveal from 'scrollreveal'


const App = () => {
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  })

  ScrollReveal().reveal('Header, Portofolio', { origin: 'top' })
  ScrollReveal().reveal('About, Contact', { origin: 'right' })
  ScrollReveal().reveal('Education', { origin: 'left' })
  ScrollReveal().reveal('Experience', { origin: 'bottom' })

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App