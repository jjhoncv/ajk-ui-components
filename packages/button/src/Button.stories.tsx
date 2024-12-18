import { ThemeProvider, createTheme } from "@ajk-ui/theme-utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const sampleTheme = createTheme({
  colors: {
    primary: "#D4AF37", // Gold
    secondary: "#1E2832", // Dark slate
    background: "#FFFFFF",
    text: "#1A1A1A",
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
  },
});

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={sampleTheme}>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    children: "Large Button",
    size: "lg",
  },
};
