import React from "react";
import myPic from "../assets/me.png";

export const Hero = () => {
  return (
    <div
      className=" hero d-flex flex-column flex-md-row justify-content-between mt-5 "
      id="hero"
    >
      <div className="d-flex align-items-center justify-content-center gap-4 main-hero">
        <div className="info  d-flex flex-column  justify-content-center">
          <div className="fira-code-namefont greet">Hi I'm </div>
          <div className="full-name">
            <span className="fira-code-namefont"> Brazesh </span>
            <span className="fira-code-namefont ">Guragain</span>
          </div>
          <span className="job-title typing ">Full Stack Developer</span>
          <p className="desc">
            I build fast, functional web apps from frontend to backend — with 7+
            projects already shipped including AI integration, real-time data
            apps, and React tools. Full stack capable with Node.js, MongoDB, and
            REST APIs — now pushing deeper into AI, turning caffeine and
            curiosity into products that are actually intelligent.
          </p>

          <div className="btn-section">
            <a href="#contact">Get In Touch </a>
            <a href="/brazesh_resume_v2.pdf" download>
              <i className="fa-solid fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
        <div className="image-div d-flex jusitfy-content-center align-items-center ">
          <img className="top-img " src={myPic} alt="" />
        </div>
      </div>
    </div>
  );
};
