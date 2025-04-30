
import React from "react";
import { motion } from "motion/react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { Label } from "@/components/ui/label"; // Shadcn UI Label
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";

export function OfferLeadCaptureSection() {
     const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
           
        },
    };
     const formElementVariants = {
         hidden: { opacity: 0, x: -30 },
         visible: { opacity: 1, x: 0,}
    }


  return (
    <motion.section
      id="join-beta" // Corresponds to #join anchor link
      className="py-20 md:py-32 scroll-mt-20" // Added scroll-mt
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.2 }}
       variants={sectionVariants}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <NeonGradientCard
          className="w-full max-w-3xl p-8 md:p-12 relative overflow-hidden text-center"
          borderSize={3}
          borderRadius={20}
          neonColors={{ firstColor: "#39ff14", secondColor: "#00ffff" }} // Green to Blue
        >
           {/* Background Particles inside the card */}
            <Particles
                className="absolute inset-0 z-0 opacity-30"
                quantity={50}
                color="hsl(var(--primary))"
                vx={0}
                vy={0}
                ease={80}
                size={0.2}
            />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neon-green text-shadow-neon-green">
              <TextAnimate animation="slideUp" by="word">
                Be Among the First!
              </TextAnimate>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sign up for early access to the Neon Gaming Hub beta. Get exclusive previews, provide feedback, and help shape the future of our community.
            </p>

            <form className="flex flex-col items-center gap-6" onSubmit={(e) => e.preventDefault()}>
               <motion.div className="w-full max-w-md" variants={formElementVariants}>
                <Label htmlFor="email-lead" className="sr-only">
                  Email Address
                </Label>
                <ShineBorder
                    className="rounded-lg"
                    shineColor={["hsl(var(--primary))", "hsl(var(--accent))"]}
                    borderWidth={1}
                >
                     <Input
                        id="email-lead"
                        type="email"
                        placeholder="your.email@domain.com"
                        required
                        className="w-full h-12 px-4 text-lg bg-background/80 border-0 focus:ring-2 focus:ring-neon-blue focus:ring-offset-0 placeholder:text-muted-foreground/60"
                     />
                </ShineBorder>
               </motion.div>

                <motion.div variants={formElementVariants} transition={{ delay: 0.1 }}>
                    <ShimmerButton
                        type="submit"
                        className="shadow-lg scale-105"
                        shimmerColor="#00ffff" // Neon Blue shimmer
                        shimmerSize="0.1em"
                        background="hsl(var(--primary))" // Base Neon Blue background
                    >
                        <span className="whitespace-pre-wrap text-center text-base md:text-lg font-semibold leading-none tracking-tight text-primary-foreground px-6 py-2">
                            Get Early Access
                        </span>
                    </ShimmerButton>
                </motion.div>
            </form>

            <p className="text-xs text-muted-foreground mt-6">
              We respect your privacy. No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </NeonGradientCard>
      </div>
    </motion.section>
  );
}