import React from "react";
import { motion, animate } from "framer-motion";
import { useMenuContext } from "@/contexts/menuContext/useMenuContext";

import s from "./Burger.module.scss";

function Burger() {
  const { isOpen, setIsOpen } = useMenuContext();

  const toggleBurger = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <button className={s.burger} onClick={toggleBurger}>
      <motion.div
        className={s.line}
        animate={isOpen ? { rotate: 45, y: "280%" } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, delay: isOpen ? 0.3 : 0 }}
      />
      <motion.div
        className={s.line}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, delay: isOpen ? 0.3 : 0 }}
      />
      <motion.div
        className={s.line}
        animate={isOpen ? { rotate: -45, y: "-280%" } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, delay: isOpen ? 0.3 : 0 }}
      />
    </button>
  );
}

export default Burger;
