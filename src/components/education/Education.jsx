import React from 'react'
import './education.css'
import {GiGraduateCap} from 'react-icons/gi'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Services = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.education-content', { reset: true, origin: 'bottom' });

    // return () => {
    //   sr.destroy();
    // };
  }, []);

  return (
    <section id="education">
      <h5 className="title-anim">Educational</h5>
      <h2 className="title-anim">Background</h2>

      <div className="container education-container">
        <div className="education-content">
          <GiGraduateCap className='education-icon'/>
          <h3>Junior High School</h3>
          <small>SMP N 1 Adimulyo</small>
          <p>2011-2013</p>
        </div>
        <div className="education-content">
          <GiGraduateCap className='education-icon'/>
          <h3>Senior High School</h3>
          <small>MAN 4 Kebumen</small>
          <p>2014-2016</p>
        </div>
        <div className="education-content">
          <GiGraduateCap className='education-icon'/>
          <h3>Bachelor</h3>
          <small>Universitas Putra Bangsa</small>
          <p>2017-2021</p>
        </div>
      </div>
    </section>
  )
}

export default Services