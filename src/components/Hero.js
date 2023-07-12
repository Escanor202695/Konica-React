import React from "react";
import ScrollIntoView from "react-scroll-into-view";

function Hero(props) {
  return (
    <div className="relative z-40 ">
      <img
        src="/img/about.png"
        alt="heroImage"
        className="w-full h-full absolute top-0 left-0 -z-20"
      />
      <div className="w-screen relative -z-10 bg-gradient-to-t from-black to-themeBlue opacity-90  md:px-0 ">
        <div className="max-w-[1140px] h-[750px] flex flex-col md:flex-row items-center justify-center md:justify-between  mx-auto w-full  px-[20px] md:px-0">
          <div
            className="md:w-[50%] mb-5 "
            data-aos="fade-right"
            data-aos-duration="750"
          >
            <h2 className="text-4xl md:text-4xl lg:text-5xl text-themeWhite md:w-[500px] mb-6">
              We indent best quality pharmaceutical raw materials
            </h2>
            <ScrollIntoView selector="#services" smooth={true} duration={500}>
              <button className="border-2  border-themeGreen py-2 px-2 md:py-2 md:px-8 rounded-md text-themeGreen hover:text-white hover:bg-themeGreen">
                Know More
              </button>
            </ScrollIntoView>
          </div>
          <img
            src="/img/hero3.jpg"
            alt="heroImage"
            className="w-full md:w-[30rem] rounded-md h-auto mt-6 md:mt-0 "
            data-aos="fade-left"
            data-aos-duration="750"
          />
        </div>
      </div>

    </div>
  );
}

export default Hero;
