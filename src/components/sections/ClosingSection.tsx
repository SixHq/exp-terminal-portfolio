
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/magicui/meteors";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { CoolMode } from "@/components/magicui/cool-mode";
import { MorphingText } from "@/components/magicui/morphing-text";


// Reusing ArrowRightIcon
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em" // Adjust size as needed
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={cn("ml-2 size-4", props.className)} // Add margin and allow overriding class
  >
    <path
      d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export function ClosingSection() {
  return (
    // Removed fixed height classes: h-[70vh] md:h-[80vh]
    <section id="closing" className="relative w-full flex items-center justify-center py-24 md:py-32 bg-gradient-to-b from-secondary/10 via-primary/5 to-background">
        {/* Background Elements */}
        <RetroGrid className="inset-0 z-0 opacity-50 dark:opacity-15" angle={75} cellSize={40} />
         <Meteors number={40} minDelay={0.3} maxDelay={1.8} className="absolute inset-0 z-0" />
         <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />


      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center relative z-20"
      >
         {/* Value Proposition */}
            <MorphingText
                texts={[
                    "Ready to Elevate?",
                    "Build the Exceptional.",
                    "Engineer Your Vision.",
                    "Let's Create Magic.",
                ]}
                className="justify-center" // Center the morphing text
            />
       

        {/* Concise Statement */}
        <div className="max-w-xl lg:max-w-2xl mx-auto mb-10 md:mb-12">
            <TextReveal className="text-muted-foreground md:text-xl lg:text-2xl !leading-relaxed">
                Partner with a dedicated frontend alchemist to transform your ideas into high-performance, visually stunning digital realities. Let's craft the future, together.
            </TextReveal>
        </div>


        {/* Final CTA Button */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.6 }}
            viewport={{ once: true }}
        >
             <CoolMode>
                <a href="#contact">
                     <ShimmerButton
                        className="shadow-xl shadow-accent/40 px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl" // Larger button
                        shimmerColor="hsl(var(--background))"
                        background="hsl(var(--accent))"
                        borderRadius="0.75rem" // Slightly larger radius
                    >
                        <span className="whitespace-pre-wrap text-center font-semibold leading-none tracking-tight text-accent-foreground flex items-center justify-center">
                            Initiate Contact
                            <ArrowRightIcon />
                        </span>
                    </ShimmerButton>
                </a>
             </CoolMode>
        </motion.div>
      </motion.div>
    </section>
  );
}
