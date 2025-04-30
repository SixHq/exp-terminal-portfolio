
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"; // Using Shadcn Sheet for drawer functionality
import { AnimatedList } from "@/components/magicui/animated-list"; // Using Magic UI AnimatedList for menu items
import { motion } from 'motion/react';

// Hamburger Icon SVG
const HamburgerIcon = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z" fill="currentColor"/>
  </svg>
);

// Close Icon SVG
const CloseIcon = () => (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground">
        <path d="M14 16.16L10.04 12.2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.96 12.24L10 16.2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  return (
    <Sheet>
      {/* Trigger button for the mobile menu */}
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
        >
          <HamburgerIcon />
        </button>
      </SheetTrigger>
      {/* Content of the mobile menu drawer */}
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0 border-l border-border">
         {/* Header inside the drawer */}
         <SheetHeader className="p-4 border-b border-border flex flex-row justify-between items-center">
          <SheetTitle className="text-primary dark:text-primary-foreground font-serif text-xl">Menu</SheetTitle>
           {/* Close button */}
           <SheetClose asChild>
             <button aria-label="Close menu" className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent">
                <CloseIcon />
             </button>
           </SheetClose>
        </SheetHeader>
        {/* Animated list of navigation items */}
        <div className="p-4">
          <AnimatedList delay={150}> {/* Slightly faster delay */}
            {navItems.map((item, index) => (
               <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 + 0.15, duration: 0.3, ease: "easeOut" }} // Staggered animation
                className="mb-1" // Spacing between items
               >
                 {/* Close the sheet when an item is clicked */}
                 <SheetClose asChild>
                    <a
                    href={item.href}
                    className="block py-3 px-4 text-lg text-foreground hover:bg-muted transition-colors duration-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-accent"
                    >
                    {item.label}
                    </a>
                 </SheetClose>
              </motion.li>
            ))}
          </AnimatedList>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;