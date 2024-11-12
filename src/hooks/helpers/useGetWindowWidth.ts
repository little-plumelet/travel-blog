"use client";

import { useEffect, useState } from "react";
import useIsClient from "./useIsClient";

function useGetWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return undefined;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return windowWidth;
}

export default useGetWindowWidth;
