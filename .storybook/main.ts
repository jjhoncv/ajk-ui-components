import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import path from 'path'
import { getPackagesAliases } from './utils'

const config: StorybookConfig = {
  stories: ['./../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  viteFinal: async (config, { configType }) => {
    const baseConfig = {
      base: configType === 'PRODUCTION' ? '/ajk-ui-components/' : '/',
      resolve: {
        alias: getPackagesAliases(),
      },
    }

    return mergeConfig(config, baseConfig)
  },
}

export default config
