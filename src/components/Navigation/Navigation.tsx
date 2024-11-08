"use client";

import React from "react";
import CountrySelector from "../CountrySelector";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import Burger from "../Burger";
import { useMenuContext } from "@/contexts/menuContext/useMenuContext";
import { scaleDown } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../Logo";

import s from "./Navigation.module.scss";

function Navigation() {
  const { isOpen } = useMenuContext();

  return (
    <div className={s.wrapper}>
      <Logo />
      <div className={s.item}>
        <CountrySelector />
      </div>
      <div className={s.item}>
        <LanguageSelector />
      </div>
      <div className={s.burger}>
        <AnimatePresence>
          <motion.div
            key="burger"
            variants={scaleDown()}
            initial="visible"
            animate={isOpen ? "hidden" : "visible"}
          >
            <Burger />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navigation;
