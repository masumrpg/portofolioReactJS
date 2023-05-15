import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { Link } from 'react-scroll'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/ma-sum-575068196/" target="_blank"><AiFillLinkedin className='social' /></a>
        <a href="https://github.com/masumrpg" target="_blank" rel="noreferrer"><AiFillGithub className='social' /></a>
        <a href="https://www.instagram.com/masum.rpg/?hl=id" target="_blank" rel="noreferrer"><AiFillInstagram className='social' /></a>
    </div>
  )
}

export default HeaderSocials