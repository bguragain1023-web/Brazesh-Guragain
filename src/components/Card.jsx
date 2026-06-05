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
    <>
      <div class="project-card row ">
        <div class="card-image">
          <img src={image} alt={title} />
        </div>
        <div class="card-info ">
          <span class="card-index">01</span>
          <h3 class="card-title">{title}</h3>
          <p class="card-desc">{desc}</p>
          <div class="card-tags">
            <span class="card-tag">{toolOne}</span>
            <span class="card-tag">{toolTwo}</span>
            <span class="card-tag">{toolThree}</span>
          </div>
          <div class="card-links">
            <a href={goLive} class="card-link live">
              Live Demo ↗
            </a>
            <a href={github} class="card-link github">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* <div className="card rounded-4 h-100">
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
    </div> */}
    </>
  );
};
