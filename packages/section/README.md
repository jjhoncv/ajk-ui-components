# @ajk-ui/section

Section component with industry-specific layouts for ajk-ui components library.

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
import { Section } from "@ajk-ui/section";
import { Card } from "@ajk-ui/card";

function MyComponent() {
  return (
    <>
      {/* Basic usage */}
      <Section title="Our Services" subtitle="Discover what makes us special">
        <div className="grid grid-cols-3 gap-6">{/* Content */}</div>
      </Section>

      {/* Feature layout */}
      <Section
        variant="feature"
        layout="grid"
        title="Featured Items"
        subtitle="Our special selection"
        gridCols={3}
      >
        <Card variant="product" />
        <Card variant="product" />
        <Card variant="product" />
      </Section>

      {/* With background image */}
      <Section
        backgroundImage="/hero.jpg"
        overlay
        overlayOpacity={0.7}
        title="Welcome"
        subtitle="Experience excellence"
      >
        {/* Content */}
      </Section>
    </>
  );
}
```

## Props

| Prop            | Type                                                          | Default   | Description                      |
| --------------- | ------------------------------------------------------------- | --------- | -------------------------------- |
| variant         | 'default' \| 'alternate' \| 'highlight' \| 'feature' \| 'cta' | 'default' | Section style variant            |
| layout          | 'default' \| 'grid' \| 'split' \| 'centered' \| 'zigzag'      | 'default' | Layout style                     |
| backgroundImage | string                                                        | -         | Background image URL             |
| overlay         | boolean                                                       | false     | Enable overlay on background     |
| overlayOpacity  | number                                                        | 0.5       | Opacity of overlay               |
| title           | string                                                        | -         | Section title                    |
| subtitle        | string                                                        | -         | Section subtitle                 |
| gridCols        | 1 \| 2 \| 3 \| 4                                              | 3         | Number of columns in grid layout |
| spacing         | 'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'                        | 'lg'      | Section padding                  |
| align           | 'left' \| 'center' \| 'right'                                 | 'left'    | Content alignment                |

## Industry-Specific Layouts

### Restaurant Modern

```tsx
<Section
  variant="feature"
  layout="grid"
  title="Featured Dishes"
  subtitle="Chef's special selection"
>
  <Card variant="product" />
  <Card variant="product" />
  <Card variant="product" />
</Section>
```

### Barbershop Vintage

```tsx
<Section
  variant="feature"
  layout="grid"
  title="Our Services"
  subtitle="Professional grooming services"
>
  <Card variant="service" />
  <Card variant="service" />
  <Card variant="service" />
</Section>
```

### CTA Section

```tsx
<Section
  variant="cta"
  layout="centered"
  title="Ready to Get Started?"
  subtitle="Join our community today"
  backgroundImage="/cta-bg.jpg"
  overlay
>
  <Button size="lg">Book Now</Button>
</Section>
```

## Theme Integration

The section component automatically adapts to your selected industry theme:

```tsx
<ThemeProvider theme={themes.restaurant.modern}>
  <Section>{/* Will use restaurant modern theme styles */}</Section>
</ThemeProvider>
```
