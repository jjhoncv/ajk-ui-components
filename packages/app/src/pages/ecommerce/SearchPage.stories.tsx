import { AuthProvider } from '@ajk-ui/auth'
import { CartProvider } from '@ajk-ui/cart'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { Meta, StoryObj } from '@storybook/react'
import { Header } from './componentes/Header'

import { ProductList } from '@ajk-ui/product-list'
import { ModernTech } from '@ajk-ui/themes'
import { Footer } from './componentes/Footer'
import { useURLSearch } from './hooks/useURLSearch'
import { searchProducts } from './store/searchProducts'
import { useEffect, useState } from 'react'
import { Product } from '@ajk-ui/product'

const TechStoreSearchPage = () => {
  const searchQuery = useURLSearch('search')
  const [products, setProducts] = useState<Product[]>([])

  // Efecto para buscar productos cuando cambia searchQuery
  useEffect(() => {
    const fetchProducts = async () => {
      const results = searchProducts(searchQuery)
      setProducts(results)
    }

    fetchProducts()
  }, [searchQuery])

  if (!products) return null

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider initialTheme={ModernTech}>
          <div className="bg-background min-h-screen">
            {/* Header */}
            <Header />
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <ProductList products={products} />
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
  component: TechStoreSearchPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechStoreSearchPage>

export default meta

type Story = StoryObj<typeof TechStoreSearchPage>

export const SearchPage: Story = {
  render: () => <TechStoreSearchPage />,
}
