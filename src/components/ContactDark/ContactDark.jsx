import React from "react";
import "./ContactDark.css";

const ContactDark = () => {
  return (
    <div className="contact-dark">
      <div className="contact-dark-container">
        <h1 className="contact-dark-title">GET IN TOUCH</h1>
        <div className="contact-dark-form-container">
          <form className="contact-dark-form">
            {/* LINE 1 */}
            <div className="l1-dark">
              <label className="contact-dark-form-label" htmlFor="fname">
                First name
                <div className="input-dark-container">
                  <img
                    className="contact-dark-input-icon"
                    src="/assets/person-dark.png"
                    alt="person"
                  />
                  <input
                    className="contact-dark-input contact-dark-form-input-fname"
                    type="text"
                    placeholder="Enter your first name..."
                  />
                </div>
              </label>
              <label className="contact-dark-form-label" htmlFor="lname">
                Last name
                <div className="input-dark-container">
                  <img
                    className="contact-dark-input-icon"
                    src="/assets/person-dark.png"
                    alt="person"
                  />
                  <input
                    className="contact-dark-input contact-dark-form-input-lname"
                    type="text"
                    placeholder="Enter your last name..."
                  />
                </div>
              </label>
            </div>
            {/* LINE 2 */}
            <div className="l2-dark">
              <label className="contact-dark-form-label" htmlFor="email">
                Email address
                <div className="input-dark-container xl-dark-cont">
                  <img
                    className="contact-dark-input-icon"
                    src="/assets/email-dark.png"
                    alt="email"
                  />
                  <input
                    className="contact-dark-input contact-dark-form-input-email"
                    type="email"
                    placeholder="Enter your email address..."
                  />
                </div>
              </label>
            </div>
            {/* LINE 3 */}
            <div className="l3-dark">
              <label className="contact-dark-form-label" htmlFor="phone">
                Phone
                <div className="input-dark-container xl-dark-cont">
                  <img
                    className="contact-dark-input-icon"
                    src="/assets/phone-dark.png"
                    alt="phone"
                  />
                  <input
                    className="contact-dark-input contact-dark-form-input-phone"
                    type="number"
                    placeholder="Enter your phone number..."
                  />
                </div>
              </label>
            </div>
            {/* LINE 4 */}
            <div className="l4-dark">
              <label for="message" className="contact-dark-form-label">
                Message
              </label>
              <br />
              <div class="message-dark-container">
                <textarea
                  className="message-dark-textarea"
                  rows="8"
                  cols="50"
                  placeholder="Enter your main text here..."
                ></textarea>
              </div>
            </div>
            <button type="submit" className="contact-dark-form-btn">
              Submit
            </button>
          </form>
          <p className="copyright-dark">
            <img
              className="copyright-dark-icon"
              src="/assets/copyright.png"
              alt="copyright"
            />
            <span className="ctrl-dark-name">CTRL.</span> , All rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDark;
