import { useTheme } from "@ajk-ui/theme-utils";
import { cn } from "./utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const { theme } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: theme.colors.primary,
          color: theme.colors.text,
          border: "none",
        };
      case "secondary":
        return {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.text,
          border: "none",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: theme.colors.primary,
          border: `2px solid ${theme.colors.primary}`,
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 py-1.5 text-sm";
      case "md":
        return "px-4 py-2";
      case "lg":
        return "px-6 py-3 text-lg";
      default:
        return "";
    }
  };

  return (
    <button
      className={cn(
        "rounded-md font-medium transition-colors",
        getSizeStyles(),
        className
      )}
      style={{
        ...getVariantStyles(),
        fontFamily: theme.typography.fontFamily,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
