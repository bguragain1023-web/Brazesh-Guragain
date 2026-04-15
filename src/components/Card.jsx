import React from "react";

export const Card = ({
  image,
  title,
  desc,
  toolOne,
  toolTwo,
  toolThree,
  github,
  goLive,
}) => {
  return (
    <div className="card rounded-4 h-100">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body card-edit d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>

        <div className="mt-auto">
          <div className="d-flex gap-3 align-items-center mb-2">
            <span className="tools">{toolOne}</span>
            <span className="tools">{toolTwo}</span>
            <span className="tools">{toolThree}</span>
          </div>

          <div className="mt-4 d-flex gap-4 ">
            <a href={github} target="_blank" className="card-links">
              Github
            </a>
            <a href={goLive} target="_blank" className="card-links">
              Go Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
