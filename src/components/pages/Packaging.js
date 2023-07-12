import React, { useEffect } from "react";
import Footer from "../Footer";
import Contact from "../Contact";
import ServiceHeader from "./ServiceHeader";
import CheckIcon from "@mui/icons-material/Check";

const products = [
  "Aluminium Foil",
  "PVC/ PVDC Film",
  "Sachet Foil",
  "Spray Pump",
  "Applicator",
  "Roll On (Plastic/Glass)",
  "Ophthalmic Components",
  "Nasal Components",
  "Actuator",
  "Aluminium Can",
  "Metering Valve",
  "MDI (Metered Dose Inhaler) Device",
  "DPI (Dry Powder Inhaler) Device",
  "Plastic Bottle (Shampoo/Cream)",
  "Plastic Container (Tablet/Capsule)",
  "Effervescent Tube (Printed/Unprinted)",
  "Rubber Stopper",
  "Flip of Seal",
  "Infusion Bottle (Glass/Plastic)",
  "Glass Vial",
  "Insulin Vial",
  "Lyophilized Vial",
  "IV Infusion Bag",
  "Syringe",
  "Prefilled Syringe & Cartridge",
];

function Raw() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ServiceHeader />
      <div className="relative z-40 ">
        <img
          src="/img/about.png"
          alt="heroImage"
          className="w-full h-full absolute top-0 left-0 -z-20 object-cover"
        />
        <div className="w-screen relative -z-10 bg-gradient-to-t from-black to-themeBlue opacity-90  md:px-0 ">
          <div className="max-w-[1140px] h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between  mx-auto w-full  px-[20px] md:px-0"></div>
        </div>
      </div>
      {/**raw-material */}
      <div
        className="w-screen py-[60px] md:pt-[120px] md:pb-[60px] "
        id="about"
      >
        <h2 className="text-[3rem] font-semibold text-themeBlue text-center mb-[50px] ">
          <span className="line">Packaging</span>
        </h2>
        <div className="max-w-[70rem] mx-auto  flex flex-col-reverse md:flex-row ">
          <div className="w-full  lg:ml-[30px] flex-col px-[20px]">
            <p className="mb-[30px] mt-[10px] md:mt-0 ">
              <span className="font-semibold text-themeGreen">Packaging</span>{" "}
              is the technology of enclosing or protecting products for
              distribution, storage, sale and use. Packaging also refers to the
              process of design, evaluation and production of packages.
              Packaging can be described as a coordinated system of preparing
              goods for transport, warehousing, logistics, sale and end use.
              <br /> <br />
            </p>
            <span className="font-semibold text-themeGreen">
              Konica can offer the following items for packaging :
            </span>
            <div className="flex flex-wrap mx-auto justify-start mt-6 pl-3">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[80%] md:min-w-[45%] pt-4 px-4 text-black overflow-hidden text-md capitalize"
                >
                  <CheckIcon className="text-themeGreen font-medium mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Raw;
