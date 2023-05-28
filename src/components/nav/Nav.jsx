import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { TbMessageCode } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            // distance: "80px",
            duration: 2000,
            delay: 200,
        });

        // TITILE ANIM ALL
        sr.reveal("nav", { reset: false, origin: "bottom" });

        return () => {
            sr.destroy();
        };
    }, []);

    const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false);

    return (
    <nav className={click ? "nav-menu active" : "nav-menu"}>
      <Link
        className="nav-item"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={50}
        onClick={closeMenu}
      >
        <AiOutlineHome />
      </Link>
      <Link
        className="nav-item"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={50}
        onClick={closeMenu}
      >
        <AiOutlineUser />
      </Link>
      <Link
        className="nav-item"
        to="education"
        spy={true}
        smooth={true}
        offset={0}
        duration={50}
        onClick={closeMenu}
      >
        <AiOutlineBook />
      </Link>
      <Link
        className="nav-item"
        to="experience"
        spy={true}
        smooth={true}
        offset={0}
        duration={50}
        onClick={closeMenu}
      >
        <RiServiceLine />
      </Link>
      <Link
        className="nav-item"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={50}
        onClick={closeMenu}
      >
        <TbMessageCode />
      </Link>
    </nav>
  );
};

export default Nav;
