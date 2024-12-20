# @ajk-ui/header

A flexible header component for React applications with built-in navigation and hero section support.

## Installation

```bash
npm install @ajk-ui/header
# or
yarn add @ajk-ui/header
# or
pnpm add @ajk-ui/header
```

## Usage

```tsx
import { Header } from '@ajk-ui/header'

function MyComponent() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <Header
      title="Welcome"
      subtitle="Discover amazing things"
      backgroundImage="/hero.jpg"
      variant="hero"
      navItems={navItems}
      cta={{ label: 'Get Started', href: '/start' }}
    />
  )
}
```

## Features

- Multiple variants (hero, simple, transparent)
- Integrated navigation
- Hero section support
- Background image support
- Call-to-action button
- Responsive design
- Theme integration
- TypeScript support

## Props

| Prop            | Type                                | Default   | Description              |
| --------------- | ----------------------------------- | --------- | ------------------------ |
| variant         | 'hero' \| 'simple' \| 'transparent' | 'simple'  | Header style variant     |
| title           | string                              | required  | Header title             |
| subtitle        | string                              | undefined | Optional subtitle        |
| backgroundImage | string                              | undefined | URL for background image |
| navItems        | NavItem[]                           | []        | Navigation items         |
| cta             | CTAButton                           | undefined | Call-to-action button    |
| height          | 'sm' \| 'md' \| 'lg'                | 'md'      | Header height            |
| className       | string                              | undefined | Additional CSS classes   |

## Types

```typescript
interface NavItem {
  label: string;
  href: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant?: 'solid' \| 'outline';
}
```

## Examples

### Hero Header

```tsx
<Header
  variant="hero"
  title="Welcome to Our Site"
  subtitle="Discover amazing features"
  backgroundImage="/hero-bg.jpg"
  navItems={[
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Contact', href: '/contact' },
  ]}
  cta={{ label: 'Get Started', href: '/start' }}
  height="lg"
/>
```

### Simple Header

```tsx
<Header
  variant="simple"
  title="Company Name"
  navItems={[
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
  ]}
/>
```

### Transparent Header

```tsx
<Header
  variant="transparent"
  title="Brand"
  navItems={navItems}
  className="absolute left-0 right-0 top-0"
/>
```

## Customization

Customize header styles using Tailwind CSS:

```tsx
<Header className="bg-gradient-to-r from-blue-500 to-purple-500" title="Custom Header" />
```

## Version History

Current version: 0.2.2

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
