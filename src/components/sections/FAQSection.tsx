
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Shadcn UI Accordion
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Particles } from "@/components/magicui/particles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon as ExternalLinkIcon } from "@radix-ui/react-icons"; // Use Radix icon for external link visual

// Chevron Icon for Accordion Trigger
const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const faqData = [
  {
    question: "What technologies are you most proficient with?",
    answer: "My core expertise lies in the modern frontend ecosystem: React, Next.js, TypeScript, Tailwind CSS, and state management libraries like Zustand or Redux. I'm also skilled in performance optimization, complex animations (using libraries like Motion/React), API integration (REST, GraphQL), and building component libraries.",
    value: "item-1",
  },
  {
    question: "How do you approach complex UI/UX challenges?",
    answer: "I start with a deep dive into user needs and business goals (Discovery). Then, I focus on iterative design and prototyping, ensuring intuitive flows. Development involves clean, scalable code and rigorous testing to deliver polished, user-centric solutions.",
    value: "item-2",
  },
  {
    question: "Can you handle backend integration?",
    answer: "Yes, I have extensive experience integrating frontend applications with various backend services, including RESTful APIs and GraphQL endpoints. I understand data fetching patterns, authentication flows, and ensuring seamless communication between client and server.",
    value: "item-3",
  },
  {
    question: "What's your process for ensuring code quality and performance?",
    answer: "I adhere to best practices like writing clean, maintainable TypeScript, implementing thorough unit and integration tests (Jest, Cypress/Playwright), code reviews, and continuous performance monitoring. Optimization techniques like code splitting, lazy loading, and asset optimization are standard practice.",
    value: "item-4",
  },
   {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on project scope and complexity. After the initial Discovery phase, I provide a detailed roadmap with milestones and estimated delivery dates. I prioritize clear communication and adapt to changing requirements while keeping the project on track.",
    value: "item-5",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative w-full py-24 md:py-32  bg-gradient-to-b from-background via-secondary/5 to-secondary/10">
        {/* Background */}
        <Particles
            className="absolute inset-0 z-0 opacity-100 dark:opacity-15"
            quantity={60}
            ease={80}
            size={0.4}
            staticity={40}
             vx={0.05}
             vy={0.05}
        />
      

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center mb-12 md:mb-16 relative z-10"
      >
        <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          <TextAnimate animation="blurInUp" by="word" delay={0.1}>
            Frequently Asked Questions
          </TextAnimate>
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground md:text-xl">
           <TextAnimate animation="fadeIn" by="line" delay={0.4}>
            Quick answers to common inquiries about my process and expertise.
           </TextAnimate>
        </p>
      </motion.div>

      {/* FAQ Accordion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-3xl px-4 relative z-10"
      >
         <NeonGradientCard
            className="p-1 rounded-lg"
            borderSize={1}
            neonColors={{ firstColor: "hsl(var(--accent))", secondColor: "hsl(var(--primary))" }}
         >
            <Accordion type="single" collapsible className="w-full bg-background/80 backdrop-blur-md rounded-md p-4 md:p-6 shadow-inner">
                {faqData.map((item, index) => (
                     <motion.div
                        key={item.value}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 + index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <AccordionItem value={item.value} className="border-b border-border/30 last:border-b-0">
                            <AccordionTrigger className="py-4 text-left font-medium text-base md:text-lg text-foreground hover:text-accent transition-colors duration-200 group [&[data-state=open]>svg]:rotate-180">
                                {item.question}
                                <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]" />
                            </AccordionTrigger>
                            <AccordionContent className="pt-1 pb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </NeonGradientCard>
      </motion.div>

       {/* Support Contact Link */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center relative z-10"
        >
            <p className="text-muted-foreground mb-3">Have more specific questions?</p>
            <a href="#contact" className="inline-block group">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 transition ease-out border border-border/30 rounded-full bg-secondary/50 hover:bg-accent/10 hover:border-accent/50 hover:text-accent">
                     <span className="text-sm font-medium">Reach Out Directly</span>
                     <ExternalLinkIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-muted-foreground group-hover:text-accent" />
                </AnimatedShinyText>
            </a>
        </motion.div>

    </section>
  );
}