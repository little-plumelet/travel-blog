import { useState, useLayoutEffect } from "react";

function useWindowWidth() {
  // Инициализация состояния с проверкой наличия window
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Установить текущую ширину окна при монтировании компонента
      handleResize();

      // Добавить слушатель изменения размера окна
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    return undefined;
  }, []);

  return windowWidth;
}

export default useWindowWidth;
