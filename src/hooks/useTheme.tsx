
import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check if window is defined (for SSR/build time)
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system'; // Default on server or during build
  });

  const applyTheme = useCallback((currentTheme: Theme) => {
    if (typeof window === 'undefined') return; // Guard against SSR

    const root = window.document.documentElement;
    let isDark: boolean;

    if (currentTheme === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.removeItem('theme'); // Remove override when switching to system
    } else {
      isDark = currentTheme === 'dark';
      localStorage.setItem('theme', currentTheme); // Store user preference
    }

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    root.style.setProperty('color-scheme', isDark ? 'dark' : 'light'); // Update color-scheme CSS property

  }, []);


  useEffect(() => {
    applyTheme(theme);

    // Listen for system theme changes only if theme is 'system'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only re-apply if the current theme is 'system'
      if ((localStorage.getItem('theme') || 'system') === 'system') {
         applyTheme('system');
         // Optionally, force re-render if component state needs update based on system change
         // setThemeState('system'); // Re-setting state ensures components depending on `theme` re-render
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);

  }, [theme, applyTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    // applyTheme is called via useEffect when theme state changes
  };

  // Function to toggle between light and dark explicitly
  const toggleTheme = () => {
     if (typeof window === 'undefined') return; // Guard clause

     let currentEffectiveTheme: 'light' | 'dark';
     const storedTheme = localStorage.getItem('theme');

     if (storedTheme) {
        currentEffectiveTheme = storedTheme as 'light' | 'dark';
     } else {
        currentEffectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
     }

     // Toggle based on the resolved current theme
     setTheme(currentEffectiveTheme === 'dark' ? 'light' : 'dark');
  };


  return { theme, setTheme, toggleTheme };
}