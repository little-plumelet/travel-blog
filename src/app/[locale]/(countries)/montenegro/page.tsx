"use client";

import React from "react";
import Image from "next/image";
import useGetWindowWidth from "@/hooks/helpers/useGetWindowWidth";

import s from "./style.module.scss";

function page() {
  const windowWidth = useGetWindowWidth();
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <section className={s.mainSection}>
          {windowWidth < 780 ? (
            <>
              <Image
                src="/assets/images/countries/montenegro/main/main_mob.webp"
                alt="lagoon"
                width={1534}
                height={2252}
                sizes="100vw"
                className={s.mainImg}
              />
              <Image
                src="/assets/images/countries/montenegro/main/frame_mob.webp"
                alt="frame"
                width={1819}
                height={4000}
                sizes="100vw"
                className={s.frame}
              />
            </>
          ) : (
            <>
              <Image
                src="/assets/images/countries/montenegro/main/main.webp"
                alt="lagoon"
                width={4000}
                height={2252}
                sizes="100vw"
                className={s.mainImg}
              />
              <Image
                src="/assets/images/countries/montenegro/main/frame.webp"
                alt="frame"
                width={4000}
                height={2252}
                sizes="100vw"
                className={s.frame}
              />
            </>
          )}

          <div className={s.title}>Montenegro</div>
        </section>
        <section className={s.section}>
          <h3></h3>
          <p>
            Больше всего я люблю Черногорию зимой. В это время года вода гладкая
            как стекло а воздух чистый и прозрачный. Одно удовольствие гулять по
            улочкам городов или по окрестным тропинкам
          </p>
        </section>
        <ul>
          <li>Херцег-Нови</li>
          <li>Котор</li>
          <li>Пераст</li>
        </ul>
        <a href="http://www.freepik.com">Designed by macrovector / Freepik</a>
      </div>
    </div>
  );
}

export default page;
