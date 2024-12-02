"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

import CountrySelector from "../CountrySelector";
import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";
import AnimatedBurger from "./parts/AnimatedBurger";

import s from "./Header.module.scss";

function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    // If scrolling down, hide the header; if up, show it
    if (diff > 0 && isVisible) {
      setIsVisible(false);
    } else if (diff < 0 && !isVisible) {
      setIsVisible(true);
    }
  });

  console.log(isVisible);
  return (
    <motion.header
      className={s.wrapper}
      initial={{ y: 0 }} // Start visible
      animate={{ y: isVisible ? 0 : "-100%" }} // Move out of view when hidden
      transition={{ type: "tween", duration: 0.3 }} // Smooth transition
    >
      <Logo />
      <div className={s.item}>
        <CountrySelector />
      </div>
      <div className={s.item}>
        <LanguageSelector />
      </div>
      <AnimatedBurger />
    </motion.header>
  );
}

export default Header;
