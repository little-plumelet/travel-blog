"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "@/constants/countries";
import { Link } from "@/navigation";
import { Country } from "@/types/countries";
import { useTranslations } from "next-intl";
import { slideLeft } from "@/utils/motion";
import LanguageSelector from "../LanguageSelector";
import Image from "next/image";

import s from "./Menu.module.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = React.useState(countries[0]);
  const t = useTranslations();

  const closeMenu = (e: any) => {
    setIsOpen(false);
  };

  const handleSelect = (country: Country) => {
    console.log(country);
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            variants={slideLeft()}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              onClick={closeMenu}
              className={s.externalButton}
              type="button"
            />
            <div className={s.wrapper}>
              <div className={s.menuHeader}>
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
                <button
                  onClick={closeMenu}
                  className={s.closeButton}
                  type="button"
                  aria-label="close-button"
                >
                  &times;
                </button>
              </div>

              <div className={s.menuContainer}>
                {countries.map((country) => (
                  <Link
                    href="#"
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
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Menu;
