
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input"; // Shadcn Input
import { Textarea } from "@/components/ui/textarea"; // Shadcn Textarea
import { Label } from "@/components/ui/label"; // Shadcn Label
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Pointer } from "@/components/magicui/pointer";
import { Particles } from "@/components/magicui/particles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { CoolMode } from "@/components/magicui/cool-mode";
import { BorderBeam } from "../magicui/border-beam";


// Fetched SVGs
const UserIcon = () => (
    <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1em" height="1em" viewBox="0 0 31.61 31.61" xmlSpace="preserve">
        <g>
            <path d="M26.7,26.512l-1.394-8.346c-0.364-2.186-2.257-3.789-4.474-3.789h-2.271c0.334-0.134,0.656-0.292,0.966-0.471
                c4.324,0.104,5.766-1.275,5.766-1.275c-1.034-0.258-1.575-1.373-1.856-2.426c-0.188-0.705-0.258-1.447-0.199-2.174
                c0.015-0.19,0.022-0.382,0.022-0.576C23.26,3.338,19.923,0,15.805,0C11.688,0,8.35,3.337,8.35,7.455
                c0,0.188,0.007,0.374,0.021,0.558c0.06,0.775-0.019,1.566-0.232,2.314c-0.291,1.016-0.829,2.056-1.823,2.305
                c0,0,1.441,1.379,5.768,1.275c0.309,0.179,0.63,0.337,0.965,0.471h-2.271c-2.218,0-4.109,1.602-4.475,3.789L4.91,26.514
                c-0.211,1.27,0.146,2.566,0.977,3.549c0.832,0.98,2.053,1.548,3.34,1.548h13.155c1.287,0,2.507-0.565,3.339-1.548
                C26.555,29.079,26.911,27.782,26.7,26.512z M10.911,7.428c0-0.578,0.119-1.125,0.303-1.64h9.184
                c0.185,0.515,0.304,1.062,0.304,1.64c0,2.704-2.191,4.895-4.896,4.895C13.103,12.323,10.911,10.132,10.911,7.428z"/>
        </g>
    </svg>
);

const EmailIcon = () => (
    <svg fill="currentColor" height="1em" width="1em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
        <path d="M341.3,32.7V113l90.3,90.3l-90.3,90.3V374L512,203.3L341.3,32.7z M391.5,203.3L220.9,32.7v106.6C-8.2,177.6,0,383.5,0,474.4
        c55.9-159.6,124.5-192.3,220.8-199V374L391.5,203.3z"/>
    </svg>
);

// Placeholder Send Icon (Replace if SVG is found later)
const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} className={cn("ml-1.5 size-4", props.className)}>
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);


export function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Replace with actual API call logic
        console.log("Form Data:", formData);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        // Simulate success/error
        const success = Math.random() > 0.2; // 80% chance of success
        setStatus(success ? 'success' : 'error');
        if (success) {
           // Optionally clear form: setFormData({ name: '', email: '', message: '' });
           setTimeout(() => setStatus('idle'), 3000); // Reset after success message
        } else {
             setTimeout(() => setStatus('idle'), 4000); // Reset after error message
        }
    };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-secondary/5 via-background to-background">
        {/* Background Elements */}
        <Particles
            className="absolute inset-0 z-0 opacity-40 dark:opacity-25"
            quantity={80}
            ease={70}
            size={0.6}
            staticity={50}
             vx={-0.05} // Slow horizontal movement
             vy={-0.05} // Slow vertical movement
        />
       
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            <TextAnimate animation="blurInUp" by="word" delay={0.1}>
              Let's Build Something Stellar
            </TextAnimate>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-xl">
             <TextAnimate animation="fadeIn" by="line" delay={0.4}>
                Have a project in mind or just want to connect? Send a message through the void.
             </TextAnimate>
          </p>
        </motion.div>

        {/* Contact Form */}
         <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
             viewport={{ once: true }}
             className="max-w-xl mx-auto"
         >
             <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-8 rounded-xl bg-card/50 backdrop-blur-md border border-border/30 shadow-xl shadow-primary/10 relative overflow-hidden">
                 <BorderBeam size={100} duration={10} delay={1} colorFrom="hsl(var(--primary))" colorTo="hsl(var(--accent))" className="opacity-50"/>
                 <Pointer className="fill-accent z-20" /> {/* Cursor Enhancement */}

                 <div className="grid grid-cols-1 gap-6">
                     {/* Name Input */}
                     <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.5, delay: 0.4 }}
                         viewport={{ once: true }}
                         className="relative"
                     >
                         <Label htmlFor="name" className="absolute -top-2 left-3 inline-block bg-card/80 px-1 text-xs font-medium text-muted-foreground backdrop-blur-sm z-10">Name</Label>
                         <div className="relative flex items-center">
                             <UserIcon  />
                              <Input
                                type="text"
                                id="name"
                                placeholder="Codename or Alias"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="pl-9 bg-background/70 border-border/50 focus:border-accent focus:ring-accent/50 transition-all duration-300 ease-in-out hover:border-accent/70"
                              />
                         </div>
                    </motion.div>

                    {/* Email Input */}
                     <motion.div
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.5, delay: 0.5 }}
                         viewport={{ once: true }}
                         className="relative"
                     >
                         <Label htmlFor="email" className="absolute -top-2 left-3 inline-block bg-card/80 px-1 text-xs font-medium text-muted-foreground backdrop-blur-sm z-10">Email</Label>
                         <div className="relative flex items-center">
                              <EmailIcon />
                              <Input
                                type="email"
                                id="email"
                                placeholder="quantum.leap@email.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-9 bg-background/70 border-border/50 focus:border-accent focus:ring-accent/50 transition-all duration-300 ease-in-out hover:border-accent/70"
                             />
                         </div>
                    </motion.div>

                    {/* Message Textarea */}
                     <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: 0.6 }}
                         viewport={{ once: true }}
                         className="relative"
                     >
                         <Label htmlFor="message" className="absolute -top-2 left-3 inline-block bg-card/80 px-1 text-xs font-medium text-muted-foreground backdrop-blur-sm z-10">Message</Label>
                         <Textarea
                            id="message"
                            placeholder="Describe your mission..."
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-background/70 border-border/50 focus:border-accent focus:ring-accent/50 transition-all duration-300 ease-in-out hover:border-accent/70 min-h-[120px]"
                         />
                    </motion.div>
                 </div>

                {/* Submit Button & Status */}
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.7 }}
                     viewport={{ once: true }}
                     className="flex flex-col items-center space-y-4 pt-4"
                 >
                     <CoolMode>
                        <ShimmerButton
                            type="submit"
                            className="w-full md:w-auto shadow-lg shadow-accent/30"
                            shimmerColor="hsl(var(--background))"
                            background="hsl(var(--accent))"
                            disabled={status === 'sending'}
                        >
                            <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-accent-foreground flex items-center justify-center">
                                {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Signal Received!' : status === 'error' ? 'Transmission Failed!' : 'Launch Inquiry'}
                                {status === 'idle' && <SendIcon />}
                            </span>
                        </ShimmerButton>
                     </CoolMode>
                      {status === 'success' && <p className="text-sm text-emerald-400">Message sent successfully! I'll be in touch soon.</p>}
                      {status === 'error' && <p className="text-sm text-destructive">Error sending message. Please try again later or contact me directly.</p>}

                      {/* Privacy Assurance */}
                      <p className="text-xs text-muted-foreground/70 text-center pt-2">
                         Your information is encrypted and transmitted securely. Privacy assured.
                      </p>
                 </motion.div>

             </form>
         </motion.div>

      </div>
    </section>
  );
}