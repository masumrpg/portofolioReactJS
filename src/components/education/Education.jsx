import React from 'react'
import './education.css'
import {GiGraduateCap} from 'react-icons/gi'

const Services = () => {
  return (
    <section id="education">
      <h5>Educational</h5>
      <h2>Background</h2>

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