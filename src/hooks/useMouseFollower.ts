
import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMouseFollower() {
  const [position, setPosition] = useState<MousePosition>({ x: -100, y: -100 }); // Start off-screen

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return position;
}