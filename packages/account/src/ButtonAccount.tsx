import { cn } from "@ajk-ui/core";
import { User } from "lucide-react";

export const ButtonAccount = ({
  className,
  handleClick,
}: {
  className?: string;
  handleClick?: () => void;
}) => {
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          handleClick?.();
          e.preventDefault();
        }}
        className={cn(
          "flex items-center hover:bg-gray-100 rounded-lg gap-1",
          className
        )}
      >
        <User className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Mi Cuenta</span>
      </button>
    </>
  );
};
