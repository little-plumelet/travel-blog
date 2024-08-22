"use client";

import React from "react";
import { MenuContext } from "./menuContext";

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const contextValue = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen]
  );
  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
