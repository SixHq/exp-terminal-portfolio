
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { DotPattern } from "@/components/magicui/dot-pattern"; // Add subtle background pattern

// Fetched SVG Icons
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 -3 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" {...props}> <g> <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z" fill="currentColor"/> </g> </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg height="1em" width="1em" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.903 21.903" xmlSpace="preserve" {...props}> <g> <path style={{fill:"currentColor"}} d="M2.67,1.211c0.682,0,1.216,0.215,1.604,0.643S4.87,2.822,4.898,3.469 c0,0.639-0.218,1.178-0.657,1.616C3.802,5.522,3.202,5.741,2.443,5.741H2.416c-0.741,0-1.328-0.219-1.765-0.656 C0.219,4.647,0,4.108,0,3.469c0-0.657,0.238-1.197,0.718-1.622C1.198,1.423,1.85,1.211,2.67,1.211z M0.287,7.535H4.97v13.156H0.287 V7.535z M21.903,13.148v7.543h-4.682v-7.036c0-0.895-0.184-1.612-0.55-2.158c-0.364-0.541-0.973-0.812-1.833-0.812 c-0.655,0-1.181,0.166-1.573,0.5c-0.393,0.332-0.678,0.699-0.85,1.102c-0.056,0.146-0.091,0.307-0.11,0.486 c-0.018,0.176-0.026,0.367-0.026,0.568v7.351H7.568c0.02-2.226,0.031-4.268,0.031-6.12v-2.339v-2.125 c0-0.647-0.007-1.199-0.018-1.657C7.575,7.997,7.568,7.69,7.568,7.535h4.711v1.863l-0.026,0.054h0.026V9.398 c0.146-0.229,0.333-0.468,0.561-0.719c0.231-0.25,0.507-0.484,0.843-0.7c0.333-0.214,0.734-0.39,1.204-0.533 c0.473-0.141,1.011-0.211,1.624-0.211c0.762,0,1.474,0.116,2.138,0.349c0.662,0.233,1.231,0.598,1.715,1.096 c0.481,0.495,0.858,1.111,1.132,1.847C21.769,11.261,21.903,12.135,21.903,13.148z"/> </g> </svg>
);

// Using a simple text 'X' for Twitter/X as SVG wasn't found
const TwitterXIcon = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className="font-bold text-lg" {...props}>X</span>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const yourName = "[Your Name/Alias]"; // Replace with your name/alias

  return (
    <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full border-t border-border/10 bg-background/80 backdrop-blur-sm pt-12 pb-8 overflow-hidden z-10" // Added z-index
    >
        {/* Subtle Background Pattern */}
        <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
                "absolute inset-0 z-[-1] h-full w-full fill-primary/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
            )}
        />
        {/* Animated Border */}
        <BorderBeam size={250} duration={12} delay={0} colorFrom="hsl(var(--accent))" colorTo="hsl(var(--primary))" className="absolute top-0 left-0 w-full opacity-60" />

        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Brand/Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <a href="#home" className="mb-2 font-heading text-xl font-bold text-foreground hover:text-accent transition-colors">
                        {yourName}
                    </a>
                    <p className="text-sm text-muted-foreground">Frontend Alchemist</p>
                    <p className="text-xs text-muted-foreground/70 mt-4">&copy; {currentYear} {yourName}. All Rights Reserved.</p>
                </div>

                {/* Column 2: Navigation & Legal */}
                <div className="flex flex-col items-center text-center">
                    <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
                    <ul className="space-y-1.5">
                        <li><a href="#home" className="text-sm text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                        <li><a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">Projects</a></li>
                        <li><a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors">Skills</a></li>
                        <li><a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                        <li className="pt-2"><a href="#" className="text-xs text-muted-foreground/70 hover:text-accent/80 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-xs text-muted-foreground/70 hover:text-accent/80 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact & Social */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                     <h4 className="font-semibold text-foreground mb-3">Connect</h4>
                     <a href="mailto:your.email@example.com" className="text-sm text-muted-foreground hover:text-accent transition-colors mb-4">your.email@example.com</a> {/* Replace with your email */}
                    <div className="flex space-x-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-transform duration-200 ease-in-out hover:scale-110 group">
                             <GithubIcon className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                         <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-transform duration-200 ease-in-out hover:scale-110 group">
                            <LinkedinIcon className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                         <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-transform duration-200 ease-in-out hover:scale-110 group flex items-center justify-center w-5 h-5"> {/* Wrapper for X */}
                           <TwitterXIcon className="w-4 h-4" /> {/* Simple X */}
                            <span className="sr-only">Twitter/X</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
  );
}
