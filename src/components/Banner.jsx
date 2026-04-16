import React from "react";

export const Banner = () => {
  return (
    <div className="banner d-flex  mt-5 ">
      <div className="banner1 d-flex ">
        <div className="achievement">5+</div>
        <span>projects Built</span>
      </div>

      <div className="banner1 d-flex ">
        <div className="achievement">M.tech</div>
        <span>Soft. Engineering </span>
      </div>
      <div className="banner1 d-flex ">
        <div className="achievement">1+ Yrs</div>
        <span>Experience</span>
      </div>

      <div className="banner1 d-flex ">
        <div className="achievement">
          <i className="fa-solid fa-infinity"></i>
        </div>
        <span>lines of code ahead </span>
      </div>
    </div>
  );
};
