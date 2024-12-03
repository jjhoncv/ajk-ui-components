import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import { Header } from "@ajk-ui/header";
import { Section } from "@ajk-ui/section";
import { Card } from "@ajk-ui/card";
import { Footer } from "@ajk-ui/footer";
import { Button } from "@ajk-ui/button";

const BarbershopLogo = () => (
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
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">Classic Cuts</span>
  </div>
);

const VintageBarbershop = () => {
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
      title: "Hours",
      links: [
        { label: "Mon-Fri: 9am - 7pm", href: "#" },
        { label: "Sat: 9am - 5pm", href: "#" },
        { label: "Sun: Closed", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={themes.barbershop.vintage}>
      <div className="min-h-screen">
        {/* Header */}
        <Header
          title="Classic Cuts Barbershop"
          subtitle="Traditional grooming for the modern gentleman"
          backgroundImage="/images/barbershop/hero.jpg"
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<BarbershopLogo />}
          cta={{
            label: "Book Appointment",
            href: "/booking",
            variant: "outline",
          }}
        />

        {/* Services */}
        <Section
          variant="feature"
          layout="grid"
          title="Our Services"
          subtitle="Professional grooming services for every gentleman"
          gridCols={3}
          gap="lg"
        >
          <Card
            variant="service"
            title="Haircut & Style"
            subtitle="From $30"
            description="Classic or modern cuts tailored to your style"
            image="/images/barbershop/haircut.jpg"
          />
          <Card
            variant="service"
            title="Beard Trim"
            subtitle="From $20"
            description="Expert beard grooming and shaping"
            image="/images/barbershop/beard.jpg"
          />
          <Card
            variant="service"
            title="Hot Towel Shave"
            subtitle="From $35"
            description="Traditional straight razor shave"
            image="/images/barbershop/hero.jpg"
          />
        </Section>

        {/* About Section */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage="/images/barbershop/about.jpg"
          overlay
          title="Traditional Craftsmanship"
          subtitle="A cut above the rest since 1995"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              We take pride in providing the finest grooming services with
              attention to detail and personalized care. Our experienced barbers
              combine traditional techniques with modern styles.
            </p>
            <div>
              <Button variant="secondary">About Us</Button>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section
          variant="alternate"
          title="Client Reviews"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="Best barbershop in town"
            description="I've been coming here for years. The attention to detail and service is unmatched."
            author={{
              name: "James Wilson",
              title: "Regular Client",
              avatar: "/images/barbershop/avatar1.jpg",
            }}
          />
          <Card
            variant="testimonial"
            title="True professionals"
            description="The hot towel shave experience is incredible. These guys know their craft."
            author={{
              name: "Robert Martinez",
              title: "Client since 2020",
              avatar: "/images/barbershop/avatar2.jpg",
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="simple"
          logo={<BarbershopLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 Classic Cuts Barbershop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
};

const meta = {
  title: "Pages/Barbershop",
  component: VintageBarbershop,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Implementación completa de la página de barbería usando los componentes de AJK UI.",
      },
      source: {
        code: `const BarbershopLogo = () => (
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
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">Classic Cuts</span>
  </div>
);

const VintageBarbershop = () => {
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
      title: "Hours",
      links: [
        { label: "Mon-Fri: 9am - 7pm", href: "#" },
        { label: "Sat: 9am - 5pm", href: "#" },
        { label: "Sun: Closed", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={themes.barbershop.vintage}>
      <div className="min-h-screen">
        {/* Header */}
        <Header
          title="Classic Cuts Barbershop"
          subtitle="Traditional grooming for the modern gentleman"
          backgroundImage="/images/barbershop/hero.jpg"
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<BarbershopLogo />}
          cta={{
            label: "Book Appointment",
            href: "/booking",
            variant: "outline",
          }}
        />

        {/* Services */}
        <Section
          variant="feature"
          layout="grid"
          title="Our Services"
          subtitle="Professional grooming services for every gentleman"
          gridCols={3}
          gap="lg"
        >
          <Card
            variant="service"
            title="Haircut & Style"
            subtitle="From $30"
            description="Classic or modern cuts tailored to your style"
            image="/images/barbershop/haircut.jpg"
          />
          <Card
            variant="service"
            title="Beard Trim"
            subtitle="From $20"
            description="Expert beard grooming and shaping"
            image="/images/barbershop/beard.jpg"
          />
          <Card
            variant="service"
            title="Hot Towel Shave"
            subtitle="From $35"
            description="Traditional straight razor shave"
            image="/images/barbershop/hero.jpg"
          />
        </Section>

        {/* About Section */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage="/images/barbershop/about.jpg"
          overlay
          title="Traditional Craftsmanship"
          subtitle="A cut above the rest since 1995"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              We take pride in providing the finest grooming services with
              attention to detail and personalized care. Our experienced barbers
              combine traditional techniques with modern styles.
            </p>
            <div>
              <Button variant="secondary">About Us</Button>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section
          variant="alternate"
          title="Client Reviews"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="Best barbershop in town"
            description="I've been coming here for years. The attention to detail and service is unmatched."
            author={{
              name: "James Wilson",
              title: "Regular Client",
              avatar: "/images/barbershop/avatar1.jpg",
            }}
          />
          <Card
            variant="testimonial"
            title="True professionals"
            description="The hot towel shave experience is incredible. These guys know their craft."
            author={{
              name: "Robert Martinez",
              title: "Client since 2020",
              avatar: "/images/barbershop/avatar2.jpg",
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="simple"
          logo={<BarbershopLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 Classic Cuts Barbershop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
};`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof VintageBarbershop>;

export default meta;

type Story = StoryObj<typeof VintageBarbershop>;

export const Vintage: Story = {
  render: () => <VintageBarbershop />,
};
