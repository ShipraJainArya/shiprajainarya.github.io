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
        <title>
          Shipra Realtors | Real Estate Consultants in Keshav Nagar & Mundwha (Buy/Sell/Rent)
        </title>
        <meta
          name="description"
          content="Shipra Realtors is your trusted real estate consultancy in Keshav Nagar Mundhwa near Kharadi. We specialize in flats for rent and sale across top societies like Godrej Infinity, Florida Riverwalk, Mantra Insignia. From agreements to maintenance and home services, everything is handled directly — no third parties involved."
        />
        <meta
          name="keywords"
          content="Shipra Realtors,
           Keshav Nagar Mundhwa flats, 
           Godrej Infinity,
           Florida Riverwalk, 
           Mantra Insignia,
           Kharadi flats, 
           Mundhwa real estate, 
           flat rentals Mundhwa, 
           flat sales Keshav Nagar, 
           doorstep agreements Pune, 
           property maintenance Pune,
           real estate agency Pune, 
           real estate keshav nagar mundhwa,
           buy sale keshav nagar mundhwa,
           rent keshav nagar"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Shipra Realtors" />
        <meta property="og:title" content="Shipra Realtors — Real Estate & Home Services in Keshav Nagar Mundhwa" />
        <meta
          property="og:description"
          content="Buy, sell, or rent flats in Keshav Nagar Mundhwa & Kharadi with Shipra Realtors. From verified rentals and sales to agreements and maintenance, all handled seamlessly under one roof."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
      </Head>

      <Navbar onNavClick={handleNavClick} />
      <main className="pt-40">
        {/* Hero section introduces agency and target areas */}
        <Hero />

        {/* Section for agreements (legal, rental, sales) */}
        <DoorstepAgreements />

        {/* Section for flat maintenance, fittings, plumbing, electricians */}
        <HomeServices />

        {/* Contact form / details */}
        <ContactUs />

        <Footer />
      </main>
    </>
  );
}