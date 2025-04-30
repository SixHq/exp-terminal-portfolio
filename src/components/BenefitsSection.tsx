
import React from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Meteors } from "@/components/magicui/meteors"; // Background effect

// SVGs as React Components
const LevelUpIcon = () => (
    <svg width="48" height="48" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="currentColor" points="80 384 80 416 296 416 296 78.627 380.687 163.314 403.313 140.686 280 17.373 156.687 140.686 179.313 163.314 264 78.627 264 384 80 384"/>
    </svg>
);

const UsersGroupIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="9" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const WinnerAwardIcon = () => (
     <svg fill="currentColor" width="48" height="48" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M59,43l-54,0l-0,-9c-0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1c-0,5.824 -0,11.07 -0,14c-0,0.796 0.316,1.559 0.879,2.121c0.562,0.563 1.325,0.879 2.121,0.879l4,0c0.552,0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-4,0c-0.265,-0 -0.52,-0.105 -0.707,-0.293c-0.188,-0.187 -0.293,-0.442 -0.293,-0.707l-0,-3l54,0l-0,3c0,0.265 -0.105,0.52 -0.293,0.707c-0.187,0.188 -0.442,0.293 -0.707,0.293l-44,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l12.606,0c-0.16,2.682 -0.855,6.147 -3.417,8l-1.689,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1l21,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-1.689,0c-2.562,-1.854 -3.257,-5.318 -3.417,-8l20.606,0c0.796,-0 1.559,-0.316 2.121,-0.879c0.563,-0.562 0.879,-1.325 0.879,-2.121c-0,-6.028 -0,-23.972 -0,-30c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c0,0 0,0 0,0c-2.552,0 -1.717,0 -8,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l8,0c0.265,0 0.52,0.105 0.707,0.293c0.188,0.187 0.293,0.442 0.293,0.707l-0,25Zm-23.606,8l-6.788,0c-0.155,2.531 -0.785,5.68 -2.585,8l11.958,0c-1.8,-2.32 -2.43,-5.47 -2.585,-8Zm-14.394,-43l-4,0c-0.552,0 -1,0.448 -1,1l0,6c0,2.987 2.182,5.464 5.039,5.923c0.217,2.58 1.339,5.011 3.183,6.855c1.339,1.339 2.988,2.297 4.778,2.805l0,4.417c-2.761,0 -5,2.239 -5,5c-0,0.276 -0,0.46 -0,0.494c0,0.939 1,1.006 1,1.006l14,0l0.043,-0.005c0.191,-0.025 0.957,-0.179 0.957,-1.001l-0,-0.494c0,-2.761 -2.239,-5 -5,-5l0,0l0,-4.417c1.79,-0.508 3.439,-1.466 4.778,-2.805c1.844,-1.844 2.966,-4.275 3.183,-6.855c2.857,-0.459 5.039,-2.936 5.039,-5.923c0,-2.906 0,-6 0,-6c0,-0.552 -0.448,-1 -1,-1l-4,0l-0,-4c0,-0.552 -0.448,-1 -1,-1l-20,0c-0.552,0 -1,0.448 -1,1l-0,4Zm-14,29l0,2c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-2c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1Zm30.958,2.5l-11.916,0c0.237,-1.419 1.471,-2.5 2.958,-2.5c0,0 6,0 6,0c1.487,0 2.721,1.081 2.958,2.5Zm-6.958,-8.546l-0,4.046c-0,0 2,-0 2,-0l0,-4.046c-0.331,0.031 -0.665,0.046 -1,0.046c0,-0 0,-0 -0,0c-0.335,0 -0.669,-0.015 -1,-0.046Zm-22,3.046l0,-13c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l0,13c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1Zm35.527,-11.729c-0,-0 -1.671,7.324 -7.756,8.756c-0.537,0.126 -0.871,0.665 -0.744,1.202c0.126,0.537 0.665,0.871 1.202,0.744c7.178,-1.688 9.244,-10.244 9.244,-10.244c0.127,-0.537 -0.207,-1.076 -0.744,-1.202c-0.537,-0.127 -1.076,0.207 -1.202,0.744Zm-27,0.458c-0,0 2.066,8.556 9.244,10.244c0.537,0.127 1.076,-0.207 1.202,-0.744c0.127,-0.537 -0.207,-1.076 -0.744,-1.202c-6.085,-1.432 -7.756,-8.756 -7.756,-8.756c-0.126,-0.537 -0.665,-0.871 -1.202,-0.744c-0.537,0.126 -0.871,0.665 -0.744,1.202Zm-3.527,-7.729l-8,0c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121c-0,2.593 -0,6.893 -0,12c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l-0,-12c-0,-0.265 0.105,-0.52 0.293,-0.707c0.187,-0.188 0.442,-0.293 0.707,-0.293c0,0 8,0 8,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm18,14c-2.387,0 -4.676,-0.948 -6.364,-2.636c-1.688,-1.688 -2.636,-3.977 -2.636,-6.364l-0,-15l18,-0l-0,15c0,2.387 -0.948,4.676 -2.636,6.364c-1.688,1.688 -3.977,2.636 -6.364,2.636l0,0Zm0.825,-20.565c-0.187,-0.272 -0.495,-0.435 -0.825,-0.435c-0.33,0 -0.638,0.163 -0.825,0.435l-2.268,3.308c0,0 -3.847,1.135 -3.847,1.135c-0.317,0.093 -0.567,0.336 -0.668,0.65c-0.102,0.314 -0.043,0.657 0.158,0.919l2.446,3.179c0,-0 -0.11,4.01 -0.11,4.01c-0.009,0.329 0.145,0.642 0.412,0.836c0.267,0.194 0.612,0.244 0.923,0.133l3.779,-1.344c0,0 3.779,1.344 3.779,1.344c0.311,0.111 0.656,0.061 0.923,-0.133c0.267,-0.194 0.421,-0.507 0.412,-0.836l-0.11,-4.01c-0,-0 2.446,-3.179 2.446,-3.179c0.201,-0.262 0.26,-0.605 0.158,-0.919c-0.101,-0.314 -0.351,-0.557 -0.668,-0.65l-3.847,-1.135c-0,0 -2.268,-3.308 -2.268,-3.308Zm-0.825,2.334l1.644,2.398c0.13,0.19 0.321,0.329 0.542,0.394l2.789,0.822c0,0 -1.773,2.305 -1.773,2.305c-0.14,0.182 -0.213,0.407 -0.207,0.637l0.08,2.907c-0,0 -2.74,-0.974 -2.74,-0.974c-0.217,-0.077 -0.453,-0.077 -0.67,-0l-2.74,0.974c0,0 0.08,-2.907 0.08,-2.907c0.006,-0.23 -0.067,-0.455 -0.207,-0.637l-1.773,-2.305c-0,0 2.789,-0.822 2.789,-0.822c0.221,-0.065 0.412,-0.204 0.542,-0.394l1.644,-2.398Zm-11,8.105c-1.725,-0.444 -3,-2.01 -3,-3.874c0,0 0,-5 0,-5l3,-0l-0,8.874Zm22,-0l0,-8.874l3,0l0,5c-0,1.864 -1.275,3.43 -3,3.874Z"/>
    </svg>
);

// Benefits Data
const benefits = [
  {
    Icon: LevelUpIcon,
    title: "Level Up Faster",
    description: "Find skilled, coordinated teammates to climb ranks and improve your gameplay.",
    ctaText: "Find Pros",
    color: "hsl(var(--accent))", // Neon Green
  },
  {
    Icon: UsersGroupIcon,
    title: "Connect with Gamers",
    description: "Join a vibrant, non-toxic community. Share clips, strategies, and make lasting friendships.",
    ctaText: "Join Discussions",
    color: "hsl(var(--primary))", // Neon Blue
  },
  {
    Icon: WinnerAwardIcon,
    title: "Exclusive Tournaments",
    description: "Compete in members-only tournaments for glory, bragging rights, and cool prizes.",
    ctaText: "View Events",
    color: "hsl(var(--secondary))", // Neon Pink
  },
];


const BenefitsSection: React.FC = () => {
    // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } }
    };

    const gridVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

     const iconVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2, // Delay icon animation slightly after card appears
            },
        },
    };

    return (
        <section id="benefits" className="relative section-padding overflow-hidden">
             {/* Meteors Background */}
             <div className="absolute inset-0 -z-20">
                  <Meteors number={30} />
             </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/95 to-background -z-10"></div>


            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Section Heading */}
                <motion.div className="text-center mb-16 md:mb-20" variants={itemVariants}>
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                         Unlock Your <SparklesText text="Full Potential" />
                     </h2>
                     <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                         Joining the Neon Grid isn't just about finding games, it's about gaining an edge.
                    </p>
                </motion.div>

                 {/* Benefits Grid */}
                 <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                    variants={gridVariants} // Apply staggerChildren variant to the grid
                 >
                    {benefits.map((benefit, idx) => (
                        <motion.div key={idx} variants={itemVariants}> {/* Wrap card in motion.div */}
                            <NeonGradientCard
                                className="h-full flex flex-col p-6 text-center group"
                                borderSize={2}
                                borderRadius={12}
                                neonColors={{ firstColor: benefit.color, secondColor: "hsl(var(--primary))" }} // Dynamic first color
                            >
                                <motion.div
                                     className="mb-5 text-foreground mx-auto transition-transform duration-300 group-hover:scale-110"
                                     style={{ color: benefit.color }} // Apply color to icon directly
                                     variants={iconVariants} // Animate the icon wrapper
                                     initial="hidden"
                                     whileInView="visible" // Trigger animation when icon comes into view
                                     viewport={{ once: true, amount: 0.8 }}
                                >
                                    <benefit.Icon />
                                </motion.div>
                                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-[--neon-first-color]">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {benefit.description}
                                </p>
                                <div className="mt-auto">
                                     <RainbowButton>
                                         {benefit.ctaText}
                                     </RainbowButton>
                                </div>
                             </NeonGradientCard>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default BenefitsSection;