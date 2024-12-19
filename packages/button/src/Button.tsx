import { useTheme } from "@ajk-ui/theme-utils";
import { cn } from "./utils";
import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  // Nuevas props para iconos
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  iconSize?: number;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconSize,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const { theme } = useTheme();

  const getVariantStyles = () => {
    const baseStyles = {
      transition: "all 150ms ease",
    };

    if (disabled) {
      return {
        ...baseStyles,
        backgroundColor: theme.colors.gray300,
        color: theme.colors.gray500,
        border: "none",
        cursor: "not-allowed",
        opacity: 0.7,
      };
    }

    switch (variant) {
      case "primary":
        return {
          ...baseStyles,
          backgroundColor: theme.colors.primary,
          color: theme.colors.text,
          border: "none",
          "&:hover": {
            backgroundColor: theme.colors.primaryDark,
          },
        };
      case "secondary":
        return {
          ...baseStyles,
          backgroundColor: theme.colors.secondary,
          color: theme.colors.text,
          border: "none",
          "&:hover": {
            backgroundColor: theme.colors.secondaryDark,
          },
        };
      case "outline":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
          color: theme.colors.primary,
          border: `2px solid ${theme.colors.primary}`,
          "&:hover": {
            backgroundColor: theme.colors.primaryLight,
          },
        };
      default:
        return baseStyles;
    }
  };

  const getSizeStyles = () => {
    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    };

    const finalIconSize = iconSize || iconSizes[size];

    switch (size) {
      case "sm":
        return {
          padding: "0.375rem 0.75rem",
          fontSize: "0.875rem",
          gap: "0.5rem",
          iconSize: finalIconSize,
        };
      case "md":
        return {
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          gap: "0.625rem",
          iconSize: finalIconSize,
        };
      case "lg":
        return {
          padding: "0.75rem 1.5rem",
          fontSize: "1.125rem",
          gap: "0.75rem",
          iconSize: finalIconSize,
        };
      default:
        return {
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          gap: "0.625rem",
          iconSize: finalIconSize,
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <button
      className={cn(
        "rounded-md font-medium inline-flex items-center justify-center",
        "transition-all duration-200 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        `focus:ring-${variant === "outline" ? "primary" : variant}-500`,
        disabled && "cursor-not-allowed",
        fullWidth && "w-full",
        className
      )}
      style={{
        ...getVariantStyles(),
        fontFamily: theme.typography.fontFamily,
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        gap: sizeStyles.gap,
      }}
      disabled={disabled}
      {...props}
    >
      {LeftIcon && (
        <LeftIcon size={sizeStyles.iconSize} className="flex-shrink-0" />
      )}
      {children}
      {RightIcon && (
        <RightIcon size={sizeStyles.iconSize} className="flex-shrink-0" />
      )}
    </button>
  );
}
