import React from "react";
import { useTranslations } from "next-intl";

import FramedBackground, {
  FramedBackgroundProps,
} from "../FramedBackground/FramedBackground";

import s from "./Introduction.module.scss";

type IntroductionProps = {
  country: string;
  place?: string;
} & FramedBackgroundProps;

function Introduction({
  country,
  place,
  image,
  imageMobile = image,
  frame,
}: IntroductionProps) {
  const t = useTranslations(
    place ? `countries.${country}.locations.${place}` : `countries.${country}`
  );
  return (
    <section className={s.section}>
      <FramedBackground image={image} imageMobile={imageMobile} frame={frame} />
      <div className={s.title}>{t("title")}</div>
    </section>
  );
}

export default Introduction;
