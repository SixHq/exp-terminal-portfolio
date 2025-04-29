
import * as React from "react"

import { cn } from "@/lib/utils" // Ensure path is correct

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base Styles
          "flex h-10 w-full rounded-md border-2 bg-background/90 px-4 py-2 text-sm", // Use more padding, slightly more opaque bg
          "border-input/80", // Use --input variable (dark grayish blue) for default border, slightly transparent
          "text-foreground placeholder:text-muted-foreground/70", // Ensure text and placeholder contrast, muted placeholder
          "transition-all duration-250 ease-out", // Slightly faster transition

          // --- Neon Focus and Interaction Styles ---
          "focus-visible:outline-none", // Remove default outline
          // Apply neon ring (using --ring = neon-blue by default), make it slightly thicker offset
          "focus-visible:ring-2 focus-visible:ring-ring/90 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          // Change border color on focus to match ring, make it solid
          "focus-visible:border-ring",
          // Add subtle glow on focus using box-shadow (matches primary color)
          "focus-visible:shadow-[0_0_10px_theme(colors.neon-blue/0.6)]",

          // --- Hover State ---
          // Slightly brighten border on hover when not focused
          "hover:border-input", // Use the solid default border color on hover

          // --- Disabled State ---
          "disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-background/50", // Slightly different disabled style

          // Combine with any passed className
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }