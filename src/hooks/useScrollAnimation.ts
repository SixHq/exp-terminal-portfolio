
import { useRef } from 'react';
import { useInView, Variants } from 'framer-motion';

interface ScrollAnimationOptions {
  once?: boolean;
  margin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = { once: true, margin: "-100px 0px" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: options.once,
    // @ts-expect-error TODO: Investigate framer-motion MarginType issue
    margin: options.margin,
  });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 }, // Default: slide up + fade in
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96], // Smooth ease-out quad
      },
    },
  };

  const getAnimationProps = (customVariants?: Variants) => ({
    ref,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants: customVariants || defaultVariants,
  });

  return { ref, isInView, getAnimationProps, defaultVariants };
};

// Define common animation variants
export const slideUpFadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeIn" },
  },
};

export const scaleUpVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } // Ease out expo
    },
};

export const textMaskRevealVariants: Variants = {
  hidden: { y: '110%', skewY: 5 },
  visible: {
    y: '0%',
    skewY: 0,
    transition: { duration: 0.7, ease: [0.25, 0.25, 0, 1.03] }, // Custom cubic-bezier for overshoot
  },
};

export const layeredTextRevealVariants = (index: number): Variants => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }, // Alternating slide direction
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: index * 0.05, // Slight stagger
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Smooth ease-out cubic
    },
  },
});
