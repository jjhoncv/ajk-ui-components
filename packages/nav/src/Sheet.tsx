import { type FC } from "react";

interface SheetProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right"
}

export const Sheet:FC<SheetProps> = ({ 
  isOpen = false, 
  onClose,
  children,
  side = "left"
  }) => {
  
  const sideStyles = {
    left: "left-0 translate-x-[-100%]",
    right: "right-0 translate-x-[100%]"
  };

  const baseStylesMobile = {
    box: "md:invisible duration-300 transition-all shadow-2xl w-[80%] fixed z-40 h-dvh top-0 px-4 py-2",
    bg: "bg-white"
  };

  return (
      <div
        className={cn(
          baseStylesMobile.box,
          baseStylesMobile.bg,
          sideStyles[side],
          isOpen ? "translate-x-[0%] transition-all" : ""
        )}
      >
       {children}
      </div>
  )
}