import React from "react";
import { useTranslations } from "next-intl";

import BlogPhotoArticle from "@/components/BlogPhotoArticle";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

import s from "./Articles.module.scss";

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
          <PhotoCard
            image="/assets/images/countries/montenegro/herceg-novi/1.webp"
            imageMobile="/assets/images/countries/montenegro/herceg-novi/1_mob.webp"
            alt="stone in the Adriatic sea"
            decorVariant="star-fish"
          />
        </>
      </BlogPhotoArticle>

      <BlogPhotoArticle
        text={t.raw("articles.2.text")}
        photoWrapperClassName={s.photoCardWrapper_2}
      >
        <PhotoCard
          image="/assets/images/countries/montenegro/herceg-novi/2.webp"
          imageMobile="/assets/images/countries/montenegro/herceg-novi/2_mob.webp"
          alt="stone in the Adriatic sea"
          description={t("articles.2.photos.1")}
        />
      </BlogPhotoArticle>
    </>
  );
}

export default Articles;
