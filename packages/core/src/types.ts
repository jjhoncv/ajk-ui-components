import { ReactNode } from "react";

// Tipos comunes para props de componentes
export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

// Tipos para temas
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  [key: string]: string;
}

export interface ThemeFontSizes {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  [key: string]: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  [key: string]: string;
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
  [key: string]: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: ThemeFontSizes;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
}

// Tipos para variantes de componentes
export type ComponentVariant = "primary" | "secondary" | "outline";
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";

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
