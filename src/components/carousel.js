import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
  const clients = [
    { name: "ACME Laboratories Limited", image: "/img/customers/acme.jpeg" },
    { name: "Advanced Chemical Industries (ACI) Limited", image: "/img/customers/aci.jpeg" },
    { name: "Alco Pharma Limited", image: "/img/customers/alco.png" },
    { name: "Aristopharma Limited", image: "/img/customers/aristopharma.jpeg" },
    { name: "Ambee Pharmaceuticals Limited", image: "/img/customers/ambee.jpeg" },
    { name: "Amico Laboratories Limited", image: "/img/customers/amico.jpeg" },
    { name: "Apollo Pharmaceutical Limited", image: "/img/customers/apollo.jpeg" },
    { name: "Astra Biopharmaceuticals Limited", image: "/img/customers/astra.jpeg" },
    { name: "Active Fine Chemicals", image: "/img/customers/astra.png" },
    { name: "Apex Pharma Limited", image: "/img/customers/apex.png" },
    { name: "Beacon Pharmaceuticals Limited", image: "/img/customers/beacon.png" },
    { name: "Beximco Pharmaceuticals Limited", image: "/img/customers/beximco.png" },
    { name: "Bio Pharmaceuticals Limited", image: "/img/customers/bio.png" },
    { name: "Eskayef Bangladesh Limited (SK+F)", image: "/img/customers/eskayef.png" },
    { name: "General Pharmaceuticals Limited", image: "/img/customers/general.png" },
    { name: "Globe Pharmaceuticals Limited", image: "/img/customers/globe.jpeg" },
    { name: "Gonoshasthaya Pharmaceuticals Limited", image: "/img/customers/gonoshasthaya.png" },
    { name: "Healthcare Pharmaceuticals Limited", image: "/img/customers/healthcare.jpeg" },
    { name: "Incepta Pharmaceuticals Limited", image: "/img/customers/incepta.jpeg" },
    { name: "Innova Pharmaceuticals Limited", image: "/img/customers/innova.jpeg" },
    { name: "Jayson Pharmaceuticals Ltd.", image: "/img/customers/jayson.jpeg" },
    { name: "Kemiko Pharmaceuticals Limited", image: "/img/customers/kemiko.jpeg" },
    { name: "Labaid Pharmaceuticals Limited", image: "/img/customers/labaid.jpeg" },
    { name: "Navana Pharmaceuticals Limited", image: "/img/customers/navana.jpeg" },
    { name: "Novo Healthcare & Pharma Ltd", image: "/img/customers/novo.jpeg" },
    { name: "Nipa Pharmaceuticals Limited", image: "/img/customers/nipa.jpeg" },
    { name: "NIPRO JMI Pharma Limited", image: "/img/customers/nipro.jpeg" },
    { name: "Opsonin Pharma Limited", image: "/img/customers/opsonin.png" },
    { name: "Organic Health Care Limited", image: "/img/customers/organic.jpeg" },
    { name: "Orion Pharma Limited", image: "/img/customers/orion.jpeg" },
    { name: "Popular Pharmaceuticals Limited", image: "/img/customers/popular.jpeg" },
    { name: "Pharmasia Limited", image: "/img/customers/pharmasia.png" },
    { name: "Radiant Pharmaceuticals Limited", image: "/img/customers/radiant.png" },
    { name: "RAK Pharmaceuticals Ltd", image: "/img/customers/rak.png" },
    { name: "Renata Limited", image: "/img/customers/renata.jpeg" },
    { name: "Sanofi Aventis Bangladesh Ltd", image: "/img/customers/sanofi.png" },
    { name: "Somatec Pharmaceuticals Ltd", image: "/img/customers/somatec.png" },
    { name: "Sharif Pharmaceuticals Limited", image: "/img/customers/sharif.jpeg" },
    { name: "SQUARE Pharmaceuticals Limited", image: "/img/customers/square.png" },
    { name: "Techno Drugs Limited", image: "/img/customers/techno.png" },
    { name: "The Ibn Sina Pharmaceuticals Limited", image: "/img/customers/ibnsina.png" },
    { name: "Ziska Pharmaceuticals Limited", image: "/img/customers/ziska.png" },
  ]  

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
            className=" font-semibold px-[20px] md:px-[40px] "
            key={idx}
          >
          <img
            src={i.image}
            alt={i}
            className="mx-auto h-16 mb-3 "
          />
          <h3 className="text-white text-center">{i.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
