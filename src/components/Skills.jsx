import React from "react";
import { Title } from "./Title";

export const Skills = () => {
  return (
    <section className=" mt-5 pt-5" id="skills">
      <Title title="Skills" />

      <div className="skill-content mt-5 d-flex  container ">
        <div className="skill-box">
          <i className="fa-brands fa-html5"></i>
          <p>HTML</p>
        </div>
        <div className="skill-box">
          <i className="fa-brands fa-css"></i>
          <p>CSS</p>
        </div>
        <div className="skill-box">
          <i className="fa-brands fa-js "></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-box">
          <i className="fa-brands fa-github "></i>
          <p>Github</p>
        </div>
        <div className="skill-box">
          <i className="fa-brands fa-react "></i>
          <p>React</p>
        </div>
      </div>
    </section>
  );
};
