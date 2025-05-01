
// src/components/terminal/TerminalCore.tsx
import React, { useState, useRef, useEffect, KeyboardEvent, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from "@/lib/utils";
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { TextAnimate } from '@/components/magicui/text-animate';
import { SparklesText } from '@/components/magicui/sparkles-text';

// --- Interface Definition ---
interface HistoryEntry {
    id: number;
    command: string;
    output: React.ReactNode;
    timestamp: number;
}

// --- Prop type for navigation callback ---
interface TerminalCoreProps {
    onNavigate: (page: string | null) => void; // Callback to change the displayed page
}

// --- Command Functions --- (Modified 'show projects' and 'clear')
const createCommandsList = (
    onNavigate: (page: string | null) => void
): Record<string, (args?: string[]) => React.ReactNode> => ({
    help: () => (
        <div className="text-terminal-cyan">
            Available commands:
            <ul className="list-disc list-inside ml-4">
                <li><span className="text-terminal-amber">help</span>: Show this help message.</li>
                <li><span className="text-terminal-amber">about</span>: Display information about me (in terminal).</li>
                <li><span className="text-terminal-amber">show projects</span>: Display the projects page.</li>
                <li><span className="text-terminal-amber">contact</span>: Show contact information (in terminal).</li>
                <li><span className="text-terminal-amber">clear</span>: Clear the terminal and show initial prompt / current page.</li>
                <li><span className="text-terminal-amber">date</span>: Display the current date and time.</li>
                <li><span className="text-terminal-amber">echo [text]</span>: Print text to the terminal.</li>
                <li><span className="text-terminal-amber">exit</span>: Return to the main terminal view.</li>
            </ul>
        </div>
    ),
    about: () => ( // Kept in-terminal for this example
        <TypingAnimation duration={20} className="text-foreground/90">
            Alex Hartman, a Staff Frontend Sorcerer... (Full bio)
        </TypingAnimation>
    ),
    "show projects": () => { // Command to trigger navigation
        onNavigate('projects'); // Call the navigation callback
        return <TypingAnimation duration={10}>Loading projects page...</TypingAnimation>;
    },
     projects: () => { // Alias for convenience? Or redirect
         onNavigate('projects');
         return <TypingAnimation duration={10}>Loading projects page...</TypingAnimation>;
     },
    contact: () => (
         <TypingAnimation duration={20} className="text-foreground/90">
             You can reach me via:... (Full contact info)
         </TypingAnimation>
    ),
    clear: () => { // 'clear' command needs access to onNavigate to reset the view
         onNavigate(null); // Signal to go back to the main terminal view
         return null; // Output handled directly in handleCommand
     },
     exit: () => { // Command to return to terminal view
         onNavigate(null);
         return <TypingAnimation duration={10}>Returning to terminal...</TypingAnimation>;
     },
    date: () => <TypingAnimation duration={10}>{new Date().toLocaleString()}</TypingAnimation>,
    echo: (args?: string[]) => (
        <TypingAnimation duration={10}>{args?.join(" ") || ""}</TypingAnimation>
    ),
});


// --- Initial Hero Output Component (Same as Section 5) ---
const InitialHeroOutput: React.FC = () => (
    <div className="space-y-3 py-2">
         <BoxReveal boxColor={"hsl(var(--terminal-green))"} duration={0.6}>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-green tracking-wide pb-1">
                 Alex Hartman
             </h1>
         </BoxReveal>
        <TextAnimate as="h2" animation="slideLeft" by="character" delay={0.7} duration={0.05} className="text-lg md:text-xl lg:text-2xl text-terminal-amber font-medium tracking-wider">
            Staff Frontend Sorcerer
        </TextAnimate>
         <div className="pt-3">
             <SparklesText  colors={{ first: "hsl(var(--terminal-cyan))", second: "hsl(var(--terminal-magenta))" }} className="!text-base !md:text-lg !font-normal !text-terminal-cyan tracking-tight" sparklesCount={6} speed={0.8} >Welcome // Interactive Portfolio Experience</SparklesText>
         </div>
        <TypingAnimation as="p" duration={40} delay={2.0} className="text-base text-foreground/80">
            &gt; Type 'help' to initialize command sequence...
        </TypingAnimation>
        <br />
    </div>
);

// --- TerminalCore Component ---
const TerminalCore: React.FC<TerminalCoreProps> = ({ onNavigate }) => { // Accept onNavigate prop
    const [history, setHistory] = useState<HistoryEntry[]>([
        { id: 0, command: '', output: <InitialHeroOutput />, timestamp: Date.now() }
    ]);
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Generate commands list with the passed navigate function
    const commandsList = useMemo(() => createCommandsList(onNavigate), [onNavigate]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    const handleCommand = useCallback((cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase(); // Normalize command

        if (!trimmedCmd && history.length > 1) {
            const lastEntry = history[history.length - 1];
            if(lastEntry.command === '' && !lastEntry.output) {
                setInput('');
                return;
            }
        }

        const [commandName, ...args] = trimmedCmd.split(/\s+/);
        let output: React.ReactNode;
        const timestamp = Date.now();
        const id = timestamp;

        // Handle 'clear' specifically to reset history AND view
        if (commandName === 'clear') {
            setHistory([
                 { id: Date.now(), command: '', output: <InitialHeroOutput />, timestamp: Date.now() }
            ]);
             // onNavigate(null) is called inside the command function now
             commandsList[commandName](); // Execute to trigger navigation reset
            setInput('');
            return;
        }

        // Process other commands
        if (commandsList[commandName]) {
            output = commandsList[commandName](args);
             // Don't add history entry if navigation occurs instantly (handled by parent)
             // Add history entry only if it produces terminal output directly
             if (commandName !== 'show projects' && commandName !== 'projects' && commandName !== 'exit' && commandName !== 'clear') {
                  setHistory(prev => [...prev, { id, command: trimmedCmd, output, timestamp }]);
             } else if (output) { // Add navigation messages like "Loading..."
                setHistory(prev => [...prev, { id, command: trimmedCmd, output, timestamp }]);
             }
        }
        else if (commandName === '') {
             setHistory(prev => [...prev, { id, command: '', output: <span />, timestamp }]);
        }
        else {
            output = (
                <TypingAnimation duration={10} className="text-terminal-red">
                    Command not found: {commandName}. Type 'help' for available commands.
                </TypingAnimation>
            );
             setHistory(prev => [...prev, { id, command: trimmedCmd, output, timestamp }]);
        }

        setInput('');
    }, [history, commandsList]); // Add commandsList dependency

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleCommand(input);
        }
    };

    // --- Render the Terminal --- (Structure remains mostly the same as Section 5)
    return (
         <div
            className="relative w-full h-full bg-terminal-bg/90 backdrop-blur-md text-sm rounded-lg border border-border/40 overflow-hidden font-mono p-4 cursor-text flex flex-col shadow-xl shadow-black/20"
            onClick={handleTerminalClick}
        >
             <div ref={scrollRef} className="flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-terminal-cyan/60 scrollbar-track-transparent mb-2">
                 <AnimatePresence initial={true}>
                     {history.map((entry, index) => (
                         <motion.div
                            key={entry.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, transition: {duration: 0.1} }}
                            transition={{
                                duration: index === 0 ? 0 : 0.3,
                                delay: index === 0 ? 0 : (entry.command !== '' ? 0.05 : 0)
                            }}
                            className="mb-2"
                         >
                             {entry.command && (
                                 <div className="flex items-center">
                                     <span className="text-terminal-green">~/portfolio $</span>
                                     <span className="ml-2 text-foreground flex-1 break-words">{entry.command}</span>
                                 </div>
                             )}
                             <div className={cn(
                                 "mt-1",
                                 index === 0 ? "" : "pl-1",
                                 !entry.command && index > 0 && !entry.output ? "h-0 overflow-hidden" : ""
                                 )}>
                                 {entry.output}
                             </div>
                         </motion.div>
                     ))}
                 </AnimatePresence>
                 <div className="h-2"></div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: history.length === 1 ? 2.8 : 0.1 }} // Faster delay if not initial load
                className="flex items-center mt-auto pt-2 border-t border-border/30"
            >
                <span className="text-terminal-green shrink-0">~/portfolio $</span>
                <input
                    ref={inputRef} type="text" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown}
                    className="flex-1 ml-2 bg-transparent border-none outline-none text-foreground placeholder-muted-foreground/60 caret-terminal-amber text-base"
                    placeholder="Enter command..." spellCheck="false" autoComplete="off" aria-label="Terminal input"
                />
                <span className="inline-block w-2 h-4 bg-terminal-amber ml-1 animate-blink"></span>
            </motion.div>
              {/* Style block remains the same */}
             <style >{`
                @keyframes blink-animation { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                .animate-blink { animation: blink-animation 1s step-end infinite; }
                .scrollbar-thin { scrollbar-width: thin; scrollbar-color: hsl(var(--terminal-cyan) / 0.6) transparent; }
                .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
                .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-thin::-webkit-scrollbar-thumb { background-color: hsl(var(--terminal-cyan) / 0.6); border-radius: 3px; border: 1px solid transparent; }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover { background-color: hsl(var(--terminal-cyan) / 0.8); }
             `}</style>
        </div>
    );
};

export default TerminalCore; // Make sure to export