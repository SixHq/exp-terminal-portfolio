
import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Footer from './components/layout/Footer'; // Import the Footer component
import { RetroGrid } from '@/components/magicui/retro-grid';
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { cn } from "@/lib/utils";
import Head from './components/head/head';

function App() {
  return (
    <div className={cn(
        "relative min-h-screen bg-background text-foreground font-mono",
        "overflow-x-hidden" // Prevent horizontal overflow
        )}>
      {/* Background Grid */}
      <RetroGrid />
      <RetroGrid className="fixed inset-0 z-0 opacity-15" />

      {/* Smooth Cursor */}
      <SmoothCursor
          cursor={<div className="w-3 h-3 rounded-full bg-terminal-green mix-blend-difference pointer-events-none" />}
        
       />

      {/* Main Layout (contains Sidebar and MainContent) */}
      {/* z-10 ensures layout is above the grid */}
      <div className="relative z-10">
        <MainLayout />
      </div>

      {/* Footer Component */}
      {/* z-20 ensures footer is above grid and potentially content, aligns with sidebar z-index */}


    </div>
  );
}

export default App;
