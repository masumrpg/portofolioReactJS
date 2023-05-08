import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Halo Nama Saya</h5>
        <h1>Ma'sum</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header