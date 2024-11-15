import React from "react";
import Image from "next/image";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import locales from "@/constants/languages";

import MainBackground from "./sections/MainBackground";
import PlaceList from "./sections/PlaceList";

import s from "./style.module.scss";

function Montenegro({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations("countries.montenegro");
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <section className={s.mainSection}>
          <MainBackground />
          <div className={s.title}>{t("title")}</div>
        </section>
        <section className={s.section}>
          <p className={s.promoText}>{t("promoText")}</p>
        </section>
        <section className={cn(s.section, s.sectionList)}>
          <div className={s.listBg}>
            <div className={s.imgBg}>
              <Image
                src="/assets/images/countries/montenegro/main/list_bg.png"
                alt="list-background"
                width={4624}
                height={2604}
                sizes="100vw"
                className={s.listBg}
              />
            </div>
            <Image
              src="/assets/images/countries/montenegro/main/stroke.png"
              alt="stroke"
              width={4008}
              height={1143}
              sizes="100vw"
              className={s.stroke1}
            />
            <Image
              src="/assets/images/countries/montenegro/main/stroke.png"
              alt="stroke"
              width={4008}
              height={1143}
              sizes="100vw"
              className={s.stroke2}
            />
          </div>
          <PlaceList className={s.content} />
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default Montenegro;
