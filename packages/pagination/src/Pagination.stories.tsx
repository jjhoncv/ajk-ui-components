import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    totalPages: 5,
    currentPage: 2,
    onPageChange: (page) => {
      console.log(`Ir a página ${page}`);
    },
  },
};
