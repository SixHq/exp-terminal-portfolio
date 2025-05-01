import React from 'react';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SmoothCursor } from "@/components/magicui/smooth-cursor"; // Import SmoothCursor
import { Header } from "@/components/sections/Header"; // Import the new Header
import { HeroSection } from "@/components/sections/HeroSection"; // Import the Hero Section

import { SocialProofSection } from "@/components/sections/SocialProofSection"; // Import Social Proof
import { ProblemPainPointSection } from "@/components/sections/ProblemPainPointSection"; // Import Problem/Pain Point
import { SkillsSection } from './components/sections/SkillsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from "@/components/sections/ContactSection"; // Import Contact Section
import { FAQSection } from './components/sections/FAQSection';
import { ClosingSection } from './components/sections/ClosingSection';
import { Footer } from './components/sections/Footer';


function App() {
  return (
    
      <div id="app-container" className="w-full h-full bg-background">
        {/* Scroll Progress Indicator */}
        <ScrollProgress className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gradient-to-r from-primary via-accent to-destructive" />

        {/* Header Dock */}
        <Header />

        <main className="relative z-10 pb-24"> {/* Keep padding-bottom */}
          {/* Hero Section */}
          <HeroSection />
            {/* Social Proof Section */}
            <SocialProofSection />

            {/* Problem/Pain Point Section */}
            <ProblemPainPointSection />

            <SkillsSection/>
            <BenefitsSection/>
            <ProjectsSection/>

            <ContactSection/>
            <FAQSection/>
            
            <Footer/>

        </main>
      </div>
  );
}

export default App;