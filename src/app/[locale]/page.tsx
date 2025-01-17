import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";

import Background from "./parts/Background";
import Clouds from "./parts/Clouds";
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
      <Background />
      <Clouds />
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
