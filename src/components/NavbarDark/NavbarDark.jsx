import React from "react";
import "./NavbarDark.css";
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarDark = () => {
  const instagramLink = "https://www.instagram.com/ctrldot.in/";
  const whatsappLink = "https://chat.whatsapp.com/GUGF570uYJP2cx9A50bILI";

  return (
    <div className="navbar-dark">
      <div className="navbar-dark-container">
        <div className="navbar-dark-logo-container">
          <img
            className="navbar-dark-logo"
            src="/assets/logo-dark.png"
            alt="logo"
          />
        </div>
        <div className="navbar-dark-links">
          <Link
            className="navbar-dark-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>

          <Link
            className="navbar-dark-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={600}
          >
            About us
          </Link>

          <Link
            className="navbar-dark-link link-2"
            activeClass="active"
            to="whatwedo"
            spy={true}
            smooth={true}
            duration={900}
          >
            What we do
          </Link>

          <Link
            className="navbar-dark-link last-dark-link"
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            duration={1200}
          >
            Our team
          </Link>
        </div>
        <div className="navbar-dark-social">
          <div className="navbar-dark-phone-container">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <img
                className="navbar-dark-phone"
                src="/assets/whatsapp-dark.png"
                alt="phone"
              />
            </a>
          </div>
          <div className="navbar-dark-insta-container">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img
                className="navbar-dark-insta"
                src="/assets/insta-dark.png"
                alt="insta"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDark;
