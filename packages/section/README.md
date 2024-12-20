# @ajk-ui/section

A versatile section component for React applications with multiple layout options and grid support.

## Installation

```bash
npm install @ajk-ui/section
# or
yarn add @ajk-ui/section
# or
pnpm add @ajk-ui/section
```

## Usage

```tsx
import { Section } from '@ajk-ui/section'

function MyComponent() {
  return (
    <Section
      variant="feature"
      layout="grid"
      title="Our Features"
      subtitle="Discover what makes us special"
      gridCols={3}
    >
      {/* Your content here */}
    </Section>
  )
}
```

## Features

- Multiple variants (feature, highlight, alternate, cta)
- Various layouts (grid, split, centered)
- Background image support
- Responsive grid system
- Theme integration
- TypeScript support
- Customizable spacing and padding

## Props

| Prop            | Type                                             | Default   | Description                    |
| --------------- | ------------------------------------------------ | --------- | ------------------------------ |
| variant         | 'feature' \| 'highlight' \| 'alternate' \| 'cta' | 'feature' | Section style variant          |
| layout          | 'grid' \| 'split' \| 'centered'                  | 'grid'    | Layout type                    |
| title           | string                                           | undefined | Section title                  |
| subtitle        | string                                           | undefined | Section subtitle               |
| gridCols        | number                                           | 3         | Number of grid columns         |
| gap             | 'sm' \| 'md' \| 'lg'                             | 'md'      | Grid gap size                  |
| backgroundImage | string                                           | undefined | Background image URL           |
| overlay         | boolean                                          | false     | Add dark overlay to background |
| className       | string                                           | undefined | Additional CSS classes         |
| children        | ReactNode                                        | required  | Section content                |

## Examples

### Feature Grid Section

```tsx
<Section
  variant="feature"
  layout="grid"
  title="Our Services"
  subtitle="What we offer"
  gridCols={3}
  gap="lg"
>
  <Card title="Service 1" />
  <Card title="Service 2" />
  <Card title="Service 3" />
</Section>
```

### Split Layout Section

```tsx
<Section
  variant="highlight"
  layout="split"
  title="About Us"
  subtitle="Our Story"
  backgroundImage="/about-bg.jpg"
  overlay
>
  <div className="flex flex-col gap-4">
    <p>Content goes here...</p>
    <Button variant="primary">Learn More</Button>
  </div>
</Section>
```

### CTA Section

```tsx
<Section variant="cta" layout="centered" title="Get Started" subtitle="Join us today">
  <Button variant="primary">Sign Up Now</Button>
</Section>
```

## Grid System

The section component includes a responsive grid system:

```tsx
// 3 columns on desktop, 2 on tablet, 1 on mobile
<Section layout="grid" gridCols={3} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Grid items */}
</Section>
```

## Customization

Customize section styles using Tailwind CSS:

```tsx
<Section
  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
  variant="feature"
  layout="grid"
>
  {/* Content */}
</Section>
```

## Version History

Current version: 0.2.2

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
