import React from "react";

import s from "./CountrySelector.module.scss";
import { countries } from "@/constants/countries";
import { Country } from "@/types/countries";
import Icon from "../common/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { dropDown } from "@/utils/motion";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

function CountrySelector() {
  const [selected, setSelected] = React.useState(countries[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (country: Country) => {
    console.log(country);
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <button className={s.container} onClick={toggle}>
        <span>{selected.toUpperCase()}</span>
        <Icon variant="arrow_down" className={s.icon} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropDown()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={s.menu}
          >
            {countries.map((country) => (
              <Link
                href={pathname}
                key={country}
                className={`${s.item} ${country === country ? s.active : ""}`}
                onClick={handleSelect.bind(null, country)}
              >
                <p className={s.langTitle}>{country}</p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CountrySelector;
