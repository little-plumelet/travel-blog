import React from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

import s from "./PlaceList.module.scss";

type PlaceListProps = { className?: string };

function PlaceList({ className }: PlaceListProps) {
  const t = useTranslations("countries.montenegro");
  return (
    <div className={className}>
      <h3 className={s.title}>{t("locationsListTitle")}</h3>
      <ul>
        <li className={s.point}>
          <Link className={s.pointLink} href="/montenegro/hercegnovi">
            {t("locations.hercegNovi.title")}
          </Link>
        </li>
        <li className={s.point}>
          <Link className={s.pointLink} href="/montenegro/kotor">
            {t("locations.kotor.title")}
          </Link>
        </li>
        <li className={s.point}>
          <Link className={s.pointLink} href="/montenegro/perast">
            {t("locations.perast.title")}
          </Link>
        </li>
        <li className={s.point}>
          <Link className={s.pointLink} href="/montenegro/bar">
            {t("locations.bar.title")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PlaceList;
