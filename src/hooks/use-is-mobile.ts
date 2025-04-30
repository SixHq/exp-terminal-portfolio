
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const MOBILE_BREAKPOINT = 768; // Example breakpoint (adjust as needed, e.g., based on Tailwind's 'md')

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Initial check based on window width
      const mobileCheck = window.innerWidth < MOBILE_BREAKPOINT;

      // More robust check for touch capabilities (optional but recommended)
      if (!mobileCheck && 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
         // If width is >= breakpoint but touch is supported, consider it mobile-like
         // You might adjust this logic based on your specific needs
         // mobileCheck = true; // Uncomment if you want touch devices >= breakpoint to be treated as mobile
      }
      setIsMobile(mobileCheck);
    };

    // Check on mount
    checkDevice();

    // Check on resize
    window.addEventListener('resize', checkDevice);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
}