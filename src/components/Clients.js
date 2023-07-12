import React from "react";
import Slider from "./carousel";

function Clients(props) {
  return (
    <div className="py-[60px] md:py-[120px] relative" id="clients">
      <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-tr from-black to-themeBlue -z-10"></div>
      <img
        src="/img/about.png"
        alt="heroImage"
        className="w-full h-full absolute top-0 left-0 -z-20"
      />
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-[3rem] font-semibold text-themeWhite text-center mb-[80px]">
          <span className="line">Our Clients</span>
        </h2>
        <Slider />
      </div>
    </div>
  );
}

export default Clients;
