# AJK UI Components

A comprehensive React component library with industry-specific themes and layouts.

## Features

- 🎨 Industry-specific themes (Restaurant, Barbershop)
- 📱 Fully responsive components
- 🎯 Purpose-built layouts
- 🔧 Highly customizable
- 📚 Comprehensive documentation
- 🎭 Theme variants (Modern, Classic, Vintage)
- 🛠️ Built with TypeScript
- 🎉 Powered by Tailwind CSS

## Installation

```bash
# Install core package
npm install @ajk-ui/core @ajk-ui/theme-utils
# or
yarn add @ajk-ui/core @ajk-ui/theme-utils
# or
pnpm add @ajk-ui/core @ajk-ui/theme-utils

# Install required components
pnpm add @ajk-ui/button @ajk-ui/card @ajk-ui/nav @ajk-ui/header @ajk-ui/footer @ajk-ui/section
```

## Quick Start Examples

### Modern Restaurant Website

```tsx
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import { Header, Nav, Section, Card, Footer, Button } from "@ajk-ui";

function ModernRestaurant() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "About", href: "/about" },
  ];

  const footerColumns = [
    {
      title: "Visit Us",
      links: [
        { label: "Menu", href: "/menu" },
        { label: "Reservations", href: "/reservations" },
        { label: "Private Events", href: "/events" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Location", href: "/location" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram", href: "#" },
    { platform: "facebook", href: "#" },
  ];

  return (
    <ThemeProvider theme={themes.restaurant.modern}>
      {/* Header with Navigation */}
      <Header
        title="Experience Fine Dining"
        subtitle="Modern cuisine in an elegant atmosphere"
        backgroundImage="/hero-bg.jpg"
        variant="hero"
        height="lg"
        navItems={navItems}
        cta={{ label: "Make a Reservation", href: "/reservations" }}
      />

      {/* Featured Menu Section */}
      <Section
        variant="feature"
        layout="grid"
        title="Featured Dishes"
        subtitle="Chef's special selection"
        gridCols={3}
        gap="lg"
      >
        <Card
          variant="product"
          title="Grilled Salmon"
          subtitle="$32"
          description="Fresh Atlantic salmon with seasonal vegetables"
          image="/salmon.jpg"
        />
        <Card
          variant="product"
          title="Wagyu Steak"
          subtitle="$45"
          description="Premium Japanese beef with truffle sauce"
          image="/steak.jpg"
        />
        <Card
          variant="product"
          title="Lobster Risotto"
          subtitle="$38"
          description="Creamy risotto with fresh Maine lobster"
          image="/risotto.jpg"
        />
      </Section>

      {/* About Section */}
      <Section
        variant="highlight"
        layout="split"
        backgroundImage="/restaurant-bg.jpg"
        overlay
        title="Our Story"
        subtitle="Experience the perfect blend of traditional and modern cuisine"
      >
        <Button variant="outline">Learn More</Button>
      </Section>

      {/* Footer */}
      <Footer
        variant="multicolumn"
        columns={footerColumns}
        social={socialLinks}
        copyright="© 2024 Fine Dining. All rights reserved."
        newsletter={{
          title: "Stay Updated",
          description: "Subscribe for special offers and events",
          buttonText: "Subscribe",
        }}
      />
    </ThemeProvider>
  );
}
```

### Vintage Barbershop Website

```tsx
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import { Header, Section, Card, Footer } from "@ajk-ui";

function VintageBarbershop() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Book Now", href: "/booking" },
  ];

  const footerColumns = [
    {
      title: "Services",
      links: [
        { label: "Haircut", href: "/services#haircut" },
        { label: "Beard Trim", href: "/services#beard" },
        { label: "Hot Towel Shave", href: "/services#shave" },
      ],
    },
    {
      title: "Book Now",
      links: [
        { label: "Online Booking", href: "/booking" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <ThemeProvider theme={themes.barbershop.vintage}>
      {/* Header */}
      <Header
        title="Classic Cuts"
        subtitle="Traditional barbering with modern style"
        backgroundImage="/barber-hero.jpg"
        variant="hero"
        navItems={navItems}
        cta={{ label: "Book Appointment", href: "/booking" }}
      />

      {/* Services Section */}
      <Section
        variant="feature"
        layout="grid"
        title="Our Services"
        subtitle="Professional grooming services"
        gridCols={3}
      >
        <Card
          variant="service"
          title="Haircut & Style"
          subtitle="From $30"
          description="Classic or modern cuts tailored to your style"
          image="/haircut.jpg"
        />
        <Card
          variant="service"
          title="Beard Trim"
          subtitle="From $20"
          description="Expert beard grooming and shaping"
          image="/beard.jpg"
        />
        <Card
          variant="service"
          title="Hot Towel Shave"
          subtitle="From $35"
          description="Traditional straight razor shave"
          image="/shave.jpg"
        />
      </Section>

      {/* Testimonials */}
      <Section
        variant="alternate"
        title="What Our Clients Say"
        layout="grid"
        gridCols={2}
      >
        <Card
          variant="testimonial"
          title="Best barbershop in town!"
          description="The attention to detail and service is unmatched."
          author={{
            name: "John Doe",
            title: "Regular Client",
            avatar: "/john.jpg",
          }}
        />
        <Card
          variant="testimonial"
          title="True professionals"
          description="Always leave looking and feeling great."
          author={{
            name: "Mike Smith",
            title: "Client since 2020",
            avatar: "/mike.jpg",
          }}
        />
      </Section>

      {/* Footer */}
      <Footer
        variant="simple"
        columns={footerColumns}
        copyright="© 2024 Classic Cuts Barbershop"
      />
    </ThemeProvider>
  );
}
```

### Custom Theme Example

```tsx
import { ThemeProvider, createTheme } from "@ajk-ui/theme-utils";
import { Header, Section, Card, Footer } from "@ajk-ui";

// Create a custom theme
const customTheme = createTheme({
  colors: {
    primary: "#FF6B6B",
    secondary: "#4ECDC4",
    background: "#ffffff",
    text: "#2C3E50",
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function CustomBoutique() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ThemeProvider theme={customTheme}>
      {/* Header */}
      <Header
        title="Fashion Forward"
        subtitle="Discover our new collection"
        backgroundImage="/boutique-hero.jpg"
        variant="hero"
        navItems={navItems}
        cta={{ label: "Shop Now", href: "/collections", variant: "outline" }}
      />

      {/* Featured Collection */}
      <Section
        variant="feature"
        layout="grid"
        title="New Arrivals"
        subtitle="Latest additions to our collection"
        gridCols={3}
      >
        <Card
          variant="product"
          title="Summer Dress"
          subtitle="$129"
          description="Light and breezy summer dress"
          image="/dress.jpg"
          badge="New"
        />
        {/* More products */}
      </Section>

      {/* Newsletter Section */}
      <Section
        variant="cta"
        layout="centered"
        title="Stay Updated"
        subtitle="Subscribe to our newsletter"
      >
        <div className="max-w-md mx-auto">{/* Newsletter form */}</div>
      </Section>

      {/* Footer */}
      <Footer
        variant="centered"
        newsletter={{
          title: "Join Our List",
          description: "Be the first to know about new collections",
          buttonText: "Subscribe",
        }}
      />
    </ThemeProvider>
  );
}
```

## Available Packages

| Package                                       | Description                | Version                                                                                                       |
| --------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [@ajk-ui/core](./packages/core)               | Core utilities and types   | [![npm](https://img.shields.io/npm/v/@ajk-ui/core)](https://www.npmjs.com/package/@ajk-ui/core)               |
| [@ajk-ui/theme-utils](./packages/theme-utils) | Theme system and providers | [![npm](https://img.shields.io/npm/v/@ajk-ui/theme-utils)](https://www.npmjs.com/package/@ajk-ui/theme-utils) |
| [@ajk-ui/button](./packages/button)           | Button component           | [![npm](https://img.shields.io/npm/v/@ajk-ui/button)](https://www.npmjs.com/package/@ajk-ui/button)           |
| [@ajk-ui/card](./packages/card)               | Card component             | [![npm](https://img.shields.io/npm/v/@ajk-ui/card)](https://www.npmjs.com/package/@ajk-ui/card)               |
| [@ajk-ui/nav](./packages/nav)                 | Navigation component       | [![npm](https://img.shields.io/npm/v/@ajk-ui/nav)](https://www.npmjs.com/package/@ajk-ui/nav)                 |
| [@ajk-ui/header](./packages/header)           | Header component           | [![npm](https://img.shields.io/npm/v/@ajk-ui/header)](https://www.npmjs.com/package/@ajk-ui/header)           |
| [@ajk-ui/footer](./packages/footer)           | Footer component           | [![npm](https://img.shields.io/npm/v/@ajk-ui/footer)](https://www.npmjs.com/package/@ajk-ui/footer)           |
| [@ajk-ui/section](./packages/section)         | Section layouts            | [![npm](https://img.shields.io/npm/v/@ajk-ui/section)](https://www.npmjs.com/package/@ajk-ui/section)         |

## Documentation

Visit our [Storybook documentation](https://your-storybook-url) to see all components, themes, and examples.

## Contributing

1. Clone the repository
2. Install dependencies: \`pnpm install\`
3. Start Storybook: \`pnpm storybook\`
4. Make your changes
5. Create a changeset: \`pnpm changeset\`
6. Submit a PR

## License

MIT © [Your Name]
