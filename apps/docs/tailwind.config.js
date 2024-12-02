/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "!../../packages/node_modules/**/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
