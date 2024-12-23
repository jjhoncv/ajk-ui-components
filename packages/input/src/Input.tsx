import React, { forwardRef } from 'react'
import { LucideIcon } from 'lucide-react'
import { useTheme } from '@ajk-ui/theme-utils'
import { cn } from '@ajk-ui/core'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  iconSize?: number
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      error = false,
      className,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      iconSize,
      fullWidth = false,
      disabled,
      autoFocus,
      ...props
    },
    ref
  ) => {
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

      const baseStyles = {
        color: theme.colors.text,
        borderWidth: '1px',
        borderStyle: 'solid',
      }

      if (error) {
        return {
          ...baseStyles,
          borderColor: theme.colors.feedback.error,
          '&:focus': {
            borderColor: theme.colors.feedback.error,
            boxShadow: `0 0 0 2px ${theme.colors.feedback.error}20`,
          },
        }
      }

      switch (variant) {
        case 'filled':
          return {
            ...baseStyles,
            backgroundColor: theme.colors.background,
            borderColor: 'transparent',
            '&:hover': {
              backgroundColor: theme.colors.border.hover,
            },
            '&:focus': {
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
            },
          }
        default:
          return {
            ...baseStyles,
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.border.default,
            '&:hover': {
              borderColor: theme.colors.border.hover,
            },
            '&:focus': {
              borderColor: theme.colors.border.focus,
              boxShadow: `0 0 0 2px ${theme.colors.primary}20`,
            },
          }
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
      <div
        className={cn('relative inline-flex items-center', {
          'w-full': fullWidth,
        })}
      >
        {LeftIcon && <LeftIcon size={finalIconSize} className="absolute left-3 text-gray-400" />}
        <input
          ref={ref}
          autoFocus={autoFocus}
          className={cn(
            'w-full',
            'transition-all duration-200 ease-in-out',
            'focus:outline-none',
            {
              'pl-10': LeftIcon,
              'pr-10': RightIcon,
            },
            className
          )}
          style={{
            ...getVariantStyles(),
            fontFamily: theme.typography.fontFamily,
            // padding: sizeStyles.padding,
            fontSize: sizeStyles.fontSize,
            height: sizeStyles.height,
            borderRadius: theme.borderRadius.md,
            transition: theme.transitions.normal,
          }}
          disabled={disabled}
          {...props}
        />
        {RightIcon && <RightIcon size={finalIconSize} className="absolute right-3 text-gray-400" />}
      </div>
    )
  }
)

Input.displayName = 'Input'
