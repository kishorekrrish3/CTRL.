import React from "react";
import "./AboutDark.css";

const AboutDark = () => {
  return (
    <div className="about-dark">
      <h1 className="about-dark-title">ABOUT US</h1>
      <div className="about-dark-content">
        <div className="about-dark-content-left">
          <p className="about-dark-text">
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
        <div className="about-dark-content-right">
          <img
            src="/assets/about-dark-1.svg"
            className="about-dark-img"
            alt="about-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDark;
