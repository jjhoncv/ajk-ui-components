/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/docs/.storybook/**/*.{js,ts,jsx,tsx}",
    "./apps/docs/stories/**/*.{js,ts,jsx,tsx}",
    "./packages/*/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50, #f0f9ff)",
          100: "var(--primary-100, #e0f2fe)",
          200: "var(--primary-200, #bae6fd)",
          300: "var(--primary-300, #7dd3fc)",
          400: "var(--primary-400, #38bdf8)",
          500: "var(--primary-500, #0ea5e9)",
          600: "var(--primary-600, #0284c7)",
          700: "var(--primary-700, #0369a1)",
          800: "var(--primary-800, #075985)",
          900: "var(--primary-900, #0c4a6e)",
        },
        secondary: {
          50: "var(--secondary-50, #f8fafc)",
          100: "var(--secondary-100, #f1f5f9)",
          200: "var(--secondary-200, #e2e8f0)",
          300: "var(--secondary-300, #cbd5e1)",
          400: "var(--secondary-400, #94a3b8)",
          500: "var(--secondary-500, #64748b)",
          600: "var(--secondary-600, #475569)",
          700: "var(--secondary-700, #334155)",
          800: "var(--secondary-800, #1e293b)",
          900: "var(--secondary-900, #0f172a)",
        },
      },
      fontFamily: {
        sans: ["var(--font-family, system-ui)", "system-ui", "sans-serif"],
      },
      spacing: {
        xs: "var(--spacing-xs, 0.5rem)",
        sm: "var(--spacing-sm, 1rem)",
        md: "var(--spacing-md, 1.5rem)",
        lg: "var(--spacing-lg, 2rem)",
        xl: "var(--spacing-xl, 3rem)",
      },
      borderRadius: {
        none: "var(--radius-none, 0)",
        sm: "var(--radius-sm, 0.125rem)",
        md: "var(--radius-md, 0.375rem)",
        lg: "var(--radius-lg, 0.5rem)",
        full: "var(--radius-full, 9999px)",
      },
    },
  },
  plugins: [],
};
