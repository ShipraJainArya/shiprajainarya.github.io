'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Dosis } from 'next/font/google';

const montser = Dosis({
  subsets: ['latin'],
  weight: ['400', '600'],
});

type NavbarProps = {
  onNavClick: (section: string) => void;
};

export default function Navbar({ onNavClick }: NavbarProps) {
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Color change threshold
      if (currentY > 30) setScrolled(true);
      else setScrolled(false);

      // Hide/show nav based on scroll direction
      if (currentY > lastScrollY && currentY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        onNavClick(section);
      }, 400);
    } else {
      onNavClick(section);
    }
  };

  return (
    <nav
      className={`${montser.className} fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-[#e1c08d]/90 shadow-md' : 'bg-transparent'} backdrop-blur`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-8">
        <div className="text-6xl font-bold text-[#5c3a1e] mt-2">
          Shipra Realtors
        </div>
        <div className="text-4xl space-x-8 text-[#5c3a1e] font-medium hidden md:flex mt-3">
          <a
            onClick={() => handleNavClick('home')}
            className="cursor-pointer hover:text-[#8c6239] transition"
          >
            Home
          </a>
          <a href="#about" className="hover:text-[#8c6239] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#8c6239] transition">
            Contact
          </a>
          <a href="/godrej-infinity" className="hover:text-[#8c6239] transition">
            Godrej Infinity
          </a>
        </div>
      </div>
    </nav>
  );
}