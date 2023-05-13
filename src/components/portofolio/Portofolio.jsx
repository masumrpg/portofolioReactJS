import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>GitHub Project</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio-container">
        <article className="portofolio-item">
          <div className="portofolio-item-image">
            <img src={IMG1} alt="img" />
          </div>
          <h3>Web Portofolio with HTML</h3>
          <div className="portofolio-item-cta">
            <a href="https://github.com/masumrpg/Portofolio" className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://masumrpg.github.io/Portofolio/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portofolio-item">
          <div className="portofolio-item-image">
            <img src={IMG2} alt="img1" />
          </div>
          <h3>Web Portofolio with HTML</h3>
          <div className="portofolio-item-cta">
            <a href="https://github.com/masumrpg/portofolioReactJS" className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="http://masum.byethost4.com/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portofolio