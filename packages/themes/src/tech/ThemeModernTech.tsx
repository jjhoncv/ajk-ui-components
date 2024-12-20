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
      active: '#4F46E5',
      dark: '#111827',
      default: '#e8e8e8',
      hover: '#000',
      light: 'purple',
    },
    textVariants: {
      onPrimary: '#454545',
      dark: '#111827',
      light: 'white',
      muted: '#CCC',
      onSecondary: '#000',
    },
  },
})
