
import React from "react";
import { motion } from "motion/react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { CoolMode } from "@/components/magicui/cool-mode"; // Wrap button for extra flair
import { cn } from "@/lib/utils";

export function ClosingArgumentSection() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            className="relative py-24 md:py-40 text-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {/* Background Grid */}
            <RetroGrid
                className="absolute inset-0 w-full h-full opacity-30 z-0"
                darkLineColor="hsl(var(--primary) / 0.3)" // Use primary neon blue for lines
                lightLineColor="hsl(var(--primary) / 0.3)"
            />

            <div className="container relative z-10 mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-6 text-neon-green text-shadow-neon-green"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <TextAnimate animation="blurInUp" by="word">
                        Stop Searching, Start Playing
                    </TextAnimate>
                </motion.h2>

                <motion.div
                    className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
                >
                    <TextReveal>
                        The Neon Gaming Hub is your definitive destination. Find your crew, conquer challenges, and experience gaming the way it was meant to be – together. Don't miss out on the action.
                    </TextReveal>
                </motion.div>

                <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }} // Use backOut easing
                >
                    <CoolMode>
                        <a href="#join-beta"> {/* Link to the lead capture section */}
                            <ShimmerButton
                                className="shadow-lg scale-110"
                                shimmerColor="#39ff14" // Neon Green shimmer
                                shimmerSize="0.1em"
                                background="hsl(var(--secondary))" // Base Neon Green background
                            >
                                <span className="whitespace-pre-wrap text-center text-xl font-semibold leading-none tracking-tight text-secondary-foreground px-8 py-3">
                                    Join the Hub Today!
                                </span>
                            </ShimmerButton>
                        </a>
                    </CoolMode>
                </motion.div>
            </div>
             {/* Fade effect at bottom */}
             <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </motion.section>
    );
}