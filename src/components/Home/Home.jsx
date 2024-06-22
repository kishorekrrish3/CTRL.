import React from "react";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div className="home">
      <img src="/assets/bg-light-2.png" className="home-img" alt="home" />
      <div className="home-card-container">
        <div className="home-card">
          <h1 className="home-title">CTRL.</h1>
          <Link
            className="home-btn"
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

export default Home;
