# @ajk-ui/header

Header component for ajk-ui components library.

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
import { Header } from "@ajk-ui/header";
import { Nav } from "@ajk-ui/nav";

function MyComponent() {
  return (
    <Header>
      {/* Basic usage */}
      <Header.Logo src="/logo.svg" alt="Company Name" />
      <Nav>
        <Nav.Item href="/">Home</Nav.Item>
        <Nav.Item href="/about">About</Nav.Item>
      </Nav>
      <Header.Actions>
        <Button>Contact Us</Button>
      </Header.Actions>

      {/* With hero section */}
      <Header variant="hero">
        <Header.Logo src="/logo.svg" alt="Company Name" />
        <Header.Hero
          title="Welcome to Our Restaurant"
          subtitle="Experience fine dining at its best"
          backgroundImage="/hero-bg.jpg"
        >
          <Button size="lg">Make a Reservation</Button>
        </Header.Hero>
      </Header>
    </Header>
  );
}
```

## Props

### Header

| Prop      | Type                                 | Default   | Description            |
| --------- | ------------------------------------ | --------- | ---------------------- |
| variant   | 'default' \| 'transparent' \| 'hero' | 'default' | Header style variant   |
| sticky    | boolean                              | false     | Make header sticky     |
| className | string                               | -         | Additional CSS classes |

### Header.Logo

| Prop | Type   | Default | Description           |
| ---- | ------ | ------- | --------------------- |
| src  | string | -       | Logo image source     |
| alt  | string | -       | Logo alt text         |
| href | string | '/'     | Logo link destination |

### Header.Hero

| Prop            | Type    | Default | Description                  |
| --------------- | ------- | ------- | ---------------------------- |
| title           | string  | -       | Hero title                   |
| subtitle        | string  | -       | Hero subtitle                |
| backgroundImage | string  | -       | Hero background image        |
| overlay         | boolean | true    | Enable overlay on background |
| overlayOpacity  | number  | 0.5     | Overlay opacity              |

## Industry-Specific Styles

### Restaurant Modern

```tsx
<ThemeProvider theme={themes.restaurant.modern}>
  <Header variant="hero">
    <Header.Logo src="/restaurant-logo.svg" alt="Fine Dining" />
    <Header.Hero
      title="Modern Cuisine"
      subtitle="A culinary journey"
      backgroundImage="/restaurant-hero.jpg"
    >
      <Button>View Menu</Button>
    </Header.Hero>
  </Header>
</ThemeProvider>
```

### Barbershop Vintage

```tsx
<ThemeProvider theme={themes.barbershop.vintage}>
  <Header>
    <Header.Logo src="/barbershop-logo.svg" alt="Classic Cuts" />
    <Nav>
      <Nav.Item href="/services">Services</Nav.Item>
      <Nav.Item href="/booking">Book Now</Nav.Item>
    </Nav>
  </Header>
</ThemeProvider>
```

## Mobile Responsive

The Header component includes responsive design and mobile menu integration:

```tsx
<Header>
  <Header.Logo src="/logo.svg" alt="Brand" />
  <Header.MobileMenu>
    <Nav>
      <Nav.Item href="/">Home</Nav.Item>
      <Nav.Item href="/about">About</Nav.Item>
    </Nav>
  </Header.MobileMenu>
</Header>
```
