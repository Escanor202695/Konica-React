import React from "react";
import { Link } from "react-router-dom";
function About(props) {
  return (
    <div className="w-screen py-[60px] md:py-[120px]" id="about">
      <h2 className="text-[3rem] font-semibold text-themeBlue text-center mb-[50px] ">
        <span className="line">About Us</span>
      </h2>
      <div className="max-w-[1140px] mx-auto  flex flex-col-reverse md:flex-row ">
        <div className="w-full md:w-1/2 flex lg:pr-[0px] px-[20px] md:pl-0 mt-[50px] md:mt-0 ">
          <img
            className="w-auto h-[90%] mx-auto rounded-md"
            src="/img/about2.jpg"
            alt="about_us"
            data-aos="fade-right"
            data-aos-duration="750"
          />
        </div>
        <div className="w-full md:w-1/2 lg:ml-[30px] flex-col px-[20px] md:py-4">
          <p className="mb-[30px] mt-[10px] md:mt-0">
            <span className="font-semibold text-themeGreen">
              Konica Corporation Limited
            </span>{" "}
            proposes its customers Pharmaceuticals Raw materials, Intermediates
            and Packaging Materials with high quality and dependability. We
            offer Pharmaceutical Raw Materials, Intermediates and Excipients
            which comply with latest USP, BP and EP. <br /> <br />
            We offer packaging components from{" "}
            <span className="font-semibold text-themeGreen">
              USFDA approved manufacturers{" "}
            </span>
            as well. It holds reputation as a supplier who supplies superior
            quality products timely delivery and commercially feasible pricing.
          </p>
          <Link to="/about">
            <button className="text-themeWhite px-[16px] py-[6px] rounded-md bg-themeBlue border-2 border-themeBlue hover:border-themeGreen">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
