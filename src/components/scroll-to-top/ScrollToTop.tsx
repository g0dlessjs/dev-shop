"use client";

import clsx from "clsx";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={clsx(
        "fixed",
        "bottom-6",
        "right-6",
        "z-[9999]",
        "flex",
        "items-center",
        "justify-center",
        "w-14",
        "h-14",
        "rounded-full",
        "bg-black/90",
        "backdrop-blur-md",
        "text-white",
        "shadow-2xl",
        "border",
        "border-white/10",
        "transition-all",
        "duration-300",
        "hover:scale-110",
        "hover:bg-black",
        "active:scale-95",
        "cursor-pointer",
      )}
    >
      <FaArrowUp size={18} />
    </button>
  );
};
