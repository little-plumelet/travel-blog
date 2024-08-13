import { useTranslations } from "next-intl";

import s from "./Home.module.scss";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className={s.background}>
      <div className={s.titleContainer}>
        <h3 className={s.subtitle}>{t("subtitle")}</h3>
        <h1 className={s.title}>{t("title")}</h1>
      </div>
    </div>
  );
}
