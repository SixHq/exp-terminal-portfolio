
import React from "react";
import { motion } from "motion/react";
import { Marquee } from "@/components/magicui/marquee";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TextReveal } from "@/components/magicui/text-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";

// --- Testimonial Data ---
const testimonials = [
  {
    name: "CyberNinjaX",
    username: "@NinjaX",
    body: "Finally found a non-toxic community! The LFG tool is amazing for finding chill teammates.",
    img: "https://i.pinimg.com/736x/5a/e1/c9/5ae1c9ea907c325a793a6677ce53d39b.jpg", // Male gamer avatar
    rating: 5,
  },
  {
    name: "PixelVixen",
    username: "@VixenPlays",
    body: "Love the weekly events! It's great competing and just hanging out with everyone.",
    img: "https://www.pngkey.com/png/full/60-607338_female-gamer-avatar-png.png", // Female gamer avatar
    rating: 4,
  },
  {
    name: "CodeRonin",
    username: "@RoninDev",
    body: "As a dev, I appreciate the structured channels and helpful discussions. Great place to connect.",
    img: "https://img.freepik.com/premium-vector/gamer-avatar-logo-vector-illustration_7688-1568.jpg", // Generic gamer avatar
    rating: 5,
  },
   {
    name: "StreamQueen",
    username: "@QueenStream",
    body: "This hub is super supportive for creators. Found awesome people to collab with!",
    img: "https://www.pngkey.com/png/full/60-607338_female-gamer-avatar-png.png", // Re-use female avatar
    rating: 5,
  },
   {
    name: "ProGamerZ",
    username: "@ProZ",
    body: "The skill level here is impressive, but everyone's still welcoming. Perfect balance.",
    img: "https://i.pinimg.com/736x/5a/e1/c9/5ae1c9ea907c325a793a6677ce53d39b.jpg", // Re-use male avatar
    rating: 4,
  },
];

// Duplicate for longer marquee effect
const allTestimonials = [...testimonials, ...testimonials];

// --- Logo Data ---
const logos = [
  { name: "Discord", src: "https://1000logos.net/wp-content/uploads/2017/08/Discord-Logo.png", alt: "Discord Logo" },
  { name: "Meta", src: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png", alt: "Meta Logo" },
  { name: "Cloud9", src: "https://seeklogo.com/images/C/cloud9-logo-1004C46134-seeklogo.com.png", alt: "Cloud9 Logo" },
  { name: "GitLab", src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_44c0fb8d033717184a684a10b5c68a24/gitlab.png", alt: "GitLab Logo" },
  // Add more logos if needed
];
// Duplicate for longer marquee
const allLogos = [...logos, ...logos, ...logos];


// --- Video Testimonial Placeholders ---
const videoTestimonials = [
    {
        name: "Top Player Interview",
        thumbnail: "https://i.ytimg.com/vi/L_A_I90hN8k/maxresdefault.jpg", // Gaming interview thumbnail
        description: "Hear from one of our top leaderboard champions.",
    },
    {
        name: "Community Spotlight",
        thumbnail: "https://influencermarketinghub.com/wp-content/uploads/2020/09/pexels-photo-4316737.jpeg", // Gamer talking head thumbnail
        description: "A member shares their experience joining the Hub.",
    }
]

// --- Star Rating Component ---
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex text-neon-yellow">
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.479.038.674.646.314.943l-4.21 4.203a.563.563 0 0 0-.162.54l1.18 5.644c.096.46-.396.806-.794.568l-4.99-2.934a.562.562 0 0 0-.65 0l-4.99 2.934c-.4.238-.891-.108-.794-.568l1.18-5.644a.563.563 0 0 0-.162-.54L2.51 9.938c-.36-.297-.165-.905.314-.943l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ))}
  </div>
);

// --- Testimonial Card ---
const TestimonialCard = ({ name, username, body, img, rating }: typeof testimonials[0]) => {
  return (
    <NeonGradientCard
      className="relative w-72 h-48 p-4 overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-md flex flex-col justify-between"
      neonColors={{ firstColor: "#00ffff", secondColor: "#ff00ff" }} // Blue to Pink
      borderSize={1}
      borderRadius={12}
    >
      <div className="flex items-center gap-2 mb-2">
        <img className="rounded-full size-8 border-2 border-neon-blue" alt={`${name}'s avatar`} src={img} />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm text-foreground/90 italic line-clamp-3 mb-2">
         "{body}"
      </blockquote>
       <StarRating rating={rating} />
       {/* Subtle quote mark */}
        <div className="absolute top-2 right-2 text-5xl text-primary/20 opacity-50 font-serif">”</div>
    </NeonGradientCard>
  );
};

// --- Logo Item ---
const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex justify-center items-center h-20 w-40 p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 cursor-pointer opacity-70 hover:opacity-100">
        <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
         {/* Optional neon glow on hover - add a container if needed */}
    </div>
);

// --- Video Card ---
const VideoCard = ({ name, thumbnail, description }: typeof videoTestimonials[0]) => (
    <MagicCard
        className="relative w-full sm:w-80 h-64 cursor-pointer overflow-hidden p-4 shadow-lg backdrop-blur-lg border border-border/50 rounded-xl flex flex-col justify-end bg-cover bg-center group"
       
        gradientSize={150}
        gradientColor="hsl(var(--background))"
        gradientFrom="hsl(var(--accent))" // Pink
        gradientTo="hsl(var(--secondary))" // Green
    >
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 z-0"></div>
         {/* Content */}
        <div className="relative z-10 text-white">
            <h4 className="text-xl font-semibold mb-1">{name}</h4>
            <p className="text-sm text-white/80 line-clamp-2">{description}</p>
        </div>
         {/* Play Button Overlay */}
         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="bg-neon-green/80 rounded-full p-3 shadow-neon-green">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
            </div>
         </div>
    </MagicCard>
);


export function SocialProofSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
  };

  const itemSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="community-proof"
      className="py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-background/90" // Subtle gradient
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 space-y-24">

        {/* --- Testimonials --- */}
        <motion.div variants={itemSlideUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
             <SparklesText  colors={{ first: "hsl(var(--primary))", second: "hsl(var(--accent))" }} >Hear From the Hub Members</SparklesText>
          </h2>
          <div className="relative flex flex-col gap-4 items-center justify-center">
             <Marquee pauseOnHover className="[--duration:60s]">
                {allTestimonials.slice(0, allTestimonials.length / 2).map((review, i) => (
                 <TestimonialCard key={`t1-${i}-${review.username}`} {...review} />
                ))}
            </Marquee>
             <Marquee reverse pauseOnHover className="[--duration:60s]">
                {allTestimonials.slice(allTestimonials.length / 2).map((review, i) => (
                 <TestimonialCard key={`t2-${i}-${review.username}`} {...review} />
                ))}
            </Marquee>
            {/* Fades for Marquee Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </motion.div>

         {/* --- Key Stats --- */}
         <motion.div variants={itemSlideUp} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-neon-green text-shadow-neon-green">
                <TextReveal >By the Numbers</TextReveal>
            </h3>
            <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
                <ShineBorder
                    className="p-6 rounded-lg flex flex-col items-center justify-center min-w-[200px] bg-card/70 backdrop-blur-sm"
                    shineColor={["hsl(var(--primary))", "hsl(var(--secondary))"]} // Blue to Green
                    borderWidth={1}
                >
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                        <NumberTicker value={1500} delay={0.2} />+
                    </div>
                    <p className="text-muted-foreground">Active Members</p>
                </ShineBorder>
                <ShineBorder
                    className="p-6 rounded-lg flex flex-col items-center justify-center min-w-[200px] bg-card/70 backdrop-blur-sm"
                    shineColor={["hsl(var(--secondary))", "hsl(var(--accent))"]} // Green to Pink
                    borderWidth={1}
                >
                    <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">
                        <NumberTicker value={50} delay={0.4} />+
                    </div>
                    <p className="text-muted-foreground">Events Hosted</p>
                 </ShineBorder>
                <ShineBorder
                     className="p-6 rounded-lg flex flex-col items-center justify-center min-w-[200px] bg-card/70 backdrop-blur-sm"
                    shineColor={["hsl(var(--accent))", "hsl(var(--primary))"]} // Pink to Blue
                    borderWidth={1}
                >
                     <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                        <NumberTicker value={95} delay={0.6} />%
                    </div>
                    <p className="text-muted-foreground">Positive Feedback</p>
                 </ShineBorder>
            </div>
        </motion.div>

         {/* --- Video Testimonials Placeholder --- */}
        <motion.div variants={itemSlideUp}>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neon-yellow text-shadow-neon-yellow">
                See it in Action
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                 {videoTestimonials.map((video, index) => (
                     <VideoCard key={index} {...video} />
                 ))}
            </div>
        </motion.div>


        {/* --- Trusted By Logos --- */}
        <motion.div variants={itemSlideUp}>
          <h3 className="text-2xl font-semibold text-center mb-8 text-muted-foreground">
             Powered by & Played With
          </h3>
          <div className="relative flex items-center justify-center">
             <Marquee pauseOnHover speed={50} className="[--duration:40s]">
                {allLogos.map((logo, i) => (
                 <LogoItem key={`l-${i}-${logo.name}`} {...logo} />
                ))}
            </Marquee>
            {/* Fades for Marquee Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}