# @ajk-ui/button

A flexible and customizable button component for React applications.

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
import { Button } from '@ajk-ui/button'

function MyComponent() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  )
}
```

## Features

- Multiple variants (primary, secondary, outline, ghost)
- Responsive design
- Tailwind CSS integration
- Theme customization support
- TypeScript support
- Accessible by default

## Props

| Prop      | Type                                             | Default   | Description                            |
| --------- | ------------------------------------------------ | --------- | -------------------------------------- |
| variant   | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | The visual style variant of the button |
| size      | 'sm' \| 'md' \| 'lg'                             | 'md'      | The size of the button                 |
| disabled  | boolean                                          | false     | Whether the button is disabled         |
| className | string                                           | undefined | Additional CSS classes                 |
| children  | ReactNode                                        | required  | The content of the button              |

## Examples

### Basic Usage

```tsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
```

### With Different Sizes

```tsx
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

## Customization

You can customize the button styles using Tailwind CSS classes:

```tsx
<Button className="bg-custom-color hover:bg-custom-hover">Custom Button</Button>
```

## Version History

Current version: 1.1.2

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
