
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Meteors } from "@/components/magicui/meteors";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ShineBorder } from "@/components/magicui/shine-border";

const testimonials = [
  {
    name: "Aria Sharma",
    title: "Lead Engineer, Nebula Systems",
    quote: "Working with them transformed our frontend. Performance gains were massive, and the UI is simply breathtaking. Truly top-tier talent.",
    img: "https://images.pexels.com/photos/31660598/pexels-photo-31660598.jpeg",
  },
  {
    name: "Kenji Tanaka",
    title: "Product Owner, Quantum Leap",
    quote: "Their ability to translate complex requirements into intuitive, beautiful interfaces is uncanny. A true asset to any team.",
    img: "https://images.pexels.com/photos/7388923/pexels-photo-7388923.jpeg",
  },
  {
    name: "Jax Miller",
    title: "CTO, CyberCore Solutions",
    quote: "The animations and interactions implemented are beyond anything we expected. It elevated our user engagement significantly.",
    img: "https://images.pexels.com/photos/20591769/pexels-photo-20591769.jpeg",
  },
   {
    name: "Elara Vance",
    title: "UI/UX Director, Stellar Innovations",
    quote: "Brought a level of polish and creativity that pushed our project from good to outstanding. Highly recommended.",
    img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg", // Example fallback, replace if needed
  },
   {
    name: "Mateo Rossi",
    title: "Founder, Orbit Labs",
    quote: "Incredible attention to detail and a deep understanding of modern frontend technologies. Delivered exceptional results.",
    img: "https://images.pexels.com/photos/8894033/pexels-photo-8894033.jpeg", // Example fallback
  },
   {
    name: "Lena Petrova",
    title: "Frontend Lead, Genesis Corp",
    quote: "Reliable, communicative, and exceptionally skilled. Consistently delivered high-quality code ahead of schedule.",
    img: "https://images.pexels.com/photos/7695712/pexels-photo-7695712.jpeg", // Example fallback
  },
];

const clientLogos = [
  { name: "Google", url: "https://images.pexels.com/photos/13660566/pexels-photo-13660566.jpeg" },
  { name: "Meta", url: "https://images.pexels.com/photos/31853154/pexels-photo-31853154.jpeg" },
  { name: "Netflix", url: "https://images.pexels.com/photos/5202917/pexels-photo-5202917.jpeg" },
  { name: "Abstract Tech", url: "https://images.pexels.com/photos/9949427/pexels-photo-9949427.jpeg" },
  // Add 2 more if needed for the marquee effect
  { name: "Google Alt", url: "https://images.pexels.com/photos/13660566/pexels-photo-13660566.jpeg" },
  { name: "Meta Alt", url: "https://images.pexels.com/photos/31853154/pexels-photo-31853154.jpeg" },
];

const firstRowTestimonials = testimonials.slice(0, testimonials.length / 2);
const secondRowTestimonials = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({
  img,
  name,
  title,
  quote,
}: {
  img: string;
  name: string;
  title: string;
  quote: string;
}) => {
  return (
    <ShineBorder
        className="relative h-full w-72 cursor-pointer overflow-hidden rounded-xl p-4 mx-2 flex flex-col justify-between bg-background/10 backdrop-blur-sm"
        shineColor={["hsl(var(--accent))", "hsl(var(--primary))"]}
        borderWidth={1}
    >
        {/* Content */}
        <div className="relative z-10 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <img className="rounded-full object-cover size-10 border-2 border-accent/50" alt={name} src={img} />
                <div className="flex flex-col">
                <figcaption className="text-sm font-semibold text-foreground font-heading">
                    {name}
                </figcaption>
                <p className="text-xs text-muted-foreground">{title}</p>
                </div>
            </div>
            <blockquote className="text-sm text-foreground/90 italic leading-relaxed line-clamp-5">
                "{quote}"
            </blockquote>
        </div>
         {/* ShineBorder handles the border */}
    </ShineBorder>
  );
};

export function SocialProofSection() {
  return (
    <section id="social-proof" className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <Meteors number={30} minDelay={0.5} maxDelay={1.5} className="absolute inset-0 z-0" />

         {/* Section Title */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             className="container mx-auto px-4 text-center mb-16 relative z-10"
        >
            <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary mb-4">
                Trusted by Innovators
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground md:text-xl">
                Hear from partners who've navigated the digital frontier with my expertise.
            </p>
        </motion.div>

        {/* Testimonials Marquee */}
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex w-full flex-col items-center justify-center mb-20"
         >
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRowTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name + "-1"} {...testimonial} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
                {secondRowTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name + "-2"} {...testimonial} />
                ))}
            </Marquee>
        </motion.div>

        {/* Client Logos */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center relative z-10"
        >
             <h3 className="text-xl font-semibold text-muted-foreground mb-8 tracking-wider uppercase">
                Collaborations & Contributions
            </h3>
            <div className="relative flex w-full items-center justify-center overflow-hidden">
                 <Marquee className="[--duration:30s] max-w-4xl">
                    {clientLogos.map((logo, idx) => (
                        <div key={idx} className="mx-8 flex items-center justify-center h-12">
                            <img
                                src={logo.url}
                                alt={`${logo.name} Logo`}
                                className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </Marquee>
                 <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background z-10"></div>
                 <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background z-10"></div>
            </div>
        </motion.div>

    </section>
  );
}