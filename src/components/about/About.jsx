import React from 'react'
import './about.css'
import MeAbout from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiChicken} from 'react-icons/gi'
import {BiCodeAlt} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={MeAbout} alt="me" className="abuot__me-image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Graduate</h5>
              <small>Universitas Putra Bangsa</small>
            </article>

            <article className="about__card">
              <GiChicken className="about__icon" />
              <h5>Experience</h5>
              <small>Finance Admin 6 Month</small>
            </article>

            <article className="about__card">
              <BiCodeAlt className="about__icon" />
              <h5>FrontEnd</h5>
              <small>Some Web Dev Knowledge</small>
            </article>
          </div>

          <p>
            I like challenging work, like work that makes me grow, can work under pressure and can be a little creative.
            I graduated from Putra Bangsa University, Kebumen since December 2021, which is located in Serut Village,
            Kuwarasan District, Kebumen Regency, Central Java.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About