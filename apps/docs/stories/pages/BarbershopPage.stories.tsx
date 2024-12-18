import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import { Header } from "@ajk-ui/header";
import { Section } from "@ajk-ui/section";
import { Card } from "@ajk-ui/card";
import { Footer } from "@ajk-ui/footer";
import { Button } from "@ajk-ui/button";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-6">
      <img src={getImagePath("/images/barbershop/Logo.svg")} />
    </div>
    <div className="ml-1 text-xl flex flex-col" style={{ lineHeight: "15px" }}>
      <p className="font-extralight text-gray-300">Classic Cuts</p>
    </div>
  </div>
);

const LogoFooter = () => (
  <div className="flex items-center gap-2">
    <div className="w-6">
      <img src={getImagePath("/images/barbershop/LogoInverter.svg")} />
    </div>
    <div className="ml-1 text-xl flex flex-col" style={{ lineHeight: "15px" }}>
      <p className="font-extralight text-gray-800">Classic Cuts</p>
    </div>
  </div>
);

const LogoNavMenuMobile = () => (
  <div className="flex items-center gap-2">
    <div className="w-6">
      <img src={getImagePath("/images/barbershop/LogoInverter.svg")} />
    </div>
    <div className="ml-1 text-xl flex flex-col" style={{ lineHeight: "15px" }}>
      <p className="font-extralight text-gray-800">Classic Cuts</p>
    </div>
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
          backgroundImage={getImagePath("/images/barbershop/hero.jpg")}
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={Logo}
          logoNavMenuMobile={LogoNavMenuMobile}
          cta={{
            label: "Book Appointment",
            href: "/booking",
            variant: "outline",
          }}
        />

        {/* Services */}
        <Section
          variant="highlight"
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
            image={getImagePath("/images/barbershop/haircut.jpg")}
          />
          <Card
            variant="service"
            title="Beard Trim"
            subtitle="From $20"
            description="Expert beard grooming and shaping"
            image={getImagePath("/images/barbershop/beard.jpg")}
          />
          <Card
            variant="service"
            title="Hot Towel Shave"
            subtitle="From $35"
            description="Traditional straight razor shave"
            image={getImagePath("/images/barbershop/hero.jpg")}
          />
        </Section>

        {/* About Section */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage={getImagePath("/images/barbershop/about.jpg")}
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
              avatar: getImagePath("/images/barbershop/avatar1.jpg"),
            }}
          />
          <Card
            variant="testimonial"
            title="True professionals"
            description="The hot towel shave experience is incredible. These guys know their craft."
            author={{
              name: "Robert Martinez",
              title: "Client since 2020",
              avatar: getImagePath("/images/barbershop/avatar2.jpg"),
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="simple"
          logo={<LogoFooter />}
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
  },
  tags: ["autodocs"],
} satisfies Meta<typeof VintageBarbershop>;

export default meta;

type Story = StoryObj<typeof VintageBarbershop>;

export const Vintage: Story = {
  render: () => <VintageBarbershop />,
};
