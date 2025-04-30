
import React from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { AnimatedList } from "@/components/magicui/animated-list";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DotPattern } from "@/components/magicui/dot-pattern"; // Subtle background
import { CheckCircle } from 'lucide-react'; // Icon for features

// Sample Beta Features (replace with actual offer details)
const betaFeatures = [
  { name: "Priority Access to New Features", icon: CheckCircle },
  { name: "Exclusive Beta Tester Badge", icon: CheckCircle },
  { name: "Direct Feedback Channel to Devs", icon: CheckCircle },
  { name: "Early Access to Community Events", icon: CheckCircle },
  { name: "Shape the Future of the Grid", icon: CheckCircle },
];

const OfferSection: React.FC = () => {
    // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } }
    };

     const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

     const FeatureItem = ({ name, icon: Icon }: { name: string; icon: React.ElementType }) => (
        <NeonGradientCard
            className="p-3 rounded-lg flex items-center space-x-3"
            borderSize={1}
            borderRadius={8}
            neonColors={{ firstColor: "hsl(var(--primary))", secondColor: "hsl(var(--accent))" }}
        >
            <Icon className="size-5 text-neon-green flex-shrink-0" />
            <span className="text-foreground text-sm md:text-base">{name}</span>
        </NeonGradientCard>
    );


    return (
        <section id="offer" className="relative section-padding overflow-hidden">
             {/* Background Element */}
             <DotPattern
                className="absolute inset-0 -z-10 h-full w-full fill-neon-blue/10 [mask-image:radial-gradient(white,transparent_80%)]"
                cr={1}
                cy={1}
                cx={1}
             />
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background -z-10"></div>


            <motion.div
                className="container-narrow relative z-10" // Use narrower container
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                 <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={cardVariants} // Reuse card variant for initial reveal
                 >
                     <TextReveal className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                         Be Among the First - Join the Beta!
                     </TextReveal>
                     <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                         Get exclusive early access, help shape our community, and unlock special perks.
                     </p>
                 </motion.div>

                 <motion.div variants={cardVariants}>
                     <NeonGradientCard
                        className="p-6 md:p-10"
                        borderSize={3}
                        borderRadius={16}
                        neonColors={{ firstColor: "hsl(var(--accent))", secondColor: "hsl(var(--secondary))" }}
                    >
                        <h3 className="text-2xl font-semibold text-center mb-8 text-shadow-neon-glow-accent">Beta Access Includes:</h3>
                        <div className="max-w-md mx-auto">
                            <AnimatedList>
                                {betaFeatures.map((feature, idx) => (
                                    <FeatureItem {...feature} key={idx} />
                                ))}
                            </AnimatedList>
                        </div>
                         <div className="mt-10 text-center">
                             <a href="#join-now"> {/* Link to lead capture section */}
                                 <ShimmerButton className="shadow-lg shadow-accent/40">
                                     <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                         Claim Your Beta Spot
                                     </span>
                                 </ShimmerButton>
                             </a>
                         </div>
                    </NeonGradientCard>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OfferSection;