"use client";

import cn from "classnames";
import React from "react";
import Image from "next/image";

import useGetWindowWidth from "@/hooks/helpers/useGetWindowWidth";

import s from "./Background.module.scss";

function Background() {
  const windowWidth = useGetWindowWidth();
  const imageSrc =
    windowWidth < 780
      ? "/assets/images/home/bg_mob.png"
      : "/assets/images/home/bg.png";

  console.log(windowWidth);
  return (
    <>
      {windowWidth > 0 && (
        <Image
          src={imageSrc}
          alt="background"
          width={4624}
          height={2084}
          className={cn(s.background)}
          sizes="100vw"
          loading="eager"
        />
      )}
    </>
  );
}

export default Background;
