import type {
  Theme,
  ThemeColors,
  ThemeTypography,
  ThemeSpacing,
  ThemeBorderRadius,
  ColorVariant,
  DisabledState,
  BorderColors,
  FeedbackColors,
  TextVariants,
  ThemeTransitions,
} from '@ajk-ui/core'

// Tema por defecto
import { BaseTheme } from './base/BaseTheme'

export interface ThemeBuilderConfig {
  colors?: Partial<ThemeColors>
  typography?: Partial<ThemeTypography>
  spacing?: Partial<ThemeSpacing>
  borderRadius?: Partial<ThemeBorderRadius>
  transitions?: Partial<ThemeTransitions> // Nueva propiedad
}

// Valores por defecto para variantes de color
const defaultColorVariant: ColorVariant = BaseTheme.colors.primaryVariants

const defaultDisabledState: DisabledState = BaseTheme.colors.disabled

const defaultBorderColors: BorderColors = BaseTheme.colors.border

const defaultFeedbackColors: FeedbackColors = BaseTheme.colors.feedback

const defaultTextVariants: TextVariants = BaseTheme.colors.textVariants

// Colores por defecto
const defaultColors: ThemeColors = BaseTheme.colors

// Funciones de creación
function createColors(colors: Partial<ThemeColors> = {}): ThemeColors {
  return {
    ...defaultColors,
    ...colors,
    primaryVariants: {
      ...defaultColorVariant,
      ...(colors.primaryVariants || {}),
    },
    secondaryVariants: {
      ...defaultColorVariant,
      default: colors.secondary || defaultColors.secondary,
      ...(colors.secondaryVariants || {}),
    },
    textVariants: {
      ...defaultTextVariants,
      ...(colors.textVariants || {}),
    },
    disabled: {
      ...defaultDisabledState,
      ...(colors.disabled || {}),
    },
    border: {
      ...defaultBorderColors,
      ...(colors.border || {}),
    },
    feedback: {
      ...defaultFeedbackColors,
      ...(colors.feedback || {}),
    },
  }
}

function createTypography(typography: Partial<ThemeTypography> = {}): ThemeTypography {
  return {
    fontFamily: typography.fontFamily || BaseTheme.typography.fontFamily,
    fontSize: {
      ...BaseTheme.typography.fontSize,
      ...(typography.fontSize || {}),
    },
    fontWeight: {
      ...BaseTheme.typography.fontWeight,
      ...(typography.fontWeight || {}),
    },
    lineHeight: {
      ...BaseTheme.typography.lineHeight,
      ...(typography.lineHeight || {}),
    },
  }
}

// Función principal de creación de tema
export function createTheme(config: ThemeBuilderConfig = {}): Theme {
  return {
    colors: createColors(config.colors),
    typography: createTypography(config.typography),
    spacing: {
      ...BaseTheme.spacing,
      ...(config.spacing || {}),
    },
    borderRadius: {
      ...BaseTheme.borderRadius,
      ...(config.borderRadius || {}),
    },
    transitions: {
      ...BaseTheme.transitions,
      ...(config.transitions || {}),
    },
  }
}

// Función para extender temas
export function extendTheme(baseTheme: Theme, extensions: ThemeBuilderConfig): Theme {
  return {
    colors: createColors({ ...baseTheme.colors, ...extensions.colors }),
    typography: createTypography({
      ...baseTheme.typography,
      ...extensions.typography,
    }),
    spacing: {
      ...baseTheme.spacing,
      ...(extensions.spacing || {}),
    },
    borderRadius: {
      ...baseTheme.borderRadius,
      ...(extensions.borderRadius || {}),
    },
    transitions: baseTheme.transitions,
  }
}

// Utilidades para generar variantes de color
export function generateColorVariants(baseColor: string) {
  return {
    light: adjustBrightness(baseColor, 20),
    dark: adjustBrightness(baseColor, -20),
    hover: adjustBrightness(baseColor, 10),
    active: adjustBrightness(baseColor, -10),
  }
}

// Función helper para ajustar el brillo de un color
function adjustBrightness(hex: string, percent: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  const brightness = percent < 0 ? (100 + percent) / 100 : (100 + percent) / 100

  const nr = Math.min(255, Math.round(r * brightness))
  const ng = Math.min(255, Math.round(g * brightness))
  const nb = Math.min(255, Math.round(b * brightness))

  return (
    '#' +
    nr.toString(16).padStart(2, '0') +
    ng.toString(16).padStart(2, '0') +
    nb.toString(16).padStart(2, '0')
  )
}

// Temas predefinidos por industria
export const themes = {
  restaurant: {
    modern: createTheme({
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        background: '#ffffff',
        text: '#2C3E50',
      },
      typography: {
        fontFamily: 'Poppins, sans-serif',
      },
    }),
    classic: createTheme({
      colors: {
        primary: '#8B4513',
        secondary: '#CD853F',
        background: '#FFF8DC',
        text: '#2F4F4F',
      },
      typography: {
        fontFamily: 'Playfair Display, serif',
      },
    }),
  },
  barbershop: {
    vintage: createTheme({
      colors: {
        primary: '#2C3E50',
        secondary: '#BDC3C7',
        background: '#ECF0F1',
        text: '#314a63',
      },
      typography: {
        fontFamily: 'Oswald, sans-serif',
      },
    }),
    modern: createTheme({
      colors: {
        primary: '#1A1A1A',
        secondary: '#E74C3C',
        background: '#FFFFFF',
        text: '#333333',
      },
      typography: {
        fontFamily: 'Montserrat, sans-serif',
      },
    }),
  },
  ecommerce: {
    modern: createTheme({
      colors: {
        primary: '#4F46E5',
        secondary: '#fde68a',
        background: '#F9FAFB',
        text: '#111827',
      },
      typography: {
        fontFamily: 'Inter, system-ui, sans-serif',
      },
    }),
  },
  business: {
    corporate: createTheme({
      colors: {
        primary: '#0F172A',
        secondary: '#64748B',
        background: '#FFFFFF',
        text: '#1E293B',
      },
      typography: {
        fontFamily: 'Inter, system-ui, sans-serif',
      },
    }),
  },
  gym: {
    energetic: createTheme({
      colors: {
        primary: '#EF4444',
        secondary: '#10B981',
        background: '#F9FAFB',
        text: '#111827',
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
      },
    }),
  },
}
