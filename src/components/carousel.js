import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
  const clients = [
    "ACME Laboratories Limited",
    "Advanced Chemical Industries (ACI) Limited",
    "Alco Pharma Limited",
    "Aristopharma Limited",
    "Ambee Pharmaceuticals Limited",
    "Amico Laboratories Limited",
    "Apollo Pharmaceutical Limited",
    "Astra Biopharmaceuticals Limited",
    "Active Fine Chemicals",
    "Apex Pharma Limited",
    "Beacon Pharmaceuticals Limited",
    "Beximco Pharmaceuticals Limited",
    "Bio Pharmaceuticals Limited",
    "Eskayef Bangladesh Limited (SK+F)",
    "General Pharmaceuticals Limited",
    "Globe Pharmaceuticals Limited",
    "Gonoshasthaya Pharmaceuticals Limited",
    "Healthcare Pharmaceuticals Limited",
    "Incepta Pharmaceuticals Limited",
    "Innova Pharmaceuticals Limited",
    "Jayson Pharmaceuticals Ltd.",
    "Kemiko Pharmaceuticals Limited",
    "Labaid Pharmaceuticals Limited",
    "Navana Pharmaceuticals Limited",
    "Novo Healthcare & Pharma Ltd",
    "Nipa Pharmaceuticals Limited",
    "NIPRO JMI Pharma Limited",
    "Opsonin Pharma Limited",
    "Organic Health Care Limited",
    "Orion Pharma Limited",
    "Popular Pharmaceuticals Limited",
    "Pharmasia Limited",
    "Radiant Pharmaceuticals Limited",
    "RAK Pharmaceuticals Ltd",
    "Renata Limited",
    "Sanofi Aventis Bangladesh Ltd",
    "Somatec Pharmaceuticals Ltd",
    "Sharif Pharmaceuticals Limited",
    "SQUARE Pharmaceuticals Limited",
    "Techno Drugs Limited",
    "The Ibn Sina Pharmaceuticals Limited",
    "Ziska Pharmaceuticals Limited",
  ];

  return (
    <>
      <Swiper
        slidesPerView={2}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 0, // Set the delay to 0
          disableOnInteraction: false, // Allow continuous autoplay even when user interacts with the swiper
        }}
        speed="2000"
        modules={[Navigation, Autoplay]}
        breakpoints={{
          // Customize attributes for mobile screens
          640: {
            slidesPerView:"4",
            speed: 3000, // Set a different speed for mobile screens
          },
        }}
        className="mySwiper flex max-w-[1140px] mx-auto w-full"
      >
        {clients.map((i, idx) => (
          <SwiperSlide
            className=" font-semibold px-[20px] md:px-[40px]"
            key={idx}
          >
            <img
              src="/img/blue-logo.png"
              alt={i}
              className="mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
