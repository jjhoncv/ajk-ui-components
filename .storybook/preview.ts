import type { Preview } from '@storybook/react'
import './../global.css'

declare global {
  interface Window {
    getImagePath(path: string): string
  }
}

// Definimos la función
const getImagePathFn = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/ajk-ui-components' : ''
  return `${basePath}${path}`
}

// Asignamos la función a window
;(window as Window).getImagePath = getImagePathFn

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
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
    getImagePath: window.getImagePath,
  },
}

export default preview
