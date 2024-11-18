"use client";

import React from "react";
import Image from "next/image";

import useGetWindowWidth from "@/hooks/helpers/useGetWindowWidth";
import frameOptions from "@/constants/frameOptions";
import Frame from "@/types/frames";

import s from "./FramedBackground.module.scss";

type FramedBackgroundProps = {
  image: string;
  imageMobile?: string;
  frame: Frame;
};
function FramedBackground({
  image,
  imageMobile = image,
  frame,
}: FramedBackgroundProps) {
  const windowWidth = useGetWindowWidth();
  const imageSrc = windowWidth < 780 ? imageMobile : image;
  const frameSrc =
    windowWidth < 780
      ? frameOptions.mobile[frame - 1]
      : frameOptions.desktop[frame - 1];
  const imageWidth = windowWidth < 780 ? 1500 : 4000;
  return (
    <>
      <Image
        src={imageSrc}
        alt="lagoon"
        width={imageWidth}
        height={2200}
        sizes="100vw"
        className={s.img}
        priority
      />
      <Image
        src={frameSrc}
        alt="frame"
        width={imageWidth}
        height={2500}
        sizes="100vw"
        className={s.frame}
        priority
      />
    </>
  );
}

export default FramedBackground;
