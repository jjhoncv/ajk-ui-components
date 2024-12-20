import { useCallback } from "react";
import type {
  Theme,
  ThemeColors,
  ThemeTypography,
  ThemeSpacing,
  ThemeBorderRadius,
  ComponentSize,
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
          primaryVariants: {
            ...theme.colors.primaryVariants,
            ...(colorUpdates.primaryVariants || {}),
          },
          secondaryVariants: {
            ...theme.colors.secondaryVariants,
            ...(colorUpdates.secondaryVariants || {}),
          },
          textVariants: {
            ...theme.colors.textVariants,
            ...(colorUpdates.textVariants || {}),
          },
          disabled: {
            ...theme.colors.disabled,
            ...(colorUpdates.disabled || {}),
          },
          border: {
            ...theme.colors.border,
            ...(colorUpdates.border || {}),
          },
          feedback: {
            ...theme.colors.feedback,
            ...(colorUpdates.feedback || {}),
          },
          shadow: {
            ...theme.colors.shadow,
            ...(colorUpdates.shadow || {}),
          },
        } as ThemeColors,
      });
    },
    [theme, setTheme]
  );

  const updateTypography = useCallback(
    (typographyUpdates: Partial<ThemeTypography>) => {
      setTheme({
        ...theme,
        typography: {
          ...theme.typography,
          ...typographyUpdates,
          fontSize: {
            ...theme.typography.fontSize,
            ...(typographyUpdates.fontSize || {}),
          },
          fontWeight: {
            ...theme.typography.fontWeight,
            ...(typographyUpdates.fontWeight || {}),
          },
          lineHeight: {
            ...theme.typography.lineHeight,
            ...(typographyUpdates.lineHeight || {}),
          },
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

export function useThemeVariants() {
  const { theme } = useThemeContext();
  return {
    primary: theme.colors.primaryVariants,
    secondary: theme.colors.secondaryVariants,
  };
}

export function useThemeTextVariants() {
  const { theme } = useThemeContext();
  return theme.colors.textVariants;
}

export function useThemeStates() {
  const { theme } = useThemeContext();
  return {
    disabled: theme.colors.disabled,
    border: theme.colors.border,
    feedback: theme.colors.feedback,
  };
}

export function useComponentStyles(
  variant: "primary" | "secondary" | "outline" | "ghost" | "link" = "primary",
  size: keyof Theme["typography"]["fontSize"] = "base"
) {
  const { theme } = useThemeContext();

  return {
    colors: {
      primary: theme.colors.primaryVariants,
      secondary: theme.colors.secondaryVariants,
      text: theme.colors.textVariants,
      disabled: theme.colors.disabled,
    },
    spacing: theme.spacing,
    typography: {
      fontSize: theme.typography.fontSize[size],
      fontWeight: theme.typography.fontWeight,
      lineHeight: theme.typography.lineHeight,
    },
    borderRadius: theme.borderRadius,
    transitions: theme.transitions,
  };
}
