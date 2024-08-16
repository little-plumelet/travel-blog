"use client";

import React from "react";
import { useLocale } from "next-intl";
import { usePathname, Link } from "@/navigation";
import { Language } from "@/types/languages";
import cn from "classnames";

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
