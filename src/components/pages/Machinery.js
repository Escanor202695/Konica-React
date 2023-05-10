import React from "react";
import Footer from "../Footer";
import Contact from "../Contact";
import ServiceHeader from "./ServiceHeader";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ProductCategory() {
  const [activeIndex, setActiveIndex] = useState(null);

  const arrayCategory = [
    {
      name: "Write category name here",
      products: [
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
        "product 1",
      ],
    },
  ];

  return (
    <div className="bg-lightGray">
      <div className="max-w-[1140px] mx-auto ">
        <div className="divide-y divide-gray-200">
          {arrayCategory.map((item, index) => (
            <div className="">
              <div
                key={index}
                className={`pt-4 overflow-hidden`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div
                  className="text-lg md:text-lg font-medium capitalize cursor-pointer Machinery text-themeGreen"
                >
                  {item.name}<KeyboardArrowRightIcon/>
                </div>

                <div
                  className={`mt-4 gap-x-[100px] transition-all ease-in-out duration-[500ms] text-left ml-4 ${
                    activeIndex === index
                      ? "max-h-[800px]"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <ul className="pb-[20px] flex flex-wrap ">
                    {item.products.map((i, idx) => (
                      <li className="text-md text-gray-700 py-[6px] mb-0 md:ml-4 list-disc min-w-[30%] ">
                        {i}
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
  return (
    <>
      <ServiceHeader />
      <div className="relative z-40 ">
        <img
          src="/img/about.jpg"
          alt="heroImage"
          className="w-full h-full absolute top-0 left-0 -z-20"
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
              believes that we are successful only when our customer and
              suppliers are successful. We will realize this mission by setting
              the highest standards in service. ASN’s sales team is fully
              conversant with the related industries. The team is capable to
              understand customers’ requirement and offer the best possible
              solution by ensuring quality and service
              <br /> <br />
              <ProductCategory />
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
