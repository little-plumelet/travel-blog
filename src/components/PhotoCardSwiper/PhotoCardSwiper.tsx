"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Slide } from "@/types/slides";

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
        className={s.mySwiper}
        onSlideChange={handleSlideChange}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={isMobile ? slide.imageMobileSrc : slide.imageSrc}
              alt={slide.alt}
              width={imageWidth}
              height={2200}
              sizes="(max-width: 780px) 46vw, 90vw"
              className={s.img}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PhotoCardSwiper;
