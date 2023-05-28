import React, {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Web Portofolio with HTML Basic',
    github: 'https://github.com/masumrpg/Portofolio',
    demo: 'https://masumrpg.github.io/Portofolio/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Web Portofolio with ReactJS',
    github: 'https://github.com/masumrpg/portofolioReactJS',
    demo: '#'
  }
]

const Portofolio = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.portofolio-item', { reset: true, origin: 'left' });

    // return () => {
    //   sr.destroy();
    // };
  }, [])

  return (
    <section id="portofolio">
      <h5 className="title-anim">GitHub Project</h5>
      <h2 className="title-anim">Portofolio</h2>

      <div className="container portofolio-container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portofolio-item">
                <div className="portofolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portofolio-item-cta">
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio