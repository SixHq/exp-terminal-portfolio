
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

// Magic UI Components
import { RetroGrid } from '@/components/magicui/retro-grid';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { Ripple } from '@/components/magicui/ripple'; // For background effect

// Shadcn UI Components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Animation Variants
import { fadeIn, scale, staggerContainer, simpleFadeIn, textMaskReveal } from '@/lib/animations';
import { ArrowRightIcon, CheckIcon } from '@radix-ui/react-icons'; // Icons

// --- FAQ Data ---
const faqData = [
    {
        question: "Is CryptoVerse secure?",
        answer: "Absolutely. We employ multi-layered security architecture, including cold storage for the majority of assets, regular security audits by independent third parties, and advanced encryption protocols to protect your data and funds.",
    },
    {
        question: "Is cryptocurrency investing risky?",
        answer: "All investments carry risk, and cryptocurrency markets can be volatile. CryptoVerse provides educational resources, risk management tools, and transparent data to help you make informed decisions. We encourage users to invest responsibly and only what they can afford to lose.",
    },
    {
        question: "What are the fees?",
        answer: "We offer a transparent fee structure. Trading fees are competitive and clearly displayed before you confirm any transaction. There are no hidden charges for deposits or maintaining your account. Check our Pricing page for full details.",
    },
    {
        question: "How do I get started?",
        answer: "Getting started is easy! Simply click the 'Get Started Now' or 'Sign Up' button, complete the secure registration process (usually takes less than 5 minutes), fund your account, and you're ready to explore the world of crypto.",
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, we offer 24/7 customer support through various channels including live chat, email, and a comprehensive help center. Our dedicated team is here to assist you with any questions or issues.",
    },
];

// --- Main Component ---
const ConversionSections: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to API)
        console.log("Lead Captured:", { name, email });
        alert('Thank you for your interest! We will be in touch.');
        setName('');
        setEmail('');
    };

    return (
        <div className="space-y-28 md:space-y-40 py-24 md:py-32 overflow-hidden">

            {/* --- Lead Capture Section --- */}
            <motion.section
                id="lead-capture"
                className="relative container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0.2, 0.1)}
            >
                 {/* Background Grid */}
                 <RetroGrid className="absolute inset-0 opacity-15 z-0" />

                 <div className="relative z-10 bg-card/60 dark:bg-card/80 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-border/30 shadow-xl shadow-black/20">
                    <motion.div variants={fadeIn('down', 30)} className="text-center mb-8">
                        <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl text-foreground">
                            Ready to Start Your Crypto Journey?
                        </h2>
                        <p className="mt-3 text-lg text-muted-foreground">
                            Get exclusive early access and updates. Enter your details below.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleLeadSubmit}
                        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        variants={fadeIn('up', 20, 0.5, 0.2)} // Subtle fade in for the form itself
                    >
                        <div>
                            <Label htmlFor="name" className="block text-sm font-medium text-foreground/80">
                                Name
                            </Label>
                            <div className="mt-1">
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-border/50 bg-background/70 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                                Email
                            </Label>
                            <div className="mt-1">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-border/50 bg-background/70 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <motion.div className="sm:col-span-2" variants={simpleFadeIn} transition={{ delay: 0.3 }}>
                            <ShimmerButton
                                type="submit"
                                className="w-full items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow-sm"
                                shimmerColor="#ffffff"
                                background="hsl(var(--primary))"
                                shimmerDuration="4s"
                            >
                                <span className="relative z-10">Get Started Now</span>
                            </ShimmerButton>
                        </motion.div>
                    </motion.form>

                    <motion.p variants={fadeIn('up', 10, 0.5, 0.4)} className="mt-6 text-center text-xs text-muted-foreground/70">
                        By submitting, you agree to our Privacy Policy. We respect your privacy and won't spam you.
                    </motion.p>
                 </div>
            </motion.section>

            {/* --- FAQ Section --- */}
            <motion.section
                id="faq"
                className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer(0.2, 0.1)}
            >
                <motion.div variants={fadeIn('down', 30)} className="text-center mb-12 md:mb-16">
                     <TextAnimate
                        as="h2"
                        animation="blurInUp"
                        by="word"
                        className="text-3xl font-bold font-heading tracking-tight sm:text-4xl lg:text-5xl text-foreground mb-4"
                     >
                        Frequently Asked Questions
                    </TextAnimate>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have questions? We've got answers. If you don't find what you're looking for, feel free to <a href="#contact" className="text-primary font-medium hover:underline">contact us</a>.
                    </p>
                </motion.div>

                <motion.div variants={fadeIn('up', 40, 0.7, 0.2)}>
                     <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-border/30 rounded-lg bg-card/50 backdrop-blur-sm px-6 transition-colors hover:bg-card/70"
                            >
                                <AccordionTrigger className="text-left font-medium text-base text-foreground hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground pt-2 pb-4">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </motion.section>

            {/* --- Closing Argument Section --- */}
            <motion.section
                id="closing"
                className="relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.3 }}
                 variants={staggerContainer(0.3, 0.2)}
            >
                {/* Optional Background Effect */}
                <Ripple mainCircleOpacity={0.1} numCircles={6} className="absolute inset-0 -z-10 opacity-30" />

                <motion.blockquote variants={fadeIn('up', 40)} className="mb-8">
                    <p className="text-2xl italic leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                        "The future of finance is decentralized. CryptoVerse isn't just a platform; it's your gateway to participating in that future, securely and intelligently."
                    </p>
                    <footer className="mt-4 text-sm text-foreground font-medium">- Jane Doe, CEO of CryptoVerse</footer>
                </motion.blockquote>

                 <motion.div variants={scale(0.8, 1, 0.8, 0.2)}>
                     <h2 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl lg:text-6xl text-foreground mb-6">
                        <SparklesText colors={{ first: '#fff', second: 'hsl(var(--primary))' }}>Join the Revolution.</SparklesText>
                     </h2>
                 </motion.div>

                <motion.p variants={fadeIn('up', 20, 0.6, 0.3)} className="mt-4 mb-10 text-lg leading-8 text-muted-foreground max-w-xl mx-auto">
                    Don't just watch the future unfold. Be a part of it. Sign up for CryptoVerse today and take control of your financial destiny.
                </motion.p>

                <motion.div variants={fadeIn('up', 30, 0.7, 0.4)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <RainbowButton className="px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                        Sign Up Now
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </RainbowButton>
                    {/* Secondary Offer */}
                     <a href="#newsletter" className="text-sm font-medium text-primary hover:underline w-full sm:w-auto px-6 py-3 rounded-md transition-colors hover:bg-primary/10">
                         Or, Join Our Newsletter
                     </a>
                </motion.div>
            </motion.section>

        </div>
    );
};

export default ConversionSections;