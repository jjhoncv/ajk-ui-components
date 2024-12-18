import { cn } from "@ajk-ui/core";
import { Sheet } from "@ajk-ui/sheet";
import React from "react";
import { BaseStyles, NavItem, NavProps } from "./Nav";

interface MenuMobileProps extends NavProps {
  baseStyles: BaseStyles;
  items: NavItem[];
}

export const MenuMobile = ({
  variantBoxMobile = "full",
  variant = "primary",
  logoNavMenuMobile: LogoNavMenuMobile = () => <>Logo Mobile</>,
  baseStyles,
  items,
}: MenuMobileProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const baseStylesMobile = {
    box: "md:invisible duration-300 transition-all shadow-2xl  translate-x-[-100%] w-[80%] fixed z-40 left-0 h-dvh top-0 px-4 py-2",
    bg: "bg-white",
    item: "text-gray-800",
    burger: "text-white",
    x: "text-gray-900",
    position: "fixed right-5 top-5",
  };

  const variantBoxMobileStyles = {
    full: {
      transparent: {
        box: "md:invisible translate-x-[-100%] w-[100%] fixed z-40 h-dvh top-0 border-b-0 border-t-0 border-l-0  px-4 py-2",
        bg: "bg-white",
        item: "text-gray-800",
        burger: "stroke-white",
        x: "stroke-white",
        position: "absolute right-0 top-0",
      },
      primary: {
        box: "md:invisible translate-x-[-100%] w-[100%] fixed z-40 h-dvh top-0 border-b-0 border-t-0 border-l-0  px-4 py-2",
        bg: "bg-white",
        item: "text-gray-800",
        burger: "stroke-gray-900",
        x: "stroke-white",
        position: "absolute right-0 top-0",
      },
      minimal: {
        box: "md:invisible translate-x-[-100%] w-[100%] fixed z-40 h-dvh top-0 border-b-0 border-t-0 border-l-0  px-4 py-2",
        bg: "bg-white",
        item: "text-gray-800",
        burger: "stroke-gray-800",
        x: "stroke-white",
        position: "absolute right-0 top-0",
      },
    },
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
              strokeWidth={1.5}
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
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    );
  };
  return (
    <>
      {ButtonCloseNav()}
      <Sheet
        onClose={() => {
          setIsMobileMenuOpen(false);
        }}
        isOpen={isMobileMenuOpen}
      >
        <div className="mt-2">
          <div className="relative">
            {LogoNavMenuMobile && (
              <div className={baseStyles.logo}>{<LogoNavMenuMobile />}</div>
            )}
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
      </Sheet>
    </>
  );
};
