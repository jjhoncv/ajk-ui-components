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
  logo?: () => JSX.Element;
  logoNavMenuMobile?: () => JSX.Element;
  variant?: "primary" | "transparent" | "minimal";
  position?: "fixed" | "sticky" | "relative" | "absolute";
  align?: "start" | "center" | "end";
  mobileMenuBreakpoint?: "sm" | "md" | "lg";
  variantBoxMobile?: "full";
}

export function Nav({
  items,
  logo: Logo = () => <>Logo</>,
  logoNavMenuMobile: LogoNavMenuMobile = () => <>Logo Mobile</>,
  variant = "primary",
  position = "relative",
  align = "start",
  mobileMenuBreakpoint = "md",
  className,
  variantBoxMobile = "full",

  ...props
}: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  const baseStylesMobile = {
    box: "md:invisible duration-300 transition-all shadow-2xl  translate-x-[-100%] w-[80%] fixed z-40 left-0 h-dvh top-0 px-4 py-2",
    bg: "bg-white",
    item: "text-gray-800",
    burger: "text-white",
    x: "text-gray-900",
    position: "fixed right-5 top-5",
  };

  const baseStyles = {
    nav: "w-full px-4 py-2 mt-2",
    container: "mx-auto flex justify-between",
    logo: "flex items-center",
    menuButton: "block md:hidden",
    menuIcon: "h-6 w-6",
    menu: "hidden md:flex space-x-4",
    item: "text-sm font-medium transition-colors hover:text-primary",
  };

  const variantBoxMobileStyles = {
    full: {
      transparent: {
        box: "md:invisible translate-x-[-100%] w-[80%] fixed z-40 h-dvh top-0 border-b-0 border-t-0 border-l-0  px-4 py-2",
        bg: "bg-white",
        item: "text-gray-800",
        burger: "stroke-white",
        x: "stroke-white",
        position: "absolute right-0 top-0",
      },
      primary: {
        box: "md:invisible translate-x-[-100%] w-[80%] fixed z-40 h-dvh top-0 border-b-0 border-t-0 border-l-0  px-4 py-2",
        bg: "bg-white",
        item: "text-gray-800",
        burger: "stroke-gray-900",
        x: "stroke-white",
        position: "absolute right-0 top-0",
      },
      minimal: {
        box: "md:invisible translate-x-[-100%] w-[80%] fixed z-40 h-dvh top-0 border-b-0 border-t-0 border-l-0  px-4 py-2",
        bg: "bg-white",
        item: "text-gray-800",
        burger: "stroke-gray-800",
        x: "stroke-white",
        position: "absolute right-0 top-0",
      },
    },
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

  const ButtonCloseNav = (classNames?: string) => {
    return (
      <button
        className={cn(baseStyles.menuButton, classNames)}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        <svg
          className={cn(baseStyles.menuIcon, "w-8 h-8")}
          fill="none"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              className={cn(
                baseStyles.nav,
                variantBoxMobileStyles[variantBoxMobile][variant].x
              )}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              className={cn(
                baseStyles.nav,
                variantBoxMobileStyles[variantBoxMobile][variant].burger
              )}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    );
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
        {Logo && (
          <div className={baseStyles.logo}>
            <Logo />
          </div>
        )}

        {ButtonCloseNav()}

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
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed opacity-10 w-full h-dvh top-0 right-0 left-0 bottom-0 z-20"
          />
        )}

        <div
          className={cn(
            baseStylesMobile.box,
            baseStylesMobile.bg,
            variantBoxMobileStyles[variantBoxMobile][variant].box,
            variantBoxMobileStyles[variantBoxMobile][variant].bg,
            isMobileMenuOpen ? "translate-x-[0%] transition-all" : ""
          )}
        >
          <div className="mt-2">
            <div className="relative">
              {LogoNavMenuMobile && (
                <div className={baseStyles.logo}>{<LogoNavMenuMobile />}</div>
              )}
              {/* {ButtonCloseNav(
                cn(
                  baseStylesMobile.position,
                  variantBoxMobileStyles[variantBoxMobile][variant].position
                )
              )} */}
            </div>

            <div className="mt-2">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "block py-2",
                    baseStylesMobile.item,
                    variantBoxMobileStyles[variantBoxMobile][variant].item
                  )}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
