import { MiniCart } from "@ajk-ui/cart";
import { cn, type BaseProps } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";
import React, { useEffect, useRef, useState } from "react";
import { MenuMobile } from "./MenuMobile";
import { MiniAccount } from "@ajk-ui/account";

const useNavScroll = (navRef: React.RefObject<HTMLDivElement>) => {
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setHeight(navRef.current.offsetHeight);
      }
    };

    // Actualizar altura inicial
    updateHeight();

    // Actualizar altura en cambios de ventana
    window.addEventListener("resize", updateHeight);

    const handleScroll = () => {
      const shouldBeFixed = window.scrollY > height;
      setScrolled(shouldBeFixed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, [height, navRef]);

  return { scrolled, height };
};

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

  const navRef = useRef<HTMLDivElement>(null);
  const { scrolled, height } = useNavScroll(navRef);

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
      nav: cn("bg-white border-b"),
      item: "text-gray-600 hover:text-gray-900",
    },
    transparent: {
      nav: cn("bg-white"),
      item: "text-gray-600 hover:text-gray-900",
    },
    minimal: {
      nav: cn("bg-white"),
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
    <>
      {scrolled && <div style={{ height: `${height}px` }} />}

      <div
        ref={navRef}
        className={cn(
          "w-full",
          scrolled ? "fixed top-0 left-0 right-0 z-50 bg-white" : position
        )}
      >
        <nav
          className={cn(
            baseStyles.nav,
            variantStyles[variant].nav,
            className,
            "transition-all duration-50 ease-in-out"
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
            </div>
          </div>
        </nav>
        <div
          className={cn("flex bg-white w-full items-center h-full border-t", {
            "shadow-lg": scrolled,
          })}
        >
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
    </>
  );
}
