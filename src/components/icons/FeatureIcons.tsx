
import React from 'react';
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // Add any specific props if needed
}

export const LiveCodePreviewIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-8 h-8 text-electric-blue", props.className)} // Example accent color
    {...props}
  >
    {/* Simple representation: Split rectangle */}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="18" y1="6" x2="6" y2="18" strokeDasharray="2 2" /> {/* Subtle divider */}
  </svg>
);

export const ComponentBreakdownIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-8 h-8 text-lime-green", props.className)} // Example accent color
    {...props}
  >
    {/* Simple representation: Stacked blocks/layers */}
    <rect x="3" y="3" width="18" height="6" rx="1" />
    <rect x="5" y="11" width="14" height="6" rx="1" />
    <rect x="7" y="19" width="10" height="2" rx="1" />
  </svg>
);

export const InstantCopyPasteIcon: React.FC<IconProps> = (props) => (
 <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-8 h-8 text-bright-orange", props.className)} // Example accent color
    {...props}
  >
    {/* Simple representation: Overlapping documents */}
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
