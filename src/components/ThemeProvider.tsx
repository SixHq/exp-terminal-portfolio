
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
        const storedTheme = localStorage.getItem(storageKey) as Theme | null;
        return storedTheme || defaultTheme;
    } catch (error) {
        console.error("Error reading localStorage key “"+storageKey+"”:", error);
        return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    let currentTheme = theme;
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      currentTheme = systemTheme;
    }

    root.classList.add(currentTheme);

    // Optional: Add theme name as data attribute for easier CSS targeting
    root.setAttribute('data-theme', currentTheme);

  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      try {
          localStorage.setItem(storageKey, newTheme);
          setTheme(newTheme);
      } catch (error) {
          console.error("Error setting localStorage key “"+storageKey+"”:", error);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};