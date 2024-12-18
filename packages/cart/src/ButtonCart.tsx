import { cn } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";
import { ShoppingCart } from "lucide-react";

export const ButtonCart = ({
  total,
  className,
  handleClick,
}: {
  total: number;
  className?: string;
  handleClick?: () => void;
}) => {
  const { theme } = useTheme();
  return (
    <button
      type="button"
      onClick={(e) => {
        handleClick?.();
        e.preventDefault();
      }}
      className={cn("flex items-center gap-1")}
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5 text-gray-600" />

        {total > 0 && (
          <div
            className={cn(
              "absolute text-xs right-[-10px] top-[-10px] rounded-full w-5 h-5 flex justify-center items-center z-10 bg-red-500 border border-transparent text-white"
            )}
            style={{
              backgroundColor: theme.colors.primary,
            }}
          >
            {total}
          </div>
        )}
      </div>
      <span className="text-sm font-medium text-gray-700">Mi Carrito</span>
    </button>
  );
};

export default ButtonCart;
