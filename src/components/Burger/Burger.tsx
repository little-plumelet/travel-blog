import React, { useState } from "react";
import { motion } from "framer-motion";

import s from "./Burger.module.scss";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button className={s.burger} onClick={toggleBurger}>
      <motion.div
        className={s.line}
        animate={isOpen ? { rotate: 45, y: "280%" } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={s.line}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={s.line}
        animate={isOpen ? { rotate: -45, y: "-280%" } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}

export default Burger;
