# @ajk-ui/core

Core utilities and types for ajk-ui components library.

## Installation

```bash
npm install @ajk-ui/core
# or
yarn add @ajk-ui/core
# or
pnpm add @ajk-ui/core
```

## Usage

```tsx
import { cn, type BaseProps } from "@ajk-ui/core";

// Use utility functions
const className = cn("base-class", "conditional-class");

// Use types
interface MyComponentProps extends BaseProps {
  customProp: string;
}
```

## API Reference

### Utilities

- `cn`: Utility for merging class names with Tailwind CSS
- `generateId`: Generate unique IDs for components

### Types

- `BaseProps`: Base props interface for all components
- `Theme`: Theme configuration type
- `ThemeColors`: Theme colors configuration
- `ThemeTypography`: Typography configuration
