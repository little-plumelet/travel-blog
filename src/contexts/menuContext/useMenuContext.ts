"use client";

import React from "react";
import { MenuContext } from "./menuContext";

export const useMenuContext = () => {
  return React.useContext(MenuContext)!;
};
