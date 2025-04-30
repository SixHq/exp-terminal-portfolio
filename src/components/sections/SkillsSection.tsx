
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FlickeringGrid } from "@/components/magicui/flickering-grid"; // Import FlickeringGrid

// SVG Icons for Process Steps
const DiscoveryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="Interface / Search_Magnifying_Glass"><path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
);
const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="Interface / Edit_Pencil_01"><path id="Vector" d="M13.0208 5.82839L15.8492 2.99996L21 8.15071L18.1716 11M13.0208 5.82839L3 16V21H8L18.1716 11M13.0208 5.82839L18.1716 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
);
const DevelopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="Interface / Code"><path id="Vector" d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
);
const DeployIcon = (props: React.SVGProps<SVGSVGElement>) => (
   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="Communication / Send_01"><path id="Vector" d="M10 14L21 3M21 3L14.5 21L10 14M21 3L3 10.5L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
);

const processSteps = [
  {
    id: 1,
    title: "Phase 1: Discovery & Blueprinting",
    description: "Deep dive into project goals, user needs, and technical requirements. Define scope and create a strategic roadmap.",
    icon: DiscoveryIcon,
  },
  {
    id: 2,
    title: "Phase 2: Design & Prototyping",
    description: "Craft intuitive UI/UX flows and visually stunning interfaces. Iterate based on feedback using interactive prototypes.",
    icon: DesignIcon,
  },
  {
    id: 3,
    title: "Phase 3: Development & Integration",
    description: "Write clean, efficient, and scalable code. Implement complex animations and integrate with backend systems seamlessly.",
    icon: DevelopIcon,
  },
   {
    id: 4,
    title: "Phase 4: Testing & Deployment",
    description: "Rigorous testing across devices and browsers. Optimize for performance and deploy using CI/CD pipelines.",
    icon: DeployIcon,
  },
];


const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

 
const images = [
    "https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675297844586-534b030564e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675555581018-7f1a352ff9a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937050517-68d4e2a1702e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675297844586-534b030564e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675555581018-7f1a352ff9a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937050517-68d4e2a1702e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675297844586-534b030564e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675555581018-7f1a352ff9a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937050517-68d4e2a1702e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
export function SkillsSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <section id="skills" ref={containerRef} className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/10">
       <FlickeringGrid
            className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
            squareSize={25}
            gridGap={10}
            flickerChance={0.1}
            color={"hsl(var(--accent))"}
        />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center mb-16 md:mb-24 relative z-10"
      >
        <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          <TextAnimate animation="fadeIn" by="word" delay={0.1}>
            Engineering the Future, Pixel by Pixel
          </TextAnimate>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          <TextAnimate animation="fadeIn" by="line" delay={0.4}>
            My process combines methodical strategy with cutting-edge technology to build exceptional digital experiences.
          </TextAnimate>
        </p>
      </motion.div>

      {/* Combined Process and Tech Grid */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Process Steps (Pinned Section Concept - Simplified with Scroll Animations) */}
        <div className="lg:col-span-2 space-y-12 md:space-y-16">
          <motion.h3
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
             viewport={{ once: true }}
             className="font-heading text-3xl font-semibold tracking-tight text-primary mb-8"
          >
                My Strategic Approach
          </motion.h3>
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <motion.div
                 initial={{ scale: 0, rotate: -45 }}
                 whileInView={{ scale: 1, rotate: 0 }}
                 transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 + index * 0.15 }}
                 viewport={{ once: true }}
                 className="flex-shrink-0 p-3 rounded-full bg-accent/10 border border-accent/30 text-accent"
              >
                  <step.icon className="w-6 h-6" />
              </motion.div>
              <div>
                 <BoxReveal boxColor={"hsl(var(--accent))"} duration={0.5} delay={0.5 + index * 0.15}>
                     <h4 className="font-heading text-xl md:text-2xl font-medium mb-2 text-foreground">
                        {step.title}
                     </h4>
                 </BoxReveal>
                 <BoxReveal boxColor={"hsl(var(--primary))"} duration={0.5} delay={0.6 + index * 0.15}>
                     <p className="text-muted-foreground text-base md:text-lg">
                        {step.description}
                     </p>
                 </BoxReveal>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-end mt-12 lg:mt-0">
            <motion.h3
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                 viewport={{ once: true }}
                 className="font-heading text-3xl font-semibold tracking-tight text-primary mb-8 text-center lg:text-right w-full"
            >
                My Tech Arsenal
            </motion.h3>
           <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-md lg:max-w-none" // Ensure it takes space
           >
                <NeonGradientCard
                    className="w-full h-[400px] md:h-[500px] flex items-center justify-center relative" // Set fixed height
                    borderSize={2}
                    borderRadius={10}
                    neonColors={{ firstColor: "hsl(var(--primary))", secondColor: "hsl(var(--accent))" }}
                >
                    <IconCloud/>
                </NeonGradientCard>
           </motion.div>
        </div>
      </div>
    </section>
  );
}