
import React from "react";
import { motion } from "motion/react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Define SVG Icons as React Components (using fetched SVGs)
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 495.398 495.398"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" />
      <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" />
    </g>
  </svg>
);

const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 10V16M12 16L10 14M12 16L14 14M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 49.336 49.336"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g id="_x31_0_11_">
        <g>
          <path d="M13.411,20.815c0.02,0.291,0.064,0.575,0.137,0.85c-0.337,0.286-1.011,0.857-1.011,0.857v1.237l1.753,2.07
				c0,0,1.02,0.121,1.074,0.091c0.054-0.029,0.164-0.091,0.164-0.091s0.641-0.542,0.961-0.813c0.271,0.121,0.552,0.223,0.845,0.301
				c0.033,0.365,0.1,1.092,0.1,1.092l0.875,0.875l2.699-0.246l0.875-0.875c0,0-0.085-0.938-0.127-1.406
				c0.221-0.127,0.433-0.265,0.632-0.418c0.352,0.203,1.054,0.609,1.054,0.609l1.197-0.314l1.358-2.348l-0.313-1.197
				c0,0-0.905-0.523-1.356-0.785c-0.012-0.261-0.04-0.518-0.094-0.768c0.358-0.307,1.076-0.921,1.076-0.921v-1.237l-1.768-2.06
				h-1.238c0,0-0.587,0.503-0.88,0.754c-0.318-0.155-0.654-0.281-1.006-0.376c-0.028-0.349-0.085-1.048-0.085-1.048l-0.875-0.875
				l-2.703,0.22l-0.875,0.875c0,0,0.074,0.917,0.11,1.376c-0.265,0.151-0.515,0.321-0.747,0.51c-0.38-0.174-1.142-0.522-1.142-0.522
				l-1.197,0.314l-1.132,2.468l-0.04,0.167l0.354,1.03C12.086,20.21,12.969,20.614,13.411,20.815z M18.719,17.799
				c1.508,0,2.729,1.222,2.729,2.729c0,1.507-1.222,2.729-2.729,2.729c-1.507,0-2.729-1.222-2.729-2.729
				C15.99,19.021,17.212,17.799,18.719,17.799z" />
          <path d="M27.355,24.406c0.008,0.129,0.027,0.256,0.061,0.378c-0.15,0.127-0.45,0.381-0.45,0.381v0.55l0.78,0.921
				c0,0,0.454,0.054,0.479,0.041c0.023-0.014,0.072-0.041,0.072-0.041s0.285-0.241,0.428-0.362c0.12,0.055,0.245,0.1,0.377,0.135
				c0.015,0.162,0.043,0.486,0.043,0.486l0.391,0.389l1.201-0.109l0.389-0.39c0,0-0.037-0.417-0.057-0.625
				c0.099-0.058,0.192-0.118,0.281-0.187c0.155,0.09,0.469,0.271,0.469,0.271l0.533-0.141l0.604-1.045l-0.141-0.531
				c0,0-0.402-0.233-0.604-0.35c-0.005-0.116-0.019-0.229-0.041-0.342c0.159-0.137,0.478-0.41,0.478-0.41v-0.55l-0.785-0.917h-0.551
				c0,0-0.262,0.224-0.392,0.335c-0.142-0.069-0.291-0.125-0.448-0.167c-0.012-0.155-0.037-0.466-0.037-0.466l-0.39-0.389
				l-1.202,0.098l-0.39,0.389c0,0,0.032,0.408,0.049,0.613c-0.117,0.067-0.229,0.143-0.332,0.227
				c-0.169-0.078-0.508-0.232-0.508-0.232l-0.533,0.14l-0.503,1.098l-0.02,0.074l0.158,0.458
				C26.766,24.137,27.156,24.316,27.355,24.406z M29.716,23.064c0.671,0,1.214,0.543,1.214,1.214c0,0.67-0.543,1.214-1.214,1.214
				s-1.214-0.543-1.214-1.214C28.502,23.607,29.045,23.064,29.716,23.064z" />
          <path d="M32.881,18.644c0.012,0.16,0.035,0.317,0.075,0.469c-0.187,0.158-0.558,0.473-0.558,0.473v0.682l0.967,1.141
				c0,0,0.562,0.066,0.592,0.05c0.029-0.017,0.091-0.05,0.091-0.05s0.354-0.299,0.53-0.448c0.148,0.066,0.304,0.123,0.466,0.166
				c0.019,0.201,0.054,0.602,0.054,0.602l0.483,0.482l1.487-0.136l0.481-0.482c0,0-0.046-0.517-0.069-0.775
				c0.123-0.07,0.239-0.146,0.349-0.23c0.194,0.112,0.581,0.336,0.581,0.336l0.66-0.173l0.75-1.295l-0.174-0.659
				c0,0-0.5-0.289-0.748-0.433c-0.008-0.144-0.022-0.286-0.051-0.424c0.196-0.169,0.592-0.508,0.592-0.508V16.75l-0.975-1.136
				h-0.684c0,0-0.323,0.277-0.484,0.416c-0.175-0.085-0.359-0.155-0.555-0.208c-0.016-0.192-0.047-0.578-0.047-0.578l-0.482-0.482
				l-1.488,0.121l-0.483,0.482c0,0,0.04,0.506,0.061,0.76c-0.146,0.083-0.282,0.177-0.411,0.281c-0.209-0.096-0.63-0.288-0.63-0.288
				l-0.659,0.173l-0.623,1.361l-0.023,0.092l0.195,0.567C32.15,18.31,32.637,18.533,32.881,18.644z M35.809,16.981
				c0.83,0,1.504,0.673,1.504,1.505c0,0.831-0.674,1.504-1.504,1.504c-0.832,0-1.506-0.673-1.506-1.504
				C34.303,17.654,34.977,16.981,35.809,16.981z" />
          <path d="M0,4.301v32.532h17.69v6.698h13.349v-6.698h18.297V4.301H0z M44.336,31.833H5V9.301h39.336V31.833z" />
          <rect x="10.503" y="43.658" width="27.724" height="1.377" />
        </g>
      </g>
    </g>
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M291.1,147.9V41.3L120.5,212l170.7,170.7V284c96.4,6.7,165,39.4,220.8,199C512,392.2,520.2,186.3,291.1,147.9z M170.7,121.6
	V41.3L0,212l170.7,170.7v-80.3L80.3,212L170.7,121.6z" />
  </svg>
);

const navItems = [
  { href: "#home", label: "Home", icon: <HomeIcon className="size-5 text-foreground/80 group-hover:text-accent transition-colors duration-200" /> },
  { href: "#projects", label: "Projects", icon: <FolderIcon className="size-5 text-foreground/80 group-hover:text-accent transition-colors duration-200" /> },
  { href: "#skills", label: "Skills", icon: <SettingsIcon className="size-5 text-foreground/80 group-hover:text-accent transition-colors duration-200" /> },
  { href: "#contact", label: "Contact", icon: <MailIcon className="size-5 text-foreground/80 group-hover:text-accent transition-colors duration-200" /> },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="relative">
        <BorderBeam
            size={80}
            duration={6}
            delay={0}
            colorFrom="hsl(var(--accent))"
            colorTo="hsl(var(--primary))"
            className="absolute inset-0 rounded-xl" // Apply to wrapper div
         />
        <Dock
          direction="bottom"
          className={cn(
            "relative z-10 flex items-center justify-center space-x-2 rounded-xl border border-transparent bg-background/50 p-2 shadow-lg backdrop-blur-lg", // Base dock styling
            "dark:border-white/10 dark:bg-black/30", // Dark mode specific
          )}
        >
          {navItems.map((item) => (
            <DockIcon key={item.href} className="group">
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                             <a href={item.href} className="p-2 rounded-full hover:bg-accent/10 transition-colors duration-200">
                                {item.icon}
                            </a>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-md bg-background/90 text-foreground border border-border backdrop-blur-sm">
                            <p className="text-xs font-semibold">{item.label}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </motion.header>
  );
}