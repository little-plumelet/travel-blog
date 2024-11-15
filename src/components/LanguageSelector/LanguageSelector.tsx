"use client";

import cn from "classnames";
import { useLocale } from "next-intl";
import React from "react";

import { Link, usePathname } from "@/i18n/routing";
import { Language } from "@/types/languages";

import s from "./LanguageSelector.module.scss";

function LanguageSelector() {
  const locale: Language = useLocale() as Language;
  const pathname = usePathname();

  return (
    <div className={s.wrapper}>
      <Link href={pathname} locale="en">
        <p className={cn(s.langTitle, { [s.active]: locale === "en" })}>EN</p>
      </Link>
      <span className={s.separator} />
      <Link href={pathname} locale="ru">
        <p className={cn(s.langTitle, { [s.active]: locale === "ru" })}>RU</p>
      </Link>
    </div>
  );
}

export default LanguageSelector;
