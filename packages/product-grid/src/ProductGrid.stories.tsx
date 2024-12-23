import { CartProvider } from '@ajk-ui/cart'
import { mockProducts } from '@ajk-ui/data'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { ModernTech } from '@ajk-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductGrid } from '.'

const meta: Meta<typeof ProductGrid> = {
  title: 'Feature/ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <ThemeProvider initialTheme={ModernTech}>
          <CartProvider>
            <Story />
          </CartProvider>
        </ThemeProvider>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProductGrid>

const products = mockProducts.map(product => ({
  ...{
    ...product,
    image: getImagePath(product.images.gallery[0].size.lg.url),
  },
}))

// Story por defecto
export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <ProductGrid products={products} />
        <ProductGrid products={products} layout="horizontal" />
      </div>
    )
  },
}
