# @ajk-ui/core

Core utilities and types for the AJK UI Components library.

## Installation

```bash
npm install @ajk-ui/core
# or
yarn add @ajk-ui/core
# or
pnpm add @ajk-ui/core
```

## Features

- Core utility functions
- Common TypeScript types and interfaces
- Base theme types
- Shared constants
- Helper functions for styling and class management

## Usage

### Types

```typescript
import { BaseProps, ThemeVariant, Size } from "@ajk-ui/core";

// Component props interface
interface MyComponentProps extends BaseProps {
  variant?: ThemeVariant;
  size?: Size;
}
```

### Utilities

```typescript
import { mergeClasses, createStyles } from "@ajk-ui/core";

// Merge CSS classes
const className = mergeClasses(
  "base-class",
  variant && `variant-${variant}`,
  size && `size-${size}`,
  customClass
);

// Create dynamic styles
const styles = createStyles({
  color: theme.colors.primary,
  padding: theme.spacing.md,
});
```

## Available Exports

### Types

```typescript
// Base Props
interface BaseProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

// Theme Types
type ThemeVariant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";
type ColorScheme = "light" | "dark";

// Component Types
interface StyleProps {
  className?: string;
  style?: CSSProperties;
}
```

### Utilities

```typescript
// Class Management
function mergeClasses(...classes: (string | undefined | null)[]): string;

// Style Utilities
function createStyles(styles: CSSProperties): CSSProperties;
function getThemeValue(theme: Theme, path: string): any;

// Type Guards
function isValidColor(color: string): boolean;
function isValidSize(size: string): size is Size;
```

## Integration with Theme System

The core package works seamlessly with `@ajk-ui/theme-utils`:

```typescript
import { useTheme } from "@ajk-ui/theme-utils";
import { getThemeValue } from "@ajk-ui/core";

function MyComponent() {
  const theme = useTheme();
  const primaryColor = getThemeValue(theme, "colors.primary");

  return <div style={{ color: primaryColor }}>Themed Content</div>;
}
```

## Version History

Current version: 0.2.0

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
