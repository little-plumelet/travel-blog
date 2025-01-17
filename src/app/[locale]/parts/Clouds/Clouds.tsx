import cn from "classnames";
import React from "react";
import Image from "next/image";

import s from "./Clouds.module.scss";

function Clouds() {
  return (
    <div className={s.cloudsContainer}>
      <Image
        alt="cloud-left-top"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(s.cloud, s.cloud_left__top, s.cloud_left__top__animated)}
        sizes="100vw"
      />
      <Image
        alt="cloud-left-bottom"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(
          s.cloud,
          s.cloud_left__bottom,
          s.cloud_left__bottom__animated
        )}
        sizes="100vw"
      />

      <Image
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        alt="cloud-right-top"
        className={cn(
          s.cloud,
          s.cloud_right__top,
          s.cloud_right__top__animated
        )}
        sizes="100vw"
      />

      <Image
        alt="cloud-right-bottom"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(
          s.cloud,
          s.cloud_right__bottom,
          s.cloud_right__bottom__animated
        )}
        sizes="100vw"
      />

      <Image
        alt="cloud"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(s.cloud, s.cloud_center, s.cloud_center__animated)}
        sizes="100vw"
      />

      <Image
        alt="cloud"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(s.cloud, s.cloud_center_2, s.cloud_center_2__animated)}
        sizes="100vw"
      />

      <Image
        alt="cloud"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(s.cloud, s.cloud__infinite)}
        sizes="100vw"
        id="1"
        loading="eager"
      />

      <Image
        alt="cloud"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(s.cloud, s.cloud__infinite, s.cloud__infinite_2)}
        sizes="100vw"
        id="2"
      />
      <Image
        alt="cloud"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(s.cloud, s.cloud__infinite, s.cloud__infinite_mob)}
        sizes="100vw"
        id="3"
      />

      <Image
        alt="cloud"
        src="/assets/images/home/cloud.webp"
        width={4774}
        height={2176}
        className={cn(
          s.cloud,
          s.cloud__infinite,
          s.cloud__infinite_2,
          s.cloud__infinite_mob,
          s.cloud__infinite_mob_2
        )}
        sizes="100vw"
        id="4"
      />
    </div>
  );
}

export default Clouds;
