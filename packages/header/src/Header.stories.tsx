import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";
import { CartProvider } from "@ajk-ui/cart";

const meta = {
  title: "Components/Header",
  component: Header,
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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

const defaultNavItems = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const Simple: Story = {
  args: {
    title: "Welcome to Our Restaurant",
    subtitle: "Experience the finest dining in town",
    navItems: defaultNavItems,
    logo: () => <span className="text-xl font-bold">Restaurant</span>,
    variant: "simple",
  },
};

export const Hero: Story = {
  args: {
    title: "Exceptional Dining Experience",
    subtitle:
      "Discover our carefully crafted menu featuring the finest ingredients and expert preparation",
    backgroundImage:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
    navItems: defaultNavItems,
    logo: () => (
      <span className="text-xl font-bold text-white">Restaurant</span>
    ),
    variant: "hero",
    height: "lg",
    cta: {
      label: "Make a Reservation",
      href: "#",
      variant: "primary",
    },
  },
};

export const Centered: Story = {
  args: {
    title: "Classic Barbershop",
    subtitle: "Traditional cuts and hot towel shaves in a vintage atmosphere",
    backgroundImage:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    navItems: [
      { label: "Services", href: "#" },
      { label: "Gallery", href: "#" },
      { label: "Book Now", href: "#" },
    ],
    logo: () => <span className="text-xl font-bold text-white">BarberCo</span>,
    variant: "centered",
    height: "full",
    cta: {
      label: "Book Appointment",
      href: "#",
      variant: "outline",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.vintage}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Split: Story = {
  args: {
    title: "Get Fit with Us",
    subtitle:
      "Join our gym and transform your life with expert trainers and state-of-the-art equipment",
    backgroundImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    navItems: [
      { label: "Classes", href: "#" },
      { label: "Membership", href: "#" },
      { label: "Trainers", href: "#" },
      { label: "Join Now", href: "#" },
    ],
    logo: () => <span className="text-xl font-bold text-white">FitZone</span>,
    variant: "split",
    height: "lg",
    cta: {
      label: "Start Free Trial",
      href: "#",
      variant: "primary",
    },
  },
};

export const EcommerceHero: Story = {
  args: {
    title: "Exceptional Dining Experience",
    subtitle:
      "Discover our carefully crafted menu featuring the finest ingredients and expert preparation",
    backgroundImage:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
    navItems: defaultNavItems,
    logo: () => (
      <span className="text-xl font-bold text-white">Restaurant</span>
    ),
    variant: "hero",
    height: "lg",
    cta: {
      label: "Make a Reservation",
      href: "#",
      variant: "primary",
    },
    type: "ecommerce",
  },
  render: (args) => {
    return (
      <CartProvider>
        <ThemeProvider initialTheme={themes.restaurant.modern}>
          <Header {...args} />
        </ThemeProvider>
      </CartProvider>
    );
  },
};

export const EcommerSimple: Story = {
  args: {
    title: "Welcome to Our Restaurant",
    subtitle: "Experience the finest dining in town",
    navItems: defaultNavItems,
    logo: () => <span className="text-xl font-bold">Restaurant</span>,
    variant: "simple",
    type: "ecommerce",
  },
  render: (args) => {
    return (
      <CartProvider>
        <ThemeProvider initialTheme={themes.restaurant.modern}>
          <Header {...args} />
        </ThemeProvider>
      </CartProvider>
    );
  },
};

// Mostrar el Header con diferentes temas
export const RestaurantModern: Story = {
  args: {
    ...Hero.args,
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
    ...Hero.args,
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
    ...Centered.args,
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
    ...Centered.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
