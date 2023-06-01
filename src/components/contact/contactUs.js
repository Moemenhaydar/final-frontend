import React from "react";
import "./contactUs.css";

const contactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <h1 className="contact-us-heading">Contact Us</h1>
        <form className="contact-us-form">
          <div class="form-control">
            <input className="form-input" type="value" required="" />
            <label className="form-label">
              <span className="form-span" style={{ transitionDelay: "0ms" }}>
                U
              </span>
              <span className="form-span" style={{ transitionDelay: "50ms" }}>
                s
              </span>
              <span className="form-span" style={{ transitionDelay: "100ms" }}>
                e
              </span>
              <span className="form-span" style={{ transitionDelay: "150ms" }}>
                r
              </span>
              <span className="form-span" style={{ transitionDelay: "200ms" }}>
                n
              </span>
              <span className="form-span" style={{ transitionDelay: "250ms" }}>
                a
              </span>
              <span className="form-span" style={{ transitionDelay: "300ms" }}>
                m
              </span>
              <span className="form-span" style={{ transitionDelay: "350ms" }}>
                e
              </span>
            </label>
          </div>
          <div class="form-control">
            <input className="form-input" type="value" required="" />
            <label className="form-label">
              <span className="form-span" style={{ transitionDelay: "0ms" }}>
                E
              </span>
              <span className="form-span" style={{ transitionDelay: "50ms" }}>
                M
              </span>
              <span className="form-span" style={{ transitionDelay: "100ms" }}>
                A
              </span>
              <span className="form-span" style={{ transitionDelay: "150ms" }}>
                I
              </span>
              <span className="form-span" style={{ transitionDelay: "200ms" }}>
                L
              </span>
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="form-textarea"
            ></textarea>
          </div>
          <div className="btn-contain">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contactUs;
