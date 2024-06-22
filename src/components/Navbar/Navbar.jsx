import React from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const instagramLink = "https://www.instagram.com/ctrldot.in/";
  const whatsappLink = "https://chat.whatsapp.com/GUGF570uYJP2cx9A50bILI";

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img
            className="navbar-logo"
            src="/assets/logo-light.png"
            alt="logo"
          />
        </div>
        <div className="navbar-links">
          <Link
            className="navbar-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>

          <Link
            className="navbar-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={600}
          >
            About us
          </Link>

          <Link
            className="navbar-link link-2"
            activeClass="active"
            to="whatwedo"
            spy={true}
            smooth={true}
            duration={900}
          >
            What we do
          </Link>

          <Link
            className="navbar-link last-link"
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            duration={1200}
          >
            Our team
          </Link>
        </div>
        <div className="navbar-social">
          <div className="navbar-phone-container">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <img
                className="navbar-phone"
                src="/assets/whatsapp.png"
                alt="phone"
              />
            </a>
          </div>
          <div className="navbar-insta-container">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img
                className="navbar-insta"
                src="/assets/insta.png"
                alt="insta"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
