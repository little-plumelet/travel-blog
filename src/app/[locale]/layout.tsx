import LanguageSelector from "@/components/LanguageSelector";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Montserrat, Exo_2 } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});
const exo = Exo_2({ subsets: ["latin", "cyrillic"], variable: "--font-exo" });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} ${exo.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LanguageSelector />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
