import { useTheme } from '@ajk-ui/theme-utils'
import { cn } from './utils'
import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  iconSize?: number
  fullWidth?: boolean
  active?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  active = false,
  className,
  children,
  disabled,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconSize,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const { theme } = useTheme()

  const getVariantStyles = () => {
    if (disabled) {
      return {
        backgroundColor: theme.colors.disabled.background,
        color: theme.colors.disabled.text,
        borderColor: theme.colors.disabled.border,
        cursor: 'not-allowed',
      }
    }

    if (active) {
      return {
        backgroundColor: theme.colors.primaryVariants.active,
        color: theme.colors.textVariants.light,
      }
    }

    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primaryVariants.default,
          color: theme.colors.textVariants.onPrimary,
          border: 'none',
          '&:hover': {
            backgroundColor: theme.colors.primaryVariants.hover,
          },
          '&:active': {
            backgroundColor: theme.colors.primaryVariants.active,
          },
        }
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondaryVariants.default,
          color: theme.colors.textVariants.onSecondary,
          border: 'none',
          '&:hover': {
            backgroundColor: theme.colors.secondaryVariants.hover,
          },
          '&:active': {
            backgroundColor: theme.colors.secondaryVariants.active,
          },
        }
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          border: `2px solid ${theme.colors.border.default}`,
          '&:hover': {
            borderColor: theme.colors.border.hover,
            backgroundColor: theme.colors.primaryVariants.light,
          },
          '&:active': {
            borderColor: theme.colors.border.active,
          },
        }
      default:
        return {}
    }
  }

  const getSizeStyles = () => {
    const sizes = {
      sm: {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: theme.typography.fontSize.sm,
        height: '2rem',
        iconSize: 16,
      },
      md: {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.base,
        height: '2.5rem',
        iconSize: 20,
      },
      lg: {
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        fontSize: theme.typography.fontSize.lg,
        height: '3rem',
        iconSize: 24,
      },
    }

    return sizes[size]
  }

  const sizeStyles = getSizeStyles()
  const finalIconSize = iconSize || sizeStyles.iconSize

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center',
        'font-medium',
        'rounded-md',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'focus:ring-primary': variant === 'primary',
          'focus:ring-secondary': variant === 'secondary',
          'w-full': fullWidth,
          'opacity-70': disabled,
        },
        className
      )}
      style={{
        ...getVariantStyles(),
        fontFamily: theme.typography.fontFamily,
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        height: sizeStyles.height,
        gap: theme.spacing.xs,
        borderRadius: theme.borderRadius.md,
        transition: theme.transitions.normal,
      }}
      disabled={disabled}
      {...props}
    >
      {LeftIcon && <LeftIcon size={finalIconSize} className="flex-shrink-0" />}
      {children}
      {RightIcon && <RightIcon size={finalIconSize} className="flex-shrink-0" />}
    </button>
  )
}
