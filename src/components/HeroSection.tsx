
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Globe } from "@/components/magicui/globe";
import { Particles } from "@/components/magicui/particles";
import { TextAnimate } from "@/components/magicui/text-animate"; // Using TextAnimate for mask reveal
import { TextReveal } from "@/components/magicui/text-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Scroll-triggered animations using motion/react
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]); // Fade in, then fade out
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]); // Scale up effect
  const y = useTransform(scrollYProgress, [0, 0.5], ["50px", "0px"]); // Slide up effect

  // Custom variants for TextAnimate mask reveal (slide left effect)
   const maskRevealVariants = {
     hidden: { WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 0%)", maskImage: "linear-gradient(to left, transparent 0%, black 0%)" },
     show: {
        WebkitMaskImage: "linear-gradient(to left, transparent 100%, black 100%)",
        maskImage: "linear-gradient(to left, transparent 100%, black 100%)",
        transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }, // Custom ease for energetic feel
     },
  };


  return (
    <section
      ref={targetRef}
      className="relative w-full h-[120vh] flex flex-col items-center justify-center overflow-hidden py-20 md:py-32" // Increased height for scroll effects
    >
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        color="#39ff14" // Neon Green particles
        vx={0}
        vy={0.1} // Slow downward drift
        ease={80}
        staticity={30}
        size={0.5}
        refresh={false}
      />

      {/* Animated Content Container */}
      <motion.div
       
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Headline with Text Mask Reveal */}
        <TextAnimate
            as="h1"
            className="text-lg md:text-xl text-muted-foreground"
        >
          Level Up Together
        </TextAnimate>


        {/* Subheadline with Scroll-Triggered Reveal */}
        <div className="max-w-2xl mb-10">
           <TextReveal className="text-lg md:text-xl text-muted-foreground">
            Join the ultimate gaming hub. Connect with fellow gamers, dominate the leaderboards, and forge legendary alliances. Your next adventure starts here.
           </TextReveal>
        </div>


        {/* Call to Action Button with Shimmer and Hover Effects */}
        <ShimmerButton
          className="shadow-lg shadow-neon-pink/30 group"
          shimmerColor="hsl(var(--neon-pink))" // Use neon pink for shimmer
          background="hsl(var(--dark-bg))" // Use dark background
          borderRadius="9999px" // Fully rounded
          shimmerSize="0.1em"
          shimmerDuration="4s"
        >
           <span
             className={cn(
                "whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight",
                "text-white dark:from-white dark:to-slate-900/10", // Standard text color
                "group-hover:text-neon-pink group-hover:scale-105 group-hover:text-glow-pink transition-all duration-300 ease-in-out" // Hover effects
             )}
            >
             Join the Community
           </span>
        </ShimmerButton>

      </motion.div>

      {/* Globe Visual - positioned slightly below center */}
         <Globe
           className="opacity-50" // Make globe slightly transparent
         />
     
       {/* Optional Subtle Border Beam around the section */}
       {/* <BorderBeam size={150} duration={8} delay={2} colorFrom="hsl(var(--neon-cyan))" colorTo="hsl(var(--neon-pink))" /> */}
    </section>
  );
};

export default HeroSection;