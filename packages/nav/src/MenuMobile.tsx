import { cn } from "@ajk-ui/core";
import React from "react";

export const MenuMobile = ({
  baseStylesMobile,
  variantBoxMobileStyles,
  variantBoxMobile,
  variant,
  LogoNavMenuMobile,
  baseStyles,
  items,
}: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
    </>
  );
};