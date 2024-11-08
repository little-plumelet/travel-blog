"use client";

import React from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import s from "./Logo.module.scss";

function Logo() {
  const t = useTranslations("common");
  return (
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
  );
}

export default Logo;
