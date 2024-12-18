import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilidad para combinar clases de Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utilidad para validar temas
export function isValidTheme(theme: any): boolean {
  return (
    theme &&
    typeof theme === "object" &&
    "colors" in theme &&
    "typography" in theme &&
    "spacing" in theme &&
    "borderRadius" in theme
  );
}

// Utilidad para generar IDs únicos
export function generateId(prefix: string = "ajk"): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

// Utilidad para validar props de componentes
export function validateProps(
  props: Record<string, any>,
  requiredProps: string[]
): boolean {
  return requiredProps.every((prop) => prop in props);
}

// Utilidad para manejar media queries
export const mediaQueries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

// Utilidad para manejar espaciado consistente
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  // ... más valores según necesidad
};

// Utilidad para manejar colores con opacidad
export function withOpacity(color: string, opacity: number): string {
  // Asumiendo que color es un valor hex
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
}

// Utilidad para validar colores
export function isValidColor(color: string): boolean {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;
  const rgbaRegex = /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/;

  return hexRegex.test(color) || rgbRegex.test(color) || rgbaRegex.test(color);
}

export const formatPEN = (number: number) => {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(number);
};
