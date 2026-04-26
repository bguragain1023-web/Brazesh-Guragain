import React from "react";

export const Hero = () => {
  return (
    <div
      className=" hero-terminal d-flex flex-column flex-md-row  gap-3 justify-content-between align-items-center"
      id="hero"
    >
      <div className="info">
        <span className="avai">// Open To Network</span>

        <div className="full-name fira-code-namefont d-flex flex-column">
          <span>Brazesh</span>
          <span className=" typing-delayed">Guragain</span>
        </div>

        <br />
        <span className="job-title typing ">Frontend Developer</span>
        <p className="desc">
          I build fast, functional web apps from frontend to backend - with 5+
          projects already shipped including API integration, real-time data
          apps, and React tools. Currently levelling up with Node.js, MongoDB,
          and AI integration — turning caffeine and curiosity into real
          products.
        </p>
        <div className="btn-section mt-5">
          <a href="#contact">contact me </a>
          <a href="/brazesh_resume.pdf" download>
            <i className="fa-solid fa-download"></i>
            Download Resume
          </a>
        </div>
      </div>

      <div className="terminal">
        <div className="terminal-bar">
          <div className="icon">
            <div className="dot r"></div>
            <div className="dot y"></div>
            <div className="dot g"></div>
          </div>
          <div className="file-name">brazesh.json</div>
        </div>
        <div className="terminal-body">
          <div className="code text-white">
            <span>{"{"}</span>
            <div className="code-line">
              <span className="v-name">"name"</span>
              <span>:</span>
              <span className="value">"Brazesh"</span>,
              <br />
            </div>
            <div className="code-line">
              <span className="v-name">"role"</span>
              <span>:</span>
              <span className="value">"Full-stack Developer"</span>,
              <br />
            </div>
            <div className="code-line">
              <span className="v-name">"location"</span>
              <span>:</span>
              <span className="value">"Hobart, Tasmania"</span>,
              <br />
            </div>
            <div className="code-line">
              <span className="v-name">"education"</span>
              <span>:</span>
              <span className="value">"M.Tech software Engineering"</span>,
              <br />
            </div>
            <div className="code-line">
              <span className="v-name">"skills"</span>
              <span>:</span>
              <span className="value">
                ["HTML" , "CSS", "javaScript", "React"]
              </span>
              ,
              <br />
            </div>

            <div className="code-line">
              <span className="v-name">"openToWork"</span>
              <span>:</span>
              <span className="value">true</span>,
              <br />
            </div>
            <span>{"}"}</span>

            <div>
              <span className="text-success">$</span> node brazesh.js
              <span className="t-cursor"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
