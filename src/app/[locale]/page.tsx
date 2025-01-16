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
    <main className={s.main}>
      <Image
        src="/assets/images/home/bg.webp"
        alt="background"
        width={4624}
        height={2084}
        className={cn(s.background)}
        sizes="100vw"
        loading="eager"
      />
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
          sizes="100vw"
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
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_1.webp"
          alt="cloud-left-top"
          width={640}
          height={899}
          className={cn(s.cloud, s.cloud_left__top)}
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_2.webp"
          alt="cloud-right-top"
          width={640}
          height={661}
          className={cn(s.cloud, s.cloud_right__top)}
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_1.webp"
          alt="cloud-left-bottom"
          width={640}
          height={899}
          className={cn(s.cloud, s.cloud_left__bottom)}
          sizes="100vw"
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
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_2.webp"
          alt="cloud-right-bottom"
          width={640}
          height={661}
          className={cn(s.cloud, s.cloud_right__bottom)}
          sizes="100vw"
          loading="eager"
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
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={687}
          height={508}
          className={cn(s.cloud, s.cloud_center)}
          sizes="100vw"
        />
        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={887}
          height={708}
          className={cn(s.cloud, s.cloud_center_2, s.cloud_center_2__animated)}
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={687}
          height={508}
          className={cn(s.cloud, s.cloud_center, s.cloud_center__animated)}
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={887}
          height={708}
          className={cn(s.cloud, s.cloud__infinite)}
          sizes="100vw"
        />

        <Image
          src="/assets/images/home/cloud_4.webp"
          alt="cloud_4"
          width={887}
          height={708}
          className={cn(s.cloud, s.cloud__infinite, s.cloud__infinite_2)}
          sizes="100vw"
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
