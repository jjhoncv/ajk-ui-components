import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, createTheme } from "@ajk-ui/theme-utils";
import { Header } from "@ajk-ui/header";
import { Section } from "@ajk-ui/section";
import { Card } from "@ajk-ui/card";
import { Footer } from "@ajk-ui/footer";
import { Button } from "@ajk-ui/button";

// Helper para manejar las rutas de imágenes
const getImagePath = (path: string) => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/ajk-ui-components" : "";
  return `${basePath}${path}`;
};

const Logo = () => (
  <div className="flex items-center">
    <div className="w-6">
      <img src={getImagePath("/images/boutique/Logo.svg")} />
    </div>
    <span className="ml-2 text-2xl text-white font-extralight">
      Maison Élégante
    </span>
  </div>
);

const LogoFooter = () => (
  <div className="flex items-center">
    <div className="w-6">
      <img src={getImagePath("/images/boutique/LogoInverter.svg")} />
    </div>
    <span className="ml-2 text-3xl text-primary-700 font-extralight">
      Maison Élégante
    </span>
  </div>
);

const LogoNavMenuMobile = () => (
  <div className="flex items-center">
    <div className="w-6">
      <img src={getImagePath("/images/boutique/LogoInverter.svg")} />
    </div>
    <span className="ml-2 text-2xl text-primary-500 font-extralight">
      Maison Élégante
    </span>
  </div>
);

// Create a custom theme
const boutiqueTheme = createTheme({
  colors: {
    primary: "#D4AF37", // Gold
    secondary: "#ca8a04", // Dark slate
    background: "#FFFFFF",
    text: "#1A1A1A",
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const BoutiquePage = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Collections",
      links: [
        { label: "New Arrivals", href: "/new" },
        { label: "Bestsellers", href: "/bestsellers" },
        { label: "Summer 2024", href: "/summer" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { label: "Size Guide", href: "/size-guide" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
    { platform: "twitter" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={boutiqueTheme}>
      <div className="min-h-screen">
        {/* Header */}
        <Header
          title="Timeless Elegance"
          subtitle="Discover our new collection"
          backgroundImage={getImagePath("/images/boutique/hero.jpg")}
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={Logo}
          logoNavMenuMobile={LogoNavMenuMobile}
          cta={{
            label: "Shop Now",
            href: "/collections",
            variant: "outline",
            align: "center",
          }}
        />

        {/* Featured Collection */}
        <Section
          variant="feature"
          layout="grid"
          title="New Arrivals"
          subtitle="Latest additions to our collection"
          gridCols={3}
          gap="lg"
        >
          <Card
            variant="product"
            title="Silk Evening Dress"
            subtitle="$599"
            description="Elegant silk dress with delicate embroidery"
            image={getImagePath("/images/boutique/dress.jpg")}
            badge="New"
          />
          <Card
            variant="product"
            title="Tailored Blazer"
            subtitle="$399"
            description="Classic wool blend blazer with gold buttons"
            image={getImagePath("/images/boutique/blazer.jpg")}
            badge="Bestseller"
          />
          <Card
            variant="product"
            title="Leather Handbag"
            subtitle="$299"
            description="Handcrafted Italian leather bag"
            image={getImagePath("/images/boutique/bag.jpg")}
          />
        </Section>

        {/* Brand Story */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage={getImagePath("/images/boutique/about.jpg")}
          overlay
          title="Our Heritage"
          subtitle="A legacy of craftsmanship and style"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              Since our founding in Paris, we've been dedicated to creating
              timeless pieces that combine traditional craftsmanship with
              contemporary design. Each piece tells a story of elegance and
              sophistication.
            </p>
            <div>
              <Button variant="outline">Discover More</Button>
            </div>
          </div>
        </Section>

        {/* Instagram Feed */}
        <Section
          variant="alternate"
          title="Follow Our Style"
          subtitle="@maisonelegante"
          layout="grid"
          gridCols={4}
        >
          <img
            src={getImagePath("/images/boutique/gallery1.jpg")}
            alt="Instagram post"
            className="aspect-square object-cover"
          />
          <img
            src={getImagePath("/images/boutique/gallery2.jpg")}
            alt="Instagram post"
            className="aspect-square object-cover"
          />
          <img
            src={getImagePath("/images/boutique/gallery3.jpg")}
            alt="Instagram post"
            className="aspect-square object-cover"
          />
          <img
            src={getImagePath("/images/boutique/gallery4.jpg")}
            alt="Instagram post"
            className="aspect-square object-cover"
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="centered"
          logo={<LogoFooter />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 Maison Élégante. All rights reserved."
          newsletter={{
            title: "Join Our List",
            description:
              "Be the first to know about new collections and exclusive offers",
            buttonText: "Subscribe",
          }}
        />
      </div>
    </ThemeProvider>
  );
};

const meta = {
  title: "Pages/Boutique",
  component: BoutiquePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Implementación completa de la página de boutique usando los componentes de AJK UI.",
      },
      source: {
        code: `const BoutiqueLogo = () => (
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
        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">Maison Élégante</span>
  </div>
);

// Create a custom theme
const boutiqueTheme = createTheme({
  colors: {
    primary: "#D4AF37", // Gold
    secondary: "#1E2832", // Dark slate
    background: "#FFFFFF",
    text: "#1A1A1A",
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const BoutiquePage = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Collections",
      links: [
        { label: "New Arrivals", href: "/new" },
        { label: "Bestsellers", href: "/bestsellers" },
        { label: "Summer 2024", href: "/summer" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { label: "Size Guide", href: "/size-guide" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
    { platform: "twitter" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={boutiqueTheme}>
      <div className="min-h-screen">
        {/* Header */}
        <Header
          title="Timeless Elegance"
          subtitle="Discover our new collection"
          backgroundImage="/images/boutique/hero.jpg"
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<BoutiqueLogo />}
          cta={{
            label: "Shop Now",
            href: "/collections",
            variant: "outline",
            align: "center",
          }}
        />

        {/* Featured Collection */}
        <Section
          variant="feature"
          layout="grid"
          title="New Arrivals"
          subtitle="Latest additions to our collection"
          gridCols={3}
          gap="lg"
        >
          <Card
            variant="product"
            title="Silk Evening Dress"
            subtitle="$599"
            description="Elegant silk dress with delicate embroidery"
            image="/images/boutique/dress.jpg"
            badge="New"
          />
          <Card
            variant="product"
            title="Tailored Blazer"
            subtitle="$399"
            description="Classic wool blend blazer with gold buttons"
            image="/images/boutique/blazer.jpg"
            badge="Bestseller"
          />
          <Card
            variant="product"
            title="Leather Handbag"
            subtitle="$299"
            description="Handcrafted Italian leather bag"
            image="/images/boutique/bag.jpg"
          />
        </Section>

        {/* Brand Story */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage="/images/boutique/about.jpg"
          overlay
          title="Our Heritage"
          subtitle="A legacy of craftsmanship and style"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              Since our founding in Paris, we've been dedicated to creating
              timeless pieces that combine traditional craftsmanship with
              contemporary design. Each piece tells a story of elegance and
              sophistication.
            </p>
            <div>
              <Button variant="outline">Discover More</Button>
            </div>
          </div>
        </Section>

        {/* Instagram Feed */}
        <Section
          variant="alternate"
          title="Follow Our Style"
          subtitle="@maisonelegante"
          layout="grid"
          gridCols={4}
        >
          <img
            src="/images/boutique/gallery1.jpg"
            alt="Instagram post"
            className="aspect-square object-cover"
          />
          <img
            src="/images/boutique/gallery2.jpg"
            alt="Instagram post"
            className="aspect-square object-cover"
          />
          <img
            src="/images/boutique/gallery3.jpg"
            alt="Instagram post"
            className="aspect-square object-cover"
          />
          <img
            src="/images/boutique/gallery4.jpg"
            alt="Instagram post"
            className="aspect-square object-cover"
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="centered"
          logo={<BoutiqueLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 Maison Élégante. All rights reserved."
          newsletter={{
            title: "Join Our List",
            description:
              "Be the first to know about new collections and exclusive offers",
            buttonText: "Subscribe",
          }}
        />
      </div>
    </ThemeProvider>
  );
};`,
        language: "tsx",
        type: "code",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BoutiquePage>;

export default meta;

type Story = StoryObj<typeof BoutiquePage>;

export const Modern: Story = {
  render: () => <BoutiquePage />,
};
