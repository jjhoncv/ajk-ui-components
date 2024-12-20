import type { Meta, StoryObj } from '@storybook/react'
import { ProductDetail } from './'
import { mockProducts } from '@ajk-ui/data'
import { CartProvider } from '@ajk-ui/cart'

const meta: Meta<typeof ProductDetail> = {
  title: 'Feature/ProductDetail',
  component: ProductDetail,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <CartProvider>
            <Story />
          </CartProvider>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProductDetail>

// Story por defecto
export const Default: Story = {
  args: {
    product: mockProducts[0],
  },
}

// Story con producto sin descuento
export const NoDiscount: Story = {
  args: {
    product: {
      ...mockProducts[0],
      originalPrice: undefined,
      discount: undefined,
    },
  },
}

// Story con stock bajo
export const LowStock: Story = {
  args: {
    product: {
      ...mockProducts[0],
      stock: {
        total: 3,
        status: 'low_stock' as const,
        threshold: 5,
      },
    },
  },
}

// Story sin stock
export const OutOfStock: Story = {
  args: {
    product: {
      ...mockProducts[0],
      stock: {
        total: 0,
        status: 'out_of_stock' as const,
        threshold: 5,
      },
      variants: [
        {
          ...mockProducts[0].variants[0],
          sizes: mockProducts[0].variants[0].sizes.map(size => ({
            ...size,
            stock: 0,
          })),
        },
      ],
    },
  },
}

// Story con calificación perfecta
export const PerfectRating: Story = {
  args: {
    product: {
      ...mockProducts[0],
      ratings: {
        average: 5,
        count: 100,
        distribution: {
          5: 100,
          4: 0,
          3: 0,
          2: 0,
          1: 0,
        },
      },
    },
  },
}

// Story móvil (usando el viewport addon)
export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
