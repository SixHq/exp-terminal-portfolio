
import React from "react";
import { motion } from "framer-motion"; // Corrected import
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TextAnimate } from "@/components/magicui/text-animate";
import { CodeSnippetIcon, GitIcon, ExportIcon } from "@/components/icons/DeveloperToolIcons"; // Import custom SVGs

interface DevTool {
  icon: React.ElementType;
  title: string;
  description: string;
  iconClassName: string;
  shineColor: string[];
  codeSnippet?: string; // Optional code snippet for the first card
}

const tools: DevTool[] = [
  {
    icon: CodeSnippetIcon,
    title: "Seamless Snippets",
    description: "Grab clean, framework-agnostic code for any selected element or component.",
    iconClassName: "text-electric-blue dark:text-sky-400",
    shineColor: ["#00AEEF", "#FFB3C1"], // Electric Blue to Soft Pink
    codeSnippet: `// Example: Button Component
<button className="btn-primary">
  Click Me
</button>

/* styles.css */
.btn-primary {
  background-color: #00AEEF;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  /* ... other styles */
}`,
  },
  {
    icon: GitIcon,
    title: "Git Integration",
    description: "Track changes, compare versions, and integrate DevMode insights into your Git workflow.",
    iconClassName: "text-lime-green dark:text-green-400",
    shineColor: ["#A5E887", "#FFA500"], // Lime Green to Bright Orange
  },
  {
    icon: ExportIcon,
    title: "Flexible Exports",
    description: "Export code, styles, or component structures in various formats for easy sharing and use.",
    iconClassName: "text-bright-orange dark:text-orange-400",
    shineColor: ["#FFA500", "#4B0055"], // Bright Orange to Deep Plum
  },
];

const DeveloperToolsSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0
    },
};

  return (
    <section
      id="developer-tools"
      className={cn(
        "relative w-full py-20 md:py-32",
        "bg-neutral-off-white dark:bg-rich-black" // Neutral background
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
                duration={0.6}
                className={cn(
                    "text-headline-md lg:text-headline-lg font-bold tracking-tighter mb-4",
                    "text-rich-black dark:text-neutral-off-white"
                )}
            >
                Developer-Focused Tools
            </TextAnimate>
            <TextAnimate
                as="p"
                animation="fadeIn"
                by="line"
                delay={0.2}
                className={cn(
                    "text-body-lg max-w-2xl mx-auto",
                    "text-muted-foreground dark:text-gray-400"
                )}
            >
                Features built to streamline your coding process and boost productivity.
            </TextAnimate>
        </motion.div>

        {/* Developer Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
              variants={cardVariants}
              className="h-full group relative" // Added relative positioning
            >
              {/* MagicCard now holds the content and scaling effect */}
              <MagicCard
                className={cn(
                  "flex flex-col items-start text-left p-6 h-full rounded-lg", // Align items start for card content
                  "bg-card dark:bg-neutral-900/80 backdrop-blur-sm overflow-hidden", // Added overflow hidden
                  "transition-transform duration-300 ease-out group-hover:scale-[1.03]" // Moved scale effect here
                )}
                gradientSize={180}
                gradientColor="hsla(var(--card), 0.8)" // Use card color with opacity for subtle gradient
                gradientFrom={tool.shineColor[0]} // Match gradient border start
                gradientTo={tool.shineColor[1]} // Match gradient border end
                gradientOpacity={0.6} // Adjust gradient opacity
              >
                  <div className="mb-4 rounded-lg p-2 bg-background dark:bg-rich-black/60 border border-border self-start transition-colors duration-300 group-hover:border-primary/50">
                      <tool.icon className={cn("w-8 h-8", tool.iconClassName)} />
                  </div>
                  <h3 className={cn(
                      "text-xl font-semibold mb-2",
                      "text-foreground dark:text-neutral-off-white"
                  )}>
                      {tool.title}
                  </h3>
                  <p className="text-body-md text-muted-foreground dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                      {tool.description}
                  </p>
                  {tool.codeSnippet && (
                      <div className="mt-auto w-full bg-neutral-100 dark:bg-neutral-800/50 p-3 rounded-md border border-neutral-200 dark:border-neutral-700 overflow-x-auto transition-colors duration-300 group-hover:border-primary/30">
                          <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                              <code>{tool.codeSnippet}</code>
                          </pre>
                      </div>
                  )}
              </MagicCard>

              {/* ShineBorder is now a sibling overlay */}
              <ShineBorder
                className="rounded-lg" // Removed sizing/positioning/bg/transform classes
                borderWidth={1.5} // Slightly thicker border
                shineColor={tool.shineColor}
                duration={7 + index * 3} // Vary duration slightly
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperToolsSection;
