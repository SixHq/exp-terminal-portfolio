
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input"; // Using Shadcn Input for simplicity, styled with Tailwind
import { Label } from "@/components/ui/label"; // Using Shadcn Label
import { MagicCard } from "@/components/magicui/magic-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Meteors } from "@/components/magicui/meteors"; // Background effect
import { AuroraText } from "@/components/magicui/aurora-text";
import { Confetti } from "@/components/magicui/confetti"; // For success state


const LeadCaptureSection: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (username.trim() && email.trim() && email.includes('@')) {
            console.log('Form Submitted:', { username, email });
            setSubmitted(true);
            setShowConfetti(true);
            // Reset confetti after a delay
            setTimeout(() => setShowConfetti(false), 5000);
             // You would typically send this data to a backend here
        } else {
            console.error('Validation failed');
            // Add user feedback for validation errors if needed
        }
    };

     // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const formElementVariants = {
         hidden: { opacity: 0, x: -20 },
         visible: (i: number) => ({ // Custom function for stagger delay
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" }
        })
    };


    return (
        <section id="join-now" className="relative section-padding overflow-hidden">
             {/* Background */}
             <Meteors number={40} className="absolute inset-0 -z-10" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background -z-20"></div>

            <motion.div
                className="container-narrow relative z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <MagicCard
                    className="p-8 md:p-12 rounded-xl border border-neon-blue/30 bg-card/80 backdrop-blur-md shadow-xl shadow-primary/10"
                    gradientColor="hsl(var(--card))" // Use card color for subtle effect
                    gradientSize={250}
                    gradientOpacity={0.15}
                >
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                             <AuroraText >Enter the Grid</AuroraText>
                        </h2>
                        <p className="text-muted-foreground mb-2">Sign up now for exclusive Beta access.</p>
                        {/* Optional Urgency Note */}
                        <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 mb-8 text-sm transition ease-out border border-neon-pink/30 rounded-full bg-secondary/10">
                             <span>✨ Limited Beta Spots Remaining!</span>
                        </AnimatedShinyText>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-6">
                                <motion.div className="grid w-full items-center gap-1.5 text-left" custom={0} variants={formElementVariants}>
                                    <Label htmlFor="username" className="text-sm font-medium text-muted-foreground">Gamer Tag / Username</Label>
                                    <Input
                                        type="text"
                                        id="username"
                                        placeholder="e.g., NeonNinja"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        className="bg-background/50 border-border focus:border-neon-blue focus:ring-neon-blue placeholder:text-muted-foreground/50"
                                    />
                                </motion.div>
                                <motion.div className="grid w-full items-center gap-1.5 text-left" custom={1} variants={formElementVariants}>
                                    <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="bg-background/50 border-border focus:border-neon-blue focus:ring-neon-blue placeholder:text-muted-foreground/50"
                                    />
                                </motion.div>
                                <motion.div custom={2} variants={formElementVariants}>
                                    <ShimmerButton type="submit" className="w-full shadow-lg shadow-primary/40">
                                         <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                            Join Beta Now
                                        </span>
                                    </ShimmerButton>
                                </motion.div>
                                 <motion.p
                                    className="text-xs text-muted-foreground/70 pt-2"
                                    custom={3}
                                    variants={formElementVariants}
                                >
                                    We respect your privacy. No spam, ever.
                                </motion.p>
                            </form>
                         ) : (
                             <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "backOut" }}
                                className="text-center py-8"
                             >
                                 {showConfetti && <Confetti particleCount={150} spread={90} origin={{ y: 0.6 }} />}
                                 <CheckCircle className="size-16 mx-auto text-neon-green mb-4" />
                                 <h3 className="text-2xl font-semibold text-foreground mb-2">Welcome to the Grid!</h3>
                                 <p className="text-muted-foreground">Thanks for signing up! We'll be in touch soon with access details.</p>
                             </motion.div>
                         )}
                    </div>
                </MagicCard>
            </motion.div>
        </section>
    );
};

export default LeadCaptureSection;