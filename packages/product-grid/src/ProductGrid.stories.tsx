import { mockProducts } from "@ajk-ui/data";
import type { Meta, StoryObj } from "@storybook/react";
import { ProductGrid } from ".";
import { CartProvider } from "@ajk-ui/cart";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";

const meta: Meta<typeof ProductGrid> = {
  title: "Feature/ProductGrid",
  component: ProductGrid,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 max-w-7xl ">
          <ThemeProvider initialTheme={themes.restaurant.modern}>
            <CartProvider>
              <Story />
            </CartProvider>
          </ThemeProvider>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

// Story por defecto
export const Default: Story = {
  args: {
    products: mockProducts.map((product) => ({
      ...{
        ...product,
        image: getImagePath(product.images.gallery[0].size.lg.url),
      },
    })),
  },
};
