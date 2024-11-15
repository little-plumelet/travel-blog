"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";
import useGetWindowWidth from "@/hooks/helpers/useGetWindowWidth";

import s from "./style.module.scss";

function Montenegro() {
  const windowWidth = useGetWindowWidth();
  const t = useTranslations("countries.montenegro");
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <section className={s.mainSection}>
          {windowWidth < 780 ? (
            <>
              <Image
                src="/assets/images/countries/montenegro/main/main_mob.webp"
                alt="lagoon"
                width={4000}
                height={2252}
                sizes="100vw"
                className={s.mainImg}
              />
              <Image
                src="/assets/images/countries/montenegro/main/frame_mob.webp"
                alt="frame"
                width={1534}
                height={2252}
                sizes="100vw"
                className={s.frame}
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
              />
              <Image
                src="/assets/images/countries/montenegro/main/frame.webp"
                alt="frame"
                width={4000}
                height={2252}
                sizes="100vw"
                className={s.frame}
              />
            </>
          )}

          <div className={s.title}>{t("title")}</div>
        </section>
        <section className={s.section}>
          <h3></h3>
          <p>{t("promoText")}</p>
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
          <div className={s.content}>
            <h3 className={s.sectionTitle}>{t("locations.title")}</h3>
            <ul>
              <li>
                <Link className={s.point} href="/montenegro/hercegnovi">
                  {t("locations.hercegNovi")}
                </Link>
              </li>
              <li>
                <Link className={s.point} href="/montenegro/kotor">
                  {t("locations.kotor")}
                </Link>
              </li>
              <li>
                <Link className={s.point} href="/montenegro/perast">
                  {t("locations.perast")}
                </Link>
              </li>
              <li>
                <Link className={s.point} href="/montenegro/bar">
                  {t("locations.bar")}
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Montenegro;
