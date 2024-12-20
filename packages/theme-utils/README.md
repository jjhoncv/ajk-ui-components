# @ajk-ui/theme-utils

Theme system and providers for the AJK UI Components library.

## Installation

```bash
npm install @ajk-ui/theme-utils
# or
yarn add @ajk-ui/theme-utils
# or
pnpm add @ajk-ui/theme-utils
```

## Features

- Theme provider component
- Pre-built industry themes
- Theme creation utilities
- Theme hooks and context
- TypeScript support
- Dark mode support
- Theme customization

## Usage

### Basic Theme Provider

```tsx
import { ThemeProvider, themes } from '@ajk-ui/theme-utils'

function App() {
  return <ThemeProvider theme={themes.restaurant.modern}>{/* Your app content */}</ThemeProvider>
}
```

### Create Custom Theme

```tsx
import { createTheme } from '@ajk-ui/theme-utils'

const customTheme = createTheme({
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#ffffff',
    text: '#2C3E50',
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    headings: {
      fontFamily: 'Montserrat, sans-serif',
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
  },
})
```

## Available Themes

### Industry Themes

```typescript
import { themes } from '@ajk-ui/theme-utils'

// Restaurant Themes
themes.restaurant.modern
themes.restaurant.classic
themes.restaurant.vintage

// Barbershop Themes
themes.barbershop.modern
themes.barbershop.vintage
themes.barbershop.classic

// Boutique Themes
themes.boutique.modern
themes.boutique.elegant
themes.boutique.minimal
```

## Theme Hooks

### useTheme

```typescript
import { useTheme } from "@ajk-ui/theme-utils";

function MyComponent() {
  const theme = useTheme();

  return <div style={{ color: theme.colors.primary }}>Themed content</div>;
}
```

### useColorMode

```typescript
import { useColorMode } from "@ajk-ui/theme-utils";

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
```

## Theme Structure

```typescript
interface Theme {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    [key: string]: string
  }
  typography: {
    fontFamily: string
    headings?: {
      fontFamily?: string
    }
    sizes: {
      sm: string
      md: string
      lg: string
    }
  }
  spacing: {
    sm: string
    md: string
    lg: string
    [key: string]: string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
    [key: string]: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
    [key: string]: string
  }
}
```

## Theme Customization

### Extending Existing Themes

```typescript
import { extendTheme, themes } from '@ajk-ui/theme-utils'

const customRestaurantTheme = extendTheme(themes.restaurant.modern, {
  colors: {
    primary: '#custom-color',
    // Other overrides
  },
})
```

### Dark Mode Support

```typescript
const themWithDarkMode = createTheme({
  colors: {
    light: {
      background: '#ffffff',
      text: '#000000',
    },
    dark: {
      background: '#1a1a1a',
      text: '#ffffff',
    },
  },
})
```

## Version History

Current version: 1.1.1

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
