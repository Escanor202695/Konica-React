import React from "react";

function About(props) {
  return (
    <div className="w-screen py-[120px]">
      <div className="max-w-[1140px] mx-auto md:flex">
        <div className="w-1/2 lg:pr-[30px]">
          <img
            className="w-auto h-full"
            src="/img/about.jpg"
            alt="about_us"
          />
        </div>
        <div className="w-1/2 lg:ml-[30px] flex-col">
          <h2 className="text-[3rem] font-semibold text-themeBlue">About Us</h2>
          <p className="mb-[20px] mt-[10px]">
            <span className="font-semibold text-themeGreen">Konica Corporation Limited</span> proposes its customers Pharmaceuticals
            Raw materials, Intermediates and Packaging Materials with high
            quality and dependability. We offer Pharmaceutical Raw Materials,
            Intermediates and Excipients which comply with latest USP, BP and
            EP.  <br/>  <br/>
             We offer packaging components from <span className="font-semibold text-themeGreen">USFDA approved manufacturers </span>
            as well. It holds reputation as a supplier who supplies superior
            quality products timely delivery and commercially feasible pricing.
          
          </p>
          <button className="text-themeWhite px-[16px] py-[8px] rounded-md bg-themeBlue border-2 border-themeBlue hover:border-themeGreen">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
