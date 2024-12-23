import { Theme } from '@ajk-ui/core'

export const BaseTheme: Theme = {
  colors: {
    // Colores base neutros pero versátiles
    primary: '#3b82f6', // Azul accesible y versátil
    secondary: '#64748b', // Gris slate neutro
    background: '#ffffff',
    text: '#1f2937',

    // Variantes del primario balanceadas
    primaryVariants: {
      light: '#60a5fa',
      default: '#3b82f6',
      dark: '#2563eb',
      hover: '#4f46e5',
      active: '#4338ca',
    },

    // Variantes del secundario más neutras
    secondaryVariants: {
      light: '#94a3b8',
      default: '#64748b',
      dark: '#475569',
      hover: '#475569',
      active: '#334155',
    },

    // Variantes de texto para buena legibilidad
    textVariants: {
      onPrimary: '#ffffff',
      dark: '#111827',
      light: '#f9fafb',
      muted: '#9ca3af',
      onSecondary: '#f9fafb',
    },

    // Estados deshabilitados sutiles
    disabled: {
      background: '#e5e7eb',
      text: '#9ca3af',
      border: '#d1d5db',
    },

    // Sistema de bordes neutro
    border: {
      default: '#e5e7eb',
      hover: '#d1d5db',
      focus: '#3b82f6',
      active: '#2563eb',
    },

    // Colores de feedback estándar
    feedback: {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    },

    // Sistema de sombras sutil
    shadow: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(0, 0, 0, 0.15)',
    },
  },

  // Sistema tipográfico versátil
  typography: {
    fontFamily: 'system-ui, sans-serif',
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    },
  },

  // Sistema de espaciado escalable
  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    '2xl': '4rem', // 64px
    '3xl': '6rem', // 96px
  },

  // Bordes redondeados consistentes
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    full: '9999px',
  },

  // Transiciones suaves
  transitions: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },
}
