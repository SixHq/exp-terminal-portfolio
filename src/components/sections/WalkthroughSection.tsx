
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BorderBeam } from "@/components/magicui/border-beam";
import { VisualModeSVG, CodeModeSVG, LayersModeSVG } from "@/components/icons/WalkthroughSVGs"; // Import SVGs

interface WalkthroughStep {
  title: string;
  description: string;
  svg: React.ElementType;
  beamColorFrom: string;
  beamColorTo: string;
}

const steps: WalkthroughStep[] = [
  {
    title: "1. Select & Inspect",
    description: "Simply hover over or click any element in the Visual Mode to instantly highlight it and see its basic properties.",
    svg: VisualModeSVG,
    beamColorFrom: "#4B0055", // Deep Plum
    beamColorTo: "#E8D9F0",   // Light Lavender
  },
  {
    title: "2. View the Code",
    description: "Switch to Code Mode to see the clean, corresponding HTML, CSS, and JavaScript powering the selected element.",
    svg: CodeModeSVG,
    beamColorFrom: "#00AEEF", // Electric Blue
    beamColorTo: "#FFA500",   // Bright Orange
  },
  {
    title: "3. Understand the Structure",
    description: "Use Layers Mode to visualize the component hierarchy and how elements are nested within the DOM.",
    svg: LayersModeSVG,
    beamColorFrom: "#A5E887", // Lime Green
    beamColorTo: "#FFB3C1",   // Soft Pink
  },
];

const WalkthroughSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.1, // Slightly later than text
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    }),
  };

   const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="walkthrough"
      className={cn(
        "relative w-full overflow-hidden py-20 md:py-32",
        "bg-light-lavender dark:bg-deep-plum/30" // Light lavender background
      )}
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]",
          "absolute inset-0 z-0 h-full w-full skew-y-12",
           "stroke-deep-plum/50 dark:stroke-light-lavender/50"
        )}
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Title */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           variants={titleVariants}
           className="mb-12 md:mb-16 text-center"
        >
            <TextAnimate
                as="h2"
                animation="blurInUp"
                by="word"
                className={cn(
                    "text-headline-md lg:text-headline-lg font-bold tracking-tighter mb-4",
                    "text-rich-black dark:text-neutral-off-white"
                )}
            >
                How DevMode Works
            </TextAnimate>
            <TextAnimate
                as="p"
                animation="fadeIn"
                by="line" // Animate line by line
                duration={0.5}
                delay={0.2} // Delay after heading
                className={cn(
                    "text-body-lg max-w-xl mx-auto",
                    "text-muted-foreground dark:text-gray-300"
                )}
            >
                A simple, intuitive process to bridge design and code.
            </TextAnimate>
        </motion.div>

        {/* Walkthrough Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Left Column: Text */}
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={textVariants}
                className="flex flex-col space-y-4 text-center md:text-left"
              >
                <TextAnimate
                    as="h3"
                    animation="slideUp"
                    by="word" // Animate word by word
                    duration={0.4}
                    delay={index * 0.15} // Stagger heading appearance
                    className={cn(
                        "text-2xl md:text-3xl font-semibold",
                         "text-rich-black dark:text-neutral-off-white"
                    )}
                >
                    {step.title}
                </TextAnimate>
                 <TextAnimate
                     animation="fadeIn"
                     by="character" // Subtle character animation
                     duration={0.02} // Faster per character
                     delay={index * 0.15 + 0.2} // Stagger description appearance
                     className={cn(
                        "text-body-md lg:text-body-lg leading-relaxed",
                        "text-muted-foreground dark:text-gray-300"
                     )}
                 >
                     {step.description}
                 </TextAnimate>
              </motion.div>

              {/* Right Column: SVG */}
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={svgVariants}
                className="relative rounded-lg overflow-hidden p-2 bg-white/10 dark:bg-black/20 shadow-lg"
              >
                 <BorderBeam
                    size={150}
                    duration={6 + index * 2} // Vary duration
                    delay={1 + index * 0.5}
                    colorFrom={step.beamColorFrom}
                    colorTo={step.beamColorTo}
                 />
                <step.svg className="w-full h-auto max-w-md mx-auto rounded"/>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalkthroughSection;