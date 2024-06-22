import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">ABOUT US</h1>
      <div className="about-content">
        <div className="about-content-left">
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur. Sit nullam augue in turpis
            tincidunt facilisi pellentesque. Duis sit orci pretium leo ultricies
            at lorem. Lectus risus metus duis ultrices sed pharetra. Non non
            pellentesque erat iaculis molestie viverra. Lorem ipsum dolor sit
            amet consectetur. Sit nullam augue in turpis tincidunt facilisi
            pellentesque. Duis sit orci pretium leo ultricies at lorem. Lectus
            risus metus duis ultrices sed pharetra. Non non pellentesque erat
            iaculis molestie viverra. Lorem ipsum dolor sit amet consectetur.
            Sit nullam augue in turpis tincidunt facilisi pellentesque. Duis sit
            orci pretium leo ultricies at lorem. Lectus risus metus duis
            ultrices sed pharetra. Non non pellentesque erat.
          </p>
        </div>
        <div className="about-content-right">
          <img src="/assets/about-1.svg" className="about-img" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
