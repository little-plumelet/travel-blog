"use client";

import cn from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Loader from "@/components/common/Loader";
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
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };
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
        {isLoading && <Loader />}
        {images.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={isMobile ? slide.imageMobileSrc : slide.imageSrc}
              alt={slide.alt}
              width={imageWidth}
              height={2200}
              sizes="(max-width: 780px) 46vw, 90vw"
              className={cn(s.img, { [s.loaded]: !isLoading })}
              onLoad={handleLoading}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PhotoCardSwiper;
