import { cn, type BaseProps } from '@ajk-ui/core'
import { useTheme } from '@ajk-ui/theme-utils'
import React from 'react'
import { MenuMobile } from './MenuMobile'

export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface BaseStyles {
  nav: string
  container: string
  logo: string
  menuButton: string
  menuIcon: string
  menu: string
  item: string
}

export interface NavProps extends BaseProps {
  items: NavItem[]
  logo?: () => JSX.Element
  logoNavMenuMobile?: () => JSX.Element
  variant?: 'primary' | 'transparent' | 'minimal'
  position?: 'fixed' | 'sticky' | 'relative' | 'absolute'
  container?: 'default' | 'order'
  align?: 'start' | 'center' | 'end'
  type?: 'ecommerce' | 'default'
  mobileMenuBreakpoint?: 'sm' | 'md' | 'lg'
  variantBoxMobile?: 'full'
}

export function Nav({
  items,
  logo: Logo = () => <>Logo</>,
  logoNavMenuMobile: LogoNavMenuMobile = () => <>Logo Mobile</>,
  variant = 'primary',
  position = 'relative',
  container = 'default',
  align = 'start',
  mobileMenuBreakpoint = 'md',
  className,
  variantBoxMobile = 'full',
  type = 'default',
  ...props
}: NavProps) {
  const { theme } = useTheme()

  const baseStyles: BaseStyles = {
    nav: 'w-full px-4 py-2 mt-2 mb-2',
    container: 'mx-auto flex justify-between items-center',
    logo: 'flex items-center',
    menuButton: 'block md:hidden',
    menuIcon: 'h-6 w-6',
    menu: 'hidden md:flex space-x-4',
    item: 'text-sm font-medium transition-colors hover:text-primary',
  }

  const containerStyles = {
    default: 'mx-auto flex justify-between items-center',
    order: 'mx-auto flex',
  }

  const variantStyles = {
    primary: {
      nav: 'bg-white border-b shadow-sm',
      item: 'text-gray-600 hover:text-gray-900',
    },
    transparent: {
      nav: 'bg-transparent',
      item: 'text-gray-200 hover:text-white',
    },
    minimal: {
      nav: 'bg-white',
      item: 'text-gray-600 hover:text-gray-900',
    },
  }

  const positionStyles = {
    fixed: 'fixed top-0 left-0 right-0 z-50',
    sticky: 'sticky top-0 z-50',
    relative: 'relative',
    absolute: 'absolute top-0 left-0 right-0 z-50',
  }

  const alignStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }

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
          '--nav-bg': theme.colors.background,
          '--nav-text': theme.colors.text,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className={cn(baseStyles.container, containerStyles[container])}>
        {Logo && (
          <div className={baseStyles.logo}>
            <Logo />
          </div>
        )}

        <MenuMobile
          {...{
            baseStyles,
            variantBoxMobile,
            variant,
            logoNavMenuMobile: LogoNavMenuMobile,
            items,
          }}
        />

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
    </nav>
  )
}
