import { AuthProvider } from '@ajk-ui/auth'
import { CartProvider } from '@ajk-ui/cart'
import { mockProducts } from '@ajk-ui/data'
import { ProductDetail } from '@ajk-ui/product-detail'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { Meta, StoryObj } from '@storybook/react'
import { Header } from './componentes/Header'

import { ModernTech } from '@ajk-ui/themes'
import { Footer } from './componentes/Footer'
import { getProduct } from './store/getProduct'

const TechStoreProductDetailPage = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const id = searchParams.get('productId') || 1
  if (!id) {
    return null
  }

  const product = getProduct(Number(id))

  if (!product) return null

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider initialTheme={ModernTech}>
          <div className="bg-background min-h-screen">
            {/* Header */}
            <Header />
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <ProductDetail product={product} />
            </div>
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
  component: TechStoreProductDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechStoreProductDetailPage>

export default meta

type Story = StoryObj<typeof TechStoreProductDetailPage>

export const ProductDetailPage: Story = {
  render: () => <TechStoreProductDetailPage />,
}
