import React from "react";
import CountrySelector from "../CountrySelector";
import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";
import AnimatedBurger from "./parts/AnimatedBurger";

import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.wrapper}>
      <Logo />
      <div className={s.item}>
        <CountrySelector />
      </div>
      <div className={s.item}>
        <LanguageSelector />
      </div>
      <AnimatedBurger />
    </header>
  );
}

export default Header;
