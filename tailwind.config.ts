
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
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
        // DevMode Palette
        'pastel-yellow-green': '#F1FFD4',
        'light-lavender': '#E8D9F0',
        'neutral-off-white': '#FAFAFA',
        'rich-black': '#0A0A0A',
        'electric-blue': '#00AEEF',
        'soft-pink': '#FFB3C1',
        'lime-green': '#A5E887',
        'bright-orange': '#FFA500',
        'deep-plum': '#4B0055',

        // Shadcn UI Base Colors (Ensure consistency)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Default background
        foreground: "hsl(var(--foreground))", // Default text
        primary: {
          DEFAULT: "hsl(var(--primary))", // Can map to an accent like electric-blue if needed
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Can map to another accent or neutral
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
          DEFAULT: "hsl(var(--accent))", // Map to a prominent accent like electric-blue
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
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        // Add mono if needed for code examples
        // mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      fontSize: {
        // Example: Defining custom sizes based on the brief
        'headline-lg': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'headline-md': ['40px', { lineHeight: '1.15', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
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
        // Magic UI Keyframes (Ensure these are present if components rely on them)
        "gradient": {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
         "shine": {
          "from": { backgroundPosition: "200% 0" },
          "to": { backgroundPosition: "-200% 0" },
        },
        "aurora": {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "meteor": {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
         "spin": {
          "0%": {
            rotate: "0deg",
          },
          "100%": {
            rotate: "360deg",
          },
        },
         "ripple": {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        "pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Magic UI Animations
        "gradient": "gradient 8s linear infinite",
        "marquee": "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "shine": "shine 8s ease-in-out infinite",
        "aurora": "aurora 60s linear infinite",
        "meteor": "meteor 5s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) linear infinite",
         "spin": "spin calc(var(--speed)*1s) linear infinite",
        "ripple": "ripple 3400ms ease-out infinite",
        "pulse": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;