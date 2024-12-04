# @ajk-ui/nav

A responsive navigation component for React applications with multiple layout options.

## Installation

```bash
npm install @ajk-ui/nav
# or
yarn add @ajk-ui/nav
# or
pnpm add @ajk-ui/nav
```

## Usage

```tsx
import { Nav } from "@ajk-ui/nav";

function MyComponent() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return <Nav items={navItems} variant="horizontal" />;
}
```

## Features

- Multiple layouts (horizontal, vertical, dropdown)
- Responsive mobile menu
- Active state handling
- Theme integration
- Customizable styles
- TypeScript support
- Accessible navigation

## Props

| Prop        | Type                                     | Default      | Description               |
| ----------- | ---------------------------------------- | ------------ | ------------------------- |
| items       | NavItem[]                                | required     | Array of navigation items |
| variant     | 'horizontal' \| 'vertical' \| 'dropdown' | 'horizontal' | Layout variant            |
| className   | string                                   | undefined    | Additional CSS classes    |
| activeItem  | string                                   | undefined    | Currently active item     |
| onItemClick | (item: NavItem) => void                  | undefined    | Click handler             |

## NavItem Type

```typescript
interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  children?: NavItem[];
}
```

## Examples

### Basic Navigation

```tsx
const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

<Nav items={items} variant="horizontal" />;
```

### Dropdown Navigation

```tsx
const items = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Category 1", href: "/products/cat1" },
      { label: "Category 2", href: "/products/cat2" },
    ],
  },
  { label: "About", href: "/about" },
];

<Nav items={items} variant="dropdown" />;
```

### With Icons

```tsx
const items = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
];

<Nav items={items} />;
```

## Customization

Customize navigation styles using Tailwind CSS:

```tsx
<Nav className="bg-custom-color text-custom-text" items={items} />
```

## Version History

Current version: 0.2.0

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
