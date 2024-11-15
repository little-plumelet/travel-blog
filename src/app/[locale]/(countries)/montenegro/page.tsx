import cn from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

import Description from "./sections/Description";
import Introduction from "./sections/Introduction";
import Locations from "./sections/Locations";

import s from "./style.module.scss";

function Montenegro() {
  const t = useTranslations("countries.montenegro");
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Introduction />
        <Description className={s.section} />
        <Locations className={cn(s.section, s.sectionList)} />
      </div>
    </div>
  );
}

export default Montenegro;
