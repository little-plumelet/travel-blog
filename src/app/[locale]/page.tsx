import Icon from "@/components/common/Icon";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <Icon variant="arrow_down" style={{ color: "blue" }} />
    </>
  );
}
