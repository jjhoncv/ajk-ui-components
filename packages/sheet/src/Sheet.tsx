import React, { type FC, useEffect } from "react";
import { cn } from "@ajk-ui/core";

interface SheetProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}

export const Sheet: FC<SheetProps> = ({
  isOpen: isOpenInitial = false,
  onClose,
  children,
  side = "left",
  className = "",
}) => {
  const [isOpen, setIsOpen] = React.useState(isOpenInitial);

  const sideStyles = {
    left: "left-0 translate-x-[-100%]",
    right: "right-0 translate-x-[100%]",
  };

  const baseMobileStyles = {
    box: "md:invisible ease-out duration-500 transition-all shadow-2xl w-[70%] fixed z-40 h-dvh top-0 px-6 py-3",
    bg: "bg-white",
  };

  useEffect(() => {
    setIsOpen(isOpenInitial);
  }, [isOpenInitial]);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
            onClose?.();
          }}
          className="fixed opacity-70 w-full bg-black h-dvh top-0 right-0 left-0 bottom-0 z-20"
        />
      )}
      <div
        className={cn(
          baseMobileStyles.box,
          baseMobileStyles.bg,
          sideStyles[side],
          isOpen ? "translate-x-[0%] transition-all" : "",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
