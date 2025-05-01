
// tailwind.config.ts
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
    darkMode: ["class"], // Use class strategy for dark mode
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./node_modules/@tremor/react/**/*.{js,ts,jsx,tsx}", // Required for Magic UI components like Charts
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
            fontFamily: {
                mono: ["Fira Code", ...defaultTheme.fontFamily.mono], // Primary terminal font
                sans: ["Inter", ...defaultTheme.fontFamily.sans], // Optional secondary font
            },
            colors: {
                // Base terminal colors
                'terminal-bg': 'hsl(var(--terminal-bg))',         // Dark background
                'terminal-fg': 'hsl(var(--terminal-fg))',         // Default text (light grey/white)
                'terminal-green': 'hsl(var(--terminal-green))',   // Classic green text/accent
                'terminal-amber': 'hsl(var(--terminal-amber))',   // Amber text/accent
                'terminal-cyan': 'hsl(var(--terminal-cyan))',     // Cyan text/accent
                'terminal-magenta': 'hsl(var(--terminal-magenta))', // Magenta text/accent
                'terminal-blue': 'hsl(var(--terminal-blue))',      // Blue text/accent
                'terminal-red': 'hsl(var(--terminal-red))',        // Red text/accent

                // Shadcn UI colors mapped to terminal theme
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
                // Magic UI keyframes (if not automatically handled by their components)
                "meteor": {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                      transform: "rotate(215deg) translateX(-500px)",
                      opacity: "0",
                    },
                },
                 "shine": {
                   "from": { backgroundPosition: "200% 0" },
                   "to": { backgroundPosition: "-200% 0" },
                 },
                 "border-beam": {
                     "100%": { "offset-distance": "100%" },
                 },
                 "marquee": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                  },
                  "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                  },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "meteor": "meteor 5s linear infinite",
                "shine": "shine 8s ease-in-out infinite",
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
                "marquee": "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            },
        },
    },
    plugins: [animatePlugin, require("@tailwindcss/typography")], // Include animate and typography plugins
} satisfies Config;

export default config;