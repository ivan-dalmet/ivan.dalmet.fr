/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "class"],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      heading: ["var(--font-heading)", "serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      neutral: {
        "50": "var(--color-neutral-50)",
        "100": "var(--color-neutral-100)",
        "200": "var(--color-neutral-200)",
        "300": "var(--color-neutral-300)",
        "400": "var(--color-neutral-400)",
        "500": "var(--color-neutral-500)",
        "600": "var(--color-neutral-600)",
        "700": "var(--color-neutral-700)",
        "800": "var(--color-neutral-800)",
        "900": "var(--color-neutral-900)",
        "950": "var(--color-neutral-950)",
      },
      background: "var(--color-background)",
      ["background-from"]: "var(--color-background-from)",
      ["background-to"]: "var(--color-background-to)",
      foreground: "var(--color-foreground)",
      highlight: "var(--color-highlight)",
      link: "var(--color-link)",
      ["link-decoration"]: "var(--color-link-decoration)",
      border: "var(--color-border)",
      ["accent-text"]: "var(--color-accent-text)",
      ["image-background"]: "var(--color-image-background)",
      ["image-background-from"]: "var(--color-image-background-from)",
      ["image-background-to"]: "var(--color-image-background-to)",
      ["image-accent"]: "var(--color-image-accent)",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
