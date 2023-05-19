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
import { useEffect } from 'react';


const App = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('Header', { reset: true, origin: 'top' });
    sr.reveal('Nav', { origin: 'bottom' });

    return () => {
      sr.destroy();
    };
  }, []);

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