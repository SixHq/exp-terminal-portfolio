
import React from 'react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

// SVG Icons obtained previously (trimmed for brevity)
const GamingControllerIcon = () => (
  <svg width="24px" height="24px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-neon-cyan group-hover:text-neon-green transition-colors duration-300"><defs><style>{`.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;}`}</style></defs><path className="a" d="M16.9861,2.8707s-9.3822,7.7707-8.3968,8.4442c1.0033.6856,1.1567.7637,1.1567.7637s5.3528-3.1468,6.7451-3.8435c1.3543-.6777-5.6379,3.7133-5.439,4.2221,5.9226,2.8108,11.0465,7.3515,11.7256,13.12L8.2918,24.7805c4.3234,7.5535,10.0746,11.8029,17.5075,16.49C34.9756,28.6584,33.6754,15.6452,29.5776,2.5c22.2493,5.6021,17.6618,37.8039,2.6186,42.252,2.09-1.5722,5.9434-6.1545,6.7136-9.2515,1.6917-6.04,2.0015-10.8777-1.0558-16.5453.6008,10.9251-6.3979,20.04-11.9952,26.5236.25.2065-11.7509.0194-17.5-7.25A23.8553,23.8553,0,0,1,3.5538,18.9128C4.9581,10.7076,10.2045,4.9494,16.9861,2.8707Z"/><path className="a" d="M20.0715,25.4287c-.1768,1.6889-3.1106,7.1564-4.4078,8.4779"/><path className="a" d="M17.4828,35.4635c1.9661-1.3159,4.9985-7.49,5.2949-9.8859"/><path className="a" d="M21.1609,20.8952c.7406-2.2021.8281-9.5179.3975-10.444,6.0908,3.1586,10.144,11.3873,6.9941,17.0064-.564-3.6759-2.2861-8.2175-4.6318-10.11a43.8794,43.8794,0,0,1-1.143,8.23"/><path className="a" d="M19.1994,22.3962c-.5251-3.0188-3.1585-5.3466-5.9334-6.3184C13.3555,18.9039,16.747,21.7221,19.1994,22.3962Z"/></svg>
);

const HomeIcon = () => (
 <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 495.398 495.398" className="text-neon-cyan group-hover:text-neon-green transition-colors duration-300"> <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/> <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/> </svg>
);

const InfoIcon = () => (
  <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 490.318 490.318" className="text-neon-cyan group-hover:text-neon-green transition-colors duration-300"> <path d="M245.148,0C109.967,0,0.009,109.98,0.009,245.162c0,135.182,109.958,245.156,245.139,245.156 c135.186,0,245.162-109.978,245.162-245.156C490.31,109.98,380.333,0,245.148,0z M245.148,438.415 c-106.555,0-193.234-86.698-193.234-193.253c0-106.555,86.68-193.258,193.234-193.258c106.559,0,193.258,86.703,193.258,193.258 C438.406,351.717,351.706,438.415,245.148,438.415z"/> <path d="M270.036,221.352h-49.771c-8.351,0-15.131,6.78-15.131,15.118v147.566c0,8.352,6.78,15.119,15.131,15.119h49.771 c8.351,0,15.131-6.77,15.131-15.119V236.471C285.167,228.133,278.387,221.352,270.036,221.352z"/> <path d="M245.148,91.168c-24.48,0-44.336,19.855-44.336,44.336c0,24.484,19.855,44.34,44.336,44.34 c24.485,0,44.342-19.855,44.342-44.34C289.489,111.023,269.634,91.168,245.148,91.168z"/> </svg>
);

const UserPlusIcon = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-neon-cyan group-hover:text-neon-green transition-colors duration-300"> <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/> <path opacity="0.5" d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="currentColor" strokeWidth="1.5"/> <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/> <path d="M18 14.6667V17.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16.6665 16L19.3332 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </svg>
);

const CalendarEventIcon = () => (
  <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" id="calendar-event" xmlns="http://www.w3.org/2000/svg" className="text-neon-cyan group-hover:text-neon-green transition-colors duration-300"> <path id="secondary" d="M21,9V19H19v2H4a1,1,0,0,1-1-1V9Z" style={{fill: "var(--neon-cyan)"}}></path> <path id="primary" d="M21,19l-2,2V19ZM20,4H4A1,1,0,0,0,3,5V20a1,1,0,0,0,1,1H19l2-2V5A1,1,0,0,0,20,4Zm0,0H4A1,1,0,0,0,3,5V9H21V5A1,1,0,0,0,20,4ZM17,3V5M12,3V5M7,3V5" style={{fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2}}></path> </svg>
);


const SiteHeader: React.FC = () => {
    return (
        <header className="fixed bottom-10 left-0 right-0 z-50 flex justify-center">
            {/* Use Dock for a modern, interactive header */}
            <Dock
                className="bg-dark-bg/60 backdrop-blur-md border border-neon-cyan/30 shadow-neon-cyan rounded-full px-4 py-2"
                iconSize={36} // Slightly smaller icons
                iconMagnification={50} // Less intense magnification
                iconDistance={100} // Closer trigger distance
            >
                <DockIcon className="group cursor-pointer p-2 rounded-full hover:bg-neon-cyan/10 transition-colors duration-300 hover:shadow-neon-cyan">
                    <a href="#" aria-label="Brand Logo - Gaming Community">
                       <GamingControllerIcon />
                    </a>
                </DockIcon>
                 <DockIcon className="group cursor-pointer p-2 rounded-full hover:bg-neon-cyan/10 transition-colors duration-300 hover:shadow-neon-cyan">
                    <a href="#" aria-label="Home">
                        <HomeIcon />
                    </a>
                 </DockIcon>
                 <DockIcon className="group cursor-pointer p-2 rounded-full hover:bg-neon-cyan/10 transition-colors duration-300 hover:shadow-neon-cyan">
                    <a href="#about" aria-label="About">
                         <InfoIcon />
                    </a>
                 </DockIcon>
                 <DockIcon className="group cursor-pointer p-2 rounded-full hover:bg-neon-cyan/10 transition-colors duration-300 hover:shadow-neon-cyan">
                    <a href="#join" aria-label="Join Community">
                       <UserPlusIcon />
                    </a>
                 </DockIcon>
                 <DockIcon className="group cursor-pointer p-2 rounded-full hover:bg-neon-cyan/10 transition-colors duration-300 hover:shadow-neon-cyan">
                    <a href="#events" aria-label="Events">
                         <CalendarEventIcon />
                    </a>
                 </DockIcon>
            </Dock>
        </header>
    );
};

export default SiteHeader;