import React, { useEffect } from "react";
import Footer from "../Footer";
import Contact from "../Contact";
import ServiceHeader from "./ServiceHeader";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

function ProductCategory({ arrayCategory }) {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-lightGray">
      <div className="max-w-[1140px] mx-auto ">
        <div className="divide-y divide-gray-200">
          {arrayCategory.map((item, index) => (
            <div className="" key={index}>
              <div
                className={`pt-4 overflow-hidden`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="text-md md:text-md font-medium capitalize cursor-pointer Machinery text-[#527388]">
                  {item.title}
                  <KeyboardArrowRightIcon className="text-themeGreen" />
                </div>

                <div
                  className={`mt-4 gap-x-[100px] transition-all ease-in-out duration-[500ms] text-left ml-4 ${
                    activeIndex === index
                      ? "max-h-[800px]"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <ul className="pb-[20px] flex flex-wrap ">
                    {item.items.map((i, idx) => (
                        
                      <li className="text-md text-gray-700 py-[6px] mb-0 md:ml-4 min-w-[45%] ">
                        <CheckIcon className="text-themeGreen"/>{i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Raw() {
  const arrayCategory = [
    {
      title: "Powder & Liquid Section",
      items: [
        
        "Automatic Ampoule Filling Line",
        "Bottle Filling Line (Powder & Liquid)",
        "Tube Filling & Sealing Machine",
        "Bottle Washing Machine",
        "Automatic Dry Syrup Powder Filling Line",
        "Automatic Injectable Liquid Filling Line",
        "Automatic Injectable Dry powder Filline Line",
      ],
    },
    {
      title: "Packaging Section",
      items: [
        "Automatic Sticker Labelling Machine",
        "Hologram Sticker Labelling Machine",
        "Sachet Packaging Machine",
        "Strip Packaging Machine",
        "Label Printing Machine",
        "Automatic Blister Packaging Machine with Cartoning Line",
      ],
    },
    {
      title: "Capsule & Tablet Section",
      items: [
        "Capsule Filling & Sealing Machine",
        "Automatic Tablet Press Machine",
        "Automatic Tablet Coating Machine",
        "Roller Compactor of Tablet Process",
        "RMG",
        "FBD",
        "DCB",
        "V-Blender",
        "Shifter",
        "Storage Vessel",
        "Agitated Nutsche Filter Dryer (ANFD)",
        "Stainless Steel Industrial Reactor vessel",
        "Boiler",
        "Autoclave Machine",
        "Manufacturing Vessel with Magnetic Mixer",
        "Cream/Ointment/Gel Manufacturing Vessel",
      ],
    },
  ];

  const arrayCategory1 = [
    {
      title: "Standards",
      items: ["ISO", "ASTM", "TAPPI"],
    },
    {
      title: "Gas & Moisture Testing",
      items: [
        "Oxygen Transmission Rate Test System",
        "Oxygen Permeability Tester",
        "Water Vapor Transmission Rate Test System",
        "Water Vapor Transmission Rate Tester",
        "Water Vapor Permeability Tester",
        "Gas Permeability Tester",
        "Container Gas Permeability Tester",
        "Evaporation Residue Constant Weight Tester",
      ],
    },
    {
      title: "Mechanical Testing",
      items: [
        'Auto Tensile Tester',
        'Auto Stripping Tester',
        'Adhesive Tensile & Shear Tester',
        'Box Compression Tester',
        'Digital Torque Tester',
        'Heat Seal Tester',
        'Gradient Heat Seal Tester',
        'Hot Tack Tester',
        'Portable Heat Seal Strength Tester',
        'Coefficient of Friction Tester',
        'Friction & Peel Tester',
        'Thickness Tester',
        'Tear Tester',
        'Falling Dart Impact Tester',
        'Pendulum Impact Tester',
        'Film Free Shrink Tester',
        'Film Thermal Shrinkage Tester',
        'Leak and Seal Strength Tester',
        'Flex Durability Tester',
        'Adhesive Tester',
        'Ink Rub Tester',
        'Inclined Surface Coefficient of Friction Tester',
      ]
    },
    {
      title: "Gas Chromatography",
      items: ["Gas Chromatograph with Autosampler"],
    },
    {
      title: "Packaging Analysis",
      items: [
        "Headspace Gas Analyzer",
        "Package Headspace Analyzer",
        "Vacuum Packaging Analyzer",
      ],
    },
    {
      title: "Air Permeability Testing",
      items: ["Air Permeability Tester"],
    },
  ];
  const arrayCategory3 = [
    {
      title: "Laboratory Equipment",
      items: [
        "pH Meter",
        "Tablet Hardness Tester",
        "Tablet Friability Tester",
        "Disintegration Tester",
        "Dissolution Tester",
        "Desiccator Cabinet",
        "Tapped Density Tester",
        "HPLC",
        "Vortex Mixer",
        "Sampling Booth",
        "Dispensing Booth",
        "Laminar Air Flow",
        "Static & Dynamic Pass Box",
        "UV Cabinet",
        "Dosage Unit Sampling Apparatus (DUSA)",
        "Waste Shot Collector WSC2",
        "Andersen Cascade Impactor (ACI)",
        "Glass Twin Impinger",
        "Inhaler Testing Data Analysis Software",
        "Mouthpiece Adapters",
      ],
    },
  ];

  return (
    <>
      <ServiceHeader />
      <div className="relative z-40 ">
        <img
          src="/img/about.jpg"
          alt="heroImage"
          className="w-full h-full absolute top-0 left-0 -z-20 object-cover"
        />
        <div className="w-screen relative -z-10 bg-gradient-to-t from-black to-themeBlue opacity-90  md:px-0 ">
          <div className="max-w-[1140px] h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between  mx-auto w-full  px-[20px] md:px-0"></div>
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
      {/**raw-material */}
      <div className="w-screen py-[60px] md:py-[120px]" id="about">
        <h2 className="text-[3rem] font-semibold text-themeBlue text-center mb-[50px] ">
          <span className="line">Machinery</span>
        </h2>
        <div className="max-w-[70rem] mx-auto  flex flex-col-reverse md:flex-row ">
          <div className="w-full  lg:ml-[30px] flex-col px-[20px]">
            <p className="mb-[30px] mt-[10px] md:mt-0">
              <span className="font-semibold text-themeGreen">
                Konica Corporation Limited
              </span>{" "}
               has accumulated the skills and resources necessary to offer solutions in all aspect of the setup and upkeep of machinery and projects throughout the course of its many years of service to the pharmaceutical and food industries. Here is a quick segmentation of the work we've done. Please contact us if you need further details...
              <br /> <br />
              <div className="py-10">
                <span className="font-semibold text-themeGreen text-xl">
                  Production, Process and Packaging Machinery
                </span>{" "}
                <ProductCategory arrayCategory={arrayCategory} />
              </div>
              <p className="py-3">
              We offer all varieties of production, process, and packaging machinery from our reliable sources in Europe, the United States, and Asia.
                <br />
                <br />
                Pharma Water Systems
                <br />
                <br />
                We offer solutions for drinking water, USP-certified purified water, and USP-certified water for injection. Complete generation, storage, and distribution systems are part of our scope of supply.
              </p>
              <div className="py-10">
                <span className="font-semibold text-themeGreen text-xl">
                  Testing, Commissioning & Validation
                </span>{" "}
                <ProductCategory arrayCategory={arrayCategory1} />
              </div>
              <p className="py-3">
                We also undertakes Testing, Commissioning Validation and
                Documentation Services for different systems necessary in a
                project.
              </p>
              <div className="py-10">
                <span className="font-semibold text-themeGreen text-xl">
                  Laboratory Equipment and Furniture
                </span>{" "}
                <ProductCategory arrayCategory={arrayCategory3} />
              </div>
              <p className="py-3">
                Most of the Necessary equipment for Laboratory Instruments,
                Equipment and Analyzers are being supplied by Konica
                Corporation.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Raw;
