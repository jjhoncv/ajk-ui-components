import type { Meta, StoryObj } from '@storybook/react'
import { ProductList } from './'
import { mockProducts } from '@ajk-ui/data'
import { ThemeProvider, themes } from '@ajk-ui/theme-utils'
import { CartProvider } from '@ajk-ui/cart'
import { ModernTech } from '@ajk-ui/themes'

const meta: Meta<typeof ProductList> = {
  title: 'Feature/ProductList',
  component: ProductList,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <ThemeProvider initialTheme={ModernTech}>
            <CartProvider>
              <Story />
            </CartProvider>
          </ThemeProvider>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProductList>

// Story por defecto
export const Default: Story = {
  args: {
    products: mockProducts.map(product => ({
      ...{
        ...product,
        image: getImagePath(product.images.gallery[0].size.lg.url),
      },
    })),
  },
}
