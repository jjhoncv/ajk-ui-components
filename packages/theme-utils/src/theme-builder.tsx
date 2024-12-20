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
} from "@ajk-ui/core";

export interface ThemeBuilderConfig {
  colors?: Partial<ThemeColors>;
  typography?: Partial<ThemeTypography>;
  spacing?: Partial<ThemeSpacing>;
  borderRadius?: Partial<ThemeBorderRadius>;
}

// Valores por defecto para variantes de color
const defaultColorVariant: ColorVariant = {
  light: "#60a5fa",
  default: "#3b82f6",
  dark: "#2563eb",
  hover: "#4f46e5",
  active: "#4338ca",
};

const defaultDisabledState: DisabledState = {
  background: "#e5e7eb",
  text: "#9ca3af",
  border: "#d1d5db",
};

const defaultBorderColors: BorderColors = {
  default: "#e5e7eb",
  hover: "#d1d5db",
  focus: "#3b82f6",
  active: "#2563eb",
};

const defaultFeedbackColors: FeedbackColors = {
  success: "#10b981",
  error: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
};

const defaultTextVariants: TextVariants = {
  light: "#6b7280",
  dark: "#111827",
  muted: "#9ca3af",
  onPrimary: "#ffffff",
  onSecondary: "#1f2937",
};

// Colores por defecto
const defaultColors: ThemeColors = {
  primary: "#3b82f6",
  secondary: "#64748b",
  background: "#ffffff",
  text: "#1f2937",
  primaryVariants: defaultColorVariant,
  secondaryVariants: { ...defaultColorVariant, default: "#64748b" },
  textVariants: defaultTextVariants,
  disabled: defaultDisabledState,
  border: defaultBorderColors,
  feedback: defaultFeedbackColors,
  shadow: {
    light: "rgba(0, 0, 0, 0.05)",
    medium: "rgba(0, 0, 0, 0.1)",
    dark: "rgba(0, 0, 0, 0.15)",
  },
};

// Tema por defecto
const defaultTheme: Theme = {
  colors: defaultColors,
  typography: {
    fontFamily: "system-ui, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
      loose: "2",
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  transitions: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
  },
};

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
  };
}

function createTypography(
  typography: Partial<ThemeTypography> = {}
): ThemeTypography {
  return {
    fontFamily: typography.fontFamily || defaultTheme.typography.fontFamily,
    fontSize: {
      ...defaultTheme.typography.fontSize,
      ...(typography.fontSize || {}),
    },
    fontWeight: {
      ...defaultTheme.typography.fontWeight,
      ...(typography.fontWeight || {}),
    },
    lineHeight: {
      ...defaultTheme.typography.lineHeight,
      ...(typography.lineHeight || {}),
    },
  };
}

// Función principal de creación de tema
export function createTheme(config: ThemeBuilderConfig = {}): Theme {
  return {
    colors: createColors(config.colors),
    typography: createTypography(config.typography),
    spacing: {
      ...defaultTheme.spacing,
      ...(config.spacing || {}),
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      ...(config.borderRadius || {}),
    },
    transitions: defaultTheme.transitions,
  };
}

// Función para extender temas
export function extendTheme(
  baseTheme: Theme,
  extensions: ThemeBuilderConfig
): Theme {
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
  };
}

// Utilidades para generar variantes de color
export function generateColorVariants(baseColor: string) {
  return {
    light: adjustBrightness(baseColor, 20),
    dark: adjustBrightness(baseColor, -20),
    hover: adjustBrightness(baseColor, 10),
    active: adjustBrightness(baseColor, -10),
  };
}

// Función helper para ajustar el brillo de un color
function adjustBrightness(hex: string, percent: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const brightness =
    percent < 0 ? (100 + percent) / 100 : (100 + percent) / 100;

  const nr = Math.min(255, Math.round(r * brightness));
  const ng = Math.min(255, Math.round(g * brightness));
  const nb = Math.min(255, Math.round(b * brightness));

  return (
    "#" +
    nr.toString(16).padStart(2, "0") +
    ng.toString(16).padStart(2, "0") +
    nb.toString(16).padStart(2, "0")
  );
}

// Temas predefinidos por industria
export const themes = {
  restaurant: {
    modern: createTheme({
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        background: "#ffffff",
        text: "#2C3E50",
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
      },
    }),
    classic: createTheme({
      colors: {
        primary: "#8B4513",
        secondary: "#CD853F",
        background: "#FFF8DC",
        text: "#2F4F4F",
      },
      typography: {
        fontFamily: "Playfair Display, serif",
      },
    }),
  },
  barbershop: {
    vintage: createTheme({
      colors: {
        primary: "#2C3E50",
        secondary: "#BDC3C7",
        background: "#ECF0F1",
        text: "#314a63",
      },
      typography: {
        fontFamily: "Oswald, sans-serif",
      },
    }),
    modern: createTheme({
      colors: {
        primary: "#1A1A1A",
        secondary: "#E74C3C",
        background: "#FFFFFF",
        text: "#333333",
      },
      typography: {
        fontFamily: "Montserrat, sans-serif",
      },
    }),
  },
  ecommerce: {
    modern: createTheme({
      colors: {
        primary: "#4F46E5",
        secondary: "#fde68a",
        background: "#F9FAFB",
        text: "#111827",
      },
      typography: {
        fontFamily: "Inter, system-ui, sans-serif",
      },
    }),
  },
  business: {
    corporate: createTheme({
      colors: {
        primary: "#0F172A",
        secondary: "#64748B",
        background: "#FFFFFF",
        text: "#1E293B",
      },
      typography: {
        fontFamily: "Inter, system-ui, sans-serif",
      },
    }),
  },
  gym: {
    energetic: createTheme({
      colors: {
        primary: "#EF4444",
        secondary: "#10B981",
        background: "#F9FAFB",
        text: "#111827",
      },
      typography: {
        fontFamily: "Roboto, sans-serif",
      },
    }),
  },
};
