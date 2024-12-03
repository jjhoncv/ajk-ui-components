# @ajk-ui/footer

Footer component for ajk-ui components library.

## Installation

```bash
npm install @ajk-ui/footer
# or
yarn add @ajk-ui/footer
# or
pnpm add @ajk-ui/footer
```

## Usage

```tsx
import { Footer } from "@ajk-ui/footer";

function MyComponent() {
  return (
    <Footer>
      {/* Basic usage */}
      <Footer.Brand
        logo="/logo.svg"
        name="Your Company"
        description="Short description about your company"
      />

      <Footer.Links>
        <Footer.LinkGroup title="Company">
          <Footer.Link href="/about">About</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Footer.LinkGroup>

        <Footer.LinkGroup title="Legal">
          <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
          <Footer.Link href="/terms">Terms of Service</Footer.Link>
        </Footer.LinkGroup>
      </Footer.Links>

      <Footer.Social>
        <Footer.SocialLink href="https://twitter.com" icon="twitter" />
        <Footer.SocialLink href="https://facebook.com" icon="facebook" />
        <Footer.SocialLink href="https://instagram.com" icon="instagram" />
      </Footer.Social>
    </Footer>
  );
}
```

## Props

### Footer

| Prop      | Type                               | Default   | Description            |
| --------- | ---------------------------------- | --------- | ---------------------- |
| variant   | 'default' \| 'simple' \| 'complex' | 'default' | Footer style variant   |
| className | string                             | -         | Additional CSS classes |

### Footer.Brand

| Prop        | Type   | Default | Description         |
| ----------- | ------ | ------- | ------------------- |
| logo        | string | -       | Logo image source   |
| name        | string | -       | Company name        |
| description | string | -       | Company description |

### Footer.LinkGroup

| Prop      | Type   | Default | Description            |
| --------- | ------ | ------- | ---------------------- |
| title     | string | -       | Group title            |
| className | string | -       | Additional CSS classes |

### Footer.Link

| Prop     | Type    | Default | Description      |
| -------- | ------- | ------- | ---------------- |
| href     | string  | -       | Link destination |
| external | boolean | false   | Open in new tab  |

### Footer.SocialLink

| Prop | Type                                                 | Default | Description       |
| ---- | ---------------------------------------------------- | ------- | ----------------- |
| href | string                                               | -       | Social media link |
| icon | 'twitter' \| 'facebook' \| 'instagram' \| 'linkedin' | -       | Social media icon |

## Industry-Specific Styles

### Restaurant Modern

```tsx
<ThemeProvider theme={themes.restaurant.modern}>
  <Footer>
    <Footer.Brand
      logo="/restaurant-logo.svg"
      name="Fine Dining"
      description="Modern cuisine in a sophisticated atmosphere"
    />
    <Footer.Links>
      <Footer.LinkGroup title="Visit Us">
        <Footer.Link href="/menu">Menu</Footer.Link>
        <Footer.Link href="/reservations">Reservations</Footer.Link>
      </Footer.LinkGroup>
    </Footer.Links>
    <Footer.Social>
      <Footer.SocialLink href="#" icon="instagram" />
      <Footer.SocialLink href="#" icon="facebook" />
    </Footer.Social>
  </Footer>
</ThemeProvider>
```

### Barbershop Vintage

```tsx
<ThemeProvider theme={themes.barbershop.vintage}>
  <Footer variant="simple">
    <Footer.Brand
      logo="/barbershop-logo.svg"
      name="Classic Cuts"
      description="Traditional barbershop experience"
    />
    <Footer.Links>
      <Footer.LinkGroup title="Services">
        <Footer.Link href="/services">Our Services</Footer.Link>
        <Footer.Link href="/booking">Book Now</Footer.Link>
      </Footer.LinkGroup>
    </Footer.Links>
  </Footer>
</ThemeProvider>
```

## Newsletter Integration

```tsx
<Footer>
  <Footer.Newsletter
    title="Subscribe to Our Newsletter"
    description="Get updates about our latest offers and events"
  >
    <NewsletterForm />
  </Footer.Newsletter>
</Footer>
```
