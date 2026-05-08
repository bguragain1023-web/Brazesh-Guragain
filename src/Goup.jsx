import React, { useEffect, useState } from "react";

export const Goup = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleOnScrollY = () => {
    setScrollYPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScrollY);

    return () => {
      window.removeEventListener("scroll", handleOnScrollY);
    };
  });

  return (
    <>
      {scrollYPosition > 800 && (
        <a href="#hero">
          <div className="goup d-flex justify-content-center align-items.center ">
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </a>
      )}
    </>
  );
};
