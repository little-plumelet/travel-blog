import cn from "classnames";
import { useTranslations } from "next-intl";
import React from "react";

import Description from "./sections/Description";
import Introduction from "@/components/Introduction";
import Locations from "./sections/Locations";

import s from "./style.module.scss";

function Montenegro() {
  const t = useTranslations("countries.montenegro");
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Introduction
          country="montenegro"
          image="/assets/images/countries/montenegro/main/main.webp"
          imageMobile="/assets/images/countries/montenegro/main/main_mob.webp"
          frame={1}
          frameOpacity={1}
        />
        <Description className={s.section} />
        <Locations className={cn(s.section, s.sectionList)} />
      </div>
    </div>
  );
}

export default Montenegro;
