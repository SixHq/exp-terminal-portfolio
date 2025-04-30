
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button"; // Using ShimmerButton for consistency
import { WarpBackground } from "@/components/magicui/warp-background"; // Background effect

// SVGs as React Components (using fetched SVG strings directly)
const UserPlusIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17 16.6667V19.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.6665 18L18.3332 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path opacity="0.5" d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const DiscordIcon = () => (
     <svg width="48" height="48" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fillRule="nonzero">
        </path>
    </svg>
);

const FindSquadIcon = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g>
            <g>
                <path fill="currentColor" opacity="0.7" d="M62.828,57.172L50.402,44.746C53.902,40.07,56,34.289,56,28C56,12.535,43.465,0,28,0S0,12.535,0,28 s12.535,28,28,28c6.289,0,12.074-2.098,16.75-5.598l12.422,12.426c1.562,1.562,4.094,1.562,5.656,0S64.391,58.734,62.828,57.172z M28,48C16.953,48,8,39.047,8,28S16.953,8,28,8s20,8.953,20,20S39.047,48,28,48z"/>
            </g>
            <circle fill="currentColor" opacity="0.9" cx="28" cy="28" r="20"/>
        </g>
    </svg>
);

// Features Data
const features = [
  { name: "Instant Squad Finder", description: "AI-powered matchmaking connects you with compatible players based on skill, playstyle, and timezone.", icon: "🎯" },
  { name: "Dedicated Voice Channels", description: "Crystal-clear communication channels for strategy and banter, free from randoms.", icon: "🎤" },
  { name: "Community Events & Tournaments", description: "Regular events, from casual game nights to competitive tournaments with prizes.", icon: "🏆" },
  { name: "Zero Tolerance for Toxicity", description: "Actively moderated spaces ensuring a positive and respectful environment for everyone.", icon: "🛡️" },
  { name: "Cross-Platform Support", description: "Connect with gamers regardless of their platform (PC, Console).", icon: "🎮" },
];

// How it works steps refs
const StepWrapper: React.ForwardRefRenderFunction<HTMLDivElement, { children: React.ReactNode, className?: string, delay?: number }> =
 ({ children, className, delay = 0 }, ref) => (
    <motion.div
        ref={ref}
        className={cn("relative z-10 flex flex-col items-center justify-center p-4 size-20 md:size-24 rounded-full border-2 border-neon-green/50 bg-background shadow-lg shadow-neon-green/20", className)}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.4, delay: delay, ease: "backOut" }}
    >
        {children}
    </motion.div>
);
const MotionStepWrapper = motion(React.forwardRef(StepWrapper));


const SolutionSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);

    // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

     const FeatureItem = ({ name, description, icon }: { name: string; description: string; icon: string }) => (
        <NeonGradientCard
            className="min-h-[150px] p-4 flex flex-col justify-between"
            borderSize={1}
            borderRadius={8}
            neonColors={{ firstColor: "hsl(var(--accent))", secondColor: "hsl(var(--primary))" }}
        >
            <div>
                <span className="text-4xl mb-3 block">{icon}</span>
                <h4 className="text-lg font-semibold text-foreground mb-1">{name}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </NeonGradientCard>
    );


    return (
        <section id="solution" className="relative section-padding overflow-hidden">
            <WarpBackground
          beamsPerSide={4}
          beamSize={3}
          beamDelayMax={1.5}
          gridColor="hsl(var(--border) / 0.3)"
          perspective={150}
          className="absolute inset-0 -z-10" children={undefined}            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background -z-10"></div>

            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Section Heading */}
                <motion.div className="text-center mb-16 md:mb-24" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                         The <AuroraText >Ultimate Gaming Hub</AuroraText>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Stop wasting time finding the right people. We provide the tools and the community to elevate your game.
                    </p>
                </motion.div>

                {/* Features Section (using AnimatedList) */}
                <motion.div className="mb-24 md:mb-32" variants={itemVariants}>
                    <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-shadow-neon-glow-accent">Core Features</h3>
                    <div className="relative max-w-4xl mx-auto">
                        <AnimatedList delay={500}>
                            {features.map((feature, idx) => (
                                <FeatureItem {...feature} key={idx} />
                            ))}
                        </AnimatedList>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent"></div> {/* Fade effect for list */}
                    </div>
                </motion.div>

                 {/* How It Works Section (using AnimatedBeam) */}
                <motion.div className="mb-24 md:mb-32 text-center" ref={containerRef} variants={itemVariants}>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-16 text-shadow-neon-glow-primary">Get Started in Seconds</h3>
                    <div className="relative flex flex-col md:flex-row justify-around items-center w-full max-w-4xl mx-auto gap-12 md:gap-8">
                        {/* Step 1 */}
                         <div className="flex flex-col items-center">
                            <MotionStepWrapper ref={step1Ref} delay={0}>
                                <UserPlusIcon />
                            </MotionStepWrapper>
                            <BoxReveal boxColor="hsl(var(--primary))" duration={0.5}>
                                <p className="mt-3 font-medium text-foreground">1. Sign Up</p>
                            </BoxReveal>
                            <BoxReveal boxColor="hsl(var(--primary))" duration={0.6}>
                                <p className="text-sm text-muted-foreground">Quick & Easy</p>
                            </BoxReveal>
                         </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <MotionStepWrapper ref={step2Ref} delay={0.2}>
                                <DiscordIcon />
                            </MotionStepWrapper>
                             <BoxReveal boxColor="hsl(var(--primary))" duration={0.5}>
                                <p className="mt-3 font-medium text-foreground">2. Join Discord</p>
                            </BoxReveal>
                             <BoxReveal boxColor="hsl(var(--primary))" duration={0.6}>
                                <p className="text-sm text-muted-foreground">Connect Instantly</p>
                             </BoxReveal>
                         </div>

                        {/* Step 3 */}
                         <div className="flex flex-col items-center">
                            <MotionStepWrapper ref={step3Ref} delay={0.4}>
                                <FindSquadIcon />
                            </MotionStepWrapper>
                             <BoxReveal boxColor="hsl(var(--primary))" duration={0.5}>
                                <p className="mt-3 font-medium text-foreground">3. Find Squad</p>
                            </BoxReveal>
                             <BoxReveal boxColor="hsl(var(--primary))" duration={0.6}>
                                <p className="text-sm text-muted-foreground">Game On!</p>
                             </BoxReveal>
                         </div>

                        {/* Animated Beams connecting the steps */}
                        <AnimatedBeam
                          containerRef={containerRef}
                          fromRef={step1Ref}
                          toRef={step2Ref}
                          curvature={-40} // Adjust curvature for visual flow
                          duration={3}
                          delay={1}
                           gradientStartColor="hsl(var(--primary))"
                           gradientStopColor="hsl(var(--accent))"
                        />
                        <AnimatedBeam
                          containerRef={containerRef}
                          fromRef={step2Ref}
                          toRef={step3Ref}
                          curvature={40} // Adjust curvature
                          duration={3}
                          delay={1.5}
                           gradientStartColor="hsl(var(--accent))"
                           gradientStopColor="hsl(var(--secondary))"
                        />
                    </div>
                     <div className="mt-16">
                         <ShimmerButton className="shadow-lg shadow-primary/30">
                             <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                 Join the Community Now
                             </span>
                         </ShimmerButton>
                    </div>
                </motion.div>

                {/* Screenshots/Demos Section (using MagicCard) */}
                <motion.div variants={itemVariants}>
                     <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-shadow-neon-glow-secondary">See It In Action</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                         <MagicCard
                            className="cursor-pointer rounded-lg overflow-hidden border border-border/30"
                            gradientColor="hsl(var(--background))"
                            gradientSize={150}
                         >
                            <img src="https://images.pexels.com/photos/7862493/pexels-photo-7862493.jpeg" alt="Neon Gaming Setup Demo" className="w-full h-64 object-cover" />
                            <div className="p-4 bg-background/80 backdrop-blur-sm">
                                <p className="font-semibold text-foreground">Intuitive Interface</p>
                                <p className="text-sm text-muted-foreground">Find teams and events effortlessly.</p>
                            </div>
                         </MagicCard>
                         <MagicCard
                            className="cursor-pointer rounded-lg overflow-hidden border border-border/30"
                            gradientColor="hsl(var(--background))"
                            gradientSize={150}
                         >
                            <img src="https://images.pexels.com/photos/12489187/pexels-photo-12489187.jpeg" alt="Futuristic Data Stream Demo" className="w-full h-64 object-cover" />
                            <div className="p-4 bg-background/80 backdrop-blur-sm">
                                <p className="font-semibold text-foreground">Seamless Integration</p>
                                <p className="text-sm text-muted-foreground">Connect your game profiles easily.</p>
                            </div>
                        </MagicCard>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default SolutionSection;