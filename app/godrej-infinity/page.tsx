'use client';

import { useState } from 'react';
import RentingTools from '../../components/RentingTools';
import Navbar from '../../components/Navbar';


export default function ListingsPage() {
  const [showRenting, setShowRenting] = useState(false);

  const handleNavClick = (section: string) => {
    if (section === 'listings') {
      setShowRenting(true);
      setTimeout(() => {
        const el = document.getElementById('renting-tools');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-40">
      <Navbar onNavClick={handleNavClick}  />
      <RentingTools />
    </div>
  );
}