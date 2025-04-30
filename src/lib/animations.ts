
import { Variants } from "motion/react";

// Default easing for smooth transitions
const defaultEasing = [0.6, -0.05, 0.01, 0.99]; // Ease-out quint

/**
 * Fade In Variants
 * @param direction - 'up', 'down', 'left', 'right' (default: 'up')
 * @param distance - Pixel distance to fade from (default: 30)
 * @param duration - Animation duration (default: 0.6)
 * @param delay - Animation delay (default: 0)
 * @param staggerChildren - Stagger delay for child elements
 * @param delayChildren - Delay before starting children animation
 */
export const fadeIn = (
    direction: 'up' | 'down' | 'left' | 'right' = 'up',
    distance: number = 30,
    duration: number = 0.6,
    delay: number = 0,
    staggerChildren?: number,
    delayChildren?: number
): Variants => {
    const axis = (direction === 'up' || direction === 'down') ? 'y' : 'x';
    const initialValue = direction === 'down' || direction === 'right' ? -distance : distance;
    const finalValue = 0;

    return {
        hidden: {
            opacity: 0,
            [axis]: initialValue,
        },
        show: {
            opacity: 1,
            [axis]: finalValue,
            transition: {
                duration,
                delay,
                ease: defaultEasing,
                ...(staggerChildren && { staggerChildren }),
                ...(delayChildren && { delayChildren }),
            },
        },
        exit: { // Optional exit animation
             opacity: 0,
             [axis]: initialValue,
             transition: {
                duration: duration * 0.8, // Faster exit
                ease: defaultEasing,
            },
        }
    };
};

/**
 * Slide Up/Down Variants (Similar to fadeIn but focuses on movement)
 * @param direction - 'up' or 'down' (default: 'up')
 * @param distance - Pixel distance to slide from (default: 50)
 * @param duration - Animation duration (default: 0.7)
 * @param delay - Animation delay (default: 0)
 */
export const slide = (
    direction: 'up' | 'down' = 'up',
    distance: number = 50,
    duration: number = 0.7,
    delay: number = 0
): Variants => {
    const initialValue = direction === 'up' ? distance : -distance;
    return {
        hidden: { y: initialValue, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration,
                delay,
                ease: [0.43, 0.13, 0.23, 0.96], // Ease-out cubic for slide
            },
        },
         exit: {
            y: initialValue,
            opacity: 0,
            transition: {
                duration: duration * 0.7,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        }
    };
};

/**
 * Scale on Scroll / Appearance Variants
 * @param initialScale - Starting scale (default: 0.9)
 * @param finalScale - Ending scale (default: 1)
 * @param duration - Animation duration (default: 0.8)
 * @param delay - Animation delay (default: 0.1)
 */
export const scale = (
    initialScale: number = 0.9,
    finalScale: number = 1,
    duration: number = 0.8,
    delay: number = 0.1
): Variants => {
    return {
        hidden: { scale: initialScale, opacity: 0 },
        show: {
            scale: finalScale,
            opacity: 1,
            transition: {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // Ease-out expo for scale
            },
        },
         exit: {
            scale: initialScale,
            opacity: 0,
            transition: {
                duration: duration * 0.7,
                ease: [0.16, 1, 0.3, 1],
            },
        }
    };
};

/**
 * Text Mask Reveal Variants (using clip-path)
 * @param duration - Animation duration (default: 0.8)
 * @param delay - Animation delay (default: 0)
 */
export const textMaskReveal = (
    duration: number = 0.8,
    delay: number = 0
): Variants => {
    return {
        hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 10 }, // Start fully masked from bottom
        show: {
            clipPath: 'inset(0% 0 0 0)', // Reveal
            opacity: 1,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.77, 0, 0.175, 1], // Custom cubic bezier for sharp reveal
            },
        },
        exit: {
            clipPath: 'inset(0 0 100% 0)', // Mask out to top on exit
            opacity: 0,
            y: -10,
            transition: {
                duration: duration * 0.7,
                ease: [0.77, 0, 0.175, 1],
            },
        }
    };
};

/**
 * Staggered Container Variant (for use with child items using simple fadeIn)
 * @param staggerChildren - Delay between children animations (default: 0.1)
 * @param delayChildren - Delay before starting the first child animation (default: 0)
 */
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
         exit: {
            transition: {
                staggerChildren: staggerChildren * 0.5, // Faster exit stagger
                staggerDirection: -1 // Reverse order on exit
            }
        }
    };
};

/**
 * Simple Fade In for staggered children
 */
export const simpleFadeIn: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: defaultEasing } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: defaultEasing } },
};