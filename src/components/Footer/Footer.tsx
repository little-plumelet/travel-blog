import React from "react";

import Logo from "../Logo";
import Icon from "../common/Icon";

import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.refs}>
        <a href="www.freepik.com" className={s.link}>
          some pictures designed by Freepik
        </a>
        <div>© 2024 - all rights reserved</div>
      </div>
      <div className={s.socials}>
        <a href="https://www.youtube.com/@nikolai_kelin" className={s.link}>
          <Icon variant="youtube" className={s.youTube} />
        </a>
        <a
          href="https://www.instagram.com/humble_beauty_admirer/?igsh=MXdhZGgyZGQwZnltaQ%3D%3D#"
          className={s.link}
        >
          <Icon variant="instagram" />
        </a>
      </div>
      <Logo />
    </footer>
  );
}

export default Footer;
