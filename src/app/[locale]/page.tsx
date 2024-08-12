import { useTranslations } from "next-intl";

import s from "./Home.module.scss";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className={s.background}>
      <h3>{t("subtitle")}</h3>
      <h1>{t("title")}</h1>
    </div>
  );
}
