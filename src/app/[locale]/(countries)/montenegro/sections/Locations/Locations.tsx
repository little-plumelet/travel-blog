import React from "react";
import Image from "next/image";

import PlaceList from "../PlaceList";

import s from "./Locations.module.scss";

type LocationsProps = {
  className?: string;
};
function Locations({ className }: LocationsProps) {
  return (
    <section className={className}>
      <div className={s.listBg}>
        <div className={s.imgBg}>
          <Image
            src="/assets/images/countries/montenegro/main/list_bg.png"
            alt="list-background"
            width={4624}
            height={2604}
            sizes="100vw"
            className={s.listBg}
          />
        </div>
        <Image
          src="/assets/images/countries/montenegro/main/stroke.png"
          alt="stroke"
          width={4008}
          height={1143}
          sizes="100vw"
          className={s.stroke1}
        />
        <Image
          src="/assets/images/countries/montenegro/main/stroke.png"
          alt="stroke"
          width={4008}
          height={1143}
          sizes="100vw"
          className={s.stroke2}
        />
      </div>
      <PlaceList className={s.content} />
    </section>
  );
}

export default Locations;
