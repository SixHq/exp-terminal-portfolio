import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofProblemSolution from '@/components/sections/SocialProofProblemSolution';
import BenefitsOfferSocialProof from '@/components/sections/BenefitsOfferSocialProof';
import ConversionSections from '@/components/sections/ConversionSections';
import Footer from '@/components/layout/Footer'; // Import the new Footer
import { cn } from '@/lib/utils';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background"> {/* Ensure App covers full height and has base bg */}
      <Header />
      {/* Layout now wraps only the main content */}
      <div className="flex-grow"> {/* Wrap main content area to allow footer to stick */}
        <Layout className={cn("pt-0")}>
            <main className="pt-0"> {/* Ensure main has no top padding */}
                {/* Hero Section */}
                <HeroSection />

                {/* Social Proof & Problem/Solution Section */}
                <SocialProofProblemSolution />

                {/* Benefits, Offer & Deep Social Proof Section */}
                <BenefitsOfferSocialProof />

                {/* Lead Capture, FAQ, Closing Sections */}
                <ConversionSections />

             </main>
        </Layout>
      </div>
      {/* Render the new Footer */}
       <Footer />
    </div>
  );
}

export default App;