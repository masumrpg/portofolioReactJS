import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-general">
          <h3>General Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill/>
              <h4>Ms. Office</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience-dev">

        </div>
      </div>
    </section>
  )
}

export default Experience