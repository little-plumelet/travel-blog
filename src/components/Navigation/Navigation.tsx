"use client";

import React from "react";
import CountrySelector from "../CountrySelector";
import LanguageSelector from "../LanguageSelector";
import Image from "next/image";
import { useTranslations } from "next-intl";

import s from "./Navigation.module.scss";
import { Link } from "@/navigation";

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
      <CountrySelector />
      <LanguageSelector />
    </div>
  );
}

export default Navigation;
