import type { Preview } from "@storybook/react";
import { themes } from "@ajk-ui/theme-utils";
import "../styles/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
    docs: {
      story: {
        inline: true,
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "restaurant-modern",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "restaurant-modern", title: "Restaurant Modern" },
          { value: "restaurant-classic", title: "Restaurant Classic" },
          { value: "barbershop-vintage", title: "Barbershop Vintage" },
          { value: "barbershop-modern", title: "Barbershop Modern" },
        ],
      },
    },
  },
};

export default preview;
