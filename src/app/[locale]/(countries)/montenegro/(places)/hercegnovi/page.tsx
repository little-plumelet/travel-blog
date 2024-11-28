import Image from "next/image";
import React from "react";

import Introduction from "@/components/Introduction";
import Articles from "./parts/Articles";

import s from "./style.module.scss";

function HercegNovi() {
  return (
    <div className={s.wrapper}>
      <Image
        src="/assets/images/textures/white-paper-bg.webp"
        alt="paper-texture"
        sizes="100vw"
        fill
        className={s.background}
      />
      <Image
        src="/assets/images/frames/circle.svg"
        alt="circle-frame"
        sizes="100vw"
        fill
        className={s.bgDecor}
      />
      <Introduction
        country="montenegro"
        place="hercegNovi"
        image="/assets/images/countries/montenegro/herceg-novi/intro-bg.webp"
        imageMobile="/assets/images/countries/montenegro/herceg-novi/intro-bg_mob.webp"
        frame={2}
      />
      <Articles />
      <div className={s.bottomStrokeWrapper}>
        <Image
          src="/assets/images/strokes/stroke_2.png"
          alt="paper-texture"
          sizes="100vw"
          width={4000}
          height={600}
          className={s.bottomStroke}
        />
      </div>
    </div>
  );
}

export default HercegNovi;
