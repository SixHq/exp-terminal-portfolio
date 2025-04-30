
import { useState, useEffect } from 'react';

/**
 * Custom hook to track the vertical scroll position of the window.
 * @returns {number} The current vertical scroll position.
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', updatePosition);
    // Call handler right away so state gets updated with initial window position
    updatePosition();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', updatePosition);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return scrollPosition;
}