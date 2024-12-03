# @ajk-ui/button

Button component for ajk-ui components library.

## Installation

```bash
npm install @ajk-ui/button
# or
yarn add @ajk-ui/button
# or
pnpm add @ajk-ui/button
```

## Usage

```tsx
import { Button } from "@ajk-ui/button";

function MyComponent() {
  return (
    <>
      {/* Basic usage */}
      <Button>Click me</Button>

      {/* Variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>

      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>

      {/* With icon */}
      <Button>
        <Icon /> Button with Icon
      </Button>
    </>
  );
}
```

## Props

| Prop      | Type                                  | Default   | Description            |
| --------- | ------------------------------------- | --------- | ---------------------- |
| variant   | 'primary' \| 'secondary' \| 'outline' | 'primary' | Button style variant   |
| size      | 'sm' \| 'md' \| 'lg'                  | 'md'      | Button size            |
| disabled  | boolean                               | false     | Disable button         |
| className | string                                | -         | Additional CSS classes |
| children  | ReactNode                             | -         | Button content         |

## Theme Customization

The button component uses the theme context for styling. You can customize its appearance through the theme:

```tsx
const theme = createTheme({
  colors: {
    primary: "#FF6B6B",
    secondary: "#4ECDC4",
  },
});

<ThemeProvider theme={theme}>
  <Button>Themed Button</Button>
</ThemeProvider>;
```

## Examples

### Loading State

```tsx
<Button disabled>
  <LoadingSpinner /> Loading...
</Button>
```

### With Icon

```tsx
<Button>
  <Icon /> Save Changes
</Button>
```

### Full Width

```tsx
<Button className="w-full">Full Width Button</Button>
```
