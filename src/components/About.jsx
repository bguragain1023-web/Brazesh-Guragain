import React from "react";
import myPic from "../assets/me.png";
import { Title } from "./Title";

export const About = () => {
  return (
    <div className="about-container mt-5 " id="about">
      <Title title="About me" />

      <div className="bio d-flex flex-column-reverse flex-md-row container gap-3">
        <div className="left-side text-white pt-5">
          <p>
            Hey — I'm Brazesh. I build fast, functional web apps from frontend
            to backend — using React, JavaScript, Node.js, MongoDB and AI
            integration. I've shipped 7+ projects including API-driven apps,
            interactive React tools, and a fully responsive portfolio — and
            currently deep diving into AI to build products that are actually
            intelligent.
          </p>
          <p>
            I hold a Master of Technology in Software Engineering from
            Federation University and I'm currently deep in a full stack
            bootcamp building real things end to end.
          </p>

          <p>
            Before going all-in on dev, I spent 3+ years in support work and
            retail — which taught me how to communicate clearly, stay calm under
            pressure, and actually care about people. Skills that matter just as
            much in a dev team.
          </p>
          <p>Based in Hobart, Tasmania — open to new opportunities.</p>

          <div className="hobbies d-flex flex-wrap gap-4">
            <span className="hobbies-icon">
              <i className="fa-solid fa-code "></i>
              code
            </span>
            <span className="hobbies-icon">
              <i className="fa-solid fa-microchip "></i>
              AI and Tech
            </span>
            <span className="hobbies-icon">
              <i className="fa-solid fa-futbol "></i>
              Soccer
            </span>
            <span className="hobbies-icon">
              <i className="fa-solid fa-person-swimming "></i>
              Swimming
            </span>
          </div>
        </div>

        <div className="right-side d-flex justify-content-center align-items-center text-center ">
          <div className="image-box">
            <img src={myPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
