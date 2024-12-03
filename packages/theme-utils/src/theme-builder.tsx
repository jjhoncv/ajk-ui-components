import type {
  Theme,
  ThemeColors,
  ThemeFontSizes,
  ThemeSpacing,
  ThemeBorderRadius,
  ThemeTypography,
} from "@ajk-ui/core";

export interface ThemeBuilderConfig {
  colors?: Partial<ThemeColors>;
  typography?: Partial<ThemeTypography>;
  spacing?: Partial<ThemeSpacing>;
  borderRadius?: Partial<ThemeBorderRadius>;
}

const defaultColors: ThemeColors = {
  primary: "#3b82f6",
  secondary: "#64748b",
  background: "#ffffff",
  text: "#1f2937",
};

const defaultFontSizes: ThemeFontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
};

const defaultSpacing: ThemeSpacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
};

const defaultBorderRadius: ThemeBorderRadius = {
  none: "0",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px",
};

const defaultTheme: Theme = {
  colors: defaultColors,
  typography: {
    fontFamily: "system-ui, sans-serif",
    fontSize: defaultFontSizes,
  },
  spacing: defaultSpacing,
  borderRadius: defaultBorderRadius,
};

function createColors(colors: Partial<ThemeColors> = {}): ThemeColors {
  return {
    ...defaultColors,
    ...colors,
  } as ThemeColors;
}

function createTypography(
  typography: Partial<ThemeTypography> = {}
): ThemeTypography {
  return {
    fontFamily: typography.fontFamily || defaultTheme.typography.fontFamily,
    fontSize: {
      ...defaultFontSizes,
      ...(typography.fontSize || {}),
    },
  };
}

function createSpacing(spacing: Partial<ThemeSpacing> = {}): ThemeSpacing {
  return {
    ...defaultSpacing,
    ...spacing,
  } as ThemeSpacing;
}

function createBorderRadius(
  borderRadius: Partial<ThemeBorderRadius> = {}
): ThemeBorderRadius {
  return {
    ...defaultBorderRadius,
    ...borderRadius,
  } as ThemeBorderRadius;
}

export function createTheme(config: ThemeBuilderConfig = {}): Theme {
  return {
    colors: createColors(config.colors),
    typography: createTypography(config.typography),
    spacing: createSpacing(config.spacing),
    borderRadius: createBorderRadius(config.borderRadius),
  };
}

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
    spacing: createSpacing({ ...baseTheme.spacing, ...extensions.spacing }),
    borderRadius: createBorderRadius({
      ...baseTheme.borderRadius,
      ...extensions.borderRadius,
    }),
  };
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
};

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
  // Convertir hex a RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Ajustar brillo
  const brightness =
    percent < 0 ? (100 + percent) / 100 : (100 + percent) / 100;

  // Calcular nuevos valores
  const nr = Math.min(255, Math.round(r * brightness));
  const ng = Math.min(255, Math.round(g * brightness));
  const nb = Math.min(255, Math.round(b * brightness));

  // Convertir de vuelta a hex
  const newHex =
    "#" +
    nr.toString(16).padStart(2, "0") +
    ng.toString(16).padStart(2, "0") +
    nb.toString(16).padStart(2, "0");

  return newHex;
}
