import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        green: {
          600: '#4CAF50',
          700: '#43A047',
        },
        red: {
          600: '#F44336',
          700: '#E53935',
        },
        gray: {
          50: '#F9FAFB',
          400: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#333333',
        },
      },
    },
  },
  plugins: [],
};

export default config;
