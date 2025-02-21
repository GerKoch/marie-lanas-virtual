import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ssm: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      container: {
        center: true,

      },

    },
  },
  plugins: [],
} satisfies Config;
