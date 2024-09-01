import Menu from "@/components/Menu";
import Navigation from "@/components/Navigation";
import { MenuContextProvider } from "@/contexts/menuContext/menuContextProvider";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Montserrat, Exo_2, Shantell_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});
const exo = Exo_2({ subsets: ["latin", "cyrillic"], variable: "--font-exo" });

const shantell = Shantell_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-shantell",
});

export const metadata: Metadata = {
  title: "Travel blog",
  description: "Travel blog",
};

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
    <html
      lang={locale}
      className={`${montserrat.variable} ${exo.variable} ${shantell.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>travel blog</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MenuContextProvider>
            <Navigation />
            <Menu />
            <main>{children}</main>
          </MenuContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
