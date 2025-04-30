
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/magicui/globe";
import { Particles } from "@/components/magicui/particles";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { CoolMode } from "@/components/magicui/cool-mode";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

// Arrow Icon Component (using fetched SVG)
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em" // Adjust size as needed
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={cn("ml-2", props.className)} // Add margin and allow overriding class
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

export function HeroSection() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], // Animate while scrolling past the hero section
  });

  // Scroll-based animations for the Globe
  const globeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]); // Scale down on scroll
  const globeOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // Fade out on scroll

  // Scroll-based animations for text
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fade out text faster
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]); // Slide up text faster

  return (
    <section
      id="home"
      ref={targetRef}
      className="flex h-[120vh] w-full flex-col items-center justify-center py-20 md:py-32 lg:py-40" // Increased height slightly
    >
      {/* Background Elements */}
      <RetroGrid angle={80} cellSize={50} />
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        size={0.5}
        staticity={40}
        color={"hsl(var(--accent))"}
        vy={0.1}
        vx={0.1}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/70 to-background" /> {/* Gradient Overlay */}

      {/* Content Container */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        {/* Central Globe with Scroll Animations */}
        
          <Globe
            className="top-0 opacity-60" // Reduced opacity
            config={{
              // Required properties by COBEOptions:
              width: 800, // Default width (will be overridden by component)
              height: 800, // Default height (will be overridden by component)
              onRender: () => {}, // Default empty onRender (will be overridden by component)
              devicePixelRatio: 2, // Default device pixel ratio
              // Other valid COBEOptions properties:
              phi: 20 * (Math.PI / 180), // Converted from initialCoordinates[0]
              theta: -20 * (Math.PI / 180), // Converted from initialCoordinates[1]
              dark: 0, // Example: Set dark mode (0 for light, 1 for dark) - Adjust as needed
              diffuse: 1.2, // Example: Set diffuse lighting - Adjust as needed
              mapSamples: 16000, // Default or adjust
              mapBrightness: 6, // Default or adjust
              baseColor: [0.8, 0.8, 0.8], // Placeholder base color (light gray) - Adjust as needed
              markerColor: [0.2, 0.6, 1.0], // Placeholder for primary color - Adjust as needed
              glowColor: [1, 1, 1], // Placeholder glow color (white) - Adjust as needed
              markers: [], // Add markers later if needed
              // Removed invalid properties like ambientColor, pointLightColor, globeColor, etc.
            }}
          />

        {/* Animated Headline and Subheadline with Scroll */}
        <motion.div
         
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <BoxReveal boxColor={"hsl(var(--accent))"} duration={0.7}>
            <h1 className="">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
                Frontend Alchemist
              </AnimatedShinyText>
            </h1>
          </BoxReveal>
          {/* Subheadline */}
          <div className="mt-6 max-w-xl lg:max-w-2xl">
            <TextReveal>
              Crafting Visually Stunning & Highly Performant Web Experiences. 7+ Years Forging Digital Realms with Modern Tech Stacks & Complex Animations.
            </TextReveal>
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
           
            className="mt-10"
          >
            <CoolMode>
              <ShimmerButton
                className="shadow-lg shadow-accent/30"
                shimmerColor="hsl(var(--primary-foreground))"
                background="hsl(var(--accent))"
                borderRadius="0.5rem" // Match global radius
              >
                <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-background dark:text-background lg:text-lg flex items-center">
                  Explore Creations
                  <ArrowRightIcon />
                </span>
              </ShimmerButton>
            </CoolMode>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
