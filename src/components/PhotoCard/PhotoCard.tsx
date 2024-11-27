"use client";

import React from "react";
import Image from "next/image";

import useGetWindowWidth from "@/hooks/helpers/useGetWindowWidth";

import s from "./PhotoCard.module.scss";

type PhotoCardProps = {
  image: string;
  alt: string;
  imageMobile?: string;
  description?: string;
  decorVariant?: "star-fish" | "urchin";
};
function PhotoCard({
  description,
  image,
  alt,
  imageMobile = image,
  decorVariant,
}: PhotoCardProps) {
  const windowWidth = useGetWindowWidth();
  const imageSrc = windowWidth < 1000 ? imageMobile : image;
  const imageWidth = windowWidth < 1000 ? 1500 : 4000;

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
        alt={alt}
        width={imageWidth}
        height={2200}
        sizes="100vw"
        className={s.imgBg}
      />
      <Image
        src={"/assets/icons/clip.svg"}
        width={50}
        height={50}
        alt="clip"
        className={s.clip}
      />
      <div className={s.card}>
        <Image
          src={imageSrc}
          alt={alt}
          width={imageWidth}
          height={2200}
          sizes="100vw"
          className={s.img}
        />
        {description && <p className={s.description}>{description}</p>}
      </div>
    </div>
  );
}

export default PhotoCard;
