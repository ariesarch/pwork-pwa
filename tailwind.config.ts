import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["10px", "18px"],
      sm: ["12px", "20px"],
      md: ["13px", "19.24px"],
      base: ["15px", "22.5px"],
      lg: ["20px", "26px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["36px", "44px"],
      "4xl": ["40px", "48px"],
      "5xl": ["48px", "56px"],
    },
    colors: {
      patchwork_red: {
        100: "var(--patchwork-red-100)",
        200: "var(--patchwork-red-200)",
        300: "var(--patchwork-red-300)",
        400: "var(--patchwork-red-400)",
        500: "var(--patchwork-red-500)",
        600: "var(--patchwork-red-600)",
        700: "var(--patchwork-red-700)",
      },
      patchwork_purple: {
        300: "var(--patchwork-purple-300)",
        400: "var(--patchwork-purple-400)",
        500: "var(--patchwork-purple-500)",
        600: "var(--patchwork-purple-600)",
        700: "var(--patchwork-purple-700)",
      },
      patchwork_blue: {
        100: "var(--patchwork-blue-100)",
        200: "var(--patchwork-blue-200)",
        300: "var(--patchwork-blue-300)",
        400: "var(--patchwork-blue-400)",
        500: "var(--patchwork-blue-500)",
        600: "var(--patchwork-blue-600)",
        700: "var(--patchwork-blue-700)",
      },
      patchwork_green: {
        100: "var(--patchwork-green-100)",
        200: "var(--patchwork-green-200)",
        300: "var(--patchwork-green-300)",
        400: "var(--patchwork-green-400)",
        500: "var(--patchwork-green-500)",
        600: "var(--patchwork-green-600)",
        700: "var(--patchwork-green-700)",
      },
      patchwork_yellow: {
        100: "var(--patchwork-yellow-100)",
        200: "var(--patchwork-yellow-200)",
        300: "var(--patchwork-yellow-300)",
        400: "var(--patchwork-yellow-400)",
        500: "var(--patchwork-yellow-500)",
        600: "var(--patchwork-yellow-600)",
        700: "var(--patchwork-yellow-700)",
      },

      patchwork_black: {
        50: "var(--patchwork-black-50)",
        100: "var(--patchwork-black-100)",
        200: "var(--patchwork-black-200)",
        300: "var(--patchwork-black-300)",
        400: "var(--patchwork-black-400)",
        500: "var(--patchwork-black-500)",
        600: "var(--patchwork-black-600)",
        700: "var(--patchwork-black-700)",
      },

      patchwork_neutral: {
        400: "var(--patchwork-neutral-400)",
        500: "var(--patchwork-neutral-500)",
        700: "var(--patchwork-neutral-700)",
        800: "var(--patchwork-neutral-800)",
        900: "var(--patchwork-neutral-900)",
      },
      patchwork_white: {
        900: "var(--patchwork-white-900)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
