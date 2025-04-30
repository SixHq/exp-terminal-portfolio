
import React from "react";
import { motion } from "motion/react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { MagicCard } from "@/components/magicui/magic-card";
import { DotPattern } from "@/components/magicui/dot-pattern"; // Subtle background
import { cn } from "@/lib/utils";

// Define SVG components directly within the file for simplicity
const ConsultationIcon = () => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512" xmlSpace="preserve" className="w-12 h-12 text-accent">
        <circle style={{ fill: "currentColor", opacity: 0.3 }} cx="256" cy="256" r="256"/>
        <path style={{ fill: "#FFEDB5" }} d="M131.036,180.874l14.72,5.584c9.037,3.427,18.694,4.918,28.344,4.377l72.607-4.079l134.066,117.65 c5.172,4.539,4.858,12.685-0.646,16.813l-2.236,1.676c-3.943,2.956-9.383,2.881-13.241-0.184l-95.661-75.991 c-1.526-1.212-3.718-1.088-5.098,0.291l-1.458,1.458c-1.6,1.6-1.474,4.232,0.272,5.672l76.436,62.997 c5.042,4.156,5.287,11.797,0.519,16.267l0,0c-3.863,3.622-9.778,3.92-13.986,0.707l-80.951-61.802 c-1.633-1.246-3.958-0.984-5.273,0.593l0,0c-1.391,1.67-1.119,4.163,0.603,5.491l64.872,50.055 c5.701,4.399,5.604,13.031-0.191,17.303l-0.586,0.431c-3.843,2.832-9.087,2.815-12.91-0.041l-66.127-49.381 c-1.633-1.221-3.936-0.948-5.241,0.617l-0.007,0.009c-1.398,1.679-1.115,4.184,0.624,5.508l44.863,34.126 c5.017,3.815,5.73,11.09,1.552,15.808l-1.583,1.788c-3.415,3.856-9.075,4.775-13.534,2.196L89.864,263.215L131.036,180.874z"/>
        <path style={{ fill: "#FFC61B" }} d="M390.808,174.013l44.111,81.361l-62.736,41.662l-102.928-89.695l-64.424,24.91 c-5.587,2.16-11.912,1.024-16.4-2.944l0,0c-8.613-7.618-6.637-21.559,3.753-26.486l85.685-40.627 c3.853-1.827,8.325-1.82,12.173,0.017l50.853,24.288c5.603,2.676,12.033,3.041,17.903,1.017L390.808,174.013z"/>
        <rect x="73.192" y="159.309" transform="matrix(-0.8827 -0.47 0.47 -0.8827 81.1817 449.6475)" style={{ fill: "#FF7F4F" }} width="47.047" height="110.764"/>
        <rect x="387.872" y="157.36" transform="matrix(0.8256 -0.5643 0.5643 0.8256 -48.2914 269.2509)" style={{ fill: "#D35933" }} width="47.047" height="110.764"/>
    </svg>
);

const StrategyIcon = () => (
    <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-accent">
        <path fill="currentColor" d="M179.625 22.313L163.22 58.937c-3.258-.384-6.498-.604-9.72-.624-10.577-.066-20.857 1.808-30.47 5.28L99.78 31.032 55.75 63.188l24.063 33.657c-7.21 10.412-12.3 22.5-14.5 35.75l-42.72 4.687 5.345 54.25 45.468-5c5.082 10.2 12.078 19.372 20.594 26.97l-19.406 43.375 49.375 22.094 19.5-43.564c11.656 1.242 23.08.128 33.75-3l28.124 38.53 31.72-23.186 11.655 20.156C234.014 279.138 220.873 292.3 209.624 307l-49.22-28.344-25.718 46.72 48.125 27.937c-7.068 16.934-11.967 34.975-14.343 53.812H112.5v53.72h56.22c1.66 12.053 4.372 23.753 8.03 35.06h169.312c-23.915-10.758-40.562-34.788-40.562-62.717 0-37.964 30.754-68.75 68.72-68.75 37.963 0 68.75 30.786 68.75 68.75 0 27.93-16.67 51.96-40.595 62.718h91.5V200.375l-11.688-6.406L454.594 242c-16.842-7.204-34.808-12.234-53.594-14.72v-55.53h-53.72v55.47c-18.303 2.377-35.83 7.183-52.31 14.03l-27.126-47.28-36 20.25-9.25-12.97c7.08-9.223 12.43-19.93 15.5-31.72l44.437-4.843-5.342-54.25-42.25 4.157c-4.92-12.618-12.648-23.953-22.563-33.094L229 44.406l-49.375-22.093zm-27.344 84.25c23.3-.24 42.94 17.827 44.376 41.343 1.48 24.275-17.004 45.144-41.28 46.625-24.278 1.483-45.145-16.974-46.626-41.25-1.48-24.274 16.973-45.142 41.25-46.624.76-.046 1.53-.086 2.28-.094z"/>
    </svg>
);

const RepresentationIcon = () => (
    <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" id="security-shield-protection-3" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color w-12 h-12 text-accent">
        <path id="primary" d="M20.88,18.06A10.85,10.85,0,0,1,12,21.5C3.12,21.5,3.12,12.08,3.12,12.08V5.46L12,2.5l8.88,3V18.06" style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }}></path>
        <path id="secondary" d="M8,12.5l3,3,5-5" style={{ fill: "none", stroke: "hsl(var(--accent))", opacity: 0.8, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}></path>
    </svg>
);


const steps = [
    {
        icon: <ConsultationIcon />,
        title: "Initial Consultation",
        description: "We begin with a thorough discussion to understand your situation, goals, and concerns.",
    },
    {
        icon: <StrategyIcon />,
        title: "Case Strategy Development",
        description: "Based on the consultation, we develop a tailored legal strategy designed for the best possible outcome.",
    },
    {
        icon: <RepresentationIcon />,
        title: "Diligent Representation",
        description: "We advocate fiercely on your behalf, providing skilled representation in negotiations or court.",
    },
];


const ProblemSolutionSection = () => {
    return (
        <section id="problem-solution" className="relative py-24 md:py-32 overflow-hidden">
            {/* Subtle Background Pattern */}
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(circle_at_center,white,transparent_60%)]",
                    "absolute inset-0 h-full w-full fill-current text-primary/5 dark:text-primary/10 z-0"
                )}
                cr={1} // Circle radius
                cy={16} cx={16} x={0} y={0} // Pattern properties
            />

            <div className="container mx-auto px-4 relative z-10">
                 {/* Section Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 md:mb-20"
                >
                   <BoxReveal boxColor={"hsl(var(--accent))"} duration={0.7}>
                      <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
                        Navigating Legal Complexity
                      </h2>
                   </BoxReveal>
                   <BoxReveal boxColor={"hsl(var(--primary))"} duration={0.7} delay={0.15}>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                       Understand your challenges and how our tailored approach delivers results.
                     </p>
                   </BoxReveal>
                </motion.div>

                {/* Problem & Solution Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 md:mb-24">
                    {/* Problem Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-foreground mb-4 font-serif">The Challenge: Legal Uncertainty</h3>
                        <TextAnimate
                            as="p"
                            animation="fadeIn"
                            by="line"
                            className="text-base text-muted-foreground space-y-4"
                            delay={0.4} // Slightly after the container slides in
                            startOnView={false} // Controlled by parent motion.div
                        >
                            Facing legal issues can be overwhelming. Uncertainty about processes, potential outcomes, and costs creates significant stress and anxiety. You need clear guidance and a strong advocate.
                        </TextAnimate>
                    </motion.div>

                    {/* Solution Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Slightly later delay
                    >
                        <h3 className="text-2xl font-semibold text-foreground mb-4 font-serif">Our Solution: Clarity & Action</h3>
                        <TextAnimate
                            as="p"
                            animation="fadeIn"
                            by="line"
                            className="text-base text-muted-foreground space-y-4"
                            delay={0.5} // Slightly after the container slides in
                            startOnView={false} // Controlled by parent motion.div
                        >
                            We demystify the legal landscape, providing clear explanations and a strategic roadmap. Our proactive approach focuses on efficient resolution and protecting your interests every step of the way.
                        </TextAnimate>
                    </motion.div>
                </div>

                {/* How It Works Section */}
                <div className="text-center mb-12">
                     <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-serif"
                    >
                        Our Process: Simple & Effective
                    </motion.h3>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5 + index * 0.15, // Staggered delay
                                ease: "easeOut",
                            }}
                        >
                             {/* Use MagicCard for hover effect */}
                            <MagicCard
                                className="h-full cursor-pointer overflow-hidden rounded-lg border border-border/30 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:shadow-accent/10"
                                gradientColor="hsl(var(--background))" // Use background color for subtle gradient
                                gradientOpacity={0.5}
                                gradientSize={300}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 rounded-full bg-accent/10">
                                        {step.icon}
                                    </div>
                                    <span className="absolute top-4 right-4 text-5xl font-bold text-primary/10 dark:text-primary/20 z-0">
                                      0{index + 1}
                                    </span>
                                    <h4 className="text-xl font-semibold text-foreground mb-2 z-10">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground z-10">{step.description}</p>
                                </div>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;