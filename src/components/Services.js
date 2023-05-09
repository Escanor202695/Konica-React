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
      <div className="max-w-[1140px] flex flex-wrap items-center justify-between  mx-auto ">
        <ServiceCard
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada lacus nec tristique porta."
          imageSrc="/img/about.jpg"
        />
        <ServiceCard
          title="Service 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada lacus nec tristique porta."
          imageSrc="/img/about.jpg"
        />
        <ServiceCard
          title="Service 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada lacus nec tristique porta."
          imageSrc="/img/about.jpg"
        />
      </div>
    </div>
  );
};

export default Services;
