# @ajk-ui/card

Card component for ajk-ui components library.

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
    <>
      {/* Basic usage */}
      <Card>
        <h2>Card Title</h2>
        <p>Card content</p>
      </Card>

      {/* With image */}
      <Card
        image="https://example.com/image.jpg"
        title="Product Title"
        description="Product description"
      />

      {/* Product variant */}
      <Card
        variant="product"
        title="Product Name"
        subtitle="$24.99"
        description="Product description"
        image="https://example.com/product.jpg"
      />

      {/* Service variant */}
      <Card
        variant="service"
        title="Service Name"
        subtitle="From $50"
        description="Service description"
        image="https://example.com/service.jpg"
      />
    </>
  );
}
```

## Props

| Prop        | Type                                | Default   | Description            |
| ----------- | ----------------------------------- | --------- | ---------------------- |
| variant     | 'default' \| 'product' \| 'service' | 'default' | Card style variant     |
| title       | string                              | -         | Card title             |
| subtitle    | string                              | -         | Card subtitle          |
| description | string                              | -         | Card description       |
| image       | string                              | -         | URL of the card image  |
| className   | string                              | -         | Additional CSS classes |
| children    | ReactNode                           | -         | Card content           |

## Theme Customization

The card component uses the theme context for styling. You can customize its appearance through the theme:

```tsx
const theme = createTheme({
  colors: {
    primary: "#FF6B6B",
    background: "#ffffff",
  },
  borderRadius: {
    md: "0.375rem",
  },
});

<ThemeProvider theme={theme}>
  <Card>Themed Card</Card>
</ThemeProvider>;
```

## Examples

### Product Card

```tsx
<Card
  variant="product"
  title="Premium Coffee"
  subtitle="$4.99"
  description="Rich and aromatic coffee blend"
  image="/coffee.jpg"
/>
```

### Service Card

```tsx
<Card
  variant="service"
  title="Haircut & Style"
  subtitle="From $30"
  description="Professional haircut service"
  image="/haircut.jpg"
/>
```

### Custom Content

```tsx
<Card className="p-6">
  <div className="flex items-center justify-between">
    <h3>Custom Header</h3>
    <button>Action</button>
  </div>
  <p>Custom content goes here</p>
</Card>
```
