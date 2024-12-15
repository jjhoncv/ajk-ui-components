import { type FC } from "react";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Sheet:FC<SheetProps> = ({ isOpen, onClose, children }) => {
  

  return (
      <div
        className={cn(
          baseStylesMobile.box,
          baseStylesMobile.bg,
          variantBoxMobileStyles[variantBoxMobile][variant].box,
          variantBoxMobileStyles[variantBoxMobile][variant].bg,
          isOpen ? "translate-x-[0%] transition-all" : ""
        )}
      >
       {children}
      </div>
  )
}