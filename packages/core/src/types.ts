import { ReactNode } from "react";

// Tipos comunes para props de componentes
export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

// Tipos básicos para el tema
export interface ColorVariant {
  light: string;
  default: string;
  dark: string;
  hover: string;
  active: string;
}

export interface DisabledState {
  background: string;
  text: string;
  border: string;
}

export interface BorderColors {
  default: string;
  hover: string;
  focus: string;
  active: string;
}

export interface FeedbackColors {
  success: string;
  error: string;
  warning: string;
  info: string;
}

export interface TextVariants {
  light: string;
  dark: string;
  muted: string;
  onPrimary: string;
  onSecondary: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  primaryVariants: ColorVariant;
  secondaryVariants: ColorVariant;
  textVariants: TextVariants;
  disabled: DisabledState;
  border: BorderColors;
  feedback: FeedbackColors;
  shadow: {
    light: string;
    medium: string;
    dark: string;
  };
}

export interface ThemeFontSizes {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  [key: string]: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: ThemeFontSizes;
  fontWeight: {
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    none: string;
    tight: string;
    normal: string;
    relaxed: string;
    loose: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
}

// Tipos para variantes de componentes
export type ComponentVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ComponentState =
  | "default"
  | "hover"
  | "active"
  | "disabled"
  | "loading";

// Tipos para layouts
export interface LayoutProps extends BaseProps {
  theme?: Theme;
}

// Tipos para industrias soportadas
export type Industry =
  | "restaurant"
  | "barbershop"
  | "gym"
  | "business"
  | "ecommerce";

// Tipos de utilidad para estilos de componentes
export interface StateStyles {
  default: React.CSSProperties;
  hover?: React.CSSProperties;
  active?: React.CSSProperties;
  disabled?: React.CSSProperties;
  loading?: React.CSSProperties;
}

export interface VariantStyles {
  primary: StateStyles;
  secondary: StateStyles;
  outline: StateStyles;
  ghost: StateStyles;
  link: StateStyles;
}

export interface SizeStyles {
  xs: React.CSSProperties;
  sm: React.CSSProperties;
  md: React.CSSProperties;
  lg: React.CSSProperties;
  xl: React.CSSProperties;
}
