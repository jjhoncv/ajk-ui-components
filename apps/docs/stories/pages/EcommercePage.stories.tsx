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

// Tema personalizado para e-commerce de tecnología
const techTheme = createTheme({
  colors: {
    primary: "#4F46E5", // Indigo para el color principal
    secondary: "#10B981", // Verde esmeralda para acentos
    background: "#F9FAFB", // Gris muy claro para el fondo
    text: "#111827", // Casi negro para el texto
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

const TechStoreLogo = () => (
  <div className="flex items-center">
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">TechStore</span>
  </div>
);

const TechStorePage = () => {
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Ofertas", href: "/ofertas" },
    { label: "Soporte", href: "/soporte" },
  ];

  const footerColumns = [
    {
      title: "Productos",
      links: [
        { label: "Computadoras", href: "/computadoras" },
        { label: "Smartphones", href: "/smartphones" },
        { label: "Accesorios", href: "/accesorios" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { label: "Centro de Ayuda", href: "/ayuda" },
        { label: "Garantía", href: "/garantia" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
    { platform: "twitter" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={techTheme}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header
          title="TechStore"
          subtitle="Tu destino tecnológico"
          backgroundImage={getImagePath("/images/ecommerce/hero.jpg")}
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<TechStoreLogo />}
          cta={{
            label: "Ver Ofertas",
            href: "/ofertas",
            variant: "primary",
          }}
        />

        {/* Productos Destacados */}
        <Section
          variant="feature"
          layout="grid"
          title="Productos Destacados"
          subtitle="Las últimas novedades en tecnología"
          gridCols={4}
          gap="lg"
        >
          <Card
            variant="product"
            title="MacBook Pro M2"
            subtitle="$1,999.99"
            description="Potencia y rendimiento excepcional"
            image={getImagePath("/images/ecommerce/macbook.jpg")}
            badge="Nuevo"
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
          <Card
            variant="product"
            title="iPhone 15 Pro"
            subtitle="$999.99"
            description="La última innovación en smartphones"
            image={getImagePath("/images/ecommerce/iphone.jpg")}
            badge="Destacado"
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
          <Card
            variant="product"
            title="AirPods Pro"
            subtitle="$249.99"
            description="Audio inmersivo de alta calidad"
            image={getImagePath("/images/ecommerce/airpods1.jpg")}
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
          <Card
            variant="product"
            title="AirPods Max"
            subtitle="$549.99"
            description="Experiencia auditiva premium"
            image={getImagePath("/images/ecommerce/airpods2.jpg")}
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
        </Section>

        {/* Sección de Ofertas */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage={getImagePath("/images/ecommerce/special-offers.jpg")}
          overlay
          title="Ofertas Especiales"
          subtitle="¡No te pierdas nuestros descuentos!"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              Descubre nuestras ofertas exclusivas en productos seleccionados.
              ¡Hasta 30% de descuento en las mejores marcas de tecnología!
            </p>
            <div>
              <Button variant="outline">Ver Todas las Ofertas</Button>
            </div>
          </div>
        </Section>

        {/* Testimonios */}
        <Section
          variant="alternate"
          title="Opiniones de Clientes"
          subtitle="Lo que dicen nuestros clientes"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="Excelente servicio"
            description="La entrega fue rápida y el producto llegó en perfectas condiciones. El soporte técnico es excepcional."
            author={{
              name: "Ana García",
              title: "Cliente Verificado",
              avatar: {getImagePath("/images/ecommerce/avatar1.jpg")}
            }}
          />
          <Card
            variant="testimonial"
            title="Productos de calidad"
            description="Los precios son competitivos y la calidad de los productos es excelente. Definitivamente volveré a comprar."
            author={{
              name: "Carlos Ruiz",
              title: "Cliente Frecuente",
              avatar: {getImagePath("/images/ecommerce/avatar2.jpg")}
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="simple"
          logo={<TechStoreLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 TechStore. Todos los derechos reservados."
          newsletter={{
            title: "Suscríbete",
            description: "Recibe las últimas novedades y ofertas exclusivas",
            buttonText: "Suscribirse",
          }}
        />
      </div>
    </ThemeProvider>
  );
};

const meta = {
  title: "Pages/Ecommerce",
  component: TechStorePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Implementación completa de la página de ecommerce usando los componentes de AJK UI.",
      },
      source: {
        code: `// Tema personalizado para e-commerce de tecnología
const techTheme = createTheme({
  colors: {
    primary: "#4F46E5", // Indigo para el color principal
    secondary: "#10B981", // Verde esmeralda para acentos
    background: "#F9FAFB", // Gris muy claro para el fondo
    text: "#111827", // Casi negro para el texto
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

const TechStoreLogo = () => (
  <div className="flex items-center">
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">TechStore</span>
  </div>
);

const TechStorePage = () => {
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Ofertas", href: "/ofertas" },
    { label: "Soporte", href: "/soporte" },
  ];

  const footerColumns = [
    {
      title: "Productos",
      links: [
        { label: "Computadoras", href: "/computadoras" },
        { label: "Smartphones", href: "/smartphones" },
        { label: "Accesorios", href: "/accesorios" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { label: "Centro de Ayuda", href: "/ayuda" },
        { label: "Garantía", href: "/garantia" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
    { platform: "twitter" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={techTheme}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header
          title="TechStore"
          subtitle="Tu destino tecnológico"
          backgroundImage="/images/ecommerce/hero.jpg"
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<TechStoreLogo />}
          cta={{
            label: "Ver Ofertas",
            href: "/ofertas",
            variant: "primary",
          }}
        />

        {/* Productos Destacados */}
        <Section
          variant="feature"
          layout="grid"
          title="Productos Destacados"
          subtitle="Las últimas novedades en tecnología"
          gridCols={4}
          gap="lg"
        >
          <Card
            variant="product"
            title="MacBook Pro M2"
            subtitle="$1,999.99"
            description="Potencia y rendimiento excepcional"
            image="/images/ecommerce/macbook.jpg"
            badge="Nuevo"
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
          <Card
            variant="product"
            title="iPhone 15 Pro"
            subtitle="$999.99"
            description="La última innovación en smartphones"
            image="/images/ecommerce/iphone.jpg"
            badge="Destacado"
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
          <Card
            variant="product"
            title="AirPods Pro"
            subtitle="$249.99"
            description="Audio inmersivo de alta calidad"
            image="/images/ecommerce/airpods1.jpg"
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
          <Card
            variant="product"
            title="AirPods Max"
            subtitle="$549.99"
            description="Experiencia auditiva premium"
            image="/images/ecommerce/airpods2.jpg"
          >
            <div className="flex mt-2">
              <Button variant="secondary">Comprar Ahora</Button>
            </div>
          </Card>
        </Section>

        {/* Sección de Ofertas */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage="/images/ecommerce/special-offers.jpg"
          overlay
          title="Ofertas Especiales"
          subtitle="¡No te pierdas nuestros descuentos!"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              Descubre nuestras ofertas exclusivas en productos seleccionados.
              ¡Hasta 30% de descuento en las mejores marcas de tecnología!
            </p>
            <div>
              <Button variant="outline">Ver Todas las Ofertas</Button>
            </div>
          </div>
        </Section>

        {/* Testimonios */}
        <Section
          variant="alternate"
          title="Opiniones de Clientes"
          subtitle="Lo que dicen nuestros clientes"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="Excelente servicio"
            description="La entrega fue rápida y el producto llegó en perfectas condiciones. El soporte técnico es excepcional."
            author={{
              name: "Ana García",
              title: "Cliente Verificado",
              avatar: "/images/ecommerce/avatar1.jpg",
            }}
          />
          <Card
            variant="testimonial"
            title="Productos de calidad"
            description="Los precios son competitivos y la calidad de los productos es excelente. Definitivamente volveré a comprar."
            author={{
              name: "Carlos Ruiz",
              title: "Cliente Frecuente",
              avatar: "/images/ecommerce/avatar2.jpg",
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="simple"
          logo={<TechStoreLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 TechStore. Todos los derechos reservados."
          newsletter={{
            title: "Suscríbete",
            description: "Recibe las últimas novedades y ofertas exclusivas",
            buttonText: "Suscribirse",
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
} satisfies Meta<typeof TechStorePage>;

export default meta;

type Story = StoryObj<typeof TechStorePage>;

export const Modern: Story = {
  render: () => <TechStorePage />,
};
