import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    darkMode: ["class"], // Enable dark mode based on class
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}', // Make sure to scan src directory
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Path to tremor module
    ],
    prefix: "", // No prefix for utility classes
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
                // Custom Crypto Palette (Dark Theme Focus)
                'deep-blue': {
                    DEFAULT: "hsl(224, 71%, 4%)", // Very dark blue base
                    light: "hsl(224, 60%, 10%)", // Slightly lighter shade
                    medium: "hsl(224, 50%, 20%)", // Medium shade
                },
                'electric-cyan': {
                    DEFAULT: "hsl(180, 100%, 50%)", // Bright cyan accent
                    dark: "hsl(180, 100%, 40%)", // Darker cyan
                },
                'vibrant-purple': {
                    DEFAULT: "hsl(270, 100%, 65%)", // Vibrant purple accent
                    dark: "hsl(270, 100%, 55%)", // Darker purple
                },
                'accent-magenta': "hsl(300, 100%, 60%)", // Secondary accent
                'light-gray': "hsl(210, 20%, 85%)", // For subtle text/borders
                'dark-gray': "hsl(215, 15%, 50%)", // For less prominent elements

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
                    DEFAULT: "hsl(var(--accent))", // Use electric-cyan as default accent
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
                sans: ["var(--font-inter)", ...fontFamily.sans], // Primary sans-serif
                heading: ["var(--font-poppins)", ...fontFamily.sans], // Font for headings
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
                 // Magic UI & Custom Animations
                "meteor": {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                    transform: "rotate(215deg) translateX(-500px)",
                    opacity: "0",
                    },
                },
                "aurora": {
                    from: { backgroundPosition: "50% 50%, 50% 50%" },
                    to: { backgroundPosition: "350% 50%, 350% 50%" },
                },
                 "shine": {
                    "from": { backgroundPosition: "200% 0" },
                    "to": { backgroundPosition: "-200% 0" },
                },
                "border-beam": {
                    "100%": {
                    "offset-distance": "100%",
                    },
                },
                "grid": {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "gradient": {
                    to: {
                        backgroundPosition: "var(--gradient-position)",
                    },
                },
                "spin": {
                    '0%': {
                        rotate: "0deg",
                    },
                    '100%': {
                        rotate: "360deg",
                    },
                },
                'text-reveal': {
                    '0%': {
                        transform: 'translate(0, 100%)',
                    },
                    '100%': {
                        transform: 'translate(0, 0)',
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
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                 // Magic UI & Custom Animations
                "meteor": "meteor 5s linear infinite",
                "aurora": "aurora 60s linear infinite",
                "shine": "shine 8s linear infinite",
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
                "grid": "grid 15s linear infinite",
                "gradient": "gradient 8s linear infinite",
                "spin": "spin 4s linear infinite",
                'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
                 "marquee": "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;