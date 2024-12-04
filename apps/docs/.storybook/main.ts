import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)",
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
  staticDirs: ["../public"],
  viteFinal: async (config, { configType }) => {
    const baseConfig = {
      base: configType === "PRODUCTION" ? "/ajk-ui-components/" : "/",
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

    return mergeConfig(config, baseConfig);
  },
};

export default config;
