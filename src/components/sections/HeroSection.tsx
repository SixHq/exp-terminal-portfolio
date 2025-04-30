
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Globe } from '@/components/magicui/globe'; // Visually engaging element
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'; // For headline
import { TextReveal } from '@/components/magicui/text-reveal'; // For subheadline
import { ShinyButton } from '@/components/magicui/shiny-button'; // Prominent CTA
import { Meteors } from '@/components/magicui/meteors'; // Background effect
import { fadeIn, scale, staggerContainer, textMaskReveal } from '@/lib/animations'; // Animation variants
import { ArrowRightIcon } from '@radix-ui/react-icons';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[95vh] flex items-center justify-center overflow-hidden pt-20"> {/* Increased height & added padding top */}
        {/* Background Effects */}
        <Meteors number={30} className="absolute inset-0 z-0" />
         {/* Removed DotPattern here as it's already in Layout */}

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                {/* Left Content: Text + CTA */}
                <motion.div
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                    variants={staggerContainer(0.2, 0.3)} // Stagger children animation
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Headline with Mask Reveal and Gradient */}
                     <motion.div
                        variants={textMaskReveal(0.9, 0.1)}
                        className="mb-6" // Added margin bottom
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading tracking-tight">
                            <AnimatedGradientText
                                colorFrom="hsl(var(--primary))" // Use primary color from theme
                                colorTo="hsl(var(--secondary))" // Use secondary color from theme
                                speed={4} // Adjust gradient speed
                                className="pb-2" // Add padding bottom for mask reveal space
                            >
                                Enter the
                            </AnimatedGradientText>
                             <br />
                             <AnimatedGradientText
                                colorFrom="hsl(var(--secondary))" // Use secondary color from theme
                                colorTo="hsl(var(--accent))" // Use accent color from theme
                                speed={4.5} // Slightly different speed
                                className="pb-2"
                            >
                                CryptoVerse.
                             </AnimatedGradientText>
                        </h1>
                    </motion.div>

                    {/* Subheadline with Text Reveal */}
                    <motion.div
                        variants={fadeIn('up', 20, 0.7, 0.4)} // Apply simple fade in for subheadline container
                        className="max-w-lg mx-auto md:mx-0 mb-10 text-base sm:text-lg text-muted-foreground" // Use muted-foreground
                    >
                       {/* TextReveal doesn't need motion wrapper if direct child of staggered container, but let's wrap for consistency */}
                       {/* Note: TextReveal animates based on scroll, whileInView on parent handles initial load trigger */}
                       <TextReveal>
                          Experience the next generation of decentralized finance. Secure, transparent, and built for the future. Join the revolution today.
                       </TextReveal>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div variants={fadeIn('up', 20, 0.6, 0.6)}>
                        <ShinyButton className="group px-8 py-3 text-base sm:text-lg">
                            <span>Explore Now</span>
                            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                        </ShinyButton>
                    </motion.div>
                </motion.div>

                {/* Right Content: Globe Visual */}
                 <motion.div
                    className="relative flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] w-full" // Fixed height for globe container
                    variants={scale(0.8, 1, 1, 0.2)} // Scale animation
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                 >
                   <Globe
                      className="absolute inset-0 opacity-80 md:opacity-100" // Full size within container, adjust opacity
                    />
                 </motion.div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;