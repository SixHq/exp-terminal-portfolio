
import React from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Particles } from "@/components/magicui/particles"; // Background effect

// Sample Testimonial Data (replace with actual data)
const testimonials = [
  {
    name: "ZeroCool",
    username: "@zerocool_gg",
    body: "Finally found a squad that gets me. Less rage, more wins!",
    img: "https://images.pexels.com/photos/7773722/pexels-photo-7773722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched image
  },
  {
    name: "GlitchByte",
    username: "@glitch_byte",
    body: "The vibe here is unmatched. No toxicity, just good games and great people.",
    img: "https://images.pexels.com/photos/7561957/pexels-photo-7561957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched image
  },
  {
    name: "NeonNinja",
    username: "@neon_ninja",
    body: "Competitive matchmaking that actually works. Found my skill level.",
    img: "https://images.pexels.com/photos/887349/pexels-photo-887349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched image
  },
  {
    name: "SynthWave",
    username: "@synthwave_pro",
    body: "More than just LFG, it's a real community. Events, discussions, everything.",
    img: "https://images.pexels.com/photos/12695284/pexels-photo-12695284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched image
  },
  {
    name: "PixelProwler",
    username: "@pixelprowler",
    body: "Been gaming for years, this community is a breath of fresh air. Highly recommend.",
    img: "https://images.pexels.com/photos/8679911/pexels-photo-8679911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched image
  },
   {
    name: "DataDrake",
    username: "@data_drake",
    body: "Organized events and consistent teammates. My K/D has never been better!",
    img: "https://avatar.vercel.sh/drake", // Using Vercel placeholder for variety
  },
];

// Duplicate and slice for two rows
const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  // Motion variants for individual card animation
  const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
      <motion.div variants={cardVariants}>
          <NeonGradientCard
              className="w-72 md:w-80 lg:w-96 cursor-pointer group" // Added group class
              borderSize={2}
              borderRadius={10}
              neonColors={{ firstColor: "#00f0ff", secondColor: "#ff00ff" }} // Neon Blue and Pink
          >
              <div className="p-4 flex flex-col items-center text-center">
                  <img className="rounded-full size-16 mb-3 border-2 border-neon-green transition-transform duration-300 group-hover:scale-110" alt={`${name}'s avatar`} src={img} />
                  <figcaption className="text-lg font-semibold text-foreground mb-1 group-hover:text-neon-green transition-colors">
                      {name}
                  </figcaption>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{username}</p>
                  <blockquote className="text-base text-foreground/90 italic">
                      "{body}"
                  </blockquote>
              </div>
          </NeonGradientCard>
      </motion.div>
  );
};


const SocialProof: React.FC = () => {
    // Motion variants for the section container
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2 // Stagger children animations (heading, marquee)
            }
        }
    };

    // Motion variants for the heading
    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    // Motion variants for the Marquee container (to stagger its appearance)
    const marqueeContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

  return (
    <section id="social-proof" className="relative section-padding overflow-hidden">
      {/* Particles Background */}
       <Particles
          className="absolute inset-0 -z-10"
          quantity={150}
          staticity={30}
          ease={60}
          size={0.5}
          refresh={false}
          color="hsl(var(--primary))" // Use neon blue
          vx={0.1}
          vy={0.1}
        />
         <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/90 to-background"></div>


      <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
          variants={sectionVariants}
      >
        <motion.h2
            className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 tracking-tight"
            variants={headingVariants}
        >
          Hear from the <AuroraText >Grid Runners</AuroraText>
        </motion.h2>

        <motion.div
            className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden"
            variants={marqueeContainerVariants} // Apply variants to the marquee container
        >
          <Marquee pauseOnHover className="[--duration:30s] [--gap:1rem]">
            {firstRow.map((testimonial) => (
              // Wrap card in motion div if not already done inside TestimonialCard for staggering within Marquee
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s] [--gap:1rem]">
            {secondRow.map((testimonial) => (
               <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>

          {/* Fades for Marquee Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
       </motion.div>
      </motion.div>
    </section>
  );
};

export default SocialProof;