import React from "react";
import { useTranslations } from "next-intl";

import MainBackground from "../MainBackground";

import s from "./Introduction.module.scss";

function Introduction() {
  const t = useTranslations("countries.montenegro");
  return (
    <section className={s.section}>
      <MainBackground />
      <div className={s.title}>{t("title")}</div>
    </section>
  );
}

export default Introduction;
