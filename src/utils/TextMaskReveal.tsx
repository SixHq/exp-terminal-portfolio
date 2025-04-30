
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from "@/lib/utils"; // Assuming Shadcn UI utils

interface TextMaskRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    revealColor?: string; // e.g., 'bg-starlight-gold'
}

const TextMaskReveal: React.FC<TextMaskRevealProps> = ({
    children,
    className,
    delay = 0,
    duration = 0.6,
    revealColor = 'bg-starlight-gold', // Default reveal color
}) => {
    const textVariants: Variants = {
        hidden: { y: '100%', opacity: 0 },
        visible: {
            y: '0%',
            opacity: 1,
            transition: {
                duration: duration,
                ease: [0.22, 1, 0.36, 1], // Strong ease-out (similar to ease-out-quart)
                delay: delay + duration * 0.3, // Delay text appearance slightly after mask moves
            },
        },
    };

    const maskVariants: Variants = {
        hidden: { y: '-100%' },
        visible: {
            y: '100%',
            transition: {
                duration: duration,
                ease: [0.22, 1, 0.36, 1], // Strong ease-out
                delay: delay,
            },
        },
    };

    return (
        <div className={cn("relative inline-block overflow-hidden", className)}>
            {/* The Mask */}
            <motion.div
                variants={maskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
                className={cn("absolute inset-0 z-10", revealColor)}
                style={{ transformOrigin: 'bottom' }} // Animate from bottom up
            />
            {/* The Text */}
            <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                style={{ transformOrigin: 'bottom' }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TextMaskReveal;