
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/magicui/text-reveal";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import  HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button"; // For CTAs
import { GridPattern } from "../magicui/grid-pattern";

// Placeholder data for projects - replace with actual content
const projects = [
  {
    title: "Project Cygnus: Real-time Data Nexus",
    imageLight: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder - use Web Image Scraper Tool if needed
    imageDark: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    problem: "Client needed a highly performant dashboard to visualize complex, real-time data streams from IoT devices across a global network.",
    solution: "Developed a React-based frontend using WebSockets for live data updates, optimized rendering with virtualization, and crafted a custom sci-fi UI kit for visual clarity.",
    result: "Achieved sub-second data latency visualization, reduced cognitive load for operators by 40%, and received accolades for design innovation.",
    tags: ["React", "TypeScript", "WebSockets", "Data Visualization", "Performance Optimization"],
    liveLink: "#", // Replace with actual link
    caseStudyLink: "#", // Replace with actual link (or remove button)
  },
  {
    title: "Project Orion: E-commerce Reimagined",
    imageLight: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    imageDark: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    problem: "An outdated e-commerce platform suffered from slow performance, a confusing checkout process, and a lack of engaging user experience.",
    solution: "Led the frontend rebuild using Next.js for SSR/ISR, integrated a modern payment gateway, and implemented complex interactive animations for product showcases.",
    result: "Increased conversion rates by 25%, improved page load speeds by 60%, and significantly boosted user satisfaction scores.",
    tags: ["Next.js", "React", "Tailwind CSS", "E-commerce", "Animation"],
     liveLink: "#",
    caseStudyLink: "#",
  },
   {
    title: "Project Nebula: Interactive Learning Platform",
    imageLight: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    imageDark: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
    problem: "Educational startup required an engaging platform with interactive modules, progress tracking, and gamified elements to enhance learning.",
    solution: "Built a modular frontend with Zustand for state management, integrated a custom charting library for progress visualization, and added WebGL elements for interactive simulations.",
    result: "User engagement time increased by 50%, completion rates improved by 30%, and the platform secured Series A funding.",
    tags: ["React", "Zustand", "WebGL", "Gamification", "UI/UX"],
     liveLink: "#",
    caseStudyLink: "#",
  },
];

// Arrow Icon Component (using fetched SVG - reusing from HeroSection)
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em" // Adjust size as needed
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={cn("ml-1.5 size-3.5", props.className)} // Add margin and allow overriding class
  >
    <path
      d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-32bg-gradient-to-b from-background to-secondary/5">
      {/* Add a background element if desired, e.g., GridPattern or Particles */}
          <GridPattern
              width={50}
              height={50}
              x={-1}
              y={-1}
              strokeDasharray={"4 2"}
              className={cn(
                  "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
              )}
          />
      


      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center mb-16 md:mb-24 relative z-10"
      >
        <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          <AnimatedGradientText colorFrom="hsl(var(--primary))" colorTo="hsl(var(--accent))">
            Case Study Highlights
          </AnimatedGradientText>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          <TextReveal>
            Transforming complex challenges into elegant, high-impact digital solutions. Explore the journey from problem to pixel-perfect results.
          </TextReveal>
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 relative z-10 space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.1 + index * 0.1 }} // Staggered entrance, custom ease
            viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center",
              index % 2 !== 0 && "lg:grid-flow-row-dense" // Alternate layout
            )}
          >
            {/* Project Image/Video */}
            <div className={cn("relative group", index % 2 !== 0 && "lg:col-start-2")}>
                {/* Using HeroVideoDialog for potential video integration */}
                <HeroVideoDialog
                        className="block dark:hidden rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20 transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:shadow-accent/20"
                        animationStyle="fade"
                        // videoSrc="https://www.youtube.com/embed/..." // Add video source later
                        thumbnailSrc={project.imageLight}
                        thumbnailAlt={`${project.title} Light Mode Preview`} videoSrc={""}                />
                 <HeroVideoDialog
                        className="hidden dark:block rounded-lg overflow-hidden shadow-2xl shadow-primary/20 border border-primary/30 transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:shadow-accent/30"
                        animationStyle="fade"
                        // videoSrc="https://www.youtube.com/embed/..." // Add video source later
                        thumbnailSrc={project.imageDark}
                        thumbnailAlt={`${project.title} Dark Mode Preview`} videoSrc={""}                />
                 <BorderBeam size={150} duration={8} delay={1 + index * 0.5} colorFrom="hsl(var(--accent))" colorTo="hsl(var(--primary))" />
            </div>

            {/* Project Details */}
            <div className={cn("flex flex-col justify-center", index % 2 !== 0 && "lg:col-start-1 lg:row-start-1")}>
                <BoxReveal boxColor={"hsl(var(--accent))"} duration={0.6} delay={0.3 + index * 0.1}>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80">
                        {project.title}
                    </h3>
                </BoxReveal>

                {/* Problem/Solution/Result Structure */}
                <div className="space-y-6 mb-6">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} viewport={{ once: true }}>
                        <h4 className="font-semibold text-lg text-primary mb-1">Problem:</h4>
                        <p className="text-muted-foreground">{project.problem}</p>
                    </motion.div>
                     <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} viewport={{ once: true }}>
                        <h4 className="font-semibold text-lg text-accent mb-1">Solution:</h4>
                        <p className="text-muted-foreground">{project.solution}</p>
                    </motion.div>
                     <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }} viewport={{ once: true }}>
                        <h4 className="font-semibold text-lg text-emerald-400 mb-1">Result:</h4>
                        <p className="text-muted-foreground">{project.result}</p>
                    </motion.div>
                </div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mb-8"
                >
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                     viewport={{ once: true }}
                     className="flex flex-wrap gap-4"
                 >
                     {project.liveLink && project.liveLink !== "#" && (
                         <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                             <ShimmerButton
                                className="shadow-md"
                                shimmerColor="hsl(var(--background))"
                                background="hsl(var(--primary))"
                             >
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-primary-foreground flex items-center">
                                    View Live
                                    <ArrowRightIcon />
                                </span>
                             </ShimmerButton>
                         </a>
                     )}
                      {project.caseStudyLink && project.caseStudyLink !== "#" && (
                         <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
                              <ShimmerButton
                                className="shadow-md"
                                shimmerColor="hsl(var(--foreground))"
                                background="hsl(var(--secondary))"
                             >
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-secondary-foreground flex items-center">
                                    Case Study
                                     <ArrowRightIcon className="text-secondary-foreground/80"/>
                                </span>
                             </ShimmerButton>
                         </a>
                     )}
                </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for Video Testimonials */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center mt-24 md:mt-32"
        >
            <h3 className="font-heading text-3xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
                Video Testimonials (Coming Soon)
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
                Hear directly from clients about their experience and the results achieved. Engaging video testimonials will be featured here shortly.
            </p>
            {/* Add placeholders or a visual representation */}
             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-secondary/30 rounded-lg border border-border/30 flex items-center justify-center text-muted-foreground italic animate-pulse">
                        Video Placeholder {i}
                    </div>
                ))}
            </div>
        </motion.div>

    </section>
  );
}