import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import BlogPhotoArticle from "@/components/BlogPhotoArticle";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

import s from "./Articles.module.scss";
import { baseImages, articleSecondImages } from "./images";

function Articles() {
  const t = useTranslations("countries.montenegro.locations.hercegNovi");
  return (
    <>
      <BlogPhotoArticle
        text={t.raw("articles.1.text")}
        photoWrapperClassName={s.photoCardWrapper}
        isMirrored
        descriptionBackground="circle_2"
      >
        <>
          <PhotoCard images={baseImages} decorVariant="star-fish" />
          <Image
            className={s.blot_1}
            src="/assets/images/decorations/blots/1.png"
            alt="blot"
            width="300"
            height="300"
          />
        </>
      </BlogPhotoArticle>

      <BlogPhotoArticle
        text={t.raw("articles.2.text")}
        photoWrapperClassName={s.photoCardWrapper_2}
      >
        <>
          <PhotoCard images={articleSecondImages} />
          <Image
            className={s.blot_2}
            src="/assets/images/decorations/blots/2.png"
            alt="blot"
            width="300"
            height="300"
          />
        </>
      </BlogPhotoArticle>
    </>
  );
}

export default Articles;
