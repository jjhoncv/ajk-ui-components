import React from "react";
import { cn, type BaseProps } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface NavProps extends BaseProps {
  items: NavItem[];
  logo?: React.ReactNode;
  variant?: "primary" | "transparent" | "minimal";
  position?: "fixed" | "sticky" | "relative" | "absolute";
  align?: "start" | "center" | "end";
  mobileMenuBreakpoint?: "sm" | "md" | "lg";
}

export function Nav({
  items,
  logo,
  variant = "primary",
  position = "relative",
  align = "start",
  mobileMenuBreakpoint = "md",
  className,
  ...props
}: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  const baseStyles = {
    nav: "w-full px-4 py-2",
    container: "mx-auto flex items-center justify-between",
    logo: "flex items-center",
    menuButton: "block md:hidden",
    menuIcon: "h-6 w-6",
    menu: "hidden md:flex space-x-4",
    mobileMenu: "md:hidden",
    item: "text-sm font-medium transition-colors hover:text-primary",
  };

  const variantStyles = {
    primary: {
      nav: "bg-white border-b shadow-sm",
      item: "text-gray-600 hover:text-gray-900",
    },
    transparent: {
      nav: "bg-transparent",
      item: "text-gray-200 hover:text-white",
    },
    minimal: {
      nav: "bg-white",
      item: "text-gray-600 hover:text-gray-900",
    },
  };

  const positionStyles = {
    fixed: "fixed top-0 left-0 right-0 z-50",
    sticky: "sticky top-0 z-50",
    relative: "relative",
    absolute: "absolute top-0 left-0 right-0 z-50",
  };

  const alignStyles = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <nav
      className={cn(
        baseStyles.nav,
        variantStyles[variant].nav,
        positionStyles[position],
        className
      )}
      style={
        {
          "--nav-bg": theme.colors.background,
          "--nav-text": theme.colors.text,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className={baseStyles.container}>
        {logo && <div className={baseStyles.logo}>{logo}</div>}

        <button
          className={baseStyles.menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className={baseStyles.menuIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className={cn(baseStyles.menu, alignStyles[align])}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={cn(baseStyles.item, variantStyles[variant].item)}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </a>
          ))}
        </div>

        {isMobileMenuOpen && (
          <div className={baseStyles.mobileMenu}>
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "block py-2",
                  baseStyles.item,
                  variantStyles[variant].item
                )}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
