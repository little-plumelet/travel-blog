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
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        x: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut" },
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        x: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut" },
      },
    },
  };
}

export const scaleDown = () => ({
  hidden: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
});
