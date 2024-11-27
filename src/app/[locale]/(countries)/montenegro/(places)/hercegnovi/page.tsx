import Image from "next/image";
import React from "react";

import BlogPhotoArticle from "@/components/BlogPhotoArticle";
import Introduction from "@/components/Introduction";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

import s from "./style.module.scss";

function HercegNovi() {
  return (
    <>
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
        <BlogPhotoArticle
          textKey="countries.montenegro.locations.hercegNovi.articles.1"
          photoWrapperClassName={s.photoCardWrapper}
          isMirrored
        >
          <PhotoCard
            image="/assets/images/countries/montenegro/herceg-novi/1.webp"
            imageMobile="/assets/images/countries/montenegro/herceg-novi/1_mob.webp"
            alt="stone in the Adriatic sea"
            decorVariant="star-fish"
          />
        </BlogPhotoArticle>

        <BlogPhotoArticle
          textKey="countries.montenegro.locations.hercegNovi.articles.2"
          photoWrapperClassName={s.photoCardWrapper_2}
        >
          <PhotoCard
            image="/assets/images/countries/montenegro/herceg-novi/2.webp"
            imageMobile="/assets/images/countries/montenegro/herceg-novi/2_mob.webp"
            alt="stone in the Adriatic sea"
            description="tonnel"
            decorVariant="urchin"
          />
        </BlogPhotoArticle>
      </div>
    </>
  );
}

export default HercegNovi;
