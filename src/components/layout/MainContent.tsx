
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TerminalCore from '@/components/terminal/TerminalCore';
import ProjectsPage from '@/components/content/ProjectsPage';
import { cn } from "@/lib/utils";

const MainContent = () => {
    const [currentPage, setCurrentPage] = useState<string | null>(null);

    const handleNavigate = (page: string | null) => {
        setCurrentPage(page);
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className={cn(
                "relative h-screen", // Occupy full screen height
                "p-4 md:p-6",       // Existing padding
                "pb-14 md:pb-16", // Add bottom padding (h-10 + extra space)
                "bg-transparent overflow-hidden" // Allow content inside to scroll
            )}
        >
            {/* AnimatePresence for view transitions */}
            <AnimatePresence mode="wait">
                {currentPage === 'projects' ? (
                     <motion.div
                         key="projects-page"
                         initial={{ opacity: 0, scale: 0.98, y: 20 }}
                         animate={{ opacity: 1, scale: 1, y: 0 }}
                         exit={{ opacity: 0, scale: 0.98, y: -20 }}
                         transition={{ duration: 0.4, ease: "easeInOut" }}
                         // Ensure this div takes full height *within the padded parent* and scrolls
                         className="h-full w-full absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-cyan/60 scrollbar-track-transparent"
                     >
                         {/* Apply padding *inside* the scrollable container if needed, or rely on parent padding */}
                         <div className="p-4 md:p-6 pt-0"> {/* Example inner padding adjustment */}
                           <ProjectsPage />
                         </div>
                     </motion.div>
                ) : (
                    <motion.div
                        key="terminal-core"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                         transition={{ duration: 0.3, ease: "easeInOut" }}
                         // Terminal itself handles internal scrolling, ensure it fills the available space
                         className="h-full w-full absolute inset-0"
                    >
                        <TerminalCore onNavigate={handleNavigate} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.main>
    );
};

export default MainContent;