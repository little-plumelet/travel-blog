"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMenuContext } from "@/contexts/menuContext/useMenuContext";
import { scaleDown } from "@/utils/motion";
import Burger from "@/components/Burger";

import s from "./AnimatedBurger.module.scss";

function AnimatedBurger() {
  const { isOpen } = useMenuContext();
  return (
    <div className={s.burger}>
      <AnimatePresence>
        <motion.div
          key="burger"
          variants={scaleDown()}
          initial="visible"
          animate={isOpen ? "hidden" : "visible"}
        >
          <Burger />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedBurger;
