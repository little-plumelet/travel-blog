"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

import PhotoCardSwiper from "@/components/PhotoCardSwiper";
import useGetWindowWidth from "@/hooks/helpers/useGetWindowWidth";
import { Slide } from "@/types/slides";

import s from "./PhotoCard.module.scss";
import { getImageSrc } from "./utils";

type PhotoCardProps = {
  images?: Array<Slide>;
  image?: string;
  alt?: string;
  imageMobile?: string;
  description?: string;
  decorVariant?: "star-fish" | "urchin";
};

function PhotoCard({
  images,
  description,
  image,
  alt,
  imageMobile = image,
  decorVariant,
}: PhotoCardProps) {
  const windowWidth = useGetWindowWidth();
  const imageSrc = getImageSrc(windowWidth, images, image, imageMobile);
  const imageWidth = windowWidth < 1000 ? 1500 : 4000;
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={s.wrapper}>
      {decorVariant && (
        <Image
          src={`/assets/images/decorations/sea/${decorVariant}.webp`}
          width={100}
          height={100}
          alt="decor"
          className={s.decor}
        />
      )}
      <Image
        src={"/assets/images/pen-lines/1.webp"}
        width={800}
        height={60}
        alt="penline"
        className={s.penLine}
      />
      <Image
        src={imageSrc}
        alt={images?.length ? images[0].alt : alt ?? "image"}
        width={imageWidth}
        height={2200}
        sizes="(max-width: 780px) 46vw, 90vw"
        className={s.imgBg}
      />
      <Image
        src={"/assets/images/decorations/stationary/scotch.webp"}
        width={350}
        height={220}
        alt="clip"
        className={s.clip}
        loading="lazy"
      />
      <div className={s.card}>
        {!!images?.length && (
          <PhotoCardSwiper
            images={images}
            imageWidth={imageWidth}
            isMobile={windowWidth < 1000}
            handleSlideChange={handleSlideChange}
          />
        )}
        {!images?.length && (
          <>
            <Image
              src={imageSrc}
              alt={alt ?? "image"}
              width={imageWidth}
              height={2200}
              sizes="100vw"
              className={s.img}
            />
          </>
        )}
        {!images?.length && description && (
          <p className={s.description}>{t(description)}</p>
        )}
        {images && images[activeIndex]?.description && (
          <p className={s.description}>{t(images[activeIndex].description)}</p>
        )}
      </div>
    </div>
  );
}

export default PhotoCard;
