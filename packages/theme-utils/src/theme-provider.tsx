import React, { useState } from 'react'
import type { Theme } from '@ajk-ui/core'
import { ThemeContext } from './theme-context'

interface ThemeProviderProps {
  initialTheme: Theme
  children: React.ReactNode
}

export function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="ajk-theme-root" style={createThemeStyles(theme)}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

function createThemeStyles(theme: Theme): React.CSSProperties {
  return {
    // Colores base
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-background': theme.colors.background,
    '--color-text': theme.colors.text,

    // Estados del color primario
    '--color-primary-light': theme.colors.primaryVariants.light,
    '--color-primary-default': theme.colors.primaryVariants.default,
    '--color-primary-hover': theme.colors.primaryVariants.hover,
    '--color-primary-active': theme.colors.primaryVariants.active,
    '--color-primary-dark': theme.colors.primaryVariants.dark,

    // Estados del color secundario
    '--color-secondary-light': theme.colors.secondaryVariants.light,
    '--color-secondary-default': theme.colors.secondaryVariants.default,
    '--color-secondary-hover': theme.colors.secondaryVariants.hover,
    '--color-secondary-active': theme.colors.secondaryVariants.active,
    '--color-secondary-dark': theme.colors.secondaryVariants.dark,

    // Variantes de texto
    '--color-text-light': theme.colors.textVariants.light,
    '--color-text-dark': theme.colors.textVariants.dark,
    '--color-text-muted': theme.colors.textVariants.muted,
    '--color-text-on-primary': theme.colors.textVariants.onPrimary,
    '--color-text-on-secondary': theme.colors.textVariants.onSecondary,

    // Estados deshabilitados
    '--color-disabled-background': theme.colors.disabled.background,
    '--color-disabled-text': theme.colors.disabled.text,
    '--color-disabled-border': theme.colors.disabled.border,

    // Sistema de bordes
    '--color-border-default': theme.colors.border.default,
    '--color-border-hover': theme.colors.border.hover,
    '--color-border-focus': theme.colors.border.focus,
    '--color-border-active': theme.colors.border.active,

    // Colores de feedback
    '--color-feedback-success': theme.colors.feedback.success,
    '--color-feedback-error': theme.colors.feedback.error,
    '--color-feedback-warning': theme.colors.feedback.warning,
    '--color-feedback-info': theme.colors.feedback.info,

    // Sistema de sombras
    '--color-shadow-light': theme.colors.shadow.light,
    '--color-shadow-medium': theme.colors.shadow.medium,
    '--color-shadow-dark': theme.colors.shadow.dark,

    // Tipografía completa
    '--font-family': theme.typography.fontFamily,
    '--font-size-xs': theme.typography.fontSize.xs,
    '--font-size-sm': theme.typography.fontSize.sm,
    '--font-size-base': theme.typography.fontSize.base,
    '--font-size-lg': theme.typography.fontSize.lg,
    '--font-size-xl': theme.typography.fontSize.xl,
    '--font-size-2xl': theme.typography.fontSize['2xl'],
    '--font-size-3xl': theme.typography.fontSize['3xl'],

    // Font weights
    '--font-weight-light': theme.typography.fontWeight.light,
    '--font-weight-normal': theme.typography.fontWeight.normal,
    '--font-weight-medium': theme.typography.fontWeight.medium,
    '--font-weight-semibold': theme.typography.fontWeight.semibold,
    '--font-weight-bold': theme.typography.fontWeight.bold,

    // Line heights
    '--line-height-none': theme.typography.lineHeight.none,
    '--line-height-tight': theme.typography.lineHeight.tight,
    '--line-height-normal': theme.typography.lineHeight.normal,
    '--line-height-relaxed': theme.typography.lineHeight.relaxed,
    '--line-height-loose': theme.typography.lineHeight.loose,

    // Espaciado completo
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-md': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,
    '--spacing-2xl': theme.spacing['2xl'],
    '--spacing-3xl': theme.spacing['3xl'],

    // Border Radius
    '--radius-none': theme.borderRadius.none,
    '--radius-sm': theme.borderRadius.sm,
    '--radius-md': theme.borderRadius.md,
    '--radius-lg': theme.borderRadius.lg,
    '--radius-full': theme.borderRadius.full,

    // Transiciones
    '--transition-fast': theme.transitions.fast,
    '--transition-normal': theme.transitions.normal,
    '--transition-slow': theme.transitions.slow,

    // Aplicar estilos base al root
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily,
  } as React.CSSProperties
}
