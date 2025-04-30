
import React from "react";
import { motion } from "motion/react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { cn } from "@/lib/utils";

// Icons Fetched Earlier
const QuestionMarkIcon = () => (
    <svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="fill-current text-accent">
      <g id="Layer_2" data-name="Layer 2"><g id="invisible_box" data-name="invisible box"><rect width="48" height="48" fill="none"/></g><g id="Icons"><g><path d="M24.3,6A11.2,11.2,0,0,0,16,9.3a11,11,0,0,0-3.5,8.2,2.5,2.5,0,0,0,5,0,6.5,6.5,0,0,1,2-4.7A6.2,6.2,0,0,1,24.2,11a6.5,6.5,0,0,1,1,12.9,4.4,4.4,0,0,0-3.7,4.4v3.2a2.5,2.5,0,0,0,5,0V28.7a11.6,11.6,0,0,0,9-11.5A11.7,11.7,0,0,0,24.3,6Z"/><circle cx="24" cy="39.5" r="2.5"/></g></g></g>
    </svg>
);

const AlertIcon = () => (
    <svg fill="currentColor" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <line x1="5.95" y1="20.5" x2="6.05" y2="20.5" style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.95' }}/>
        <path d="M5,9a5.33,5.33,0,0,1,.08-1A6,6,0,0,1,17,9a5.93,5.93,0,0,1-1.34,3.77,1,1,0,0,0,.2,1.4l.08.05A7,7,0,0,1,19,20a1,1,0,0,1-1,1H11" style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.5' }}/>
        <line x1="6" y1="13" x2="6" y2="16" style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.5' }}/>
    </svg>
);

const MoneyIcon = () => (
    <svg fill="currentColor" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-accent">
      <path d="M8,13h8V11H8ZM8,9h8V7H8Zm5,8h3V15H13ZM19.11,2a3.06,3.06,0,0,0-1.75.57,1,1,0,0,1-1.25,0,3,3,0,0,0-3.5,0A1.14,1.14,0,0,1,12,2.8a1.06,1.06,0,0,1-.6-.22A3,3,0,0,0,9.64,2a3,3,0,0,0-1.75.57,1,1,0,0,1-1.25,0A3.06,3.06,0,0,0,4.89,2H4V22h.89a3.06,3.06,0,0,0,1.75-.57,1,1,0,0,1,1.25,0,3,3,0,0,0,3.5,0A1.14,1.14,0,0,1,12,21.2a1.06,1.06,0,0,1,.6.22,3,3,0,0,0,1.74.58,3,3,0,0,0,1.75-.57,1,1,0,0,1,1.25,0,3.06,3.06,0,0,0,1.75.57H20V2ZM18,19.5a3,3,0,0,0-3,.28,1.09,1.09,0,0,1-.62.22,1,1,0,0,1-.6-.22A3,3,0,0,0,12,19.2a3.11,3.11,0,0,0-1.76.58,1,1,0,0,1-1.24,0,3,3,0,0,0-3-.28V4.5a3,3,0,0,0,1.26.3A3.11,3.11,0,0,0,9,4.22,1.09,1.09,0,0,1,9.64,4a1,1,0,0,1,.6.22A3,3,0,0,0,12,4.8a3.11,3.11,0,0,0,1.76-.58,1,1,0,0,1,1.24,0,3.11,3.11,0,0,0,1.76.58A3,3,0,0,0,18,4.5Z"/>
    </svg>
);

// Combined Confusion Icon (Using Question Mark + Lines)
const ConfusionIcon = () => (
    <div className="relative w-[36px] h-[36px]">
        <QuestionMarkIcon />
        <svg className="absolute inset-0 opacity-50 text-accent" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6l3 12 3-12"/>
            <path d="M15 6l3 12 3-12"/>
        </svg>
    </div>
);


const painPointsData = [
    {
        icon: <ConfusionIcon />,
        title: "Navigating Legal Complexities?",
        description: "The legal system can be intricate and confusing. We simplify the process, ensuring you understand every step.",
    },
    {
        icon: <AlertIcon />,
        title: "Feeling Overwhelmed by Paperwork?",
        description: "Legal matters often involve mountains of documents. Let our meticulous team handle the details for you.",
    },
    {
        icon: <MoneyIcon />,
        title: "Worried About the Financial Strain?",
        description: "We offer transparent fee structures and explore all options to manage costs effectively while maximizing your outcome.",
    },
    {
        icon: <QuestionMarkIcon />, // Reusing for Uncertainty
        title: "Uncertain About Your Rights?",
        description: "Knowledge is power. We empower you by clearly explaining your rights and legal options.",
    },
];

const PainPoints: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background dark:from-black/90 dark:to-gray-950">
            <div className="container mx-auto px-4">
                 {/* Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                     <TextAnimate
                         as="h2"
                         animation="fadeIn"
                         duration={0.8}
                         className="text-3xl font-serif font-bold text-primary dark:text-primary-foreground sm:text-4xl md:text-5xl"
                     >
                         Facing Legal Hurdles? We Understand.
                     </TextAnimate>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
                         Legal challenges can be daunting. We're here to guide you through common pain points with clarity and expertise.
                     </p>
                </motion.div>

                 {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {painPointsData.map((point, index) => (
                         <motion.div
                             key={index}
                             initial={{ opacity: 0, y: 40 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.3 }}
                             transition={{
                                 duration: 0.5,
                                 delay: index * 0.15, // Stagger animation
                                 ease: [0.25, 1, 0.5, 1], // easeOutQuart
                             }}
                             className="flex items-start space-x-4 p-6 rounded-lg bg-card dark:bg-secondary/20 shadow-sm hover:shadow-md transition-shadow duration-300"
                         >
                             <div className="flex-shrink-0 mt-1">
                                 <BoxReveal boxColor={"hsl(var(--accent))"} duration={0.6} delay={index * 0.15 + 0.2}>
                                     {point.icon}
                                 </BoxReveal>
                             </div>
                             <div>
                                 <BoxReveal boxColor={"hsl(var(--primary))"} duration={0.5} delay={index * 0.15 + 0.3}>
                                     <h3 className="text-lg font-semibold font-serif text-foreground mb-2">
                                         {point.title}
                                     </h3>
                                 </BoxReveal>
                                 <BoxReveal boxColor={"hsl(var(--secondary))"} duration={0.5} delay={index * 0.15 + 0.4}>
                                     <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                                         {point.description}
                                     </p>
                                 </BoxReveal>
                             </div>
                         </motion.div>
                    ))}
                </div>

                 {/* Concluding Message & CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                     <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto font-sans">
                         Don't navigate these challenges alone. Let our experienced team provide the clarity and support you deserve.
                     </p>
                     <ShinyButton text="Discuss Your Situation" className="text-base font-semibold px-8 py-3">
                         Discuss Your Situation
                     </ShinyButton>
                </motion.div>

            </div>
        </section>
    );
};

export default PainPoints;