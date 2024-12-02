import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)"],
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
  viteFinal: async (config) => {
    if (config.build && !config.build.rollupOptions) {
      config.build.rollupOptions = {};
    }
    if (config.build && config.build.rollupOptions) {
      config.build.rollupOptions.external = [
        ...(Array.isArray(config.build.rollupOptions.external)
          ? config.build.rollupOptions.external
          : []),
        "@storybook/test",
      ];
    }
    return config;
  },
};

export default config;
