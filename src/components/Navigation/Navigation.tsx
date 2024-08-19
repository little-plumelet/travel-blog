"use client";

import React from "react";
import CountrySelector from "../CountrySelector";
import LanguageSelector from "../LanguageSelector";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Burger from "../Burger";
import { Link } from "@/navigation";

import s from "./Navigation.module.scss";

function Navigation() {
  const t = useTranslations("common");

  return (
    <div className={s.wrapper}>
      <Link className={s.logo} href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className={s.logoIcon}
        />
        <span>{t("logo")}</span>
      </Link>
      <div className={s.item}>
        <CountrySelector />
      </div>
      <div className={s.item}>
        <LanguageSelector />
      </div>
      <div className={s.burger}>
        <Burger />
      </div>
    </div>
  );
}

export default Navigation;
