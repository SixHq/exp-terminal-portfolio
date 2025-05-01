
import React from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

// Define the props if needed, though this component might not need direct props
interface AbstractBackgroundSVGProps extends React.SVGProps<SVGSVGElement> {
    scrollProgress?: any; // Accept scroll progress from parent
}


export const AbstractBackgroundSVG: React.FC<AbstractBackgroundSVGProps> = ({ scrollProgress, className, ...props }) => {
    // Example: Define scale transformations based on scroll progress
    // These ranges (e.g., [0, 1]) and outputs (e.g., [0.8, 1.2]) need tuning based on scroll behavior
    // Ensure scrollProgress is valid before using useTransform
    const scaleCircle1 = useTransform(scrollProgress ?? 0, [0, 1], [0.9, 1.1]);
    const scaleRect1 = useTransform(scrollProgress ?? 0, [0, 1], [1.1, 0.9]);
    const scaleSquiggle = useTransform(scrollProgress ?? 0, [0, 1], [0.85, 1.15]);
    const rotateRect2 = useTransform(scrollProgress ?? 0, [0, 1], [-10, 10]);
    const scaleOrangeCircle = useTransform(scrollProgress ?? 0, [0, 1], [1.1, 0.85]);
    const rotatePlumBlock = useTransform(scrollProgress ?? 0, [0, 1], [5, -5]);
    const moveBlueCircleX = useTransform(scrollProgress ?? 0, [0,1], [-10, 10]);
    const movePinkRectY = useTransform(scrollProgress ?? 0, [0,1], [10, -10]);


    return (
        <svg
            viewBox="0 0 500 300" // Adjust viewBox as needed
            preserveAspectRatio="xMidYMid slice" // Ensure it covers the area
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("absolute inset-0 w-full h-full z-0 overflow-visible", className)}
            {...props}
        >
            {/* Use motion components for animatable elements */}

            {/* Electric Blue Circle */}
            <motion.circle
                cx="80" cy="150" r="50"
                fill="#00AEEF" fillOpacity="0.6"
                style={{ scale: scaleCircle1, transformOrigin: 'center center' }}
            />

            {/* Soft Pink Rectangle */}
            <motion.rect
                x="350" y="50" width="100" height="100" rx="10"
                fill="#FFB3C1" fillOpacity="0.7"
                style={{ scale: scaleRect1, rotate: rotateRect2, transformOrigin: 'center center' }}
             />

            {/* Lime Green Squiggle */}
            <motion.path
                d="M30,30 C80,80 150,0 200,50 S 300,150 350,100"
                stroke="#A5E887" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.8"
                style={{ scale: scaleSquiggle, transformOrigin: '190px 50px' }} // Approximate center
            />

             {/* Bright Orange Circle */}
            <motion.circle
                 cx="420" cy="250" r="40"
                 fill="#FFA500" fillOpacity="0.6"
                  style={{ scale: scaleOrangeCircle, transformOrigin: 'center center' }} // Different scale
            />

            {/* Deep Plum Block */}
            <motion.rect
                x="50" y="220" width="120" height="60" rx="5"
                fill="#4B0055" fillOpacity="0.7"
                 style={{ rotate: rotatePlumBlock, transformOrigin: 'center center' }} // Different rotation
            />

              {/* Smaller Accent Shapes */}
             <motion.circle cx="250" cy="200" r="15" fill="#00AEEF" fillOpacity="0.5" style={{ x: moveBlueCircleX }}/>
             <motion.rect x="180" y="120" width="30" height="30" rx="4" fill="#FFB3C1" fillOpacity="0.6" style={{ y: movePinkRectY }}/>

        </svg>
    );
};