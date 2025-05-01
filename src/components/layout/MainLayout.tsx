
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { cn } from "@/lib/utils"; // Import cn utility
import Footer from './Footer';

const MainLayout = () => {
  return (
    // Use flex, ensure sidebar width is accounted for in main content positioning
    <div className={cn(
        "flex min-h-screen", // Use min-h-screen for flex container
        "bg-background" // Ensure background color is set
        )}>
      <Sidebar />
      {/* Add padding-left equal to sidebar width to prevent overlap */}
      <div className="flex-1 pl-72"> {/* pl-[18rem] == w-72 */}
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;