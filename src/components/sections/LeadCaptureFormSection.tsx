
import React from 'react';
import { motion } from 'motion/react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShimmerButton } from "@/components/magicui/shimmer-button"; // Using ShimmerButton for CTA
import { cn } from "@/lib/utils";

const LeadCaptureFormSection: React.FC = () => {

    // Animation variants for the main container
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1], // Smooth ease-out
                staggerChildren: 0.1, // Stagger children animation (heading, form)
            },
        },
    };

    // Animation variants for form elements (sequential slide/fade in)
    const formElementVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({ // Custom function to access index for delay
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Sequential delay based on index
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };


  return (
    <motion.section
      id="contact" // ID for navigation
      className="py-16 md:py-24 bg-background" // Simple background
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-16">

        {/* Left Side: Text Content */}
        <motion.div
            className="lg:w-1/2 text-center lg:text-left"
             variants={containerVariants} // Animate this column as a whole first
        >
            <TextAnimate
                as="h2"
                animation="blurIn" // Blur-in effect for heading
                by="word"
                duration={0.6}
                delay={0.1}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-primary-foreground tracking-tight mb-4"
            >
                Ready to Discuss Your Case?
            </TextAnimate>
             <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-muted-foreground mb-6"
            >
                Contact us today for a confidential consultation. Fill out the form, and one of our experienced attorneys will get back to you promptly.
            </motion.p>
             <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
             >
                <p className="text-sm text-secondary dark:text-muted-foreground">
                    Prefer to call? Reach us at: <a href="tel:+1234567890" className="font-semibold text-primary hover:text-accent transition-colors underline"> (123) 456-7890</a>
                </p>
                 <p className="text-sm text-secondary dark:text-muted-foreground mt-2">
                    Office Hours: Mon-Fri, 9 AM - 5 PM
                 </p>
             </motion.div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div className="w-full lg:w-1/2" variants={containerVariants}>
             {/* Using NeonGradientCard for a visually appealing form container */}
             <NeonGradientCard
                className="relative p-6 md:p-8 rounded-2xl"
                borderSize={2} // Thicker border
                borderRadius={20}
                neonColors={{ firstColor: "hsl(var(--primary))", secondColor: "hsl(var(--accent))" }}
             >
                {/* Optional: Add meteors for extra visual flair */}
                {/* <Meteors number={10} className="absolute inset-0 -z-10" /> */}

                <form action="#" method="POST" className="space-y-5">
                    {/* Name Field */}
                    <motion.div custom={0} variants={formElementVariants}>
                        <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            required
                            className="w-full bg-background/80 dark:bg-muted/50 border-border focus:ring-primary dark:focus:ring-accent"
                            placeholder="John Doe"
                        />
                    </motion.div>

                    {/* Email Field */}
                     <motion.div custom={1} variants={formElementVariants}>
                        <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className="w-full bg-background/80 dark:bg-muted/50 border-border focus:ring-primary dark:focus:ring-accent"
                             placeholder="you@example.com"
                        />
                    </motion.div>

                     {/* Phone Field */}
                    <motion.div custom={2} variants={formElementVariants}>
                        <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</Label>
                        <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                             // Optional, depending on requirements
                            className="w-full bg-background/80 dark:bg-muted/50 border-border focus:ring-primary dark:focus:ring-accent"
                             placeholder="(123) 456-7890"
                        />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div custom={3} variants={formElementVariants}>
                        <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Brief Message</Label>
                        <Textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            className="w-full bg-background/80 dark:bg-muted/50 border-border focus:ring-primary dark:focus:ring-accent"
                             placeholder="Please provide a brief description of your legal need."
                        />
                    </motion.div>

                     {/* Submit Button */}
                    <motion.div custom={4} variants={formElementVariants}>
                        <ShimmerButton
                             type="submit"
                             className="w-full rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary dark:focus:ring-accent"
                            shimmerColor="hsl(var(--primary-foreground))"
                            shimmerSize="0.1em"
                            shimmerDuration="3s"
                            background="hsl(var(--primary))"
                            borderRadius="0.75rem" // Match NeonCard radius
                        >
                             <motion.span
                                className="whitespace-pre-wrap text-center text-base font-semibold leading-none tracking-tight text-primary-foreground px-6 py-3 block"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                             >
                                Schedule Your Confidential Consultation
                            </motion.span>
                        </ShimmerButton>
                    </motion.div>

                    {/* Privacy Assurance */}
                    <motion.p
                        custom={5} variants={formElementVariants}
                        className="text-xs text-center text-muted-foreground/80 mt-4"
                     >
                        Your information is confidential and protected. Submitting this form does not create an attorney-client relationship.
                    </motion.p>
                </form>
             </NeonGradientCard>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default LeadCaptureFormSection;