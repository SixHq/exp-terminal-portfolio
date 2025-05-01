
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { DeveloperAvatarSVG, DesignerAvatarSVG, ProductManagerAvatarSVG, CollaborationSVG } from "@/components/icons/TeamWorkflowIcons";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: React.ElementType;
  avatarColor: string; // Tailwind class e.g., text-electric-blue
}

const testimonials: Testimonial[] = [
  {
    quote: "DevMode bridges the gap perfectly. I can inspect designs and grab code without interrupting the designers.",
    name: "Alex Chen",
    role: "Lead Developer",
    avatar: DeveloperAvatarSVG,
    avatarColor: "text-electric-blue",
  },
  {
    quote: "Finally, developers can see exactly what I intended! DevMode makes handoffs so much smoother.",
    name: "Sarah Miller",
    role: "UI/UX Designer",
    avatar: DesignerAvatarSVG,
    avatarColor: "text-soft-pink",
  },
  {
    quote: "Being able to quickly reference the code behind mockups helps us align features faster across teams.",
    name: "Ben Carter",
    role: "Product Manager",
    avatar: ProductManagerAvatarSVG,
    avatarColor: "text-lime-green",
  },
   {
    quote: "The instant code view is a game-changer for quick prototyping and iteration.",
    name: "Maria Garcia",
    role: "Frontend Engineer",
    avatar: DeveloperAvatarSVG,
    avatarColor: "text-bright-orange",
  },
   {
    quote: "It encourages better communication by providing a shared visual language backed by actual code.",
    name: "David Lee",
    role: "Design Lead",
    avatar: DesignerAvatarSVG,
    avatarColor: "text-deep-plum",
  },
  {
    quote: "DevMode reduces ambiguity and helps us ship features with higher fidelity to the original designs.",
    name: "Chloe Davis",
    role: "Product Owner",
    avatar: ProductManagerAvatarSVG,
    avatarColor: "text-sky-500", // Using a different blue variation
  },
];

// Split testimonials for two marquee rows
const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({ quote, name, role, avatar: Avatar, avatarColor }: Testimonial) => (
  <figure
    className={cn(
      "relative h-full w-72 cursor-default overflow-hidden rounded-xl border p-5 mx-2", // Added margin
      // light styles
      "border-gray-950/[.1] bg-white/[.8] hover:bg-white",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-neutral-800/[.5] dark:hover:bg-neutral-800/[.8]",
      "backdrop-blur-sm transition-colors duration-300"
    )}
  >
    <div className="flex flex-row items-center gap-3 mb-3">
       <Avatar className={cn("w-10 h-10 flex-shrink-0", avatarColor)} />
       <div className="flex flex-col">
        <figcaption className="text-sm font-semibold text-foreground dark:text-white">
          {name}
        </figcaption>
        <p className="text-xs text-muted-foreground dark:text-white/60">{role}</p>
      </div>
    </div>
    <blockquote className="text-sm text-foreground/80 dark:text-white/80 leading-relaxed">
      "{quote}"
    </blockquote>
  </figure>
);

const TeamWorkflowSection: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const visualVariants = {
     hidden: { opacity: 0, scale: 0.8 },
     visible: {
        opacity: 1,
        scale: 1,
        transition: { delay: 0.3, duration: 0.7, type: "spring", damping: 12, stiffness: 80 },
     },
  };

  const marqueeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
       opacity: 1,
       y: 0,
       transition: { delay: 0.5, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] },
    },
 };

  return (
    <section
      id="team-workflow"
      className={cn(
        "relative w-full overflow-hidden py-20 md:py-32",
        "bg-pastel-yellow-green dark:bg-lime-green/10" // Pastel yellow-green background
      )}
    >
       <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={4}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
          "absolute inset-0 z-0 h-full w-full",
          "stroke-lime-green/50 dark:stroke-lime-green/30" // Grid lines color
        )}
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Title */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={titleVariants}
            className="mb-12 md:mb-16 text-center"
        >
            <TextAnimate
                as="h2"
                animation="blurInUp"
                by="word"
                duration={0.6}
                className={cn(
                    "text-headline-md lg:text-headline-lg font-bold tracking-tighter mb-4",
                    "text-rich-black dark:text-neutral-off-white"
                )}
            >
                Built for Collaborative Teams
            </TextAnimate>
            <TextAnimate
                as="p"
                animation="fadeIn"
                by="line"
                delay={0.2}
                className={cn(
                    "text-body-lg max-w-2xl mx-auto",
                    "text-muted-foreground dark:text-gray-600" // Adjusted dark text color for contrast on light bg
                )}
            >
               DevMode fosters seamless communication between developers, designers, and product teams.
            </TextAnimate>
        </motion.div>

        {/* Collaboration Visual (Static Example) */}
        <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.4 }}
             variants={visualVariants}
             className="relative flex justify-center items-center space-x-8 md:space-x-16 mb-16 md:mb-24 p-6"
         >
             <DeveloperAvatarSVG className="w-16 h-16 md:w-20 md:h-20 text-electric-blue transform transition-transform duration-300 hover:scale-110" />
             <CollaborationSVG className="w-24 h-24 md:w-32 md:h-32 text-deep-plum transform transition-transform duration-500 hover:rotate-12" />
             <DesignerAvatarSVG className="w-16 h-16 md:w-20 md:h-20 text-soft-pink transform transition-transform duration-300 hover:scale-110" />
             {/* Could add PM avatar absolutely positioned or adjust layout */}
             <ProductManagerAvatarSVG className="absolute -bottom-8 md:-bottom-12 left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 text-lime-green transition-transform duration-300 hover:scale-110" />
         </motion.div>

        {/* Testimonial Marquee (Social Proof) */}
        <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             variants={marqueeVariants}
             className="relative flex w-full flex-col items-center justify-center overflow-hidden"
         >
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
                {secondRow.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
            </Marquee>
             {/* Fades for marquee edges */}
             <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-pastel-yellow-green dark:from-lime-green/10"></div>
             <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-pastel-yellow-green dark:from-lime-green/10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamWorkflowSection;