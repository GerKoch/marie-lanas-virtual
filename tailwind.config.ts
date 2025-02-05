import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      container: {
        center: true,
        // padding: '10px'
      },

      colors: {
        accent: '#FF8F9C',
        blackish: '#1b1b1b',
      },
    },
  },
  plugins: [],
} satisfies Config;
