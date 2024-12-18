import { CartItem, CartProvider } from "@ajk-ui/cart";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";
import { NavEcommerce } from "./NavEcommerce";
import { mockProducts } from "@ajk-ui/data";
import { AuthProvider } from "@ajk-ui/auth";

const meta = {
  title: "Components/Nav",
  component: Nav,
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
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof Nav>;

const defaultItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

export const Primary: Story = {
  args: {
    items: defaultItems,
    variant: "primary",
    logo: () => <span className="text-xl font-bold">Logo</span>,
    variantBoxMobile: "full",
    logoNavMenuMobile: () => (
      <span className="text-xl font-bold">Logo Mobile</span>
    ),
  },
};

export const Transparent: Story = {
  args: {
    items: defaultItems,
    variant: "transparent",
    logo: () => <span className="text-xl text-gray-300 font-bold">Logo</span>,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: (args) => (
    <div style={{ background: "url(/images/barbershop/hero.jpg)" }}>
      <Nav {...args} />
    </div>
  ),
};

export const Minimal: Story = {
  args: {
    items: defaultItems,
    variant: "minimal",
    logo: () => <span className="text-xl font-bold">Logo</span>,
  },
};

export const CenteredItems: Story = {
  args: {
    items: defaultItems,
    variant: "primary",
    align: "center",
    logo: () => <span className="text-xl font-bold">Logo</span>,
  },
};

export const WithEcommerce: Story = {
  args: {
    items: defaultItems,
    variant: "primary",
    type: "ecommerce",
    align: "start",
    logo: () => <span className="text-xl font-bold ">Logo</span>,
  },
  render: (args) => {
    const products: CartItem[] = mockProducts.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      subname: product.subname,
      image: product.images.gallery[0].size.xs.url,
      quantity: 1,
    }));

    return (
      <AuthProvider>
        <CartProvider
          initialState={{
            items: products,
            itemCount: products.length,
            total: products.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ),
          }}
        >
          <div className="mx-auto px-4 sm:px-6 max-w-7xl bg-white w-full">
            <NavEcommerce {...args} />
          </div>
        </CartProvider>
      </AuthProvider>
    );
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        label: "Home",
        href: "#",
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
      },
      {
        label: "About",
        href: "#",
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        label: "Services",
        href: "#",
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
      },
    ],
    variant: "primary",
    logo: () => <span className="text-xl font-bold">Logo</span>,
  },
};

// Mostrar el Nav con diferentes temas
export const RestaurantModern: Story = {
  args: {
    ...Primary.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const RestaurantClassic: Story = {
  args: {
    ...Primary.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.classic}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const BarbershopVintage: Story = {
  args: {
    ...Primary.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.vintage}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const BarbershopModern: Story = {
  args: {
    ...Primary.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
