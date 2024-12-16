import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
      animation: {
                        'infinite-scroll': 'infinite-scroll 35s linear infinite',
                        'infinite-scroll-rtl': 'infinite-scroll-rtl 35s linear infinite',
                        'bounce-horizontal': 'horizontal-bounce 3s infinite',
      },
      keyframes: {
                        'infinite-scroll': {
                            from: { transform: 'translateX(0%)' },
                            to: { transform: 'translateX(-100%)' },
                        },
                        'infinite-scroll-rtl': { // New keyframes for right-to-left
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
                    }     },
                    'horizontal-bounce': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
    },
  },
  plugins: [],
};
export default config;
