import React from "react";
import CountrySelector from "../CountrySelector";
import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";
import AnimatedBurger from "./parts/AnimatedBurger";

import s from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={s.wrapper}>
      <Logo />
      <div className={s.item}>
        <CountrySelector />
      </div>
      <div className={s.item}>
        <LanguageSelector />
      </div>
      <AnimatedBurger />
    </div>
  );
}

export default Navigation;
