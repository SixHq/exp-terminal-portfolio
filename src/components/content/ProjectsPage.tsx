
import React from 'react';
import { motion } from 'motion/react';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { TextAnimate } from '@/components/magicui/text-animate';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { IconCloud } from "@/components/magicui/icon-cloud";
import { ShinyButton } from '@/components/magicui/shiny-button'; // Using ShinyButton for links
import { ArrowRightIcon, GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

// Tech stack icons (simple placeholders, replace with actual SVGs or components)
// In a real app, these might be imported components or dynamically fetched SVGs
const TechIcon = ({ name }: { name: string }) => (
    <span className="inline-block px-2 py-0.5 bg-terminal-magenta/10 text-terminal-magenta text-xs rounded mr-1 mb-1">
        {name}
    </span>
);

// Define project data structure
interface Project {
    slug: string; // For IconCloud
    title: string;
    description: string; // Combine problem/solution here
    techStack: string[]; // Social proof
    imageUrl: string;
    liveUrl?: string;
    repoUrl?: string;
    gridClassName: string; // For BentoGrid layout
}

// Mock project data - replace with your actual projects
const projects: Project[] = [
    {
        slug: "project-phoenix",
        title: "Project Phoenix",
        description: "Revitalized a sluggish legacy UI using modern React & TypeScript, tackling performance bottlenecks (Problem) and delivering a 40% speed increase with a reusable component library (Solution).",
        techStack: ["react", "typescript", "tailwindcss", "vite", "jest", "figma"],
        imageUrl: "https://images.pexels.com/photos/19826630/pexels-photo-19826630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Modern UI Image
        repoUrl: "#", // Replace with actual URL
        liveUrl: "#",
        gridClassName: "col-span-3 lg:col-span-2", // Span 2 columns on large screens
    },
    {
        slug: "magic-ui-showcase",
        title: "Magic UI Showcase",
        description: "Developed interactive demonstrations for the Magic UI library (Solution), enabling developers to easily explore and integrate cutting-edge animations and effects (Problem: Discoverability).",
        techStack: ["react", "nextdotjs", "tailwindcss", "framer-motion", "typescript"], // Note: using motion/react in *this* project
        imageUrl: "https://images.pexels.com/photos/9783346/pexels-photo-9783346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Abstract Code Image
        liveUrl: "#",
        gridClassName: "col-span-3 lg:col-span-1", // Span 1 column
    },
    {
        slug: "portfolio-terminal",
        title: "Portfolio Terminal",
        description: "Built this interactive terminal interface (Solution) to showcase projects and skills in a unique, engaging way, moving beyond standard portfolio formats (Problem: Standing Out).",
        techStack: ["react", "typescript", "tailwindcss", "vite", "magicui", "shadcnui"],
        imageUrl: "https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg", // Cloud Network Image
        repoUrl: "#",
        gridClassName: "col-span-3", // Full width on smaller, span 3 on large
    },
];

const ProjectsPage: React.FC = () => {

    const techSlugs = projects.reduce((acc, project) => {
        project.techStack.forEach(tech => {
            if (!acc.includes(tech)) {
                acc.push(tech);
            }
        });
        return acc;
    }, [] as string[]);

    const techImageUrls = techSlugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}` // Use simpleicons CDN
    );


    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="p-4 md:p-8 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-cyan/60 scrollbar-track-transparent"
            // Ensure styles for scrollbar are available (defined in TerminalCore previously)
        >
            {/* Section Header with Layered Text / Mask Reveal */}
            <div className="mb-10 md:mb-16 text-center">
                 <BoxReveal boxColor={"hsl(var(--terminal-amber))"} duration={0.7}>
                    <TextAnimate
                        as="h1"
                        animation="fadeIn"
                        by="character"
                        delay={0.2}
                        duration={0.1}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-terminal-amber tracking-tight mb-2"
                    >
                        ~/Projects
                    </TextAnimate>
                 </BoxReveal>
                 <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="text-base md:text-lg text-terminal-cyan max-w-2xl mx-auto"
                 >
                    A curated selection of my work, demonstrating practical application of skills and problem-solving.
                 </motion.p>
            </div>

            {/* Bento Grid for Projects */}
            <BentoGrid className="mx-auto max-w-6xl">
                {projects.map((project, idx) => (
                    <BentoCard
                        Icon={'symbol'} href={''} cta={''} key={project.slug}
                        {...project} // Spread basic props like title, description, className
                        name={project.title} // BentoCard uses 'name' prop for title
                        className={cn(
                            "group/bento relative flex flex-col justify-between space-y-4 overflow-hidden",
                            "bg-background/70 backdrop-blur-sm border border-border/30", // Consistent card styling
                            "hover:shadow-lg hover:shadow-terminal-green/10 transition-shadow duration-300", // Hover effect
                            project.gridClassName // Apply specific grid span class
                        )}
                        // Optional background element (can be image, icon cloud, etc.)
                        background={<motion.img
                            src={project.imageUrl}
                            alt={`${project.title} background`}
                            className="absolute inset-0 h-full w-full object-cover opacity-10 group-hover/bento:opacity-20 transition-opacity duration-500"
                            initial={{ scale: 1.05 }}
                            whileHover={{ scale: 1 }} // Subtle scale on hover (Scaling on scroll effect)
                            transition={{ duration: 0.5, ease: "easeOut" }} />}                        // Custom Icon/Header can go here if needed
                        // Icon = { /* Your Icon Component */}
                    >
                        {/* Card Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }} // Staggered fade/slide in
                            className="z-10 flex flex-1 flex-col justify-between p-4 md:p-6" // Ensure content is above background
                        >
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-terminal-green mb-2">{project.title}</h3>
                                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold text-terminal-magenta mb-2 uppercase tracking-wider">Tech Stack</h4>
                                    <div className="flex flex-wrap">
                                        {project.techStack.map(tech => <TechIcon key={tech} name={tech} />)}
                                    </div>
                                     {/* Or use IconCloud for larger cards */}
                                     {/* {project.gridClassName.includes("col-span-2") && (
                                         <div className="relative h-24 w-full">
                                            <IconCloud images={project.techStack.map(slug => `https://cdn.simpleicons.org/${slug}`)} />
                                         </div>
                                     )} */}
                                </div>
                            </div>

                            {/* Action Buttons / Links */}
                            <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-border/20">
                                {project.liveUrl && (
                                    <ShinyButton>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-xs">
                                            <Link2Icon className="w-3 h-3" />
                                            <span>Live Demo</span>
                                        </a>
                                    </ShinyButton>
                                )}
                                {project.repoUrl && (
                                     <ShinyButton>
                                         <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-xs">
                                             <GitHubLogoIcon className="w-3 h-3" />
                                             <span>View Code</span>
                                         </a>
                                     </ShinyButton>
                                )}
                            </div>
                        </motion.div>
                    </BentoCard>
                ))}

                 {/* Optional: Add an overall Tech Stack Icon Cloud */}
                 <BentoCard
                    className="col-span-3 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm border border-border/30 relative min-h-[250px]"
                    name="My Toolkit"
                    description="Technologies I frequently work with." background={undefined} Icon={'symbol'} href={''} cta={''}                 >
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                        <IconCloud images={techImageUrls} />
                    </div>
                     <div className="z-10 text-center">
                        <h3 className="text-xl font-semibold text-terminal-cyan mb-2">My Toolkit</h3>
                        <p className="text-sm text-foreground/70">The core technologies powering these projects.</p>
                    </div>
                 </BentoCard>

            </BentoGrid>

             {/* Add padding at the bottom */}
             <div className="h-16"></div>
        </motion.div>
    );
};

export default ProjectsPage;