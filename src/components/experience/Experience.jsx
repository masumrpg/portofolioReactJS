import React, {useEffect} from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import ScrollReveal from 'scrollreveal'

const Experience = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.experience-general', { reset: true, origin: 'top' });
    sr.reveal('.experience-dev', { reset: true, origin: 'bottom' });

    return () => {
      sr.destroy();
    };
  }, [])

  return (
    <section id="experience">
      <h5 className="title-anim">What Skills I Have</h5>
      <h2 className="title-anim">My Experience</h2>

      <div className="container experience-container">

        {/* ---------- GENERAL SKILLS ---------- */}

        <div className="experience-general">
          <h3>General Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>Ms. Word</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>Ms. PowerPoint</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>Ms. Excel</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>Photoshop</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
          </div>
        </div>

        {/* ---------- DEV SKILLs ---------- */}

        <div className="experience-dev">
          <h3>Digital Knowladge Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience