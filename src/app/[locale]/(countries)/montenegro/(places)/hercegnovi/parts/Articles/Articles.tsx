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
        textDecorationImage={
          <Image
            className={s.blot_1}
            src="/assets/images/decorations/blots/1.png"
            alt="blot"
            width="300"
            height="300"
          />
        }
      >
        <PhotoCard images={baseImages} decorVariant="star-fish" />
      </BlogPhotoArticle>

      <BlogPhotoArticle
        text={t.raw("articles.2.text")}
        photoWrapperClassName={s.photoCardWrapper_2}
        textDecorationImage={
          <Image
            className={s.blot_2}
            src="/assets/images/decorations/blots/2.png"
            alt="blot"
            width="300"
            height="300"
          />
        }
      >
        <PhotoCard images={articleSecondImages} />
      </BlogPhotoArticle>

      <BlogPhotoArticle
        text={t.raw("articles.3.text")}
        descriptionBackground="circle_2"
        textDecorationImage={
          <Image
            className={s.blot_3}
            src="/assets/images/decorations/blots/1.png"
            alt="blot"
            width="300"
            height="300"
          />
        }
      />

      <br />
    </>
  );
}

export default Articles;
