import { createTheme } from '@ajk-ui/theme-utils'

export const ModernTech = createTheme({
  colors: {
    primary: '#4F46E5',
    secondary: '#fde68a',
    background: '#ffffff',
    text: '#111827',
    disabled: {
      background: '#d4d4d4',
      border: '#d4d4d4',
      text: '#a2a2a2',
    },
    primaryVariants: {
      active: '#3f36ec',
      dark: '#111827',
      default: '#4F46E5',
      hover: '#000',
      light: '#fff',
    },
    secondaryVariants: {
      light: '#fef9c3', // Versión más clara del secondary
      default: '#fde68a',
      dark: '#fcd34d',
      hover: '#fde047',
      active: '#facc15',
    },
    textVariants: {
      onPrimary: '#fff',
      dark: '#111827',
      light: 'white',
      muted: '#CCC',
      onSecondary: '#000',
    },
    border: {
      default: '#e5e7eb',
      hover: '#d1d5db',
      focus: '#4F46E5', // Usando el color primario
      active: '#3f36ec',
    },
    feedback: {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#4F46E5', // Usando el color primario
    },
    shadow: {
      light: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(0, 0, 0, 0.15)',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
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
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  transitions: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },
})
