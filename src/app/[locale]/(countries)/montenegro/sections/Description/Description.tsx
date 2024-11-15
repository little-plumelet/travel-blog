import React from "react";
import { useTranslations } from "next-intl";

import s from "./Description.module.scss";

type DescriptionProps = {
  className?: string;
};
function Description({ className }: DescriptionProps) {
  const t = useTranslations("countries.montenegro");
  return (
    <section className={className}>
      <p className={s.promoText}>{t("promoText")}</p>
    </section>
  );
}

export default Description;
