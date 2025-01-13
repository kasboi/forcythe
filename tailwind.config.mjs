import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' }, // => @media (max-width: 1535px) { ... }
      xl: { max: '1280px' }, // => @media (max-width: 1279px) { ... }
      lg: { max: '1024px' }, // => @media (max-width: 1023px) { ... }
      md: { max: '769px' }, // => @media (max-width: 767px) { ... }
      sm: { max: '640px' }, // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Lexend Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
