import React from "react";
import Footer from "../Footer";
import Contact from "../Contact";
import ServiceHeader from "./ServiceHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ListItem({ text, isActive, onClick }) {
  return (
    <li
      className={`flex items-center ${isActive ? "text-green-500" : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
      {text}
    </li>
  );
}
function Raw() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  const lists = [
    ["Item 1", "Item 2", "Item 3"],
    ["Item 4", "Item 5", "Item 6"],
    ["Item 7", "Item 8", "Item 9"],
    ["Item 10", "Item 11", "Item 12"],
    ["Item 13", "Item 14", "Item 15"],
  ];
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
          <div className="max-w-[1140px] h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between  mx-auto w-full  px-[20px] md:px-0">
            <div className="w-[80%] mb-5 ">
              <h2 className="text-3xl  md:text-4xl lg:text-5xl text-themeWhite mb-6">
                Raw Material
              </h2>
            </div>
          </div>
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
          <span className="line">Raw Material</span>
        </h2>
        <div className="max-w-[1140px] mx-auto  flex flex-col-reverse md:flex-row ">
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
              <span className="font-semibold text-themeGreen">
                Raw Materials ::{" "}
              </span>
              <ul className="list-disc">
                {lists.map((list, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      text={`List ${index + 1}`}
                      isActive={index === activeIndex}
                      onClick={() => handleClick(index)}
                    />
                    {index === activeIndex && (
                      <ul className="list-disc ml-4">
                        {list.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </ul>
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
