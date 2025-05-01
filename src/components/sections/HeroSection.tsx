
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShinyButton } from "@/components/magicui/shiny-button";

// SVG obtained from the tool
const SplitViewSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    version="1.1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="w-full h-auto max-w-lg mx-auto text-rich-black dark:text-neutral-off-white"
  >
    <style type="text/css">{`
	.st0{fill:currentColor;}
    `}</style>
    <g id="Layer_1" />
    <g id="Layer_2">
      <g>
        <path
          className="st0"
          d="M420.13,91.87c-52.82-52.83-138.78-52.82-191.6,0c-6.25,6.25-6.25,16.38,0,22.63    c3.12,3.13,7.22,4.69,11.31,4.69c4.09,0,8.19-1.56,11.31-4.69c40.35-40.35,106-40.35,146.35,0c40.35,40.35,40.35,106,0,146.35    L260.84,397.51c-20.18,20.18-46.67,30.26-73.17,30.26c-26.5,0-53-10.09-73.17-30.26c-40.35-40.35-40.35-106,0-146.35l65.64-65.64    c17.05-17.05,44.81-17.05,61.86,0c17.05,17.06,17.05,44.81,0,61.86l-75.21,75.21c-6.25,6.25-6.25,16.38,0,22.63    c6.25,6.25,16.38,6.25,22.63,0L264.62,270c14.31-14.31,22.18-33.33,22.18-53.56s-7.88-39.25-22.18-53.56    c-29.53-29.53-77.58-29.53-107.11,0l-65.64,65.64c-52.83,52.83-52.83,138.78,0,191.6c26.42,26.42,61.1,39.62,95.8,39.62    c34.69,0,69.39-13.21,95.8-39.62l136.67-136.67C472.96,230.64,472.96,144.69,420.13,91.87z"
        />
      </g>
    </g>
  </svg>
);

const HeroSection: React.FC = () => {
  const initial = { opacity: 0, y: 30 };
  const animate = { opacity: 1, y: 0 };
  const transition = (delay: number = 0) => ({
    duration: 0.6,
    ease: [0.4, 0.0, 0.2, 1], // ease-out-expo like easing
    delay: delay,
  });

  return (
    <section
      id="hero"
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center overflow-hidden",
        "bg-neutral-off-white dark:bg-rich-black py-20 md:py-32" // Primary background
      )}
    >
      {/* Subtle Background Grid */}
      <RetroGrid className="absolute inset-0 opacity-20 dark:opacity-10" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Headline with Box Reveal */}
             <motion.div
               initial={initial}
               animate={animate}
               transition={transition(0.1)}
               className="w-full" // Ensure motion div takes full width for centering/alignment
            >
                <TextAnimate
                  as="h1"
                  animation="blurInUp"
                  by="character"
                  duration={0.8} // Adjust duration for effect
                  delay={0.2} // Start slightly after container animates
                  className={cn(
                    "text-headline-lg lg:text-7xl font-bold tracking-tighter", // Use defined headline size
                    "text-rich-black dark:text-neutral-off-white"
                  )}
                >
                  Visualize. Inspect. Code.
                </TextAnimate>
             </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={initial}
              animate={animate}
              transition={transition(0.4)} // Staggered delay
              className={cn(
                "text-body-lg max-w-xl", // Use defined body size
                "text-muted-foreground dark:text-gray-400"
              )}
            >
              DevMode lets you see the code behind any interface, instantly.
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={initial}
              animate={animate}
              transition={transition(0.7)} // Further staggered delay
            >
              <ShinyButton
                className={cn(
                  "px-8 py-3 text-lg font-semibold",
                  "bg-electric-blue hover:bg-electric-blue/90 text-white", // Use accent color
                  "transition-transform duration-200 ease-in-out",
                  "hover:scale-105 hover:shadow-lg" // Hover effects
                )}
              >
                Try it free
              </ShinyButton>
            </motion.div>
          </div>

          {/* SVG Graphic */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={transition(0.5)} // Stagger delay for visual separation
            className="flex items-center justify-center"
          >
            <SplitViewSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;