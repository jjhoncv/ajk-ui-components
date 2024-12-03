import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";
import { Card } from "@ajk-ui/card";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";

const meta = {
  title: "Components/Section",
  component: Section,
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
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: "Our Services",
    subtitle: "Discover what makes us special",
    children: (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            title={`Service ${i}`}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
          />
        ))}
      </div>
    ),
  },
};

export const Feature: Story = {
  args: {
    variant: "feature",
    title: "Featured Dishes",
    subtitle: "Our chef's special selection",
    layout: "grid",
    gridCols: 3,
    children: (
      <>
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            variant="product"
            title={`Dish ${i}`}
            subtitle="$24.99"
            description="A delicious dish prepared with the finest ingredients."
            image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
          />
        ))}
      </>
    ),
  },
};

export const Highlight: Story = {
  args: {
    variant: "highlight",
    title: "Special Offer",
    subtitle: "Limited time promotion",
    layout: "split",
    children: (
      <>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">50% Off First Visit</h3>
          <p className="text-primary-100">
            Book your first appointment today and receive a special discount.
            Valid for new customers only.
          </p>
          <button className="rounded-md bg-white px-6 py-3 text-primary-600 hover:bg-primary-50">
            Book Now
          </button>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
            alt="Special offer"
            className="rounded-lg"
          />
        </div>
      </>
    ),
  },
};

export const CTA: Story = {
  args: {
    variant: "cta",
    title: "Ready to Get Started?",
    subtitle: "Join our community today",
    layout: "centered",
    spacing: "xl",
    children: (
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="rounded-md bg-white px-8 py-3 text-primary-600 hover:bg-primary-50">
          Sign Up Now
        </button>
        <button className="rounded-md border-2 border-white px-8 py-3 text-white hover:bg-white/10">
          Learn More
        </button>
      </div>
    ),
  },
};

export const WithBackground: Story = {
  args: {
    title: "Our Restaurant",
    subtitle: "Experience fine dining at its best",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    overlay: true,
    overlayOpacity: 0.7,
    layout: "centered",
    align: "center",
    spacing: "xl",
    children: (
      <div className="mt-8 text-center text-white">
        <p className="mx-auto max-w-2xl text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-8 rounded-md bg-primary-500 px-8 py-3 text-white hover:bg-primary-600">
          Make a Reservation
        </button>
      </div>
    ),
  },
};

export const ZigzagLayout: Story = {
  args: {
    title: "Our Services",
    subtitle: "What we offer",
    layout: "zigzag",
    children: (
      <>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${
              i % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Service {i}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="rounded-md bg-primary-500 px-6 py-2 text-white hover:bg-primary-600">
                Learn More
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
                alt={`Service ${i}`}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </>
    ),
  },
};

// Mostrar diferentes temas
export const RestaurantModern: Story = {
  args: {
    ...Feature.args,
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
    ...Feature.args,
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
    variant: "feature",
    title: "Our Services",
    subtitle: "Professional grooming services",
    layout: "grid",
    gridCols: 3,
    children: (
      <>
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            variant="service"
            title={`Service ${i}`}
            subtitle="From $25"
            description="Professional haircut and styling services."
            image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800"
          />
        ))}
      </>
    ),
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
    ...BarbershopVintage.args,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.barbershop.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
