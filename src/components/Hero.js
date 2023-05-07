import React from "react";

function Hero(props) {
  return (
    <div className="w-screen relative -z-40 bg-gradient-to-t from-black to-themeBlue">
      <div className="max-w-[1140px] h-[700px] md:flex items-center justify-between mx-auto">
        <div>
          <h2 className="text-[35px] text-themeWhite w-[500px]">
            We Sell Best Quality Pharmacy Product Product
          </h2>
          <button className=" border-2 border-themeGreen py-[8px] px-[20px] rounded-md text-themeGreen hover:text-white hover:bg-themeGreen my-6">
            Know More
          </button>
        </div>
        <img
          src="/img/blue-logo.png"
          alt="heroImage"
          className="w-[30rem] h-[20rem]"
        />
      </div>
      <div className="custom-shape-divider-bottom-1683382367">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
