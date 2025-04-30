
import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from "@/components/magicui/text-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/magicui/retro-grid"; // Using RetroGrid for background

const ClosingArgumentSection: React.FC = () => {
  // Animation variants for the section container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3, // Stagger text reveal and button
      },
    },
  };

  // Variants for the button fade-in
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }, // Delay after text reveal starts
    },
  };

   // A strong closing statement or quote
  const closingStatement = "Entrust your legal matters to a firm that combines decades of experience with unwavering dedication to client success. Let us be your strongest advocates.";

  return (
    <motion.section
      id="closing-argument"
      className="relative py-20 md:py-32 bg-primary dark:bg-gradient-to-b dark:from-primary dark:to-background/90 text-center overflow-hidden" // Darker background for contrast
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Retro Grid Background Effect */}
      <RetroGrid className="absolute inset-0 z-0 opacity-10 dark:opacity-5" darkLineColor="hsl(var(--primary-foreground) / 0.1)" lightLineColor="hsl(var(--primary-foreground) / 0.1)" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Closing Statement using TextReveal */}
         {/* Note: TextReveal needs direct string children. We wrap it for animation control. */}
         <motion.div
             variants={containerVariants} // Use container stagger timing
             className="mb-10 md:mb-12 max-w-3xl"
         >
            <TextReveal
                 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-snug text-primary-foreground/90 dark:text-primary-foreground"
             >
                {closingStatement}
             </TextReveal>
         </motion.div>


        {/* Final CTA Button */}
        <motion.div variants={buttonVariants}>
           <ShimmerButton
                 className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent"
                shimmerColor="hsl(var(--accent))" // Use accent for shimmer on dark bg
                shimmerSize="0.1em"
                shimmerDuration="3.5s"
                background="hsl(var(--accent))" // Use accent color for button background
                borderRadius="0.5rem"
            >
                 {/* Link wraps the motion span */}
                <a href="#contact" className="block">
                    <motion.span
                        className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-accent-foreground px-10 py-3.5 block lg:text-lg" // Generous padding
                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }} // Scale and brighten on hover
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }} // Springy hover effect
                    >
                        Take the First Step - Contact Us Now
                    </motion.span>
                 </a>
             </ShimmerButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClosingArgumentSection;