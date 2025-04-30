
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

// Fetched SVG Icons as Components
const SnailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.221 28.025l0-0h-0zM29.977 6.142c-0.645 0-1.167 0.523-1.167 1.167 0 0.131 0.022 0.256 0.061 0.373-1.668 0.652-1.334 3.814-1.096 6.786-0.935 0.84-2.005 0.732-2.951-0.51-0.118-3.108-0.909-7.165 0.579-8.373-0.013 0.071-0.021 0.143-0.021 0.218 0 0.645 0.523 1.167 1.167 1.167s1.167-0.523 1.167-1.167c0-0.645-0.523-1.167-1.167-1.167-0.447 0-0.836 0.252-1.032 0.621-2.31 0.365-1.593 4.532-1.376 7.961-0.11 1.808-0.538 3.444-1.185 4.836-0.501-3.708-2.678-7.067-4.693-8.758-3.902-3.274-9.376-2.96-13.18 0.429s-3.976 9.618-0.608 13.39c0.531 0.529 1.141 0.941 1.8 1.24-2.423 0.999-4.281 2.333-5.055 3.669h20.072c6.113 0 8.38-6.077 7.17-12.98-0.206-2.8-0.624-5.931 0.567-7.054 0.212 0.294 0.557 0.486 0.948 0.486 0.645 0 1.167-0.523 1.167-1.167s-0.523-1.167-1.167-1.167z"></path>
    </svg>
);

const QuestionMarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="800px" height="800px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M142 125.853C155.049 97.8883 180.62 82.7645 200.381 78.4757C227.189 72.6575 249.859 84.0511 257.624 112.528C260.302 122.352 259.217 138.128 253.081 148.517C247.426 158.092 239.904 165.942 227.555 176.481C225.251 178.447 217.389 185.018 216.649 185.643C199.849 199.818 191.567 209.152 186.81 220.972C182.053 232.792 182.305 269.489 216.649 266.35" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M198.744 315.68C198.744 317.274 198.744 319.614 198.744 322.7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const BugIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 15V11.9375C19 9.76288 17.2371 8 15.0625 8H8.9375C6.76288 8 5 9.76288 5 11.9375V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16.5 8.5V7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5V8.5" stroke="currentColor" strokeWidth="1.5"/>
        <path opacity="0.5" d="M19 14H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M5 14H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M14.5 3.5L17 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M9.5 3.5L7 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M20.5 20.0002L18.5 19.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M20.5 7.9998L18.5 8.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M3.5 20.0002L5.5 19.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M3.5 7.9998L5.5 8.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path opacity="0.5" d="M12 21.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const WrenchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
        <g fill="none" fillRule="evenodd" transform="translate(-3 -2)">
        <path id="wrench-c" d="M11.5918831,4.10391624 C9.9413585,5.15144884 8.8492424,6.97192294 8.8492424,9.04235095 C8.8492424,11.6465249 10.5770227,13.8552597 12.9705627,14.6278664 L12.9705627,25.8894142 L15.9705627,25.8894142 L15.9705627,14.8193364 C18.7483556,14.3047597 20.8492424,11.9139716 20.8492424,9.04235095 C20.8492424,6.76356728 19.526258,4.78757663 17.5918831,3.81167999 L17.5918831,9.70043467 C17.5918831,10.2416263 17.1441678,10.6803488 16.5918831,10.6803488 L12.5918831,10.6803488 C12.0395983,10.6803488 11.5918831,10.2416263 11.5918831,9.70043467 L11.5918831,4.10391624 Z M13.5918831,8.72052059 L15.5918831,8.72052059 L15.5918831,3.81167999 C15.5918831,2.34465389 17.1763156,1.39770743 18.5073633,2.06922413 C21.1507799,3.40283394 22.8492424,6.07517591 22.8492424,9.04235095 C22.8492424,12.25389 20.8650353,15.0617413 17.9705627,16.2627781 L17.9705627,25.8894142 C17.9705627,26.9717974 17.0751322,27.8492424 15.9705627,27.8492424 L12.9705627,27.8492424 C11.8659932,27.8492424 10.9705627,26.9717974 10.9705627,25.8894142 L10.9705627,15.9006093 C8.4763407,14.545565 6.8492424,11.9474284 6.8492424,9.04235095 C6.8492424,6.35259954 8.24449613,3.89341027 10.5046508,2.45896591 C11.8353306,1.61442808 13.5918831,2.55036077 13.5918831,4.10391624 L13.5918831,8.72052059 Z"/>
        <use fill="currentColor" fillRule="nonzero" transform="rotate(45 14.85 14.85)" xlinkHref="#wrench-c"/>
        </g>
    </svg>
);


const painPoints = [
  {
    Icon: SnailIcon,
    name: "Lagging Load Times?",
    description: "Optimize asset delivery, streamline code, and leverage modern techniques for lightning-fast performance.",
    className: "col-span-3 lg:col-span-1",
    background: (
       <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute inset-0 opacity-30" // Faded background
      >
         <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            width={20}
            height={20}
            className={cn(
              "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
      </motion.div>
    ),
  },
  {
    Icon: QuestionMarkIcon,
    name: "Confusing User Experience?",
    description: "Design intuitive interfaces and seamless navigation flows that delight users and achieve business goals.",
    className: "col-span-3 lg:col-span-1",
     background: (
       <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute inset-0 opacity-30" // Faded background
      >
        <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1.2}
            width={20}
            height={20}
            className={cn(
              "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
        </motion.div>
    ),
  },
  {
    Icon: BugIcon,
    name: "Persistent Bugs?",
    description: "Employ rigorous testing, debugging strategies, and best practices to ensure robust and reliable applications.",
    className: "col-span-3 lg:col-span-1",
     background: (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute inset-0 opacity-30" // Faded background
      >
        <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1.4}
            width={20}
            height={20}
            className={cn(
              "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
       </motion.div>
    ),
  },
   {
    Icon: WrenchIcon,
    name: "Maintenance Nightmares?",
    description: "Build scalable, maintainable codebases using modular architecture and clear documentation for long-term success.",
    className: "col-span-3 lg:col-span-2", // Make this one wider
     background: (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute inset-0 opacity-30" // Faded background
      >
        <AnimatedGridPattern
            numSquares={40} // More squares for wider card
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1.6}
            width={20}
            height={20}
            className={cn(
              "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
      </motion.div>
    ),
  },
];

export function ProblemPainPointSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  // Refs for AnimatedBeam (optional, can add later if desired)
  // Correctly initialize refs at the top level
  const iconRefs = React.useRef<React.RefObject<HTMLDivElement>[]>([]);
  if (iconRefs.current.length !== painPoints.length) {
    // Initialize refs only if needed (e.g., on first render or if painPoints changes length)
    iconRefs.current = painPoints.map(() => React.createRef<HTMLDivElement>());
  }

  return (
    <section id="problem-solution" className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-secondary/5 to-background">
       <AnimatedGridPattern
            numSquares={80}
            maxOpacity={0.05} // Very subtle background
            duration={4}
            repeatDelay={2}
            className={cn(
                "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
                "absolute inset-0 z-0",
            )}
        />

        {/* Section Title */}
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center mb-16 relative z-10"
        >
            <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                 <TextAnimate animation="blurInUp" by="word" delay={0.2}>
                    Navigating Digital Obstacles?
                 </TextAnimate>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground md:text-xl">
                 <TextAnimate animation="fadeIn" by="line" delay={0.5}>
                     Common frontend challenges and how I engineer elegant solutions.
                 </TextAnimate>
            </p>
        </motion.div>

        {/* Bento Grid for Pain Points */}
        <motion.div
             ref={containerRef} // Ref for potential AnimatedBeam
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             viewport={{ once: true }}
             className="container mx-auto px-4 relative z-10"
         >
            <BentoGrid className="lg:grid-rows-2">
                {painPoints.map((point, idx) => (
                     <BentoCard
                       key={point.name}
                       {...point} // Spread point props first
                       href={""} // Explicitly provide href
                       cta={""} // Explicitly provide cta
                       className={cn("group", point.className)}
                       Icon={(props) => ( // Wrap Icon for animation & ref
                        <motion.div
                           ref={iconRefs.current[idx]} // Access ref from the current array (now RefObject)
                           initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
                           whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                           transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 + idx * 0.1 }}
                           viewport={{ once: true }}
                           className={cn("mb-2 text-accent transition-transform duration-300 ease-out group-hover:scale-110", props.className)} // Add group-hover effect
                        >
                            <point.Icon className="h-8 w-8 md:h-10 md:w-10 " />
                        </motion.div>
                      )}
                      name={point.name} // Pass the string directly
                      // Apply BoxReveal around the name rendering if needed inside BentoCard,
                      // or adjust BentoCard's prop types if it should accept ReactNode.
                      // For now, just fixing the type error by passing the string.
                      // The BoxReveal animation for the name is removed here.
                      description={point.description} // Pass the string directly
                      // Apply BoxReveal around the description rendering if needed inside BentoCard,
                      // or adjust BentoCard's prop types if it should accept ReactNode.
                      // For now, just fixing the type error by passing the string.
                      // The BoxReveal animation for the description is removed here.
                      // Remove default CTA props if not needed
                    />
                ))}
            </BentoGrid>
             {/* Optional: Add AnimatedBeam connections here using iconRefs and containerRef */}
             {/* Example: <AnimatedBeam containerRef={containerRef} fromRef={iconRefs[0]} toRef={iconRefs[1]} /> */}
        </motion.div>
    </section>
  );
}
