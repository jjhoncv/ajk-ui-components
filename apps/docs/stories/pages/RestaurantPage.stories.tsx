import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import { Header } from "@ajk-ui/header";
import { Section } from "@ajk-ui/section";
import { Card } from "@ajk-ui/card";
import { Footer } from "@ajk-ui/footer";
import { Button } from "@ajk-ui/button";

const RestaurantLogo = () => (
  <div className="flex items-center">
    <svg
      className="h-8 w-8 text-primary-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">Fine Dining</span>
  </div>
);

const ModernRestaurant = () => {
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
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={themes.restaurant.modern}>
      <div className="min-h-screen">
        {/* Header */}
        <Header
          title="Experience Fine Dining"
          subtitle="Modern cuisine in an elegant atmosphere"
          backgroundImage="/images/restaurant/hero.jpg"
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<RestaurantLogo />}
          cta={{
            label: "Make a Reservation",
            href: "/reservations",
            variant: "primary",
          }}
        />

        {/* Featured Menu */}
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
            image="/images/restaurant/salmon.jpg"
          />
          <Card
            variant="product"
            title="Wagyu Steak"
            subtitle="$45"
            description="Premium Japanese beef with truffle sauce"
            image="/images/restaurant/steak.jpg"
          />
          <Card
            variant="product"
            title="Lobster Risotto"
            subtitle="$38"
            description="Creamy risotto with fresh Maine lobster"
            image="/images/restaurant/risotto.jpg"
          />
        </Section>

        {/* About Section */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage="/images/restaurant/about.jpg"
          overlay
          title="Our Story"
          subtitle="Experience the perfect blend of traditional and modern cuisine in our elegant dining room. Our expert chefs create unforgettable dishes using the finest ingredients."
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              Since 2010, we've been serving exceptional dishes that combine
              classic techniques with modern innovation. Our commitment to
              quality and service has made us a destination for food lovers.
            </p>
            <div>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section
          variant="alternate"
          title="What Our Guests Say"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="An unforgettable dining experience"
            description="The attention to detail in every dish and the impeccable service made our anniversary dinner truly special."
            author={{
              name: "Sarah Johnson",
              title: "Food Critic",
              avatar: "/images/restaurant/avatar1.jpg",
            }}
          />
          <Card
            variant="testimonial"
            title="Exceptional cuisine"
            description="Every visit is a culinary journey. The seasonal menu never fails to impress with its creativity and flavors."
            author={{
              name: "Michael Chen",
              title: "Regular Guest",
              avatar: "/images/restaurant/avatar2.jpg",
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="multicolumn"
          logo={<RestaurantLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 Fine Dining. All rights reserved."
          newsletter={{
            title: "Stay Updated",
            description: "Subscribe for special offers and events",
            buttonText: "Subscribe",
          }}
        />
      </div>
    </ThemeProvider>
  );
};

const meta = {
  title: "Pages/Restaurant",
  component: ModernRestaurant,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Implementación completa de la página de Restaurant usando los componentes de AJK UI.",
      },
      source: {
        code: `const RestaurantLogo = () => (
  <div className="flex items-center">
    <svg
      className="h-8 w-8 text-primary-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">Fine Dining</span>
  </div>
);

const ModernRestaurant = () => {
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
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={themes.restaurant.modern}>
      <div className="min-h-screen">
        {/* Header */}
        <Header
          title="Experience Fine Dining"
          subtitle="Modern cuisine in an elegant atmosphere"
          backgroundImage="/images/restaurant/hero.jpg"
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<RestaurantLogo />}
          cta={{
            label: "Make a Reservation",
            href: "/reservations",
            variant: "primary",
          }}
        />

        {/* Featured Menu */}
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
            image="/images/restaurant/salmon.jpg"
          />
          <Card
            variant="product"
            title="Wagyu Steak"
            subtitle="$45"
            description="Premium Japanese beef with truffle sauce"
            image="/images/restaurant/steak.jpg"
          />
          <Card
            variant="product"
            title="Lobster Risotto"
            subtitle="$38"
            description="Creamy risotto with fresh Maine lobster"
            image="/images/restaurant/risotto.jpg"
          />
        </Section>

        {/* About Section */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage="/images/restaurant/about.jpg"
          overlay
          title="Our Story"
          subtitle="Experience the perfect blend of traditional and modern cuisine in our elegant dining room. Our expert chefs create unforgettable dishes using the finest ingredients."
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              Since 2010, we've been serving exceptional dishes that combine
              classic techniques with modern innovation. Our commitment to
              quality and service has made us a destination for food lovers.
            </p>
            <div>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section
          variant="alternate"
          title="What Our Guests Say"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="An unforgettable dining experience"
            description="The attention to detail in every dish and the impeccable service made our anniversary dinner truly special."
            author={{
              name: "Sarah Johnson",
              title: "Food Critic",
              avatar: "/images/restaurant/avatar1.jpg",
            }}
          />
          <Card
            variant="testimonial"
            title="Exceptional cuisine"
            description="Every visit is a culinary journey. The seasonal menu never fails to impress with its creativity and flavors."
            author={{
              name: "Michael Chen",
              title: "Regular Guest",
              avatar: "/images/restaurant/avatar2.jpg",
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="multicolumn"
          logo={<RestaurantLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 Fine Dining. All rights reserved."
          newsletter={{
            title: "Stay Updated",
            description: "Subscribe for special offers and events",
            buttonText: "Subscribe",
          }}
        />
      </div>
    </ThemeProvider>
  );
};`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ModernRestaurant>;

export default meta;

type Story = StoryObj<typeof ModernRestaurant>;

export const Modern: Story = {
  render: () => <ModernRestaurant />,
};
