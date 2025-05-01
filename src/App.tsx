
import React from 'react';
import { cn } from "@/lib/utils"; // Assuming utils file exists for Shadcn
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import WalkthroughSection from './components/sections/WalkthroughSection';
import DeveloperToolsSection from './components/sections/DeveloperToolsSection';
import TeamWorkflowSection from './components/sections/TeamWorkflowSection';
import CtaSection from './components/sections/CtaSection';
import Footer from './components/sections/Footer'; // Import the Footer

function App() {
  return (
    <main className={cn(
      "flex min-h-screen flex-col items-center", // Let sections stack naturally
      "font-sans bg-background"
    )}>
       <div className="w-full">
         {/* Header/Dock Component Placeholder - To be added later */}
         {/* <Header /> */}

         {/* Render Sections */}
         <HeroSection />
         <FeaturesSection />
         <WalkthroughSection />
         <DeveloperToolsSection />
         <TeamWorkflowSection />
         <CtaSection />

         {/* Render Footer */}
         <Footer />
       </div>
    </main>
  );
}

export default App;