import svgToDataUri from "mini-svg-data-uri";
import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

// Utility function to generate SVG background
const generateSvgBackground = (
  width: number,
  height: number,
  path: string,
  value: string,
) => {
  return `url("${svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${width}" height="${height}" fill="none" stroke="${value}">${path}</svg>`,
  )}")`;
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slow-spin": "spin 6s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      const colors = theme("colors");
      matchUtilities(
        {
          "bg-grid-lg": (value: string) => ({
            backgroundImage: generateSvgBackground(
              64,
              64,
              '<path d="M0 .5H31.5V32"/>',
              value,
            ),
          }),
          "bg-grid-md": (value: string) => ({
            backgroundImage: generateSvgBackground(
              32,
              32,
              '<path d="M0 .5H31.5V32"/>',
              value,
            ),
          }),
          "bg-grid-sm": (value: string) => ({
            backgroundImage: generateSvgBackground(
              8,
              8,
              '<path d="M0 .5H31.5V32"/>',
              value,
            ),
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: generateSvgBackground(
              16,
              16,
              '<circle fill="' +
                value +
                '" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle>',
              value,
            ),
          }),
        },
        {
          values: colors,
          type: "color",
        },
      );
    }),
  ],
};

export default withUt(config);
