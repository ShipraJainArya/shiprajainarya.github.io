"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[# sale in Mundhwa"
    >
      {/* Watermark (fixed & centered) */}
      <img
        src="/jain-logo.png"
        alt="Jain Realty watermark logo"
        className="fixed top-1/2 left-1/2 w-[400px] md:w-[500px] lg:w-[600px] 
                   -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[2px] 
                   pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2e2119] leading-tight">
            Find Your Dream Home in 
            <span className="text-[#8c6239]"> Mundhwa</span>
          </h1>
          <p className="text-[#5c3a1e] text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            Explore premium properties in Pune’s most promising locations with
            Shipra Realtors. Transparent deals, expert guidance, easy rentals,
            and complete support—from agreements to after-sale services with all
            sources available in-house.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <Link href="/#contact">
              <button className="px-6 py-3 bg-[#2e2119] text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-[#704d2b] transition">
                Get a Free Consultation
              </button>
            </Link>
          </div>

          <h2 className="text-2xl py-2 md:text-3xl font-semibold text-[#2e2119] mt-8">
            Why Choose Us?
          </h2>
          <p className="text-[#5c3a1e] text-base md:text-lg max-w-md mx-auto md:mx-0">
            100% verified listings, personalized consultations, and hassle-free
            home buying experience.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 mb-10 md:mb-0 mr-6 relative z-10 flex justify-end">
          <img
            src="/brown-house.png"
            alt="Premium brown house for sale in Mundhwa Pune"
            className="w-[90%] max-w-[550px] rounded-xl "
          />
        </div>
      </div>
    </section>
  );
}