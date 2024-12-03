import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../../../packages/**/*.stories.@(js|jsx|ts|tsx)",
    "!../../../packages/**/node_modules/**/*.stories.@(js|jsx|ts|tsx)", // Excluir historias de node_modules
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    const baseConfig = {
      resolve: {
        alias: {
          "@ajk-ui/core": path.resolve(__dirname, "../../../packages/core/src"),
          "@ajk-ui/theme-utils": path.resolve(
            __dirname,
            "../../../packages/theme-utils/src"
          ),
          "@ajk-ui/button": path.resolve(
            __dirname,
            "../../../packages/button/src"
          ),
          "@ajk-ui/nav": path.resolve(__dirname, "../../../packages/nav/src"),
          "@ajk-ui/header": path.resolve(
            __dirname,
            "../../../packages/header/src"
          ),
          "@ajk-ui/card": path.resolve(__dirname, "../../../packages/card/src"),
          "@ajk-ui/section": path.resolve(
            __dirname,
            "../../../packages/section/src"
          ),
          "@ajk-ui/footer": path.resolve(
            __dirname,
            "../../../packages/footer/src"
          ),
        },
      },
    };

    if (configType === "PRODUCTION" || process.env.NODE_ENV === "production") {
      return mergeConfig(config, {
        ...baseConfig,
        build: {
          rollupOptions: {
            external: [
              "@storybook/test",
              "@storybook/testing-library",
              "@storybook/jest",
              /\.css$/, // Excluir archivos CSS durante la construcción
            ],
          },
        },
      });
    }

    return mergeConfig(config, {
      ...baseConfig,
      optimizeDeps: {
        include: [
          "@storybook/test",
          "@storybook/testing-library",
          "@storybook/jest",
        ],
      },
    });
  },
};

export default config;
