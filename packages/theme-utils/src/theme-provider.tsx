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
    '--color-primary-hover': theme.colors.primaryVariants.hover,
    '--color-primary-active': theme.colors.primaryVariants.active,
    '--color-primary-dark': theme.colors.primaryVariants.dark,

    // Estados del color secundario
    '--color-secondary-light': theme.colors.secondaryVariants.light,
    '--color-secondary-hover': theme.colors.secondaryVariants.hover,
    '--color-secondary-active': theme.colors.secondaryVariants.active,
    '--color-secondary-dark': theme.colors.secondaryVariants.dark,

    // Tipografía
    '--font-family': theme.typography.fontFamily,
    '--font-size-xs': theme.typography.fontSize.xs,
    '--font-size-sm': theme.typography.fontSize.sm,
    '--font-size-base': theme.typography.fontSize.base,
    '--font-size-lg': theme.typography.fontSize.lg,
    '--font-size-xl': theme.typography.fontSize.xl,

    // Espaciado
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-md': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,

    // Border Radius
    '--radius-sm': theme.borderRadius.sm,
    '--radius-md': theme.borderRadius.md,
    '--radius-lg': theme.borderRadius.lg,
    '--radius-full': theme.borderRadius.full,

    // Aplicar estilos base al root
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily,
  } as React.CSSProperties
}
