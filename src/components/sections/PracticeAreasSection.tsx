
import React from 'react';
import { motion } from 'motion/react';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import {
    Scale, // Corporate Law / Business
    ShieldCheck, // Litigation / Defense
    Home, // Real Estate
    Users, // Family Law
    FileText, // Estate Planning / Documents
    Briefcase // Generic Business / Corporate alt
} from 'lucide-react'; // Assuming lucide-react is available

// Define Practice Area data
const practiceAreas = [
  {
    Icon: Scale,
    name: "Corporate & Business Law",
    description: "Guiding businesses through formation, governance, M&A, and complex commercial transactions.",
    href: "#contact", // Link to contact section
    cta: "Learn More",
    className: "col-span-3 lg:col-span-2", // Spans 2 columns on large screens
    background: <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />, // Subtle gradient hover
  },
  {
    Icon: ShieldCheck,
    name: "Litigation & Dispute Resolution",
    description: "Representing clients vigorously in courtrooms and negotiations to resolve disputes effectively.",
    href: "#contact",
    cta: "Discuss Your Case",
    className: "col-span-3 lg:col-span-1", // Spans 1 column
    background: <motion.div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />,
  },
   {
    Icon: Home,
    name: "Real Estate Law",
    description: "Navigating property transactions, zoning laws, development projects, and leasing agreements.",
    href: "#contact",
    cta: "Explore Services",
    className: "col-span-3 lg:col-span-1", // Spans 1 column
    background: <motion.div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />,
  },
  {
    Icon: Users,
    name: "Family Law",
    description: "Providing compassionate counsel for divorce, custody, support, and prenuptial agreements.",
    href: "#contact",
    cta: "Get Support",
    className: "col-span-3 lg:col-span-2", // Spans 2 columns
    background: <motion.div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />,
  },
   {
    Icon: FileText,
    name: "Estate Planning & Probate",
    description: "Helping individuals and families secure their future with wills, trusts, and probate guidance.",
    href: "#contact",
    cta: "Plan Your Estate",
    className: "col-span-3 lg:col-span-2", // Spans 2 columns
    background: <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />,
   },
   {
    Icon: Briefcase, // Using Briefcase as another option
    name: "Criminal Defense",
    description: "Offering robust defense strategies for individuals facing criminal allegations.",
    href: "#contact",
    cta: "Request Defense",
    className: "col-span-3 lg:col-span-1", // Spans 1 column
    background: <motion.div className="absolute inset-0 bg-gradient-to-bl from-destructive/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />,
   }
];

const PracticeAreasSection: React.FC = () => {
  // Animation variants for the main section container
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0.0, 0.2, 1], // Decelerate easing
        staggerChildren: 0.1, // Stagger children (heading, grid)
      },
    },
  };

   // Variants for the BentoGrid itself
   const gridVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         delay: 0.2, // Start grid animation slightly after heading
         duration: 0.5,
         ease: "easeIn",
       },
     },
   };

  return (
    <motion.section
      id="practice-areas" // Use the correct ID matching nav links
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background dark:from-background dark:via-card/5 dark:to-background" // Soft gradient background
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
         <motion.div
            variants={containerVariants} // Animate heading container
            className="mb-12 md:mb-16 text-center"
        >
             <TextAnimate
                as="h2"
                animation="slideUp"
                by="word"
                duration={0.5}
                delay={0.1}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-primary-foreground tracking-tight mb-4"
            >
               Our Areas of Expertise
            </TextAnimate>
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }} // Fade in after heading
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
             >
                We offer comprehensive legal solutions across a wide range of practice areas to effectively address your needs.
            </motion.p>
        </motion.div>

        {/* Bento Grid for Practice Areas */}
        <motion.div variants={gridVariants}>
            <BentoGrid className="lg:grid-rows-3">
            {practiceAreas.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
            </BentoGrid>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PracticeAreasSection;