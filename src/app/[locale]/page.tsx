import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import cn from "classnames";

import s from "./style.module.scss";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className={s.background}>
      <div className={s.cloudsContainer}>
        <Image
          src="/assets/images/home/cloud_1.webp"
          alt="cloud-left-top"
          width={840}
          height={1099}
          className={cn(
            s.cloud,
            s.cloud_left__top_2,
            s.cloud_left__top_2__animated
          )}
        />
        <Image
          src="/assets/images/home/cloud_2.webp"
          alt="cloud-right-top"
          width={840}
          height={861}
          className={cn(
            s.cloud,
            s.cloud_right__top_2,
            s.cloud_right__top_2__animated
          )}
        />

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
          width={887}
          height={708}
          className={cn(s.cloud, s.cloud_center_2, s.cloud_center_2__animated)}
        />
        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={687}
          height={508}
          className={cn(s.cloud, s.cloud_center, s.cloud_center__animated)}
          loading="eager"
        />

        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={887}
          height={708}
          className={cn(s.cloud, s.cloud__infinite)}
        />
        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={887}
          height={708}
          className={cn(s.cloud, s.cloud__infinite, s.cloud__infinite_2)}
        />
      </div>
      <div className={s.titleContainer}>
        <h3 className={s.subtitle}>{t("subtitle")}</h3>
        <h1 className={s.title}>{t("title")}</h1>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
