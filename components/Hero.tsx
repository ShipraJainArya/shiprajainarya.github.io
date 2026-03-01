"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Dosis, Lato } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Monitor scroll to hide the indicator once the user starts moving down the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Switched base highlight from the softer #966b42 to the much richer, deeper #4a3427 for the CTA and cards.

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-[#ecdac0] pt-[130px] md:pt-[150px] pb-24 border-b-2 border-[#d6b78f]/40 ${dosis.className}`}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-bl from-[#f6ead9] to-transparent opacity-90 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#dcb782]/40 to-transparent opacity-80 blur-[120px]" />
      </div>

      {/* Watermark (fixed & centered) */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        src="/jain-logo.png"
        alt="Jain Realty watermark logo"
        className="absolute top-1/2 left-1/2 w-[350px] md:w-[600px] lg:w-[800px] 
                   -translate-x-1/2 -translate-y-1/2 blur-[2px] 
                   pointer-events-none z-0 mix-blend-multiply"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10 w-full gap-12 lg:gap-16 mt-4 md:mt-8">

        {/* Left Side (Text) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-bold text-[#2e2119] leading-[1.15] tracking-tight mb-6 mt-4 drop-shadow-[0_1px_2px_rgba(46,33,25,0.08)]"
          >
            Find Your Dream Home in{" "}
            {/* Darkened the Mundhwa accent slightly to balance with the deeper CTA */}
            <span className="text-[#805a38]">Mundhwa</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-[#4a3427]/95 text-lg md:text-xl font-medium leading-relaxed max-w-[90%] md:max-w-xl mb-10 ${lato.className}`}
          >
            Explore premium properties in Pune’s most promising locations with
            Shipra Realtors. Transparent deals, expert guidance, easy rentals,
            and complete support—from agreements to after-sale services with all
            sources available in-house.
          </motion.p>

          {/* CTA Button Using Richer, Darker Brown #4a3427 */}
          <motion.div variants={itemVariants} className="mb-14">
            <Link href="/#contact">
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#4a3427] text-[#f6ead9] text-lg lg:text-xl font-bold tracking-wide shadow-[0_8px_20px_rgba(74,52,39,0.3)] hover:bg-[#3d281a] hover:shadow-[0_12px_25px_rgba(74,52,39,0.4)] hover:-translate-y-1 transition-all duration-300 group border border-[#3d281a]">
                Get a Free Consultation
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </motion.div>

          {/* Info Card - Deep Espresso / Rich Brown to match CTA */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-md bg-[#3d281a]/95 border border-[#4a3427] rounded-[2rem] shadow-[0_15px_35px_rgba(74,52,39,0.25)] px-6 py-6 md:px-8 md:py-8 transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden group"
          >
            {/* Subtle glassy gradient overlay to add luxury */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/10 to-transparent pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#ecdac0]/10 border border-[#ecdac0]/20 flex items-center justify-center shadow-inner group-hover:bg-[#ecdac0]/15 transition-colors">
                <svg className="w-5 h-5 text-[#ecdac0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.766L6.643 12.8 10.823 17 18.356 9.467l-1.414-1.414-6.119 6.087z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide text-[#ecdac0]">
                Why Choose Us?
              </h2>
            </div>

            <p className={`relative z-10 text-[#f6ead9]/80 font-medium text-base md:text-lg leading-relaxed ${lato.className}`}>
              100% verified listings, personalized consultations, and hassle-free
              home buying experience.
            </p>
          </motion.div>

        </motion.div>

        {/* Right Side (Image Area) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[45%] relative z-10 flex flex-col items-center justify-center mt-8 md:mt-0"
        >
          <div className="relative group w-full max-w-[480px] lg:max-w-[550px]">
            {/* Adjusted Offset Frames using deeper brown tones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-[2rem] border-[2px] border-[#805a38]/30 -rotate-3 transition-transform duration-500 group-hover:-rotate-6 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-[2rem] bg-gradient-to-br from-[#dcb782]/40 to-[#ecdac0] opacity-90 blur-xl rotate-6 transition-transform duration-500 group-hover:rotate-12 -z-20"></div>

            <img
              src="/brown-house.png"
              alt="Premium brown house for sale in Mundhwa Pune"
              className="w-full h-auto object-cover rounded-[2rem] shadow-[0_25px_50px_rgba(46,33,25,0.2)] z-10 relative transition-all duration-700 group-hover:scale-[1.03] border-[3px] border-[#f6ead9]"
            />
          </div>
        </motion.div>
      </div>

      {/* Disappearing Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1, y: hasScrolled ? 100 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none z-[100] ${hasScrolled ? 'pointer-events-none' : ''}`}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-[#805a38] font-bold text-sm tracking-[0.2em] uppercase mb-1 drop-shadow-sm">Scroll</p>
          <div className="w-8 h-12 rounded-full border-2 border-[#805a38] flex items-start justify-center p-1 shadow-sm bg-[rgba(236,218,192,0.3)] backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#4a3427]"
            />
          </div>
          <ChevronDown className="text-[#4a3427] mt-1 opacity-70" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}