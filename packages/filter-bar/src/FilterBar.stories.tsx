// FilterBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { FilterBar } from './FilterBar'
import { FilterProvider } from './FilterContext'
import { ProductGrid } from '@ajk-ui/product-grid'
import { mockProducts } from '@ajk-ui/data'
import { CartProvider } from '@ajk-ui/cart'
import { ThemeProvider, themes } from '@ajk-ui/theme-utils'
import { Breadcrumb } from '@ajk-ui/breadcrumb'

const meta = {
  title: 'Ecommerce/FilterBar',
  component: FilterBar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <FilterProvider
          onFilterChange={filters => console.log('Filters changed:', filters)}
          totalProducts={mockProducts.length}
        >
          <div className="min-h-screen bg-gray-50">
            <CartProvider>
              <Story />
            </CartProvider>
          </div>
        </FilterProvider>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    position: {
      control: 'radio',
      options: ['top', 'left', 'right'],
      defaultValue: 'left',
    },
  },
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof FilterBar>

// Historia básica
export const Default: Story = {
  args: {
    position: 'left',
  },
}

const FilterHook = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Breadcrumb
            items={[
              { href: '#', label: 'Inicio' },
              { href: '#', label: 'Zapatillas' },
            ]}
          />

          <div className="mt-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Zapatillas</h1>
          </div>
        </div>
      </div>

      {/* TopFilter */}
      <FilterBar position="top" />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-6">
        <div className="flex gap-6">
          {/* SideFilter */}
          <FilterBar position="left" />

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid
              products={mockProducts.map(product => ({
                ...{
                  ...product,
                  image: getImagePath(product.images.gallery[0].size.lg.url),
                },
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Historia con layout completo y toggle de posición
export const WithLayout: Story = {
  render: () => {
    return <FilterHook />
  },
}

// Historia versión móvil
export const Mobile: Story = {
  args: {
    position: 'left',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => {
    return <FilterHook />
  },
}
