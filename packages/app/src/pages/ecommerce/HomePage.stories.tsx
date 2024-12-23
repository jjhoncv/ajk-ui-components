import { AuthProvider } from '@ajk-ui/auth'
import { Button } from '@ajk-ui/button'
import { Card } from '@ajk-ui/card'
import { CartProvider, ProductCart } from '@ajk-ui/cart'
import { mockProducts } from '@ajk-ui/data'
import { Header as Banner } from '@ajk-ui/header'
import { Section } from '@ajk-ui/section'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { ModernTech } from '@ajk-ui/themes'
import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './componentes/Footer'
import { Header } from './componentes/Header'

const TechStorePage = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider initialTheme={ModernTech}>
          <div className="bg-background min-h-screen">
            {/* Header */}
            <Header />

            <Banner
              title="TechStore"
              position="relative"
              subtitle="Tu destino tecnológico"
              backgroundImage={getImagePath('/images/ecommerce/hero.jpg')}
              variant="hero"
              height="lg"
              cta={{
                label: 'Ver Ofertas',
                href: '/ofertas',
                variant: 'primary',
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
              {mockProducts.map((product, key) => (
                <ProductCart
                  key={key}
                  handleClick={() => {
                    ;(window as any).top.location.href = getImagePath(
                      `/iframe.html?productId=${product.id}&id=pages-ecommerce--product-detail-page&viewMode=story`
                    )
                  }}
                  {...{
                    ...product,
                    image: getImagePath(product.images.gallery[0].size.lg.url),
                  }}
                />
              ))}
            </Section>

            {/* Sección de Ofertas */}
            <Section
              variant="highlight"
              layout="split"
              backgroundImage={getImagePath('/images/ecommerce/special-offers.jpg')}
              overlay
              title="Ofertas Especiales"
              subtitle="¡No te pierdas nuestros descuentos!"
            >
              <div className="flex flex-col space-y-4">
                <p className="text-gray-200">
                  Descubre nuestras ofertas exclusivas en productos seleccionados. ¡Hasta 30% de
                  descuento en las mejores marcas de tecnología!
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
                  name: 'Ana García',
                  title: 'Cliente Verificado',
                  avatar: getImagePath('/images/ecommerce/avatar1.jpg'),
                }}
              />
              <Card
                variant="testimonial"
                title="Productos de calidad"
                description="Los precios son competitivos y la calidad de los productos es excelente. Definitivamente volveré a comprar."
                author={{
                  name: 'Carlos Ruiz',
                  title: 'Cliente Frecuente',
                  avatar: getImagePath('/images/ecommerce/avatar2.jpg'),
                }}
              />
            </Section>

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  )
}

const meta = {
  title: 'Pages/Ecommerce',
  component: TechStorePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechStorePage>

export default meta

type Story = StoryObj<typeof TechStorePage>

export const HomePage: Story = {
  render: () => <TechStorePage />,
}
