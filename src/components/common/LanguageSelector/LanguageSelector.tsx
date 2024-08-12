"use client";

import React from "react";
import Icon from "@/components/common/Icon";
import { useLocale } from "next-intl";
import locales from "@/constants/languages";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, Link } from "@/navigation";
import { LanguagesMap } from "@/enums/languages";
import { Language } from "@/types/languages";

import s from "./LanguageSelector.module.scss";

function LanguageSelector() {
  const [selected, setSelected] = React.useState(locales[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    setSelected(locale); // Update selected when locale changes
  }, [locale]);

  console.log(locale);
  console.log(selected === locale);
  return (
    <div className={s.wrapper}>
      <button className={s.container} onClick={toggle}>
        <span>{selected.toUpperCase()}</span>
        <Icon variant="arrow_down" className={s.icon} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              },
              hidden: {
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={s.menu}
          >
            {locales.map((lang) => (
              <Link
                href={pathname}
                locale={lang}
                key={lang}
                className={`${s.item} ${lang === locale ? s.active : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <p className={s.langTitle}>{LanguagesMap[lang as Language]}</p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSelector;
