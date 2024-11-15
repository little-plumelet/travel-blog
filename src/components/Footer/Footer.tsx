import React from "react";

import Logo from "../Logo";

import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <div>© 2024 - all rights reserved</div>
      <Logo />
    </footer>
  );
}

export default Footer;
