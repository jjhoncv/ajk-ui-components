import React from "react";
import { cn, type BaseProps } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";

export interface SectionProps extends BaseProps {
  variant?: "default" | "alternate" | "highlight" | "feature" | "cta";
  layout?: "default" | "grid" | "split" | "centered" | "zigzag";
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  containerWidth?: "sm" | "md" | "lg" | "xl" | "full";
  title?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gridCols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export function Section({
  variant = "default",
  layout = "default",
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.5,
  spacing = "lg",
  containerWidth = "lg",
  title,
  subtitle,
  align = "left",
  gridCols = 3,
  gap = "md",
  className,
  children,
  ...props
}: SectionProps) {
  const { theme } = useTheme();

  const baseStyles = {
    section: "relative w-full",
    background: "absolute inset-0 bg-cover bg-center bg-no-repeat",
    overlay: "absolute inset-0 bg-black",
    container: "relative mx-auto px-4 sm:px-6",
    content: "relative z-10",
    title: "font-bold",
    subtitle: "mt-4",
  };

  const spacingStyles = {
    none: "py-0",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  };

  const containerStyles = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-none",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const gapStyles = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  };

  const variantStyles = {
    default: {
      section: "bg-white",
      title: "text-gray-900",
      subtitle: "text-gray-600",
    },
    alternate: {
      section: "bg-gray-50",
      title: "text-gray-900",
      subtitle: "text-gray-600",
    },
    highlight: {
      section: "bg-primary-500",
      title: "text-white",
      subtitle: "text-primary-100",
    },
    feature: {
      section: "bg-gray-900",
      title: "text-white",
      subtitle: "text-gray-300",
    },
    cta: {
      section: "bg-primary-600",
      title: "text-white",
      subtitle: "text-primary-100",
    },
  };

  const layoutStyles = {
    default: "flex flex-col",
    grid: `grid grid-cols-1 ${
      gridCols === 2
        ? "sm:grid-cols-2"
        : gridCols === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : gridCols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : ""
    }`,
    split: "grid grid-cols-1 lg:grid-cols-2",
    centered: "flex flex-col items-center text-center",
    zigzag: "flex flex-col space-y-16",
  };

  return (
    <section
      className={cn(
        baseStyles.section,
        variantStyles[variant].section,
        spacingStyles[spacing],
        className
      )}
      style={
        {
          "--section-bg": theme.colors.background,
          "--section-text": theme.colors.text,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Background Image and Overlay */}
      {backgroundImage && (
        <>
          <div
            className={baseStyles.background}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && (
            <div
              className={baseStyles.overlay}
              style={{ opacity: overlayOpacity }}
            />
          )}
        </>
      )}

      {/* Container */}
      <div
        className={cn(baseStyles.container, containerStyles[containerWidth])}
      >
        <div className={cn(baseStyles.content, alignStyles[align])}>
          {/* Title and Subtitle */}
          {(title || subtitle) && (
            <div className="mb-12">
              {title && (
                <h2
                  className={cn(
                    baseStyles.title,
                    variantStyles[variant].title,
                    "text-3xl sm:text-4xl lg:text-5xl"
                  )}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p
                  className={cn(
                    baseStyles.subtitle,
                    variantStyles[variant].subtitle,
                    "text-lg sm:text-xl"
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          <div className={cn(layoutStyles[layout], gapStyles[gap])}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
