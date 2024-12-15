import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "./Cart";
import { ButtonCart, ListCart, MiniCart } from "./index";
import { Header } from "./../../header";

import { ThemeProvider, themes } from "../../theme-utils";

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
  render: () => <MiniCart />,
};

export const ListCartView: Story = {
  render: () => <ListCart />,
};
