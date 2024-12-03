import React, { useState } from "react";
import type { Theme } from "@ajk-ui/core";
import { ThemeContext } from "./theme-context";

interface ThemeProviderProps {
  initialTheme: Theme;
  children: React.ReactNode;
}

export function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="ajk-theme-root" style={createThemeStyles(theme)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function createThemeStyles(theme: Theme): React.CSSProperties {
  return {
    // Primary color variants
    "--primary-50": adjustColor(theme.colors.primary, 0.95),
    "--primary-100": adjustColor(theme.colors.primary, 0.9),
    "--primary-200": adjustColor(theme.colors.primary, 0.8),
    "--primary-300": adjustColor(theme.colors.primary, 0.7),
    "--primary-400": adjustColor(theme.colors.primary, 0.6),
    "--primary-500": theme.colors.primary,
    "--primary-600": adjustColor(theme.colors.primary, -0.1),
    "--primary-700": adjustColor(theme.colors.primary, -0.2),
    "--primary-800": adjustColor(theme.colors.primary, -0.3),
    "--primary-900": adjustColor(theme.colors.primary, -0.4),

    // Secondary color variants
    "--secondary-50": adjustColor(theme.colors.secondary, 0.95),
    "--secondary-100": adjustColor(theme.colors.secondary, 0.9),
    "--secondary-200": adjustColor(theme.colors.secondary, 0.8),
    "--secondary-300": adjustColor(theme.colors.secondary, 0.7),
    "--secondary-400": adjustColor(theme.colors.secondary, 0.6),
    "--secondary-500": theme.colors.secondary,
    "--secondary-600": adjustColor(theme.colors.secondary, -0.1),
    "--secondary-700": adjustColor(theme.colors.secondary, -0.2),
    "--secondary-800": adjustColor(theme.colors.secondary, -0.3),
    "--secondary-900": adjustColor(theme.colors.secondary, -0.4),

    // Base theme properties
    "--background-color": theme.colors.background,
    "--text-color": theme.colors.text,
    "--font-family": theme.typography.fontFamily,

    // Apply base styles
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
    fontFamily: theme.typography.fontFamily,
  } as React.CSSProperties;
}

// Helper function to adjust color lightness
function adjustColor(hex: string, amount: number): string {
  // Remove the hash if it exists
  hex = hex.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Convert RGB to HSL
  const hsl = rgbToHsl(r, g, b);

  // Adjust lightness
  let lightness = hsl[2];
  if (amount > 0) {
    // Lighten
    lightness = lightness + (1 - lightness) * amount;
  } else {
    // Darken
    lightness = lightness * (1 + amount);
  }

  // Convert back to RGB
  const rgb = hslToRgb(hsl[0], hsl[1], lightness);

  // Convert back to hex
  const toHex = (n: number) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return "#" + toHex(rgb[0]) + toHex(rgb[1]) + toHex(rgb[2]);
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
}
