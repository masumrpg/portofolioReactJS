/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        MA'SUM
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com/masum.rpg">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/masum.rpg">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ma-sum-575068196/">
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; 2023. Allright reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
