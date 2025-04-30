
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Marquee } from "@/components/magicui/marquee";
import { TextAnimate } from "@/components/magicui/text-animate";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedList } from "@/components/magicui/animated-list";
import { fadeIn, scale, staggerContainer, simpleFadeIn } from '@/lib/animations';

// --- SVG Icons (Fetched or Placeholder) ---

const ComplexityIcon = () => ( // Placeholder - replace with actual SVG if found later
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-vibrant-purple">
        <path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" fill="currentColor"/>
        <path d="M12 14C12.5523 14 13 13.5523 13 13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V13C11 13.5523 11.4477 14 12 14Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor"/>
    </svg>
);

const SecurityRiskIcon = () => ( // Using fetched Broken Lock icon
    <svg width="48" height="48" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
      <rect x="188.175" y="274.012" style={{ fill: '#847C7C' }} width="288.178" height="227.789" />
      <g>
        <path style={{ fill: '#F2F2F2' }} d="M373.587,368.305c0-22.821-18.499-41.32-41.32-41.32s-41.32,18.499-41.32,41.32 c0,16.777,10.004,31.208,24.368,37.68v48.138h33.903v-48.138C363.583,399.514,373.587,385.082,373.587,368.305z" />
        <path style={{ fill: '#F2F2F2' }} d="M76.802,274.011V124.624c0-39.47,31.997-71.467,71.467-71.467l0,0 c39.47,0,71.467,31.997,71.467,71.467v149.388h41.161V122.827c0-62.203-50.425-112.628-112.628-112.628l0,0 c-62.203,0-112.628,50.425-112.628,112.628v151.185h41.161V274.011z" />
      </g>
      <g>
        <path style={{ fill: 'currentColor' }} d="M476.357,263.813H271.095V122.827C271.095,55.099,215.995,0,148.268,0S25.442,55.099,25.442,122.827 v151.185c0,5.633,4.566,10.199,10.199,10.199h41.161c5.633,0,10.199-4.566,10.199-10.199V124.624 c0-33.783,27.485-61.267,61.268-61.267s61.267,27.484,61.267,61.267v139.189h-21.358c-5.633,0-10.199,4.566-10.199,10.199v227.789 c0,5.633,4.566,10.199,10.199,10.199h288.181c5.632,0,10.199-4.566,10.199-10.199V274.012 C486.557,268.379,481.99,263.813,476.357,263.813z M148.268,42.958c-45.031,0-81.665,36.635-81.665,81.665v139.189H45.841V122.827 c0-56.479,45.948-102.429,102.428-102.429s102.428,45.949,102.428,102.429v140.986h-20.763V124.624 C229.934,79.594,193.299,42.958,148.268,42.958z M466.158,284.211v207.391H198.377V284.211H466.158z" />
        <path style={{ fill: 'currentColor' }} d="M305.117,412.084v42.041c0,5.633,4.567,10.199,10.199,10.199h33.903 c5.632,0,10.199-4.566,10.199-10.199v-42.041c14.991-9.312,24.368-25.844,24.368-43.777c0-28.408-23.111-51.519-51.519-51.519 s-51.519,23.111-51.519,51.519C280.748,386.239,290.125,402.771,305.117,412.084z M332.267,337.185 c17.16,0,31.121,13.961,31.121,31.121c0,12.216-7.206,23.356-18.359,28.381c-3.657,1.648-6.009,5.287-6.009,9.299v37.939h-13.505 v-37.939c0-4.011-2.352-7.65-6.009-9.299c-11.154-5.026-18.36-16.167-18.36-28.381 C301.146,351.145,315.107,337.185,332.267,337.185z" />
        <path style={{ fill: 'currentColor' }} d="M222.081,342.214c-5.633,0-10.199,4.566-10.199,10.199v116.543c0,5.633,4.566,10.199,10.199,10.199 c5.633,0,10.199-4.566,10.199-10.199V352.413C232.28,346.78,227.714,342.214,222.081,342.214z" />
        <path style={{ fill: 'currentColor' }} d="M222.081,305.132c-5.633,0-10.199,4.566-10.199,10.199v5.297c0,5.633,4.566,10.199,10.199,10.199 c5.633,0,10.199-4.566,10.199-10.199v-5.297C232.28,309.698,227.714,305.132,222.081,305.132z" />
      </g>
    </svg>
);

const VolatilityIcon = () => ( // Placeholder - replace with actual SVG if found later
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500">
        <path d="M3 17L8 12L12 16L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 7H21V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SecureShieldIcon = () => ( // Placeholder
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-electric-cyan">
        <path d="M12 2L3 5V11C3 16.5 6.8 21.7 12 23C17.2 21.7 21 16.5 21 11V5L12 2ZM12 13.1L17.6 10L18 11V12.1C17.8 15.5 15.3 18.5 12 19.6V13.1ZM11 13.1V19.6C8.7 18.5 6.2 15.5 6 12.1V11L6.4 10L11 12.3V13.1Z" fill="currentColor"/>
        <path d="M5 11.5L12 14.5L19 11.5V6.5L12 3.5L5 6.5V11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AnalyticsIcon = () => ( // Placeholder
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-vibrant-purple">
        <path d="M3 13L9 7L14 12L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 5H21V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const WalletIcon = () => ( // Placeholder
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-magenta">
        <path d="M20 12V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 12H22V16H16V12Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 14C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13C17 13.5523 17.4477 14 18 14Z" fill="hsl(var(--background))"/>
    </svg>
);

// --- Component Data ---

const clientLogos = [
  { name: "TechSpark", logoUrl: "https://techbuzzonline.com/images/spark-tech-logo.jpg" },
  { name: "FinAbstract", logoUrl: "https://img.freepik.com/free-vector/gradient-logo-template-with-abstract-shape_52683-14859.jpg?semt\u003dais_hybrid\u0026w\u003d740" },
  { name: "CryptoXchange", logoUrl: "https://www.shutterstock.com/image-vector/modern-cryptocurrency-exchange-logo-letter-260nw-2126650424.jpg" },
  { name: "Web3 Innovate", logoUrl: "https://cdn.dribbble.com/userupload/19298782/file/original-17e314be1f2f0060b009ecb745b5ee87.png?format\u003dwebp\u0026resize\u003d400x300\u0026vertical\u003dcenter" },
  { name: "SecureData", logoUrl: "https://c8.alamy.com/comp/2RAJ6NP/security-logo-technology-for-your-company-shield-logo-for-security-data-2RAJ6NP.jpg" },
  { name: "BlockChain Pro", logoUrl: "https://www.shutterstock.com/shutterstock/photos/1891225663/display_1500/stock-vector-b-blockchain-logo-template-technology-vector-design-cryptocurrency-hexagon-premium-vector-1891225663.jpg" },
  { name: "InvestFund", logoUrl: "https://t3.ftcdn.net/jpg/10/89/52/98/360_F_1089529811_eQ7GIbNW1Rblq5gU9Y34PGLoz4sjG4vI.jpg" },
  { name: "VentureFlow", logoUrl: "https://www.shutterstock.com/image-vector/creative-colorful-logo-vc-mean-260nw-1685601007.jpg" },
  { name: "FinAdvisor Pro", logoUrl: "https://c8.alamy.com/comp/2GH0516/financial-advisor-logo-design-template-vector-icons-2GH0516.jpg" },
];

const painPoints = [
  {
    Icon: ComplexityIcon,
    title: "Overwhelming Complexity",
    description: "Navigating the crypto world feels like solving a puzzle blindfolded. Too many terms, too many platforms.",
  },
  {
    Icon: SecurityRiskIcon,
    title: "Constant Security Threats",
    description: "Fear of hacks, scams, and losing your hard-earned assets keeps you up at night. Trust is hard to come by.",
  },
  {
    Icon: VolatilityIcon,
    title: "Extreme Market Volatility",
    description: "The unpredictable price swings make investing feel like a casino. It's hard to plan for the future.",
  },
];

const features = [
  {
    Icon: SecureShieldIcon,
    title: "Bank-Grade Security",
    description: "Multi-layer protection, cold storage, and regular audits ensure your assets are always safe.",
    color: "hsl(var(--primary))", // electric-cyan
  },
  {
    Icon: AnalyticsIcon,
    title: "Intuitive Analytics",
    description: "Clear charts, real-time data, and actionable insights make tracking your portfolio effortless.",
     color: "hsl(var(--secondary))", // vibrant-purple
  },
  {
    Icon: WalletIcon,
    title: "Unified Wallet",
    description: "Manage all your coins and tokens in one secure place. Seamlessly trade, store, and transfer.",
     color: "hsl(var(--accent-magenta))", // accent-magenta
  },
];

const howItWorksSteps = [
    { title: "Sign Up Securely", description: "Create your account in minutes with our verified and encrypted process." },
    { title: "Fund Your Wallet", description: "Easily deposit funds using various methods, including bank transfer and card." },
    { title: "Start Trading", description: "Explore markets, analyze trends, and execute trades with confidence." },
];

const productImageUrl = "https://images.unsplash.com/photo-1641871624339-e6d50975e137?q\u003d80\u0026w\u003d2532\u0026auto\u003dformat\u0026fit\u003dcrop\u0026ixlib\u003drb-4.0.3\u0026ixid\u003dM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Fetched via tool

// --- Reusable Card Component ---
interface InfoCardProps {
    Icon: React.ElementType;
    title: string;
    description: string;
    className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ Icon, title, description, className }) => (
    <MagicCard
        className={cn(
            "flex flex-col items-center text-center p-6 cursor-pointer", // Added cursor-pointer
            "bg-card/50 backdrop-blur-sm border border-border/30", // Semi-transparent background
            className
        )}
        gradientSize={150}
        gradientColor="hsl(var(--primary) / 0.3)" // Use primary color for gradient
    >
        <motion.div variants={scale(0.8, 1.1, 0.5)} whileHover="show" initial="hidden">
            <Icon />
        </motion.div>
        <h3 className="mt-4 mb-2 text-xl font-semibold font-heading text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
    </MagicCard>
);


// --- Main Section Component ---
const SocialProofProblemSolution: React.FC = () => {

    const firstRowLogos = clientLogos.slice(0, Math.ceil(clientLogos.length / 2));
    const secondRowLogos = clientLogos.slice(Math.ceil(clientLogos.length / 2));

  return (
    <section className="py-20 md:py-32 space-y-24 md:space-y-32 overflow-hidden bg-gradient-to-b from-background via-deep-blue-light/10 to-background">

      {/* Trusted By Marquee */}
      <motion.div
        variants={fadeIn('up', 30, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex flex-col items-center justify-center w-full"
      >
        <h2 className="text-2xl font-medium text-center text-muted-foreground mb-10">
          Trusted By Leading Innovators
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
             {firstRowLogos.map((item, idx) => (
              <div key={`logo1-${idx}`} className="mx-6 flex items-center justify-center h-16 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                 <img src={item.logoUrl} alt={`${item.name} Logo`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </Marquee>
           <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
             {secondRowLogos.map((item, idx) => (
              <div key={`logo2-${idx}`} className="mx-6 flex items-center justify-center h-16 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                 <img src={item.logoUrl} alt={`${item.name} Logo`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </Marquee>
          {/* Fades for marquee edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
        </div>
      </motion.div>

      {/* Problem Section */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn('down', 30, 0.8)}>
             <TextAnimate
                as="h2"
                animation="slideUp" // Layered text effect
                by="line" // Animate line by line
                className="text-4xl font-bold font-heading tracking-tight sm:text-5xl text-foreground mb-4"
             >
                Feeling Lost in the Crypto Maze?
            </TextAnimate>
          </motion.div>
          <motion.p
            variants={fadeIn('up', 20, 0.7, 0.2)}
            className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            The world of cryptocurrency promises innovation, but often delivers confusion, risk, and whiplash-inducing volatility. You're not alone.
          </motion.p>
        </motion.div>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
          {painPoints.map((point, idx) => (
             <motion.div key={idx} variants={simpleFadeIn}>
                <InfoCard
                    Icon={point.Icon}
                    title={point.title}
                    description={point.description}
                />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Solution Section */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Solution Intro */}
            <motion.div
                variants={staggerContainer(0.2, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="text-center"
            >
                <motion.div variants={fadeIn('down', 30, 0.8)}>
                    <TextAnimate
                        as="h2"
                        animation="blurInUp"
                        by="line"
                        className="text-4xl font-bold font-heading tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4"
                    >
                        Meet CryptoVerse: Your Clear Path Forward
                    </TextAnimate>
                </motion.div>
                 <motion.p
                    variants={fadeIn('up', 20, 0.7, 0.2)}
                    className="mt-4 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto"
                >
                    We cut through the noise. CryptoVerse simplifies your journey with robust security, intuitive tools, and clear guidance, empowering you to invest with confidence.
                </motion.p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((feature, idx) => (
                    <motion.div key={idx} variants={scale(0.9, 1, 0.6)}>
                        <NeonGradientCard
                            className="h-full items-center text-center p-6"
                            borderRadius={20}
                            borderSize={1}
                            neonColors={{ firstColor: feature.color, secondColor: "hsl(var(--accent))" }}
                        >
                           <feature.Icon />
                           <h3 className="mt-4 mb-2 text-xl font-semibold font-heading text-foreground">{feature.title}</h3>
                           <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </NeonGradientCard>
                    </motion.div>
                ))}
            </motion.div>

            {/* How It Works */}
            <motion.div
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.2 }}
                 variants={fadeIn('up', 40, 0.8)}
                 className="relative rounded-xl overflow-hidden p-8 md:p-12 border border-border/30 bg-card/30 backdrop-blur-sm"
            >
                <BorderBeam size={150} duration={8} delay={2} colorFrom="hsl(var(--accent))" colorTo="hsl(var(--secondary))" />
                <h3 className="text-3xl font-bold text-center font-heading mb-10 text-foreground">Get Started in 3 Simple Steps</h3>
                 <div className="relative flex max-w-4xl mx-auto flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
                    {/* Use AnimatedList for a subtle sequence */}
                     <AnimatedList delay={500} className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 w-full">
                         {howItWorksSteps.map((step, idx) => (
                             <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                                 <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-xl mb-4">
                                     {idx + 1}
                                 </div>
                                 <h4 className="text-lg font-semibold font-heading mb-2 text-foreground">{step.title}</h4>
                                 <p className="text-sm text-muted-foreground">{step.description}</p>
                             </div>
                         ))}
                    </AnimatedList>
                 </div>
            </motion.div>

            {/* Product Visual */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={scale(0.95, 1, 1, 0.3)}
                className="relative flex justify-center"
            >
                <MagicCard
                    className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-deep-blue-medium"
                    gradientSize={300}
                    gradientColor="hsl(var(--accent) / 0.15)"
                >
                    <img
                        src={productImageUrl}
                        alt="CryptoVerse App Interface"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={675}
                    />
                </MagicCard>
            </motion.div>

      </div>
    </section>
  );
};

export default SocialProofProblemSolution;