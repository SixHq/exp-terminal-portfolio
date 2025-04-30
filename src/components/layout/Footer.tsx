
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { TextAnimate } from '@/components/magicui/text-animate';
import { BorderBeam } from '@/components/magicui/border-beam';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShinyButton } from '@/components/magicui/shiny-button';
import { fadeIn } from '@/lib/animations';

// Fetched SVGs or Placeholders
const CryptoLogo = () => (
    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-electric-cyan group-hover:text-vibrant-purple transition-colors duration-300">
        <path d="M11.7 11.7505C12.1142 11.7505 12.45 11.4147 12.45 11.0005C12.45 10.5862 12.1142 10.2505 11.7 10.2505V11.7505ZM5.85 10.2505C5.43579 10.2505 5.1 10.5862 5.1 11.0005C5.1 11.4147 5.43579 11.7505 5.85 11.7505V10.2505ZM11.7 14.7505C12.1142 14.7505 12.45 14.4147 12.45 14.0005C12.45 13.5862 12.1142 13.2505 11.7 13.2505V14.7505ZM5.85 13.2505C5.43579 13.2505 5.1 13.5862 5.1 14.0005C5.1 14.4147 5.43579 14.7505 5.85 14.7505V13.2505ZM17.3313 6.00787C17.7276 6.12863 18.1467 5.90533 18.2674 5.50911C18.3882 5.11289 18.1649 4.6938 17.7687 4.57304L17.3313 6.00787ZM10.0507 7.93388L9.43509 7.50548L9.43509 7.50548L10.0507 7.93388ZM10.0507 16.067L10.6663 15.6386L10.6663 15.6386L10.0507 16.067ZM17.7687 19.4279C18.1649 19.3071 18.3882 18.888 18.2674 18.4918C18.1467 18.0956 17.7276 17.8723 17.3313 17.993L17.7687 19.4279ZM11.7 10.2505H5.85V11.7505H11.7V10.2505ZM11.7 13.2505H5.85V14.7505H11.7V13.2505ZM17.7687 4.57304C14.6573 3.62475 11.3103 4.81083 9.43509 7.50548L10.6663 8.36227C12.1773 6.19095 14.8554 5.25324 17.3313 6.00787L17.7687 4.57304ZM9.43509 7.50548C7.56282 10.196 7.56282 13.805 9.43509 16.4954L10.6663 15.6386C9.15241 13.4631 9.15241 10.5378 10.6663 8.36227L9.43509 7.50548ZM9.43509 16.4954C11.3103 19.1901 14.6573 20.3762 17.7687 19.4279L17.3313 17.993C14.8554 18.7477 12.1773 17.81 10.6663 15.6386L9.43509 16.4954Z" fill="currentColor"/>
    </svg>
);

const TwitterIcon = () => (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18.6443C7.56435 20.8078 17.1652 21.9701 19.0539 9.31123C19.715 9.01907 20.7994 8.21494 21 6.02928C20.3704 6.47935 19.1531 6.67711 17.9443 6.56341C15.9533 5.52114 11.9241 4.80102 11.7352 10.2587C9.61043 9.97449 4.99257 8.52478 3.51939 5C2.85835 7.55831 2.74503 13.4235 7.58009 16.4176C7.36761 16.7809 6.57908 17.5594 5.12478 17.7679" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LinkedinIcon = () => (
    <svg width="20px" height="20px" viewBox="7.025 7.025 497.951 497.951" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="currentColor"/>
    </svg>
);

const GithubIcon = () => (
    <svg width="20px" height="20px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
        <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" fill="currentColor"/>
    </svg>
);

const DiscordIcon = () => (
    <svg width="20px" height="20px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fillRule="nonzero"/>
    </svg>
);

const EmailIcon = () => (
    <svg fill="currentColor" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
        <path d="M341.3,32.7V113l90.3,90.3l-90.3,90.3V374L512,203.3L341.3,32.7z M391.5,203.3L220.9,32.7v106.6C-8.2,177.6,0,383.5,0,474.4 c55.9-159.6,124.5-192.3,220.8-199V374L391.5,203.3z"/>
    </svg>
);

const Footer: React.FC = () => {
     const [newsletterEmail, setNewsletterEmail] = useState('');

     const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter submission logic
        console.log("Newsletter Signup:", { newsletterEmail });
        alert('Thanks for subscribing!');
        setNewsletterEmail('');
    };

    const currentYear = new Date().getFullYear();

    const navLinks = {
        product: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Security", href: "#security" }, // Example addition
            { name: "API", href: "#api" }, // Example addition
        ],
        company: [
            { name: "About Us", href: "#about" },
            { name: "Blog", href: "#blog" },
            { name: "Careers", href: "#careers" },
            { name: "Contact", href: "#contact" },
        ],
        resources: [
            { name: "Support Center", href: "#support" },
            { name: "Documentation", href: "#docs" },
            { name: "Community", href: "#community" },
            { name: "Status", href: "#status" },
        ],
    };

    const socialLinks = [
        { name: "Twitter", href: "https://x.com", Icon: TwitterIcon },
        { name: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
        { name: "GitHub", href: "https://github.com", Icon: GithubIcon },
        { name: "Discord", href: "https://discord.com", Icon: DiscordIcon },
    ];

    return (
        <motion.footer
            className="relative border-t border-border/20 bg-background/95 backdrop-blur-sm mt-auto py-16 md:py-20 overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier
            variants={fadeIn('up', 50, 0.8)} // Slide up animation
        >
            {/* Optional Border Beam Effect */}
            <BorderBeam size={250} duration={12} delay={9} colorFrom="hsl(var(--primary))" colorTo="hsl(var(--secondary))" />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-y-10 gap-x-8 mb-12">

                    {/* Brand and Description */}
                    <div className="col-span-2 md:col-span-2 xl:col-span-2 pr-4 md:pr-8">
                        <a href="/" className="flex items-center space-x-2 mb-4 group">
                            <CryptoLogo />
                             <TextAnimate
                                as="span" // Use span for inline behavior
                                animation="fadeIn"
                                by="character"
                                delay={0.5} // Delay slightly after footer fades in
                                className="font-heading font-semibold text-xl text-foreground group-hover:text-electric-cyan transition-colors duration-300"
                             >
                                CryptoVerse
                            </TextAnimate>
                        </a>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            The secure, intuitive platform for navigating the future of decentralized finance. Invest, learn, and grow with confidence.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <EmailIcon />
                            <a href="mailto:support@cryptoverse.com" className="hover:text-primary transition-colors">
                                support@cryptoverse.com
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">Product</h3>
                        <ul className="space-y-3">
                            {navLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">Company</h3>
                        <ul className="space-y-3">
                             {navLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">Resources</h3>
                        <ul className="space-y-3">
                             {navLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                     <div className="col-span-2 md:col-span-5 xl:col-span-1">
                         <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">Stay Updated</h3>
                         <p className="text-sm text-muted-foreground mb-4">Get the latest crypto news, insights, and platform updates.</p>
                         <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3">
                             <Label htmlFor="footer-newsletter-email" className="sr-only">Email address</Label>
                             <Input
                                id="footer-newsletter-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                className="block w-full rounded-md border-border/50 bg-background/70 px-4 py-2.5 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-muted-foreground/60"
                                placeholder="Enter your email"
                             />
                             <ShinyButton className="w-full py-2.5 text-sm">
                                 Subscribe
                             </ShinyButton>
                         </form>
                    </div>
                </div>

                {/* Bottom Bar: Copyright and Social Links */}
                <div className="mt-12 border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-xs text-muted-foreground text-center md:text-left mb-4 md:mb-0">
                        &copy; {currentYear} CryptoVerse Inc. All rights reserved.
                         <a href="/privacy" className="ml-4 hover:text-primary transition-colors">Privacy Policy</a>
                         <span className="mx-2 opacity-50">|</span>
                         <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
                    </p>
                    <div className="flex space-x-5">
                         {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-muted-foreground hover:text-primary transition-all duration-200"
                                whileHover={{ scale: 1.15, y: -2 }} // Pop effect on hover
                                whileTap={{ scale: 0.95 }}
                            >
                                <link.Icon />
                            </motion.a>
                         ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;