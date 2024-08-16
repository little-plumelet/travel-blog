"use client";

import React from "react";
import CountrySelector from "../CountrySelector";
import LanguageSelector from "../LanguageSelector";

import s from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={s.wrapper}>
      <CountrySelector />
      <LanguageSelector />
    </div>
  );
}

export default Navigation;
