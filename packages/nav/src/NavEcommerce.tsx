import { MiniCart } from "@ajk-ui/cart";
import { cn, type BaseProps } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";
import React from "react";
import { MenuMobile } from "./MenuMobile";
import { MiniAccount } from "@ajk-ui/account";

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
  const { theme } = useTheme();

  const baseStyles = {
    nav: "w-full py-2",
    container: "mx-auto flex justify-between items-center",
    logo: "flex items-center",
    menuButton: "block md:hidden",
    menuIcon: "h-6 w-6",
    menu: "hidden md:flex space-x-4 h-[60px] items-center",
    item: "text-sm font-medium transition-colors hover:text-primary",
  };

  const containerStyles = {
    default: "mx-auto flex justify-between items-center",
    order: "mx-auto flex",
  };

  const variantStyles = {
    primary: {
      nav: "bg-white border-b shadow-sm",
      item: "text-gray-600 hover:text-gray-900",
    },
    transparent: {
      nav: "bg-transparent",
      item: "text-gray-600 hover:text-gray-900",
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
    transparent: "fill-gray-800",
    minimal: "fill-gray-800",
  };

  return (
    <div className="w-full">
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
        <div className="w-full flex justify-between items-center">
          <div>
            <div
              className={cn(baseStyles.container, containerStyles[container])}
            >
              <MenuMobile
                {...{
                  baseStyles,
                  variantBoxMobile,
                  variant,
                  logoNavMenuMobile: LogoNavMenuMobile,
                  items,
                }}
              />
              {Logo && (
                <div className={cn(`ml-3 md:ml-0`, baseStyles.logo)}>
                  <Logo />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <MiniCart
              openWhenProductIsAddedToCart={true}
              className={cn(buttonCartStyles[variant])}
            />
            <MiniAccount />
            {/* <MiniAccount /> */}
          </div>
        </div>
      </nav>
      <div className="flex w-full items-center h-full border-t">
        <div className="w-full mx-auto px-4 sm:px-6 max-w-7xl h-full flex items-center">
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
        </div>
      </div>
    </div>
  );
}
