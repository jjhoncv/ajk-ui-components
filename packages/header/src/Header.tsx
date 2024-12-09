import React from "react";
import { cn, type BaseProps } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";
import { Nav, type NavItem } from "@ajk-ui/nav";

export interface HeaderProps extends BaseProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  height?: "sm" | "md" | "lg" | "full";
  navItems?: NavItem[];
  logo?: () => JSX.Element;
  logoNavMenuMobile?: () => JSX.Element;
  variant?: "simple" | "hero" | "centered" | "split";
  position?: "fixed" | "sticky" | "relative" | "absolute";
  cta?: {
    label: string;
    href: string;
    align?: "left" | "center" | "right";
    variant?: "primary" | "secondary" | "outline";
  };
  variantBoxMobile?: "full";
}

export function Header({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.5,
  height = "md",
  navItems,
  logo,
  logoNavMenuMobile,
  variant = "simple",
  position = "relative",
  cta,
  className,
  children,
  variantBoxMobile = "full",
  ...props
}: HeaderProps) {
  const { theme } = useTheme();

  const heightStyles = {
    sm: "h-[300px]",
    md: "h-[400px]",
    lg: "h-[500px]",
    full: "h-screen",
  };

  const baseStyles = {
    header: "relative w-full overflow-hidden",
    background: "absolute inset-0 bg-cover bg-center bg-no-repeat",
    overlay: "absolute inset-0 bg-black",
    content: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    title: "font-bold text-2xl md:text-base",
    subtitle: "mt-4",
    cta: {
      align: {
        center: "flex justify-center w-full",
        left: "flex justify-start w-full",
        right: "flex justify-end w-full",
      },
    },
  };

  const variantStyles = {
    simple: {
      content: "py-12",
      title: "text-left",
      subtitle: "text-left",
    },
    hero: {
      content: "flex h-full flex-col justify-center py-16",
      title: "text-center",
      subtitle: "text-center max-w-3xl mx-auto",
    },
    centered: {
      content:
        "flex h-full flex-col items-center justify-center text-center py-16",
      title: "text-center",
      subtitle: "text-center max-w-2xl mx-auto",
    },
    split: {
      content:
        "grid h-full grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16",
      title: "text-left",
      subtitle: "text-left",
    },
  };

  return (
    <header
      className={cn(
        baseStyles.header,
        heightStyles[height],
        position,
        className
      )}
      {...props}
    >
      {/* Background */}
      {backgroundImage && (
        <div
          className={baseStyles.background}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div
          className={baseStyles.overlay}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Navigation */}
      {navItems && (
        <Nav
          items={navItems}
          logo={logo}
          logoNavMenuMobile={logoNavMenuMobile}
          variant={backgroundImage ? "transparent" : "primary"}
          position={position}
          variantBoxMobile={variantBoxMobile}
          align="start"
        />
      )}

      {/* Content */}
      <div className={cn(baseStyles.content, variantStyles[variant].content)}>
        {title && (
          <h1
            className={cn(
              baseStyles.title,
              variantStyles[variant].title,
              backgroundImage ? "text-white" : "text-gray-900"
            )}
            style={{ color: backgroundImage ? "#fff" : theme.colors.text }}
          >
            {title}
          </h1>
        )}

        {subtitle && (
          <p
            className={cn(
              baseStyles.subtitle,
              variantStyles[variant].subtitle,
              backgroundImage ? "text-gray-200" : "text-gray-500"
            )}
          >
            {subtitle}
          </p>
        )}

        {cta && (
          <div className={baseStyles.cta.align[cta.align || "center"]}>
            <a
              href={cta.href}
              className={cn(
                "mt-8 inline-flex items-center rounded-md px-6 py-3 text-base font-medium shadow-sm",
                {
                  "bg-primary-500 text-white hover:bg-primary-600":
                    cta.variant === "primary",
                  "bg-white text-gray-900 hover:bg-gray-50":
                    cta.variant === "secondary",
                  "border-2 border-white text-white hover:bg-white/10":
                    cta.variant === "outline",
                }
              )}
            >
              {cta.label}
            </a>
          </div>
        )}

        {children}
      </div>
    </header>
  );
}
