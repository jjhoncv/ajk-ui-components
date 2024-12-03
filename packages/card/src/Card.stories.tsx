import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <div className="w-[400px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    description:
      "This is a description for the card. It can be as long as needed and will wrap to multiple lines.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  },
};

export const Product: Story = {
  args: {
    variant: "product",
    title: "Classic Burger",
    subtitle: "$12.99",
    description:
      "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    badge: "Popular",
    footer: (
      <button className="w-full rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">
        Add to Cart
      </button>
    ),
  },
};

export const Service: Story = {
  args: {
    variant: "service",
    title: "Classic Haircut",
    subtitle: "Starting at $25",
    description:
      "Traditional cut with modern styling, includes hot towel service.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800",
    footer: (
      <button className="w-full rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">
        Book Now
      </button>
    ),
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.vintage}>
        <div className="w-[400px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Testimonial: Story = {
  args: {
    variant: "testimonial",
    title:
      '"The best dining experience I\'ve had in years. The atmosphere and food were exceptional."',
    author: {
      name: "John Smith",
      title: "Food Critic",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
  },
};

export const Pricing: Story = {
  args: {
    variant: "pricing",
    title: "Pro Plan",
    price: "$49/month",
    description: "Perfect for growing businesses",
    features: [
      "Unlimited access",
      "Priority support",
      "Custom branding",
      "Analytics dashboard",
      "API access",
    ],
    footer: (
      <button className="w-full rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">
        Get Started
      </button>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    ...Product.args,
    layout: "horizontal",
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <div className="w-[600px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

// Mostrar diferentes temas
export const RestaurantModern: Story = {
  args: {
    ...Product.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <div className="w-[400px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const RestaurantClassic: Story = {
  args: {
    ...Product.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.classic}>
        <div className="w-[400px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const BarbershopVintage: Story = {
  args: {
    ...Service.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.vintage}>
        <div className="w-[400px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const BarbershopModern: Story = {
  args: {
    ...Service.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.modern}>
        <div className="w-[400px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

// Mostrar diferentes aspectos y efectos hover
export const SquareAspect: Story = {
  args: {
    ...Product.args,
    aspectRatio: "1:1",
  },
};

export const WideAspect: Story = {
  args: {
    ...Product.args,
    aspectRatio: "16:9",
  },
};

export const HoverLift: Story = {
  args: {
    ...Product.args,
    hover: "lift",
  },
};

export const HoverBorder: Story = {
  args: {
    ...Product.args,
    hover: "border",
  },
};

export const HoverShadow: Story = {
  args: {
    ...Product.args,
    hover: "shadow",
  },
};
