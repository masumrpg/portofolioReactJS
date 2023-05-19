import React, {useEffect} from 'react'
import './about.css'
import MeAbout from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiChicken} from 'react-icons/gi'
import {BiCodeAlt} from 'react-icons/bi'
import ScrollReveal from 'scrollreveal'

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('#about', { reset: true, origin: 'right' });

    return () => {
      sr.destroy();
    };
  }, [])

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <img src={MeAbout} alt="me" className="abuot-me-image" />
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Graduate</h5>
              <small>Universitas Putra Bangsa</small>
            </article>

            <article className="about-card">
              <GiChicken className="about-icon" />
              <h5>Experience</h5>
              <small>Finance Admin 6 Month</small>
            </article>

            <article className="about-card">
              <BiCodeAlt className="about-icon" />
              <h5>FrontEnd</h5>
              <small>Some Web Dev Knowledge</small>
            </article>
          </div>

          <p>
            I like challenging work, like work that makes me grow, can work under pressure and can be a little creative.
            I graduated from Putra Bangsa University, Kebumen since December 2021, which is located in Serut Village,
            Kuwarasan District, Kebumen Regency, Central Java.
          </p>

          <div id="about-btn">
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About