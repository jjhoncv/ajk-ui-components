# @ajk-ui/nav

Navigation component for ajk-ui components library.

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
  return (
    <Nav>
      {/* Basic usage */}
      <Nav.Item href="/">Home</Nav.Item>
      <Nav.Item href="/about">About</Nav.Item>
      <Nav.Item href="/services">Services</Nav.Item>

      {/* With dropdown */}
      <Nav.Dropdown label="More">
        <Nav.Item href="/blog">Blog</Nav.Item>
        <Nav.Item href="/contact">Contact</Nav.Item>
      </Nav.Dropdown>

      {/* With icons */}
      <Nav.Item href="/profile">
        <UserIcon /> Profile
      </Nav.Item>
    </Nav>
  );
}
```

## Props

### Nav

| Prop      | Type                            | Default   | Description              |
| --------- | ------------------------------- | --------- | ------------------------ |
| variant   | 'default' \| 'transparent'      | 'default' | Navigation style variant |
| position  | 'fixed' \| 'sticky' \| 'static' | 'static'  | Navigation position      |
| className | string                          | -         | Additional CSS classes   |

### Nav.Item

| Prop     | Type    | Default | Description     |
| -------- | ------- | ------- | --------------- |
| href     | string  | -       | Navigation link |
| active   | boolean | false   | Active state    |
| disabled | boolean | false   | Disabled state  |

### Nav.Dropdown

| Prop  | Type              | Default | Description        |
| ----- | ----------------- | ------- | ------------------ |
| label | string            | -       | Dropdown label     |
| align | 'left' \| 'right' | 'left'  | Dropdown alignment |

## Industry-Specific Styles

### Restaurant Modern

```tsx
<ThemeProvider theme={themes.restaurant.modern}>
  <Nav variant="transparent">
    <Nav.Item href="/">Home</Nav.Item>
    <Nav.Item href="/menu">Menu</Nav.Item>
    <Nav.Item href="/reservations">Reservations</Nav.Item>
  </Nav>
</ThemeProvider>
```

### Barbershop Vintage

```tsx
<ThemeProvider theme={themes.barbershop.vintage}>
  <Nav>
    <Nav.Item href="/">Home</Nav.Item>
    <Nav.Item href="/services">Services</Nav.Item>
    <Nav.Item href="/booking">Book Now</Nav.Item>
  </Nav>
</ThemeProvider>
```

## Mobile Responsive

The Nav component is fully responsive and includes a mobile menu:

```tsx
<Nav>
  {/* Mobile menu button appears automatically on small screens */}
  <Nav.MobileMenu>
    <Nav.Item href="/">Home</Nav.Item>
    <Nav.Item href="/about">About</Nav.Item>
  </Nav.MobileMenu>
</Nav>
```
