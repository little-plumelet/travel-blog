"use client";

import React, { useEffect, useState } from "react";
import { countries } from "@/constants/countries";
import { Country } from "@/types/countries";
import Icon from "../common/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { dropDown } from "@/utils/motion";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import cn from "classnames";

import s from "./CountrySelector.module.scss";

function CountrySelector() {
  const pathname = usePathname();
  const [selected, setSelected] = useState<Country | null>(
    () => (pathname.split("/")[1] as Country) || countries[-1]
  );
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("countries");

  useEffect(() => {
    if (!countries.includes(pathname.split("/")[1] as Country)) {
      setSelected(null);
    }
  }, [pathname]);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (country: Country) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <button className={s.container} onClick={toggle}>
        <span>{t("title").toUpperCase()}</span>
        <Icon
          variant="arrow_down"
          className={cn(s.icon, { [s.open]: isOpen })}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropDown()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={s.menu}
          >
            {countries.map((country) => (
              <Link
                href={`/${country}`}
                key={country}
                className={`${s.item} ${country === selected ? s.active : ""}`}
                onClick={handleSelect.bind(null, country)}
              >
                <p className={s.langTitle}>{t(`${country}.title`)}</p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CountrySelector;
