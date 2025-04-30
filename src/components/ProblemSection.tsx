
import React from "react";
import { motion } from "motion/react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { cn } from "@/lib/utils";

// Placeholder Icons (replace with actual SVGs or fetched ones if available)
const IsolationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="22" x2="12" y2="8" />
        <path d="M17 14h-5l-5 8" />
        <path d="M7 14h5l5 8" />
         {/* Dashed circle around to imply isolation */}
         <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
    </svg>
);

const ToxicChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
         {/* Adding 'X' or skull for toxicity */}
         <line x1="10" y1="10" x2="14" y2="14" strokeWidth="2.5" stroke="hsl(var(--destructive))"/>
         <line x1="14" y1="10" x2="10" y2="14" strokeWidth="2.5" stroke="hsl(var(--destructive))"/>
    </svg>
);

const DisconnectIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16.5 12a4.5 4.5 0 1 0-9 0 4.5 4.5 0 1 0 9 0Z"/>
        <path d="M12 12L7.5 7.5"/>
        <path d="M12 12l4.5 4.5"/>
         {/* Break line */}
         <line x1="3" y1="21" x2="21" y2="3" strokeWidth="2.5"/>
    </svg>
);


const problems = [
  {
    icon: IsolationIcon,
    title: "Tired of Lone Wolfing?",
    description: "Finding reliable teammates who match your playstyle and schedule can feel impossible. Solo queues are a gamble.",
    color: "neon-blue",
    neonColor: { firstColor: "#00ffff", secondColor: "#39ff14" } // Blue to Green
  },
  {
    icon: ToxicChatIcon,
    title: "Escaping Toxic Lobbies?",
    description: "Random matchmaking often leads to negativity, ruining the fun and making teamwork difficult. We need better.",
    color: "neon-pink",
    neonColor: { firstColor: "#ff00ff", secondColor: "#ffff00" } // Pink to Yellow
  },
  {
    icon: DisconnectIcon,
    title: "Lost in the Noise?",
    description: "Big servers feel impersonal. It's hard to build real connections or get noticed amidst the chaos.",
    color: "neon-yellow",
    neonColor: { firstColor: "#ffff00", secondColor: "#00ffff" } // Yellow to Blue
  },
];

export function ProblemSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1
    }),
  };

  return (
    <motion.section
      className="py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-neon-pink text-shadow-neon-pink">
          <TextAnimate animation="blurInUp" by="word" duration={0.6}>
            Feeling the Grind Alone?
          </TextAnimate>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              custom={index}
              variants={itemVariants}
              initial="hidden" // Ensures animation triggers with section viewport
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
               <NeonGradientCard
                className="h-full items-center justify-center text-center p-6 bg-card/70 backdrop-blur-sm"
                borderRadius={20}
                borderSize={2}
                neonColors={problem.neonColor}
               >
                <div className="flex flex-col items-center gap-4">
                   <problem.icon className={`size-12 md:size-16 text-${problem.color}`} />
                  <h3 className={`text-2xl font-semibold text-${problem.color}`}>
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                 </div>
               </NeonGradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}