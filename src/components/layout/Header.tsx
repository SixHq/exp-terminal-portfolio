
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Using Shadcn Button ONLY for the Sheet trigger
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // Shadcn Sheet for mobile

// Navigation Links Data
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Community", href: "#community" },
  { name: "Join", href: "#join" },
];

// Hamburger Icon Component
const HamburgerIcon = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill="currentColor"/>
  </svg>
);


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
    >
      {/* Subtle Border Beam */}
       <BorderBeam size={80} duration={6} delay={0} colorFrom="hsl(var(--primary))" colorTo="hsl(var(--secondary))" />

      <div className="container mx-auto px-4 flex h-16 max-w-screen-xl items-center justify-between relative z-10"> {/* Added relative z-10 */}
         {/* Logo/Name with Shiny Effect */}
         <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100/5 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200/10 dark:border-white/5 dark:bg-neutral-900/10 dark:hover:bg-neutral-800/20 px-3 py-1"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-xl font-heading font-bold">
              <span>✨ Neon Nexus</span>
            </AnimatedShinyText>
          </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-dim-text hover:text-neon-pink transition-colors duration-300 font-medium relative group"
              whileHover={{ scale: 1.05, color: 'hsl(var(--secondary))' }} // Neon Pink on hover
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {link.name}
               {/* Subtle underline effect */}
               <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
           {/* Example Magic UI Button */}
           {/* <ShimmerButton className="shadow-md ml-4" shimmerColor="hsl(var(--accent))" shimmerSize="0.1em">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                Join Discord
              </span>
            </ShimmerButton> */}
        </nav>

        {/* Mobile Navigation Trigger (Hamburger) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-light-text hover:text-neon-blue hover:bg-muted/50 transition-colors">
                <HamburgerIcon />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-muted border-l border-border/60 w-[250px] sm:w-[300px]">
              <SheetHeader className="border-b border-border/40 pb-4 mb-4">
                 <SheetTitle className="text-xl font-heading text-neon-blue text-neon-blue-sm">
                     Neon Nexus
                 </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg text-light-text hover:text-neon-pink transition-colors duration-300"
                    onClick={() => setIsOpen(false)} // Close sheet on click
                  >
                    {link.name}
                  </a>
                ))}
                 {/* Example Magic UI Button in Sheet */}
                 {/* <ShimmerButton className="shadow-md mt-6" shimmerColor="hsl(var(--accent))" shimmerSize="0.1em">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                       Join Discord
                    </span>
                  </ShimmerButton> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}