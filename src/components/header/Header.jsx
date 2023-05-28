import React, {useEffect} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'

const Header = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    // TITILE ANIM ALL
    sr.reveal('.title-anim', { reset: true, origin: 'top' });
    // CONTAIN ANIM
    sr.reveal('.home-img', { reset: true, origin: 'top' });

    sr.reveal('.cta', { reset: true, origin: 'top' });

    // return () => {
    //   sr.destroy();
    // };
  }, []);


  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a Management Graduate', 'I Like to Learn New Things', 'Codings is My Hobby'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    }
  }, [])

  return (
    <header id='home'>
      <div className="container header-container">
        <h5 className="title-anim">Halo, My Name is</h5>
        <h1 className="title-anim">Ma'sum</h1>
        <span ref={el} className="text-light-span"/>
        <CTA/>
        <HeaderSocials/>

        <div className="me home-img">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header