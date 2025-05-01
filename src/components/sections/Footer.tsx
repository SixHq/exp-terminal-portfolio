
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { GithubIcon, TwitterIcon, LinkedinIcon, DevModeLogoSVG } from "@/components/icons/SocialIcons"; // Import icons

interface FooterLink {
  label: string;
  href: string;
}

interface LinkCategory {
  title: string;
  links: FooterLink[];
}

const linkCategories: LinkCategory[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it Works", href: "#walkthrough" },
      { label: "Pricing", href: "#" }, // Placeholder href
      { label: "Integrations", href: "#developer-tools" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Developers", href: "#" },
      { label: "Designers", href: "#" },
      { label: "Teams", href: "#team-workflow" },
      { label: "Agencies", href: "#" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Getting Started", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Guides", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "#" }, // Placeholder href
      { label: "Twitter", href: "#" }, // Placeholder href
      { label: "Discord", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com" }, // Placeholder
  { label: "Twitter", icon: TwitterIcon, href: "https://twitter.com" }, // Placeholder
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" }, // Placeholder
];

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
      variants={footerVariants}
      className={cn(
        "relative w-full overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12",
        "bg-rich-black text-neutral-off-white/70" // Rich black background, light text
      )}
    >
      {/* Background Grid Pattern */}
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]",
          "absolute inset-0 z-0 h-full w-full fill-neutral-off-white/5 stroke-neutral-off-white/10"
        )}
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Top section: Logo and Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12 md:mb-16">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="#" className="inline-flex items-center space-x-2 mb-4">
              <DevModeLogoSVG />
              <span className="text-xl font-bold text-neutral-off-white">DevMode</span>
            </a>
            <p className="text-sm">Visualize. Inspect. Code.</p>
          </div>

          {/* Link Categories */}
          {linkCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-off-white mb-4">
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm hover:text-neutral-off-white hover:opacity-100 transition-opacity duration-200",
                        "opacity-70" // Default opacity for links
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section: Copyright and Socials */}
        <div className="border-t border-neutral-off-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} DevMode Inc. All rights reserved.
          </p>
          <div className="flex space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-neutral-off-white/70 hover:text-neutral-off-white hover:scale-110 transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
