import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "var(--font-nunito)",
        display: "var(--font-nunito-sans)",
      },
      maxWidth: {
        container: "76.25rem",
      },
      lineHeight: {
        short: "120%",
        base: "150%",
      }
    },
  },
  plugins: [],
} satisfies Config;
