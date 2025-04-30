
// tailwind.config.ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Near Black
        foreground: "hsl(var(--foreground))", // Light Text
        primary: {
          DEFAULT: "hsl(var(--primary))", // Neon Blue
          foreground: "hsl(var(--primary-foreground))", // Dark for contrast on neon
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Neon Pink
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Dimmed background elements
          foreground: "hsl(var(--muted-foreground))", // Dimmed text (e.g., #8892b0)
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Neon Green
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
        'dark-navy': '#0a192f',
        'near-black': '#020617',
        'neon-blue': '#00f6ff',
        'neon-pink': '#ff07e6',
        'neon-green': '#39ff14',
        'neon-purple': '#bc13fe',
        'light-text': '#e6f1ff', // Brighter text
        'dim-text': '#8892b0',   // Dimmer text
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
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
        "neon-glow": {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.8' },
        },
        "border-beam": {
            "100%": {
              "offset-distance": "100%",
            },
        },
         "shine": {
            "from": { backgroundPosition: '200% 0' },
            "to": { backgroundPosition: '-200% 0' },
        },
        "meteor": {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-glow": "neon-glow 1.5s ease-in-out infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "shine": "shine 8s linear infinite",
        "meteor": "meteor 5s linear infinite",
      },
      boxShadow: {
        'neon-blue-sm': '0 0 3px #00f6ff, 0 0 5px #00f6ff',
        'neon-blue-md': '0 0 5px #00f6ff, 0 0 10px #00f6ff, 0 0 15px #00f6ff',
        'neon-blue-lg': '0 0 10px #00f6ff, 0 0 20px #00f6ff, 0 0 30px #00f6ff',
        'neon-pink-sm': '0 0 3px #ff07e6, 0 0 5px #ff07e6',
        'neon-pink-md': '0 0 5px #ff07e6, 0 0 10px #ff07e6, 0 0 15px #ff07e6',
        'neon-pink-lg': '0 0 10px #ff07e6, 0 0 20px #ff07e6, 0 0 30px #ff07e6',
        'neon-green-sm': '0 0 3px #39ff14, 0 0 5px #39ff14',
        'neon-green-md': '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14',
        'neon-green-lg': '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
        'neon-purple-sm': '0 0 3px #bc13fe, 0 0 5px #bc13fe',
        'neon-purple-md': '0 0 5px #bc13fe, 0 0 10px #bc13fe, 0 0 15px #bc13fe',
        'neon-purple-lg': '0 0 10px #bc13fe, 0 0 20px #bc13fe, 0 0 30px #bc13fe',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
      plugin(({ theme, addUtilities }) => {
        const neonUtilities = Object.entries(theme('boxShadow') ?? {})
          .filter(([key]) => key.startsWith('neon-'))
          .map(([key, value]) => ({
            // Utility for applying neon box-shadow
            [`.${key}`]: {
              boxShadow: value,
            },
            // Utility for applying neon text-shadow (adapted from box-shadow)
            [`.text-${key}`]: {
              // Attempt to create a simpler text-shadow from the box-shadow values
              // This is a basic conversion and might need refinement for complex shadows
              textShadow: (value as string)
                            .split(', ')
                            .map(shadow => shadow.replace(/^(\d+px\s+\d+px)/, '0 0')) // Reset offset to 0 0 for basic glow
                            .slice(0, 2) // Limit to first two shadow layers for simplicity
                            .join(', ')
                            .replace(/0 0 0 0 #0000,/g,''), // Remove potential zero values after conversion attempt
              // Use the core neon color for the text itself
              color: theme(`colors.${key.split('-')[1]}.${key.split('-')[2] === 'foreground' ? 'foreground' : 'DEFAULT'}`, theme(`colors.${key.split('-')[1]}`, '#fff')),
               animation: 'neon-glow 1.5s ease-in-out infinite alternate', // Add subtle pulse
            },
          }));
        addUtilities(neonUtilities);
      }),
  ],
} satisfies Config;

export default config;