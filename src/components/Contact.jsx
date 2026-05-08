import React from "react";
import { Title } from "./Title";

export const Contact = () => {
  return (
    <div className="contact-me mt-5" id="contact">
      <Title title="Contact Me" />

      <div className="contact-container m-5 p-3">
        <div className="motiv d-flex flex-column justify-content-center align-items-center">
          <div className="firstline space-mono-bold ">LET's BUILD</div>
          <div className="secondline space-mono-bold ">SOMETHING GREAT</div>
        </div>

        <div className="contact-in mt-5 d-flex align-items-center justify-content-center">
          Get in touch with:
        </div>
        <div className="contact d-flex align-items-center justify-content-center container">
          <a
            href="https://www.linkedin.com/in/brazesh-guragain-32a6661b0/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/bguragain1023-web" target="_blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="mailto:b.guragain1023@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="tel:+61422429512">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
