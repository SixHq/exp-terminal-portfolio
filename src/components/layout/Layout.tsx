
import React from 'react';
import { DotPattern } from '@/components/magicui/dot-pattern'; // Using DotPattern for subtle background
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("relative min-h-screen overflow-x-hidden", className)}>
       {/* Subtle Background Pattern */}
      <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)]",
            "fixed inset-0 -z-10 h-full w-full fill-current text-background opacity-20 pointer-events-none" // Use background color with low opacity
          )}
        />

        {/* Main Content Area */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {children}
      </main>

      {/* Optional Footer can be added here */}
      {/* <footer className="relative z-10 mt-auto py-8 border-t border-border/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Crypto Inc. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
};

export default Layout;