
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { TextReveal } from '@/components/magicui/text-reveal';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import  HeroVideoDialog  from "@/components/magicui/hero-video-dialog";
import { Marquee } from "@/components/magicui/marquee";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Shadcn card for structure
import { RippleButton } from '@/components/magicui/ripple-button'; // Using Magic UI Button
import { Particles } from "@/components/magicui/particles"; // Background effect
import { fadeIn, scale, staggerContainer, simpleFadeIn, textMaskReveal } from '@/lib/animations';

// --- SVG Icons (Fetched or Placeholders) ---

const SecureBenefitIcon = () => ( // Fetched Security Shield Icon
    <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:scale-110 transition-transform duration-300">
        <title>security-shield-solid</title>
        <g>
            <rect width="48" height="48" fill="none"/>
        </g>
        <g>
            <motion.path fill="currentColor" d="M24,2S6,7.1,6,8V26.2c0,9.2,13.3,17.3,17,19.5a1.8,1.8,0,0,0,2,0c3.8-2.1,17-10.3,17-19.5V8C42,7.1,24,2,24,2Zm2,28a2,2,0,0,1-4,0V9a2,2,0,0,1,2-2,2.1,2.1,0,0,1,2,2Z" variants={simpleFadeIn} />
        </g>
    </svg>
);

const GrowthBenefitIcon = () => ( // Fetched Growth Chart Icon
    <svg width="40px" height="40px" viewBox="0 0 9.2 9.2" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} xmlns="http://www.w3.org/2000/svg" className="text-secondary group-hover:scale-110 transition-transform duration-300">
        <defs>
            <style type="text/css">{`.fil0 {fill:none} .fil1 {fill:hsl(var(--foreground)/.8);fill-rule:nonzero} .fil2 {fill:currentColor;fill-rule:nonzero} .fil3 {fill:currentColor}`}</style>
        </defs>
        <g>
            <rect className="fil0" height="9.2" width="9.2"/>
            <motion.path className="fil1" d="M2.69 5.51c-0.08,0 -0.15,-0.07 -0.15,-0.15 0,-0.08 0.07,-0.15 0.15,-0.15l3.82 0c0.08,0 0.14,0.07 0.14,0.15 0,0.08 -0.06,0.15 -0.14,0.15l-3.82 0z" variants={simpleFadeIn}/>
            <motion.path className="fil2" d="M4.05 4.75c-0.06,0.06 -0.15,0.06 -0.21,0 -0.06,-0.06 -0.06,-0.15 0,-0.21l0.56 -0.56c0.05,-0.06 0.15,-0.06 0.21,0l0.38 0.39 0.93 -0.93c0.06,-0.06 0.15,-0.06 0.21,0 0.06,0.06 0.06,0.15 0,0.21l-1.03 1.03c-0.06,0.06 -0.15,0.06 -0.21,0l-0.39 -0.38 -0.45 0.45z" variants={simpleFadeIn} transition={{ delay: 0.1 }}/>
            <motion.polygon className="fil3" points="6.19,3.38 6.13,3.59 6.08,3.81 5.92,3.65 5.76,3.5 5.98,3.44 " variants={simpleFadeIn} transition={{ delay: 0.2 }}/>
            <motion.path className="fil2" d="M6.33 3.42l-0.11 0.43c-0.02,0.08 -0.1,0.12 -0.18,0.1 -0.03,-0.01 -0.05,-0.02 -0.07,-0.04l-0.31 -0.31c-0.06,-0.06 -0.06,-0.15 0,-0.21 0.02,-0.02 0.05,-0.03 0.07,-0.04l0.42 -0.11c0.08,-0.02 0.16,0.02 0.18,0.1 0.01,0.03 0.01,0.06 0,0.08z" variants={simpleFadeIn} transition={{ delay: 0.3 }}/>
            <motion.path className="fil1" d="M3.41 5.94c0,0.08 -0.06,0.14 -0.14,0.14 -0.09,0 -0.15,-0.06 -0.15,-0.14l0 -2.68c0,-0.08 0.06,-0.15 0.15,-0.15 0.08,0 0.14,0.07 0.14,0.15l0 2.68z" variants={simpleFadeIn} transition={{ delay: 0.05 }}/>
        </g>
    </svg>
);

const CommunityBenefitIcon = () => ( // Fetched Community Group Icon
    <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="text-accent-magenta group-hover:scale-110 transition-transform duration-300">
        <title>Community</title>
        <motion.path fill="currentColor" d="M12,54.92712a3.9147,3.9147,0,0,0-2.65649-3.6986,4,4,0,1,0-4.687,0A3.9147,3.9147,0,0,0,2,54.92712V62H12Z" variants={simpleFadeIn}/>
        <motion.path fill="currentColor" d="M18,54.92712V62H28V54.92712a3.9147,3.9147,0,0,0-2.65649-3.6986,4,4,0,1,0-4.687,0A3.9147,3.9147,0,0,0,18,54.92712Z" variants={simpleFadeIn} transition={{ delay: 0.05 }}/>
        <motion.path fill="currentColor" d="M46,54.92712a3.9147,3.9147,0,0,0-2.65649-3.6986,4,4,0,1,0-4.687,0A3.9147,3.9147,0,0,0,36,54.92712V62H46Z" variants={simpleFadeIn} transition={{ delay: 0.1 }}/>
        <motion.path fill="currentColor" d="M62,54.92712a3.9147,3.9147,0,0,0-2.65649-3.6986,4,4,0,1,0-4.687,0A3.9147,3.9147,0,0,0,52,54.92712V62H62Z" variants={simpleFadeIn} transition={{ delay: 0.15 }}/>
        <motion.path fill="currentColor" d="M61,27.40344V12.59656A10.59655,10.59655,0,0,0,50.40344,2H13.59656A10.59655,10.59655,0,0,0,3,12.59656V27.40344A10.59658,10.59658,0,0,0,13.59656,38H50.40344A10.59658,10.59658,0,0,0,61,27.40344ZM20,29H17l1,5-6-5H8V22H20Zm22-2a7,7,0,1,1,7,7A7,7,0,0,1,42,27Z" variants={simpleFadeIn} transition={{ delay: 0.2 }}/>
    </svg>
);

const OfferIcon = () => ( // Simple Placeholder representing value/gift
    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- Component Data ---

const benefits = [
  {
    Icon: SecureBenefitIcon,
    name: "Uncompromised Security",
    description: "Sleep soundly knowing your digital assets are protected by cutting-edge security protocols and institutional-grade custody.",
    className: "col-span-3 lg:col-span-1",
    background: <Particles quantity={30} color="hsl(var(--primary))" className="absolute inset-0 -z-10" />,
  },
  {
    Icon: GrowthBenefitIcon,
    name: "Accelerate Your Growth",
    description: "Unlock powerful analytics and automated tools designed to optimize your portfolio and maximize potential returns.",
    className: "col-span-3 lg:col-span-2",
     background: <Particles quantity={50} color="hsl(var(--secondary))" vx={0.1} vy={-0.1} className="absolute inset-0 -z-10" />,
  },
  {
    Icon: CommunityBenefitIcon,
    name: "Join a Thriving Community",
    description: "Connect with fellow enthusiasts, share insights, and learn from experts in our exclusive members-only groups.",
    className: "col-span-3 lg:col-span-2",
     background: <Particles quantity={40} color="hsl(var(--accent-magenta))" staticity={30} className="absolute inset-0 -z-10" />,
  },
   {
    Icon: OfferIcon, // Placeholder for Offer Benefit
    name: "Exclusive Launch Offer",
    description: "Sign up today and get zero trading fees for your first 30 days, plus access to premium market reports.",
    className: "col-span-3 lg:col-span-1",
    background: <Particles quantity={30} color="hsl(48deg 96% 58%)" className="absolute inset-0 -z-10" />,
  },
];

const milestones = [
  { value: 100000, label: "Active Users", description: "Join a rapidly growing global community." },
  { value: 500, suffix: "M+", label: "Assets Secured", description: "Trusted with significant digital wealth." },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee", description: "Reliable access when you need it most." },
];

const videoTestimonials = [
    {
        name: "Sarah Chen",
        title: "Early Adopter & Investor",
        thumbnailSrc: "https://thumbs.dreamstime.com/b/bitcoin-sign-over-photo-front-woman-working-her-laptop-office-professional-businesswoman-via-young-female-266015961.jpg", // Fetched image
        videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example", // Placeholder YouTube video ID
    },
    {
        name: "David Lee",
        title: "Crypto Trader",
        thumbnailSrc: "https://img.freepik.com/premium-photo/serious-business-man-trader-analyst-looking-computer-monitor-investor-broker-analyzing-indexes-financial-chart-trading-online-investment-data-cryptocurrency-stock-market-graph-pc-screen_169016-14310.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user", // Fetched image
        videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example2", // Placeholder YouTube video ID
    },
     {
        name: "Maria Garcia",
        title: "DeFi Enthusiast",
        thumbnailSrc: "https://thumbs.dreamstime.com/z/laptop-diversity-group-talking-women-review-financial-portfolio-stock-market-feedback-bitcoin-investment-crypto-finance-276220193.jpg", // Fetched image
        videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example3", // Placeholder YouTube video ID
    },
];

const caseStudies = [
  {
    title: "Scaling Securely: How CryptoXchange Handled 10x Growth",
    problem: "Rapid user influx strained their existing infrastructure, exposing security vulnerabilities.",
    solution: "Migrated to CryptoVerse's scalable architecture with enhanced security layers.",
    result: "Achieved 99.99% uptime during peak loads and zero security incidents post-migration.",
    iconUrl: "https://cdn-icons-png.freepik.com/256/17015/17015024.png?semt=ais_hybrid", // Fetched icon
    cta: "Read Full Case Study",
  },
  {
    title: "From Confusion to Clarity: FinAbstract's Portfolio Transformation",
    problem: "Clients struggled to understand their diverse crypto holdings and performance.",
    solution: "Integrated CryptoVerse's analytics dashboard for clear visualization and reporting.",
    result: "Improved client satisfaction scores by 35% and reduced reporting time by 50%.",
     iconUrl: "https://cdn-icons-png.freepik.com/256/17015/17015024.png?semt=ais_hybrid", // Reusing icon
     cta: "Discover Their Story",
  },
];


// --- Main Section Component ---
const BenefitsOfferSocialProof: React.FC = () => {
  return (
    <section className="py-24 md:py-32 space-y-28 md:space-y-36 overflow-hidden bg-gradient-to-b from-background via-deep-blue-medium/5 to-background">

        {/* Benefits Section (Bento Grid) */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="text-center mb-16 md:mb-20"
            >
                 <motion.div variants={textMaskReveal(0.8)}>
                    <h2 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl lg:text-6xl text-foreground mb-4">
                       Unlock Your Crypto Potential
                    </h2>
                 </motion.div>
                 <motion.p variants={fadeIn('up', 20, 0.7, 0.2)} className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                    Go beyond the basics. CryptoVerse provides the security, tools, and community you need to thrive in the digital economy.
                 </motion.p>
            </motion.div>

             <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 40, 1)}
                viewport={{ once: true, amount: 0.1 }}
             >
                <BentoGrid className="lg:grid-rows-3">
                    {benefits.map((benefit, idx) => (
                        <BentoCard
                            href={''} cta={''} key={idx}
                            {...benefit}
                            className={cn(benefit.className, "group")} // Add group for icon hover
                        />
                    ))}
                </BentoGrid>
             </motion.div>
        </div>

         {/* Offer / Value Proposition Section (Simplified) */}
         <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', 50, 0.9)}
            viewport={{ once: true, amount: 0.2 }}
            className="relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
         >
             <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent-magenta/10 border border-border/20 shadow-xl shadow-black/15">
                 <Particles
                    className="absolute inset-0 -z-10"
                    quantity={50}
                    ease={80}
                    color="hsl(var(--foreground))"
                    vx={0}
                    vy={-0.5} // Slow upward drift
                    size={0.3}
                 />
                <OfferIcon />
                <h3 className="text-3xl md:text-4xl font-bold font-heading mt-6 mb-4 text-foreground">
                    Ready to Dive In?
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                    Join CryptoVerse today and claim your exclusive welcome offer: <span className="text-primary font-medium">Zero Trading Fees</span> for 30 days!
                </p>
                <RippleButton className="px-8 py-3 text-base md:text-lg font-medium" rippleColor="255, 255, 255">
                   Claim Your Offer Now
                   <ArrowRightIcon className="ml-2 h-5 w-5" />
                </RippleButton>
             </div>
         </motion.div>


        {/* Deep Social Proof Section */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">

            {/* Milestones */}
            <motion.div
                variants={staggerContainer(0.2, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center"
            >
                {milestones.map((milestone, idx) => (
                     <motion.div key={idx} variants={fadeIn('up', 30, 0.7)} className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30">
                         <img src="https://c8.alamy.com/comp/2Y13WF1/gold-trophy-award-trophy-with-a-plus-sign-signifying-achievement-and-success-ideal-for-celebrating-victories-and-milestones-2Y13WF1.jpg" alt="Milestone Trophy" className="h-10 w-10 mx-auto mb-4 opacity-70" />
                         <div className="text-4xl md:text-5xl font-bold font-heading text-primary tracking-tighter mb-1">
                            <NumberTicker value={milestone.value} delay={idx * 0.2} />{milestone.suffix}
                         </div>
                         <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">{milestone.label}</p>
                         <p className="text-xs text-muted-foreground/80 mt-1">{milestone.description}</p>
                     </motion.div>
                ))}
            </motion.div>

             {/* Video Testimonials */}
            <motion.div
                 initial="hidden"
                 whileInView="show"
                 variants={staggerContainer(0.1, 0.2)}
                 viewport={{ once: true, amount: 0.1 }}
                 className="text-center"
            >
                <motion.h2 variants={fadeIn('down', 30)} className="text-3xl font-bold font-heading tracking-tight sm:text-4xl lg:text-5xl text-foreground mb-12">
                    Hear From Our Community
                </motion.h2>
                <motion.div
                    variants={staggerContainer(0.2)}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                     {videoTestimonials.map((testimonial, idx) => (
                        <motion.div key={idx} variants={scale(0.9, 1, 0.8)}>
                             <HeroVideoDialog
                                className="rounded-xl overflow-hidden border border-border/30 shadow-lg group relative"
                                animationStyle="fade" // Choose animation style
                                videoSrc={testimonial.videoSrc}
                                thumbnailSrc={testimonial.thumbnailSrc}
                                thumbnailAlt={`${testimonial.name} - CryptoVerse Testimonial`}
                            >
                               
                             </HeroVideoDialog>
                        </motion.div>
                     ))}
                </motion.div>
            </motion.div>


             {/* Case Study Highlights / Detailed Reviews (Using Marquee) */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 40, 1)}
                viewport={{ once: true, amount: 0.1 }}
                className="relative flex flex-col items-center justify-center w-full space-y-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl lg:text-5xl text-foreground mb-4">
                        Real Results, Real Stories
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover how businesses and individuals leverage CryptoVerse to achieve their financial goals.
                    </p>
                </div>

                 <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:60s] [--gap:2rem]">
                        {caseStudies.map((study, idx) => (
                            <Card key={idx} className="w-[350px] md:w-[400px] flex-shrink-0 bg-card/70 backdrop-blur-md border border-border/40 mx-4 transition-shadow hover:shadow-lg">
                                <CardHeader className="pb-3">
                                     <div className="flex items-start space-x-3">
                                         <img src={study.iconUrl} alt="Case Study Icon" className="h-8 w-8 mt-1 opacity-80"/>
                                         <div>
                                            <CardTitle className="text-lg font-semibold leading-tight text-foreground">{study.title}</CardTitle>
                                            {/*<CardDescription className="text-xs text-muted-foreground">Case Study</CardDescription>*/}
                                         </div>
                                     </div>
                                </CardHeader>
                                <CardContent className="text-sm">
                                    <p className="mb-2"><strong className="text-muted-foreground font-medium">Problem:</strong> {study.problem}</p>
                                    <p className="mb-2"><strong className="text-muted-foreground font-medium">Solution:</strong> {study.solution}</p>
                                    <p><strong className="text-primary font-medium">Result:</strong> {study.result}</p>
                                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 text-xs font-medium mt-3 group">
                                        {study.cta}
                                        <ArrowRightIcon className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
                </div>

            </motion.div>
        </div>

    </section>
  );
};

export default BenefitsOfferSocialProof;