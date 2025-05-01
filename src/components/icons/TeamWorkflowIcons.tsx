
import React from 'react';
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // Add any specific props if needed
}

// Abstract Developer Avatar SVG
export const DeveloperAvatarSVG: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="2" />
    {/* Code-like symbol */}
    <polyline points="18 22 15 25 18 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="32 22 35 25 32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="26" y1="18" x2="24" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Abstract Designer Avatar SVG
export const DesignerAvatarSVG: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="2" />
    {/* Abstract shapes - pencil/brush like */}
    <path d="M18 18 L32 32 M32 18 L18 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="25" cy="25" r="4" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// Abstract Product Manager Avatar SVG
export const ProductManagerAvatarSVG: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="2" />
    {/* Abstract graph/connection like */}
    <path d="M15 30 Q 25 15, 35 30 T 15 30" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="15" cy="30" r="3" fill="currentColor" />
    <circle cx="35" cy="30" r="3" fill="currentColor" />
     <circle cx="25" cy="18" r="3" fill="currentColor" />
  </svg>
);

// Abstract Shared Workspace/Collaboration SVG
export const CollaborationSVG: React.FC<IconProps> = (props) => (
   <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="10" y="10" width="60" height="60" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="currentColor" fillOpacity="0.1"/>
    {/* Intersecting Shapes */}
    <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <rect x="35" y="35" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3"/>
    <line x1="42" y1="42" x2="58" y2="58" stroke="currentColor" strokeWidth="1.5"/>
     <line x1="42" y1="58" x2="58" y2="42" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);