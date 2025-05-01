
import React from 'react';
import { cn } from "@/lib/utils";

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

// Placeholder SVG for Visual Mode
export const VisualModeSVG: React.FC<SVGProps> = (props) => (
  <svg
    viewBox="0 0 200 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-full h-auto text-deep-plum dark:text-light-lavender", props.className)}
    {...props}
  >
    <rect width="200" height="150" rx="8" fill="currentColor" fillOpacity="0.1"/>
    <rect x="15" y="15" width="170" height="25" rx="4" fill="currentColor" fillOpacity="0.3"/>
    <rect x="15" y="50" width="80" height="70" rx="4" fill="currentColor" fillOpacity="0.5"/>
    <rect x="105" y="50" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.4"/>
    <rect x="105" y="90" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.4"/>
    <line x1="100" y1="0" x2="100" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3"/>
     {/* Simple UI elements */}
  </svg>
);

// SVG obtained from the tool for Code Mode
export const CodeModeSVG: React.FC<SVGProps> = (props) => (
  <svg
      width="100%"
      height="100%"
      viewBox="0 0 150 150" // Adjusted viewBox for consistency
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cn("w-full h-auto text-electric-blue dark:text-bright-orange", props.className)}
      {...props}
  >
    <style type="text/css">{`
      .st0{fill:currentColor; fill-opacity: 0.8;}
      .st1{fill:currentColor; fill-opacity: 0.6;}
      .st2{fill:currentColor; fill-opacity: 0.4;}
      .st3{fill:currentColor; fill-opacity: 0.2;}

      /* Code-like lines */
      .line1{fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:10; stroke-opacity: 0.7;}
      .line2{fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:10; stroke-opacity: 0.5;}

    `}</style>
      <rect width="150" height="150" rx="8" fill="currentColor" fillOpacity="0.1"/>
       {/* Representing code structure */}
      <rect x="15" y="20" width="120" height="10" rx="2" className="st0"/>
      <rect x="15" y="40" width="90" height="8" rx="2" className="st1"/>
      <rect x="30" y="60" width="105" height="8" rx="2" className="st2"/>
      <rect x="30" y="80" width="75" height="8" rx="2" className="st3"/>
      <rect x="15" y="100" width="120" height="10" rx="2" className="st0"/>
      <rect x="15" y="120" width="60" height="8" rx="2" className="st1"/>

      <line x1="15" y1="5" x2="15" y2="145" className="line1"/>
      <line x1="25" y1="5" x2="25" y2="145" className="line2"/>
  </svg>

);

// Placeholder SVG for Layers Mode
export const LayersModeSVG: React.FC<SVGProps> = (props) => (
   <svg
    viewBox="0 0 200 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-full h-auto text-lime-green dark:text-soft-pink", props.className)}
    {...props}
  >
    <rect width="200" height="150" rx="8" fill="currentColor" fillOpacity="0.1"/>
    {/* Stacked rectangles simulating layers */}
    <rect x="15" y="15" width="170" height="120" rx="6" fill="currentColor" fillOpacity="0.2"/>
    <rect x="25" y="25" width="150" height="100" rx="5" fill="currentColor" fillOpacity="0.3"/>
    <rect x="35" y="35" width="130" height="80" rx="4" fill="currentColor" fillOpacity="0.4"/>
    <rect x="45" y="45" width="110" height="60" rx="3" fill="currentColor" fillOpacity="0.5"/>

     {/* Lines indicating hierarchy/layers */}
    <line x1="10" y1="75" x2="45" y2="75" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
    <line x1="155" y1="75" x2="190" y2="75" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
   </svg>
);