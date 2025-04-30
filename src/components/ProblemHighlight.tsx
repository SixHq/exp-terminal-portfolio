
import React from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { TextReveal } from "@/components/magicui/text-reveal";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { RetroGrid } from "@/components/magicui/retro-grid"; // Background effect

// Fetched SVG Icons as React Components (Simplified for brevity)
const GroupUsersIcon = () => (
    <svg width="48" height="48" viewBox="0 0 511.999 511.999" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified path - Use full SVG content here */}
        <path d="M493.911,157.124c-12.896-37.878-40.501-41.966-51.77-41.966c-2.71,0-5.233,0.198-7.501,0.503 c-10.462-12.241-29.534-30.787-49.013-30.787c-0.262,0-0.523,0.003-0.782,0.009c-0.252-0.009-0.529,0.003-0.824-0.014 c-1.196,0.008-2.358,0.156-3.473,0.426c-3.144,0.529-6.135,1.551-8.922,3.049c-35.822,19.258-47.42,21.79-55.094,23.464 c-2.874,0.627-5.845,1.275-9.254,2.46c-0.776,0.27-1.525,0.528-2.256,0.778c-0.067-12.802-1.271-22.471-3.678-29.544 c-14.437-42.402-43.637-48.733-59.76-48.733c-3.851,0-7.39,0.357-10.454,0.854c-11.582-13.709-35.09-37.619-58.154-37.619 c-0.32,0-0.639,0.005-0.958,0.014c-0.323-0.014-0.668-0.021-0.993-0.018c-1.22,0.011-2.404,0.166-3.539,0.45 c-3.513,0.577-6.855,1.71-9.959,3.379c-43.891,23.595-58.239,26.726-67.734,28.799c-3.395,0.741-6.907,1.507-10.86,2.881 c-3.54,1.229-6.698,2.286-9.507,3.226c-13.85,4.634-22.21,7.431-27.579,15.589c-5.799,8.812-4.26,18.232-2.129,31.269 c4.91,30.032,8.511,59.139,10.708,86.523v18.9c0,31.09,11.797,59.472,31.138,80.925c-40.285,19.684-66.651,62.71-66.651,112.866 v111.939c0,8.424,6.829,15.253,15.253,15.253h362.238c8.423,0,15.253-6.829,15.253-15.253s-6.83-15.253-15.253-15.253H283.241 v-76.955c0-34.814,19.353-62.882,48.75-71.729c15.328,9.161,33.229,14.443,52.347,14.443c56.435,0,102.349-45.915,102.349-102.349 v-15.706c0.098-0.587,0.197-1.155,0.293-1.76l0.272-1.727c0.628-4.088,2.224-9.132,3.912-14.474 c2.796-8.842,5.965-18.863,5.923-28.776C497.038,171.544,495.999,163.255,493.911,157.124z M309.155,145.846 c2.402-0.804,5.104-1.708,8.13-2.759c1.687-0.586,3.392-0.958,5.752-1.473c9.869-2.154,23.374-5.101,62.722-26.231 c5.811,0.194,20.671,12.945,30.746,26.414c4.21,5.656,11.364,7.846,17.832,5.082c0.572-0.195,3.739-1.213,7.802-1.213 c3.868,0,15.644,0,22.893,21.293c0.311,0.915,1.251,4.304,1.493,12.335c-6.277-8.906-15.401-17.419-27.735-17.419 c-5.645,0-11.257,1.911-16.267,5.554c-11.524,8.263-30.5,20.64-36.195,22.712c-31.447,3.514-58.578,11.241-75.769,17.088 c-1.821-17.324-4.249-35.294-7.25-53.649c-0.276-1.689-0.604-3.694-0.851-5.436C304.419,147.429,306.871,146.61,309.155,145.846z M78.803,147.694c-2.228-21.617-5.224-44.061-8.976-67.022c-0.484-2.962-1.091-6.672-1.371-9.269 c2.613-1.049,6.681-2.41,10.654-3.74c2.907-0.973,6.173-2.067,9.837-3.339c2.232-0.775,4.381-1.243,7.355-1.893 c11.824-2.581,28.018-6.115,75.673-31.735c0.079-0.043,0.243-0.13,0.647-0.169c0.034-0.003,0.067-0.006,0.101-0.011 c0.011,0,0.021,0,0.032-0.002l0.223-0.006c8.929,0,28.307,17.599,40.103,33.383c4.195,5.634,11.386,7.8,17.852,5.073 c0.612-0.217,4.98-1.692,10.651-1.692c14.352,0,24.452,9.179,30.881,28.061c0.598,1.757,1.997,7.228,2.053,20.026 c0.009,2.01-0.239,4.227-0.668,6.582c-10.705-19.123-22.658-28.462-36.331-28.462c-6.264,0-12.266,2.059-17.855,6.135 c-14.582,10.459-38.479,25.997-45.083,28.114c-40.112,4.44-74.378,14.573-94.866,21.731 C79.452,148.849,79.138,148.265,78.803,147.694z M80.932,191.016v-9.518c16.418-6.223,53.451-18.694,97.572-23.509 c15.349-1.676,56.618-31.874,59.073-33.682c1.917,1.318,7.753,6.524,15.454,24.47c4.643,10.819,7.805,21.312,8.859,24.983v17.254 c0,49.891-40.59,90.479-90.481,90.479C121.52,281.495,80.932,240.907,80.932,191.016z M252.734,404.538v76.955H45.418v-96.686 c0-44.304,25.041-79.923,62.916-90.597c18.38,11.277,39.98,17.791,63.077,17.791c49.27,0,91.729-29.621,110.575-71.978v4.881 c0,25.05,9.06,48.015,24.057,65.823C273.701,328.032,252.734,363.461,252.734,404.538z M384.338,316.748 c-39.615,0-71.845-32.228-71.845-71.843v-5.979c14.129-5.246,43.367-14.777,77.977-18.554c12.033-1.313,40.948-21.726,48.322-27.054 c5.133,5.07,12.913,21.804,17.388,37.742v13.845C456.181,284.52,423.953,316.748,384.338,316.748z"/>
    </svg>
);
const AngryFaceIcon = () => (
     <svg width="48" height="48" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         {/* Simplified path - Use full SVG content here */}
         <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm0 57.5C16.836 59.5 4.5 47.164 4.5 32S16.836 4.5 32 4.5c15.163 0 27.5 12.336 27.5 27.5S47.163 59.5 32 59.5z"/>
         <path d="M32 41.834c-4.538 0-8.082 3.058-9.837 6.492c-.47.918.155 1.912.849 1.339c5.758-4.771 12.184-4.8 17.977 0c.693.573 1.318-.421.848-1.339c-1.755-3.434-5.298-6.492-9.837-6.492"/>
         <path d="M24.799 30.699a.536.536 0 0 0 .043-.246a31.154 31.154 0 0 1 3.262 2.863c-.203-1.885-1.125-3.654-2.365-5.115c-1.25-1.461-2.852-2.641-4.596-3.441a13.653 13.653 0 0 0-5.59-1.279c-1.914-.008-3.801.42-5.387 1.455c1.531.148 2.885.359 4.212.665a.533.533 0 0 0-.138.175a5.825 5.825 0 1 0 10.559 4.923"/>
         <path d="M48.447 23.48c-1.92.018-3.84.469-5.59 1.279c-1.744.801-3.346 1.98-4.596 3.441c-1.24 1.461-2.162 3.23-2.365 5.115a31.039 31.039 0 0 1 3.262-2.863a.536.536 0 0 0 .043.246a5.824 5.824 0 1 0 10.558-4.924a.544.544 0 0 0-.138-.175a32.291 32.291 0 0 1 4.212-.665c-1.585-1.034-3.472-1.461-5.386-1.454"/>
     </svg>
);
const SkillLevelIcon = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified path - Use full SVG content here */}
         <path d="M30,30H22V4h8Zm-6-2h4V6H24Z"/>
         <path d="M20,30H12V12h8Z"/>
         <path d="M10,30H2V18h8Z"/>
    </svg>
);
const CommunityPeopleIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
         {/* Simplified path - Use full SVG content here */}
        <path d="M10.4247 8.4257C8.66593 8.49885 6.80632 9.54146 6.09637 10.0536C5.06581 9.37532 3.96648 9.47706 3.48553 10.0536C2.39403 11.3621 3.4054 12.5972 3.96649 12.9703C3.38257 17.6845 9.20789 19.2287 12.6231 18.9733C17.9859 18.5722 20.2665 15.5648 19.9744 13.2077C20.5928 12.8686 21.5273 11.8767 20.6271 10.4267C19.9744 9.37532 18.2568 9.59011 17.6729 10.0536C15.8866 9.0226 13.2644 8.42569 12.1766 8.25612L13.4819 4.25413L16.8913 5.17833C17.1657 4.30143 18.106 3.80289 18.9942 4.07385C19.8824 4.34482 20.3799 5.27534 20.1055 6.15224C19.831 7.02914 18.8885 7.52034 18.0003 7.24938C17.6105 7.13046 17.296 6.88451 17.0889 6.5718" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const painPoints = [
  {
    Icon: GroupUsersIcon, // Use fetched SVG component
    name: "Finding Teammates",
    description: "Endless scrolling through LFG posts? Find your perfect squad instantly.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />,
    boxColor: "hsl(var(--neon-blue))",
  },
  {
    Icon: AngryFaceIcon, // Use fetched SVG component
    name: "Toxic Lobbies",
    description: "Escape the negativity. Join a community focused on sportsmanship and fun.",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />,
    boxColor: "hsl(var(--neon-pink))",
  },
   {
    Icon: SkillLevelIcon, // Use fetched SVG component
    name: "Skill Mismatch",
    description: "Tired of unbalanced matches? Our system helps you find fair fights.",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />,
    boxColor: "hsl(var(--neon-green))",
  },
  {
    Icon: CommunityPeopleIcon, // Use fetched SVG component
    name: "Lack of Community",
    description: "Go beyond the game. Connect with fellow gamers, share clips, and join events.",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />,
    boxColor: "hsl(var(--muted-foreground))",
  },
];

const ProblemHighlight: React.FC = () => {
    // Motion variants for the section container
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2 // Stagger children (heading, grid)
            }
        }
    };

     // Motion variants for the heading container (using TextReveal means it animates internally)
    const headingContainerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    // Motion variants for the BentoGrid container
    const gridVariants = {
        hidden: {}, // Parent doesn't need opacity/y animation here if children handle it
        visible: {
            transition: {
                staggerChildren: 0.15 // Stagger the appearance of BentoCards
            }
        }
    };

    // Motion variants for individual BentoCard items
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0] // Custom cubic bezier for a nice pop
            }
        }
    };


  return (
    <section id="pain-points" className="relative section-padding overflow-hidden">
       {/* Retro Grid Background */}
        <RetroGrid className="absolute inset-0 -z-10 opacity-30" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-background/95 to-background"></div>


      <motion.div
          className="container-narrow" // Use narrower container for focus
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
          variants={sectionVariants}
      >
        <motion.div
            className="text-center mb-16"
            variants={headingContainerVariants}
        >
           {/* Using TextReveal for the heading */}
           <TextReveal className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Tired of the endless solo queue grind and toxic lobbies? We get it.
           </TextReveal>
        </motion.div>

        <motion.div variants={gridVariants}> {/* Apply staggerChildren variant */}
            <BentoGrid className="lg:grid-rows-2">
              {painPoints.map((feature, idx) => (
                <motion.div key={feature.name} variants={itemVariants}> {/* Wrap BentoCard in motion.div */}
                    <BentoCard
                      href={''} cta={''} {...feature} // Spread props like Icon, name, description, className, background
                      className={cn(
                          "group/bento transition duration-200 shadow-input hover:shadow-neon-glow-primary dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-background border border-transparent justify-between flex flex-col space-y-4",
                          feature.className
                      )}
                      color={feature.boxColor} // Pass boxColor for BoxReveal
                    >
                        {/* Custom Layout inside BentoCard */}
                         <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border dark:border-white/[0.2] border-black/[0.2] relative overflow-hidden">
                           {feature.background} {/* Render the background effect */}
                           <div className="absolute inset-0 flex items-center justify-center z-10">
                               <feature.Icon />
                           </div>
                         </div>
                         <div className="group-hover/bento:translate-x-2 transition duration-200 z-20">
                            <BoxReveal boxColor={feature.boxColor || "hsl(var(--primary))"} duration={0.5}>
                                <div className="font-sans font-bold text-foreground text-lg md:text-xl mb-1 mt-2 group-hover/bento:text-neon-blue transition-colors duration-300">
                                    {feature.name}
                                </div>
                            </BoxReveal>
                            <BoxReveal boxColor={feature.boxColor || "hsl(var(--primary))"} duration={0.6}>
                                <div className="font-sans font-normal text-muted-foreground text-sm">
                                    {feature.description}
                                </div>
                           </BoxReveal>
                         </div>
                    </BentoCard>
                 </motion.div>
              ))}
            </BentoGrid>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemHighlight;