'use client';

import { useState } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Shipra Realtors — Real Estate & Home Services</title>
        <meta
          name="description"
          content="Find your dream home in Mundhwa with Shipra Realtors. From verified listings to legally registered agreements and home services, we simplify real estate for you."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar onNavClick={handleNavClick} />
      <main className="pt-40">
        <Hero />
        <DoorstepAgreements />
        <HomeServices />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
