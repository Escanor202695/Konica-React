import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex bdr"
        >
        <SwiperSlide className="bdr">Slide 1</SwiperSlide>
        <SwiperSlide className="bdr">Slide 1</SwiperSlide>
        <SwiperSlide className="bdr">Slide 1</SwiperSlide>
        <SwiperSlide className="bdr">Slide 1</SwiperSlide>
        <SwiperSlide className="bdr">Slide 1</SwiperSlide>
      </Swiper>
      </>
  );
}