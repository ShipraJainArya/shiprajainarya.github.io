"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Dosis, Playfair_Display } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

type NavbarProps = {
  onNavClick?: (section: string) => void;
  hideOnScroll?: boolean;
  forceTheme?: 'godrej' | null;
};

export default function Navbar({ onNavClick, hideOnScroll = false, forceTheme = null }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  // Handle scroll for dynamic background color and scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track Scroll Direction for Hide-On-Scroll Logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
      }
      lastScrollY = currentScrollY;

      // Determine what section is currently taking up the majority of the viewport
      const offset = 180;
      const scrollPosition = currentScrollY + offset;

      const sections = ['home', 'agreements', 'about', 'testimonials', 'contact'];
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (element.offsetTop <= scrollPosition) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
    { name: "Godrej Infinity", href: "/godrej-infinity" },
  ];

  // Dynamic styling based on current scroll position
  const isTop = typeof window !== 'undefined' && window.scrollY < 20 && activeSection === "home" && !forceTheme;

  // Adjusted opacity constraints to act as an opaque, confident block of color
  const getNavTheme = () => {
    if (forceTheme === 'godrej') {
      return "py-4 bg-[#e1c08d]/90 backdrop-blur-md text-[#2e2119] shadow-[0_4px_25px_rgba(46,33,25,0.08)]";
    }

    if (isTop) {
      return "py-5 bg-transparent border-transparent text-[#2e2119]";
    }

    switch (activeSection) {
      case "home":
        return "py-4 bg-[#ecdac0]/90 backdrop-blur-md text-[#2e2119] shadow-[0_4px_25px_rgba(46,33,25,0.08)]";
      case "agreements":
        return "py-4 bg-[#e1c08d]/90 backdrop-blur-md text-[#2e2119] shadow-[0_4px_25px_rgba(46,33,25,0.08)]";
      case "about": // HomeServices uses #1c1410 
        return "py-4 bg-[#1c1410]/95 backdrop-blur-md text-[#f5eee3] shadow-[0_4px_25px_rgba(28,20,16,0.3)]";
      case "testimonials": // Testimonials bg is #e1c08d
        return "py-4 bg-[#e1c08d]/90 backdrop-blur-md text-[#2e2119] shadow-[0_4px_25px_rgba(46,33,25,0.08)]";
      case "contact": // ContactUs bg is #1c1410
        return "py-4 bg-[#1c1410]/95 backdrop-blur-md text-[#f5eee3] shadow-[0_4px_25px_rgba(28,20,16,0.3)]";
      default:
        return "py-4 bg-[#1c1410]/95 backdrop-blur-md text-[#f5eee3] shadow-md";
    }
  };

  const getHoverColor = () => {
    if (forceTheme === 'godrej') return "hover:text-[#6a4220]";
    if (isTop) return "hover:text-[#805a38]";

    switch (activeSection) {
      case "home": return "hover:text-[#805a38]";
      case "agreements": return "hover:text-[#6a4220]";
      case "about": return "hover:text-[#f5c75b]";
      case "testimonials": return "hover:text-[#6a4220]";
      case "contact": return "hover:text-[#f5c75b]";
      default: return "hover:text-[#f5c75b]";
    }
  };

  const getUnderlineColor = () => {
    if (forceTheme === 'godrej') return "bg-[#ffffff]";
    if (isTop) return "bg-[#805a38]";

    switch (activeSection) {
      case "home": return "bg-[#805a38]";
      case "agreements": return "bg-[#ffffff]";
      case "about": return "bg-[#f5c75b]";
      case "testimonials": return "bg-[#ffffff]";
      case "contact": return "bg-[#f5c75b]";
      default: return "bg-[#f5c75b]";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hideOnScroll && isScrollingDown ? -100 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`${dosis.className} fixed top-0 w-full z-50 transition-colors duration-500 ${getNavTheme()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Font using Playfair Display for premium luxury real estate aesthetic */}
          <Link
            href="/"
            className={`${playfair.className} text-[2rem] md:text-4xl lg:text-[2.75rem] font-[800] tracking-tight transition-colors duration-300 ${getHoverColor()}`}
          >
            Shipra Realtors
          </Link>

          {/* Desktop Menu Font Styles heavily refined for readability and executive premium feel */}
          <div className="hidden md:flex space-x-10 text-xl lg:text-[1.3rem] font-[700] tracking-wide items-center uppercase text-[0.9em]">
            {navLinks.map((link) => {
              // Grouped logic to give ALL links the same active underline animation
              const isActive = link.href === `/#${activeSection}` || (link.href === '/' && activeSection === 'home') || (link.href === '/#about' && activeSection === 'agreements');
              return (
                <div key={link.name} className="relative group flex flex-col items-center justify-center">
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className={`transition-colors duration-300 opacity-90 group-hover:opacity-100 ${getHoverColor()}`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`transition-colors duration-300 opacity-90 group-hover:opacity-100 ${getHoverColor()}`}
                    >
                      {link.name}
                    </Link>
                  )}
                  {/* The Underline Animation applied consistently to all links */}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2.5px] ${getUnderlineColor()} transition-all duration-300 
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className={`transition-colors duration-300 ${getHoverColor()}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown - Translucent section-matched backgrounds */}
      {isOpen && (
        <div className={`md:hidden absolute w-full left-0 top-full shadow-2xl backdrop-blur-xl transition-all duration-300 py-4 px-6 pb-6 space-y-4 text-xl font-[700] tracking-wide uppercase
          ${(activeSection === 'home') ? 'bg-[#ecdac0]/95 border-t border-[#805a38]/20 text-[#2e2119]' :
            (activeSection === 'agreements' || activeSection === 'testimonials') ? 'bg-[#e1c08d]/95 border-t border-[#6a4220]/20 text-[#2e2119]' :
              'bg-[#1c1410]/95 border-t border-[#f5c75b]/20 text-[#f5eee3]'}`
        }>
          {navLinks.map((link) => (
            <div key={link.name} className="relative block group w-max mb-1">
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:pl-2 transition-all duration-300 opacity-90 group-hover:opacity-100 ${(activeSection === 'home' || activeSection === 'agreements' || activeSection === 'testimonials') ? 'hover:text-[#6a4220]' : 'hover:text-[#f5c75b]'}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:pl-2 transition-all duration-300 opacity-90 group-hover:opacity-100 ${(activeSection === 'home' || activeSection === 'agreements' || activeSection === 'testimonials') ? 'hover:text-[#6a4220]' : 'hover:text-[#f5c75b]'}`}
                >
                  {link.name}
                </Link>
              )}
              {/* Mobile Underlining */}
              <span className={`absolute -bottom-1 left-0 w-0 h-[2.5px] ${(activeSection === 'home' || activeSection === 'agreements' || activeSection === 'testimonials') ? 'bg-[#6a4220]' : 'bg-[#f5c75b]'} transition-all duration-300 group-hover:w-full`}></span>
            </div>
          ))}
        </div>
      )}
    </motion.nav>
  );
}