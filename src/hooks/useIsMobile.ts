
import { useState, useEffect } from 'react';

// Define a standard breakpoint (Tailwind's md = 768px)
const MOBILE_BREAKPOINT = 768;

/**
 * Custom hook to detect if the current viewport width is below a mobile breakpoint.
 * @param {number} breakpoint - The pixel width breakpoint. Defaults to 768.
 * @returns {boolean} True if the viewport width is less than the breakpoint, false otherwise.
 */
export const useIsMobile = (breakpoint: number = MOBILE_BREAKPOINT): boolean => {
  // Initialize state, ensuring it's false SSR/initial render before window is defined
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to check window width
    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check size immediately after component mounts
    checkDeviceSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkDeviceSize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };
  }, [breakpoint]); // Re-run effect if breakpoint prop changes

  return isMobile;
};