
import React from 'react';
import { motion } from 'motion/react';
import { Marquee } from "@/components/magicui/marquee";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import { Star } from 'lucide-react'; // Icon for rating

// Testimonial data structure
interface Testimonial {
  name: string;
  caseType: string; // e.g., "Business Litigation", "Family Law Settlement"
  quote: string;
  img: string;
  rating: number; // Rating out of 5
}

// Sample testimonial data using fetched images
const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    caseType: "Corporate Restructuring",
    quote: "Their strategic insight was invaluable during our complex restructuring. Truly experts in their field.",
    img: "https://images.pexels.com/photos/31824033/pexels-photo-31824033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Professional headshot
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    caseType: "Personal Injury Claim",
    quote: "They fought tirelessly for me and secured a settlement beyond my expectations. Highly recommend!",
    img: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg", // Happy customer face
    rating: 5,
  },
  {
    name: "David Lee",
    caseType: "Startup Formation & Funding",
    quote: "Navigating the legal aspects of launching a startup was daunting, but they made it seamless and clear.",
    img: "https://images.pexels.com/photos/31790762/pexels-photo-31790762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Corporate executive portrait
    rating: 5,
  },
  {
    name: "Emily White",
    caseType: "Real Estate Transaction",
    quote: "Professional, efficient, and thorough. Made our property purchase smooth and stress-free.",
    // Reusing an image for demonstration, ideally each would be unique
    img: "https://images.pexels.com/photos/31824033/pexels-photo-31824033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4,
  },
  {
    name: "James Green",
    caseType: "Intellectual Property Defense",
    quote: "Their expertise in IP law was crucial in protecting our assets. Exceptional service and results.",
    // Reusing image
    img: "https://images.pexels.com/photos/31790762/pexels-photo-31790762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
  {
    name: "Olivia Brown",
    caseType: "Family Law Mediation",
    quote: "Handled a sensitive situation with empathy and professionalism. Grateful for their guidance.",
     // Reusing image
    img: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg",
    rating: 5,
  },
];

// Slice data for two marquee rows
const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

// Reusable Testimonial Card component
const TestimonialCard = ({ name, caseType, quote, img, rating }: Testimonial) => {
  return (
    <motion.figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border border-border/50 p-6 mx-4", // Adjusted width, added margin
        "bg-card/60 dark:bg-card/70 backdrop-blur-lg shadow-md", // Card background with blur
        "transition-all duration-300 ease-out hover:shadow-xl hover:scale-[1.02]" // Hover effects
      )}
      whileHover={{ y: -5 }} // Subtle lift on hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Fade in when visible (useful if not in marquee)
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-row items-center gap-4 mb-4">
        <img
          className="rounded-full object-cover"
          width="48"
          height="48"
          alt={`Portrait of ${name}`}
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-primary dark:text-primary-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">
            {caseType}
          </p>
           {/* Star Rating */}
           <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < rating ? "fill-accent text-accent" : "fill-muted text-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-foreground/90 leading-relaxed italic border-l-2 border-accent pl-3">
        "{quote}"
      </blockquote>
    </motion.figure>
  );
};

const TestimonialsSection: React.FC = () => {
  // Animation variants for the section container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="client-successes" // Ensure ID matches nav link
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background dark:from-background dark:via-card/15 dark:to-background relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
         <motion.div
            variants={containerVariants} // Animate heading container
            className="mb-12 md:mb-16 text-center"
        >
             <TextAnimate
                as="h2"
                animation="slideLeft" // Different animation for variety
                by="word"
                duration={0.5}
                delay={0.1}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-accent tracking-tight mb-4"
            >
                Hear From Our Clients
            </TextAnimate>
             <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }} // Fade in after heading
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
             >
                Real stories from individuals and businesses who achieved success with our firm's support.
            </motion.p>
        </motion.div>

        {/* Testimonials Marquee */}
        <motion.div
             variants={containerVariants} // Reuse variants for simple fade effect
             className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:60s]">
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:60s] mt-6">
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          {/* Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;