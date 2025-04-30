
import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Shadcn UI Accordion
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { FlipText } from "@/components/magicui/flip-text";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What is the Neon Gaming Hub?",
    answer:
      "The Neon Gaming Hub is a dedicated online community platform for gamers to connect, find teammates (LFG), participate in events, share content, and enjoy a positive, non-toxic gaming environment.",
  },
  {
    question: "Is it free to join?",
    answer:
      "Yes! Basic membership and access to the core community features are completely free. We may offer optional premium features in the future.",
  },
  {
    question: "What games are supported?",
    answer:
      "We aim to support a wide variety of popular multiplayer games across different genres (FPS, MOBA, MMO, etc.). Our LFG tools will allow filtering by specific games.",
  },
  {
    question: "How do you handle toxicity?",
    answer:
      "We have a strict code of conduct, active moderation team, and reporting tools to ensure a respectful and welcoming atmosphere for everyone.",
  },
   {
    question: "When does the beta start?",
    answer:
      "We are aiming to launch the closed beta soon! Sign up for early access to be notified and get a chance to participate.",
  },
];

export function FAQSection() {
     const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };
      // Variants for individual accordion items (optional stagger)
     const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
             opacity: 1,
             y: 0,
             transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
        })
    }


  return (
    <motion.section
      id="faq"
      className="py-20 md:py-32"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.1 }}
       variants={sectionVariants}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon-pink text-shadow-neon-pink">
           <FlipText wordClassName="transition-transform duration-500 ease-out">
                Got Questions?
           </FlipText>
        </h2>

        <NeonGradientCard
          className="p-6 md:p-8"
          borderSize={2}
          borderRadius={15}
          neonColors={{ firstColor: "#ff00ff", secondColor: "#ffff00" }} // Pink to Yellow
        >
           <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
                 <motion.div
                    key={item.question}
                    custom={index}
                    variants={itemVariants}
                    // Apply initial/whileInView here if you want stagger on scroll for items
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true, amount: 0.5 }}
                 >
                    <AccordionItem value={`item-${index}`} className="border-border/50">
                        <AccordionTrigger className="text-lg md:text-xl font-semibold text-left hover:text-neon-yellow transition-colors py-4 [&[data-state=open]]:text-neon-yellow">
                         {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2 pb-4">
                         {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                 </motion.div>
            ))}
          </Accordion>
        </NeonGradientCard>
      </div>
    </motion.section>
  );
}