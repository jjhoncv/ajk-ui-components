import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";
import { ThemeProvider, themes } from "@ajk-ui/theme-utils";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
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
