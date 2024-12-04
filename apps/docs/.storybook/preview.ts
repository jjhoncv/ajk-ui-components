import type { Preview } from "@storybook/react";
import "../styles/tailwind.css";

// Helper para manejar las rutas de imágenes en Storybook
window.getImagePath = (path: string) => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/ajk-ui-components" : "";
  return `${basePath}${path}`;
};

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
  globals: {
    // Función global para manejar rutas de imágenes
    getImagePath: (path: string) => {
      const basePath =
        process.env.NODE_ENV === "production" ? "/ajk-ui-components" : "";
      return `${basePath}${path}`;
    },
  },
};

export default preview;
