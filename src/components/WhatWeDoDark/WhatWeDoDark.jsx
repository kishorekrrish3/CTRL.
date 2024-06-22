import React from "react";
import "./WhatWeDoDark.css";

const WhatWeDoDark = () => {
  return (
    <div className="whatwedo-dark">
      <div className="whatwedo-dark-title-container">
        {/* <img className="whatwedo-gradient" src="/assets/gradient.png" /> */}
        <h1 className="whatwedo-dark-title">EXPLORE WHAT WE DO</h1>
        <div className="whatwedo-dark-content">
          <div className="box-dark-container">
            <div className="whatwedo-dark-box">
              <img
                className="box-dark-img"
                src="/assets/box-1.png"
                alt="box-1"
              />
              <h1 className="box-dark-title">Web Development</h1>
              <p className="box-dark-content">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sed erat
                mus ac. Amet leo netus nisl magna. Neque mattis massa aliquet
                dolor. Lacus placerat eget et dui dui.
              </p>
            </div>
            <div className="whatwedo-dark-box">
              <img
                className="box-dark-img"
                src="/assets/box-2.png"
                alt="box-2"
              />
              <h1 className="box-dark-title">App Development</h1>
              <p className="box-dark-content">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sed erat
                mus ac. Amet leo netus nisl magna. Neque mattis massa aliquet
                dolor. Lacus placerat eget et dui dui.
              </p>
            </div>
            <div className="whatwedo-dark-box">
              <img
                className="box-dark-img"
                src="/assets/box-3.png"
                alt="box-3"
              />
              <h1 className="box-dark-title">Video Editing</h1>
              <p className="box-dark-content">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sed erat
                mus ac. Amet leo netus nisl magna. Neque mattis massa aliquet
                dolor. Lacus placerat eget et dui dui.
              </p>
            </div>
            <div className="whatwedo-dark-box">
              <img
                className="box-dark-img"
                src="/assets/box-4.png"
                alt="box-4"
              />
              <h1 className="box-dark-title">Posts and Logo Design</h1>
              <p className="box-dark-content">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sed erat
                mus ac. Amet leo netus nisl magna. Neque mattis massa aliquet
                dolor. Lacus placerat eget et dui dui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoDark;
