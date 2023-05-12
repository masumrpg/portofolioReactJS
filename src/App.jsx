import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Education/>
      <Experience/>
      <Portofolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App