# @ajk-ui/card

A versatile card component for React applications with multiple variants and layouts.

## Installation

```bash
npm install @ajk-ui/card
# or
yarn add @ajk-ui/card
# or
pnpm add @ajk-ui/card
```

## Usage

```tsx
import { Card } from "@ajk-ui/card";

function MyComponent() {
  return (
    <Card
      variant="product"
      title="Product Title"
      subtitle="$99.99"
      description="Product description goes here"
      image="/path/to/image.jpg"
    />
  );
}
```

## Features

- Multiple variants (product, service, testimonial, feature)
- Responsive design
- Image support
- Customizable layouts
- Theme integration
- TypeScript support
- Accessible by default

## Props

| Prop        | Type                                                 | Default   | Description                          |
| ----------- | ---------------------------------------------------- | --------- | ------------------------------------ |
| variant     | 'product' \| 'service' \| 'testimonial' \| 'feature' | 'product' | The visual style variant of the card |
| title       | string                                               | required  | The title of the card                |
| subtitle    | string                                               | undefined | Optional subtitle                    |
| description | string                                               | undefined | Card description                     |
| image       | string                                               | undefined | URL of the card image                |
| className   | string                                               | undefined | Additional CSS classes               |
| children    | ReactNode                                            | undefined | Optional child elements              |

## Examples

### Product Card

```tsx
<Card
  variant="product"
  title="Premium Product"
  subtitle="$199.99"
  description="High-quality product with amazing features"
  image="/product-image.jpg"
/>
```

### Service Card

```tsx
<Card
  variant="service"
  title="Professional Service"
  subtitle="Starting at $99"
  description="Expert service delivery"
  image="/service-image.jpg"
/>
```

### Testimonial Card

```tsx
<Card
  variant="testimonial"
  title="Great Experience!"
  description="Amazing service and support"
  author={{
    name: "John Doe",
    title: "CEO",
    avatar: "/avatar.jpg",
  }}
/>
```

## Customization

Customize card styles using Tailwind CSS:

```tsx
<Card
  className="bg-custom-color shadow-custom"
  variant="product"
  title="Custom Card"
/>
```

## Version History

Current version: 0.2.1

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
