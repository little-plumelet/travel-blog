import { setRequestLocale } from "next-intl/server";

import Footer from "@/components/Footer";
import locales from "@/constants/languages";

export default function CountryLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  setRequestLocale(locale);
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
