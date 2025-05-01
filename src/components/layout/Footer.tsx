
import React from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { BorderBeam } from '@/components/magicui/border-beam'; // Add border beam for visual flair

// SVG Icons (from previous tool use)
const PrivacyIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 21L7.18762 18.9912C4.55966 17.1141 3 14.0834 3 10.8538L3 5.75432C3 5.30784 3.29598 4.91546 3.72528 4.7928L9.72528 3.07852C9.90483 3.02721 10.0952 3.02721 10.2747 3.07852L16.2747 4.7928C16.704 4.91546 17 5.30784 17 5.75432V7.50002M19 15V13C19 11.8955 18.1046 11 17 11C15.8954 11 15 11.8955 15 13V15M19 15H15M19 15C20.1046 15 21 15.8955 21 17V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V17C13 15.8955 13.8954 15 15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SourceCodeIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const userName = "Alex Hartman"; // Reuse from sidebar if possible, or define here

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }} // Delayed entrance after main content
            className={cn(
                " bottom-0 left-0 w-full h-10", // Fixed position, specific height
                "bg-terminal-bg/95 backdrop-blur-sm", // Slightly more opaque, blurred background
                "border-t border-border/30", // Top border
                "flex items-center justify-between", // Flex layout
                "px-4 md:px-6", // Horizontal padding
                "text-xs font-mono z-20", // Base text style, ensure above grid/content below modals
                "pl-72" // Offset for the fixed sidebar (width = w-72 = 18rem)
            )}
        >
            {/* Border Beam along the top edge */}
            <BorderBeam size={80} duration={6} delay={3} colorFrom="hsl(var(--terminal-cyan))" colorTo="hsl(var(--terminal-magenta))" />

            {/* Left Side: Copyright */}
            <div className="flex items-center">
                 {/* Use AnimatedShinyText for a subtle effect */}
                 <AnimatedShinyText className="inline-flex items-center text-muted-foreground/80 transition ease-out">
                    <span>✨ © {currentYear} {userName}. All rights reserved.</span>
                 </AnimatedShinyText>
                 {/* Or a simpler version: */}
                 {/* <span className="text-muted-foreground/80">© {currentYear} {userName}. All rights reserved.</span> */}
            </div>

            {/* Right Side: Links */}
            <div className="flex items-center space-x-4">
                <a
                    href="/privacy-policy" // Replace with actual link or trigger command
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-muted-foreground hover:text-terminal-cyan transition-colors duration-200 group"
                >
                     <motion.div whileHover={{ scale: 1.1 }} className="transition-transform">
                         <PrivacyIcon />
                     </motion.div>
                     <span className="group-hover:underline">Privacy Policy</span>
                </a>
                <a
                    href="https://github.com/your-username/your-portfolio-repo" // Replace with actual repo link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-muted-foreground hover:text-terminal-green transition-colors duration-200 group"
                >
                    <motion.div whileHover={{ scale: 1.1 }} className="transition-transform">
                        <SourceCodeIcon />
                     </motion.div>
                    <span className="group-hover:underline">Source Code</span>
                </a>
                 {/* Optional: Add a status indicator */}
                 {/* <div className="flex items-center space-x-1 text-terminal-green">
                     <span className="relative flex h-2 w-2">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green"></span>
                     </span>
                     <span>System Online</span>
                 </div> */}
            </div>
        </motion.footer>
    );
};

export default Footer;