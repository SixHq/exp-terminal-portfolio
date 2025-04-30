
import React from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import HeroVideoDialog  from "@/components/magicui/hero-video-dialog";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { RetroGrid } from "@/components/magicui/retro-grid"; // Background
import { Users, CalendarCheck, Award } from 'lucide-react'; // Icons for stats
import { NeonGradientCard } from './magicui/neon-gradient-card';

// Sample Data (Replace with actual content)
const videoTestimonials = [
  {
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example", // Replace with actual video embed URL
    thumbnailSrc: "https://images.pexels.com/photos/7862505/pexels-photo-7862505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Fetched image
    thumbnailAlt: "Gameplay montage testimonial",
    title: "From Solo to Squad Goals",
    description: "'Finding a consistent, non-toxic team changed everything.' - ZeroCool",
    className: "col-span-3 lg:col-span-2",
  },
  {
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example2", // Replace with actual video embed URL
    thumbnailSrc: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg", // Fetched image
    thumbnailAlt: "Gamer interview testimonial",
    title: "More Than Just Games",
    description: "'The community events are awesome. Made real friends here.' - GlitchByte",
    className: "col-span-3 lg:col-span-1",
  },
];

const caseStudies = [
  {
    problem: "Frustrated with toxic randoms ruining competitive matches.",
    solution: "Utilized Neon Grid's moderated channels and reputation system.",
    result: "85% reduction in negative encounters, climbed two ranks.",
    className: "col-span-3 lg:col-span-1",
    color: "hsl(var(--neon-green))",
  },
  {
    problem: "Struggled to find players for niche indie co-op games.",
    solution: "Connected with like-minded gamers in specific game channels.",
    result: "Completed multiple campaigns with a regular, reliable group.",
    className: "col-span-3 lg:col-span-2",
     color: "hsl(var(--neon-pink))",
  },
];

const stats = [
    { value: 15789, label: "Active Members", icon: Users, color: "hsl(var(--primary))" },
    { value: 500, label: "Weekly Events Hosted", icon: CalendarCheck, color: "hsl(var(--secondary))" },
    { value: 98, label: "% Positive Feedback", icon: Award, color: "hsl(var(--accent))" },
];


const DeepSocialProofSection: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.5 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };


    return (
        <section id="deep-proof" className="relative section-padding overflow-hidden">
             <RetroGrid className="absolute inset-0 -z-10 opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background -z-10"></div>

            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Main Heading */}
                <motion.h2
                    className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-16 md:mb-20 tracking-tight"
                     variants={headingVariants}
                >
                    Don't Just Take Our Word For It
                </motion.h2>

                 {/* Stats Section */}
                 <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
                    variants={headingVariants} // Reuse for quick reveal
                 >
                    {stats.map((stat, idx) => (
                         <NeonGradientCard
                            key={idx}
                            className="p-6 text-center flex flex-col items-center justify-center"
                            borderSize={2}
                            borderRadius={10}
                            neonColors={{ firstColor: stat.color, secondColor: "hsl(var(--muted))" }}
                         >
                            <stat.icon className="size-10 mb-3" style={{ color: stat.color }} />
                            <NumberTicker value={stat.value} delay={idx * 0.3} className="text-4xl md:text-5xl font-bold text-foreground mb-1" />
                            <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                        </NeonGradientCard>
                    ))}
                 </motion.div>


                {/* Combined Video & Case Studies Grid */}
                <BentoGrid className="lg:grid-rows-none"> {/* Adjust grid rows if needed */}
                    {/* Video Testimonials */}
                    {videoTestimonials.map((video, idx) => (
                        <motion.div key={`video-${idx}`} variants={itemVariants}>
                            <BentoCard
                                name={video.title}
                                description={video.description}
                                className={cn("group/bento flex flex-col justify-between space-y-2 overflow-hidden", video.className)}
                                background={<HeroVideoDialog
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
                                    animationStyle="fade" // Or "from-center"
                                    videoSrc={video.videoSrc}
                                    thumbnailSrc={video.thumbnailSrc}
                                    thumbnailAlt={video.thumbnailAlt} />} Icon={'symbol'} href={''} cta={''}                                // Use background prop for video, content below
                                >
                                    {/* Overlay content if needed, or style name/description */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none">
                                        <BoxReveal duration={0.5}>
                                            <h4 className="text-lg font-semibold text-white mb-1">{video.title}</h4>
                                        </BoxReveal>
                                         <BoxReveal duration={0.6}>
                                            <p className="text-sm text-white/80">{video.description}</p>
                                        </BoxReveal>
                                    </div>
                                </BentoCard>
                        </motion.div>
                    ))}

                    {/* Case Study Highlights */}
                    {caseStudies.map((study, idx) => (
                         <motion.div key={`study-${idx}`} variants={itemVariants}>
                            <BentoCard
                                name={study.problem} // Use problem as main "name"
                                className={cn("flex flex-col justify-between space-y-3", study.className)}
                                background={<div className="absolute inset-0 bg-gradient-to-tr from-background to-card opacity-80 group-hover:opacity-100 transition-opacity duration-300 border border-transparent group-hover:border-[color:var(--case-color)]" style={{ '--case-color': study.color } as React.CSSProperties}></div>} Icon={'symbol'} description={''} href={''} cta={''}                                >
                                <div className="z-10">
                                     <BoxReveal boxColor={study.color} duration={0.5}>
                                         <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Problem:</p>
                                     </BoxReveal>
                                     <BoxReveal boxColor={study.color} duration={0.6}>
                                         <p className="text-foreground font-medium mb-4">{study.problem}</p>
                                     </BoxReveal>

                                     <BoxReveal boxColor={study.color} duration={0.7}>
                                         <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Solution:</p>
                                     </BoxReveal>
                                     <BoxReveal boxColor={study.color} duration={0.8}>
                                        <p className="text-foreground font-medium mb-4">{study.solution}</p>
                                     </BoxReveal>

                                      <BoxReveal boxColor={study.color} duration={0.9}>
                                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Result:</p>
                                     </BoxReveal>
                                     <BoxReveal boxColor={study.color} duration={1.0}>
                                          <p className="font-bold text-lg" style={{ color: study.color }}>{study.result}</p>
                                     </BoxReveal>
                                </div>
                            </BentoCard>
                        </motion.div>
                    ))}
                </BentoGrid>
            </motion.div>
        </section>
    );
};

export default DeepSocialProofSection;