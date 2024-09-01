"use client";

import { countries } from "@/constants/countries";
import { useMenuContext } from "@/contexts/menuContext/useMenuContext";
import { Link } from "@/navigation";
import { Country } from "@/types/countries";
import { slideLeft } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import LanguageSelector from "../LanguageSelector";

import s from "./Menu.module.scss";
import Burger from "../Burger";

const Menu = () => {
  const { isOpen, setIsOpen } = useMenuContext();
  const [selected, setSelected] = React.useState(countries[0]);
  const t = useTranslations();

  const closeMenu = (e: any) => {
    console.log("!!!!");
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
                <p className={s.langTitle}>{t(`countries.${country}`)}</p>
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
