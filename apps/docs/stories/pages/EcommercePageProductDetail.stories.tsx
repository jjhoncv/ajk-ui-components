import { CartProvider } from "@ajk-ui/cart";
import { mockProducts } from "@ajk-ui/data";
import { Footer } from "@ajk-ui/footer";
import { NavEcommerce } from "@ajk-ui/nav";
import { ProductDetail } from "@ajk-ui/product-detail";
import { ThemeProvider, createTheme } from "@ajk-ui/theme-utils";
import { Meta, StoryObj } from "@storybook/react";

// Tema personalizado para e-commerce de tecnología
const techTheme = createTheme({
  colors: {
    primary: "#4F46E5", // Indigo para el color principal
    secondary: "#fde68a", // Verde esmeralda para acentos
    background: "#F9FAFB", // Gris muy claro para el fondo
    text: "#111827", // Casi negro para el texto
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

const Logo = () => (
  <div
    className="flex items-center"
    onClick={() => {
      if (typeof window !== "undefined") {
        window.location.href = getImagePath(
          "/iframe.html?args=&id=pages-ecommerce--home-page&viewMode=story"
        );
      }
    }}
  >
    <div className="w-6 md:w-12">
      <img src={getImagePath("/images/ecommerce/Logo.svg")} />
    </div>
    <span className="ml-2 text-2xl md:text-4xl text-black font-extralight">
      TechStore
    </span>
  </div>
);

const LogoFooter = () => (
  <div className="flex items-center gap-2">
    <div className="w-6">
      <img src={getImagePath("/images/ecommerce/LogoInverter.svg")} />
    </div>
    <div className="ml-1 flex flex-col" style={{ lineHeight: "15px" }}>
      <p className="font-extralight text-3xl text-gray-800 ">TechStore</p>
    </div>
  </div>
);

const LogoNavMenuMobile = () => (
  <div className="flex items-center">
    <div className="w-6">
      <img src={getImagePath("/images/ecommerce/LogoInverter.svg")} />
    </div>
    <span className="ml-2 text-2xl font-extralight">TechStore</span>
  </div>
);

const TechStoreProductDetailPage = () => {
  const navItems = [
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

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("productId") || 1;
  if (!id) {
    return null;
  }
  const product = mockProducts.find((product) => product.id === Number(id));
  if (product === undefined) return;

  const productSolve = {
    ...product,
    images: {
      gallery: product.images.gallery.map((item) => ({
        ...item,
        size: {
          lg: {
            url: getImagePath(item.size.lg.url),
          },
          xs: {
            url: getImagePath(item.size.xs.url),
          },
        },
      })),
    },
  };

  return (
    <CartProvider>
      <ThemeProvider initialTheme={techTheme}>
        <div className="min-h-screen bg-background">
          {/* Header */}
          <div className="hidden md:flex bg-white border-b text-gray-600 text-sm font-light">
            <div className="w-full mx-auto px-4 sm:px-6 max-w-7xl">
              <div className="w-full justify-between h-10 flex items-center ">
                <div>
                  <div>About Us | My Account | Wishlist | Order Tracking</div>
                </div>
                <div>100% Secure delivery without contacting the courier</div>
                <div>Need help? Call Us:+ 1800 900 | English | USD</div>
              </div>
            </div>
          </div>
          <div className="w-full z-40 bg-white border-b shadow-sm">
            <NavEcommerce
              items={navItems}
              logo={Logo}
              variant="transparent"
              logoNavMenuMobile={LogoNavMenuMobile}
              className="w-full mx-auto px-4 sm:px-6 max-w-7xl h-16 md:h-24 items-center flex "
            />
          </div>
          <div className="w-full mx-auto px-4 sm:px-6 max-w-7xl ">
            <ProductDetail product={productSolve} />
          </div>
          {/* Footer */}
          <Footer
            variant="simple"
            logo={<LogoFooter />}
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
    </CartProvider>
  );
};

const meta = {
  title: "Pages/Ecommerce",
  component: TechStoreProductDetailPage,
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

const TechStoreProductDetailPage = () => {
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
} satisfies Meta<typeof TechStoreProductDetailPage>;

export default meta;

type Story = StoryObj<typeof TechStoreProductDetailPage>;

export const ProductDetailPage: Story = {
  render: () => <TechStoreProductDetailPage />,
};
