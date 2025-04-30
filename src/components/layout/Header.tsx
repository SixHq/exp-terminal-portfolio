
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ShimmerButton } from '@/components/magicui/shimmer-button'; // Using Magic UI Button
import { Button } from "@/components/ui/button"; // Fallback for mobile menu trigger
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { fadeIn } from '@/lib/animations'; // Import animation variant

// SVGs obtained from tools
const CryptoLogo = () => (
    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-electric-cyan group-hover:text-vibrant-purple transition-colors duration-300">
        <path d="M11.7 11.7505C12.1142 11.7505 12.45 11.4147 12.45 11.0005C12.45 10.5862 12.1142 10.2505 11.7 10.2505V11.7505ZM5.85 10.2505C5.43579 10.2505 5.1 10.5862 5.1 11.0005C5.1 11.4147 5.43579 11.7505 5.85 11.7505V10.2505ZM11.7 14.7505C12.1142 14.7505 12.45 14.4147 12.45 14.0005C12.45 13.5862 12.1142 13.2505 11.7 13.2505V14.7505ZM5.85 13.2505C5.43579 13.2505 5.1 13.5862 5.1 14.0005C5.1 14.4147 5.43579 14.7505 5.85 14.7505V13.2505ZM17.3313 6.00787C17.7276 6.12863 18.1467 5.90533 18.2674 5.50911C18.3882 5.11289 18.1649 4.6938 17.7687 4.57304L17.3313 6.00787ZM10.0507 7.93388L9.43509 7.50548L9.43509 7.50548L10.0507 7.93388ZM10.0507 16.067L10.6663 15.6386L10.6663 15.6386L10.0507 16.067ZM17.7687 19.4279C18.1649 19.3071 18.3882 18.888 18.2674 18.4918C18.1467 18.0956 17.7276 17.8723 17.3313 17.993L17.7687 19.4279ZM11.7 10.2505H5.85V11.7505H11.7V10.2505ZM11.7 13.2505H5.85V14.7505H11.7V13.2505ZM17.7687 4.57304C14.6573 3.62475 11.3103 4.81083 9.43509 7.50548L10.6663 8.36227C12.1773 6.19095 14.8554 5.25324 17.3313 6.00787L17.7687 4.57304ZM9.43509 7.50548C7.56282 10.196 7.56282 13.805 9.43509 16.4954L10.6663 15.6386C9.15241 13.4631 9.15241 10.5378 10.6663 8.36227L9.43509 7.50548ZM9.43509 16.4954C11.3103 19.1901 14.6573 20.3762 17.7687 19.4279L17.3313 17.993C14.8554 18.7477 12.1773 17.81 10.6663 15.6386L9.43509 16.4954Z" fill="currentColor"/>
    </svg>
);

const HamburgerIcon = () => (
    <svg width="24px" height="24px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12.32H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 18.32H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 6.32001H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-md bg-background/80 border-b border-border/30"
      variants={fadeIn('down', 20, 0.5, 0)} // Subtle slide down/fade in on load
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 group">
           <CryptoLogo />
           <span className="font-heading font-semibold text-xl text-foreground group-hover:text-electric-cyan transition-colors duration-300">
               CryptoVerse
           </span>
        </a>

        {/* Desktop Navigation (Magic UI Dock) */}
        <nav className="hidden md:flex items-center">
          <Dock direction="middle" className="z-50">
            {navLinks.map((link) => (
              <DockIcon key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-2"
                  aria-label={link.name} // Added aria-label for accessibility
                >
                  {link.name}
                </a>
              </DockIcon>
            ))}
             {/* Separator visually (optional, could use margin instead) */}
             <div className="h-6 w-px bg-border/50 mx-2"></div>
             <DockIcon>
                <ShimmerButton className="shadow-md h-9 px-5">
                    <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
                        Connect Wallet
                    </span>
                </ShimmerButton>
             </DockIcon>
          </Dock>
        </nav>

        {/* Mobile Navigation (Shadcn UI Sheet) */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                 <HamburgerIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-l border-border/50">
              <SheetHeader className="mb-6 border-b border-border/30 pb-4">
                <SheetTitle className="flex items-center space-x-2">
                    <CryptoLogo />
                    <span className="font-heading font-semibold text-xl text-foreground">CryptoVerse</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {link.name}
                  </a>
                ))}
                 <div className="pt-4">
                    <ShimmerButton className="w-full shadow-md h-10">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                            Connect Wallet
                        </span>
                    </ShimmerButton>
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;