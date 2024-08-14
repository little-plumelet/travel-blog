import { useTranslations } from "next-intl";
import Image from "next/image";
import cn from "classnames";

import s from "./Home.module.scss";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className={s.background}>
      <div className={s.cloudsContainer}>
        <Image
          src="/assets/images/home/cloud_1.webp"
          alt="cloud-left-top"
          width={640}
          height={899}
          className={cn(s.cloud, s.cloud_left__top)}
        />
        <Image
          src="/assets/images/home/cloud_2.webp"
          alt="cloud-right-top"
          width={640}
          height={661}
          className={cn(s.cloud, s.cloud_right__top)}
        />
        <Image
          src="/assets/images/home/cloud_1.webp"
          alt="cloud-left-bottom"
          width={640}
          height={899}
          className={cn(s.cloud, s.cloud_left__bottom)}
        />
        <Image
          src="/assets/images/home/cloud_1.webp"
          alt="cloud-left-bottom"
          width={640}
          height={899}
          className={cn(
            s.cloud,
            s.cloud_left__bottom,
            s.cloud_left__bottom__animated
          )}
        />
        <Image
          src="/assets/images/home/cloud_2.webp"
          alt="cloud-right-bottom"
          width={640}
          height={661}
          className={cn(s.cloud, s.cloud_right__bottom)}
        />
        <Image
          src="/assets/images/home/cloud_2.webp"
          alt="cloud-right-bottom"
          width={640}
          height={661}
          className={cn(
            s.cloud,
            s.cloud_right__bottom,
            s.cloud_right__bottom__animated
          )}
        />
        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={687}
          height={508}
          className={cn(s.cloud, s.cloud_center)}
        />
        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={687}
          height={508}
          className={cn(s.cloud, s.cloud_center, s.cloud_center__animated)}
          loading="eager"
        />
      </div>
      <div className={s.titleContainer}>
        <h3 className={s.subtitle}>{t("subtitle")}</h3>
        <h1 className={s.title}>{t("title")}</h1>
      </div>
    </div>
  );
}
