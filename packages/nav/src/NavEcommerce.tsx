import { cn, type BaseProps } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";
import React from "react";
import { ButtonCart, MiniCart } from "../../cart";
import { MenuMobile } from "./MenuMobile";

export interface NavItemEcommerce {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface NavEcommerceProps extends BaseProps {
  items: NavItemEcommerce[];
  logo?: () => JSX.Element;
  logoNavMenuMobile?: () => JSX.Element;
  variant?: "primary" | "transparent" | "minimal";
  position?: "fixed" | "sticky" | "relative" | "absolute";
  container?: "default" | "order";
  align?: "start" | "center" | "end";
  type?: "ecommerce" | "default";
  mobileMenuBreakpoint?: "sm" | "md" | "lg";
  variantBoxMobile?: "full";
}

export function NavEcommerce({
  items,
  logo: Logo = () => <>Logo</>,
  logoNavMenuMobile: LogoNavMenuMobile = () => <>Logo Mobile</>,
  variant = "primary",
  position = "relative",
  container = "default",
  align = "start",
  mobileMenuBreakpoint = "md",
  className,
  variantBoxMobile = "full",
  type = "default",
  ...props
}: NavEcommerceProps) {
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
    nav: "w-full px-4 py-2 mt-2 mb-2",
    container: "mx-auto flex justify-between items-center",
    logo: "flex items-center",
    menuButton: "block md:hidden",
    menuIcon: "h-6 w-6",
    menu: "hidden md:flex space-x-4 mt-3",
    item: "text-sm font-medium transition-colors hover:text-primary",
  };

  const containerStyles = {
    default: "mx-auto flex justify-between items-center",
    order: "mx-auto flex",
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

  const buttonCartStyles = {
    primary: "fill-gray-800",
    transparent: "fill-white",
    minimal: "fill-gray-800",
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
      <>
        <div className={cn(baseStyles.container, containerStyles[container])}>
          <MenuMobile
            {...{
              baseStyles,
              baseStylesMobile,
              variantBoxMobileStyles,
              variantBoxMobile,
              variant,
              LogoNavMenuMobile,
              items,
            }}
          />
          {Logo && (
            <div className={baseStyles.logo}>
              <Logo />
            </div>
          )}

          <div>
            <MiniCart className={cn(buttonCartStyles[variant])} />
          </div>
        </div>
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
      </>
    </nav>
  );
}
