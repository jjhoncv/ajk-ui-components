# @ajk-ui/theme-utils

Theme system utilities and providers for ajk-ui components library.

## Installation

```bash
npm install @ajk-ui/theme-utils
# or
yarn add @ajk-ui/theme-utils
# or
pnpm add @ajk-ui/theme-utils
```

## Usage

```tsx
import { ThemeProvider, useTheme, themes } from "@ajk-ui/theme-utils";

// Wrap your app with ThemeProvider
function App() {
  return (
    <ThemeProvider initialTheme={themes.restaurant.modern}>
      <YourApp />
    </ThemeProvider>
  );
}

// Use theme in components
function MyComponent() {
  const { theme, setTheme } = useTheme();
  return <div style={{ color: theme.colors.primary }}>Themed content</div>;
}
```

## Available Themes

### Restaurant Industry

- Modern: Clean and vibrant design
- Classic: Traditional and elegant style

### Barbershop Industry

- Vintage: Retro and classic barbershop style
- Modern: Contemporary and minimalist design

## Theme Builder

Create custom themes using the theme builder:

```tsx
import { createTheme } from "@ajk-ui/theme-utils";

const customTheme = createTheme({
  colors: {
    primary: "#FF6B6B",
    secondary: "#4ECDC4",
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
```

## API Reference

### Components

- `ThemeProvider`: Context provider for theme
- `useTheme`: Hook to access and modify current theme

### Utilities

- `createTheme`: Create custom themes
- `extendTheme`: Extend existing themes
- `generateColorVariants`: Generate color variants for a base color
