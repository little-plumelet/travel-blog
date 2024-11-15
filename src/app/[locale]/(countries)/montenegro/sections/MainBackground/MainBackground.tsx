"use client";

import React from "react";
import Image from "next/image";
import useGetWindowWidth from "@/hooks/helpers/useGetWindowWidth";

import s from "./MainBackground.module.scss";

function MainBackground() {
  const windowWidth = useGetWindowWidth();
  return (
    <>
      {windowWidth < 780 ? (
        <>
          <Image
            src="/assets/images/countries/montenegro/main/main_mob.webp"
            alt="lagoon"
            width={4000}
            height={2252}
            sizes="100vw"
            className={s.mainImg}
            priority
          />
          <Image
            src="/assets/images/countries/montenegro/main/frame_mob.webp"
            alt="frame"
            width={1534}
            height={2252}
            sizes="100vw"
            className={s.frame}
            priority
          />
        </>
      ) : (
        <>
          <Image
            src="/assets/images/countries/montenegro/main/main.webp"
            alt="lagoon"
            width={4000}
            height={2252}
            sizes="100vw"
            className={s.mainImg}
            priority
          />
          <Image
            src="/assets/images/countries/montenegro/main/frame.webp"
            alt="frame"
            width={4000}
            height={2252}
            sizes="100vw"
            className={s.frame}
            priority
          />
        </>
      )}
    </>
  );
}

export default MainBackground;
