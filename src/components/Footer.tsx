
import React from "react";
import { motion } from "motion/react";
import { HyperText } from "@/components/magicui/hyper-text";
import { CoolMode } from "@/components/magicui/cool-mode";
import { cn } from "@/lib/utils";

// SVG Icon Components
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" {...props}>
         <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fillRule="nonzero"/>
    </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    // Using a path that resembles the new X logo more closely
     <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
     </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg width="1em" height="1em" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M29.5,57.5C24,57.5,21.39,52,19.4,46.86c-1-2.46-2.66-7.84-4.31-13.06-1.47-4.63-3.27-10.33-3.83-11.57A14.87,14.87,0,0,0,6.7,24.34a1,1,0,0,1-1.29-.19l-2.17-2.5a1,1,0,0,1-.11-1.15,33,33,0,0,1,11.71-11c4.21-2.42,7.55-3.1,9.92-2,1.74.8,2.91,2.53,3.39,5,.82,4.25,4.49,19.61,5.48,23.26.17.63.41,1,.65,1.08.42.07,1.79-.53,3.92-3.41,3-4,5.6-9.8,4.6-11.58-.85-1.51-4.55-1.12-6.21-.69a1,1,0,0,1-.89-.21,1,1,0,0,1-.35-.85A16,16,0,0,1,44.41,7.59c5.08-2.38,8.77-1.65,11-.61a9.74,9.74,0,0,1,5.26,6.43c1.57,6.08-2.34,16.85-9.51,26.19C44.79,47.86,35.33,57.5,29.5,57.5ZM11.33,20.26a1.69,1.69,0,0,1,1.48.66C13.3,21.6,14.4,25,17,33.2c1.64,5.18,3.34,10.54,4.27,12.94,2.24,5.78,4.39,9.36,8.23,9.36,4.07,0,12.31-7,20-17.11,7.6-9.91,10.36-19.81,9.16-24.47a7.75,7.75,0,0,0-4.17-5.12c-1.81-.85-4.89-1.44-9.27.61a13.92,13.92,0,0,0-7.69,9.5c2.07-.31,5.63-.44,7,1.94,1.92,3.41-2.77,11.08-4.73,13.75-2.27,3.08-4.26,4.49-5.89,4.19-.73-.14-1.71-.68-2.21-2.52-1-3.76-4.67-19-5.52-23.41C25.83,11,25.07,9.8,23.92,9.28c-1.73-.79-4.53-.13-8.09,1.92A32.36,32.36,0,0,0,5.24,20.91l1.12,1.3C8.53,20.91,10.19,20.26,11.33,20.26Z"/>
    </svg>
);

// Placeholder for Twitch if SVG wasn't found
const TwitchIconPlaceholder = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-6">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0h1.714v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
  </svg>
);


const footerLinks = [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/tos" },
];

const socialLinks = [
    { label: "Discord", Icon: DiscordIcon, href: "#", color: "text-[#5865F2]" },
    { label: "Twitter", Icon: TwitterIcon, href: "#", color: "text-foreground hover:text-blue-400" }, // Neutral color for X/Twitter
    { label: "Twitch", Icon: TwitchIconPlaceholder, href: "#", color: "text-[#9146FF]" }, // Placeholder or actual if found
    { label: "YouTube", Icon: YouTubeIcon, href: "#", color: "text-[#FF0000]" },
];


export function Footer() {
    const footerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.0, delay: 0.5, ease: "easeIn" },
        },
    };
    return (
        <motion.footer
            className="relative z-10 py-8 md:py-12 border-t border-border/30 bg-background/80 backdrop-blur-sm"
            initial="hidden"
            animate="visible" // Animate on load
            variants={footerVariants}
        >
            <div className="container mx-auto px-4 text-center">
                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary hover:text-shadow-neon-blue transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-8">
                    {socialLinks.map((social) => (
                        <CoolMode key={social.label}>
                             <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className={cn(
                                    "text-2xl transition-all duration-300 hover:scale-125 hover:brightness-125",
                                     social.color || "text-muted-foreground" // Fallback color
                                )}
                             >
                                 <social.Icon className="size-6" />
                            </a>
                         </CoolMode>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-xs text-muted-foreground">
                    <HyperText
                        className="inline-block"
                        duration={1000}
                        animateOnHover={false} // Animate on load
                        startOnView={true} // Ensure it starts
                    >
                        © 2025 Neon Gaming Hub. All Rights Reserved. Level Up Together.
                    </HyperText>
                </div>
            </div>
        </motion.footer>
    );
}