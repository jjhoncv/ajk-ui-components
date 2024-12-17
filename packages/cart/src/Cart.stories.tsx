import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "./Cart";
import { ButtonCart, CartProvider, ListCart, MiniCart } from "./";

import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import { mockCartItems } from "./mockCartItems";
import { ProductCart } from "./ProductCart";

const meta = {
  title: "Components/Cart",
  component: Cart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof Cart>;

export const ButtonCartDefault: Story = {
  render: () => <ButtonCart total={0} />,
};

export const MiniCartHeader: Story = {
  render: () => (
    <CartProvider>
      <div className="p-8">
        <div className="flex justify-end w-full mb-5">
          <MiniCart />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {mockCartItems.map((product, key) => (
            <ProductCart
              key={key}
              {...{ ...product, image: product.image.lg }}
            />
          ))}
        </div>
      </div>
    </CartProvider>
  ),
};

export const ListCartView: Story = {
  render: () => <ListCart />,
};
