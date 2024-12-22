import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff', // Light mode background
          dark: '#1a1a1a', // Dark mode background
        },
        foreground: {
          light: '#000000', // Light mode text
          dark: '#ffffff', // Dark mode text
        },
      },
    },
  },
  darkMode: 'media', // Use system preferences for dark/light mode
  plugins: [],
} satisfies Config;
