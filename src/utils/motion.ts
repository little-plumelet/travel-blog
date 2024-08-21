export function dropDown() {
  return {
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
  };
}

export function slideLeft() {
  return {
    visible: {
      x: 0,
      // opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 50, damping: 20 },
        // opacity: { duration: 0.8, ease: "easeInOut" },
      },
    },
    hidden: {
      // opacity: 0,
      x: "-100%",
      transition: {
        x: { type: "spring", stiffness: 50, damping: 20 },
        // opacity: { duration: 0.8, ease: "easeInOut" },
      },
    },
  };
}
