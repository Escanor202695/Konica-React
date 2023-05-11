import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, imageSrc, link }) => {
  return (
    <div className="w-full max-w-[1140px] md:w-[360px]">
      <div className="bg-white md:shadow-lg rounded-md overflow-hidden p-[20px] md:p-0">
        <Link to={link}>
          <img
            src={imageSrc}
            alt="Service"
            className="w-full md:h-[250px] h-[250px] rounded-md md:rounded-none"
          />
          <div className="py-4 lg:p-4">
            <h3 className="text-xl font-semibold mb-2 text-themeBlue">
              {title}
            </h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <Link to={link}>
              <button className="mt-2 bg-themeBlue border-2 border-themeBlue hover:border-themeGreen text-white font-bold py-1 px-5 rounded">
                Details
              </button>
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Raw Material",
      description:
        "Konica Corporation believes that we are successful only when our customer and suppliers are successful. We will realize this mission",
      imageSrc: "/img/services/raw.jpeg",
      link: "/raw-material", // Add the desired link for the service
    },
    {
      title: "Packaging Material",
      description:
        "Packaging is the technology of enclosing or protecting products for distribution, storage, sale, and use. Packaging also refers to the process of",
      imageSrc: "/img/services/package.webp",
      link: "/packaging-material", // Add the desired link for the service
    },
    {
      title: "Machinery",
      description:
        "Through many years of being in Service for Pharmaceutical and Food Industry, Konica has acquired good experience and resources to provide a solution in every respect",
      imageSrc: "/img/services/machine.jpeg",
      link: "/machinery", // Add the desired link for the service
    },
  ];

  return (
    <div className=" py-[60px] md:py-[120px] w-screen relative" id="services">
      <div className="absolute top-0 left-0 w-full h-full  md:bg-gradient-to-t from-black to-themeBlue -z-10"></div>
      <h2 className="text-[3rem] font-semibold text-themeBlue md:text-themeWhite text-center mb-[50px]">
        <span className="line">Services</span>
      </h2>
      <div className="max-w-[1140px] flex flex-wrap items-center justify-between mx-auto  ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
