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
    "--ajk-primary-color": theme.colors.primary,
    "--ajk-secondary-color": theme.colors.secondary,
    "--ajk-background-color": theme.colors.background,
    "--ajk-text-color": theme.colors.text,
    "--ajk-font-family": theme.typography.fontFamily,
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
    fontFamily: theme.typography.fontFamily,
  } as React.CSSProperties;
}
