import React, { useRef, useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import emailjs from '@emailjs/browser'
import EmailSent from './EmailSent'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  // ========== ANIMASI ==========
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.title-contact', { reset: true, origin: 'bottom' });
    sr.reveal('form, .contact-options', { reset: true, origin: 'bottom' });

    // return () => {
    //   sr.destroy();
    // };
  }, [])

  // ========== FUNCTION EMAIL SEND ==========
  const form = useRef()
  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    let timer;
    if (emailSent) {
      timer = setTimeout(() => {
        setEmailSent(false)
      }, 5000)
    }
    return () => clearTimeout(timer);
  }, [emailSent])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_1czp9ns', 'template_ebjr4yb', form.current, '44RxuASXDJFAdKPDK')

    e.target.reset()
    setEmailSent(true)
  }

  return (
    <section id="contact">
      <h5 className='title-contact'>Get in Touch</h5>
      <h2 className='title-contact'>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>masumrpg@gmail.com</h5>
            <a href="mailto:masumrpg@gmail.com">Send a Message</a>
          </article>
          <article className="contact-option">
            <FaFacebookMessenger className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>masum.rpg</h5>
            <a href="http://m.me/masum.rpg" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+6287729647721</h5>
            <a href="http://wa.me/6287729647721" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        

        {/* ---------- FORM ---------- */}

        {emailSent ? <EmailSent /> : (
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        )}
        
      </div>
    </section>
  )
}

export default Contact