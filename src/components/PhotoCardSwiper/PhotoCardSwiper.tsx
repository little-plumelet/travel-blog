"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Slide } from "@/types/slides";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import s from "./PhotoCardSwiper.module.scss";

type PhotoCardSwiperProps = {
  images: Array<Slide>;
  imageWidth: number;
  isMobile: boolean;
  handleSlideChange: (swiper: any) => void;
};
function PhotoCardSwiper({
  images,
  imageWidth,
  isMobile,
  handleSlideChange,
}: PhotoCardSwiperProps) {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {images.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={isMobile ? slide.imageMobileSrc : slide.imageSrc}
              alt={slide.alt}
              width={imageWidth}
              height={2200}
              sizes="100vw"
              className={s.img}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PhotoCardSwiper;
