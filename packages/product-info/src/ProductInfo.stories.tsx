// src/stories/ProductInfo.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { ProductInfo } from './'
import { mockProducts } from '@ajk-ui/data'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { ModernTech } from '@ajk-ui/themes'

const meta: Meta<typeof ProductInfo> = {
  title: 'Feature/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={ModernTech}>
        <div className="max-w-xl rounded-lg bg-white p-6">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    onSizeSelect: { action: 'size selected' },
    onQuantityChange: { action: 'quantity changed' },
    onAddToCart: { action: 'add to cart clicked' },
  },
}

export default meta
type Story = StoryObj<typeof ProductInfo>

// Story por defecto
export const Default: Story = {
  args: {
    product: mockProducts[0],
    selectedSize: '',
    quantity: 1,
  },
}

// Con tamaño seleccionado
export const WithSelectedSize: Story = {
  args: {
    product: mockProducts[0],
    selectedSize: '37',
    quantity: 1,
  },
}

// Con descuento
export const WithDiscount: Story = {
  args: {
    product: mockProducts[1],
    selectedSize: '',
    quantity: 1,
  },
}

// Sin descuento
export const NoDiscount: Story = {
  args: {
    product: {
      ...mockProducts[0],
      originalPrice: undefined,
      discount: undefined,
    },
    selectedSize: '',
    quantity: 1,
  },
}

// Stock bajo
export const LowStock: Story = {
  args: {
    product: {
      ...mockProducts[0],
      stock: {
        total: 3,
        status: 'low_stock' as const,
        threshold: 5,
      },
      variants: [
        {
          ...mockProducts[0].variants[0],
          sizes: mockProducts[0].variants[0].sizes.map(size => ({
            ...size,
            stock: size.stock > 0 ? 1 : 0,
          })),
        },
      ],
    },
    selectedSize: '',
    quantity: 1,
  },
}

// Sin stock
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
    selectedSize: '',
    quantity: 1,
  },
}

// Móvil
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    product: mockProducts[0],
    selectedSize: '',
    quantity: 1,
  },
}

// Calificación perfecta
export const PerfectRating: Story = {
  args: {
    product: {
      ...mockProducts[0],
      ratings: {
        average: 5.0,
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
    selectedSize: '',
    quantity: 1,
  },
}

// Cantidad máxima
export const MaxQuantity: Story = {
  args: {
    product: mockProducts[0],
    selectedSize: '37',
    quantity: 5,
  },
}

// Todas las tallas agotadas excepto una
export const OneSizeLeft: Story = {
  args: {
    product: {
      ...mockProducts[0],
      variants: [
        {
          ...mockProducts[0].variants[0],
          sizes: mockProducts[0].variants[0].sizes.map((size, index) => ({
            ...size,
            stock: index === 2 ? 1 : 0,
          })),
        },
      ],
    },
    selectedSize: '',
    quantity: 1,
  },
}

// Envío gratis deshabilitado
export const NoFreeShipping: Story = {
  args: {
    product: {
      ...mockProducts[0],
      shipping: {
        ...mockProducts[0].shipping,
        free: false,
        methods: [
          {
            id: 1,
            name: 'Envío estándar',
            price: 5.99,
            estimatedDays: 3,
          },
          {
            id: 2,
            name: 'Envío express',
            price: 12.99,
            estimatedDays: 1,
          },
        ],
      },
    },
    selectedSize: '',
    quantity: 1,
  },
}
