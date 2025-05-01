
import React from 'react';
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

// Code Snippet Icon (Using a more standard code icon representation)
export const CodeSnippetIcon: React.FC<IconProps> = (props) => (
    <svg
        width="48px" // Adjusted size for consistency within cards
        height="48px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("text-electric-blue dark:text-sky-400", props.className)} // Assign color via className
        {...props}
    >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
   </svg>
);


// Git Integration Icon
export const GitIcon: React.FC<IconProps> = (props) => (
    <svg
        width="48px" // Adjusted size
        height="48px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("text-lime-green dark:text-green-400", props.className)} // Assign color via className
        {...props}
    >
        <defs><style>{`.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;}`}</style></defs>
        {/* Simplified Git icon representation for consistency */}
        <circle className="a" cx="12" cy="12" r="3"/>
        <circle className="a" cx="12" cy="36" r="3"/>
        <circle className="a" cx="36" cy="24" r="3"/>
        <line className="a" x1="12" y1="15" x2="12" y2="33"/>
        <path className="a" d="M12,33a11.9,11.9,0,0,0,11.85,10H33a3,3,0,0,0,3-3V27"/>
    </svg>
);

// Export Options Icon
export const ExportIcon: React.FC<IconProps> = (props) => (
    <svg
        fill="none" // Use stroke based for line art style
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="48px" // Adjusted size
        height="48px"
        viewBox="0 0 24 24" // Simpler viewBox
        xmlns="http://www.w3.org/2000/svg"
        className={cn("text-bright-orange dark:text-orange-400", props.className)} // Assign color via className
        {...props}
    >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
);