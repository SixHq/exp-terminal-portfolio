
import React from "react";
import { motion } from "motion/react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedLink = React.forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "relative group text-foreground/70 transition-colors duration-300 hover:text-foreground",
          className
        )}
        {...props}
      >
        {/* Use AnimatedShinyText for the hover effect */}
         <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>{children}</span>
         </AnimatedShinyText>

        {/* Underline effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-primary scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
          style={{ transformOrigin: 'left' }} // Ensure origin is set correctly
        />
      </a>
    );
  }
);

AnimatedLink.displayName = "AnimatedLink";

export { AnimatedLink };