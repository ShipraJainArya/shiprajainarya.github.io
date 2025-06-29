'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import DoorstepAgreements from '../components/DoorstepAgreements';
import HomeServices from '../components/HomeServices';
import ContactUs from '../components/ContactUs';


export default function Home() {
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
    <>
      <Navbar onNavClick={handleNavClick} />
      <div className="pt-40">
        <Hero />
        <DoorstepAgreements />
        <HomeServices />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
