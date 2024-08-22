"use client";

import { createContext } from "react";

export const MenuContext = createContext<null | {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>(null);
