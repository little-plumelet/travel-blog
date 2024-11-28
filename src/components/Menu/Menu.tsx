"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";

import { countries } from "@/constants/countries";
import { useMenuContext } from "@/contexts/menuContext/useMenuContext";
import { Link, usePathname } from "@/i18n/routing";
import { Country } from "@/types/countries";
import { slideLeft } from "@/utils/motion";

import Burger from "../Burger";
import LanguageSelector from "../LanguageSelector";

import s from "./Menu.module.scss";

const Menu = () => {
  const { isOpen, setIsOpen } = useMenuContext();
  const pathname = usePathname();
  const [selected, setSelected] = React.useState<Country | null>(
    () => (pathname.split("/")[1] as Country) || countries[-1]
  );
  const t = useTranslations();

  useEffect(() => {
    if (!countries.includes(pathname.split("/")[1] as Country)) {
      setSelected(null);
    }
  }, [pathname]);

  const closeMenu = (e: any) => {
    setIsOpen(false);
  };

  const handleSelect = (country: Country) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <button
          onClick={closeMenu}
          className={s.externalButton}
          type="button"
        />
      )}
      <AnimatePresence>
        <motion.div
          variants={slideLeft()}
          initial="hidden"
          animate={isOpen ? "visible" : "exit"}
          exit="exit"
          className={s.wrapper}
        >
          <div className={s.menuHeader} onClick={closeMenu}>
            <Link className={s.logo} href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={40}
                height={40}
                className={s.logoIcon}
              />
              <span>{t("common.logo")}</span>
            </Link>
            <Burger />
          </div>

          <div className={s.menuContainer}>
            {countries.map((country) => (
              <Link
                href={`/${country}`}
                key={country}
                className={`${s.menuItem} ${
                  country === selected ? s.active : ""
                }`}
                onClick={handleSelect.bind(null, country)}
              >
                <p className={s.langTitle}>{t(`countries.${country}.title`)}</p>
              </Link>
            ))}
          </div>
          <div className={s.languageSelectorContainer}>
            <LanguageSelector />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Menu;
