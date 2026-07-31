import React from "react";

export const Banner = () => {
  return (
    <>
      <div className="banner  p-4 ">
        <div className="banner-boxes d-flex justify-content-between  ">
          <div className="banner-box d-flex justify-content-center align-items-center flex-column">
            <span className="banner-top">10+ </span>
            <span className="banner-mid">Projects Built</span>
            <span className="banner-last">& Counting</span>
          </div>

          <div className="banner-box d-flex justify-content-center align-items-center flex-column">
            <span className="banner-top">2 </span>
            <span className="banner-mid">AI Integration</span>
            <span className="banner-last">Open AI and Anthropic</span>
          </div>
          <div className="banner-box d-flex justify-content-center align-items-center flex-column">
            <span className="banner-top">1+ Years</span>
            <span className="banner-mid">Experience</span>
            <span className="banner-last">Building and Learning</span>
          </div>
          <div className="banner-box d-flex justify-content-center align-items-center flex-column">
            <span className="banner-top">M.TECH</span>
            <span className="banner-mid">Software Engineering</span>
            <span className="banner-last">Federation University</span>
          </div>
        </div>
      </div>
    </>
  );
};
