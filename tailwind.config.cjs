/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/*/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Colores base y sus variantes
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          default: 'var(--color-primary-default)',
          dark: 'var(--color-primary-dark)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          default: 'var(--color-secondary-default)',
          dark: 'var(--color-secondary-dark)',
          hover: 'var(--color-secondary-hover)',
          active: 'var(--color-secondary-active)',
        },
        background: 'var(--color-background)',
        text: 'var(--color-text)',

        // Variantes de texto
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)',
        'text-muted': 'var(--color-text-muted)',
        'text-on-primary': 'var(--color-text-on-primary)',
        'text-on-secondary': 'var(--color-text-on-secondary)',

        // Estados deshabilitados
        disabled: {
          background: 'var(--color-disabled-background)',
          text: 'var(--color-disabled-text)',
          border: 'var(--color-disabled-border)',
        },

        // Colores de bordes
        border: {
          DEFAULT: 'var(--color-border-default)',
          hover: 'var(--color-border-hover)',
          focus: 'var(--color-border-focus)',
          active: 'var(--color-border-active)',
        },

        // Colores de feedback
        feedback: {
          success: 'var(--color-feedback-success)',
          error: 'var(--color-feedback-error)',
          warning: 'var(--color-feedback-warning)',
          info: 'var(--color-feedback-info)',
        },

        // Sombras
        shadow: {
          light: 'var(--color-shadow-light)',
          medium: 'var(--color-shadow-medium)',
          dark: 'var(--color-shadow-dark)',
        },
      },

      // Tipografía
      fontFamily: {
        sans: ['var(--font-family)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
      },
      fontWeight: {
        light: 'var(--font-weight-light)',
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      lineHeight: {
        none: 'var(--line-height-none)',
        tight: 'var(--line-height-tight)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
      },

      // Espaciado
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },

      // Bordes redondeados
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },

      // Transiciones
      transitionDuration: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
      },
    },
  },
  plugins: [],
}
