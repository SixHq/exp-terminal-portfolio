
import React from 'react';
import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TextReveal } from '@/components/magicui/text-reveal'; // Import TextReveal for bio
import { cn } from "@/lib/utils"; // Ensure cn is imported

const Sidebar = () => {
    // Use the fetched avatar URL
    const userInfo = {
        name: "Alex Hartman", // Example Name
        title: "Staff Frontend Sorcerer", // Example Title
        avatarUrl: "https://images.pexels.com/photos/7552313/pexels-photo-7552313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched URL
        bio: "Forging visually stunning and performant web interfaces from the command line. Expertise in TypeScript, React, Tailwind, and breathing life into pixels with Magic UI.", // Updated bio
    };

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/your-username", // Replace with actual URL
            Icon: () => (
                <svg className="w-5 h-5 fill-current" viewBox="0 -3 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/your-username", // Replace with actual URL
            Icon: () => (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 21.903 21.903" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.67,1.211c0.682,0,1.216,0.215,1.604,0.643S4.87,2.822,4.898,3.469c0,0.639-0.218,1.178-0.657,1.616C3.802,5.522,3.202,5.741,2.443,5.741H2.416c-0.741,0-1.328-0.219-1.765-0.656C0.219,4.647,0,4.108,0,3.469c0-0.657,0.238-1.197,0.718-1.622C1.198,1.423,1.85,1.211,2.67,1.211z M0.287,7.535H4.97v13.156H0.287V7.535z M21.903,13.148v7.543h-4.682v-7.036c0-0.895-0.184-1.612-0.55-2.158c-0.364-0.541-0.973-0.812-1.833-0.812c-0.655,0-1.181,0.166-1.573,0.5c-0.393,0.332-0.678,0.699-0.85,1.102c-0.056,0.146-0.091,0.307-0.11,0.486c-0.018,0.176-0.026,0.367-0.026,0.568v7.351H7.568c0.02-2.226,0.031-4.268,0.031-6.12v-2.339v-2.125c0-0.647-0.007-1.199-0.018-1.657C7.575,7.997,7.568,7.69,7.568,7.535h4.711v1.863l-0.026,0.054h0.026V9.398c0.146-0.229,0.333-0.468,0.561-0.719c0.231-0.25,0.507-0.484,0.843-0.7c0.333-0.214,0.734-0.39,1.204-0.533c0.473-0.141,1.011-0.211,1.624-0.211c0.762,0,1.474,0.116,2.138,0.349c0.662,0.233,1.231,0.598,1.715,1.096c0.481,0.495,0.858,1.111,1.132,1.847C21.769,11.261,21.903,12.135,21.903,13.148z"/>
                </svg>
            ),
        },
        {
            name: "X (Twitter)",
            url: "https://x.com/your-username", // Replace with actual URL
            Icon: () => (
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99962 9L14.9996 14M14.9996 9L9.99962 14M12.4996 20C17.194 20 20.9996 16.1944 20.9996 11.5C20.9996 6.80558 17.194 3 12.4996 3C7.8052 3 3.99962 6.80558 3.99962 11.5C3.99962 12.45 4.15547 13.3636 4.443 14.2166C4.55119 14.5376 4.60529 14.6981 4.61505 14.8214C4.62469 14.9432 4.6174 15.0286 4.58728 15.1469C4.55677 15.2668 4.48942 15.3915 4.35472 15.6408L2.71906 18.6684C2.48575 19.1002 2.36909 19.3161 2.3952 19.4828C2.41794 19.6279 2.50337 19.7557 2.6288 19.8322C2.7728 19.9201 3.01692 19.8948 3.50517 19.8444L8.62619 19.315C8.78127 19.299 8.85881 19.291 8.92949 19.2937C8.999 19.2963 9.04807 19.3029 9.11586 19.3185C9.18478 19.3344 9.27145 19.3678 9.44478 19.4345C10.3928 19.7998 11.4228 20 12.4996 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: "Email",
            url: "mailto:your.email@example.com", // Replace with actual email
            Icon: () => (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M341.3,32.7V113l90.3,90.3l-90.3,90.3V374L512,203.3L341.3,32.7z M391.5,203.3L220.9,32.7v106.6C-8.2,177.6,0,383.5,0,474.4 c55.9-159.6,124.5-192.3,220.8-199V374L391.5,203.3z"/>
                </svg>
            ),
        },
    ];

    return (
        <motion.aside
            initial={{ opacity: 0, x: -70 }} // Slightly more pronounced slide-in
            animate={{ opacity: 1, x: 0 }}
            className={cn(
                "fixed top-0 left-0 h-screen w-72 flex-shrink-0", // Fixed position, full height
                "bg-background border-r border-border/50", // Use border with opacity
                "p-6 flex flex-col font-sans z-20" // Ensure it's above the grid (z-10) and main content (z-10)
            )}
        >
            {/* User Info Section */}
            <div className="flex flex-col items-center mb-8 text-center">
                 {/* Added motion for subtle scale-in */}
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1}}>
                    <Avatar className="w-28 h-28 mb-4 border-4 border-terminal-cyan shadow-lg"> {/* Larger Avatar, different accent border */}
                        <AvatarImage src={userInfo.avatarUrl} alt={userInfo.name} />
                        <AvatarFallback className="text-terminal-bg font-bold text-2xl">
                            {userInfo.name.split(' ').map(n => n[0]).join('')} {/* Initials */}
                        </AvatarFallback>
                    </Avatar>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    
                    className="text-2xl font-semibold text-terminal-green mt-2"
                >
                    {userInfo.name}
                </motion.h1>
                <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-terminal-amber mt-1 tracking-wide"
                >
                    {userInfo.title}
                </motion.p>
            </div>

            {/* About Me Section */}
            <div className="mb-8">
                <motion.h2
                    className="text-lg font-medium text-terminal-magenta mb-3 border-b border-terminal-magenta/30 pb-1"
                >
                    ~/About
                </motion.h2>
                {/* Using TextReveal for a cool effect */}
                    {userInfo.bio}
            </div>

            {/* Connect Section */}
            <div className="mb-8">
                <motion.h2
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                    className="text-lg font-medium text-terminal-blue mb-4 border-b border-terminal-blue/30 pb-1"
                >
                    ~/Connect
                </motion.h2>
                <ul className="space-y-3">
                    {socialLinks.map(({ name, url, Icon }, index) => (
                        <motion.li
                            key={name}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-foreground/80 group transition-all duration-300 ease-out hover:text-terminal-green hover:pl-1" // Subtle hover indent
                            >
                                {/* Icon with hover effect */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5, color: "hsl(var(--terminal-green))" }}
                                    className="text-terminal-magenta transition-colors duration-300" // Use magenta as base icon color
                                >
                                    <Icon />
                                </motion.div>
                                <span className="text-sm font-medium group-hover:tracking-wider transition-all duration-300">{name}</span>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-auto text-center text-xs text-muted-foreground/60"
            >
                <p>&copy; {new Date().getFullYear()} {userInfo.name}.</p>
                <p>Powered by <span className="text-terminal-cyan">Magic UI</span> & <span className="text-terminal-amber">Shadcn</span>.</p>
            </motion.div>
        </motion.aside>
    );
};

export default Sidebar;