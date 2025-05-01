
import React from "react";
import { motion } from "framer-motion"; // Corrected import
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TextAnimate } from "@/components/magicui/text-animate";
import { LiveCodePreviewIcon, ComponentBreakdownIcon, InstantCopyPasteIcon } from "@/components/icons/FeatureIcons"; // Import custom inline SVGs

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  iconClassName: string;
  shineColor: string[];
}

const features: Feature[] = [
  {
    icon: LiveCodePreviewIcon,
    title: "Live Code Preview",
    description: "Instantly see the underlying HTML, CSS, and JavaScript for any visual element.",
    iconClassName: "text-electric-blue", // #00AEEF
    shineColor: ["#00AEEF", "#E8D9F0"], // Electric Blue to Light Lavender
  },
  {
    icon: ComponentBreakdownIcon,
    title: "Component Breakdown",
    description: "Isolate and understand individual components within complex interfaces.",
    iconClassName: "text-lime-green", // #A5E887
    shineColor: ["#A5E887", "#F1FFD4"], // Lime Green to Pastel Yellow-Green
  },
  {
    icon: InstantCopyPasteIcon,
    title: "Instant Copy-Paste",
    description: "Grab code snippets with a single click, ready to integrate into your project.",
    iconClassName: "text-bright-orange", // #FFA500
    shineColor: ["#FFA500", "#FFB3C1"], // Bright Orange to Soft Pink
  },
];

const FeaturesSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      
    }),
  };

  return (
    <section
      id="features"
      className={cn(
        "relative w-full py-20 md:py-32",
        "bg-pastel-yellow-green dark:bg-muted" // Use muted which maps to pastel-yellow-green in light, darker in dark
      )}
    >
      {/* Background Dot Pattern */}
      <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
         
      />

      <div >
        {/* Section Title */}
        <div className="mb-12 md:mb-16 text-center">
           <TextAnimate
              as="h2"
              animation="blurInUp"
              by="word"
              className={cn(
                "text-headline-md lg:text-headline-lg font-bold tracking-tighter mb-4",
                 "text-rich-black dark:text-neutral-off-white"
              )}
              delay={0.1}
           >
              Unlock Effortless Frontend Insights
           </TextAnimate>
           <TextAnimate
              as="p"
              animation="fadeIn"
              by="line"
              className={cn(
                "text-body-lg max-w-2xl mx-auto",
                "text-muted-foreground dark:text-gray-400"
              )}
               delay={0.3}
           >
             DevMode simplifies your workflow with powerful features designed for clarity and speed.
           </TextAnimate>
        </div>

        
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16"> {/* Added padding for container effect */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full group relative" // Added relative positioning
            >
              {/* MagicCard holds the content */}
              <MagicCard
                className={cn(
                  "flex flex-col items-center text-center p-6 md:p-8 h-full rounded-lg", // Ensure MagicCard takes full height
                  "bg-card dark:bg-neutral-900/80 backdrop-blur-sm", // Ensure background for content
                  "transition-transform duration-300 ease-out group-hover:scale-[1.03]" // Optional: Add hover scale effect
                )}
                gradientSize={150}
                gradientColor="hsl(var(--muted))" // Use a subtle gradient color related to background
              >
                <div className="mb-5 rounded-full p-3 bg-background dark:bg-rich-black/50 border border-border transition-colors duration-300 group-hover:border-primary/50">
                    <feature.icon className={cn("w-8 h-8", feature.iconClassName)} />
                </div>
                <h3 className={cn(
                  "text-xl font-semibold mb-2",
                  "text-foreground dark:text-neutral-off-white"
                )}>
                  {feature.title}
                </h3>
                <p className="text-body-md text-muted-foreground dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </MagicCard>

              {/* ShineBorder is the overlay */}
              <ShineBorder
                className="rounded-lg" // Removed sizing/bg classes
                borderWidth={1}
                shineColor={feature.shineColor}
                duration={8 + index * 2} // Vary duration slightly
              />
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default FeaturesSection;
