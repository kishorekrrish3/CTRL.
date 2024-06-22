import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">GET IN TOUCH</h1>
        <div className="contact-form-container">
          <form className="contact-form">
            {/* LINE 1 */}
            <div className="l1">
              <label className="contact-form-label" htmlFor="fname">
                First name
                <div className="input-container">
                  <img
                    className="contact-input-icon"
                    src="/assets/person.png"
                    alt="person"
                  />
                  <input
                    className="contact-input contact-form-input-fname"
                    type="text"
                    placeholder="Enter your first name..."
                  />
                </div>
              </label>
              <label className="contact-form-label" htmlFor="lname">
                Last name
                <div className="input-container">
                  <img
                    className="contact-input-icon"
                    src="/assets/person.png"
                    alt="person"
                  />
                  <input
                    className="contact-input contact-form-input-lname"
                    type="text"
                    placeholder="Enter your last name..."
                  />
                </div>
              </label>
            </div>
            {/* LINE 2 */}
            <div className="l2">
              <label className="contact-form-label" htmlFor="email">
                Email address
                <div className="input-container xl-cont">
                  <img
                    className="contact-input-icon"
                    src="/assets/email.png"
                    alt="email"
                  />
                  <input
                    className="contact-input contact-form-input-email"
                    type="email"
                    placeholder="Enter your email address..."
                  />
                </div>
              </label>
            </div>
            {/* LINE 3 */}
            <div className="l3">
              <label className="contact-form-label" htmlFor="phone">
                Phone
                <div className="input-container xl-cont">
                  <img
                    className="contact-input-icon"
                    src="/assets/phone.png"
                    alt="phone"
                  />
                  <input
                    className="contact-input contact-form-input-phone"
                    type="number"
                    placeholder="Enter your phone number..."
                  />
                </div>
              </label>
            </div>
            {/* LINE 4 */}
            <div className="l4">
              <label for="message" className="contact-form-label">
                Message
              </label>
              <br />
              <div class="message-container">
                <textarea
                  className="message-textarea"
                  rows="8"
                  cols="50"
                  placeholder="Enter your main text here..."
                ></textarea>
              </div>
            </div>
            <button type="submit" className="contact-form-btn">
              Submit
            </button>
          </form>
          <p className="copyright">
            <img
              className="copyright-icon"
              src="/assets/copyright.png"
              alt="copyright"
            />
            <span className="ctrl-name">CTRL.</span> , All rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
