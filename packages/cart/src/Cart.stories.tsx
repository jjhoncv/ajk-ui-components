import type { Meta, StoryObj } from '@storybook/react'
import { ButtonCart, CartProvider, ListCart, MiniCart } from './'
import { Cart } from './Cart'

import { mockProducts } from '@ajk-ui/data'
import { ThemeProvider, themes } from '@ajk-ui/theme-utils'
import { ProductCart } from './ProductCart'
const meta = {
  title: 'Components/Cart',
  component: Cart,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof Cart>

export const ButtonCartDefault: Story = {
  render: () => <ButtonCart total={0} />,
}

export const ProductCartDefault: Story = {
  render: () => {
    const product = mockProducts[0]
    return (
      <CartProvider>
        <div className="flex flex-col gap-4">
          <div className="w-full lg:w-[600px]">
            <div>
              <p>Horizontal</p>
              <ProductCart
                layout="horizontal"
                {...{
                  ...product,
                  image: getImagePath(product.images.gallery[0].size.lg.url),
                }}
              />
            </div>
          </div>
          <div className="w-[320px]">
            <div>
              <p>Vertical</p>
              <ProductCart
                layout="vertical"
                {...{
                  ...product,
                  image: getImagePath(product.images.gallery[0].size.lg.url),
                }}
              />
            </div>
          </div>
        </div>
      </CartProvider>
    )
  },
}

export const MiniCartHeader: Story = {
  render: () => (
    <CartProvider>
      <div className="p-8">
        <div className="mb-5 flex w-full justify-end">
          <MiniCart openWhenProductIsAddedToCart={true} />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mockProducts.map((product, key) => (
            <ProductCart
              key={key}
              {...{
                ...product,
                image: getImagePath(product.images.gallery[0].size.lg.url),
              }}
            />
          ))}
        </div>
      </div>
    </CartProvider>
  ),
}

export const ListCartView: Story = {
  render: () => <ListCart />,
}
