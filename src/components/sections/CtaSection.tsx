
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Particles } from "@/components/magicui/particles"; // For extra background flair
import { AbstractBackgroundSVG } from "@/components/icons/AbstractBackgroundSVG"; // Import the SVG

const CtaSection: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    // Ensure targetRef is passed correctly for scroll tracking
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], // Animate throughout its visibility relative to viewport
    });

    const headlineVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1], delay: 0.1 },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1], delay: 0.3 },
        },
    };

    // Use scrollYProgress directly for background animations
    // Fade the entire background layer in and out smoothly as it scrolls through view
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={targetRef} // Attach ref here
            id="cta"
            className={cn(
                "relative w-full overflow-hidden py-24 md:py-40",
                "bg-neutral-off-white dark:bg-rich-black" // Use neutral/black for contrast
            )}
        >
            {/* Layer 1: Subtle Particles */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={75}
                color="hsl(var(--primary))" // Use primary/accent color for particles
                vx={0} // Keep particles relatively static horizontally
                vy={0} // Keep particles relatively static vertically
                ease={60}
                size={0.3}
                staticity={40} // More static particles
                refresh={false} // No need to refresh continuously
            />

            {/* Layer 2: Animated Abstract SVG Background */}
            {/* Control overall opacity of the SVG layer */}
            <motion.div
                 className="absolute inset-0 z-10"
                 style={{ opacity: backgroundOpacity }}
             >
                 {/* Pass scrollYProgress to the SVG component */}
                 <AbstractBackgroundSVG scrollProgress={scrollYProgress} className="opacity-70 dark:opacity-50 mix-blend-multiply dark:mix-blend-lighten" />
            </motion.div>


            {/* Layer 3: Content */}
            <div className="container relative z-20 px-4 md:px-6 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% visible
                    variants={headlineVariants}
                    className="mb-6"
                >
                    <TextAnimate
                        as="h2"
                        animation="blurInUp" // Engaging text animation
                        by="word" // Animate word by word
                        duration={0.8} // Slightly longer duration for emphasis
                        className={cn(
                            "text-headline-md lg:text-headline-lg font-bold tracking-tighter",
                            "text-rich-black dark:text-neutral-off-white"
                        )}
                    >
                        See the code. Build with clarity.
                    </TextAnimate>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% visible
                    variants={buttonVariants}
                >
                    <ShinyButton
                        className={cn(
                            "px-10 py-4 text-lg font-semibold", // Larger padding for prominence
                            "bg-electric-blue hover:bg-electric-blue/90 text-white dark:text-rich-black", // Vibrant accent
                             "transition-all duration-300 ease-in-out",
                             "hover:scale-105 hover:shadow-xl" // Enhanced hover effects
                        )}
                     >
                        Start using DevMode
                    </ShinyButton>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;