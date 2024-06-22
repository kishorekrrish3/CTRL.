import React from "react";
import "./HomeDark.css";
import { Link, animateScroll as scroll } from "react-scroll";

const HomeDark = () => {
  return (
    <div className="home-dark">
      <img src="/assets/bg-dark-1.png" className="home-dark-img" alt="home" />
      <div className="home-dark-card-container">
        <div className="home-dark-card">
          <h1 className="home-dark-title">CTRL.</h1>
          <Link
            className="home-dark-btn"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
          >
            Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDark;
