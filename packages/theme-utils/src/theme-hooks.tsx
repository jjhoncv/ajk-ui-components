import { useCallback } from "react";
import type {
  Theme,
  ThemeColors,
  ThemeFontSizes,
  ThemeSpacing,
  ThemeBorderRadius,
} from "@ajk-ui/core";
import { useThemeContext } from "./theme-context";

export function useTheme() {
  const { theme, setTheme } = useThemeContext();

  const updateTheme = useCallback(
    (updates: Partial<Theme>) => {
      setTheme({
        ...theme,
        ...updates,
      });
    },
    [theme, setTheme]
  );

  const updateColors = useCallback(
    (colorUpdates: Partial<ThemeColors>) => {
      setTheme({
        ...theme,
        colors: {
          ...theme.colors,
          ...colorUpdates,
        } as ThemeColors,
      });
    },
    [theme, setTheme]
  );

  const updateTypography = useCallback(
    (typographyUpdates: Partial<Theme["typography"]>) => {
      setTheme({
        ...theme,
        typography: {
          ...theme.typography,
          ...typographyUpdates,
        },
      });
    },
    [theme, setTheme]
  );

  const updateSpacing = useCallback(
    (spacingUpdates: Partial<ThemeSpacing>) => {
      setTheme({
        ...theme,
        spacing: {
          ...theme.spacing,
          ...spacingUpdates,
        } as ThemeSpacing,
      });
    },
    [theme, setTheme]
  );

  const updateBorderRadius = useCallback(
    (borderRadiusUpdates: Partial<ThemeBorderRadius>) => {
      setTheme({
        ...theme,
        borderRadius: {
          ...theme.borderRadius,
          ...borderRadiusUpdates,
        } as ThemeBorderRadius,
      });
    },
    [theme, setTheme]
  );

  return {
    theme,
    setTheme,
    updateTheme,
    updateColors,
    updateTypography,
    updateSpacing,
    updateBorderRadius,
  };
}

export function useThemeColor(colorKey: keyof ThemeColors) {
  const { theme } = useThemeContext();
  return theme.colors[colorKey];
}

export function useThemeTypography() {
  const { theme } = useThemeContext();
  return theme.typography;
}

export function useThemeSpacing() {
  const { theme } = useThemeContext();
  return theme.spacing;
}

export function useThemeBorderRadius() {
  const { theme } = useThemeContext();
  return theme.borderRadius;
}
