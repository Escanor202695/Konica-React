import React from "react";

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full max-w-[1140px] md:w-[360px]">
      <div className="bg-white md:shadow-lg rounded-md overflow-hidden p-[20px] md:p-0">
        <img
          src={imageSrc}
          alt="Service"
          className="w-full h-auto rounded-md md:rounded-none"
        />
        <div className="py-4 lg:p-4">
          <h3 className="text-xl font-semibold mb-2 text-themeBlue">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <button className="mt-2 bg-themeBlue border-2 border-themeBlue hover:border-themeGreen text-white font-bold py-1 px-5 rounded">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Raw Material",
      description:
        "ASN Corporation believes that we are successful only when our customer and suppliers are successful. We will realize this mission ",
      imageSrc: "/img/about.jpg",
    },
    {
      title: "Packaging Material",
      description:
        "Packaging is the technology of enclosing or protecting products for distribution, storage, sale and use. Packaging also refers to the process of ",
      imageSrc: "/img/about.jpg",
    },
    {
      title: "Machinery",
      description:
        "Through many years of being in Service for Pharmaceutical and Food Industry, ASN has acquired good experience and resources to provide solution in every respect",
      imageSrc: "/img/about.jpg",
    },
  ];
  return (
    <div className=" py-[60px] md:py-[120px] w-screen relative" id="services">
      <div className="absolute top-0 left-0 w-full h-full  md:bg-gradient-to-tr from-black to-themeBlue -z-10 opacity-90"></div>
      <img
        src="/img/about.jpg"
        alt="heroImage"
        className="hidden md:block w-full h-full absolute top-0 left-0 -z-20"
      />
      <h2 className="text-[3rem] font-semibold text-themeBlue md:text-themeWhite text-center mb-[50px]">
        <span className="line">Services</span>
      </h2>
      <div className="max-w-[1140px] flex flex-wrap items-center justify-between mx-auto">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
        />
      ))}
    </div>
    </div>
  );
};

export default Services;
