import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="whatwedo">
      <div className="whatwedo-title-container">
        {/* <img className="whatwedo-gradient" src="/assets/gradient.png" /> */}
        <h1 className="whatwedo-title">EXPLORE WHAT WE DO</h1>
        <div className="whatwedo-content">
          <div className="box-container">
            <div className="whatwedo-box">
              <img className="box-img" src="/assets/box-1.png" alt="box-1" />
              <h1 className="box-title">Web Development</h1>
              <p className="box-content">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sed erat
                mus ac. Amet leo netus nisl magna. Neque mattis massa aliquet
                dolor. Lacus placerat eget et dui dui.
              </p>
            </div>
            <div className="whatwedo-box">
              <img className="box-img" src="/assets/box-2.png" alt="box-2" />
              <h1 className="box-title">App Development</h1>
              <p className="box-content">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sed erat
                mus ac. Amet leo netus nisl magna. Neque mattis massa aliquet
                dolor. Lacus placerat eget et dui dui.
              </p>
            </div>
            <div className="whatwedo-box">
              <img className="box-img" src="/assets/box-3.png" alt="box-3" />
              <h1 className="box-title">Video Editing</h1>
              <p className="box-content">
                Lorem ipsum dolor sit amet consectetur. Pellentesque sed erat
                mus ac. Amet leo netus nisl magna. Neque mattis massa aliquet
                dolor. Lacus placerat eget et dui dui.
              </p>
            </div>
            <div className="whatwedo-box">
              <img className="box-img" src="/assets/box-4.png" alt="box-4" />
              <h1 className="box-title">Posts and Logo Design</h1>
              <p className="box-content">
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

export default WhatWeDo;
