"use client";

import { motion, Variants } from "framer-motion";
import { Dosis } from "next/font/google";
import { Download, Phone, Shield, User, Info } from "lucide-react";

// Use Dosis from the root layout or redefine locally to match the brand
const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function RentingTools() {
  return (
    <section
      id="renting-tools"
      className={`relative min-h-screen py-32 bg-[#e1c08d] text-[#2e2119] ${dosis.className} overflow-hidden`}
    >
      {/* Background Decor & Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,199,91,0.2),_transparent_50%))] z-0" />
      <img
        src="/jain-logo.png"
        alt="Shipra Realtors Watermark"
        className="fixed top-1/2 left-1/2 w-[500px] md:w-[700px] opacity-10 blur-[3px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 mix-blend-multiply"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column: Mission & Download */}
        <motion.div variants={itemVariants} className="pt-6">
          <p className="inline-block px-4 py-1.5 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase bg-[#2b1c13] text-[#f5c75b] rounded-full shadow-md mb-8">
            Godrej Infinity Hub
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[800] tracking-tight leading-tight mb-8">
            Rental Tools <br className="hidden md:block" />
            <span className="text-[#805a38]">& Downloads</span>
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed text-[#5c3e26] mb-12 max-w-xl">
            Start your Godrej Infinity rental process with absolute clarity. Download your essential society documents and proceed with confidence knowing you have all the necessary official forms.
          </p>

          <motion.a
            href="/docs/undertaking-form.pdf"
            download
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 rounded-2xl bg-[#2b1c13] text-[#f5eee3] font-semibold text-lg hover:text-[#f5c75b] hover:shadow-[0_15px_30px_rgba(43,28,19,0.3)] transition-all overflow-hidden"
          >
            {/* Download Button Shine */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out z-0"></span>

            <span className="relative z-10">Tap to Download Undertaking Form</span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-[#f5c75b]/20 flex items-center justify-center group-hover:bg-[#f5c75b]/30 transition-colors">
              <Download strokeWidth={2.5} className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.a>
        </motion.div>

        {/* Right Column: Speed Dial Directory */}
        <motion.div variants={itemVariants} className="lg:pl-8">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-2xl bg-[#f5eee3]/40 border border-[#805a38]/20 backdrop-blur-sm shadow-sm">
            <Phone strokeWidth={2} className="w-6 h-6 text-[#805a38]" />
            <h3 className="text-2xl font-bold tracking-wide text-[#2e2119]">Your Speed Dial</h3>
          </div>

          <div className="space-y-6">
            {/* Card 1: Founder */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="relative overflow-hidden group bg-gradient-to-br from-[#2e2119] via-[#3b291d] to-[#1a110c] p-7 md:p-8 rounded-[2rem] shadow-xl border border-[#f0e0c2]/20 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,17,12,0.4)] hover:border-[#f5c75b]/30"
            >
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_rgba(245,199,91,0.4),_transparent_60%)] group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f5eee3]/10 border border-[#f5c75b]/30 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#f5c75b]/20 transition-all duration-500">
                  <User className="w-7 h-7 text-[#f5c75b]" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wider text-[#f5c75b] uppercase mb-1">Founder & Chief Consultant</p>
                  <p className="text-2xl font-bold text-[#f5eee3] mb-3">Shipra Jain Arya</p>
                  <a href="tel:+919711909677" className="inline-flex items-center gap-2 text-lg text-[#e0d4c2] hover:text-[#f5c75b] transition-colors underline-offset-4 hover:underline">
                    +91 97119 09677
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Security Office */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="relative overflow-hidden group bg-gradient-to-br from-[#2e2119] via-[#3b291d] to-[#1a110c] p-7 md:p-8 rounded-[2rem] shadow-xl border border-[#f0e0c2]/20 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,17,12,0.4)] hover:border-[#f5c75b]/30"
            >
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_rgba(245,199,91,0.4),_transparent_60%)] group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f5eee3]/10 border border-[#f5c75b]/30 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#f5c75b]/20 transition-all duration-500">
                  <Shield className="w-7 h-7 text-[#f5c75b]" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wider text-[#f5c75b] uppercase mb-1">Move-in Queries & Clearances</p>
                  <p className="text-2xl font-bold text-[#f5eee3] mb-3">Security Office</p>
                  <a href="tel:+919172224307" className="inline-flex items-center gap-2 text-lg text-[#e0d4c2] hover:text-[#f5c75b] transition-colors underline-offset-4 hover:underline">
                    +91 91722 24307
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Help Desk */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="relative overflow-hidden group bg-gradient-to-br from-[#2e2119] via-[#3b291d] to-[#1a110c] p-7 md:p-8 rounded-[2rem] shadow-xl border border-[#f0e0c2]/20 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,17,12,0.4)] hover:border-[#f5c75b]/30"
            >
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_rgba(245,199,91,0.4),_transparent_60%)] group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f5eee3]/10 border border-[#f5c75b]/30 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#f5c75b]/20 transition-all duration-500">
                  <Info className="w-7 h-7 text-[#f5c75b]" />
                </div>
                <div className="w-full">
                  <p className="text-sm font-semibold tracking-wider text-[#f5c75b] uppercase mb-1">Shifting In or Out?</p>
                  <p className="text-xl md:text-2xl font-bold text-[#f5eee3] mb-5">Society Directory</p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-black/20 border border-white/5 hover:bg-black/40 transition-colors">
                      <p className="text-sm text-[#f5c75b] font-medium mb-1">Help Desk</p>
                      <a href="mailto:helpdesk@infinitychs.in" className="text-lg text-[#e0d4c2] hover:text-white transition-colors truncate block">helpdesk@infinitychs.in</a>
                    </div>
                    <div className="p-4 rounded-xl bg-black/20 border border-white/5 hover:bg-black/40 transition-colors">
                      <p className="text-sm text-[#f5c75b] font-medium mb-1">Property Manager</p>
                      <a href="mailto:propertymanager@infinitychs.in" className="text-lg text-[#e0d4c2] hover:text-white transition-colors truncate block">propertymanager@infinitychs.in</a>
                    </div>
                    <div className="p-4 rounded-xl bg-black/20 border border-white/5 hover:bg-black/40 transition-colors">
                      <p className="text-sm text-[#f5c75b] font-medium mb-1">Managing Committee (MC)</p>
                      <a href="mailto:mc@infinitychs.in" className="text-lg text-[#e0d4c2] hover:text-white transition-colors truncate block">mc@infinitychs.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}